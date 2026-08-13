import { iso, isoPoints, type IsoOptions, type Pt3 } from "./isometric";

// Shared geometry so "before" and "after" scenes are pixel-identical except
// for the added/removed elements. Downspout sits at the house's right-front
// corner (7,4); the driveway runs along that same side so the water story
// (roof -> downspout -> driveway -> street) stays geometrically consistent.
const GROUND: Pt3[] = [
  [0, 0, 0],
  [9, 0, 0],
  [9, 9, 0],
  [0, 9, 0],
];
const STREET: Pt3[] = [
  [-0.6, 8.6, 0],
  [9.6, 8.6, 0],
  [9.6, 9.6, 0],
  [-0.6, 9.6, 0],
];
const DRIVEWAY: Pt3[] = [
  [5.6, 4, 0],
  [8.2, 4, 0],
  [8.2, 8.6, 0],
  [5.6, 8.6, 0],
];

// House: footprint x 2-7, y 1-4, wall height 2.2, ridge along x at y=2.5, z=3.4
const WALL_RIGHT: Pt3[] = [
  [7, 1, 0],
  [7, 4, 0],
  [7, 4, 2.2],
  [7, 1, 2.2],
];
const WALL_FRONT: Pt3[] = [
  [2, 4, 0],
  [7, 4, 0],
  [7, 4, 2.2],
  [2, 4, 2.2],
];
const ROOF_SLOPE: Pt3[] = [
  [2, 4, 2.2],
  [7, 4, 2.2],
  [7, 2.5, 3.4],
  [2, 2.5, 3.4],
];
const ROOF_GABLE: Pt3[] = [
  [7, 1, 2.2],
  [7, 4, 2.2],
  [7, 2.5, 3.4],
];
const DOOR: Pt3[] = [
  [4.5, 4, 0],
  [5.1, 4, 0],
  [5.1, 4, 1.25],
  [4.5, 4, 1.25],
];
const WINDOW: Pt3[] = [
  [7, 1.9, 0.9],
  [7, 2.7, 0.9],
  [7, 2.7, 1.6],
  [7, 1.9, 1.6],
];

interface IsoHouseSceneProps {
  variant: "before" | "after";
  opts: IsoOptions;
}

