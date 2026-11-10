const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");
async function main() {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-message-retry-"),
  );
  let app, page;
  const errors = [];
  try {
    await fs.writeFile(path.join(root, "a.md"), "ALPHA allocation is 25%.");
    const env = {
      ...process.env,
      ORBISTRY_VAULT_PATH: root,
      ORBISTRY_SMOKE_DATA: path.join(root, ".wonnyy", "app-data"),
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
    await page.evaluate(async () => {
      const bridge = window.orbistryDesktop;
      await bridge.ai.saveCredential({
        providerId: "openrouter",
        apiKey: "sk-or-v1-synthetic-smoke-key",
      });
      await bridge.ai.settings({
        providerId: "openrouter",
        modelId: "~vendor/model-latest",
      });
      await bridge.ai.editContextBox({
        action: "create",
        name: "Retry research",
        paths: ["a.md"],
      });
    });
    const reopen = async () => {
      await page.reload();
      await page.locator(".startup-screen").waitFor({ state: "hidden" });
      await page.getByRole("button", { name: "AGENT", exact: true }).click();
    };
    await reopen();
    await page
      .getByRole("button", { name: "+ New Chat", exact: true })
      .first()
      .click();
    const picker = page.getByRole("dialog", { name: "New Orbistry Agent chat" });
    await picker.getByRole("radio", { name: /Retry research/ }).check();
    await picker
      .getByRole("button", { name: "Start Chat", exact: true })
      .click();
    await picker.waitFor({ state: "hidden" });
    const composer = () =>
      page.getByRole("textbox", { name: "Chat question", exact: true });
    const waitAttempt = async (count, status) => {
      await page.waitForFunction(
        async ({ count, status }) => {
          const chat = (await window.orbistryDesktop.ai.listConversations())[0];
          return (
            chat?.attempts.length === count &&
            chat.attempts.at(-1).status === status
          );
        },
        { count, status },
      );
      await page
        .getByRole("button", { name: "Send message", exact: true })
        .waitFor();
    };
    const counts = async (users, answers) => {
      await page.waitForFunction(
        ({ users, answers }) =>
          document.querySelectorAll(".chat-message-user").length === users &&
          document.querySelectorAll(
            '.chat-message-assistant:not([aria-label="Provisional response"])',
          ).length === answers,
        { users, answers },
      );
    };
    await app.evaluate(() => {
      globalThis.onlineSmoke.status = 400;
    });
    await composer().fill("What allocation is in the source?");
    await composer().press("Enter");
    await waitAttempt(1, "failed");
    await counts(1, 0);
    await composer().press("Enter");
    await waitAttempt(2, "failed");
    await counts(1, 0);
    await composer().fill("");
    await composer().press("Enter");
    await waitAttempt(3, "failed");
    await counts(1, 0);
    await reopen();
    await composer().press("Enter");
    await waitAttempt(4, "failed");
    await counts(1, 0);
    await app.evaluate(() => {
      globalThis.onlineSmoke.status = 200;
    });
    await page.getByRole("button", { name: "Retry", exact: true }).click();
    await waitAttempt(5, "succeeded");
    await counts(1, 1);
    const answer = page.locator(".chat-message-assistant").last();
    await answer.locator(".chat-message-actions summary").click();
    await fs.mkdir("test-results", { recursive: true });
    await page.screenshot({ path: "test-results/message-options.png" });
    await answer
      .getByRole("button", { name: "Delete message", exact: true })
      .click();
    await counts(1, 0);
    await reopen();
    await counts(1, 0);
    await app.evaluate(() => {
      globalThis.onlineSmoke.status = 400;
    });
    await composer().fill("An edited new question.");
    await composer().press("Enter");
    await waitAttempt(6, "failed");
    await counts(2, 0);
    let user = page.locator(".chat-message-user").last();
    await user.locator(".chat-message-actions summary").click();
    await user
      .getByRole("button", { name: "Delete message and replies", exact: true })
      .click();
    await counts(1, 0);
    assert.equal(await composer().inputValue(), "");
    await app.evaluate(() => {
      globalThis.onlineSmoke.status = 200;
      globalThis.onlineSmoke.checkDelayMs = 3000;
    });
    await composer().fill("Long response please.");
    await composer().press("Enter");
    await page
      .getByRole("button", { name: "Stop response", exact: true })
      .click();
    await waitAttempt(6, "cancelled");
    await counts(2, 0);
    await app.evaluate(() => {
      globalThis.onlineSmoke.checkDelayMs = 50;
    });
    await composer().press("Enter");
    await waitAttempt(7, "succeeded");
    await counts(2, 1);
    user = page.locator(".chat-message-user").last();
    await user.locator(".chat-message-actions summary").click();
    await user
      .getByRole("button", { name: "Delete message and replies", exact: true })
      .click();
    await counts(1, 0);
    await reopen();
    await counts(1, 0);
    user = page.locator(".chat-message-user").first();
    await user.locator(".chat-message-actions summary").click();
    await user
      .getByRole("button", { name: "Delete message and replies", exact: true })
      .click();
    await counts(0, 0);
    const saved = await page.evaluate(() =>
      window.orbistryDesktop.ai.listConversations(),
    );
    assert.equal(saved.length, 1);
    assert.deepEqual(saved[0].attempts, []);
    assert.deepEqual(errors, []);
    console.log(
      "PASS: repeated Enter failures, empty/reloaded Enter and Retry reuse one prompt; edited prompts remain independent; cancellation retry; bubble deletion and turn deletion persist without resurrection",
    );
  } catch (error) {
    await page
      ?.screenshot({ path: "test-results/message-retry-failure.png" })
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
