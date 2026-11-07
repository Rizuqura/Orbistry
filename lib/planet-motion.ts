import type { LayoutResult, NodeLayout, PlanetGraph } from "../types/graph";

interface MotionEntry {
  id: string;
  parentId?: string;
  position: NodeLayout;
  phase: number;
}

export function preparePlanetMotion(
  graph: PlanetGraph,
  layout: LayoutResult,
): MotionEntry[] {
  const result: MotionEntry[] = [];
  const seen = new Set<string>();
  const visit = (startId: string) => {
    const queue = [startId];
    for (let index = 0; index < queue.length; index++) {
      const id = queue[index];
      if (seen.has(id)) continue;
      seen.add(id);
      const node = graph.byId.get(id),
        position = layout.positions.get(id);
      if (!position) continue;
      let hash = 0;
      for (const char of id)
        hash = (Math.imul(hash, 31) + char.charCodeAt(0)) | 0;
      result.push({
        id,
        parentId:
          node?.parentId && seen.has(node.parentId) ? node.parentId : undefined,
        position,
        phase: ((hash >>> 0) / 4294967296) * Math.PI * 2,
      });
      if (node) queue.push(...node.children);
    }
  };
  visit(graph.rootId);
  for (const id of layout.positions.keys()) visit(id);
  return result;
}

// Small pendulum arcs, rather than a force simulation. Parent-child distances
// and orbit radii stay constant, and every consumer uses the same positions.
export function animatePlanetLayout(
  base: LayoutResult,
  plan: readonly MotionEntry[],
  seconds: number,
): LayoutResult {
  if (seconds === 0) return base;
  const positions = new Map<string, NodeLayout>();
  for (const entry of plan) {
    const parent = entry.parentId ? positions.get(entry.parentId) : undefined;
    const originalParent = entry.parentId
      ? base.positions.get(entry.parentId)
      : undefined;
    if (!parent || !originalParent) {
      positions.set(entry.id, entry.position);
      continue;
    }
    const dx = entry.position.x - originalParent.x,
      dy = entry.position.y - originalParent.y;
    const angle =
      Math.min(0.035, 3.5 / Math.max(1, Math.hypot(dx, dy))) *
      (Math.sin(seconds * 0.35 + entry.phase) - Math.sin(entry.phase));
    const cosine = Math.cos(angle),
      sine = Math.sin(angle);
    positions.set(entry.id, {
      ...entry.position,
      x: parent.x + dx * cosine - dy * sine,
      y: parent.y + dx * sine + dy * cosine,
    });
  }
  return {
    ...base,
    positions,
    orbits: base.orbits?.map((orbit) => {
      const parent = positions.get(orbit.parentId);
      return parent ? { ...orbit, x: parent.x, y: parent.y } : orbit;
    }),
  };
}
