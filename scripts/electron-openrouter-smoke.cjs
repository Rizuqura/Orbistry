const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");

async function main() {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-openrouter-ui-"),
  );
  let application, page;
  const errors = [],
    checks = [];
  const launch = async () => {
    const env = {
      ...process.env,
      ORBISTRY_SMOKE_DATA: path.join(root, ".wonnyy", "app-data"),
      ORBISTRY_VAULT_PATH: root,
      ORBISTRY_OLLAMA_URL: "http://127.0.0.1:11434",
    };
    delete env.ELECTRON_RUN_AS_NODE;
    delete env.ELECTRON_START_URL;
    application = await electron.launch({
      args: [
        path.resolve("scripts/electron-online-smoke-main.cjs"),
        "--hidden",
      ],
      env,
      timeout: 30000,
    });
    page = await application.firstWindow();
    page.setDefaultTimeout(15000);
    page.on("pageerror", (error) => errors.push(error.message));
    await page.getByRole("textbox", { name: "Chat question" }).waitFor();
    await page.waitForFunction(
      () =>
        document
          .querySelector(".agent-provider-indicator")
          ?.textContent.includes("Ollama") ||
        document
          .querySelector(".agent-provider-indicator")
          ?.textContent.includes("OpenRouter"),
    );
  };
  const setup = () =>
    page.getByRole("button", { name: "SETTINGS", exact: true }).click();
  const provider = (name) =>
    page
      .getByRole("navigation", { name: "AI providers" })
      .getByRole("button", { name: new RegExp(name) })
      .click();
  const workspace = () =>
    page.getByRole("button", { name: "Back to workspace" }).click();
  const send = async (text) => {
    const before = await page
      .locator(".chat-message-assistant .chat-run-id")
      .count();
    await page.getByRole("textbox", { name: "Chat question" }).fill(text);
    await page
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await page.waitForFunction(
      (count) =>
        document.querySelectorAll(".chat-message-assistant .chat-run-id")
          .length > count,
      before,
    );
  };
  try {
    await fs.writeFile(path.join(root, "a.md"), "ALPHA allocation is 25%.");
    await launch();
    const box = await page.evaluate(() =>
      window.orbistryDesktop.ai.editContextBox({
        action: "create",
        name: "Router research",
        paths: ["a.md"],
      }),
    );
    await page
      .getByRole("button", { name: "+ New Chat", exact: true })
      .first()
      .click();
    const picker = page.getByRole("dialog", { name: "New Orbistry Agent chat" });
    await picker.getByRole("radio", { name: /Router research/ }).check();
    await picker
      .getByRole("button", { name: "Create Chat", exact: true })
      .click();
    await picker.waitFor({ state: "hidden" });
    await send("Summarize this source.");
    const original = (
      await page.evaluate(() => window.orbistryDesktop.ai.listConversations())
    )[0];
    await setup();
    await provider("OpenRouter");
    assert.equal(
      await page.getByRole("region", { name: "NVIDIA credentials" }).count(),
      0,
    );
    const keyField = page.getByLabel("OpenRouter API key", { exact: true });
    // Drafting a credential must work while a registry refresh is in flight.
    await application.evaluate(() => {
      const originalFetch = globalThis.fetch;
      globalThis.fetch = async (...args) => {
        globalThis.fetch = originalFetch;
        await new Promise((resolve) => {
          const timer = setTimeout(resolve, 10000);
          globalThis.releaseCatalog = () => {
            clearTimeout(timer);
            resolve();
          };
        });
        return originalFetch(...args);
      };
    });
    await page
      .getByRole("button", { name: "Refresh models", exact: true })
      .click();
    await page
      .getByRole("button", { name: "Save key", exact: true })
      .isDisabled()
      .then((disabled) => assert.equal(disabled, true));
    assert.equal(await keyField.isEnabled(), true);
    await keyField.click();
    await keyField.pressSequentially("invalid:key-for-retry");
    assert.equal(await keyField.inputValue(), "invalid:key-for-retry");
    await application.evaluate(() => globalThis.releaseCatalog?.());
    await page
      .getByRole("button", { name: "Refresh models", exact: true })
      .waitFor({ state: "visible" });
    await page.waitForFunction(
      () => !document.querySelector(".ai-key-form button").disabled,
    );
    // Re-selecting the same provider must preserve the draft.
    await provider("OpenRouter");
    assert.equal(await keyField.inputValue(), "invalid:key-for-retry");
    await page.getByRole("button", { name: "Save key", exact: true }).click();
    await page.waitForFunction(
      () =>
        document.querySelector(".ai-key-form button").textContent ===
        "Save key",
    );
    assert.equal(
      await keyField.inputValue(),
      "invalid:key-for-retry",
      "Failed saves preserve the draft",
    );
    await keyField.click();
    await keyField.press("ControlOrMeta+A");
    await keyField.pressSequentially("sk-or-v1-synthetic-smoke-key");
    await application.evaluate(() => {
      globalThis.onlineSmoke.openrouterCatalogStatus = 503;
    });
    await page.getByRole("button", { name: "Save key", exact: true }).click();
    await page
      .getByText(
        "Key saved securely. Model discovery failed; see the connection error below.",
        { exact: true },
      )
      .waitFor();
    assert.equal(
      await keyField.inputValue(),
      "",
      "Committed keys clear even when discovery fails",
    );
    assert.equal(
      (
        await page.evaluate(() => window.orbistryDesktop.ai.models())
      ).providers.find((provider) => provider.id === "openrouter").configured,
      true,
    );
    await application.evaluate(() => {
      globalThis.onlineSmoke.openrouterCatalogStatus = 200;
    });
    await page
      .getByRole("button", { name: "Refresh models", exact: true })
      .click();
    const model = page
      .locator('[aria-label="OpenRouter models"] article')
      .filter({ hasText: "vendor/route-smoke:free" });
    await model.waitFor();
    await page.waitForFunction(
      () => document.querySelector(".ai-key-form input").value === "",
    );
    assert.equal(
      await page.getByLabel("OpenRouter API key", { exact: true }).inputValue(),
      "",
    );
    assert.equal(
      (await application.evaluate(() => globalThis.onlineSmoke.requests))
        .length,
      0,
      "OpenRouter key save discovers models without paid sample scans",
    );
    const credentialsFile = path.join(
      root,
      ".wonnyy",
      "app-data",
      "provider-credentials.json",
    );
    assert.doesNotMatch(
      await fs.readFile(credentialsFile, "utf8"),
      /sk-or-v1-synthetic-smoke-key/,
    );
    await page
      .getByRole("searchbox", { name: "Search models" })
      .fill("route-smoke");
    assert.equal(await page.locator(".model-list article").count(), 1);
    await model
      .getByRole("button", { name: "Check model", exact: true })
      .click();
    await model.getByText(/Check passed/).waitFor();
    const sample = await application.evaluate(
      () => globalThis.onlineSmoke.requests,
    );
    assert.equal(sample.length, 1);
    assert.equal(
      JSON.parse(sample[0].messages[1].content).sourceId,
      "orbistry-model-check",
    );
    await page
      .getByRole("searchbox", { name: "Search models" })
      .fill("~vendor/model-latest");
    const alias = page
      .locator('[aria-label="OpenRouter models"] article')
      .filter({ hasText: "~vendor/model-latest" });
    await alias
      .getByRole("button", { name: "Check model", exact: true })
      .click();
    await alias.getByText(/Check passed/).waitFor();
    await page
      .getByRole("searchbox", { name: "Search models" })
      .fill("route-smoke");
    checks.push(
      "Keyboard key entry, committed save during catalog outage, refresh recovery and alias model checks pass",
    );
    await model
      .getByRole("button", { name: "Use online", exact: true })
      .click();
    await page.waitForFunction(() =>
      document
        .querySelector(".ai-current")
        ?.textContent.includes("vendor/route-smoke:free"),
    );
    await fs.mkdir("test-results", { recursive: true });
    await page.screenshot({ path: "test-results/ai-terminal-openrouter.png" });
    const appearance = await page
      .locator(".ai-terminal")
      .evaluate((element) => {
        const style = getComputedStyle(element);
        return {
          font: style.fontFamily,
          fontSize: style.fontSize,
          padding: style.paddingTop,
          background: style.backgroundColor,
        };
      });
    assert.equal(appearance.fontSize, "14px");
    assert.equal(appearance.padding, "40px");
    await page.setViewportSize({ width: 800, height: 720 });
    assert.ok(
      await page
        .locator(".ai-terminal")
        .evaluate(
          (element) => element.getBoundingClientRect().right <= innerWidth,
        ),
    );
    assert.equal(
      await page
        .locator(".ai-terminal")
        .evaluate((element) => element.scrollWidth <= element.clientWidth),
      true,
    );
    await page.screenshot({ path: "test-results/ai-terminal-narrow.png" });
    await page.setViewportSize({ width: 1424, height: 900 });
    await workspace();
    await send("Continue with this source.");
    const online = (
      await page.evaluate(() => window.orbistryDesktop.ai.listConversations())
    )[0];
    assert.equal(online.id, original.id);
    assert.equal(online.contextBoxId, box.id);
    assert.equal(online.messages.at(-1).provider, "openrouter");
    assert.deepEqual(
      online.messages.at(-1).sources,
      original.messages[1].sources,
    );
    assert.doesNotMatch(
      await page.locator(".chat-thread").innerText(),
      /Hidden reasoning/,
    );
    checks.push(
      "Secure key save, catalog discovery without automatic inference, model search/check, minimalist responsive UI and local-to-OpenRouter continuity",
    );
    await application.evaluate(() => {
      globalThis.onlineSmoke.status = 402;
    });
    await page
      .getByRole("textbox", { name: "Chat question" })
      .fill("Explain the source.");
    await page
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await page
      .locator(".chat-notice")
      .filter({ hasText: /credits are insufficient/ })
      .waitFor();
    await application.evaluate(() => {
      globalThis.onlineSmoke.status = 200;
    });
    await page.getByRole("button", { name: "Retry", exact: true }).click();
    await page.waitForFunction(
      () =>
        document.querySelectorAll(".chat-message-assistant .chat-run-id")
          .length === 3,
    );
    const retried = (
      await page.evaluate(() => window.orbistryDesktop.ai.listConversations())
    )[0];
    assert.equal(
      retried.messages.filter(
        (message) => message.content === "Explain the source.",
      ).length,
      1,
    );
    await application.evaluate(() => {
      globalThis.onlineSmoke.checkDelayMs = 5000;
    });
    await page.evaluate(() => {
      window.routerStreamEvents = [];
      window.orbistryDesktop.ai.onEvent((event) =>
        window.routerStreamEvents.push({
          state: event.state,
          content: event.content,
        }),
      );
    });
    await page
      .getByRole("textbox", { name: "Chat question" })
      .fill("Summarize again.");
    await page
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await page
      .getByRole("button", { name: "Stop response", exact: true })
      .waitFor();
    await page.waitForFunction(
      () =>
        window.routerStreamEvents.some(
          (event) =>
            event.state === "GENERATING" && event.content?.startsWith("ALPHA"),
        ),
      null,
      { polling: 50 },
    );
    await page
      .getByRole("button", { name: "Stop response", exact: true })
      .click();
    await page.waitForFunction(
      () =>
        document.querySelector(".chat-runtime-status")?.textContent ===
        "RUN CANCELLED",
    );
    await application.evaluate(() => {
      globalThis.onlineSmoke.checkDelayMs = 0;
    });
    checks.push(
      "Credit-limit failure is actionable; explicit retry avoids duplicate messages; streaming cancellation stays neutral",
    );
    await application.close();
    application = null;
    await launch();
    await setup();
    await page.getByLabel("OpenRouter API key", { exact: true }).waitFor();
    await page
      .getByText("Your key is saved securely on this device.", { exact: true })
      .waitFor();
    assert.equal(
      (
        await page.evaluate(() => window.orbistryDesktop.ai.listConversations())
      )[0].id,
      original.id,
    );
    await provider("Ollama");
    await page
      .locator('[aria-label="Local models"] article')
      .getByRole("button", { name: "Use", exact: true })
      .click();
    await provider("OpenRouter");
    await page.getByRole("button", { name: "Remove key", exact: true }).click();
    await page.getByText("Not configured", { exact: true }).waitFor();
    assert.equal(
      JSON.parse(await fs.readFile(credentialsFile, "utf8")).openrouter,
      null,
    );
    checks.push(
      "Restart restores encrypted credentials, model and history; switching back and removing the key work",
    );
    assert.deepEqual(errors, []);
    await fs.writeFile(
      "test-results/electron-openrouter.json",
      JSON.stringify(
        { passed: true, transport: "synthetic OpenRouter", appearance, checks },
        null,
        2,
      ),
    );
    process.stdout.write("PASS: " + checks.join("; ") + "\n");
  } catch (error) {
    await fs.mkdir("test-results", { recursive: true });
    if (page && !page.isClosed()) {
      await fs.writeFile(
        "test-results/openrouter-events.json",
        JSON.stringify(
          await page.evaluate(() => window.routerStreamEvents ?? []),
          null,
          2,
        ),
      );
      await page
        .screenshot({ path: "test-results/openrouter-failure.png" })
        .catch(() => {});
      await fs.writeFile(
        "test-results/openrouter-failure.txt",
        await page.locator("body").innerText(),
      );
    }
    throw error;
  } finally {
    await application?.close();
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
