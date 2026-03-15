import { useBunkerStore } from "@/lib/bunkerStore";
import { BUNKER_STARTING_CREDITS, Mech, formatCredits } from "@/lib/game-data";

export default function EmptyBunker() {
  const { bunker, addMechToBunker } = useBunkerStore();
  const handleCreateStartingMechs = () => {
    // Create 4 starting mechs
    const newMech: Mech = {
      id: `mech-${Date.now()}-1`,
      callSign: `Mech 1`,
      baseCost: 0,
      frameType: "medium" as const,
      stats: {
        speed: 6,
        combatSkill: "4+",
        armor: "6+",
        hullPoints: 6,
        heatLimit: 10,
        platforms: 4,
      },
      upgrades: [],
      rangedWeapons: [],
      meleeWeapons: [],
      weaponAmmo: {},
    };

    addMechToBunker(newMech, bunker.bays[0]?.id);
  };

  return (
    <div className="card-1 p-12 text-center">
      <div className="text-gray-400 text-lg mb-4">
        Start with 4 free Mechs. Customize them with your {formatCredits(BUNKER_STARTING_CREDITS)}!
      </div>
      <button onClick={handleCreateStartingMechs} className="btn btn-success self-center">
        + Add Starting Mech
      </button>
    </div>
  );
}
