import type { Plant } from "../data/plants";
import { PlantImage } from "./PlantImage";
import { ScorePill } from "./ScorePill";

interface PlantDetailProps {
  plant: Plant;
  onClose: () => void;
}

export function PlantDetail({ plant, onClose }: PlantDetailProps) {
  return (
    <div className="plant-detail-overlay" onClick={onClose}>
      <div className="plant-detail" onClick={(e) => e.stopPropagation()}>
        <button className="plant-detail__close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <PlantImage plant={plant} className="plant-detail__image" />
        <div className="plant-detail__body">
          <h2>{plant.commonName}</h2>
          <p className="plant-detail__latin">{plant.latinName}</p>

          <div className="plant-detail__scores">
            <ScorePill label="Fire resistance" score={plant.fireResistanceScore} />
            <ScorePill label="Pollinator" score={plant.pollinatorScore} />
          </div>

          <p>{plant.description}</p>

          <dl className="plant-detail__facts">
            <dt>Type</dt>
            <dd>{plant.type}</dd>
            <dt>Size</dt>
            <dd>{plant.size}</dd>
            <dt>Sun needs</dt>
            <dd>{plant.sunNeeds}</dd>
            <dt>Water needs</dt>
            <dd>{plant.waterNeeds}</dd>
            <dt>Bloom season</dt>
            <dd>{plant.bloomSeason}</dd>
            <dt>Bloom color</dt>
            <dd>{plant.bloomColor}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
