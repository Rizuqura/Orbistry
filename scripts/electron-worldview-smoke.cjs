const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { createHash } = require("node:crypto");
const { verifyUniverseAssignments } = require("./worldview-phase03-check.cjs");
const digest = (value) => createHash("sha256").update(value).digest("hex");

/** Waits for camera events to paint and returns canvas pixels for geometry comparisons. */
async function gridImage(page) {
  return page.locator(".worldview-canvas").evaluate(async (canvas) => {
    await Promise.race([
      new Promise((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(resolve)),
      ),
      new Promise((_, reject) =>
        setTimeout(
          () =>
            reject(
              new Error(
                "Hidden Electron window did not schedule animation frames",
              ),
            ),
          5000,
        ),
      ),
    ]);
    return canvas.toDataURL();
  });
}

/** Compares image digests without printing large image payloads if an assertion fails. */
async function assertGridMatches(actual, expected, message) {
  assert.equal(digest(actual), digest(expected), message);
}

/** Reads the rendered grid's peak alpha to verify fade endpoints and the 10% opacity cap. */
async function gridPeakAlpha(page) {
  return page.locator(".worldview-canvas").evaluate((canvas) => {
    const pixels = canvas
      .getContext("2d")
      .getImageData(0, 0, canvas.width, canvas.height).data;
    let maximum = 0;
    for (let index = 3; index < pixels.length; index += 4)
      maximum = Math.max(maximum, pixels[index]);
    return maximum;
  });
}

/** Exercises pointer input, cursor anchoring, grid fading, zoom limits, reset, and resize. */
async function verifyGrid(page, app) {
  console.log("Checking WorldView grid and camera input...");
  // Windows may suspend the compositor for never-shown native windows.
  await app.evaluate(({ BrowserWindow }) =>
    BrowserWindow.getAllWindows()[0].showInactive(),
  );
  const canvas = page.locator(".worldview-canvas");
  const reset = page.getByRole("button", { name: "Reset view", exact: true });
  const zoom = page.getByLabel("Zoom percentage", { exact: true });
  await canvas.waitFor();
  await reset.click();
  const original = await gridImage(page);
  const bounds = await canvas.boundingBox();
  const section = await page.locator(".worldview").boundingBox();
  assert.deepEqual(bounds, section, "canvas fills the WorldView viewport");
  assert.ok(bounds.width > 600 && bounds.height > 300);
  assert.equal(await zoom.innerText(), "100%");
  const center = {
    x: bounds.x + bounds.width / 2,
    y: bounds.y + bounds.height / 2,
  };

  for (const [dx, dy] of [
    [71, 0],
    [-71, 0],
    [0, 53],
    [0, -53],
  ]) {
    await page.mouse.move(center.x, center.y);
    await page.mouse.down();
    await page.mouse.move(center.x + dx, center.y + dy, { steps: 8 });
    assert.notEqual(await gridImage(page), original, "drag changes the grid");
    await page.mouse.move(center.x, center.y, { steps: 8 });
    await page.mouse.up();
    await assertGridMatches(
      await gridImage(page),
      original,
      "drag round trip has no drift",
    );
    assert.equal(
      await canvas.evaluate((node) => node.classList.contains("is-panning")),
      false,
    );
  }
  console.log("PASS: viewport coverage and four-direction pan round trips");

  // This off-center point is the world (3, 1) vertex at the default camera.
  const anchor = { x: bounds.width / 2 + 96, y: bounds.height / 2 + 96 };
  await page.mouse.move(bounds.x + anchor.x, bounds.y + anchor.y);
  await page.mouse.wheel(0, -137);
  await gridImage(page);
  assert.notEqual(await zoom.innerText(), "100%");
  const anchored = await canvas.evaluate((node, point) => {
    const ratio = node.width / node.getBoundingClientRect().width;
    const ctx = node.getContext("2d");
    const vertex = ctx.getImageData(
      Math.round(point.x * ratio),
      Math.round(point.y * ratio),
      1,
      1,
    ).data[3];
    const empty = ctx.getImageData(
      Math.round(point.x * ratio),
      Math.round((point.y + 9) * ratio),
      1,
      1,
    ).data[3];
    return { vertex, empty };
  }, anchor);
  assert.ok(
    anchored.vertex > 0 && anchored.empty === 0,
    "off-center grid vertex stays beneath cursor",
  );
  for (let step = 0; step < 4; step += 1) await page.mouse.wheel(0, -1000);
  await gridImage(page);
  assert.equal(await zoom.innerText(), "300%");
  const maximumAlpha = await gridPeakAlpha(page);
  assert.ok(
    maximumAlpha > 0 && maximumAlpha <= 26,
    `grid never exceeds 10% opacity (peak alpha ${maximumAlpha})`,
  );
  assert.equal(
    await page
      .getByRole("button", { name: "Zoom in", exact: true })
      .isDisabled(),
    true,
  );
  for (let step = 0; step < 4; step += 1) await page.mouse.wheel(0, 1000);
  await gridImage(page);
  assert.equal(await zoom.innerText(), "25%");
  assert.equal(
    await gridPeakAlpha(page),
    0,
    "grid disappears completely at minimum zoom",
  );
  assert.equal(
    await page
      .getByRole("button", { name: "Zoom out", exact: true })
      .isDisabled(),
    true,
  );
  for (let step = 0; step < 3; step += 1)
    await page.getByRole("button", { name: "Zoom in", exact: true }).click();
  await gridImage(page);
  const partialAlpha = await gridPeakAlpha(page);
  assert.ok(
    partialAlpha > 0 && partialAlpha < maximumAlpha,
    "grid gradually reappears between minimum and normal zoom",
  );
  await reset.click();
  await assertGridMatches(
    await gridImage(page),
    original,
    "reset restores origin and scale",
  );
  await page.getByRole("button", { name: "Zoom in", exact: true }).click();
  assert.equal(await zoom.innerText(), "120%");
  await canvas.focus();
  await page.keyboard.press("0");
  await assertGridMatches(
    await gridImage(page),
    original,
    "keyboard reset restores camera",
  );

  const size = await app.evaluate(({ BrowserWindow }) =>
    BrowserWindow.getAllWindows()[0].getSize(),
  );
  await app.evaluate(({ BrowserWindow }) =>
    BrowserWindow.getAllWindows()[0].setSize(1100, 760),
  );
  await page.waitForFunction(() => {
    const node = document.querySelector(".worldview-canvas");
    return (
      node.width === Math.round(node.clientWidth * window.devicePixelRatio) &&
      node.height === Math.round(node.clientHeight * window.devicePixelRatio)
    );
  });
  await gridImage(page);
  assert.deepEqual(
    await canvas.boundingBox(),
    await page.locator(".worldview").boundingBox(),
  );
  await app.evaluate(
    ({ BrowserWindow }, dimensions) =>
      BrowserWindow.getAllWindows()[0].setSize(...dimensions),
    size,
  );
  await page.waitForFunction(
    (width) =>
      document.querySelector(".worldview-canvas").clientWidth === width,
    bounds.width,
  );
  await assertGridMatches(
    await gridImage(page),
    original,
    "resize preserves world center and projection",
  );
  console.log(
    "PASS: cursor anchoring, zoom limits, reset, keyboard control and resize",
  );
}

