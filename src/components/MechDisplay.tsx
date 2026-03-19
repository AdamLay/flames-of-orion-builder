import {
  calculateModifiedStats,
  calculateTotalPlatforms,
  calculateUsedPlatforms,
  Mech,
  MELEE_WEAPONS,
  RANGED_WEAPONS,
  UPGRADES,
} from "@/lib/game-data";
import { Crosshair, Sword } from "lucide-react";
import { StatsDisplay } from "./builder/StatsDisplay";

interface Props {
  mech: Mech;
}

export default function MechDisplay({ mech }: Props) {
  const upgrades = mech.upgrades.map((x) => UPGRADES.find((u) => u.id === x)!);
  const meleeWeapons = mech.meleeWeapons.map((x) => MELEE_WEAPONS.find((u) => u.id === x)!);
  const rangedWeapons = mech.rangedWeapons.map((x) => RANGED_WEAPONS.find((u) => u.id === x)!);
  const stats = calculateModifiedStats(mech);
  const usedPlatforms = calculateUsedPlatforms(mech);
  const totalPlatforms = calculateTotalPlatforms(mech);
  return (
    <div className="space-y-1">
      <div className="flex justify-between">
        <div className="text-title font-bold">{mech.callSign}</div>
        <p className="text-title text-gray-300 uppercase">
          <span className="text-secondary">{mech.frameType}</span> ({usedPlatforms}/{totalPlatforms}
          )
        </p>
      </div>
      <div className="py-2">
        <StatsDisplay stats={stats} usedPlatforms={0} totalPlatforms={0} compact />
      </div>
      {meleeWeapons.map((weapon) => (
        <div className="flex items-center gap-2">
          <div>
            <Sword size={18} />
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <div className="text-accent text-sm font-bold flex gap-1 items-center">
                {weapon.name}
              </div>
            </div>
            <div className="text-xs">
              DMG: {weapon.damage} {weapon.range ? ` | RNG: ${weapon.range}` : ""}{" "}
              {weapon.special ? " | " : ""}
              <span className="text-xs text-gray-400">{weapon.special}</span>
            </div>
          </div>
        </div>
      ))}
      {rangedWeapons.map((weapon) => (
        <div className="flex items-center gap-2">
          <div>
            <Crosshair size={16} />
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <div className="text-accent text-sm font-bold flex gap-1 items-center">
                {weapon.name}
              </div>
            </div>
            <div className="text-xs">
              DMG: {weapon.damage} | RNG: {weapon.maxRange ? weapon.maxRange : "∞"}{" "}
              {weapon.special ? " | " : ""}
              <span className="text-xs text-gray-400">{weapon.special}</span>
            </div>
          </div>
        </div>
      ))}
      <hr className="my-2" />
      {upgrades.map((x) => (
        <p key={x.id} className="text-sm text-gray-300">
          <span className="font-bold">{x.name}</span>: {x.description}
        </p>
      ))}
    </div>
  );
}
