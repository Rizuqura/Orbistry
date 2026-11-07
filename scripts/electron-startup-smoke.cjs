const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");
async function main() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "qterminal-startup-"));
  let app;
  try {
    await fs.writeFile(path.join(root, "note.md"), "Startup fixture.");
    const env = {
      ...process.env,
      WONNYY_SMOKE_DATA: path.join(root, ".wonnyy", "app-data"),
      WONNYY_VAULT_PATH: root,
    };
    delete env.ELECTRON_RUN_AS_NODE;
    delete env.ELECTRON_START_URL;
    app = await electron.launch({
      args: [
        path.resolve("scripts/electron-startup-smoke-main.cjs"),
        "--hidden",
      ],
      env,
      timeout: 30000,
    });
    const page = await app.firstWindow();
    page.setDefaultTimeout(20000);
    const screen = page.getByRole("region", { name: "Orbistry startup" });
    for (let run = 0; run < 2; run++) {
      if (run) {
        await app.evaluate(() => globalThis.holdStartup());
        await page.reload();
      }
      await screen.waitFor();
      assert.equal(await page.title(), "Orbistry");
      assert.equal(await app.evaluate(({ app }) => app.getName()), "Orbistry");
      assert.equal(
        await app.evaluate(
          ({ nativeImage }, iconPath) =>
            nativeImage.createFromPath(iconPath).isEmpty(),
          path.resolve("build/icon.png"),
        ),
        false,
      );
      await page.waitForFunction(() => {
        const logos = [
          ...document.querySelectorAll(".brand-mark, .startup-brand"),
        ];
        return (
          logos.length === 2 &&
          logos.every((image) => image.complete && image.naturalWidth > 0)
        );
      });
      assert.equal(await page.locator("main").evaluate((el) => el.inert), true);
      assert.equal(
        await page
          .getByRole("progressbar", { name: "Startup progress" })
          .getAttribute("value"),
        "10",
      );
      if (!run) {
        await fs.mkdir("test-results", { recursive: true });
        await page.evaluate(async () => {
          const background = getComputedStyle(
            document.querySelector(".startup-screen"),
          ).backgroundImage;
          const match = background.match(/url\(["']?(.*?)["']?\)/);
          if (!match || !background.includes("linear-gradient"))
            throw Error("Missing startup artwork or dark overlay");
          await new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = resolve;
            image.onerror = () =>
              reject(Error("Startup artwork failed to load"));
            image.src = match[1];
          });
        });
        await page.screenshot({ path: "test-results/startup.png" });
        const viewport = page.viewportSize();
        await page.setViewportSize({ width: 480, height: 720 });
        const button = screen.getByRole("button", {
          name: "Continue to workspace",
        });
        await button.focus();
        const bounds = await button.boundingBox();
        assert.ok(
          bounds.x >= 0 &&
            bounds.x + bounds.width <= 480 &&
            bounds.y + bounds.height <= 720,
        );
        await page.screenshot({ path: "test-results/startup-narrow.png" });
        await page.setViewportSize({ width: 900, height: 480 });
        await button.scrollIntoViewIfNeeded();
        assert.ok(await button.isVisible());
        await page.screenshot({ path: "test-results/startup-short.png" });
        await page.setViewportSize(viewport ?? { width: 1440, height: 860 });
      }
      await app.evaluate(() => globalThis.releaseStartup());
      await screen.waitFor({ state: "hidden" });
      assert.equal(
        await page.locator("main").evaluate((el) => el.inert),
        false,
      );
      assert.equal(
        (await page.evaluate(() => window.wonnyyDesktop.ai.listConversations()))
          .length,
        0,
      );
    }
    await app.evaluate(() => {
      globalThis.holdStartup();
      globalThis.failStartup = true;
    });
    await page.reload();
    await screen.waitFor();
    await app.evaluate(() => globalThis.releaseStartup());
    await screen.getByRole("alert").waitFor();
    await screen.getByRole("button", { name: "Continue to workspace" }).click();
    await screen.waitFor({ state: "hidden" });
    assert.equal(await page.locator("main").evaluate((el) => el.inert), false);
    console.log(
      "PASS: startup artwork and dark gradient load; narrow/short layouts and keyboard focus; progress on each renderer start; completion unlocks workspace without creating chats; scan failure allows recovery",
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
  console.error(error.stack);
  process.exitCode = 1;
});
