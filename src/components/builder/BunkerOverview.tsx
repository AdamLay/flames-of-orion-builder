import { useBunkerStore } from "@/lib/bunkerStore";
import { BUNKER_STARTING_CREDITS, calculateMechCost, formatCredits } from "@/lib/game-data";
import { getTotalMechs } from "@/lib/utils";
import BunkerName from "./BunkerName";

export default function BunkerOverview() {
  const { bunker, mechs } = useBunkerStore();

  const getSpentCredits = (): number => {
    return mechs.reduce((sum, mech, index) => sum + calculateMechCost(mech, index), 0);
  };

  const getAvailableCredits = (): number => {
    return BUNKER_STARTING_CREDITS - getSpentCredits();
  };
  const getUsedBayCount = () => {
    return bunker.bays.filter((bay) => bay.content !== null).length;
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4 text-center">
      <div className="bg-base-200 p-2 rounded col-span-2">
        <div className="text-primary font-bold text-sm">BUNKER NAME</div>
        <BunkerName />
        {/* <div className="text-title text-xl font-bold">{bunker.name}</div> */}
      </div>
      <div className="bg-base-200 p-2 rounded">
        <div className="text-primary font-bold text-sm">CREDITS</div>
        <div className="text-title text-2xl font-bold text-accent">
          {formatCredits(getAvailableCredits())}
        </div>
      </div>
      <div className="bg-base-200 p-2 rounded">
        <div className="text-primary font-bold text-sm">MECHS</div>
        <div className="text-title text-3xl font-bold">{getTotalMechs(bunker)}</div>
      </div>

      <div className="bg-base-200 p-2 rounded">
        <div className="text-primary font-bold text-sm">USED BAYS</div>
        <div className="text-title text-2xl font-bold">
          {getUsedBayCount()}/{bunker.bays.length}
        </div>
      </div>
    </div>
  );
}
