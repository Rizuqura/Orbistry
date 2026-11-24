const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { saveWorldViewChip } = require("./worldview-store.cjs");
const {
  createConnector,
  updateConnector,
  loadConnectors,
  deleteConnector,
} = require("./connector-store.cjs");

/** Exercises unrestricted endpoints, atomic semantic edits, conflicts, retries and isolated corrupt records using synthetic metadata. */
test("all ports support independent unlimited relationships without overwriting identities", async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-connectors-"));
  try {
    for (const id of ["a", "b"])
      await saveWorldViewChip(root, {
        id,
        name: id,
        icon: "",
        color: "#262b30",
        tags: [],
        position: { x: 0, y: 0 },
      });
    const originalEntity = await fs.readFile(
      path.join(root, ".wonnyy/worldview/entities/a.md"),
      "utf8",
    );
    const connectors = [];
    for (const sourcePortId of ["north", "east", "south", "west"]) {
      for (const targetPortId of ["north", "east", "south", "west"]) {
        connectors.push({
          id: `${sourcePortId}-${targetPortId}`,
          sourceEntityId: "a",
          sourcePortId,
          targetEntityId: "b",
          targetPortId,
          name: `${sourcePortId} to ${targetPortId}`,
          definition: `Definition ${sourcePortId}-${targetPortId}`,
          direction: targetPortId === "north" ? "undirected" : "directed",
        });
      }
    }
    for (let index = 0; index < 100; index++)
      connectors.push({
        ...connectors[0],
        id: `shared-${index}`,
        name: `Independent ${index}`,
      });
    await Promise.all(
      connectors.map((connector) => createConnector(root, connector)),
    );
    assert.deepEqual(
      (await loadConnectors(root)).connectors.sort((a, b) =>
        a.id.localeCompare(b.id),
      ),
      connectors.sort((a, b) => a.id.localeCompare(b.id)),
    );
    await createConnector(root, connectors[0]);
    await assert.rejects(
      createConnector(root, { ...connectors[0], name: "Overwrite" }),
      /identity/,
    );
    await assert.rejects(
      createConnector(root, {
        ...connectors[0],
        id: "invalid-port",
        sourcePortId: "input",
      }),
    );
    await assert.rejects(
      createConnector(root, {
        ...connectors[0],
        id: "self",
        targetEntityId: "a",
      }),
      /another entity/,
    );
    await assert.rejects(
      createConnector(root, {
        ...connectors[0],
        id: "missing",
        targetEntityId: "absent",
      }),
    );
    await assert.rejects(deleteConnector(root, "../outside"));
    assert.equal(
      await fs.readFile(
        path.join(root, ".wonnyy/worldview/entities/a.md"),
        "utf8",
      ),
      originalEntity,
    );
    const directory = path.join(root, ".wonnyy/worldview/connectors");
    await fs.writeFile(path.join(directory, "broken.json"), "broken");
    const loaded = await loadConnectors(root);
    assert.equal(loaded.issues.length, 1);
    assert.equal(loaded.connectors.length, 116);
    await assert.rejects(
      createConnector(root, { ...connectors[0], id: "broken" }),
    );
    const beforeEdit = connectors[0];
    const edited = {
      ...beforeEdit,
      name: "Edited connection",
      definition: "Revised description\nSecond line",
      direction:
        beforeEdit.direction === "directed" ? "undirected" : "directed",
    };
    assert.deepEqual(await updateConnector(root, edited, beforeEdit), edited);
    assert.deepEqual(await updateConnector(root, edited, beforeEdit), edited);
    await assert.rejects(
      updateConnector(root, { ...edited, name: "Stale overwrite" }, beforeEdit),
      /changed on disk/,
    );
    await assert.rejects(
      updateConnector(
        root,
        {
          ...edited,
          sourcePortId: edited.sourcePortId === "north" ? "south" : "north",
        },
        edited,
      ),
      /entities and ports/,
    );
    await assert.rejects(
      updateConnector(root, { ...edited, id: "new-identity" }, edited),
      /identity/,
    );
    await assert.rejects(
      updateConnector(
        root,
        { ...edited, id: "missing-edit" },
        { ...edited, id: "missing-edit" },
      ),
      /ENOENT/,
    );
    await assert.rejects(
      updateConnector(root, { ...edited, name: "" }, edited),
    );
    const competing = [
      { ...edited, name: "Concurrent A" },
      { ...edited, name: "Concurrent B" },
    ];
    const results = await Promise.allSettled(
      competing.map((value) => updateConnector(root, value, edited)),
    );
    assert.equal(
      results.filter((result) => result.status === "fulfilled").length,
      1,
    );
    assert.equal(
      results.filter((result) => result.status === "rejected").length,
      1,
    );
    const winner = results.find(
      (result) => result.status === "fulfilled",
    ).value;
    const afterEdit = (await loadConnectors(root)).connectors;
    assert.deepEqual(
      afterEdit.find((item) => item.id === beforeEdit.id),
      winner,
    );
    assert.deepEqual(
      afterEdit
        .filter((item) => item.id !== beforeEdit.id)
        .sort((a, b) => a.id.localeCompare(b.id)),
      connectors.filter((item) => item.id !== beforeEdit.id),
    );
    assert.equal(
      await fs.readFile(
        path.join(root, ".wonnyy/worldview/entities/a.md"),
        "utf8",
      ),
      originalEntity,
    );
    await deleteConnector(root, connectors[0].id);
    await deleteConnector(root, connectors[0].id);
    assert.equal((await loadConnectors(root)).connectors.length, 115);
    assert.equal(
      await fs.readFile(path.join(directory, "broken.json"), "utf8"),
      "broken",
    );
  } finally {
    assert.ok(
      path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep),
    );
    await fs.rm(root, { recursive: true, force: true });
  }
});
