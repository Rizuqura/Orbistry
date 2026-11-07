const test = require("node:test");
const assert = require("node:assert/strict");
const {
  layoutPlanetLabels,
  planetLabelFontSize,
} = require("./planet-labels.ts");
const candidate = (id, x, y, priority = 0, name = "Research notes") => ({
  id,
  name,
  priority,
  position: { x, y, size: 10 },
});
test("labels retain screen size across zoom levels and bound long names", () => {
  for (const k of [0.1, 0.55, 1, 2, 8]) {
    const labels = layoutPlanetLabels(
      [candidate("a", 100 / k, 100 / k, 0, "long ".repeat(100))],
      { x: 0, y: 0, k },
      1000,
      800,
    );
    assert.equal(labels.length, 1);
    assert.equal(labels[0].width, 160);
    assert.equal(labels[0].height, 16);
    assert.equal(planetLabelFontSize(k), k < 0.55 ? 10 : 11);
  }
});
test("crowded labels never overlap and important labels win deterministically", () => {
  const candidates = Array.from({ length: 3000 }, (_, i) =>
    candidate(String(i), 80 + (i % 50) * 12, 80 + Math.floor(i / 50) * 8),
  );
  candidates.push(
    candidate("hovered", 100, 100, 5),
    candidate("folder", 100, 100, 2),
  );
  const labels = layoutPlanetLabels(candidates, { x: 0, y: 0, k: 1 }, 800, 700);
  assert.ok(labels.some((l) => l.id === "hovered"));
  assert.ok(!labels.some((l) => l.id === "folder"));
  assert.ok(labels.length > 10 && labels.length < 3000);
  for (let i = 0; i < labels.length; i++)
    for (let j = i + 1; j < labels.length; j++) {
      const a = labels[i],
        b = labels[j];
      assert.ok(
        a.x + a.width + 6 <= b.x ||
          b.x + b.width + 6 <= a.x ||
          a.y + a.height + 6 <= b.y ||
          b.y + b.height + 6 <= a.y,
      );
    }
  assert.deepEqual(
    labels,
    layoutPlanetLabels(candidates.reverse(), { x: 0, y: 0, k: 1 }, 800, 700),
  );
});
test("labels outside the viewport are excluded", () => {
  assert.deepEqual(
    layoutPlanetLabels(
      [candidate("a", -100, 100), candidate("b", 100, 1000)],
      { x: 0, y: 0, k: 1 },
      800,
      700,
    ),
    [],
  );
});
