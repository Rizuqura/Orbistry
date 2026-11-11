const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { randomUUID } = require("node:crypto");
const stations = require("../station-service.cjs");
const { ChatService } = require("./chat-service.cjs");
const { ContextBoxStore } = require("./context-box-store.cjs");
const { validateAnswer } = require("./response-validation.cjs");
async function fixture(t) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-box-test-"));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  await fs.writeFile(path.join(root, "a.md"), "ALPHA evidence");
  await fs.writeFile(path.join(root, "b.md"), "BETA evidence");
  await stations.addContext(root, ["a.md"]);
  const service = new ChatService({ provider: {}, registry: {} });
  return { root, service };
}
test("context selection and box save never create a conversation; creation is explicit and idempotent", async (t) => {
  const { root, service } = await fixture(t);
  assert.equal((await service.list(root)).length, 0);
  const box = await service.saveBox(root, { name: "  Research  " });
  assert.equal(box.name, "Research");
  assert.equal((await service.list(root)).length, 0);
  const input = { contextBoxId: box.id, creationId: randomUUID() };
  const chat = await service.create(root, input);
  const duplicate = await service.create(root, input);
  assert.equal(chat.id, duplicate.id);
  assert.equal(chat.title, "Untitled chat");
  assert.equal(chat.schemaVersion, 7);
  await assert.rejects(
    service.create(root, { activeStationIds: [], matchMode: "any" }),
    { code: "MODEL_INVALID_REQUEST" },
  );
  assert.equal((await service.list(root)).length, 1);
});
test("box rename persists identity; global changes and restart do not rebind a session", async (t) => {
  const { root, service } = await fixture(t);
  const box = await service.saveBox(root, { name: "Research" });
  const chat = await service.create(root, {
    contextBoxId: box.id,
    creationId: randomUUID(),
  });
  await service.renameBox(root, { id: box.id, name: "Renamed" });
  await assert.rejects(service.saveBox(root, { name: "renamed" }), {
    code: "MODEL_INVALID_REQUEST",
  });
  await assert.rejects(service.renameBox(root, { id: box.id, name: " " }), {
    code: "MODEL_INVALID_REQUEST",
  });
  await assert.rejects(
    service.renameBox(root, { id: box.id, name: "x".repeat(121) }),
    { code: "MODEL_INVALID_REQUEST" },
  );
  await stations.clearContext(root);
  await stations.addContext(root, ["b.md"]);
  const restart = new ChatService({ provider: {}, registry: {} });
  assert.equal((await restart.listBoxes(root))[0].name, "Renamed");
  assert.equal(
    (await restart.checkConversation(root, chat.id)).id,
    chat.contextIdentity.id,
  );
  assert.deepEqual(
    (await stations.getStationState(root)).activeContext.map(
      (s) => s.relativePath,
    ),
    ["b.md"],
  );
  await fs.writeFile(path.join(root, "a.md"), "CHANGED");
  assert.equal(
    (await restart.checkConversation(root, chat.id)).id,
    chat.contextIdentity.id,
  );
  assert.equal(
    (await restart.list(root))[0].contextIdentity.id,
    chat.contextIdentity.id,
  );
});
test("legacy histories stay readable and unbound; vaults and corrupt box metadata fail closed", async (t) => {
  const { root, service } = await fixture(t);
  const identity = await service.context(root, {
    activeStationIds: [],
    matchMode: "any",
  });
  const legacy = await (await service.store(root)).store.create(identity);
  assert.deepEqual(await service.checkConversation(root, legacy.id), identity);
  const legacyPath = path.join(
    root,
    ".wonnyy",
    "conversations",
    legacy.id + ".json",
  );
  const before = await fs.readFile(legacyPath, "utf8");
  await new ChatService({ provider: {}, registry: {} }).list(root);
  assert.equal(await fs.readFile(legacyPath, "utf8"), before);
  const box = await service.saveBox(root, { name: "Research" });
  const other = path.join(root, "other");
  await fs.mkdir(other);
  await assert.rejects(new ContextBoxStore(other).get(box.id), {
    code: "MODEL_CONTEXT_INVALID",
  });
  const file = path.join(root, ".wonnyy", "context-boxes.json");
  await fs.writeFile(file, "broken");
  await assert.rejects(service.listBoxes(root), {
    code: "MODEL_STORAGE_INVALID",
  });
  await assert.rejects(service.saveBox(root, { name: "New" }), {
    code: "MODEL_STORAGE_INVALID",
  });
  assert.equal(await fs.readFile(file, "utf8"), "broken");
});
test("structured citations can only reference the supplied manifest", () => {
  assert.equal(
    validateAnswer(
      {
        content: JSON.stringify({ answer: "Supported.", citations: ["a.md"] }),
        finishReason: "stop",
      },
      "",
      [],
      [{ sourceId: "a.md" }],
    ),
    "Supported.",
  );
  assert.throws(
    () =>
      validateAnswer(
        {
          content: JSON.stringify({ answer: "Invented.", citations: ["b.md"] }),
          finishReason: "stop",
        },
        "",
        [],
        [{ sourceId: "a.md" }],
      ),
    { code: "MODEL_INVALID_RESPONSE" },
  );
});

test("listing history is serialized with deletion and never reads a removed file", async (t) => {
  const { root, service } = await fixture(t);
  const box = await service.saveBox(root, { name: "Concurrent history" });
  const chat = await service.create(root, {
    contextBoxId: box.id,
    creationId: randomUUID(),
  });
  const { store } = await service.store(root);
  const results = await Promise.all([store.remove(chat.id), store.list()]);
  assert.deepEqual(results[1], []);
});

