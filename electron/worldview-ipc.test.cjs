const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { registerWorldViewIpc } = require("./worldview-ipc.cjs");

/** Verifies root checks and original-file locating without launching the OS shell. */
test("WorldView IPC rejects stale/forged roots and reveals only contained files", async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-world-ipc-"));
  const handlers = new Map();
  const revealed = [];
  try {
    await fs.writeFile(path.join(root, "source.bin"), "bytes");
    registerWorldViewIpc(
      {
        handle(channel, handler) {
          handlers.set(channel, handler);
        },
      },
      () => root,
      {
        showItemInFolder(file) {
          revealed.push(file);
        },
      },
    );
    const forged = await handlers.get("worldview:list")(null, {
      vaultPath: root + "-other",
    });
    assert.equal(forged.ok, false);
    assert.match(forged.error, /Universe changed/);
    const listing = await handlers.get("worldview:list")(null, {
      vaultPath: root,
    });
    assert.equal(listing.value.entries[0].relativePath, "source.bin");
    assert.equal(
      (
        await handlers.get("worldview:reveal")(null, {
          vaultPath: root,
          sourceRef: "source.bin",
        })
      ).ok,
      true,
    );
    assert.deepEqual(revealed, [
      path.join(await fs.realpath(root), "source.bin"),
    ]);
    assert.equal(
      (
        await handlers.get("worldview:reveal")(null, {
          vaultPath: root,
          sourceRef: "../outside.bin",
        })
      ).ok,
      false,
    );
    assert.equal(revealed.length, 1);
  } finally {
    assert.ok(
      path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep),
    );
    await fs.rm(root, { recursive: true, force: true });
  }
});
