import { nanoid } from "nanoid";
import { create } from "zustand";

export type LobbyCombatUnit = { player: { id: string; name: string }; units: any[] };

export type LobbyStoreState = {
  lobbyId: string | null;
  playerId: string;
  playerName: string;
  combatUnits: LobbyCombatUnit[];
  gameState: GameState;
};

export type GameState = {
  round: number;
};

type SyncActionOptions = {
  broadcast?: boolean;
};

export type LobbySyncActionMap = {
  setCombatUnits: LobbyCombatUnit[];
  addCombatUnit: LobbyCombatUnit;
  setGameState: Partial<GameState>;
};

export type LobbySyncAction = {
  [K in keyof LobbySyncActionMap]: { type: K; payload: LobbySyncActionMap[K] };
}[keyof LobbySyncActionMap];

type LobbySyncEmitter = (action: LobbySyncAction) => void;

let lobbySyncEmitter: LobbySyncEmitter | null = null;

export function setLobbySyncEmitter(emitter: LobbySyncEmitter | null) {
  lobbySyncEmitter = emitter;
}

type LobbyStoreActions = {
  setLobbyId: (id: string | null) => void;
  setPlayerName: (name: string) => void;
  setCombatUnits: (combatUnits: LobbyCombatUnit[], options?: SyncActionOptions) => void;
  addCombatUnit: (combatUnit: LobbyCombatUnit, options?: SyncActionOptions) => void;
  setGameState: (gameState: Partial<GameState>, options?: SyncActionOptions) => void;
  applySyncAction: (action: LobbySyncAction) => void;
};
type LobbyStore = LobbyStoreState & LobbyStoreActions;

export const useLobbyStore = create<LobbyStore>()((set, get) => ({
  lobbyId: null,
  playerId: (localStorage["playerId"] as string) || (localStorage["playerId"] = nanoid()),
  playerName: (localStorage["playerName"] as string) || "",
  combatUnits: [],
  gameState: {
    round: 1,
  },

  setLobbyId: (id) => set({ lobbyId: id }),
  setPlayerName: (name) => {
    localStorage["playerName"] = name;
    set({ playerName: name });
  },
  setCombatUnits: (combatUnits, options) => {
    set({ combatUnits });
    if (options?.broadcast !== false) {
      lobbySyncEmitter?.({ type: "setCombatUnits", payload: combatUnits });
    }
  },
  addCombatUnit: (combatUnit, options) => {
    set((state) => ({
      combatUnits: [...state.combatUnits, combatUnit],
    }));
    if (options?.broadcast !== false) {
      lobbySyncEmitter?.({ type: "addCombatUnit", payload: combatUnit });
    }
  },
  setGameState: (gameState, options) => {
    set({ gameState: { ...get().gameState, ...gameState } });
    if (options?.broadcast !== false) {
      lobbySyncEmitter?.({ type: "setGameState", payload: gameState });
    }
  },
  applySyncAction: (action) => {
    if (action.type === "setCombatUnits") {
      get().setCombatUnits(action.payload, { broadcast: false });
      return;
    } else if (action.type === "addCombatUnit") {
      get().addCombatUnit(action.payload, { broadcast: false });
      return;
    } else if (action.type === "setGameState") {
      get().setGameState(action.payload, { broadcast: false });
      return;
    }
  },
}));
