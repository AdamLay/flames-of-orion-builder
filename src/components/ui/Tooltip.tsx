import { allRules } from "@/lib/game-data";
import { memo } from "react";

interface TooltipProps {
  label: string;
  ruleId: string;
}

function Tooltip({ label, ruleId }: TooltipProps) {
  const ruleText = allRules.get(ruleId) || "No rule found";
  return (
    <div className="tooltip" data-tip={ruleText}>
      <p className="underline decoration-2 decoration-dashed">{label}</p>
    </div>
  );
}

export default memo(Tooltip);
