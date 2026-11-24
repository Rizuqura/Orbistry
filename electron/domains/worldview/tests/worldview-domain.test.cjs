const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const {
  WorldView,
  Connection,
  WorldViewService,
  WorldViewRepository,
} = require("../index.cjs");
const entities = require("../../entity/worldview-store.cjs");
const legacy = require("../../entity/connector-store.cjs");
const { registerWorldViewIpc } = require("../../../core/ipc/worldview-ipc.cjs");

/** Supplies synthetic legacy metadata with no source or external-provider dependency. */
function edge(id = "ab", source = "a", target = "b") {
  return {
    id,
    sourceEntityId: source,
    sourcePortId: "north",
    targetEntityId: target,
    targetPortId: "west",
    name: id,
    definition: "Relationship metadata only",
    direction: "directed",
  };
}
/** Constructs a metadata-free graph for invariant and revision tests. */
function world() {
  return new WorldView({
    id: "default",
    memberships: ["a", "b", "c"].map((entityId) => ({
      entityId,
      position: { x: 0, y: 0 },
    })),
  });
}
/** Creates only disposable Entity records; cleanup is checked against the exact temporary root. */
async function fixture(t) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-world-oop-"));
  t.after(async () => {
    assert.ok(
      path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep) &&
        path.basename(root).startsWith("orbistry-world-oop-"),
    );
    await fs.rm(root, { recursive: true, force: true });
  });
  for (const id of ["a", "b", "c"])
    await entities.saveWorldViewChip(root, {
      id,
      name: id,
      icon: "",
      color: "#263f4b",
      tags: [],
      position: { x: 0, y: 0 },
    });
  return {
    root,
    context: { root },
    service: new WorldViewService({
      authorization: async (context) => context.root === root,
    }),
  };
}

test("WorldView owns unique membership/placement and exports isolated deterministic snapshots", () => {
  const model = world(),
    revision = model.revision;
  assert.throws(
    () => model.addEntity("a", { x: 1, y: 2 }),
    (error) => error.code === "DUPLICATE_MEMBERSHIP",
  );
  assert.equal(model.revision, revision);
  model.moveEntity("a", { x: 5, y: 9 });
  assert.notEqual(model.revision, revision);
  assert.equal(model.getSnapshot().memberships[0].entityId, "a");
  assert.throws(() => model.moveEntity("missing", { x: 0, y: 0 }), /not in/);
  assert.throws(() => model.moveEntity("a", { x: Infinity, y: 0 }));
  const snapshot = model.getSnapshot();
  snapshot.memberships[0].position.x = 999;
  assert.equal(model.getSnapshot().memberships[0].position.x, 5);
  assert.equal(new WorldView(model.getSnapshot()).revision, model.revision);
  assert.deepEqual(Object.keys(model.getSnapshot()).sort(), [
    "connections",
    "id",
    "memberships",
  ]);
});

test("Connection validates logical roles, keeps stable identity and round-trips every legacy anchor pair", () => {
  for (const sourcePortId of ["north", "east", "south", "west"])
    for (const targetPortId of ["north", "east", "south", "west"]) {
      const value = { ...edge(), sourcePortId, targetPortId };
      const connection = Connection.fromLegacy(value);
      assert.equal(connection.getSnapshot().source.portId, "output");
      assert.equal(connection.getSnapshot().target.portId, "input");
      assert.deepEqual(connection.toLegacy(), value);
      const edited = connection.withMetadata({
        name: "Updated",
        purpose: "Meaning",
      });
      assert.equal(edited.getSnapshot().id, value.id);
      assert.equal(connection.getSnapshot().metadata.name, value.name);
    }
  const snapshot = Connection.fromLegacy(edge()).getSnapshot();
  assert.throws(
    () =>
      new Connection({
        ...snapshot,
        source: { entityId: "a", portId: "input" },
      }),
  );
  assert.throws(
    () =>
      new Connection({
        ...snapshot,
        target: { entityId: "b", portId: "output" },
      }),
  );
  assert.throws(() =>
    Connection.fromLegacy({ ...edge(), sourcePortId: "input" }),
  );
  assert.throws(
    () =>
      new Connection({
        ...snapshot,
        target: { entityId: "a", portId: "input" },
      }),
    /another entity/,
  );
});

