import type { LayoutResult, PlanetGraph, PlanetOrbit } from "../types/graph";
import type { PlanetCamera } from "./planet-navigation";

// One quiet circular guide per folder system; no animated orbital simulation.
export function withPlanetOrbits(
  graph: PlanetGraph,
  layout: LayoutResult,
): LayoutResult {
  if (graph.projection === "station") return { ...layout, orbits: [] };
  if (layout.orbits) return layout;
  const orbits: PlanetOrbit[] = [];
  let minX = 0,
    minY = 0,
    maxX = layout.width,
    maxY = layout.height;
  for (const parent of graph.nodes) {
    if (parent.type !== "directory") continue;
    const center = layout.positions.get(parent.id);
    if (!center) continue;
    let radius = 0;
    for (const childId of parent.children) {
      const child = graph.byId.get(childId),
        position = layout.positions.get(childId);
      if (!position || !child) continue;
      radius = Math.max(
        radius,
        Math.hypot(position.x - center.x, position.y - center.y),
      );
    }
    if (radius <= center.size / 2) continue;
    orbits.push({ parentId: parent.id, x: center.x, y: center.y, radius });
    minX = Math.min(minX, center.x - radius - 48);
    minY = Math.min(minY, center.y - radius - 48);
    maxX = Math.max(maxX, center.x + radius + 48);
    maxY = Math.max(maxY, center.y + radius + 48);
  }
  // Fit includes complete circles, not just the child planets on one side.
  const positions = new Map(
    [...layout.positions].map(([id, pos]) => [
      id,
      {
        ...pos,
        x: pos.x - minX,
        y: pos.y - minY,
        size: pos.size,
      },
    ]),
  );
  return {
    ...layout,
    positions,
    width: maxX - minX,
    height: maxY - minY,
    minX: layout.minX - minX,
    minY: layout.minY - minY,
    orbits: orbits.map((orbit) => ({
      ...orbit,
      x: orbit.x - minX,
      y: orbit.y - minY,
    })),
  };
}
export function orbitInPlanetViewport(
  orbit: PlanetOrbit,
  camera: PlanetCamera,
  width: number,
  height: number,
): boolean {
  const x = orbit.x * camera.k + camera.x,
    y = orbit.y * camera.k + camera.y,
    radius = orbit.radius * camera.k;
  if (radius < 8) return false;
  const nearX = Math.max(-24, Math.min(width + 24, x)),
    nearY = Math.max(-24, Math.min(height + 24, y));
  const farX = Math.max(Math.abs(x + 24), Math.abs(x - width - 24)),
    farY = Math.max(Math.abs(y + 24), Math.abs(y - height - 24));
  return (
    Math.hypot(x - nearX, y - nearY) <= radius &&
    Math.hypot(farX, farY) >= radius
  );
}
