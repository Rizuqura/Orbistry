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
    path.join(os.tmpdir(), "orbistry-electron-smoke-"),
  );
  const requests = [];
  let ollamaOnline = true;
  let installedModels = ["qwen3:4b", "qwen3:1.7b"];
  let pullCalls = 0;
  let failNextAnswer = false;
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
    if (failNextAnswer) {
      failNextAnswer = false;
      response.statusCode = 400;
      return response.end(
        JSON.stringify({
          error: "Synthetic provider failure; retry explicitly.",
        }),
      );
    }
    const source = JSON.parse(input.messages[1].content);
    const answer = input.messages.at(-1).content.includes("Who is the CEO?")
      ? "CONTEXT INSUFFICIENT: Insufficient evidence in the active context. No CEO is identified."
      : source.type === "pdf"
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
      ORBISTRY_VAULT_PATH: root,
      ORBISTRY_SMOKE_DATA: path.join(root, ".wonnyy", "app-data"),
      ORBISTRY_OLLAMA_URL: `http://127.0.0.1:${server.address().port}`,
    };
    delete env.ELECTRON_RUN_AS_NODE;
    delete env.ELECTRON_START_URL;
    application = await electron.launch({
      args: [
        path.resolve("scripts/electron-smoke-main.cjs"),
        "--hidden",
        "--disable-gpu",
      ],
      env,
      timeout: 30000,
    });
    page = await application.firstWindow();
    page.setDefaultTimeout(15000);
    page.on("pageerror", (error) => {
      errors.push(error.message);
      console.error("PAGE ERROR", error);
    });
    page.on("dialog", (dialog) => {
      errors.push(`Unexpected native browser dialog: ${dialog.type()}`);
      void dialog.dismiss();
    });
    await page.getByRole("textbox", { name: "Chat question" }).waitFor();
    await page.waitForFunction(() => window.orbistryDesktop?.apiVersion === 18);
  }
  const panel = () =>
    page.getByRole("complementary", { name: "Orbistry Agent", exact: true });
  const countChats = () =>
    page
      .evaluate(() => window.orbistryDesktop.ai.listConversations())
      .then((list) => list.length);
  async function approve(file) {
    await page.locator(`.file-row[title="${file}"]`).click();
    await page
      .getByRole("button", { name: "REVIEW + ADD SELECTED", exact: true })
      .click();
    await page
      .getByRole("dialog", { name: "Add to Active Context", exact: true })
      .getByRole("button", { name: "Add to Active Context", exact: true })
      .click();
  }
  async function createChat(name) {
    await panel()
      .getByRole("button", { name: "+ New Chat", exact: true })
      .first()
      .click();
    const picker = page.getByRole("dialog", { name: "New Orbistry Agent chat" });
    await picker.getByRole("radio", { name: new RegExp(name) }).check();
    await picker
      .getByRole("button", { name: "Create Chat", exact: true })
      .dblclick();
    await picker.waitFor({ state: "hidden" });
  }
  async function send(text) {
    const count = await panel().locator(".chat-message-assistant").count();
    await panel().getByRole("textbox", { name: "Chat question" }).fill(text);
    await panel()
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await page.waitForFunction(
      (before) =>
        document.querySelectorAll(".chat-message-assistant .chat-run-id")
          .length > before,
      count,
    );
  }
  async function geometry() {
    return panel().boundingBox();
  }
  try {
    await fs.writeFile(path.join(root, "a.md"), "ALPHA allocation is 25%.");
    await fs.writeFile(path.join(root, "b.md"), "BETA allocation is 40%.");
    if (process.argv.includes("--empty-source"))
      await fs.writeFile(path.join(root, "empty.md"), "");
    if (process.argv.includes("--context-boxes")) {
      for (const name of ["c", "d", "e"])
        await fs.writeFile(
          path.join(root, name + ".md"),
          "Supporting research.",
        );
      await fs.writeFile(
        path.join(root, "unsupported.txt"),
        "Never documentary evidence.",
      );
    }
    await launch();
    await page.evaluate(() => {
      window.agentErrorEvents = [];
      window.orbistryDesktop.ai.onEvent((event) => {
        if (event.error)
          window.agentErrorEvents.push({
            state: event.state,
            error: event.error,
            requestId: event.requestId,
          });
      });
    });
    if (process.argv.includes("--empty-source")) {
      const box = await page.evaluate(async () =>
        window.orbistryDesktop.ai.editContextBox({
          action: "create",
          name: "Mixed readable sources",
          paths: ["a.md", "empty.md"],
        }),
      );
      await createChat(box.name);
      await send("Summarize this source.");
      const conversation = (
        await page.evaluate(() => window.orbistryDesktop.ai.listConversations())
      )[0];
      assert.equal(conversation.messages.length, 2);
      assert.deepEqual(
        conversation.messages[1].sources.map((source) => source.relativePath),
        ["a.md", "empty.md"],
      );
      assert.equal(JSON.parse(requests[0].messages[2].content).content, "");
      assert.deepEqual(errors, []);
      await fs.mkdir("test-results", { recursive: true });
      await fs.writeFile(
        "test-results/empty-source-electron.json",
        JSON.stringify(
          {
            passed: true,
            sourceCount: conversation.messages[1].sources.length,
            requests: requests.length,
          },
          null,
          2,
        ),
      );
      checks.push(
        "Empty source alongside readable evidence no longer raises invalid content; answer retains both verified source references",
      );
      return;
    }
    if (process.argv.includes("--station-boxes")) {
      const manager = page.getByRole("region", {
        name: "Context Box Manager",
        exact: true,
      });
      async function save(name) {
        await manager
          .getByRole("button", { name: "CREATE CONTEXT BOX", exact: true })
          .click();
        await manager
          .getByLabel("Context Box name", { exact: true })
          .fill(name);
        await manager
          .getByLabel("Context Box name", { exact: true })
          .press("Enter");
        await manager
          .locator(".context-manager-box-row")
          .filter({ hasText: name })
          .waitFor();
      }
      async function files(expected) {
        await page.waitForFunction((names) => {
          const actual = [...document.querySelectorAll(".pnode.pfile")]
            .map((node) =>
              node.getAttribute("aria-label").replace("File: ", ""),
            )
            .sort();
          return JSON.stringify(actual) === JSON.stringify(names);
        }, expected.slice().sort());
      }
      await approve("a.md");
      await save("Alpha collection");
      await approve("b.md");
      await save("Combined collection");
      await page
        .getByPlaceholder("New Station", { exact: true })
        .fill("Legacy Beta");
      await page
        .getByPlaceholder("New Station", { exact: true })
        .press("Enter");
      const legacy = page
        .locator(".station-row")
        .filter({ hasText: "Legacy Beta" });
      await legacy.locator(".station-assign").click();
      await manager
        .getByRole("button", {
          name: "Filter Alpha collection on Planet",
          exact: true,
        })
        .click();
      await files(["a.md"]);
      await legacy.locator(".station-filter").click();
      await files(["a.md", "b.md"]);
      await page.getByRole("button", { name: "ALL", exact: true }).click();
      await files([]);
      await manager
        .getByRole("button", {
          name: "Filter Alpha collection on Planet",
          exact: true,
        })
        .click();
      await files(["b.md"]);
      await manager
        .getByRole("button", {
          name: "Filter Combined collection on Planet",
          exact: true,
        })
        .click();
      await files(["b.md"]);
      await legacy.locator(".station-filter").click();
      await files(["a.md", "b.md"]);
      await manager
        .getByRole("button", {
          name: "Filter Combined collection on Planet",
          exact: true,
        })
        .click();
      await files(["a.md", "b.md"]);
      assert.equal(await countChats(), 0);
      assert.equal(requests.length, 0);
      const persisted = await page.evaluate(() =>
        window.orbistryDesktop.stations.getState(),
      );
      assert.equal(
        persisted.stations.length,
        1,
        "box filters never create duplicate persisted Stations",
      );
      await createChat("Alpha collection");
      await manager
        .getByRole("button", {
          name: "Filter Combined collection on Planet",
          exact: true,
        })
        .click();
      await send("Summarize this source.");
      assert.equal(
        JSON.parse(requests.at(-1).messages[1].content).relativePath,
        "a.md",
      );
      assert.doesNotMatch(JSON.stringify(requests.at(-1).messages), /BETA/);
      assert.deepEqual(errors, []);
      await fs.mkdir("test-results", { recursive: true });
      await page.screenshot({ path: "test-results/station-box-electron.png" });
      await fs.writeFile(
        "test-results/station-box-electron.json",
        JSON.stringify(
          {
            passed: true,
            legacyStationCount: persisted.stations.length,
            boxes: 2,
            requests: requests.length,
          },
          null,
          2,
        ),
      );
      checks.push(
        "Context Boxes and legacy Stations share ANY/ALL filters; toggling off restores Planet View, creates no chats or duplicate collections, and never rebinds an existing chat",
      );
      return;
    }
    if (process.argv.includes("--context-manager")) {
      const manager = page.getByRole("region", {
        name: "Context Box Manager",
        exact: true,
      });
      await manager.getByText("CONTEXT BOXES", { exact: true }).waitFor();
      assert.equal(
        await manager
          .getByRole("button", { name: "BUILD PACKAGE", exact: true })
          .count(),
        0,
      );
      await approve("a.md");
      const tokens = Math.ceil(
        (await fs.readFile(path.join(root, "a.md"), "utf8")).length / 4,
      );
      await manager
        .locator(".context-token-estimate")
        .filter({ hasText: `~${tokens}` })
        .waitFor();
      await manager
        .getByRole("button", { name: "CREATE CONTEXT BOX", exact: true })
        .click();
      await manager
        .getByLabel("Context Box name", { exact: true })
        .fill("Cancelled box");
      await page.keyboard.press("Escape");
      assert.equal(
        (await page.evaluate(() => window.orbistryDesktop.ai.listContextBoxes()))
          .length,
        0,
      );
      await manager
        .getByRole("button", { name: "CREATE CONTEXT BOX", exact: true })
        .click();
      await manager
        .getByLabel("Context Box name", { exact: true })
        .fill("Managed research");
      await manager
        .getByLabel("Context Box name", { exact: true })
        .press("Enter");
      const saved = manager
        .locator(".context-manager-boxes button")
        .filter({ hasText: "Managed research" });
      await saved.filter({ hasText: `~${tokens} est. tokens` }).waitFor();
      assert.equal(await countChats(), 0);
      const boxes = await page.evaluate(() =>
        window.orbistryDesktop.ai.listContextBoxes(),
      );
      assert.equal(boxes.length, 1);
      assert.deepEqual(
        boxes[0].items.map((item) => item.relativePath),
        ["a.md"],
      );
      await saved.click();
      const details = page.locator(".context-box-dialog[open]");
      await details
        .getByText(`~${tokens} estimated readable source tokens`, {
          exact: true,
        })
        .waitFor();
      await details.getByRole("button", { name: "Close", exact: true }).click();
      await fs.mkdir("test-results", { recursive: true });
      await page.screenshot({ path: "test-results/context-box-manager.png" });
      assert.deepEqual(errors, []);
      await fs.writeFile(
        "test-results/context-box-manager.json",
        JSON.stringify(
          {
            passed: true,
            estimatedSourceTokens: tokens,
            chats: await countChats(),
            savedSources: boxes[0].items.map((item) => item.relativePath),
          },
          null,
          2,
        ),
      );
      checks.push(
        "Context Box Manager creates a named box from reviewed context, shows draft/saved token estimates, supports Escape and opens box details without creating a chat",
      );
      return;
    }
    if (process.argv.includes("--context-boxes")) {
      const sidebar = page.getByRole("region", {
        name: "Context Boxes",
        exact: true,
      });
      const boxDialog = () => page.locator(".context-box-dialog[open]");
      const boxes = () =>
        page.evaluate(() => window.orbistryDesktop.ai.listContextBoxes());
      const openLibrary = () =>
        page
          .getByRole("button", {
            name: "Open Context Box library",
            exact: true,
          })
          .click();
      const closeLibrary = () =>
        page
          .getByRole("button", { name: "Close library", exact: true })
          .click();
      for (const [index, name] of ["a", "b", "c", "d", "e"].entries())
        await page
          .locator(`.file-row[title="${name}.md"]`)
          .click({ modifiers: index ? ["Control"] : [] });
      await openLibrary();
      await sidebar
        .getByText("5 selected in Explorer / Planet View", { exact: true })
        .waitFor();
      await sidebar
        .getByRole("button", {
          name: "Create Context Box from Selection…",
          exact: true,
        })
        .click();
      await boxDialog()
        .getByText(/Review 5 supported files/)
        .waitFor();
      await fs.mkdir("test-results", { recursive: true });
      await page.screenshot({ path: "test-results/context-box-review.png" });
      await page.keyboard.press("Escape");
      assert.equal((await boxes()).length, 0);
      assert.equal(await countChats(), 0);
      assert.equal(requests.length, 0);
      if (process.argv.includes("--layout-only")) {
        await sidebar
          .getByRole("button", {
            name: "Create Context Box from Selection…",
            exact: true,
          })
          .click();
        await boxDialog()
          .getByText(/Review 5 supported files/)
          .waitFor();
        const bounds = await boxDialog().boundingBox(),
          viewport =
            page.viewportSize() ??
            (await page.evaluate(() => ({
              width: innerWidth,
              height: innerHeight,
            })));
        assert.ok(
          bounds.x > 10 && bounds.y > 10,
          "review modal is centered within the viewport",
        );
        assert.ok(
          bounds.x + bounds.width <= viewport.width &&
            bounds.y + bounds.height <= viewport.height,
        );
        await page.screenshot({ path: "test-results/context-box-review.png" });
        await page.keyboard.press("Escape");
        assert.equal((await boxes()).length, 0);
        assert.equal(await countChats(), 0);
        await fs.writeFile(
          "test-results/context-box-layout.json",
          JSON.stringify({ passed: true, bounds, viewport }, null, 2),
        );
        checks.push(
          "Final review modal centers inside the viewport; keyboard cancellation writes no box or chat",
        );
        return;
      }
      await sidebar
        .getByRole("button", {
          name: "Create Context Box from Selection…",
          exact: true,
        })
        .click();
      await boxDialog()
        .getByLabel("Context Box name", { exact: true })
        .fill("Five sources");
      await boxDialog()
        .getByRole("button", { name: "Create Context Box", exact: true })
        .dblclick();
      await boxDialog().waitFor({ state: "hidden" });
      assert.equal((await boxes()).length, 1);
      assert.equal((await boxes())[0].items.length, 5);
      assert.equal(await countChats(), 0);
      checks.push(
        "Five-file multiselection, Escape cancellation, duplicate submission protection and no implicit chats",
      );
      await sidebar.getByRole("button", { name: /Five sources/ }).click();
      await boxDialog()
        .getByRole("button", { name: "Rename Context Box", exact: true })
        .click();
      await boxDialog()
        .getByLabel("New name", { exact: true })
        .fill("Research renamed");
      await boxDialog().getByLabel("New name", { exact: true }).press("Enter");
      await boxDialog()
        .getByRole("heading", { name: "Research renamed", exact: true })
        .waitFor();
      await boxDialog()
        .locator("li")
        .last()
        .getByRole("button", { name: "Remove from box", exact: true })
        .click();
      await boxDialog()
        .getByText(/4 files.*4 readable/)
        .waitFor();
      await page.screenshot({ path: "test-results/context-box-details.png" });
      assert.equal(
        await fs.readFile(path.join(root, "e.md"), "utf8"),
        "Supporting research.",
      );
      await fs.rename(path.join(root, "d.md"), path.join(root, "moved.md"));
      await boxDialog()
        .getByRole("button", { name: "Refresh sources", exact: true })
        .click();
      const missing = boxDialog().locator("li").filter({ hasText: "d.md" });
      await missing.getByText(/Missing or unsupported/).waitFor();
      await missing
        .getByRole("button", { name: "Relink", exact: true })
        .click();
      await missing
        .getByLabel("Replacement vault-relative file path", { exact: true })
        .fill("moved.md");
      await missing
        .getByRole("button", { name: "Save replacement", exact: true })
        .click();
      await boxDialog()
        .getByText(/4 files.*4 readable/)
        .waitFor();
      await boxDialog()
        .getByRole("button", { name: "Attach to Orbistry Agent", exact: true })
        .click();
      assert.equal(await countChats(), 0);
      await panel()
        .getByRole("button", { name: "+ New Chat", exact: true })
        .first()
        .click();
      const picker = page.getByRole("dialog", {
        name: "New Orbistry Agent chat",
        exact: true,
      });
      assert.equal(
        await picker
          .getByRole("radio", { name: /Research renamed/ })
          .isChecked(),
        true,
      );
      await picker
        .getByRole("button", { name: "Create Chat", exact: true })
        .click();
      await picker.waitFor({ state: "hidden" });
      await send("Summarize this source.");
      const first = (
        await page.evaluate(() => window.orbistryDesktop.ai.listConversations())
      )[0];
      const firstEvidence = first.messages[1].sources;
      checks.push(
        "Rename, remove without file deletion, missing-file status, manual relink and explicit preselected chat creation",
      );
      await page.locator('.file-row[title="b.md"]').click();
      await openLibrary();
      await sidebar
        .getByRole("button", { name: "Add to Context Box…", exact: true })
        .click();
      await boxDialog()
        .getByLabel("Context Box destination", { exact: true })
        .selectOption((await boxes())[0].id);
      await boxDialog()
        .getByText(/1 already in this box/)
        .waitFor();
      await boxDialog()
        .getByRole("button", { name: "Add selected files", exact: true })
        .click();
      await boxDialog().waitFor({ state: "hidden" });
      assert.equal((await boxes())[0].items.length, 4);
      await sidebar
        .getByRole("button", {
          name: "Create Context Box from Selection…",
          exact: true,
        })
        .click();
      await boxDialog()
        .getByLabel("Context Box name", { exact: true })
        .fill("Research renamed");
      await boxDialog()
        .getByRole("button", { name: "Create Context Box", exact: true })
        .click();
      await boxDialog()
        .getByRole("alert")
        .filter({ hasText: /already exists/ })
        .waitFor();
      assert.equal(
        await boxDialog()
          .getByLabel("Context Box name", { exact: true })
          .inputValue(),
        "Research renamed",
      );
      assert.equal((await boxes()).length, 1);
      await boxDialog()
        .getByLabel("Context Box name", { exact: true })
        .fill("Beta only");
      await boxDialog()
        .getByRole("button", { name: "Create Context Box", exact: true })
        .click();
      await boxDialog().waitFor({ state: "hidden" });
      const beta = (await boxes()).find((box) => box.name === "Beta only");
      await closeLibrary();
      await openContextTools(page);
      await panel()
        .getByRole("combobox", {
          name: "Orbistry Agent Context Box",
          exact: true,
        })
        .selectOption(beta.id);
      await page
        .getByRole("dialog", { name: "Switch Context Box", exact: true })
        .getByRole("button", { name: "Cancel", exact: true })
        .click();
      assert.equal(
        (
          await page.evaluate(() => window.orbistryDesktop.ai.listConversations())
        )[0].contextBoxId,
        first.contextBoxId,
      );
      await panel()
        .getByRole("combobox", {
          name: "Orbistry Agent Context Box",
          exact: true,
        })
        .selectOption(beta.id);
      await page
        .getByRole("dialog", { name: "Switch Context Box", exact: true })
        .getByRole("button", { name: "Switch Context Box", exact: true })
        .click();
      await page.waitForFunction(
        (id) =>
          document.querySelector('[aria-label="Orbistry Agent Context Box"]')
            ?.value === id,
        beta.id,
      );
      await send("Summarize this source.");
      assert.doesNotMatch(JSON.stringify(requests.at(-1).messages), /ALPHA/);
      assert.equal(
        requests
          .at(-1)
          .messages.filter((message) => message.role === "assistant").length,
        0,
      );
      const second = (
        await page.evaluate(() => window.orbistryDesktop.ai.listConversations())
      )[0];
      assert.deepEqual(second.messages[1].sources, firstEvidence);
      assert.equal(second.messages[3].contextBox.id, beta.id);
      await fs.writeFile(
        path.join(root, "b.md"),
        "BETA allocation is 40%. Fresh updated content.",
      );
      await send("Summarize this source.");
      const third = (
        await page.evaluate(() => window.orbistryDesktop.ai.listConversations())
      )[0];
      assert.notEqual(
        third.messages[5].sources[0].contentHash,
        third.messages[3].sources[0].contentHash,
      );
      assert.match(
        JSON.stringify(requests.at(-1).messages),
        /Fresh updated content/,
      );
      checks.push(
        "Duplicate membership skipped; explicit switch cancellation and confirmation; latest file contents with immutable per-turn evidence",
      );
      const retryContent =
        "BETA allocation is 40%. Another source version before provider failure.";
      await fs.writeFile(path.join(root, "b.md"), retryContent);
      failNextAnswer = true;
      await panel()
        .getByRole("textbox", { name: "Chat question" })
        .fill("Summarize the updated source.");
      await panel()
        .getByRole("button", { name: "Send message", exact: true })
        .click();
      await panel()
        .getByRole("button", { name: "Retry", exact: true })
        .waitFor();
      await panel().getByRole("button", { name: "Retry", exact: true }).click();
      await page.waitForFunction(
        () =>
          document.querySelectorAll(".chat-message-assistant .chat-run-id")
            .length === 4,
      );
      const retried = (
        await page.evaluate(() => window.orbistryDesktop.ai.listConversations())
      )[0];
      assert.equal(retried.messages.length, 8);
      assert.equal(
        retried.attempts.at(-1).userMessageId,
        retried.attempts.at(-2).userMessageId,
      );
      assert.notEqual(
        retried.messages[7].sources[0].contentHash,
        retried.messages[5].sources[0].contentHash,
      );
      checks.push(
        "Provider failure after a file update retains the new manifest; explicit retry succeeds without duplicate user messages",
      );
      await openLibrary();
      await sidebar.getByRole("button", { name: /Beta only/ }).click();
      await boxDialog()
        .getByRole("button", { name: "Delete Context Box", exact: true })
        .click();
      await page
        .getByRole("dialog", { name: "Delete Context Box", exact: true })
        .getByRole("button", { name: "Cancel", exact: true })
        .click();
      assert.equal((await boxes()).length, 2);
      await boxDialog()
        .getByRole("button", { name: "Delete Context Box", exact: true })
        .click();
      await page
        .getByRole("dialog", { name: "Delete Context Box", exact: true })
        .getByRole("button", { name: "Delete Context Box", exact: true })
        .click();
      await boxDialog().waitFor({ state: "hidden" });
      await page.waitForFunction(
        () => document.querySelector('[aria-label="Send message"]')?.disabled,
      );
      assert.equal(await countChats(), 1);
      assert.equal(
        await fs.readFile(path.join(root, "b.md"), "utf8"),
        retryContent,
      );
      await application.close();
      application = null;
      await launch();
      await openLibrary();
      await page
        .getByRole("region", { name: "Context Boxes", exact: true })
        .getByRole("button", { name: /Research renamed/ })
        .waitFor();
      assert.equal(await countChats(), 1);
      assert.equal((await boxes())[0].items.length, 4);
      assert.equal(
        (
          await page.evaluate(() => window.orbistryDesktop.ai.listConversations())
        )[0].messages.length,
        8,
      );
      checks.push(
        "Confirmed box deletion preserves files and history, blocks sends, and persists across restart",
      );
      assert.deepEqual(errors, []);
      await fs.mkdir("test-results", { recursive: true });
      await page.screenshot({ path: "test-results/context-box-electron.png" });
      await fs.writeFile(
        "test-results/context-box-electron.json",
        JSON.stringify(
          {
            passed: true,
            transport: "synthetic Ollama",
            checks,
            requests: requests.length,
          },
          null,
          2,
        ),
      );
      return;
    }
    if (process.argv.includes("--deleted-source")) {
      await approve("a.md");
      await openContextTools(page);
      await panel()
        .getByRole("button", {
          name: "Save Active Context as box",
          exact: true,
        })
        .click();
      await panel()
        .getByRole("textbox", { name: "New Context Box name" })
        .fill("Deletion research");
      await panel().getByRole("button", { name: "Save", exact: true }).click();
      await createChat("Deletion research");
      await send("Summarize this source.");
      const before = requests.length;
      await fs.unlink(path.join(root, "a.md"));
      await panel()
        .getByRole("textbox", { name: "Chat question" })
        .fill("Summarize again.");
      await panel()
        .getByRole("button", { name: "Send message", exact: true })
        .click();
      await panel()
        .locator(".chat-notice")
        .filter({ hasText: /source is missing, unreadable or unsupported/ })
        .first()
        .waitFor();
      await page.waitForFunction(
        () => document.querySelector('[aria-label="Send message"]')?.disabled,
      );
      assert.equal(requests.length, before);
      assert.ok((await panel().locator(".chat-message-assistant").count()) > 0);
      await fs.mkdir("test-results", { recursive: true });
      await fs.writeFile(
        "test-results/agent-deleted-source.json",
        JSON.stringify(
          {
            passed: true,
            events: await page.evaluate(() => window.agentErrorEvents),
          },
          null,
          2,
        ),
      );
      process.stdout.write(
        "PASS: Deleted source disables sends and retains history without model execution.\n",
      );
      return;
    }
    await panel().getByText("No active chat", { exact: true }).waitFor();
    assert.equal(await page.title(), "Orbistry");
    assert.equal(await countChats(), 0);
    await panel()
      .getByRole("button", { name: "+ New Chat", exact: true })
      .first()
      .click();
    await page
      .getByRole("dialog", { name: "New Orbistry Agent chat" })
      .getByText(/Create a Context Box first/)
      .waitFor();
    await page.keyboard.press("Escape");
    assert.equal(await countChats(), 0);
    await approve("a.md");
    assert.equal(await countChats(), 0);
    await openContextTools(page);
    await panel()
      .getByRole("button", { name: "Save Active Context as box", exact: true })
      .click();
    await panel()
      .getByRole("textbox", { name: "New Context Box name" })
      .fill("Research A");
    await panel().getByRole("button", { name: "Save", exact: true }).click();
    await page.waitForFunction(
      async () =>
        (await window.orbistryDesktop.ai.listContextBoxes()).length === 1,
    );
    assert.equal(await countChats(), 0);
    await panel()
      .getByRole("button", { name: "+ New Chat", exact: true })
      .first()
      .click();
    await page
      .getByRole("dialog", { name: "New Orbistry Agent chat" })
      .getByRole("radio")
      .check();
    await page.keyboard.press("Escape");
    assert.equal(await countChats(), 0);
    checks.push(
      "File selection, approval, saved box and cancelled picker create no chats",
    );
    await createChat("Research A");
    assert.equal(await countChats(), 1);
    await send("Summarize this source.");
    await panel()
      .getByRole("button", { name: "Rename chat", exact: true })
      .click();
    await panel()
      .getByRole("textbox", { name: "Chat title", exact: true })
      .fill("Alpha analysis");
    await panel().getByRole("button", { name: "Save", exact: true }).click();
    await openContextTools(page);
    await panel()
      .getByRole("button", { name: "Rename box", exact: true })
      .click();
    await panel()
      .getByRole("textbox", { name: "Context Box name", exact: true })
      .fill("Renamed research");
    await panel().getByRole("button", { name: "Save", exact: true }).click();
    await panel()
      .locator(".agent-context-label")
      .filter({ hasText: "Context: Renamed research" })
      .waitFor();
    checks.push(
      "Explicit double-click creation produces one chat; chat and box rename independently",
    );
    await page.evaluate(async () => {
      await window.orbistryDesktop.context.clear();
      await window.orbistryDesktop.context.add(["b.md"]);
    });
    await page
      .getByRole("button", { name: "Rescan vault", exact: true })
      .click();
    await send("Summarize the attached evidence again.");
    assert.match(requests.at(-1).messages[1].content, /ALPHA/);
    assert.doesNotMatch(requests.at(-1).messages[1].content, /BETA/);
    checks.push(
      "Changing global approval preserves session-bound ALPHA evidence",
    );
    await send("Who is the CEO?");
    await panel()
      .getByText(/Insufficient evidence in the active context/)
      .waitFor();
    checks.push(
      "Unsupported question displays an explicit synthetic insufficient-evidence result",
    );
    for (const direction of ["n", "s", "w", "e", "nw", "ne", "sw", "se"]) {
      await panel().getByRole("button", { name: "Reset", exact: true }).click();
      const before = await geometry();
      const handle = await panel()
        .getByRole("separator", {
          name: "Resize chat " + direction,
          exact: true,
        })
        .boundingBox();
      await page.mouse.move(
        handle.x + handle.width / 2,
        handle.y + handle.height / 2,
      );
      await page.mouse.down();
      const dx = direction.includes("w")
        ? -20
        : direction.includes("e")
          ? 20
          : 0;
      const dy = direction.includes("n")
        ? -10
        : direction.includes("s")
          ? 10
          : 0;
      await page.mouse.move(
        handle.x + handle.width / 2 + dx,
        handle.y + handle.height / 2 + dy,
        { steps: 5 },
      );
      await page.mouse.up();
      const after = await geometry();
      assert.notDeepEqual(after, before, direction + " changes geometry");
    }
    const handle = panel().getByRole("separator", {
      name: "Resize chat e",
      exact: true,
    });
    await handle.focus();
    await page.keyboard.press("ArrowRight");
    await page.keyboard.press("Home");
    await panel()
      .getByRole("textbox", { name: "Chat question" })
      .fill("long summary");
    await panel()
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await panel()
      .getByRole("button", { name: "Stop response", exact: true })
      .waitFor();
    await handle.focus();
    await page.keyboard.press("ArrowRight");
    await panel()
      .getByRole("button", { name: "Stop response", exact: true })
      .click();
    await page.waitForFunction(() => !document.querySelector(".chat-stop"));
    await page.waitForFunction(
      () =>
        document.querySelector(".chat-runtime-status")?.textContent ===
        "RUN CANCELLED",
    );
    checks.push(
      "All eight pointer resize handles and keyboard resize/reset work; streaming survives resizing and cancellation",
    );
    const beforeRestart = await geometry();
    await application.close();
    await launch();
    await panel().getByText("Alpha analysis", { exact: true }).waitFor();
    await openContextTools(page);
    await panel()
      .locator(".agent-context-label")
      .filter({ hasText: "Context: Renamed research" })
      .waitFor();
    const restored = await geometry();
    assert.ok(Math.abs(restored.width - beforeRestart.width) < 2);
    await panel().getByRole("button", { name: "History", exact: true }).click();
    await panel()
      .getByRole("textbox", { name: "Search chat titles" })
      .fill("Alpha");
    assert.equal(await panel().locator(".agent-history-row").count(), 1);
    await panel().locator(".agent-history-row > button").first().click();
    assert.equal(await countChats(), 1);
    checks.push(
      "Restart restores active chat, renamed box and geometry; searchable history creates no new session",
    );
    await page.getByRole("button", { name: "WORKSPACE", exact: true }).click();
    await panel().getByRole("button", { name: "Undock", exact: true }).click();
    await panel()
      .getByRole("separator", { name: "Resize chat se", exact: true })
      .waitFor();
    await application.evaluate(async ({ BrowserWindow }) => {
      const w = BrowserWindow.getAllWindows()[0];
      w.setSize(1100, 700);
    });
    const bounds = await geometry();
    assert.ok(bounds.x >= 0 && bounds.y >= 0);
    await panel()
      .getByRole("button", { name: "Close Orbistry Agent", exact: true })
      .click();
    await page
      .getByRole("button", { name: "Open Orbistry Agent", exact: true })
      .click();
    await panel().waitFor();
    await panel()
      .getByRole("button", { name: "Rename chat", exact: true })
      .click();
    await panel()
      .getByRole("textbox", { name: "Chat title", exact: true })
      .fill("Long analysis title ".repeat(6));
    await panel().getByRole("button", { name: "Save", exact: true }).click();
    await openContextTools(page);
    await panel()
      .getByRole("button", { name: "Rename box", exact: true })
      .click();
    await panel()
      .getByRole("textbox", { name: "Context Box name", exact: true })
      .fill("Long context name ".repeat(6));
    await panel().getByRole("button", { name: "Save", exact: true }).click();
    assert.equal(
      await panel().getByRole("textbox", { name: "Chat question" }).isVisible(),
      true,
    );
    assert.equal(
      await panel()
        .getByRole("button", { name: "+ New Chat", exact: true })
        .isVisible(),
      true,
    );
    checks.push(
      "Long chat and box names remain usable in the smaller viewport",
    );
    checks.push(
      "Dock divider/undock, smaller viewport and close/reopen keep the agent accessible",
    );
    await fs.mkdir("test-results", { recursive: true });
    await page.screenshot({ path: "test-results/agent-electron.png" });
    const callsBeforeInvalidation = requests.length;
    await fs.unlink(path.join(root, "a.md"));
    await panel()
      .getByRole("textbox", { name: "Chat question" })
      .fill("Summarize this.");
    await panel()
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await panel()
      .locator(".chat-notice")
      .filter({ hasText: /source is missing, unreadable or unsupported/ })
      .first()
      .waitFor();
    await page.waitForFunction(
      () => document.querySelector('[aria-label="Send message"]')?.disabled,
    );
    assert.equal(requests.length, callsBeforeInvalidation);
    assert.equal(
      await panel()
        .getByRole("button", { name: "Send message", exact: true })
        .isDisabled(),
      true,
    );
    assert.ok((await panel().locator(".chat-message-assistant").count()) > 0);
    checks.push(
      "Deleted attached source blocks model execution and future sends while preserving old messages",
    );
    assert.deepEqual(errors, []);
    await fs.writeFile(
      "test-results/agent-electron.json",
      JSON.stringify(
        { passed: true, checks, requests: requests.length },
        null,
        2,
      ),
    );
  } catch (error) {
    if (page && !page.isClosed())
      console.log(
        "Runtime error events",
        await page.evaluate(() => window.agentErrorEvents),
      );
    await fs.mkdir("test-results", { recursive: true });
    if (page && !page.isClosed()) {
      await page
        .screenshot({ path: "test-results/agent-electron-failure.png" })
        .catch(() => {});
      await fs.writeFile(
        "test-results/agent-electron-failure.txt",
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
  process.stderr.write(error.stack + "\n");
  process.exitCode = 1;
});
