const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");
const { scanVault } = require("../vault-service.cjs");
const {
  RUN_SCHEMA_VERSION,
  createModelRun,
  listModelRuns,
  readModelRun,
  validateRunRecord,
} = require("./run-store.cjs");

async function withVault(run) {
  const vaultPath = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-runs-"));
  try {
    await run(vaultPath);
  } finally {
    await fs.rm(vaultPath, { recursive: true, force: true });
  }
}

function successfulRecord(overrides = {}) {
  return {
    schemaVersion: RUN_SCHEMA_VERSION,
    runId: "11111111-1111-4111-8111-111111111111",
    status: "succeeded",
    startedAt: "2026-09-03T00:00:00.000Z",
    completedAt: "2026-09-03T00:00:01.250Z",
    durationMs: 1250,
    scope: {
      id: "scope-1",
      mode: "active-context",
      manifestVersion: "manifest-1",
    },
    provider: "ollama",
    model: "qwen3:4b",
    promptVersion: "wonnyy-context-v1",
    userMessage: "What is the target allocation?",
    sourcesAvailable: [
      {
        sourceId: "allocation.md",
        relativePath: "allocation.md",
        contentHash: "a".repeat(64),
      },
    ],
    sourcesActuallyRead: [
      {
        sourceId: "allocation.md",
        relativePath: "allocation.md",
        contentHash: "a".repeat(64),
      },
    ],
    response: "25%",
    finishReason: "stop",
    usage: {
      promptTokens: 30,
      completionTokens: 3,
      totalDurationNs: 1_250_000_000,
    },
    error: null,
    ...overrides,
  };
}

test("model run records are created once, readable, ordered, and hidden from the vault", async () => {
  await withVault(async (vaultPath) => {
    await fs.writeFile(path.join(vaultPath, "note.md"), "Visible knowledge");
    const later = successfulRecord();
    const earlier = successfulRecord({
      runId: "22222222-2222-4222-8222-222222222222",
      startedAt: "2026-09-02T00:00:00.000Z",
      completedAt: "2026-09-02T00:00:01.000Z",
      durationMs: 1000,
    });
    await createModelRun(vaultPath, earlier);
    await createModelRun(vaultPath, later);
    assert.deepEqual(await readModelRun(vaultPath, later.runId), later);
    assert.deepEqual(
      (await listModelRuns(vaultPath)).map((record) => record.runId),
      [later.runId, earlier.runId],
    );
    assert.deepEqual(
      (await scanVault(vaultPath)).entries.map((entry) => entry.name),
      ["note.md"],
    );
    const stored = await fs.readFile(
      path.join(vaultPath, ".wonnyy", "model-runs", `${later.runId}.json`),
      "utf8",
    );
    assert.equal(
      stored.includes("Target allocation is 25%."),
      false,
      "raw source content must not be stored",
    );
    assert.equal(
      stored.includes("wonnyy-approved-source"),
      false,
      "the constructed prompt must not be stored",
    );
  });
});

test("an immutable model run cannot be overwritten, including concurrently", async () => {
  await withVault(async (vaultPath) => {
    const original = successfulRecord();
    const replacement = successfulRecord({ response: "90%" });
    const outcomes = await Promise.allSettled([
      createModelRun(vaultPath, original),
      createModelRun(vaultPath, replacement),
    ]);
    assert.equal(
      outcomes.filter((outcome) => outcome.status === "fulfilled").length,
      1,
    );
    assert.equal(
      outcomes.filter(
        (outcome) =>
          outcome.status === "rejected" &&
          outcome.reason.code === "MODEL_RUN_RECORD_EXISTS",
      ).length,
      1,
    );
    const publishedResponse = (await readModelRun(vaultPath, original.runId))
      .response;
    assert.equal(["25%", "90%"].includes(publishedResponse), true);
    await assert.rejects(
      () => createModelRun(vaultPath, successfulRecord()),
      (error) => error.code === "MODEL_RUN_RECORD_EXISTS",
    );
    assert.equal(
      (await readModelRun(vaultPath, original.runId)).response,
      publishedResponse,
    );
  });
});

test("successful and failed run schemas fail closed", () => {
  assert.throws(
    () =>
      validateRunRecord({ ...successfulRecord(), rawSourceContent: "secret" }),
    (error) => error.code === "MODEL_RUN_RECORD_INVALID",
  );
  assert.throws(
    () => validateRunRecord({ ...successfulRecord(), response: null }),
    (error) => error.code === "MODEL_RUN_RECORD_INVALID",
  );
  const failed = validateRunRecord({
    ...successfulRecord(),
    status: "failed",
    scope: null,
    promptVersion: null,
    sourcesAvailable: [],
    sourcesActuallyRead: [],
    response: null,
    finishReason: null,
    usage: null,
    error: { code: "MODEL_OFFLINE", message: "Offline", details: {} },
  });
  assert.equal(failed.error.code, "MODEL_OFFLINE");
});

test("missing and malformed run records return structured errors", async () => {
  await withVault(async (vaultPath) => {
    await assert.rejects(
      () => readModelRun(vaultPath, "missing-run"),
      (error) => error.code === "MODEL_RUN_RECORD_NOT_FOUND",
    );
    const directory = path.join(vaultPath, ".wonnyy", "model-runs");
    await fs.mkdir(directory, { recursive: true });
    await fs.writeFile(path.join(directory, "bad-run.json"), "{bad json");
    await assert.rejects(
      () => readModelRun(vaultPath, "bad-run"),
      (error) => error.code === "MODEL_RUN_RECORD_INVALID",
    );
  });
});
