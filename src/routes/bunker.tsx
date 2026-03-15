import BunkerOverview from "@/components/builder/BunkerOverview";
import CreateNewButton from "@/components/builder/CreateNewButton";
import EmptyBunker from "@/components/builder/EmptyBunker";
import LoadButton from "@/components/builder/LoadButton";
import { MechBuilder } from "@/components/builder/MechBuilder";
import ShareButton from "@/components/builder/ShareButton";
import StorageBays from "@/components/builder/StorageBays";
import { useLoadFromUrl, useLoadLastBunker, useMediaQuery } from "@/hooks";
import { useBunkerStore } from "@/lib/bunkerStore";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Drawer } from "vaul";
import z from "zod";

const bunkerSearchSchema = z.object({
  share: z.string().optional(),
});

export const Route = createFileRoute("/bunker")({
  component: BunkerPage,
  validateSearch: bunkerSearchSchema,
});

function BunkerPage() {
  const search = Route.useSearch();
  const { bunker, mechs, updateMech, removeMech } = useBunkerStore();
  const [selectedBayId, setSelectedBayId] = useState<string | null>(null);

  const isSmallScreen = useMediaQuery("(max-width: 767px)");
  useLoadLastBunker();
  useLoadFromUrl(search.share || "");

  const selectedBay = bunker.bays.find((bay) => bay.id === selectedBayId) || null;
  const selectedMech = mechs.find((m) => m.id === selectedBay?.content?.ids[0]) || null;

  const selectedMechBuilder = selectedMech && (
    <MechBuilder
      key={selectedMech.id}
      mech={selectedMech}
      mechIndex={0}
      onUpdate={(updatedMech) => updateMech(selectedMech.id, updatedMech)}
      onRemove={() => removeMech(selectedMech.id)}
    />
  );

  return (
    <div className="max-w-7xl mx-auto px-2">
      <div className="flex justify-end gap-4 mb-4">
        <CreateNewButton />
        <LoadButton />
        <ShareButton />
      </div>
      <BunkerOverview />

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
        <StorageBays selectedBayId={selectedBayId} setSelectedBayId={setSelectedBayId} />
        <div className="hidden md:block mb-6 col-span-2">
          <h2 className="text-2xl font-bold mb-2 text-primary">MECH CUSTOMIZATION</h2>
          {mechs.length === 0 ? (
            <EmptyBunker />
          ) : (
            <div className="space-y-6">{selectedMechBuilder}</div>
          )}
        </div>
      </div>

      {isSmallScreen && (
        <Drawer.Root open={!!selectedMech} onClose={() => setSelectedBayId(null)}>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="bg-base-200 h-fit fixed bottom-0 left-0 right-0 outline-none">
              <div className="p-3">
                <Drawer.Handle />
              </div>

              <div className="overflow-y-auto max-h-[85dvh]">{selectedMechBuilder}</div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      )}

      {/* Bunker Info */}
      <div className="card-1 mb-6 border-l-4 border-info">
        <p className="text-sm text-gray-300">
          <span className="font-bold text-info">Bunker Purpose:</span> After each battle, your
          Combat Unit returns here. Store additional Mechs, spare Upgrades, Credits, and loot
          between battles. Keep track of all platforms, credits, and extra models in your bunker.
        </p>
      </div>
      <p className="text-sm opacity-85">
        Bunker saved at: {new Date(bunker.modifiedAt).toLocaleString()}
      </p>
    </div>
  );
}
