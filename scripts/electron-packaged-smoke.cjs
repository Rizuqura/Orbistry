const { _electron: electron } = require("playwright");
const fs = require("node:fs/promises"),
  path = require("node:path"),
  os = require("node:os"),
  assert = require("node:assert/strict");
const { imagePdf } = require("./fixtures/image-pdf.cjs");
async function main() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-packaged-"));
  const vault = path.join(root, "vault"),
    profile = path.join(root, "profile");
  let app;
  const errors = [];
  try {
    await fs.mkdir(vault);
    const env = { ...process.env, ORBISTRY_VAULT_PATH: vault };
    delete env.ELECTRON_START_URL;
    delete env.ELECTRON_RUN_AS_NODE;
    delete env.ORBISTRY_SMOKE_DATA;
    app = await electron.launch({
      executablePath: path.resolve(
        "dist/win-unpacked",
        `${require("../package.json").build.productName}.exe`,
      ),
      args: [`--user-data-dir=${profile}`, "--hidden"],
      env,
      timeout: 60000,
    });
    const page = await app.firstWindow();
    page.setDefaultTimeout(30000);
    page.on("pageerror", (error) => errors.push(error.message));
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    const state = await page.evaluate(async () => {
      const { ai, vault } = window.orbistryDesktop;
      return {
        agents: await ai.listAgents(),
        boxes: await ai.listContextBoxes(),
        chats: await ai.listConversations(),
        models: await ai.models(),
        vault: await vault.getSnapshot(),
        csp: document.querySelector(
          'meta[http-equiv="Content-Security-Policy"]',
        )?.content,
      };
    });
    assert.equal(state.agents.length, 0);
    assert.equal(state.boxes.length, 0);
    assert.equal(state.chats.length, 0);
    assert.equal(state.vault.totalFiles, 0);
    assert.ok(
      state.models.providers
        .filter((p) => p.id !== "ollama")
        .every((p) => !p.configured),
    );
    assert.match(state.csp, /script-src 'self'/);
    assert.equal(
      await page.locator(".version").textContent(),
      `v${require("../package.json").version} Victoria (Beta)`,
    );
    await fs.copyFile(
      "scripts/fixtures/ocr-text.png",
      path.join(vault, "image.png"),
    );
    await fs.writeFile(path.join(vault, "scanned.pdf"), imagePdf());
    const extracted = await page.evaluate(async () => ({
      image: await window.orbistryDesktop.vault.read("image.png"),
      pdf: await window.orbistryDesktop.vault.readPdf("scanned.pdf"),
    }));
    assert.match(extracted.image.content, /ALPHA/i);
    assert.equal(extracted.pdf.textStatus, "ready");
    await page.getByRole("button", { name: "AGENT", exact: true }).click();
    await page
      .getByRole("heading", { name: "Build your first agent" })
      .waitFor();
    await page.locator(".agent-add-button").click();
    const dialog = page.getByRole("dialog", { name: "Add agent", exact: true });
    await dialog
      .getByRole("textbox", { name: "Agent name", exact: true })
      .fill("Research assistant");
    await dialog
      .getByRole("button", { name: "Create agent", exact: true })
      .click();
    await dialog.waitFor({ state: "hidden" });
    await page
      .getByRole("complementary", { name: "Research assistant", exact: true })
      .waitFor();
    const box = await page.evaluate(() =>
      window.orbistryDesktop.ai.editContextBox({
        action: "create",
        name: "My reviewed context",
        paths: ["image.png", "scanned.pdf"],
      }),
    );
    assert.equal(box.items.length, 2);
    const computed = await app.evaluate(async ({ app }) => {
      const { createRequire } = process.getBuiltinModule("node:module");
      const load = createRequire(app.getAppPath() + "/package.json");
      const { createDatasetSession } = load(
        "./electron/ai/dataset-session.cjs",
      );
      const session = createDatasetSession();
      try {
        await session.call("load", {
          sources: [
            { sourceId: "synthetic.csv", content: "value\n10\n20\n30" },
          ],
        });
        return await session.call("query", {
          queries: [
            {
              sourceId: "synthetic.csv",
              operation: "aggregate",
              metrics: [{ op: "sum", column: "value", as: "total" }],
            },
          ],
        });
      } finally {
        await session.close();
      }
    });
    assert.equal(computed[0].results[0].values[0], 60);
    assert.deepEqual(errors, []);
    await fs.mkdir("test-results", { recursive: true });
    await fs.writeFile(
      "test-results/release-packaged-smoke.json",
      JSON.stringify(
        {
          passed: true,
          executable: `Windows x64 ${require("../package.json").build.productName}.exe`,
          emptyState: true,
          csp: true,
          nativeImageOcr: true,
          nativeScannedPdfOcr: true,
          packagedCsvWorker: true,
          customAgentCreation: true,
          contextBoxCreation: true,
          realProviderCalls: false,
          rendererErrors: errors,
        },
        null,
        2,
      ),
    );
    console.log(
      "PASS: actual packaged executable; empty state and keys; CSP; native image/scanned-PDF OCR; first custom agent and Context Box.",
    );
  } finally {
    if (app) await app.close().catch(() => {});
    await fs.rm(root, { recursive: true, force: true });
  }
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
