const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");
const { scanVault } = require("./vault-service.cjs");
const stations = require("./station-service.cjs");

async function withVault(run) {
  const vaultPath = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-stations-"),
  );
  try {
    await run(vaultPath);
  } finally {
    await fs.rm(vaultPath, { recursive: true, force: true });
  }
}

test("Stations are case-sensitive, persist, assign independently, and stay hidden from the vault", async () => {
  await withVault(async (vaultPath) => {
    await fs.mkdir(path.join(vaultPath, "research"));
    await fs.writeFile(path.join(vaultPath, "research", "note.md"), "# Note");
    let state = await stations.createStation(vaultPath, "crypto");
    state = await stations.createStation(vaultPath, "Crypto");
    assert.deepEqual(
      state.stations.map((item) => item.name),
      ["crypto", "Crypto"],
    );
    await assert.rejects(
      () => stations.createStation(vaultPath, "crypto"),
      /already exists/,
    );
    state = await stations.setAssignments(
      vaultPath,
      ["research/note.md"],
      state.stations[0].id,
      true,
    );
    state = await stations.setAssignments(
      vaultPath,
      ["research"],
      state.stations[1].id,
      true,
    );
    assert.equal(state.assignments[0].relativePath, "research/note.md");
    assert.equal(
      state.assignments.find((item) => item.relativePath === "research")?.kind,
      "folder",
    );
    assert.deepEqual(
      state.assignments.find((item) => item.relativePath === "research/note.md")
        ?.stationIds,
      [state.stations[0].id],
    );
    const snapshot = await scanVault(vaultPath);
    assert.equal(
      snapshot.entries.some((entry) => entry.name === ".wonnyy"),
      false,
    );
    assert.equal(
      JSON.parse(
        await fs.readFile(
          path.join(vaultPath, ".wonnyy", "stations.json"),
          "utf8",
        ),
      ).schemaVersion,
      1,
    );
  });
});

test("Directory context requires expansion and the package retains provenance", async () => {
  await withVault(async (vaultPath) => {
    await fs.mkdir(path.join(vaultPath, "research"));
    await fs.writeFile(
      path.join(vaultPath, "research", "a.md"),
      "alpha context",
    );
    await fs.writeFile(
      path.join(vaultPath, "research", "b.csv"),
      "name\nOrbistry",
    );
    await fs.writeFile(path.join(vaultPath, "research", "skip.bmp"), "binary");
    let state = await stations.createStation(vaultPath, "Research");
    await stations.setAssignments(
      vaultPath,
      ["research/a.md"],
      state.stations[0].id,
      true,
    );
    const preview = await stations.previewContext(vaultPath, ["research"]);
    assert.deepEqual(preview.files, ["research/a.md", "research/b.csv"]);
    state = await stations.addContext(vaultPath, ["research"]);
    assert.equal(state.activeContext.length, 2);
    const packageValue = await stations.buildContextPackage(vaultPath);
    assert.equal(packageValue.sources[0].stations[0], "Research");
    assert.equal(packageValue.sources[0].contentHash.length, 64);
    assert.equal(packageValue.estimatedTokens > 0, true);
    assert.equal(
      (await stations.getStationState(vaultPath)).activeContext.length,
      2,
    );
    const cleared = await stations.clearContext(vaultPath);
    assert.equal(cleared.activeContext.length, 0);
    assert.equal(cleared.contextEstimatedTokens, 0);
  });
});

test("Invalid external metadata preserves the last valid state and disables writes", async () => {
  await withVault(async (vaultPath) => {
    const valid = await stations.createStation(vaultPath, "Stable");
    await new Promise((resolve) => setTimeout(resolve, 20));
    await fs.writeFile(
      path.join(vaultPath, ".wonnyy", "stations.json"),
      "{ invalid json with a different size",
    );
    const fallback = await stations.getStationState(vaultPath);
    assert.equal(fallback.stations[0].id, valid.stations[0].id);
    assert.equal(fallback.writable, false);
    assert.match(fallback.error, /not reloaded/);
    await assert.rejects(
      () => stations.createStation(vaultPath, "Blocked"),
      /not reloaded/,
    );
  });
});

