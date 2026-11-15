import type { WorldViewChip } from "./chips";
import {
  worldToScreen,
  type Point,
  type WorldCamera,
  type Viewport,
} from "./coordinates";
import type { ChipPreview } from "./chip-renderer";

// IDs describe geometric anchors only. Every anchor accepts every relationship direction.
export const PORT_OFFSETS = {
  north: { x: -1, y: 0 },
  east: { x: 0, y: -1 },
  south: { x: 1, y: 0 },
  west: { x: 0, y: 1 },
} as const;
export type PortId = keyof typeof PORT_OFFSETS;
export type PortEndpoint = Readonly<{ entityId: string; portId: PortId }>;
export type WorldConnector = Readonly<{
  id: string;
  sourceEntityId: string;
  sourcePortId: PortId;
  targetEntityId: string;
  targetPortId: PortId;
  name: string;
  definition: string;
  direction: "directed" | "undirected";
}>;
export type ConnectorRoute = Readonly<{
  connector: WorldConnector;
  start: Point;
  control: Point;
  control2?: Point;
  end: Point;
}>;

/** Derives a repeatable unsigned seed from a relationship's saved identity so curves survive redraws and reloads. Pure. */
function connectorSeed(id: string): number {
  let seed = 2166136261;
  for (let index = 0; index < id.length; index++)
    seed = Math.imul(seed ^ id.charCodeAt(index), 16777619);
  return seed >>> 0;
}

/** Projects an anchor using the same world transform and optional live chip preview as the platforms. */
export function portPoint(
  chip: WorldViewChip,
  portId: PortId,
  camera: WorldCamera,
  viewport: Viewport,
  preview?: ChipPreview | null,
): Point {
  const position = preview?.id === chip.id ? preview.position : chip.position;
  const offset = PORT_OFFSETS[portId];
  return worldToScreen(
    { x: position.x + offset.x, y: position.y + offset.y },
    camera,
    viewport,
  );
}

/** Finds any visible anchor within a constant CSS-pixel hit radius, irrespective of existing connections. */
export function hitTestPort(
  point: Point,
  chips: readonly WorldViewChip[],
  camera: WorldCamera,
  viewport: Viewport,
  excludedEntity?: string,
): PortEndpoint | null {
  let nearest: PortEndpoint | null = null;
  let distance = 10;
  for (const chip of chips) {
    if (chip.id === excludedEntity) continue;
    for (const portId of Object.keys(PORT_OFFSETS) as PortId[]) {
      const anchor = portPoint(chip, portId, camera, viewport);
      const next = Math.hypot(point.x - anchor.x, point.y - anchor.y);
      if (next < distance) {
        nearest = { entityId: chip.id, portId };
        distance = next;
      }
    }
  }
  return nearest;
}

/** Routes independent relationships as identity-seeded cubic curves and coincident-anchor loops. Camera transforms preserve their shapes and exact ports. Pure. */
export function connectorRoutes(
  connectors: readonly WorldConnector[],
  chips: readonly WorldViewChip[],
  camera: WorldCamera,
  viewport: Viewport,
  preview?: ChipPreview | null,
): ConnectorRoute[] {
  const entities = new Map(
    chips.map(
      /** Indexes current entity positions by stable identity. */ (chip) => [
        chip.id,
        chip,
      ],
    ),
  );
  const groups = new Map<string, WorldConnector[]>();
  for (const connector of connectors) {
    const key = JSON.stringify(
      [connector.sourceEntityId, connector.targetEntityId].sort(),
    );
    const group = groups.get(key) ?? [];
    group.push(connector);
    groups.set(key, group);
  }
  const routes: ConnectorRoute[] = [];
  for (const group of groups.values()) {
    group.sort(
      /** Keeps lane assignment deterministic for the saved collection. */ (
        a,
        b,
      ) => a.id.localeCompare(b.id),
    );
    group.forEach(
      /** Builds one independent lane while retaining its exact endpoint ports. */ (
        connector,
        index,
      ) => {
        const source = entities.get(connector.sourceEntityId);
        const target = entities.get(connector.targetEntityId);
        if (!source || !target) return;
        const start = portPoint(
          source,
          connector.sourcePortId,
          camera,
          viewport,
          preview,
        );
        const end = portPoint(
          target,
          connector.targetPortId,
          camera,
          viewport,
          preview,
        );
        const length = Math.hypot(end.x - start.x, end.y - start.y) || 1;
        const orientation = source.id < target.id ? 1 : -1;
        const seed = connectorSeed(connector.id);
        const bendDirection = seed & 1 ? 1 : -1;
        const variation = ((seed >>> 1) & 255) / 255;
        const skew = ((seed >>> 9) & 255) / 255;
        const bend =
          Math.max(
            32 * camera.zoom,
            Math.min(length * 0.25, 160 * camera.zoom),
          ) *
          (0.65 + variation * 0.35) *
          bendDirection *
          orientation;
        const lane =
          (index - (group.length - 1) / 2) * 28 * camera.zoom * orientation;
        if (Math.hypot(end.x - start.x, end.y - start.y) < 0.001) {
          const sourceCenter = worldToScreen(
            preview?.id === source.id ? preview.position : source.position,
            camera,
            viewport,
          );
          const targetCenter = worldToScreen(
            preview?.id === target.id ? preview.position : target.position,
            camera,
            viewport,
          );
          const centerDistance =
            Math.hypot(
              targetCenter.x - sourceCenter.x,
              targetCenter.y - sourceCenter.y,
            ) || 1;
          const dx = (targetCenter.x - sourceCenter.x) / centerDistance;
          const dy = (targetCenter.y - sourceCenter.y) / centerDistance;
          const radius =
            (128 + index * 24 + variation * 32) * camera.zoom * orientation;
          routes.push({
            connector,
            start,
            end,
            control: {
              x: start.x - dy * radius + dx * radius * 0.6,
              y: start.y + dx * radius + dy * radius * 0.6,
            },
            control2: {
              x: end.x - dy * radius - dx * radius * 0.6,
              y: end.y + dx * radius - dy * radius * 0.6,
            },
          });
          return;
        }
        routes.push({
          connector,
          start,
          end,
          control: {
            x:
              start.x +
              (end.x - start.x) * (0.25 + skew * 0.15) -
              ((end.y - start.y) / length) * (lane + bend),
            y:
              start.y +
              (end.y - start.y) * (0.25 + skew * 0.15) +
              ((end.x - start.x) / length) * (lane + bend),
          },
          control2: {
            x:
              start.x +
              (end.x - start.x) * (0.65 + variation * 0.15) -
              ((end.y - start.y) / length) * (lane + bend * (0.4 + skew)),
            y:
              start.y +
              (end.y - start.y) * (0.65 + variation * 0.15) +
              ((end.x - start.x) / length) * (lane + bend * (0.4 + skew)),
          },
        });
      },
    );
  }
  return routes;
}

