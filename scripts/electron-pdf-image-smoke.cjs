const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises"),
  path = require("node:path"),
  os = require("node:os");
const { textPdf } = require("./fixtures/text-pdf.cjs");
const { imagePdf } = require("./fixtures/image-pdf.cjs");
async function main() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-pdf-image-"));
  let app, page;
  const errors = [];
  try {
    const files = [
      "text.pdf",
      "scanned.pdf",
      "image.png",
      "image.jpg",
      "image.jpeg",
    ];
    await fs.writeFile(
      path.join(root, "text.pdf"),
      textPdf([["ALPHA allocation is 25%."]]),
    );
    await fs.writeFile(path.join(root, "scanned.pdf"), imagePdf());
    await fs.writeFile(path.join(root, "broken.pdf"), "Invalid PDF fixture");
    for (const ext of ["png", "jpg", "jpeg"])
      await fs.copyFile(
        path.resolve(
          "scripts/fixtures/ocr-text." + (ext === "png" ? "png" : "jpg"),
        ),
        path.join(root, "image." + ext),
      );
    const env = {
      ...process.env,
      ORBISTRY_VAULT_PATH: root,
      ORBISTRY_SMOKE_DATA: path.join(root, ".wonnyy", "app-data"),
    };
    delete env.ELECTRON_START_URL;
    delete env.ELECTRON_RUN_AS_NODE;
    app = await electron.launch({
      args: [
        path.resolve("scripts/electron-online-smoke-main.cjs"),
        "--hidden",
      ],
      env,
      timeout: 30000,
    });
    page = await app.firstWindow();
    page.setDefaultTimeout(30000);
    page.on("pageerror", (e) => errors.push(e.message));
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    const boxes = await page.evaluate(async (paths) => {
      const ai = window.orbistryDesktop.ai;
      const boxes = [];
      for (const file of paths)
        boxes.push(
          await ai.editContextBox({
            action: "create",
            name: file,
            paths: [file],
          }),
        );
      boxes.push(
        await ai.editContextBox({
          action: "create",
          name: "Needs repair",
          paths: ["broken.pdf"],
        }),
      );
      return boxes;
    }, files);
    await page.reload();
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    const sidebar = page.getByRole("complementary", {
      name: "Planet details and context",
    });
    await sidebar.getByText("text.pdf", { exact: true }).waitFor();
    for (const file of files) {
      const row = sidebar
        .locator(".context-manager-box-row")
        .filter({ has: page.getByText(file, { exact: true }) });
      await row.getByText(/est\. tokens/).waitFor();
      assert.doesNotMatch(await row.innerText(), /unavailable|~0 /);
    }
    const broken = sidebar
      .locator(".context-manager-box-row")
      .filter({ has: page.getByText("Needs repair", { exact: true }) });
    await broken.locator(".context-estimate-error").waitFor();
    await fs.writeFile(
      path.join(root, "broken.pdf"),
      textPdf([["Repaired PDF allocation is 25%."]]),
    );
    await sidebar
      .getByRole("button", { name: "Refresh token estimates", exact: true })
      .click();
    await broken.getByText(/est\. tokens/).waitFor();
    assert.equal(await broken.locator(".context-estimate-error").count(), 0);
    const inspected = await page.evaluate(
      async (ids) =>
        Promise.all(
          ids.map((id) => window.orbistryDesktop.ai.inspectContextBox(id)),
        ),
      boxes.map((b) => b.id),
    );
    assert.ok(
      inspected.every(
        (box) =>
          box.items[0].status === "ready" && box.items[0].estimatedTokens > 0,
      ),
    );
    const pdf = await page.evaluate(() =>
      window.orbistryDesktop.vault.readPdf("scanned.pdf"),
    );
    assert.equal(pdf.textStatus, "ready");
    await fs.mkdir("test-results", { recursive: true });
    await page.screenshot({ path: "test-results/pdf-image-estimates.png" });
    await page.locator('.file-row[title="image.png"]').dblclick();
    await page.getByRole("img", { name: "image.png", exact: true }).waitFor();
    await page.getByText(/Local OCR text is available/).waitFor();
    await page.getByText(/Extracted image text/).click();
    await page
      .locator(".image-ocr-text pre")
      .getByText(/ALPHA allocation is 25%/)
      .waitFor();
    await page.screenshot({ path: "test-results/image-preview-ocr.png" });
    await page.getByRole("button", { name: "AGENT", exact: true }).click();
    await page
      .getByRole("button", { name: "+ New Chat", exact: true })
      .first()
      .click();
    const picker = page.getByRole("dialog", { name: "New Orbistry Agent chat" });
    await picker.getByRole("radio", { name: /image\.png/ }).check();
    await picker
      .getByRole("button", { name: "Start Chat", exact: true })
      .click();
    await picker.waitFor({ state: "hidden" });
    await page
      .getByRole("textbox", { name: "Chat question", exact: true })
      .fill("What allocation is written in the image?");
    await page
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await page.waitForFunction(
      async () =>
        (await window.orbistryDesktop.ai.listConversations())[0]?.attempts.at(-1)
          ?.status === "succeeded",
    );
    const request = await app.evaluate(() =>
      globalThis.onlineSmoke.localRequests.at(-1),
    );
    assert.match(JSON.stringify(request.messages), /Image OCR text/);
    assert.match(JSON.stringify(request.messages), /ALPHA allocation is 25%/);
    assert.doesNotMatch(JSON.stringify(request.messages), /base64/);
    const chats = await page.evaluate(() =>
      window.orbistryDesktop.ai.listConversations(),
    );
    assert.equal(chats.length, 1);
    assert.equal(chats[0].messages[1].sources[0].relativePath, "image.png");
    assert.deepEqual(errors, []);
    console.log(
      "PASS: native OCR in Electron; PDF/scanned-PDF/PNG/JPG/JPEG estimates; failed PDF repair and refresh; image preview; OCR-only model evidence and source provenance; no hidden chats",
    );
  } catch (error) {
    await page
      ?.screenshot({ path: "test-results/pdf-image-failure.png" })
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
main().catch((error) => {
  console.error(error.stack);
  process.exitCode = 1;
});
