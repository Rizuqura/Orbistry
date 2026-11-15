const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { parseKnowledgeIndex } = require("./knowledge-index.cjs");
const {
  readKnowledgeIndex,
  validateKnowledgeIndex,
  saveKnowledgeIndex,
  previewKnowledgeSource,
} = require("./knowledge-store.cjs");
const {
  saveWorldViewChip,
  assignWorldViewFiles,
  unassignWorldViewFile,
} = require("./worldview-store.cjs");

/** Creates isolated assigned fixtures with path-shaped source IDs and cleans only the verified temporary directory. */
async function withUniverse(run) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-knowledge-"));
  const files = {
    "notes.md": "# Original notes\n<script>literal</script>\n",
    "table.csv": 'Name,Value\n"Two, parts",9\n',
    "image.png": Buffer.from("raw-image-fixture"),
    "file.pdf": Buffer.from("%PDF-1.4\nraw-preview-fixture"),
    "other.bin": "original",
    "unassigned.md": "unassigned",
  };
  try {
    for (const [name, content] of Object.entries(files))
      await fs.writeFile(path.join(root, name), content);
    for (const id of ["tsmc", "nvidia"]) {
      await saveWorldViewChip(root, {
        id,
        name: id,
        icon: "",
        color: "#262b30",
        tags: [],
        position: { x: 0, y: 0 },
        knowledgeMenus: [
          { id: "overview", title: "Overview" },
          { id: "legacy", title: "Saved menu" },
        ],
      });
      await assignWorldViewFiles(
        root,
        id,
        Object.keys(files).filter((name) => name !== "unassigned.md"),
      );
    }
    await run(root, files);
  } finally {
    assert.ok(
      path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep),
    );
    await fs.rm(root, { recursive: true, force: true });
  }
}

/** Checks strict syntax, line diagnostics, stable ordering, Unicode title ambiguity, and duplicate-source rejection. */
test("manual index parser interprets only explicit declarations", () => {
  const parsed = parseKnowledgeIndex(
    "# Profile\nsource: reports/Annual Report.pdf\nsource: notes.md\n\n# Empty\n# Shared\nsource: notes.md",
  );
  assert.deepEqual(parsed.errors, []);
  assert.deepEqual(
    parsed.menus.map((menu) => menu.title),
    ["Profile", "Empty", "Shared"],
  );
  assert.deepEqual(parsed.menus[0].sourceIds, [
    "reports/Annual Report.pdf",
    "notes.md",
  ]);
  assert.deepEqual(parsed.menus[1].sourceIds, []);
  assert.equal(parseKnowledgeIndex("# Shared").menus[0].id, parsed.menus[2].id);
  for (const text of [
    "source: notes.md",
    "## Wrong\n",
    "# One\nrandom prose",
    "# One\nsource:",
    "# One\nsource: ../notes.md",
    "# One\nsource: C:\\notes.md",
    "# One\nsource: notes.md\nsource: notes.md",
    "# Same\n# same",
    "# A B\n# A  B",
  ])
    assert.ok(parseKnowledgeIndex(text).errors.length, text);
  assert.equal(
    parseKnowledgeIndex("# One\nsource: notes.md\nsource: notes.md").errors[0]
      .line,
    3,
  );
  assert.deepEqual(parseKnowledgeIndex(""), { menus: [], errors: [] });
});

/** Verifies separate draft/applied persistence, exact Phase 03 preservation, and entity isolation. */
test("manual indexes save drafts and apply independently of entity source metadata", async () => {
  await withUniverse(async (root) => {
    const entityPath = path.join(
      root,
      ".wonnyy",
      "worldview",
      "entities",
      "tsmc.md",
    );
    const entityBefore = await fs.readFile(entityPath, "utf8");
    const initial = await readKnowledgeIndex(root, "tsmc");
    assert.deepEqual(initial, {
      draft: "",
      applied: null,
      menus: [],
      revision: null,
    });
    let state = await saveKnowledgeIndex(
      root,
      "tsmc",
      "# Profile\nsource: notes.md\n# Data\nsource: table.csv\nsource: notes.md",
      null,
      false,
    );
    assert.equal(state.applied, null);
    assert.deepEqual(state.menus, []);
    state = await saveKnowledgeIndex(
      root,
      "tsmc",
      state.draft,
      state.revision,
      true,
    );
    assert.equal(state.saved, true);
    assert.deepEqual(
      state.menus.map((menu) => menu.title),
      ["Profile", "Data"],
    );
    assert.equal((await readKnowledgeIndex(root, "nvidia")).applied, null);
    const restored = await readKnowledgeIndex(root, "tsmc");
    assert.equal(restored.applied, state.applied);
    const invalidDraft = await saveKnowledgeIndex(
      root,
      "tsmc",
      "invalid draft",
      restored.revision,
      false,
    );
    assert.equal(invalidDraft.applied, restored.applied);
    assert.equal(
      (await readKnowledgeIndex(root, "tsmc")).draft,
      "invalid draft",
    );
    assert.equal(await fs.readFile(entityPath, "utf8"), entityBefore);
  });
});

