const test = require("node:test");
const assert = require("node:assert/strict");
const { registerHooks } = require("node:module");
// Match the bundler's extensionless coordinate import for Node's type-stripping runner.
const hooks = registerHooks({
  /** Resolves the tested module's real coordinate dependency without changing application imports. */
  resolve(specifier, context, next) {
    return next(
      ["./coordinates", "./connectors"].includes(specifier)
        ? `${specifier}.ts`
        : specifier,
      context,
    );
  },
});
const {
  PORT_OFFSETS,
  portPoint,
  hitTestPort,
  connectorRoutes,
  routePoint,
  hitTestConnectors,
} = require("./connectors.ts");
const { connectorLabelLayouts } = require("./connector-labels.ts");
const { screenToWorld } = require("./coordinates.ts");
hooks.deregister();
const chips = [
  { id: "a", position: { x: -4, y: 0 } },
  { id: "b", position: { x: 4, y: 0 } },
];
const viewport = { width: 1000, height: 700 };

/** Verifies all anchor combinations, distinct shared-port lanes, movement/zoom transforms and crossing selection. */
test("universal anchors retain exact geometry and independent overlapping selection", () => {
  const camera = { center: { x: 0, y: 0 }, zoom: 1 };
  const connectors = [];
  for (const sourcePortId of Object.keys(PORT_OFFSETS))
    for (const targetPortId of Object.keys(PORT_OFFSETS)) {
      connectors.push({
        id: `${sourcePortId}-${targetPortId}`,
        sourceEntityId: "a",
        sourcePortId,
        targetEntityId: "b",
        targetPortId,
        direction: "directed",
      });
    }
  for (let index = 0; index < 5; index++)
    connectors.push({ ...connectors[0], id: `duplicate-${index}` });
  for (const zoom of [0.25, 1, 3]) {
    const activeCamera = { center: { x: -3, y: 5 }, zoom };
    const preview = { id: "a", position: { x: -8, y: 2 } };
    const routes = connectorRoutes(
      connectors,
      chips,
      activeCamera,
      viewport,
      preview,
    );
    assert.equal(routes.length, 21);
    for (const route of routes) {
      assert.deepEqual(
        route.start,
        portPoint(
          chips[0],
          route.connector.sourcePortId,
          activeCamera,
          viewport,
          preview,
        ),
      );
      assert.deepEqual(
        route.end,
        portPoint(
          chips[1],
          route.connector.targetPortId,
          activeCamera,
          viewport,
        ),
      );
      assert.ok(
        hitTestConnectors(routePoint(route, 0.5), routes).some(
          (item) => item.id === route.connector.id,
        ),
      );
    }
    const duplicates = routes.filter((route) =>
      route.connector.id.startsWith("duplicate"),
    );
    assert.equal(
      new Set(duplicates.map((route) => JSON.stringify(routePoint(route, 0.5))))
        .size,
      5,
    );
  }
  for (const portId of Object.keys(PORT_OFFSETS)) {
    const point = portPoint(chips[0], portId, camera, viewport);
    assert.deepEqual(hitTestPort(point, chips, camera, viewport), {
      entityId: "a",
      portId,
    });
    assert.equal(hitTestPort(point, chips, camera, viewport, "a"), null);
  }
  const routes = connectorRoutes(
    [
      connectors[0],
      {
        ...connectors[0],
        id: "other-pair",
        sourceEntityId: "c",
        targetEntityId: "d",
      },
    ],
    [...chips, { ...chips[0], id: "c" }, { ...chips[1], id: "d" }],
    camera,
    viewport,
  );
  const overlapping = [
    routes[0],
    { ...routes[0], connector: routes[1].connector },
  ];
  assert.equal(
    hitTestConnectors(routePoint(routes[0], 0.5), overlapping).length,
    2,
  );
  const distant = {
    ...routes[0],
    start: { x: -1e11, y: 0 },
    control: { x: 0, y: 0 },
    control2: undefined,
    end: { x: 1e11, y: 0 },
  };
  assert.equal(hitTestConnectors({ x: 0, y: 0 }, [distant]).length, 1);
  const adjacent = [
    { id: "a", position: { x: 0, y: 0 } },
    { id: "b", position: { x: 2, y: 0 } },
  ];
  const sharedAnchors = Array.from({ length: 5 }, (_, index) => ({
    ...connectors[0],
    id: `coincident-${index}`,
    sourcePortId: "south",
    targetPortId: "north",
  }));
  const loops = connectorRoutes(sharedAnchors, adjacent, camera, viewport);
  assert.equal(
    new Set(loops.map((route) => JSON.stringify(routePoint(route, 0.5)))).size,
    5,
  );
  for (const loop of loops) {
    assert.deepEqual(loop.start, loop.end);
    assert.ok(loop.control2);
    assert.ok(
      Math.hypot(
        routePoint(loop, 0.5).x - loop.start.x,
        routePoint(loop, 0.5).y - loop.start.y,
      ) > 20,
    );
    assert.ok(
      hitTestConnectors(routePoint(loop, 0.5), loops).some(
        (connector) => connector.id === loop.connector.id,
      ),
    );
  }
});

