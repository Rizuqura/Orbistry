const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const stations = require("../electron/station-service.cjs");
const { createContextOrchestrator } = require("../electron/ai/orchestrator.cjs");
const { OllamaProvider } = require("../electron/ai/providers/ollama-provider.cjs");
const { createModelRun, listModelRuns } = require("../electron/ai/run-store.cjs");

async function main() {
  const vaultPath = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-m72-live-"));
  try {
    await fs.writeFile(path.join(vaultPath, "allocation.md"), "Target allocation is 25%.");
    await fs.writeFile(path.join(vaultPath, "unrelated.md"), "Target allocation is 90%.");
    await stations.addContext(vaultPath, ["allocation.md"]);
    const orchestrator = createContextOrchestrator({
      prepareScope: (input) => stations.prepareBrainScope(vaultPath, input),
      readSource: (input) => stations.readBrainSource(vaultPath, input),
      provider: new OllamaProvider(),
      recordRun: (record) => createModelRun(vaultPath, record),
    });
    const result = await orchestrator.run({ model: "qwen3:4b", userMessage: "What is the target allocation? Reply with only the percentage.", activeStationIds: [], matchMode: "any" });
    assert.match(result.content, /^25\s*%\.?$/u, "Qwen did not return only the fact from the approved source.");
    const records = await listModelRuns(vaultPath);
    assert.equal(records.length, 1, "The live model run was not recorded exactly once.");
    assert.equal(records[0].status, "succeeded");
    assert.equal(records[0].response, result.content);
    process.stdout.write(`${JSON.stringify({ passed: true, model: result.model, content: result.content, scopeMode: result.scopeMode, promptVersion: result.promptVersion, sources: result.sources, runRecord: { runId: records[0].runId, status: records[0].status, durationMs: records[0].durationMs } }, null, 2)}\n`);
  } finally {
    await fs.rm(vaultPath, { recursive: true, force: true });
  }
}

main().catch((error) => {
  process.stderr.write(`${error.code || error.name}: ${error.message}\n`);
  process.exitCode = 1;
});
