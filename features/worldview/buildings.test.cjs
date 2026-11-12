const test = require("node:test");
const assert = require("node:assert/strict");
const {
  normalizedBuildingHeights,
  layoutFileBuildings,
  MIN_BUILDING_HEIGHT,
  MAX_BUILDING_HEIGHT,
  MODERATE_BUILDING_HEIGHT,
  MAX_VISIBLE_BUILDINGS,
} = require("./buildings.ts");

/** Builds metadata-only fixtures with known bytes and real-reference-shaped IDs. */
function source(id, sizeBytes, status = "available") {
  return {
    sourceId: id,
    sourceRef: id,
    filename: id,
    extension: ".bin",
    sizeBytes,
    recordedSizeBytes: sizeBytes,
    origin: "universe",
    status,
  };
}

/** Verifies exact logarithmic per-entity normalization, zero bytes, huge files, and missing metadata. */
test("file heights use exact per-entity logarithmic byte min–max normalization", () => {
  const sources = [
    source("zero", 0),
    source("middle", 99),
    source("large", 9999),
    source("missing", null, "missing"),
  ];
  const values = normalizedBuildingHeights(sources);
  assert.equal(values.get("zero"), MIN_BUILDING_HEIGHT);
  assert.equal(values.get("large"), MAX_BUILDING_HEIGHT);
  assert.ok(
    Math.abs(
      values.get("middle") -
        (MIN_BUILDING_HEIGHT + (MAX_BUILDING_HEIGHT - MIN_BUILDING_HEIGHT) / 2),
    ) < 1e-9,
  );
  assert.equal(values.get("missing"), null);
  assert.equal(
    normalizedBuildingHeights([source("single", 50)]).get("single"),
    MODERATE_BUILDING_HEIGHT,
  );
  assert.equal(
    normalizedBuildingHeights([source("a", 0), source("b", 0)]).get("b"),
    MODERATE_BUILDING_HEIGHT,
  );
  assert.equal(
    normalizedBuildingHeights([
      source("a", 1),
      source("big", Number.MAX_SAFE_INTEGER),
    ]).get("big"),
    MAX_BUILDING_HEIGHT,
  );
  assert.notEqual(
    normalizedBuildingHeights([source("a", 99), source("b", 9999)]).get("a"),
    values.get("middle"),
  );
  assert.equal(
    normalizedBuildingHeights([source("invalid", -1)]).get("invalid"),
    null,
  );
});

/** Verifies fixed footprints, bounded capacity, stable ordering, and access to every overflowed source. */
test("building arrangement is stable, inside the platform, and never overlaps footprints", () => {
  for (const count of [0, 1, 2, 4, 5, 8, 9, 10, 50]) {
    const sources = Array.from({ length: count }, (_, index) =>
      source(`file-${String(index).padStart(3, "0")}`, index * 100),
    );
    const layout = layoutFileBuildings(sources);
    assert.deepEqual(layoutFileBuildings([...sources].reverse()), layout);
    assert.ok(layout.length <= MAX_VISIBLE_BUILDINGS);
    for (let index = 0; index < layout.length; index += 1) {
      const building = layout[index];
      const half = building.footprint / 2;
      assert.ok(
        Math.abs(building.position.x) + half < 1 &&
          Math.abs(building.position.y) + half < 1,
      );
      for (let other = 0; other < index; other += 1)
        assert.ok(
          Math.abs(building.position.x - layout[other].position.x) >=
            building.footprint ||
            Math.abs(building.position.y - layout[other].position.y) >=
              building.footprint,
        );
    }
    const represented = layout.reduce(
      (total, item) => total + (item.kind === "overflow" ? item.count : 1),
      0,
    );
    assert.equal(represented, count);
  }
});

/** Verifies descending heights from the top to bottom corner, square bounds, and stable equal-size slots. */
test("square clusters descend in size from the top corner toward the bottom", () => {
  const sources = Array.from({ length: 9 }, (_, index) =>
    source(`file-${index}`, index * 100),
  );
  const layout = layoutFileBuildings(sources);
  const bySize = [...layout].sort((a, b) => b.height - a.height);
  assert.deepEqual(bySize[0].position, { x: -0.3, y: -0.3 });
  assert.deepEqual(bySize.at(-1).position, { x: 0.3, y: 0.3 });
  for (let index = 1; index < bySize.length; index += 1) {
    const previous = bySize[index - 1].position;
    const current = bySize[index].position;
    assert.ok(
      previous.x + previous.y <= current.x + current.y,
      "height decreases along the projected top-to-bottom ground direction",
    );
  }
  assert.deepEqual(
    [...new Set(layout.map((building) => building.position.x))].sort(),
    [-0.3, 0, 0.3],
  );
  assert.deepEqual(
    [...new Set(layout.map((building) => building.position.y))].sort(),
    [-0.3, 0, 0.3],
  );
  const tied = layoutFileBuildings([
    source("z", 50),
    source("a", 50),
    source("missing", null, "missing"),
  ]);
  assert.equal(tied[0].source.sourceId, "a");
  assert.equal(
    tied.find((building) => building.source.sourceId === "missing").height,
    null,
  );
  const overflow = layoutFileBuildings([...sources, source("largest", 1e9)]);
  assert.equal(overflow[0].source.sourceId, "largest");
  assert.equal(
    overflow.find((building) => building.kind === "overflow").count,
    2,
  );
});
