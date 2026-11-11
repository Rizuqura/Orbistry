const { _electron: electron } = require("playwright");
const { openContextTools } = require("./fixtures/chat-context-tools.cjs");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");

async function main() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-online-ui-"));
  let application, page;
  const checks = [],
    errors = [];
  const deadline = setTimeout(() => {
    process.stderr.write("Online desktop smoke exceeded 240 seconds.\n");
    void application?.close().finally(() => process.exit(1));
  }, 240000);
  const launch = async () => {
    const env = {
      ...process.env,
      ORBISTRY_SMOKE_DATA: path.join(root, ".wonnyy", "app-data"),
      ORBISTRY_VAULT_PATH: root,
      ORBISTRY_OLLAMA_URL: "http://127.0.0.1:11434",
    };
    delete env.ELECTRON_RUN_AS_NODE;
    delete env.ELECTRON_START_URL;
    process.stdout.write("Launching isolated online smoke app\n");
    application = await electron.launch({
      args: [
        path.resolve("scripts/electron-online-smoke-main.cjs"),
        "--hidden",
      ],
      env,
      timeout: 20000,
    });
    page = await application.firstWindow({ timeout: 15000 });
    page.setDefaultTimeout(10000);
    page.on("pageerror", (e) => errors.push(e.message));
    await page.getByRole("textbox", { name: "Chat question" }).waitFor();
  };
  const setup = () =>
    page.getByRole("button", { name: "SETTINGS", exact: true }).click();
  const chat = async () => {
    await page.getByRole("button", { name: "Back to workspace" }).click();
    await page.getByRole("button", { name: "WorldView", exact: true }).click();
  };
  const send = async (question) => {
    const before = await page.locator(".chat-message-assistant").count();
    await page.getByRole("textbox", { name: "Chat question" }).fill(question);
    await page
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await page.waitForFunction(
      (count) =>
        document.querySelectorAll(".chat-message-assistant").length > count,
      before,
      { timeout: 10000 },
    );
    await page.waitForFunction(
      () =>
        document.querySelector(".chat-runtime-status")?.textContent === "READY",
      null,
      { timeout: 10000 },
    );
  };
  try {
    await fs.writeFile(path.join(root, "a.md"), "ALPHA allocation is 25%.");
    await fs.writeFile(
      path.join(root, "details.csv"),
      "asset,weight\nbonds,40",
    );
    await launch();
    await page.evaluate((root) => {
      window.onlineVaultPath = root;
    }, root);
    await page.locator('.file-row[title="a.md"]').click();
    await page
      .locator('.file-row[title="details.csv"]')
      .click({ modifiers: ["Control"] });
    await page
      .getByPlaceholder("New Station", { exact: true })
      .fill("Research");
    await page.getByPlaceholder("New Station", { exact: true }).press("Enter");
    const station = page
      .locator(".station-row")
      .filter({ hasText: "Research" });
    await station.locator(".station-assign").click();
    await station.locator(".station-filter").click();
    await page
      .getByRole("button", { name: "REVIEW STATION CONTEXT", exact: true })
      .click();
    await page
      .getByRole("dialog", { name: "Add to Active Context", exact: true })
      .getByRole("button", { name: "Add to Active Context", exact: true })
      .click();
    await page.waitForFunction(
      () => document.querySelectorAll(".context-list > div").length === 2,
    );
    checks.push(
      "Station multi-selection review approves Markdown and CSV together for chat",
    );
    await openContextTools(page);
    await page
      .getByRole("button", { name: "Save Active Context as box", exact: true })
      .click();
    await page
      .getByRole("textbox", { name: "New Context Box name" })
      .fill("Online research");
    await page.getByRole("button", { name: "Save", exact: true }).click();
    await page
      .getByRole("button", { name: "+ New Chat", exact: true })
      .first()
      .click();
    const picker = page.getByRole("dialog", {
      name: "New Orbistry Agent chat",
    });
    await picker.getByRole("radio").check();
    await picker
      .getByRole("button", { name: "Create Chat", exact: true })
      .click();
    await picker.waitFor({ state: "hidden" });
    await send("Summarize this");
    const originalId = await page.evaluate(() =>
      localStorage.getItem("qterminal-active-chat:" + window.onlineVaultPath),
    );
    await setup();
    await page
      .getByRole("navigation", { name: "AI providers" })
      .getByRole("button", { name: /Gemini/ })
      .click();
    await page
      .getByLabel("Gemini API key", { exact: true })
      .fill("AQ.synthetic-smoke-key");
    await page.getByRole("button", { name: "Save key", exact: true }).click();
    await page
      .getByRole("button", { name: "Use online", exact: true })
      .waitFor();
    assert.equal(
      await page.getByLabel("Gemini API key", { exact: true }).inputValue(),
      "",
    );
    const stored = await fs.readFile(
      path.join(root, ".wonnyy", "app-data", "provider-credentials.json"),
      "utf8",
    );
    assert.doesNotMatch(stored, /AQ.synthetic-smoke-key/);
    await page
      .locator('[aria-label="Online models"] .model-check-star')
      .waitFor();
    const automaticChecks = await application.evaluate(
      () => globalThis.onlineSmoke.requests,
    );
    assert.equal(automaticChecks.length, 1);
    assert.equal(
      JSON.parse(automaticChecks[0].contents[0].parts[0].text).sourceId,
      "orbistry-model-check",
    );
    assert.doesNotMatch(JSON.stringify(automaticChecks), /ALPHA/);
    await page.getByRole("button", { name: "Use online", exact: true }).click();
    await page.waitForFunction(
      () =>
        document.querySelector(".ai-privacy")?.textContent.includes("ONLINE:"),
      null,
      { timeout: 10000 },
    );
    await chat();
    assert.match(
      await page.locator(".chat-privacy").textContent(),
      /sent to Google Gemini/,
    );
    assert.equal(
      await page.evaluate(() =>
        localStorage.getItem("qterminal-active-chat:" + window.onlineVaultPath),
      ),
      originalId,
    );
    await send("What did we discuss?");
    assert.match(
      await page.locator(".chat-model-boundary").last().textContent(),
      /ONLINE/,
    );
    checks.push(
      "Encrypted key setup, context disclosure, local-to-online continuity and streaming",
    );
    process.stdout.write("PASS key setup and online turn\n");
    await application.evaluate(() => {
      globalThis.onlineSmoke.status = 429;
    });
    await page
      .getByRole("textbox", { name: "Chat question" })
      .fill("Retry this question");
    await page
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await page.locator(".chat-error").waitFor();
    assert.match(
      await page.locator(".chat-error").textContent(),
      /quota|rate limit/i,
    );
    assert.equal(
      await page.getByRole("textbox", { name: "Chat question" }).inputValue(),
      "Retry this question",
    );
    await application.evaluate(() => {
      globalThis.onlineSmoke.status = 200;
    });
    await page.getByRole("button", { name: "Retry", exact: true }).click();
    await page.waitForFunction(
      () =>
        document.querySelector(".chat-runtime-status")?.textContent === "READY",
      null,
      { timeout: 10000 },
    );
    checks.push(
      "Rate limit is visible, failed draft remains, explicit retry recovers",
    );
    await setup();
    await page
      .getByRole("navigation", { name: "AI providers" })
      .getByRole("button", { name: /NVIDIA/ })
      .click();
    await page
      .getByLabel("NVIDIA API key", { exact: true })
      .fill("nvapi-synthetic-smoke-key");
    await application.evaluate(() => {
      globalThis.onlineSmoke.nvidiaModelStatuses["deepseek-ai/deepseek-smoke"] =
        404;
    });
    await page.getByRole("button", { name: "Save key", exact: true }).click();
    const nvidiaModel = page
      .locator('[aria-label="NVIDIA models"] article')
      .filter({ hasText: "nvidia/nemotron-smoke" });
    await nvidiaModel.getByText(/Check passed/).waitFor();
    await page.getByText("Connection checks", { exact: true }).click();
    await page
      .locator('[aria-label="Model checks and starred models"]')
      .getByText(/1 passed \/ 2 checked/)
      .waitFor();
    assert.match(
      await page
        .locator('[aria-label="NVIDIA models"] article')
        .first()
        .textContent(),
      /nvidia\/nemotron-smoke/,
    );
    assert.equal(
      await page
        .locator('[aria-label="NVIDIA models"] .model-check-star')
        .count(),
      1,
    );
    await application.evaluate(() => {
      globalThis.onlineSmoke.checkDelayMs = 10000;
    });
    await page
      .locator('[aria-label="Model checks and starred models"]')
      .getByRole("button", { name: "Recheck all models" })
      .click();
    await page
      .getByRole("button", { name: "Stop checks", exact: true })
      .click();
    await page
      .locator('[aria-label="Model checks and starred models"]')
      .getByText("Checks stopped. Remaining models are untested.", {
        exact: true,
      })
      .waitFor();
    await page
      .locator('[aria-label="Model checks and starred models"]')
      .getByRole("button", { name: "Recheck all models" })
      .click();
    await page
      .getByRole("button", { name: "Stop checks", exact: true })
      .waitFor();
    assert.equal(
      await page.getByLabel("NVIDIA API key", { exact: true }).isEnabled(),
      true,
    );
    assert.equal(
      await page.getByRole("button", { name: "Refresh models" }).isEnabled(),
      true,
    );
    await page.getByText("Generation settings", { exact: true }).click();
    await page.getByLabel("Output limit", { exact: true }).fill("1024");
    assert.equal(
      await nvidiaModel
        .getByRole("button", { name: "Use online", exact: true })
        .isEnabled(),
      true,
    );
    await nvidiaModel
      .getByRole("button", { name: "Use online", exact: true })
      .click();
    await page.waitForFunction(() =>
      document
        .querySelector(".ai-current")
        ?.textContent.includes("nvidia/nemotron-smoke"),
    );
    await application.evaluate(() => {
      globalThis.onlineSmoke.checkDelayMs = 0;
    });
    checks.push(
      "Settings remains interactive during scans; choosing a model aborts the stalled check and applies the selection",
    );
    await chat();
    await send("Continue through NVIDIA");
    assert.equal(
      await page.evaluate(() =>
        localStorage.getItem("qterminal-active-chat:" + window.onlineVaultPath),
      ),
      originalId,
    );
    assert.match(
      await page.locator(".chat-model-boundary").last().textContent(),
      /NVIDIA/,
    );
    assert.doesNotMatch(
      await page.locator(".chat-thread").textContent(),
      /Hidden reasoning/,
    );
    checks.push(
      "NVIDIA discovery, synthetic check, Gemini-to-NVIDIA continuity and reasoning separation",
    );
    await application.close();
    await launch();
    await page.evaluate((root) => {
      window.onlineVaultPath = root;
    }, root);
    await setup();
    await page
      .getByText("Your key is saved securely on this device.", { exact: true })
      .waitFor();
    await page
      .getByRole("navigation", { name: "AI providers" })
      .getByRole("button", { name: /Ollama/ })
      .click();
    await page
      .locator('[aria-label="Local models"] article')
      .getByRole("button", { name: "Use", exact: true })
      .click();
    await chat();
    await send("Continue locally");
    assert.equal(
      await page.evaluate(() =>
        localStorage.getItem("qterminal-active-chat:" + window.onlineVaultPath),
      ),
      originalId,
    );
    assert.match(
      await page.locator(".chat-model-boundary").last().textContent(),
      /LOCAL/,
    );
    await setup();
    await page
      .getByRole("navigation", { name: "AI providers" })
      .getByRole("button", { name: /Gemini/ })
      .click();
    await page.getByRole("button", { name: "Remove key", exact: true }).click();
    await page
      .locator('[aria-label="Gemini credentials"]')
      .getByText("Not configured", { exact: true })
      .waitFor();
    assert.equal(
      JSON.parse(
        await fs.readFile(
          path.join(root, ".wonnyy", "app-data", "provider-credentials.json"),
          "utf8",
        ),
      ).gemini,
      null,
    );
    checks.push(
      "Restart preserves encrypted credentials and history; switching back and removing credentials works",
    );
    assert.deepEqual(errors, []);
    await fs.mkdir("test-results", { recursive: true });
    await page.screenshot({ path: "test-results/online-model-settings.png" });
    await fs.writeFile(
      "test-results/electron-online-smoke.json",
      JSON.stringify({ passed: true, checks }, null, 2),
    );
    process.stdout.write(`PASS: ${checks.join("; ")}\n`);
  } catch (error) {
    process.stdout.write(
      JSON.stringify(
        await page.locator(".model-check-summary").allTextContents(),
      ) + "\n",
    );
    await fs.mkdir("test-results", { recursive: true });
    await fs.writeFile(
      "test-results/electron-online-smoke.json",
      JSON.stringify({ passed: false, checks, error: error.message }, null, 2),
    );
    throw error;
  } finally {
    clearTimeout(deadline);
    await application?.close();
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
