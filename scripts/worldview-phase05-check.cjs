const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const { createHash } = require("node:crypto");
const { createCanvas } = require("@napi-rs/canvas");
const { textPdf } = require("./fixtures/text-pdf.cjs");

/** Waits for the existing entity save queue to settle and reports actual persistence errors. */
async function waitSaved(page) {
  await page.waitForFunction(() => {
    const status = document.querySelector(".worldview-save-status");
    if (status.querySelector('[role="alert"]')) throw Error(status.textContent);
    return !/Saving|Loading/.test(status.textContent);
  });
}

/** Verifies indexing, formatted Markdown with escaped HTML, other source previews, persistence and source integrity in temporary Universe data. */
async function verifyManualIndex({ page, app, vault, createChip, readChips }) {
  console.log(
    "Checking manual index declarations and original-source previews...",
  );
  const folder = "manual-index-fixtures";
  const ref = (name) => `${folder}/${name}`;
  const image = createCanvas(4, 4);
  image.getContext("2d").fillRect(0, 0, 4, 4);
  const files = new Map([
    [
      "notes.md",
      Buffer.from(
        "# Original source\n\n**Company profile**\n\n> Verified documentation\n\n- Research note\n\n| Region | Role |\n| --- | --- |\n| Taiwan | Manufacturing |\n\n<script>literal original text</script>\n",
      ),
    ],
    ["data.csv", Buffer.from('Name,Value\n"Two, parts",9\n"line1\nline2",7\n')],
    [
      "document.pdf",
      textPdf([["Original PDF preview"], ["Second original page"]]),
    ],
    ["picture.png", image.toBuffer("image/png")],
    ["other.bin", Buffer.from("Unsupported original format")],
  ]);
  await fs.mkdir(path.join(vault, folder));
  for (const [name, bytes] of files)
    await fs.writeFile(path.join(vault, folder, name), bytes);
  await fs.writeFile(path.join(vault, "unassigned.md"), "Never assigned");
  await createChip(page, "Manual Index");
  const entity = (await readChips(page)).at(-1);
  await page.getByRole("button", { name: "Assign Files", exact: true }).click();
  const picker = page.getByRole("dialog", {
    name: "Assign Files",
    exact: true,
  });
  await picker
    .getByRole("button", { name: `Open folder ${folder}`, exact: true })
    .click();
  for (const name of files.keys())
    await picker
      .getByRole("checkbox", { name: `Select ${ref(name)}`, exact: true })
      .check();
  await picker
    .getByRole("button", { name: "Confirm Assignment", exact: true })
    .click();
  await picker.waitFor({ state: "hidden" });
  await waitSaved(page);

  // Simulate a real Phase 04 configuration and ensure it remains available after indexing.
  await page.evaluate(
    async ({ vaultPath, id }) => {
      const bridge = window.orbistryDesktop.worldview;
      const state = await bridge.request("load", { vaultPath });
      const chip = state.chips.find((item) => item.id === id);
      await bridge.request("save", {
        vaultPath,
        chip: {
          ...chip,
          knowledgeMenus: [
            { id: "overview", title: "Overview" },
            { id: "legacy-saved", title: "Saved Section" },
          ],
        },
      });
    },
    { vaultPath: vault, id: entity.id },
  );
  await page.reload();
  await page.locator(".startup-screen").waitFor({ state: "hidden" });
  await waitSaved(page);
  const metadataPath = path.join(
    vault,
    ".wonnyy",
    "worldview",
    "entities",
    `${entity.id}.md`,
  );
  const assignmentBefore = await fs.readFile(metadataPath, "utf8");
  const card = page.locator(".knowledge-card");
  const declarations = card.getByRole("textbox", {
    name: "Index declarations",
    exact: true,
  });
  /** Selects the actual platform and waits for its manual index to load into the floating card. */
  async function openCard() {
    await page.getByRole("button", { name: "Reset view", exact: true }).click();
    const bounds = await page.locator(".worldview-canvas").boundingBox();
    await page.mouse.click(
      bounds.x + bounds.width / 2 + (entity.x - entity.y) * 48,
      bounds.y + bounds.height / 2 + (entity.x + entity.y) * 24 + 35,
    );
    await page
      .getByRole("button", { name: "View Knowledge Card", exact: true })
      .click();
    await page.waitForFunction(
      () =>
        document.querySelector(".knowledge-write-index")?.disabled === false,
    );
  }
  /** Reads saved state through the same guarded bridge used by the index editor. */
  async function savedIndex(id = entity.id) {
    return page.evaluate(
      ({ vaultPath, id }) =>
        window.orbistryDesktop.worldview.request("knowledge-load", {
          vaultPath,
          id,
        }),
      { vaultPath: vault, id },
    );
  }
  /** Opens the editor and replaces declarations without writing anything until an explicit action. */
  async function write(text) {
    if (!(await declarations.isVisible()))
      await card
        .getByRole("button", { name: "Write Index", exact: true })
        .click();
    await declarations.fill(text);
  }
  /** Applies a valid declaration document and waits for the read-only menu workspace. */
  async function apply(text) {
    await write(text);
    await card
      .getByRole("button", { name: "Apply Index", exact: true })
      .click();
    await card.locator(".knowledge-index-editor").waitFor({ state: "hidden" });
  }
  /** Captures the complete live building geometry for index-operation isolation checks. */
  async function buildings() {
    return page
      .locator('.worldview-sr-only[aria-label="File buildings"] button')
      .evaluateAll((buttons) =>
        buttons.map((button) => ({ ...button.dataset })),
      );
  }
  const buildingBefore = await buildings();
  const nvidia = (await readChips(page)).find((chip) => chip.name === "NVIDIA");
  const otherBefore = await savedIndex(nvidia.id);
  await openCard();
  assert.equal(await card.locator(".knowledge-indexed-menu").count(), 0);
  assert.equal(
    await card.getByText("No knowledge indexed yet.", { exact: true }).count(),
    1,
  );
  assert.equal(
    await card
      .getByRole("button", { name: "Saved Section", exact: true })
      .count(),
    1,
  );
  const single = `# Profile\nsource: ${ref("notes.md")}`;
  await write(single);
  await card.getByRole("button", { name: "Save Draft", exact: true }).click();
  await card.getByText("Draft saved.", { exact: true }).waitFor();
  assert.equal(await card.locator(".knowledge-indexed-menu").count(), 0);
  await card
    .getByRole("button", { name: "Close Knowledge Card", exact: true })
    .click();
  await page.reload();
  await page.locator(".startup-screen").waitFor({ state: "hidden" });
  await waitSaved(page);
  await openCard();
  await card.getByRole("button", { name: "Write Index", exact: true }).click();
  assert.equal(await declarations.inputValue(), single);
  await card
    .getByRole("button", { name: "Validate Index", exact: true })
    .click();
  await card.getByText("Index is valid.", { exact: true }).waitFor();
  await apply(single);
  assert.deepEqual(
    await card.locator(".knowledge-indexed-menu").allTextContents(),
    ["Profile"],
  );
  await card
    .getByText("<script>literal original text</script>", { exact: false })
    .waitFor();
  assert.equal(await card.locator("script").count(), 0);
  const markdown = card.locator(".knowledge-markdown");
  await card
    .locator(".knowledge-document-grid")
    .getByRole("heading", { name: "Original source", exact: true })
    .waitFor();
  await card
    .getByText("Source excerpts · unverified", { exact: true })
    .waitFor();
  assert.equal(await markdown.locator("strong").innerText(), "Company profile");
  assert.equal(
    await markdown.locator("blockquote").innerText(),
    "Verified documentation",
  );
  assert.equal(await markdown.locator("li").innerText(), "Research note");
  assert.equal(
    await markdown
      .getByRole("cell", { name: "Manufacturing", exact: true })
      .count(),
    1,
  );
  assert.equal(await markdown.locator(".markdown-raw").count(), 0);
  const sourceLayout = await card
    .locator(".knowledge-source-preview")
    .evaluate((node) => {
      const content = node.closest(".knowledge-content");
      const utility = node.querySelector('[aria-label="Source utilities"]');
      const document = node.querySelector(".knowledge-document");
      return {
        background: getComputedStyle(content).backgroundColor,
        font: getComputedStyle(content).fontFamily,
        bottom: Boolean(
          document.compareDocumentPosition(utility) &
          Node.DOCUMENT_POSITION_FOLLOWING,
        ),
      };
    });
  assert.equal(sourceLayout.background, "rgb(5, 9, 13)");
  assert.match(sourceLayout.font, /IBM Plex Mono/);
  assert.equal(sourceLayout.bottom, true);
  await page.screenshot({
    path: "test-results/knowledge-terminal-document.png",
  });
  const multiple = `# Profile\nsource: ${ref("notes.md")}\n\n# Data\nsource: ${ref("data.csv")}\nsource: ${ref("notes.md")}\n\n# Document\nsource: ${ref("document.pdf")}\n\n# Picture\nsource: ${ref("picture.png")}\n\n# Other\nsource: ${ref("other.bin")}\n\n# Empty`;
  await apply(multiple);
  await card.getByRole("button", { name: "Data", exact: true }).click();
  const selector = card.getByRole("group", {
    name: "Referenced sources",
    exact: true,
  });
  assert.deepEqual(await selector.getByRole("button").allTextContents(), [
    "data.csv",
    "notes.md",
  ]);
  await card.getByRole("cell", { name: "Two, parts", exact: true }).waitFor();
  await card.getByRole("cell", { name: "line1 line2", exact: true }).waitFor();
  await page.screenshot({ path: "test-results/worldview-index-csv.png" });
  await selector.getByRole("button", { name: "notes.md", exact: true }).click();
  await card
    .getByText("<script>literal original text</script>", { exact: false })
    .waitFor();
  await card.getByRole("button", { name: "Document", exact: true }).click();
  await card
    .locator(".pdf-status")
    .filter({ hasText: "Page 1 of 2" })
    .waitFor();
  assert.ok(
    await card.locator(".pdf-page canvas").evaluate((node) => node.width > 0),
  );
  await page.screenshot({ path: "test-results/worldview-index-pdf.png" });
  await card.getByRole("button", { name: "Picture", exact: true }).click();
  await page.waitForFunction(
    () => document.querySelector(".knowledge-source-image")?.naturalWidth > 0,
  );
  await card.getByRole("button", { name: "Other", exact: true }).click();
  await card
    .getByText("Preview is unavailable for this file type.", { exact: false })
    .waitFor();
  await card
    .getByRole("button", { name: "Locate Original", exact: true })
    .click();
  await page.waitForFunction(
    () =>
      document.querySelector(".knowledge-source-preview button")?.disabled ===
      false,
  );
  const located = await app.evaluate(() => globalThis.worldViewReveals);
  assert.equal(
    located.at(-1),
    path.join(await fs.realpath(vault), folder, "other.bin"),
  );
  await card.getByRole("button", { name: "Empty", exact: true }).click();
  await card
    .getByText("No sources declared for this menu.", { exact: true })
    .waitFor();
  await card.getByRole("button", { name: "Data", exact: true }).click();
  const updated = `# Data\nsource: ${ref("data.csv")}\nsource: ${ref("notes.md")}\n\n# Company Profile\nsource: ${ref("notes.md")}\n\n# Document\nsource: ${ref("document.pdf")}\n\n# Picture\nsource: ${ref("picture.png")}\n\n# Other\nsource: ${ref("other.bin")}`;
  await apply(updated);
  await card.getByRole("heading", { name: "Data", exact: true }).waitFor();
  const titles = ["Data", "Company Profile", "Document", "Picture", "Other"];
  assert.deepEqual(
    await card.locator(".knowledge-indexed-menu").allTextContents(),
    titles,
  );
  const target = path.join(
    vault,
    ".wonnyy",
    "worldview",
    "knowledge",
    `${entity.id}.md`,
  );
  const beforeInvalid = await fs.readFile(target, "utf8");
  for (const invalid of [
    "# Broken\nsource: unknown-source.md",
    "# Broken\nsource: unassigned.md",
    `# Broken\nsource: ${ref("notes.md")}\nsource: ${ref("notes.md")}`,
  ]) {
    await write(invalid);
    await card
      .getByRole("button", { name: "Validate Index", exact: true })
      .click();
    await card.locator(".knowledge-index-errors").waitFor();
    await card
      .getByRole("button", { name: "Apply Index", exact: true })
      .click();
    await page.waitForFunction(
      () =>
        document.querySelector(".knowledge-write-index")?.disabled === false,
    );
    assert.equal(await fs.readFile(target, "utf8"), beforeInvalid);
    assert.deepEqual(
      await card.locator(".knowledge-indexed-menu").allTextContents(),
      titles,
    );
  }
  await page.screenshot({
    path: "test-results/worldview-index-validation.png",
  });
  await apply(updated);
  await write(updated);
  await card.getByRole("button", { name: "Clear Draft", exact: true }).click();
  let confirmation = page.getByRole("dialog", {
    name: "Clear Draft",
    exact: true,
  });
  await confirmation
    .getByRole("button", { name: "Cancel", exact: true })
    .click();
  assert.equal(await declarations.inputValue(), updated);
  await card.getByRole("button", { name: "Clear Draft", exact: true }).click();
  await confirmation
    .getByRole("button", { name: "Clear Draft", exact: true })
    .click();
  assert.equal(await declarations.inputValue(), "");
  assert.equal((await savedIndex()).applied, updated);
  await card.getByRole("button", { name: "Save Draft", exact: true }).click();
  await card.getByText("Draft saved.", { exact: true }).waitFor();
  await declarations.fill(updated);
  await card
    .getByRole("button", { name: "Close Knowledge Card", exact: true })
    .click();
  confirmation = page.getByRole("dialog", {
    name: "Close Knowledge Card",
    exact: true,
  });
  await confirmation
    .getByRole("button", { name: "Cancel", exact: true })
    .click();
  assert.equal(await declarations.inputValue(), updated);
  await apply(updated);
  assert.deepEqual(await buildings(), buildingBefore);
  assert.equal(
    await fs.readFile(metadataPath, "utf8"),
    assignmentBefore,
    "manual indexing leaves entity/source metadata byte-identical",
  );
  assert.deepEqual(await savedIndex(nvidia.id), otherBefore);
  await card
    .getByRole("button", { name: "Close Knowledge Card", exact: true })
    .click();
  await page.reload();
  await page.locator(".startup-screen").waitFor({ state: "hidden" });
  await waitSaved(page);
  await openCard();
  assert.deepEqual(
    await card.locator(".knowledge-indexed-menu").allTextContents(),
    titles,
  );
  assert.equal(
    await card
      .getByRole("button", { name: "Saved Section", exact: true })
      .count(),
    1,
  );
  await card
    .getByRole("button", { name: "Close Knowledge Card", exact: true })
    .click();
  await page
    .getByRole("button", { name: "More entity options", exact: true })
    .click();
  await page
    .getByRole("button", { name: "View Sources (5)", exact: true })
    .click();
  const inspector = page.getByRole("complementary", {
    name: "Entity files",
    exact: true,
  });
  await inspector
    .locator(`button[data-source-id="${ref("notes.md")}"]`)
    .click();
  await inspector
    .getByRole("button", { name: "Unassign File", exact: true })
    .click();
  await page
    .getByRole("dialog", { name: "Unassign File", exact: true })
    .getByRole("button", { name: "Unassign File", exact: true })
    .click();
  await inspector
    .getByRole("button", { name: "Close file inspector", exact: true })
    .click();
  await page
    .getByRole("button", { name: "View Knowledge Card", exact: true })
    .click();
  await page.waitForFunction(
    () => document.querySelector(".knowledge-write-index")?.disabled === false,
  );
  await card.getByRole("button", { name: "Data", exact: true }).click();
  await card
    .getByRole("group", { name: "Referenced sources", exact: true })
    .getByRole("button", { name: ref("notes.md"), exact: true })
    .click();
  await card.getByRole("alert").filter({ hasText: "was unassigned" }).waitFor();
  assert.equal((await savedIndex()).applied, updated);
  await card
    .getByRole("button", { name: "Close Knowledge Card", exact: true })
    .click();
  await fs.unlink(path.join(vault, folder, "data.csv"));
  await page.reload();
  await page.locator(".startup-screen").waitFor({ state: "hidden" });
  await waitSaved(page);
  await openCard();
  await card.getByRole("button", { name: "Data", exact: true }).click();
  await card.getByRole("alert").filter({ hasText: "missing" }).waitFor();
  await fs.writeFile(
    path.join(vault, folder, "data.csv"),
    files.get("data.csv"),
  );
  await card
    .getByRole("button", { name: "Close Knowledge Card", exact: true })
    .click();
  for (const [name, bytes] of files)
    assert.equal(
      createHash("sha256")
        .update(await fs.readFile(path.join(vault, folder, name)))
        .digest("hex"),
      createHash("sha256").update(bytes).digest("hex"),
    );
  assert.equal(
    await fs.readFile(path.join(vault, "unassigned.md"), "utf8"),
    "Never assigned",
  );
  await page
    .getByRole("button", { name: "Deselect entity", exact: true })
    .click();
  console.log(
    "PASS: manual draft/apply, ordered menus and sources, Markdown/CSV/PDF/image previews, invalid-index preservation, refresh/isolation, legacy menus, broken references, and unchanged original bytes",
  );
  return {
    status: "passed",
    formats: ["Markdown", "CSV", "PDF", "PNG"],
    originalsUnchanged: files.size + 1,
  };
}

module.exports = { verifyManualIndex };
