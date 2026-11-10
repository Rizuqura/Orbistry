const { _electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
async function main() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-gravity-"));
  const vault = path.join(root, "Gravity vault");
  let app;
  try {
    const names = [
      "Research",
      "Market data",
      "Reports",
      "Projects",
      "Journal",
      "References",
      "Inbox",
    ];
    for (let i = 0; i < names.length; i++) {
      const directory = path.join(vault, names[i]);
      await fs.mkdir(directory, { recursive: true });
      for (let j = 0; j < 4; j++)
        await fs.writeFile(
          path.join(
            directory,
            ["Overview", "Analysis", "Notes", "Summary"][j] + ".md",
          ),
          "# Reviewed source\n" +
            "Research evidence.\n".repeat(
              Math.ceil(2 ** (12 - i * 1.5) / (j + 1)),
            ),
        );
    }
    await fs.mkdir(path.join(vault, "Research", "Archive"));
    await fs.writeFile(
      path.join(vault, "Research", "Archive", "History.md"),
      "Historical research.\n".repeat(500),
    );
    const env = {
      ...process.env,
      ORBISTRY_VAULT_PATH: vault,
      ORBISTRY_SMOKE_DATA: path.join(root, "profile"),
    };
    delete env.ELECTRON_RUN_AS_NODE;
    delete env.ELECTRON_START_URL;
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
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setViewportSize({ width: 1600, height: 1000 });
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page
      .getByRole("button", { name: "PLANET VIEW", exact: true })
      .click();
    const close = page.getByRole("button", {
      name: "Close Orbistry Agent",
      exact: true,
    });
    if (await close.isVisible()) await close.click();
    await page.getByRole("button", { name: "Reset view", exact: true }).click();
    await page.locator(".planet-orbit-anchor").first().waitFor();
    assert.equal(await page.locator(".pedge-dir").count(), 0);
    assert.equal(await page.locator(".planet-orbit-anchor").count(), 7);
    const result = await page.evaluate(() => {
      const anchor = document.querySelector(".panchor");
      const root = {
        x: parseFloat(anchor.style.left),
        y: parseFloat(anchor.style.top),
      };
      const spokes = [...document.querySelectorAll("line.pedge")].filter(
        (line) =>
          +line.getAttribute("x1") === root.x &&
          +line.getAttribute("y1") === root.y,
      );
      const size = parseFloat(anchor.querySelector(".porb").style.width);
      return {
        vaultSize: size,
        spokes: spokes.length,
        folderSizes: [
          ...document.querySelectorAll(".pdir:not(.panchor) .porb"),
        ].map((el) => parseFloat(el.style.width)),
      };
    });
    assert.equal(result.spokes, 0);
    assert.equal(result.vaultSize, 480);
    const radii = await page.locator(".planet-orbit-anchor").evaluateAll(nodes => nodes.map(node => +node.getAttribute("r")));
    const orbitStep = radii[1] - radii[0];
    assert.ok(radii.slice(2).every((radius, index) => Math.abs(radius - radii[index + 1] - orbitStep) < 1e-7));
    assert.ok(result.folderSizes.every((size) => size < result.vaultSize));
    const snapshot = await page.evaluate(() =>
      window.orbistryDesktop.vault.getSnapshot(),
    );
    assert.ok(
      snapshot.entries.every((folder) =>
        folder.children.every(
          (entry) => entry.kind === "folder" || entry.sizeBytes > 0,
        ),
      ),
    );
    await fs.mkdir("test-results", { recursive: true });
    await page.screenshot({ path: "test-results/planet-gravity.png" });
    const file = page
      .getByRole("button", { name: "File: Overview.md", exact: true })
      .first();
    await file.focus();
    await file.press("Enter");
    assert.deepEqual(errors, []);
    console.log(
      JSON.stringify({
        rootGuides: 7,
        folderConnections: 0,
        rootSpokes: 0,
        rootSize: result.vaultSize,
        rendererErrors: errors,
        screenshot: "test-results/planet-gravity.png",
      }),
    );
  } finally {
    await app?.close();
  }
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
