import type { Plant } from "../data/plants";
import { PlantCard } from "./PlantCard";

interface PlantGridProps {
  plants: Plant[];
  onSelect: (plant: Plant) => void;
}

export function PlantGrid({ plants, onSelect }: PlantGridProps) {
  if (plants.length === 0) {
    return <p className="plant-grid__empty">No plants match this filter.</p>;
  }

  return (
    <div className="plant-grid">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} onSelect={onSelect} />
      ))}
    </div>
  );
}
