import {
  CHIP_HALF_SIZE,
  CHIP_THICKNESS,
  DEFAULT_CHIP_COLOR,
  type WorldViewChip,
} from "./chips";
import { shadeChipColor, chipTextColor } from "./chip-colors";
import {
  drawFileBuildings,
  hitTestFileBuilding,
  type BuildingTarget,
} from "./building-renderer";
import { MAX_BUILDING_HEIGHT, type WorldBuilding } from "./buildings";
import {
  screenToWorld,
  worldToScreen,
  TILE_WIDTH,
  TILE_HEIGHT,
  type Point,
  type Viewport,
  type WorldCamera,
} from "./coordinates";

export type ChipPreview = Readonly<{ id: string; position: Point }>;

/** Orders opaque platforms from the back of the world to the front; hit testing reverses this order. */
export function orderChips(
  chips: readonly WorldViewChip[],
  preview?: ChipPreview | null,
): WorldViewChip[] {
  const ordered: WorldViewChip[] = [];
  for (const chip of chips)
    ordered.push(
      preview?.id === chip.id ? { ...chip, position: preview.position } : chip,
    );
  /** Compares ground depth with a stable lateral tie-breaker. */
  return ordered.sort(function compareDepth(first, second) {
    return (
      first.position.x +
        first.position.y -
        second.position.x -
        second.position.y || first.position.x - second.position.x
    );
  });
}

/**
 * Returns the frontmost chip under viewport-local CSS pixels, including its thin side faces.
 * Ports are part of the platform hit area and have no separate relationship behavior.
 */
export function hitTestChip(
  point: Point,
  chips: readonly WorldViewChip[],
  camera: WorldCamera,
  viewport: Viewport,
): WorldViewChip | null {
  return hitTestWorld(point, chips, camera, viewport)?.chip ?? null;
}

/** Resolves buildings before their own platform, following the reverse of the scene's painter order. */
export function hitTestWorld(
  point: Point,
  chips: readonly WorldViewChip[],
  camera: WorldCamera,
  viewport: Viewport,
): { chip: WorldViewChip; building: WorldBuilding | null } | null {
  const ordered = orderChips(chips);
  for (let index = ordered.length - 1; index >= 0; index -= 1) {
    const chip = ordered[index];
    const building = hitTestFileBuilding(point, chip, camera, viewport);
    if (building) return { chip, building };
    const center = worldToScreen(chip.position, camera, viewport);
    const localX =
      Math.abs((point.x - center.x) / camera.zoom) /
      (TILE_WIDTH * CHIP_HALF_SIZE);
    const localY = (point.y - center.y) / camera.zoom;
    const topLimit = TILE_HEIGHT * CHIP_HALF_SIZE * (1 - localX);
    if (
      localX <= 1 &&
      localY >= -topLimit &&
      localY <= topLimit + CHIP_THICKNESS
    )
      return { chip, building: null };
  }
  return null;
}

/** Returns a drag preview preserving the pointer's world offset from the chip center. */
export function draggedChipPosition(
  pointer: Point,
  offset: Point,
  camera: WorldCamera,
  viewport: Viewport,
): Point {
  const world = screenToWorld(pointer, camera, viewport);
  return { x: world.x - offset.x, y: world.y - offset.y };
}

/** Strokes and fills a closed polygon in the canvas's current local coordinate system. */
function drawPolygon(
  context: CanvasRenderingContext2D,
  vertices: readonly Point[],
  fill: string,
): void {
  context.beginPath();
  context.moveTo(vertices[0].x, vertices[0].y);
  for (let index = 1; index < vertices.length; index += 1)
    context.lineTo(vertices[index].x, vertices[index].y);
  context.closePath();
  context.fillStyle = fill;
  context.fill();
  context.stroke();
}

/**
 * Paints equal-sized custom-colored chips after the grid, culling offscreen platforms.
 * Uploaded icons remain centered as foreground badges even with file buildings;
 * the canvas owner supplies images, and complete names fit the label width in
 * contrast-aware ink.
 * Uses the same camera and CSS-pixel projection; only Canvas 2D drawing state is changed.
 */
export function drawWorldChips(
  context: CanvasRenderingContext2D,
  chips: readonly WorldViewChip[],
  camera: WorldCamera,
  viewport: Viewport,
  selectedId: string | null,
  preview?: ChipPreview | null,
  icons?: ReadonlyMap<string, CanvasImageSource>,
  selectedBuilding: BuildingTarget | null = null,
  hoveredBuilding: BuildingTarget | null = null,
): void {
  for (const chip of orderChips(chips, preview)) {
    const center = worldToScreen(chip.position, camera, viewport);
    const margin =
      (TILE_WIDTH + CHIP_THICKNESS + MAX_BUILDING_HEIGHT) * camera.zoom;
    if (
      center.x < -margin ||
      center.y < -margin ||
      center.x > viewport.width + margin ||
      center.y > viewport.height + margin
    )
      continue;
    context.save();
    context.translate(center.x, center.y);
    context.scale(camera.zoom, camera.zoom);
    context.lineWidth = 1 / camera.zoom;
    context.strokeStyle = "#687078";
    const color = chip.color ?? DEFAULT_CHIP_COLOR;
    const top = { x: 0, y: -TILE_HEIGHT };
    const right = { x: TILE_WIDTH, y: 0 };
    const bottom = { x: 0, y: TILE_HEIGHT };
    const left = { x: -TILE_WIDTH, y: 0 };
    drawPolygon(
      context,
      [
        left,
        bottom,
        { x: 0, y: TILE_HEIGHT + CHIP_THICKNESS },
        { x: -TILE_WIDTH, y: CHIP_THICKNESS },
      ],
      shadeChipColor(color, 0.55),
    );
    drawPolygon(
      context,
      [
        bottom,
        right,
        { x: TILE_WIDTH, y: CHIP_THICKNESS },
        { x: 0, y: TILE_HEIGHT + CHIP_THICKNESS },
      ],
      shadeChipColor(color, 0.72),
    );
    context.strokeStyle = selectedId === chip.id ? "#dc8d46" : "#687078";
    drawPolygon(context, [top, right, bottom, left], color);
    context.fillStyle = chipTextColor(color);
    context.textAlign = "center";
    context.textBaseline = "middle";
    const image = chip.iconImage ? icons?.get(chip.iconImage) : undefined;
    const hasBuildings = Boolean(chip.sources?.length);
    drawFileBuildings(context, chip, selectedBuilding, hoveredBuilding);
    if (image) context.drawImage(image, -14, -26, 28, 28);
    context.font = "11px 'Segoe UI', sans-serif";
    context.fillText(
      chip.name,
      0,
      hasBuildings ? 26 : 14,
      hasBuildings ? 90 : 112,
    );
    for (const point of [
      { x: -48, y: -24 },
      { x: 48, y: -24 },
      { x: -48, y: 24 },
      { x: 48, y: 24 },
    ]) {
      context.beginPath();
      context.arc(point.x, point.y, 3.5, 0, Math.PI * 2);
      context.fillStyle = "#171b1f";
      context.fill();
      context.stroke();
    }
    context.restore();
  }
}
