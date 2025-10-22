import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Mech, BASE_MECH_COST, BASE_MECH_STATS } from "./game-data";

interface MechStoreState {
  mechs: Mech[];
  addMech: () => void;
  updateMech: (index: number, updatedMech: Mech) => void;
  removeMech: (index: number) => void;
  setMechs: (mechs: Mech[]) => void;
}

export const useMechStore = create<MechStoreState>()(
  persist(
    (set) => ({
      mechs: [],
      addMech: () =>
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
          return { mechs: [...state.mechs, newMech] };
        }),
      updateMech: (index: number, updatedMech: Mech) =>
        set((state) => {
          const newMechs = [...state.mechs];
          newMechs[index] = updatedMech;
          return { mechs: newMechs };
        }),
      removeMech: (index: number) =>
        set((state) => {
          const newMechs = [...state.mechs];
          newMechs.splice(index, 1);
          return { mechs: newMechs };
        }),
      setMechs: (mechs: Mech[]) => set({ mechs }),
    }),
    {
      name: "mech-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
