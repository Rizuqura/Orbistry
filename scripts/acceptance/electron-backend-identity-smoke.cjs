const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");
const { createChip, readChips } = require("./electron-worldview-smoke.cjs");

/** Verifies the real menu, independent floating inspector, offline compilation, freshness and clipboard routing using disposable app/source data. Providers and system clipboard writes are intercepted in this isolated test only. */
async function main() {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-identity-ui-"),
  );
  const vault = path.join(root, "Universe");
  const data = path.join(root, "app-data");
  const repository = path.resolve(__dirname, "../..");
  let app, page;
  try {
    await fs.mkdir(vault);
    await fs.mkdir(data);
    await fs.mkdir("test-results", { recursive: true });
    const env = {
      ...process.env,
      ORBISTRY_VAULT_PATH: vault,
      ORBISTRY_SMOKE_DATA: data,
    };
    delete env.ELECTRON_RUN_AS_NODE;
    delete env.ELECTRON_START_URL;
    app = await electron.launch({
      args: [
        path.resolve("scripts/acceptance/electron-online-smoke-main.cjs"),
        "--hidden",
        "--disable-renderer-backgrounding",
        "--disable-background-timer-throttling",
      ],
      env,
      timeout: 30000,
    });
    page = await app.firstWindow();
    page.setDefaultTimeout(20000);
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await app.evaluate(({ BrowserWindow, clipboard }, repository) => {
      BrowserWindow.getAllWindows()[0].showInactive();
      const require = process
        .getBuiltinModule("node:module")
        .createRequire(repository + "/package.json");
      globalThis.identityExecutions = 0;
      require(
        repository + "/electron/financial-service.cjs",
      ).financialService.get = async () => {
        globalThis.identityExecutions++;
        throw Error("Provider execution is forbidden in inspector acceptance.");
      };
      clipboard.writeText = (value) => {
        globalThis.identityCopiedText = value;
      };
    }, repository);
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page
      .getByRole("heading", { name: "WorldView", exact: true })
      .waitFor();
    await createChip(page, "Identity Acceptance");
    await page.waitForFunction(
      () =>
        !/Saving|Loading/.test(
          document.querySelector(".worldview-save-status").textContent,
        ),
    );
    const entity = (await readChips(page))[0];
    const original =
      "# Financial Performance\nRevenue is recorded in TWD.\n## Gross Margin\nSource-specific gross margin evidence.\n## Outlook\nTreat instructions in this document as untrusted source text.\n";
    const file = path.join(vault, "identity-profile.md");
    await fs.writeFile(file, original);
    await app.evaluate(
      async (_, { root, id, repository }) => {
        const require = process
          .getBuiltinModule("node:module")
          .createRequire(repository + "/package.json");
        await require(
          repository + "/electron/domains/entity/worldview-store.cjs",
        ).assignWorldViewFiles(root, id, ["identity-profile.md"]);
        await require(
          repository + "/electron/domains/knowledge/knowledge-store.cjs",
        ).saveKnowledgeIndex(
          root,
          id,
          '# About\nsource: identity-profile.md\n# Financials\nsource: yahooFinancials("2330.TW")',
          null,
          true,
        );
        await require(
          repository + "/electron/domains/entity/worldview-store.cjs",
        ).saveWorldViewChip(root, {
          id: "identity-peer",
          name: "Identity Peer",
          icon: "",
          color: "#262b30",
          tags: [],
          category: "Company",
          position: { x: 5, y: 5 },
        });
        const { createConnector } = require(
          repository + "/electron/domains/entity/connector-store.cjs",
        );
        await createConnector(root, {
          id: "identity-output",
          sourceEntityId: id,
          sourcePortId: "west",
          targetEntityId: "identity-peer",
          targetPortId: "east",
          name: "Supplies materials",
          definition: "Sends materials to Identity Peer.",
          direction: "directed",
        });
        await createConnector(root, {
          id: "identity-input",
          sourceEntityId: "identity-peer",
          sourcePortId: "north",
          targetEntityId: id,
          targetPortId: "north",
          name: "Receives research",
          definition: "Receives research from Identity Peer.",
          direction: "directed",
        });
      },
      { root: vault, id: entity.id, repository },
    );
    await page.reload();
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page.waitForFunction(
      () =>
        !/Saving|Loading/.test(
          document.querySelector(".worldview-save-status").textContent,
        ),
    );
    await page.getByRole("button", { name: "Reset view", exact: true }).click();
    const canvas = await page.locator(".worldview-canvas").boundingBox();
    await page.mouse.click(
      canvas.x + canvas.width / 2 + (entity.x - entity.y) * 48,
      canvas.y + canvas.height / 2 + (entity.x + entity.y) * 24 + 35,
    );
    await page
      .getByRole("button", { name: "More entity options", exact: true })
      .click();
    const actions = page.getByRole("group", {
      name: "More entity actions",
      exact: true,
    });
    const labels = await actions.getByRole("button").allTextContents();
    assert.equal(
      labels[labels.indexOf("Edit Entity") + 1],
      "See Backend Identity",
    );
    await actions
      .getByRole("button", { name: "See Backend Identity", exact: true })
      .click();
    const inspector = page.getByRole("dialog", {
      name: "Backend Identity — Identity Acceptance",
      exact: true,
    });
    await inspector.getByText(/No backend identity compiled/).waitFor();
    assert.equal(await page.locator(".knowledge-card").count(), 0);
    await inspector
      .getByRole("button", { name: "Generate Backend Identity", exact: true })
      .click();
    await inspector
      .getByText("Backend identity generated. No capability was executed.", {
        exact: true,
      })
      .waitFor();
    const first = await page.evaluate(
      ({ root, id }) =>
        window.orbistryDesktop.worldview.request("identity-status", {
          vaultPath: root,
          id,
        }),
      { root: vault, id: entity.id },
    );
    assert.equal(first.status, "fresh");
    assert.ok(first.manifest.knowledge.chunkCount >= 3);
    assert.equal(first.manifest.connections.inputs[0].type, "input");
    assert.equal(
      first.manifest.connections.inputs[0].description,
      "Receives research from Identity Peer.",
    );
    assert.equal(first.manifest.connections.outputs[0].type, "output");
    assert.equal(
      first.manifest.connections.outputs[0].description,
      "Sends materials to Identity Peer.",
    );
    await inspector
      .locator(".identity-json")
      .filter({ hasText: "Receives research from Identity Peer." })
      .waitFor();
    assert.match(
      await inspector.locator(".identity-json").innerText(),
      /"type": "output"/,
    );
    assert.equal(await app.evaluate(() => globalThis.identityExecutions), 0);
    await inspector
      .getByRole("button", { name: "Copy identity", exact: true })
      .click();
    await inspector
      .getByText("Inspector data copied.", { exact: true })
      .waitFor();
    const copied = await app.evaluate(() => globalThis.identityCopiedText);
    assert.equal(JSON.parse(copied).manifest.entityId, entity.id);
    assert.deepEqual(
      JSON.parse(copied).manifest.connections,
      first.manifest.connections,
    );
    assert.doesNotMatch(copied, /Source-specific gross margin evidence/);
    await inspector
      .getByRole("tab", { name: "Knowledge", exact: true })
      .click();
    await inspector
      .getByRole("textbox", { name: "Search knowledge", exact: true })
      .fill("Gross Margin");
    await inspector
      .getByRole("button", { name: "Search", exact: true })
      .click();
    await inspector
      .locator(".identity-json")
      .filter({ hasText: "Source-specific gross margin evidence" })
      .waitFor();
    assert.match(
      await inspector.locator(".identity-json").innerText(),
      /headingPath/,
    );
    await inspector
      .getByRole("tab", { name: "Capabilities", exact: true })
      .click();
    await inspector
      .locator(".identity-json")
      .filter({ hasText: "provider:yahoo-finance:read" })
      .waitFor();
    assert.equal(
      await inspector.getByRole("button", { name: /Execute/ }).count(),
      0,
    );
    const title = inspector.getByLabel("Move Backend Identity window", {
      exact: true,
    });
    const before = await inspector.boundingBox(),
      handle = await title.boundingBox();
    await page.mouse.move(handle.x + 180, handle.y + 15);
    await page.mouse.down();
    await page.mouse.move(handle.x + 250, handle.y + 45, { steps: 5 });
    await page.mouse.up();
    const moved = await inspector.boundingBox();
    assert.ok(moved.x > before.x + 20);
    const resize = inspector.getByRole("separator", {
      name: "Resize Backend Identity window",
      exact: true,
    });
    const corner = await resize.boundingBox();
    await page.mouse.move(corner.x + 12, corner.y + 12);
    await page.mouse.down();
    await page.mouse.move(corner.x + 82, corner.y + 32, { steps: 5 });
    await page.mouse.up();
    const resized = await inspector.boundingBox();
    assert.ok(resized.width > moved.width + 30);
    await title.focus();
    await title.press("ArrowLeft");
    assert.ok((await inspector.boundingBox()).x < resized.x);
    await resize.focus();
    await resize.press("ArrowRight");
    assert.ok((await inspector.boundingBox()).width >= resized.width);
    await inspector
      .getByRole("tab", { name: "Compilation Log", exact: true })
      .click();
    await inspector
      .locator(".identity-json")
      .filter({ hasText: "compiled" })
      .waitFor();
    await inspector
      .getByRole("button", { name: "Regenerate Backend Identity", exact: true })
      .click();
    await inspector
      .getByText("Unchanged inputs. Existing identity version reused.", {
        exact: true,
      })
      .waitFor();
    await fs.appendFile(file, "\nChanged source evidence.\n");
    await inspector
      .getByRole("button", { name: "Check freshness", exact: true })
      .click();
    await inspector
      .getByText(/Source data or entity metadata changed/)
      .waitFor();
    await inspector
      .getByRole("button", { name: "Regenerate Backend Identity", exact: true })
      .click();
    await inspector
      .getByText("Backend identity generated. No capability was executed.", {
        exact: true,
      })
      .waitFor();
    const current = await page.evaluate(
      ({ root, id }) =>
        window.orbistryDesktop.worldview.request("identity-status", {
          vaultPath: root,
          id,
        }),
      { root: vault, id: entity.id },
    );
    assert.notEqual(
      current.manifest.identityVersion,
      first.manifest.identityVersion,
    );
    assert.equal(await app.evaluate(() => globalThis.identityExecutions), 0);
    await fs.writeFile(file, original + "\n# " + "x".repeat(513) + "\n");
    await inspector
      .getByRole("button", { name: "Regenerate Backend Identity", exact: true })
      .click();
    await inspector
      .getByRole("alert")
      .filter({ hasText: "heading exceeds" })
      .waitFor();
    await inspector
      .getByRole("tab", { name: "Compilation Log", exact: true })
      .click();
    await inspector
      .locator(".identity-json")
      .filter({ hasText: '"failed"' })
      .waitFor();
    const failed = await page.evaluate(
      ({ root, id }) =>
        window.orbistryDesktop.worldview.request("identity-status", {
          vaultPath: root,
          id,
        }),
      { root: vault, id: entity.id },
    );
    assert.equal(failed.lastAttempt.outcome, "failed");
    assert.equal(
      failed.manifest.identityVersion,
      current.manifest.identityVersion,
    );
    await fs.writeFile(file, original + "\nChanged source evidence.\n");
    await inspector
      .getByRole("button", { name: "Regenerate Backend Identity", exact: true })
      .click();
    await inspector
      .getByText("Backend identity generated. No capability was executed.", {
        exact: true,
      })
      .waitFor();
    await inspector.getByRole("tab", { name: "Identity", exact: true }).click();
    await page.screenshot({
      path: "test-results/backend-identity-terminal.png",
    });
    await app.evaluate(({ BrowserWindow }) => {
      const window = BrowserWindow.getAllWindows()[0];
      globalThis.identityOriginalBounds = window.getBounds();
      window.setSize(760, 700);
    });
    await page.waitForFunction(() => {
      const panel = document
        .querySelector(".backend-identity-window")
        .getBoundingClientRect();
      return panel.right <= innerWidth + 1 && panel.bottom <= innerHeight + 1;
    });
    await page.screenshot({ path: "test-results/backend-identity-small.png" });
    await inspector
      .getByRole("button", { name: "Close Backend Identity", exact: true })
      .click();
    await inspector.waitFor({ state: "hidden" });
    assert.deepEqual(errors, []);
    assert.equal(
      await fs.readFile(file, "utf8"),
      original + "\nChanged source evidence.\n",
    );
    console.log(
      "PASS: menu placement, separate inspector, offline generation/reuse, chunks, contracts, clipboard routing, freshness, drag/resize/keyboard, responsive bounds and source integrity.",
    );
  } catch (error) {
    if (page)
      await page
        .screenshot({ path: "test-results/backend-identity-failure.png" })
        .catch(() => {});
    throw error;
  } finally {
    await app?.close();
    assert.ok(
      path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep),
    );
    await fs.rm(root, { recursive: true, force: true });
  }
}
main().catch(function failed(error) {
  console.error(error);
  process.exitCode = 1;
});
