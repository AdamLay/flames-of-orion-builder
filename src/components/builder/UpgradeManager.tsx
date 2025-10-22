import React, { useState } from "react";
import { UPGRADES, getUpgradeById } from "@/lib/game-data";
import { UpgradeListItem } from "./UpgradeListItem";

interface Props {
  upgrades: string[];
  onAddUpgrade: (upgradeId: string) => void;
  onRemoveUpgrade: (index: number) => void;
  usedPlatforms: number;
  totalPlatforms: number;
}

export function UpgradeManager({
  upgrades,
  onAddUpgrade,
  onRemoveUpgrade,
  usedPlatforms,
  totalPlatforms,
}: Props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const sparePlatforms = totalPlatforms - usedPlatforms;

  const canAddUpgrade = (upgradeId: string): boolean => {
    const upgrade = getUpgradeById(upgradeId);
    if (!upgrade) return false;

    // Check if upgrade can fit in spare platforms
    const platformsNeeded = upgrade.platformSlots ?? 1;
    return platformsNeeded <= sparePlatforms;
  };

  const canAddUpgrades = UPGRADES.some((upgrade) => canAddUpgrade(upgrade.id));

  const handleSelectUpgrade = (upgradeId: string) => {
    onAddUpgrade(upgradeId);
    setIsDialogOpen(false);
  };

  return (
    <div>
      <h3 className="text-primary font-bold text-lg mb-2">UPGRADES</h3>
      <button
        onClick={() => setIsDialogOpen(true)}
        disabled={!canAddUpgrades}
        className="btn btn-accent btn-sm w-full mb-2 disabled:btn-disabled">
        + Add Upgrade
      </button>

      {/* Available Upgrades Dialog */}
      {isDialogOpen && (
        <dialog open className="modal">
          <div className="modal-box bg-base-200 max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-bold text-primary mb-4">Select Upgrade</h2>
            <div>
              {UPGRADES.map((upgrade) => (
                <button
                  key={upgrade.id}
                  onClick={() => handleSelectUpgrade(upgrade.id)}
                  disabled={!canAddUpgrade(upgrade.id)}
                  className="w-full text-left hover:bg-base-100 rounded p-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent">
                  <UpgradeListItem upgrade={upgrade} />
                </button>
              ))}
            </div>
            <button onClick={() => setIsDialogOpen(false)} className="btn btn-ghost btn-sm mt-4 w-full">
              Close
            </button>
          </div>
        </dialog>
      )}

      {/* Equipped Upgrades */}
      <div className="mb-4 space-y-2">
        {upgrades.map((upgradeId, index) => {
          const upgrade = getUpgradeById(upgradeId);
          if (!upgrade) return null;
          return (
            <UpgradeListItem
              key={`${upgradeId}-${index}`}
              upgrade={upgrade}
              onRemove={() => onRemoveUpgrade(index)}
            />
          );
        })}
      </div>
    </div>
  );
}
