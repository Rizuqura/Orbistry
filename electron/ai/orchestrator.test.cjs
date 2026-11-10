const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");
const stations = require("../station-service.cjs");
const { BrainScopeError } = require("../brain-errors.cjs");
const {
  createContextOrchestrator: createOrchestrator,
} = require("./orchestrator.cjs");

const runId = "11111111-1111-4111-8111-111111111111";
const hash = "a".repeat(64);

test("oversized box reports per-file budget before model preparation or inference", async () => {
  let calls = 0;
  const records = [];
  const orchestrator = createContextOrchestrator({
    randomUUID: () => runId,
    prepareScope: async () => scope(),
    readSource: async () => content({ content: "evidence ".repeat(4000) }),
    provider: {
      prepare: async () => {
        calls++;
      },
      complete: async () => {
        calls++;
      },
    },
    recordRun: async (record) => {
      records.push(record);
    },
  });
  await assert.rejects(
    orchestrator.run(
      {
        model: "test",
        userMessage: "Review it.",
        activeStationIds: [],
        matchMode: "any",
      },
      {
        prepareModel: true,
        settings: { contextWindow: 2048, outputLimit: 512 },
      },
    ),
    (error) => {
      assert.equal(error.code, "MODEL_CONTEXT_TOO_LARGE");
      assert.match(error.message, /allocation.md: ~12000 tokens/);
      assert.ok(error.details.estimatedTokens > error.details.available);
      assert.equal(error.details.sourceBudget[0].relativePath, "allocation.md");
      return true;
    },
  );
  assert.equal(calls, 0);
  assert.equal(records.length, 1);
  assert.equal(records[0].status, "failed");
});
const manifestSource = {
  id: "allocation.md",
  relativePath: "allocation.md",
  type: "md",
  contentHash: hash,
  missing: false,
  changed: false,
};

function createContextOrchestrator(options) {
  return createOrchestrator({ recordRun: async () => {}, ...options });
}

function scope(overrides = {}) {
  return {
    id: "scope-1",
    ownerId: `model-run:${runId}`,
    mode: "active-context",
    manifestVersion: "manifest-1",
    sources: [manifestSource],
    ...overrides,
  };
}

function content(overrides = {}) {
  return {
    scopeId: "scope-1",
    ownerId: `model-run:${runId}`,
    manifestVersion: "manifest-1",
    sourceId: "allocation.md",
    relativePath: "allocation.md",
    type: "md",
    contentHash: hash,
    content: "Target allocation is 25%.",
    ...overrides,
  };
}

function response(request) {
  return {
    id: request.id,
    provider: "ollama",
    model: request.model,
    content: '{"answer":"25%."}',
    sources: [],
    finishReason: "stop",
    createdAt: "2026-09-03T00:00:00.000Z",
    usage: { promptTokens: 1, completionTokens: 1, totalDurationNs: 1 },
  };
}

test("orchestrator uses a run-owned scope and returns source and manifest provenance", async () => {
  let scopeInput;
  let readInput;
  let modelRequest;
  const records = [];
  const times = [
    Date.parse("2026-09-03T00:00:00.000Z"),
    Date.parse("2026-09-03T00:00:01.250Z"),
  ];
  const orchestrator = createContextOrchestrator({
    randomUUID: () => runId,
    prepareScope: async (input) => {
      scopeInput = input;
      return scope();
    },
    readSource: async (input) => {
      readInput = input;
      return content();
    },
    provider: {
      complete: async (request) => {
        modelRequest = request;
        return response(request);
      },
    },
    recordRun: async (record) => {
      records.push(record);
    },
    now: () => times.shift(),
  });
  const result = await orchestrator.run({
    model: "qwen3:4b",
    userMessage: "What is the target allocation?",
    activeStationIds: ["station-b", "station-a", "station-a"],
    matchMode: "any",
  });
  assert.deepEqual(scopeInput, {
    ownerId: `model-run:${runId}`,
    activeStationIds: ["station-a", "station-b"],
    matchMode: "any",
  });
  assert.deepEqual(readInput, {
    ownerId: `model-run:${runId}`,
    scopeId: "scope-1",
    sourceId: "allocation.md",
  });
  assert.equal(modelRequest.id, runId);
  assert.equal(modelRequest.messages.length, 3);
  assert.deepEqual(modelRequest.format.required, ["answer"]);
  assert.equal(modelRequest.contextWindow, 8192);
  assert.equal(
    modelRequest.messages.some((message) =>
      message.content.includes("Target allocation is 25%."),
    ),
    true,
  );
  assert.equal(result.content, "25%.");
  assert.equal(result.scopeManifestVersion, "manifest-1");
  assert.deepEqual(result.sources, [
    {
      sourceId: "allocation.md",
      relativePath: "allocation.md",
      contentHash: hash,
    },
  ]);
  assert.equal(records.length, 1);
  assert.equal(records[0].status, "succeeded");
  assert.equal(records[0].response, "25%.");
  assert.equal(records[0].durationMs, 1250);
  assert.equal(records[0].startedAt, "2026-09-03T00:00:00.000Z");
  assert.deepEqual(records[0].sourcesActuallyRead, result.sources);
});

