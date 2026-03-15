import { clsx, type ClassValue } from "clsx";
import orderBy from "lodash-es/orderBy";
import pako from "pako";
import { twMerge } from "tailwind-merge";
import { BunkerStoreState } from "./bunkerStore";
import { Bunker } from "./game-data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function encodeState(state: object) {
  const json = JSON.stringify(state);
  const compressed = pako.deflate(json);
  return btoa(String.fromCharCode(...compressed));
}

// Decode and decompress from URL
export function decodeState(encoded: string) {
  const foo = atob(encoded);
  const compressed = Uint8Array.from(foo, (c) => c.charCodeAt(0));
  const json = pako.inflate(compressed, { to: "string" });
  return JSON.parse(json);
}

export function saveToLocalStorage(state: BunkerStoreState) {
  const stateString = JSON.stringify(state);
  const bunkerId = state.bunker.id;
  localStorage.setItem(bunkerId, stateString);
}

export function getLocalSaves(): BunkerStoreState[] {
  const bunkerKeys = Object.keys(localStorage).filter((key) => key.startsWith("bunker-"));
  const saves = bunkerKeys.map(
    (key) => JSON.parse(localStorage.getItem(key) || "") as BunkerStoreState,
  );
  return orderBy(saves, (x: BunkerStoreState) => x.bunker.modifiedAt, "desc");
}

export function getTotalMechs(bunker: Bunker) {
  return bunker.bays.reduce((sum, bay) => {
    if (bay.content?.type === "mech") {
      return sum + bay.content.ids.length;
    }
    return sum;
  }, 0);
}
