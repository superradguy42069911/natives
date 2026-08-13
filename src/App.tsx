import { useMemo, useState } from "react";
import { plants, type Plant } from "./data/plants";
import { PlantGrid } from "./components/PlantGrid";
import { PlantDetail } from "./components/PlantDetail";
import { FilterBar, type SortKey } from "./components/FilterBar";
import "./styles/tokens.css";
import "./App.css";

function App() {
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const [selectedType, setSelectedType] = useState("all");
  const [sortKey, setSortKey] = useState<SortKey>("name");

  const types = useMemo(
    () => Array.from(new Set(plants.map((p) => p.type))).sort(),
    []
  );

  const visiblePlants = useMemo(() => {
    let result = plants;
    if (selectedType !== "all") {
      result = result.filter((p) => p.type === selectedType);
    }

    return [...result].sort((a, b) => {
      if (sortKey === "type") {
        return a.type.localeCompare(b.type) || a.commonName.localeCompare(b.commonName);
      }
      return a.commonName.localeCompare(b.commonName);
    });
  }, [selectedType, sortKey]);

  return (
    <div className="app">
      <header className="app__header">
        <h1>Southern California Native Plants</h1>
        <p>A field guide to 20 plants native to Southern California.</p>
      </header>

      <FilterBar
        types={types}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
        sortKey={sortKey}
        onSortChange={setSortKey}
      />

      <PlantGrid plants={visiblePlants} onSelect={setSelectedPlant} />

      {selectedPlant && (
        <PlantDetail plant={selectedPlant} onClose={() => setSelectedPlant(null)} />
      )}
    </div>
  );
}

export default App;
