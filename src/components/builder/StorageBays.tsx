import { useBunkerStore } from "@/lib/bunkerStore";
import { BAY_CAPACITY, Mech } from "@/lib/game-data";
import { getTotalMechs } from "@/lib/utils";

interface StorageBaysProps {
  selectedBayId: string | null;
  setSelectedBayId: (bayId: string | null) => void;
}

export default function StorageBays({ selectedBayId, setSelectedBayId }: StorageBaysProps) {
  const { bunker, mechs, addMechToBunker } = useBunkerStore();
  //const [selectedBay, setSelectedBay] = useState<string | null>(null);
  const getBayCapacityDisplay = (bayIndex: number): string => {
    const bay = bunker.bays[bayIndex];
    if (bay.content === null) {
      return "Empty";
    }
    const capacity = BAY_CAPACITY[bay.content.type];
    const used = bay.content.ids.length;
    return `${used}/${capacity}`;
  };

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-2 text-primary">STORAGE BAYS</h2>

      <div className="card-1 mb-4 bg-opacity-50 border-l-4 border-primary">
        <p className="text-xs text-gray-400">
          Bay Capacity: You may store 1 Mech, or 2 ground vehicles, 2 aircraft, or 3 infantry in
          each bay
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {bunker.bays.map((bay, index) => (
          <div
            key={bay.id}
            onClick={() => setSelectedBayId(selectedBayId === bay.id ? null : bay.id)}
            className={`card-1 p-4 cursor-pointer transition-all ${
              selectedBayId === bay.id ? "ring-2 ring-primary" : ""
            } ${bay.content ? "bg-opacity-60" : "bg-opacity-30"}`}
          >
            <div className="flex justify-between items-start mb-2">
              <div className="font-bold text-primary">BAY {index + 1}</div>
              <div className="text-sm font-mono text-gray-400">{getBayCapacityDisplay(index)}</div>
            </div>

            {bay.content ? (
              (() => {
                const content = mechs.find((x) => x.id === bay.content?.ids[0]);
                return (
                  <div className="space-y-2">
                    <div className="text-sm font-bold capitalize">
                      {bay.content.type.replace("-", " ")}:{" "}
                      {content ? content.callSign : "Multiple Units"}
                    </div>
                    <div className="text-xs text-gray-400">
                      {bay.content.ids.length} unit{bay.content.ids.length !== 1 ? "s" : ""} stored
                    </div>
                  </div>
                );
              })()
            ) : (
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-xs text-gray-500 italic">Bay is empty</div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const newMech: Mech = {
                      id: `mech-${Date.now()}`,
                      callSign: `Mech ${getTotalMechs(bunker) + 1}`,
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
                    addMechToBunker(newMech, bay.id);
                  }}
                  className="btn btn-sm btn-success self-center"
                >
                  + Add Mech
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
