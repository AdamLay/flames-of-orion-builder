import React, { useState } from "react";
import { RANGED_WEAPONS, AMMO, getRangedWeaponById, getAmmoById } from "@/lib/game-data";
import { WeaponListItem } from "./WeaponListItem";

interface Props {
  rangedWeapons: string[];
  weaponAmmo: Record<number, string>;
  onAddRangedWeapon: (weaponId: string) => void;
  onRemoveRangedWeapon: (index: number) => void;
  onAddWeaponAmmo: (weaponIndex: number, ammoId: string) => void;
  onRemoveWeaponAmmo: (weaponIndex: number) => void;
  usedPlatforms: number;
  totalPlatforms: number;
}

export function RangedManager({
  rangedWeapons,
  weaponAmmo,
  onAddRangedWeapon,
  onRemoveRangedWeapon,
  onAddWeaponAmmo,
  onRemoveWeaponAmmo,
  usedPlatforms,
  totalPlatforms,
}: Props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const sparePlatforms = totalPlatforms - usedPlatforms;

  const canAddWeapon = (weaponId: string): boolean => {
    const weapon = getRangedWeaponById(weaponId);
    if (!weapon) return false;

    // Check if weapon can fit in spare platforms
    const platformsNeeded = weapon.platformSlots ?? 1;
    return platformsNeeded <= sparePlatforms;
  };

  const canAddWeapons = RANGED_WEAPONS.some((weapon) => canAddWeapon(weapon.id));

  const handleSelectWeapon = (weaponId: string) => {
    onAddRangedWeapon(weaponId);
    setIsDialogOpen(false);
  };

  return (
    <div>
      <h3 className="text-primary font-bold text-lg mb-2">RANGED WEAPONS</h3>
      <button
        onClick={() => setIsDialogOpen(true)}
        disabled={!canAddWeapons}
        className="btn btn-accent btn-sm w-full mb-2 disabled:btn-disabled">
        + Add Ranged Weapon
      </button>

      {/* Available Ranged Weapons Dialog */}
      {isDialogOpen && (
        <dialog open className="modal">
          <div className="modal-box bg-base-200 max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-bold text-primary mb-4">Select Ranged Weapon</h2>
            <div>
              {RANGED_WEAPONS.map((weapon) => (
                <button
                  key={weapon.id}
                  onClick={() => handleSelectWeapon(weapon.id)}
                  disabled={!canAddWeapon(weapon.id)}
                  className="w-full text-left hover:bg-base-100 rounded p-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent">
                  <WeaponListItem key={weapon.id} weapon={weapon} weaponType="ranged" />
                </button>
              ))}
            </div>
            <button onClick={() => setIsDialogOpen(false)} className="btn btn-ghost btn-sm mt-4 w-full">
              Close
            </button>
          </div>
        </dialog>
      )}

      {/* Equipped Ranged Weapons */}
      <div className="mb-4 space-y-2">
        {rangedWeapons.map((weaponId, index) => {
          const weapon = getRangedWeaponById(weaponId);
          if (!weapon) return null;
          const ammoId = weaponAmmo?.[index];
          const ammo = ammoId ? getAmmoById(ammoId) : null;
          return (
            <WeaponListItem
              key={`${weaponId}-${index}`}
              weapon={weapon}
              weaponType="ranged"
              ammo={ammo}
              onRemove={() => onRemoveRangedWeapon(index)}
              onAddAmmo={(ammoId) => onAddWeaponAmmo(index, ammoId)}
              onRemoveAmmo={() => onRemoveWeaponAmmo(index)}
              availableAmmo={AMMO}
            />
          );
        })}
      </div>
    </div>
  );
}
