"use client";

import { usePathname, useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

interface MenuBarProps {}

export default function MenuBar({}: MenuBarProps) {
  const router = useRouter();
  const path = usePathname();

  console.log("path", path);
  return (
    <Tabs defaultValue={path} className="flex-1 flex flex-col" onValueChange={(x) => router.push(x)}>
      <TabsList className="grid grid-cols-2 md:grid-cols-4 py-4">
        <TabsTrigger value="/rules">Rules</TabsTrigger>
        <TabsTrigger value="/bunker">Bunker</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
