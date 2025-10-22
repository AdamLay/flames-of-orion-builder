"use client";

import React from "react";
import { Mech, calculateMechCost, formatCredits } from "@/lib/game-data";
import { useMechStore } from "@/lib/mechStore";
import { MechBuilder } from "./MechBuilder";

export function CombatUnitBuilder() {
  const { mechs, addMech, updateMech, removeMech, setMechs } = useMechStore();

  const totalCredits = mechs.reduce((sum: number, mech: Mech) => sum + calculateMechCost(mech), 0);

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
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Summary Bar */}
        <div className="card-1 mb-4">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div>
              <div className="text-primary font-bold text-sm">MECHS IN UNIT</div>
              <div className="text-3xl font-bold">{mechs.length}</div>
            </div>
            <div>
              <div className="text-primary font-bold text-sm">TOTAL CREDITS</div>
              <div className="text-3xl font-bold">{formatCredits(totalCredits)}</div>
            </div>
            <div className="flex gap-3">
              <button onClick={addMech} className="btn btn-success">
                + Add Mech
              </button>
              {/* <button onClick={exportToJson} disabled={mechs.length === 0} className="btn btn-info">
                Export
              </button>
              <label className="btn btn-info">
                Import
                <input type="file" accept=".json" onChange={importFromJson} className="hidden" />
              </label> */}
            </div>
          </div>
        </div>

        {/* Info Box */}
        {/* <div className="card-1 mb-4">
          <div className="text-primary font-bold mb-2">Quick Guide</div>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• Each Mech costs $50,000 base</li>
            <li>• All Mechs start with 4 Platform slots (max 8 with upgrades)</li>
            <li>• Upgrades, Ranged Weapons, and Melee Weapons each use platform slots</li>
            <li>• Some upgrades are stackable (can be equipped multiple times)</li>
            <li>• Use the dropdowns to add equipment to each mech</li>
          </ul>
        </div> */}

        {/* Mechs List */}
        {mechs.length === 0 ? (
          <div className="card-1  p-12 text-center">
            <div className="text-gray-400 text-xl mb-4">No mechs in your combat unit yet</div>
            <button onClick={addMech} className="btn btn-success btn-lg self-center">
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
      </div>
    </div>
  );
}
