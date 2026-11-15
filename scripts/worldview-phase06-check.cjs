const assert = require("node:assert/strict");
const { registerHooks } = require("node:module");
const hooks = registerHooks({
  /** Resolves the production coordinate module for this Node-based desktop geometry check. */
  resolve(specifier, context, next) {
    return next(
      specifier === "./coordinates" ? "./coordinates.ts" : specifier,
      context,
    );
  },
});
const {
  connectorRoutes,
  hitTestConnectors,
  routePoint,
} = require("../features/worldview/connectors.ts");
hooks.deregister();

/** Waits for relationship/entity writes and surfaces save failures before reload or subsequent assertions. */
async function waitSaved(page) {
  await page.waitForFunction(() => {
    const status = document.querySelector(".worldview-save-status");
    if (status.querySelector('[role="alert"]')) throw Error(status.textContent);
    return !/Saving|Loading/.test(status.textContent);
  });
}

/** Finds line-selection locations outside DOM controls and floating entity-title hit areas. */
async function exposedConnectionPoint(page, point) {
  return page.evaluate(({ x, y }) => {
    const overTitle = Array.from(
      document.querySelectorAll(".worldview-entity-name"),
    ).some((element) => {
      if (getComputedStyle(element).visibility !== "visible") return false;
      const bounds = element.getBoundingClientRect();
      return (
        x >= bounds.left &&
        x <= bounds.right &&
        y >= bounds.top &&
        y <= bounds.bottom
      );
    });
    return (
      !overTitle &&
      document.elementFromPoint(x, y)?.matches(".worldview-canvas")
    );
  }, point);
}

