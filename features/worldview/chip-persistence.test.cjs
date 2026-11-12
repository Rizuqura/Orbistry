const test = require("node:test");
const assert = require("node:assert/strict");
const {
  loadWorldViewSession,
  getWorldViewPersistence,
  getSessionChips,
  addSessionChip,
  moveSessionChip,
  updateSessionChip,
  removeSessionChip,
  flushWorldViewWrites,
  retryWorldViewWrites,
} = require("./chip-session.ts");

/** Exercises durable snapshots, a recoverable disk error, and root isolation through a narrow mocked bridge. */
test("WorldView restores snapshots, retries failed writes, and isolates Universe roots", async () => {
  const roots = new Map();
  let fail = false;
  global.window = {
    orbistryDesktop: {
      worldview: {
        /** Emulates metadata persistence without any source-content capability. */
        async request(operation, input) {
          if (!roots.has(input.vaultPath))
            roots.set(input.vaultPath, new Map());
          const records = roots.get(input.vaultPath);
          if (operation === "load")
            return {
              rootPath: input.vaultPath,
              indexDirectory: `${input.vaultPath}/.wonnyy/worldview/entities`,
              chips: [...records.values()].map((chip) => structuredClone(chip)),
              issues: [],
            };
          if (fail) throw new Error("Disk is read-only");
          if (operation === "save") {
            const saved = {
              ...structuredClone(input.chip),
              sources: records.get(input.chip.id)?.sources ?? [],
              indexRef: `.wonnyy/worldview/entities/${input.chip.id}.md`,
            };
            records.set(saved.id, saved);
            return structuredClone(saved);
          }
          if (operation === "delete") records.delete(input.id);
        },
      },
    },
  };
  try {
    await loadWorldViewSession("Universe-A");
    assert.equal(getWorldViewPersistence().ready, true);
    const chip = {
      id: "persisted",
      name: "Saved",
      icon: "",
      color: "#262b30",
      tags: [],
      position: { x: 0, y: 0 },
    };
    addSessionChip(chip);
    moveSessionChip(chip.id, { x: 5, y: -2 });
    await flushWorldViewWrites();
    assert.equal(getWorldViewPersistence().pending, 0);
    assert.deepEqual(roots.get("Universe-A").get(chip.id).position, {
      x: 5,
      y: -2,
    });
    await loadWorldViewSession("Universe-A");
    assert.deepEqual(getSessionChips()[0].position, { x: 5, y: -2 });
    fail = true;
    updateSessionChip(chip.id, { ...chip, name: "Retry me" });
    await assert.rejects(flushWorldViewWrites(), /read-only/);
    assert.match(getWorldViewPersistence().error, /read-only/);
    assert.equal(getSessionChips()[0].name, "Retry me");
    fail = false;
    await retryWorldViewWrites();
    assert.equal(getWorldViewPersistence().error, "");
    assert.equal(roots.get("Universe-A").get(chip.id).name, "Retry me");
    await loadWorldViewSession("Universe-B");
    assert.deepEqual(getSessionChips(), []);
    await loadWorldViewSession("Universe-A");
    assert.equal(getSessionChips()[0].name, "Retry me");
    removeSessionChip(chip.id);
    await flushWorldViewWrites();
    await loadWorldViewSession("Universe-A");
    assert.deepEqual(getSessionChips(), []);
  } finally {
    delete global.window;
  }
});
