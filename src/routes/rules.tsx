import Rules from "@/components/rules/Rules";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/rules')({
   component: RulesPage,
}) 
export default function RulesPage() {
  return <Rules />;
}
