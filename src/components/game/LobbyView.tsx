import { useMediaQuery } from "@/hooks";
import { useLobbyStore } from "@/lib/lobbyStore";
import { ClipboardCopy, Minus, Plus } from "lucide-react";
import { useContext } from "react";
import { SwiperSlide } from "swiper/react";
import MechDisplay from "../MechDisplay";
import { ContextSwiper, SwiperContext } from "../ui/SwiperContext";

export default function LobbyView() {
  const { slideIndex, handleSlideChange } = useContext(SwiperContext);
  const lobbyState = useLobbyStore();
  const isSmallScreen = useMediaQuery("(max-width: 767px)");

  const { combatUnits, gameState } = lobbyState;

  const gameStateView = (
    <div className="bg-base-200 p-4 mb-4 rounded-md flex items-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <p className="text-sm font-semibold uppercase tracking-wide">Round</p>
        <div className="flex items-center gap-2">
          <button
            className="btn btn-circle btn-primary"
            onClick={() => lobbyState.setGameState({ round: Math.max(1, gameState.round - 1) })}
            disabled={gameState.round <= 1}
          >
            <Minus size={16} />
          </button>
          <span className="text-xl font-bold w-8 text-center">{gameState.round}</span>
          <button
            className="btn btn-circle btn-primary"
            onClick={() => lobbyState.setGameState({ round: gameState.round + 1 })}
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
      <div className="flex-1"></div>
      <button
        className="btn btn-success"
        onClick={async () => await navigator.clipboard.writeText(lobbyState.lobbyId!)}
      >
        <ClipboardCopy /> Lobby ID: {lobbyState.lobbyId}
      </button>
    </div>
  );

  const combatUnitView = (
    <>
      {!isSmallScreen ? (
        <div className="grid grid-cols-2 gap-2">
          {combatUnits.map((combatUnit) => (
            <div className="bg-base-200 p-2" key={combatUnit.player.id}>
              <p className="text-title text-xl text-accent mb-2 font-bold p-2">
                Cmdr. {combatUnit.player.name}
              </p>
              <div className="space-y-4">
                {combatUnit.units.map((x, index) => (
                  <div key={index} className="bg-base-300 p-4 rounded-md">
                    <MechDisplay key={index} mech={x} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="px-4">
          <div role="tablist" className="tabs tabs-lift mb-2">
            {combatUnits.map((combatUnit, index) => (
              <button
                role="tab"
                className={`tab ${slideIndex === index ? "tab-active" : ""}`}
                onClick={() => handleSlideChange(index)}
              >
                Player {index + 1}
              </button>
            ))}
          </div>
          <ContextSwiper>
            {combatUnits.map((combatUnit) => (
              <SwiperSlide key={combatUnit.player.id} style={{ minHeight: "100vh" }}>
                <p>{combatUnit.player.name}</p>
                <div className="space-y-4">
                  {combatUnit.units.map((x, index) => (
                    <div key={index} className="bg-base-300 p-4 rounded-md">
                      <MechDisplay key={index} mech={x} />
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </ContextSwiper>
        </div>
      )}
    </>
  );

  return (
    <>
      {gameStateView}
      {combatUnitView}
    </>
  );
}
