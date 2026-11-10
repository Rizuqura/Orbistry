const { _electron } = require("playwright");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const assert = require("node:assert/strict");
async function main() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-type-"));
  const vault = path.join(root, "vault"),
    profile = path.join(root, "profile");
  await fs.mkdir(vault);
  await fs.mkdir(profile);
  await fs.writeFile(
    path.join(vault, "notes.md"),
    "# Research notes\nFont verification.",
  );
  await fs.writeFile(
    path.join(profile, "agents.json"),
    JSON.stringify({
      schemaVersion: 1,
      includeDefaultAgents: true,
      agents: {},
    }),
  );
  const env = {
    ...process.env,
    ORBISTRY_VAULT_PATH: vault,
    ORBISTRY_SMOKE_DATA: profile,
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
    const errors = [],
      remoteFonts = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("request", (r) => {
      if (/fonts\.(googleapis|gstatic)\.com/.test(r.url()))
        remoteFonts.push(r.url());
    });
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    const loaded = await page.evaluate(async () => {
      const requests = [
        '200 24px "Urbanist"',
        '400 14px "Urbanist"',
        '400 12px "IBM Plex Mono"',
        '600 12px "IBM Plex Mono"',
        '400 12px "Space Mono"',
      ];
      return Promise.all(
        requests.map(async (font) => ({
          font,
          loaded: (await document.fonts.load(font)).length > 0,
        })),
      );
    });
    assert.ok(loaded.every((f) => f.loaded));
    const family = (selector) =>
      page
        .locator(selector)
        .first()
        .evaluate((el) => getComputedStyle(el).fontFamily);
    const actual = {
      body: await family("body"),
      navigation: await family(".nav-item"),
      vault: await family(
        ".knowledge-sidebar .tree-folder-name, .knowledge-sidebar .file-name",
      ),
      chat: await family(".chat-panel"),
      accent: await family(".version"),
      planet: await family(".planet-labels"),
      context: await family(".context-box-manager"),
    };
    for (const key of ["body", "navigation", "chat"])
      assert.match(actual[key], /Urbanist/);
    for (const key of ["vault", "planet", "context"])
      assert.match(actual[key], /IBM Plex Mono/);
    assert.match(actual.accent, /Space Mono/);
    await page
      .getByRole("button", { name: "Open Context Box library", exact: true })
      .click();
    await page
      .getByRole("button", { name: "Create Context Box", exact: true })
      .click();
    actual.contextDialog = await family(".context-box-dialog input");
    assert.match(actual.contextDialog, /IBM Plex Mono/);
    await page.getByRole("button", { name: "Cancel", exact: true }).click();
    await page
      .getByRole("button", { name: "Close library", exact: true })
      .click();
    await fs.mkdir("test-results", { recursive: true });
    await page.screenshot({ path: "test-results/typography-planet.png" });
    await page.getByRole("button", { name: "AGENT", exact: true }).click();
    await page
      .getByRole("button", { name: "Orbistry Agent settings", exact: true })
      .click();
    await page
      .getByRole("textbox", { name: "Agent name", exact: true })
      .waitFor();
    actual.construction = await family(".agent-studio input");
    assert.match(actual.construction, /IBM Plex Mono/);
    await page.screenshot({ path: "test-results/typography-construction.png" });
    assert.deepEqual(errors, []);
    assert.deepEqual(remoteFonts, []);
    console.log(
      JSON.stringify({
        families: actual,
        loaded,
        rendererErrors: errors,
        remoteFontRequests: remoteFonts,
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
