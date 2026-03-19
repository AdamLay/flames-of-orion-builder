import { ReactNode, useState } from "react";
import { Drawer } from "vaul";

interface ItemListManagerProps<T extends { id: string }> {
  title: string;
  buttonLabel: string;
  selectDialogTitle: string;
  items: T[];
  equippedIds: string[];
  onAdd: (id: string) => void;
  onRemove: (index: number) => void;
  ItemRenderer: React.ComponentType<any>;
  sparePlatforms: number;
  renderEquippedItem?: (item: T, index: number) => ReactNode;
  sortItems?: (items: T[]) => T[];
}

export function ItemListManager<T extends { id: string }>({
  title,
  buttonLabel,
  selectDialogTitle,
  items,
  equippedIds,
  onAdd,
  onRemove,
  ItemRenderer,
  sparePlatforms,
  renderEquippedItem,
}: ItemListManagerProps<T>) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const canAddItem = (item: T): boolean => {
    const platformsNeeded = (item as any).platformSlots ?? 1;
    return platformsNeeded <= sparePlatforms;
  };

  const canAddAny = items.some((item) => canAddItem(item));

  const handleSelectItem = (id: string) => {
    onAdd(id);
    setIsDialogOpen(false);
  };

  return (
    <div>
      <h3 className="text-primary font-bold text-lg mb-2">{title}</h3>
      <button
        onClick={() => setIsDialogOpen(true)}
        disabled={!canAddAny}
        className="btn btn-accent btn-soft btn-sm w-full mb-2 disabled:btn-disabled"
      >
        + {buttonLabel}
      </button>

      {/* Available Items Dialog */}
      <Drawer.Root open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-base-200 h-fit fixed bottom-0 left-0 right-0 max-w-2xl mx-auto outline-none">
            <div className="p-3">
              <Drawer.Handle />
            </div>

            <div className="overflow-y-auto max-h-[85dvh] p-4">
              <h2 className="text-xl font-bold text-primary mb-2">{selectDialogTitle}</h2>
              <div className="max-h-[75dvh] overflow-y-auto">
                {items.map((item) => {
                  const itemId = item.id;
                  return (
                    <button
                      key={itemId}
                      onClick={() => handleSelectItem(itemId)}
                      disabled={!canAddItem(item)}
                      className="w-full text-left hover:bg-base-100 rounded p-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                    >
                      <ItemRenderer item={item} />
                    </button>
                  );
                })}
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>

      {/* Equipped Items */}
      <div className="mb-4 space-y-2">
        {equippedIds.map((itemId, index) => {
          const item = items.find((i) => i.id === itemId);
          if (!item) return null;

          if (renderEquippedItem) {
            return renderEquippedItem(item, index);
          }

          return (
            <ItemRenderer key={`${itemId}-${index}`} item={item} onRemove={() => onRemove(index)} />
          );
        })}
      </div>
    </div>
  );
}
