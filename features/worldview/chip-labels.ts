import { CHIP_THICKNESS, type WorldViewChip } from "./chips";
import { hitTestWorld, type ChipPreview } from "./chip-renderer";
import { hitTestPort } from "./connectors";
import { MAX_BUILDING_HEIGHT } from "./buildings";
import {
  TILE_HEIGHT,
  TILE_WIDTH,
  worldToScreen,
  type Point,
  type Viewport,
  type WorldCamera,
} from "./coordinates";

/** Projects the floating title's top-center anchor ten CSS pixels below the chip's bottom face, including camera scale and live dragging. Pure. */
export function chipLabelAnchor(
  chip: WorldViewChip,
  camera: WorldCamera,
  viewport: Viewport,
  preview?: ChipPreview | null,
): Point {
  const center = worldToScreen(
    preview?.id === chip.id ? preview.position : chip.position,
    camera,
    viewport,
  );
  return {
    x: center.x,
    y: center.y + (TILE_HEIGHT + CHIP_THICKNESS) * camera.zoom + 10,
  };
}

/** Tests a control's nine hit-area samples against nearby canvas geometry and connector handles. Occluded controls yield to the existing world interactions. Pure. */
export function chipAgentControlClear(
  anchor: Point,
  nearby: readonly WorldViewChip[],
  camera: WorldCamera,
  viewport: Viewport,
): boolean {
  for (const dx of [0, 11, 22])
    for (const dy of [0, 11, 22]) {
      const point = { x: anchor.x + dx, y: anchor.y + dy };
      if (
        hitTestWorld(point, nearby, camera, viewport) ||
        hitTestPort(point, nearby, camera, viewport)
      )
        return false;
    }
  return true;
}

/** Indexes visible chip/building bounds in screen-space buckets once per paint, limiting assignment-control collision checks to local neighbors. */
function chipScreenBuckets(
  chips: readonly WorldViewChip[],
  camera: WorldCamera,
  viewport: Viewport,
): Map<string, WorldViewChip[]> {
  const buckets = new Map<string, WorldViewChip[]>();
  for (const chip of chips) {
    const center = worldToScreen(chip.position, camera, viewport);
    const left = Math.max(
      0,
      Math.floor((center.x - TILE_WIDTH * camera.zoom - 12) / 128),
    );
    const right = Math.min(
      Math.floor(viewport.width / 128),
      Math.floor((center.x + TILE_WIDTH * camera.zoom + 12) / 128),
    );
    const top = Math.max(
      0,
      Math.floor(
        (center.y - (TILE_HEIGHT + MAX_BUILDING_HEIGHT) * camera.zoom - 12) /
          128,
      ),
    );
    const bottom = Math.min(
      Math.floor(viewport.height / 128),
      Math.floor(
        (center.y + (TILE_HEIGHT + CHIP_THICKNESS) * camera.zoom + 12) / 128,
      ),
    );
    for (let x = left; x <= right; x++)
      for (let y = top; y <= bottom; y++) {
        const key = `${x}:${y}`;
        const items = buckets.get(key) ?? [];
        items.push(chip);
        buckets.set(key, items);
      }
  }
  return buckets;
}

/** Anchors the 22px assignment control below the bottom-right side face, reserving the south port's constant-pixel hit area at every zoom level. Pure. */
export function chipAgentAnchor(
  chip: WorldViewChip,
  camera: WorldCamera,
  viewport: Viewport,
  preview?: ChipPreview | null,
): Point {
  const center = worldToScreen(
    preview?.id === chip.id ? preview.position : chip.position,
    camera,
    viewport,
  );
  return {
    x: center.x + (TILE_WIDTH / 2) * camera.zoom - 11,
    y:
      center.y +
      (TILE_HEIGHT / 2) * camera.zoom +
      Math.max(CHIP_THICKNESS * camera.zoom, 8) +
      8,
  };
}

/** Positions titles and attached assignment controls with the live camera/drag preview, culling offscreen elements without React updates per frame. */
export function updateChipLabels(
  container: HTMLDivElement | null,
  chips: readonly WorldViewChip[],
  camera: WorldCamera,
  viewport: Viewport,
  preview?: ChipPreview | null,
): void {
  if (!container) return;
  const entities = new Map(chips.map((chip) => [chip.id, chip]));
  const visibleChips = preview
    ? chips.map((chip) =>
        chip.id === preview.id ? { ...chip, position: preview.position } : chip,
      )
    : chips;
  const buckets = chipScreenBuckets(visibleChips, camera, viewport);
  const labels = Array.from(
    container.querySelectorAll<HTMLButtonElement>("[data-chip-id]"),
  ).map(
    /** Measures the full wrapped title against its current stable entity identity. */
    (element) => ({
      element,
      chip: entities.get(element.dataset.chipId!),
      width: element.offsetWidth,
      height: element.offsetHeight,
    }),
  );
  for (const { element, chip, width, height } of labels) {
    if (!chip) {
      element.style.visibility = "hidden";
      continue;
    }
    const anchor = chipLabelAnchor(chip, camera, viewport, preview);
    const x = anchor.x - width / 2;
    const y = anchor.y;
    element.style.transform = `translate(${x}px, ${y}px)`;
    element.style.visibility =
      x + width < 0 ||
      y + height < 0 ||
      x > viewport.width ||
      y > viewport.height
        ? "hidden"
        : "visible";
  }
  for (const element of container.querySelectorAll<HTMLButtonElement>(
    "[data-agent-chip-id]",
  )) {
    const chip = entities.get(element.dataset.agentChipId!);
    if (!chip) {
      element.style.visibility = "hidden";
      continue;
    }
    const { x, y } = chipAgentAnchor(chip, camera, viewport, preview);
    element.style.transform = `translate(${x}px, ${y}px)`;
    if (x + 22 < 0 || y + 22 < 0 || x > viewport.width || y > viewport.height) {
      element.style.visibility = "hidden";
      continue;
    }
    const nearby = new Set<WorldViewChip>();
    for (const dx of [0, 22])
      for (const dy of [0, 22]) {
        for (const candidate of buckets.get(
          `${Math.floor((x + dx) / 128)}:${Math.floor((y + dy) / 128)}`,
        ) ?? [])
          nearby.add(candidate);
      }
    element.style.visibility = chipAgentControlClear(
      { x, y },
      [...nearby],
      camera,
      viewport,
    )
      ? "visible"
      : "hidden";
  }
}
