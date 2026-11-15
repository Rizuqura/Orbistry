import type { WorldViewSource } from "../../types/worldview";
import type { Point } from "./coordinates";

export const MIN_BUILDING_HEIGHT = 12;
export const MAX_BUILDING_HEIGHT = 56;
export const MODERATE_BUILDING_HEIGHT =
  (MIN_BUILDING_HEIGHT + MAX_BUILDING_HEIGHT) / 2;
export const BUILDING_FOOTPRINT = 0.22;
export const MAX_VISIBLE_BUILDINGS = 36;
export const BUILDING_EXTENT = 0.78;
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
  height: number | null;
  footprint: number;
  sources: readonly WorldViewSource[];
}>;
export type WorldBuilding = FileBuilding | OverflowBuilding;
const layoutCache = new WeakMap<
  readonly WorldViewSource[],
  readonly WorldBuilding[]
>();

/** Sums available authoritative bytes exactly, retaining the count of files whose size is unknown. No I/O occurs. */
export function sourceByteSummary(sources: readonly WorldViewSource[]): {
  bytes: bigint;
  unknown: number;
} {
  let bytes = BigInt(0);
  let unknown = 0;
  for (const source of sources) {
    if (
      source.status === "available" &&
      Number.isSafeInteger(source.sizeBytes) &&
      source.sizeBytes! >= 0
    )
      bytes += BigInt(source.sizeBytes!);
    else unknown += 1;
  }
  return { bytes, unknown };
}

/** Formats exact known bytes and a readable binary unit, explicitly marking incomplete totals. */
export function sourceSizeLabel(sources: readonly WorldViewSource[]): string {
  const { bytes, unknown } = sourceByteSummary(sources);
  const units = ["bytes", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB"];
  let divisor = BigInt(1);
  let unit = 0;
  while (bytes / divisor >= BigInt(1024) && unit < units.length - 1) {
    divisor *= BigInt(1024);
    unit += 1;
  }
  const readable = unit
    ? `${(Number((bytes * BigInt(100)) / divisor) / 100).toLocaleString(undefined, { maximumFractionDigits: 2 })} ${units[unit]} (${bytes.toLocaleString()} bytes)`
    : `${bytes.toLocaleString()} bytes`;
  return `${readable}${unknown ? ` known; ${unknown} file size${unknown === 1 ? "" : "s"} unavailable` : ""}`;
}

/** Distributes bounded slots across the chip from its top to bottom corner, reserving the exact center for the icon. */
function buildingSlots(count: number): Point[] {
  const side = Math.ceil(Math.sqrt(count + 1));
  const slots: Point[] = [];
  for (let row = 0; row < side; row += 1) {
    for (let column = 0; column < side; column += 1) {
      const x = Number(
        (
          -BUILDING_EXTENT +
          (column * 2 * BUILDING_EXTENT) / (side - 1)
        ).toFixed(12),
      );
      const y = Number(
        (-BUILDING_EXTENT + (row * 2 * BUILDING_EXTENT) / (side - 1)).toFixed(
          12,
        ),
      );
      if (Math.abs(x) < 1e-8 && Math.abs(y) < 1e-8) continue;
      slots.push({ x, y });
    }
  }
  slots.sort((a, b) => a.x + a.y - b.x - b.y || a.x - b.x);
  return Array.from(
    { length: count },
    (_, index) =>
      slots[
        count === 1 ? 0 : Math.round((index * (slots.length - 1)) / (count - 1))
      ],
  );
}

/** Returns the file-type roof color, including grey-green XLSX, accepting mixed case and an optional dot. */
export function fileBuildingColor(extension: string): string {
  switch (extension.trim().toLowerCase().replace(/^\./, "")) {
    case "pdf":
      return "#f4a3a3";
    case "md":
      return "#6ea8fe";
    case "csv":
      return "#fff0a6";
    case "xlsx":
      return "#8fa89a";
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
 * Spreads files across the full platform from largest at the top toward smaller
 * files below. Dense collections retain the largest quarter independently,
 * within 35 individual slots, and sum the remainder into one inspectable group.
 * Caches painter order by immutable source-array identity, preserving assignments and file heights.
 */
export function layoutFileBuildings(
  sources: readonly WorldViewSource[],
): readonly WorldBuilding[] {
  const cached = layoutCache.get(sources);
  if (cached) return cached;
  const heights = normalizedBuildingHeights(sources);
  const ordered = [...sources].sort(
    /** Ranks actual known bytes before stable IDs, including sizes whose logarithmic heights round to the same value. */ function compareSize(
      a,
      b,
    ) {
      const aBytes = heights.get(a.sourceId) == null ? -1 : a.sizeBytes!;
      const bBytes = heights.get(b.sourceId) == null ? -1 : b.sizeBytes!;
      return (
        bBytes - aBytes ||
        (a.sourceId < b.sourceId ? -1 : a.sourceId > b.sourceId ? 1 : 0)
      );
    },
  );
  const overflow = ordered.length > MAX_VISIBLE_BUILDINGS;
  const individualCount = overflow
    ? Math.min(MAX_VISIBLE_BUILDINGS - 1, Math.ceil(ordered.length / 4))
    : ordered.length;
  const count = individualCount + (overflow ? 1 : 0);
  if (!count) return [];
  const slots = buildingSlots(count);
  const buildings: WorldBuilding[] = [];
  for (let index = 0; index < count; index += 1) {
    const position = slots[index];
    if (overflow && index === count - 1) {
      const grouped = ordered.slice(individualCount);
      const summary = sourceByteSummary(grouped);
      const known = ordered.filter(
        (source) =>
          heights.get(source.sourceId) !== null &&
          heights.get(source.sourceId) !== undefined,
      );
      const minimum = known.length ? Math.log1p(known.at(-1)!.sizeBytes!) : 0;
      const maximum = known.length ? Math.log1p(known[0].sizeBytes!) : 0;
      const height =
        summary.unknown === grouped.length
          ? null
          : maximum === minimum
            ? MODERATE_BUILDING_HEIGHT
            : Math.min(
                MAX_BUILDING_HEIGHT,
                MIN_BUILDING_HEIGHT +
                  ((Math.log1p(Number(summary.bytes)) - minimum) /
                    (maximum - minimum)) *
                    (MAX_BUILDING_HEIGHT - MIN_BUILDING_HEIGHT),
              );
      buildings.push({
        kind: "overflow",
        count: grouped.length,
        position,
        height,
        footprint: BUILDING_FOOTPRINT,
        sources: grouped,
      });
    } else
      buildings.push({
        kind: "file",
        source: ordered[index],
        position,
        height: heights.get(ordered[index].sourceId) ?? null,
        footprint: BUILDING_FOOTPRINT,
      });
  }
  const orderedBuildings = buildings.sort(
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
  layoutCache.set(sources, orderedBuildings);
  return orderedBuildings;
}
