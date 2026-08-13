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
        {plant.imageUrl && (
          <p className="plant-detail__photo-credit">
            Photo:{" "}
            <a href="https://calscape.org" target="_blank" rel="noopener noreferrer">
              Calscape
            </a>
            , licensed{" "}
            <a
              href="https://creativecommons.org/licenses/by-nc/4.0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC BY-NC 4.0
            </a>
          </p>
        )}
        <div className="plant-detail__body">
          <h2>{plant.commonName}</h2>
          <p className="plant-detail__latin">{plant.latinName}</p>

          <div className="plant-detail__scores">
            <ScorePill label="Ease of care" value={plant.easeOfCare ?? "Not yet rated"} />
            <ScorePill label="Type" value={plant.type} />
          </div>

          <p>{plant.description}</p>

          <dl className="plant-detail__facts">
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
