"use client";

import React, { useState } from "react";
import { Mech, BASE_MECH_COST, BASE_MECH_STATS, calculateMechCost, formatCredits } from "@/lib/game-data";
import { MechBuilder } from "./MechBuilder";

export function CombatUnitBuilder() {
  const [mechs, setMechs] = useState<Mech[]>([]);

  const addMech = () => {
    const newMech: Mech = {
      id: `mech-${Date.now()}`,
      callSign: `Mech ${mechs.length + 1}`,
      baseCost: BASE_MECH_COST,
      stats: { ...BASE_MECH_STATS },
      upgrades: [],
      rangedWeapons: [],
      meleeWeapons: [],
    };
    setMechs([...mechs, newMech]);
  };

  const updateMech = (index: number, updatedMech: Mech) => {
    const newMechs = [...mechs];
    newMechs[index] = updatedMech;
    setMechs(newMechs);
  };

  const removeMech = (index: number) => {
    const newMechs = [...mechs];
    newMechs.splice(index, 1);
    setMechs(newMechs);
  };

  const totalCredits = mechs.reduce((sum, mech) => sum + calculateMechCost(mech), 0);

  const exportToJson = () => {
    const dataStr = JSON.stringify(mechs, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "combat-unit.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  const importFromJson = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target?.result as string);
        if (Array.isArray(imported)) {
          setMechs(imported);
        }
      } catch (error) {
        alert("Error importing file. Please check the file format.");
        console.error(error);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Summary Bar */}
        <div className="bg-slate-900 border-2 border-amber-600 rounded-lg p-6 mb-6">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div>
              <div className="text-amber-400 font-bold text-sm">MECHS IN UNIT</div>
              <div className="text-white text-3xl font-bold">{mechs.length}</div>
            </div>
            <div>
              <div className="text-amber-400 font-bold text-sm">TOTAL CREDITS</div>
              <div className="text-white text-3xl font-bold">{formatCredits(totalCredits)}</div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={addMech}
                className="bg-amber-600 hover:bg-amber-700 text-black px-6 py-3 rounded-lg font-bold text-lg">
                + Add Mech
              </button>
              <button
                onClick={exportToJson}
                disabled={mechs.length === 0}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-6 py-3 rounded-lg font-bold">
                Export
              </button>
              <label className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold cursor-pointer inline-block">
                Import
                <input type="file" accept=".json" onChange={importFromJson} className="hidden" />
              </label>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-slate-900 border border-amber-600 rounded-lg p-4 mb-6">
          <div className="text-amber-400 font-bold mb-2">Quick Guide</div>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• Each Mech costs $50,000 base</li>
            <li>• All Mechs start with 4 Platform slots (max 8 with upgrades)</li>
            <li>• Upgrades, Ranged Weapons, and Melee Weapons each use platform slots</li>
            <li>• Some upgrades are stackable (can be equipped multiple times)</li>
            <li>• Use the dropdowns to add equipment to each mech</li>
          </ul>
        </div>

        {/* Mechs List */}
        {mechs.length === 0 ? (
          <div className="bg-slate-900 border-2 border-dashed border-amber-600 rounded-lg p-12 text-center">
            <div className="text-gray-400 text-xl mb-4">No mechs in your combat unit yet</div>
            <button
              onClick={addMech}
              className="bg-amber-600 hover:bg-amber-700 text-black px-8 py-4 rounded-lg font-bold text-lg">
              + Add Your First Mech
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {mechs.map((mech, index) => (
              <MechBuilder
                key={mech.id}
                mech={mech}
                onUpdate={(updatedMech) => updateMech(index, updatedMech)}
                onRemove={() => removeMech(index)}
              />
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Flames of Orion Mech List Builder</p>
          <p className="mt-1">Build and customize your combat unit with mechs, weapons, and upgrades</p>
        </div>
      </div>
    </div>
  );
}
