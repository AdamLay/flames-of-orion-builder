import React from "react";
import { Upgrade, formatCredits } from "@/lib/game-data";
import { Trash2 } from "lucide-react";

interface UpgradeListItemProps {
  upgrade: Upgrade;
  onRemove?: () => void;
}

export function UpgradeListItem({ upgrade, onRemove }: UpgradeListItemProps) {
  return (
    <div className="card-small text-sm">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="text-primary font-bold">{upgrade.name}</div>
          <div className="text-xs">
            {formatCredits(upgrade.cost)}
            {upgrade.platformSlots === 0 && " (No PF)"}
            {upgrade.platformSlots && upgrade.platformSlots > 1 && ` (${upgrade.platformSlots} PF)`}
          </div>
        </div>
        {onRemove && (
          <button onClick={onRemove} className="btn btn-sm btn-square btn-error btn-soft">
            <Trash2 className="size-4" />
          </button>
        )}
      </div>
      <div className="opacity-80 text-xs mt-1">{upgrade.description}</div>
    </div>
  );
}