/** Reads the accessible mirror of real canvas entities without reaching into application internals. */
async function readChips(page) {
  return page
    .locator('.worldview-sr-only[aria-label="WorldView chips"] button')
    .evaluateAll((buttons) =>
      buttons.map((button) => ({
        id: button.dataset.chipId,
        name: button.textContent,
        icon: button.dataset.icon,
        iconImage: button.dataset.iconImage === "true",
        color: button.dataset.color,
        category: button.dataset.category,
        tags: JSON.parse(button.dataset.tags),
        x: Number(button.dataset.worldX),
        y: Number(button.dataset.worldY),
        selected: button.getAttribute("aria-pressed") === "true",
      })),
    );
}

/** Confirms metadata through the same native creation form used by the user. */
async function createChip(page, name) {
  await page.getByRole("button", { name: "+ Add Chip", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "Add Chip", exact: true });
  await dialog
    .getByRole("textbox", { name: "Chip name", exact: true })
    .fill(name);
  await dialog
    .getByRole("button", { name: "Create Chip", exact: true })
    .click();
  await dialog.waitFor({ state: "hidden" });
  await gridImage(page);
}

/** Verifies Phase 02 creation, selection, collision-aware snapping, camera isolation, and session lifetime. */
async function verifyChips(page) {
  console.log("Checking WorldView chip creation and manipulation...");
  const canvas = page.locator(".worldview-canvas");
  const add = page.getByRole("button", { name: "+ Add Chip", exact: true });
  const dialog = page.getByRole("dialog", { name: "Add Chip", exact: true });
  assert.deepEqual(await readChips(page), [], "fresh session has zero chips");
  assert.equal(
    await page
      .getByRole("button", { name: "Delete Chip", exact: true })
      .count(),
    0,
    "deletion requires a selected chip",
  );
  await add.click();
  await dialog
    .getByRole("textbox", { name: "Chip name", exact: true })
    .fill("Cancelled chip");
  await dialog.getByRole("button", { name: "Cancel", exact: true }).click();
  assert.deepEqual(await readChips(page), [], "Cancel does not create a chip");
  await add.click();
  await page.keyboard.press("Escape");
  await dialog.waitFor({ state: "hidden" });
  assert.deepEqual(await readChips(page), [], "Escape does not create a chip");
  assert.equal(
    await add.evaluate((button) => button === document.activeElement),
    true,
    "dialog restores focus",
  );

  await add.click();
  await dialog
    .getByRole("button", { name: "Create Chip", exact: true })
    .click();
  assert.deepEqual(
    await readChips(page),
    [],
    "required name blocks empty submission",
  );
  await dialog
    .getByRole("textbox", { name: "Chip name", exact: true })
    .fill("   ");
  await dialog
    .getByRole("button", { name: "Create Chip", exact: true })
    .click();
  assert.equal(
    await dialog.getByRole("alert").innerText(),
    "Enter a chip name.",
  );
  await dialog
    .getByRole("textbox", { name: "Chip name", exact: true })
    .fill("Research Hub");
  assert.equal(
    await dialog.getByRole("alert").count(),
    0,
    "editing clears stale validation",
  );
  assert.equal(
    await dialog.getByRole("radio").count(),
    0,
    "preset icons are removed",
  );
  assert.equal(
    await dialog
      .getByRole("textbox", { name: "Custom symbol or emoji", exact: true })
      .count(),
    0,
    "custom symbol field is removed",
  );
  const dialogBounds = await dialog.boundingBox();
  const viewportSize = await page.evaluate(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));
  assert.ok(
    Math.abs(dialogBounds.x - (viewportSize.width - dialogBounds.width) / 2) <=
      1,
    "dialog is horizontally centered",
  );
  assert.ok(
    Math.abs(
      dialogBounds.y - (viewportSize.height - dialogBounds.height) / 2,
    ) <= 1,
    "dialog is vertically centered",
  );
  const uploadControl = dialog.getByLabel("Upload icon", { exact: true });
  assert.equal(
    await uploadControl.evaluate(
      (input) =>
        getComputedStyle(input, "::file-selector-button").backgroundColor,
    ),
    "rgb(255, 152, 0)",
    "Choose File uses the app orange",
  );
  assert.ok(
    (await uploadControl.boundingBox()).width > 300,
    "file chooser fills the available form width",
  );
  await dialog
    .getByRole("textbox", { name: "Category (optional)", exact: true })
    .fill("Research");
  await dialog
    .getByRole("textbox", { name: "Tags (optional)", exact: true })
    .fill("theory, reading, theory");
  await fs.mkdir("test-results", { recursive: true });
  await page.screenshot({ path: "test-results/worldview-chip-dialog.png" });
  await dialog
    .getByRole("button", { name: "Create Chip", exact: true })
    .click();
  await dialog.waitFor({ state: "hidden" });
  const first = (await readChips(page))[0];
  assert.equal(
    (await readChips(page)).length,
    1,
    "one confirmation adds exactly one chip",
  );
  assert.match(first.id, /^[0-9a-f-]{36}$/);
  assert.equal(first.icon, "");
  assert.equal(
    first.iconImage,
    false,
    "chips can be created without an uploaded image",
  );
  assert.equal(first.category, "Research");
  assert.deepEqual(first.tags, ["theory", "reading"]);
  assert.deepEqual([first.x, first.y], [0, 0]);
  await createChip(page, "Archive");
  const second = (await readChips(page))[1];
  assert.notEqual(first.id, second.id);
  assert.equal(Number.isInteger(second.x) && Number.isInteger(second.y), true);
  assert.ok(
    Math.abs(second.x - first.x) >= 2 || Math.abs(second.y - first.y) >= 2,
    "new chips do not overlap",
  );

  const bounds = await canvas.boundingBox();
  const center = {
    x: bounds.x + bounds.width / 2,
    y: bounds.y + bounds.height / 2,
  };
  await page.mouse.click(bounds.x + 140, bounds.y + bounds.height - 140);
  assert.equal(
    (await readChips(page)).some((chip) => chip.selected),
    false,
  );
  await page.mouse.click(center.x, center.y);
  assert.equal(
    (await readChips(page))[0].selected,
    true,
    "single click selects the platform",
  );
  const grab = { x: center.x + 13, y: center.y - 8 };
  await page.mouse.move(grab.x, grab.y);
  await page.mouse.down();
  await page.mouse.move(grab.x + 146, grab.y + 74, { steps: 12 });
  await page.mouse.up();
  const moved = (await readChips(page))[0];
  assert.deepEqual(
    [moved.x, moved.y],
    [3, 0],
    "drag retains grab offset and snaps the world anchor",
  );
  await page.mouse.click(
    center.x + (second.x - second.y) * 48,
    center.y + (second.x + second.y) * 24,
  );
  assert.equal(
    (await readChips(page))[1].selected,
    true,
    "dragging a chip does not pan the camera",
  );

  await page.mouse.move(center.x + 144, center.y + 72);
  await page.mouse.down();
  await page.mouse.move(center.x + 210, center.y + 130, { steps: 6 });
  await page.keyboard.press("Escape");
  await page.mouse.up();
  assert.deepEqual(
    [(await readChips(page))[0].x, (await readChips(page))[0].y],
    [3, 0],
    "Escape discards an active drag preview",
  );

  // A port selects its own platform and cannot create a relationship.
  await page.mouse.click(center.x + 144 + 48, center.y + 72 - 24);
  assert.equal((await readChips(page)).length, 2);
  assert.equal((await readChips(page))[0].selected, true);
  const positionsBeforePan = (await readChips(page)).map((chip) => [
    chip.x,
    chip.y,
  ]);
  const empty = { x: bounds.x + 140, y: bounds.y + bounds.height - 140 };
  await page.mouse.move(empty.x, empty.y);
  await page.mouse.down();
  await page.mouse.move(empty.x + 81, empty.y - 39, { steps: 10 });
  await page.mouse.up();
  assert.deepEqual(
    (await readChips(page)).map((chip) => [chip.x, chip.y]),
    positionsBeforePan,
    "panning preserves world positions",
  );
  await page.getByRole("button", { name: "Zoom in", exact: true }).click();
  await gridImage(page);
  assert.equal(
    await page.getByLabel("Zoom percentage", { exact: true }).innerText(),
    "120%",
  );
  const zoomedChip = { x: center.x + 225 * 1.2, y: center.y + 33 * 1.2 };
  await page.mouse.click(zoomedChip.x, zoomedChip.y);
  assert.equal(
    (await readChips(page))[0].selected,
    true,
    "hit testing follows pan and zoom",
  );
  await page.mouse.move(zoomedChip.x, zoomedChip.y);
  await page.mouse.down();
  await page.mouse.move(zoomedChip.x + 115.2, zoomedChip.y + 57.6, {
    steps: 10,
  });
  await page.mouse.up();
  assert.deepEqual(
    [(await readChips(page))[0].x, (await readChips(page))[0].y],
    [5, 0],
    "drag movement uses camera zoom",
  );
  await createChip(page, "Notes");
  const third = (await readChips(page))[2];
  assert.deepEqual(
    [third.x, third.y],
    [0, 2],
    "new placement uses the panned camera center",
  );
  await page.getByRole("button", { name: "Reset view", exact: true }).click();
  await gridImage(page);
  await page.screenshot({ path: "test-results/worldview-chips.png" });
  const final = await readChips(page);
  await page.getByRole("button", { name: "WORKSPACE", exact: true }).click();
  await page.getByRole("button", { name: "WORLDVIEW", exact: true }).click();
  const restored = await readChips(page);
  assert.deepEqual(
    restored.map(({ selected, ...chip }) => chip),
    final.map(({ selected, ...chip }) => chip),
    "chip session survives navigation",
  );
  console.log(
    "PASS: empty state, cancel, validation, metadata, multiple chips, selection, drag, snapping, ports, pan/zoom and session navigation",
  );
  return {
    status: "passed",
    created: final.length,
    persistence: "saved Markdown indexes; survives navigation and reload",
  };
}