/** Evaluates a route in CSS pixels for rendering-independent selection and semantic arrow placement. */
export function routePoint(route: ConnectorRoute, t: number): Point {
  const inverse = 1 - t;
  if (route.control2)
    return {
      x:
        inverse ** 3 * route.start.x +
        3 * inverse ** 2 * t * route.control.x +
        3 * inverse * t ** 2 * route.control2.x +
        t ** 3 * route.end.x,
      y:
        inverse ** 3 * route.start.y +
        3 * inverse ** 2 * t * route.control.y +
        3 * inverse * t ** 2 * route.control2.y +
        t ** 3 * route.end.y,
    };
  return {
    x:
      inverse * inverse * route.start.x +
      2 * inverse * t * route.control.x +
      t * t * route.end.x,
    y:
      inverse * inverse * route.start.y +
      2 * inverse * t * route.control.y +
      t * t * route.end.y,
  };
}

/** Returns overlapping routes nearest-first. Curvature-based subdivision bounds chord error to 0.25 CSS pixels, including distant endpoints. */
export function hitTestConnectors(
  point: Point,
  routes: readonly ConnectorRoute[],
): WorldConnector[] {
  const hits: { connector: WorldConnector; distance: number }[] = [];
  for (const route of routes) {
    let distance = Infinity;
    let previous = route.start;
    const curvature = route.control2
      ? 3 *
        Math.max(
          Math.hypot(
            route.start.x - 2 * route.control.x + route.control2.x,
            route.start.y - 2 * route.control.y + route.control2.y,
          ),
          Math.hypot(
            route.control.x - 2 * route.control2.x + route.end.x,
            route.control.y - 2 * route.control2.y + route.end.y,
          ),
        )
      : Math.hypot(
          route.start.x - 2 * route.control.x + route.end.x,
          route.start.y - 2 * route.control.y + route.end.y,
        );
    const steps = Math.max(1, Math.ceil(Math.sqrt(curvature)));
    for (let step = 1; step <= steps; step++) {
      const next = routePoint(route, step / steps);
      const dx = next.x - previous.x;
      const dy = next.y - previous.y;
      const ratio = Math.max(
        0,
        Math.min(
          1,
          ((point.x - previous.x) * dx + (point.y - previous.y) * dy) /
            (dx * dx + dy * dy || 1),
        ),
      );
      distance = Math.min(
        distance,
        Math.hypot(
          point.x - previous.x - ratio * dx,
          point.y - previous.y - ratio * dy,
        ),
      );
      previous = next;
    }
    if (distance <= 7) hits.push({ connector: route.connector, distance });
  }
  return hits
    .sort(
      /** Prioritizes proximity with an identity tie-breaker for overlapping selection cycles. */
      (a, b) =>
        a.distance - b.distance || a.connector.id.localeCompare(b.connector.id),
    )
    .map(
      /** Exposes relationship identities without internal hit distances. */ (
        hit,
      ) => hit.connector,
    );
}

/** Paints every relationship with direction determined solely by its semantic field. */
export function drawConnectors(
  context: CanvasRenderingContext2D,
  routes: readonly ConnectorRoute[],
  selectedId: string | null,
): void {
  context.save();
  for (const route of routes) {
    context.strokeStyle =
      route.connector.id === selectedId ? "#f2a45e" : "#a28167";
    context.fillStyle = context.strokeStyle;
    context.lineWidth = route.connector.id === selectedId ? 2.5 : 1.5;
    context.beginPath();
    context.moveTo(route.start.x, route.start.y);
    if (route.control2)
      context.bezierCurveTo(
        route.control.x,
        route.control.y,
        route.control2.x,
        route.control2.y,
        route.end.x,
        route.end.y,
      );
    else
      context.quadraticCurveTo(
        route.control.x,
        route.control.y,
        route.end.x,
        route.end.y,
      );
    context.stroke();
    if (route.connector.direction === "directed") {
      const tip = routePoint(route, 0.7);
      const before = routePoint(route, 0.69);
      const angle = Math.atan2(tip.y - before.y, tip.x - before.x);
      context.beginPath();
      context.moveTo(tip.x, tip.y);
      context.lineTo(
        tip.x - 9 * Math.cos(angle - 0.45),
        tip.y - 9 * Math.sin(angle - 0.45),
      );
      context.lineTo(
        tip.x - 9 * Math.cos(angle + 0.45),
        tip.y - 9 * Math.sin(angle + 0.45),
      );
      context.closePath();
      context.fill();
    }
  }
  context.restore();
}
