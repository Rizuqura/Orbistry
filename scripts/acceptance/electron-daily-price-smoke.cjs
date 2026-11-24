const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");
const { createChip } = require("./electron-worldview-smoke.cjs");
const { verifyDailyPrices } = require("./worldview-price-check.cjs");

/** Runs focused native price acceptance in a temporary Universe, using the shared WorldView creation workflow and synthetic market adapter. */
async function main() {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-price-native-"),
  );
  const vault = path.join(root, "Universe"),
    data = path.join(root, "app-data");
  let app, page;
  try {
    await fs.mkdir(vault);
    await fs.mkdir(data);
    const env = {
      ...process.env,
      ORBISTRY_VAULT_PATH: vault,
      ORBISTRY_SMOKE_DATA: data,
    };
    delete env.ELECTRON_RUN_AS_NODE;
    delete env.ELECTRON_START_URL;
    app = await electron.launch({
      args: [
        path.resolve("scripts/acceptance/electron-online-smoke-main.cjs"),
        "--hidden",
        "--disable-renderer-backgrounding",
        "--disable-background-timer-throttling",
      ],
      env,
      timeout: 30000,
    });
    page = await app.firstWindow();
    page.setDefaultTimeout(20000);
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await app.evaluate(({ BrowserWindow }) =>
      BrowserWindow.getAllWindows()[0].showInactive(),
    );
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page
      .getByRole("heading", { name: "WorldView", exact: true })
      .waitFor();
    const result = await verifyDailyPrices({ app, page, vault, createChip });
    assert.deepEqual(errors, []);
    await fs.writeFile(
      "test-results/daily-price-native.json",
      JSON.stringify({ ...result, errors }, null, 2),
    );
    console.log(
      "PASS: daily price native chart, persistence, keyboard, refresh and cached offline view.",
    );
  } catch (error) {
    if (page) {
      await page.screenshot({
        path: "test-results/daily-price-native-failure.png",
      });
      console.error((await page.locator("body").innerText()).slice(-2000));
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
main().catch(function failed(error) {
  console.error(error);
  process.exitCode = 1;
});
