import type { WorldViewSource } from "../../types/worldview";
import type { Point } from "./coordinates";

export const MIN_BUILDING_HEIGHT = 12;
export const MAX_BUILDING_HEIGHT = 56;
export const MODERATE_BUILDING_HEIGHT =
  (MIN_BUILDING_HEIGHT + MAX_BUILDING_HEIGHT) / 2;
export const BUILDING_FOOTPRINT = 0.22;
export const MAX_VISIBLE_BUILDINGS = 9;
const BUILDING_SPACING = 0.3;
// Fill diagonal rows from the screen's top corner to its bottom corner.
const BUILDING_SLOTS: readonly Point[] = [
  { x: -1, y: -1 },
  { x: -1, y: 0 },
  { x: 0, y: -1 },
  { x: -1, y: 1 },
  { x: 0, y: 0 },
  { x: 1, y: -1 },
  { x: 0, y: 1 },
  { x: 1, y: 0 },
  { x: 1, y: 1 },
];
export type FileBuilding = Readonly<{
  kind: "file";
  source: WorldViewSource;
  position: Point;
  height: number | null;
  footprint: number;
}>;
export type OverflowBuilding = Readonly<{
  kind: "overflow";
  count: number;
  position: Point;
  height: number;
  footprint: number;
}>;
export type WorldBuilding = FileBuilding | OverflowBuilding;

/** Returns the file-type roof color from an extension, accepting mixed case and an optional dot; other types stay neutral. */
export function fileBuildingColor(extension: string): string {
  switch (extension.trim().toLowerCase().replace(/^\./, "")) {
    case "pdf":
      return "#f4a3a3";
    case "md":
      return "#6ea8fe";
    case "csv":
      return "#fff0a6";
    case "png":
    case "jpg":
    case "jpeg":
      return "#ffffff";
    default:
      return "#6e8392";
  }
}

/** Computes per-entity log(1+bytes) min–max heights; unavailable metadata gets no fabricated height. */
export function normalizedBuildingHeights(
  sources: readonly WorldViewSource[],
): ReadonlyMap<string, number | null> {
  const values: number[] = [];
  for (const source of sources)
    if (
      source.status === "available" &&
      Number.isSafeInteger(source.sizeBytes) &&
      source.sizeBytes! >= 0
    )
      values.push(Math.log1p(source.sizeBytes!));
  const minimum = values.length ? Math.min(...values) : 0;
  const maximum = values.length ? Math.max(...values) : 0;
  const heights = new Map<string, number | null>();
  for (const source of sources) {
    if (
      source.status !== "available" ||
      !Number.isSafeInteger(source.sizeBytes) ||
      source.sizeBytes! < 0
    )
      heights.set(source.sourceId, null);
    else if (maximum === minimum)
      heights.set(source.sourceId, MODERATE_BUILDING_HEIGHT);
    else
      heights.set(
        source.sourceId,
        MIN_BUILDING_HEIGHT +
          ((Math.log1p(source.sizeBytes!) - minimum) / (maximum - minimum)) *
            (MAX_BUILDING_HEIGHT - MIN_BUILDING_HEIGHT),
      );
  }
  return heights;
}

/**
 * Arranges largest files at the top corner of a square cluster, with smaller
 * files filling diagonal rows toward the bottom corner. Equal heights use stable
 * source IDs; unavailable files and overflow occupy the last slots.
 * Returns back-to-front painter order
 * without mutating sources or their per-entity height normalization.
 */
export function layoutFileBuildings(
  sources: readonly WorldViewSource[],
): WorldBuilding[] {
  const heights = normalizedBuildingHeights(sources);
  const ordered = [...sources].sort(
    /** Places taller known files first, breaking equal/missing heights by stable ID. */ function compareSize(
      a,
      b,
    ) {
      return (
        (heights.get(b.sourceId) ?? -1) - (heights.get(a.sourceId) ?? -1) ||
        (a.sourceId < b.sourceId ? -1 : a.sourceId > b.sourceId ? 1 : 0)
      );
    },
  );
  const overflow = ordered.length > MAX_VISIBLE_BUILDINGS;
  const count = Math.min(ordered.length, MAX_VISIBLE_BUILDINGS);
  if (!count) return [];
  const buildings: WorldBuilding[] = [];
  for (let index = 0; index < count; index += 1) {
    const slot = BUILDING_SLOTS[index];
    const position = {
      x: slot.x * BUILDING_SPACING,
      y: slot.y * BUILDING_SPACING,
    };
    if (overflow && index === count - 1)
      buildings.push({
        kind: "overflow",
        count: ordered.length - index,
        position,
        height: MIN_BUILDING_HEIGHT,
        footprint: BUILDING_FOOTPRINT,
      });
    else
      buildings.push({
        kind: "file",
        source: ordered[index],
        position,
        height: heights.get(ordered[index].sourceId) ?? null,
        footprint: BUILDING_FOOTPRINT,
      });
  }
  return buildings.sort(
    /** Orders standing prisms from back to front on the ground plane. */ function compareDepth(
      a,
      b,
    ) {
      return (
        a.position.x + a.position.y - b.position.x - b.position.y ||
        a.position.x - b.position.x
      );
    },
  );
}
