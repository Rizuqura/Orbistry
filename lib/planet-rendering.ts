import type { KnowledgeNode, NodeLayout } from "../types/graph";
import type { PlanetCamera } from "./planet-navigation";

export function fitPlanetCamera(
  width: number,
  height: number,
  worldWidth: number,
  worldHeight: number,
): PlanetCamera {
  if (
    ![width, height, worldWidth, worldHeight].every(
      (n) => Number.isFinite(n) && n > 0,
    )
  )
    return { x: 0, y: 0, k: 1 };
  const k = Math.min(
    1.5,
    Math.max(1, width - 96) / worldWidth,
    Math.max(1, height - 96) / worldHeight,
  );
  return {
    x: width / 2 - (worldWidth / 2) * k,
    y: height / 2 - (worldHeight / 2) * k,
    k,
  };
}
export function inPlanetViewport(
  position: NodeLayout,
  camera: PlanetCamera,
  width: number,
  height: number,
  padding = 160,
): boolean {
  const x = position.x * camera.k + camera.x,
    y = position.y * camera.k + camera.y;
  const radius = (position.size * camera.k) / 2 + padding;
  return (
    x + radius >= 0 &&
    y + radius >= 0 &&
    x - radius <= width &&
    y - radius <= height
  );
}
export function edgeInPlanetViewport(
  a: Pick<NodeLayout, "x" | "y">,
  b: Pick<NodeLayout, "x" | "y">,
  camera: PlanetCamera,
  width: number,
  height: number,
): boolean {
  const ax = a.x * camera.k + camera.x,
    ay = a.y * camera.k + camera.y;
  const bx = b.x * camera.k + camera.x,
    by = b.y * camera.k + camera.y;
  return (
    Math.max(ax, bx) >= -32 &&
    Math.max(ay, by) >= -32 &&
    Math.min(ax, bx) <= width + 32 &&
    Math.min(ay, by) <= height + 32
  );
}
export function overviewNodes(
  nodes: readonly KnowledgeNode[],
  limit = 1024,
): KnowledgeNode[] {
  if (nodes.length <= limit) return [...nodes];
  const directories = nodes.filter((n) => n.type === "directory");
  const files = nodes.filter((n) => n.type === "file");
  const sample = (items: KnowledgeNode[], count: number) =>
    count > 0
      ? Array.from(
          { length: Math.min(count, items.length) },
          (_, index) =>
            items[
              Math.floor((index * items.length) / Math.min(count, items.length))
            ],
        )
      : [];
  const anchors = sample(directories, limit);
  return [...anchors, ...sample(files, limit - anchors.length)];
}
