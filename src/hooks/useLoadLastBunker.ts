import { useBunkerStore } from "@/lib/bunkerStore";
import { getLocalSaves } from "@/lib/utils";
import { useEffect } from "react";

export function useLoadLastBunker() {
  const { loadState } = useBunkerStore();
  useEffect(() => {
    const localSaves = getLocalSaves();
    if (localSaves.length > 0) {
      loadState(localSaves[0]);
    }
  }, []);
}
