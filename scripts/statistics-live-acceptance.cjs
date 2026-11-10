// Opt-in live check; only synthetic fixtures and isolated settings reach Ollama.
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const { randomUUID } = require("node:crypto");
const { textPdf } = require("./fixtures/text-pdf.cjs");
const stations = require("../electron/station-service.cjs");
const {
  OllamaProvider,
} = require("../electron/ai/providers/ollama-provider.cjs");
const { ModelRegistry } = require("../electron/ai/model-registry.cjs");
const { ChatService } = require("../electron/ai/chat-service.cjs");

(async () => {
  await fs.mkdir("test-results", { recursive: true });
  const root = await fs.mkdtemp(path.resolve("test-results/statistics-live-"));
  const provider = new OllamaProvider();
  const registry = new ModelRegistry(
    provider,
    path.join(root, ".wonnyy", "settings"),
  );
  await registry.save({
    modelId: process.env.ORBISTRY_DATASET_MODEL || "qwen3:4b",
    temperature: 0,
    contextWindow: 8192,
    outputLimit: 1200,
    loadTimeoutMs: 60000,
    inactivityTimeoutMs: 60000,
    absoluteTimeoutMs: 240000,
  });
  const service = new ChatService({ provider, registry });
  const scope = { activeStationIds: [], matchMode: "any" };
  const report = [];
  const complete = provider.complete.bind(provider);
  provider.complete = async (request) => {
    const result = await complete(request);
    console.log(
      request.format.properties.answer
        ? "Answer received"
        : `Plan: ${result.content}`,
    );
    return result;
  };
  await fs.writeFile(
    path.join(root, "observations.pdf"),
    textPdf([["Measurements in meters: 2, 4, 8."]]),
  );
  await stations.addContext(root, ["observations.pdf"]);
  async function run(question) {
    console.log(question);
    const conversation = await createBound(service, root, scope);
    const result = await service.run(root, 1, {
      ...scope,
      conversationId: conversation.id,
      expectedContextId: conversation.contextIdentity.id,
      requestId: randomUUID(),
      userMessage: question,
    });
    report.push({
      question,
      answer: result.run.response,
      diagnostics: result.run.diagnostics,
    });
    await fs.writeFile(
      "test-results/statistics-live-proof.json",
      JSON.stringify(report, null, 2),
    );
    console.log(result.run.response);
    return result.run.diagnostics;
  }
  let d = await run(
    "Calculate the arithmetic mean and geometric mean of all measurements in observations.pdf. Cite the page.",
  );
  assert.ok(
    d.statistics.results.some(
      (r) =>
        ["mean", "average"].includes(r.operation) &&
        Math.abs(r.value - 14 / 3) < 1e-10,
    ),
  );
  assert.ok(
    d.statistics.results.some(
      (r) => r.operation === "geometric_mean" && Math.abs(r.value - 4) < 1e-10,
    ),
  );
  d = await run(
    "Use only these numbers typed here: calculate delta and percentage change from 100 to 80.",
  );
  assert.ok(
    d.statistics.results.some(
      (r) => r.operation === "delta" && r.value === -20,
    ),
  );
  assert.ok(
    d.statistics.results.some(
      (r) => r.operation === "percent_change" && r.value === -20,
    ),
  );
  const csvRoot = path.join(root, "csv-case");
  await fs.mkdir(csvRoot);
  await fs.writeFile(
    path.join(csvRoot, "measurements.csv"),
    "year,value\n2024,2\n2024,4\n2025,8\n2025,16\n",
  );
  await stations.addContext(csvRoot, ["measurements.csv"]);
  const conversation = await createBound(service, csvRoot, scope);
  const result = await service.run(csvRoot, 1, {
    ...scope,
    conversationId: conversation.id,
    expectedContextId: conversation.contextIdentity.id,
    requestId: randomUUID(),
    userMessage:
      "Calculate the mean and geometric mean of value across all rows, and the delta in total value from 2024 to 2025.",
  });
  const analysis = result.run.diagnostics.datasetAnalysis;
  assert.ok(
    analysis.results.some((r) =>
      r.results.some((row) => row.values.includes(7.5)),
    ),
  );
  assert.ok(
    analysis.results.some((r) =>
      r.results.some((row) =>
        row.values.some(
          (v) => typeof v === "number" && Math.abs(v - Math.sqrt(32)) < 1e-10,
        ),
      ),
    ),
  );
  assert.ok(
    analysis.results.some(
      (r) =>
        r.growth && r.results[0].values[r.columns.indexOf("change")] === 18,
    ),
  );
  report.push({
    question: "CSV mean/geometric mean/delta",
    answer: result.run.response,
    diagnostics: result.run.diagnostics,
  });
  await fs.writeFile(
    "test-results/statistics-live-proof.json",
    JSON.stringify(report, null, 2),
  );
  console.log("All live statistics checks passed.");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

async function createBound(service, root, _scope) {
  const box = await service.saveBox(root, {name: 'Test '+require('node:crypto').randomUUID()});
  return service.create(root, {contextBoxId: box.id, creationId: require('node:crypto').randomUUID()});
}
