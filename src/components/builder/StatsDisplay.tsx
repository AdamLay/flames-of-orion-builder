import { MechStats } from "@/lib/game-data";

interface StatsDisplayProps {
  stats: MechStats;
  usedPlatforms: number;
  totalPlatforms: number;
  compact?: boolean;
}

export function StatsDisplay({ stats, usedPlatforms, totalPlatforms, compact }: StatsDisplayProps) {
  return (
    <div
      className={`grid grid-cols-3 sm:grid-cols-5 gap-4 text-center ${compact ? "lg:grid-cols-5" : "lg:grid-cols-6"}`}
    >
      <div className={`bg-base-100 rounded ${compact ? "p-1" : "p-2"}`}>
        <div className="text-primary font-bold text-xs">SPEED</div>
        <div className={`${compact ? "text-xl" : "text-2xl"} text-title`}>{stats.speed}&quot;</div>
      </div>
      <div className={`bg-base-100 rounded ${compact ? "p-1" : "p-2"}`}>
        <div className="text-primary font-bold text-xs">{compact ? "CS" : "COMBAT SKILL"}</div>
        <div className={`${compact ? "text-xl" : "text-2xl"} text-title`}>{stats.combatSkill}</div>
      </div>
      <div className={`bg-base-100 rounded ${compact ? "p-1" : "p-2"}`}>
        <div className="text-primary font-bold text-xs">{compact ? "AR" : "ARMOUR"}</div>
        <div className={`${compact ? "text-xl" : "text-2xl"} text-title`}>{stats.armor}</div>
      </div>
      <div className={`bg-base-100 rounded ${compact ? "p-1" : "p-2"}`}>
        <div className="text-primary font-bold text-xs">{compact ? "HP" : "HULL POINTS"}</div>
        <div className={`${compact ? "text-xl" : "text-2xl"} text-title`}>{stats.hullPoints}</div>
      </div>
      <div className={`bg-base-100 rounded ${compact ? "p-1" : "p-2"}`}>
        <div className="text-primary font-bold text-xs">{compact ? "HEAT" : "HEAT LIMIT"}</div>
        <div className={`${compact ? "text-xl" : "text-2xl"} text-title`}>{stats.heatLimit}</div>
      </div>
      {!compact && (
        <div className="bg-base-100 p-2 rounded">
          <div className="text-primary font-bold text-xs">PLATFORMS</div>
          <div className="text-2xl text-title">
            {usedPlatforms}/{totalPlatforms}
          </div>
        </div>
      )}
    </div>
  );
}
