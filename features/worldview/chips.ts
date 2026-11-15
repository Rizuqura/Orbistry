import type { Point } from "./coordinates";
import type { WorldViewSource } from "../../types/worldview";

/** A chip covers two world units on each axis, with its center anchored to an integer cell. */
export const CHIP_HALF_SIZE = 1;
export const CHIP_THICKNESS = 8;
export const DEFAULT_CHIP_COLOR = "#262b30";
export type KnowledgeMenu = Readonly<{ id: string; title: string }>;
export const DEFAULT_KNOWLEDGE_MENUS: readonly KnowledgeMenu[] = [
  { id: "overview", title: "Overview" },
];
export type WorldViewChip = Readonly<{
  /** Stable entity key shared by file assignments and connector endpoints. */
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
  knowledgeMenus?: readonly KnowledgeMenu[];
}>;
export type ChipDraft = Pick<
  WorldViewChip,
  "name" | "icon" | "iconImage" | "color" | "category" | "tags"
> &
  Readonly<{ id?: string }>;

const TAG_STOP_WORDS = new Set(
  "a an and are as at be by for from in is it of on or the to with file files document documents".split(
    " ",
  ),
);

/**
 * Suggests up to twelve local metadata tags, favoring name/category terms and repeated filename terms.
 * Existing tags retain their spelling/order. Suggestions fit the editor's 500-character and 100-tag limits.
 * Accepts filenames only and performs no file reads, persistence or remote requests.
 */
export function suggestChipTags(
  name: string,
  category: string,
  filenames: readonly string[],
  existing: readonly string[],
): string[] {
  const scores = new Map<string, number>();
  /** Weighs normalized words while retaining multilingual letters and excluding generic words and bare numbers. */
  function scoreWords(text: string, weight: number): void {
    const words =
      text
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .normalize("NFKC")
        .toLocaleLowerCase("en")
        .match(/[\p{L}\p{N}]+/gu) ?? [];
    for (const word of words) {
      if (
        word.length < 2 ||
        word.length > 50 ||
        TAG_STOP_WORDS.has(word) ||
        /^\d+$/.test(word)
      )
        continue;
      scores.set(word, (scores.get(word) ?? 0) + weight);
    }
  }
  scoreWords(name, 6);
  scoreWords(category, 4);
  for (const filename of filenames)
    scoreWords(filename.replace(/\.[^.]+$/, ""), 1);
  const tags = [...existing];
  const seen = new Set(
    existing.map(
      /** Recognizes equivalent manual tags without changing their spelling. */ (
        tag,
      ) => tag.normalize("NFKC").toLocaleLowerCase("en"),
    ),
  );
  const ranked = [...scores].sort(
    /** Prioritizes metadata relevance, preserving encounter order for ties. */ (
      a,
      b,
    ) => b[1] - a[1],
  );
  let added = 0;
  for (const [word] of ranked) {
    if (added >= 12 || tags.length >= 100) break;
    if (seen.has(word) || [...tags, word].join(", ").length > 500) continue;
    tags.push(word);
    seen.add(word);
    added++;
  }
  return tags;
}

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
