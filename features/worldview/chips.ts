import type { Point } from "./coordinates";
import type { WorldViewSource } from "../../types/worldview";

/** A chip covers two world units on each axis, with its center anchored to an integer cell. */
export const CHIP_HALF_SIZE = 1;
export const CHIP_THICKNESS = 8;
export const DEFAULT_CHIP_COLOR = "#262b30";
export type WorldViewChip = Readonly<{
  id: string;
  name: string;
  /** Retained for existing session snapshots; new edits clear text icons in favor of uploads. */
  icon: string;
  iconImage?: string;
  color: string;
  category?: string;
  tags: readonly string[];
  position: Point;
  sources?: readonly WorldViewSource[];
  indexRef?: string;
  createdAt?: string;
}>;
export type ChipDraft = Pick<
  WorldViewChip,
  "name" | "icon" | "iconImage" | "color" | "category" | "tags"
>;

/** Trims and deduplicates comma-separated tags without performing storage or indexing. */
export function parseChipTags(input: string): string[] {
  const tags = new Set<string>();
  for (const value of input.split(",")) {
    const tag = value.trim();
    if (tag) tags.add(tag);
  }
  return [...tags];
}

/** Returns the nearest integer world anchor; all platform corners then lie on grid vertices. */
export function snapChipPosition(position: Point): Point {
  return { x: Math.round(position.x), y: Math.round(position.y) };
}

/** Tests equal-sized world footprints, allowing shared borders but preventing overlap. */
export function chipPositionsOverlap(first: Point, second: Point): boolean {
  return (
    Math.abs(first.x - second.x) < CHIP_HALF_SIZE * 2 &&
    Math.abs(first.y - second.y) < CHIP_HALF_SIZE * 2
  );
}

/**
 * Finds a free snapped anchor near target, ignoring the chip being moved if supplied.
 * Searches finite expanding rings; 2n + 2 guarantees space for n equal-size platforms.
 * Returns world units without mutating chips or performing persistence.
 */
export function findAvailableChipPosition(
  target: Point,
  chips: readonly WorldViewChip[],
  excludeId?: string,
): Point {
  const origin = snapChipPosition(target);
  for (let radius = 0; radius <= chips.length * 2 + 2; radius += 1) {
    let nearest: Point | null = null;
    let distance = Infinity;
    for (let x = -radius; x <= radius; x += 1) {
      for (let y = -radius; y <= radius; y += 1) {
        if (Math.max(Math.abs(x), Math.abs(y)) !== radius) continue;
        const position = { x: origin.x + x, y: origin.y + y };
        let occupied = false;
        for (const chip of chips) {
          if (
            chip.id !== excludeId &&
            chipPositionsOverlap(position, chip.position)
          ) {
            occupied = true;
            break;
          }
        }
        // Screen distance respects the grid's 2:1 proportions when choosing nearby cells.
        const dx = position.x - target.x;
        const dy = position.y - target.y;
        const candidateDistance = 4 * (dx - dy) ** 2 + (dx + dy) ** 2;
        if (!occupied && candidateDistance < distance) {
          nearest = position;
          distance = candidateDistance;
        }
      }
    }
    if (nearest) return nearest;
  }
  throw new Error("Could not find an available chip position.");
}