/** Proves failed validation never partially applies or saves invalid declarations over the last good index. */
test("invalid or stale manual indexes preserve the last applied document", async () => {
  await withUniverse(async (root) => {
    const state = await saveKnowledgeIndex(
      root,
      "tsmc",
      "# Good\nsource: notes.md",
      null,
      true,
    );
    const target = path.join(
      root,
      ".wonnyy",
      "worldview",
      "knowledge",
      "tsmc.md",
    );
    const original = await fs.readFile(target, "utf8");
    for (const ref of ["unknown.md", "unassigned.md", "../notes.md"]) {
      const invalid = await saveKnowledgeIndex(
        root,
        "tsmc",
        `# Changed\nsource: ${ref}`,
        state.revision,
        true,
      );
      assert.equal(invalid.saved, false);
      assert.equal(invalid.validation.errors[0].line, 2);
      assert.equal(await fs.readFile(target, "utf8"), original);
    }
    await assert.rejects(
      saveKnowledgeIndex(root, "tsmc", "# Old", null, true),
      /changed on disk/,
    );
    await fs.writeFile(target, original + "\n");
    await assert.rejects(
      saveKnowledgeIndex(root, "tsmc", "# Overwrite", state.revision, true),
      /changed on disk/,
    );
    assert.equal(await fs.readFile(target, "utf8"), original + "\n");
    await fs.unlink(path.join(root, "notes.md"));
    assert.match(
      (await validateKnowledgeIndex(root, "tsmc", state.applied)).errors[0]
        .message,
      /missing/,
    );
  });
});

/** Confirms presentation-only reads for every supported kind, exact source bytes, unsupported states, and broken-reference authorization. */
test("source previews preserve originals and enforce current assignments and applied references", async () => {
  await withUniverse(async (root, files) => {
    let state = await saveKnowledgeIndex(
      root,
      "tsmc",
      "# All\n" +
        Object.keys(files)
          .filter((name) => name !== "unassigned.md")
          .map((name) => `source: ${name}`)
          .join("\n"),
      null,
      true,
    );
    for (const [ref, kind] of [
      ["notes.md", "text"],
      ["table.csv", "text"],
      ["image.png", "image"],
      ["file.pdf", "pdf"],
      ["other.bin", "unsupported"],
    ]) {
      const preview = await previewKnowledgeSource(root, "tsmc", ref);
      assert.equal(preview.kind, kind);
      assert.equal(preview.size, Buffer.byteLength(files[ref]));
      if (kind === "text") assert.equal(preview.content, files[ref]);
      if (kind === "pdf")
        assert.deepEqual(Buffer.from(preview.data), files[ref]);
      if (kind === "image")
        assert.deepEqual(
          Buffer.from(preview.dataUrl.split(",")[1], "base64"),
          files[ref],
        );
      assert.deepEqual(
        await fs.readFile(path.join(root, ref)),
        Buffer.from(files[ref]),
      );
    }
    await assert.rejects(
      previewKnowledgeSource(root, "tsmc", "unassigned.md"),
      /applied index/,
    );
    await assert.rejects(
      previewKnowledgeSource(root, "nvidia", "notes.md"),
      /applied index/,
    );
    await unassignWorldViewFile(root, "tsmc", "notes.md");
    await assert.rejects(
      previewKnowledgeSource(root, "tsmc", "notes.md"),
      /unassigned/,
    );
    assert.equal(
      (await readKnowledgeIndex(root, "tsmc")).applied,
      state.applied,
    );
    await fs.unlink(path.join(root, "table.csv"));
    await assert.rejects(
      previewKnowledgeSource(root, "tsmc", "table.csv"),
      /missing/,
    );
  });
});

/** Checks per-entity concurrent saves reject stale writers and malformed companion files cannot be silently replaced. */
test("knowledge metadata concurrency, corruption, and entity boundaries fail explicitly", async () => {
  await withUniverse(async (root) => {
    const results = await Promise.allSettled([
      saveKnowledgeIndex(root, "tsmc", "# First", null, true),
      saveKnowledgeIndex(root, "tsmc", "# Second", null, true),
    ]);
    assert.equal(
      results.filter((item) => item.status === "fulfilled").length,
      1,
    );
    await assert.rejects(readKnowledgeIndex(root, "../outside"), /Invalid|Zod/);
    await assert.rejects(readKnowledgeIndex(root, "missing-entity"));
    const target = path.join(
      root,
      ".wonnyy",
      "worldview",
      "knowledge",
      "tsmc.md",
    );
    await fs.writeFile(target, "corrupt document");
    await assert.rejects(readKnowledgeIndex(root, "tsmc"), /frontmatter/);
    await assert.rejects(
      saveKnowledgeIndex(root, "tsmc", "# New", null, true),
      /frontmatter/,
    );
    assert.equal(await fs.readFile(target, "utf8"), "corrupt document");
  });
});
