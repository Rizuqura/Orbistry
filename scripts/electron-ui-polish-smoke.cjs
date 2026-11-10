const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises"),
  path = require("node:path"),
  os = require("node:os");
async function main() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-polish-"));
  let app, page;
  const errors = [];
  try {
    await fs.writeFile(path.join(root, "a.md"), "ALPHA allocation is 25%.");
    for (let i = 0; i < 35; i++)
      await fs.writeFile(path.join(root, `note-${i}.md`), "Research notes.");
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
    await page.locator('.file-row[title="a.md"]').waitFor();
    assert.equal(
      await page.locator(".knowledge-sidebar .context-boxes").count(),
      0,
    );
    const header = await page.evaluate(() => {
      const rect = (s) =>
        document.querySelector(s).getBoundingClientRect().toJSON();
      return {
        search: rect(".search-box"),
        title: rect(".vault-title"),
        change: rect(".vault-change"),
        refresh: rect(".refresh-button"),
        toggle: rect(".vault-window-toggle"),
        scheme: getComputedStyle(document.documentElement).colorScheme,
        scroll: getComputedStyle(document.querySelector(".tree"))
          .scrollbarColor,
      };
    });
    assert.ok(header.search.height >= 36 && header.change.height >= 24);
    assert.ok(
      header.title.top >= header.search.bottom &&
        header.title.bottom <= header.change.top,
    );
    assert.ok(header.refresh.right <= header.toggle.left);
    assert.equal(header.scheme, "dark");
    assert.doesNotMatch(header.scroll, /auto|255, 255, 255/);
    await page
      .getByRole("button", { name: "Rescan vault", exact: true })
      .click();
    await page.locator('.file-row[title="a.md"]').waitFor();
    await fs.mkdir("test-results", { recursive: true });
    await page.screenshot({ path: "test-results/polish-vault.png" });
    // The former sidebar library is available explicitly in the context manager.
    await page
      .getByRole("button", { name: "Open Context Box library", exact: true })
      .click();
    const library = page.getByRole("dialog", {
      name: "Context Box library",
      exact: true,
    });
    await library.waitFor();
    await library
      .getByRole("button", { name: "Close library", exact: true })
      .click();
    const panel = page.locator(".chat-panel-floating");
    async function checkWindowIcon(label, shape) {
      const button = panel.getByRole("button", { name: label, exact: true });
      assert.equal(await button.getAttribute("title"), label);
      assert.equal(await button.locator(`svg ${shape}`).count(), 1);
      assert.ok(
        await button.evaluate((el) => {
          const buttonBox = el.getBoundingClientRect();
          const icon = el.querySelector("svg").getBoundingClientRect();
          return (
            buttonBox.width >= 30 &&
            buttonBox.height >= 28 &&
            icon.left >= buttonBox.left &&
            icon.right <= buttonBox.right &&
            icon.top >= buttonBox.top &&
            icon.bottom <= buttonBox.bottom
          );
        }),
      );
    }
    await checkWindowIcon("Minimize chat window", "path");
    const original = await panel.boundingBox();
    await panel
      .getByRole("button", { name: "Minimize chat window", exact: true })
      .click();
    const minimized = await panel.boundingBox();
    await checkWindowIcon("Restore chat window", "rect");
    assert.ok(minimized.height >= 50 && minimized.height <= 54);
    assert.equal(
      await panel
        .getByRole("button", { name: "Open in Agent", exact: true })
        .isVisible(),
      false,
    );
    assert.equal(
      await panel
        .getByRole("button", { name: "Restore chat window", exact: true })
        .isVisible(),
      true,
    );
    assert.equal(await panel.locator(".chat-thread").isVisible(), false);
    const titleRect = await panel.locator(".agent-drag-title").boundingBox();
    assert.ok(
      titleRect.y >= minimized.y &&
        titleRect.y + titleRect.height <= minimized.y + minimized.height,
    );
    await page.screenshot({ path: "test-results/polish-minimized.png" });
    // Drag the small bar near the bottom, then restore the original full size.
    const canvas = await page.locator(".pv-canvas").boundingBox();
    await page.mouse.move(titleRect.x + 20, titleRect.y + 8);
    await page.mouse.down();
    await page.mouse.move(titleRect.x + 20, canvas.y + canvas.height - 25, {
      steps: 6,
    });
    await page.mouse.up();
    await panel
      .getByRole("button", { name: "Restore chat window", exact: true })
      .click();
    await page.waitForFunction(() => {
      const r = document
        .querySelector(".chat-panel-floating")
        .getBoundingClientRect();
      const p = document.querySelector(".pv-canvas").getBoundingClientRect();
      return (
        r.top >= p.top && r.bottom <= p.bottom + 1 && r.right <= p.right + 1
      );
    });
    const restored = await panel.boundingBox();
    assert.ok(
      Math.abs(restored.width - original.width) < 2 &&
        Math.abs(restored.height - original.height) < 2,
    );
    const before = await page.evaluate(() =>
      window.orbistryDesktop.ai.listConversations(),
    );
    await page.getByRole("button", { name: "AGENT", exact: true }).click();
    await page.getByText("2 contacts", { exact: true }).waitFor();
    const contact = page.getByRole("button", {
      name: "CHronoZ chats",
      exact: true,
    });
    await contact.focus();
    await contact.press("Enter");
    await page
      .getByRole("complementary", { name: "CHronoZ", exact: true })
      .waitFor();
    assert.deepEqual(
      await page.evaluate(() => window.orbistryDesktop.ai.listConversations()),
      before,
    );
    assert.equal(
      (await page.evaluate(() => window.orbistryDesktop.ai.getAgent())).id,
      "wonnyy-agent",
    );
    await page.screenshot({ path: "test-results/polish-agents.png" });
    assert.deepEqual(errors, []);
    const checks = [
      "Vault header controls/path/search do not overlap or shrink; library removed beneath vault",
      "Dark native and custom scrollbars",
      "Explicit context library still opens",
      "Minimized bar fits one row; restore clamps geometry after dragging",
      "CHronoZ keyboard selection creates no implicit chat",
    ];
    await fs.writeFile(
      "test-results/ui-polish.json",
      JSON.stringify({ passed: true, checks, transport: "synthetic" }, null, 2),
    );
    console.log("PASS: " + checks.join("; "));
  } catch (e) {
    await page
      ?.screenshot({ path: "test-results/polish-failure.png" })
      .catch(() => {});
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
