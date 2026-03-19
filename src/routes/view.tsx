import MechDisplay from "@/components/MechDisplay";
import { useLoadLastBunker } from "@/hooks";
import { useBunkerStore } from "@/lib/bunkerStore";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/view")({
  component: ViewPage,
});

function ViewPage() {
  const bunkerState = useBunkerStore();

  useLoadLastBunker();

  return (
    <div className="space-y-4">
      {bunkerState.mechs.map((x, index) => (
        <div key={index} className="bg-base-300 p-4 rounded-md">
          <MechDisplay key={index} mech={x} />
        </div>
      ))}
    </div>
  );
}
