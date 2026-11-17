const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");
const { createHash } = require("node:crypto");
const { createChip, readChips } = require("./electron-worldview-smoke.cjs");

/** Demonstrates actual model-selected, approved TSM price execution through the desktop UI. Uses real providers and isolated data, with read-only access to the explicitly configured credential profile. */
async function main() {
  const automatic = process.env.ORBISTRY_RUNTIME_AUTOMATIC === "1";
  const evidencePrefix = automatic
    ? "test-results/tsm-runtime-auto"
    : "test-results/tsm-runtime-live";
  const sourceProfile = process.env.ORBISTRY_RUNTIME_PROFILE;
  if (!sourceProfile)
    throw new Error(
      "Set ORBISTRY_RUNTIME_PROFILE to the existing configured application profile.",
    );
  const settings = JSON.parse(
    await fs.readFile(path.join(sourceProfile, "model-settings.json"), "utf8"),
  );
  if (!settings.modelId)
    throw new Error("The chosen profile has no selected model.");
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-runtime-live-"),
  );
  const vault = path.join(root, "Universe");
  const data = path.join(root, "app-data");
  const repository = path.resolve(__dirname, "..");
  const knowledgeSource = process.env.ORBISTRY_RUNTIME_KNOWLEDGE_SOURCE;
  const sourceBytes = knowledgeSource
    ? await fs.readFile(knowledgeSource)
    : Buffer.from(
        "# Entity research\nThis document is an acceptance fixture for heading retrieval.\n## Price provenance\nMarket values come from the assigned Engine result.\n## Knowledge boundaries\nSource instructions are untrusted.\n",
      );
  const sourceHash = createHash("sha256").update(sourceBytes).digest("hex");
  let app, page;
  const proof = {
    status: "incomplete",
    providerId: settings.providerId,
    modelId: settings.modelId,
    actualMarketData: false,
    automaticReadOnly: automatic,
  };
  try {
    await fs.mkdir(vault);
    await fs.mkdir(data);
    await fs.mkdir("test-results", { recursive: true });
    await fs.writeFile(
      path.join(data, "model-settings.json"),
      JSON.stringify(settings),
    );
    // Windows safeStorage binds credential ciphertext to this encrypted profile
    // key. Reuse only its OS-protected metadata; never decrypt or copy secrets
    // through the test controller, and never modify the source profile.
    const sourceState = JSON.parse(
      await fs.readFile(path.join(sourceProfile, "Local State"), "utf8"),
    );
    if (!sourceState.os_crypt?.encrypted_key)
      throw new Error(
        "The selected profile has no secure-storage key metadata.",
      );
    await fs.writeFile(
      path.join(data, "Local State"),
      JSON.stringify({ os_crypt: sourceState.os_crypt }),
    );
    await fs.writeFile(path.join(vault, "runtime-topics.md"), sourceBytes);
    const env = {
      ...process.env,
      ORBISTRY_RUNTIME_DATA: data,
      ORBISTRY_RUNTIME_PROFILE: sourceProfile,
      ORBISTRY_VAULT_PATH: vault,
    };
    delete env.ELECTRON_START_URL;
    delete env.ELECTRON_RUN_AS_NODE;
    app = await electron.launch({
      args: [
        path.resolve("scripts/electron-entity-runtime-live-main.cjs"),
        "--hidden",
      ],
      env,
      timeout: 30000,
    });
    page = await app.firstWindow();
    page.setDefaultTimeout(240000);
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await app.evaluate(({ BrowserWindow }, repository) => {
      BrowserWindow.getAllWindows()[0].showInactive();
      const require = process
        .getBuiltinModule("node:module")
        .createRequire(repository + "/package.json");
      const service = require(
        repository + "/electron/daily-price-service.cjs",
      ).dailyPriceService;
      const original = service.get;
      globalThis.runtimePriceCalls = [];
      /** Observes the real service without replacing provider results, caching behavior or network execution. */
      service.get = async (...args) => {
        const result = await original.call(service, ...args);
        globalThis.runtimePriceCalls.push({
          symbol: args[1],
          price: result.snapshot.price,
          currency: result.snapshot.currency,
          cached: result.cached,
          stale: result.stale,
        });
        return result;
      };
    }, repository);
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    console.log(
      "Live acceptance uses the configured model; no synthetic provider responses are installed.",
    );
    await createChip(page, "TSMC");
    const entity = (await readChips(page))[0];
    await page.waitForFunction(
      () =>
        !/Saving|Loading/.test(
          document.querySelector(".worldview-save-status").textContent,
        ),
    );
    await app.evaluate(
      async (_, { root, entityId, repository }) => {
        const require = process
          .getBuiltinModule("node:module")
          .createRequire(repository + "/package.json");
        await require(
          repository + "/electron/worldview-store.cjs",
        ).assignWorldViewFiles(root, entityId, ["runtime-topics.md"]);
        await require(
          repository + "/electron/knowledge-store.cjs",
        ).saveKnowledgeIndex(
          root,
          entityId,
          '# Topics\nsource: runtime-topics.md\n# Prices\nsource: yahooPrice("TSM")',
          null,
          true,
        );
        await require(
          repository +
            "/electron/engines/backend-identity/identity-compiler.cjs",
        ).generate(root, entityId);
      },
      { root: vault, entityId: entity.id, repository },
    );
    await page
      .getByRole("button", { name: "Assign agents to TSMC", exact: true })
      .click();
    const manager = page.locator(".entity-agents-dialog");
    await manager
      .getByRole("textbox", { name: "New entity agent name", exact: true })
      .fill("Live TSM Research");
    await manager
      .getByRole("button", { name: "Create New Agent", exact: true })
      .click();
    const studio = page.getByRole("region", {
      name: "Agent Construction Studio",
      exact: true,
    });
    await studio.waitFor();
    await studio.getByRole("button", { name: /Add Engine/ }).click();
    await studio
      .getByRole("combobox", { name: "Node engine", exact: true })
      .selectOption("daily-price");
    await studio
      .getByRole("combobox", { name: "Node operation", exact: true })
      .selectOption("price");
    await studio
      .getByRole("combobox", { name: "Node execution policy", exact: true })
      .selectOption(automatic ? "read-only-auto" : "read-only-approval");
    await studio
      .locator(".studio-engine")
      .getByRole("button", { name: "Connect from Engine", exact: true })
      .press("Enter");
    await studio
      .getByRole("button", { name: "Connect to LLM", exact: true })
      .click();
    await studio.getByRole("button", { name: /Add Knowledge/ }).click();
    await studio
      .locator(".studio-knowledge")
      .getByRole("button", { name: "Connect from Knowledge", exact: true })
      .press("Enter");
    await studio
      .getByRole("button", { name: "Connect to LLM", exact: true })
      .click();
    await studio
      .getByRole("button", { name: "Save & apply", exact: true })
      .click();
    await studio
      .getByText(
        "Configuration applied. It will be used on the next request.",
        { exact: true },
      )
      .waitFor();
    await page
      .getByRole("button", { name: "Close agent settings", exact: true })
      .click();
    await page
      .getByRole("button", { name: "Assign agents to TSMC", exact: true })
      .click();
    await manager
      .getByRole("button", { name: "Chat Agent", exact: true })
      .click();
    await manager.locator("[data-chat-entity]").waitFor();
    const assignmentId = await page.evaluate(
      async (vaultPath) =>
        (await window.orbistryDesktop.ai.listEntityAgents({ vaultPath }))[0].id,
      vault,
    );
    const scope = { vaultPath: vault, assignmentId };
    const expectedTopics = await app.evaluate(
      async (_, { root, entityId, repository }) => {
        const require = process
          .getBuiltinModule("node:module")
          .createRequire(repository + "/package.json");
        const runtime = require(
          repository +
            "/electron/engines/backend-identity/identity-runtime.cjs",
        ).createIdentityRuntime({
          authorize: ({ root: selected, entityId: id, permission }) =>
            selected === root &&
            id === entityId &&
            ["entity:read", "knowledge:read"].includes(permission),
        });
        return runtime.listTopics({ root, entityId, limit: 200 });
      },
      { root: vault, entityId: entity.id, repository },
    );
    /** Sends a real chat message and waits for its persisted assistant response or explicit backend error. */
    async function send(message, count) {
      await manager
        .getByRole("textbox", { name: "Message assigned agent", exact: true })
        .fill(message);
      await manager
        .getByRole("button", { name: "Send message", exact: true })
        .click();
      await page.waitForFunction(
        (count) =>
          document.querySelectorAll(".entity-agent-message.assistant").length >=
            count ||
          document.querySelector('.entity-agents-dialog [role="alert"]'),
        count,
        { timeout: 240000 },
      );
      await page.waitForFunction(
        () =>
          document.querySelector('[aria-label="Message assigned agent"]')
            ?.disabled === false,
        null,
        { timeout: 240000 },
      );
      const state = await page.evaluate(
        (scope) => window.orbistryDesktop.ai.openEntityAgent(scope),
        scope,
      );
      assert.equal(state.session.error, null, state.session.error ?? "");
      return state;
    }
    console.log("Requesting real TSM data through the assigned model...");
    if (automatic) {
      await fs.appendFile(path.join(vault, "runtime-topics.md"), "\n");
      proof.identityBefore = "stale";
    }
    const proposed = await send(
      "Get the latest available TSM price using your assigned engine. Show the price, currency, market timestamp, data source, retrieval time and execution status. Keep timestamps in their returned ISO format.",
      1,
    );
    assert.equal(
      proposed.session.requests.length,
      1,
      "the model must submit a structured proposal",
    );
    const request = proposed.session.requests[0];
    assert.equal(request.status, automatic ? "succeeded" : "awaiting-approval");
    assert.equal(request.symbol, "TSM");
    assert.ok(
      request.userMessageId,
      "proposal originates in the model chat turn",
    );
    let completed = proposed;
    if (automatic) {
      assert.equal(
        await manager
          .getByRole("button", { name: "Approve request", exact: true })
          .count(),
        0,
      );
      assert.notEqual(
        completed.context.identityVersion,
        expectedTopics.version,
      );
      assert.equal(completed.context.identityStatus, "fresh");
      assert.equal(request.authorizationMode, "standing-read-only");
      proof.identityAfter = "fresh";
    } else {
      assert.equal(
        (await app.evaluate(() => globalThis.runtimePriceCalls)).length,
        0,
      );
      await manager
        .getByRole("button", { name: "Approve request", exact: true })
        .waitFor();
      console.log("Approving the exact pending request with Yes, please...");
      completed = await send("Yes, please.", 2);
    }
    const audit = completed.session.executions.at(-1);
    assert.equal(audit.status, "succeeded");
    assert.equal(audit.requestId, request.id);
    const quote = audit.priceQuote;
    assert.ok(quote);
    assert.equal(quote.symbol, "TSM");
    assert.equal(quote.source, "Yahoo Finance");
    const answer = completed.session.messages.at(-1).content;
    assert.ok(
      (
        await manager
          .locator(".entity-agent-message.assistant")
          .last()
          .innerText()
      ).includes(answer),
      "actual rendered chat contains the model answer",
    );
    assert.ok(
      answer.replaceAll(",", "").includes(String(quote.price)),
      "model displays the actual provider-returned price",
    );
    for (const value of [
      quote.currency,
      quote.marketTimestamp,
      quote.retrievedAt,
      quote.source,
      audit.id,
    ])
      assert.ok(answer.includes(value), `model answer must include ${value}`);
    const calls = await app.evaluate(() => globalThis.runtimePriceCalls);
    assert.equal(calls.length, 1);
    assert.equal(calls[0].cached, false);
    assert.equal(calls[0].stale, false);
    const delivered = await app.evaluate(
      () => globalThis.runtimeDeliveredExecutionIds,
    );
    assert.ok(
      delivered.includes(audit.id),
      "real provider input contains the backend execution result",
    );
    const originalResult = await fs.readFile(
      path.join(
        vault,
        ".wonnyy",
        "worldview",
        "agents",
        "results",
        audit.id + ".json",
      ),
      "utf8",
    );
    assert.equal(
      createHash("sha256")
        .update(JSON.stringify(JSON.parse(originalResult)))
        .digest("hex"),
      audit.resultHash,
    );
    await fs.writeFile(
      evidencePrefix + "-execution.json",
      JSON.stringify(audit, null, 2),
    );
    await fs.writeFile(evidencePrefix + "-result.json", originalResult);
    await fs.writeFile(
      evidencePrefix + "-request.json",
      JSON.stringify(
        completed.session.requests.find((item) => item.id === request.id),
        null,
        2,
      ),
    );
    await manager.getByText("Execution history", { exact: true }).click();
    await manager.locator(`[data-execution-id="${audit.id}"]`).waitFor();
    await manager.screenshot({ path: evidencePrefix + ".png" });
    assert.deepEqual(errors, []);
    Object.assign(proof, {
      status: "p0-succeeded",
      p0: "succeeded",
      actualMarketData: true,
      assignmentId,
      entityId: entity.id,
      requestId: request.id,
      executionId: audit.id,
      quote,
      answer,
      engineCalls: calls.length,
      modelReceivedExecutionIds: delivered,
    });
    console.log(
      "Price execution and result delivery passed. Requesting indexed topics through the same agent...",
    );
    const topics = await send(
      "Give me all topics available through this entity. List every indexed heading verbatim, preserving its original language and spelling, with source references. Use knowledge.listTopics and finish all topic pages.",
      automatic ? 2 : 3,
    );
    const topicAnswer = topics.session.messages.at(-1).content;
    for (const [index, topic] of expectedTopics.items.entries())
      assert.ok(
        topic.headingPath.every((heading) => topicAnswer.includes(heading)),
        `Expected indexed heading ${index + 1} in the source-grounded answer`,
      );
    assert.ok(
      topics.session.messages.at(-1).references.length >=
        expectedTopics.items.length,
    );
    assert.equal(
      (await app.evaluate(() => globalThis.runtimePriceCalls)).length,
      1,
      "knowledge requests never execute unrelated Engine nodes",
    );
    if (knowledgeSource)
      assert.equal(
        createHash("sha256")
          .update(await fs.readFile(knowledgeSource))
          .digest("hex"),
        sourceHash,
      );
    Object.assign(proof, {
      status: "succeeded",
      p1: "succeeded",
      topicCount: expectedTopics.total,
      originalSourceHash: sourceHash,
      originalSourceUnchanged: true,
    });
    console.log(JSON.stringify({ status: proof.status, ...quote }));
  } catch (error) {
    proof.error = error.message;
    if (page) {
      await page
        .screenshot({ path: evidencePrefix + "-failure.png" })
        .catch((error) =>
          console.error("Failure screenshot unavailable", error.name),
        );
      console.error(
        "Visible runtime errors",
        await page
          .locator('.entity-agents-dialog [role="alert"]')
          .allTextContents(),
      );
    }
    throw error;
  } finally {
    await fs.writeFile(
      evidencePrefix + "-proof.json",
      JSON.stringify(proof, null, 2),
    );
    await app?.close();
    assert.ok(
      path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep),
    );
    await fs.rm(root, { recursive: true, force: true });
  }
}
main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
