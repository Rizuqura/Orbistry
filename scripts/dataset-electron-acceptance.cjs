const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");
const http = require("node:http");
const { once } = require("node:events");

async function main() {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-dataset-electron-"),
  );
  const requests = [];
  const server = http.createServer(async (req, res) => {
    try {
      let raw = "";
      for await (const chunk of req) raw += chunk;
      const input = raw ? JSON.parse(raw) : {};
      res.setHeader("Content-Type", "application/json");
      if (req.url === "/api/tags")
        return res.end(
          JSON.stringify({
            models: [
              { name: "qwen3:4b", size: 1000, capabilities: ["completion"] },
            ],
          }),
        );
      if (req.url === "/api/show")
        return res.end(
          JSON.stringify({
            capabilities: ["completion"],
            model_info: { "test.context_length": 32768 },
          }),
        );
      if (req.url === "/api/generate")
        return res.end(JSON.stringify({ done: true }));
      requests.push(input);
      const plan = Boolean(input.format?.properties?.queries);
      if (!plan) {
        const source = JSON.parse(input.messages[1].content);
        const result = JSON.parse(source.content).computedResults[0];
        assert.equal(result.matchedRows, 20000);
        assert.equal(result.results[0].values[0], 20007);
      }
      const content = JSON.stringify(
        plan
          ? {
              queries: [
                {
                  sourceId: "sales.csv",
                  operation: "aggregate",
                  metrics: [{ op: "sum", column: "revenue", as: "total" }],
                },
              ],
            }
          : {
              answer:
                "Total revenue is 20,007 from 20,000 rows. Per-row mean: 20007 / 20000 = 1.00035 (about 1.0004).",
            },
      );
      res.setHeader("Content-Type", "application/x-ndjson");
      res.end(
        JSON.stringify({
          done: true,
          done_reason: "stop",
          model: input.model,
          message: { content },
        }) + "\n",
      );
    } catch (error) {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: error.message }));
    }
  });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  let app;
  try {
    await fs.writeFile(
      path.join(root, "sales.csv"),
      "category,revenue\n" + "A,1\n".repeat(19999) + "B,8\n",
    );
    const env = {
      ...process.env,
      ORBISTRY_VAULT_PATH: root,
      ORBISTRY_SMOKE_DATA: path.join(root, ".wonnyy", "app-data"),
      ORBISTRY_OLLAMA_URL: `http://127.0.0.1:${server.address().port}`,
    };
    delete env.ELECTRON_RUN_AS_NODE;
    delete env.ELECTRON_START_URL;
    app = await electron.launch({
      args: [path.resolve("scripts/electron-smoke-main.cjs"), "--hidden"],
      env,
      timeout: 30000,
    });
    app.process().stderr.on("data", (data) => process.stderr.write(data));
    process.stdout.write("Electron launched.\n");
    const page = await app.firstWindow();
    await page.waitForFunction(() => Boolean(window.orbistryDesktop?.ai));
    process.stdout.write("Preload ready; running CSV chat.\n");
    const result = await page.evaluate(async () => {
      const desktop = window.orbistryDesktop;
      await desktop.ai.handshake(desktop.apiVersion);
      await desktop.ai.settings({ modelId: "qwen3:4b" });
      await desktop.context.add(["sales.csv"]);
      const scope = { activeStationIds: [], matchMode: "any" };
      const box = await desktop.ai.saveContextBox({
        name: "Dataset acceptance",
      });
      const chat = await desktop.ai.createConversation({
        contextBoxId: box.id,
        creationId: crypto.randomUUID(),
      });
      return desktop.ai.chat({
        ...scope,
        conversationId: chat.id,
        expectedContextId: chat.contextIdentity.id,
        requestId: crypto.randomUUID(),
        userMessage: "What is total revenue across all rows?",
      });
    });
    assert.match(result.run.response, /20,007/);
    assert.match(
      result.run.response,
      /Source: "sales.csv"; 20000\/20000 rows matched/,
    );
    assert.equal(
      result.run.diagnostics.datasetAnalysis.results[0].results[0].values[0],
      20007,
    );
    assert.equal(requests.length, 2);
    assert.equal(
      result.run.diagnostics.answerNumberValidation.policy,
      "numeric-evidence-v2",
    );
    assert.equal(
      result.run.diagnostics.answerNumberValidation.calculations[0].value,
      20007 / 20000,
    );
    assert.ok(JSON.stringify(requests[0]).length < 20000);
    await fs.mkdir("test-results", { recursive: true });
    await fs.writeFile(
      "test-results/dataset-electron.json",
      JSON.stringify(
        {
          passed: true,
          answer: result.run.response,
          analysis: result.run.diagnostics.datasetAnalysis,
          numberValidation: result.run.diagnostics.answerNumberValidation,
          transport: "synthetic",
        },
        null,
        2,
      ),
    );
    process.stdout.write(
      "PASS: Electron preload → chat service → CSV worker → model requests → stored answer, 20,000 rows.\n",
    );
  } finally {
    await app?.close();
    server.closeAllConnections();
    server.close();
    assert.ok(
      path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep),
    );
    await fs.rm(root, { recursive: true, force: true });
  }
}
main().catch((error) => {
  process.stderr.write(`${error.stack}\n`);
  process.exitCode = 1;
});
