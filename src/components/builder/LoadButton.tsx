import { BunkerStoreState, useBunkerStore } from "@/lib/bunkerStore";
import { getLocalSaves } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import { useRef, useState } from "react";

export default function LoadButton() {
  const dialog = useRef<HTMLDialogElement>(null);
  const { loadState } = useBunkerStore();
  const [localSaves, setLocalSaves] = useState<BunkerStoreState[]>([]);

  const handleOpen = () => {
    setLocalSaves(getLocalSaves());
    dialog.current?.showModal();
  };

  const handleLoad = async (bunkerId: string) => {
    const savedState = localStorage.getItem(bunkerId);
    loadState(JSON.parse(savedState || "") as BunkerStoreState);
    dialog.current?.close();
  };

  const handleDeleteSave = (bunkerId: string) => {
    if (confirm("Are you sure you want to delete this save?")) {
      localStorage.removeItem(bunkerId);
      setLocalSaves((saves) => saves.filter((save) => save.bunker.id !== bunkerId));
    }
  };

  return (
    <>
      <div className="btn btn-accent" onClick={handleOpen}>
        Load Bunker
      </div>
      <dialog ref={dialog} id="load-dialog" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Load Bunker State</h3>
          <ul className="list bg-base-100 rounded-box shadow-md">
            {localSaves.map((save) => (
              <li key={save.bunker.id} className="list-row">
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
                <button className="btn btn-accent" onClick={() => handleLoad(save.bunker.id)}>
                  Load
                </button>
                <button
                  onClick={() => handleDeleteSave(save.bunker.id)}
                  className="btn btn-square btn-error btn-soft"
                >
                  <Trash2 className="size-4" />
                </button>
              </li>
            ))}
          </ul>
          <div className="modal-action">
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
}
