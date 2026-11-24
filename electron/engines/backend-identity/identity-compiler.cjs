const fs = require("node:fs/promises");
const path = require("node:path");
const { createHash } = require("node:crypto");
const { TextDecoder } = require("node:util");
const { serialQueue } = require("../../core/persistence/json-store.cjs");
const {
  readWorldViewChip,
} = require("../../domains/entity/worldview-store.cjs");
const {
  readKnowledgeIndex,
} = require("../../domains/knowledge/knowledge-store.cjs");
const { loadConnectors } = require("../../domains/entity/connector-store.cjs");
const { statVaultSource } = require("../../domains/universe/vault-service.cjs");
const { chunkMarkdown } = require("./markdown-chunker.cjs");
const { discoverCapabilities } = require("./capability-registry.cjs");
const { encodeConnections } = require("./connector-encoder.cjs");
const {
  VERSION,
  LIMITS,
  digest,
  idSchema,
  manifestSchema,
} = require("./schema.cjs");
const store = require("./snapshot-store.cjs");
const queues = new Map();
const textExtensions = new Set([".md", ".markdown", ".txt", ".csv"]);

/** Restricts compilation to assigned knowledge documents, excluding credential/config filenames and private-key material by file type. */
function restricted(ref) {
  return (
    ref
      .split("/")
      .some(
        (part) =>
          /^\.env(?:\.|$)/i.test(part) ||
          /^(?:provider-credentials|credentials|tokens|model-settings|vault-settings|agents)\.json$/i.test(
            part,
          ),
      ) || /\.(?:pem|key|pfx|p12)$/i.test(ref)
  );
}
/** Hashes one authorized source in bounded blocks; only basic text is retained temporarily for chunking. Changes during reads reject rather than publishing mixed versions. */
async function inspectSource(root, source, budget) {
  const basic = {
    fingerprintMethod: "metadata-status",
    noteVersion: null,
    sourceId: source.sourceId,
    sourceRef: source.sourceRef,
    filename: source.filename,
    extension: source.extension,
    modifiedAt: null,
    sizeBytes: null,
    chunkCount: 0,
  };
  if (restricted(source.sourceRef))
    return {
      descriptor: {
        ...basic,
        status: "restricted",
        sourceVersion: digest([source.sourceRef, "restricted"]),
      },
    };
  let resolved;
  try {
    resolved = await statVaultSource(root, source.sourceRef);
  } catch {
    return {
      descriptor: {
        ...basic,
        status: source.status === "missing" ? "missing" : "unavailable",
        sourceVersion: digest([source.sourceRef, source.status]),
      },
    };
  }
  if (!resolved.stats.isFile())
    throw new Error("Indexed identity sources must remain regular files.");
  basic.modifiedAt = resolved.stats.mtime.toISOString();
  basic.sizeBytes = resolved.stats.size;
  const textual = textExtensions.has(source.extension.toLowerCase());
  const limit = textual ? LIMITS.textBytes : LIMITS.sourceBytes;
  if (resolved.stats.size > limit)
    return {
      descriptor: {
        ...basic,
        status: "too-large",
        sourceVersion: digest([
          source.sourceRef,
          basic.modifiedAt,
          basic.sizeBytes,
          "too-large",
        ]),
      },
    };
  budget.bytes += resolved.stats.size;
  if (budget.bytes > LIMITS.totalBytes)
    throw new Error(
      "Indexed collection exceeds the 128 MiB identity read limit.",
    );
  const hash = createHash("sha256"),
    blocks = [];
  const file = await fs.open(resolved.absolutePath, "r");
  let count = 0;
  try {
    const opened = await file.stat();
    if (
      opened.ino !== resolved.stats.ino ||
      opened.size !== resolved.stats.size
    )
      throw new Error("Source changed while compiling. Retry generation.");
    for await (const block of file.createReadStream({
      autoClose: false,
      highWaterMark: 65536,
    })) {
      count += block.length;
      if (count > limit)
        throw new Error("Source grew past the identity read limit.");
      hash.update(block);
      if (textual) blocks.push(block);
    }
    const after = await statVaultSource(root, source.sourceRef);
    if (
      after.stats.ino !== opened.ino ||
      after.stats.mtimeMs !== opened.mtimeMs ||
      after.stats.size !== count
    )
      throw new Error("Source changed while compiling. Retry generation.");
  } finally {
    await file.close();
  }
  const descriptor = {
    ...basic,
    fingerprintMethod: "sha256-content",
    status: textual ? "indexed" : "reference-only",
    sourceVersion: hash.digest("hex"),
  };
  let content;
  if (textual) {
    try {
      content = new TextDecoder("utf-8", {
        fatal: true,
        ignoreBOM: true,
      }).decode(Buffer.concat(blocks));
    } catch {
      descriptor.status = "reference-only";
    }
  }
  return { descriptor, content };
}
/** Captures existing applied-index declarations and canonical entity metadata without creating a parallel indexing system. Source bodies are read sequentially, not accumulated as a collection. */
async function capture(root, entityId, onSource) {
  idSchema.parse(entityId);
  const chip = await readWorldViewChip(root, entityId);
  const index = await readKnowledgeIndex(root, entityId);
  const entity = {
    id: chip.id,
    name: chip.name,
    category: chip.category ?? null,
    tags: [...chip.tags],
    createdAt: chip.createdAt ?? null,
  };
  const referenced = [
    ...new Set(
      index.menus.flatMap((menu) => [
        ...menu.sourceIds,
        ...(menu.carousels ?? []).flatMap((group) => group.sourceIds),
      ]),
    ),
  ].sort();
  if (referenced.length > LIMITS.sources)
    throw new Error(
      "Identity compilation supports up to 256 applied source references.",
    );
  const assignments = new Map(
    chip.sources.map((source) => [source.sourceId, source]),
  );
  const sources = [],
    budget = { bytes: 0 };
  for (const sourceId of referenced) {
    const assigned = assignments.get(sourceId);
    const result = assigned
      ? await inspectSource(root, assigned, budget)
      : {
          descriptor: {
            fingerprintMethod: "metadata-status",
            noteVersion: null,
            sourceId,
            sourceRef: sourceId,
            filename: path.posix.basename(sourceId),
            extension: path.posix.extname(sourceId),
            modifiedAt: null,
            sizeBytes: null,
            chunkCount: 0,
            status: "unavailable",
            sourceVersion: digest([sourceId, "unassigned"]),
          },
        };
    const notes = (index.sourceNotes ?? []).filter(
      (note) => note.sourceId === sourceId,
    );
    if (
      notes.length > 1 ||
      notes.some(
        (note) =>
          typeof note.text !== "string" ||
          Buffer.byteLength(note.text, "utf8") > 16000,
      )
    )
      throw new Error("Source notes are invalid for identity compilation.");
    if (
      notes[0]?.text &&
      ["indexed", "reference-only"].includes(result.descriptor.status)
    ) {
      result.note = notes[0].text;
      result.descriptor.noteVersion = digest(notes[0].text);
    }
    if (onSource) await onSource(result);
    sources.push(result.descriptor);
  }
  const capabilities = discoverCapabilities(entityId, index);
  const relationships = await loadConnectors(root);
  const connections = encodeConnections(
    entityId,
    relationships.connectors,
    relationships.issues.length,
  );
  const fingerprint = digest({
    entity,
    applied: index.applied,
    priceSymbol: index.priceSymbol ?? null,
    notes: index.sourceNotes ?? [],
    assignments: [...assignments.keys()].sort(),
    sources: sources.map(({ chunkCount, ...value }) => value),
    capabilities,
    connections,
  });
  return { entity, index, sources, capabilities, connections, fingerprint };
}
/** Compiles only on explicit invocation. Identical inputs reuse immutable versions and unchanged chunks; concurrent changes leave the current snapshot intact. */
async function generate(root, entityId) {
  idSchema.parse(entityId);
  const key = `${await fs.realpath(root)}:${entityId}`;
  if (!queues.has(key)) queues.set(key, { run: serialQueue(), pending: 0 });
  const queue = queues.get(key);
  queue.pending++;
  return queue
    .run(async function compileIdentity() {
      try {
        const references = [],
          log = [];
        const input = await capture(
          root,
          entityId,
          async function encodeSource({ descriptor, content, note }) {
            const inputs = [
              ...(content !== undefined
                ? [
                    {
                      body: content,
                      version: descriptor.sourceVersion,
                      origin: "source",
                      markdown: [".md", ".markdown"].includes(
                        descriptor.extension.toLowerCase(),
                      ),
                    },
                  ]
                : []),
              ...(note !== undefined
                ? [
                    {
                      body: note,
                      version: descriptor.noteVersion,
                      origin: "entity-note",
                      markdown: false,
                    },
                  ]
                : []),
            ];
            for (const input of inputs) {
              for (const chunk of chunkMarkdown(input.body, {
                entityId,
                sourceId: descriptor.sourceId,
                sourceVersion: input.version,
                origin: input.origin,
                markdown: input.markdown,
              })) {
                if (references.length >= LIMITS.chunks)
                  throw new Error(
                    "Identity exceeds the 2048-chunk limit. Reduce the applied source collection.",
                  );
                await store.putChunk(root, chunk);
                const { content: body, trust, ...reference } = chunk;
                references.push(reference);
                descriptor.chunkCount++;
              }
            }
            if (descriptor.status !== "indexed")
              log.push({
                level: "warning",
                code: descriptor.status,
                sourceId: descriptor.sourceId,
                message:
                  descriptor.status === "reference-only"
                    ? "Source is fingerprinted and referenced; v1 chunking supports UTF-8 Markdown/basic text only."
                    : "Source was not encoded. Review its availability, file type or size.",
              });
          },
        );
        if (input.connections.unavailableCount)
          log.push({
            level: "warning",
            code: "connections-incomplete",
            message:
              "Some relationship records could not be read. Input/output lists may be incomplete; review WorldView connector issues.",
          });
        const version = digest([
          input.fingerprint,
          VERSION,
          LIMITS.chunkTokens,
        ]);
        const existing = await store.readVersion(root, entityId, version, true);
        const latest = await capture(root, entityId);
        if (latest.fingerprint !== input.fingerprint)
          throw new Error(
            "Entity or sources changed during compilation. Regenerate from the current index.",
          );
        log.push({
          level: "info",
          code: "compiled",
          message: `${input.sources.length} sources processed; ${references.length} chunks; ${input.capabilities.length} explicitly declared capabilities. No capability was executed.`,
        });
        const manifest =
          existing ??
          manifestSchema.parse({
            schemaVersion: 1,
            compilerVersion: VERSION,
            entityId,
            identityVersion: version,
            sourceFingerprint: input.fingerprint,
            compiledAt: new Date().toISOString(),
            status: log.some((entry) => entry.level === "warning")
              ? "partial"
              : "complete",
            entity: input.entity,
            indexedMenus: input.index.menus.map((menu) => ({
              id: menu.id,
              title: menu.title,
              sourceIds: [
                ...menu.sourceIds,
                ...(menu.carousels ?? []).flatMap((group) => group.sourceIds),
              ],
            })),
            sources: input.sources,
            connections: input.connections,
            knowledge: {
              chunkCount: references.length,
              tokenEstimate: references.reduce(
                (sum, chunk) => sum + chunk.tokenEstimate,
                0,
              ),
              chunkIndexHash: digest(references),
              retrieval: "entity-scoped-chunks",
            },
            capabilities: input.capabilities.map(
              ({
                capabilityId,
                engineId,
                version,
                operation,
                availability,
                sourceId,
                symbol,
              }) => ({
                capabilityId,
                engineId,
                version,
                operation,
                availability,
                sourceId,
                symbol,
              }),
            ),
            capabilityRegistryHash: digest(input.capabilities),
            log,
          });
        await store.publish(root, manifest, references, input.capabilities);
        const lastAttempt = {
          at: new Date().toISOString(),
          outcome: existing ? "reused" : "succeeded",
          identityVersion: manifest.identityVersion,
          error: null,
        };
        await store.recordAttempt(root, entityId, lastAttempt);
        return {
          status: "fresh",
          manifest,
          reused: Boolean(existing),
          currentFingerprint: input.fingerprint,
          lastAttempt,
        };
      } catch (error) {
        const message = error.code
          ? "Identity compilation could not access its authorized source or engine storage."
          : String(error.message).slice(0, 2000);
        try {
          await store.recordAttempt(root, entityId, {
            at: new Date().toISOString(),
            outcome: "failed",
            identityVersion: null,
            error: message,
          });
        } catch {
          throw new Error(
            "Identity compilation failed and its attempt log could not be saved. Existing snapshots were preserved.",
          );
        }
        throw new Error(message);
      }
    })
    .finally(function releaseCompilerQueue() {
      if (--queue.pending === 0) queues.delete(key);
    });
}
/** Inspects freshness on demand using current metadata and source fingerprints; it never regenerates or executes capabilities. */
async function status(root, entityId) {
  const input = await capture(root, entityId);
  const manifest = await store.current(root, entityId);
  return {
    status: manifest
      ? manifest.sourceFingerprint === input.fingerprint &&
        manifest.compilerVersion === VERSION
        ? "fresh"
        : "stale"
      : "missing",
    manifest,
    currentFingerprint: input.fingerprint,
    lastAttempt: await store.lastAttempt(root, entityId),
  };
}
module.exports = { capture, generate, status };
