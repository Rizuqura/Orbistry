const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { createHash } = require("node:crypto");
const digest = (value) => createHash("sha256").update(value).digest("hex");
async function main() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-worldview-"));
  const vault = path.join(root, "vault"),
    data = path.join(root, "app-data");
  const source = "# Original user notes\nVAULT_SENTINEL_NEVER_INJECT";
  let app, page;
  const errors = [];
  try {
    await fs.mkdir(vault);
    await fs.mkdir(data);
    await fs.writeFile(path.join(vault, "original.md"), source);
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
    await page
      .getByRole("heading", { name: "WorldView", exact: true })
      .waitFor();
    assert.equal(
      (await page.locator(".worldview").innerText()).replace(/\s+/g, " "),
      "WorldView Your world begins here.",
    );
    assert.equal(
      await page
        .locator(".pnode, .planet-view, .planet-canvas, .planet-detail-panel")
        .count(),
      0,
    );
    await page.evaluate(() =>
      localStorage.setItem("planetview-animation", "true"),
    );
    await page.reload();
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page
      .getByRole("heading", { name: "WorldView", exact: true })
      .waitFor();
    assert.equal(await page.locator(".pnode").count(), 0);
    await fs.mkdir("test-results", { recursive: true });
    await page.screenshot({ path: "test-results/worldview-empty.png" });
    await page.getByRole("button", { name: "AGENT", exact: true }).click();
    await page
      .getByRole("button", { name: "+ Add agent", exact: true })
      .click();
    const add = page.getByRole("dialog", { name: "Add agent", exact: true });
    await add
      .getByRole("textbox", { name: "Agent name", exact: true })
      .fill("Reset agent");
    await add
      .getByRole("button", { name: "Create agent", exact: true })
      .click();
    await add.waitFor({ state: "hidden" });
    await page.evaluate(() =>
      window.orbistryDesktop.ai.settings({
        providerId: "ollama",
        modelId: "qwen3:4b",
      }),
    );
    await page.getByRole("button", { name: "+ New Chat", exact: true }).click();
    const setup = page.getByRole("dialog", {
      name: "New Reset agent chat",
      exact: true,
    });
    await setup
      .getByRole("button", { name: "Start Chat", exact: true })
      .click();
    await setup.waitFor({ state: "hidden" });
    const input = page.getByRole("textbox", {
      name: "Chat question",
      exact: true,
    });
    await input.fill("Say hello.");
    await page
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await page.locator(".chat-message-assistant .chat-run-id").waitFor();
    const first = await app.evaluate(() =>
      globalThis.onlineSmoke.localRequests.at(-1),
    );
    assert.deepEqual(
      first.messages.map((m) => m.role),
      ["system", "user"],
    );
    assert.doesNotMatch(
      JSON.stringify(first),
      /VAULT_SENTINEL_NEVER_INJECT|original.md|approved-source|agent-construction-reference/,
    );
    assert.equal(first.tools, undefined);
    await input.fill("Remember my greeting.");
    await page
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await page.locator(".chat-message-assistant .chat-run-id").nth(1).waitFor();
    const second = await app.evaluate(() =>
      globalThis.onlineSmoke.localRequests.at(-1),
    );
    assert.deepEqual(
      second.messages.map((m) => m.role),
      ["system", "user", "assistant", "user"],
    );
    await page.screenshot({ path: "test-results/worldview-agent-chat.png" });
    const conversations = await page.evaluate(() =>
      window.orbistryDesktop.ai.listConversations(),
    );
    assert.equal(conversations.at(-1).schemaVersion, 7);
    await page.getByRole("button", { name: "WorldView", exact: true }).click();
    await page
      .getByRole("heading", { name: "WorldView", exact: true })
      .waitFor();
    await page.getByRole("button", { name: "WORKSPACE", exact: true }).click();
    await page
      .getByRole("button", { name: /original.md/ })
      .first()
      .dblclick();
    await page
      .getByText("VAULT_SENTINEL_NEVER_INJECT", { exact: false })
      .first()
      .waitFor();
    assert.equal(
      digest(await fs.readFile(path.join(vault, "original.md"))),
      digest(source),
    );
    assert.deepEqual(errors, []);
    await fs.writeFile(
      "test-results/worldview-reset-ui.json",
      JSON.stringify(
        {
          status: "passed",
          worldview: "empty across reload with legacy state present",
          agent: "created and answered two turns without sources/tools",
          historyRoles: second.messages.map((m) => m.role),
          vaultSourceHash: digest(source),
          errors,
        },
        null,
        2,
      ),
    );
    console.log(
      "PASS: empty WorldView, legacy-state isolation, agent creation/chat/history, navigation and intact Vault reader.",
    );
  } catch (error) {
    if (page) {
      await fs.mkdir("test-results", { recursive: true });
      await page
        .screenshot({ path: "test-results/worldview-reset-failure.png" })
        .catch(() => {});
      console.error((await page.locator("body").innerText()).slice(-2500));
    }
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
