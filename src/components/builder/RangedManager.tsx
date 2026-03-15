import { AMMO, getAmmoById, RANGED_WEAPONS, RangedWeapon } from "@/lib/game-data";
import { ItemListManager } from "./ItemListManager";
import { WeaponListItem } from "./WeaponListItem";

interface Props {
  rangedWeapons: string[];
  weaponAmmo: Record<number, string>;
  onAddRangedWeapon: (weaponId: string) => void;
  onRemoveRangedWeapon: (index: number) => void;
  onAddWeaponAmmo: (weaponIndex: number, ammoId: string) => void;
  onRemoveWeaponAmmo: (weaponIndex: number) => void;
  sparePlatforms: number;
}

export function RangedManager({
  rangedWeapons,
  weaponAmmo,
  onAddRangedWeapon,
  onRemoveRangedWeapon,
  onAddWeaponAmmo,
  onRemoveWeaponAmmo,
  sparePlatforms,
}: Props) {
  const renderEquippedRangedWeapon = (weapon: RangedWeapon, index: number) => {
    const ammoId = weaponAmmo?.[index];
    const ammo = ammoId ? getAmmoById(ammoId) : null;
    return (
      <WeaponListItem
        key={`${weapon.id}-${index}`}
        weapon={weapon}
        weaponType="ranged"
        ammo={ammo}
        onRemove={() => onRemoveRangedWeapon(index)}
        onAddAmmo={(ammoId) => onAddWeaponAmmo(index, ammoId)}
        onRemoveAmmo={() => onRemoveWeaponAmmo(index)}
        availableAmmo={AMMO}
      />
    );
  };

  return (
    <ItemListManager
      title="RANGED WEAPONS"
      buttonLabel="Add Ranged Weapon"
      selectDialogTitle="SELECT WEAPON"
      items={RANGED_WEAPONS}
      equippedIds={rangedWeapons}
      onAdd={onAddRangedWeapon}
      onRemove={onRemoveRangedWeapon}
      ItemRenderer={(props) => <WeaponListItem weapon={props.item} weaponType="ranged" />}
      sparePlatforms={sparePlatforms}
      renderEquippedItem={renderEquippedRangedWeapon}
    />
  );
}
