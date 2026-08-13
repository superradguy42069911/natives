import { IsoHouseScene } from "./IsoHouseScene";
import type { IsoOptions } from "./isometric";

const UNIT = 30;
const SCENE_A: IsoOptions = { unit: UNIT, originX: 280, originY: 65 };
const SCENE_B: IsoOptions = { unit: UNIT, originX: 890, originY: 65 };

export function BeforeAfterIllustration() {
  return (
    <svg
      viewBox="0 0 1170 400"
      className="permaculture-illustration"
      role="img"
      aria-label="Before: an isometric house with the downspout draining across the driveway straight to the street. After: the same house with a rain barrel, a native-planted swale, and a curb cut so rain soaks in on site instead."
    >
      <text x="280" y="30" textAnchor="middle" className="permaculture-illustration__label">BEFORE</text>
      <text x="890" y="30" textAnchor="middle" className="permaculture-illustration__label">AFTER</text>

      <IsoHouseScene variant="before" opts={SCENE_A} />
      <IsoHouseScene variant="after" opts={SCENE_B} />

      <text x="280" y="385" textAnchor="middle" className="permaculture-illustration__caption">
        Runoff sheets off the driveway, straight to the storm drain
      </text>
      <text x="890" y="385" textAnchor="middle" className="permaculture-illustration__caption">
        Rain barrel, native planting, and a curb cut let it soak in
      </text>
    </svg>
  );
}