test("Moved files remain orphaned until a fingerprint suggestion is confirmed", async () => {
  await withVault(async (vaultPath) => {
    await fs.writeFile(
      path.join(vaultPath, "old.md"),
      "same authored knowledge",
    );
    let state = await stations.createStation(vaultPath, "Move");
    state = await stations.setAssignments(
      vaultPath,
      ["old.md"],
      state.stations[0].id,
      true,
    );
    await fs.rename(
      path.join(vaultPath, "old.md"),
      path.join(vaultPath, "new.md"),
    );
    assert.equal(
      (await stations.getStationState(vaultPath)).assignments[0].missing,
      true,
    );
    const suggestions = await stations.suggestReattachments(vaultPath);
    assert.deepEqual(suggestions[0].candidates, ["new.md"]);
    state = await stations.reattach(vaultPath, "old.md", "new.md");
    assert.equal(state.assignments[0].relativePath, "new.md");
    assert.equal(state.assignments[0].missing, false);
  });
});

test("Brain scope resolves universe, Stations, and Active Context in precedence order", async () => {
  await withVault(async (vaultPath) => {
    await fs.mkdir(path.join(vaultPath, "alpha"));
    await fs.writeFile(
      path.join(vaultPath, "alpha", "a.md"),
      "alpha knowledge",
    );
    await fs.writeFile(
      path.join(vaultPath, "alpha", "shared.csv"),
      "name,value\nshared,1",
    );
    await fs.writeFile(path.join(vaultPath, "b.md"), "beta knowledge");
    await fs.writeFile(
      path.join(vaultPath, "ignored.bmp"),
      "not model readable",
    );
    let state = await stations.createStation(vaultPath, "Alpha");
    state = await stations.createStation(vaultPath, "Beta");
    const [alpha, beta] = state.stations;
    await stations.setAssignments(vaultPath, ["alpha"], alpha.id, true);
    await stations.setAssignments(
      vaultPath,
      ["alpha/shared.csv"],
      beta.id,
      true,
    );
    await stations.setAssignments(vaultPath, ["b.md"], beta.id, true);

    const universe = await stations.prepareBrainScope(vaultPath, {
      ownerId: "run-universe",
      activeStationIds: [],
      matchMode: "any",
    });
    assert.equal(universe.mode, "universe");
    assert.deepEqual(
      universe.sources.map((source) => source.relativePath),
      ["alpha/a.md", "alpha/shared.csv", "b.md"],
    );
    assert.equal(universe.manifestVersion.length, 64);
    assert.equal(
      Date.parse(universe.expiresAt) > Date.parse(universe.createdAt),
      true,
    );

    const alphaScope = await stations.prepareBrainScope(vaultPath, {
      ownerId: "run-alpha",
      activeStationIds: [alpha.id],
      matchMode: "any",
    });
    assert.equal(alphaScope.mode, "station");
    assert.deepEqual(
      alphaScope.sources.map((source) => source.relativePath),
      ["alpha/a.md", "alpha/shared.csv"],
    );
    const read = await stations.readBrainSource(vaultPath, {
      ownerId: "run-alpha",
      scopeId: alphaScope.id,
      sourceId: "alpha/a.md",
    });
    assert.equal(read.content, "alpha knowledge");
    assert.equal(read.manifestVersion, alphaScope.manifestVersion);
    await assert.rejects(
      () =>
        stations.readBrainSource(vaultPath, {
          ownerId: "run-alpha",
          scopeId: alphaScope.id,
          sourceId: "b.md",
        }),
      (error) => error.code === "BRAIN_SOURCE_NOT_AUTHORIZED",
    );

    const allScope = await stations.prepareBrainScope(vaultPath, {
      ownerId: "run-all",
      activeStationIds: [alpha.id, beta.id],
      matchMode: "all",
    });
    assert.equal(
      allScope.sources.length,
      0,
      "folder membership does not imply Station inheritance for ALL matching",
    );
    assert.equal(
      (
        await stations.readBrainSource(vaultPath, {
          ownerId: "run-alpha",
          scopeId: alphaScope.id,
          sourceId: "alpha/a.md",
        })
      ).content,
      "alpha knowledge",
      "a concurrent scope must not invalidate another run",
    );
    await assert.rejects(
      () =>
        stations.readBrainSource(vaultPath, {
          ownerId: "run-all",
          scopeId: alphaScope.id,
          sourceId: "alpha/a.md",
        }),
      (error) => error.code === "BRAIN_SCOPE_OWNER_MISMATCH",
    );

    await stations.addContext(vaultPath, ["b.md"]);
    await fs.writeFile(path.join(vaultPath, "b.md"), "beta knowledge changed");
    const override = await stations.prepareBrainScope(vaultPath, {
      ownerId: "run-override",
      activeStationIds: [alpha.id],
      matchMode: "any",
    });
    assert.equal(override.mode, "active-context");
    assert.deepEqual(
      override.sources.map((source) => source.relativePath),
      ["b.md"],
    );
    assert.equal(override.sources[0].changed, true);
  });
});

