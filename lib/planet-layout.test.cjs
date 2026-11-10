const assert = require("node:assert/strict");
const test = require("node:test");

const { computeLayout, computeStationLayout } = require("./planet-layout.ts");
const { stationProjection } = require("./station-projection.ts");

function node(id, type, parentId, children = [], fileType) {
  return {
    id,
    name: id,
    type,
    parentId,
    path: id,
    fileType,
    children,
    connections: [],
    level: id.split("/").length - 1,
  };
}

function graph(nodes, edges = [], projection = "filesystem") {
  return {
    nodes,
    edges,
    rootId: "root",
    byId: new Map(nodes.map((item) => [item.id, item])),
    projection,
    stats: { directories: 0, files: 0, connections: 0, orphans: 0 },
  };
}

function distance(layout, left, right) {
  const a = layout.positions.get(left);
  const b = layout.positions.get(right);
  assert.ok(a && b);
  return Math.hypot(a.x - b.x, a.y - b.y);
}

test("a heavier nested folder sits inward of lighter files in the same parent", () => {
  const directFiles = Array.from(
    { length: 12 },
    (_, index) => `root/file-${index}.md`,
  );
  const nestedFiles = Array.from(
    { length: 14 },
    (_, index) => `root/archive/item-${index}.pdf`,
  );
  const nodes = [
    node("root", "directory", undefined, [...directFiles, "root/archive"]),
    ...directFiles.map((id) => node(id, "file", "root", [], "md")),
    node("root/archive", "directory", "root", nestedFiles),
    ...nestedFiles.map((id) => node(id, "file", "root/archive", [], "pdf")),
  ];
  const layout = computeLayout(graph(nodes), "orbital");
  const fileDistances = directFiles.map((id) => distance(layout, "root", id));
  const archiveDistance = distance(layout, "root", "root/archive");

  assert.ok(
    Math.min(...fileDistances) > archiveDistance,
    "folders and files must share one size-ranked sequence",
  );
  assert.ok(
    nestedFiles.every(
      (id) => distance(layout, "root/archive", id) < archiveDistance,
    ),
  );
});

test("orbital output is deterministic, finite, and keeps asteroid files nearest", () => {
  const nodes = [
    node("root", "directory", undefined, ["root/a", "root/b"]),
    node("root/a", "directory", "root", ["root/a/readme", "root/a/blob"]),
    node("root/a/readme", "file", "root/a", [], "md"),
    node("root/a/blob", "file", "root/a", [], "other"),
    node("root/b", "directory", "root", ["root/b/deep"]),
    node("root/b/deep", "directory", "root/b", ["root/b/deep/data"]),
    node("root/b/deep/data", "file", "root/b/deep", [], "csv"),
  ];
  const first = computeLayout(graph(nodes), "orbital");
  const second = computeLayout(graph(nodes), "orbital");

  assert.deepEqual([...first.positions], [...second.positions]);
  assert.equal(first.positions.size, nodes.length);
  for (const position of first.positions.values()) {
    assert.ok(Number.isFinite(position.x) && Number.isFinite(position.y));
  }
  assert.ok(
    distance(first, "root/a", "root/a/blob") <
      distance(first, "root/a", "root/a/readme"),
  );

  const branchRadius = (anchorId, descendantIds) => {
    const anchor = first.positions.get(anchorId);
    return Math.max(
      ...descendantIds.map((id) => {
        const descendant = first.positions.get(id);
        return (
          Math.hypot(descendant.x - anchor.x, descendant.y - anchor.y) +
          descendant.size / 2
        );
      }),
    );
  };
  const aRadius = branchRadius("root/a", ["root/a/readme", "root/a/blob"]);
  const bRadius = branchRadius("root/b", ["root/b/deep", "root/b/deep/data"]);
  assert.ok(
    distance(first, "root/a", "root/b") >= aRadius + bRadius,
    "sibling branch footprints must not overlap",
  );
});

test("Station hubs organize matches without abandoning their families", () => {
  const nodes = [
    node("root", "directory", undefined, ["root/alpha", "root/beta"]),
    node("root/alpha", "directory", "root", ["root/alpha/a.md"]),
    node("root/alpha/a.md", "file", "root/alpha", [], "md"),
    node("root/beta", "directory", "root", ["root/beta/b.md"]),
    node("root/beta/b.md", "file", "root/beta", [], "md"),
  ];
  const stationGraph = graph(nodes, [], "station");
  const base = computeLayout(stationGraph, "orbital");
  const clusters = [
    {
      id: "research",
      name: "Research",
      memberIds: ["root/alpha/a.md", "root/beta/b.md"],
    },
  ];
  const station = computeStationLayout(
    stationGraph,
    new Set(clusters[0].memberIds),
    clusters,
  );

  assert.equal(station.contextHubs?.get("research")?.name, "Research");
  assert.notDeepEqual([...station.positions], [...base.positions]);
  assert.ok(distance(station, "root/alpha", "root/alpha/a.md") < 320);
  assert.ok(distance(station, "root/beta", "root/beta/b.md") < 320);
});

