import CreateLobbyControl from "@/components/game/CreateLobbyControl";
import JoinLobbyControl from "@/components/game/JoinLobbyControl";
import LobbyView from "@/components/game/LobbyView";
import PickCombatUnitControl from "@/components/game/PickCombatUnitControl";
import PlayerNameInput from "@/components/game/PlayerNameInput";
import { SwiperProvider } from "@/components/ui/SwiperContext";
import { useLoadLastBunker } from "@/hooks";
import { useGameLobby } from "@/hooks/useGameLobby";
import { useLobbyStore } from "@/lib/lobbyStore";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/game")({
  component: GamePage,
});

function GamePage() {
  const { loaded } = useGameLobby();
  const lobbyState = useLobbyStore();

  const hasJoined = lobbyState.combatUnits.some((x) => x.player.id === lobbyState.playerId);

  useLoadLastBunker();

  if (!loaded)
    return (
      <div className="w-full md:max-w-xl mx-auto">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );

  return (
    <SwiperProvider>
      <div className="w-full md:max-w-7xl mx-auto">
        {!lobbyState.lobbyId && (
          <div className="md:max-w-md mx-auto flex flex-col w-full gap-4">
            <PlayerNameInput />
            <hr />
            <CreateLobbyControl />
            <hr />
            <JoinLobbyControl />
          </div>
        )}
        {!hasJoined && <PickCombatUnitControl />}
        {hasJoined && <LobbyView />}
        <pre>{JSON.stringify(lobbyState, null, 2)}</pre>
      </div>
    </SwiperProvider>
  );
}
