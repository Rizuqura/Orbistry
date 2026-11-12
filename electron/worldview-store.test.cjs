const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { writeTextAtomic } = require("./ai/json-store.cjs");
const { listVaultMetadata, statVaultSource } = require("./vault-service.cjs");
const {
  loadWorldView,
  saveWorldViewChip,
  assignWorldViewFiles,
  unassignWorldViewFile,
  deleteWorldViewChip,
  parseEntityIndex,
  serializeEntityIndex,
} = require("./worldview-store.cjs");

/** Creates an isolated Universe fixture and deletes only its verified temporary parent after testing. */
async function withUniverse(run) {
  const temporary = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-worldview-store-"),
  );
  const root = path.join(temporary, "Universe");
  await fs.mkdir(root);
  try {
    await run(root, temporary);
  } finally {
    assert.ok(
      path.resolve(temporary).startsWith(path.resolve(os.tmpdir()) + path.sep),
    );
    await fs.rm(temporary, { recursive: true, force: true });
  }
}
/** Returns renderer-owned chip metadata without source contents or invented source IDs. */
function chip(id) {
  return {
    id,
    name: id,
    icon: "",
    color: "#262b30",
    tags: [],
    position: { x: 0, y: 0 },
  };
}
/** Returns the actual reserved Markdown index location for fixture assertions. */
function indexPath(root, id) {
  return path.join(root, ".wonnyy", "worldview", "entities", `${id}.md`);
}

/** Checks that a concurrent human edit is retained instead of overwritten and failed writes leave no temp files. */
test("atomic metadata writes detect external edits without replacing the user's document", async () => {
  await withUniverse(async (root) => {
    await saveWorldViewChip(root, chip("conflict"));
    const target = indexPath(root, "conflict");
    const original = await fs.readFile(target, "utf8");
    const edited = original + "\nUser-authored notes.\n";
    await fs.writeFile(target, edited);
    await assert.rejects(
      writeTextAtomic(target, original + "\nOld save.\n", original),
      /changed on disk/,
    );
    assert.equal(await fs.readFile(target, "utf8"), edited);
    assert.deepEqual(await fs.readdir(path.dirname(target)), ["conflict.md"]);
  });
});

/** Confirms browsing/search and assignment only stat source bytes, including unsupported file types and invalid PDFs. */
test("Universe metadata browsing and assignments never parse, copy, or move original files", async () => {
  await withUniverse(async (root) => {
    await fs.mkdir(path.join(root, "nested", "deep"), { recursive: true });
    await fs.mkdir(path.join(root, ".wonnyy"));
    await fs.writeFile(
      path.join(root, ".wonnyy", "internal.md"),
      "private metadata",
    );
    await fs.writeFile(
      path.join(root, "nested", "deep", "Report.pdf"),
      Buffer.alloc(1234, 42),
    );
    await fs.writeFile(path.join(root, "empty.bin"), "");
    const originalRead = fs.readFile;
    const sourcePaths = new Set([
      path.join(root, "nested", "deep", "Report.pdf"),
      path.join(root, "empty.bin"),
    ]);
    /** Fails the test if a WorldView operation attempts to read original content. */
    fs.readFile = async function forbidSourceContent(file, ...args) {
      assert.equal(
        sourcePaths.has(String(file)),
        false,
        "WorldView must not read source contents",
      );
      return originalRead.call(this, file, ...args);
    };
    try {
      const initial = await loadWorldView(root);
      assert.deepEqual(initial.chips, []);
      const listing = await listVaultMetadata(root);
      assert.deepEqual(
        listing.entries.map((entry) => entry.name),
        ["nested", "empty.bin"],
      );
      const nested = await listVaultMetadata(root, {
        directory: "nested/deep",
      });
      assert.equal(nested.entries[0].sizeBytes, 1234);
      const search = await listVaultMetadata(root, { query: "REPORT" });
      assert.equal(search.entries[0].relativePath, "nested/deep/Report.pdf");
      await saveWorldViewChip(root, chip("entity-a"));
      await saveWorldViewChip(root, chip("entity-b"));
      const a = await assignWorldViewFiles(root, "entity-a", [
        "nested/deep/Report.pdf",
        "empty.bin",
        "nested/deep/Report.pdf",
      ]);
      assert.equal(a.sources.length, 2);
      assert.equal(
        a.sources.find((source) => source.sourceId === "nested/deep/Report.pdf")
          .sizeBytes,
        1234,
      );
      assert.equal(
        a.sources.find((source) => source.sourceId === "empty.bin").sizeBytes,
        0,
      );
      const b = await assignWorldViewFiles(root, "entity-b", [
        "nested/deep/Report.pdf",
      ]);
      assert.equal(b.sources[0].sourceId, "nested/deep/Report.pdf");
      const restored = await loadWorldView(root);
      assert.equal(restored.chips.length, 2);
      assert.equal(restored.chips[0].sources.length, 2);
      await unassignWorldViewFile(root, "entity-a", "nested/deep/Report.pdf");
      assert.equal((await loadWorldView(root)).chips[1].sources.length, 1);
      await deleteWorldViewChip(root, "entity-a");
      assert.equal(
        (await fs.stat(path.join(root, "nested", "deep", "Report.pdf"))).size,
        1234,
      );
      assert.equal((await fs.stat(path.join(root, "empty.bin"))).size, 0);
    } finally {
      fs.readFile = originalRead;
    }
    assert.deepEqual(
      await fs.readFile(path.join(root, "nested", "deep", "Report.pdf")),
      Buffer.alloc(1234, 42),
    );
  });
});

