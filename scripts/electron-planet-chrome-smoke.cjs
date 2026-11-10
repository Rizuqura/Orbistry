const { _electron } = require("playwright");
const fs = require("node:fs/promises"),
  path = require("node:path"),
  os = require("node:os");
const assert = require("node:assert/strict");
async function main() {
  const root = await fs.mkdtemp(
      path.join(os.tmpdir(), "orbistry-planet-chrome-"),
    ),
    vault = path.join(root, "Universe");
  await fs.mkdir(path.join(vault, "Research"), { recursive: true });
  await fs.writeFile(
    path.join(vault, "Research", "notes.md"),
    "Reviewed research.",
  );
  const env = {
    ...process.env,
    ORBISTRY_VAULT_PATH: vault,
    ORBISTRY_SMOKE_DATA: path.join(root, "profile"),
  };
  delete env.ELECTRON_RUN_AS_NODE;
  delete env.ELECTRON_START_URL;
  let app;
  try {
    app = await _electron.launch({
      args: [
        path.resolve("scripts/electron-online-smoke-main.cjs"),
        "--hidden",
      ],
      env,
    });
    const page = await app.firstWindow();
    page.setDefaultTimeout(20000);
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.setViewportSize({ width: 1600, height: 1000 });
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page
      .getByRole("button", { name: "PLANET VIEW", exact: true })
      .click();
    await page.locator(".chat-panel-floating .chat-profile").waitFor();
    const inspect = () =>
      page.locator(".pv-canvas").evaluate((el) => {
        const rect = (selector) => {
          const r = el.querySelector(selector).getBoundingClientRect();
          return {
            left: r.left,
            top: r.top,
            right: r.right,
            bottom: r.bottom,
            width: r.width,
            height: r.height,
          };
        };
        const r = el.getBoundingClientRect(),
          orb = el.querySelector(".porb");
        return {
          canvas: {
            left: r.left,
            right: r.right,
            top: r.top,
            bottom: r.bottom,
          },
          chat: rect(".chat-panel-floating"),
          map: rect(".pmini"),
          controls: rect(".pctrl"),
          orb: {
            background: getComputedStyle(orb).backgroundImage,
            shadow: getComputedStyle(orb).boxShadow,
            filter: getComputedStyle(orb).filter,
          },
        };
      });
    let layout = await inspect();
    assert.ok(Math.abs(layout.chat.left - layout.canvas.left - 12) < 2);
    assert.ok(Math.abs(layout.canvas.bottom - layout.chat.bottom - 12) < 2);
    assert.ok(Math.abs(layout.canvas.right - layout.map.right - 12) < 2);
    assert.ok(layout.map.bottom + 8 <= layout.controls.top);
    assert.ok(layout.chat.right + 8 < layout.map.left);
    assert.deepEqual(layout.orb, {
      background: "none",
      shadow: "none",
      filter: "none",
    });
    assert.equal(
      await page
        .getByRole("checkbox", { name: "LIGHT VIEW", exact: true })
        .count(),
      0,
    );
    assert.equal(
      await page
        .getByRole("checkbox", { name: "FLAT VIEW (LOW GPU)", exact: true })
        .count(),
      0,
    );
    await page.evaluate(() => {
      localStorage.setItem("planetview-flat-mode", "false");
      localStorage.setItem("planetview-light-view", "true");
    });
    await page.reload();
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    assert.equal(await page.locator(".planet-light, .planet-flat").count(), 0);
    layout = await inspect();
    assert.deepEqual(layout.orb, {
      background: "none",
      shadow: "none",
      filter: "none",
    });
    const header = await page
      .locator(".chat-panel-floating .chat-header")
      .boundingBox();
    await page.mouse.move(header.x + 30, header.y + 8);
    await page.mouse.down();
    await page.mouse.move(header.x + 150, header.y - 60, { steps: 8 });
    await page.mouse.up();
    await page.getByRole("button", { name: "Reset", exact: true }).click();
    layout = await inspect();
    assert.ok(Math.abs(layout.chat.left - layout.canvas.left - 12) < 2);
    assert.ok(Math.abs(layout.canvas.bottom - layout.chat.bottom - 12) < 2);
    await fs.mkdir("test-results", { recursive: true });
    await page.screenshot({ path: "test-results/planet-chrome.png" });
    await page.setViewportSize({ width: 1000, height: 700 });
    await page.waitForFunction(() => {
      const canvas = document
        .querySelector(".pv-canvas")
        .getBoundingClientRect();
      const chat = document
        .querySelector(".chat-panel-floating")
        .getBoundingClientRect();
      return (
        chat.left >= canvas.left &&
        chat.right <= canvas.right + 1 &&
        chat.bottom <= canvas.bottom + 1
      );
    });
    layout = await inspect();
    assert.ok(
      layout.chat.left >= layout.canvas.left &&
        layout.chat.right <= layout.canvas.right + 1 &&
        layout.chat.bottom <= layout.canvas.bottom + 1,
    );
    assert.deepEqual(errors, []);
    console.log(
      JSON.stringify({
        removedViewToggles: true,
        legacyPreferencesIgnored: true,
        minimap: "right above controls",
        chatDefault: "bottom-left",
        rendererErrors: errors,
      }),
    );
  } finally {
    await app?.close();
  }
}
main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
