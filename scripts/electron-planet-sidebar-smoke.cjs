const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");
async function main() {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-planet-sidebar-"),
  );
  let app, page;
  const errors = [];
  try {
    for (const name of [
      "research.md",
      "macro-series-with-a-long-source-name.md",
      "method.md",
    ])
      await fs.writeFile(
        path.join(root, name),
        "Reviewed fixture evidence. ".repeat(140),
      );
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
      await bridge.context.add([
        "research.md",
        "macro-series-with-a-long-source-name.md",
        "method.md",
      ]);
      for (const name of [
        "Algo Journal",
        "Self Research",
        "PriceData",
        "Orbistry Agent Context",
        "ChronoZ Macro Encoder Knowledge",
      ])
        await bridge.ai.saveContextBox({ name });
    });
    await page.reload();
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page
      .getByRole("button", { name: "PLANET VIEW", exact: true })
      .click();
    const sidebar = page.getByRole("complementary", {
      name: "Planet details and context",
    });
    const closeChat = page.getByRole("button", {
      name: "Close Orbistry Agent",
      exact: true,
    });
    if (await closeChat.isVisible()) await closeChat.click();
    await sidebar.getByText("3 approved sources", { exact: true }).waitFor();
    assert.equal(await sidebar.locator(".context-manager-box-row").count(), 5);
    await sidebar.getByRole("button", { name: "ALL", exact: true }).click();
    assert.equal(
      await sidebar
        .getByRole("button", { name: "ALL", exact: true })
        .getAttribute("aria-pressed"),
      "true",
    );
    await sidebar.getByRole("button", { name: "ANY", exact: true }).click();
    const filter = sidebar.getByRole("button", {
      name: "Filter Algo Journal on Planet",
      exact: true,
    });
    await filter.click();
    assert.equal(await filter.getAttribute("aria-pressed"), "true");
    await filter.click();
    await sidebar
      .getByRole("textbox", { name: "New Station", exact: true })
      .fill("Reading");
    await sidebar
      .getByRole("button", { name: "Create Station", exact: true })
      .click();
    await sidebar
      .locator(".station-row")
      .getByText("Reading", { exact: true })
      .waitFor();
    await sidebar
      .getByRole("textbox", { name: "Filter Stations", exact: true })
      .fill("Absent");
    assert.equal(await sidebar.locator(".station-row").count(), 0);
    await sidebar
      .getByRole("textbox", { name: "Filter Stations", exact: true })
      .fill("");
    await page.setViewportSize({ width: 1440, height: 900 });
    const divider = sidebar.getByRole("separator", {
      name: "Resize Planet details and context",
    });
    await divider.focus();
    await divider.press("Home");
    await divider.press("ArrowLeft");
    assert.equal(await divider.getAttribute("aria-valuenow"), "370");
    const handle = await divider.boundingBox();
    await page.mouse.move(handle.x + handle.width / 2, handle.y + 100);
    await page.mouse.down();
    await page.mouse.move(handle.x - 80, handle.y + 100, { steps: 5 });
    await page.mouse.up();
    const resized = Number(await divider.getAttribute("aria-valuenow"));
    assert.ok(resized >= 450);
    const vaultFont = await page
      .locator(".file-row")
      .first()
      .evaluate((el) => getComputedStyle(el).fontSize);
    assert.equal(
      await sidebar.evaluate((el) => getComputedStyle(el).fontSize),
      vaultFont,
    );
    assert.equal(
      await sidebar
        .locator(".planet-detail-scroll")
        .evaluate((el) => getComputedStyle(el).zoom),
      "0.65",
    );
    await page.reload();
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    assert.equal(Number(await divider.getAttribute("aria-valuenow")), resized);
    const restoredChat = page.getByRole("button", {
      name: "Close Orbistry Agent",
      exact: true,
    });
    if (await restoredChat.isVisible()) await restoredChat.click();
    await divider.focus();
    await divider.press("Home");
    await fs.mkdir("test-results", { recursive: true });
    const sizes = [
      [1920, 1800],
      [1440, 900],
      [1024, 768],
      [800, 650],
      [680, 700],
      [480, 640],
    ];
    for (const [width, height] of sizes) {
      await page.setViewportSize({ width, height });
      await sidebar.locator(".planet-detail-scroll").evaluate((el) => {
        el.scrollTop = 0;
      });
      const layout = await sidebar.evaluate((el) => {
        const rect = el.getBoundingClientRect();
        const scroll = el.querySelector(".planet-detail-scroll");
        const style = getComputedStyle(el);
        return {
          x: rect.x,
          y: rect.y,
          right: rect.right,
          bottom: rect.bottom,
          width: rect.width,
          contentWidth: scroll.scrollWidth,
          clientWidth: scroll.clientWidth,
          color: style.color,
          cyan: style.getPropertyValue("--detail-cyan").trim(),
        };
      });
      assert.ok(
        layout.x >= 0 &&
          layout.right <= width + 1 &&
          layout.bottom <= height + 1,
        JSON.stringify({ width, height, layout }),
      );
      assert.ok(
        layout.contentWidth <= layout.clientWidth + 1,
        JSON.stringify({ width, height, layout }),
      );
      assert.equal(layout.cyan, "#4de3e9");
      if (width === 1920)
        await sidebar.screenshot({
          path: "test-results/planet-sidebar-reference.png",
        });
      if (width === 1440 || width === 680 || width === 480)
        await page.screenshot({
          path: "test-results/planet-sidebar-" + width + ".png",
        });
      if (width === 680) {
        assert.equal(
          await divider.getAttribute("aria-orientation"),
          "horizontal",
        );
        await divider.focus();
        const before = Number(await divider.getAttribute("aria-valuenow"));
        await divider.press("ArrowDown");
        assert.equal(
          Number(await divider.getAttribute("aria-valuenow")),
          before - 10,
        );
        const top = await divider.boundingBox();
        await page.mouse.move(top.x + 100, top.y + top.height / 2);
        await page.mouse.down();
        await page.mouse.move(top.x + 100, top.y - 40, { steps: 4 });
        await page.mouse.up();
        assert.ok(Number(await divider.getAttribute("aria-valuenow")) > before);
      }
      await sidebar
        .getByRole("button", {
          name: "Filter ChronoZ Macro Encoder Knowledge on Planet",
          exact: true,
        })
        .scrollIntoViewIfNeeded();
      await sidebar
        .getByRole("button", {
          name: "Filter ChronoZ Macro Encoder Knowledge on Planet",
          exact: true,
        })
        .focus();
    }
    await page.setViewportSize({ width: 1440, height: 900 });
    await sidebar
      .getByRole("button", {
        name: "Remove method.md from selected context",
        exact: true,
      })
      .click();
    await sidebar.getByText("2 approved sources", { exact: true }).waitFor();
    await sidebar
      .getByRole("button", { name: "CREATE CONTEXT BOX", exact: true })
      .click();
    await sidebar
      .getByRole("textbox", { name: "Context Box name", exact: true })
      .fill("New reviewed box");
    await sidebar
      .getByRole("button", { name: "CREATE CONTEXT BOX", exact: true })
      .click();
    await sidebar.getByText("New reviewed box", { exact: true }).waitFor();
    assert.equal(
      await page.evaluate(
        async () => (await window.orbistryDesktop.ai.listConversations()).length,
      ),
      0,
    );
    await sidebar
      .getByRole("button", { name: "Open Context Box library", exact: true })
      .click();
    await page
      .getByRole("dialog", { name: "Context Box library", exact: true })
      .waitFor();
    assert.deepEqual(errors, []);
    console.log(
      "PASS: reference sidebar colors, responsive bounds at six resolutions, source removal, box creation, library, Station search, ANY/ALL and box filtering; no automatic chats",
    );
  } catch (error) {
    await page
      ?.screenshot({ path: "test-results/planet-sidebar-failure.png" })
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