/** Checks deterministic YAML round trips and preservation of unrelated fields/body during every mutation. */
test("Markdown indexes preserve unrelated metadata and body while associations persist atomically", async () => {
  await withUniverse(async (root) => {
    await fs.writeFile(path.join(root, "notes.md"), "source untouched");
    await saveWorldViewChip(root, chip("entity"));
    const record = parseEntityIndex(
      await fs.readFile(indexPath(root, "entity"), "utf8"),
      "entity",
    );
    record.metadata.extra = { owner: "user", custom: [1, 2] };
    record.body = "# My notes\n\nKeep **all** this Markdown.\n";
    const serialized = serializeEntityIndex(record);
    assert.equal(
      serializeEntityIndex(parseEntityIndex(serialized, "entity")),
      serialized,
    );
    await fs.writeFile(indexPath(root, "entity"), serialized);
    await assignWorldViewFiles(root, "entity", ["notes.md"]);
    await saveWorldViewChip(root, {
      ...chip("entity"),
      name: "Renamed",
      position: { x: 4, y: -2 },
    });
    const saved = parseEntityIndex(
      await fs.readFile(indexPath(root, "entity"), "utf8"),
      "entity",
    );
    assert.deepEqual(saved.metadata.extra, record.metadata.extra);
    assert.equal(saved.body, record.body);
    assert.equal(saved.metadata.sources[0].origin, "universe");
    assert.equal(saved.metadata.sources[0].source_ref, "notes.md");
    assert.equal(
      saved.metadata.sources[0].size_bytes,
      Buffer.byteLength("source untouched"),
    );
    await unassignWorldViewFile(root, "entity", "notes.md");
    const final = parseEntityIndex(
      await fs.readFile(indexPath(root, "entity"), "utf8"),
      "entity",
    );
    assert.deepEqual(final.metadata.extra, record.metadata.extra);
    assert.equal(final.body, record.body);
    assert.equal(
      await fs.readFile(path.join(root, "notes.md"), "utf8"),
      "source untouched",
    );
    assert.deepEqual(
      (await fs.readdir(path.dirname(indexPath(root, "entity")))).sort(),
      ["entity.md"],
    );
  });
});

/** Checks duplicate/concurrent additions, broken references, and damaged-index isolation without destructive fallback. */
test("concurrent assignments remain unique; missing sources and corrupt indexes remain reviewable", async () => {
  await withUniverse(async (root) => {
    await fs.writeFile(path.join(root, "one.bin"), "12345");
    await fs.writeFile(path.join(root, "two.bin"), "123456789");
    await saveWorldViewChip(root, chip("valid"));
    await Promise.all([
      assignWorldViewFiles(root, "valid", ["one.bin"]),
      assignWorldViewFiles(root, "valid", ["two.bin", "one.bin"]),
    ]);
    assert.equal((await loadWorldView(root)).chips[0].sources.length, 2);
    await fs.unlink(path.join(root, "one.bin"));
    await fs.writeFile(
      indexPath(root, "damaged"),
      "---\nnot: valid\n---\nKeep this",
    );
    const restored = await loadWorldView(root);
    assert.equal(restored.chips.length, 1);
    assert.equal(restored.issues.length, 1);
    const missing = restored.chips[0].sources.find(
      (source) => source.sourceId === "one.bin",
    );
    assert.equal(missing.status, "missing");
    assert.equal(missing.sizeBytes, null);
    assert.equal(missing.recordedSizeBytes, 5);
    await fs.unlink(path.join(root, "two.bin"));
    await fs.mkdir(path.join(root, "two.bin"));
    const unavailable = (await loadWorldView(root)).chips[0].sources.find(
      (source) => source.sourceId === "two.bin",
    );
    assert.equal(unavailable.status, "unavailable");
    assert.equal(unavailable.sizeBytes, null);
    await assert.rejects(saveWorldViewChip(root, chip("damaged")), /schema|ID/);
    assert.equal(
      await fs.readFile(indexPath(root, "damaged"), "utf8"),
      "---\nnot: valid\n---\nKeep this",
    );
  });
});

/** Rejects traversal, metadata assignment, folders, outside symlinks, and malformed IDs without creating records. */
test("Universe boundaries prevent folder assignments and traversal", async () => {
  await withUniverse(async (root, temporary) => {
    await fs.mkdir(path.join(root, "folder"));
    await fs.writeFile(path.join(temporary, "outside.bin"), "outside");
    await saveWorldViewChip(root, chip("entity"));
    for (const reference of [
      "../outside.bin",
      ".wonnyy/worldview/entities/entity.md",
      "C:/outside.bin",
      "folder/../outside.bin",
      "folder\\file.bin",
    ])
      await assert.rejects(statVaultSource(root, reference));
    await assert.rejects(
      assignWorldViewFiles(root, "entity", ["folder"]),
      /Only files/,
    );
    await assert.rejects(
      saveWorldViewChip(root, chip("../../outside")),
      /Invalid/,
    );
    assert.equal((await loadWorldView(root)).chips[0].sources.length, 0);
    const outside = path.join(temporary, "external");
    await fs.mkdir(outside);
    await fs.writeFile(path.join(outside, "secret.bin"), "not a source");
    try {
      await fs.symlink(
        outside,
        path.join(root, "linked"),
        process.platform === "win32" ? "junction" : "dir",
      );
    } catch (error) {
      if (!["EPERM", "EACCES"].includes(error.code)) throw error;
      return;
    }
    await assert.rejects(statVaultSource(root, "linked/secret.bin"), /Linked/);
    assert.equal(
      (await listVaultMetadata(root)).entries.some(
        (entry) => entry.name === "linked",
      ),
      false,
    );
  });
});
