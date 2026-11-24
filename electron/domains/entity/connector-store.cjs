const fs = require("node:fs/promises");
const path = require("node:path");
const { z } = require("zod");
const {
  rejectSymlink,
  writeTextAtomic,
} = require("../../core/persistence/json-store.cjs");
const {
  withWorldViewMutation,
  readWorldViewChip,
} = require("./worldview-store.cjs");
const identifier = z.string().regex(/^[a-zA-Z0-9_-]{1,128}$/);
const port = z.enum(["north", "east", "south", "west"]);
const connectorSchema = z
  .object({
    id: identifier,
    sourceEntityId: identifier,
    sourcePortId: port,
    targetEntityId: identifier,
    targetPortId: port,
    name: z.string().trim().min(1).max(160),
    definition: z.string().max(16000),
    direction: z.enum(["directed", "undirected"]),
  })
  .strict()
  .refine(
    /** Requires separate entities while accepting every combination of geometric port IDs. */
    (value) => value.sourceEntityId !== value.targetEntityId,
    "Choose another entity.",
  );

/** Resolves a protected relationship record inside the existing WorldView metadata namespace. Invalid IDs/links throw. */
async function connectorPath(root, id) {
  if (id !== undefined) identifier.parse(id);
  let directory = await fs.realpath(root);
  for (const part of [".wonnyy", "worldview", "connectors"]) {
    directory = path.join(directory, part);
    await rejectSymlink(directory);
  }
  const target =
    id === undefined ? directory : path.join(directory, `${id}.json`);
  await rejectSymlink(target);
  return target;
}

/** Reads and validates one bounded record, rejecting corrupt or misidentified metadata. */
async function readConnector(root, id) {
  const target = await connectorPath(root, id);
  const stats = await fs.stat(target);
  if (!stats.isFile() || stats.size > 128 * 1024)
    throw new Error("Invalid relationship metadata size.");
  const original = await fs.readFile(target, "utf8");
  const connector = connectorSchema.parse(JSON.parse(original));
  if (connector.id !== id)
    throw new Error("Relationship identity does not match its record.");
  return { connector, original, target };
}

/** Loads every independent relationship, isolating damaged records without imposing collection capacity or endpoint occupancy. */
async function loadConnectors(root) {
  /** Reads a consistent relationship collection using the existing Universe mutation queue. */
  return withWorldViewMutation(root, async function readRelationships() {
    const directory = await connectorPath(root);
    let entries;
    try {
      entries = await fs.readdir(directory);
    } catch (error) {
      if (error.code === "ENOENT") return { connectors: [], issues: [] };
      throw error;
    }
    const connectors = [];
    const issues = [];
    for (const entry of entries.sort()) {
      if (!entry.endsWith(".json")) continue;
      try {
        connectors.push(
          (await readConnector(root, entry.slice(0, -5))).connector,
        );
      } catch (error) {
        issues.push({ index: `connectors/${entry}`, message: error.message });
      }
    }
    return { connectors, issues };
  });
}

/** Creates one immutable identity after validating both entities. Exact retries succeed, ID collisions reject, all other records survive. */
async function createConnector(root, input) {
  const connector = connectorSchema.parse(input);
  /** Validates live entities and atomically creates only the requested relationship record. */
  return withWorldViewMutation(root, async function writeRelationship() {
    await readWorldViewChip(root, connector.sourceEntityId);
    await readWorldViewChip(root, connector.targetEntityId);
    const target = await connectorPath(root, connector.id);
    try {
      const existing = await readConnector(root, connector.id);
      if (JSON.stringify(existing.connector) === JSON.stringify(connector))
        return existing.connector;
      throw new Error("A different relationship already uses this identity.");
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
    await writeTextAtomic(
      target,
      `${JSON.stringify(connector, null, 2)}\n`,
      null,
    );
    return connector;
  });
}

/** Updates semantic fields of one saved connection atomically. Expected prior metadata rejects stale edits, while exact retries succeed. Invalid endpoints or missing records throw. */
async function updateConnector(root, input, previousInput) {
  const connector = connectorSchema.parse(input);
  const previous = connectorSchema.parse(previousInput);
  if (connector.id !== previous.id)
    throw new Error("Connection identity cannot be changed.");
  /** Serializes the edit with entity/relationship mutations and preserves the saved geometric attachment points. */
  return withWorldViewMutation(root, async function editRelationship() {
    const existing = await readConnector(root, connector.id);
    for (const field of [
      "sourceEntityId",
      "sourcePortId",
      "targetEntityId",
      "targetPortId",
    ])
      if (connector[field] !== existing.connector[field])
        throw new Error("Connection editing preserves its entities and ports.");
    if (JSON.stringify(existing.connector) === JSON.stringify(connector))
      return existing.connector;
    if (JSON.stringify(existing.connector) !== JSON.stringify(previous))
      throw new Error(
        "Connection changed on disk. Reload WorldView before editing it again.",
      );
    await readWorldViewChip(root, connector.sourceEntityId);
    await readWorldViewChip(root, connector.targetEntityId);
    await writeTextAtomic(
      existing.target,
      `${JSON.stringify(connector, null, 2)}\n`,
      existing.original,
    );
    return connector;
  });
}

/** Deletes only the specified relationship metadata, allowing safe retries without touching entities or Universe sources. */
async function deleteConnector(root, id) {
  /** Serializes targeted relationship deletion with other WorldView metadata writes. */
  return withWorldViewMutation(root, async function removeRelationship() {
    const target = await connectorPath(root, id);
    try {
      await fs.unlink(target);
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  });
}
module.exports = {
  loadConnectors,
  createConnector,
  updateConnector,
  deleteConnector,
};
