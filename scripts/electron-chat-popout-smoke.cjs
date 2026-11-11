const { _electron: electron } = require("playwright");
const fs = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");
const assert = require("node:assert/strict");

async function main() {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-chat-popout-"),
  );
  const vault = path.join(root, "vault");
  let app;
  const errors = [];
  try {
    await fs.mkdir(vault);
    await fs.writeFile(
      path.join(vault, "source.md"),
      "ALPHA allocation is 25%.",
    );
    const env = {
      ...process.env,
      ORBISTRY_SMOKE_DATA: path.join(root, "profile"),
      ORBISTRY_VAULT_PATH: vault,
    };
    delete env.ELECTRON_RUN_AS_NODE;
    delete env.ELECTRON_START_URL;
    app = await electron.launch({
      args: [
        path.resolve("scripts/electron-online-smoke-main.cjs"),
        "--hidden",
      ],
      env,
    });
    const page = await app.firstWindow();
    page.setDefaultTimeout(15000);
    page.on("pageerror", (error) => errors.push(error.message));
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page.getByRole("button", { name: "WorldView", exact: true }).click();
    await page.evaluate(async () => {
      await window.orbistryDesktop.ai.settings({
        providerId: "ollama",
        modelId: "qwen3:4b",
      });
      await window.orbistryDesktop.ai.editContextBox({
        action: "create",
        name: "Pop-out research",
        paths: ["source.md"],
      });
    });
    await page.reload();
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page.getByRole("button", { name: "+ New Chat", exact: true }).click();
    const picker = page.getByRole("dialog", {
      name: "New Orbistry Agent chat",
      exact: true,
    });
    await picker.getByRole("radio", { name: /Pop-out research/ }).check();
    await picker
      .getByRole("button", { name: "Create Chat", exact: true })
      .click();
    await picker.waitFor({ state: "hidden" });
    const conversationId = await page.evaluate(
      async () => (await window.orbistryDesktop.ai.listConversations())[0].id,
    );
    const composer = (target) =>
      target.getByRole("textbox", { name: "Chat question", exact: true });
    const draft = "Keep this draft while I detach the chat.";
    await composer(page).fill(draft);
    const opened = app.waitForEvent("window");
    await page
      .getByRole("button", { name: "Pop out chat", exact: true })
      .click();
    const popup = await opened;
    popup.setDefaultTimeout(15000);
    popup.on("pageerror", (error) => errors.push(error.message));
    await popup.locator(".chat-panel-window").waitFor();
    assert.equal(await composer(popup).inputValue(), draft);
    assert.equal(await page.locator(".chat-panel-floating").count(), 0);
    const presentation = await popup
      .locator(".chat-panel-window")
      .evaluate((panel) => ({
        display: getComputedStyle(panel).display,
        width: panel.getBoundingClientRect().width,
        height: panel.getBoundingClientRect().height,
        viewportHeight: innerHeight,
        node: typeof window.require,
      }));
    assert.equal(presentation.display, "flex");
    assert.ok(presentation.width > 400);
    assert.ok(Math.abs(presentation.height - presentation.viewportHeight) < 2);
    assert.equal(presentation.node, "undefined");
    const denied = await popup.evaluate(async () => {
      try {
        await window.orbistryDesktop.vault.getSnapshot();
        return false;
      } catch {
        return true;
      }
    });
    assert.equal(
      denied,
      true,
      "child document must not acquire its own trusted IPC identity",
    );
    await composer(popup).fill("What is the ALPHA allocation?");
    await popup
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await popup
      .locator(".chat-message-assistant")
      .filter({ hasText: "25%" })
      .waitFor();
    await fs.mkdir("test-results", { recursive: true });
    await popup.screenshot({ path: "test-results/chat-popout.png" });
    const conversation = await page.evaluate(
      async () => (await window.orbistryDesktop.ai.listConversations())[0],
    );
    assert.equal(conversation.id, conversationId);
    assert.ok(
      conversation.messages.some(
        (message) =>
          message.role === "assistant" && message.content.includes("25%"),
      ),
    );
    await composer(popup).fill("Draft edited in the native window");
    await page.getByRole("button", { name: "WORKSPACE", exact: true }).click();
    assert.equal(
      popup.isClosed(),
      false,
      "the pop-out survives changing the workspace view",
    );
    await page.getByRole("button", { name: "WorldView", exact: true }).click();
    await popup
      .getByRole("button", { name: "Attach to WorldView", exact: true })
      .click();
    await page.locator(".chat-panel-floating").waitFor();
    assert.equal(
      await composer(page).inputValue(),
      "Draft edited in the native window",
    );
    await page
      .locator(".chat-message-assistant")
      .filter({ hasText: "25%" })
      .waitFor();
    const reopened = app.waitForEvent("window");
    await page
      .getByRole("button", { name: "Pop out chat", exact: true })
      .click();
    const next = await reopened;
    await next.locator(".chat-panel-window").waitFor();
    await next.close();
    await page.locator(".chat-panel-floating").waitFor();
    assert.equal(
      await composer(page).inputValue(),
      "Draft edited in the native window",
    );
    const beforeReload = app.waitForEvent("window");
    await page
      .getByRole("button", { name: "Pop out chat", exact: true })
      .click();
    const closingWithWorkspace = await beforeReload;
    await closingWithWorkspace.locator(".chat-panel-window").waitFor();
    const closedWithReload = closingWithWorkspace.waitForEvent("close");
    await page.reload();
    await closedWithReload;
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page.locator(".chat-panel-floating").waitFor();
    assert.deepEqual(errors, []);
    console.log(
      "PASS: native chat window; shared conversation, Context Box and mock streamed reply; shared draft; dock/native-close restore; survives view switch; scoped IPC and no Node integration; styled full-height chat.",
    );
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
