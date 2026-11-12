const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const { createHash } = require("node:crypto");

/** Waits for frontend metadata writes to settle before reload and reports an actual save failure immediately. */
async function waitSaved(page) {
  await page.waitForFunction(() => {
    const status = document.querySelector(".worldview-save-status");
    if (status?.querySelector('[role="alert"]'))
      throw new Error(status.textContent);
    return (
      status &&
      document.querySelector(".worldview-add-chip")?.disabled === false &&
      !/Saving WorldView|Loading WorldView/.test(status.textContent)
    );
  });
}

/** Selects a real platform using its shared projection at the reset camera. */
async function selectChip(page, chip) {
  const bounds = await page.locator(".worldview-canvas").boundingBox();
  await page.mouse.click(
    bounds.x + bounds.width / 2 + (chip.x - chip.y) * 48,
    bounds.y + bounds.height / 2 + (chip.x + chip.y) * 24,
  );
}

/** Reads authoritative restored metadata through the same narrow desktop API used by WorldView. */
async function savedState(page, vault) {
  return page.evaluate(
    (vaultPath) =>
      window.orbistryDesktop.worldview.request("load", { vaultPath }),
    vault,
  );
}

/** Opens the Universe picker and waits until its metadata-only directory listing settles. */
async function openPicker(page) {
  await page.getByRole("button", { name: "Assign Files", exact: true }).click();
  const dialog = page.getByRole("dialog", {
    name: "Assign Files",
    exact: true,
  });
  await dialog.getByRole("button", { name: "Universe", exact: true }).waitFor();
  await page.waitForFunction(
    () =>
      document
        .querySelector(".worldview-file-list")
        ?.getAttribute("aria-busy") === "false",
  );
  return dialog;
}

/** Creates known-byte fixture sources only within the isolated smoke Universe and returns their original digests. */
async function sourceFixtures(vault) {
  const files = new Map([
    ["reports/empty.bin", Buffer.alloc(0)],
    ["reports/medium.bin", Buffer.alloc(99, 7)],
    ["reports/large.bin", Buffer.alloc(9999, 9)],
    ["reports/deep/equal-a.bin", Buffer.alloc(64, 3)],
    ["reports/deep/equal-b.bin", Buffer.alloc(64, 4)],
  ]);
  for (let index = 0; index < 12; index += 1)
    files.set(
      `reports/overflow-${String(index).padStart(2, "0")}.bin`,
      Buffer.alloc(index + 1, index),
    );
  const hashes = new Map();
  for (const [relative, bytes] of files) {
    const target = path.join(vault, relative);
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.writeFile(target, bytes);
    hashes.set(relative, createHash("sha256").update(bytes).digest("hex"));
  }
  return { files, hashes };
}

