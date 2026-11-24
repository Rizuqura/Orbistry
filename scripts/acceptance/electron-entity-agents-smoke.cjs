const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");
const { createChip, readChips } = require("./electron-worldview-smoke.cjs");
const { DEFAULTS } = require("../../electron/ai/model-registry.cjs");

/** Exercises real desktop assignment, existing Workbench multi-engine editing, persistent chat errors and Knowledge Card regression using disposable data. No model or financial calls are required. */
async function main() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-entity-ui-"));
  const vault = path.join(root, "Universe");
  const data = path.join(root, "app-data");
  const repository = path.resolve(__dirname, "../..");
  let app, page;
  const errors = [];
  try {
    await fs.mkdir(vault);
    await fs.mkdir(data);
    await fs.mkdir("test-results", { recursive: true });
    // A null remote selection exercises missing configuration without the legacy registry auto-selecting its mocked Ollama model.
    await fs.writeFile(
      path.join(data, "model-settings.json"),
      JSON.stringify({ ...DEFAULTS, providerId: "nvidia" }),
    );
    await fs.writeFile(
      path.join(vault, "profile.md"),
      "# Revenue\nTSMC scoped revenue evidence.\n",
    );
    const env = {
      ...process.env,
      ORBISTRY_VAULT_PATH: vault,
      ORBISTRY_SMOKE_DATA: data,
    };
    delete env.ELECTRON_RUN_AS_NODE;
    delete env.ELECTRON_START_URL;
    app = await electron.launch({
      args: [
        path.resolve("scripts/acceptance/electron-online-smoke-main.cjs"),
        "--hidden",
      ],
      env,
      timeout: 30000,
    });
    page = await app.firstWindow();
    page.setDefaultTimeout(20000);
    page.on("pageerror", (error) => errors.push(error.message));
    await app.evaluate(({ BrowserWindow }, repository) => {
      BrowserWindow.getAllWindows()[0].showInactive();
      const require = process
        .getBuiltinModule("node:module")
        .createRequire(repository + "/package.json");
      globalThis.entityAgentNetworkCalls = 0;
      /** Fails if assignment discovery or offline chat unexpectedly reaches a financial provider. */
      require(
        repository + "/electron/financial-service.cjs",
      ).financialService.get = async () => {
        globalThis.entityAgentNetworkCalls++;
        throw Error("Financial provider forbidden in offline acceptance.");
      };
      require(
        repository + "/electron/daily-price-service.cjs",
      ).dailyPriceService.get = async () => {
        globalThis.entityAgentNetworkCalls++;
        throw Error("Price provider forbidden in offline acceptance.");
      };
    }, repository);
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    /** Uses the chip control when exposed, or its selected-entity menu when a foreground entity occludes that control. */
    async function openAssignments(name) {
      const button = page.getByRole("button", {
        name: `Assign agents to ${name}`,
        exact: true,
      });
      if (await button.isVisible()) {
        await button.click();
        return;
      }
      await page
        .getByRole("list", { name: "WorldView chips", exact: true })
        .getByRole("button", { name, exact: true })
        .focus();
      await page.keyboard.press("Enter");
      await page
        .getByRole("button", { name: "More entity options", exact: true })
        .click();
      await page
        .getByRole("button", { name: "Assign / Manage Agents", exact: true })
        .click();
    }
    await createChip(page, "TSMC");
    const tsmc = (await readChips(page))[0];
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
          repository + "/electron/domains/entity/worldview-store.cjs",
        ).assignWorldViewFiles(root, entityId, ["profile.md"]);
        await require(
          repository + "/electron/domains/knowledge/knowledge-store.cjs",
        ).saveKnowledgeIndex(
          root,
          entityId,
          '# About\nsource: profile.md\n# Price\nsource: yahooPrice("2330.TW")\n# Financials\nsource: yahooFinancials("2330.TW")\n# Earnings\nsource: yahooEarnings("2330.TW")',
          null,
          true,
        );
        await require(
          repository +
            "/electron/engines/backend-identity/identity-compiler.cjs",
        ).generate(root, entityId);
      },
      { root: vault, entityId: tsmc.id, repository },
    );
    const before = await readChips(page);
    const zoomBefore = await page
      .getByLabel("Zoom percentage", { exact: true })
      .innerText();
    const selectionBefore = await page
      .locator(".worldview-entity-name[aria-pressed=true]")
      .getAttribute("data-chip-id");
    await page
      .getByRole("button", { name: "Assign agents to TSMC", exact: true })
      .click();
    const manager = page.locator(".entity-agents-dialog");
    await manager
      .getByRole("textbox", { name: "New entity agent name", exact: true })
      .fill("Research Agent");
    await manager
      .getByRole("button", { name: "Create New Agent", exact: true })
      .click();
    const studio = page.getByRole("region", {
      name: "Agent Construction Studio",
      exact: true,
    });
    await studio.waitFor();
    await studio.locator('[data-node-id="context"]').focus();
    assert.match(
      await studio.locator("[data-assigned-entity]").innerText(),
      /TSMC/,
    );
    assert.equal(
      await studio
        .locator("[data-assigned-entity]")
        .getAttribute("data-assigned-entity"),
      tsmc.id,
    );
    for (const [engineId, operation] of [
      ["daily-price", "price"],
      ["yahoo-financials", "financials"],
      ["yahoo-financials", "earnings"],
    ]) {
      await studio.getByRole("button", { name: /Add Engine/ }).click();
      await studio
        .getByRole("combobox", { name: "Node engine", exact: true })
        .selectOption(engineId);
      await studio
        .getByRole("combobox", { name: "Node operation", exact: true })
        .selectOption(operation);
      await studio
        .getByRole("combobox", { name: "Node execution policy", exact: true })
        .selectOption("read-only-approval");
      const engine = studio.locator(".studio-engine").last();
      await engine
        .getByRole("button", { name: "Connect from Engine", exact: true })
        .press("Enter");
      await studio
        .getByRole("button", { name: "Connect to LLM", exact: true })
        .click();
    }
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
    await studio.locator(".studio-engine").last().focus();
    await studio
      .locator(".studio-workbench")
      .screenshot({ path: "test-results/entity-agent-workbench.png" });
    await page
      .getByRole("button", { name: "Close agent settings", exact: true })
      .click();
    assert.deepEqual(
      await readChips(page),
      before,
      "assignment controls preserve entity selection and positions",
    );
    assert.equal(
      await page.getByLabel("Zoom percentage", { exact: true }).innerText(),
      zoomBefore,
    );
    assert.equal(
      await page
        .locator(".worldview-entity-name[aria-pressed=true]")
        .getAttribute("data-chip-id"),
      selectionBefore,
    );
    assert.equal(
      await page.locator(".worldview-assigned-agent-count").innerText(),
      "1",
    );
    await page
      .getByRole("button", { name: "Assign agents to TSMC", exact: true })
      .click();
    await manager
      .getByRole("button", { name: "Chat Agent", exact: true })
      .click();
    await manager.locator("[data-chat-entity]").waitFor();
    assert.equal(
      await manager
        .locator("[data-chat-entity]")
        .getAttribute("data-chat-entity"),
      tsmc.id,
    );
    assert.equal(await manager.locator("[data-engine-node]").count(), 3);
    assert.equal(
      await manager.getByText("Last execution none", { exact: true }).count(),
      3,
    );
    assert.match(await manager.innerText(), /LLM provider is not configured/);
    assert.equal(
      await manager.getByRole("button", { name: /Approve & run/ }).count(),
      3,
    );
    await manager
      .getByRole("textbox", { name: "Message assigned agent", exact: true })
      .fill("Summarize Revenue");
    await manager
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await manager
      .getByRole("alert")
      .filter({ hasText: "LLM provider is not configured" })
      .waitFor();
    assert.equal(
      await manager.locator(".entity-agent-message.user").count(),
      1,
    );
    assert.equal(
      await manager.locator(".entity-agent-message.assistant").count(),
      0,
    );
    await manager.screenshot({ path: "test-results/entity-agent-chat.png" });
    await manager
      .getByRole("button", { name: "Close assigned agents", exact: true })
      .click();
    await createChip(page, "Peer");
    await page.waitForFunction(
      () =>
        !/Saving|Loading/.test(
          document.querySelector(".worldview-save-status").textContent,
        ),
    );
    await openAssignments("Peer");
    await manager
      .getByRole("combobox", { name: "Existing agent", exact: true })
      .selectOption({ label: "Research Agent" });
    await manager
      .getByRole("button", { name: "Assign agent", exact: true })
      .click();
    await manager
      .getByRole("button", { name: "Open Workbench", exact: true })
      .click();
    await studio.waitFor();
    await studio.locator('[data-node-id="context"]').focus();
    assert.match(
      await studio.locator("[data-assigned-entity]").innerText(),
      /Peer/,
    );
    assert.equal(await studio.locator(".studio-engine").count(), 3);
    await page
      .getByRole("button", { name: "Close agent settings", exact: true })
      .click();
    await openAssignments("Peer");
    await manager
      .getByRole("button", { name: "Chat Agent", exact: true })
      .click();
    await manager.locator("[data-chat-entity]").waitFor();
    assert.equal(
      await manager.locator(".entity-agent-message").count(),
      0,
      "reused definition has isolated entity history",
    );
    await manager
      .getByRole("button", { name: "Close assigned agents", exact: true })
      .click();
    await page.reload();
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await openAssignments("TSMC");
    await manager
      .getByRole("button", { name: "Chat Agent", exact: true })
      .click();
    await manager.locator("[data-chat-entity]").waitFor();
    assert.equal(
      await manager.locator(".entity-agent-message.user").count(),
      1,
    );
    assert.equal(await manager.locator("[data-engine-node]").count(), 3);
    await manager
      .getByRole("button", { name: "Close assigned agents", exact: true })
      .click();
    await app.evaluate(async ({ app }, repository) => {
      const require = process
        .getBuiltinModule("node:module")
        .createRequire(repository + "/package.json");
      const path = require("node:path");
      await require(repository + "/electron/ai/json-store.cjs").writeJson(
        path.join(app.getPath("userData"), "model-settings.json"),
        {
          ...require(repository + "/electron/ai/model-registry.cjs").DEFAULTS,
          modelId: "qwen3:4b",
        },
      );
      globalThis.entityAgentSyntheticExecutions = 0;
      /** Produces an explicitly synthetic test quote after the real registry validates scope and human approval. */
      require(
        repository + "/electron/daily-price-service.cjs",
      ).dailyPriceService.get = async (_root, symbol) => {
        globalThis.entityAgentSyntheticExecutions++;
        return {
          snapshot: {
            schemaVersion: 1,
            engineVersion: "0.1.0",
            provider: "Yahoo Finance",
            symbol,
            currency: "TWD",
            exchangeTimezone: "Asia/Taipei",
            price: 123.45,
            previousClose: 120,
            marketTime: "2026-11-16T05:30:00.000Z",
            marketState: "CLOSED",
            delayMinutes: 20,
            fetchedAt: "2026-11-17T04:00:00.000Z",
            historyFetchedAt: "2026-11-17T04:00:00.000Z",
            history: [{ date: "2026-11-16", close: 123.45 }],
          },
          cached: false,
          stale: false,
          warning: null,
        };
      };
      /** Supplies test-only model actions to exercise the actual desktop proposal, approval and continuation UI. */
      globalThis.onlineSmoke.entityProtocolReply = (body) => {
        const metadata = body.messages.find((message) =>
          message.content.startsWith("Host-resolved assignment data"),
        );
        const context = JSON.parse(
          metadata.content.split("\n").slice(1).join("\n"),
        );
        const quote = context.capabilityResults[0]?.result;
        if (quote)
          return {
            action: "answer",
            answer: `Synthetic test quote ${quote.price} ${quote.currency}. Execution ${quote.executionId}.`,
          };
        const node = context.engines.find(
          (engine) => engine.engineId === "daily-price",
        );
        return {
          action: "engine.request",
          nodeId: node.nodeId,
          capabilityId: node.capabilities[0].capabilityId,
          arguments: { force: true },
        };
      };
    }, repository);
    await openAssignments("TSMC");
    await manager
      .getByRole("button", { name: "Chat Agent", exact: true })
      .click();
    await manager
      .getByRole("textbox", { name: "Message assigned agent", exact: true })
      .fill("Get a quote using the assigned engine.");
    await manager
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await manager
      .getByRole("button", { name: "Approve request", exact: true })
      .waitFor();
    assert.equal(
      await app.evaluate(() => globalThis.entityAgentSyntheticExecutions),
      0,
    );
    await manager
      .getByRole("button", { name: "Approve request", exact: true })
      .click();
    await manager.getByText(/Synthetic test quote 123\.45 TWD/).waitFor();
    assert.equal(
      await app.evaluate(() => globalThis.entityAgentSyntheticExecutions),
      1,
    );
    await manager
      .getByRole("textbox", { name: "Message assigned agent", exact: true })
      .fill("Yes, please.");
    await manager
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await manager.getByText(/This request already succeeded/).waitFor();
    assert.equal(
      await app.evaluate(() => globalThis.entityAgentSyntheticExecutions),
      1,
    );
    await manager
      .getByRole("button", { name: "Close assigned agents", exact: true })
      .click();
    await page
      .locator(`.worldview-sr-only [data-world-x][data-chip-id="${tsmc.id}"]`)
      .focus();
    await page.keyboard.press("Enter");
    await page
      .getByRole("button", { name: "View Knowledge Card", exact: true })
      .click();
    await page.locator(".knowledge-card").waitFor();
    assert.equal(
      await app.evaluate(() => globalThis.entityAgentNetworkCalls),
      0,
    );
    assert.deepEqual(errors, []);
    console.log(
      "PASS: TSMC assignment, original Workbench, three Engine nodes, entity context, offline direct chat, persistence, chip interaction and Knowledge Card regression.",
    );
  } catch (error) {
    if (page)
      console.error((await page.locator("body").innerText()).slice(-5000));
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
  console.error(error);
  process.exitCode = 1;
});
