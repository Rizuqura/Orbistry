const test = require("node:test");
const assert = require("node:assert/strict");
const { resizeGeometry, clampGeometry } = require("./panel-geometry.ts");
for (const direction of ["n", "s", "w", "e", "nw", "ne", "sw", "se"])
  test(
    "resize " + direction + " preserves opposite edges and clamps viewport",
    () => {
      const original = { x: 100, y: 100, width: 440, height: 440 };
      const next = resizeGeometry(original, direction, 30, 30, 1000, 900);
      if (direction.includes("w")) assert.equal(next.x + next.width, 540);
      if (direction.includes("n")) assert.equal(next.y + next.height, 540);
      if (direction.includes("e")) assert.equal(next.x, 100);
      if (direction.includes("s")) assert.equal(next.y, 100);
      assert.notDeepEqual(next, original);
      const bounded = resizeGeometry(
        original,
        direction,
        5000,
        5000,
        1000,
        900,
      );
      assert.ok(
        bounded.x >= 0 &&
          bounded.y >= 0 &&
          bounded.x + bounded.width <= 1000 &&
          bounded.y + bounded.height <= 900,
      );
      assert.ok(bounded.width >= 360 && bounded.height >= 360);
    },
  );
test("small viewports and restored offscreen geometry stay accessible", () => {
  assert.deepEqual(
    clampGeometry({ x: 2000, y: -300, width: 500, height: 700 }, 300, 240),
    { x: 0, y: 0, width: 300, height: 240 },
  );
});

const { defaultFloatingChatGeometry } = require("./panel-geometry.ts");
test("Floating chat defaults to bottom-left and stays inside small viewports", () => {
  for (const [width, height] of [
    [1000, 900],
    [700, 650],
    [420, 400],
    [300, 240],
  ]) {
    const g = defaultFloatingChatGeometry(width, height);
    assert.ok(
      g.x >= 0 &&
        g.y >= 0 &&
        g.x + g.width <= width &&
        g.y + g.height <= height,
    );
    assert.equal(g.x, Math.min(12, width - g.width));
    assert.equal(g.y, Math.max(0, height - g.height - 12));
  }
  assert.deepEqual(defaultFloatingChatGeometry(1000, 900), {
    x: 12,
    y: 328,
    width: 440,
    height: 560,
  });
});
