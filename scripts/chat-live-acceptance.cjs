const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");
const { randomUUID } = require("node:crypto");
const stations = require("../electron/station-service.cjs");
const { ChatService } = require("../electron/ai/chat-service.cjs");
const { ModelRegistry } = require("../electron/ai/model-registry.cjs");
const {
  OllamaProvider,
} = require("../electron/ai/providers/ollama-provider.cjs");

const {
  GeminiProvider,
} = require("../electron/ai/providers/gemini-provider.cjs");
const { ProviderRegistry } = require("../electron/ai/provider-registry.cjs");
const online = process.argv.includes("--gemini");
const selectedModel = online ? process.env.ORBISTRY_GEMINI_MODEL : "qwen3:4b";

const scope = { activeStationIds: [], matchMode: "any" };
const questions = [
  "Summarize this in two short numbered points.",
  "Explain point two from your previous answer in one sentence.",
  "What's the core thesis? Answer in one sentence.",
  "Which evidence supports that? One sentence.",
  "What is the main risk here? One sentence.",
  "Why is that a risk? One sentence.",
  "Which claim needs more evidence? One sentence.",
  "Is there a contradiction in the document? One sentence.",
  "Make the thesis simpler. One sentence.",
  "Turn our discussion into a three-point outline. Keep it short.",
];

