const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises"),
  path = require("node:path"),
  os = require("node:os");
async function main() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-chronoz-"));
  let app, page;
  const errors = [];
  const list = () =>
    page.evaluate(() => window.orbistryDesktop.ai.listConversations());
  const launch = async () => {
    const env = {
      ...process.env,
      ORBISTRY_SMOKE_DATA: path.join(root, ".wonnyy", "app-data"),
      ORBISTRY_VAULT_PATH: root,
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
    await page.waitForFunction(() => window.orbistryDesktop?.apiVersion === 18);
    await page.evaluate(() => window.orbistryDesktop.ai.handshake(18));
    await page
      .getByRole("button", { name: "Open in Agent", exact: true })
      .waitFor();
  };
  const ownerPanel = (name) =>
    page.getByRole("complementary", { name, exact: true });
  const question = () =>
    page.getByRole("textbox", { name: "Chat question", exact: true });
  const select = async (name) => {
    await page
      .getByRole("button", { name: `${name} chats`, exact: true })
      .click();
    await ownerPanel(name).waitFor();
  };
  const create = async (name, title) => {
    await ownerPanel(name)
      .getByRole("button", { name: "+ New Chat", exact: true })
      .click();
    const picker = page.getByRole("dialog", {
      name: `New ${name} chat`,
      exact: true,
    });
    await picker.getByRole("radio", { name: /Shared research/ }).check();
    await picker
      .getByRole("button", { name: "Start Chat", exact: true })
      .click();
    await picker.waitFor({ state: "hidden" });
    await ownerPanel(name)
      .getByRole("button", { name: "Rename chat", exact: true })
      .click();
    await page
      .getByRole("textbox", { name: "Chat title", exact: true })
      .fill(title);
    await ownerPanel(name)
      .getByRole("button", { name: "Save", exact: true })
      .click();
  };
  const send = async (name) => {
    await question().fill(
      name === "Orbistry Agent"
        ? "ORBISTRY_PRIVATE_QUESTION: Summarize the bound source."
        : "Summarize the bound source.",
    );
    await ownerPanel(name)
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await ownerPanel(name)
      .locator(".chat-message-assistant")
      .filter({ hasText: "25%" })
      .waitFor();
  };
  try {
    await fs.writeFile(path.join(root, "a.md"), "ALPHA allocation is 25%.");
    for (let i = 0; i < 16; i++)
      await fs.writeFile(path.join(root, `note-${i}.md`), "Research notes.");
    await launch();
    const before = await page.locator(".pv-canvas").boundingBox();
    await page
      .getByRole("button", { name: "Focus canvas", exact: true })
      .press("Space");
    await page.waitForFunction(
      () => document.querySelector(".pv-canvas").clientWidth > innerWidth - 10,
    );
    const focused = await page.locator(".pv-canvas").boundingBox();
    assert.ok(focused.width > before.width + 400);
    assert.equal(await page.locator(".knowledge-sidebar").isVisible(), false);
    await page.locator(".chat-panel-minimized").waitFor();
    await fs.mkdir("test-results", { recursive: true });
    await page.screenshot({ path: "test-results/planet-focus.png" });
    await page
      .getByRole("button", { name: "Focus canvas", exact: true })
      .click();
    await page.getByRole("button", { name: "AGENT", exact: true }).click();
    await page
      .getByRole("button", { name: "Orbistry Agent chats", exact: true })
      .waitFor();
    await page.evaluate(async () => {
      await window.orbistryDesktop.ai.saveAgent({
        id: "wonnyy-agent",
        customInstructions: "ORBISTRY_ONLY_PREF: Use numbered findings.",
      });
      await window.orbistryDesktop.ai.editContextBox({
        action: "create",
        name: "Shared research",
        paths: ["a.md"],
      });
    });
    await create("Orbistry Agent", "Orbistry research");
    await send("Orbistry Agent");
    await question().fill("Orbistry draft");
    const orbistry = (await list())[0];
    await select("CHronoZ");
    assert.equal((await list()).length, 1);
    assert.equal(await question().inputValue(), "");
    assert.equal(
      await page.locator('.agent-bot-row[data-agent-id="chronoz"] img').count(),
      0,
    );
    const profile = await page.evaluate(() =>
      window.orbistryDesktop.ai.getAgent("chronoz"),
    );
    assert.equal(profile.customInstructions, "");
    assert.deepEqual(profile.skills, []);
    assert.equal(profile.avatarUrl, null);
    await page
      .getByRole("button", { name: "CHronoZ settings", exact: true })
      .click();
    const settings = page.getByRole("dialog", {
      name: "CHronoZ settings",
      exact: true,
    });
    assert.equal(
      await settings
        .getByRole("textbox", {
          name: "Agent behavior instructions",
          exact: true,
        })
        .inputValue(),
      "",
    );
    await settings
      .getByRole("group", { name: "Skill node", exact: true })
      .getByText("Not configured", { exact: true })
      .waitFor();
    await settings
      .getByText("Protected grounding policy", { exact: true })
      .click();
    assert.match(
      await settings.locator("pre").first().innerText(),
      /You are CHronoZ/,
    );
    await settings
      .getByRole("textbox", {
        name: "Agent behavior instructions",
        exact: true,
      })
      .fill("CHRONOZ_ONLY_PREF: Use brief paragraphs.");
    await settings
      .getByRole("button", { name: "Save & apply", exact: true })
      .click();
    await settings
      .getByText(
        "Configuration applied. It will be used on the next request.",
        { exact: true },
      )
      .waitFor();
    await settings
      .getByRole("button", { name: "Close agent settings", exact: true })
      .click();
    await settings.waitFor({ state: "hidden" });
    assert.match(
      (await page.evaluate(() => window.orbistryDesktop.ai.getAgent("chronoz")))
        .customInstructions,
      /CHRONOZ_ONLY_PREF/,
    );
    assert.match(
      (
        await page.evaluate(() =>
          window.orbistryDesktop.ai.getAgent("wonnyy-agent"),
        )
      ).customInstructions,
      /ORBISTRY_ONLY_PREF/,
    );
    await page
      .getByRole("button", { name: "CHronoZ settings", exact: true })
      .click();
    await settings
      .getByRole("textbox", {
        name: "Agent behavior instructions",
        exact: true,
      })
      .fill("");
    await settings
      .getByRole("button", { name: "Save & apply", exact: true })
      .click();
    await settings
      .getByText(
        "Configuration applied. It will be used on the next request.",
        { exact: true },
      )
      .waitFor();
    await settings
      .getByRole("button", { name: "Close agent settings", exact: true })
      .click();
    await settings.waitFor({ state: "hidden" });
    await create("CHronoZ", "Chronoz research");
    await send("CHronoZ");
    const chats = await list();
    const chrono = chats.find((c) => c.agentId === "chronoz");
    assert.equal(chats.length, 2);
    assert.notEqual(chrono.id, orbistry.id);
    assert.equal(chrono.contextBoxId, orbistry.contextBoxId);
    assert.equal(chrono.messages.length, 2);
    const promptMessages = await app.evaluate(
      () => globalThis.onlineSmoke.localRequests.at(-1).messages,
    );
    const prompt = promptMessages[0].content;
    assert.doesNotMatch(
      JSON.stringify(promptMessages),
      /ORBISTRY_PRIVATE_QUESTION/,
    );
    assert.equal(
      promptMessages.filter((m) => m.role === "assistant").length,
      0,
    );
    assert.match(prompt, /You are CHronoZ/);
    assert.doesNotMatch(prompt, /ORBISTRY_ONLY_PREF/);
    await question().fill("Chronoz draft");
    await select("Orbistry Agent");
    await ownerPanel("Orbistry Agent")
      .getByText("Orbistry research", { exact: true })
      .waitFor();
    assert.equal(await question().inputValue(), "Orbistry draft");
    assert.equal(
      await page
        .locator(".agent-conversation-open")
        .filter({ hasText: "Chronoz research" })
        .count(),
      0,
    );
    await select("CHronoZ");
    await ownerPanel("CHronoZ")
      .getByText("Chronoz research", { exact: true })
      .waitFor();
    assert.equal(await question().inputValue(), "Chronoz draft");
    await page.screenshot({ path: "test-results/chronoz-agent.png" });
    await app.evaluate(({ session }) =>
      session.defaultSession.flushStorageData(),
    );
    await app.close();
    await launch();
    await ownerPanel("CHronoZ")
      .getByText("Chronoz research", { exact: true })
      .waitFor();
    await ownerPanel("CHronoZ")
      .getByRole("button", { name: "History", exact: true })
      .click();
    await ownerPanel("CHronoZ")
      .getByRole("button", { name: "Clear history", exact: true })
      .click();
    const clear = page.getByRole("dialog", {
      name: "Clear history",
      exact: true,
    });
    await clear
      .getByRole("button", { name: "Clear history", exact: true })
      .click();
    await page.waitForFunction(
      async () =>
        (await window.orbistryDesktop.ai.listConversations()).length === 1,
    );
    const remaining = await list();
    assert.equal(remaining[0].id, orbistry.id);
    assert.equal(
      (
        await page.evaluate(() =>
          window.orbistryDesktop.ai.getAgent("wonnyy-agent"),
        )
      ).customInstructions,
      "ORBISTRY_ONLY_PREF: Use numbered findings.",
    );
    assert.equal(
      (await page.evaluate(() => window.orbistryDesktop.ai.getAgent("chronoz")))
        .customInstructions,
      "",
    );
    assert.deepEqual(errors, []);
    const checks = [
      "Focus canvas frees side-panel space and minimizes chat",
      "CHronoZ has blank custom instructions/skills/PFP, with shared protected grounding",
      "Independent agent chat IDs, history, drafts and settings",
      "Actual main-process prompt selects CHronoZ identity and excludes Orbistry preferences",
      "Restart restores selected agent/chat; clearing ChronoZ history preserves Orbistry",
    ];
    await fs.writeFile(
      "test-results/chronoz.json",
      JSON.stringify(
        {
          passed: true,
          checks,
          transport: "synthetic",
          liveModelGrounding: false,
        },
        null,
        2,
      ),
    );
    console.log("PASS: " + checks.join("; "));
  } catch (e) {
    await page
      ?.screenshot({ path: "test-results/chronoz-failure.png" })
      .catch(() => {});
    if (page && !page.isClosed())
      await fs.writeFile(
        "test-results/chronoz-failure.txt",
        await page.locator("body").innerText(),
      );
    throw e;
  } finally {
    await app?.close();
    assert.ok(
      path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep),
    );
    await fs.rm(root, { recursive: true, force: true });
  }
}
main().catch((e) => {
  console.error(e.stack);
  process.exitCode = 1;
});
