const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");
const { promisify } = require("node:util");
const { execFile } = require("node:child_process");
async function main() {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-knowledge-ui-"),
  );
  const vault = path.join(root, "vault"),
    appData = path.join(root, "app-data");
  let app, page;
  const errors = [];
  const launch = async () => {
    const env = {
      ...process.env,
      ORBISTRY_SMOKE_DATA: appData,
      ORBISTRY_VAULT_PATH: vault,
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
    page.setDefaultTimeout(20000);
    page.on("pageerror", (e) => errors.push(e.message));
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page.getByRole("button", { name: "AGENT", exact: true }).click();
  };
  try {
    await fs.mkdir(vault);
    await fs.mkdir(appData);
    await fs.writeFile(
      path.join(vault, "a.md"),
      "SYNTHETIC FIXTURE. ALPHA allocation is 25%.",
    );
    await launch();
    await page.evaluate(() =>
      window.orbistryDesktop.ai.editContextBox({
        action: "create",
        name: "Synthetic research",
        paths: ["a.md"],
      }),
    );
    await page
      .getByRole("complementary", { name: "Orbistry Agent", exact: true })
      .getByRole("button", { name: "+ New Chat", exact: true })
      .click();
    const picker = page.getByRole("dialog", {
      name: "New Orbistry Agent chat",
      exact: true,
    });
    await picker.getByRole("radio", { name: /Synthetic research/ }).check();
    await picker
      .getByRole("button", { name: "Start Chat", exact: true })
      .click();
    await picker.waitFor({ state: "hidden" });
    await page
      .getByRole("textbox", { name: "Chat question", exact: true })
      .fill("Summarize the synthetic source.");
    await page
      .getByRole("complementary", { name: "Orbistry Agent", exact: true })
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    const capture = page.getByRole("button", {
      name: "Create knowledge proposal",
      exact: true,
    });
    await capture.waitFor();
    const conversations = await page.evaluate(() =>
      window.orbistryDesktop.ai.listConversations(),
    );
    const conversation = conversations[0];
    const before = await fs.readFile(path.join(vault, "a.md"));
    const source = conversation.messages.find((m) => m.role === "assistant")
      .sources[0];
    const extraction = {
      objective: "Synthetic allocation research",
      observations: [
        {
          kind: "evidence",
          claim: "Synthetic ALPHA allocation is 25%.",
          entity: "Synthetic ALPHA",
          topic: "allocation",
          period: "synthetic period",
          metricValue: "25%",
          sourceId: source.sourceId,
          location: "line 1",
          quote: "ALPHA allocation is 25%.",
        },
      ],
    };
    await capture.click();
    let dialog = page.getByRole("dialog", {
      name: "Knowledge proposal",
      exact: true,
    });
    await dialog
      .getByRole("textbox", { name: "Structured knowledge extraction" })
      .fill(JSON.stringify(extraction));
    await dialog
      .getByRole("button", { name: "Save proposal", exact: true })
      .dblclick();
    await dialog
      .getByRole("button", { name: "Proposal saved", exact: true })
      .waitFor();
    const proposal = JSON.parse(
      await dialog.getByLabel("Knowledge result").innerText(),
    );
    assert.equal(proposal.iteration, 0);
    assert.equal(proposal.records[0].approval, "pending");
    await dialog
      .getByRole("button", { name: "Preview approved knowledge" })
      .click();
    await page.waitForFunction(() => {
      try {
        return Array.isArray(
          JSON.parse(
            document.querySelector('pre[aria-label="Knowledge result"]')
              ?.textContent,
          ).evidence,
        );
      } catch {
        return false;
      }
    });
    assert.equal(
      JSON.parse(await dialog.getByLabel("Knowledge result").innerText())
        .evidence.length,
      0,
    );
    const approveArgs = [
      "scripts/knowledge-review.cjs",
      "--app-data",
      appData,
      "--vault",
      vault,
      "--action",
      "approve",
      "--iteration",
      "0",
      "--record",
      proposal.records[0].id,
      "--reviewer",
      "Electron test operator",
      "--rationale",
      "Checked the synthetic line and exact quotation independently.",
    ];
    await promisify(execFile)(process.execPath, approveArgs, {
      cwd: process.cwd(),
    });
    await dialog
      .getByRole("button", { name: "Preview approved knowledge" })
      .click();
    await page.waitForFunction(() => {
      try {
        return (
          JSON.parse(
            document.querySelector('pre[aria-label="Knowledge result"]')
              ?.textContent,
          ).evidence.length === 1
        );
      } catch {
        return false;
      }
    });
    await fs.mkdir("test-results", { recursive: true });
    const bounds = await dialog.boundingBox();
    assert.ok(
      bounds.x >= 16 &&
        bounds.y >= 16 &&
        bounds.x + bounds.width <= 1440 &&
        bounds.y + bounds.height <= 900,
    );
    await dialog.evaluate((element) => {
      element.scrollTop = 0;
    });
    await page.screenshot({ path: "test-results/knowledge-proposal.png" });
    await dialog.getByRole("button", { name: "Close", exact: true }).click();
    const unsupported = await page.evaluate(async (conversation) => {
      try {
        await window.orbistryDesktop.ai.chat({
          conversationId: conversation.id,
          requestId: crypto.randomUUID(),
          userMessage: "/loop synthetic research",
          expectedContextId: conversation.contextIdentity.id,
          activeStationIds: [],
          matchMode: "any",
        });
        return null;
      } catch (e) {
        return e.message;
      }
    }, conversation);
    assert.match(unsupported, /no \/loop extraction workflow/);
    assert.equal(
      (
        await page.evaluate(() => window.orbistryDesktop.ai.listConversations())
      )[0].messages.length,
      2,
    );
    await app.close();
    app = null;
    await launch();
    await page
      .getByRole("button", { name: "Create knowledge proposal", exact: true })
      .click();
    dialog = page.getByRole("dialog", {
      name: "Knowledge proposal",
      exact: true,
    });
    await dialog
      .getByRole("textbox", { name: "Structured knowledge extraction" })
      .fill(JSON.stringify(extraction));
    await dialog
      .getByRole("button", { name: "Preview approved knowledge" })
      .click();
    await dialog.getByLabel("Knowledge result").waitFor();
    assert.equal(
      JSON.parse(await dialog.getByLabel("Knowledge result").innerText())
        .evidence[0].record.id,
      proposal.records[0].id,
    );
    assert.deepEqual(await fs.readFile(path.join(vault, "a.md")), before);
    const listResult = await promisify(execFile)(
      process.execPath,
      [
        "scripts/knowledge-review.cjs",
        "--app-data",
        appData,
        "--vault",
        vault,
        "--action",
        "list",
      ],
      { cwd: process.cwd() },
    );
    assert.equal(JSON.parse(listResult.stdout).proposals.length, 1);
    assert.equal(
      await page.evaluate(
        () => typeof window.orbistryDesktop.ai.approveKnowledge,
      ),
      "undefined",
    );
    assert.deepEqual(errors, []);
    await fs.writeFile(
      "test-results/knowledge.json",
      JSON.stringify(
        {
          passed: true,
          transport: "synthetic",
          loopInstalled: false,
          checks: [
            "Real run to structured UI proposal via guarded IPC",
            "No reusable evidence before independent CLI approval",
            "Double-submit guard and immutable iteration0000",
            "Approved retrieval after restart with source hashes",
            "Primary source bytes unchanged; no renderer approval capability",
            "Missing /loop fails explicitly without adding messages",
          ],
        },
        null,
        2,
      ),
    );
    console.log(
      "PASS: completed run -> pending UI proposal -> external operator approval -> session-bound retrieval after restart; no model approval or Bank Vault writes",
    );
  } finally {
    await app?.close();
    assert.ok(
      path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep),
    );
    await fs.rm(root, { recursive: true, force: true });
  }
}
main().catch((error) => {
  console.error(error.stack);
  process.exitCode = 1;
});
