import type { Plant } from "../data/plants";
import { PlantImage } from "./PlantImage";
import { ScorePill } from "./ScorePill";

interface PlantCardProps {
  plant: Plant;
  onSelect: (plant: Plant) => void;
}

export function PlantCard({ plant, onSelect }: PlantCardProps) {
  return (
    <button className="plant-card" onClick={() => onSelect(plant)}>
      <PlantImage plant={plant} className="plant-card__image" />
      <div className="plant-card__body">
        <h3 className="plant-card__name">{plant.commonName}</h3>
        <p className="plant-card__latin">{plant.latinName}</p>
        <div className="plant-card__scores">
          <ScorePill label="Ease of care" value={plant.easeOfCare ?? "Not yet rated"} />
          <ScorePill label="Type" value={plant.type} />
        </div>
      </div>
    </button>
  );
}