test("WorldView rejects missing/duplicate endpoints without changing cardinality or metadata identity", () => {
  const model = world();
  model.connect(Connection.fromLegacy(edge()));
  assert.throws(() => model.connect(Connection.fromLegacy(edge())), /identity/);
  assert.throws(
    () => model.connect(Connection.fromLegacy(edge("missing", "a", "unknown"))),
    /endpoints/,
  );
  model.connect(Connection.fromLegacy(edge("parallel")));
  model.updateConnection(
    "ab",
    { name: "Changed", purpose: "New purpose" },
    "undirected",
  );
  assert.equal(model.getDirectConnections("a").length, 2);
  assert.equal(model.getDirectConnections("a")[0].id, "ab");
  const revision = model.revision;
  model.disconnect("absent");
  assert.equal(model.revision, revision);
  model.removeEntity("a");
  assert.equal(model.getSnapshot().connections.length, 0);
  assert.equal(model.getSnapshot().memberships.length, 2);
});

test("direct queries filter one hop/direction and do not traverse the next Entity", () => {
  const model = world();
  model.connect(Connection.fromLegacy(edge()));
  model.connect(Connection.fromLegacy(edge("bc", "b", "c")));
  assert.deepEqual(
    model.getDirectConnections("a").map((item) => item.id),
    ["ab"],
  );
  assert.deepEqual(
    model.getDirectConnections("b", "input").map((item) => item.id),
    ["ab"],
  );
  assert.deepEqual(
    model.getDirectConnections("b", "output").map((item) => item.id),
    ["bc"],
  );
  assert.throws(
    () => model.getDirectConnections("a", "recursive"),
    /Choose input/,
  );
  model.updateConnection(
    "ab",
    { name: "Shared", purpose: "Metadata" },
    "undirected",
  );
  assert.equal(model.getDirectConnections("a", "input").length, 1);
});

test("service denies absent, false and truthy-object host admission before persistence access", async () => {
  const repository = {
    read: async () => {
      throw Error("Persistence must not be reached");
    },
    saveChip: async () => {
      throw Error("Write must not be reached");
    },
  };
  for (const authorization of [
    undefined,
    async () => false,
    async () => ({ allowed: true }),
  ]) {
    const service = new WorldViewService({ repository, authorization });
    await assert.rejects(
      service.load({ root: "unused" }),
      (error) => error.code === "WORLDVIEW_ACCESS_DENIED",
    );
    await assert.rejects(
      service.saveChip(
        { root: "unused" },
        { id: "a", position: { x: 1, y: 1 } },
      ),
      /not authorized/,
    );
    await assert.rejects(
      service.createConnection({ root: "unused" }, edge()),
      /not authorized/,
    );
    await assert.rejects(
      service.disconnect({ root: "unused" }, "ab"),
      /not authorized/,
    );
  }
});

