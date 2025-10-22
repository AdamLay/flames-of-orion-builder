import MenuBar from "@/components/MenuBar";
import Rules from "@/components/Rules";

export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto flex flex-col">
      <MenuBar />

      <Rules />
    </main>
  );
}
