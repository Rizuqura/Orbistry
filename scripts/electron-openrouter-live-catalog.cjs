// Read-only live catalog acceptance. Uses the existing OS-encrypted key without
// reading it into the renderer or making inference requests.
const { _electron: electron } = require("playwright");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const assert = require("node:assert/strict");

async function main() {
  const vault = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-live-catalog-"),
  );
  const env = { ...process.env, ORBISTRY_VAULT_PATH: vault };
  delete env.ELECTRON_RUN_AS_NODE;
  delete env.ELECTRON_START_URL;
  let app;
  try {
    app = await electron.launch({
      args: [
        path.resolve("scripts/electron-openrouter-live-main.cjs"),
        "--hidden",
      ],
      env,
      timeout: 30000,
    });
    const page = await app.firstWindow();
    page.setDefaultTimeout(60000);
    await page.getByRole("button", { name: "SETTINGS", exact: true }).click();
    await page
      .getByRole("navigation", { name: "AI providers" })
      .getByRole("button", { name: /OpenRouter/ })
      .click();
    await page
      .getByRole("region", { name: "OpenRouter credentials" })
      .getByText("Connected", { exact: true })
      .waitFor();
    const models = page.locator('[aria-label="OpenRouter models"] article');
    const count = await models.count();
    assert.ok(count > 0);
    assert.equal(
      await page.getByLabel("OpenRouter API key", { exact: true }).isEnabled(),
      true,
    );
    await page
      .getByText("Your key is saved securely on this device.", { exact: true })
      .waitFor();
    const transport = await app.evaluate(() => globalThis.catalogOnlyReport);
    assert.equal(transport.forwardedInferenceRequests, 0);
    const report = {
      passed: true,
      liveCatalog: true,
      modelCount: count,
      persistedCredential: true,
      inferenceRequests: transport.forwardedInferenceRequests,
      blockedRequests: transport.blockedRequests,
    };
    await fs.mkdir("test-results", { recursive: true });
    await fs.writeFile(
      "test-results/openrouter-live-ui.json",
      JSON.stringify(report, null, 2),
    );
    await page.screenshot({ path: "test-results/openrouter-live-ui.png" });
    console.log(JSON.stringify(report));
  } finally {
    await app?.close();
    assert.ok(
      path.resolve(vault).startsWith(path.resolve(os.tmpdir()) + path.sep),
    );
    await fs.rm(vault, { recursive: true, force: true });
  }
}
main().catch(() => {
  console.error("Live OpenRouter catalog UI check failed.");
  process.exitCode = 1;
});
