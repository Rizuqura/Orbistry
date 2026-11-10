/** Isolated desktop acceptance: synthetic transports and temporary user data. */
const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");

async function main() {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-model-settings-"),
  );
  let app;
  const errors = [];
  const launch = async () => {
    const env = {
      ...process.env,
      ORBISTRY_SMOKE_DATA: path.join(root, "app-data"),
      ORBISTRY_VAULT_PATH: root,
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
    const page = await app.firstWindow();
    page.setDefaultTimeout(15000);
    page.on("pageerror", (error) => errors.push(error.message));
    await page.getByRole("button", { name: "SETTINGS", exact: true }).click();
    await page.getByRole("heading", { name: "Bring your own key" }).waitFor();
    return page;
  };
  try {
    await fs.writeFile(path.join(root, "note.md"), "Synthetic settings test.");
    let page = await launch();
    assert.equal(await page.locator('input[type="password"]').count(), 1);
    assert.equal(
      await page
        .getByRole("navigation", { name: "AI providers", exact: true })
        .count(),
      0,
    );
    assert.equal(
      await page.getByLabel("Provider confirmation", { exact: true }).count(),
      0,
    );
    await page
      .getByRole("button", { name: "Provided Models", exact: true })
      .click();
    await page
      .getByText("No visible saved favorites", { exact: true })
      .waitFor();
    const key = page.getByLabel("API Key", { exact: true });
    await key.fill("unrecognized-synthetic-key");
    await page
      .getByRole("button", { name: "Check / Connect", exact: true })
      .click();
    await page
      .getByText(
        "Provider not recognized. Paste a supported OpenRouter, NVIDIA or Gemini API key.",
        { exact: true },
      )
      .waitFor();
    assert.equal(
      await app.evaluate(() => globalThis.onlineSmoke.requests.length),
      0,
    );
    await key.fill("nvapi-synthetic-smoke-key");
    await page
      .getByRole("button", { name: "Check / Connect", exact: true })
      .click();
    await page.getByText(/NVIDIA identified and key saved securely/).waitFor();
    assert.equal(await key.inputValue(), "");
    const cards = page.locator(".ai-catalog-grid article");
    await cards.filter({ hasText: "nvidia/nemotron-smoke" }).waitFor();
    assert.equal(
      await cards.count(),
      3,
      "Local and NVIDIA models share one catalog",
    );
    await cards.filter({ hasText: "qwen3:4b" }).waitFor();
    assert.equal(
      await cards
        .filter({ hasText: "nvidia/nemotron-smoke" })
        .locator(".ai-model-name > small")
        .first()
        .innerText(),
      "NVIDIA NIM",
    );
    // Selecting a mixed-catalog card must save that card's provider ID.
    await cards
      .filter({ hasText: "nvidia/nemotron-smoke" })
      .getByRole("button", { name: "Use online", exact: true })
      .click();
    await page.waitForFunction(
      async () =>
        (await window.orbistryDesktop.ai.models()).settings.providerId ===
        "nvidia",
    );
    await cards
      .filter({ hasText: "qwen3:4b" })
      .getByRole("button", { name: "Use", exact: true })
      .click();
    await page.waitForFunction(
      async () =>
        (await window.orbistryDesktop.ai.models()).settings.providerId ===
        "ollama",
    );
    assert.equal(
      await app.evaluate(() => globalThis.onlineSmoke.requests.length),
      0,
      "Connecting must not generate paid inference",
    );
    const before = await page.evaluate(() => window.orbistryDesktop.ai.models());
    assert.equal(before.settings.providerId, "ollama");
    await fs.mkdir("test-results", { recursive: true });
    await page
      .getByRole("heading", { name: /Choose a model/ })
      .scrollIntoViewIfNeeded();
    await page.screenshot({
      path: "test-results/model-settings-unified-models.png",
    });
    for (const name of [
      "nvidia/nemotron-smoke",
      "deepseek-ai/deepseek-smoke",
    ]) {
      await page
        .getByRole("button", { name: `Star ${name}`, exact: true })
        .click();
      await page
        .getByRole("button", { name: `Unstar ${name}`, exact: true })
        .waitFor();
    }
    await page
      .getByRole("button", { name: "Provided Models", exact: true })
      .click();
    await page
      .getByRole("button", {
        name: "Managed access — coming later",
        exact: true,
      })
      .first()
      .waitFor();
    assert.equal(await cards.count(), 2);
    assert.equal(
      await page
        .getByRole("button", {
          name: "Managed access — coming later",
          exact: true,
        })
        .first()
        .isDisabled(),
      true,
    );
    const desktopColumns = await page
      .locator(".ai-catalog-grid")
      .evaluate(
        (element) =>
          getComputedStyle(element).gridTemplateColumns.split(" ").length,
      );
    assert.equal(desktopColumns, 2);
    await fs.mkdir("test-results", { recursive: true });
    await page.locator(".ai-catalog-tabs").scrollIntoViewIfNeeded();
    await page.screenshot({
      path: "test-results/model-settings-provided-desktop.png",
    });
    await page.setViewportSize({ width: 620, height: 850 });
    assert.equal(
      await page
        .locator(".ai-catalog-grid")
        .evaluate(
          (element) =>
            getComputedStyle(element).gridTemplateColumns.split(" ").length,
        ),
      1,
    );
    await page.screenshot({
      path: "test-results/model-settings-provided-narrow.png",
    });
    // A failed explicit check is filtered by IPC, including when an untrusted
    // renderer requests a developer flag. Favorite IDs themselves stay intact.
    await app.evaluate(() => {
      globalThis.onlineSmoke.nvidiaModelStatuses["nvidia/nemotron-smoke"] = 404;
    });
    await page.evaluate(() =>
      window.orbistryDesktop.ai.checkRemoteModel({
        providerId: "nvidia",
        model: "nvidia/nemotron-smoke",
      }),
    );
    const visible = await page.evaluate(() =>
      window.orbistryDesktop.ai.providedModels({ devView: true }),
    );
    assert.equal(visible.length, 1);
    assert.equal(visible[0].modelId, "deepseek-ai/deepseek-smoke");
    assert.equal(
      (await page.evaluate(() => window.orbistryDesktop.ai.modelFavorites()))
        .length,
      2,
    );
    await app.close();
    app = null;
    page = await launch();
    await page
      .getByRole("button", { name: "Provided Models", exact: true })
      .click();
    await page
      .getByRole("button", {
        name: "Managed access — coming later",
        exact: true,
      })
      .first()
      .waitFor();
    assert.equal(
      await page.locator(".ai-catalog-grid article").count(),
      2,
      "Favorites survive restart",
    );
    assert.equal(
      await app.evaluate(() => globalThis.onlineSmoke.requests.length),
      0,
      "Restart must not generate paid inference",
    );
    assert.deepEqual(errors, []);
    console.log(
      "Model settings desktop acceptance passed: automatic provider detection without a picker, encrypted save, no automatic inference, favorites, preview isolation, backend error filtering, untrusted developer flag rejection, responsive layout and restart persistence.",
    );
  } finally {
    await app?.close();
    // Only delete the exact temporary test directory created above.
    assert.ok(
      path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep),
    );
    await fs.rm(root, { recursive: true, force: true });
  }
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
