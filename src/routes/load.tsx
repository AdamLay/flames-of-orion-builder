import { BunkerStoreState, useBunkerStore } from "@/lib/bunkerStore";
import { getLocalSaves } from "@/lib/utils";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/load")({
  component: LoadPage,
});

function LoadPage() {
  const navigate = useNavigate();
  const { loadState } = useBunkerStore();
  const [localSaves, setLocalSaves] = useState<BunkerStoreState[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLocalSaves(getLocalSaves());
    setLoading(false);
  }, []);

  const handleLoad = async (bunkerId: string) => {
    const savedState = localStorage.getItem(bunkerId);
    loadState(JSON.parse(savedState || "") as BunkerStoreState);
    navigate({ to: "/bunker" });
  };

  const handleDeleteSave = (bunkerId: string) => {
    if (confirm("Are you sure you want to delete this save?")) {
      localStorage.removeItem(bunkerId);
      setLocalSaves((saves) => saves.filter((save) => save.bunker.id !== bunkerId));
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto px-2">
      {loading && <span className="loading loading-dots loading-xl"></span>}
      <ul className="list bg-base-100 rounded-box shadow-md">
        {localSaves.map((save) => (
          <li
            key={save.bunker.id}
            className="list-row items-center hover:bg-base-200 rounded transition-colors cursor-pointer"
            onClick={() => handleLoad(save.bunker.id)}
          >
            <div className="list-col-grow">
              <div>{save.bunker.name}</div>
              <div className="text-sm uppercase font-semibold opacity-60">
                Mechs: {save.mechs.length}
              </div>
              {save.bunker.modifiedAt && (
                <p className="text-xs opacity-85">
                  {new Date(save.bunker.modifiedAt).toLocaleString()}
                </p>
              )}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteSave(save.bunker.id);
              }}
              className="btn btn-square btn-error btn-soft"
            >
              <Trash2 className="size-4" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
