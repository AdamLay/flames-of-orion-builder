import { CombatUnitBuilder } from "@/components/CombatUnitBuilder";
import MenuBar from "@/components/MenuBar";

export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto flex flex-col">
      <MenuBar />

      <CombatUnitBuilder />
    </main>
  );
}
