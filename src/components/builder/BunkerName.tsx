import { useBunkerStore } from "@/lib/bunkerStore";
import { debounce } from "lodash-es";
import { useCallback, useEffect, useState } from "react";

export default function BunkerName() {
  const { bunker, setBunker } = useBunkerStore();
  const [name, setName] = useState("");

  // Sync local name state with store when bunker name changes (e.g., on load)
  useEffect(() => {
    setName(bunker.name);
  }, [bunker.name]);

  // Debounced function to update bunker name in the store
  const updateStoreName = useCallback(
    debounce((newName: string) => {
      setBunker({ ...bunker, name: newName });
    }, 500),
    [bunker, setBunker],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    updateStoreName(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Bunker Name"
      className="input input-ghost text-title text-center text-xl font-bold"
      onChange={handleChange}
      value={name}
    />
  );
}
