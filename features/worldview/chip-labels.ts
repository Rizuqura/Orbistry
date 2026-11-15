import { CHIP_THICKNESS, type WorldViewChip } from "./chips";
import type { ChipPreview } from "./chip-renderer";
import {
  TILE_HEIGHT,
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

/** Measures entity titles before positioning their DOM badges in CSS pixels. Names track chip/camera movement and cull outside the viewport. */
export function updateChipLabels(
  container: HTMLDivElement | null,
  chips: readonly WorldViewChip[],
  camera: WorldCamera,
  viewport: Viewport,
  preview?: ChipPreview | null,
): void {
  if (!container) return;
  const entities = new Map(chips.map((chip) => [chip.id, chip]));
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
}
