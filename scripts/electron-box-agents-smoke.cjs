const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");
const { ContextBoxStore } = require("../electron/ai/context-box-store.cjs");

async function main() {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-box-agents-"),
  );
  const vault = path.join(root, "vault"),
    data = path.join(root, "app-data");
  let app, page;
  const errors = [];
  const boxes = {};
  const files = {
    Context: ["research.md", "ALPHA allocation is 25%."],
    Personality: [
      "persona.md",
      "BOX_PERSONALITY: Be patient, concise, and identify uncertainty.",
    ],
    Output: [
      "output.md",
      "BOX_OUTPUT: Use short findings followed by a readable bullet list.",
    ],
    Skill: [
      "skill.md",
      "BOX_SKILL: Compare each approved allocation before drawing conclusions.",
    ],
    Knowledge: ["knowledge.md", "KNOWLEDGE_SENTINEL: BETA allocation is 15%."],
  };
  const launch = async () => {
    const env = {
      ...process.env,
      ORBISTRY_SMOKE_DATA: data,
      ORBISTRY_VAULT_PATH: vault,
    };
    delete env.ELECTRON_START_URL;
    delete env.ELECTRON_RUN_AS_NODE;
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
  const get = () =>
    page.evaluate(() => window.orbistryDesktop.ai.getAgent("wonnyy-agent"));
  const conversations = () =>
    page.evaluate(() => window.orbistryDesktop.ai.listConversations());
  const open = async () => {
    await page
      .getByRole("button", { name: "Orbistry Agent settings", exact: true })
      .click();
    await page
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
  const studio = () =>
    page.getByRole("region", {
      name: "Agent Construction Studio",
      exact: true,
    });
  const bind = async (kind) => {
    await studio()
      .getByRole("group", { name: `${kind} node`, exact: true })
      .focus();
    await studio()
      .getByRole("combobox", { name: `Context Box for ${kind}`, exact: true })
      .selectOption(boxes[kind].id);
    const review = studio().locator(".studio-box-review");
    await review
      .getByRole("heading", { name: `Review ${kind} box`, exact: true })
      .waitFor();
    await review.getByText(files[kind][0], { exact: true }).click();
    assert.equal(await review.locator("pre").textContent(), files[kind][1]);
    await review
      .getByRole("button", {
        name: `Use reviewed box for ${kind}`,
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
  const newChat = async (includeKnowledge) => {
    const panel = page.getByRole("complementary", {
      name: "Orbistry Agent",
      exact: true,
    });
    await panel
      .getByRole("button", { name: "+ New Chat", exact: true })
      .click();
    const picker = page.getByRole("dialog", {
      name: "New Orbistry Agent chat",
      exact: true,
    });
    assert.equal(
      await picker.getByRole("radio", { name: /Context box/ }).isChecked(),
      true,
    );
    const choice = picker.getByRole("checkbox", {
      name: /Include agent Knowledge box/,
    });
    assert.equal(await choice.isChecked(), true);
    if (includeKnowledge === null) {
      await picker.getByRole("button", { name: "Cancel", exact: true }).click();
    } else {
      await choice.setChecked(includeKnowledge);
      await picker
        .getByRole("button", { name: "Start Chat", exact: true })
        .click();
    }
    await picker.waitFor({ state: "hidden" });
  };
  const send = async () => {
    const panel = page.getByRole("complementary", {
      name: "Orbistry Agent",
      exact: true,
    });
    const before = await panel
      .locator(".chat-message-assistant .chat-run-id")
      .count();
    await panel
      .getByRole("textbox", { name: "Chat question", exact: true })
      .fill("Summarize the bound source.");
    await panel
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await panel
      .locator(".chat-message-assistant .chat-run-id")
      .nth(before)
      .waitFor();
    return app.evaluate(() => globalThis.onlineSmoke.localRequests.at(-1));
  };
  const envelopes = (request) =>
    request.messages.flatMap((message) => {
      if (message.role !== "user") return [];
      try {
        return [JSON.parse(message.content)];
      } catch {
        return [];
      }
    });
  try {
    await fs.mkdir(vault);
    await fs.mkdir(data);
    const store = new ContextBoxStore(vault);
    for (const [kind, [file, content]] of Object.entries(files)) {
      await fs.writeFile(path.join(vault, file), content);
      boxes[kind] = await store.create(`${kind} box`, null, [file]);
    }
    await launch();
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
    const positions = await studio()
      .locator(".studio-node")
      .evaluateAll((nodes) =>
        nodes.map((node) => ({
          x: parseFloat(node.style.left),
          y: parseFloat(node.style.top),
        })),
      );
    for (let i = 0; i < positions.length; i++)
      for (let j = i + 1; j < positions.length; j++)
        assert.ok(
          Math.abs(positions[i].x - positions[j].x) >= 120 ||
            Math.abs(positions[i].y - positions[j].y) >= 120,
          "Added nodes must not cover existing nodes",
        );
    for (const kind of Object.keys(files)) await bind(kind);
    await studio()
      .getByRole("button", { name: "Save draft", exact: true })
      .click();
    await studio()
      .getByText("Draft saved. The live agent is unchanged.", { exact: true })
      .waitFor();
    assert.equal((await get()).construction.activeRevision, 0);
    assert.equal((await conversations()).length, 0);
    const persisted = await fs.readFile(path.join(data, "agents.json"), "utf8");
    for (const [, content] of Object.values(files))
      assert.ok(!persisted.includes(content));
    await close();
    await open();
    assert.equal(
      (await get()).construction.draft.nodes.filter(
        (node) => node.config.contextBox,
      ).length,
      5,
    );
    await apply();
    assert.equal(
      (await get()).construction.active.nodes.filter(
        (node) => node.config.contextBox,
      ).length,
      5,
    );
    await studio()
      .getByRole("group", { name: "Personality node", exact: true })
      .focus();
    await studio()
      .getByRole("button", { name: "Review attached box", exact: true })
      .click();
    await studio().locator(".studio-box-review").getByRole("heading").waitFor();
    await studio().locator(".studio-box-review summary").click();
    const inspector = studio().locator(".studio-inspector");
    assert.equal(
      await inspector.evaluate(
        (element) => getComputedStyle(element).overflowY,
      ),
      "auto",
    );
    await fs.mkdir("test-results", { recursive: true });
    await page.screenshot({ path: "test-results/box-built-agent.png" });
    await close();
    await newChat(null);
    assert.equal(
      (await conversations()).length,
      0,
      "Cancelled creation writes no conversation",
    );
    await newChat(false);
    let request = await send();
    let refs = envelopes(request).filter(
      (value) => value.kind === "agent-construction-reference",
    );
    assert.deepEqual(refs.map((ref) => ref.role).sort(), [
      "Output",
      "Personality",
      "Skill",
    ]);
    assert.ok(!JSON.stringify(request).includes("KNOWLEDGE_SENTINEL"));
    let list = await conversations();
    let first = await page.evaluate(
      (id) => window.orbistryDesktop.ai.resumeConversation(id),
      list[0].id,
    );
    assert.deepEqual(
      first.messages.at(-1).sources.map((source) => source.relativePath),
      ["research.md"],
    );
    assert.equal(first.agentKnowledge, undefined);
    await newChat(true);
    request = await send();
    assert.ok(JSON.stringify(request).includes("KNOWLEDGE_SENTINEL"));
    refs = envelopes(request).filter(
      (value) => value.kind === "agent-construction-reference",
    );
    assert.equal(refs.length, 3);
    list = await conversations();
    const bound = list.find((conversation) => conversation.id !== first.id);
    const second = await page.evaluate(
      (id) => window.orbistryDesktop.ai.resumeConversation(id),
      bound.id,
    );
    assert.equal(second.agentKnowledge.boxId, boxes.Knowledge.id);
    assert.deepEqual(
      second.messages
        .at(-1)
        .sources.map((source) => source.relativePath)
        .sort(),
      ["knowledge.md", "research.md"],
    );
    assert.equal(second.messages.at(-1).knowledgeBox.name, "Knowledge box");
    await app.close();
    app = null;
    await launch();
    assert.equal((await conversations()).length, 2);
    await open();
    assert.equal(
      (await get()).construction.active.nodes.filter(
        (node) => node.config.contextBox,
      ).length,
      5,
    );
    await close();
    const panel = page.getByRole("complementary", {
      name: "Orbistry Agent",
      exact: true,
    });
    await panel.locator(".chat-message-assistant .chat-run-id").waitFor();
    assert.deepEqual(errors, []);
    await fs.writeFile(
      "test-results/box-built-agents.json",
      JSON.stringify(
        {
          passed: true,
          transport: "synthetic",
          checks: [
            "Five role bindings are reviewed through the editor",
            "Drafts, apply and restart preserve bindings without document snapshots",
            "No sessions created by editing or cancelled setup",
            "Configured Context box is preselected",
            "Knowledge inclusion is explicit and scoped to the new chat",
            "Personality, output and skill playbooks reach the actual request outside research evidence",
            "Research provenance includes only the confirmed source manifest",
            "Last selected chat and two independent sessions survive restart",
          ],
        },
        null,
        2,
      ),
    );
    console.log(
      "PASS: Context-built agents: review, draft/apply, role guidance, explicit Knowledge sources, provenance, cancellation and restart",
    );
  } catch (error) {
    console.log(await page?.getByRole("alert").allTextContents());
    await fs.mkdir("test-results", { recursive: true });
    await page
      ?.screenshot({ path: "test-results/box-built-agents-failure.png" })
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