/** Guards identity-seeded curve stability across redraws, reloads and camera transforms while requiring visible curvature for a single connection. */
test("organic curves retain their world shape and independent identities", () => {
  const relationship = {
    id: "natural-a",
    sourceEntityId: "a",
    sourcePortId: "north",
    targetEntityId: "b",
    targetPortId: "south",
    name: "Supplies",
    definition: "Manufactures components",
    direction: "directed",
  };
  const camera = { center: { x: 0, y: 0 }, zoom: 1 };
  const route = connectorRoutes([relationship], chips, camera, viewport)[0];
  const midpoint = routePoint(route, 0.5);
  const dx = route.end.x - route.start.x;
  const dy = route.end.y - route.start.y;
  assert.ok(
    Math.abs(
      (midpoint.x - route.start.x) * dy - (midpoint.y - route.start.y) * dx,
    ) /
      Math.hypot(dx, dy) >
      5,
  );
  assert.deepEqual(
    connectorRoutes(
      structuredClone([relationship]),
      structuredClone(chips),
      camera,
      viewport,
    )[0],
    route,
  );
  assert.notDeepEqual(
    connectorRoutes(
      [{ ...relationship, id: "natural-b" }],
      chips,
      camera,
      viewport,
    )[0].control,
    route.control,
  );
  for (const zoom of [0.25, 0.7, 3]) {
    const movedCamera = { center: { x: -5, y: 7 }, zoom };
    const moved = connectorRoutes(
      [relationship],
      chips,
      movedCamera,
      viewport,
    )[0];
    for (const t of [0, 0.25, 0.5, 0.75, 1]) {
      const before = screenToWorld(routePoint(route, t), camera, viewport);
      const after = screenToWorld(routePoint(moved, t), movedCamera, viewport);
      assert.ok(Math.abs(before.x - after.x) < 1e-10);
      assert.ok(Math.abs(before.y - after.y) < 1e-10);
    }
  }
});

/** Guards readable placement near crowded curve anchors without obscuring reserved chip geometry. */
test("floating connection labels spread around shared anchors and retain every identity", () => {
  const entries = Array.from({ length: 8 }, (_, index) => ({
    id: `connection-${index}`,
    anchor: { x: 500, y: 350 },
    width: 190,
    height: 58,
  }));
  const obstacle = { x: 400, y: 300, width: 200, height: 100 };
  const labels = connectorLabelLayouts(entries, [obstacle], viewport);
  assert.equal(labels.length, entries.length);
  assert.deepEqual(
    labels,
    connectorLabelLayouts(structuredClone(entries), [obstacle], viewport),
  );
  for (const [index, label] of labels.entries()) {
    assert.equal(label.id, entries[index].id);
    assert.deepEqual(label.anchor, entries[index].anchor);
    assert.ok(label.x >= 0 && label.x + label.width <= viewport.width);
    assert.ok(label.y >= 0 && label.y + label.height <= viewport.height);
    for (const other of [obstacle, ...labels.slice(0, index)])
      assert.ok(
        label.x + label.width <= other.x ||
          label.x >= other.x + other.width ||
          label.y + label.height <= other.y ||
          label.y >= other.y + other.height,
      );
  }
});
