import { useBunkerStore } from "@/lib/bunkerStore";

export default function CreateNewButton() {
  const { initializeBunker } = useBunkerStore();

  const handleSave = async () => {
    initializeBunker();
  };

  return (
    <>
      <div className="btn btn-ghost" onClick={handleSave}>
        Create New Bunker
      </div>
    </>
  );
}
