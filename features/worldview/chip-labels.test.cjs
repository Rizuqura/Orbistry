const test = require("node:test");
const assert = require("node:assert/strict");
const { registerHooks } = require("node:module");
const hooks = registerHooks({
  /** Resolves the renderer's extensionless TypeScript imports for the geometry test runner. */
  resolve(specifier, context, next) {
    return next(
      specifier.startsWith("./") && !specifier.endsWith(".ts")
        ? `${specifier}.ts`
        : specifier,
      context,
    );
  },
});
const {
  chipLabelAnchor,
  chipAgentAnchor,
  chipAgentControlClear,
} = require("./chip-labels.ts");
const { CHIP_THICKNESS } = require("./chips.ts");
const { worldToScreen, TILE_HEIGHT } = require("./coordinates.ts");
hooks.deregister();

/** Prevents DOM controls from masking source buildings or chip interactions in a neighboring foreground entity. */
test("assignment controls yield to overlapping canvas entities and buildings", () => {
  const viewport = { width: 1200, height: 800 };
  const camera = { center: { x: 0, y: 0 }, zoom: 1 };
  const chip = { id: "back", position: { x: -2, y: 0 }, sources: [] };
  const front = { id: "front", position: { x: 0, y: 0 }, sources: [] };
  const anchor = chipAgentAnchor(chip, camera, viewport);
  assert.equal(chipAgentControlClear(anchor, [chip], camera, viewport), true);
  assert.equal(
    chipAgentControlClear(anchor, [chip, front], camera, viewport),
    false,
  );
});

/** Protects native connector dragging from DOM assignment controls, including minimum zoom and live entity dragging. */
test("agent assignment controls reserve the south connector handle across camera transforms", () => {
  const chip = { id: "entity", position: { x: -3, y: 2 } };
  const viewport = { width: 1200, height: 800 };
  for (const zoom of [0.25, 0.5, 1, 2, 3]) {
    const camera = { center: { x: 4, y: -2 }, zoom };
    for (const preview of [null, { id: chip.id, position: { x: 8, y: 5 } }]) {
      const position = preview?.position ?? chip.position;
      const southPort = worldToScreen(
        { x: position.x + 1, y: position.y },
        camera,
        viewport,
      );
      const button = chipAgentAnchor(chip, camera, viewport, preview);
      assert.equal(button.x + 11, southPort.x);
      assert.ok(
        button.y - southPort.y >= 12,
        "button stays outside the connector hit area",
      );
    }
  }
});

/** Guards title placement beneath the chip's full thickness through camera transforms, resize, file assignments and live dragging. */
test("entity titles stay beneath chips through camera movement", () => {
  const empty = { id: "entity", position: { x: -3, y: 2 } };
  const occupied = {
    ...empty,
    sources: Array.from({ length: 12 }, (_, index) => ({
      sourceId: `${index}.pdf`,
      sourceRef: `${index}.pdf`,
      extension: ".pdf",
      status: "available",
      sizeBytes: index * 1000,
    })),
  };
  for (const viewport of [
    { width: 1200, height: 800 },
    { width: 1000, height: 700 },
  ])
    for (const zoom of [0.25, 1, 3]) {
      const camera = { center: { x: 4, y: -2 }, zoom };
      const center = worldToScreen(empty.position, camera, viewport);
      assert.deepEqual(chipLabelAnchor(empty, camera, viewport), {
        x: center.x,
        y: center.y + (TILE_HEIGHT + CHIP_THICKNESS) * zoom + 10,
      });
      const preview = { id: empty.id, position: { x: 8, y: 5 } };
      const movedCenter = worldToScreen(preview.position, camera, viewport);
      const anchor = chipLabelAnchor(occupied, camera, viewport, preview);
      assert.deepEqual(anchor, {
        x: movedCenter.x,
        y: movedCenter.y + (TILE_HEIGHT + CHIP_THICKNESS) * zoom + 10,
      });
    }
});
