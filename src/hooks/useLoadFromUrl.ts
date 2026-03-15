import { useBunkerStore } from "@/lib/bunkerStore";
import { decodeState } from "@/lib/utils";
import { useEffect } from "react";

export function useLoadFromUrl(shareData: string) {
  const { loadState } = useBunkerStore();
  useEffect(() => {
    if (shareData) {
      const state = decodeState(shareData);
      console.log("Loaded state from URL:", state);
      loadState(state);
    }
  }, [shareData]);
}
