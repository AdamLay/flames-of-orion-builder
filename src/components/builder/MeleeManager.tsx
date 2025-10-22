import React, { useState } from "react";
import { MELEE_WEAPONS, getMeleeWeaponById, formatCredits } from "@/lib/game-data";
import { WeaponListItem } from "./WeaponListItem";

interface Props {
  meleeWeapons: string[];
  onAddMeleeWeapon: (weaponId: string) => void;
  onRemoveMeleeWeapon: (index: number) => void;
  usedPlatforms: number;
  totalPlatforms: number;
}

export function MeleeManager({
  meleeWeapons,
  onAddMeleeWeapon,
  onRemoveMeleeWeapon,
  usedPlatforms,
  totalPlatforms,
}: Props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const sparePlatforms = totalPlatforms - usedPlatforms;

  const canAddWeapon = (weaponId: string): boolean => {
    const weapon = getMeleeWeaponById(weaponId);
    if (!weapon) return false;

    // Check if weapon can fit in spare platforms
    const platformsNeeded = weapon.platformSlots ?? 1;
    return platformsNeeded <= sparePlatforms;
  };

  const canAddWeapons = MELEE_WEAPONS.some((weapon) => canAddWeapon(weapon.id));

  const handleSelectWeapon = (weaponId: string) => {
    onAddMeleeWeapon(weaponId);
    setIsDialogOpen(false);
  };

  return (
    <div>
      <h3 className="text-primary font-bold text-lg mb-2">MELEE WEAPONS</h3>
      <button
        onClick={() => setIsDialogOpen(true)}
        disabled={!canAddWeapons}
        className="btn btn-accent btn-sm w-full mb-2 disabled:btn-disabled">
        + Add Melee Weapon
      </button>

      {/* Available Melee Weapons Dialog */}
      {isDialogOpen && (
        <dialog open className="modal">
          <div className="modal-box bg-base-200 max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-bold text-primary mb-4">Select Melee Weapon</h2>
            <div>
              {MELEE_WEAPONS.map((weapon) => (
                <button
                  key={weapon.id}
                  onClick={() => handleSelectWeapon(weapon.id)}
                  disabled={!canAddWeapon(weapon.id)}
                  className="w-full text-left hover:bg-base-100 rounded p-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent">
                  <WeaponListItem key={weapon.id} weapon={weapon} weaponType="melee" />
                </button>
              ))}
            </div>
            <button onClick={() => setIsDialogOpen(false)} className="btn btn-ghost btn-sm mt-4 w-full">
              Close
            </button>
          </div>
        </dialog>
      )}

      {/* Equipped Melee Weapons */}
      <div className="mb-4 space-y-2">
        {meleeWeapons.map((weaponId, index) => {
          const weapon = getMeleeWeaponById(weaponId);
          if (!weapon) return null;
          return (
            <WeaponListItem
              key={`${weaponId}-${index}`}
              weapon={weapon}
              weaponType="melee"
              onRemove={() => onRemoveMeleeWeapon(index)}
            />
          );
        })}
      </div>
    </div>
  );
}