test("Station projection preserves separate networks and shared membership", () => {
  const nodes = [
    node("root", "directory", undefined, [
      "root/a.md",
      "root/b.md",
      "root/shared.md",
    ]),
    node("root/a.md", "file", "root", [], "md"),
    node("root/b.md", "file", "root", [], "md"),
    node("root/shared.md", "file", "root", [], "md"),
  ];
  const stations = [
    { id: "alpha", name: "Alpha" },
    { id: "beta", name: "Beta" },
  ];
  const assignments = [
    { relativePath: "root/a.md", stationIds: ["alpha"], missing: false },
    { relativePath: "root/b.md", stationIds: ["beta"], missing: false },
    {
      relativePath: "root/shared.md",
      stationIds: ["alpha", "beta"],
      missing: false,
    },
  ];
  const projection = stationProjection(
    graph(nodes),
    stations,
    assignments,
    new Set(["alpha", "beta"]),
    "any",
  );

  assert.deepEqual(projection.clusters[0], {
    id: "alpha",
    name: "Alpha",
    memberIds: ["root/a.md", "root/shared.md"],
  });
  assert.deepEqual(projection.clusters[1], {
    id: "beta",
    name: "Beta",
    memberIds: ["root/b.md", "root/shared.md"],
  });
  assert.equal(projection.graph.stats.connections, 4);
});

const { buildGraphFromVault } = require("./planet-vault.ts");
function gravityFixture() {
  const file = (name, bytes) => ({
    kind: "file",
    name,
    relativePath: name,
    extension: ".md",
    sizeBytes: bytes,
  });
  return buildGraphFromVault({
    status: "ready",
    rootPath: "root",
    entries: [
      {
        kind: "folder",
        name: "heavy",
        relativePath: "heavy",
        children: [file("heavy/large.md", 1000000), file("heavy/small.md", 10)],
      },
      {
        kind: "folder",
        name: "middle",
        relativePath: "middle",
        children: [file("middle/data.md", 1000)],
      },
      {
        kind: "folder",
        name: "light",
        relativePath: "light",
        children: [file("light/data.md", 10)],
      },
      { kind: "folder", name: "empty", relativePath: "empty", children: [] },
    ],
  });
}
test("gravity uses descendant bytes, places heavier siblings closer, and makes the vault largest", () => {
  const g = gravityFixture(),
    layout = computeLayout(g, "orbital");
  assert.equal(g.byId.get("heavy").sizeBytes, 1000010);
  assert.equal(g.byId.get("root").sizeBytes, 1001020);
  const ids = ["heavy", "middle", "light", "empty"];
  for (let i = 1; i < ids.length; i++)
    assert.ok(
      distance(layout, "root", ids[i - 1]) < distance(layout, "root", ids[i]),
    );
  assert.ok(
    distance(layout, "heavy", "heavy/large.md") <
      distance(layout, "heavy", "heavy/small.md"),
  );
  assert.ok(
    layout.positions.get("heavy/large.md").size >
      layout.positions.get("heavy/small.md").size,
  );
  assert.ok(
    [...layout.positions].every(
      ([id, pos]) =>
        id === "root" || pos.size < layout.positions.get("root").size,
    ),
  );
});
test("gravity emits seven complete vault guides and preserves all positions through orbit decoration", () => {
  const { withPlanetOrbits } = require("./planet-orbits.ts");
  const g = gravityFixture(),
    layout = computeLayout(g, "orbital");
  assert.equal(layout.orbits.filter((o) => o.parentId === "root").length, 7);
  assert.equal(withPlanetOrbits(g, layout), layout);
  for (const orbit of layout.orbits) {
    assert.ok(orbit.x - orbit.radius >= 0 && orbit.y - orbit.radius >= 0);
    assert.ok(
      orbit.x + orbit.radius <= layout.width &&
        orbit.y + orbit.radius <= layout.height,
    );
    assert.equal(orbit.x, layout.positions.get(orbit.parentId).x);
    assert.equal(orbit.y, layout.positions.get(orbit.parentId).y);
  }
  assert.equal(layout.positions.size, g.nodes.length);
  const reversed = { ...g, nodes: [...g.nodes].reverse() };
  assert.deepEqual(
    [...computeLayout(reversed, "orbital").positions],
    [...layout.positions],
  );
});

test("seven gravity rings are evenly spaced and mixed contents are balanced across them", () => {
  const entries = Array.from({ length: 28 }, (_, index) =>
    index % 2
      ? {
          kind: "file",
          name: "file-" + index,
          relativePath: "file-" + index,
          extension: ".md",
          sizeBytes: 1000000 - index * 1000,
        }
      : {
          kind: "folder",
          name: "folder-" + index,
          relativePath: "folder-" + index,
          children: [
            {
              kind: "file",
              name: "source.md",
              relativePath: "folder-" + index + "/source.md",
              extension: ".md",
              sizeBytes: 1000000 - index * 1000,
            },
          ],
        },
  );
  const g = buildGraphFromVault({ status: "ready", rootPath: "root", entries });
  const layout = computeLayout(g, "orbital");
  const radii = layout.orbits
    .filter((o) => o.parentId === "root")
    .map((o) => o.radius);
  const step = radii[1] - radii[0];
  assert.equal(radii.length, 7);
  for (let i = 2; i < radii.length; i++)
    assert.ok(Math.abs(radii[i] - radii[i - 1] - step) < 1e-7);
  const counts = Array(7).fill(0);
  let previous = 0;
  for (const entry of entries) {
    const d = distance(layout, "root", entry.relativePath);
    assert.ok(
      d > previous,
      "every smaller sibling must sit further out, regardless of type",
    );
    previous = d;
    const band = Math.min(
      6,
      Math.max(0, Math.floor((d - radii[0] + 1e-7) / step)),
    );
    counts[band]++;
  }
  assert.deepEqual(counts, [4, 4, 4, 4, 4, 4, 4]);
  assert.equal(layout.positions.get("root").size, 480);
});
