import { MELEE_WEAPONS } from "@/lib/game-data";
import { WeaponListItem } from "../WeaponListItem";
import { ItemListManager } from "./ItemListManager";

interface Props {
  meleeWeapons: string[];
  onAddMeleeWeapon: (weaponId: string) => void;
  onRemoveMeleeWeapon: (index: number) => void;
  sparePlatforms: number;
}

export function MeleeManager({
  meleeWeapons,
  onAddMeleeWeapon,
  onRemoveMeleeWeapon,
  sparePlatforms,
}: Props) {
  return (
    <ItemListManager
      title="MELEE WEAPONS"
      buttonLabel="Add Melee Weapon"
      selectDialogTitle="SELECT WEAPON"
      items={MELEE_WEAPONS}
      equippedIds={meleeWeapons}
      onAdd={onAddMeleeWeapon}
      onRemove={onRemoveMeleeWeapon}
      ItemRenderer={(props) => (
        <WeaponListItem weapon={props.item} weaponType="melee" onRemove={props.onRemove} />
      )}
      sparePlatforms={sparePlatforms}
    />
  );
}
