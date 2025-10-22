import { useMechStore } from "@/lib/mechStore";

interface ImportExportControlProps {}

export default function ImportExportControl({}: ImportExportControlProps) {
  const { mechs, setMechs } = useMechStore();

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
    <>
      <button onClick={exportToJson} disabled={mechs.length === 0} className="btn btn-info">
        Export
      </button>
      <label className="btn btn-info">
        Import
        <input type="file" accept=".json" onChange={importFromJson} className="hidden" />
      </label>
    </>
  );
}
