import { env } from "@/env/client";
import { LobbyStoreState, useLobbyStore } from "@/lib/lobbyStore";
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
      useLobbyStore.setState((state) => ({
        ...state,
        combatUnits: [...state.combatUnits, combatUnit],
      }));

      // Let the player know we have recd the join request and updated the lobby state
      skt.emit(Events.client_join_ack, socketId, useLobbyStore.getState());
    });

    // Every other client in the lobby will send us their lobby state
    skt.on(Events.client_join_ack, (lobbyState: LobbyStoreState) => {
      const myPlayerId = useLobbyStore.getState().playerId;
      const remoteCombatUnits = lobbyState.combatUnits.filter((x) => x.player.id !== myPlayerId);
      useLobbyStore.setState((state) => ({
        ...state,
        combatUnits: [
          ...state.combatUnits.filter((x) => x.player.id === myPlayerId),
          ...remoteCombatUnits,
        ],
      }));
      // We'll receive one of these from every other client in the lobby when we join
      console.log("Client join ack recd:", lobbyState);
    });

    setLoaded(true);
  }, []);

  return { socket, loaded };
}
