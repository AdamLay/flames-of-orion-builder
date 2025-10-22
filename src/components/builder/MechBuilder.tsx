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
import { WeaponListItem } from "./WeaponListItem";
import { StatsDisplay } from "./StatsDisplay";
import { UpgradeListItem } from "./UpgradeListItem";
import { UpgradeManager } from "./UpgradeManager";
import { RangedManager } from "./RangedManager";
import { MeleeManager } from "./MeleeManager";

interface MechBuilderProps {
  mech: Mech;
  mechIndex: number;
  onUpdate: (mech: Mech) => void;
  onRemove: () => void;
}

export function MechBuilder({ mech, mechIndex, onUpdate, onRemove }: MechBuilderProps) {
  const stats = calculateModifiedStats(mech);
  const totalCost = calculateMechCost(mech, mechIndex);
  const usedPlatforms = calculateUsedPlatforms(mech);
  const totalPlatforms = calculateTotalPlatforms(mech);
  console.log("mech", mech);
  const updateCallSign = (callSign: string) => {
    onUpdate({ ...mech, callSign });
  };

  const updateFrameType = (frameType: FrameType) => {
    onUpdate({ ...mech, frameType });
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
    const newUsed = usedPlatforms + (upgrade.platformSlots ?? 1);
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

  //#region Ranged Weapons

  const addRangedWeapon = (weaponId: string) => {
    const weapon = getRangedWeaponById(weaponId);
    if (!weapon) return;

    const newUsed = usedPlatforms + (weapon.platformSlots ?? 1);
    if (newUsed > totalPlatforms) {
      alert(`Not enough platforms! (${usedPlatforms}/${totalPlatforms} used)`);
      return;
    }

    onUpdate({ ...mech, rangedWeapons: [...mech.rangedWeapons, weaponId] });
  };

  const removeRangedWeapon = (index: number) => {
    const newWeapons = [...mech.rangedWeapons];
    newWeapons.splice(index, 1);
    const newWeaponAmmo = { ...mech.weaponAmmo };
    delete newWeaponAmmo[index];
    onUpdate({ ...mech, rangedWeapons: newWeapons, weaponAmmo: newWeaponAmmo });
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

  //#endregion

  const addMeleeWeapon = (weaponId: string) => {
    const weapon = getMeleeWeaponById(weaponId);
    if (!weapon) return;

    const newUsed = usedPlatforms + (weapon.platformSlots ?? 1);
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

      <StatsDisplay stats={stats} usedPlatforms={usedPlatforms} totalPlatforms={totalPlatforms} />

      <div className="grid md:grid-cols-3 gap-6">
        <UpgradeManager
          upgrades={mech.upgrades}
          onAddUpgrade={addUpgrade}
          onRemoveUpgrade={removeUpgrade}
          usedPlatforms={usedPlatforms}
          totalPlatforms={totalPlatforms}
        />

        <RangedManager
          rangedWeapons={mech.rangedWeapons}
          weaponAmmo={mech.weaponAmmo}
          onAddRangedWeapon={addRangedWeapon}
          onRemoveRangedWeapon={removeRangedWeapon}
          onAddWeaponAmmo={addWeaponAmmo}
          onRemoveWeaponAmmo={removeWeaponAmmo}
          usedPlatforms={usedPlatforms}
          totalPlatforms={totalPlatforms}
        />

        <MeleeManager
          meleeWeapons={mech.meleeWeapons}
          onAddMeleeWeapon={addMeleeWeapon}
          onRemoveMeleeWeapon={removeMeleeWeapon}
          usedPlatforms={usedPlatforms}
          totalPlatforms={totalPlatforms}
        />
      </div>
    </div>
  );
}