/** Verifies universal port pairings, natural curves, permanently visible/selectable labels, overlap selection, movement and reload through native pointer input. */
async function verifyUniversalConnectors({
  page,
  vault,
  createChip,
  readChips,
  gridImage,
}) {
  console.log("Checking universal, concurrent WorldView port relationships...");
  await createChip(page, "Port Source");
  await createChip(page, "Port Target");
  await waitSaved(page);
  const entities = await readChips(page);
  const source = entities.find((chip) => chip.name === "Port Source");
  const target = entities.find((chip) => chip.name === "Port Target");
  await page.evaluate(
    async ({ vaultPath, sourceId, targetId }) => {
      const bridge = window.orbistryDesktop.worldview;
      const world = await bridge.request("load", { vaultPath });
      for (const chip of world.chips) {
        if (![sourceId, targetId].includes(chip.id)) continue;
        await bridge.request("save", {
          vaultPath,
          chip: {
            ...chip,
            position: { x: chip.id === sourceId ? -3 : 3, y: 0 },
          },
        });
      }
    },
    { vaultPath: vault, sourceId: source.id, targetId: target.id },
  );
  await page.reload();
  await page.locator(".startup-screen").waitFor({ state: "hidden" });
  await waitSaved(page);
  const canvas = page.locator(".worldview-canvas");
  const bounds = await canvas.boundingBox();
  const center = {
    x: bounds.x + bounds.width / 2,
    y: bounds.y + bounds.height / 2,
  };
  const offsets = {
    north: [-48, -24],
    east: [48, -24],
    south: [48, 24],
    west: [-48, 24],
  };
  /** Computes the exact anchor in the default camera for synthetic entities at known world coordinates. */
  function anchor(entity, portId) {
    const x = entity.id === source.id ? -3 : 3;
    return {
      x: center.x + x * 48 + offsets[portId][0],
      y: center.y + x * 24 + offsets[portId][1],
    };
  }
  /** Drags freely from any occupied/unoccupied origin to the specified destination port. */
  async function connect(from, fromPort, to, toPort) {
    const start = anchor(from, fromPort);
    const end = anchor(to, toPort);
    await page.mouse.move(start.x, start.y);
    await page.mouse.down();
    await page.mouse.move(center.x, center.y - 160, { steps: 3 });
    await page.mouse.move(end.x, end.y, { steps: 4 });
    await page.mouse.up();
  }
  const dialog = page.getByRole("dialog", {
    name: "Define Relationship",
    exact: true,
  });
  await connect(source, "north", source, "south");
  assert.equal(await dialog.count(), 0, "same entity is ineligible");
  await connect(source, "north", target, "north");
  await dialog.getByRole("button", { name: "Cancel", exact: true }).click();
  assert.equal(
    await page
      .getByRole("list", { name: "WorldView relationships", exact: true })
      .getByRole("button")
      .count(),
    0,
  );
  const expected = [];
  const pairs = [];
  for (const fromPort of Object.keys(offsets))
    for (const toPort of Object.keys(offsets))
      pairs.push([source, fromPort, target, toPort]);
  for (let index = 0; index < 5; index++) {
    pairs.push([source, "north", target, "north"]);
    pairs.push([target, "north", source, "north"]);
  }
  for (const [from, fromPort, to, toPort] of pairs) {
    const index = expected.length;
    await connect(from, fromPort, to, toPort);
    const name = `Relationship ${index}`;
    const definition = `Independent definition ${index}`;
    const direction = index % 2 ? "undirected" : "directed";
    await dialog.getByLabel("Name", { exact: true }).fill(name);
    await dialog.getByLabel("Definition", { exact: true }).fill(definition);
    await dialog
      .getByLabel("Direction", { exact: true })
      .selectOption(direction);
    await dialog
      .getByRole("button", { name: "Create Relationship", exact: true })
      .click();
    await dialog.waitFor({ state: "hidden" });
    expected.push({
      name,
      definition,
      direction,
      sourceEntityId: from.id,
      sourcePortId: fromPort,
      targetEntityId: to.id,
      targetPortId: toPort,
    });
    if (expected.length === 2) {
      await gridImage(page);
      await page.screenshot({
        path: "test-results/worldview-natural-connections.png",
      });
    }
  }
  await waitSaved(page);
  /** Reads actual persisted records through the guarded desktop boundary. */
  async function saved() {
    return page.evaluate(
      async (vaultPath) =>
        (await window.orbistryDesktop.worldview.request("load", { vaultPath }))
          .connectors,
      vault,
    );
  }
  let original = await saved();
  const labels = page.getByRole("group", {
    name: "Connection labels",
    exact: true,
  });
  assert.equal(
    await labels.getByRole("button", { includeHidden: true }).count(),
    26,
  );
  assert.ok((await labels.innerText()).includes("Independent definition 0"));
  const labelId = await labels.locator("button").evaluateAll((buttons) => {
    const exposed = buttons.find((button) => {
      const bounds = button.getBoundingClientRect();
      return (
        document
          .elementFromPoint(
            bounds.x + bounds.width / 2,
            bounds.y + bounds.height / 2,
          )
          ?.closest(".worldview-connector-label") === button
      );
    });
    return exposed?.dataset.connectorId;
  });
  assert.ok(
    labelId,
    "at least one floating name/description label is exposed for pointer selection",
  );
  await labels.locator(`[data-connector-id="${labelId}"]`).click();
  const labelLayer = page.locator(".worldview-connector-labels");
  const defaultBubbleWidth = (
    await labelLayer.locator("button:visible").first().boundingBox()
  ).width;
  const defaultOpacity = Number(
    await labelLayer.evaluate((element) => getComputedStyle(element).opacity),
  );
  assert.ok(
    defaultOpacity > 0 && defaultOpacity < 1,
    "connection bubbles partially fade at 100% zoom",
  );
  await canvas.focus();
  await canvas.press("+");
  await gridImage(page);
  const closerOpacity = Number(
    await labelLayer.evaluate((element) => getComputedStyle(element).opacity),
  );
  assert.ok(closerOpacity > defaultOpacity && closerOpacity < 1);
  await canvas.press("+");
  await gridImage(page);
  assert.equal(
    Number(
      await labelLayer.evaluate((element) => getComputedStyle(element).opacity),
    ),
    1,
    "bubbles are fully visible above 130%",
  );
  const intermediateBubbleWidth = (
    await labelLayer.locator("button:visible").first().boundingBox()
  ).width;
  assert.ok(
    intermediateBubbleWidth > defaultBubbleWidth,
    "bubbles grow toward the 170% reference size",
  );
  await canvas.dispatchEvent("wheel", {
    deltaY: -Math.log(1.7 / 1.44) / 0.0015,
    clientX: center.x,
    clientY: center.y,
  });
  await gridImage(page);
  const referenceBubbleWidth = (
    await labelLayer.locator("button:visible").first().boundingBox()
  ).width;
  assert.ok(
    Math.abs(referenceBubbleWidth - 190) < 0.01,
    "bubbles reach their reference size at 170%",
  );
  await canvas.press("+");
  await gridImage(page);
  const largerZoomBubbleWidth = (
    await labelLayer.locator("button:visible").first().boundingBox()
  ).width;
  assert.ok(
    Math.abs(largerZoomBubbleWidth - referenceBubbleWidth) < 0.01,
    "bubble size stays capped above 170%",
  );
  for (let step = 0; step < 12; step++) await canvas.press("-");
  await gridImage(page);
  assert.equal(
    Number(
      await labelLayer.evaluate((element) => getComputedStyle(element).opacity),
    ),
    0,
  );
  assert.ok(
    await labelLayer.evaluate((element) => element.inert),
    "fully faded labels leave the canvas interactive",
  );
  assert.equal(await labelLayer.locator("button:visible").count(), 0);
  await page.getByRole("button", { name: "Reset view", exact: true }).click();
  await gridImage(page);
  assert.equal(
    Number(
      await labelLayer.evaluate((element) => getComputedStyle(element).opacity),
    ),
    defaultOpacity,
  );
  assert.equal(await labelLayer.evaluate((element) => element.inert), false);
  assert.ok(
    Math.abs(
      (await labelLayer.locator("button:visible").first().boundingBox()).width -
        defaultBubbleWidth,
    ) < 0.01,
    "bubble size recovers consistently when zooming back out",
  );
  assert.equal(
    await page
      .locator('[aria-label="WorldView relationships"] [aria-pressed="true"]')
      .getAttribute("data-connector-id"),
    labelId,
  );
  assert.equal(original.length, 26);
  assert.equal(new Set(original.map((item) => item.id)).size, 26);
  for (const item of expected)
    assert.deepEqual(
      original.find((record) => record.name === item.name),
      { id: original.find((record) => record.name === item.name).id, ...item },
    );
  await page.getByRole("button", { name: "Reset view", exact: true }).click();
  // Find an actual multi-route crossing. UUID ordering can place a single lane at the viewport center.
  const routes = connectorRoutes(
    original,
    [
      { id: source.id, position: { x: -3, y: 0 } },
      { id: target.id, position: { x: 3, y: 0 } },
    ],
    { center: { x: 0, y: 0 }, zoom: 1 },
    { width: bounds.width, height: bounds.height },
  );
  let crossing = null;
  for (const route of routes) {
    for (let step = 4; step <= 16; step++) {
      const point = routePoint(route, step / 20);
      const onPlatform = [-3, 3].some(
        (x) =>
          Math.abs(point.x - bounds.width / 2 - x * 48) / 96 +
            Math.abs(point.y - bounds.height / 2 - x * 24) / 48 <
          1.4,
      );
      if (!onPlatform && hitTestConnectors(point, routes).length > 1) {
        const exposed = await exposedConnectionPoint(page, {
          x: bounds.x + point.x,
          y: bounds.y + point.y,
        });
        if (!exposed) continue;
        crossing = point;
        break;
      }
    }
    if (crossing) break;
  }
  assert.ok(
    crossing,
    "fixture contains selectable crossing lines in empty ground",
  );
  await page.mouse.click(bounds.x + crossing.x, bounds.y + crossing.y);
  await page
    .getByRole("region", { name: "Selected relationship", exact: true })
    .waitFor();
  const selected = page.locator(
    '[aria-label="WorldView relationships"] [aria-pressed="true"]',
  );
  assert.equal(await selected.count(), 1);
  const firstSelection = await selected.getAttribute("data-connector-id");
  await page.mouse.click(bounds.x + crossing.x, bounds.y + crossing.y);
  assert.equal(await selected.count(), 1);
  assert.notEqual(
    await selected.getAttribute("data-connector-id"),
    firstSelection,
    "repeated crossing clicks cycle independent connections",
  );
  const beforeMove = await gridImage(page);
  // Move the source by its unobstructed platform center, away from edge-midpoint anchors.
  await page.mouse.move(center.x - 144, center.y - 72);
  await page.mouse.down();
  await page.mouse.move(center.x - 240, center.y - 72, { steps: 5 });
  await page.mouse.up();
  await waitSaved(page);
  assert.notEqual(await gridImage(page), beforeMove);
  const moved = (await readChips(page)).find((chip) => chip.id === source.id);
  assert.deepEqual([moved.x, moved.y], [-4, 1]);
  assert.deepEqual(await saved(), original);
  await page.mouse.move(center.x - 280, center.y + 200);
  await page.mouse.down();
  await page.mouse.move(center.x - 220, center.y + 230, { steps: 4 });
  await page.mouse.up();
  await page.mouse.wheel(0, -180);
  await gridImage(page);
  assert.deepEqual(await saved(), original);
  await page.reload();
  await page.locator(".startup-screen").waitFor({ state: "hidden" });
  await waitSaved(page);
  assert.deepEqual(await saved(), original);
  const list = page.getByRole("list", {
    name: "WorldView relationships",
    exact: true,
  });
  assert.equal(await list.getByRole("button").count(), 26);
  await list
    .getByRole("button")
    .nth(10)
    .evaluate((button) => button.click());
  await page
    .getByRole("region", { name: "Selected relationship", exact: true })
    .waitFor();
  await page.screenshot({
    path: "test-results/worldview-universal-connectors.png",
  });
  // Adjacent platforms can share an exact anchor. Moving an existing connection there must produce a visible selectable loop.
  await page.mouse.move(center.x + 144, center.y + 72);
  await page.mouse.down();
  await page.mouse.move(center.x - 144, center.y - 24, { steps: 6 });
  await page.mouse.up();
  await waitSaved(page);
  const adjacentChips = (await readChips(page)).map((chip) => ({
    id: chip.id,
    position: { x: chip.x, y: chip.y },
  }));
  const adjacentRoutes = connectorRoutes(
    original,
    adjacentChips,
    { center: { x: 0, y: 0 }, zoom: 1 },
    { width: bounds.width, height: bounds.height },
  );
  const loop = adjacentRoutes.find(
    (route) => route.start.x === route.end.x && route.start.y === route.end.y,
  );
  assert.ok(
    loop,
    "adjacent chips retain an independently routed coincident-anchor relationship",
  );
  assert.deepEqual(loop.start, loop.end);
  // UUID lane ordering can put a loop midpoint outside the viewport. Choose an exposed point on the actual curve.
  let loopPoint = null;
  for (let step = 1; step < 20; step++) {
    const point = routePoint(loop, step / 20);
    if (
      point.x < 12 ||
      point.y < 12 ||
      point.x > bounds.width - 12 ||
      point.y > bounds.height - 12
    )
      continue;
    const onPlatform = adjacentChips.some(
      (chip) =>
        Math.abs(
          point.x - bounds.width / 2 - (chip.position.x - chip.position.y) * 48,
        ) /
          96 +
          Math.abs(
            point.y -
              bounds.height / 2 -
              (chip.position.x + chip.position.y) * 24,
          ) /
            48 <
        1.4,
    );
    if (onPlatform) continue;
    const overCanvas = await exposedConnectionPoint(page, {
      x: bounds.x + point.x,
      y: bounds.y + point.y,
    });
    if (overCanvas) {
      loopPoint = point;
      break;
    }
  }
  assert.ok(
    loopPoint,
    "coincident-anchor curve has an exposed viewport segment",
  );
  const loopHits = hitTestConnectors(loopPoint, adjacentRoutes);
  for (let attempt = 0; attempt < loopHits.length; attempt++) {
    await page.mouse.click(bounds.x + loopPoint.x, bounds.y + loopPoint.y);
    if (
      (await selected.getAttribute("data-connector-id")) === loop.connector.id
    )
      break;
  }
  assert.equal(
    await selected.getAttribute("data-connector-id"),
    loop.connector.id,
  );
  assert.deepEqual(await saved(), original);
  await page.screenshot({
    path: "test-results/worldview-coincident-anchor-loop.png",
  });
  const editTarget = original.find(
    (connector) => connector.id === loop.connector.id,
  );
  const editDialog = page.getByRole("dialog", {
    name: "Edit Connection",
    exact: true,
  });
  await page
    .getByRole("button", { name: "Edit Connection", exact: true })
    .click();
  assert.equal(
    await editDialog.getByLabel("Name", { exact: true }).inputValue(),
    editTarget.name,
  );
  assert.equal(
    await editDialog.getByLabel("Definition", { exact: true }).inputValue(),
    editTarget.definition,
  );
  assert.equal(
    await editDialog.getByLabel("Direction", { exact: true }).inputValue(),
    editTarget.direction,
  );
  await editDialog
    .getByLabel("Name", { exact: true })
    .fill("Discard this connection edit");
  await editDialog.getByRole("button", { name: "Cancel", exact: true }).click();
  assert.deepEqual(await saved(), original);
  await page
    .getByRole("button", { name: "Edit Connection", exact: true })
    .click();
  await editDialog
    .getByLabel("Definition", { exact: true })
    .fill("Discard this description");
  await editDialog.press("Escape");
  assert.deepEqual(await saved(), original);
  await page
    .getByRole("button", { name: "Edit Connection", exact: true })
    .click();
  const edited = {
    ...editTarget,
    name: "Edited connection",
    definition: "Updated floating description\nPreserved after reload",
    direction: editTarget.direction === "directed" ? "undirected" : "directed",
  };
  await editDialog.getByLabel("Name", { exact: true }).fill(edited.name);
  await editDialog
    .getByLabel("Definition", { exact: true })
    .fill(edited.definition);
  await editDialog
    .getByLabel("Direction", { exact: true })
    .selectOption(edited.direction);
  await editDialog
    .getByRole("button", { name: "Save Changes", exact: true })
    .click();
  await editDialog.waitFor({ state: "hidden" });
  original = original.map((connector) =>
    connector.id === edited.id ? edited : connector,
  );
  assert.deepEqual(await saved(), original);
  const editedLabel = page.locator(
    `.worldview-connector-label[data-connector-id="${edited.id}"]`,
  );
  assert.ok((await editedLabel.textContent()).includes(edited.name));
  assert.ok((await editedLabel.textContent()).includes(edited.definition));
  await page.screenshot({
    path: "test-results/worldview-edited-connection.png",
  });
  await page.reload();
  await page.locator(".startup-screen").waitFor({ state: "hidden" });
  await waitSaved(page);
  assert.deepEqual(await saved(), original);
  await list
    .locator(`[data-connector-id="${edited.id}"]`)
    .evaluate((button) => button.click());
  await page
    .getByRole("region", { name: "Selected relationship", exact: true })
    .waitFor();
  await page
    .getByRole("button", { name: "Delete Relationship", exact: true })
    .click();
  await page
    .getByRole("dialog")
    .getByRole("button", { name: "Cancel", exact: true })
    .click();
  assert.equal((await saved()).length, 26);
  const removedId = await selected.getAttribute("data-connector-id");
  await page
    .getByRole("button", { name: "Delete Relationship", exact: true })
    .click();
  await page
    .getByRole("dialog")
    .getByRole("button", { name: "Delete Relationship", exact: true })
    .click();
  await waitSaved(page);
  assert.deepEqual(
    await saved(),
    original.filter((connector) => connector.id !== removedId),
  );
  // Clean only the synthetic records created in this check, restoring the empty-grid baseline for existing acceptance tests.
  await page.evaluate(
    async ({ vaultPath, connectors, ids }) => {
      const bridge = window.orbistryDesktop.worldview;
      for (const connector of connectors)
        await bridge.request("connector-delete", {
          vaultPath,
          id: connector.id,
        });
      for (const id of ids) await bridge.request("delete", { vaultPath, id });
    },
    { vaultPath: vault, connectors: original, ids: [source.id, target.id] },
  );
  await page.reload();
  await page.locator(".startup-screen").waitFor({ state: "hidden" });
  await waitSaved(page);
  assert.equal((await readChips(page)).length, 0);
  assert.equal((await saved()).length, 0);
  return {
    status: "passed",
    portCombinations: 16,
    relationships: 26,
    sharedOriginsAndDestinations: true,
    persistence: true,
    movement: true,
    naturalCurves: true,
    floatingNamesAndDescriptions: true,
    zoomFading: true,
    bubbleSizeCappedAt170: true,
    editing: true,
    editCancelAndEscape: true,
    editPersistence: true,
  };
}
module.exports = { verifyUniversalConnectors };