export function IsoHouseScene({ variant, opts }: IsoHouseSceneProps) {
  const p = (pts: Pt3[]) => isoPoints(pts, opts);
  const downspoutTop = iso([7, 4, 2.2], opts);
  const downspoutBottom = iso([7, 4, 0.05], opts);

  return (
    <g>
      <polygon points={p(GROUND)} fill="#c9d1b8" />
      <polygon points={p(STREET)} fill="#5f5a52" />
      <polygon points={p(DRIVEWAY)} fill="#b7b2a6" />

      {variant === "after" && <AfterGroundFeatures opts={opts} />}

      <polygon points={p(WALL_RIGHT)} fill="#c9c2b0" />
      <polygon points={p(WALL_FRONT)} fill="#ddd6c4" />
      <polygon points={p(DOOR)} fill="var(--primary-dark)" />
      <polygon points={p(WINDOW)} fill="var(--offwhite)" stroke="var(--text-muted)" strokeWidth="0.5" />
      <polygon points={p(ROOF_SLOPE)} fill="var(--primary-mid)" />
      <polygon points={p(ROOF_GABLE)} fill="var(--primary)" />

      {variant === "before" && (
        <line
          x1={downspoutTop[0]}
          y1={downspoutTop[1]}
          x2={downspoutBottom[0]}
          y2={downspoutBottom[1]}
          stroke="var(--text-muted)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      )}

      {variant === "before" ? <BeforeFlow opts={opts} /> : <AfterFlow opts={opts} />}
    </g>
  );
}

function BeforeFlow({ opts }: { opts: IsoOptions }) {
  const start = iso([7, 4.2, 0.1], opts);
  const mid = iso([7, 6.4, 0.1], opts);
  const end = iso([6.9, 8.3, 0.1], opts);
  const drainA = iso([6.1, 8.75, 0], opts);
  const drainB = iso([7.9, 8.75, 0], opts);
  return (
    <g>
      <path
        d={`M${start[0]},${start[1]} Q${mid[0]},${mid[1]} ${end[0]},${end[1]}`}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 8"
      />
      <path
        d={`M${end[0] - 5},${end[1] - 4} L${end[0]},${end[1] + 2} L${end[0] + 5},${end[1] - 4}`}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1={drainA[0]} y1={drainA[1]} x2={drainB[0]} y2={drainB[1]} stroke="var(--offwhite)" strokeWidth="1.6" />
    </g>
  );
}

const LEAF_D = "M0 6 C-3.6 6.1, -5.4 3.4, -5 0.3 C-1.8 0.6, 0.4 2.9, 0 6 Z";

function AfterGroundFeatures({ opts }: { opts: IsoOptions }) {
  const SWALE: Pt3[] = [
    [1.7, 4.5, 0],
    [4.9, 4.5, 0],
    [5.3, 6.5, 0],
    [4.2, 8.5, 0],
    [1.4, 8.2, 0],
    [0.8, 6.2, 0],
  ];
  const leafSpots: Pt3[] = [
    [2.4, 5.2, 0],
    [3.7, 5.1, 0],
    [4.5, 6.1, 0],
    [2.5, 6.6, 0],
    [3.7, 7.2, 0],
    [2.1, 7.6, 0],
    [3.9, 8.0, 0],
    [1.8, 5.8, 0],
  ];
  const barrelTop = iso([7.5, 4.4, 1.1], opts);
  const downspoutTop = iso([7, 4, 2.2], opts);

  return (
    <g>
      <polygon points={isoPoints(SWALE, opts)} fill="var(--primary)" opacity="0.32" />
      {leafSpots.map(([x, y, z], i) => {
        const [sx, sy] = iso([x, y, z], opts);
        const rot = (i * 47) % 360;
        const scale = 0.85 + (i % 3) * 0.15;
        const color = i % 2 === 0 ? "var(--primary)" : "var(--primary-mid)";
        return (
          <path key={i} d={LEAF_D} fill={color} transform={`translate(${sx} ${sy}) rotate(${rot}) scale(${scale})`} />
        );
      })}

      {/* downspout feeds the rain barrel */}
      <path
        d={`M${downspoutTop[0]},${downspoutTop[1]} L${downspoutTop[0]},${barrelTop[1] - 2}`}
        stroke="var(--text-muted)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <rect x={barrelTop[0] - 9} y={barrelTop[1]} width="18" height="30" rx="4" fill="var(--primary-mid)" />
      <line x1={barrelTop[0] - 9} y1={barrelTop[1] + 10} x2={barrelTop[0] + 9} y2={barrelTop[1] + 10} stroke="var(--offwhite)" strokeWidth="1.2" opacity="0.7" />
      <line x1={barrelTop[0] - 9} y1={barrelTop[1] + 20} x2={barrelTop[0] + 9} y2={barrelTop[1] + 20} stroke="var(--offwhite)" strokeWidth="1.2" opacity="0.7" />
    </g>
  );
}

function AfterFlow({ opts }: { opts: IsoOptions }) {
  const spots: Pt3[] = [
    [2.6, 6.0, 0],
    [3.5, 6.9, 0],
    [2.4, 7.6, 0],
  ];
  return (
    <g>
      {spots.map(([x, y, z], i) => {
        const [sx, sy] = iso([x, y, z], opts);
        return (
          <path
            key={i}
            d={`M${sx},${sy - 9} L${sx},${sy - 1} M${sx - 3},${sy - 4} L${sx},${sy - 1} L${sx + 3},${sy - 4}`}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
        );
      })}
      {/* curb cut: small gap in the street edge, on the swale side */}
      <path
        d={(() => {
          const a = iso([2.0, 8.6, 0], opts);
          const b = iso([2.5, 8.9, 0], opts);
          const c = iso([3.4, 8.6, 0], opts);
          return `M${a[0]},${a[1]} L${b[0]},${b[1]} L${c[0]},${c[1]}`;
        })()}
        fill="none"
        stroke="var(--primary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}
