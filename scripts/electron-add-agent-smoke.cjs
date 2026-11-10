const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { ContextBoxStore } = require("../electron/ai/context-box-store.cjs");

async function main() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-add-agent-"));
  const vault = path.join(root, "vault"),
    data = path.join(root, "app-data");
  let app, page;
  const errors = [];
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
    page.on("pageerror", (error) => errors.push(error.message));
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page.getByRole("button", { name: "AGENT", exact: true }).click();
  };
  const profiles = () =>
    page.evaluate(() => window.orbistryDesktop.ai.listAgents());
  const chats = () =>
    page.evaluate(() => window.orbistryDesktop.ai.listConversations());
  const picker = () =>
    page.getByRole("dialog", { name: "Add agent", exact: true });
  const open = () =>
    page.getByRole("button", { name: "+ Add agent", exact: true }).click();
  const add = async (name) => {
    await open();
    await picker()
      .getByRole("textbox", { name: "Agent name", exact: true })
      .fill(name);
    await picker()
      .getByRole("button", { name: "Create agent", exact: true })
      .click();
    await picker().waitFor({ state: "hidden" });
    return (await profiles()).find((agent) => agent.displayName === name);
  };
  const send = async (name) => {
    const panel = page.getByRole("complementary", { name, exact: true });
    await panel
      .getByRole("button", { name: "+ New Chat", exact: true })
      .click();
    const setup = page.getByRole("dialog", {
      name: `New ${name} chat`,
      exact: true,
    });
    await setup.getByRole("radio", { name: /Research source/ }).check();
    await setup
      .getByRole("button", { name: "Start Chat", exact: true })
      .click();
    await setup.waitFor({ state: "hidden" });
    await panel
      .getByRole("textbox", { name: "Chat question", exact: true })
      .fill("Summarize the bound source.");
    await panel
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await panel.locator(".chat-message-assistant .chat-run-id").waitFor();
    return app.evaluate(() => globalThis.onlineSmoke.localRequests.at(-1));
  };
  try {
    await fs.mkdir(vault);
    await fs.mkdir(data);
    await fs.writeFile(path.join(vault, "a.md"), "ALPHA allocation is 25%.");
    await new ContextBoxStore(vault).create("Research source", null, ["a.md"]);
    await launch();
    assert.equal((await profiles()).length, 2);
    await open();
    await picker()
      .getByRole("textbox", { name: "Agent name", exact: true })
      .fill("Cancelled");
    await page.keyboard.press("Escape");
    await picker().waitFor({ state: "hidden" });
    assert.equal((await profiles()).length, 2);
    assert.equal((await chats()).length, 0);
    await open();
    await picker()
      .getByRole("textbox", { name: "Agent name", exact: true })
      .fill("Orbistry Agent");
    await picker()
      .getByRole("button", { name: "Create agent", exact: true })
      .click();
    await picker()
      .getByRole("alert")
      .filter({ hasText: "already exists" })
      .waitFor();
    assert.equal((await profiles()).length, 2);
    await picker()
      .getByRole("textbox", { name: "Agent name", exact: true })
      .fill("Research");
    assert.equal(
      await picker().getByRole("alert").count(),
      0,
      "Editing the name clears its old error",
    );
    await fs.mkdir("test-results", { recursive: true });
    await page.screenshot({ path: "test-results/add-agent-dialog.png" });
    await picker()
      .locator("form")
      .evaluate((form) => {
        form.requestSubmit();
        form.requestSubmit();
      });
    await picker().waitFor({ state: "hidden" });
    assert.equal(
      (await profiles()).length,
      3,
      "Double form submission creates only one agent",
    );
    let research = (await profiles()).find(
      (agent) => agent.displayName === "Research",
    );
    assert.equal(research.avatarUrl, null);
    assert.deepEqual(research.avatar, { type: "letter", letter: "R" });
    assert.equal(research.customInstructions, "");
    assert.equal(research.construction.active, null);
    assert.deepEqual(research.skills, []);
    assert.equal((await chats()).length, 0);
    const contact = page.locator(`[data-agent-id="${research.id}"]`);
    assert.equal(await contact.locator(".agent-avatar img").count(), 0);
    await page
      .getByRole("button", { name: "Research settings", exact: true })
      .click();
    const studio = page.getByRole("region", {
      name: "Agent Construction Studio",
      exact: true,
    });
    await studio
      .getByRole("textbox", { name: "Agent name", exact: true })
      .fill("Research desk");
    await studio
      .getByRole("textbox", {
        name: "Agent behavior instructions",
        exact: true,
      })
      .fill("CUSTOM_AGENT_SENTINEL: Use concise findings.");
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
      .locator(".agent-construction-dialog")
      .waitFor({ state: "hidden" });
    research = (await profiles()).find((agent) => agent.id === research.id);
    assert.equal(research.displayName, "Research desk");
    const request = await send("Research desk");
    assert.match(request.messages[0].content, /You are Research desk/);
    assert.match(request.messages[0].content, /CUSTOM_AGENT_SENTINEL/);
    await page
      .getByRole("textbox", { name: "Chat question", exact: true })
      .fill("Research draft");
    await page
      .getByRole("button", { name: "Orbistry Agent chats", exact: true })
      .click();
    await page
      .getByRole("complementary", { name: "Orbistry Agent", exact: true })
      .waitFor();
    assert.equal(
      await page.locator(".chat-message-assistant .chat-run-id").count(),
      0,
    );
    await page
      .getByRole("textbox", { name: "Chat question", exact: true })
      .fill("Orbistry draft");
    await page
      .getByRole("button", { name: "Research desk chats", exact: true })
      .click();
    await page.waitForFunction(
      () =>
        document.querySelector('[aria-label="Chat question"]')?.value ===
        "Research draft",
    );
    const planner = await add("Planner");
    assert.equal(planner.avatarUrl, null);
    assert.equal(planner.construction.draftAvatarUrl, null);
    assert.equal(planner.appearance.bannerUrl, null);
    assert.equal(planner.runtimeInstructions, "");
    assert.deepEqual(planner.availableSkills, []);
    assert.ok(
      planner.construction.draft.nodes.every(
        (node) => !node.config.contextBox && !node.config.skillId,
      ),
    );
    const plannerRequest = await send("Planner");
    assert.match(plannerRequest.messages[0].content, /You are Planner/);
    assert.doesNotMatch(
      plannerRequest.messages[0].content,
      /CUSTOM_AGENT_SENTINEL/,
    );
    const conversations = await chats();
    assert.equal(conversations.length, 2);
    assert.deepEqual(
      conversations.map((chat) => chat.agentId).sort(),
      [research.id, planner.id].sort(),
    );
    assert.ok(conversations.every((chat) => chat.messages.length === 2));
    await page
      .getByRole("button", { name: "Research desk chats", exact: true })
      .click();
    await page
      .getByRole("complementary", { name: "Research desk", exact: true })
      .waitFor();
    await page.screenshot({ path: "test-results/added-agents.png" });
    await app.close();
    app = null;
    await launch();
    await page
      .getByRole("complementary", { name: "Research desk", exact: true })
      .waitFor();
    await page.locator(".chat-message-assistant .chat-run-id").waitFor();
    assert.equal((await profiles()).length, 4);
    assert.equal((await chats()).length, 2);
    const restored = (await profiles()).find(
      (agent) => agent.id === research.id,
    );
    assert.match(restored.runtimeInstructions, /CUSTOM_AGENT_SENTINEL/);
    assert.equal(restored.avatarUrl, null);
    assert.equal(
      (await profiles()).find((agent) => agent.id === planner.id).avatarUrl,
      null,
    );
    assert.deepEqual(errors, []);
    await fs.writeFile(
      "test-results/add-agent.json",
      JSON.stringify(
        {
          passed: true,
          transport: "synthetic",
          checks: [
            "Cancellation creates neither profile nor chat",
            "Duplicate names and double submissions are guarded",
            "New agents have no PFP, skills, preferences or bound sources",
            "Custom agents use the shared floating construction editor",
            "Independent identities, histories, drafts and actual model requests",
            "Profile, construction, selected agent and history survive restart",
          ],
        },
        null,
        2,
      ),
    );
    console.log(
      "PASS: Add agent, blank image-free defaults, duplicate guard, custom construction, independent chat and restart",
    );
  } catch (error) {
    console.log(await page?.getByRole("alert").allTextContents());
    await fs.mkdir("test-results", { recursive: true });
    await page
      ?.screenshot({ path: "test-results/add-agent-failure.png" })
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
