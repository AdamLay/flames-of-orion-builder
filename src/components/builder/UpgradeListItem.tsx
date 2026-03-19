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
          <div className="text-secondary font-bold flex gap-1 items-center mb-1">
            {<upgrade.icon size={16} />}
            {upgrade.name}
          </div>
          <div className="">
            {formatCredits(upgrade.cost)}
            {upgrade.platformSlots !== 1 && <span> • {upgrade.platformSlots || "No"} PF</span>}
          </div>
        </div>
        {onRemove && (
          <button onClick={onRemove} className="btn btn-sm btn-square btn-error btn-soft">
            <Trash2 className="size-4" />
          </button>
        )}
      </div>
      <div className="opacity-80 text-sm mt-1">{upgrade.description}</div>
    </div>
  );
}
