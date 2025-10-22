"use client";

import React from "react";
import {
  Mech,
  UPGRADES,
  RANGED_WEAPONS,
  MELEE_WEAPONS,
  getUpgradeById,
  getRangedWeaponById,
  getMeleeWeaponById,
  calculateMechCost,
  calculateUsedPlatforms,
  calculateTotalPlatforms,
  calculateModifiedStats,
  formatCredits,
} from "@/lib/game-data";

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

  return (
    <div className="border-2 border-amber-600 bg-slate-900 p-6 rounded-lg">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <label className="block text-amber-400 font-bold mb-2">Call Sign</label>
          <input
            type="text"
            value={mech.callSign}
            onChange={(e) => updateCallSign(e.target.value)}
            className="bg-slate-800 border border-amber-600 text-white px-3 py-2 rounded w-full max-w-md"
            placeholder="Enter mech call sign..."
          />
        </div>
        <button
          onClick={onRemove}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-bold ml-4">
          Remove Mech
        </button>
      </div>

      {/* Stats Display */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6 p-4 bg-slate-800 rounded">
        <div>
          <div className="text-amber-400 font-bold text-xs">SPEED</div>
          <div className="text-white text-lg">{stats.speed}&quot;</div>
        </div>
        <div>
          <div className="text-amber-400 font-bold text-xs">COMBAT SKILL</div>
          <div className="text-white text-lg">{stats.combatSkill}</div>
        </div>
        <div>
          <div className="text-amber-400 font-bold text-xs">ARMOR</div>
          <div className="text-white text-lg">{stats.armor}</div>
        </div>
        <div>
          <div className="text-amber-400 font-bold text-xs">HULL POINTS</div>
          <div className="text-white text-lg">{stats.hullPoints}</div>
        </div>
        <div>
          <div className="text-amber-400 font-bold text-xs">HEAT LIMIT</div>
          <div className="text-white text-lg">{stats.heatLimit}</div>
        </div>
        <div>
          <div className="text-amber-400 font-bold text-xs">PLATFORMS</div>
          <div className="text-white text-lg">
            {usedPlatforms}/{totalPlatforms}
          </div>
        </div>
      </div>

      {/* Cost Display */}
      <div className="mb-6 p-4 bg-slate-800 rounded">
        <div className="text-amber-400 font-bold">Total Cost</div>
        <div className="text-white text-2xl font-bold">{formatCredits(totalCost)}</div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Upgrades */}
        <div>
          <h3 className="text-amber-400 font-bold text-lg mb-3">Upgrades</h3>

          {/* Equipped Upgrades */}
          <div className="mb-4 space-y-2">
            {mech.upgrades.map((upgradeId, index) => {
              const upgrade = getUpgradeById(upgradeId);
              if (!upgrade) return null;
              return (
                <div key={`${upgradeId}-${index}`} className="bg-slate-800 p-2 rounded text-sm">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="text-white font-bold">{upgrade.name}</div>
                      <div className="text-amber-400 text-xs">
                        {formatCredits(upgrade.cost)}
                        {upgrade.platformSlots === 0 && " (No PF)"}
                        {upgrade.platformSlots &&
                          upgrade.platformSlots > 1 &&
                          ` (${upgrade.platformSlots} PF)`}
                      </div>
                    </div>
                    <button
                      onClick={() => removeUpgrade(index)}
                      className="text-red-400 hover:text-red-300 ml-2">
                      ✕
                    </button>
                  </div>
                  <div className="text-gray-400 text-xs mt-1">{upgrade.description}</div>
                </div>
              );
            })}
          </div>

          {/* Add Upgrade */}
          <select
            onChange={(e) => {
              if (e.target.value) {
                addUpgrade(e.target.value);
                e.target.value = "";
              }
            }}
            className="bg-slate-800 border border-amber-600 text-white px-3 py-2 rounded w-full text-sm">
            <option value="">+ Add Upgrade</option>
            {UPGRADES.map((upgrade) => (
              <option key={upgrade.id} value={upgrade.id}>
                {upgrade.name} - {formatCredits(upgrade.cost)}
              </option>
            ))}
          </select>
        </div>

        {/* Ranged Weapons */}
        <div>
          <h3 className="text-amber-400 font-bold text-lg mb-3">Ranged Weapons</h3>

          {/* Equipped Ranged Weapons */}
          <div className="mb-4 space-y-2">
            {mech.rangedWeapons.map((weaponId, index) => {
              const weapon = getRangedWeaponById(weaponId);
              if (!weapon) return null;
              return (
                <div key={`${weaponId}-${index}`} className="bg-slate-800 p-2 rounded text-sm">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="text-white font-bold">{weapon.name}</div>
                      <div className="text-amber-400 text-xs">
                        {formatCredits(weapon.cost)} | DMG: {weapon.damage}
                        {weapon.platformSlots && weapon.platformSlots > 1 && ` (${weapon.platformSlots} PF)`}
                      </div>
                    </div>
                    <button
                      onClick={() => removeRangedWeapon(index)}
                      className="text-red-400 hover:text-red-300 ml-2">
                      ✕
                    </button>
                  </div>
                  {weapon.maxRange && <div className="text-gray-400 text-xs">Range: {weapon.maxRange}</div>}
                  {weapon.special && <div className="text-gray-400 text-xs mt-1">{weapon.special}</div>}
                </div>
              );
            })}
          </div>

          {/* Add Ranged Weapon */}
          <select
            onChange={(e) => {
              if (e.target.value) {
                addRangedWeapon(e.target.value);
                e.target.value = "";
              }
            }}
            className="bg-slate-800 border border-amber-600 text-white px-3 py-2 rounded w-full text-sm">
            <option value="">+ Add Ranged Weapon</option>
            {RANGED_WEAPONS.map((weapon) => (
              <option key={weapon.id} value={weapon.id}>
                {weapon.name} - {formatCredits(weapon.cost)} (DMG: {weapon.damage})
              </option>
            ))}
          </select>
        </div>

        {/* Melee Weapons */}
        <div>
          <h3 className="text-amber-400 font-bold text-lg mb-3">Melee Weapons</h3>

          {/* Equipped Melee Weapons */}
          <div className="mb-4 space-y-2">
            {mech.meleeWeapons.map((weaponId, index) => {
              const weapon = getMeleeWeaponById(weaponId);
              if (!weapon) return null;
              return (
                <div key={`${weaponId}-${index}`} className="bg-slate-800 p-2 rounded text-sm">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="text-white font-bold">{weapon.name}</div>
                      <div className="text-amber-400 text-xs">
                        {formatCredits(weapon.cost)} | DMG: {weapon.damage}
                      </div>
                    </div>
                    <button
                      onClick={() => removeMeleeWeapon(index)}
                      className="text-red-400 hover:text-red-300 ml-2">
                      ✕
                    </button>
                  </div>
                  {weapon.range && <div className="text-gray-400 text-xs">Range: {weapon.range}</div>}
                  {weapon.special && <div className="text-gray-400 text-xs mt-1">{weapon.special}</div>}
                </div>
              );
            })}
          </div>

          {/* Add Melee Weapon */}
          <select
            onChange={(e) => {
              if (e.target.value) {
                addMeleeWeapon(e.target.value);
                e.target.value = "";
              }
            }}
            className="bg-slate-800 border border-amber-600 text-white px-3 py-2 rounded w-full text-sm">
            <option value="">+ Add Melee Weapon</option>
            {MELEE_WEAPONS.map((weapon) => (
              <option key={weapon.id} value={weapon.id}>
                {weapon.name} - {formatCredits(weapon.cost)} (DMG: {weapon.damage})
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
