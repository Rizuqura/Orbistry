const test = require("node:test");
const assert = require("node:assert/strict");
const {
  DEFAULT_CAMERA,
  MIN_ZOOM,
  MAX_ZOOM,
  projectWorld,
  unprojectWorld,
  worldToScreen,
  screenToWorld,
  panCamera,
  zoomCameraAt,
  visibleWorldBounds,
} = require("./coordinates.ts");

/** Asserts floating-point point equality with a tolerance measured in world or CSS units. */
function closePoint(actual, expected) {
  assert.ok(
    Math.abs(actual.x - expected.x) < 1e-8,
    `x: ${actual.x} != ${expected.x}`,
  );
  assert.ok(
    Math.abs(actual.y - expected.y) < 1e-8,
    `y: ${actual.y} != ${expected.y}`,
  );
}

/** Verifies orthographic 2:1 diamonds and invertibility in every world quadrant. */
test("projection is 2:1 and round-trips fractional and negative world positions", () => {
  assert.deepEqual(projectWorld({ x: 1, y: 0 }), { x: 48, y: 24 });
  assert.deepEqual(projectWorld({ x: 0, y: 1 }), { x: -48, y: 24 });
  for (const point of [
    { x: 0, y: 0 },
    { x: -25.123, y: 39.8 },
    { x: 100000.5, y: -200000.25 },
  ]) {
    closePoint(unprojectWorld(projectWorld(point)), point);
    for (const zoom of [MIN_ZOOM, 0.873, 1, MAX_ZOOM]) {
      const camera = { center: { x: -31.7, y: 17.9 }, zoom };
      for (const viewport of [
        { width: 1920, height: 1080 },
        { width: 703.5, height: 421.25 },
      ]) {
        closePoint(
          screenToWorld(
            worldToScreen(point, camera, viewport),
            camera,
            viewport,
          ),
          point,
        );
      }
    }
  }
});

/** Verifies panning moves the same world point by the exact pointer delta at all zoom levels. */
test("pan translates in all directions without scale-dependent drift", () => {
  const viewport = { width: 1280, height: 720 };
  for (const zoom of [MIN_ZOOM, 1, MAX_ZOOM]) {
    const camera = { ...DEFAULT_CAMERA, zoom };
    const point = { x: -1.3, y: 6.7 };
    const before = worldToScreen(point, camera, viewport);
    for (const delta of [
      { x: 137.25, y: 0 },
      { x: -137.25, y: 0 },
      { x: 0, y: 89.5 },
      { x: 0, y: -89.5 },
    ]) {
      const moved = panCamera(camera, delta);
      closePoint(worldToScreen(point, moved, viewport), {
        x: before.x + delta.x,
        y: before.y + delta.y,
      });
      closePoint(
        panCamera(moved, { x: -delta.x, y: -delta.y }).center,
        camera.center,
      );
    }
  }
});

/** Verifies arbitrary cursor anchors remain fixed, including when requested zoom hits limits. */
test("zoom preserves cursor world coordinates and clamps safely", () => {
  const viewport = { width: 1440, height: 900 };
  const anchor = { x: 1143.5, y: 173.25 };
  let camera = { center: { x: -21.3, y: 9.8 }, zoom: 1 };
  const world = screenToWorld(anchor, camera, viewport);
  for (const zoom of [1.137, 0.87, 999, 0.0001, 1, 3, 0.25, 1]) {
    camera = zoomCameraAt(camera, zoom, anchor, viewport);
    assert.ok(camera.zoom >= MIN_ZOOM && camera.zoom <= MAX_ZOOM);
    closePoint(screenToWorld(anchor, camera, viewport), world);
    closePoint(worldToScreen(world, camera, viewport), anchor);
  }
});

/** Verifies resize keeps the camera center and bounded rendering covers every viewport corner. */
test("visible bounds cover resized viewports with a small margin and bounded line count", () => {
  const camera = { center: { x: -190.4, y: 270.8 }, zoom: MIN_ZOOM };
  for (const viewport of [
    { width: 3840, height: 2160 },
    { width: 320, height: 240 },
  ]) {
    closePoint(worldToScreen(camera.center, camera, viewport), {
      x: viewport.width / 2,
      y: viewport.height / 2,
    });
    const bounds = visibleWorldBounds(camera, viewport);
    for (const point of [
      { x: 0, y: 0 },
      { x: viewport.width, y: 0 },
      { x: 0, y: viewport.height },
      { x: viewport.width, y: viewport.height },
    ]) {
      const world = screenToWorld(point, camera, viewport);
      assert.ok(world.x >= bounds.minX + 2 && world.x <= bounds.maxX - 2);
      assert.ok(world.y >= bounds.minY + 2 && world.y <= bounds.maxY - 2);
    }
    assert.ok(bounds.maxX - bounds.minX + bounds.maxY - bounds.minY + 2 < 800);
  }
});
