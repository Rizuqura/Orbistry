const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises"),
  path = require("node:path"),
  os = require("node:os");
async function main() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-usage-"));
  let app, page;
  const errors = [];
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
    page.setDefaultTimeout(15000);
    page.on("pageerror", (e) => errors.push(e.message));
    // Simulate an active window for the hidden test; exercise loss of focus below.
    await page.evaluate(() => {
      document.hasFocus = () => true;
    });
    await page.waitForFunction(() => window.orbistryDesktop?.apiVersion === 18);
    await page.evaluate(() => window.orbistryDesktop.ai.handshake(18));
    await page
      .getByRole("button", { name: "PLANET VIEW", exact: true })
      .click();
  };
  const monitor = () =>
    page.getByRole("complementary", {
      name: /usage monitor$/,
      exact: true,
    });
  try {
    await fs.writeFile(path.join(root, "a.md"), "Monitor test source.");
    await launch();
    await monitor().getByText("Ready", { exact: true }).waitFor();
    await page.evaluate(async () => {
      await window.orbistryDesktop.ai.saveCredential({
        providerId: "openrouter",
        apiKey: "sk-or-v1-synthetic-smoke-key",
      });
      await window.orbistryDesktop.ai.settings({
        providerId: "openrouter",
        modelId: "~vendor/model-latest",
      });
    });
    await monitor().getByText("$74.50 left", { exact: true }).waitFor();
    const reset = monitor().getByLabel("Credit reset timer");
    await reset.getByText(/Key resets in/).waitFor();
    const initialReset = await reset.innerText();
    await page.waitForFunction(
      (initial) =>
        document.querySelector(".usage-reset")?.textContent !== initial,
      initialReset,
    );
    assert.match(
      await reset.innerText(),
      /Key resets in (?:\d+d )?\d{2}:\d{2}:\d{2}/,
    );
    const toggle = monitor().getByRole("button", { name: /AI BUDGET/ });
    assert.equal(await toggle.getAttribute("aria-expanded"), "false");
    await toggle.press("Enter");
    await monitor().getByText("25.50% used", { exact: true }).waitFor();
    assert.equal(
      await monitor().getByRole("progressbar").getAttribute("aria-valuenow"),
      "25.5",
    );
    const placement = await page.evaluate(() => {
      const widget = document
        .querySelector(".planet-usage")
        .getBoundingClientRect();
      const canvas = document
        .querySelector(".pv-canvas")
        .getBoundingClientRect();
      const toolbar = document
        .querySelector(".planet-view-header")
        .getBoundingClientRect();
      return {
        left: widget.left - canvas.left,
        top: widget.top - canvas.top,
        below: widget.top >= toolbar.bottom,
      };
    });
    assert.ok(
      placement.left >= 10 &&
        placement.left <= 14 &&
        placement.top >= 10 &&
        placement.below,
    );
    const calls = await app.evaluate(
      () => globalThis.onlineSmoke.usageRequests,
    );
    await monitor().getByRole("button", { name: "Refresh usage" }).click();
    await monitor().getByText("Ready", { exact: true }).waitFor();
    assert.equal(
      await app.evaluate(() => globalThis.onlineSmoke.usageRequests),
      calls,
    );
    assert.doesNotMatch(
      await monitor().innerText(),
      /sk-or-|synthetic-smoke|1,000/,
    );
    // Verify the graph camera remains interactive outside the badge.
    const world = page.locator(".pworld");
    const before = await world.getAttribute("style");
    const canvas = await page.locator(".pv-canvas").boundingBox();
    await page.mouse.move(
      canvas.x + canvas.width * 0.4,
      canvas.y + canvas.height * 0.75,
    );
    await page.mouse.wheel(0, -100);
    await page.waitForFunction(
      (value) =>
        document.querySelector(".pworld").getAttribute("style") !== value,
      before,
    );
    const after = await world.getAttribute("style");
    const badge = await monitor().boundingBox();
    await page.mouse.move(badge.x + 20, badge.y + 20);
    await page.mouse.wheel(0, -100);
    assert.equal(await world.getAttribute("style"), after);
    await page.evaluate(() =>
      window.orbistryDesktop.ai.checkRemoteModel({
        providerId: "openrouter",
        model: "~vendor/model-latest",
      }),
    );
    await monitor().getByText("99", { exact: true }).waitFor();
    await monitor().getByText("12", { exact: true }).waitFor();
    await monitor()
      .getByText(/Completed requests on this device/)
      .waitFor();
    await fs.mkdir("test-results", { recursive: true });
    await page.screenshot({ path: "test-results/usage-monitor.png" });
    // Keep the independently floating chat from covering controls at narrow widths.
    const closeChat = page.getByRole("button", {
      name: "Close Orbistry Agent",
      exact: true,
    });
    if (await closeChat.isVisible()) await closeChat.click();
    await page.setViewportSize({ width: 680, height: 700 });
    assert.ok(
      await monitor().evaluate(
        (el) => el.getBoundingClientRect().right <= innerWidth,
      ),
    );
    await page.screenshot({ path: "test-results/usage-monitor-narrow.png" });
    // Refresh after throttle with a provider error: cached money must be gray/stale.
    await app.evaluate(() => {
      globalThis.onlineSmoke.usageStatus = 500;
    });
    await new Promise((r) => setTimeout(r, 5100));
    await monitor().getByRole("button", { name: "Refresh usage" }).click();
    await monitor().getByText("Stale", { exact: true }).waitFor();
    assert.ok((await monitor().getAttribute("class")).includes("unknown"));
    await monitor().getByText("$74.50 left", { exact: true }).waitFor();
    // Changing credentials clears prior values immediately; old key money never leaks.
    await page.evaluate(() =>
      window.orbistryDesktop.ai.saveCredential({
        providerId: "openrouter",
        apiKey: "sk-or-v1-other-synthetic-key",
      }),
    );
    await monitor().getByText("Auth required", { exact: true }).waitFor();
    assert.doesNotMatch(await monitor().innerText(), /74\.50/);
    await monitor()
      .getByRole("button", { name: "Provider settings", exact: true })
      .click();
    await page
      .getByRole("heading", { name: "Settings", exact: true })
      .waitFor();
    await page
      .getByRole("button", { name: "PLANET VIEW", exact: true })
      .click();
    await monitor().getByText("Auth required", { exact: true }).waitFor();
    await page.evaluate(() =>
      window.orbistryDesktop.ai.settings({
        providerId: "ollama",
        modelId: "qwen3:4b",
      }),
    );
    await monitor().getByText("Ready", { exact: true }).waitFor();
    // Inactive windows skip automatic provider requests.
    await page.evaluate(() => {
      document.hasFocus = () => false;
    });
    const paused = await app.evaluate(
      () => globalThis.onlineSmoke.usageRequests,
    );
    await page.evaluate(() => window.dispatchEvent(new Event("focus")));
    assert.equal(
      await app.evaluate(() => globalThis.onlineSmoke.usageRequests),
      paused,
    );
    await app.evaluate(({ session }) =>
      session.defaultSession.flushStorageData(),
    );
    await app.close();
    await launch();
    assert.equal(
      await monitor()
        .getByRole("button", { name: /AI BUDGET/ })
        .getAttribute("aria-expanded"),
      "true",
    );
    assert.deepEqual(errors, []);
    const checks = [
      "Verified USD, null wallet/token values, weekly cadence and progress",
      "Credit reset countdown is visible while collapsed and advances without provider polling",
      "Top-left placement, keyboard collapse and restart persistence",
      "Refresh throttling, stale error state, key/provider isolation",
      "Graph zoom outside badge and event isolation inside; narrow viewport",
      "Inactive window skips automatic fetches; synthetic encrypted credentials only",
    ];
    await fs.writeFile(
      "test-results/usage-monitor.json",
      JSON.stringify(
        {
          passed: true,
          checks,
          transport: "synthetic",
          liveAccountVerification: false,
        },
        null,
        2,
      ),
    );
    console.log("PASS: " + checks.join("; "));
  } catch (error) {
    await page
      ?.screenshot({ path: "test-results/usage-monitor-failure.png" })
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
main().catch((e) => {
  console.error(e.stack);
  process.exitCode = 1;
});
