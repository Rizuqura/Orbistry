const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises"),
  path = require("node:path"),
  os = require("node:os");
const { cmapPdf } = require("./fixtures/cmap-pdf.cjs");
async function main() {
  const root = await fs.realpath(
    await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-neutral-")),
  );
  const vault = path.join(root, "Bank");
  let app, page;
  const errors = [];
  try {
    await fs.mkdir(path.join(vault, "Research"), { recursive: true });
    await fs.mkdir(path.join(vault, "Journal"));
    await fs.writeFile(
      path.join(vault, "Research", "macro.csv"),
      "date,value\n2026-10,42\n",
    );
    await fs.writeFile(path.join(vault, "Research", "report.pdf"), cmapPdf());
    await fs.writeFile(
      path.join(vault, "Journal", "notes.md"),
      "Synthetic research notes.",
    );
    const env = {
      ...process.env,
      ORBISTRY_VAULT_PATH: vault,
      ORBISTRY_SMOKE_DATA: path.join(root, "profile"),
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
    await page.emulateMedia({ reducedMotion: "no-preference" });
    page.on("pageerror", (e) => errors.push(e.message));
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page
      .getByRole("button", { name: "PLANET VIEW", exact: true })
      .click();
    const close = page.getByRole("button", {
      name: "Close Orbistry Agent",
      exact: true,
    });
    if (await close.isVisible()) await close.click();
    await page.locator(".planet-orbit").first().waitFor();
    const visual = await page.locator(".planet-neutral").evaluate((el) => {
      const shape = (selector) => {
        const node = el.querySelector(selector),
          style = getComputedStyle(node);
        return {
          fill: style.fill,
          stroke: style.stroke,
          strokeWidth: style.strokeWidth,
          vectorEffect: style.vectorEffect,
        };
      };
      return {
        background: getComputedStyle(el.querySelector(".pv-canvas"))
          .backgroundColor,
        root: shape(".panchor .planet-orb-shape"),
        folder: shape(".pdir:not(.panchor) .planet-orb-shape"),
        csv: shape(".pfile-csv .planet-orb-shape"),
        pdf: shape(".pfile-pdf .planet-orb-shape"),
        md: shape(".pfile-md .planet-orb-shape"),
        connection: shape(".pedge"),
        orbit: shape(".planet-orbit"),
        orbits: el.querySelectorAll(".planet-orbit").length,
        shadow: getComputedStyle(el.querySelector(".panchor .porb")).boxShadow,
        edgesWidth: Number(el.querySelector(".pedges").getAttribute("width")),
        canvasWidth: el.querySelector(".pv-canvas").clientWidth,
        anchorWidth: el.querySelector(".panchor .porb").getBoundingClientRect()
          .width,
        guideOpen: el.querySelector(".pctrl-guide").open,
      };
    });
    assert.equal(visual.background, "rgb(27, 45, 58)");
    assert.equal(visual.root.fill, "rgb(255, 255, 255)");
    for (const kind of ["folder", "csv", "pdf", "md"])
      assert.equal(visual[kind].fill, "none");
    assert.equal(visual.folder.stroke, "rgb(237, 240, 242)");
    assert.equal(visual.csv.stroke, "rgb(143, 210, 225)");
    assert.equal(visual.pdf.stroke, "rgb(230, 155, 152)");
    assert.equal(visual.md.stroke, "rgb(207, 211, 214)");
    assert.equal(visual.connection.vectorEffect, "non-scaling-stroke");
    assert.equal(parseFloat(visual.connection.strokeWidth), 0.4);
    assert.equal(parseFloat(visual.orbit.strokeWidth), 0.45);
    assert.equal(visual.orbit.fill, "none");
    assert.equal(visual.orbit.vectorEffect, "non-scaling-stroke");
    assert.ok(visual.orbits >= 3);
    assert.equal(visual.shadow, "none");
    assert.equal(visual.edgesWidth, visual.canvasWidth);
    assert.ok(visual.anchorWidth > 0);
    assert.equal(visual.guideOpen, false);
    await page.locator(".pctrl-guide summary").click();
    assert.equal(
      await page.locator(".pctrl-guide").evaluate((el) => el.open),
      true,
    );
    await page.locator(".pctrl-guide summary").click();
    await fs.mkdir("test-results", { recursive: true });
    await page.screenshot({ path: "test-results/planet-neutral.png" });
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
    const labelChecks = [];
    const canvas = page.locator(".pv-canvas");
    const canvasBox = await canvas.boundingBox();
    await page.mouse.move(
      canvasBox.x + canvasBox.width / 2,
      canvasBox.y + canvasBox.height / 2,
    );
    for (const delta of [0, ...Array(14).fill(-180), ...Array(14).fill(180)]) {
      if (delta) {
        const previous = await page.locator(".pworld").getAttribute("style");
        await page.mouse.wheel(0, delta);
        await page.waitForFunction(
          (before) =>
            document.querySelector(".pworld").getAttribute("style") !== before,
          previous,
        );
      }
      const check = await page.locator(".planet-labels").evaluate((el) => {
        const labels = [...el.querySelectorAll(".planet-screen-label")];
        const boxes = labels.map((label) => label.getBoundingClientRect());
        let overlaps = 0;
        for (let i = 0; i < boxes.length; i++)
          for (let j = i + 1; j < boxes.length; j++) {
            const a = boxes[i],
              b = boxes[j];
            if (
              a.left < b.right &&
              a.right > b.left &&
              a.top < b.bottom &&
              a.bottom > b.top
            )
              overlaps++;
          }
        return {
          lineOpacity: parseFloat(
            getComputedStyle(document.querySelector(".pedges")).opacity,
          ),
          count: labels.length,
          fontSizes: labels.map((label) =>
            parseFloat(getComputedStyle(label).fontSize),
          ),
          heights: boxes.map((b) => b.height),
          overlaps,
        };
      });
      assert.ok(check.count > 0);
      assert.ok(check.lineOpacity >= 0.5 && check.lineOpacity <= 0.75);
      assert.equal(check.overlaps, 0);
      assert.ok(check.fontSizes.every((size) => size === 10 || size === 11));
      assert.ok(check.heights.every((height) => height === 16));
      labelChecks.push(check);
    }
    assert.ok(
      labelChecks.some(
        (check) => check.lineOpacity > labelChecks[0].lineOpacity,
      ),
      JSON.stringify(labelChecks),
    );
    await page.getByRole("button", { name: "Reset view", exact: true }).click();
    await page
      .getByRole("button", { name: "Directory: Research", exact: true })
      .focus();
    await page.keyboard.press("Enter");
    await page.waitForFunction(
      () =>
        document.querySelector(".panchor")?.getAttribute("aria-label") ===
        "Directory: Research",
    );
    assert.equal(await page.locator(".panchor").count(), 1);
    assert.equal(
      await page
        .locator(".panchor .planet-orb-shape")
        .evaluate((el) => getComputedStyle(el).fill),
      "rgb(255, 255, 255)",
    );
    assert.equal(
      await page
        .locator(".pfile-pdf .planet-orb-shape")
        .evaluate((el) => getComputedStyle(el).fill),
      "none",
    );
    assert.deepEqual(errors, []);
    // Animation remains opt-in, and stopping freezes the current layout.
    await page.getByRole("button", { name: "Reset view", exact: true }).click();
    const animationState = () =>
      page.locator(".planet-neutral").getAttribute("data-animation-state");
    assert.equal(await animationState(), "off");
    const movingFolder = page.getByRole("button", {
      name: "Directory: Research",
      exact: true,
    });
    const startingPosition = await movingFolder.getAttribute("style");
    await page
      .getByRole("button", { name: "Turn on animation", exact: true })
      .click();
    await page.waitForFunction(
      (before) =>
        document
          .querySelector('[aria-label="Directory: Research"]')
          .getAttribute("style") !== before,
      startingPosition,
    );
    const cameraBefore = await page.locator(".pworld").getAttribute("style");
    await page.waitForTimeout(250);
    assert.equal(
      await page.locator(".pworld").getAttribute("style"),
      cameraBefore,
    );
    await page
      .getByRole("button", { name: "Turn off animation", exact: true })
      .click();
    assert.equal(await animationState(), "off");
    const frozenPosition = await movingFolder.getAttribute("style");
    await page.waitForTimeout(250);
    assert.equal(await movingFolder.getAttribute("style"), frozenPosition);
    await page
      .getByRole("button", { name: "Turn on animation", exact: true })
      .click();
    await page.reload();
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page
      .getByRole("button", { name: "Turn off animation", exact: true })
      .waitFor();
    await page.waitForFunction(
      () =>
        document.querySelector(".planet-neutral").dataset.animationState ===
        "running",
    );
    await movingFolder.focus();
    assert.equal(await animationState(), "paused");
    const hoverPosition = await movingFolder.getAttribute("style");
    await page.waitForTimeout(250);
    assert.equal(await movingFolder.getAttribute("style"), hoverPosition);
    await page
      .getByRole("button", { name: "Turn off animation", exact: true })
      .focus();
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.waitForFunction(
      () =>
        document.querySelector(".planet-neutral").dataset.animationState ===
        "paused",
    );
    const reducedPosition = await movingFolder.getAttribute("style");
    await page.waitForTimeout(250);
    assert.equal(await movingFolder.getAttribute("style"), reducedPosition);
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.waitForFunction(
      () =>
        document.querySelector(".planet-neutral").dataset.animationState ===
        "running",
    );
    await page
      .getByRole("button", { name: "Turn off animation", exact: true })
      .click();
    await page.reload();
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page
      .getByRole("button", { name: "Turn on animation", exact: true })
      .waitFor();
    assert.equal(await animationState(), "off");
    assert.deepEqual(errors, []);
    await fs.writeFile(
      "test-results/planet-neutral.json",
      JSON.stringify(
        {
          passed: true,
          visual,
          labelChecks,
          checks: [
            "solid white active parent",
            "hollow child folders and files",
            "CSV/PDF/Markdown colors preserved",
            "complete circular orbit guides",
            "thin constant-screen-width connections",
            "focus changes the filled parent",
            "permanent neutral style without retired view toggles",
            "viewport-bounded SVG and no glow",
            "fixed screen-size labels without overlaps across zoom levels",
            "opt-in animation moves nodes without changing the camera",
            "turn off freezes motion and preferences survive reload",
            "animation pauses on hover and respects reduced motion",
          ],
        },
        null,
        2,
      ),
    );
    console.log(
      "PASS: neutral Planet View, parent focus, outline file colors, circular guides, thin connections and low-GPU bounds",
    );
  } catch (error) {
    await fs.mkdir("test-results", { recursive: true });
    await page
      ?.screenshot({ path: "test-results/planet-neutral-failure.png" })
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
