import {
  DEFAULT_CAMERA,
  MIN_ZOOM,
  visibleWorldBounds,
  worldToScreen,
  type Point,
  type Viewport,
  type WorldCamera,
} from "./coordinates";

const MAX_GRID_OPACITY = 0.1;
const gridLayers = new WeakMap<
  HTMLCanvasElement,
  {
    canvas: OffscreenCanvas;
    context: OffscreenCanvasRenderingContext2D;
  }
>();

/**
 * Clears and draws visible integer-world grid lines plus a two-cell margin.
 * Fades from invisible at minimum zoom to 10% opacity at 100% zoom, then remains capped.
 * Composites an opaque scratch layer once so intersections cannot exceed the opacity cap.
 * Inputs use CSS pixels; pixelRatio controls backing resolution, never geometry.
 * Side effects: resizes/paints canvases and caches one scratch layer per viewport; restores drawing state.
 * Throws if the browser cannot create the offscreen 2D context.
 */
export function drawWorldGrid(
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  camera: WorldCamera,
  viewport: Viewport,
  pixelRatio: number,
  stroke: string,
): void {
  const width = Math.round(viewport.width * pixelRatio);
  const height = Math.round(viewport.height * pixelRatio);
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
  // Actual backing ratios avoid stretching fractional CSS dimensions.
  context.setTransform(
    width / viewport.width,
    0,
    0,
    height / viewport.height,
    0,
    0,
  );
  context.clearRect(0, 0, viewport.width, viewport.height);
  const progress = Math.max(
    0,
    Math.min(1, (camera.zoom - MIN_ZOOM) / (DEFAULT_CAMERA.zoom - MIN_ZOOM)),
  );
  if (progress === 0) return;
  let layer = gridLayers.get(canvas);
  if (!layer) {
    const scratch = new OffscreenCanvas(width, height);
    const scratchContext = scratch.getContext("2d");
    if (!scratchContext)
      throw new Error("WorldView requires an offscreen 2D grid context.");
    layer = { canvas: scratch, context: scratchContext };
    gridLayers.set(canvas, layer);
  }
  if (layer.canvas.width !== width || layer.canvas.height !== height) {
    layer.canvas.width = width;
    layer.canvas.height = height;
  }
  const gridContext = layer.context;
  gridContext.setTransform(
    width / viewport.width,
    0,
    0,
    height / viewport.height,
    0,
    0,
  );
  gridContext.clearRect(0, 0, viewport.width, viewport.height);
  const bounds = visibleWorldBounds(camera, viewport);
  gridContext.strokeStyle = stroke;
  gridContext.lineWidth = 1;
  gridContext.beginPath();

  /** Adds an unsnapped world segment, preserving subpixel camera motion. */
  function addLine(start: Point, end: Point): void {
    const from = worldToScreen(start, camera, viewport);
    const to = worldToScreen(end, camera, viewport);
    gridContext.moveTo(from.x, from.y);
    gridContext.lineTo(to.x, to.y);
  }

  for (let x = bounds.minX; x <= bounds.maxX; x += 1)
    addLine({ x, y: bounds.minY }, { x, y: bounds.maxY });
  for (let y = bounds.minY; y <= bounds.maxY; y += 1)
    addLine({ x: bounds.minX, y }, { x: bounds.maxX, y });
  gridContext.stroke();
  context.save();
  context.globalAlpha =
    MAX_GRID_OPACITY * progress * progress * (3 - 2 * progress);
  context.drawImage(layer.canvas, 0, 0, viewport.width, viewport.height);
  context.restore();
}
