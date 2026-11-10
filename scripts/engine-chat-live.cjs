// Opt-in, real local LLM + real CHronoZ. Never uses the owner's live profile.
const fs = require("node:fs/promises"),
  path = require("node:path"),
  os = require("node:os");
const assert = require("node:assert/strict");
const { randomUUID } = require("node:crypto");
const { AgentStore } = require("../electron/ai/agent-store.cjs");
const { ModelRegistry } = require("../electron/ai/model-registry.cjs");
const { ChatService } = require("../electron/ai/chat-service.cjs");
const { EngineRegistry } = require("../electron/ai/engine-registry.cjs");
const {
  OllamaProvider,
} = require("../electron/ai/providers/ollama-provider.cjs");
async function main() {
  const supplied = process.env.CHRONOZ_BUNDLE || process.argv[2];
  if (!supplied)
    throw new Error(
      "Pass a real extracted CHronoZ bundle. This opt-in test requires a running Ollama with a tool-capable model.",
    );
  const bundle = await fs.realpath(path.resolve(supplied));
  const model = process.env.ORBISTRY_ENGINE_MODEL || "qwen3:4b";
  const root = await fs.realpath(
    await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-engine-chat-live-")),
  );
  let service, engines;
  try {
    const profile = path.join(root, "profile"),
      vault = path.join(root, "empty-vault");
    await fs.mkdir(vault);
    const provider = new OllamaProvider();
    const originalRequest = provider.request.bind(provider);
    provider.request = async (...args) => {
      const result = await originalRequest(...args);
      if (args[0] === "/api/chat") {
        const diagnostics = {
          done: result.done,
          finishReason: result.done_reason,
          role: result.message?.role,
          contentCharacters: result.message?.content?.length ?? 0,
          thinkingCharacters: result.message?.thinking?.length ?? 0,
          nativeCalls: result.message?.tool_calls?.map((call) => ({
            name: call.function?.name,
            arguments: call.function?.arguments,
          })),
          promptTokens: result.prompt_eval_count,
          completionTokens: result.eval_count,
        };
        await fs.mkdir("test-results", { recursive: true });
        await fs.writeFile(
          "test-results/engine-chat-live-probe.json",
          JSON.stringify(diagnostics, null, 2),
        );
        console.log(
          "Live model response metadata: " + JSON.stringify(diagnostics),
        );
      }
      return result;
    };
    const registry = new ModelRegistry(provider, profile);
    await registry.save({
      modelId: model,
      contextWindow: 8192,
      outputLimit: 2048,
      temperature: 0.7,
      absoluteTimeoutMs: 600000,
    });
    const agents = new AgentStore(profile);
    const agent = await agents.create({
      name: "Live report assistant",
      creationId: randomUUID(),
    });
    const graph = agent.construction.draft;
    const node = {
      id: "engine-" + randomUUID(),
      kind: "Engine",
      x: 64,
      y: 368,
      config: { engineId: "chronoz", instanceId: randomUUID() },
    };
    graph.nodes.push(node);
    graph.edges.push({ from: node.id, to: "llm" });
    await agents.saveConstruction({
      id: agent.id,
      action: "apply",
      expectedRevision: 0,
      config: graph,
    });
    engines = new EngineRegistry(profile, {
      agents,
      chooseFolder: async () => bundle,
      openPath: async () => "",
    });
    await engines.configure("live-registration");
    console.log(
      "Real bundle registered. Calling live local model " +
        model +
        " with no research context.",
    );
    service = new ChatService({ provider, registry, agents });
    service.engines = engines;
    const chat = await service.create(vault, {
      agentId: agent.id,
      creationId: randomUUID(),
      engineOnly: true,
    });
    const result = await service.run(vault, 1, {
      conversationId: chat.id,
      requestId: randomUUID(),
      expectedContextId: chat.contextIdentity.id,
      userMessage: "Get my October 2026 CHronoZ macro report.",
    });
    const message = result.conversation.messages.at(-1),
      report = message.engineReports?.[0];
    assert.ok(
      report,
      "The real model must request the native function and produce a verified PDF attachment.",
    );
    assert.equal(report.month, "2026-10");
    assert.equal(report.researchStatus, "PARTIAL");
    assert.deepEqual(message.sources, []);
    const engineRun = JSON.parse(
      await fs.readFile(
        path.join(profile, "engine-runs", report.runId + ".json"),
        "utf8",
      ),
    );
    assert.equal(engineRun.chatRunId, result.run.runId);
    await engines.open({
      agentId: agent.id,
      instanceId: node.config.instanceId,
      runId: report.runId,
    });
    const evidence = {
      passed: true,
      transport: "LIVE local Ollama + LIVE bundled CHronoZ Python",
      model,
      contextFiles: 0,
      question: result.run.userMessage,
      nativeFunction: result.run.diagnostics.nativeTool,
      arguments: result.run.diagnostics.toolArguments,
      researchStatus: report.researchStatus,
      month: report.month,
      sha256: report.sha256,
      bytes: (
        await fs.stat(
          path.join(profile, "engine-reports", report.runId + ".pdf"),
        )
      ).size,
      llmUsage: result.run.usage,
      durationMs: result.run.durationMs,
      engineDurationMs: engineRun.durationMs,
      attachmentPersisted:
        (await service.resume(vault, chat.id)).messages.at(-1).engineReports
          .length === 1,
      opener: "Verified boundary tested; visible PDF app not launched",
    };
    await fs.mkdir("test-results", { recursive: true });
    await fs.writeFile(
      "test-results/engine-chat-live.json",
      JSON.stringify(evidence, null, 2),
    );
    console.log(JSON.stringify(evidence, null, 2));
  } finally {
    await service?.cancelAll();
    engines?.shutdown();
    assert.ok(root.startsWith((await fs.realpath(os.tmpdir())) + path.sep));
    await fs.rm(root, { recursive: true, force: true });
  }
}
main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
