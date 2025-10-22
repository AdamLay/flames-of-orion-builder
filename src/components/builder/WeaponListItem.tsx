import React from "react";
import { RangedWeapon, MeleeWeapon, Ammo, formatCredits, getAmmoById } from "@/lib/game-data";
import { Trash2 } from "lucide-react";

export type WeaponType = "ranged" | "melee";

interface WeaponListItemProps {
  weapon: RangedWeapon | MeleeWeapon;
  weaponType: WeaponType;
  ammo?: Ammo | null;
  onRemove?: () => void;
  onAddAmmo?: (ammoId: string) => void;
  onRemoveAmmo?: () => void;
  availableAmmo?: Ammo[];
}

export function WeaponListItem({
  weapon,
  weaponType,
  ammo,
  onRemove,
  onAddAmmo,
  onRemoveAmmo,
  availableAmmo = [],
}: WeaponListItemProps) {
  const isRanged = weaponType === "ranged";
  const rangedWeapon = isRanged ? (weapon as RangedWeapon) : null;
  const meleeWeapon = !isRanged ? (weapon as MeleeWeapon) : null;

  return (
    <div className="card-small text-sm">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="text-primary font-bold">{weapon.name}</div>
          <div className="text-xs">
            {formatCredits(weapon.cost)} | DMG: {weapon.damage}
            {weapon.platformSlots && weapon.platformSlots > 1 && ` (${weapon.platformSlots} PF)`}
          </div>
          {rangedWeapon?.maxRange && (
            <div className="text-gray-400 text-xs">Range: {rangedWeapon.maxRange}</div>
          )}
          {meleeWeapon?.range && <div className="text-gray-400 text-xs">Range: {meleeWeapon.range}</div>}
        </div>
        {onRemove && (
          <button onClick={onRemove} className="btn btn-sm btn-square btn-error btn-soft">
            <Trash2 className="size-4" />
          </button>
        )}
      </div>

      {weapon.special && <div className="text-gray-400 text-xs mt-1">{weapon.special}</div>}

      {/* Ammo Selection (only for ranged weapons) */}
      {isRanged && onAddAmmo && onRemoveAmmo && (
        <div className="mt-2 pt-2 border-t border-base-300">
          {ammo ? (
            <div className="flex justify-between items-start gap-2">
              <div className="flex-1">
                <div className="text-xs font-semibold text-accent">Ammo: {ammo.name}</div>
                <div className="text-xs">{formatCredits(ammo.cost)}</div>
              </div>
              <button onClick={onRemoveAmmo} className="btn btn-sm btn-square btn-error btn-soft">
                <Trash2 className="size-4" />
              </button>
            </div>
          ) : (
            <select
              onChange={(e) => {
                if (e.target.value) {
                  onAddAmmo(e.target.value);
                  e.target.value = "";
                }
              }}
              className="select select-sm w-full">
              <option value="">+ Add Ammo</option>
              {availableAmmo.map((ammoOption) => (
                <option key={ammoOption.id} value={ammoOption.id}>
                  {ammoOption.name} - {formatCredits(ammoOption.cost)}
                </option>
              ))}
            </select>
          )}
        </div>
      )}
    </div>
  );
}
