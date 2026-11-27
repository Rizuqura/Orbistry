const { _electron: electron } = require("playwright");
const fs = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");
const assert = require("node:assert/strict");
const {
  EnginePackageRegistry,
} = require("../../electron/engines/registry/registry.cjs");
/** Exercises the shipped main process, bridge and package worker with a fresh Universe. */
async function main() {
  const executablePath = path.resolve(process.argv[2]);
  const archive = path.join(
    path.dirname(executablePath),
    "resources",
    "app.asar",
  );
  const entries = (await import("@electron/asar"))
    .listPackage(archive)
    .map((p) => p.replaceAll("\\", "/"));
  for (const absent of [
    "/packages/yahoo-finance/src",
    "/electron/engines/excel/index.cjs",
    "/electron/engines/daily-price/index.cjs",
    "/electron/engines/image-parser/parser.cjs",
    "/electron/engines/yahoo-financials/index.cjs",
    "/electron/ai/chronoz-adapter.cjs",
    ...["yahoo-finance2", "unzipper", "ssf", "sax"].map(
      (name) => "/node_modules/" + name + "/package.json",
    ),
  ])
    assert.ok(!entries.includes(absent), "Unexpected bundled " + absent);
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orb-core-")),
    vaultPath = path.join(root, "Universe"),
    id = "core-fixture";
  await fs.mkdir(vaultPath);
  await fs.writeFile(
    path.join(vaultPath, "about.md"),
    "# About\nLocal Markdown for the fixture.",
  );
  const env = { ...process.env, ORBISTRY_VAULT_PATH: vaultPath };
  delete env.ELECTRON_RUN_AS_NODE;
  delete env.ELECTRON_START_URL;
  let app;
  try {
    app = await electron.launch({
      executablePath,
      args: ["--user-data-dir=" + path.join(root, "profile"), "--hidden"],
      env,
      timeout: 40000,
    });
    assert.ok(await app.evaluate(({ app }) => app.isPackaged));
    const page = await app.firstWindow();
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page
      .getByRole("heading", { name: "WorldView", exact: true })
      .waitFor();
    const request = (operation, input = {}) =>
      page.evaluate(
        ({ operation, input }) =>
          window.orbistryDesktop.worldview.request(operation, input),
        { operation, input: { vaultPath, id, ...input } },
      );
    await request("save", {
      chip: {
        id,
        name: "Core fixture",
        icon: "",
        tags: [],
        color: "#263f4b",
        position: { x: 0, y: 0 },
      },
    });
    await request("assign", { sourceRefs: ["about.md"] });
    const draft =
      '# Climate\nsource: engineSource("weather-demo","hourly",1,{"station":"lab"})\n# About\nsource: about.md';
    await request("knowledge-apply", { draft, revision: null });
    const index = await request("knowledge-load"),
      ref = { declarationId: index.menus[0].packageSources[0].id };
    assert.equal(
      (await request("package-source-status", ref)).status,
      "package_missing",
    );
    await request("identity-generate");
    assert.equal((await request("identity-status")).status, "fresh");
    assert.match(
      JSON.stringify(await request("identity-chunks")),
      /Local Markdown/,
    );
    const registry = new EnginePackageRegistry(vaultPath),
      { engineId, digest } = await registry.install(
        path.resolve("examples/engines/weather-demo"),
      );
    await registry.trust(engineId, digest);
    await registry.link({
      entityId: id,
      engineId,
      operations: ["temperature"],
      policy: "automatic",
    });
    await page.reload();
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page.getByTitle("Center Core fixture", { exact: true }).click();
    await page.getByRole("button", { name: "View Knowledge Card" }).click();
    await page.getByRole("button", { name: "Climate", exact: true }).click();
    await page.getByRole("button", { name: "Run source", exact: true }).click();
    await page.getByText(/Execution [a-f0-9-]{36}/).waitFor();
    assert.match(
      await page
        .locator('section[aria-label="weather-demo / hourly"] pre')
        .innerText(),
      /observations/,
    );
    const executed = await request("package-source-run", ref);
    assert.equal(executed.data.observations[1].value, 19);
    await registry.uninstall(engineId, digest);
    assert.equal(
      (await request("package-source-status", ref)).status,
      "package_missing",
    );
    assert.equal((await request("knowledge-load")).applied, draft);
    // Keep the same card open through removal and reinstallation. A fresh trust and grant are required.
    const panel = page.getByRole("region", { name: "weather-demo / hourly" });
    async function verifyStatus(text) {
      await panel.getByRole("button", { name: "Check availability" }).click();
      await panel.getByText(text, { exact: true }).waitFor();
    }
    await verifyStatus("package missing");
    await registry.install(path.resolve("examples/engines/weather-demo"));
    await verifyStatus("untrusted");
    await registry.trust(engineId, digest);
    await verifyStatus("unlinked");
    await registry.link({
      entityId: id,
      engineId,
      operations: ["temperature"],
      policy: "automatic",
    });
    await verifyStatus("available");
    await panel.getByRole("button", { name: "Run source" }).click();
    await panel.getByText(/Execution [a-f0-9-]{36}/).waitFor();
    assert.equal(
      JSON.parse(await panel.locator("pre").innerText()).observations[1].value,
      19,
    );
    console.log(
      "Packaged Core startup, WorldView, Entity, Markdown, Identity, external worker, receipt, removal and reauthorized restoration passed.",
    );
  } finally {
    if (app) await app.close();
    await fs.rm(root, { recursive: true, force: true });
  }
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