test("repository preserves physical formats, unknown Entity metadata and stale-update semantics", async (t) => {
  const { root, context, service } = await fixture(t);
  const file = path.join(root, ".wonnyy/worldview/entities/a.md");
  await fs.appendFile(file, "\nPrivate note remains an Entity concern.\n");
  const initial = await fs.readFile(file, "utf8");
  await service.createConnection(context, edge());
  await service.createConnection(context, edge());
  assert.equal(await fs.readFile(file, "utf8"), initial);
  const edited = { ...edge(), name: "Edited" };
  await service.updateConnection(context, edited, edge());
  await service.updateConnection(context, edited, edge());
  await assert.rejects(
    service.updateConnection(context, { ...edited, name: "Stale" }, edge()),
    /changed on disk/,
  );
  const moved = await service.saveChip(context, {
    ...(await entities.readWorldViewChip(root, "a")),
    position: { x: 7, y: 3 },
  });
  assert.equal(moved.id, "a");
  assert.deepEqual(moved.position, { x: 7, y: 3 });
  assert.ok((await fs.readFile(file, "utf8")).includes("Private note remains"));
  const repository = new WorldViewRepository();
  const { world: model, dto } = await repository.read(root);
  assert.equal(new WorldView(model.getSnapshot()).revision, model.revision);
  assert.deepEqual(dto.connectors, [edited]);
  const scopedService = new WorldViewService({
    authorization: async ({ entityIds }) => entityIds.every((id) => id === "a"),
  });
  await assert.rejects(
    scopedService.disconnect(context, "ab"),
    /not authorized/,
  );
  assert.equal((await legacy.loadConnectors(root)).connectors.length, 1);
  assert.deepEqual(
    (await service.listDirectConnections(context, { entityId: "a" })).items.map(
      (item) => item.id,
    ),
    ["ab"],
  );
  await service.removeEntity(context, "a");
  assert.equal(
    (await legacy.loadConnectors(root)).connectors.length,
    1,
    "legacy dangling records are not deleted by migration",
  );
  assert.equal(
    (await repository.read(root)).world.getSnapshot().connections.length,
    0,
  );
  assert.equal(
    (await service.load(context)).connectors.length,
    1,
    "legacy DTO preserves dangling records",
  );
  await service.disconnect(context, "ab");
  await service.disconnect(context, "ab");
});

test("metadata query never loads neighbor knowledge/Identity or executes capabilities", async () => {
  const model = world();
  model.connect(Connection.fromLegacy(edge()));
  model.connect(Connection.fromLegacy(edge("bc", "b", "c")));
  const repository = {
    read: async (root, options) => {
      assert.equal(options.metadataOnly, true);
      return { world: model };
    },
  };
  const service = new WorldViewService({
    repository,
    authorization: async ({ operation, entityIds }) =>
      operation === "connections:read" &&
      entityIds.length === 1 &&
      entityIds[0] === "a",
  });
  const result = await service.listDirectConnections(
    { root: "synthetic" },
    { entityId: "a" },
  );
  assert.deepEqual(
    result.items.map((item) => item.id),
    ["ab"],
  );
  assert.ok(!JSON.stringify(result).includes("knowledge"));
  await assert.rejects(
    service.listDirectConnections({ root: "synthetic" }, { entityId: "b" }),
    /not authorized/,
  );
});

test("authorization revocation during a read withholds the returned DTO", async () => {
  let admitted = true;
  const service = new WorldViewService({
    authorization: async () => admitted,
    repository: {
      read: async () => {
        admitted = false;
        return { dto: { secret: "must not escape" } };
      },
    },
  });
  await assert.rejects(service.load({ root: "synthetic" }), /not authorized/);
});

test("existing IPC routes the WorldView service and preserves DTO/channel/root contracts", async (t) => {
  const { root } = await fixture(t),
    handlers = new Map();
  registerWorldViewIpc(
    { handle: (name, fn) => handlers.set(name, fn) },
    () => root,
    {},
  );
  const context = { vaultPath: root };
  const created = await handlers.get("worldview:connector-create")(null, {
    ...context,
    connector: edge(),
  });
  assert.deepEqual(created, { ok: true, value: edge() });
  const loaded = await handlers.get("worldview:load")(null, context);
  assert.equal(loaded.ok, true);
  assert.equal(loaded.value.chips.length, 3);
  assert.deepEqual(loaded.value.connectors, [edge()]);
  assert.deepEqual(Object.keys(loaded.value).sort(), [
    "chips",
    "connectors",
    "indexDirectory",
    "issues",
    "rootPath",
  ]);
  assert.equal(loaded.value instanceof WorldView, false);
  const invalid = await handlers.get("worldview:save")(null, {
    ...context,
    chip: { id: "a", position: { x: "invalid", y: 0 } },
  });
  assert.deepEqual(invalid, {
    ok: false,
    error: "Invalid WorldView chip metadata.",
  });
  const forged = await handlers.get("worldview:connector-delete")(null, {
    vaultPath: root + "-other",
    id: "ab",
  });
  assert.equal(forged.ok, false);
  assert.match(forged.error, /Universe changed/);
  assert.equal((await legacy.loadConnectors(root)).connectors.length, 1);
});
