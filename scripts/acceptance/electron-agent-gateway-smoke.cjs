const { _electron: electron } = require("playwright");
const fs = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");
const assert = require("node:assert/strict");
/** Verifies compact Gateway controls, read-only assignment inspection, preserved/deletable transcripts and Gateway-only new requests in an isolated offline desktop. */
async function main() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-gateway-"));
  const data = path.join(root, "app-data");
  const vault = path.join(root, "Universe");
  await fs.mkdir(data);
  await fs.mkdir(vault);
  let app, page;
  try {
    const env = {
      ...process.env,
      ORBISTRY_SMOKE_DATA: data,
      ORBISTRY_VAULT_PATH: vault,
    };
    delete env.ELECTRON_RUN_AS_NODE;
    delete env.ELECTRON_START_URL;
    app = await electron.launch({
      args: [
        path.resolve("scripts/acceptance/electron-online-smoke-main.cjs"),
        "--hidden",
      ],
      env,
    });
    page = await app.firstWindow();
    page.setDefaultTimeout(20000);
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await app.evaluate(
      async ({ app, BrowserWindow }, { repository, vault }) => {
        BrowserWindow.getAllWindows()[0].setSize(1680, 1000);
        BrowserWindow.getAllWindows()[0].showInactive();
        const require = process
          .getBuiltinModule("node:module")
          .createRequire(repository + "/package.json");
        const { randomUUID } = require("node:crypto");
        const agents = new (require(
          repository + "/electron/ai/agents/agent-store.cjs",
        ).AgentStore)(app.getPath("userData"));
        const service = new (require(
          repository + "/electron/ai/agents/entity-agents.cjs",
        ).EntityAgentService)({ agents, getVault: () => vault });
        for (const [index, name] of ["TSMC", "ASML"].entries()) {
          await require(
            repository + "/electron/domains/entity/worldview-store.cjs",
          ).saveWorldViewChip(vault, {
            id: name.toLowerCase(),
            name,
            icon: "",
            color: "#263f4b",
            tags:
              name === "TSMC" ? ["foundry", "semiconductor"] : ["equipment"],
            category: "Company",
            position: { x: index * 4, y: 0 },
          });
          const agent = await agents.create({
            name: name === "TSMC" ? "TSMC Research" : "ASML Analyst",
            creationId: randomUUID(),
          });
          const graph = structuredClone(agent.construction.draft);
          graph.nodes.push({
            id: "price-engine",
            kind: "Engine",
            x: 64,
            y: 240,
            config: {
              instanceId: randomUUID(),
              engineId: "daily-price",
              operation: "price",
              engineVersion: "0.1.0",
              permissionPolicy: "read-only-auto",
            },
          });
          graph.edges.push({ from: "price-engine", to: "llm" });
          await agents.saveConstruction({
            id: agent.id,
            action: "apply",
            expectedRevision: 0,
            config: graph,
          });
          const assignment = await service.assign({
            vaultPath: vault,
            entityId: name.toLowerCase(),
            agentId: agent.id,
          });
          if (index === 0) {
            const session = await service.session(vault, assignment);
            session.messages = [
              {
                id: randomUUID(),
                role: "user",
                content: "Review the assigned research.",
                at: new Date().toISOString(),
              },
              {
                id: randomUUID(),
                role: "assistant",
                content:
                  "This is an offline acceptance transcript, loaded from the existing assignment store.",
                at: new Date().toISOString(),
              },
            ];
            await service.saveSession(vault, session);
          }
        }
      },
      { repository: process.cwd(), vault },
    );
    await page.reload();
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page.getByRole("button", { name: "AGENT", exact: true }).click();
    await page
      .getByRole("heading", { name: "Ask Orbistry.", exact: true })
      .waitFor();
    await page.locator(".gateway-agent").first().waitFor();
    assert.equal(await page.locator(".gateway-agent").count(), 2);
    await page
      .getByRole("searchbox", { name: "Filter assigned agents by tag" })
      .fill("foundry");
    await page.waitForFunction(
      () => document.querySelectorAll(".gateway-agent").length === 1,
    );
    assert.ok(
      (await page.locator(".gateway-agent").innerText()).includes(
        "TSMC Research",
      ),
    );
    await page
      .getByRole("searchbox", { name: "Filter assigned agents by tag" })
      .fill("");
    await page.waitForFunction(
      () => document.querySelectorAll(".gateway-agent").length === 2,
    );
    await app.evaluate(({ dialog }, repository) => {
      dialog.showOpenDialog = async () => ({
        canceled: false,
        filePaths: [repository + "/public/icon.png"],
      });
    }, process.cwd());
    await page
      .getByRole("button", { name: "Edit icon for ASML Analyst", exact: true })
      .click();
    await page
      .locator(
        '.gateway-edit-avatar[aria-label="Edit icon for ASML Analyst"] img',
      )
      .waitFor();
    await page.screenshot({ path: "test-results/agent-gateway-landing.png" });
    const gatewayBounds = await page.locator(".agent-gateway").boundingBox();
    const viewport = await page.evaluate(() => ({
      width: innerWidth,
      height: innerHeight,
    }));
    assert.ok(
      gatewayBounds.x + gatewayBounds.width <= viewport.width + 1,
      "compact gateway fits the window",
    );
    assert.ok(
      gatewayBounds.y + gatewayBounds.height <= viewport.height,
      "compact gateway fits above the footer",
    );
    const iconWidth = await page
      .locator(".gateway-new svg")
      .evaluate((node) => node.getBoundingClientRect().width);
    assert.ok(
      Math.abs(iconWidth - 22) < 1,
      "gateway controls preserve readable compact sizing",
    );
    const sidebar = page.locator(".gateway-sidebar");
    const originalWidth = (await sidebar.boundingBox()).width;
    const divider = page.getByRole("separator", {
      name: "Resize agent sidebar",
    });
    const handle = await divider.boundingBox();
    await page.mouse.move(
      handle.x + handle.width / 2,
      handle.y + handle.height / 2,
    );
    await page.mouse.down();
    await page.mouse.move(
      handle.x + handle.width / 2 + 84,
      handle.y + handle.height / 2,
      { steps: 8 },
    );
    await page.mouse.up();
    assert.ok(
      Math.abs((await sidebar.boundingBox()).width - originalWidth - 84) < 2,
      "pointer resize accounts for compact zoom",
    );
    await divider.focus();
    await page.keyboard.press("ArrowLeft");
    const resizedWidth = (await sidebar.boundingBox()).width;
    assert.ok(
      Math.abs(resizedWidth - originalWidth - 64) < 2,
      "keyboard resize works",
    );
    await page.reload();
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page.getByRole("button", { name: "AGENT", exact: true }).click();
    await page.locator(".gateway-agent").first().waitFor();
    assert.ok(
      Math.abs((await sidebar.boundingBox()).width - resizedWidth) < 2,
      "sidebar width survives reload",
    );
    await page.screenshot({ path: "test-results/agent-gateway-resized.png" });
    await page.getByRole("button", { name: "Tools", exact: true }).click();
    await page.getByRole("heading", { name: "Assigned tools" }).waitFor();
    await page.getByRole("button", { name: "Close selection" }).click();
    await page
      .locator(".gateway-agent")
      .filter({ hasText: "TSMC Research" })
      .click();
    await page
      .getByText("Historical assigned-agent transcript", { exact: true })
      .click();
    await page
      .getByText(
        "This is an offline acceptance transcript, loaded from the existing assignment store.",
      )
      .waitFor();
    await page
      .getByRole("dialog", { name: "Assigned agent details" })
      .locator("p")
      .filter({ hasText: /^daily-price \/ price/ })
      .waitFor();
    await page.getByText(/TSMC \/ Identity missing/).waitFor();
    await page.screenshot({
      path: "test-results/agent-gateway-assignment.png",
    });
    await page
      .getByRole("button", { name: "Ask through Gateway", exact: true })
      .click();
    await page.waitForFunction(() =>
      document
        .querySelector(".gateway-composer textarea")
        ?.value.includes("entity tsmc"),
    );
    assert.equal(
      await page.locator(".gateway-identity strong").innerText(),
      "Orbistry Universe Gateway",
    );
    assert.match(
      await page
        .getByRole("textbox", { name: "Message agent", exact: true })
        .inputValue(),
      /entity tsmc/,
    );
    await app.evaluate(() => {
      globalThis.onlineSmoke.entityProtocolReply = () => ({
        action: "answer",
        answer: "Gateway offline response.",
      });
    });
    await page
      .getByRole("textbox", { name: "Message agent", exact: true })
      .fill("Gateway persistence check");
    await page
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await page
      .getByText("Gateway offline response.", { exact: true })
      .waitFor();
    await page
      .getByText("Gateway persistence check", { exact: true })
      .waitFor();
    await app.evaluate(() => {
      globalThis.onlineSmoke.entityProtocolReply = () => ({
        action: "unsupported",
      });
    });
    await page
      .getByRole("textbox", { name: "Message agent", exact: true })
      .fill("Gateway error check");
    await page
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await page
      .getByRole("alert")
      .filter({ hasText: "unsupported assignment action" })
      .waitFor();
    await page
      .locator(".gateway-agent")
      .filter({ hasText: "ASML Analyst" })
      .click();
    await page
      .getByRole("button", { name: "Ask through Gateway", exact: true })
      .click();
    assert.equal(
      await page.locator(".gateway-identity strong").innerText(),
      "Orbistry Universe Gateway",
    );
    assert.equal(
      await page
        .getByText(
          "This is an offline acceptance transcript, loaded from the existing assignment store.",
        )
        .count(),
      0,
    );
    await page.getByRole("button", { name: "New chat", exact: true }).click();
    await page.locator(".gateway-history-item").first().waitFor();
    const deleteHistory = page
      .getByRole("button", { name: /^Delete chat / })
      .first();
    await deleteHistory.click();
    const chatConfirmation = page.getByRole("dialog", {
      name: "Delete chat",
      exact: true,
    });
    await chatConfirmation
      .getByRole("button", { name: "Cancel", exact: true })
      .click();
    assert.equal(await page.locator(".gateway-history-item").count(), 2);
    await deleteHistory.click();
    await chatConfirmation
      .getByRole("button", { name: "Delete chat", exact: true })
      .click();
    await page.waitForFunction(
      () => document.querySelectorAll(".gateway-history-item").length === 1,
    );
    // Gateway requests now retain a normal human-facing conversation. The old
    // transcript survives deleting a separate new chat until explicitly removed.
    await deleteHistory.click();
    await chatConfirmation
      .getByRole("button", { name: "Delete chat", exact: true })
      .click();
    await page.waitForFunction(
      () => document.querySelectorAll(".gateway-history-item").length === 0,
    );
    await page
      .locator(".gateway-agent")
      .filter({ hasText: "TSMC Research" })
      .click();
    await page
      .getByRole("button", { name: "Delete assigned chat", exact: true })
      .click();
    await chatConfirmation
      .getByRole("button", { name: "Delete chat", exact: true })
      .click();
    await page
      .getByRole("button", { name: "Back to Gateway", exact: true })
      .click();
    await page
      .getByRole("heading", { name: "Ask Orbistry.", exact: true })
      .waitFor();
    const deleteAgent = page.getByRole("button", {
      name: "Delete agent ASML Analyst",
      exact: true,
    });
    await deleteAgent.click();
    const agentConfirmation = page.getByRole("dialog", {
      name: "Delete agent",
      exact: true,
    });
    await agentConfirmation
      .getByRole("button", { name: "Cancel", exact: true })
      .click();
    assert.equal(await page.locator(".gateway-agent").count(), 2);
    await deleteAgent.click();
    await agentConfirmation
      .getByRole("button", { name: "Delete agent", exact: true })
      .click();
    await page.waitForFunction(
      () => document.querySelectorAll(".gateway-agent").length === 1,
    );
    await page
      .getByRole("button", { name: "Manage agents & conversations" })
      .click();
    await page.locator(".agent-history-pane").waitFor();
    await page
      .getByRole("button", { name: "Back to gateway", exact: false })
      .click();
    await page.locator(".agent-gateway").waitFor();
    assert.deepEqual(errors, []);
    console.log(
      "PASS: gateway landing, real assignment list, persisted transcript, context/tools, assignment isolation, new chat and advanced workspace.",
    );
  } catch (e) {
    if (page)
      await page.screenshot({ path: "test-results/agent-gateway-failure.png" });
    throw e;
  } finally {
    await app?.close();
    assert.ok(
      path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep),
    );
    await fs.rm(root, { recursive: true, force: true });
  }
}
main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