/** Exercises staged colors, the orange native file chooser, image re-selection, and rendered image pixels. */
async function verifyChipCustomization(page) {
  console.log("Checking custom chip icons and block colors...");
  const canvas = page.locator(".worldview-canvas");
  const bounds = await canvas.boundingBox();
  const initial = await readChips(page);
  const target = initial[0];
  const location = {
    x: bounds.x + bounds.width / 2 + (target.x - target.y) * 48,
    y: bounds.y + bounds.height / 2 + (target.x + target.y) * 24,
  };
  await page.mouse.click(location.x, location.y);
  const selected = await readChips(page);
  const edit = page.getByRole("button", { name: "Edit Chip", exact: true });
  const dialog = page.getByRole("dialog", { name: "Edit Chip", exact: true });
  await edit.click();
  assert.equal(await dialog.getByRole("radio").count(), 0);
  assert.equal(
    await dialog
      .getByRole("textbox", { name: "Hex color", exact: true })
      .inputValue(),
    "#262b30",
  );
  await dialog
    .getByRole("textbox", { name: "Hex color", exact: true })
    .fill("#3c70ad");
  assert.deepEqual(
    await readChips(page),
    selected,
    "appearance changes are staged until Save",
  );
  await dialog.getByRole("button", { name: "Cancel", exact: true }).click();
  assert.deepEqual(
    await readChips(page),
    selected,
    "Cancel discards staged color edits",
  );

  await edit.click();
  const wheel = dialog.getByRole("slider", {
    name: "Color wheel",
    exact: true,
  });
  const brightness = dialog.getByRole("slider", {
    name: "Brightness",
    exact: true,
  });
  await brightness.focus();
  await brightness.press("End");
  const wheelBounds = await wheel.boundingBox();
  await page.mouse.move(
    wheelBounds.x + wheelBounds.width * 0.75,
    wheelBounds.y + wheelBounds.height / 2,
  );
  await page.mouse.down();
  await page.mouse.move(
    wheelBounds.x + wheelBounds.width / 2,
    wheelBounds.y + wheelBounds.height * 0.75,
    { steps: 8 },
  );
  await page.mouse.up();
  const hex = dialog.getByRole("textbox", { name: "Hex color", exact: true });
  const pointerColor = await hex.inputValue();
  assert.notEqual(pointerColor, "#262b30", "pointer wheel changes block color");
  await wheel.focus();
  await wheel.press("ArrowRight");
  assert.notEqual(
    await hex.inputValue(),
    pointerColor,
    "keyboard adjusts wheel hue",
  );
  await brightness.focus();
  await brightness.press("Home");
  assert.equal(await hex.inputValue(), "#000000");
  await brightness.press("End");
  assert.notEqual(
    await hex.inputValue(),
    "#ffffff",
    "brightness preserves the selected hue and saturation at black",
  );
  await hex.fill("#oops");
  await dialog
    .getByRole("button", { name: "Save Changes", exact: true })
    .click();
  assert.equal(await dialog.isVisible(), true, "invalid hex cannot be saved");
  assert.deepEqual(await readChips(page), selected);
  await hex.fill("#3c70ad");
  await dialog
    .getByRole("button", { name: "Save Changes", exact: true })
    .click();
  await dialog.waitFor({ state: "hidden" });
  const symbol = (await readChips(page))[0];
  assert.deepEqual(
    [symbol.id, symbol.x, symbol.y],
    [target.id, target.x, target.y],
  );
  assert.equal(symbol.icon, "");
  assert.equal(symbol.color, "#3c70ad");
  assert.equal(symbol.iconImage, false);
  assert.deepEqual((await readChips(page)).slice(1), initial.slice(1));

  await edit.click();
  assert.equal(
    await hex.inputValue(),
    "#3c70ad",
    "existing color is prefilled",
  );
  const upload = dialog.getByLabel("Upload icon", { exact: true });
  await upload.setInputFiles({
    name: "bad.txt",
    mimeType: "text/plain",
    buffer: Buffer.from("unsupported"),
  });
  assert.match(
    await dialog.getByRole("alert").innerText(),
    /PNG, JPEG, or WebP/,
  );
  const { createCanvas } = require("@napi-rs/canvas");
  const image = createCanvas(32, 32);
  image.getContext("2d").fillStyle = "#ff00cc";
  image.getContext("2d").fillRect(0, 0, 32, 32);
  const fixture = {
    name: "custom-icon.png",
    mimeType: "image/png",
    buffer: image.toBuffer("image/png"),
  };
  const chooserEvent = page.waitForEvent("filechooser");
  await upload.click({ position: { x: 30, y: 20 } });
  const chooser = await chooserEvent;
  await chooser.setFiles(fixture);
  await dialog
    .getByAltText("Custom chip icon preview", { exact: true })
    .waitFor();
  await dialog.getByRole("button", { name: "Cancel", exact: true }).click();
  assert.equal(
    (await readChips(page))[0].iconImage,
    false,
    "Cancel discards an uploaded icon",
  );
  await edit.click();
  await upload.setInputFiles(fixture);
  await dialog
    .getByAltText("Custom chip icon preview", { exact: true })
    .waitFor();
  await dialog
    .getByRole("button", { name: "Remove image", exact: true })
    .click();
  assert.equal(
    await upload.evaluate((input) => input.files.length),
    0,
    "Remove image resets the native chooser",
  );
  assert.equal(
    await dialog
      .getByAltText("Custom chip icon preview", { exact: true })
      .count(),
    0,
  );
  await upload.setInputFiles(fixture);
  await dialog
    .getByAltText("Custom chip icon preview", { exact: true })
    .waitFor();
  await hex.fill("#67bb9f");
  await page.screenshot({
    path: "test-results/worldview-custom-chip-editor.png",
  });
  await dialog
    .getByRole("button", { name: "Save Changes", exact: true })
    .click();
  await dialog.waitFor({ state: "hidden" });
  assert.equal((await readChips(page))[0].iconImage, true);
  assert.equal((await readChips(page))[0].color, "#67bb9f");
  await page.waitForFunction((point) => {
    const node = document.querySelector(".worldview-canvas");
    const bounds = node.getBoundingClientRect();
    const pixel = node
      .getContext("2d")
      .getImageData(
        Math.round(((point.x - bounds.x) * node.width) / bounds.width),
        Math.round(((point.y - bounds.y - 12) * node.height) / bounds.height),
        1,
        1,
      ).data;
    return pixel[0] > 220 && pixel[1] < 30 && pixel[2] > 150;
  }, location);
  assert.deepEqual(
    (await readChips(page)).slice(1),
    initial.slice(1),
    "customizing one chip preserves all others",
  );

  await page.getByRole("button", { name: "+ Add Chip", exact: true }).click();
  const addDialog = page.getByRole("dialog", { name: "Add Chip", exact: true });
  await addDialog
    .getByRole("textbox", { name: "Chip name", exact: true })
    .fill("Sunlight");
  await addDialog
    .getByRole("textbox", { name: "Hex color", exact: true })
    .fill("#ffcf66");
  await addDialog
    .getByRole("button", { name: "Create Chip", exact: true })
    .click();
  await addDialog.waitFor({ state: "hidden" });
  const created = (await readChips(page)).at(-1);
  assert.equal(created.icon, "");
  assert.equal(created.iconImage, false);
  assert.equal(created.color, "#ffcf66");
  assert.equal((await readChips(page)).length, initial.length + 1);
  await gridImage(page);
  await page.screenshot({ path: "test-results/worldview-custom-chips.png" });
  await page.getByRole("button", { name: "WORKSPACE", exact: true }).click();
  await page.getByRole("button", { name: "WORLDVIEW", exact: true }).click();
  const restored = (await readChips(page))[0];
  assert.equal(restored.iconImage, true);
  assert.equal(restored.color, "#67bb9f");
  console.log(
    "PASS: image-only icons, orange native file chooser, same-file re-selection, image rendering, mini wheel, hex validation, save/cancel and navigation",
  );
  return {
    status: "passed",
    icons: "optional uploaded images only; presets and symbol fields removed",
    chooser:
      "app orange, full-width native control, same-file re-selection verified",
    color: "hue/saturation wheel, brightness and hex",
    edits: "Save applies; Cancel discards",
  };
}

