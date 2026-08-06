import { useState } from "react";
import type { Plant } from "../data/plants";

interface PlantImageProps {
  plant: Plant;
  className?: string;
}

// Shows the plant photo, or a placeholder graphic if no image is set yet
// (all plants start with an empty imageUrl until real photos are added).
export function PlantImage({ plant, className }: PlantImageProps) {
  const [failed, setFailed] = useState(false);

  if (!plant.imageUrl || failed) {
    return (
      <div className={`plant-image plant-image--placeholder ${className ?? ""}`}>
        <span aria-hidden="true">🌱</span>
        <span className="plant-image__placeholder-text">Photo coming soon</span>
      </div>
    );
  }

  return (
    <img
      className={`plant-image ${className ?? ""}`}
      src={plant.imageUrl}
      alt={plant.imageAlt}
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
}