test("Brain scope requests fail closed for malformed or stale narrowing input", async () => {
  await withVault(async (vaultPath) => {
    await fs.writeFile(path.join(vaultPath, "private.md"), "vault universe");
    const state = await stations.createStation(vaultPath, "Valid");

    await assert.rejects(
      () =>
        stations.prepareBrainScope(vaultPath, {
          ownerId: "run-invalid",
          activeStationIds: ["stale-station-id"],
          matchMode: "any",
        }),
      (error) =>
        error.code === "BRAIN_INVALID_STATIONS" &&
        error.details.stationIds[0] === "stale-station-id",
    );
    await assert.rejects(
      () =>
        stations.prepareBrainScope(vaultPath, {
          ownerId: "run-invalid",
          activeStationIds: [state.stations[0].id],
          matchMode: "some",
        }),
      (error) => error.code === "BRAIN_INVALID_REQUEST",
    );
    await assert.rejects(
      () =>
        stations.prepareBrainScope(vaultPath, {
          activeStationIds: [],
          matchMode: "any",
        }),
      (error) => error.code === "BRAIN_INVALID_REQUEST",
    );

    await stations.addContext(vaultPath, ["private.md"]);
    await assert.rejects(
      () =>
        stations.prepareBrainScope(vaultPath, {
          ownerId: "run-invalid",
          activeStationIds: ["stale-station-id"],
          matchMode: "all",
        }),
      (error) => error.code === "BRAIN_INVALID_STATIONS",
      "Active Context precedence must not hide an invalid Station request",
    );
  });
});

test("Brain scope capabilities expire and changed sources fail before content is returned", async () => {
  await withVault(async (vaultPath) => {
    await fs.writeFile(path.join(vaultPath, "note.md"), "original");
    const originalNow = Date.now;
    let now = Date.parse("2026-09-03T00:00:00.000Z");
    Date.now = () => now;
    try {
      const changedScope = await stations.prepareBrainScope(vaultPath, {
        ownerId: "run-changed",
        activeStationIds: [],
        matchMode: "any",
      });
      await fs.writeFile(path.join(vaultPath, "note.md"), "changed");
      await assert.rejects(
        () =>
          stations.readBrainSource(vaultPath, {
            ownerId: "run-changed",
            scopeId: changedScope.id,
            sourceId: "note.md",
          }),
        (error) => error.code === "BRAIN_SOURCE_CHANGED",
      );

      await fs.writeFile(path.join(vaultPath, "note.md"), "stable");
      const expiringScope = await stations.prepareBrainScope(vaultPath, {
        ownerId: "run-expiring",
        activeStationIds: [],
        matchMode: "any",
      });
      now += 5 * 60 * 1000 + 1;
      await assert.rejects(
        () =>
          stations.readBrainSource(vaultPath, {
            ownerId: "run-expiring",
            scopeId: expiringScope.id,
            sourceId: "note.md",
          }),
        (error) => error.code === "BRAIN_SCOPE_EXPIRED",
      );
    } finally {
      Date.now = originalNow;
    }
  });
});
