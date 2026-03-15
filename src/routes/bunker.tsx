import { BunkerManager } from "@/components/BunkerManager";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/bunker')({
   component: BunkerPage,
}) 
 function BunkerPage() {
  return <BunkerManager />;
}
