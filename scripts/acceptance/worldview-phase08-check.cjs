const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const { createCanvas } = require("@napi-rs/canvas");

/** Waits for the existing entity write queue, surfacing persistence failures explicitly. */
async function waitSaved(page) {
  await page.waitForFunction(() => {
    const status = document.querySelector(".worldview-save-status");
    if (status.querySelector('[role="alert"]')) throw Error(status.textContent);
    return !/Saving|Loading/.test(status.textContent);
  });
}

/** Verifies Collection navigation, discrete Timeline scrubbing, section/reopen states, notes and missing originals in an isolated Universe. */
async function verifyImageCarousels({
  app,
  page,
  vault,
  createChip,
  readChips,
}) {
  console.log("Checking Collection and Timeline source viewers...");
  const directory = path.join(vault, "carousel-fixtures");
  await fs.mkdir(directory);
  const files = new Map();
  for (const [name, label, color, width, height] of [
    ["one.png", "Carousel one", "#ffffff", 360, 180],
    ["two.png", "Carousel two", "#e4efff", 240, 360],
  ]) {
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");
    context.fillStyle = color;
    context.fillRect(0, 0, width, height);
    context.fillStyle = "#111111";
    context.font = "28px sans-serif";
    context.fillText(label, 35, 90);
    const bytes = canvas.toBuffer("image/png");
    files.set(name, bytes);
    await fs.writeFile(path.join(directory, name), bytes);
  }
  await createChip(page, "Image Carousel");
  await waitSaved(page);
  const entity = (await readChips(page)).at(-1);
  await page.getByRole("button", { name: "Assign Files", exact: true }).click();
  const picker = page.getByRole("dialog", {
    name: "Assign Files",
    exact: true,
  });
  await picker
    .getByRole("button", { name: "Open folder carousel-fixtures", exact: true })
    .click();
  for (const name of files.keys())
    await picker
      .getByRole("checkbox", {
        name: `Select carousel-fixtures/${name}`,
        exact: true,
      })
      .check();
  await picker
    .getByRole("button", { name: "Confirm Assignment", exact: true })
    .click();
  await picker.waitFor({ state: "hidden" });
  await waitSaved(page);
  const entityPath = path.join(
    vault,
    ".wonnyy/worldview/entities",
    `${entity.id}.md`,
  );
  const entityBefore = await fs.readFile(entityPath, "utf8");
  await page
    .getByRole("button", { name: "View Knowledge Card", exact: true })
    .click();
  const card = page.locator(".knowledge-card");
  await page.waitForFunction(
    () => document.querySelector(".knowledge-write-index")?.disabled === false,
  );
  await card.getByRole("button", { name: "Write Index", exact: true }).click();
  const editor = card.getByRole("textbox", {
    name: "Index declarations",
    exact: true,
  });

  const declarations =
    "# Industry\nCarousel = [\nsource: carousel-fixtures/one.png\nsource: carousel-fixtures/two.png\n].view(carousel)\nObservations = [\nsource: carousel-fixtures/two.png\nsource: carousel-fixtures/one.png\n].view(timeline)\nsource: carousel-fixtures/one.png\n# Single Observation\nSingle = [\nsource: carousel-fixtures/one.png\n].view(timeline)\n# Empty Timeline\nEmpty = [\n].view(timeline)";
  await editor.fill(
    declarations.replace("].view(carousel)", "].parse(image).view(carousel)"),
  );
  await card
    .getByRole("button", { name: "Validate Index", exact: true })
    .click();
  await card.locator(".knowledge-index-errors").waitFor();
  await editor.fill(declarations);
  await card.getByRole("button", { name: "Apply Index", exact: true }).click();
  const collection = card.getByRole("region", {
    name: "Carousel image viewer",
    exact: true,
  });
  const timeline = card.getByRole("region", {
    name: "Observations image viewer",
    exact: true,
  });
  await collection.waitFor();
  await timeline.waitFor();
  const arrowStyle = await collection
    .getByRole("button", { name: "Next image in Carousel", exact: true })
    .evaluate((button) => {
      const style = getComputedStyle(button);
      return {
        text: button.textContent,
        background: style.backgroundColor,
        radius: style.borderRadius,
        border: style.borderTopWidth,
      };
    });
  assert.deepEqual(arrowStyle, {
    text: ">",
    background: "rgb(0, 0, 0)",
    radius: "0px",
    border: "2px",
  });
  assert.equal(await card.locator(".knowledge-image-carousel").count(), 2);
  assert.equal(
    await card.locator(".knowledge-source-selector button").count(),
    1,
  );
  await collection
    .locator(".carousel-stage")
    .getByRole("img", { name: "one.png", exact: true })
    .waitFor();
  const stageHeight = (
    await collection.locator(".carousel-stage").boundingBox()
  ).height;
  await collection
    .getByRole("button", { name: "Next image in Carousel", exact: true })
    .click();
  await collection
    .locator(".carousel-stage")
    .getByRole("img", { name: "two.png", exact: true })
    .waitFor();
  assert.equal(
    (await collection.locator(".carousel-stage").boundingBox()).height,
    stageHeight,
  );
  assert.ok(
    (
      await collection
        .getByRole("region", { name: "Source Information", exact: true })
        .innerText()
    ).includes("two.png"),
  );
  await collection
    .getByRole("button", { name: "Select one.png", exact: true })
    .click();
  await collection
    .locator(".carousel-stage")
    .getByRole("img", { name: "one.png", exact: true })
    .waitFor();
  await collection.focus();
  await collection.press("ArrowRight");
  await collection
    .locator(".carousel-stage")
    .getByRole("img", { name: "two.png", exact: true })
    .waitFor();
  assert.ok((await timeline.innerText()).includes("Undated observations"));
  const scrubber = timeline.getByRole("slider", {
    name: "Observation index",
    exact: true,
  });
  assert.equal(await scrubber.getAttribute("step"), "1");
  assert.equal(await scrubber.getAttribute("min"), "0");
  assert.equal(await scrubber.getAttribute("max"), "1");
  const observations = timeline.getByRole("group", {
    name: "Timeline observations",
    exact: true,
  });
  assert.ok(
    (await observations.getByRole("button").first().innerText()).includes(
      "two.png",
    ),
  );
  await observations
    .getByRole("button", { name: "Select one.png", exact: true })
    .click();
  await timeline
    .locator(".carousel-stage")
    .getByRole("img", { name: "one.png", exact: true })
    .waitFor();
  await scrubber.focus();
  await scrubber.press("ArrowLeft");
  assert.equal(await scrubber.inputValue(), "0");
  await timeline
    .locator(".carousel-stage")
    .getByRole("img", { name: "two.png", exact: true })
    .waitFor();
  assert.ok(
    (
      await timeline
        .getByRole("region", { name: "Observation Information", exact: true })
        .innerText()
    ).includes("two.png"),
  );
  await scrubber.scrollIntoViewIfNeeded();
  const sliderBounds = await scrubber.boundingBox();
  await page.mouse.move(
    sliderBounds.x + 7,
    sliderBounds.y + sliderBounds.height / 2,
  );
  await page.mouse.down();
  await page.mouse.move(
    sliderBounds.x + sliderBounds.width - 7,
    sliderBounds.y + sliderBounds.height / 2,
    { steps: 8 },
  );
  await page.mouse.up();
  assert.equal(await scrubber.inputValue(), "1");
  await timeline
    .locator(".carousel-stage")
    .getByRole("img", { name: "one.png", exact: true })
    .waitFor();
  assert.ok(
    (await scrubber.getAttribute("aria-valuetext")).includes(
      "Observation 2 of 2",
    ),
  );
  await timeline.focus();
  await timeline.press("ArrowLeft");
  assert.equal(await scrubber.inputValue(), "0");
  await timeline
    .getByRole("button", { name: "Next image in Observations", exact: true })
    .click();
  assert.equal(await scrubber.inputValue(), "1");
  const note = collection.getByRole("textbox", {
    name: "Notes for two.png",
    exact: true,
  });
  await note.fill("Human observation for the second source.");
  await collection
    .getByRole("button", { name: "Save Notes", exact: true })
    .click();
  await page.waitForFunction(
    () =>
      !document.querySelector(
        '.knowledge-image-carousel .carousel-context [aria-label="Notes"] small',
      ),
  );
  assert.ok(
    (
      await collection
        .getByRole("region", { name: "Analysis", exact: true })
        .innerText()
    ).includes("No analysis available"),
  );
  await collection
    .getByRole("button", { name: "Locate Original", exact: true })
    .click();
  await fs.rename(
    path.join(directory, "two.png"),
    path.join(directory, "two-away.png"),
  );
  await collection
    .getByRole("button", { name: "Select one.png", exact: true })
    .click();
  await collection
    .getByRole("button", { name: "Select two.png", exact: true })
    .click();
  await collection.locator('.carousel-stage [role="alert"]').waitFor();
  await fs.rename(
    path.join(directory, "two-away.png"),
    path.join(directory, "two.png"),
  );
  await collection
    .getByRole("button", { name: "Select one.png", exact: true })
    .click();
  await collection
    .locator(".carousel-stage")
    .getByRole("img", { name: "one.png", exact: true })
    .waitFor();
  await collection.evaluate((element) =>
    element.scrollIntoView({ block: "start" }),
  );
  await page.screenshot({
    path: "test-results/worldview-viewer-collection.png",
  });
  const windowSize = await app.evaluate(({ BrowserWindow }) =>
    BrowserWindow.getAllWindows()[0].getSize(),
  );
  await app.evaluate(({ BrowserWindow }) =>
    BrowserWindow.getAllWindows()[0].setSize(1100, 760),
  );
  await page.waitForFunction(() => {
    const main = document.querySelector(".knowledge-card-main");
    return main && main.scrollWidth <= main.clientWidth;
  });
  const stage = collection.locator(".carousel-stage");
  assert.ok((await stage.boundingBox()).width > 0);
  assert.equal(
    await stage
      .locator("img")
      .evaluate((element) => getComputedStyle(element).objectFit),
    "contain",
  );
  await timeline.evaluate((element) =>
    element.scrollIntoView({ block: "start" }),
  );
  await page.screenshot({ path: "test-results/worldview-viewer-timeline.png" });
  await app.evaluate(
    ({ BrowserWindow }, dimensions) =>
      BrowserWindow.getAllWindows()[0].setSize(...dimensions),
    windowSize,
  );
  await card
    .getByRole("button", { name: "Close Knowledge Card", exact: true })
    .click();
  await page
    .getByRole("button", { name: "View Knowledge Card", exact: true })
    .click();
  await collection.waitFor();
  await collection
    .getByRole("button", { name: "Select two.png", exact: true })
    .click();
  await page.waitForFunction(
    () =>
      document.querySelector(".carousel-context textarea")?.value ===
      "Human observation for the second source.",
  );
  assert.equal(
    await note.inputValue(),
    "Human observation for the second source.",
  );
  await card
    .getByRole("button", { name: "Single Observation", exact: true })
    .click();
  const single = card.getByRole("region", {
    name: "Single image viewer",
    exact: true,
  });
  const singleSlider = single.getByRole("slider", {
    name: "Observation index",
    exact: true,
  });
  assert.ok(await singleSlider.isDisabled());
  assert.equal(await singleSlider.getAttribute("max"), "0");
  assert.ok(
    await single
      .getByRole("button", { name: "Previous image in Single", exact: true })
      .isDisabled(),
  );
  assert.ok(
    await single
      .getByRole("button", { name: "Next image in Single", exact: true })
      .isDisabled(),
  );
  await single.evaluate((element) =>
    element.scrollIntoView({ block: "start" }),
  );
  await page.screenshot({
    path: "test-results/worldview-viewer-single-observation.png",
  });
  await card
    .getByRole("button", { name: "Empty Timeline", exact: true })
    .click();
  const empty = card.getByRole("region", {
    name: "Empty image viewer",
    exact: true,
  });
  assert.ok(
    (await empty.innerText()).includes("No observations in this timeline."),
  );
  assert.equal(await empty.getByRole("slider").count(), 0);
  await card.getByRole("button", { name: "Industry", exact: true }).click();
  assert.equal(await scrubber.inputValue(), "0");
  await assert.rejects(fs.stat(path.join(vault, ".engine/image-parser")), {
    code: "ENOENT",
  });
  for (const [name, bytes] of files)
    assert.deepEqual(await fs.readFile(path.join(directory, name)), bytes);
  assert.equal(await fs.readFile(entityPath, "utf8"), entityBefore);
  await card
    .getByRole("button", { name: "Close Knowledge Card", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Deselect entity", exact: true })
    .click();
  await page.getByRole("button", { name: "Reset view", exact: true }).click();
  return {
    status: "passed",
    collection: true,
    timelineUndated: true,
    discreteScrubber: true,
    singleObservation: true,
    emptyTimeline: true,
    sectionSwitching: true,
    thumbnails: true,
    keyboard: true,
    responsiveStage: true,
    notesPersisted: true,
    missingSource: true,
    noImageEngine: true,
    originalsPreserved: true,
  };
}
module.exports = { verifyImageCarousels };
