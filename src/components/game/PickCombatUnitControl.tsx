import { Events, useGameLobby } from "@/hooks/useGameLobby";
import { useBunkerStore } from "@/lib/bunkerStore";
import { useLobbyStore } from "@/lib/lobbyStore";
import { useState } from "react";
import MechDisplay from "../MechDisplay";

export default function PickCombatUnitControl() {
  const { lobbyId, playerId, playerName, addCombatUnit } = useLobbyStore();
  const { bunker, mechs } = useBunkerStore();
  const { socket } = useGameLobby();
  const [selected, setSelected] = useState([] as string[]);

  if (!lobbyId) return null;

  const handleClientJoin = () => {
    const selectedMechs = mechs.filter((m) => selected.includes(m.id));
    const player = { id: playerId, name: playerName };
    socket!.emit(Events.client_join, lobbyId, { player, units: selectedMechs });
    addCombatUnit({ player, units: selectedMechs }, { broadcast: false });
  };

  return (
    <div className="flex flex-col w-full gap-4">
      <button
        className="btn btn-accent max-w-sm mx-auto"
        onClick={handleClientJoin}
        disabled={selected.length === 0}
      >
        Join with Combat Unit
      </button>
      <div className="md:max-w-md mx-auto flex flex-col w-full gap-4">
        <p>Select mechs to make up your Combat Unit:</p>
        {mechs.map((x, index) => {
          const isSelected = selected.includes(x.id);
          return (
            <div
              key={index}
              className={
                "bg-base-200 hover:bg-base-300 cursor-pointer rounded-md p-4 " +
                (isSelected ? "ring-2 ring-accent" : "")
              }
              onClick={() => {
                if (isSelected) {
                  setSelected((prev) => prev.filter((id) => id !== x.id));
                } else {
                  setSelected((prev) => [...prev, x.id]);
                }
              }}
            >
              <MechDisplay mech={x} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
