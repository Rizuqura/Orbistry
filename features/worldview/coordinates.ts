/** One world unit is one 96 × 48 CSS-pixel diamond at 100% zoom. */
export const TILE_WIDTH = 96;
export const TILE_HEIGHT = 48;
export const MIN_ZOOM = 0.25;
export const MAX_ZOOM = 3;

export type Point = Readonly<{ x: number; y: number }>;
export type Viewport = Readonly<{ width: number; height: number }>;
/** The world point at the viewport center; zoom never changes world units. */
export type WorldCamera = Readonly<{ center: Point; zoom: number }>;
export const DEFAULT_CAMERA: WorldCamera = { center: { x: 0, y: 0 }, zoom: 1 };

/** Projects a world point into unscaled isometric CSS pixels, without side effects. */
export function projectWorld(point: Point): Point {
  return {
    x: ((point.x - point.y) * TILE_WIDTH) / 2,
    y: ((point.x + point.y) * TILE_HEIGHT) / 2,
  };
}

/** Inverts unscaled isometric pixels into fractional world coordinates. */
export function unprojectWorld(point: Point): Point {
  return {
    x: point.x / TILE_WIDTH + point.y / TILE_HEIGHT,
    y: point.y / TILE_HEIGHT - point.x / TILE_WIDTH,
  };
}

/** Converts a world point to viewport-local CSS pixels using the given camera. */
export function worldToScreen(
  point: Point,
  camera: WorldCamera,
  viewport: Viewport,
): Point {
  const offset = projectWorld({
    x: point.x - camera.center.x,
    y: point.y - camera.center.y,
  });
  return {
    x: viewport.width / 2 + offset.x * camera.zoom,
    y: viewport.height / 2 + offset.y * camera.zoom,
  };
}

/** Converts viewport-local CSS pixels into world units for placement or hit testing. */
export function screenToWorld(
  point: Point,
  camera: WorldCamera,
  viewport: Viewport,
): Point {
  const offset = unprojectWorld({
    x: (point.x - viewport.width / 2) / camera.zoom,
    y: (point.y - viewport.height / 2) / camera.zoom,
  });
  return { x: camera.center.x + offset.x, y: camera.center.y + offset.y };
}

/** Returns a camera translating the ground by the supplied CSS-pixel drag delta. */
export function panCamera(camera: WorldCamera, delta: Point): WorldCamera {
  const offset = unprojectWorld({
    x: delta.x / camera.zoom,
    y: delta.y / camera.zoom,
  });
  return {
    ...camera,
    center: { x: camera.center.x - offset.x, y: camera.center.y - offset.y },
  };
}

/** Returns a clamped camera preserving the world point beneath the viewport-local anchor. */
export function zoomCameraAt(
  camera: WorldCamera,
  zoom: number,
  anchor: Point,
  viewport: Viewport,
): WorldCamera {
  const next = {
    ...camera,
    zoom: Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, zoom)),
  };
  const before = screenToWorld(anchor, camera, viewport);
  const after = screenToWorld(anchor, next, viewport);
  return {
    ...next,
    center: {
      x: camera.center.x + before.x - after.x,
      y: camera.center.y + before.y - after.y,
    },
  };
}

/** Bounds the inverse-projected viewport with two extra world cells for edge coverage. */
export function visibleWorldBounds(camera: WorldCamera, viewport: Viewport) {
  const corners = [
    screenToWorld({ x: 0, y: 0 }, camera, viewport),
    screenToWorld({ x: viewport.width, y: 0 }, camera, viewport),
    screenToWorld({ x: 0, y: viewport.height }, camera, viewport),
    screenToWorld({ x: viewport.width, y: viewport.height }, camera, viewport),
  ];
  return {
    minX: Math.floor(Math.min(...corners.map((point) => point.x))) - 2,
    maxX: Math.ceil(Math.max(...corners.map((point) => point.x))) + 2,
    minY: Math.floor(Math.min(...corners.map((point) => point.y))) - 2,
    maxY: Math.ceil(Math.max(...corners.map((point) => point.y))) + 2,
  };
}
