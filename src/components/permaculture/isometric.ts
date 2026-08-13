// Minimal isometric projection helper. Grid units -> 2D screen points, so
// every shape in the scene shares one consistent axis system instead of
// hand-guessed coordinates.
const ANGLE = Math.PI / 6; // 30deg
const COS = Math.cos(ANGLE);
const SIN = Math.sin(ANGLE);

export type Pt3 = [number, number, number]; // [x, y, z] in grid units

export interface IsoOptions {
  unit: number;
  originX: number;
  originY: number;
}

export function iso([x, y, z]: Pt3, { unit, originX, originY }: IsoOptions): [number, number] {
  const sx = (x - y) * COS * unit + originX;
  const sy = (x + y) * SIN * unit - z * unit + originY;
  return [sx, sy];
}

export function isoPoints(pts: Pt3[], opts: IsoOptions): string {
  return pts.map((p) => iso(p, opts).join(",")).join(" ");
}
