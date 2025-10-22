"use client";

import React from "react";
import { Mech, calculateMechCost, formatCredits } from "@/lib/game-data";
import { useMechStore } from "@/lib/mechStore";
import { MechBuilder } from "./MechBuilder";
import ImportExportControl from "./ImportExportControl";

export function CombatUnitBuilder() {
  const { mechs, addMech, updateMech, removeMech } = useMechStore();

  const totalCredits = mechs.reduce((sum: number, mech: Mech) => sum + calculateMechCost(mech), 0);

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
              {/* <ImportExportControl /> */}
            </div>
          </div>
        </div>

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
