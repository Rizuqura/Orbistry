const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises"),
  path = require("node:path"),
  os = require("node:os");
async function main() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-victoria-"));
  let app, page;
  const errors = [];
  const countChats = () =>
    page
      .evaluate(() => window.orbistryDesktop.ai.listConversations())
      .then((items) => items.length);
  const composerInView = async () =>
    page.waitForFunction(() => {
      const el = document.querySelector(".chat-composer");
      if (!el) return false;
      const r = el.getBoundingClientRect();
      return r.bottom <= innerHeight && r.right <= innerWidth;
    });
  try {
    await fs.writeFile(
      path.join(root, "guide.md"),
      "# Research\n\nALPHA allocation is 25%.\n\nBuild context deliberately. Read, review and save the sources before starting a conversation.",
    );
    await fs.writeFile(
      path.join(root, "data.csv"),
      "name,value\nALPHA,25\nBETA,75",
    );
    const env = {
      ...process.env,
      ORBISTRY_SMOKE_DATA: path.join(root, ".wonnyy", "app-data"),
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
    page = await app.firstWindow();
    page.setDefaultTimeout(20000);
    page.on("pageerror", (error) => errors.push(error.message));
    await page.waitForFunction(() => window.orbistryDesktop?.apiVersion === 18);
    await page.getByRole("button", { name: "WORKSPACE", exact: true }).click();
    assert.equal(await page.title(), "Orbistry");
    assert.deepEqual(
      await app.evaluate(({ app, BrowserWindow }) => ({
        name: app.getName(),
        title: BrowserWindow.getAllWindows()[0].getTitle(),
      })),
      { name: "Orbistry", title: "Orbistry" },
    );
    assert.equal(
      await page.locator(".version").innerText(),
      `v${require("../package.json").version} Victoria (Beta)`,
    );
    await page
      .getByRole("button", { name: "Minimize Universe", exact: true })
      .click();
    await page
      .getByRole("button", { name: "Restore Universe", exact: true })
      .click();
    await page
      .getByRole("button", { name: "Rescan vault", exact: true })
      .click();
    const entry = page.locator(".file-row").filter({ hasText: "guide.md" });
    await entry.dblclick();
    await page
      .locator(".markdown-raw")
      .getByText(/ALPHA allocation/)
      .waitFor();
    const review = page.getByRole("button", {
      name: "Add file to context",
      exact: true,
    });
    await review.click();
    const approval = page.getByRole("dialog", {
      name: "Add to Active Context",
      exact: true,
    });
    await approval.getByRole("button", { name: "Cancel", exact: true }).click();
    assert.equal(await countChats(), 0);
    await review.click();
    await approval
      .getByRole("button", { name: "Add to Active Context", exact: true })
      .click();
    await page
      .getByRole("button", { name: "In active context", exact: true })
      .waitFor();
    assert.equal(await countChats(), 0);
    await page.getByRole("button", { name: "WorldView", exact: true }).click();
    await page
      .getByRole("button", { name: "Open Context Box library", exact: true })
      .click();
    const library = page.getByRole("region", {
      name: "Context Boxes",
      exact: true,
    });
    await library
      .getByRole("button", {
        name: "Create Context Box from Selection…",
        exact: true,
      })
      .click();
    const boxDialog = page.locator(".context-box-dialog");
    await boxDialog
      .getByRole("textbox", { name: "Context Box name", exact: true })
      .fill("Victoria research");
    await boxDialog
      .getByRole("button", { name: "Create Context Box", exact: true })
      .click();
    await boxDialog.waitFor({ state: "hidden" });
    await page
      .getByRole("button", { name: "Close library", exact: true })
      .click();
    await page.getByRole("button", { name: "WORKSPACE", exact: true }).click();
    assert.equal(await countChats(), 0);
    const tools = page.locator(".chat-context-tools");
    assert.equal(await tools.getAttribute("open"), null);
    await page
      .getByRole("button", { name: "+ New Chat", exact: true })
      .first()
      .click();
    const picker = page.getByRole("dialog", {
      name: "New Orbistry Agent chat",
      exact: true,
    });
    await picker.getByRole("radio", { name: /Victoria research/ }).check();
    await fs.mkdir("test-results", { recursive: true });
    await page.screenshot({ path: "test-results/victoria-picker.png" });
    await picker
      .getByRole("button", { name: "Create Chat", exact: true })
      .click();
    await picker.waitFor({ state: "hidden" });
    assert.equal(await countChats(), 1);
    await page
      .getByRole("textbox", { name: "Chat question", exact: true })
      .fill("What is ALPHA allocation?");
    await page
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await page
      .locator(".chat-message-assistant")
      .filter({ hasText: "25%" })
      .waitFor();
    await composerInView();
    const style = await page
      .locator(".chat-message-assistant")
      .evaluate((el) => ({
        font: getComputedStyle(el).fontFamily,
        size: getComputedStyle(el).fontSize,
        filter: getComputedStyle(el).backdropFilter,
      }));
    assert.ok(style.font.includes("Segoe UI"));
    assert.equal(style.size, "14px");
    assert.equal(style.filter, "none");
    await page.getByRole("button", { name: "History", exact: true }).click();
    await page
      .getByRole("textbox", { name: "Search chat titles", exact: true })
      .fill("Untitled");
    await page.getByRole("button", { name: "History", exact: true }).click();
    await tools.locator("summary").click();
    await page
      .getByRole("combobox", {
        name: "Orbistry Agent Context Box",
        exact: true,
      })
      .waitFor();
    await tools.locator("summary").click();
    const divider = page.getByRole("separator", {
      name: "Resize chat panel",
      exact: true,
    });
    const width = Number(await divider.getAttribute("aria-valuenow"));
    await divider.focus();
    await divider.press("ArrowLeft");
    assert.ok(Number(await divider.getAttribute("aria-valuenow")) > width);
    await fs.mkdir("test-results", { recursive: true });
    await page.screenshot({ path: "test-results/victoria-workspace.png" });
    await page.getByRole("button", { name: "Undock", exact: true }).click();
    await page.locator(".chat-panel-floating").waitFor();
    await composerInView();
    await page.screenshot({ path: "test-results/victoria-planet.png" });
    await page.setViewportSize({ width: 1100, height: 760 });
    await composerInView();
    assert.ok(
      await page.locator(".chat-header").evaluate((el) => {
        const r = el.getBoundingClientRect();
        return Boolean(
          document
            .elementFromPoint(r.left + 40, r.top + 20)
            ?.closest(".chat-panel-floating"),
        );
      }),
    );
    await page.screenshot({ path: "test-results/victoria-compact.png" });
    await page.getByRole("button", { name: "WORKSPACE", exact: true }).click();
    await page.locator(".file-row").filter({ hasText: "data.csv" }).dblclick();
    await page
      .getByRole("button", { name: "Add file to context", exact: true })
      .waitFor();
    await page
      .getByRole("button", { name: "Close document", exact: true })
      .click();
    await page.getByText("No document open", { exact: true }).waitFor();
    assert.equal(await countChats(), 1);
    assert.deepEqual(errors, []);
    const checks = [
      "Victoria identity and application/window title",
      "Markdown/CSV context review, cancel, approval, explicit box creation without sessions",
      "Bound chat creation, real IPC with synthetic inference, sources and history",
      "Minimal chat typography, keyboard disclosures/divider, visible sticky composer",
      "Workspace/Planet continuity and compact desktop viewport; accessible close document",
    ];
    await fs.writeFile(
      "test-results/victoria.json",
      JSON.stringify({ passed: true, checks, transport: "synthetic" }, null, 2),
    );
    console.log("PASS: " + checks.join("; "));
  } catch (error) {
    await page
      ?.screenshot({ path: "test-results/victoria-failure.png" })
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
main().catch((e) => {
  console.error(e.stack);
  process.exitCode = 1;
});
