const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const { buildTagIndex } = require("./engines/tag-association/indexer.cjs");
const { searchEntities } = require("./engines/tag-association/search.cjs");
const { normalizeTag } = require("./engines/tag-association/normalizer.cjs");
const {
  getAssociationStatistics,
} = require("./engines/tag-association/association.cjs");
const service = require("./domains/indexing/tag-association-service.cjs");
const {
  saveWorldViewChip,
  deleteWorldViewChip,
} = require("./domains/entity/worldview-store.cjs");
const {
  listVaultMetadata,
  scanVault,
} = require("./domains/universe/vault-service.cjs");

/** Supplies persisted-field-only fixtures with exact, associated, multiword and duplicate-normalized tags. */
function fixtures() {
  return [
    {
      id: "a",
      name: "Solar Farm",
      tags: [
        "solar",
        "renewable",
        "electricity",
        " RENEWABLE ",
        "ｒｅｎｅｗａｂｌｅ",
      ],
    },
    { id: "b", name: "Wind Farm", tags: ["wind", "renewable", "electricity"] },
    {
      id: "c",
      name: "Hydro Plant",
      tags: ["hydro", "renewable", "infrastructure"],
    },
    { id: "d", name: "Solar Supplier", tags: ["solar"] },
    { id: "e", name: "Grid", tags: ["Electricity"] },
    { id: "f", name: "Road", tags: ["infrastructure"] },
    { id: "g", name: "Renewable", tags: ["unrelated"] },
    { id: "h", name: "Clean Project", tags: [" Clean   Energy ", "infra"] },
    { id: "i", name: "Combined Supplier", tags: ["solar", "electricity"] },
  ];
}

/** Verifies normalized set counts, symmetric pairs, phrase-preserving lexical search and exact-before-frequency ranking. */
test("native tag search ranks measured co-occurrences and preserves exact matches", () => {
  const original = fixtures();
  const before = JSON.stringify(original);
  const index = buildTagIndex("world-a", original, "revision-a");
  assert.equal(normalizeTag("  ＣＬＥＡＮ \t Energy "), "clean energy");
  assert.equal(
    index.tagFrequencies.find((tag) => tag.tag === "renewable").count,
    3,
  );
  const pairs = getAssociationStatistics(index, "RENEWABLE");
  assert.equal(pairs[0].tag, "electricity");
  assert.equal(pairs[0].count, 2);
  assert.equal(
    getAssociationStatistics(index, "electricity").find(
      (tag) => tag.tag === "renewable",
    ).count,
    2,
  );
  assert.equal(pairs.find((tag) => tag.tag === "solar").count, 1);
  assert.ok(
    pairs.findIndex((tag) => tag.tag === "wind") <
      pairs.findIndex((tag) => tag.tag === "solar"),
    "equal pair counts prefer measured confidence",
  );
  assert.ok(
    pairs.findIndex((tag) => tag.tag === "hydro") <
      pairs.findIndex((tag) => tag.tag === "wind"),
    "equal count/confidence ties use stable tag ordering",
  );
  const result = searchEntities(index, "ReNeWaBlE");
  assert.deepEqual(
    result.results.slice(0, 3).map((value) => value.entityId),
    ["c", "a", "b"],
  );
  assert.ok(
    result.results
      .slice(0, 3)
      .every(
        (value) => value.matchType === "exact" && value.matchField === "tag",
      ),
  );
  assert.equal(result.results[3].matchField, "name");
  const associated = result.results.filter(
    (value) => value.matchType === "associated",
  );
  assert.equal(associated[0].cooccurrence, 2);
  assert.equal(associated.at(-1).cooccurrence, 1);
  const combined = associated.find((value) => value.entityId === "i");
  assert.equal(
    associated.find((value) => value.entityId === "e").matchedTag,
    "Electricity",
  );
  assert.equal(combined.cooccurrence, 2);
  assert.deepEqual(
    new Set(combined.matchedTags),
    new Set(["solar", "electricity"]),
  );
  assert.equal(
    new Set(result.results.map((value) => value.entityId)).size,
    result.results.length,
  );
  assert.deepEqual(
    searchEntities(index, "clean energy").results.map(
      (value) => value.entityId,
    ),
    ["h"],
  );
  assert.equal(searchEntities(index, "renew").suggestions[0].tag, "renewable");
  assert.equal(searchEntities(index, "renew").associations.length, 0);
  assert.equal(searchEntities(index, "infra").results[0].entityId, "h");
  assert.equal(searchEntities(index, "nonexistent").results.length, 0);
  assert.equal(
    searchEntities(buildTagIndex("empty", [], "empty"), "solar").results.length,
    0,
  );
  assert.equal(JSON.stringify(original), before);
  assert.deepEqual(
    searchEntities(index, "renewable"),
    searchEntities(
      buildTagIndex("world-a", original.slice().reverse(), "revision-a"),
      "renewable",
    ),
  );
});

/** Runs storage verification in an isolated temporary parent with deterministic fixture cleanup. */
async function withUniverses(run) {
  const temporary = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-tag-search-"),
  );
  try {
    const roots = [
      path.join(temporary, "First"),
      path.join(temporary, "Second"),
    ];
    for (const root of roots) await fs.mkdir(root);
    await run(roots, temporary);
  } finally {
    assert.ok(
      path.resolve(temporary).startsWith(path.resolve(os.tmpdir()) + path.sep),
    );
    await fs.rm(temporary, { recursive: true, force: true });
  }
}

