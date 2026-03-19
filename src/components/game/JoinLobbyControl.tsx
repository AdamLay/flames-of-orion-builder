import { Events, useGameLobby } from "@/hooks/useGameLobby";
import { useLobbyStore } from "@/lib/lobbyStore";
import { useState } from "react";

export default function JoinLobbyControl() {
  const { socket } = useGameLobby();
  const { setLobbyId } = useLobbyStore();
  const [joinLobbyId, setJoinLobbyId] = useState("");
  const [joinState, setJoinState] = useState({
    loading: false,
    error: false,
    success: false,
  });

  const handleJoinLobby = () => {
    setJoinState({ loading: true, error: false, success: false });
    const errorTimeout = setTimeout(() => {
      setJoinState({ loading: false, error: true, success: false });
    }, 2500);

    socket!.off(Events.client_inquire_ack);

    // Receive the lobby state if the lobby exists and we can join
    socket!.on(Events.client_inquire_ack, (res: any) => {
      console.log(Events.client_inquire, res);
      clearTimeout(errorTimeout);
      setJoinState({ loading: false, error: false, success: true });
      setLobbyId(joinLobbyId);
    });

    // Ask if the lobby exists
    socket!.emit(Events.client_inquire, joinLobbyId);
  };

  return (
    <div className="flex flex-col w-full gap-4">
      <button className="btn btn-secondary" onClick={handleJoinLobby} disabled={joinState.loading}>
        {joinState.loading ? "Joining..." : "Join Lobby"}
      </button>
      <input
        type="text"
        placeholder="Lobby ID"
        className="input input-bordered w-full"
        value={joinLobbyId}
        onChange={(e) => setJoinLobbyId(e.target.value)}
      />
      {joinState.success && <p className="text-success">Successfully joined the lobby!</p>}
      {joinState.error && (
        <p className="text-error">Failed to join lobby. Please check the ID and try again.</p>
      )}
    </div>
  );
}
