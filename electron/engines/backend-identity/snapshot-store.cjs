const fs = require("node:fs/promises");
const path = require("node:path");
const { z } = require("zod");
const {
  rejectSymlink,
  writeJson,
} = require("../../core/persistence/json-store.cjs");
const {
  idSchema,
  hashSchema,
  manifestSchema,
  capabilitySchema,
  chunkReference,
  chunkSchema,
  LIMITS,
  digest,
  definition,
} = require("./schema.cjs");
const pointerSchema = z
  .object({
    schemaVersion: z.literal(1),
    identityVersion: hashSchema,
    manifestHash: hashSchema,
  })
  .strict();
const attemptSchema = z
  .object({
    at: z.string().datetime(),
    outcome: z.enum(["succeeded", "reused", "failed"]),
    identityVersion: hashSchema.nullable(),
    error: z.string().max(2000).nullable(),
  })
  .strict();

/** Resolves only fixed engine paths and validated ID/hash segments, rejecting links at every existing parent. */
async function location(root, ...parts) {
  let target = await fs.realpath(root);
  for (const part of [".engine", "backend-identity", ...parts]) {
    if (!/^[a-zA-Z0-9_.-]+$/.test(part) || part === "." || part === "..")
      throw new Error("Invalid identity storage segment.");
    target = path.join(target, part);
    await rejectSymlink(target);
  }
  return target;
}
/** Reads bounded engine-owned JSON. Missing optional records remain absent; corruption is explicit and never silently overwritten. */
async function read(root, parts, schema, missing = false) {
  const file = await location(root, ...parts);
  try {
    const stat = await fs.stat(file);
    if (!stat.isFile() || stat.size > LIMITS.manifestBytes)
      throw new Error("Identity record exceeds its storage limit.");
    return schema.parse(JSON.parse(await fs.readFile(file, "utf8")));
  } catch (error) {
    if (missing && error.code === "ENOENT") return null;
    throw new Error(
      "Backend identity record is missing or invalid. Existing snapshots were preserved.",
    );
  }
}
/** Returns a validated immutable version, without exposing absolute filesystem paths in its public manifest. */
async function readVersion(root, entityId, version, missing = false) {
  idSchema.parse(entityId);
  hashSchema.parse(version);
  const manifest = await read(
    root,
    ["entities", entityId, "snapshots", version, "manifest.json"],
    manifestSchema,
    missing,
  );
  if (
    manifest &&
    (manifest.entityId !== entityId ||
      manifest.entity.id !== entityId ||
      manifest.identityVersion !== version ||
      digest([
        manifest.sourceFingerprint,
        manifest.compilerVersion,
        LIMITS.chunkTokens,
      ]) !== version)
  )
    throw new Error("Identity snapshot scope mismatch.");
  return manifest;
}
/** Follows an integrity-checked current pointer. No record is created just by opening an inspector. */
async function current(root, entityId) {
  idSchema.parse(entityId);
  const pointer = await read(
    root,
    ["entities", entityId, "current.json"],
    pointerSchema,
    true,
  );
  if (!pointer) return null;
  const manifest = await readVersion(root, entityId, pointer.identityVersion);
  if (digest(manifest) !== pointer.manifestHash)
    throw new Error("Identity manifest integrity check failed.");
  return manifest;
}
/** Retrieves compact chunk descriptors or full capability contracts from an immutable, hash-checked snapshot. */
async function index(root, manifest, kind) {
  const capabilities = kind === "capabilities";
  const schema = z
    .array(capabilities ? capabilitySchema : chunkReference)
    .max(capabilities ? 1000 : LIMITS.chunks);
  const value = await read(
    root,
    [
      "entities",
      manifest.entityId,
      "snapshots",
      manifest.identityVersion,
      `${capabilities ? "capabilities" : "chunks"}.json`,
    ],
    schema,
  );
  if (
    digest(value) !==
      (capabilities
        ? manifest.capabilityRegistryHash
        : manifest.knowledge.chunkIndexHash) ||
    value.some((item) => item.entityId !== manifest.entityId)
  )
    throw new Error("Identity index integrity or scope check failed.");
  return value;
}
/** Reads one content-addressed chunk after its manifest membership was checked by the runtime. */
async function getChunk(root, entityId, reference) {
  idSchema.parse(entityId);
  hashSchema.parse(reference.chunkId);
  const chunk = await read(
    root,
    ["entities", entityId, "chunks", `${reference.chunkId}.json`],
    chunkSchema,
  );
  const { content, trust, ...descriptor } = chunk;
  if (
    chunk.entityId !== entityId ||
    digest(content) !== reference.contentHash ||
    digest(descriptor) !== digest(reference)
  )
    throw new Error("Knowledge chunk integrity or entity scope check failed.");
  return chunk;
}
/** Writes a new content-addressed chunk once, reusing validated unchanged knowledge across snapshot versions. */
async function putChunk(root, chunk) {
  const parts = ["entities", chunk.entityId, "chunks", `${chunk.chunkId}.json`];
  const existing = await read(root, parts, chunkSchema, true);
  if (existing) {
    if (digest(existing) !== digest(chunk))
      throw new Error(
        "Existing knowledge chunk changed. Snapshot was not overwritten.",
      );
    return;
  }
  await writeJson(await location(root, ...parts), chunk);
}
/** Publishes metadata only after all validated chunks and both indexes are durable. Existing versions remain immutable. */
async function publish(root, manifest, chunks, capabilities) {
  manifestSchema.parse(manifest);
  const size = [manifest, chunks, capabilities].some(
    (value) => Buffer.byteLength(JSON.stringify(value)) > LIMITS.manifestBytes,
  );
  if (size)
    throw new Error("Identity metadata exceeds its bounded snapshot limit.");
  const parts = [
    "entities",
    manifest.entityId,
    "snapshots",
    manifest.identityVersion,
  ];
  const existing = await readVersion(
    root,
    manifest.entityId,
    manifest.identityVersion,
    true,
  );
  if (!existing) {
    await writeJson(await location(root, ...parts, "chunks.json"), chunks);
    await writeJson(
      await location(root, ...parts, "capabilities.json"),
      capabilities,
    );
    await writeJson(await location(root, ...parts, "manifest.json"), manifest);
  } else {
    if (existing.sourceFingerprint !== manifest.sourceFingerprint)
      throw new Error("Immutable identity version mismatch.");
    await index(root, existing, "chunks");
    await index(root, existing, "capabilities");
    manifest = existing;
  }
  const pointer = await read(
    root,
    ["entities", manifest.entityId, "current.json"],
    pointerSchema,
    true,
  );
  if (
    pointer?.identityVersion === manifest.identityVersion &&
    pointer.manifestHash === digest(manifest)
  )
    return manifest;
  const modules = {};
  for (const file of [
    "schema.cjs",
    "markdown-chunker.cjs",
    "connector-encoder.cjs",
    "snapshot-store.cjs",
    "identity-compiler.cjs",
    "capability-registry.cjs",
    "identity-runtime.cjs",
  ])
    modules[file] = digest(await fs.readFile(path.join(__dirname, file)));
  await writeJson(await location(root, "engine_manifest.json"), {
    schema_version: 1,
    engine_id: definition.id,
    engine_version: definition.version,
    runtime: "application-bundled",
    operations: definition.operations,
    modules,
  });
  await writeJson(
    await location(root, "entities", manifest.entityId, "current.json"),
    {
      schemaVersion: 1,
      identityVersion: manifest.identityVersion,
      manifestHash: digest(manifest),
    },
  );
  return manifest;
}
/** Records the latest explicit compilation attempt separately so a failure cannot replace a good immutable snapshot. */
async function recordAttempt(root, entityId, attempt) {
  idSchema.parse(entityId);
  await writeJson(
    await location(root, "entities", entityId, "last-attempt.json"),
    attemptSchema.parse(attempt),
  );
}
/** Returns only the most recent manual attempt; this read does not create metadata or compile anything. */
async function lastAttempt(root, entityId) {
  idSchema.parse(entityId);
  return read(
    root,
    ["entities", entityId, "last-attempt.json"],
    attemptSchema,
    true,
  );
}
module.exports = {
  location,
  read,
  current,
  readVersion,
  index,
  getChunk,
  putChunk,
  publish,
  recordAttempt,
  lastAttempt,
};
