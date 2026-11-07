const test = require("node:test");
const assert = require("node:assert/strict");
const {
  preparePlanetMotion,
  animatePlanetLayout,
} = require("./planet-motion.ts");

test("animated hierarchy preserves orbit radii, source layout and camera bounds", () => {
  // Deliberately unordered: the motion plan must process parents first.
  const nodes = [
    { id: "file", parentId: "folder", children: [] },
    { id: "root", children: ["folder"] },
    { id: "folder", parentId: "root", children: ["file"] },
  ];
  const graph = {
    nodes,
    byId: new Map(nodes.map((n) => [n.id, n])),
    rootId: "root",
  };
  const base = {
    positions: new Map([
      ["file", { x: 350, y: 200, size: 6 }],
      ["root", { x: 200, y: 200, size: 36 }],
      ["folder", { x: 300, y: 200, size: 18 }],
    ]),
    orbits: [
      { parentId: "root", x: 200, y: 200, radius: 100 },
      { parentId: "folder", x: 300, y: 200, radius: 50 },
    ],
    width: 600,
    height: 500,
  };
  const before = structuredClone(base);
  const plan = preparePlanetMotion(graph, base);
  assert.deepEqual(
    plan.map((entry) => entry.id),
    ["root", "folder", "file"],
  );
  assert.equal(animatePlanetLayout(base, plan, 0), base);
  for (const seconds of [0.5, 5, 100, 10000]) {
    const next = animatePlanetLayout(base, plan, seconds);
    assert.deepEqual(next.positions.get("root"), base.positions.get("root"));
    assert.equal(next.width, base.width);
    assert.equal(next.height, base.height);
    for (const orbit of next.orbits) {
      const center = next.positions.get(orbit.parentId);
      assert.equal(orbit.x, center.x);
      assert.equal(orbit.y, center.y);
    }
    for (const [childId, parentId, radius] of [
      ["folder", "root", 100],
      ["file", "folder", 50],
    ]) {
      const child = next.positions.get(childId),
        parent = next.positions.get(parentId);
      assert.ok(
        Math.abs(Math.hypot(child.x - parent.x, child.y - parent.y) - radius) <
          1e-8,
      );
      const original = base.positions.get(childId);
      assert.ok(Math.hypot(child.x - original.x, child.y - original.y) <= 14);
    }
    assert.deepEqual(next, animatePlanetLayout(base, plan, seconds));
  }
  assert.notDeepEqual(
    animatePlanetLayout(base, plan, 2).positions.get("folder"),
    base.positions.get("folder"),
  );
  assert.deepEqual(base, before);
});
test("motion planning retains disconnected positions and terminates on malformed cycles", () => {
  const nodes = [
    { id: "a", parentId: "b", children: ["b"] },
    { id: "b", parentId: "a", children: ["a"] },
  ];
  const graph = {
    nodes,
    byId: new Map(nodes.map((n) => [n.id, n])),
    rootId: "missing",
  };
  const base = {
    positions: new Map([
      ["a", { x: 10, y: 10, size: 6 }],
      ["b", { x: 20, y: 20, size: 6 }],
      ["orphan", { x: 30, y: 30, size: 6 }],
    ]),
    width: 100,
    height: 100,
  };
  const plan = preparePlanetMotion(graph, base);
  assert.equal(plan.length, 3);
  assert.equal(animatePlanetLayout(base, plan, 10).positions.size, 3);
});
