const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises"),
  path = require("node:path"),
  os = require("node:os");
async function main() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-soft-"));
  let app, page;
  const errors = [];
  const transparent = (color) =>
    color === "transparent" ||
    (color.startsWith("rgba(") && color.endsWith(", 0)"));
  const borderless = async (locator) =>
    assert.ok(
      await locator.evaluate((el) => {
        const s = getComputedStyle(el);
        return [
          s.borderTopColor,
          s.borderRightColor,
          s.borderBottomColor,
          s.borderLeftColor,
        ].every(
          (color) =>
            color === "transparent" ||
            (color.startsWith("rgba(") && color.endsWith(", 0)")),
        );
      }),
    );
  try {
    await fs.writeFile(path.join(root, "a.md"), "ALPHA allocation is 25%.");
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
    await page.locator('.file-row[title="a.md"]').waitFor();
    await borderless(page.locator(".knowledge-sidebar"));
    await borderless(page.locator(".search-box"));
    const change = page
      .getByRole("button", { name: "Change Universe", exact: true })
      .first();
    await borderless(change);
    await change.hover();
    assert.equal(
      await change.evaluate((el) => getComputedStyle(el).boxShadow),
      "none",
    );
    const active = await page.locator(".top-nav .active").evaluate((el) => ({
      height: document.querySelector(".top-bar").getBoundingClientRect().height,
      color: getComputedStyle(el).borderBottomColor,
      text: el.textContent,
    }));
    assert.equal(active.height, 25);
    assert.equal(active.text, "WorldView");
    assert.equal(transparent(active.color), false);
    await borderless(page.locator(".chat-panel-floating"));
    await page
      .getByRole("button", { name: "Open Context Box library", exact: true })
      .click();
    const library = page.getByRole("dialog", {
      name: "Context Box library",
      exact: true,
    });
    await borderless(library);
    assert.notEqual(
      await library.evaluate((el) => getComputedStyle(el).boxShadow),
      "none",
    );
    await library
      .getByRole("button", { name: "Close library", exact: true })
      .click();
    await page.getByRole("button", { name: "WORKSPACE", exact: true }).click();
    await page.locator('.file-row[title="a.md"]').dblclick();
    await borderless(page.locator(".document-pane"));
    await borderless(
      page.getByRole("textbox", { name: "Chat question", exact: true }),
    );
    await fs.mkdir("test-results", { recursive: true });
    await page.screenshot({ path: "test-results/soft-workspace.png" });
    await page.getByRole("button", { name: "AGENT", exact: true }).click();
    await borderless(
      page.locator('.agent-bot-row[data-agent-id="wonnyy-agent"]'),
    );
    await borderless(page.locator('.agent-bot-row[data-agent-id="chronoz"]'));
    await page
      .locator('.agent-bot-row[data-agent-id="chronoz"] .agent-contact-toggle')
      .hover();
    assert.notEqual(
      await page
        .locator(
          '.agent-bot-row[data-agent-id="chronoz"] .agent-contact-toggle',
        )
        .evaluate((el) => getComputedStyle(el).boxShadow),
      "none",
    );
    await page
      .getByRole("button", { name: "Orbistry Agent settings", exact: true })
      .click();
    const agentSettings = page.getByRole("dialog", {
      name: "Orbistry Agent settings",
      exact: true,
    });
    await borderless(agentSettings);
    await page.keyboard.press("Escape");
    await page.getByRole("button", { name: "SETTINGS", exact: true }).click();
    await borderless(page.locator(".ai-connect-card").first());
    const providers = page.getByRole("navigation", {
      name: "Model catalogs",
      exact: true,
    });
    const modelsTab = providers.getByRole("button", {
      name: "Provided Models",
      exact: true,
    });
    await borderless(modelsTab);
    await modelsTab.hover();
    assert.notEqual(
      await modelsTab.evaluate((el) => getComputedStyle(el).boxShadow),
      "none",
    );
    await page.keyboard.press("Tab");
    await modelsTab.focus();
    assert.match(
      await modelsTab.evaluate((el) => getComputedStyle(el).boxShadow),
      /203, 215, 217/,
    );
    assert.ok(
      await modelsTab.evaluate(
        (el) =>
          el.matches(":focus-visible") &&
          getComputedStyle(el).outlineStyle === "none" &&
          getComputedStyle(el).boxShadow !== "none",
      ),
    );
    await modelsTab.click();
    const key = page.getByLabel(/API key/i).first();
    await borderless(key);
    await page.screenshot({ path: "test-results/soft-settings.png" });
    assert.deepEqual(errors, []);
    console.log(
      "PASS: borderless Workspace/Planet/Agent/Settings/dialog surfaces; soft hover shadows and visible keyboard focus; compact active navbar preserved",
    );
    await fs.writeFile(
      "test-results/soft-surfaces.json",
      JSON.stringify(
        {
          passed: true,
          transport: "synthetic",
          keyboardFocus: "soft glow",
          navbar: "compact amber underline",
        },
        null,
        2,
      ),
    );
  } catch (e) {
    await page
      ?.screenshot({ path: "test-results/soft-failure.png" })
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