async function main() {
  if (online && (!process.env.GEMINI_API_KEY || !selectedModel))
    throw new Error(
      "Set GEMINI_API_KEY and ORBISTRY_GEMINI_MODEL to run the online benchmark against isolated synthetic sources.",
    );
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-chat-live-"));
  const report = {
    startedAt: new Date().toISOString(),
    passed: false,
    turns: [],
    checks: [],
    unavailableModels: [],
    systemMemoryBytes: os.totalmem(),
  };
  const localProvider = new OllamaProvider();
  // Benchmark-only memory credentials; desktop keys use safeStorage.
  const provider = online
    ? new GeminiProvider({
        credentials: {
          get: async () => process.env.GEMINI_API_KEY,
          status: async () => ({ configured: true }),
        },
      })
    : localProvider;
  const registry = new ModelRegistry(
    new ProviderRegistry({
      ollama: localProvider,
      ...(online ? { gemini: provider } : {}),
    }),
    path.join(root, "settings"),
  );
  let service = new ChatService({ provider, registry });
  async function turn(conversation, question, forbidden) {
    const requestId = randomUUID();
    const states = new Set();
    let streamed = false;
    const result = await service.run(
      root,
      1,
      {
        ...scope,
        conversationId: conversation.id,
        expectedContextId: conversation.contextIdentity.id,
        requestId,
        userMessage: question,
      },
      (event) => {
        states.add(event.state);
        if (event.content) streamed = true;
      },
    );
    assert.equal(result.run.status, "succeeded");
    assert.ok(result.run.response.length > 0);
    if (forbidden) assert.doesNotMatch(result.run.response, forbidden);
    assert.notEqual(
      result.run.response.toLowerCase(),
      question.toLowerCase(),
      "Model echoed the task rather than answering",
    );
    const isAlpha =
      conversation.contextIdentity.sources[0].relativePath === "alpha.md";
    if (
      /core thesis|thesis simpler|target allocation|allocation and main risk/.test(
        question,
      )
    )
      assert.match(
        result.run.response,
        isAlpha ? /25\s*%/ : /40\s*%/,
        "The answer changed the approved percentage",
      );
    if (/three-point outline/.test(question)) {
      assert.match(
        result.run.response,
        /(?:^|\n)\s*(?:3[.)]|[-*].*\n.*[-*])/m,
        "The answer did not produce an outline",
      );
      assert.match(
        result.run.response,
        isAlpha ? /solar|permit/i : /water|filter/i,
      );
    }
    assert.equal(
      result.run.contextIdentity.id,
      conversation.contextIdentity.id,
    );
    assert.ok(streamed, "No decoded answer progress reached the runtime");
    report.turns.push({
      model: result.run.model,
      source: result.run.sourcesActuallyRead[0].relativePath,
      question,
      answer: result.run.response,
      durationMs: result.run.durationMs,
      states: [...states],
      diagnostics: result.run.diagnostics,
      freeSystemMemoryBytes: os.freemem(),
      residentModels: online
        ? []
        : (
            await provider.request("/api/ps").catch(() => ({ models: [] }))
          ).models.map((model) => ({
            name: model.name,
            runtimeSizeBytes: model.size,
            vramBytes: model.size_vram,
            contextLength: model.context_length,
          })),
    });
    process.stdout.write(
      `PASS ${report.turns.length}: ${result.run.model} / ${result.run.sourcesActuallyRead[0].relativePath} (${Math.round(result.run.durationMs / 1000)}s)\n`,
    );
    return result.conversation;
  }
  try {
    const installed = await provider.listModels();
    assert.ok(
      installed.some((model) => model.name === selectedModel),
      "The selected benchmark model is unavailable",
    );
    await registry.save({
      providerId: online ? "gemini" : "ollama",
      modelId: selectedModel,
    });
    await fs.writeFile(
      path.join(root, "alpha.md"),
      "# ALPHA research\nThesis: ALPHA should allocate 25% to a solar pilot.\nEvidence: its 2025 pilot reduced energy spending by 18%.\nRisk: permit delays may postpone the pilot.\nUnproven claim: doubling the pilot will double savings.\nThe report does not include a permit timeline.\n",
    );
    await fs.writeFile(
      path.join(root, "beta.md"),
      "# BETA research\nThesis: BETA should reserve 40% for a water recycling project.\nEvidence: its 2025 trial reduced water usage by 12%.\nRisk: filter shortages may delay deployment.\nUnproven claim: every site will achieve the same savings.\nThe report does not include supplier contracts.\n",
    );
    if (!online)
      await provider.request(
        "/api/generate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ model: "qwen3:4b", keep_alive: 0 }),
        },
        300000,
      );
    await stations.addContext(root, ["alpha.md"]);
    let alpha = await createBound(service, root, scope);
    for (const question of questions)
      alpha = await turn(alpha, question, /BETA|40%|water recycling/i);
    report.checks.push(
      online
        ? "Ten source-A online turns with follow-up references"
        : "Ten source-A turns with follow-up references and cold loading",
    );
    for (const modelId of online ? [] : ["qwen3:1.7b", "llama3.2:3b"]) {
      if (!installed.some((model) => model.name === modelId)) {
        report.unavailableModels.push(modelId);
        continue;
      }
      await registry.save({ modelId });
      alpha = await turn(
        alpha,
        "What allocation did we discuss? One sentence.",
        /BETA/i,
      );
      assert.equal(
        alpha.contextIdentity.id,
        (await service.context(root, scope)).id,
      );
      report.checks.push(`Model switch to ${modelId}`);
    }
    await registry.save({
      providerId: online ? "gemini" : "ollama",
      modelId: selectedModel,
    });
    if (online) {
      for (let i = 0; i < 4; i++)
        alpha = await turn(
          alpha,
          "What is the target allocation? Reply only with the percentage.",
          /BETA|40%/,
        );
      assert.ok(report.turns.at(-1).diagnostics.droppedExchanges > 0);
      report.checks.push(
        "Conversation beyond 12 exchanges records dropped history",
      );
      if (process.argv.includes("--switch-local")) {
        const localModels = await localProvider.listModels();
        assert.ok(
          localModels.some((model) => model.name === "qwen3:4b"),
          "Install qwen3:4b for --switch-local acceptance",
        );
        await registry.save({ providerId: "ollama", modelId: "qwen3:4b" });
        alpha = await turn(
          alpha,
          "What is the target allocation? Reply only with the percentage.",
          /BETA|40%/,
        );
        await registry.save({ providerId: "gemini", modelId: selectedModel });
        alpha = await turn(
          alpha,
          "What allocation did we discuss? One sentence.",
          /BETA|40%/,
        );
        report.checks.push(
          "Real online-to-local-to-online switching preserves conversation and source",
        );
      }
    }
    await stations.clearContext(root);
    await stations.addContext(root, ["beta.md"]);
    let beta = await createBound(service, root, scope);
    for (const question of questions)
      beta = await turn(beta, question, /ALPHA|25%|solar/i);
    report.checks.push("Ten source-B turns without source-A contamination");
    service = new ChatService({ provider, registry });
    assert.equal((await service.list(root)).length, 2);
    await service.resume(root, alpha.id);
    alpha = await turn(
      alpha,
      "What was the allocation and main risk in our discussion? One sentence.",
      /BETA|40%|water/i,
    );
    report.checks.push("Restart and explicitly resume original source/history");
    const requestId = randomUUID();
    let cancellation;
    const running = service.run(
      root,
      1,
      {
        ...scope,
        conversationId: alpha.id,
        expectedContextId: alpha.contextIdentity.id,
        requestId,
        userMessage:
          "Write a very long 100-item numbered explanation of the approved source.",
      },
      (event) => {
        if (event.content && !cancellation)
          cancellation = service.cancel(1, requestId);
      },
    );
    await assert.rejects(running, { code: "MODEL_CANCELLED" });
    await cancellation;
    await turn(
      alpha,
      "What is the target allocation? Reply only with the percentage.",
      /40%/,
    );
    report.checks.push("Cancellation during streaming and immediate recovery");
    report.passed = true;
  } finally {
    await service.cancelAll();
    report.completedAt = new Date().toISOString();
    await fs.mkdir("test-results", { recursive: true });
    await fs.writeFile(
      online
        ? "test-results/chat-online-acceptance.json"
        : "test-results/chat-live-acceptance.json",
      JSON.stringify(report, null, 2),
    );
    assert.ok(
      path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep),
    );
    await fs.rm(root, { recursive: true, force: true });
  }
  process.stdout.write(
    `${JSON.stringify({ passed: report.passed, turns: report.turns.length, unavailableModels: report.unavailableModels })}\n`,
  );
}

main().catch((error) => {
  process.stderr.write(`${error.code || error.name}: ${error.message}\n`);
  process.exitCode = 1;
});

async function createBound(service, root, _scope) {
  const box = await service.saveBox(root, {
    name: "Test " + require("node:crypto").randomUUID(),
  });
  return service.create(root, {
    contextBoxId: box.id,
    creationId: require("node:crypto").randomUUID(),
  });
}
