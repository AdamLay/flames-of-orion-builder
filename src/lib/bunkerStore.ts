import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { BASE_MECH_COST, BASE_MECH_STATS, Bunker, Mech, createEmptyBunker } from "./game-data";
import { saveToLocalStorage } from "./utils";
export type BunkerStoreState = {
  bunker: Bunker;
  mechs: Mech[]; // All mechs owned by the player
};

type BunkerStoreActions = {
  initializeBunker: () => void;

  // Mech management
  addMech: () => void;
  updateMech: (mechId: string, updatedMech: Mech) => void;
  removeMech: (mechId: string) => void;
  setMechs: (mechs: Mech[]) => void;

  // Bay management
  addMechToBunker: (mech: Mech, bayId: string) => boolean;
  removeMechFromBunker: (bayId: string, mechId: string) => void;

  // Credit management
  updateBunkerCredits: (amount: number) => void;
  setBunker: (bunker: Bunker) => void;
  loadState: (state: BunkerStoreState) => void;
};
type BunkerStore = BunkerStoreState & BunkerStoreActions;

export const useBunkerStore = create<BunkerStore>()(
  subscribeWithSelector((set, get) => {
    const withUpdateModified = (state: Partial<BunkerStore>): Partial<BunkerStore> => {
      return {
        ...state,
        bunker: {
          ...state.bunker,
          modifiedAt: new Date().toISOString(),
        } as Bunker,
      };
    };

    return {
      bunker: createEmptyBunker(),
      mechs: [],

      initializeBunker: () => {
        set({
          bunker: createEmptyBunker(),
          mechs: [],
        });
      },

      // Mech management methods
      addMech: () => {
        set((state) => {
          const newMech: Mech = {
            id: `mech-${Date.now()}`,
            callSign: `Mech ${state.mechs.length + 1}`,
            baseCost: BASE_MECH_COST,
            frameType: "medium",
            stats: { ...BASE_MECH_STATS },
            upgrades: [],
            rangedWeapons: [],
            meleeWeapons: [],
            weaponAmmo: {},
          };
          return withUpdateModified({ mechs: [...state.mechs, newMech] });
        });
      },

      updateMech: (mechId: string, updatedMech: Mech) => {
        set((state) => {
          const newMechs = state.mechs.map((m) => (m.id === mechId ? updatedMech : m));

          // Also update the mech in bunker bays
          const newBunker = { ...state.bunker };
          newBunker.bays = newBunker.bays.map((bay) => {
            if (bay.content?.type === "mech" && bay.content.ids.includes(mechId)) {
              return bay; // Bay content still references the mech, data is in mechs array
            }
            return bay;
          });

          return withUpdateModified({ mechs: newMechs, bunker: newBunker });
        });
      },

      removeMech: (mechId: string) => {
        set((state) => {
          const newMechs = state.mechs.filter((m) => m.id !== mechId);

          // Remove from bays
          const newBunker = { ...state.bunker };
          newBunker.bays = newBunker.bays.map((bay) => {
            if (bay.content?.type === "mech") {
              const filteredIds = bay.content.ids.filter((id) => id !== mechId);
              if (filteredIds.length === 0) {
                return { ...bay, content: null };
              }
              return {
                ...bay,
                content: { ...bay.content, ids: filteredIds },
              };
            }
            return bay;
          });

          return withUpdateModified({ mechs: newMechs, bunker: newBunker });
        });
      },

      setMechs: (mechs: Mech[]) => set(withUpdateModified({ mechs })),

      // Bay management methods
      addMechToBunker: (mech: Mech, bayId: string) => {
        const state = get();
        const bay = state.bunker.bays.find((b) => b.id === bayId);

        if (!bay) return false;

        set((state) => {
          const newBunker = { ...state.bunker };
          const targetBay = newBunker.bays.find((b) => b.id === bayId);

          if (!targetBay) return state;

          if (targetBay.content === null) {
            targetBay.content = {
              type: "mech",
              ids: [mech.id],
            };
          } else if (targetBay.content.type === "mech") {
            // Only add if not already in this bay
            if (!targetBay.content.ids.includes(mech.id)) {
              targetBay.content.ids.push(mech.id);
            }
          }

          // Add mech to mechs list if not already there
          const mechExists = state.mechs.some((m) => m.id === mech.id);
          const newMechs = mechExists ? state.mechs : [...state.mechs, mech];

          return withUpdateModified({ bunker: newBunker, mechs: newMechs });
        });

        return true;
      },

      removeMechFromBunker: (bayId: string, mechId: string) => {
        set((state) => {
          const newBunker = { ...state.bunker };
          const bay = newBunker.bays.find((b) => b.id === bayId);

          if (bay && bay.content) {
            bay.content.ids = bay.content.ids.filter((id) => id !== mechId);
            if (bay.content.ids.length === 0) {
              bay.content = null;
            }
          }

          return withUpdateModified({ bunker: newBunker });
        });
      },

      // Credit management methods
      updateBunkerCredits: (amount: number) => {
        set((state) =>
          withUpdateModified({
            bunker: {
              ...state.bunker,
              credits: Math.max(0, state.bunker.credits + amount),
            },
          }),
        );
      },

      setBunker: (bunker: Bunker) => set({ bunker }),
      loadState: (state: BunkerStoreState) => set(state),
    };
  }),
);

useBunkerStore.subscribe(
  (state) => state,
  (slice: BunkerStoreState) => {
    console.log("Bunker store updated:", slice);
    saveToLocalStorage(slice);
  },
);
