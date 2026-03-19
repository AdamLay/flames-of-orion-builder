import { useLobbyStore } from "@/lib/lobbyStore";

export default function PlayerNameInput() {
  const { playerName, setPlayerName } = useLobbyStore();
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        className="input input-bordered w-full"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
    </div>
  );
}
