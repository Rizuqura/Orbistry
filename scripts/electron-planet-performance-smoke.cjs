const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises"),
  path = require("node:path"),
  os = require("node:os");
async function main() {
  const root = await fs.realpath(
    await fs.mkdtemp(path.join(os.tmpdir(), "qterminal-planet-performance-")),
  );
  const vault = path.join(root, "vault"),
    profile = path.join(root, "profile");
  let app, page;
  const errors = [];
  try {
    for (let i = 0; i < 10; i++) {
      const folder = path.join(vault, "Research-" + i);
      await fs.mkdir(folder, { recursive: true });
      await Promise.all(
        Array.from({ length: 20 }, (_, j) =>
          fs.writeFile(
            path.join(folder, `source-${j}.md`),
            "Synthetic reviewed research.",
          ),
        ),
      );
    }
    await fs.mkdir(path.join(vault, ".engine", "runtime"), { recursive: true });
    await fs.mkdir(path.join(vault, "agentContext.memory"), {
      recursive: true,
    });
    await fs.writeFile(
      path.join(vault, "agentContext.memory", "personality.md"),
      "Explicitly reviewed agent guidance remains readable.",
    );
    await fs.writeFile(
      path.join(vault, ".engine", "runtime", "internal.md"),
      "Never a research planet.",
    );
    const env = {
      ...process.env,
      WONNYY_VAULT_PATH: vault,
      WONNYY_SMOKE_DATA: profile,
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
    page.setDefaultTimeout(30000);
    page.on("pageerror", (e) => errors.push(e.message));
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page
      .getByRole("button", { name: "PLANET VIEW", exact: true })
      .click();
    const close = page.getByRole("button", {
      name: "Close Wonnyy Agent",
      exact: true,
    });
    if (await close.isVisible()) await close.click();
    const canvas = page.locator(".pv-canvas");
    await page.locator(".pworld .pnode").first().waitFor();
    const snapshot = await page.evaluate(() =>
      window.wonnyyDesktop.vault.getSnapshot(),
    );
    assert.equal(snapshot.totalFiles, 201);
    assert.ok(snapshot.entries.some((e) => e.name === "agentContext.memory"));
    assert.equal(
      await page
        .locator(".pworld")
        .getByRole("button", {
          name: "Directory: agentContext.memory",
          exact: true,
        })
        .count(),
      0,
    );
    assert.equal(
      await page
        .locator(".pworld")
        .getByRole("button", { name: "File: personality.md", exact: true })
        .count(),
      0,
    );
    const memory = await page.evaluate(() =>
      window.wonnyyDesktop.vault.read("agentContext.memory/personality.md"),
    );
    assert.ok(
      JSON.stringify(memory).includes("Explicitly reviewed agent guidance"),
    );
    assert.ok(!snapshot.entries.some((e) => e.name === ".engine"));
    const flat = page.getByRole("checkbox", {
      name: "FLAT VIEW (LOW GPU)",
      exact: true,
    });
    assert.equal(await flat.isChecked(), true);
    const geometry = await page.locator(".pv-canvas").evaluate((el) => {
      const world = el.querySelector(".pworld"),
        edges = el.querySelector(".pedges");
      const bounds = el.getBoundingClientRect();
      return {
        canvasWidth: el.clientWidth,
        canvasHeight: el.clientHeight,
        worldWidth: world.clientWidth,
        willChange: getComputedStyle(world).willChange,
        edgeWidth: Number(edges.getAttribute("width")),
        edgeHeight: Number(edges.getAttribute("height")),
        edgeOverflow: getComputedStyle(edges).overflow,
        all: Number(world.dataset.totalNodes),
        rendered: Number(world.dataset.renderedNodes),
        visibleOrbs: [...world.querySelectorAll(".porb")].filter((orb) => {
          const r = orb.getBoundingClientRect();
          return (
            r.right >= bounds.left &&
            r.left <= bounds.right &&
            r.bottom >= bounds.top &&
            r.top <= bounds.bottom
          );
        }).length,
      };
    });
    assert.equal(geometry.all, 211);
    assert.ok(geometry.visibleOrbs > 0);
    assert.equal(geometry.willChange, "auto");
    assert.ok(geometry.worldWidth <= geometry.canvasWidth);
    assert.equal(geometry.edgeWidth, geometry.canvasWidth);
    assert.equal(geometry.edgeHeight, geometry.canvasHeight);
    assert.equal(geometry.edgeOverflow, "hidden");
    await page
      .locator('.file-row[title="agentContext.memory/personality.md"]')
      .click();
    await page.waitForFunction(
      () => document.querySelectorAll(".pnode.pdir:not(.dim)").length > 1,
    );
    const rect = await canvas.boundingBox();
    await page.mouse.move(rect.x + rect.width / 2, rect.y + rect.height / 2);
    for (let i = 0; i < 32; i++) await page.mouse.wheel(0, -100);
    await page.waitForFunction(
      () =>
        Number(document.querySelector(".pworld").dataset.renderedNodes) <
        Number(document.querySelector(".pworld").dataset.totalNodes) / 2,
    );
    const culled = await page.locator(".pworld .pnode").count();
    const beforePan = await page.locator(".pworld").getAttribute("style");
    await canvas.focus();
    await page.keyboard.down("Space");
    await page.mouse.down();
    await page.mouse.move(
      rect.x + rect.width / 2 + 120,
      rect.y + rect.height / 2 + 50,
      { steps: 5 },
    );
    await page.mouse.up();
    await page.keyboard.up("Space");
    assert.notEqual(
      await page.locator(".pworld").getAttribute("style"),
      beforePan,
    );
    await page.getByRole("button", { name: "Reset view", exact: true }).click();
    await page.waitForFunction(
      () =>
        Number(document.querySelector(".pworld").dataset.renderedNodes) ===
        Number(document.querySelector(".pworld").dataset.totalNodes),
    );
    // Explicit visual preferences survive remounting the renderer.
    await flat.uncheck();
    await page.reload();
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    assert.equal(await flat.isChecked(), false);
    await flat.check();
    // Focusing a folder that disappears must recover to the full graph.
    await page
      .getByRole("button", { name: "Directory: Research-0", exact: true })
      .focus();
    await page.keyboard.press("Enter");
    const oldFolder = path.resolve(vault, "Research-0"),
      nextFolder = path.resolve(vault, "Archive");
    assert.equal(path.dirname(oldFolder), path.resolve(vault));
    assert.equal(path.dirname(nextFolder), path.resolve(vault));
    await fs.rename(oldFolder, nextFolder);
    await page
      .getByRole("button", { name: "Rescan vault", exact: true })
      .click();
    await page
      .getByRole("button", { name: "Directory: Archive", exact: true })
      .waitFor();
    assert.ok((await page.locator(".pworld .pnode").count()) > 1);
    await page.waitForFunction(
      () => document.querySelectorAll(".pnode.pdir:not(.dim)").length > 1,
    );
    const file = page
      .getByRole("button", { name: "File: source-0.md", exact: true })
      .first();
    await file.focus();
    await file.press("Enter");
    await page
      .getByRole("button", { name: "PLANET VIEW", exact: true })
      .click();
    await page.locator(".pworld .pnode").first().waitFor();
    assert.deepEqual(errors, []);
    if (await close.isVisible()) await close.click();
    await fs.mkdir("test-results", { recursive: true });
    await page.screenshot({ path: "test-results/planet-performance.png" });
    await fs.writeFile(
      "test-results/planet-performance-ui.json",
      JSON.stringify(
        {
          passed: true,
          geometry,
          renderedAfterZoom: culled,
          checks: [
            "engine storage excluded",
            "planets visible on Fit View",
            "low GPU default and persisted opt-out",
            "viewport-size edge SVG and no forced world layer",
            "offscreen node culling",
            "zoom/pan/reset",
            "stale folder focus recovery",
            "keyboard file opening",
          ],
        },
        null,
        2,
      ),
    );
    console.log(
      "PASS: Planet visibility, engine exclusion, bounded render surfaces, viewport culling, zoom/pan/reset, preference persistence and file interaction",
    );
  } catch (error) {
    await fs.mkdir("test-results", { recursive: true });
    await page
      ?.screenshot({ path: "test-results/planet-performance-failure.png" })
      .catch(() => {});
    throw error;
  } finally {
    await app?.close();
    assert.ok(root.startsWith((await fs.realpath(os.tmpdir())) + path.sep));
    await fs.rm(root, { recursive: true, force: true });
  }
}
main().catch((e) => {
  console.error(e.stack);
  process.exitCode = 1;
});
