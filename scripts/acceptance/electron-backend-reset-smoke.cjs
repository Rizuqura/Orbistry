const { _electron: electron } = require("playwright");
const fs = require("node:fs/promises"),
  path = require("node:path"),
  os = require("node:os"),
  assert = require("node:assert/strict");
const { randomUUID } = require("node:crypto");

/** Exercises the actual production entry/IPC/UI with disposable data and a synthetic NVIDIA adapter. No live credentials or model requests are used. */
async function main() {
  const root = await fs.mkdtemp(
      path.join(os.tmpdir(), "orbistry-reset-desktop-"),
    ),
    profile = path.join(root, "profile"),
    vault = path.join(root, "Universe");
  await fs.mkdir(profile);
  await fs.mkdir(vault);
  let app, page;
  try {
    const agents =
      new (require("../../electron/ai/agents/agent-store.cjs").AgentStore)(
        profile,
      );
    let agent = await agents.create({
      name: "TSMC Research",
      creationId: randomUUID(),
    });
    await agents.saveConstruction({
      id: agent.id,
      action: "apply",
      expectedRevision: 0,
      config: agent.construction.draft,
    });
    await require("../../electron/domains/entity/worldview-store.cjs").saveWorldViewChip(
      vault,
      {
        id: "tsmc",
        name: "TSMC",
        icon: "",
        tags: ["semiconductor"],
        color: "#263f4b",
        position: { x: 0, y: 0 },
      },
    );
    await require("../../electron/domains/knowledge/knowledge-store.cjs").saveKnowledgeIndex(
      vault,
      "tsmc",
      "# Company\nTSMC research fixture",
      null,
      true,
    );
    const service =
      new (require("../../electron/ai/agents/entity-agents.cjs").EntityAgentService)(
        {
          agents,
          getVault: () => vault,
        },
      );
    const assignment = await service.assign({
      vaultPath: vault,
      entityId: "tsmc",
      agentId: agent.id,
    });
    const definitions = await fs.readFile(agents.file, "utf8");
    const packageSource = path.join(root, "engine-source");
    await require("../../electron/engines/registry/authoring.cjs").initPackage(
      packageSource,
      "desktop-math",
    );
    const {
      createSigningKey,
      signPackage,
    } = require("../../electron/engines/registry/signing.cjs");
    const privateFile = path.join(root, "publisher.engine-private.pem"),
      publicFile = path.join(root, "publisher.public.pem");
    const publisher = await createSigningKey(privateFile, publicFile);
    await signPackage(packageSource, privateFile);
    const packageRegistry =
      new (require("../../electron/ai/engine-registry.cjs").EnginePackageRegistry)(
        vault,
      );
    const installed = await packageRegistry.install(packageSource);
    await packageRegistry.trust(installed.engineId, installed.digest);
    await packageRegistry.link({
      entityId: "tsmc",
      engineId: installed.engineId,
      operations: ["add"],
    });
    const unsignedSource = path.join(root, "unsigned-source");
    await require("../../electron/engines/registry/authoring.cjs").initPackage(
      unsignedSource,
      "unsigned-math",
    );
    await packageRegistry.install(unsignedSource);
    await fs.writeFile(
      path.join(profile, "model-settings.json"),
      JSON.stringify({
        ...require("../../electron/ai/model-registry.cjs").DEFAULTS,
        providerId: "nvidia",
        modelId: "fixture/nvidia",
      }),
    );
    const env = { ...process.env, ORBISTRY_VAULT_PATH: vault };
    delete env.ELECTRON_RUN_AS_NODE;
    delete env.ELECTRON_START_URL;
    app = await electron.launch({
      args: [
        path.resolve("electron/main.cjs"),
        "--user-data-dir=" + profile,
        "--hidden",
      ],
      env,
      timeout: 30000,
    });
    page = await app.firstWindow();
    page.setDefaultTimeout(30000);
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await app.evaluate(({ BrowserWindow }, repository) => {
      const require = process
        .getBuiltinModule("node:module")
        .createRequire(repository + "/package.json");
      const proto = require(
        repository + "/electron/ai/providers/nvidia-provider.cjs",
      ).NvidiaProvider.prototype;
      const model = {
        name: "fixture/nvidia",
        displayName: "Synthetic NVIDIA fixture",
        contextLength: 8192,
        capabilities: ["completion"],
      };
      proto.listModels = async () => [model];
      proto.describeModel = async () => model;
      proto.prepare = async (_model, _settings, signal) =>
        signal?.throwIfAborted();
      proto.getStatus = async () => ({
        online: true,
        configured: true,
        models: [model],
      });
      globalThis.resetFixtureCalls = 0;
      // Usage observation captures complete during startup. Mock the lower
      // transport boundary so the actual captured NVIDIA adapter still runs.
      proto.request = async (resource, init, consume, options = {}) => {
        if (resource !== "chat/completions")
          throw Error("Unexpected fixture transport");
        globalThis.resetFixtureCalls++;
        if (globalThis.auditBlockRequest) {
          globalThis.auditRequestStarted();
          return new Promise((_, reject) => {
            options.signal.throwIfAborted();
            options.signal.addEventListener(
              "abort",
              () => reject(options.signal.reason),
              { once: true },
            );
          });
        }
        const content = JSON.stringify({
          action: "answer",
          answer: "Assigned NVIDIA fixture response after reset.",
        });
        const body = `data: ${JSON.stringify({ choices: [{ delta: { content }, finish_reason: null }] })}\n\ndata: ${JSON.stringify({ choices: [{ delta: {}, finish_reason: "stop" }] })}\n\ndata: [DONE]\n\n`;
        return consume(
          new Response(body, {
            headers: { "content-type": "text/event-stream" },
          }),
          () => {},
        );
      };
      BrowserWindow.getAllWindows()[0].setSize(1440, 960);
    }, process.cwd());
    await page.reload();
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    const catalog = await page.evaluate(() =>
      window.orbistryDesktop.ai.enginePackageCatalog({ entityId: "tsmc" }),
    );
    assert.equal(catalog.tools.length, 1);
    assert.equal(catalog.bindings[0].engineId, "desktop-math");
    assert.equal(catalog.bindings[0].approvalRequired, true);
    const packageResult = await app.evaluate(
      async (_electron, { repository, vault, toolName }) => {
        const require = process
          .getBuiltinModule("node:module")
          .createRequire(repository + "/package.json");
        const registry = new (require(
          repository + "/electron/ai/engine-registry.cjs",
        ).EnginePackageRegistry)(vault, {
          authorize: async ({ entityId }) => entityId === "tsmc",
        });
        return registry.executeTool(
          "tsmc",
          { name: toolName, arguments: '{"left":10,"right":7}' },
          { approved: true },
        );
      },
      {
        repository: process.cwd(),
        vault,
        toolName: catalog.tools[0].function.name,
      },
    );
    assert.deepEqual(packageResult.data, { sum: 17 });
    assert.equal(packageResult.receipt.status, "succeeded");
    await page.getByRole("button", { name: "SETTINGS", exact: true }).click();
    await page
      .getByRole("heading", { name: "Settings", exact: true })
      .waitFor();
    assert.equal(
      await page
        .getByRole("button", { name: "AI Infrastructure", exact: true })
        .count(),
      0,
    );
    assert.equal(await page.locator(".infrastructure").count(), 0);
    assert.equal(
      await page.evaluate(() => "infrastructure" in window.orbistryDesktop.ai),
      false,
    );
    const registryFile = path.join(vault, ".engine/registry/registry.json");
    const registryBefore = await fs.readFile(registryFile, "utf8");
    const executionsBefore = await fs.readdir(
      path.join(vault, ".engine/registry/executions"),
    );
    await page.getByRole("button", { name: "Engines", exact: true }).click();
    const engineList = page.getByRole("region", {
      name: "Engine list",
      exact: true,
    });
    await engineList.locator('[data-engine-id="desktop-math"]').waitFor();
    assert.equal(
      await engineList.locator('[data-engine-id="daily-price"]').count(),
      1,
    );
    await engineList.locator('[data-engine-id="desktop-math"]').click();
    await engineList.locator(".engine-authoring-help > summary").click();
    const guide = engineList.locator(".engine-authoring-help");
    const commands = (await guide.locator("pre").allTextContents()).join("\n");
    assert.equal(
      await guide.locator(".engine-development-steps > li").count(),
      5,
    );
    for (const command of [
      "init",
      "seal",
      "check",
      "keygen",
      "sign",
      "verify",
      "install",
      "trust",
      "link",
      "describe",
      "run",
      "result",
      "pull",
    ])
      assert.ok(commands.includes(`npm.cmd run engine -- ${command} `));
    assert.ok(commands.includes("module.exports = { execute }"));
    assert.ok(commands.includes('"left":8,"right":13'));
    assert.ok(
      (await guide.innerText()).includes(
        "not an operating-system security sandbox",
      ),
    );
    assert.ok(commands.includes("C:\\EngineProjects\\my-engine"));
    const engineDetails = page.getByRole("complementary", {
      name: "Engine details",
    });
    assert.equal(
      await engineDetails
        .getByRole("heading", { name: "Inspect Contract", exact: true })
        .count(),
      1,
    );
    assert.equal(
      await engineDetails.getByLabel("Package SHA-256").inputValue(),
      installed.digest,
    );
    assert.equal(
      await engineDetails.getByLabel("Publisher key fingerprint").inputValue(),
      publisher.keyId,
    );
    assert.equal(
      await engineDetails
        .getByText("Valid Ed25519 signature", { exact: true })
        .count(),
      1,
    );
    assert.equal(
      await engineDetails.getByText("tsmc", { exact: true }).count(),
      1,
    );
    await engineList
      .getByRole("searchbox", { name: "Search engines" })
      .fill("unsigned");
    assert.equal(
      await engineList.locator('[data-engine-id="desktop-math"]').count(),
      0,
    );
    await engineList.locator('[data-engine-id="unsigned-math"]').click();
    assert.equal(
      await engineDetails
        .getByText("Unsigned package", { exact: true })
        .count(),
      1,
    );
    assert.equal(
      await engineDetails
        .getByText("Review and trust required", { exact: true })
        .count(),
      1,
    );
    await engineList
      .getByRole("searchbox", { name: "Search engines" })
      .fill("");
    const integrationRow = engineList
      .locator(".engine-settings-list")
      .first()
      .getByRole("button")
      .first();
    const integrationName = await integrationRow.locator("strong").innerText();
    await integrationRow.click();
    assert.equal(
      await engineDetails
        .getByRole("heading", { name: integrationName, exact: true })
        .count(),
      1,
    );
    assert.ok(
      (await engineDetails.innerText()).includes(
        "not full per-operation schemas",
      ),
    );
    await engineList.locator('[data-engine-id="desktop-math"]').click();
    await engineDetails.locator("details > summary").first().click();
    const contractText = await engineDetails.innerText();
    for (const expected of [
      "input_schema",
      "output_schema",
      "Access policy:",
      "--operation add",
      "engine_manifest.json",
    ])
      assert.ok(contractText.includes(expected));
    await page.screenshot({ path: "test-results/engine-settings-desktop.png" });
    await app.evaluate(({ BrowserWindow }) =>
      BrowserWindow.getAllWindows()[0].setSize(760, 900),
    );
    await page.waitForFunction(() => {
      const panel = document.querySelector(".model-settings");
      return panel && panel.scrollWidth <= panel.clientWidth;
    });
    await page.screenshot({ path: "test-results/engine-settings-small.png" });
    await app.evaluate(({ BrowserWindow }) =>
      BrowserWindow.getAllWindows()[0].setSize(1440, 960),
    );
    assert.equal(await fs.readFile(registryFile, "utf8"), registryBefore);
    assert.deepEqual(
      await fs.readdir(path.join(vault, ".engine/registry/executions")),
      executionsBefore,
    );
    await page.getByRole("button", { name: "General", exact: true }).click();
    await page.screenshot({
      path: "test-results/infrastructure-removal-settings.png",
    });
    await page.getByRole("button", { name: "AGENT", exact: true }).click();
    await page
      .getByRole("heading", { name: "Ask Orbistry.", exact: true })
      .waitFor();
    const policy = await page.evaluate(async () => {
      const api = window.orbistryDesktop.ai;
      const models = await api.models();
      let rejected;
      try {
        await api.chat({ userMessage: "Universe prompt" });
      } catch (error) {
        rejected = { code: error.code, message: error.message };
      }
      return {
        providers: models.providers.map((item) => item.id),
        rejected,
        history: await api.listConversations(),
      };
    });
    assert.deepEqual(policy.providers, ["nvidia"]);
    assert.match(
      policy.rejected?.message ?? JSON.stringify(policy),
      /Universe chat has been reset/,
    );
    assert.equal(policy.history.length, 0);
    await page.locator(".gateway-agent").first().click();
    await page
      .getByRole("dialog", { name: "Assigned agent details" })
      .waitFor();
    await page
      .getByRole("button", { name: "Ask through Gateway", exact: true })
      .click();
    await page
      .getByRole("textbox", { name: "Message agent", exact: true })
      .fill("Review this assigned Entity");
    await page
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await page
      .getByText("Assigned NVIDIA fixture response after reset.", {
        exact: true,
      })
      .waitFor();
    assert.equal(await app.evaluate(() => globalThis.resetFixtureCalls), 1);
    const state = await service.open({
      vaultPath: vault,
      assignmentId: assignment.id,
    });
    assert.equal(state.session.messages.length, 2);
    assert.equal(await fs.readFile(agents.file, "utf8"), definitions);
    assert.equal(errors.length, 0, errors.join("\n"));
    await page.screenshot({ path: "test-results/backend-reset-native.png" });
    await app.evaluate(() => {
      globalThis.auditBlockRequest = true;
      globalThis.auditReady = new Promise((resolve) => {
        globalThis.auditRequestStarted = resolve;
      });
    });
    const cancellationId = randomUUID();
    await page.evaluate(
      ({ vault, assignmentId, requestId }) => {
        window.auditPending = window.orbistryDesktop.ai.sendEntityAgent({
          vaultPath: vault,
          assignmentId,
          requestId,
          message: "Cancel this synthetic request",
        });
      },
      { vault, assignmentId: assignment.id, requestId: cancellationId },
    );
    await app.evaluate(() => globalThis.auditReady);
    assert.equal(
      await page.evaluate(
        (id) => window.orbistryDesktop.ai.cancel(id),
        cancellationId,
      ),
      true,
    );
    const cancelled = await page.evaluate(() => window.auditPending);
    assert.match(cancelled.session.error, /stopped/i);
    assert.equal(cancelled.session.messages.at(-1).role, "user");
    assert.equal(await app.evaluate(() => globalThis.resetFixtureCalls), 2);
    assert.equal(await fs.readFile(agents.file, "utf8"), definitions);
    const proof = {
      mode: "offline-production-entry",
      providers: policy.providers,
      universeGenerationRejected: true,
      assignedChatPassed: true,
      infrastructureRemoved: true,
      assignedCancellationPassed: true,
      definitionsPreserved: true,
      enginePackageCatalogPassed: true,
      electronEngineWorkerPassed: true,
      engineSettingsPassed: true,
      signedEngineVerified: true,
      engineSettingsReadOnly: true,
      pageErrors: errors.length,
    };
    await fs.writeFile(
      "test-results/backend-reset-native-proof.json",
      JSON.stringify(proof, null, 2),
    );
    console.log(JSON.stringify(proof));
  } catch (error) {
    await page?.screenshot({
      path: "test-results/backend-reset-native-failure.png",
    });
    console.error(await page?.locator(".gateway-main").innerText());
    throw error;
  } finally {
    await app?.close();
    assert.ok(
      path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep),
    );
    await fs.rm(root, { recursive: true, force: true });
  }
}
main().catch((error) => {
  console.error(error.stack);
  process.exitCode = 1;
});
