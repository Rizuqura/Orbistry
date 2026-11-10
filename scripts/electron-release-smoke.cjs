const { _electron: electron } = require("playwright");
const fs = require("node:fs/promises"),
  path = require("node:path"),
  os = require("node:os");
const assert = require("node:assert/strict");
async function main() {
  const phase = process.argv[2] ?? "after";
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-release-"));
  const data = path.join(root, "profile"),
    documents = path.join(root, "documents");
  let app;
  const errors = [];
  try {
    await fs.mkdir(data);
    await fs.mkdir(documents);
    const env = {
      ...process.env,
      ORBISTRY_SMOKE_DATA: data,
      ORBISTRY_RELEASE_DOCUMENTS: documents,
    };
    delete env.ELECTRON_RUN_AS_NODE;
    delete env.ELECTRON_START_URL;
    delete env.ORBISTRY_VAULT_PATH;
    if (phase === "before") {
      env.ORBISTRY_VAULT_PATH = path.join(root, "vault");
      await fs.mkdir(env.ORBISTRY_VAULT_PATH);
      await fs.writeFile(
        path.join(data, "agents.json"),
        '{"schemaVersion":1,"includeDefaultAgents":false,"agents":{}}',
      );
    }
    const start = performance.now();
    app = await electron.launch({
      args: [
        path.resolve("scripts/electron-release-smoke-main.cjs"),
        "--hidden",
      ],
      env,
    });
    const page = await app.firstWindow();
    page.on("pageerror", (error) => errors.push(error.message));
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    const workspaceMs = performance.now() - start;
    const state = await page.evaluate(async () => {
      const { ai, vault } = window.orbistryDesktop;
      return {
        agents: await ai.listAgents(),
        boxes: await ai.listContextBoxes(),
        chats: await ai.listConversations(),
        registry: await ai.models(),
        snapshot: await vault.getSnapshot(),
      };
    });
    assert.equal(state.agents.length, 0);
    assert.equal(state.boxes.length, 0);
    assert.equal(state.chats.length, 0);
    assert.ok(
      state.registry.providers
        .filter((p) => p.id !== "ollama")
        .every((p) => !p.configured),
    );
    if (phase !== "before") {
      assert.equal(state.snapshot.rootPath, path.join(documents, "Universe"));
      assert.equal(
        await page.locator(".version").textContent(),
        `v${require("../package.json").version} Victoria (Beta)`,
      );
    }
    await page.getByRole("button", { name: "AGENT", exact: true }).click();
    await page
      .getByRole("heading", { name: "Build your first agent" })
      .waitFor();
    const metrics = await app.evaluate(({ app }) => ({
      versions: process.versions,
      processes: app.getAppMetrics().map((p) => ({
        type: p.type,
        workingSetKB: p.memory.workingSetSize,
        privateKB: p.memory.privateBytes,
      })),
    }));
    assert.deepEqual(errors, []);
    const report = {
      phase,
      workspaceMs: Math.round(workspaceMs),
      method:
        "One new process/profile; OS disk cache not flushed; synthetic provider transport; not a statistically rigorous cold-start benchmark",
      memory: metrics.processes,
      versions: metrics.versions,
      initialState: { agents: 0, boxes: 0, chats: 0, remoteKeys: 0 },
      rendererErrors: errors,
    };
    await fs.mkdir("test-results", { recursive: true });
    await fs.writeFile(
      `test-results/release-startup-${phase}.json`,
      JSON.stringify(report, null, 2),
    );
    console.log(JSON.stringify(report));
  } finally {
    if (app) await app.close().catch(() => {});
    await fs.rm(root, { recursive: true, force: true });
  }
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
