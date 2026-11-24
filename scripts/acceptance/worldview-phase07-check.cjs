const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");

/** Waits for actual persisted writes and reports errors before testing the search index. */
async function waitSaved(page) {
  await page.waitForFunction(() => {
    const status = document.querySelector(".worldview-save-status");
    if (status.querySelector('[role="alert"]')) throw Error(status.textContent);
    return !/Saving|Loading/.test(status.textContent);
  });
}

/** Verifies persisted-only tag search, measured explanations, input/camera isolation, stable-ID location and metadata invalidation through desktop UI. */
async function verifyWorldTagSearch({ page, vault, readChips, gridImage }) {
  console.log("Checking WorldView native tag association search...");
  const fixtures = [
    ["Search Solar", "solar, renewable, electricity, RENEWABLE"],
    ["Search Wind", "wind, renewable, electricity"],
    ["Search Hydro", "hydro, renewable, infrastructure"],
    ["Search Grid", "electricity"],
    ["Search Supplier", "solar"],
    ["Search Phrase", " Clean   Energy "],
  ];
  for (const [name, tags] of fixtures) {
    await page.getByRole("button", { name: "+ Add Chip", exact: true }).click();
    const dialog = page.getByRole("dialog", { name: "Add Chip", exact: true });
    await dialog.getByLabel("Chip name", { exact: true }).fill(name);
    await dialog.getByLabel("Tags (optional)", { exact: true }).fill(tags);
    await dialog
      .getByRole("button", { name: "Create Chip", exact: true })
      .click();
    await dialog.waitFor({ state: "hidden" });
  }
  await waitSaved(page);
  const entities = await readChips(page);
  const ids = entities.map((entity) => entity.id);
  const originals = new Map();
  for (const id of ids)
    originals.set(
      id,
      await fs.readFile(
        path.join(vault, ".wonnyy/worldview/entities", `${id}.md`),
        "utf8",
      ),
    );
  const unassigned = path.join(vault, "phase07-unassigned.md");
  await fs.writeFile(unassigned, "unassigned-secret-phrase");
  const input = page.getByRole("combobox", {
    name: "Search WorldView",
    exact: true,
  });
  const dropdown = page.locator(".worldview-search-dropdown");
  const options = page
    .getByRole("listbox", { name: "WorldView search results", exact: true })
    .getByRole("option");
  /** Submits a query and waits for its current debounced response, rejecting actual search errors. */
  async function search(query) {
    await input.fill(query);
    await page.waitForFunction(() => {
      const dropdown = document.querySelector(".worldview-search-dropdown");
      if (dropdown?.querySelector('[role="alert"]'))
        throw Error(dropdown.textContent);
      return (
        dropdown?.getAttribute("aria-busy") === "false" &&
        dropdown.dataset.query ===
          document.querySelector('[aria-label="Search WorldView"]').value
      );
    });
  }
  await search("renewable");
  const searchStyle = await input.evaluate((element) => ({
    shadow: getComputedStyle(element).boxShadow,
    iconBorder: getComputedStyle(
      document.querySelector(".worldview-search-icon"),
    ).borderTopColor,
  }));
  assert.equal(searchStyle.shadow, "none", "search focus stays restrained");
  assert.notEqual(
    searchStyle.iconBorder,
    "rgba(0, 0, 0, 0)",
    "shared surface rules cannot hide the search icon",
  );
  assert.equal(await options.count(), 5);
  const results = await options.evaluateAll((buttons) =>
    buttons.map((button) => ({
      id: button.dataset.entityId,
      type: button.dataset.matchType,
      count: button.dataset.cooccurrence,
      text: button.textContent,
    })),
  );
  assert.ok(results.slice(0, 3).every((result) => result.type === "exact"));
  assert.ok(results[3].text.includes("Search Grid"));
  assert.equal(results[3].count, "2");
  assert.equal(results[4].count, "1");
  assert.ok(results[3].text.includes("renewable + electricity = 2 entities"));
  assert.equal(new Set(results.map((result) => result.id)).size, 5);
  await page.screenshot({ path: "test-results/worldview-tag-search.png" });
  await search("RENEWABLE");
  assert.equal(await options.count(), 5);
  await search("clean energy");
  assert.equal(await options.count(), 1);
  assert.ok((await options.first().innerText()).includes("Search Phrase"));
  await search("renew");
  await page.getByRole("button", { name: "#renewable", exact: true }).click();
  await page.waitForFunction(() =>
    document.querySelector(
      '.worldview-search-dropdown[aria-busy="false"] [data-cooccurrence="2"]',
    ),
  );
  await input.press("Escape");
  await dropdown.waitFor({ state: "hidden" });
  const beforeTyping = await gridImage(page);
  await search("unknown phrase");
  assert.equal(await options.count(), 0);
  assert.ok((await dropdown.innerText()).includes("No entities match"));
  assert.equal(
    await gridImage(page),
    beforeTyping,
    "typing does not move or zoom the canvas",
  );
  await search("unassigned-secret-phrase");
  assert.equal(await options.count(), 0);
  await page
    .getByRole("button", { name: "Clear WorldView search", exact: true })
    .click();
  const barBefore = await page.locator(".worldview-search-bar").boundingBox();
  const canvas = page.locator(".worldview-canvas");
  const bounds = await canvas.boundingBox();
  const empty = { x: bounds.x + 140, y: bounds.y + bounds.height - 140 };
  await page.mouse.move(empty.x, empty.y);
  await page.mouse.down();
  await page.mouse.move(empty.x + 81, empty.y - 39, { steps: 5 });
  await page.mouse.up();
  await page.getByRole("button", { name: "Zoom in", exact: true }).click();
  await gridImage(page);
  assert.deepEqual(
    await page.locator(".worldview-search-bar").boundingBox(),
    barBefore,
    "floating search stays fixed during pan/zoom",
  );
  const zoom = await page
    .getByLabel("Zoom percentage", { exact: true })
    .innerText();
  await search("Search Grid");
  assert.equal(await options.count(), 1);
  await options.first().click();
  await dropdown.waitFor({ state: "hidden" });
  const grid = entities.find(
    (entity) => entity.name.split(",")[0] === "Search Grid",
  );
  assert.equal(
    (await readChips(page)).find((entity) => entity.selected)?.id,
    grid.id,
  );
  assert.equal(
    await page.getByLabel("Zoom percentage", { exact: true }).innerText(),
    zoom,
  );
  await page.mouse.click(
    bounds.x + bounds.width / 2,
    bounds.y + bounds.height / 2,
  );
  assert.equal(
    (await readChips(page)).find((entity) => entity.selected)?.id,
    grid.id,
    "selected entity is centered under the current zoom",
  );
  assert.equal(
    await page.getByRole("dialog", { name: /Knowledge Card/ }).count(),
    0,
  );
  await search("renewable");
  await input.press("ArrowDown");
  await input.press("Enter");
  await dropdown.waitFor({ state: "hidden" });
  assert.equal(
    (await readChips(page)).find((entity) => entity.selected)?.id,
    entities.find((entity) => entity.name.split(",")[0] === "Search Hydro").id,
  );
  for (const [id, original] of originals)
    assert.equal(
      await fs.readFile(
        path.join(vault, ".wonnyy/worldview/entities", `${id}.md`),
        "utf8",
      ),
      original,
      "search and camera selection preserve source metadata byte-for-byte",
    );
  // A real tag edit must refresh the current query using persisted metadata.
  await search("Search Grid");
  await options.first().click();
  await page
    .getByRole("button", { name: "More entity options", exact: true })
    .click();
  await page.getByRole("button", { name: "Edit Entity", exact: true }).click();
  const editor = page.getByRole("dialog", { name: "Edit Chip", exact: true });
  await editor
    .getByLabel("Tags (optional)", { exact: true })
    .fill("electricity, renewable");
  await editor
    .getByRole("button", { name: "Save Changes", exact: true })
    .click();
  await waitSaved(page);
  await search("renewable");
  assert.equal(await options.count(), 5);
  const exactCount = await options.evaluateAll(
    (buttons) =>
      buttons.filter((button) => button.dataset.matchType === "exact").length,
  );
  assert.equal(exactCount, 4);
  await search("Search Supplier");
  await options.first().click();
  const more = page.getByRole("button", {
    name: "More entity options",
    exact: true,
  });
  if ((await more.getAttribute("aria-expanded")) !== "true") await more.click();
  await page.getByRole("button", { name: "Delete Chip", exact: true }).click();
  await page
    .getByRole("dialog", { name: "Delete Chip", exact: true })
    .getByRole("button", { name: "Delete Chip", exact: true })
    .click();
  await waitSaved(page);
  await search("Search Supplier");
  assert.equal(await options.count(), 0);
  await page.reload();
  await page.locator(".startup-screen").waitFor({ state: "hidden" });
  await input.waitFor();
  await search("renewable");
  assert.equal(await options.count(), 4);
  assert.ok(
    (
      await fs.readFile(
        path.join(vault, ".engine/tag-association/manifest.json"),
        "utf8",
      )
    ).includes("application-bundled"),
  );
  // Remove only these isolated synthetic entities through the existing guarded API and restore the acceptance baseline.
  await page.evaluate(
    async ({ vaultPath, ids }) => {
      for (const id of ids)
        await window.orbistryDesktop.worldview.request("delete", {
          vaultPath,
          id,
        });
    },
    { vaultPath: vault, ids },
  );
  await fs.unlink(unassigned);
  await page.reload();
  await page.locator(".startup-screen").waitFor({ state: "hidden" });
  await waitSaved(page);
  assert.equal((await readChips(page)).length, 0);
  return {
    status: "passed",
    exactAndAssociatedRanking: true,
    measuredCounts: true,
    metadataUnchangedBySearch: true,
    cameraSelection: true,
    tagEditsAndDeletion: true,
    refresh: true,
  };
}
module.exports = { verifyWorldTagSearch };
