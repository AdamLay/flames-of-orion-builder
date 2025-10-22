import React from "react";
import { MechStats } from "@/lib/game-data";

interface StatsDisplayProps {
  stats: MechStats;
  usedPlatforms: number;
  totalPlatforms: number;
}

export function StatsDisplay({ stats, usedPlatforms, totalPlatforms }: StatsDisplayProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
      <div className="bg-base-100 p-2 rounded">
        <div className="text-primary font-bold text-xs">SPEED</div>
        <div className="text-2xl text-title">{stats.speed}&quot;</div>
      </div>
      <div className="bg-base-100 p-2 rounded">
        <div className="text-primary font-bold text-xs">COMBAT SKILL</div>
        <div className="text-2xl text-title">{stats.combatSkill}</div>
      </div>
      <div className="bg-base-100 p-2 rounded">
        <div className="text-primary font-bold text-xs">ARMOR</div>
        <div className="text-2xl text-title">{stats.armor}</div>
      </div>
      <div className="bg-base-100 p-2 rounded">
        <div className="text-primary font-bold text-xs">HULL POINTS</div>
        <div className="text-2xl text-title">{stats.hullPoints}</div>
      </div>
      <div className="bg-base-100 p-2 rounded">
        <div className="text-primary font-bold text-xs">HEAT LIMIT</div>
        <div className="text-2xl text-title">{stats.heatLimit}</div>
      </div>
      <div className="bg-base-100 p-2 rounded">
        <div className="text-primary font-bold text-xs">PLATFORMS</div>
        <div className="text-2xl text-title">
          {usedPlatforms}/{totalPlatforms}
        </div>
      </div>
    </div>
  );
}
