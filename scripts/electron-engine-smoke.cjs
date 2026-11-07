// Real portable-bundle acceptance. No model/network credentials required.
const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");
async function main() {
  const supplied = process.env.CHRONOZ_BUNDLE || process.argv[2];
  if (!supplied)
    throw new Error(
      "Pass the extracted CHronoZ Online 1.0.0 folder as an argument or CHRONOZ_BUNDLE. A real bundle is required; this test does not fake it.",
    );
  const bundle = await fs.realpath(path.resolve(supplied));
  const root = await fs.realpath(
    await fs.mkdtemp(path.join(os.tmpdir(), "qterminal-engine-electron-")),
  );
  const data = path.join(root, "profile"),
    vault = path.join(root, "vault");
  let app, page;
  const errors = [];
  const launch = async () => {
    const env = {
      ...process.env,
      WONNYY_SMOKE_DATA: data,
      WONNYY_VAULT_PATH: vault,
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
    page.setDefaultTimeout(90000);
    page.on("pageerror", (e) => errors.push(e.message));
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await app.evaluate(({ dialog, shell }, folder) => {
      globalThis.engineSmoke = { folderSelections: 0, opened: [] };
      dialog.showOpenDialog = async (options) => {
        if (!options.properties.includes("openDirectory"))
          throw new Error("Expected native directory picker");
        globalThis.engineSmoke.folderSelections++;
        return { canceled: false, filePaths: [folder] };
      };
      // Validate the full backend opening operation without launching a visible PDF app.
      shell.openPath = async (file) => {
        globalThis.engineSmoke.opened.push(file);
        return "";
      };
    }, bundle);
  };
  const get = () =>
    page.evaluate(() => window.wonnyyDesktop.ai.getAgent("wonnyy-agent"));
  const open = async () => {
    await page.getByRole("button", { name: "AGENT", exact: true }).click();
    await page
      .getByRole("button", { name: "Wonnyy Agent settings", exact: true })
      .click();
    await page
      .getByRole("region", { name: "Agent Construction Studio" })
      .waitFor();
  };
  try {
    await fs.mkdir(vault);
    await fs.writeFile(
      path.join(vault, "note.md"),
      "Synthetic research for existing agent chat.",
    );
    await launch();
    await open();
    let studio = page.getByRole("region", {
      name: "Agent Construction Studio",
    });
    await studio
      .getByRole("button", { name: "Add Engine", exact: true })
      .dragTo(studio.locator(".studio-canvas"), {
        targetPosition: { x: 90, y: 100 },
      });
    const node = studio.getByRole("group", {
      name: "Engine node",
      exact: true,
    });
    await node.waitFor();
    let inspector = studio.getByRole("region", { name: "CHronoZ engine" });
    await inspector
      .getByRole("button", { name: "Choose CHronoZ folder", exact: true })
      .click();
    await inspector.getByText("Partial", { exact: true }).waitFor();
    assert.equal(
      await app.evaluate(() => globalThis.engineSmoke.folderSelections),
      1,
    );
    assert.equal(
      await inspector
        .getByRole("button", { name: "Get October 2026 report", exact: true })
        .isDisabled(),
      true,
    );
    await studio
      .getByRole("button", { name: "Connect from Engine", exact: true })
      .press("Enter");
    await studio
      .getByRole("button", { name: "Connect to LLM", exact: true })
      .click();
    await studio
      .getByRole("button", { name: "Save draft", exact: true })
      .click();
    await studio
      .getByText("Draft saved. The live agent is unchanged.", { exact: true })
      .waitFor();
    let profile = await get();
    const engine = profile.construction.draft.nodes.find(
      (n) => n.kind === "Engine",
    );
    const input = {
      agentId: profile.id,
      instanceId: engine.config.instanceId,
      engineId: "chronoz",
      operation: "get_report",
      arguments: { month: "2026-10" },
    };
    const deniedDraft = await page.evaluate(async (input) => {
      try {
        await window.wonnyyDesktop.ai.executeEngine(input);
        return null;
      } catch (e) {
        return e.message;
      }
    }, input);
    assert.match(deniedDraft, /applied graph/);
    await studio
      .getByRole("button", { name: "Save & apply", exact: true })
      .click();
    await studio
      .getByText(
        "Configuration applied. It will be used on the next request.",
        { exact: true },
      )
      .waitFor();
    await inspector
      .getByRole("button", { name: "Get October 2026 report", exact: true })
      .click();
    const pdf = inspector.getByRole("button", {
      name: "Open CHronoZ 2026-10 PDF (PARTIAL)",
      exact: true,
    });
    await pdf.waitFor();
    await pdf.click();
    await inspector
      .getByRole("button", { name: "Cancel engine request", exact: true })
      .waitFor({ state: "hidden" });
    const opened = await app.evaluate(() => globalThis.engineSmoke.opened);
    assert.equal(opened.length, 1);
    assert.ok(opened[0].startsWith(data));
    const runs = await fs.readdir(path.join(data, "engine-runs"));
    const run = JSON.parse(
      await fs.readFile(path.join(data, "engine-runs", runs[0]), "utf8"),
    );
    assert.equal(run.outcome, "PARTIAL");
    assert.equal(run.attachment.month, "2026-10");
    assert.equal(run.graphRevision, 2);
    assert.equal(
      run.attachment.sha256,
      require("../electron/ai/chronoz-adapter.cjs").sha(
        await fs.readFile(opened[0]),
      ),
    );
    const otherDenied = await page.evaluate(async (input) => {
      try {
        await window.wonnyyDesktop.ai.executeEngine({
          ...input,
          agentId: "chronoz",
        });
        return false;
      } catch {
        return true;
      }
    }, input);
    assert.equal(otherDenied, true);
    await page
      .getByRole("button", { name: "Close agent settings", exact: true })
      .click();
    await app.evaluate((_, live) => {
      globalThis.onlineSmoke.engineToolMode = live ? "live" : "mock";
    }, process.env.QTERMINAL_ENGINE_LIVE === "1");
    const panel = page.getByRole("complementary", {
      name: "Wonnyy Agent",
      exact: true,
    });
    await panel
      .getByRole("button", { name: "+ New Chat", exact: true })
      .click();
    const picker = page.getByRole("dialog", {
      name: "New Wonnyy Agent chat",
      exact: true,
    });
    await picker
      .getByRole("checkbox", {
        name: "Engine chat without research context",
        exact: true,
      })
      .check();
    await picker
      .getByRole("button", { name: "Start Chat", exact: true })
      .click();
    await picker.waitFor({ state: "hidden" });
    await page
      .getByRole("textbox", { name: "Chat question", exact: true })
      .fill("Get my October 2026 CHronoZ macro report.");
    await panel
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    const chatPdf = panel.getByRole("button", {
      name: "Open CHronoZ 2026-10 PDF (PARTIAL)",
      exact: true,
    });
    await chatPdf.waitFor({ timeout: 180000 });
    await chatPdf.click();
    await chatPdf.waitFor();
    const chats = await page.evaluate(() =>
      window.wonnyyDesktop.ai.listConversations(),
    );
    const engineChat = chats.find((c) => c.engineOnly);
    assert.deepEqual(engineChat.contextIdentity.sources, []);
    assert.equal(
      engineChat.messages.at(-1).engineReports[0].researchStatus,
      "PARTIAL",
    );
    const nativeRequest = await app.evaluate(() =>
      globalThis.onlineSmoke.localRequests.find((r) => r.tools),
    );
    assert.equal(nativeRequest.tools[0].function.name, "chronoz_get_report");
    assert.ok(!JSON.stringify(nativeRequest).includes("chronoz_report.pdf"));
    await page.setViewportSize({ width: 1440, height: 1100 });
    await fs.mkdir("test-results", { recursive: true });
    await chatPdf.scrollIntoViewIfNeeded();
    await page.screenshot({ path: "test-results/engine-chronoz-chat.png" });
    console.log(
      "PASS: native tool chat without research context returned a verified real PDF attachment.",
    );
    await open();
    await node.focus();
    await inspector
      .getByRole("button", { name: "Probe engine", exact: true })
      .click();
    await inspector.getByText("Partial", { exact: true }).waitFor();
    await page.setViewportSize({ width: 1440, height: 1100 });
    await fs.mkdir("test-results", { recursive: true });
    await node.scrollIntoViewIfNeeded();
    await studio
      .locator(".studio-inspector")
      .evaluate((el) => (el.scrollTop = 0));
    await page.screenshot({ path: "test-results/engine-chronoz-real.png" });
    await inspector
      .getByRole("button", { name: "Get October 2026 report", exact: true })
      .click();
    await pdf.waitFor();
    await pdf.scrollIntoViewIfNeeded();
    await page.screenshot({ path: "test-results/engine-chronoz-report.png" });
    for (const width of [1024, 680]) {
      await page.setViewportSize({ width, height: 1100 });
      const layout = await studio
        .locator(".studio-workbench")
        .evaluate((el) => ({ width: el.clientWidth, scroll: el.scrollWidth }));
      assert.ok(
        layout.scroll <= layout.width + 1,
        JSON.stringify({ width, layout }),
      );
    }
    await app.close();
    app = null;
    await launch();
    await open();
    studio = page.getByRole("region", { name: "Agent Construction Studio" });
    inspector = studio.getByRole("region", { name: "CHronoZ engine" });
    await studio
      .getByRole("group", { name: "Engine node", exact: true })
      .focus();
    await inspector.getByText("Partial", { exact: true }).waitFor();
    console.log(
      "PASS: Engine configuration and chat attachment survived restart.",
    );
    profile = await get();
    const restoredChats = await page.evaluate(() =>
      window.wonnyyDesktop.ai.listConversations(),
    );
    assert.equal(
      restoredChats.find((c) => c.id === engineChat.id).messages.at(-1)
        .engineReports[0].runId,
      engineChat.messages.at(-1).engineReports[0].runId,
    );
    assert.equal(profile.construction.activeRevision, 2);
    assert.ok(
      profile.construction.active.nodes.some((n) => n.kind === "Engine"),
    );
    await studio
      .getByRole("button", {
        name: "Remove " + engine.id + " → llm",
        exact: true,
      })
      .click();
    await studio
      .getByRole("button", { name: "Save & apply", exact: true })
      .click();
    await studio
      .getByRole("alert")
      .filter({ hasText: "Connect Engine before applying." })
      .waitFor();
    await studio
      .getByRole("button", { name: "Delete Engine", exact: true })
      .click();
    await studio
      .getByRole("button", { name: "Save & apply", exact: true })
      .click();
    await studio
      .getByText(
        "Configuration applied. It will be used on the next request.",
        { exact: true },
      )
      .waitFor();
    assert.equal(
      (await get()).construction.active.nodes.some((n) => n.kind === "Engine"),
      false,
    );
    assert.deepEqual(errors, []);
    await fs.writeFile(
      "test-results/engine-chronoz-real.json",
      JSON.stringify(
        {
          passed: true,
          transport: "real local bundled Python; provider network mocked",
          chatToolTransport:
            process.env.QTERMINAL_ENGINE_LIVE === "1"
              ? "LIVE Ollama qwen3:4b native function call"
              : "synthetic native Ollama function call",
          chatAttachmentPersisted: true,
          researchStatus: run.outcome,
          month: run.attachment.month,
          sha256: run.attachment.sha256,
          bytes: (await fs.stat(opened[0])).size,
          opening:
            "Electron shell.openPath intercepted; verified managed-copy path asserted",
          checks: [
            "Engine palette drag/drop",
            "native folder picker and real status probe",
            "keyboard connector",
            "draft/apply isolation",
            "real October PARTIAL report and SHA-256",
            "per-agent denial",
            "restart persistence",
            "disconnect validation and removal",
          ],
        },
        null,
        2,
      ),
    );
    console.log(
      "PASS: real CHronoZ bundle → Engine node → applied agent → verified October PARTIAL PDF and managed opening; restart/removal/isolation",
    );
  } catch (error) {
    console.error(await page?.getByRole("alert").allTextContents());
    await fs.mkdir("test-results", { recursive: true });
    await page
      ?.screenshot({ path: "test-results/engine-chronoz-failure.png" })
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
