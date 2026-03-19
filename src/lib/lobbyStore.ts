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

type LobbyStoreActions = {
  setLobbyId: (id: string | null) => void;
  setPlayerName: (name: string) => void;
  setCombatUnits: (combatUnits: LobbyCombatUnit[]) => void;
  addCombatUnit: (combatUnit: LobbyCombatUnit) => void;
  setGameState: (gameState: Partial<GameState>) => void;
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
  setCombatUnits: (combatUnits) => set({ combatUnits }),
  addCombatUnit: (combatUnit) =>
    set((state) => ({
      combatUnits: [...state.combatUnits, combatUnit],
    })),
  setGameState: (gameState) => set({ gameState: { ...get().gameState, ...gameState } }),
}));
