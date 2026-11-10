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

async function main() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-dataset-live-"));
  const provider = new OllamaProvider();
  const registry = new ModelRegistry(provider, path.join(root, "settings"));
  const model = process.env.ORBISTRY_DATASET_MODEL || "qwen3:4b";
  await registry.save({ modelId: model, temperature: 0 });
  const service = new ChatService({ provider, registry });
  const complete = provider.complete.bind(provider);
  const calls = [];
  provider.complete = async (request) => {
    const call = {
      kind: request.format?.properties?.queries ? "plan" : "answer",
      startedAt: new Date().toISOString(),
      content: "",
    };
    calls.push(call);
    process.stdout.write(
      `  ${request.format?.properties?.queries ? "Planning dataset operations" : "Writing answer"}\n`,
    );
    const result = await complete({
      ...request,
      onContent: (content) => {
        call.content = content;
        request.onContent?.(content);
      },
    });
    call.completedAt = new Date().toISOString();
    call.content = result.content;
    if (request.format?.properties?.queries)
      process.stdout.write(`  Request: ${result.content}\n`);
    return result;
  };
  const scope = { activeStationIds: [], matchMode: "any" };
  const rows = ["date,category,revenue"];
  // 16,000 rows, with known totals that cannot be recovered from the preview.
  for (let i = 0; i < 4000; i++) {
    const month = String(1 + (i % 4) * 3).padStart(2, "0");
    rows.push(
      `2024-${month}-01,A,10`,
      `2025-${month}-01,A,15`,
      `2024-${month}-01,B,20`,
      `2025-${month}-01,B,22`,
    );
  }
  const csv = rows.join("\n");
  await fs.writeFile(path.join(root, "sales.csv"), csv);
  await stations.addContext(root, ["sales.csv"]);
  const chat = await createBound(service, root, scope);
  const report = {
    model,
    csvBytes: Buffer.byteLength(csv),
    rowCount: 16000,
    passed: false,
    turns: [],
    calls,
  };
  try {
    for (const question of [
      "What is total revenue across the entire dataset? Use a full-file sum and state the number of rows.",
      "Which category grew fastest from 2024 to 2025? Calculate percentage growth in total revenue for each category.",
      "For that fastest-growing category, what was its total revenue in 2025?",
    ]) {
      process.stdout.write(`Running: ${question}\n`);
      const result = await service.run(root, 1, {
        ...scope,
        conversationId: chat.id,
        expectedContextId: chat.contextIdentity.id,
        requestId: randomUUID(),
        userMessage: question,
      });
      const analysis = result.run.diagnostics.datasetAnalysis;
      report.turns.push({
        question,
        answer: result.run.response,
        analysis,
        history: result.run.diagnostics.datasetHistory ?? [],
      });
      process.stdout.write(`${result.run.response}\n`);
    }
    assert.match(report.turns[0].answer, /268[,.]?000/);
    assert.equal(report.turns[0].analysis.results[0].matchedRows, 16000);
    assert.ok(
      report.turns[0].analysis.results.some((r) =>
        r.results?.some((row) => row.values.includes(268000)),
      ),
    );
    assert.match(report.turns[1].answer, /50\s*%/);
    assert.ok(
      report.turns[1].analysis.results.some((r) =>
        r.results?.some(
          (row) =>
            row.values.includes("A") &&
            row.values.includes(50) &&
            row.values.includes(40000) &&
            row.values.includes(60000),
        ),
      ),
    );
    assert.match(report.turns[2].answer, /60[,.]?000/);
    assert.ok(
      [
        ...report.turns[2].analysis.results,
        ...report.turns[2].history.flatMap((entry) => entry.results),
      ].some((r) => r.results?.some((row) => row.values.includes(60000))),
    );
    report.passed = true;
  } catch (error) {
    report.failure = { message: error.message, details: error.details };
    throw error;
  } finally {
    await service.cancelAll();
    const target = path.resolve("test-results", "dataset-live.json");
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.writeFile(target, JSON.stringify(report, null, 2) + "\n");
    process.stdout.write(`Report: ${target}\n`);
    if (!path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep))
      throw new Error("Unexpected temporary path.");
    await fs.rm(root, { recursive: true, force: true });
  }
}
main().catch((error) => {
  process.stderr.write(`${error.stack}\n`);
  process.exitCode = 1;
});

async function createBound(service, root, _scope) {
  const box = await service.saveBox(root, {name: 'Test '+require('node:crypto').randomUUID()});
  return service.create(root, {contextBoxId: box.id, creationId: require('node:crypto').randomUUID()});
}
