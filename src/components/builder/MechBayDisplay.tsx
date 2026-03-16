import {
  calculateMechCost,
  formatCredits,
  Mech,
  MELEE_WEAPONS,
  RANGED_WEAPONS,
  UPGRADES,
} from "@/lib/game-data";
import { Crosshair, Sword } from "lucide-react";

interface MechBayDisplayProps {
  mech: Mech;
  index: number;
}

export default function MechBayDisplay({ mech, index }: MechBayDisplayProps) {
  const upgrades = mech.upgrades.map((x) => UPGRADES.find((u) => u.id === x));
  const meleeWeapons = mech.meleeWeapons.map((x) => MELEE_WEAPONS.find((u) => u.id === x));
  const rangedWeapons = mech.rangedWeapons.map((x) => RANGED_WEAPONS.find((u) => u.id === x));
  const cost = calculateMechCost(mech, index);
  return (
    <div className="space-y-1">
      <div className="flex justify-between">
        <div className="text-title font-bold">{mech.callSign}</div>
        <p className="text-title text-gray-300 uppercase">{mech.frameType}</p>
      </div>
      <p className="text-xs font-bold text-gray-300">{formatCredits(cost)}</p>
      {meleeWeapons.length > 0 && (
        <p className="flex text-sm text-gray-300 gap-2">
          <Sword size={18} strokeWidth={2.5} /> {meleeWeapons.map((x) => x?.name).join(", ")}
        </p>
      )}
      {rangedWeapons.length > 0 && (
        <p className="flex text-sm text-gray-300 gap-2">
          <Crosshair size={18} strokeWidth={2.5} /> {rangedWeapons.map((x) => x?.name).join(", ")}
        </p>
      )}
      <p className="text-sm text-gray-300">{upgrades.map((x) => x?.name).join(", ")}</p>
    </div>
  );
}
