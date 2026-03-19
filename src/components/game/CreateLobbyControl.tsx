import { Events, useGameLobby } from "@/hooks/useGameLobby";
import { useLobbyStore } from "@/lib/lobbyStore";

export default function CreateLobbyControl() {
  const { lobbyId, setLobbyId } = useLobbyStore();
  const { socket } = useGameLobby();

  const handleCreateLobby = () => {
    // Register a new lobby with the server
    socket!.emit(Events.host, (lobbyId: string) => {
      setLobbyId(lobbyId);
    });
  };

  return (
    <div className="flex flex-col w-full gap-4">
      <button className="btn btn-primary" onClick={handleCreateLobby}>
        Create Lobby
      </button>
      {lobbyId && <p>LobbyId: {lobbyId}</p>}
    </div>
  );
}