/** Verifies named confirmation, Cancel/Escape, exact-ID deletion, redraw, and deleting the final chip. */
async function verifyChipDeletion(page, emptyGrid) {
  console.log("Checking confirmed chip deletion...");
  const canvas = page.locator(".worldview-canvas");
  const bounds = await canvas.boundingBox();
  const center = {
    x: bounds.x + bounds.width / 2,
    y: bounds.y + bounds.height / 2,
  };
  const remove = page.getByRole("button", { name: "Delete Chip", exact: true });
  const confirmation = page.getByRole("dialog", {
    name: "Delete Chip",
    exact: true,
  });
  const original = await readChips(page);
  const target = original[0];
  await page.mouse.click(
    center.x + (target.x - target.y) * 48,
    center.y + (target.x + target.y) * 24,
  );
  const selected = await readChips(page);
  await remove.click();
  await confirmation.waitFor();
  assert.ok(
    (await confirmation.innerText()).includes(`Delete “Research Hub”?`),
    "confirmation names the selected chip",
  );
  assert.deepEqual(
    await readChips(page),
    selected,
    "opening confirmation does not delete",
  );
  assert.equal(
    await confirmation
      .getByRole("button", { name: "Cancel", exact: true })
      .evaluate((button) => button === document.activeElement),
    true,
    "Cancel is the default focused action",
  );
  const modalBounds = await confirmation.boundingBox();
  const viewport = await page.evaluate(() => ({
    width: innerWidth,
    height: innerHeight,
  }));
  assert.ok(
    Math.abs(modalBounds.x - (viewport.width - modalBounds.width) / 2) <= 1,
  );
  assert.ok(
    Math.abs(modalBounds.y - (viewport.height - modalBounds.height) / 2) <= 1,
  );
  await page.screenshot({
    path: "test-results/worldview-chip-delete-confirmation.png",
  });
  await confirmation
    .getByRole("button", { name: "Cancel", exact: true })
    .click();
  await confirmation.waitFor({ state: "hidden" });
  assert.deepEqual(
    await readChips(page),
    selected,
    "Cancel preserves every chip and selection",
  );
  assert.equal(
    await remove.evaluate((button) => button === document.activeElement),
    true,
    "Cancel restores delete action focus",
  );
  await remove.click();
  await page.keyboard.press("Escape");
  await confirmation.waitFor({ state: "hidden" });
  assert.deepEqual(
    await readChips(page),
    selected,
    "Escape preserves every chip",
  );
  const before = await gridImage(page);
  await remove.click();
  await confirmation
    .getByRole("button", { name: "Delete Chip", exact: true })
    .click();
  await confirmation.waitFor({ state: "hidden" });
  const after = await readChips(page);
  assert.deepEqual(
    after,
    original.slice(1),
    "only the confirmed stable ID is removed",
  );
  assert.notEqual(
    await gridImage(page),
    before,
    "deleted platform disappears from rendering",
  );
  assert.equal(
    await canvas.evaluate((node) => node === document.activeElement),
    true,
    "confirmation returns focus to the canvas",
  );
  await page.mouse.click(
    center.x + (target.x - target.y) * 48,
    center.y + (target.x + target.y) * 24,
  );
  assert.equal(
    await remove.count(),
    0,
    "deleted chip has no stale hit target or selection",
  );

  await createChip(page, "Notes");
  const duplicated = await readChips(page);
  const newerNotes = duplicated.at(-1);
  const olderNotes = duplicated.find(
    (chip) => chip.id !== newerNotes.id && chip.name === "Notes",
  );
  assert.ok(olderNotes, "test includes chips with the same name");
  await remove.click();
  await confirmation
    .getByRole("button", { name: "Delete Chip", exact: true })
    .click();
  await confirmation.waitFor({ state: "hidden" });
  assert.deepEqual(
    await readChips(page),
    original.slice(1),
    "duplicate name deletion removes only the selected ID",
  );

  let deleted = 2;
  for (const chip of await readChips(page)) {
    await page.mouse.click(
      center.x + (chip.x - chip.y) * 48,
      center.y + (chip.x + chip.y) * 24,
    );
    await remove.click();
    await confirmation
      .getByRole("button", { name: "Delete Chip", exact: true })
      .click();
    await confirmation.waitFor({ state: "hidden" });
    deleted += 1;
  }
  assert.deepEqual(await readChips(page), [], "the final chip can be deleted");
  assert.equal(await remove.count(), 0);
  await assertGridMatches(
    await gridImage(page),
    emptyGrid,
    "deleting all chips restores the unchanged empty grid",
  );
  console.log(
    "PASS: named confirmation, default Cancel focus, cancel/Escape, exact-ID deletion, duplicate names, redraw and empty grid restoration",
  );
  return {
    status: "passed",
    deleted,
    remaining: 0,
    confirmation: "named target; Cancel and Escape preserve chips",
  };
}

