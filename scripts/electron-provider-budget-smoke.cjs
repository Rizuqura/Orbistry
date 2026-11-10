const { _electron } = require("playwright");
const fs = require("node:fs/promises"),
  os = require("node:os"),
  path = require("node:path");
const assert = require("node:assert/strict");
async function main() {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-provider-budget-"),
  );
  const vault = path.join(root, "vault");
  await fs.mkdir(vault);
  await fs.writeFile(path.join(vault, "a.md"), "ALPHA allocation is 25%.");
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
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page.evaluate(() => {
      document.hasFocus = () => true;
      window.dispatchEvent(new Event("focus"));
    });
    await app.evaluate(() => {
      globalThis.onlineSmoke.reportTokenUsage = true;
    });
    const panel = page.locator(".planet-usage");
    await panel.getByText("AI BUDGET / OLLAMA", { exact: true }).waitFor();
    await panel.getByRole("button", { name: /AI BUDGET/ }).click();
    const rows = [];
    for (const [providerId, apiKey, model, label] of [
      [
        "nvidia",
        "nvapi-synthetic-smoke-key",
        "nvidia/nemotron-smoke",
        "NVIDIA",
      ],
      ["gemini", "AQ.synthetic-smoke-key", "gemini-smoke", "GEMINI"],
      [
        "openrouter",
        "sk-or-v1-synthetic-smoke-key",
        "~vendor/model-latest",
        "OPENROUTER",
      ],
    ]) {
      await page.evaluate(
        async ({ providerId, apiKey, model }) => {
          await window.orbistryDesktop.ai.saveCredential({
            providerId,
            apiKey,
          });
          await window.orbistryDesktop.ai.settings({
            providerId,
            modelId: model,
          });
        },
        { providerId, apiKey, model },
      );
      await panel.getByText("AI BUDGET / " + label, { exact: true }).waitFor();
      const check = await page.evaluate(
        ({ providerId, model }) =>
          window.orbistryDesktop.ai.checkRemoteModel({ providerId, model }),
        { providerId, model },
      );
      assert.equal(check.passed, true, JSON.stringify(check));
      const snapshot = await page.evaluate(() =>
        window.orbistryDesktop.ai.providerUsage(),
      );
      assert.equal(snapshot.provider, providerId);
      assert.ok(snapshot.inputTokens > 0);
      assert.ok(snapshot.outputTokens > 0);
      if (providerId !== "openrouter") {
        assert.equal(snapshot.remainingUsd, null);
        await panel
          .getByText(
            (snapshot.inputTokens + snapshot.outputTokens).toLocaleString() +
              " tokens used",
            { exact: true },
          )
          .waitFor();
        assert.doesNotMatch(await panel.innerText(), /74.50|Key cap|weekly/i);
      } else await panel.getByText("$74.50 left", { exact: true }).waitFor();
      assert.doesNotMatch(
        await panel.innerText(),
        /synthetic-smoke-key|nvapi-|sk-or-|AQ\./,
      );
      rows.push({
        provider: providerId,
        input: snapshot.inputTokens,
        output: snapshot.outputTokens,
      });
      await fs.mkdir("test-results", { recursive: true });
      await page.screenshot({
        path: "test-results/provider-budget-" + providerId + ".png",
      });
    }
    await page.evaluate(() =>
      window.orbistryDesktop.ai.settings({
        providerId: "nvidia",
        modelId: "nvidia/nemotron-smoke",
      }),
    );
    await panel.getByText("AI BUDGET / NVIDIA", { exact: true }).waitFor();
    const before = await page.evaluate(() =>
      window.orbistryDesktop.ai.providerUsage(),
    );
    assert.equal(
      before.inputTokens,
      rows.find((row) => row.provider === "nvidia").input,
    );
    await page.evaluate(() =>
      window.orbistryDesktop.ai.saveCredential({
        providerId: "nvidia",
        apiKey: "nvapi-replacement-synthetic-key",
      }),
    );
    const after = await page.evaluate(() =>
      window.orbistryDesktop.ai.providerUsage(),
    );
    assert.equal(after.inputTokens, null);
    assert.notEqual(after.safeKeyAlias, before.safeKeyAlias);
    await panel.getByText("No measured requests", { exact: true }).waitFor();
    assert.doesNotMatch(await panel.innerText(), /74.50/);
    await page.evaluate(() =>
      window.orbistryDesktop.ai.removeCredential({ providerId: "nvidia" }),
    );
    await panel.getByText("Setup required", { exact: true }).waitFor();
    assert.deepEqual(errors, []);
    console.log(
      JSON.stringify({
        providers: rows,
        keyReplacementClearsUsage: true,
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
