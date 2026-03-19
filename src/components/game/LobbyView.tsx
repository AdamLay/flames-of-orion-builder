import { useMediaQuery } from "@/hooks";
import { useLobbyStore } from "@/lib/lobbyStore";
import { useContext } from "react";
import { SwiperSlide } from "swiper/react";
import MechDisplay from "../MechDisplay";
import { ContextSwiper, SwiperContext } from "../ui/SwiperContext";

export default function LobbyView() {
  const { slideIndex, handleSlideChange } = useContext(SwiperContext);
  const { combatUnits } = useLobbyStore();
  const isSmallScreen = useMediaQuery("(max-width: 767px)");

  if (!isSmallScreen) {
    return (
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
    );
  }

  return (
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
  );
}