/** Runs grid and chip acceptance with isolated data, retaining existing agent and Vault navigation checks. */
async function main() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-worldview-"));
  const vault = path.join(root, "Universe"),
    data = path.join(root, "app-data");
  const source = "# Original user notes\nVAULT_SENTINEL_NEVER_INJECT";
  let app, page;
  const errors = [];
  try {
    await fs.mkdir(vault);
    await fs.mkdir(data);
    await fs.writeFile(path.join(vault, "original.md"), source);
    const env = {
      ...process.env,
      ORBISTRY_VAULT_PATH: vault,
      ORBISTRY_SMOKE_DATA: data,
    };
    delete env.ELECTRON_RUN_AS_NODE;
    delete env.ELECTRON_START_URL;
    app = await electron.launch({
      args: [
        path.resolve("scripts/electron-online-smoke-main.cjs"),
        "--hidden",
        "--disable-renderer-backgrounding",
        "--disable-background-timer-throttling",
        "--disable-backgrounding-occluded-windows",
      ],
      env,
      timeout: 30000,
    });
    page = await app.firstWindow();
    page.setDefaultTimeout(20000);
    // Keep repeated pixel probes on the same raster backend. Chromium otherwise
    // switches from GPU to software after readbacks, changing edge antialiasing.
    await page.addInitScript(() => {
      const getContext = HTMLCanvasElement.prototype.getContext;
      /** Requests a stable readback context only inside this isolated acceptance window. */
      HTMLCanvasElement.prototype.getContext = function (kind, options) {
        return getContext.call(
          this,
          kind,
          kind === "2d" ? { ...options, willReadFrequently: true } : options,
        );
      };
    });
    await page.reload();
    page.on("pageerror", (e) => errors.push(e.message));
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page
      .getByRole("heading", { name: "WorldView", exact: true })
      .waitFor();
    await verifyGrid(page, app);
    const emptyGrid = await gridImage(page);
    const chips = await verifyChips(page);
    const customization = await verifyChipCustomization(page);
    const assignments = await verifyUniverseAssignments({
      page,
      app,
      vault,
      readChips,
      gridImage,
    });
    const deletion = await verifyChipDeletion(page, emptyGrid);
    assert.equal(
      await page
        .locator(".pnode, .planet-view, .planet-canvas, .planet-detail-panel")
        .count(),
      0,
    );
    await page.evaluate(() =>
      localStorage.setItem("planetview-animation", "true"),
    );
    await page.reload();
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page
      .getByRole("heading", { name: "WorldView", exact: true })
      .waitFor();
    assert.equal(await page.locator(".pnode").count(), 0);
    assert.deepEqual(
      await readChips(page),
      [],
      "deleted chips stay removed after reload",
    );
    await fs.mkdir("test-results", { recursive: true });
    await page.screenshot({ path: "test-results/worldview-grid.png" });
    await page.getByRole("button", { name: "AGENT", exact: true }).click();
    await page
      .getByRole("region", { name: "Agent contacts", exact: true })
      .getByRole("button", { name: "+ Add agent", exact: true })
      .click();
    const add = page.getByRole("dialog", { name: "Add agent", exact: true });
    await add
      .getByRole("textbox", { name: "Agent name", exact: true })
      .fill("Reset agent");
    await add
      .getByRole("button", { name: "Create agent", exact: true })
      .click();
    await add.waitFor({ state: "hidden" });
    await page.evaluate(() =>
      window.orbistryDesktop.ai.settings({
        providerId: "ollama",
        modelId: "qwen3:4b",
      }),
    );
    await page.getByRole("button", { name: "+ New Chat", exact: true }).click();
    const setup = page.getByRole("dialog", {
      name: "New Reset agent chat",
      exact: true,
    });
    await setup
      .getByRole("button", { name: "Start Chat", exact: true })
      .click();
    await setup.waitFor({ state: "hidden" });
    const input = page.getByRole("textbox", {
      name: "Chat question",
      exact: true,
    });
    await input.fill("Say hello.");
    await page
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await page.locator(".chat-message-assistant .chat-run-id").waitFor();
    const first = await app.evaluate(() =>
      globalThis.onlineSmoke.localRequests.at(-1),
    );
    assert.deepEqual(
      first.messages.map((m) => m.role),
      ["system", "user"],
    );
    assert.doesNotMatch(
      JSON.stringify(first),
      /VAULT_SENTINEL_NEVER_INJECT|original.md|approved-source|agent-construction-reference/,
    );
    assert.equal(first.tools, undefined);
    await input.fill("Remember my greeting.");
    await page
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await page.locator(".chat-message-assistant .chat-run-id").nth(1).waitFor();
    const second = await app.evaluate(() =>
      globalThis.onlineSmoke.localRequests.at(-1),
    );
    assert.deepEqual(
      second.messages.map((m) => m.role),
      ["system", "user", "assistant", "user"],
    );
    await page.screenshot({ path: "test-results/worldview-agent-chat.png" });
    const conversations = await page.evaluate(() =>
      window.orbistryDesktop.ai.listConversations(),
    );
    assert.equal(conversations.at(-1).schemaVersion, 7);
    await page.getByRole("button", { name: "WORLDVIEW", exact: true }).click();
    await page
      .getByRole("heading", { name: "WorldView", exact: true })
      .waitFor();
    await page.getByRole("button", { name: "WORKSPACE", exact: true }).click();
    await page
      .getByRole("button", { name: /original.md/ })
      .first()
      .dblclick();
    await page
      .getByText("VAULT_SENTINEL_NEVER_INJECT", { exact: false })
      .first()
      .waitFor();
    assert.equal(
      digest(await fs.readFile(path.join(vault, "original.md"))),
      digest(source),
    );
    assert.deepEqual(errors, []);
    await fs.writeFile(
      "test-results/worldview-reset-ui.json",
      JSON.stringify(
        {
          status: "passed",
          chips,
          customization,
          assignments,
          deletion,
          worldview:
            "isometric grid; four-direction pan without drift; cursor zoom; limits; reset; resize; legacy-state isolation",
          agent: "created and answered two turns without sources/tools",
          historyRoles: second.messages.map((m) => m.role),
          vaultSourceHash: digest(source),
          errors,
        },
        null,
        2,
      ),
    );
    console.log(
      "PASS: isometric grid, chip creation/selection/drag/snapping, confirmed deletion, camera controls, session lifecycle, legacy-state isolation, agent chat, navigation and intact Vault reader.",
    );
  } catch (error) {
    console.error(error);
    if (page) {
      await fs.mkdir("test-results", { recursive: true });
      await page
        .screenshot({
          path: "test-results/worldview-reset-failure.png",
          timeout: 5000,
        })
        .catch((captureError) =>
          console.error(
            "Failure screenshot unavailable:",
            captureError.message,
          ),
        );
      console.error((await page.locator("body").innerText()).slice(-2500));
    }
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
  console.error(error);
  process.exitCode = 1;
});