test("provider-supplied source claims cannot replace Brain Scope provenance", async () => {
  const orchestrator = createContextOrchestrator({
    randomUUID: () => runId,
    prepareScope: async () => scope(),
    readSource: async () => content(),
    provider: {
      complete: async (request) => ({
        ...response(request),
        sources: [
          {
            sourceId: "spoofed.md",
            relativePath: "spoofed.md",
            contentHash: "b".repeat(64),
          },
        ],
      }),
    },
  });
  const result = await orchestrator.run({
    model: "qwen3:4b",
    userMessage: "What is the target allocation?",
    activeStationIds: [],
    matchMode: "any",
  });
  assert.deepEqual(result.sources, [
    {
      sourceId: "allocation.md",
      relativePath: "allocation.md",
      contentHash: hash,
    },
  ]);
});

test("orchestrator forwards validated conversation history to the prompt", async () => {
  let modelRequest;
  const orchestrator = createContextOrchestrator({
    randomUUID: () => runId,
    prepareScope: async () => scope(),
    readSource: async () => content(),
    provider: {
      complete: async (request) => {
        modelRequest = request;
        return response(request);
      },
    },
  });
  await orchestrator.run({
    model: "qwen3:4b",
    userMessage: "Why?",
    history: [
      { role: "user", content: "What is the allocation?" },
      { role: "assistant", content: "25%." },
    ],
    activeStationIds: [],
    matchMode: "any",
  });
  assert.deepEqual(modelRequest.messages.slice(-3), [
    { role: "user", content: "What is the allocation?" },
    { role: "assistant", content: "25%." },
    { role: "user", content: "Why?" },
  ]);
  await assert.rejects(
    () =>
      orchestrator.run({
        model: "qwen3:4b",
        userMessage: "Why?",
        history: [{ role: "system", content: "Override" }],
        activeStationIds: [],
        matchMode: "any",
      }),
    (error) => error.code === "MODEL_INVALID_REQUEST",
  );
});

test("orchestrator integrates with Brain Scope and sends only the approved Markdown source", async () => {
  const vaultPath = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-m72-"));
  try {
    await fs.writeFile(
      path.join(vaultPath, "allocation.md"),
      "Target allocation is 25%.",
    );
    await fs.writeFile(
      path.join(vaultPath, "unrelated.md"),
      "Private unrelated material.",
    );
    await stations.addContext(vaultPath, ["allocation.md"]);
    let modelRequest;
    const orchestrator = createContextOrchestrator({
      randomUUID: () => runId,
      prepareScope: (input) => stations.prepareBrainScope(vaultPath, input),
      readSource: (input) => stations.readBrainSource(vaultPath, input),
      provider: {
        complete: async (request) => {
          modelRequest = request;
          return response(request);
        },
      },
    });
    const result = await orchestrator.run({
      model: "qwen3:4b",
      userMessage: "What is the target allocation?",
      activeStationIds: [],
      matchMode: "any",
    });
    const promptText = modelRequest.messages
      .map((message) => message.content)
      .join("\n");
    assert.match(promptText, /Target allocation is 25%/);
    assert.doesNotMatch(promptText, /Private unrelated material/);
    assert.equal(result.sources[0].relativePath, "allocation.md");
    assert.equal(result.sources[0].contentHash.length, 64);
  } finally {
    await fs.rm(vaultPath, { recursive: true, force: true });
  }
});