/** Writes only real entity metadata through the existing authoritative store. */
async function save(root, entity) {
  return saveWorldViewChip(root, {
    ...entity,
    icon: "",
    color: "#262b30",
    position: { x: 0, y: 0 },
  });
}

/** Starts a fresh Node process to prove cache restoration and trusted bundled loading across application restarts. */
function searchAfterRestart(root, query) {
  const script =
    "require(process.argv[1]).searchWorldTags(process.argv[2],process.argv[3]).then(value=>process.stdout.write(JSON.stringify(value))).catch(error=>{console.error(error);process.exitCode=1})";
  const child = spawnSync(
    process.execPath,
    [
      "-e",
      script,
      require.resolve("./domains/indexing/tag-association-service.cjs"),
      root,
      query,
    ],
    { encoding: "utf8", windowsHide: true },
  );
  assert.equal(child.status, 0, child.stderr);
  return JSON.parse(child.stdout);
}

/** Covers lifecycle invalidation, corruption/deletion recovery, per-Universe isolation, source exclusion and tamper-resistant module loading. */
test("tag engine package/cache rebuild from persisted metadata and isolate Worlds", async () => {
  await withUniverses(async ([first, second]) => {
    for (const entity of fixtures()) await save(first, entity);
    await save(second, {
      id: "a",
      name: "Other World",
      tags: ["private-world"],
    });
    await fs.writeFile(
      path.join(first, "unassigned.md"),
      "hidden-unassigned-content-tag",
    );
    const entityPath = path.join(first, ".wonnyy/worldview/entities/a.md");
    const original = await fs.readFile(entityPath, "utf8");
    const initial = await service.searchWorldTags(first, "renewable");
    assert.equal(initial.cacheState, "rebuilt");
    const directory = path.join(first, ".engine/tag-association");
    for (const name of [
      "manifest.json",
      "indexer.cjs",
      "normalizer.cjs",
      "association.cjs",
      "search.cjs",
      "cache/index.json",
    ])
      assert.ok((await fs.stat(path.join(directory, name))).isFile());
    assert.equal(
      (await service.searchWorldTags(first, "hidden-unassigned-content-tag"))
        .results.length,
      0,
    );
    assert.equal(await fs.readFile(entityPath, "utf8"), original);
    assert.equal(
      (await listVaultMetadata(first, {})).entries.some(
        (entry) => entry.name === ".engine",
      ),
      false,
    );
    assert.equal(
      (await scanVault(first)).issues.some(
        (issue) => issue.relativePath === ".engine",
      ),
      false,
      "managed native engine storage does not produce an external-engine warning",
    );
    const restored = searchAfterRestart(first, "renewable");
    assert.equal(restored.cacheState, "restored");
    assert.deepEqual(restored.results, initial.results);
    const cachePath = path.join(directory, "cache/index.json");
    await fs.writeFile(cachePath, "corrupt");
    const repaired = searchAfterRestart(first, "renewable");
    assert.equal(repaired.cacheState, "rebuilt");
    assert.ok(repaired.warnings.some((value) => value.includes("rebuilt")));
    await fs.unlink(cachePath);
    assert.equal(searchAfterRestart(first, "renewable").cacheState, "rebuilt");
    await fs.writeFile(
      path.join(directory, "search.cjs"),
      "throw new Error('UNTRUSTED ENGINE EXECUTED');",
    );
    assert.deepEqual(
      searchAfterRestart(first, "renewable").results,
      initial.results,
    );
    assert.ok(
      !(await fs.readFile(path.join(directory, "search.cjs"), "utf8")).includes(
        "UNTRUSTED ENGINE",
      ),
    );
    await save(first, { id: "a", name: "Solar Farm", tags: ["changed-tag"] });
    const edited = await service.searchWorldTags(first, "renewable");
    assert.notEqual(edited.revision, initial.revision);
    assert.equal(
      edited.results.some((value) => value.entityId === "a"),
      false,
    );
    await deleteWorldViewChip(first, "b");
    assert.equal(
      (await service.searchWorldTags(first, "renewable")).results.some(
        (value) => value.entityId === "b",
      ),
      false,
    );
    const other = await service.searchWorldTags(second, "private-world");
    assert.notEqual(other.worldId, initial.worldId);
    assert.equal(other.results.length, 1);
    assert.equal(
      (await service.searchWorldTags(second, "renewable")).results.length,
      0,
    );
    await fs.copyFile(
      cachePath,
      path.join(second, ".engine/tag-association/cache/index.json"),
    );
    assert.equal(
      searchAfterRestart(second, "private-world").results[0].name,
      "Other World",
    );
    assert.equal(
      (await service.rebuildWorldTagCache(first)).cacheState,
      "rebuilt",
    );
    await assert.rejects(service.searchWorldTags(first, {}), /query/);
  });
});

/** Verifies unusable package paths yield explicit warnings while exact/name matching still works entirely in memory. */
test("unwritable engine storage preserves functional search and reports the failure", async () => {
  await withUniverses(async ([root]) => {
    await save(root, {
      id: "single",
      name: "Cold Start",
      tags: ["single tag"],
    });
    await fs.writeFile(path.join(root, ".engine"), "occupied path");
    const result = await service.searchWorldTags(root, "SINGLE TAG");
    assert.equal(result.cacheState, "memory");
    assert.equal(result.results[0].entityId, "single");
    assert.ok(result.warnings.length > 0);
    assert.equal(
      (await service.searchWorldTags(root, "cold")).results[0].matchField,
      "name",
    );
    assert.equal(
      await fs.readFile(path.join(root, ".engine"), "utf8"),
      "occupied path",
    );
  });
});
