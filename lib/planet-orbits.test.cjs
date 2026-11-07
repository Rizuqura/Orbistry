const test = require("node:test"),
  assert = require("node:assert/strict");
const {
  withPlanetOrbits,
  orbitInPlanetViewport,
} = require("./planet-orbits.ts");
test("folder guides are complete circles with bounds that preserve child geometry", () => {
  const nodes = [
    { id: "root", type: "directory", children: ["folder", "csv"] },
    { id: "folder", type: "directory", children: ["pdf"] },
    { id: "csv", type: "file", fileType: "csv", children: [] },
    { id: "pdf", type: "file", fileType: "pdf", children: [] },
  ];
  const graph = {
    nodes,
    byId: new Map(nodes.map((n) => [n.id, n])),
    rootId: "root",
  };
  const positions = new Map([
    ["root", { x: 10, y: 50, size: 30 }],
    ["folder", { x: 110, y: 50, size: 18 }],
    ["csv", { x: 10, y: 110, size: 6 }],
    ["pdf", { x: 140, y: 50, size: 6 }],
  ]);
  const before = structuredClone(positions);
  const layout = withPlanetOrbits(graph, {
    positions,
    width: 180,
    height: 150,
    minX: 0,
    minY: 0,
  });
  assert.deepEqual(
    layout.orbits.map((o) => [o.parentId, o.radius]),
    [
      ["root", 100],
      ["folder", 30],
    ],
  );
  for (const orbit of layout.orbits) {
    assert.ok(orbit.x - orbit.radius >= 0 && orbit.y - orbit.radius >= 0);
    assert.ok(
      orbit.x + orbit.radius <= layout.width &&
        orbit.y + orbit.radius <= layout.height,
    );
    assert.equal(orbit.x, layout.positions.get(orbit.parentId).x);
    assert.equal(orbit.y, layout.positions.get(orbit.parentId).y);
  }
  assert.equal(
    layout.positions.get("folder").x - layout.positions.get("root").x,
    100,
  );
  assert.deepEqual(positions, before);
  assert.equal(
    withPlanetOrbits(
      { ...graph, projection: "station" },
      { positions, width: 180, height: 150 },
    ).orbits.length,
    0,
  );
});
test("orbit culling keeps visible arcs and skips offscreen or enclosing rings", () => {
  const camera = { x: 0, y: 0, k: 1 };
  assert.equal(
    orbitInPlanetViewport({ x: 250, y: 200, radius: 100 }, camera, 500, 400),
    true,
  );
  assert.equal(
    orbitInPlanetViewport({ x: 250, y: 200, radius: 10000 }, camera, 500, 400),
    false,
  );
  assert.equal(
    orbitInPlanetViewport({ x: 2000, y: 2000, radius: 50 }, camera, 500, 400),
    false,
  );
  assert.equal(
    orbitInPlanetViewport({ x: 250, y: 200, radius: 2 }, camera, 500, 400),
    false,
  );
});
