import type { WorldViewChip } from "./chips";
import type { ChipPreview } from "./chip-renderer";
import {
  MIN_ZOOM,
  worldToScreen,
  type Point,
  type Viewport,
  type WorldCamera,
} from "./coordinates";
import { routePoint, type ConnectorRoute } from "./connectors";

export type LabelBounds = Readonly<{
  x: number;
  y: number;
  width: number;
  height: number;
}>;
export type ConnectorLabel = LabelBounds &
  Readonly<{ id: string; anchor: Point }>;

/** Checks padded label/platform rectangles to reserve readable space. Pure. */
function overlaps(first: LabelBounds, second: LabelBounds): boolean {
  return (
    first.x < second.x + second.width + 8 &&
    first.x + first.width + 8 > second.x &&
    first.y < second.y + second.height + 8 &&
    first.y + first.height + 8 > second.y
  );
}

/** Places labels near their own curves, searching nearby viewport space around already placed labels and chips. Dense views may exhaust available space. Pure. */
export function connectorLabelLayouts(
  entries: readonly Readonly<{
    id: string;
    anchor: Point;
    width: number;
    height: number;
  }>[],
  obstacles: readonly LabelBounds[],
  viewport: Viewport,
): ConnectorLabel[] {
  const placed: ConnectorLabel[] = [];
  const occupied = [...obstacles];
  const rings = Math.ceil(Math.sqrt(entries.length + obstacles.length)) + 1;
  for (const entry of entries) {
    const preferred = {
      x: entry.anchor.x - entry.width / 2,
      y: entry.anchor.y - entry.height - 14,
    };
    let chosen: LabelBounds | null = null;
    for (let ring = 0; ring <= rings && !chosen; ring++) {
      for (let row = -ring; row <= ring && !chosen; row++) {
        for (let column = -ring; column <= ring && !chosen; column++) {
          if (Math.max(Math.abs(row), Math.abs(column)) !== ring) continue;
          const candidate = {
            x: Math.max(
              8,
              Math.min(
                viewport.width - entry.width - 8,
                preferred.x + column * (entry.width + 12),
              ),
            ),
            y: Math.max(
              8,
              Math.min(
                viewport.height - entry.height - 8,
                preferred.y + row * (entry.height + 12),
              ),
            ),
            width: entry.width,
            height: entry.height,
          };
          if (!occupied.some((bounds) => overlaps(candidate, bounds)))
            chosen = candidate;
        }
      }
    }
    const bounds = chosen ?? {
      ...preferred,
      x: Math.max(8, Math.min(viewport.width - entry.width - 8, preferred.x)),
      y: Math.max(8, Math.min(viewport.height - entry.height - 8, preferred.y)),
      width: entry.width,
      height: entry.height,
    };
    occupied.push(bounds);
    placed.push({ ...bounds, id: entry.id, anchor: entry.anchor });
  }
  return placed;
}

/** Positions bubbles using their scaled bounds: size follows zoom below 170% and caps there. Bubbles/leaders fade below 130% and become hidden/inert at minimum zoom. */
export function updateConnectorLabels({
  container,
  context,
  routes,
  chips,
  camera,
  viewport,
  preview,
}: Readonly<{
  container: HTMLDivElement | null;
  context: CanvasRenderingContext2D;
  routes: readonly ConnectorRoute[];
  chips: readonly WorldViewChip[];
  camera: WorldCamera;
  viewport: Viewport;
  preview?: ChipPreview | null;
}>): void {
  if (!container) return;
  const scale = Math.min(1, camera.zoom / 1.7);
  const elements = new Map(
    Array.from(
      container.querySelectorAll<HTMLButtonElement>("[data-connector-id]"),
    ).map(
      /** Indexes rendered labels by their independent relationship identity. */
      (element) => [element.dataset.connectorId!, element],
    ),
  );
  const opacity = Math.max(
    0,
    Math.min(1, (camera.zoom - MIN_ZOOM) / (1.3 - MIN_ZOOM)),
  );
  container.style.opacity = String(opacity);
  container.inert = opacity === 0;
  if (opacity === 0) {
    for (const element of elements.values())
      element.style.visibility = "hidden";
    return;
  }
  const entries = routes.flatMap(
    /** Measures labels only when their curve anchor is inside the world viewport. */
    (route) => {
      const element = elements.get(route.connector.id);
      const anchor = routePoint(route, 0.5);
      if (
        !element ||
        anchor.x < 0 ||
        anchor.y < 0 ||
        anchor.x > viewport.width ||
        anchor.y > viewport.height
      )
        return [];
      return [
        {
          id: route.connector.id,
          anchor,
          width: element.offsetWidth * scale,
          height: element.offsetHeight * scale,
        },
      ];
    },
  );
  const obstacles = chips.map(
    /** Reserves the projected platform and its exact ports, including live chip movement. */
    (chip) => {
      const center = worldToScreen(
        preview?.id === chip.id ? preview.position : chip.position,
        camera,
        viewport,
      );
      return {
        x: center.x - 104 * camera.zoom,
        y: center.y - 56 * camera.zoom,
        width: 208 * camera.zoom,
        height: 120 * camera.zoom,
      };
    },
  );
  const canvasBounds = container.getBoundingClientRect();
  const interfaceObstacles =
    container.parentElement?.querySelectorAll<HTMLElement>(
      ".worldview-search, .worldview-chip-actions, .worldview-controls, .worldview-entity-context, .worldview-entity-name",
    );
  for (const element of interfaceObstacles ?? []) {
    if (!element.offsetWidth || !element.offsetHeight) continue;
    const bounds = element.getBoundingClientRect();
    obstacles.push({
      x: bounds.left - canvasBounds.left,
      y: bounds.top - canvasBounds.top,
      width: bounds.width,
      height: bounds.height,
    });
  }
  const labels = connectorLabelLayouts(entries, obstacles, viewport);
  for (const element of elements.values()) element.style.visibility = "hidden";
  context.save();
  context.globalAlpha *= opacity;
  context.strokeStyle = "#a2816780";
  context.lineWidth = 1;
  for (const label of labels) {
    const element = elements.get(label.id)!;
    element.style.transform = `translate(${label.x}px, ${label.y}px) scale(${scale})`;
    element.style.visibility = "visible";
    context.beginPath();
    context.moveTo(label.anchor.x, label.anchor.y);
    context.lineTo(
      Math.max(label.x, Math.min(label.x + label.width, label.anchor.x)),
      Math.max(label.y, Math.min(label.y + label.height, label.anchor.y)),
    );
    context.stroke();
  }
  context.restore();
}
