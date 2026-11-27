const assert = require("node:assert/strict");

/** Waits for menu persistence and surfaces any failed write before refreshing. */
async function waitSaved(page) {
  await page.waitForFunction(() => {
    const status = document.querySelector(".worldview-save-status");
    if (status.querySelector('[role="alert"]')) throw Error(status.textContent);
    return !/Saving|Loading/.test(status.textContent);
  });
}

/** Verifies floating card movement, selection actions, per-entity menus, persistence, and unchanged world camera through desktop UI. */
async function verifyKnowledgeCards({
  page,
  createChip,
  readChips,
  gridImage,
}) {
  console.log(
    "Checking contextual entity actions and empty Knowledge Cards...",
  );
  const openButton = page.getByRole("button", {
    name: "View Knowledge Card",
    exact: true,
  });
  /** Waits for the companion index to load before reading card navigation. */
  const open = {
    count: () => openButton.count(),
    async click() {
      await openButton.click();
      await page.waitForFunction(
        () =>
          document.querySelector(".knowledge-write-index")?.disabled === false,
      );
    },
  };
  assert.equal(await open.count(), 0, "reload begins without selection");
  const assigned = (await readChips(page))[0];
  await createChip(page, "TSMC");
  const tsmc = (await readChips(page)).at(-1);
  await createChip(page, "NVIDIA");
  const nvidia = (await readChips(page)).at(-1);
  const canvas = page.locator(".worldview-canvas");
  const bounds = await canvas.boundingBox();
  /** Clicks actual chip ground at the reset camera, never opening a card implicitly. */
  async function select(chip) {
    await page.getByRole("button", { name: "Reset view", exact: true }).click();
    await page.mouse.click(
      bounds.x + bounds.width / 2 + (chip.x - chip.y) * 48,
      bounds.y + bounds.height / 2 + (chip.x + chip.y) * 24 + 35,
    );
    assert.ok(
      (
        await page
          .getByRole("complementary", { name: "Selected entity actions" })
          .innerText()
      ).includes(chip.name.split(",")[0]),
    );
    assert.equal(await page.locator(".knowledge-card").count(), 0);
  }
  await page
    .getByRole("button", { name: "Deselect entity", exact: true })
    .click();
  await page.mouse.move(
    bounds.x + bounds.width / 2 + (tsmc.x - tsmc.y) * 48,
    bounds.y + bounds.height / 2 + (tsmc.x + tsmc.y) * 24,
  );
  assert.equal(await open.count(), 0, "hover does not expose entity actions");
  await select(tsmc);
  await page.getByRole("button", { name: "Zoom in", exact: true }).click();
  // The Entity sidebar now covers the old top-left drag origin. Start on exposed ground.
  const panStart = await canvas.evaluate((element) => {
    const box = element.getBoundingClientRect();
    for (const fx of [0.15, 0.8, 0.35])
      for (const fy of [0.8, 0.7, 0.2]) {
        const x = box.x + box.width * fx,
          y = box.y + box.height * fy;
        if (document.elementFromPoint(x, y) === element) return { x, y };
      }
    throw Error("No exposed canvas ground for pan test.");
  });
  await page.mouse.move(panStart.x, panStart.y);
  await page.mouse.down();
  await page.mouse.move(panStart.x + 71, panStart.y - 37, { steps: 8 });
  await page.mouse.up();
  assert.equal(await open.count(), 0, "empty ground deselects during pan");
  // Select the chip at its translated and zoomed location.
  await page.mouse.click(
    bounds.x + bounds.width / 2 + (tsmc.x - tsmc.y) * 48 * 1.2 + 71,
    bounds.y + bounds.height / 2 + (tsmc.x + tsmc.y) * 24 * 1.2 - 37 + 35 * 1.2,
  );
  const before = await gridImage(page);
  await open.click();
  let card = page.locator(".knowledge-card");
  await gridImage(page);
  assert.equal(
    await canvas.isVisible(),
    true,
    "WorldView remains visible behind the floating card",
  );
  const initialWindow = await card.boundingBox();
  assert.ok(
    initialWindow.width < bounds.width && initialWindow.height < bounds.height,
  );
  const titlebar = card.locator(".knowledge-card-titlebar");
  const titlebarBounds = await titlebar.boundingBox();
  await page.mouse.move(titlebarBounds.x + 100, titlebarBounds.y + 16);
  await page.mouse.down();
  await page.mouse.move(titlebarBounds.x + 140, titlebarBounds.y + 40, {
    steps: 8,
  });
  await page.mouse.up();
  const movedWindow = await card.boundingBox();
  assert.ok(Math.abs(movedWindow.x - initialWindow.x - 40) < 1);
  assert.ok(Math.abs(movedWindow.y - initialWindow.y - 24) < 1);
  assert.equal(
    await gridImage(page),
    before,
    "moving a card does not pan the world",
  );
  await titlebar.focus();
  await page.keyboard.press("Home");
  assert.equal(await card.getAttribute("data-entity-id"), tsmc.id);
  assert.deepEqual(
    await card.locator(".knowledge-menu-title").allTextContents(),
    ["Overview"],
  );
  assert.equal(
    await card
      .getByRole("button", { name: "Remove Overview", exact: true })
      .count(),
    0,
  );
  assert.equal(
    await card.getByText("No knowledge indexed yet.", { exact: true }).count(),
    1,
  );
  await page.screenshot({
    path: "test-results/worldview-knowledge-card-empty.png",
  });
  /** Updates empty navigation declarations through the Phase 05 authoritative index editor. */
  async function applyMenus(text) {
    await card
      .getByRole("button", { name: "Write Index", exact: true })
      .click();
    await card
      .getByRole("textbox", { name: "Index declarations", exact: true })
      .fill(text);
    await card
      .getByRole("button", { name: "Apply Index", exact: true })
      .click();
    await card.locator(".knowledge-index-editor").waitFor({ state: "hidden" });
  }
  await applyMenus("# Research\n# Overview");
  await applyMenus("# Overview\n# Strategy\n# Temporary");
  await applyMenus("# Strategy\n# Overview");
  const menuId = await card.locator("li").first().getAttribute("data-menu-id");
  assert.deepEqual(
    await card.locator(".knowledge-menu-title").allTextContents(),
    ["Strategy", "Overview"],
  );
  await waitSaved(page);
  await card
    .getByRole("button", { name: "Close Knowledge Card", exact: true })
    .click();
  assert.equal(
    await page.locator('output[aria-label="Zoom percentage"]').innerText(),
    "120%",
  );
  assert.equal(
    await gridImage(page),
    before,
    "card return preserves exact camera and chip geometry",
  );
  assert.equal(
    (await readChips(page)).find((chip) => chip.id === tsmc.id).selected,
    true,
  );
  await select(nvidia);
  await open.click();
  assert.equal(await card.getAttribute("data-entity-id"), nvidia.id);
  assert.deepEqual(
    await card.locator(".knowledge-menu-title").allTextContents(),
    ["Overview"],
  );
  await applyMenus("# Overview\n# Products");
  await waitSaved(page);
  await page.reload();
  await page.locator(".startup-screen").waitFor({ state: "hidden" });
  await waitSaved(page);
  assert.equal(await open.count(), 0);
  await select(tsmc);
  await page.screenshot({ path: "test-results/worldview-entity-toolbar.png" });
  await open.click();
  assert.deepEqual(
    await card.locator(".knowledge-menu-title").allTextContents(),
    ["Strategy", "Overview"],
  );
  assert.equal(
    await card.locator("li").first().getAttribute("data-menu-id"),
    menuId,
  );
  await card.getByRole("button", { name: "Strategy", exact: true }).click();
  assert.equal(
    await card.getByRole("heading", { name: "Strategy", exact: true }).count(),
    1,
  );
  await page.screenshot({
    path: "test-results/worldview-knowledge-card-menus.png",
  });
  await card
    .getByRole("button", { name: "Close Knowledge Card", exact: true })
    .click();
  await select(nvidia);
  await open.click();
  assert.deepEqual(
    await card.locator(".knowledge-menu-title").allTextContents(),
    ["Overview", "Products"],
  );
  await card
    .getByRole("button", { name: "Close Knowledge Card", exact: true })
    .click();
  await select(assigned);
  await open.click();
  assert.deepEqual(
    await card.locator(".knowledge-menu-title").allTextContents(),
    ["Overview"],
  );
  assert.equal(
    await card.getByText("No knowledge indexed yet.", { exact: true }).count(),
    1,
    "assigned sources do not populate knowledge",
  );
  await card
    .getByRole("button", { name: "Close Knowledge Card", exact: true })
    .click();
  console.log(
    "PASS: selection toolbar, stable-ID empty cards, declaration menu updates, Overview landing, separate saved configurations, and exact camera return",
  );
  return { status: "passed", menusPersisted: true, cameraRestored: true };
}

module.exports = { verifyKnowledgeCards };
