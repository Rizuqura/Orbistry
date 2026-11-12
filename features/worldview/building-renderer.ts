import {
  fileBuildingColor,
  layoutFileBuildings,
  type WorldBuilding,
} from "./buildings";
import { chipTextColor, shadeChipColor } from "./chip-colors";
import {
  projectWorld,
  worldToScreen,
  type Point,
  type Viewport,
  type WorldCamera,
} from "./coordinates";
import type { WorldViewChip } from "./chips";

export type BuildingTarget = Readonly<{
  chipId: string;
  sourceId: string | null;
}>;
type Faces = { top: Point[]; left: Point[]; right: Point[] };

/** Projects a fixed world footprint and vertical CSS-unit height into chip-local isometric faces. */
export function buildingFaces(building: WorldBuilding): Faces {
  const half = building.footprint / 2;
  const anchor = building.position;
  const top = projectWorld({ x: anchor.x - half, y: anchor.y - half });
  const right = projectWorld({ x: anchor.x + half, y: anchor.y - half });
  const bottom = projectWorld({ x: anchor.x + half, y: anchor.y + half });
  const left = projectWorld({ x: anchor.x - half, y: anchor.y + half });
  const height = building.height ?? 0;
  const raisedTop = { x: top.x, y: top.y - height };
  const raisedRight = { x: right.x, y: right.y - height };
  const raisedBottom = { x: bottom.x, y: bottom.y - height };
  const raisedLeft = { x: left.x, y: left.y - height };
  return {
    top: [raisedTop, raisedRight, raisedBottom, raisedLeft],
    left: [raisedLeft, raisedBottom, bottom, left],
    right: [raisedBottom, raisedRight, right, bottom],
  };
}

/** Returns whether a chip-local pointer lies inside a convex rendered face. */
function pointInFace(point: Point, vertices: readonly Point[]): boolean {
  let inside = false;
  for (
    let current = 0, previous = vertices.length - 1;
    current < vertices.length;
    previous = current++
  ) {
    const a = vertices[current],
      b = vertices[previous];
    if (
      a.y > point.y !== b.y > point.y &&
      point.x < ((b.x - a.x) * (point.y - a.y)) / (b.y - a.y) + a.x
    )
      inside = !inside;
  }
  return inside;
}

/** Returns the frontmost building under a viewport-local pointer using the exact painted faces. */
export function hitTestFileBuilding(
  point: Point,
  chip: WorldViewChip,
  camera: WorldCamera,
  viewport: Viewport,
): WorldBuilding | null {
  const center = worldToScreen(chip.position, camera, viewport);
  const local = {
    x: (point.x - center.x) / camera.zoom,
    y: (point.y - center.y) / camera.zoom,
  };
  const buildings = layoutFileBuildings(chip.sources ?? []);
  for (let index = buildings.length - 1; index >= 0; index -= 1) {
    const faces = buildingFaces(buildings[index]);
    if (
      pointInFace(local, faces.top) ||
      pointInFace(local, faces.left) ||
      pointInFace(local, faces.right)
    )
      return buildings[index];
  }
  return null;
}

/** Fills/strokes one visible prism face in the existing chip-local Canvas transform. */
function paintFace(
  context: CanvasRenderingContext2D,
  points: readonly Point[],
  fill: string,
): void {
  context.beginPath();
  context.moveTo(points[0].x, points[0].y);
  for (let index = 1; index < points.length; index += 1)
    context.lineTo(points[index].x, points[index].y);
  context.closePath();
  context.fillStyle = fill;
  context.fill();
  context.stroke();
}

/** Draws file-type colored prisms with shaded sides and orange active outlines, preserving caller transforms and explicit status markers. */
export function drawFileBuildings(
  context: CanvasRenderingContext2D,
  chip: WorldViewChip,
  selected: BuildingTarget | null,
  hovered: BuildingTarget | null,
): void {
  context.save();
  for (const building of layoutFileBuildings(chip.sources ?? [])) {
    const sourceId = building.kind === "file" ? building.source.sourceId : null;
    const active =
      (selected?.chipId === chip.id && selected.sourceId === sourceId) ||
      (hovered?.chipId === chip.id && hovered.sourceId === sourceId);
    context.strokeStyle = active ? "#ff9800" : "#7b8a95";
    const color =
      building.kind === "file"
        ? fileBuildingColor(building.source.extension)
        : "#6e8392";
    const faces = buildingFaces(building);
    if (building.height !== null) {
      paintFace(context, faces.left, shadeChipColor(color, 0.55));
      paintFace(context, faces.right, shadeChipColor(color, 0.72));
    }
    paintFace(context, faces.top, color);
    if (building.kind === "overflow" || building.height === null) {
      const center = projectWorld(building.position);
      context.fillStyle = chipTextColor(color);
      context.textAlign = "center";
      context.font = "9px 'Segoe UI', sans-serif";
      context.fillText(
        building.kind === "overflow" ? `+${building.count}` : "?",
        center.x,
        center.y - (building.height ?? 0),
      );
    }
  }
  context.restore();
}
