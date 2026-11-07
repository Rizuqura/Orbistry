import type { NodeLayout } from "../types/graph";
import type { PlanetCamera } from "./planet-navigation";

export interface PlanetLabelCandidate {
  id: string;
  name: string;
  position: NodeLayout;
  priority: number;
}
export interface PlanetLabel {
  id: string;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export function planetLabelFontSize(zoom: number): number {
  return zoom < 0.55 ? 10 : 11;
}

// Work in screen pixels: zooming moves labels but never enlarges their text.
// A spatial grid keeps collision checks local, even for a large vault.
export function layoutPlanetLabels(
  candidates: readonly PlanetLabelCandidate[],
  camera: PlanetCamera,
  width: number,
  height: number,
): PlanetLabel[] {
  const fontSize = planetLabelFontSize(camera.k);
  const accepted: PlanetLabel[] = [];
  const cells = new Map<string, PlanetLabel[]>();
  const keys = (box: PlanetLabel) => {
    const result: string[] = [];
    for (
      let x = Math.floor((box.x - 6) / 64);
      x <= Math.floor((box.x + box.width + 6) / 64);
      x++
    )
      for (
        let y = Math.floor((box.y - 6) / 64);
        y <= Math.floor((box.y + box.height + 6) / 64);
        y++
      )
        result.push(`${x},${y}`);
    return result;
  };
  const sorted = [...candidates].sort(
    (a, b) => b.priority - a.priority || a.id.localeCompare(b.id),
  );
  for (const candidate of sorted) {
    // Explicit width plus ellipsis bounds long names and wide Unicode glyphs.
    const labelWidth = Math.min(
      160,
      Math.max(24, [...candidate.name].length * fontSize * 0.7 + 4),
    );
    const box: PlanetLabel = {
      id: candidate.id,
      name: candidate.name,
      x: candidate.position.x * camera.k + camera.x - labelWidth / 2,
      y:
        (candidate.position.y + candidate.position.size / 2) * camera.k +
        camera.y +
        6,
      width: labelWidth,
      height: 16,
    };
    if (
      box.x < 4 ||
      box.y < 4 ||
      box.x + box.width > width - 4 ||
      box.y + box.height > height - 4
    )
      continue;
    const occupied = keys(box);
    if (
      occupied.some((key) =>
        cells
          .get(key)
          ?.some(
            (other) =>
              box.x < other.x + other.width + 6 &&
              box.x + box.width + 6 > other.x &&
              box.y < other.y + other.height + 6 &&
              box.y + box.height + 6 > other.y,
          ),
      )
    )
      continue;
    accepted.push(box);
    for (const key of occupied) {
      const bucket = cells.get(key) ?? [];
      bucket.push(box);
      cells.set(key, bucket);
    }
  }
  return accepted;
}