test("source-free chats remain ready when a former source is deleted", async (t) => {
  const { root, service } = await fixture(t);
  const chat = await service.create(root, { creationId: randomUUID() });
  await fs.unlink(path.join(root, "a.md"));
  assert.deepEqual(
    await service.checkConversation(root, chat.id),
    chat.contextIdentity,
  );
});

test("reviewed selections deduplicate folder contents, disclose skips, persist membership and never create chats", async (t) => {
  const { root, service } = await fixture(t);
  await fs.mkdir(path.join(root, "docs"));
  await fs.writeFile(path.join(root, "docs", "c.md"), "GAMMA");
  await fs.writeFile(path.join(root, "docs", "ignored.txt"), "unsupported");
  const preview = await service.previewBoxSelection(root, [
    "a.md",
    "b.md",
    "docs",
    "docs/c.md",
  ]);
  assert.deepEqual(preview.files, ["a.md", "b.md", "docs/c.md"]);
  assert.deepEqual(preview.skipped, ["docs/ignored.txt"]);
  assert.equal(
    (await service.listBoxes(root)).length,
    0,
    "preview and cancelled setup write no box",
  );
  const box = await service.editBox(root, {
    action: "create",
    name: "Selection",
    paths: preview.files,
  });
  const originalIds = box.items.map((item) => item.id);
  await service.editBox(root, { action: "add", id: box.id, paths: ["a.md"] });
  assert.deepEqual(
    (await service.inspectBox(root, box.id)).items.map((item) => item.id),
    originalIds,
  );
  await fs.writeFile(path.join(root, "docs", "later.md"), "LATER");
  assert.equal(
    (await service.inspectBox(root, box.id)).items.length,
    3,
    "later folder matches never expand membership",
  );
  await service.editBox(root, {
    action: "remove",
    id: box.id,
    itemId: originalIds[0],
  });
  assert.equal(
    await fs.readFile(path.join(root, "a.md"), "utf8"),
    "ALPHA evidence",
  );
  const restart = new ChatService({ provider: {}, registry: {} });
  const restored = await restart.inspectBox(root, box.id);
  assert.equal(restored.items.length, 2);
  await fs.rename(path.join(root, "b.md"), path.join(root, "moved.md"));
  assert.equal(
    (await restart.inspectBox(root, box.id)).items[0].status,
    "unavailable",
  );
  await restart.editBox(root, {
    action: "relink",
    id: box.id,
    itemId: restored.items[0].id,
    relativePath: "moved.md",
  });
  assert.equal(
    (await restart.inspectBox(root, box.id)).items[0].id,
    restored.items[0].id,
  );
  assert.equal((await service.list(root)).length, 0);
  await assert.rejects(
    service.editBox(root, {
      action: "create",
      name: "Unsafe",
      paths: ["../escape.md"],
    }),
  );
  await assert.rejects(
    service.editBox(root, {
      action: "create",
      name: "Unsafe",
      paths: ["docs/ignored.txt"],
    }),
  );
});

test("empty boxes persist independently and deletion preserves chat history and original files", async (t) => {
  const { root, service } = await fixture(t);
  const box = await service.editBox(root, {
    action: "create",
    name: "Empty",
    paths: [],
  });
  assert.equal((await service.list(root)).length, 0);
  await service.editBox(root, { action: "add", id: box.id, paths: ["a.md"] });
  const chat = await service.create(root, {
    contextBoxId: box.id,
    creationId: randomUUID(),
  });
  await service.editBox(root, { action: "delete", id: box.id });
  assert.equal((await service.list(root))[0].id, chat.id);
  assert.deepEqual(
    await service.checkConversation(root, chat.id),
    chat.contextIdentity,
  );
  assert.equal(
    await fs.readFile(path.join(root, "a.md"), "utf8"),
    "ALPHA evidence",
  );
});

test("schema-one boxes migrate in memory without rewriting; edits keep stable IDs and preserve corrupt storage", async (t) => {
  const { root, service } = await fixture(t);
  const box = await service.saveBox(root, { name: "Original" });
  const file = path.join(root, ".wonnyy", "context-boxes.json");
  const { items, ...legacy } = box;
  await fs.writeFile(
    file,
    JSON.stringify({ schemaVersion: 1, boxes: [legacy] }),
  );
  const before = await fs.readFile(file, "utf8");
  const migrated = await service.listBoxes(root);
  assert.equal(await fs.readFile(file, "utf8"), before);
  assert.equal(migrated[0].id, box.id);
  const membershipId = migrated[0].items[0].id;
  await service.renameBox(root, { id: box.id, name: "New label" });
  assert.equal((await service.listBoxes(root))[0].items[0].id, membershipId);
  assert.equal(JSON.parse(await fs.readFile(file, "utf8")).schemaVersion, 2);
});

test("a failed Context Box save preserves the previous file and permits an explicit retry", async (t) => {
  const { root, service } = await fixture(t);
  const box = await service.editBox(root, {
    action: "create",
    name: "Durable",
    paths: ["a.md"],
  });
  const file = path.join(root, ".wonnyy", "context-boxes.json"),
    before = await fs.readFile(file, "utf8");
  const rename = fs.rename;
  fs.rename = async (from, to) => {
    if (path.basename(to) === "context-boxes.json")
      throw Object.assign(new Error("Simulated save failure"), {
        code: "EACCES",
      });
    return rename(from, to);
  };
  try {
    await assert.rejects(
      service.editBox(root, { action: "add", id: box.id, paths: ["b.md"] }),
      { code: "MODEL_STORAGE_FAILED" },
    );
    assert.equal(await fs.readFile(file, "utf8"), before);
  } finally {
    fs.rename = rename;
  }
  await service.editBox(root, { action: "add", id: box.id, paths: ["b.md"] });
  assert.equal((await service.inspectBox(root, box.id)).items.length, 2);
  assert.equal((await service.list(root)).length, 0);
});
