"use client";

import React, { useState } from "react";
import {
  Mech,
  formatCredits,
  BUNKER_STARTING_CREDITS,
  BAY_CAPACITY,
  VehicleType,
  calculateMechCost,
} from "@/lib/game-data";
import { useBunkerStore } from "@/lib/bunkerStore";
import { MechBuilder } from "./MechBuilder";

interface BayItem {
  type: VehicleType;
  count: number;
}

export function BunkerManager() {
  const { bunker, mechs, addMechToBunker, updateMech, removeMech } = useBunkerStore();
  const [selectedBay, setSelectedBay] = useState<string | null>(null);

  const handleCreateStartingMechs = () => {
    // Create 4 starting mechs
    const newMech: Mech = {
      id: `mech-${Date.now()}-1`,
      callSign: `Mech 1`,
      baseCost: 0,
      frameType: "medium" as const,
      stats: {
        speed: 6,
        combatSkill: "4+",
        armor: "6+",
        hullPoints: 6,
        heatLimit: 10,
        platforms: 4,
      },
      upgrades: [],
      rangedWeapons: [],
      meleeWeapons: [],
      weaponAmmo: {},
    };

    addMechToBunker(newMech, bunker.bays[0]?.id);
  };

  const getTotalMechs = () => {
    return bunker.bays.reduce((sum, bay) => {
      if (bay.content?.type === "mech") {
        return sum + bay.content.ids.length;
      }
      return sum;
    }, 0);
  };

  const getUsedBayCount = () => {
    return bunker.bays.filter((bay) => bay.content !== null).length;
  };

  const getBayCapacityDisplay = (bayIndex: number): string => {
    const bay = bunker.bays[bayIndex];
    if (bay.content === null) {
      return "Empty";
    }
    const capacity = BAY_CAPACITY[bay.content.type];
    const used = bay.content.ids.length;
    return `${used}/${capacity}`;
  };

  const getSpentCredits = (): number => {
    return mechs.reduce((sum, mech) => sum + calculateMechCost(mech), 0);
  };

  const getAvailableCredits = (): number => {
    return BUNKER_STARTING_CREDITS - getSpentCredits();
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Bunker Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-center">
          <div className="bg-base-200 p-2 rounded">
            <div className="text-primary font-bold text-sm">BUNKER NAME</div>
            <div className="text-title text-xl font-bold">{bunker.name}</div>
          </div>
          <div className="bg-base-200 p-2 rounded">
            <div className="text-primary font-bold text-sm">MECHS STORED</div>
            <div className="text-title text-3xl font-bold">{getTotalMechs()}</div>
          </div>
          <div className="bg-base-200 p-2 rounded">
            <div className="text-primary font-bold text-sm">AVAILABLE CREDITS</div>
            <div className="text-title text-2xl font-bold text-success">
              {formatCredits(getAvailableCredits())}
            </div>
          </div>
          <div className="bg-base-200 p-2 rounded">
            <div className="text-primary font-bold text-sm">BAYS IN USE</div>
            <div className="text-title text-2xl font-bold">
              {getUsedBayCount()}/{bunker.bays.length}
            </div>
          </div>
        </div>

        {/* Storage Bays */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2 text-primary">STORAGE BAYS</h2>

          <div className="card-1 mb-4 bg-opacity-50 border-l-4 border-primary">
            <p className="text-xs text-gray-400">
              Bay Capacity: 1 Mech, 2 Ground Vehicles, 2 Aircraft, or 3 Infantry per bay
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bunker.bays.map((bay, index) => (
              <div
                key={bay.id}
                onClick={() => setSelectedBay(selectedBay === bay.id ? null : bay.id)}
                className={`card-1 p-4 cursor-pointer transition-all ${
                  selectedBay === bay.id ? "ring-2 ring-primary" : ""
                } ${bay.content ? "bg-opacity-60" : "bg-opacity-30"}`}>
                <div className="flex justify-between items-start mb-2">
                  <div className="font-bold text-primary">BAY {index + 1}</div>
                  <div className="text-sm font-mono text-gray-400">{getBayCapacityDisplay(index)}</div>
                </div>

                {bay.content ? (
                  (() => {
                    const content = mechs.find((x) => x.id === bay.content?.ids[0]);
                    return (
                      <div className="space-y-2">
                        <div className="text-sm font-bold capitalize">
                          {bay.content.type.replace("-", " ")}:{" "}
                          {content ? content.callSign : "Multiple Units"}
                        </div>
                        <div className="text-xs text-gray-400">
                          {bay.content.ids.length} unit{bay.content.ids.length !== 1 ? "s" : ""} stored
                        </div>
                      </div>
                    );
                  })()
                ) : (
                  <div className="space-y-2 flex flex-col items-center">
                    <div className="text-xs text-gray-500 italic">Bay is empty</div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const newMech: Mech = {
                          id: `mech-${Date.now()}`,
                          callSign: `Mech ${getTotalMechs() + 1}`,
                          baseCost: 0,
                          frameType: "medium" as const,
                          stats: {
                            speed: 6,
                            combatSkill: "4+",
                            armor: "6+",
                            hullPoints: 6,
                            heatLimit: 10,
                            platforms: 4,
                          },
                          upgrades: [],
                          rangedWeapons: [],
                          meleeWeapons: [],
                          weaponAmmo: {},
                        };
                        addMechToBunker(newMech, bay.id);
                      }}
                      className="btn btn-sm btn-success self-center">
                      + Add Mech
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mechs Management */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-primary">MECH CUSTOMIZATION</h2>
          {mechs.length === 0 ? (
            <div className="card-1 p-12 text-center">
              <div className="text-gray-400 text-lg mb-4">
                Start with 4 free Mechs. Customize them with your {formatCredits(BUNKER_STARTING_CREDITS)}!
              </div>
              <button onClick={handleCreateStartingMechs} className="btn btn-success self-center">
                + Add Starting Mech
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {mechs.map((mech) => (
                <MechBuilder
                  key={mech.id}
                  mech={mech}
                  onUpdate={(updatedMech) => updateMech(mech.id, updatedMech)}
                  onRemove={() => removeMech(mech.id)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Bunker Info */}
        <div className="card-1 mb-6 border-l-4 border-info">
          <p className="text-sm text-gray-300">
            <span className="font-bold text-info">Bunker Purpose:</span> After each battle, your Combat Unit
            returns here. Store additional Mechs, spare Upgrades, Credits, and loot between battles. Keep
            track of all platforms, credits, and extra models in your bunker.
          </p>
        </div>
      </div>
    </div>
  );
}