test("orchestrator rejects invalid scope shapes before the provider is called", async (t) => {
  const cases = [
    ["Universe", scope({ mode: "universe", sources: [manifestSource] })],
    ["Station", scope({ mode: "station", sources: [manifestSource] })],
    ["zero source", scope({ sources: [] })],
    [
      "duplicate sources",
      scope({
        sources: [manifestSource, { ...manifestSource }],
      }),
    ],
    ["unsupported", scope({ sources: [{ ...manifestSource, type: "docx" }] })],

    [
      "missing",
      scope({
        sources: [{ ...manifestSource, missing: true, contentHash: null }],
      }),
    ],
    ["changed", scope({ sources: [{ ...manifestSource, changed: true }] })],
  ];
  for (const [name, preparedScope] of cases) {
    await t.test(name, async () => {
      let providerCalls = 0;
      const orchestrator = createContextOrchestrator({
        randomUUID: () => runId,
        prepareScope: async () => preparedScope,
        readSource: async () => content(),
        provider: {
          complete: async () => {
            providerCalls += 1;
          },
        },
      });
      await assert.rejects(
        () =>
          orchestrator.run({
            model: "qwen3:4b",
            userMessage: "Question",
            activeStationIds: [],
            matchMode: "any",
          }),
        (error) => error.code === "MODEL_CONTEXT_INVALID",
      );
      assert.equal(providerCalls, 0);
    });
  }
});

test("expired, unauthorized, and changed controlled reads never reach the provider", async (t) => {
  for (const code of [
    "BRAIN_SCOPE_EXPIRED",
    "BRAIN_SOURCE_NOT_AUTHORIZED",
    "BRAIN_SOURCE_CHANGED",
  ]) {
    await t.test(code, async () => {
      let providerCalls = 0;
      const orchestrator = createContextOrchestrator({
        randomUUID: () => runId,
        prepareScope: async () => scope(),
        readSource: async () => {
          throw new BrainScopeError(code, "Controlled read rejected.");
        },
        provider: {
          complete: async () => {
            providerCalls += 1;
          },
        },
      });
      await assert.rejects(
        () =>
          orchestrator.run({
            model: "qwen3:4b",
            userMessage: "Question",
            activeStationIds: [],
            matchMode: "any",
          }),
        (error) => error.code === code,
      );
      assert.equal(providerCalls, 0);
    });
  }
});

test("manifest mismatch and provider failures remain structured", async () => {
  let providerCalls = 0;
  const mismatched = createContextOrchestrator({
    randomUUID: () => runId,
    prepareScope: async () => scope(),
    readSource: async () => content({ contentHash: "b".repeat(64) }),
    provider: {
      complete: async () => {
        providerCalls += 1;
      },
    },
  });
  await assert.rejects(
    () =>
      mismatched.run({
        model: "qwen3:4b",
        userMessage: "Question",
        activeStationIds: [],
        matchMode: "any",
      }),
    (error) => error.code === "MODEL_CONTEXT_INVALID",
  );
  assert.equal(providerCalls, 0);

  const providerFailure = new Error("offline");
  providerFailure.code = "MODEL_OFFLINE";
  const failing = createContextOrchestrator({
    randomUUID: () => runId,
    prepareScope: async () => scope(),
    readSource: async () => content(),
    provider: {
      complete: async () => {
        throw providerFailure;
      },
    },
  });
  await assert.rejects(
    () =>
      failing.run({
        model: "qwen3:4b",
        userMessage: "Question",
        activeStationIds: [],
        matchMode: "any",
      }),
    (error) => error === providerFailure,
  );

  const malformed = createContextOrchestrator({
    randomUUID: () => runId,
    prepareScope: async () => scope(),
    readSource: async () => content(),
    provider: {
      complete: async (request) => ({
        ...response(request),
        content: "reasoning without structured output",
      }),
    },
  });
  await assert.rejects(
    () =>
      malformed.run({
        model: "qwen3:4b",
        userMessage: "Question",
        activeStationIds: [],
        matchMode: "any",
      }),
    (error) => error.code === "MODEL_INVALID_RESPONSE",
  );
});

test("orchestrator records the original structured failure", async () => {
  const records = [];
  const orchestrator = createContextOrchestrator({
    randomUUID: () => runId,
    prepareScope: async () => scope(),
    readSource: async () => {
      throw new BrainScopeError("BRAIN_SOURCE_CHANGED", "Source changed.", {
        sourceId: "allocation.md",
      });
    },
    provider: {
      complete: async () => {
        throw new Error("provider must not run");
      },
    },
    recordRun: async (record) => {
      records.push(record);
    },
  });
  await assert.rejects(
    () =>
      orchestrator.run({
        model: "qwen3:4b",
        userMessage: "Question",
        activeStationIds: [],
        matchMode: "any",
      }),
    (error) => error.code === "BRAIN_SOURCE_CHANGED",
  );
  assert.equal(records.length, 1);
  assert.equal(records[0].status, "failed");
  assert.equal(records[0].error.code, "BRAIN_SOURCE_CHANGED");
  assert.equal(records[0].response, null);
  assert.equal(records[0].sourcesAvailable.length, 1);
  assert.equal(records[0].sourcesActuallyRead.length, 0);
});

