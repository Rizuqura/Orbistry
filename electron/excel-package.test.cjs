const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");
const { execFile } = require("node:child_process");
const { promisify } = require("node:util");
const execute = promisify(execFile);

/** Exercises installation and upgrade boundaries using a temporary Universe; rejects unverified edits and preserves the entire previous package as a contained backup. */
test("Excel package upgrades preserve verified backups and reject modified packages", async () => {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-excel-package-"),
  );
  const script = path.resolve(
    __dirname,
    "../scripts/build/build-excel-engine.cjs",
  );
  try {
    const marker = path.join(root, "original-source.txt");
    await fs.writeFile(marker, "source must remain here");
    const first = JSON.parse(
      (await execute(process.execPath, [script, "--universe", root])).stdout,
    );
    assert.equal(
      first.installed,
      path.join(await fs.realpath(root), ".engine", "wonton-excel"),
    );
    await assert.rejects(
      execute(process.execPath, [script, "--universe", root]),
      /already exists/,
    );
    const entry = path.join(first.installed, "index.cjs");
    const original = await fs.readFile(entry);
    await fs.appendFile(entry, "\n// user modification\n");
    await assert.rejects(
      execute(process.execPath, [script, "--universe", root, "--upgrade"]),
      /changed or untracked/,
    );
    assert.match(await fs.readFile(entry, "utf8"), /user modification/);
    await fs.writeFile(entry, original);
    const upgraded = JSON.parse(
      (
        await execute(process.execPath, [
          script,
          "--universe",
          root,
          "--upgrade",
        ])
      ).stdout,
    );
    assert.equal(
      path.dirname(upgraded.backup),
      path.join(await fs.realpath(root), ".engine"),
    );
    assert.deepEqual(
      await fs.readFile(path.join(upgraded.backup, "index.cjs")),
      original,
    );
    assert.deepEqual(await fs.readFile(entry), original);
    assert.equal(await fs.readFile(marker, "utf8"), "source must remain here");
  } finally {
    assert.ok(
      path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep),
    );
    await fs.rm(root, { recursive: true, force: true });
  }
});
