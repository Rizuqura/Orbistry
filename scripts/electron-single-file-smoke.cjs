const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises"),
  path = require("node:path"),
  os = require("node:os");
async function main() {
  const root = await fs.mkdtemp(
      path.join(os.tmpdir(), "orbistry-single-file-"),
    ),
    vault = path.join(root, "vault"),
    data = path.join(root, "app-data");
  let app, page;
  const errors = [];
  const files = {
    Context: ["research.md", "ALPHA allocation is 25%."],
    Knowledge: ["knowledge.md", "BETA allocation is 15%."],
    Personality: ["persona.md", "Be concise and state uncertainty."],
    Output: ["output.md", "Use readable headings and findings."],
    Skill: [
      "method.md",
      "FULL_METHOD_START\n" +
        "Compare the reviewed evidence carefully. ".repeat(550) +
        "\nFULL_METHOD_END",
    ],
  };
  const launch = async () => {
    const env = {
      ...process.env,
      ORBISTRY_VAULT_PATH: vault,
      ORBISTRY_SMOKE_DATA: data,
    };
    delete env.ELECTRON_RUN_AS_NODE;
    delete env.ELECTRON_START_URL;
    app = await electron.launch({
      args: [
        path.resolve("scripts/electron-online-smoke-main.cjs"),
        "--hidden",
      ],
      env,
      timeout: 30000,
    });
    page = await app.firstWindow();
    page.setDefaultTimeout(20000);
    page.on("pageerror", (e) => errors.push(e.message));
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page.getByRole("button", { name: "AGENT", exact: true }).click();
  };
  const profile = () =>
    page.evaluate(() => window.orbistryDesktop.ai.getAgent("wonnyy-agent"));
  const counts = () =>
    page.evaluate(async () => ({
      boxes: (await window.orbistryDesktop.ai.listContextBoxes()).length,
      chats: (await window.orbistryDesktop.ai.listConversations()).length,
    }));
  const studio = () =>
    page.getByRole("region", {
      name: "Agent Construction Studio",
      exact: true,
    });
  const open = async () => {
    await page
      .getByRole("button", { name: "Orbistry Agent settings", exact: true })
      .click();
    await studio()
      .getByRole("textbox", { name: "Agent name", exact: true })
      .waitFor();
  };
  const close = async () => {
    await page
      .getByRole("button", { name: "Close agent settings", exact: true })
      .click();
    await page
      .locator(".agent-construction-dialog")
      .waitFor({ state: "hidden" });
  };
  const bind = async (kind) => {
    await studio()
      .getByRole("group", { name: `${kind} node`, exact: true })
      .focus();
    await studio()
      .getByRole("combobox", { name: `Source method for ${kind}`, exact: true })
      .selectOption("file");
    await studio()
      .getByRole("combobox", { name: `Single file for ${kind}`, exact: true })
      .selectOption(files[kind][0]);
    const review = studio().locator(".studio-box-review");
    await review.getByRole("heading").waitFor();
    await review.locator("summary").click();
    assert.equal(await review.locator("pre").textContent(), files[kind][1]);
    if (kind === "Skill") {
      await review
        .locator("pre")
        .evaluate((el) => (el.scrollTop = el.scrollHeight));
      await page.screenshot({ path: "test-results/full-method-file.png" });
    }
    await review
      .getByRole("button", {
        name: `Use reviewed file for ${kind}`,
        exact: true,
      })
      .click();
  };
  const apply = async () => {
    await studio()
      .getByRole("button", { name: "Save & apply", exact: true })
      .click();
    await studio()
      .getByText(
        "Configuration applied. It will be used on the next request.",
        { exact: true },
      )
      .waitFor();
  };
  const panel = () =>
    page.getByRole("complementary", { name: "Orbistry Agent", exact: true });
  const send = async (question) => {
    const before = await panel()
      .locator(".chat-message-assistant .chat-run-id")
      .count();
    await panel()
      .getByRole("textbox", { name: "Chat question", exact: true })
      .fill(question);
    await panel()
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await panel()
      .locator(".chat-message-assistant .chat-run-id")
      .nth(before)
      .waitFor();
  };
  try {
    await fs.mkdir(vault);
    await fs.mkdir(data);
    await fs.mkdir("test-results", { recursive: true });
    for (const [file, content] of Object.values(files))
      await fs.writeFile(path.join(vault, file), content);
    await launch();
    await page.evaluate(() =>
      window.orbistryDesktop.ai.settings({
        contextWindow: 32768,
        outputLimit: 1024,
      }),
    );
    await page.reload();
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page.getByRole("button", { name: "AGENT", exact: true }).click();
    await open();
    for (const kind of ["Personality", "Knowledge"]) {
      await studio()
        .getByRole("button", { name: `Add ${kind}`, exact: true })
        .click();
      await studio()
        .getByRole("button", { name: `Connect from ${kind}`, exact: true })
        .press("Enter");
      await studio()
        .getByRole("button", { name: "Connect to LLM", exact: true })
        .click();
    }
    for (const kind of Object.keys(files)) await bind(kind);
    await studio()
      .getByRole("button", { name: "Save draft", exact: true })
      .click();
    await studio()
      .getByText("Draft saved. The live agent is unchanged.", { exact: true })
      .waitFor();
    assert.equal((await profile()).construction.activeRevision, 0);
    assert.deepEqual(await counts(), { boxes: 0, chats: 0 });
    assert.ok(
      !(await fs.readFile(path.join(data, "agents.json"), "utf8")).includes(
        "FULL_METHOD_END",
      ),
    );
    await close();
    await open();
    assert.equal(
      (await profile()).construction.draft.nodes.filter(
        (n) => n.config.contextFile,
      ).length,
      5,
    );
    await apply();
    await close();
    const create = async (cancel) => {
      await panel()
        .getByRole("button", { name: "+ New Chat", exact: true })
        .click();
      const picker = page.getByRole("dialog", {
        name: "New Orbistry Agent chat",
        exact: true,
      });
      assert.equal(
        await picker
          .getByRole("radio", { name: /Agent Context file: research.md/ })
          .isChecked(),
        true,
      );
      assert.equal(
        await picker
          .getByRole("checkbox", { name: /Include agent Knowledge file/ })
          .isChecked(),
        true,
      );
      await picker
        .getByRole("button", {
          name: cancel ? "Cancel" : "Start Chat",
          exact: true,
        })
        .click();
      await picker.waitFor({ state: "hidden" });
    };
    await create(true);
    assert.equal((await counts()).chats, 0);
    await create(false);
    await send("Summarize the bound sources.");
    const request = await app.evaluate(() =>
      globalThis.onlineSmoke.localRequests.at(-1),
    );
    assert.ok(JSON.stringify(request).includes("FULL_METHOD_END"));
    let chats = await page.evaluate(() =>
      window.orbistryDesktop.ai.listConversations(),
    );
    assert.equal(chats[0].schemaVersion, 4);
    assert.equal(chats[0].contextBoxId, undefined);
    assert.deepEqual(
      chats[0].messages
        .at(-1)
        .sources.map((s) => s.relativePath)
        .sort(),
      ["knowledge.md", "research.md"],
    );
    await open();
    await studio()
      .getByRole("group", { name: "Skill node", exact: true })
      .focus();
    const methods = await studio()
      .getByRole("combobox", { name: "Source method for Skill", exact: true })
      .locator("option")
      .allTextContents();
    assert.deepEqual(methods, ["Context Box", "Single file"]);
    const revision = (await profile()).construction.revision;
    await studio()
      .getByRole("button", { name: "Review attached file", exact: true })
      .click();
    await studio().locator(".studio-box-review").getByRole("heading").waitFor();
    await studio()
      .getByRole("button", { name: "Cancel review", exact: true })
      .click();
    assert.equal((await profile()).construction.revision, revision);
    await close();
    await page.screenshot({ path: "test-results/single-file-chat.png" });
    await app.close();
    app = null;
    await launch();
    await panel().locator(".chat-message-assistant .chat-run-id").waitFor();
    assert.equal(
      (await profile()).construction.active.nodes.filter(
        (node) => node.config.contextFile,
      ).length,
      5,
    );
    await send("Summarize the bound sources again.");
    chats = await page.evaluate(() =>
      window.orbistryDesktop.ai.listConversations(),
    );
    assert.equal(chats[0].messages.length, 4);
    assert.equal(chats[0].contextFile.relativePath, "research.md");
    const before = await app.evaluate(
      () => globalThis.onlineSmoke.localRequests.length,
    );
    await fs.writeFile(
      path.join(vault, "method.md"),
      files.Skill[1] + "\nUPDATED_METHOD_END",
    );
    await panel()
      .getByRole("textbox", { name: "Chat question", exact: true })
      .fill("Summarize the current sources.");
    await panel()
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await page.waitForFunction(() =>
      document.body.innerText.includes(
        "The reviewed file changed or is unavailable",
      ),
    );
    assert.equal(
      await app.evaluate(() => globalThis.onlineSmoke.localRequests.length),
      before,
    );
    await open();
    await studio()
      .getByRole("group", { name: "Skill node", exact: true })
      .focus();
    await studio()
      .getByRole("button", { name: "Review attached file", exact: true })
      .click();
    await studio()
      .getByRole("button", { name: "Use reviewed file for Skill", exact: true })
      .click();
    await apply();
    await close();
    await send("Summarize the current sources.");
    assert.ok(
      JSON.stringify(
        await app.evaluate(() => globalThis.onlineSmoke.localRequests.at(-1)),
      ).includes("UPDATED_METHOD_END"),
    );
    assert.deepEqual(await counts(), { boxes: 0, chats: 1 });
    const names = await page.evaluate(() =>
      Object.keys(window.orbistryDesktop.ai),
    );
    assert.ok(
      names.every((name) => !/Tabular/.test(name)),
      "Experimental execution APIs have been removed",
    );
    assert.deepEqual(errors, []);
    await fs.writeFile(
      "test-results/single-file.json",
      JSON.stringify(
        {
          passed: true,
          transport: "synthetic",
          checks: [
            "All five node roles choose and review full single-file content",
            "No hidden boxes or accidental sessions",
            "Draft/apply and cancelled review preserve profile boundaries",
            "Explicit Context and Knowledge file confirmation",
            "Only confirmed research sources enter the factual manifest",
            "Saved file bindings and chat history survive restart",
          ],
        },
        null,
        2,
      ),
    );
    console.log(
      "PASS: Single-file agent settings, full document guidance, direct research context, cancellation and restart",
    );
  } catch (error) {
    console.log(await page?.getByRole("alert").allTextContents());
    await fs.mkdir("test-results", { recursive: true });
    await page
      ?.screenshot({ path: "test-results/single-file-failure.png" })
      .catch(() => {});
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
