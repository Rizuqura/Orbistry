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
const { chipLabelAnchor } = require("./chip-labels.ts");
const { CHIP_THICKNESS } = require("./chips.ts");
const { worldToScreen, TILE_HEIGHT } = require("./coordinates.ts");
hooks.deregister();

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