/** Verifies Universe assignments, top-to-bottom building sizes, centered icon pixels, camera interaction, persistence, and untouched source hashes. */
async function verifyUniverseAssignments({
  page,
  app,
  vault,
  readChips,
  gridImage,
}) {
  console.log(
    "Checking Universe assignment, Markdown persistence and file buildings...",
  );
  const { files, hashes } = await sourceFixtures(vault);
  await waitSaved(page);
  const chips = await readChips(page);
  const research = chips[0],
    archive = chips[1],
    notes = chips[2],
    overflowChip = chips[3];
  await app.evaluate(({ shell }) => {
    globalThis.worldViewReveals = [];
    shell.showItemInFolder = (file) => globalThis.worldViewReveals.push(file);
  });
  await selectChip(page, research);
  let picker = await openPicker(page);
  assert.ok((await picker.innerText()).includes(vault));
  await picker
    .getByRole("button", { name: "Open folder reports", exact: true })
    .click();
  const empty = picker.getByRole("checkbox", {
    name: "Select reports/empty.bin",
    exact: true,
  });
  await empty.check();
  assert.match(await empty.locator("..").innerText(), /0 bytes/);
  await picker.getByRole("button", { name: "Cancel", exact: true }).click();
  assert.equal(
    (await savedState(page, vault)).chips[0].sources.length,
    0,
    "picker Cancel writes no associations",
  );
  picker = await openPicker(page);
  await picker
    .getByRole("button", { name: "Open folder reports", exact: true })
    .click();
  await picker
    .getByRole("checkbox", { name: "Select reports/empty.bin", exact: true })
    .check();
  await picker
    .getByRole("button", { name: "Confirm Assignment", exact: true })
    .click();
  await picker.waitFor({ state: "hidden" });
  let buildings = page
    .locator('.worldview-sr-only[aria-label="File buildings"] button')
    .filter({ hasText: "empty.bin" });
  assert.equal(
    await buildings.getAttribute("data-building-height"),
    "34",
    "one file gets the moderate height",
  );

  picker = await openPicker(page);
  await picker
    .getByRole("button", { name: "Open folder reports", exact: true })
    .click();
  assert.equal(
    await picker
      .getByRole("checkbox", { name: "Select reports/empty.bin", exact: true })
      .isDisabled(),
    true,
    "existing memberships cannot be duplicated",
  );
  await picker
    .getByRole("checkbox", { name: "Select reports/medium.bin", exact: true })
    .check();
  await picker
    .getByRole("checkbox", { name: "Select reports/large.bin", exact: true })
    .check();
  await picker
    .getByRole("button", { name: "Open folder deep", exact: true })
    .click();
  await picker
    .getByRole("checkbox", {
      name: "Select reports/deep/equal-a.bin",
      exact: true,
    })
    .check();
  await picker
    .getByRole("searchbox", { name: "Search Universe", exact: true })
    .fill("equal-b");
  await picker
    .getByRole("checkbox", {
      name: "Select reports/deep/equal-b.bin",
      exact: true,
    })
    .check();
  await page.screenshot({ path: "test-results/worldview-universe-picker.png" });
  await picker
    .getByRole("button", { name: "Confirm Assignment", exact: true })
    .click();
  await picker.waitFor({ state: "hidden" });
  await gridImage(page);
  // The uploaded magenta icon must retain its original centered anchor after assignment.
  await page.waitForFunction((chip) => {
    const canvas = document.querySelector(".worldview-canvas");
    const bounds = canvas.getBoundingClientRect();
    const pixel = canvas
      .getContext("2d")
      .getImageData(
        Math.round(
          ((bounds.width / 2 + (chip.x - chip.y) * 48) * canvas.width) /
            bounds.width,
        ),
        Math.round(
          ((bounds.height / 2 + (chip.x + chip.y) * 24 - 12) * canvas.height) /
            bounds.height,
        ),
        1,
        1,
      ).data;
    return pixel[0] > 220 && pixel[1] < 30 && pixel[2] > 150;
  }, research);
  const buildingData = await page
    .locator(
      `.worldview-sr-only[aria-label="File buildings"] button[data-chip-id="${research.id}"]`,
    )
    .evaluateAll((buttons) =>
      buttons.map((button) => ({
        source: button.dataset.sourceId,
        height: Number(button.dataset.buildingHeight),
        x: Number(button.dataset.buildingX),
        y: Number(button.dataset.buildingY),
      })),
    );
  assert.equal(buildingData.length, 5);
  assert.deepEqual(
    buildingData.find((item) => item.source === "reports/large.bin"),
    { source: "reports/large.bin", height: 56, x: -0.3, y: -0.3 },
    "the largest file stands at the top corner of the square arrangement",
  );
  assert.equal(
    buildingData.find((item) => item.source === "reports/empty.bin").height,
    12,
  );
  assert.equal(
    buildingData.find((item) => item.source === "reports/large.bin").height,
    56,
  );
  assert.ok(
    Math.abs(
      buildingData.find((item) => item.source === "reports/medium.bin").height -
        34,
    ) < 1e-9,
  );
  const index = path.join(
    vault,
    ".wonnyy",
    "worldview",
    "entities",
    `${research.id}.md`,
  );
  const markdown = await fs.readFile(index, "utf8");
  assert.match(markdown, /^---\n/);
  assert.match(markdown, /origin: universe/);
  assert.match(markdown, /source_ref: reports\/large.bin/);
  assert.match(markdown, /size_bytes: 9999/);
  const duplicate = await page.evaluate(
    ({ vaultPath, id }) =>
      window.orbistryDesktop.worldview.request("assign", {
        vaultPath,
        id,
        sourceRefs: ["reports/large.bin", "reports/large.bin"],
      }),
    { vaultPath: vault, id: research.id },
  );
  assert.equal(duplicate.sources.length, 5);

  await selectChip(page, archive);
  picker = await openPicker(page);
  await picker
    .getByRole("searchbox", { name: "Search Universe", exact: true })
    .fill("large.bin");
  await picker
    .getByRole("checkbox", { name: "Select reports/large.bin", exact: true })
    .check();
  await picker
    .getByRole("button", { name: "Confirm Assignment", exact: true })
    .click();
  await picker.waitFor({ state: "hidden" });
  assert.equal(
    await page
      .locator(
        `.worldview-sr-only[aria-label="File buildings"] button[data-chip-id="${archive.id}"]`,
      )
      .getAttribute("data-building-height"),
    "34",
    "normalization is local to each entity",
  );
  await selectChip(page, notes);
  picker = await openPicker(page);
  await picker
    .getByRole("searchbox", { name: "Search Universe", exact: true })
    .fill("equal-");
  await picker
    .getByRole("checkbox", {
      name: "Select reports/deep/equal-a.bin",
      exact: true,
    })
    .check();
  await picker
    .getByRole("checkbox", {
      name: "Select reports/deep/equal-b.bin",
      exact: true,
    })
    .check();
  await picker
    .getByRole("button", { name: "Confirm Assignment", exact: true })
    .click();
  await picker.waitFor({ state: "hidden" });
  assert.deepEqual(
    await page
      .locator(
        `.worldview-sr-only[aria-label="File buildings"] button[data-chip-id="${notes.id}"]`,
      )
      .evaluateAll((buttons) =>
        buttons.map((button) => Number(button.dataset.buildingHeight)),
      ),
    [34, 34],
  );

  await waitSaved(page);
  await page.reload();
  await page.locator(".startup-screen").waitFor({ state: "hidden" });
  await waitSaved(page);
  assert.equal(
    (await readChips(page)).length,
    4,
    "entity chips persist after refresh",
  );
  assert.equal(
    await page
      .locator(
        `.worldview-sr-only[aria-label="File buildings"] button[data-chip-id="${research.id}"]`,
      )
      .count(),
    5,
    "buildings reconstruct from saved assignments",
  );
  const bounds = await page.locator(".worldview-canvas").boundingBox();
  const front = buildingData.at(-1);
  const point = {
    x:
      bounds.x +
      bounds.width / 2 +
      (research.x - research.y + front.x - front.y) * 48,
    y:
      bounds.y +
      bounds.height / 2 +
      (research.x + research.y + front.x + front.y) * 24 -
      front.height,
  };
  await page.mouse.move(point.x, point.y);
  await page.getByRole("tooltip").waitFor();
  assert.match(await page.getByRole("tooltip").innerText(), /bytes/);
  await page.mouse.click(point.x, point.y);
  const inspector = page.getByRole("complementary", {
    name: "Entity files",
    exact: true,
  });
  await inspector.waitFor();
  await inspector.locator('button[data-source-id="reports/large.bin"]').click();
  await inspector
    .getByRole("button", { name: "Locate Original", exact: true })
    .click();
  await page.screenshot({ path: "test-results/worldview-file-inspector.png" });
  const revealed = await app.evaluate(() => globalThis.worldViewReveals);
  assert.equal(
    revealed.at(-1),
    path.join(await fs.realpath(vault), "reports", "large.bin"),
  );
  await inspector
    .getByRole("button", { name: "Unassign File", exact: true })
    .click();
  const confirmation = page.getByRole("dialog", {
    name: "Unassign File",
    exact: true,
  });
  await confirmation
    .getByRole("button", { name: "Cancel", exact: true })
    .click();
  assert.equal((await savedState(page, vault)).chips[0].sources.length, 5);
  await inspector
    .getByRole("button", { name: "Unassign File", exact: true })
    .click();
  await confirmation
    .getByRole("button", { name: "Unassign File", exact: true })
    .click();
  await confirmation.waitFor({ state: "hidden" });
  await page.waitForFunction(
    (id) =>
      document.querySelectorAll(
        `.worldview-sr-only[aria-label="File buildings"] button[data-chip-id="${id}"]`,
      ).length === 4,
    research.id,
  );
  const unassigned = await savedState(page, vault);
  assert.equal(
    unassigned.chips[0].sources.some(
      (source) => source.sourceId === "reports/large.bin",
    ),
    false,
  );
  assert.equal(unassigned.chips[1].sources[0].sourceId, "reports/large.bin");
  assert.equal(
    (await fs.stat(path.join(vault, "reports", "large.bin"))).size,
    9999,
  );
  await inspector
    .getByRole("button", { name: "Close file inspector", exact: true })
    .click();

  // Move a platform using its clear front surface, then return it to the original anchor.
  const ground = {
    x: bounds.x + bounds.width / 2 + (research.x - research.y) * 48,
    y: bounds.y + bounds.height / 2 + (research.x + research.y) * 24 + 35,
  };
  await page.mouse.move(ground.x, ground.y);
  await page.mouse.down();
  await page.mouse.move(ground.x + 96, ground.y + 48, { steps: 10 });
  await page.mouse.up();
  assert.deepEqual(
    [(await readChips(page))[0].x, (await readChips(page))[0].y],
    [research.x + 2, research.y],
    "platform dragging still works with buildings attached",
  );
  await page.mouse.move(ground.x + 96, ground.y + 48);
  await page.mouse.down();
  await page.mouse.move(ground.x, ground.y, { steps: 10 });
  await page.mouse.up();
  assert.deepEqual(
    [(await readChips(page))[0].x, (await readChips(page))[0].y],
    [research.x, research.y],
  );
  const visible = await page
    .locator(
      `.worldview-sr-only[aria-label="File buildings"] button[data-chip-id="${research.id}"]`,
    )
    .evaluateAll((buttons) =>
      buttons.map((button) => ({
        source: button.dataset.sourceId,
        height: Number(button.dataset.buildingHeight),
        x: Number(button.dataset.buildingX),
        y: Number(button.dataset.buildingY),
      })),
    );
  const roof = visible.at(-1);
  const roofPoint = {
    x: bounds.width / 2 + (research.x - research.y + roof.x - roof.y) * 48,
    y:
      bounds.height / 2 +
      (research.x + research.y + roof.x + roof.y) * 24 -
      roof.height,
  };
  await page.mouse.move(bounds.x + 130, bounds.y + bounds.height - 130);
  await page.mouse.down();
  await page.mouse.move(bounds.x + 211, bounds.y + bounds.height - 169, {
    steps: 10,
  });
  await page.mouse.up();
  await page.mouse.move(
    bounds.x + roofPoint.x + 81,
    bounds.y + roofPoint.y - 39,
  );
  await page.getByRole("tooltip").waitFor();
  assert.ok(
    (await page.getByRole("tooltip").innerText()).includes(
      path.basename(roof.source),
    ),
    "building hit testing follows camera pan",
  );
  await page.getByRole("button", { name: "Zoom in", exact: true }).click();
  await page.mouse.move(
    bounds.x + bounds.width / 2 + (roofPoint.x + 81 - bounds.width / 2) * 1.2,
    bounds.y + bounds.height / 2 + (roofPoint.y - 39 - bounds.height / 2) * 1.2,
  );
  await page.getByRole("tooltip").waitFor();
  assert.ok(
    (await page.getByRole("tooltip").innerText()).includes(
      path.basename(roof.source),
    ),
    "building hit testing follows zoom without detaching from its platform",
  );
  await page.getByRole("button", { name: "Reset view", exact: true }).click();

  await selectChip(page, overflowChip);
  picker = await openPicker(page);
  await picker
    .getByRole("searchbox", { name: "Search Universe", exact: true })
    .fill("overflow-");
  const choices = picker.getByRole("checkbox");
  await picker
    .getByRole("checkbox", {
      name: "Select reports/overflow-00.bin",
      exact: true,
    })
    .waitFor();
  assert.equal(await choices.count(), 12);
  for (let index = 0; index < 12; index += 1) await choices.nth(index).check();
  await picker
    .getByRole("button", { name: "Confirm Assignment", exact: true })
    .click();
  await picker.waitFor({ state: "hidden" });
  const overflowButtons = page.locator(
    `.worldview-sr-only[aria-label="File buildings"] button[data-chip-id="${overflowChip.id}"]`,
  );
  assert.equal(await overflowButtons.count(), 9);
  assert.equal(
    await page
      .locator(
        `.worldview-sr-only button[data-chip-id="${overflowChip.id}"][data-building-overflow="4"]`,
      )
      .count(),
    1,
  );
  await page.getByRole("button", { name: "Files (12)", exact: true }).click();
  assert.equal(
    await inspector.locator("li").count(),
    12,
    "overflow retains access to the complete source list",
  );
  await inspector
    .getByRole("button", { name: "Close file inspector", exact: true })
    .click();
  await gridImage(page);
  await page.screenshot({ path: "test-results/worldview-file-buildings.png" });

  await fs.unlink(path.join(vault, "reports", "deep", "equal-a.bin"));
  await page.reload();
  await page.locator(".startup-screen").waitFor({ state: "hidden" });
  await waitSaved(page);
  const missing = (await savedState(page, vault)).chips[0].sources.find(
    (source) => source.sourceId === "reports/deep/equal-a.bin",
  );
  assert.equal(missing.status, "missing");
  assert.equal(missing.sizeBytes, null);
  assert.equal(
    await page
      .locator(
        `.worldview-sr-only button[data-chip-id="${research.id}"][data-source-id="reports/deep/equal-a.bin"]`,
      )
      .getAttribute("data-building-height"),
    "",
    "missing bytes have no fabricated height",
  );
  await fs.writeFile(
    path.join(vault, "reports", "deep", "equal-a.bin"),
    files.get("reports/deep/equal-a.bin"),
  );
  await page.reload();
  await page.locator(".startup-screen").waitFor({ state: "hidden" });
  await waitSaved(page);
  for (const [relative, hash] of hashes)
    assert.equal(
      createHash("sha256")
        .update(await fs.readFile(path.join(vault, relative)))
        .digest("hex"),
      hash,
      `${relative} remains unchanged at its original path`,
    );
  console.log(
    "PASS: Universe folders/search, confirmed multi-file assignment, shared references, Markdown reload, byte heights, file inspection/locating, safe unassignment, overflow and missing-source recovery",
  );
  return {
    status: "passed",
    storage: ".wonnyy/worldview/entities/<entity-id>.md",
    sourceReference: "existing Vault forward-slash relativePath",
    originals: `${hashes.size} files verified unchanged`,
    maximumVisible: 9,
    sourcesAfterRefresh: (await savedState(page, vault)).chips.map(
      (chip) => chip.sources.length,
    ),
  };
}

module.exports = { verifyUniverseAssignments };