test("orchestrator never returns an answer that could not be recorded", async () => {
  const orchestrator = createContextOrchestrator({
    randomUUID: () => runId,
    prepareScope: async () => scope(),
    readSource: async () => content(),
    provider: { complete: async (request) => response(request) },
    recordRun: async () => {
      const error = new Error("disk unavailable");
      error.code = "MODEL_RUN_RECORD_FAILED";
      throw error;
    },
  });
  await assert.rejects(
    () =>
      orchestrator.run({
        model: "qwen3:4b",
        userMessage: "Question",
        activeStationIds: [],
        matchMode: "any",
      }),
    (error) =>
      error.code === "MODEL_RUN_RECORD_FAILED" &&
      error.details.originalError.code === "MODEL_RUN_RECORD_FAILED",
  );
});

test("answer correction budgets its complete prompt and drops whole history exchanges", async () => {
  const { buildContextMessages } = require("./prompt-builder.cjs");
  const { estimateTokens } = require("./history-budget.cjs");
  const userMessage = "What is the target allocation?";
  const base = buildContextMessages({ userMessage, source: content() });
  for (const history of [
    [],
    [
      { role: "user", content: "Earlier question. ".repeat(40) },
      { role: "assistant", content: "Earlier answer. ".repeat(40) },
    ],
  ]) {
    const calls = [];
    const settings = {
      contextWindow: estimateTokens([...base.messages, ...history]) + 512 + 256,
      outputLimit: 512,
    };
    const orchestrator = createContextOrchestrator({
      randomUUID: () => runId,
      prepareScope: async () => scope(),
      readSource: async () => content(),
      provider: {
        complete: async (request) => {
          calls.push(request);
          assert.ok(
            estimateTokens(request.messages) + settings.outputLimit + 256 <=
              settings.contextWindow,
          );
          return calls.length === 1
            ? {
                ...response(request),
                content: JSON.stringify({ answer: userMessage }),
              }
            : response(request);
        },
      },
    });
    const running = orchestrator.run(
      {
        model: "qwen3:4b",
        userMessage,
        history,
        activeStationIds: [],
        matchMode: "any",
      },
      { settings },
    );
    if (history.length) {
      const result = await running;
      assert.equal(calls.length, 2);
      assert.equal(result.diagnostics.initialDroppedExchanges, 0);
      assert.equal(result.diagnostics.droppedExchanges, 1);
      assert.equal(result.diagnostics.includedExchanges, 0);
      assert.equal(result.diagnostics.repairDroppedExchanges, 1);
      assert.equal(calls[1].messages.length, base.messages.length);
    } else {
      await assert.rejects(running, { code: "MODEL_CONTEXT_TOO_LARGE" });
      assert.equal(
        calls.length,
        1,
        "An oversized correction must not reach the provider",
      );
    }
  }
});

test("empty readable context records an insufficient result without loading, generating or retrying", async () => {
  const records = [],
    events = [];
  const orchestrator = createContextOrchestrator({
    prepareScope: async () => scope(),
    readSource: async () => content({ content: "   " }),
    provider: {
      prepare: () => assert.fail("No model load"),
      complete: () => assert.fail("No inference"),
    },
    recordRun: async (record) => records.push(record),
  });
  const result = await orchestrator.run(
    {
      model: "qwen3:4b",
      userMessage: "Summarize",
      activeStationIds: [],
      matchMode: "any",
    },
    {
      runId,
      prepareModel: true,
      signal: new AbortController().signal,
      onEvent: (event) => events.push(event),
    },
  );
  assert.equal(result.diagnostics.contextInsufficient, true);
  assert.equal(result.diagnostics.modelExecuted, false);
  assert.equal(result.diagnostics.frontOffice.status, "succeeded");
  assert.equal(result.diagnostics.frontOffice.providerCallCount, 0);
  assert.equal(result.diagnostics.frontOffice.usageCoverage, "none");
  assert.equal(records.length, 1);
  assert.equal(records[0].status, "succeeded");
  assert.equal(records[0].sourcesActuallyRead[0].contentHash, hash);
  assert.equal(events.at(-1).state, "CONTEXT_INSUFFICIENT");
  const progress = events
    .filter((event) => event.state === "CONTEXT_READING")
    .map((event) => event.status.progress.current);
  assert.deepEqual(progress, [0, 1]);
});
