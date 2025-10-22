import { CombatUnitBuilder } from "@/components/CombatUnitBuilder";
import Rules from "@/components/Rules";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto flex flex-col">
      <Tabs defaultValue="rules" className="flex-1 flex flex-col">
        {/* Tab Navigation */}
        <TabsList className="grid grid-cols-2 md:grid-cols-4 py-4">
          <TabsTrigger value="rules">Rules</TabsTrigger>
          <TabsTrigger value="exciting">List Builder</TabsTrigger>
        </TabsList>

        {/* Tab Content */}
        <div className="flex-1 p-4">
          <TabsContent value="rules" className="h-full">
            <Rules />
            {/* <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Rules</h2>
                <p className="text-muted-foreground">Rules content will go here</p>
              </div>
            </div> */}
          </TabsContent>
          <TabsContent value="exciting" className="h-full">
            <CombatUnitBuilder />
          </TabsContent>
        </div>
      </Tabs>
    </main>
  );
  return;
}
