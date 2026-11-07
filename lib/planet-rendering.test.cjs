const test = require("node:test"),
  assert = require("node:assert/strict");
const {
  fitPlanetCamera,
  inPlanetViewport,
  edgeInPlanetViewport,
  overviewNodes,
} = require("./planet-rendering.ts");
const { buildGraphFromVault } = require("./planet-vault.ts");
test("Fit View includes a large world instead of clipping it at the old 20 percent floor", () => {
  const camera = fitPlanetCamera(900, 600, 100000, 80000);
  assert.ok(camera.k > 0 && camera.k < 0.2);
  assert.ok(camera.x >= 0 && camera.y >= 0);
  assert.ok(camera.x + 100000 * camera.k <= 900);
  assert.ok(camera.y + 80000 * camera.k <= 600);
  assert.deepEqual(fitPlanetCamera(0, 0, 100, 100), { x: 0, y: 0, k: 1 });
});
test("viewport culling follows camera pan/zoom and retains crossing edges", () => {
  const pos = { x: 1000, y: 1000, size: 10 };
  assert.equal(inPlanetViewport(pos, { x: 0, y: 0, k: 1 }, 500, 400), false);
  assert.equal(
    inPlanetViewport(pos, { x: -800, y: -800, k: 1 }, 500, 400),
    true,
  );
  assert.equal(inPlanetViewport(pos, { x: 0, y: 0, k: 0.2 }, 500, 400), true);
  assert.equal(
    edgeInPlanetViewport(
      { x: -200, y: 200 },
      { x: 800, y: 200 },
      { x: 0, y: 0, k: 1 },
      500,
      400,
    ),
    true,
  );
  assert.equal(
    edgeInPlanetViewport(
      { x: 900, y: 900 },
      { x: 1000, y: 1000 },
      { x: 0, y: 0, k: 1 },
      500,
      400,
    ),
    false,
  );
});
test("large-vault minimap stays bounded, deterministic and includes directory anchors", () => {
  const nodes = [
    { id: "root", type: "directory" },
    ...Array.from({ length: 20000 }, (_, i) => ({
      id: String(i),
      type: "file",
    })),
  ];
  const dots = overviewNodes(nodes);
  assert.equal(dots.length, 1024);
  assert.equal(dots[0].id, "root");
  assert.deepEqual(dots, overviewNodes(nodes));
  assert.equal(new Set(dots.map((n) => n.id)).size, dots.length);
  assert.equal(nodes.length, 20001); // Overview sampling never mutates the real graph.
});
test("large graph construction preserves every parent/child relationship", () => {
  const entries = Array.from({ length: 100 }, (_, i) => ({
    kind: "folder",
    name: String(i),
    relativePath: String(i),
    children: Array.from({ length: 100 }, (_, j) => ({
      kind: "file",
      name: `${j}.md`,
      extension: ".md",
      relativePath: `${i}/${j}.md`,
    })),
  }));
  const graph = buildGraphFromVault({
    status: "ready",
    rootPath: "C:/vault",
    entries,
  });
  assert.equal(graph.nodes.length, 10101);
  assert.equal(graph.byId.get("42").children.length, 100);
  assert.equal(graph.byId.get("C:/vault").children.length, 100);
  assert.equal(graph.edges.length, 10100);
});
test("internal engine and agent-memory trees stay off Planet View without changing the vault snapshot", () => {
  const file = (relativePath) => ({
    kind: "file",
    name: relativePath.split("/").at(-1),
    relativePath,
    extension: ".md",
  });
  const entries = [
    {
      kind: "folder",
      name: ".engine",
      relativePath: ".engine",
      children: [file(".engine/runtime/readme.md")],
    },
    {
      kind: "folder",
      name: "agentContext.memory",
      relativePath: "agentContext.memory",
      children: [file("agentContext.memory/personality.md")],
    },
    {
      kind: "folder",
      name: "Research",
      relativePath: "Research",
      children: [
        file("Research/manually-added.md"),
        {
          kind: "folder",
          name: "AGENTCONTEXT.MEMORY",
          relativePath: "Research/AGENTCONTEXT.MEMORY",
          children: [file("Research/AGENTCONTEXT.MEMORY/internal.md")],
        },
      ],
    },
    file("agentContext.memory-notes.md"),
    file(".ENGINE\\cached.md"),
  ];
  const snapshot = { status: "ready", rootPath: "C:/bank", entries };
  const before = structuredClone(snapshot);
  const graph = buildGraphFromVault(snapshot);
  assert.deepEqual(
    graph.nodes.map((n) => n.id),
    [
      "C:/bank",
      "Research",
      "Research/manually-added.md",
      "agentContext.memory-notes.md",
    ],
  );
  assert.deepEqual(graph.byId.get("C:/bank").children, [
    "Research",
    "agentContext.memory-notes.md",
  ]);
  assert.deepEqual(graph.stats, {
    directories: 2,
    files: 2,
    connections: 0,
    orphans: 0,
  });
  assert.equal(graph.edges.length, 3);
  assert.deepEqual(snapshot, before);
});
