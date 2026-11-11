import type { KnowledgeNode, NodeLayout } from "../types/graph";

export type PlanetSemanticBand = "far" | "normal" | "near";

export interface PlanetCameraTransform {
  x: number;
  y: number;
  k: number;
}

export interface ScreenPoint {
  x: number;
  y: number;
}

// Select visible node centers in screen coordinates, independent of drag direction.
export function boxSelectPlanetNodes(
  nodes: readonly KnowledgeNode[],
  positions: ReadonlyMap<string, NodeLayout>,
  camera: PlanetCameraTransform,
  start: ScreenPoint,
  end: ScreenPoint,
  band: PlanetSemanticBand,
): string[] {
  return nodes
    .filter((node) => {
      if (band === "far" && node.type === "file") return false;
      const position = positions.get(node.id);
      if (!position) return false;
      const x = camera.x + position.x * camera.k;
      const y = camera.y + position.y * camera.k;
      return (
        x >= Math.min(start.x, end.x) &&
        x <= Math.max(start.x, end.x) &&
        y >= Math.min(start.y, end.y) &&
        y <= Math.max(start.y, end.y)
      );
    })
    .map((node) => node.id);
}

// The same screen-space diameter drives bodies, label offsets and hit testing.
export function planetVisualDiameter(
  node: Pick<KnowledgeNode, "type" | "fileType" | "level">,
  worldSize: number,
  zoom: number,
): number {
  const minimum =
    node.type === "directory"
      ? node.level === 0
        ? 64
        : 20
      : node.fileType === "other"
        ? 8
        : 14;
  return Math.max(minimum, worldSize * zoom);
}

// Stable across camera zoom: use layout diameters, not CSS-scaled pixels.
// A logarithmic ramp keeps the hierarchy legible when the Universe is much larger.
export function planetSizeOpacity(
  size: number,
  minimum: number,
  maximum: number,
): number {
  if (![size, minimum, maximum].every(Number.isFinite)) return 0.45;
  if (maximum <= minimum) return 1;
  const low = Math.log1p(Math.max(0, minimum));
  const high = Math.log1p(Math.max(0, maximum));
  if (high <= low) return 1;
  const progress = (Math.log1p(Math.max(0, size)) - low) / (high - low);
  return 0.45 + 0.55 * Math.max(0, Math.min(1, progress));
}

interface HitCandidate {
  node: KnowledgeNode;
  distance: number;
  visualRadius: number;
  hitRadius: number;
}

function typePriority(node: KnowledgeNode): number {
  if (node.type === "directory") return 0;
  if (node.fileType !== "other") return 1;
  return 2;
}

function minimumHitRadius(node: KnowledgeNode): number {
  if (node.type === "directory") return 18;
  if (node.fileType !== "other") return 16;
  return 8;
}

function rank(left: HitCandidate, right: HitCandidate): number {
  const priority = typePriority(left.node) - typePriority(right.node);
  if (priority !== 0) return priority;
  const normalizedDistance =
    left.distance / left.hitRadius - right.distance / right.hitRadius;
  if (normalizedDistance !== 0) return normalizedDistance;
  return left.node.id.localeCompare(right.node.id);
}

export function pickPlanetNode(
  nodes: readonly KnowledgeNode[],
  positions: ReadonlyMap<string, NodeLayout>,
  camera: PlanetCameraTransform,
  pointer: ScreenPoint,
  semanticBand: PlanetSemanticBand,
): KnowledgeNode | null {
  const candidates: HitCandidate[] = [];

  for (const node of nodes) {
    if (semanticBand === "far" && node.type === "file") continue;
    const position = positions.get(node.id);
    if (!position) continue;
    const screenX = camera.x + position.x * camera.k;
    const screenY = camera.y + position.y * camera.k;
    const distance = Math.hypot(pointer.x - screenX, pointer.y - screenY);
    const visualRadius =
      planetVisualDiameter(node, position.size, camera.k) / 2;
    const hitRadius = Math.max(visualRadius, minimumHitRadius(node));
    if (distance <= hitRadius)
      candidates.push({ node, distance, visualRadius, hitRadius });
  }

  // A pointer directly over a rendered body should not be stolen by another
  // object's larger invisible assistance area.
  const direct = candidates.filter(
    (candidate) => candidate.distance <= candidate.visualRadius,
  );
  const pool = direct.length > 0 ? direct : candidates;
  pool.sort(rank);
  return pool[0]?.node ?? null;
}
