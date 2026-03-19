import { UPGRADES } from "@/lib/game-data";
import orderBy from "lodash-es/orderBy";
import { UpgradeListItem } from "../UpgradeListItem";
import { ItemListManager } from "./ItemListManager";

interface Props {
  upgrades: string[];
  onAddUpgrade: (upgradeId: string) => void;
  onRemoveUpgrade: (index: number) => void;
  sparePlatforms: number;
}

export function UpgradeManager({ upgrades, onAddUpgrade, onRemoveUpgrade, sparePlatforms }: Props) {
  return (
    <ItemListManager
      title="UPGRADES"
      buttonLabel="Add Upgrade"
      selectDialogTitle="SELECT UPGRADE"
      items={orderBy(UPGRADES, "cost")}
      equippedIds={upgrades}
      onAdd={onAddUpgrade}
      onRemove={onRemoveUpgrade}
      ItemRenderer={(props) => <UpgradeListItem upgrade={props.item} onRemove={props.onRemove} />}
      sparePlatforms={sparePlatforms}
    />
  );
}
