import { env } from "@/env/client";
import {
  LobbyStoreState,
  LobbySyncAction,
  setLobbySyncEmitter,
  useLobbyStore,
} from "@/lib/lobbyStore";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export interface PlayerSocket {
  socketId: string;
  playerId: string;
}

export interface JoinData {
  lobbyId: string;
  lobbyHost: PlayerSocket;
  lobbyClients: PlayerSocket[];
}

export interface LobbyDispatchEvent {
  sourcePlayerId: string;
  action: LobbySyncAction;
}

const socketUrl = env.VITE_LOBBY_URL;

export const Events = {
  host: "host",
  host_reconnect: "host_reconnect",
  client_reconnect: "client_reconnect",
  client_inquire: "client_inquire",
  client_inquire_ack: "client_inquire_ack",
  client_join: "client_join",
  client_join_ack: "client_join_ack",
  client_joined: "client_joined",
  lobby_dispatch: "lobby_dispatch",
};

var socket: Socket | null = null;

export function useGameLobby() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (socket?.active) {
      if (!loaded) setLoaded(true);
      return;
    }

    const skt = (socket = io(socketUrl));

    setLobbySyncEmitter((action) => {
      console.log("Broadcasting lobby action:", action);
      const { lobbyId, playerId } = useLobbyStore.getState();
      if (!lobbyId) return;

      const lobbyDispatch: LobbyDispatchEvent = {
        sourcePlayerId: playerId,
        action,
      };

      skt.emit(Events.lobby_dispatch, lobbyId, lobbyDispatch);
    });

    skt.onAny((...args: any[]) => {
      console.log("%c Event", "color: #BB86FC;", args);
    });

    skt.onAnyOutgoing((...args: any[]) => {
      console.log("%c Emit", "color: #03DAC5;", args);
    });

    // Someone is asking if this lobby exists
    skt.on(Events.client_inquire, (lobbyId) => {
      // let them know that the lobby exists and send the current lobby state
      skt.emit(Events.client_inquire_ack, lobbyId, useLobbyStore.getState());
    });

    // Player has joined and has sent their combat unit data
    skt.on(Events.client_join, (socketId: string, combatUnit: any) => {
      if (skt.id === socketId) return; // Ignore if this is our own join request

      // Add the new player's combat unit to our store
      useLobbyStore.getState().addCombatUnit(combatUnit, { broadcast: false });

      // Let the player know we have recd the join request and updated the lobby state
      skt.emit(Events.client_join_ack, socketId, useLobbyStore.getState());
    });

    // Every other client in the lobby will send us their lobby state
    skt.on(Events.client_join_ack, (lobbyState: LobbyStoreState) => {
      const myPlayerId = useLobbyStore.getState().playerId;
      const remoteCombatUnits = lobbyState.combatUnits.filter((x) => x.player.id !== myPlayerId);

      const myCombatUnits = useLobbyStore
        .getState()
        .combatUnits.filter((x) => x.player.id === myPlayerId);

      const state = useLobbyStore.getState();
      state.setCombatUnits([...myCombatUnits, ...remoteCombatUnits], {
        broadcast: false,
      });
      state.setGameState(lobbyState.gameState, { broadcast: false });

      // We'll receive one of these from every other client in the lobby when we join
      console.log("Client join ack recd:", lobbyState);
    });

    skt.on(Events.lobby_dispatch, (event: LobbyDispatchEvent) => {
      console.log("Lobby dispatch recd:", event);
      const { playerId, applySyncAction } = useLobbyStore.getState();

      if (event.sourcePlayerId === playerId) return;

      applySyncAction(event.action);
    });

    setLoaded(true);

    return () => {
      setLobbySyncEmitter(null);
    };
  }, []);

  return { socket, loaded };
}
