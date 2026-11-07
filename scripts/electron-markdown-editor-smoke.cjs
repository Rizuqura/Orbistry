const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");

async function main() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "qterminal-editor-"));
  const vault = path.join(root, "vault");
  let app;
  const errors = [];
  try {
    await fs.mkdir(vault);
    await fs.writeFile(path.join(vault, "note.md"), "# Original\r\n");
    await fs.writeFile(path.join(vault, "other.markdown"), "# Other\n");
    await fs.writeFile(path.join(vault, "data.csv"), "name,value\na,1\n");
    const env = {
      ...process.env,
      WONNYY_VAULT_PATH: vault,
      WONNYY_SMOKE_DATA: path.join(root, "profile"),
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
    page.setDefaultTimeout(20000);
    // Electron's will-prevent-unload handler owns this prompt. Prevent
    // Playwright's automatic dismissal from racing the native close handler.
    page.on("dialog", () => {});
    page.on("pageerror", (error) => errors.push(error.message));
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page.getByRole("button", { name: "WORKSPACE", exact: true }).click();
    const open = (name) =>
      page.locator(`.file-row[title="${name}"]`).dblclick();
    const edit = () =>
      page.getByRole("button", { name: "Edit Markdown", exact: true }).click();
    const editor = page.getByRole("textbox", {
      name: "Markdown source",
      exact: true,
    });
    const close = () =>
      page.getByRole("button", { name: "Close document", exact: true }).click();
    const discard = page.getByRole("dialog", {
      name: "Discard changes",
      exact: true,
    });
    await open("note.md");
    await edit();
    await editor.fill("# Saved\n\nEdited in Orbistry.\n");
    const closePrompt = await app.evaluate(
      ({ dialog, BrowserWindow }) =>
        new Promise((resolve) => {
          const original = dialog.showMessageBoxSync;
          dialog.showMessageBoxSync = (_window, options) => {
            dialog.showMessageBoxSync = original;
            resolve(options.message);
            return 0;
          };
          BrowserWindow.getAllWindows()[0].close();
        }),
    );
    assert.match(closePrompt, /without saving Markdown/);
    assert.equal(await editor.inputValue(), "# Saved\n\nEdited in Orbistry.\n");
    await page
      .getByRole("button", { name: "PLANET VIEW", exact: true })
      .click();
    await page.getByRole("button", { name: "WORKSPACE", exact: true }).click();
    assert.equal(await editor.inputValue(), "# Saved\n\nEdited in Orbistry.\n");
    await close();
    await discard.getByRole("button", { name: "Cancel", exact: true }).click();
    assert.equal(await editor.count(), 1);
    await editor.press("Control+s");
    await page
      .getByRole("button", { name: "Edit Markdown", exact: true })
      .waitFor();
    assert.equal(
      await fs.readFile(path.join(vault, "note.md"), "utf8"),
      "# Saved\r\n\r\nEdited in Orbistry.\r\n",
    );
    await edit();
    await editor.fill("# Unsaved");
    await open("other.markdown");
    await discard.getByRole("button", { name: "Cancel", exact: true }).click();
    assert.equal(await editor.inputValue(), "# Unsaved");
    await page.getByRole("button", { name: "Cancel", exact: true }).click();
    await discard
      .getByRole("button", { name: "Discard changes", exact: true })
      .click();
    await edit();
    await editor.fill("# My draft");
    await fs.writeFile(path.join(vault, "note.md"), "# External change\n");
    await page.getByRole("button", { name: "Save", exact: true }).click();
    await page
      .getByRole("alert")
      .filter({ hasText: "changed on disk" })
      .waitFor();
    assert.equal(await editor.inputValue(), "# My draft");
    assert.equal(
      await fs.readFile(path.join(vault, "note.md"), "utf8"),
      "# External change\n",
    );
    await fs.mkdir("test-results", { recursive: true });
    await page.screenshot({ path: "test-results/markdown-editor.png" });
    await close();
    await discard
      .getByRole("button", { name: "Discard changes", exact: true })
      .click();
    await open("other.markdown");
    await edit();
    await editor.fill("# Other saved\n");
    await page.getByRole("button", { name: "Save", exact: true }).click();
    await page
      .getByRole("button", { name: "Edit Markdown", exact: true })
      .waitFor();
    assert.equal(
      await fs.readFile(path.join(vault, "other.markdown"), "utf8"),
      "# Other saved\n",
    );
    await open("data.csv");
    await page
      .locator(".document-pane .active-tab")
      .filter({ hasText: "data.csv" })
      .waitFor();
    assert.equal(
      await page
        .getByRole("button", { name: "Edit Markdown", exact: true })
        .count(),
      0,
    );
    assert.equal(await editor.count(), 0);
    assert.deepEqual(errors, []);
    console.log(
      "Markdown editor acceptance passed: save, shortcut, line endings, drafts, discard, conflicts and Markdown-only editing.",
    );
  } finally {
    await app?.close();
    await fs.rm(root, { recursive: true, force: true });
  }
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
