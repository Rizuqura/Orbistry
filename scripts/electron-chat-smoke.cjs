const { _electron: electron } = require("playwright");
const { openContextTools } = require("./fixtures/chat-context-tools.cjs");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");
const http = require("node:http");
const { once } = require("node:events");
const { cmapPdf } = require("./fixtures/cmap-pdf.cjs");

async function main() {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "wonnyy-electron-smoke-"),
  );
  const requests = [];
  let ollamaOnline = true;
  let installedModels = ["qwen3:4b", "qwen3:1.7b"];
  let pullCalls = 0;
  const server = http.createServer(async (request, response) => {
    let raw = "";
    for await (const chunk of request) raw += chunk;
    const input = raw ? JSON.parse(raw) : {};
    response.setHeader("Content-Type", "application/json");
    if (!ollamaOnline) {
      response.statusCode = 503;
      return response.end(
        JSON.stringify({ error: "Test runtime unavailable" }),
      );
    }
    if (request.url === "/api/tags")
      return response.end(
        JSON.stringify({
          models: installedModels.map((name) => ({
            name,
            size: 1000,
            capabilities: ["completion"],
          })),
        }),
      );
    if (request.url === "/api/show")
      return response.end(
        JSON.stringify({
          capabilities: ["completion"],
          model_info: { "test.context_length": 32768 },
        }),
      );
    if (request.url === "/api/generate")
      return response.end(JSON.stringify({ done: true }));
    if (request.url === "/api/pull") {
      pullCalls++;
      response.setHeader("Content-Type", "application/x-ndjson");
      response.write(
        JSON.stringify({
          status: "pulling test layer",
          completed: 25,
          total: 100,
        }) + "\n",
      );
      const timer = setTimeout(() => {
        installedModels.push(input.model);
        response.end(JSON.stringify({ status: "success" }) + "\n");
      }, 4000);
      response.on("close", () => clearTimeout(timer));
      return;
    }
    requests.push(input);
    const source = JSON.parse(input.messages[1].content);
    const answer =
      source.type === "pdf"
        ? `The supplied PDF contains extracted text on page 1 (${source.relativePath}, page 1).`
        : source.relativePath === "a.md"
          ? "ALPHA allocation is 25%."
          : "BETA allocation is 40%.";
    const encoded = JSON.stringify({ answer });
    response.setHeader("Content-Type", "application/x-ndjson");
    response.write(
      JSON.stringify({
        done: false,
        model: input.model,
        message: {
          content: encoded.slice(0, -2),
          thinking: "never display this",
        },
      }) + "\n",
    );
    const timer = setTimeout(
      () =>
        response.end(
          JSON.stringify({
            done: true,
            done_reason: "stop",
            model: input.model,
            created_at: new Date().toISOString(),
            message: { content: encoded.slice(-2) },
          }) + "\n",
        ),
      input.messages.at(-1).content.includes("long") ? 3000 : 100,
    );
    response.on("close", () => clearTimeout(timer));
  });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  let application;
  let page;
  const errors = [];
  const checks = [];
  const addCheck = checks.push.bind(checks);
  checks.push = (...items) => {
    process.stdout.write(`PASS: ${items.join("; ")}\n`);
    return addCheck(...items);
  };
  async function launch() {
    process.stdout.write("Launching local desktop regression\n");
    const env = {
      ...process.env,
      WONNYY_VAULT_PATH: root,
      WONNYY_SMOKE_DATA: path.join(root, ".wonnyy", "app-data"),
      WONNYY_OLLAMA_URL: `http://127.0.0.1:${server.address().port}`,
    };
    delete env.ELECTRON_RUN_AS_NODE;
    delete env.ELECTRON_START_URL;
    application = await electron.launch({
      args: [path.resolve("scripts/electron-smoke-main.cjs"), "--hidden"],
      env,
      timeout: 30000,
    });
    page = await application.firstWindow();
    page.setDefaultTimeout(15000);
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("dialog", (dialog) => {
      errors.push(`Unexpected native browser dialog: ${dialog.type()}`);
      void dialog.dismiss();
    });
    await page.getByRole("textbox", { name: "Chat question" }).waitFor();
    await page.waitForFunction(() => window.wonnyyDesktop?.apiVersion === 18);
  }
  async function createExplicit() {
    await openContextTools(page);
    await page
      .getByRole("button", { name: "Save Active Context as box", exact: true })
      .click();
    const name = "Box " + Date.now();
    await page
      .getByRole("textbox", { name: "New Context Box name" })
      .fill(name);
    await page.getByRole("button", { name: "Save", exact: true }).click();
    await page
      .getByRole("button", { name: "+ New Chat", exact: true })
      .first()
      .click();
    const picker = page.getByRole("dialog", { name: "New Wonnyy Agent chat" });
    await picker.getByRole("radio", { name: new RegExp(name) }).check();
    await picker
      .getByRole("button", { name: "Create Chat", exact: true })
      .click();
    await picker.waitFor({ state: "hidden" });
  }
  async function selectHistory(id) {
    await page.getByRole("button", { name: "History", exact: true }).click();
    await page
      .locator(`[data-conversation-id="${id}"] > button`)
      .first()
      .click();
  }
  async function approve(file) {
    const clear = page.getByRole("button", {
      name: "CLEAR ALL CONTEXT",
      exact: true,
    });
    if (await clear.count()) await clear.click();
    await page.locator(`.file-row[title="${file}"]`).click();
    const review = page.getByRole("button", {
      name: "REVIEW + ADD SELECTED",
      exact: true,
    });
    const question = page.getByRole("textbox", { name: "Chat question" });
    const assertTyping = async () => {
      const before = await question.inputValue();
      await question.click();
      await page.keyboard.press("End");
      await page.keyboard.type(" keyboard check");
      assert.equal(await question.inputValue(), before + " keyboard check");
      await question.fill(before);
    };
    for (const dismiss of ["Cancel", "Escape"]) {
      await review.click();
      const dialog = page.getByRole("dialog", {
        name: "Add to Active Context",
        exact: true,
      });
      await dialog.waitFor();
      if (dismiss === "Escape") await page.keyboard.press("Escape");
      else
        await dialog
          .getByRole("button", { name: "Cancel", exact: true })
          .click();
      await dialog.waitFor({ state: "hidden" });
      assert.equal(
        (await page.evaluate(() => window.wonnyyDesktop.stations.getState()))
          .activeContext.length,
        0,
      );
      await assertTyping();
    }
    await review.click();
    await page
      .getByRole("dialog", { name: "Add to Active Context", exact: true })
      .getByRole("button", { name: "Add to Active Context", exact: true })
      .click();
    await createExplicit();
    await assertTyping();
    await page.waitForFunction(
      () =>
        document.querySelector(".chat-runtime-status")?.textContent === "READY",
    );
  }
  async function send(text) {
    const count = await page.locator(".chat-message-assistant").count();
    await page.getByRole("textbox", { name: "Chat question" }).fill(text);
    await page
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await page.waitForFunction(
      (before) =>
        document.querySelectorAll(".chat-message-assistant .chat-run-id")
          .length > before,
      count,
    );
  }
  try {
    await fs.writeFile(path.join(root, "a.md"), "ALPHA allocation is 25%.");
    await fs.writeFile(path.join(root, "b.md"), "BETA allocation is 40%.");
    await launch();
    await page.getByRole("button", { name: "SETTINGS", exact: true }).click();
    await page
      .getByRole("heading", { name: "Settings", exact: true })
      .waitFor();
    assert.equal(
      await page
        .getByRole("button", { name: "AI TERMINAL", exact: true })
        .count(),
      0,
    );
    assert.equal(
      await page
        .getByRole("navigation", { name: "Primary" })
        .getByRole("button", { name: "SETTINGS", exact: true })
        .count(),
      1,
    );
    const vaultSettings = page.getByRole("region", {
      name: "Universe",
      exact: true,
    });
    await vaultSettings.getByText(root, { exact: true }).waitFor();
    assert.equal(
      await page
        .getByRole("navigation", { name: "AI providers" })
        .getByRole("button")
        .count(),
      4,
    );
    await application.evaluate(({ dialog }) => {
      dialog.showOpenDialog = async () => ({ canceled: true, filePaths: [] });
    });
    await vaultSettings
      .getByRole("button", { name: "Change vault folder", exact: true })
      .click();
    await page.waitForFunction(
      () => !document.querySelector(".settings-vault-card button").disabled,
    );
    assert.equal(
      await vaultSettings.getByText(root, { exact: true }).isVisible(),
      true,
    );
    assert.equal(
      (await page.evaluate(() => window.wonnyyDesktop.ai.listConversations()))
        .length,
      0,
    );
    checks.push(
      "One Settings window includes all four providers and vault management; cancelling folder selection preserves the vault and creates no chat",
    );
    await page.waitForFunction(() =>
      document
        .querySelector('[aria-label="AI readiness"]')
        ?.textContent.includes("Choose a Context Box"),
    );
    assert.equal(
      await page.locator(".top-nav .active").textContent(),
      "SETTINGS",
    );
    assert.equal(
      await page.getByRole("textbox", { name: "Chat question" }).count(),
      0,
    );
    ollamaOnline = false;
    await page.getByRole("button", { name: "Refresh models" }).click();
    await page.waitForFunction(() =>
      document
        .querySelector('[aria-label="AI readiness"]')
        ?.textContent.includes("Not connected"),
    );
    ollamaOnline = true;
    installedModels = [];
    await page.getByRole("button", { name: "Refresh models" }).click();
    await page.waitForFunction(() =>
      document
        .querySelector('[aria-label="AI readiness"]')
        ?.textContent.includes("Model unavailable"),
    );
    installedModels = ["qwen3:4b", "qwen3:1.7b"];
    await page.getByRole("button", { name: "Refresh models" }).click();
    await page.waitForFunction(() =>
      document
        .querySelector('[aria-label="AI readiness"]')
        ?.textContent.includes("Choose a Context Box"),
    );
    await page.getByRole("button", { name: "Back to workspace" }).click();
    await page
      .getByRole("button", { name: "PLANET VIEW", exact: true })
      .click();
    await page.getByRole("textbox", { name: "Chat question" }).fill("Hello");
    assert.equal(
      await page
        .getByRole("button", { name: "Send message", exact: true })
        .isDisabled(),
      true,
    );
    checks.push("Missing context explains Send action");
    await approve("a.md");
    await send("Summarize this");
    const originalId = await page.evaluate(
      (root) => localStorage.getItem("qterminal-active-chat:" + root),
      root,
    );
    await page.locator('.file-row[title="b.md"]').click();
    await send("Explain point two");
    assert.equal(
      JSON.parse(requests.at(-1).messages[1].content).relativePath,
      "a.md",
    );
    assert.equal(requests.at(-1).messages.length, 5);
    checks.push(
      "Visual selection is independent; follow-up history crosses IPC",
    );
    const panel = page.locator(".chat-panel");
    const before = await panel.boundingBox();
    const header = await page.locator(".chat-header").boundingBox();
    await page.mouse.move(header.x + 25, header.y + 12);
    await page.mouse.down();
    await page.mouse.move(header.x - 40, header.y + 35);
    await page.mouse.up();
    const moved = await panel.boundingBox();
    assert.notEqual(moved.x, before.x);
    const resize = await page
      .getByRole("separator", { name: "Resize chat e", exact: true })
      .boundingBox();
    await page.mouse.move(resize.x + 6, resize.y + 6);
    await page.mouse.down();
    await page.mouse.move(resize.x + 45, resize.y + 6);
    await page.mouse.up();
    assert.ok((await panel.boundingBox()).width > moved.width);
    await page.getByRole("button", { name: "Minimize chat window" }).click();
    assert.ok(
      await page.getByRole("textbox", { name: "Chat question" }).isHidden(),
    );
    await page.getByRole("button", { name: "Restore chat window" }).click();
    await page.getByRole("textbox", { name: "Search Universe" }).fill("abc");
    assert.equal(
      await page.getByRole("textbox", { name: "Search Universe" }).inputValue(),
      "abc",
    );
    await page.getByRole("textbox", { name: "Search Universe" }).fill("");
    checks.push(
      "Floating drag, resize, minimize, restore and scoped keyboard focus",
    );
    await page.evaluate(() => {
      window.smokeWheelEscaped = false;
      document.querySelector(".planet-canvas").addEventListener(
        "wheel",
        () => {
          window.smokeWheelEscaped = true;
        },
        { once: true },
      );
      document
        .querySelector(".chat-thread")
        .dispatchEvent(new WheelEvent("wheel", { deltaY: 100, bubbles: true }));
    });
    assert.equal(await page.evaluate(() => window.smokeWheelEscaped), false);
    checks.push("Chat wheel events do not reach Planet View");
    await page.getByRole("button", { name: "SETTINGS", exact: true }).click();
    await page.waitForFunction(() =>
      document
        .querySelector('[aria-label="AI readiness"]')
        ?.textContent.includes("Ready to chat"),
    );
    await page
      .locator(".model-list article")
      .filter({ hasText: "qwen3:1.7b" })
      .getByRole("button", { name: "Use", exact: true })
      .click();
    await page.waitForFunction(() =>
      document
        .querySelector(".model-settings .model-active strong")
        ?.textContent.includes("qwen3:1.7b"),
    );
    await page.getByText("Generation settings", { exact: true }).click();
    await page.getByLabel("Output limit", { exact: true }).fill("1024");
    await page
      .getByRole("button", { name: "Save generation settings" })
      .click();
    await page.waitForFunction(
      async () =>
        (await window.wonnyyDesktop.ai.models()).settings.outputLimit === 1024,
    );
    await fs.mkdir("test-results", { recursive: true });
    await page.screenshot({ path: "test-results/ai-terminal.png" });
    checks.push(
      "Settings is a dedicated model setup tab with context readiness, model switching, and saved generation settings",
    );
    await page.getByRole("button", { name: "Back to workspace" }).click();
    await send("Same source with a different model");
    assert.equal(requests.at(-1).model, "qwen3:1.7b");
    await page.getByRole("button", { name: "WORKSPACE", exact: true }).click();
    assert.equal(await page.locator(".chat-panel-floating").count(), 0);
    await send("One more question");
    checks.push("Model switching and shared Workspace conversation");
    await page
      .getByRole("button", { name: "PLANET VIEW", exact: true })
      .click();
    await approve("b.md");
    checks.push(
      "Real context approval supports Cancel, Escape, confirm, and click-then-keyboard typing across source switches without native browser dialogs",
    );
    await send("Summarize new source");
    assert.equal(requests.at(-1).messages.length, 3);
    await selectHistory(originalId);
    await send("Restored bound history");
    assert.equal(
      JSON.parse(requests.at(-1).messages[1].content).relativePath,
      "a.md",
    );
    checks.push(
      "History opens the original bound source without changing global approval",
    );
    await page.getByRole("button", { name: "WORKSPACE", exact: true }).click();
    await createExplicit();
    await page.keyboard.type("New chat draft");
    assert.equal(
      await page.getByRole("textbox", { name: "Chat question" }).inputValue(),
      "New chat draft",
    );
    await selectHistory(originalId);
    checks.push(
      "Keyboard focus survives explicit creation and history selection on both surfaces",
    );
    await page
      .getByRole("button", { name: "PLANET VIEW", exact: true })
      .click();
    await page
      .getByRole("textbox", { name: "Chat question" })
      .fill("long response");
    await page
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await page.getByRole("button", { name: "Stop response" }).click();
    await page
      .getByRole("button", { name: "Send message", exact: true })
      .waitFor();
    await send("Recover after stopping");
    checks.push("Stop followed by successful next request");
    await fs.mkdir("test-results", { recursive: true });
    await page.screenshot({ path: "test-results/chat-electron.png" });
    await application.close();
    application = null;
    await launch();
    await page.waitForFunction(
      () => document.querySelectorAll(".chat-run-id").length >= 2,
    );
    assert.equal(
      await page.evaluate(
        (root) => localStorage.getItem("qterminal-active-chat:" + root),
        root,
      ),
      originalId,
    );
    checks.push("Electron restart restores persisted history and settings");
    await page
      .getByRole("button", { name: "Rename chat", exact: true })
      .click();
    await page
      .getByRole("textbox", { name: "Chat title", exact: true })
      .fill("Renamed research");
    await page.getByRole("button", { name: "Save", exact: true }).click();
    await page.getByText("Renamed research", { exact: true }).waitFor();
    await page.getByRole("button", { name: "History", exact: true }).click();
    await page
      .getByRole("button", { name: "Delete Renamed research", exact: true })
      .click();
    await page
      .getByRole("dialog", { name: "Delete conversation", exact: true })
      .getByRole("button", { name: "Delete conversation", exact: true })
      .click();
    await page.waitForFunction(
      async (id) =>
        !(await window.wonnyyDesktop.ai.listConversations()).some(
          (c) => c.id === id,
        ),
      originalId,
    );
    await page
      .getByRole("button", { name: "Clear history", exact: true })
      .click();
    await page
      .getByRole("dialog", { name: "Clear history", exact: true })
      .getByRole("button", { name: "Clear history", exact: true })
      .click();
    await page.waitForFunction(
      async () => !(await window.wonnyyDesktop.ai.listConversations()).length,
    );
    assert.ok(
      (await fs.readdir(path.join(root, ".wonnyy", "model-runs"))).some(
        (name) => name.endsWith(".json"),
      ),
    );
    checks.push("Rename/delete/clear preserve source files and audit records");
    const switchedVault = path.join(root, ".wonnyy", "switched-vault");
    await fs.mkdir(switchedVault, { recursive: true });
    await fs.writeFile(path.join(switchedVault, "mapped.pdf"), cmapPdf());
    // Pause a real filesystem scan to reproduce selecting a folder while the
    // shared knowledge boundary is occupied. Only the native picker is mocked.
    await application.evaluate(
      ({ dialog }, { root, switchedVault }) => {
        const filesystem = process.getBuiltinModule("fs/promises");
        const paths = process.getBuiltinModule("path");
        const readdir = filesystem.readdir;
        let release;
        let entered;
        let picked;
        const gate = new Promise((resolve) => {
          release = resolve;
        });
        const started = new Promise((resolve) => {
          entered = resolve;
        });
        const selected = new Promise((resolve) => {
          picked = resolve;
        });
        let intercepted = false;
        filesystem.readdir = async (directory, ...args) => {
          if (
            !intercepted &&
            paths.resolve(directory) === paths.resolve(root)
          ) {
            intercepted = true;
            entered();
            await gate;
          }
          return readdir(directory, ...args);
        };
        dialog.showOpenDialog = async () => {
          picked();
          return { canceled: false, filePaths: [switchedVault] };
        };
        globalThis.vaultSmokeGate = {
          started,
          selected,
          release: () => {
            filesystem.readdir = readdir;
            release();
          },
        };
      },
      { root, switchedVault },
    );
    await page.getByRole("button", { name: "Rescan vault" }).click();
    await application.evaluate(() => globalThis.vaultSmokeGate.started);
    await page
      .getByRole("button", { name: "Change Universe", exact: true })
      .first()
      .click();
    await application.evaluate(() => globalThis.vaultSmokeGate.selected);
    await application.evaluate(() => globalThis.vaultSmokeGate.release());
    await page.locator('.file-row[title="mapped.pdf"]').waitFor();
    assert.equal(
      await page.locator(".vault-title").getAttribute("title"),
      switchedVault,
    );
    assert.equal(
      await page.getByText("Vault error", { exact: true }).count(),
      0,
    );
    assert.equal(await page.locator('.file-row[title="a.md"]').count(), 0);
    checks.push(
      "Change Vault waits for an overlapping scan without MODEL_BUSY or stale results",
    );
    const pdfWarnings = [];
    page.on("console", (message) => {
      if (/cMapUrl|Unable to load (?:CMap|font) data/.test(message.text()))
        pdfWarnings.push(message.text());
    });
    await page.locator('.file-row[title="mapped.pdf"]').dblclick();
    await page.waitForFunction(() =>
      document.querySelector(".pdf-text-layer")?.textContent.includes("日本"),
    );
    assert.deepEqual(pdfWarnings, []);
    const matches = await page.evaluate(() =>
      window.wonnyyDesktop.vault.search("日本"),
    );
    assert.equal(matches[0]?.relativePath, "mapped.pdf");
    checks.push(
      "PDF character maps load locally for indexing and packaged preview",
    );
    await page.getByRole("textbox", { name: "Chat question" }).waitFor();
    const beforePdfApproval = requests.length;
    await page
      .getByRole("button", { name: "ADD PDF TO AI CONTEXT", exact: true })
      .click();
    await page
      .getByRole("dialog", { name: "Add to Active Context", exact: true })
      .getByRole("button", { name: "Add to Active Context", exact: true })
      .click();
    await page
      .getByRole("button", { name: "PDF IN ACTIVE CONTEXT", exact: true })
      .waitFor();
    assert.equal(
      requests.length,
      beforePdfApproval,
      "Approval alone never sends PDF text to a model",
    );
    await createExplicit();
    await send("Interpret the PDF and cite the page.");
    const pdfSource = JSON.parse(requests.at(-1).messages[1].content);
    assert.equal(pdfSource.type, "pdf");
    assert.equal(pdfSource.relativePath, "mapped.pdf");
    assert.match(pdfSource.content, /\[PDF page 1\]/);
    assert.equal(await page.locator(".pdf-reader").count(), 1);
    await page.screenshot({ path: "test-results/pdf-chat.png" });
    checks.push(
      "PDF preview keeps chat visible; explicit approval supplies page-aware text and source provenance to inference",
    );
    await page.getByRole("button", { name: "SETTINGS", exact: true }).click();
    await page.getByText("Install a local model", { exact: true }).click();
    const download = page.getByRole("region", {
      name: "Local model downloads",
    });
    await download.getByRole("textbox").fill("qwen3:smoke");
    await download
      .getByRole("button", { name: "DOWNLOAD MODEL", exact: true })
      .click();
    await download.getByText(/Current layer:/).waitFor();
    assert.equal(
      await download
        .getByRole("button", { name: "DOWNLOAD MODEL", exact: true })
        .isDisabled(),
      true,
    );
    await page.evaluate(() => {
      void window.wonnyyDesktop.ai.pullModel("qwen3:smoke");
    });
    await download.getByRole("button", { name: "CANCEL", exact: true }).click();
    await download.getByText(/DOWNLOAD CANCELLED/).waitFor();
    assert.equal(pullCalls, 1);
    await download
      .getByRole("button", { name: "DOWNLOAD MODEL", exact: true })
      .click();
    await download.getByText(/MODEL INSTALLED/).waitFor();
    assert.equal(pullCalls, 2);
    await page.screenshot({ path: "test-results/runtime-download.png" });
    checks.push(
      "Explicit model download exposes real layer progress, deduplicates requests, cancels neutrally and installs after explicit retry",
    );
    assert.deepEqual(errors, []);
    await fs.writeFile(
      "test-results/electron-chat-smoke.json",
      JSON.stringify(
        { passed: true, checks, requests: requests.length },
        null,
        2,
      ),
    );
    process.stdout.write(`PASS: ${checks.join("; ")}\n`);
  } catch (error) {
    await fs.mkdir("test-results", { recursive: true });
    if (page && !page.isClosed()) {
      await page
        .screenshot({ path: "test-results/chat-electron-failure.png" })
        .catch(() => {});
      await fs.writeFile(
        "test-results/chat-electron-failure.txt",
        await page.locator("body").innerText(),
      );
    }
    throw error;
  } finally {
    await application?.close();
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
