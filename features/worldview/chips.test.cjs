const test = require("node:test");
const assert = require("node:assert/strict");
const {
  findAvailableChipPosition,
  chipPositionsOverlap,
  snapChipPosition,
  parseChipTags,
} = require("./chips.ts");
const {
  getSessionChips,
  subscribeChips,
  addSessionChip,
  moveSessionChip,
  removeSessionChip,
  updateSessionChip,
} = require("./chip-session.ts");

/** Verifies signed fractional anchors snap deterministically and metadata stays normalized. */
test("chip anchors snap in every quadrant and tags are trimmed and deduplicated", () => {
  assert.deepEqual(snapChipPosition({ x: 2.7, y: -4.2 }), { x: 3, y: -4 });
  assert.deepEqual(snapChipPosition({ x: -2.7, y: 4.2 }), { x: -3, y: 4 });
  assert.deepEqual(
    parseChipTags("  theory, research , theory, , research, work "),
    ["theory", "research", "work"],
  );
  assert.deepEqual(parseChipTags(" , "), []);
});

/** Exercises expanding placement rings with crowded, fractional, and negative camera centers. */
test("creation finds free integer anchors near the camera without overlapping platforms", () => {
  for (const target of [
    { x: 0, y: 0 },
    { x: -73.2, y: 19.7 },
  ]) {
    const chips = [];
    for (let index = 0; index < 32; index += 1) {
      const position = findAvailableChipPosition(target, chips);
      assert.ok(Number.isInteger(position.x) && Number.isInteger(position.y));
      assert.ok(
        Math.abs(position.x - target.x) < 16 &&
          Math.abs(position.y - target.y) < 16,
      );
      for (const previous of chips)
        assert.equal(chipPositionsOverlap(position, previous.position), false);
      chips.push({ id: String(index), position });
    }
  }
  assert.equal(chipPositionsOverlap({ x: 0, y: 0 }, { x: 2, y: 0 }), false);
  assert.equal(chipPositionsOverlap({ x: 0, y: 0 }, { x: 1, y: 1 }), true);
});

/** Ensures drag snapping excludes its own footprint and resolves an occupied destination. */
test("drag snapping retains free anchors and avoids another chip", () => {
  const chips = [
    { id: "moving", position: { x: 0, y: 0 } },
    { id: "other", position: { x: 4, y: 0 } },
  ];
  assert.deepEqual(
    findAvailableChipPosition({ x: 0.1, y: 0.2 }, chips, "moving"),
    { x: 0, y: 0 },
  );
  const result = findAvailableChipPosition(
    { x: 4.1, y: -0.2 },
    chips,
    "moving",
  );
  assert.equal(chipPositionsOverlap(result, chips[1].position), false);
  assert.ok(Number.isInteger(result.x) && Number.isInteger(result.y));
});

/** Verifies a fresh session is empty and confirmed mutations publish immutable snapshots only. */
test("session begins empty, publishes one add/move, and rejects ambiguous IDs", () => {
  assert.deepEqual(getSessionChips(), []);
  let notifications = 0;
  /** Counts session publications for exactly-once mutation assertions. */
  function notify() {
    notifications += 1;
  }
  const unsubscribe = subscribeChips(notify);
  const chip = {
    id: "test-chip",
    name: "Research",
    icon: "□",
    tags: [],
    position: { x: 0, y: 0 },
  };
  addSessionChip(chip);
  const first = getSessionChips();
  assert.equal(first.length, 1);
  assert.equal(notifications, 1);
  moveSessionChip(chip.id, { x: 4, y: -2 });
  assert.equal(notifications, 2);
  assert.notEqual(getSessionChips(), first);
  assert.deepEqual(first[0].position, { x: 0, y: 0 });
  assert.deepEqual(getSessionChips()[0].position, { x: 4, y: -2 });
  assert.throws(() => addSessionChip(chip), /unique/);
  assert.throws(
    () => moveSessionChip("missing", { x: 1, y: 1 }),
    /no longer exists/,
  );
  assert.equal(notifications, 2);
  unsubscribe();
  moveSessionChip(chip.id, { x: 6, y: 2 });
  assert.equal(notifications, 2);
});

/** Ensures saving appearance changes preserves identity/position, other chips, and historical snapshots. */
test("editing updates only the chosen chip metadata and appearance", () => {
  const baseline = getSessionChips();
  const chip = {
    id: "edit-chip",
    name: "Old",
    icon: "□",
    color: "#262b30",
    tags: [],
    position: { x: 7, y: -4 },
  };
  addSessionChip(chip);
  const before = getSessionChips();
  const draft = {
    name: "New",
    icon: "★",
    iconImage: "data:image/png;base64,test",
    color: "#34abcd",
    category: "Ideas",
    tags: ["custom"],
  };
  updateSessionChip(chip.id, draft);
  assert.deepEqual(getSessionChips(), [
    ...baseline,
    { ...draft, id: chip.id, position: chip.position },
  ]);
  assert.deepEqual(before, [...baseline, chip]);
  const after = getSessionChips();
  assert.throws(() => updateSessionChip("missing", draft), /no longer exists/);
  assert.equal(getSessionChips(), after);
  updateSessionChip(chip.id, { ...draft, iconImage: undefined });
  assert.equal(getSessionChips().at(-1).iconImage, undefined);
  removeSessionChip(chip.id);
  assert.deepEqual(getSessionChips(), baseline);
});

/** Ensures deletion targets IDs rather than names, preserves old snapshots, and releases occupied anchors. */
test("deletion removes exactly one ID, releases its cell, and can return to an empty session", () => {
  const baseline = getSessionChips();
  const first = {
    id: "delete-first",
    name: "Same name",
    icon: "□",
    tags: [],
    position: { x: 20, y: 20 },
  };
  const second = { ...first, id: "delete-second", position: { x: 24, y: 20 } };
  addSessionChip(first);
  addSessionChip(second);
  const previous = getSessionChips();
  let notifications = 0;
  /** Counts deletion publications to guard against duplicate or missing-ID notifications. */
  function notifyDeletion() {
    notifications += 1;
  }
  const unsubscribe = subscribeChips(notifyDeletion);
  assert.equal(removeSessionChip(first.id), true);
  assert.equal(notifications, 1);
  assert.deepEqual(getSessionChips(), [...baseline, second]);
  assert.deepEqual(previous, [...baseline, first, second]);
  assert.deepEqual(
    findAvailableChipPosition(first.position, getSessionChips()),
    first.position,
  );
  const after = getSessionChips();
  assert.equal(removeSessionChip(first.id), false);
  assert.equal(removeSessionChip("missing"), false);
  assert.equal(getSessionChips(), after);
  assert.equal(notifications, 1);
  assert.equal(removeSessionChip(second.id), true);
  assert.equal(notifications, 2);
  assert.deepEqual(getSessionChips(), baseline);
  unsubscribe();
  for (const chip of baseline) removeSessionChip(chip.id);
  assert.deepEqual(getSessionChips(), []);
});
