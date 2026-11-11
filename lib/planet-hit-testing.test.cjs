const assert = require("node:assert/strict");
const test = require("node:test");

const { pickPlanetNode } = require("./planet-hit-testing.ts");

function node(id, type, fileType) {
  return {
    id,
    name: id,
    type,
    fileType,
    path: id,
    children: [],
    connections: [],
    level: 1,
  };
}

const camera = { x: 0, y: 0, k: 1 };
test("readable planets have a forgiving 32px screen hit area without stealing direct hits", () => {
  const file = node("a", "file", "md");
  const other = node("b", "file", "md");
  const positions = new Map([
    ["a", { x: 30, y: 30, size: 6 }],
    ["b", { x: 46, y: 30, size: 6 }],
  ]);
  assert.equal(
    pickPlanetNode([file], positions, camera, { x: 45, y: 30 }, "normal")?.id,
    "a",
  );
  assert.equal(
    pickPlanetNode([file], positions, camera, { x: 47, y: 30 }, "normal"),
    null,
  );
  assert.equal(
    pickPlanetNode([file, other], positions, camera, { x: 46, y: 30 }, "normal")
      ?.id,
    "b",
  );
});

test("true overlaps prioritize directories, then readable files, then asteroids", () => {
  const directory = node("directory", "directory");
  const file = node("file", "file", "md");
  const asteroid = node("asteroid", "file", "other");
  const positions = new Map([
    [directory.id, { x: 40, y: 40, size: 14 }],
    [file.id, { x: 40, y: 40, size: 8 }],
    [asteroid.id, { x: 40, y: 40, size: 5 }],
  ]);

  assert.equal(
    pickPlanetNode(
      [asteroid, file, directory],
      positions,
      camera,
      { x: 40, y: 40 },
      "normal",
    )?.id,
    directory.id,
  );
  assert.equal(
    pickPlanetNode(
      [asteroid, file],
      positions,
      camera,
      { x: 40, y: 40 },
      "normal",
    )?.id,
    file.id,
  );
});

test("a direct orb hit beats another object's expanded assistance area", () => {
  const directory = node("directory", "directory");
  const file = node("file", "file", "pdf");
  const positions = new Map([
    [directory.id, { x: 50, y: 50, size: 10 }],
    [file.id, { x: 61, y: 50, size: 8 }],
  ]);

  assert.equal(
    pickPlanetNode(
      [directory, file],
      positions,
      camera,
      { x: 61, y: 50 },
      "normal",
    )?.id,
    file.id,
  );
});

test("hit assistance remains screen-sized across zoom and far zoom disables files", () => {
  const directory = node("directory", "directory");
  const file = node("file", "file", "md");
  const positions = new Map([
    [directory.id, { x: 100, y: 100, size: 12 }],
    [file.id, { x: 200, y: 100, size: 6 }],
  ]);
  const zoomedOut = { x: 0, y: 0, k: 0.5 };

  assert.equal(
    pickPlanetNode(
      [directory],
      positions,
      zoomedOut,
      { x: 62, y: 50 },
      "normal",
    )?.id,
    directory.id,
  );
  assert.equal(
    pickPlanetNode([file], positions, zoomedOut, { x: 100, y: 100 }, "far"),
    null,
  );
});

test("same-type ties resolve by normalized distance and then stable id", () => {
  const left = node("a-file", "file", "md");
  const right = node("b-file", "file", "md");
  const positions = new Map([
    [left.id, { x: 10, y: 10, size: 6 }],
    [right.id, { x: 15, y: 10, size: 6 }],
  ]);

  assert.equal(
    pickPlanetNode([left, right], positions, camera, { x: 14, y: 10 }, "normal")
      ?.id,
    right.id,
  );
  positions.set(right.id, { x: 10, y: 10, size: 6 });
  assert.equal(
    pickPlanetNode([right, left], positions, camera, { x: 10, y: 10 }, "normal")
      ?.id,
    left.id,
  );
});

test("box selection respects camera, reverse drags, visibility candidates and far zoom", () => {
  const { boxSelectPlanetNodes } = require("./planet-hit-testing.ts");
  const nodes = [
    node("dir", "directory"),
    node("file", "file", "md"),
    node("outside", "file", "md"),
  ];
  const positions = new Map([
    ["dir", { x: 10, y: 10 }],
    ["file", { x: 20, y: 20 }],
    ["outside", { x: 90, y: 90 }],
  ]);
  const camera = { x: 100, y: -20, k: 2 };
  const start = { x: 145, y: 25 },
    end = { x: 115, y: -5 };
  assert.deepEqual(
    boxSelectPlanetNodes(nodes, positions, camera, start, end, "normal"),
    ["dir", "file"],
  );
  assert.deepEqual(
    boxSelectPlanetNodes(nodes, positions, camera, end, start, "far"),
    ["dir"],
  );
  assert.deepEqual(
    boxSelectPlanetNodes(nodes.slice(1), positions, camera, start, end, "near"),
    ["file"],
  );
  assert.deepEqual(
    boxSelectPlanetNodes(
      nodes,
      positions,
      camera,
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      "near",
    ),
    [],
  );
});

test("minimum screen bodies remain readable with Universe larger than folders and files", () => {
  const { planetVisualDiameter } = require("./planet-hit-testing.ts");
  for (const zoom of [0.01, 0.1, 0.5, 1, 2]) {
    const root = { ...node("root", "directory"), level: 0 };
    const folder = node("folder", "directory");
    const file = node("file", "file", "md");
    assert.ok(planetVisualDiameter(file, 14, zoom) >= 14);
    assert.ok(planetVisualDiameter(folder, 30, zoom) >= 20);
    assert.ok(planetVisualDiameter(root, 480, zoom) >= 64);
    assert.ok(
      planetVisualDiameter(root, 480, zoom) >
        planetVisualDiameter(folder, 68, zoom),
    );
  }
});
test("hit detection includes the enlarged visible body at very low zoom", () => {
  const file = node("file", "file", "md");
  const positions = new Map([[file.id, { x: 100, y: 100, size: 14 }]]);
  assert.equal(
    pickPlanetNode(
      [file],
      positions,
      { x: 0, y: 0, k: 0.1 },
      { x: 16, y: 10 },
      "normal",
    )?.id,
    file.id,
  );
});

test("size opacity increases monotonically from 45 percent to fully opaque", () => {
  const { planetSizeOpacity } = require("./planet-hit-testing.ts");
  const sizes = [9, 14, 20, 30, 68, 120, 240, 480];
  const alpha = sizes.map((size) => planetSizeOpacity(size, 9, 480));
  assert.equal(alpha[0], 0.45);
  assert.equal(alpha.at(-1), 1);
  for (let i = 1; i < alpha.length; i++) assert.ok(alpha[i] > alpha[i - 1]);
  assert.equal(planetSizeOpacity(-100, 9, 480), 0.45);
  assert.equal(planetSizeOpacity(1000, 9, 480), 1);
});
test("single-size scenes stay opaque and invalid opacity inputs retain the visibility floor", () => {
  const { planetSizeOpacity } = require("./planet-hit-testing.ts");
  assert.equal(planetSizeOpacity(56, 56, 56), 1);
  assert.equal(planetSizeOpacity(NaN, 9, 480), 0.45);
  assert.equal(planetSizeOpacity(14, 9, Infinity), 0.45);
});
