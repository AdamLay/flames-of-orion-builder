"use client";

import React from "react";
import {
  Mech,
  FrameType,
  FRAME_PROFILES,
  UPGRADES,
  RANGED_WEAPONS,
  MELEE_WEAPONS,
  AMMO,
  getFrameProfileById,
  getUpgradeById,
  getRangedWeaponById,
  getMeleeWeaponById,
  getAmmoById,
  calculateMechCost,
  calculateUsedPlatforms,
  calculateTotalPlatforms,
  calculateModifiedStats,
  formatCredits,
} from "@/lib/game-data";
import { Trash, Trash2 } from "lucide-react";

interface MechBuilderProps {
  mech: Mech;
  onUpdate: (mech: Mech) => void;
  onRemove: () => void;
}

export function MechBuilder({ mech, onUpdate, onRemove }: MechBuilderProps) {
  const stats = calculateModifiedStats(mech);
  const totalCost = calculateMechCost(mech);
  const usedPlatforms = calculateUsedPlatforms(mech);
  const totalPlatforms = calculateTotalPlatforms(mech);

  const updateCallSign = (callSign: string) => {
    onUpdate({ ...mech, callSign });
  };

  const updateFrameType = (frameType: FrameType) => {
    onUpdate({ ...mech, frameType });
  };

  const addWeaponAmmo = (weaponIndex: number, ammoId: string) => {
    const newWeaponAmmo = { ...mech.weaponAmmo };
    newWeaponAmmo[weaponIndex] = ammoId;
    onUpdate({ ...mech, weaponAmmo: newWeaponAmmo });
  };

  const removeWeaponAmmo = (weaponIndex: number) => {
    const newWeaponAmmo = { ...mech.weaponAmmo };
    delete newWeaponAmmo[weaponIndex];
    onUpdate({ ...mech, weaponAmmo: newWeaponAmmo });
  };

  const addUpgrade = (upgradeId: string) => {
    const upgrade = getUpgradeById(upgradeId);
    if (!upgrade) return;

    // Check if already has this upgrade and it's not stackable
    if (!upgrade.stackable && mech.upgrades.includes(upgradeId)) {
      alert("This upgrade is already equipped and cannot be stacked.");
      return;
    }

    // Check platform availability
    const newUsed = usedPlatforms + (upgrade.platformSlots || 1);
    if (newUsed > totalPlatforms) {
      alert(`Not enough platforms! (${usedPlatforms}/${totalPlatforms} used)`);
      return;
    }

    onUpdate({ ...mech, upgrades: [...mech.upgrades, upgradeId] });
  };

  const removeUpgrade = (index: number) => {
    const newUpgrades = [...mech.upgrades];
    newUpgrades.splice(index, 1);
    onUpdate({ ...mech, upgrades: newUpgrades });
  };

  const addRangedWeapon = (weaponId: string) => {
    const weapon = getRangedWeaponById(weaponId);
    if (!weapon) return;

    const newUsed = usedPlatforms + (weapon.platformSlots || 1);
    if (newUsed > totalPlatforms) {
      alert(`Not enough platforms! (${usedPlatforms}/${totalPlatforms} used)`);
      return;
    }

    onUpdate({ ...mech, rangedWeapons: [...mech.rangedWeapons, weaponId] });
  };

  const removeRangedWeapon = (index: number) => {
    const newWeapons = [...mech.rangedWeapons];
    newWeapons.splice(index, 1);
    onUpdate({ ...mech, rangedWeapons: newWeapons });
  };

  const addMeleeWeapon = (weaponId: string) => {
    const weapon = getMeleeWeaponById(weaponId);
    if (!weapon) return;

    const newUsed = usedPlatforms + (weapon.platformSlots || 1);
    if (newUsed > totalPlatforms) {
      alert(`Not enough platforms! (${usedPlatforms}/${totalPlatforms} used)`);
      return;
    }

    onUpdate({ ...mech, meleeWeapons: [...mech.meleeWeapons, weaponId] });
  };

  const removeMeleeWeapon = (index: number) => {
    const newWeapons = [...mech.meleeWeapons];
    newWeapons.splice(index, 1);
    onUpdate({ ...mech, meleeWeapons: newWeapons });
  };

  const hasPlatformCapacity = usedPlatforms < totalPlatforms;

  return (
    <div className="card-1 space-y-4">
      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          value={mech.callSign}
          onChange={(e) => updateCallSign(e.target.value)}
          className="input input-lg w-full"
          placeholder="Enter mech call sign..."
        />
        <select
          value={mech.frameType}
          onChange={(e) => updateFrameType(e.target.value as FrameType)}
          className="select select-lg">
          {FRAME_PROFILES.map((frame) => (
            <option key={frame.id} value={frame.id}>
              {frame.name}
            </option>
          ))}
        </select>
        <div className="text-2xl font-bold">{formatCredits(totalCost)}</div>
        <button onClick={onRemove} className="btn btn-error btn-sm btn-square btn-soft">
          <Trash2 className="size-4" />
        </button>
      </div>

      {/* Stats Display */}
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

      {/* Cost Display */}

      <div className="grid md:grid-cols-3 gap-6">
        {/* Upgrades */}
        <div>
          <h3 className="text-primary font-bold text-lg mb-2">UPGRADES</h3>
          <select
            onChange={(e) => {
              if (e.target.value) {
                addUpgrade(e.target.value);
                e.target.value = "";
              }
            }}
            className="select mb-2">
            <option value="">+ Add Upgrade</option>
            {UPGRADES.map((upgrade) => (
              <option key={upgrade.id} value={upgrade.id}>
                {upgrade.name} - {formatCredits(upgrade.cost)}
              </option>
            ))}
          </select>
          {/* Equipped Upgrades */}
          <div className="mb-4 space-y-2">
            {mech.upgrades.map((upgradeId, index) => {
              const upgrade = getUpgradeById(upgradeId);
              if (!upgrade) return null;
              return (
                <div key={`${upgradeId}-${index}`} className="card-small text-sm">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="text-primary font-bold">{upgrade.name}</div>
                      <div className="text-xs">
                        {formatCredits(upgrade.cost)}
                        {upgrade.platformSlots === 0 && " (No PF)"}
                        {upgrade.platformSlots &&
                          upgrade.platformSlots > 1 &&
                          ` (${upgrade.platformSlots} PF)`}
                      </div>
                    </div>
                    <button
                      onClick={() => removeUpgrade(index)}
                      className="btn btn-sm btn-square btn-error btn-soft">
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                  <div className="opacity-80 text-xs mt-1">{upgrade.description}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ranged Weapons */}
        <div>
          <h3 className="text-primary font-bold text-lg mb-2">RANGED WEAPONS</h3>
          <select
            onChange={(e) => {
              if (e.target.value) {
                addRangedWeapon(e.target.value);
                e.target.value = "";
              }
            }}
            className="select mb-2">
            <option value="">+ Add Ranged Weapon</option>
            {RANGED_WEAPONS.map((weapon) => (
              <option key={weapon.id} value={weapon.id}>
                {weapon.name} - {formatCredits(weapon.cost)} (DMG: {weapon.damage})
              </option>
            ))}
          </select>
          {/* Equipped Ranged Weapons */}
          <div className="mb-4 space-y-2">
            {mech.rangedWeapons.map((weaponId, index) => {
              const weapon = getRangedWeaponById(weaponId);
              if (!weapon) return null;
              const ammoId = mech.weaponAmmo?.[index];
              const ammo = ammoId ? getAmmoById(ammoId) : null;
              return (
                <div key={`${weaponId}-${index}`} className="card-small text-sm">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="text-primary font-bold">{weapon.name}</div>
                      <div className="text-xs">
                        {formatCredits(weapon.cost)} | DMG: {weapon.damage}
                        {weapon.platformSlots && weapon.platformSlots > 1 && ` (${weapon.platformSlots} PF)`}
                      </div>
                    </div>
                    <button
                      onClick={() => removeRangedWeapon(index)}
                      className="btn btn-sm btn-square btn-error btn-soft">
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                  {weapon.maxRange && <div className="text-gray-400 text-xs">Range: {weapon.maxRange}</div>}
                  {weapon.special && <div className="text-gray-400 text-xs mt-1">{weapon.special}</div>}

                  {/* Ammo Selection */}
                  <div className="mt-2 pt-2 border-t border-base-300">
                    {ammo ? (
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-accent">Ammo: {ammo.name}</div>
                          <div className="text-xs">{formatCredits(ammo.cost)}</div>
                          {/* <div className="text-xs text-gray-400 mt-1">{ammo.description}</div> */}
                        </div>
                        <button
                          onClick={() => removeWeaponAmmo(index)}
                          className="btn btn-sm btn-square btn-error btn-soft">
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    ) : (
                      <select
                        onChange={(e) => {
                          if (e.target.value) {
                            addWeaponAmmo(index, e.target.value);
                            e.target.value = "";
                          }
                        }}
                        className="select select-sm w-full">
                        <option value="">+ Add Ammo</option>
                        {AMMO.map((ammoOption) => (
                          <option key={ammoOption.id} value={ammoOption.id}>
                            {ammoOption.name} - {formatCredits(ammoOption.cost)}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Melee Weapons */}
        <div>
          <h3 className="text-primary font-bold text-lg mb-2">MELEE WEAPONS</h3>
          <select
            onChange={(e) => {
              if (e.target.value) {
                addMeleeWeapon(e.target.value);
                e.target.value = "";
              }
            }}
            className="select mb-2">
            <option value="">+ Add Melee Weapon</option>
            {MELEE_WEAPONS.map((weapon) => (
              <option key={weapon.id} value={weapon.id}>
                {weapon.name} - {formatCredits(weapon.cost)} (DMG: {weapon.damage})
              </option>
            ))}
          </select>
          {/* Equipped Melee Weapons */}
          <div className="mb-4 space-y-2">
            {mech.meleeWeapons.map((weaponId, index) => {
              const weapon = getMeleeWeaponById(weaponId);
              if (!weapon) return null;
              return (
                <div key={`${weaponId}-${index}`} className="card-small text-sm">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="text-primary font-bold">{weapon.name}</div>
                      <div className="text-xs">
                        {formatCredits(weapon.cost)} | DMG: {weapon.damage}
                      </div>
                    </div>
                    <button
                      onClick={() => removeMeleeWeapon(index)}
                      className="btn btn-sm btn-square btn-error btn-soft">
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                  {weapon.range && <div className="text-gray-400 text-xs">Range: {weapon.range}</div>}
                  {weapon.special && <div className="text-gray-400 text-xs mt-1">{weapon.special}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
