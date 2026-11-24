const fs = require("node:fs/promises");
const path = require("node:path");
const { randomUUID } = require("node:crypto");
const { z } = require("zod");
const {
  rejectSymlink,
  writeTextAtomic,
  safeDirectory,
  serialQueue,
} = require("./core/persistence/json-store.cjs");
const { statVaultSource } = require("./domains/universe/vault-service.cjs");
const {
  resolveKnowledgeCarousel,
  resolveKnowledgeSource,
} = require("./domains/knowledge/knowledge-store.cjs");
const { recognizeFile } = require("./local-ocr.cjs");
const parser = require("./engines/image-parser/parser.cjs");
const knowledgeSchema = z
  .object({
    parser: z.literal("image-parser"),
    parserVersion: z.literal(parser.PARSER_VERSION),
    cacheKey: z.string().regex(/^[a-f0-9]{64}$/),
    sourceHash: z.string().regex(/^sha256:[a-f0-9]{64}$/),
    format: z.enum(["png", "jpeg"]),
    width: z.number().int().positive().max(16384),
    height: z.number().int().positive().max(16384),
    sizeBytes: z.number().int().nonnegative().max(parser.MAX_IMAGE_BYTES),
    extractedText: z.string().max(1024 * 1024),
    description: z.string().min(1).max(32768).nullable(),
    descriptionMethod: z
      .object({
        type: z.literal("vision"),
        adapterId: z.string().min(1),
        adapterVersion: z.string().min(1),
      })
      .nullable(),
    visualInterpretationAvailable: z.boolean(),
    method: z.string().min(1),
    status: z.enum(["completed", "partial"]),
    processedAt: z.string().datetime(),
    warnings: z.array(z.string()),
    errors: z.array(z.string()),
    cacheHit: z.boolean(),
    configuration: z.object({
      ocr: z.boolean(),
      ocrAdapter: z.string().nullable(),
      visionAdapter: z.string().nullable(),
    }),
  })
  .refine(
    /** Enforces resource bounds and attributed visual knowledge in derived records. */ (
      value,
    ) =>
      value.width * value.height <= parser.MAX_IMAGE_PIXELS &&
      value.visualInterpretationAvailable === (value.description !== null) &&
      (value.description === null || value.descriptionMethod !== null),
  );

/** Creates an image Engine host. Trusted adapters are injected by application code, independently of UI/agent permissions. */
function createImageParserService({
  ocrAdapter = process.platform === "win32"
    ? { id: "windows-ocr", version: "1", recognize: recognizeFile }
    : null,
  visionAdapter = null,
} = {}) {
  const jobs = new Map();
  const activeGroups = new Map();
  const computed = new Map();
  const enqueue = serialQueue();
  /** Resolves fixed engine-owned paths and rejects linked parents or targets before any derived writes. */
  async function enginePath(root, ...parts) {
    let target = await fs.realpath(root);
    for (const part of [".engine", "image-parser", ...parts]) {
      target = path.join(target, part);
      await rejectSymlink(target);
    }
    return target;
  }
  /** Reads a bounded immutable image snapshot through existing Universe containment checks. Returns bytes and source metadata without OCR. */
  async function readImage(root, sourceRef) {
    const source = await statVaultSource(root, sourceRef);
    if (
      !source.stats.isFile() ||
      ![".png", ".jpg", ".jpeg"].includes(path.extname(sourceRef).toLowerCase())
    )
      throw new Error("Choose an assigned PNG or JPEG image.");
    if (source.stats.size > parser.MAX_IMAGE_BYTES)
      throw new Error("Image must be within 25 MB.");
    const file = await fs.open(source.absolutePath, "r");
    let bytes;
    try {
      const stats = await file.stat();
      const confirmed = await statVaultSource(root, sourceRef);
      if (
        confirmed.absolutePath !== source.absolutePath ||
        confirmed.stats.dev !== stats.dev ||
        confirmed.stats.ino !== stats.ino
      )
        throw new Error("Image reference changed while opening. Retry.");
      if (stats.size > parser.MAX_IMAGE_BYTES)
        throw new Error("Image must be within 25 MB.");
      bytes = Buffer.alloc(stats.size);
      let offset = 0;
      while (offset < bytes.length) {
        const read = await file.read(
          bytes,
          offset,
          bytes.length - offset,
          offset,
        );
        if (!read.bytesRead) break;
        offset += read.bytesRead;
      }
      const after = await file.stat();
      if (
        offset !== bytes.length ||
        after.size !== stats.size ||
        after.mtimeMs !== stats.mtimeMs
      )
        throw new Error(
          "Image changed while it was being read. Retry parsing.",
        );
    } finally {
      await file.close();
    }
    const metadata = parser.imageMetadata(bytes);
    return { bytes, metadata, sourceRef };
  }
  /** Captures every processing choice and adapter identity for compatible cache reuse. */
  function configuration(ocr) {
    return {
      ocr,
      ocrAdapter:
        ocr && ocrAdapter ? `${ocrAdapter.id}@${ocrAdapter.version}` : null,
      visionAdapter: visionAdapter
        ? `${visionAdapter.id}@${visionAdapter.version}`
        : null,
    };
  }
  /** Reads optional bounded structured cache data. Corruption throws for visible repair, and missing data yields null. */
  async function readCache(root, key) {
    const target = await enginePath(root, "cache", `${key}.json`);
    try {
      const stats = await fs.stat(target);
      if (!stats.isFile() || stats.size > 8 * 1024 * 1024)
        throw new Error("Invalid image knowledge cache size.");
      const checked = knowledgeSchema.safeParse(
        JSON.parse(await fs.readFile(target, "utf8")),
      );
      if (!checked.success || checked.data.cacheKey !== key)
        throw new Error("Invalid image knowledge cache. Reparse this image.");
      return checked.data;
    } catch (error) {
      if (error.code === "ENOENT") return null;
      throw error;
    }
  }
  /** Materializes the actual bundled Engine module and manifest using trusted application code, then caches structured output atomically. */
  async function saveCache(root, key, result) {
    const code = await fs.readFile(
      path.join(__dirname, "engines/image-parser/parser.cjs"),
      "utf8",
    );
    await writeTextAtomic(await enginePath(root, "parser.cjs"), code);
    await writeTextAtomic(
      await enginePath(root, "manifest.json"),
      `${JSON.stringify({ name: "image-parser", version: parser.PARSER_VERSION, runtime: "application-bundled", formats: ["png", "jpeg"], operations: ["metadata", "local-ocr"], visionAdapterConfigured: Boolean(visionAdapter) }, null, 2)}\n`,
    );
    await writeTextAtomic(
      await enginePath(root, "cache", `${key}.json`),
      `${JSON.stringify(result)}\n`,
    );
  }
  /** Authorizes a current applied group membership and current entity assignment before accessing an original. */
  async function authorize(root, entityId, carouselId, sourceId) {
    const group = await resolveKnowledgeCarousel(root, entityId, carouselId);
    if (!group.sourceIds.includes(sourceId))
      throw new Error("Source is outside this applied carousel.");
    return resolveKnowledgeSource(root, entityId, sourceId);
  }
  /** Hydrates cached shared computation with this authorized reference's stable ID/path. */
  function referenceResult(result, source) {
    return result
      ? { ...result, sourceId: source.sourceId, sourceRef: source.sourceRef }
      : null;
  }
  /** Retrieves valid knowledge by actual content hash without invoking OCR or vision. Can be called independently of the Knowledge Card UI. */
  async function getKnowledge(
    root,
    entityId,
    carouselId,
    sourceId,
    { ocr = true } = {},
  ) {
    const source = await authorize(root, entityId, carouselId, sourceId);
    const image = await readImage(root, source.sourceRef);
    const key = parser.imageCacheKey(image.bytes, configuration(ocr));
    const result =
      computed.get(`${await fs.realpath(root)}:${key}`) ??
      (await readCache(root, key));
    return referenceResult(
      result ? { ...result, cacheHit: true } : null,
      source,
    );
  }
  /** Returns a resource-bounded original slide for immediate rendering, independent of parsing success/cache availability. */
  async function preview(root, entityId, carouselId, sourceId) {
    const source = await authorize(root, entityId, carouselId, sourceId);
    const image = await readImage(root, source.sourceRef);
    return {
      name: source.filename,
      sourceId,
      format: image.metadata.format,
      dataUrl: `data:image/${image.metadata.format};base64,${image.bytes.toString("base64")}`,
    };
  }
  /** Parses one authorized source snapshot explicitly, reusing compatible cache across entities and guarding cancellation/source changes. */
  async function processSource(
    root,
    entityId,
    carouselId,
    sourceId,
    { ocr = true, force = false, signal } = {},
  ) {
    const source = await authorize(root, entityId, carouselId, sourceId);
    const image = await readImage(root, source.sourceRef);
    const config = configuration(ocr);
    const key = parser.imageCacheKey(image.bytes, config);
    const warnings = [];
    if (!force) {
      try {
        const cached =
          computed.get(`${await fs.realpath(root)}:${key}`) ??
          (await readCache(root, key));
        if (cached)
          return referenceResult({ ...cached, cacheHit: true }, source);
      } catch (error) {
        warnings.push(error.message);
      }
    }
    const temporary = await enginePath(
      root,
      "work",
      `${randomUUID()}.${image.metadata.format === "png" ? "png" : "jpg"}`,
    );
    await safeDirectory(path.dirname(temporary));
    await fs.writeFile(temporary, image.bytes, { flag: "wx" });
    try {
      const result = await parser.parseImage(image.bytes, {
        snapshotPath: temporary,
        ocr,
        ocrAdapter,
        visionAdapter,
        signal,
      });
      if (signal?.aborted) throw new Error("Image parsing was cancelled.");
      await authorize(root, entityId, carouselId, sourceId);
      const current = await readImage(root, source.sourceRef);
      if (parser.imageCacheKey(current.bytes, config) !== key)
        throw new Error(
          "Source changed during parsing. Parse the updated image again.",
        );
      const saved = {
        ...result,
        configuration: config,
        cacheKey: key,
        cacheHit: false,
        warnings: [...result.warnings, ...warnings],
      };
      computed.set(`${await fs.realpath(root)}:${key}`, saved);
      try {
        await saveCache(root, key, saved);
      } catch (error) {
        saved.warnings.push(`Knowledge could not be cached. ${error.message}`);
      }
      return referenceResult(saved, source);
    } finally {
      await fs.unlink(temporary);
    }
  }
  /** Returns a serializable job snapshot, excluding cancellation handles and internal root paths. */
  function snapshot(job) {
    return {
      id: job.id,
      entityId: job.entityId,
      carouselId: job.carouselId,
      status: job.status,
      entries: [...job.entries],
    };
  }
  /** Aggregates terminal per-image states without treating usable partial metadata as a total failure. */
  function completedStatus(entries) {
    return entries.every((entry) => entry.status === "completed")
      ? "completed"
      : entries.every((entry) => entry.status === "failed")
        ? "failed"
        : "partial";
  }
  /** Starts a bounded sequential background job immediately; repeated starts attach to its existing active identity. */
  async function start(rootPath, entityId, carouselId, options = {}) {
    if (
      (options.ocr !== undefined && typeof options.ocr !== "boolean") ||
      (options.force !== undefined && typeof options.force !== "boolean")
    )
      throw new Error("Invalid image parsing options.");
    const root = await fs.realpath(rootPath);
    const group = await resolveKnowledgeCarousel(root, entityId, carouselId);
    const groupKey = JSON.stringify([root, entityId, carouselId]);
    const existing = jobs.get(activeGroups.get(groupKey));
    if (existing?.status === "processing") {
      if (
        JSON.stringify(group.sourceIds) ===
        JSON.stringify(existing.entries.map((entry) => entry.sourceId))
      )
        return snapshot(existing);
      existing.controller.abort();
    }
    if (existing) jobs.delete(existing.id);
    const job = {
      id: randomUUID(),
      root,
      entityId,
      carouselId,
      status: "processing",
      controller: new AbortController(),
      entries: group.sourceIds.map((sourceId) => ({
        sourceId,
        status: "not-parsed",
        result: null,
        error: "",
      })),
    };
    jobs.set(job.id, job);
    activeGroups.set(groupKey, job.id);
    void enqueue(
      /** Processes each registered image without holding the entity mutation queue or blocking the UI. */ async function processJob() {
        try {
          for (let index = 0; index < job.entries.length; index++) {
            const entry = job.entries[index];
            if (job.controller.signal.aborted) {
              job.entries[index] = {
                ...entry,
                status: "failed",
                error: "Parsing cancelled.",
              };
              continue;
            }
            job.entries[index] = { ...entry, status: "processing" };
            try {
              const result = await processSource(
                root,
                entityId,
                carouselId,
                entry.sourceId,
                {
                  ocr: options.ocr !== false,
                  force: options.force === true,
                  signal: job.controller.signal,
                },
              );
              job.entries[index] = { ...entry, status: result.status, result };
            } catch (error) {
              job.entries[index] = {
                ...entry,
                status: "failed",
                error: error.message,
              };
            }
          }
        } finally {
          job.status = completedStatus(job.entries);
        }
      },
    ).catch(
      /** Surfaces unexpected scheduler failures in retrievable job state. */ (
        error,
      ) => {
        job.status = "failed";
        job.entries = job.entries.map((entry) => ({
          ...entry,
          status: "failed",
          error: error.message,
        }));
      },
    );
    return snapshot(job);
  }
  /** Retrieves an authorized background status for this root/entity/group, including results after the card is reopened. */
  async function status(rootPath, entityId, carouselId) {
    const root = await fs.realpath(rootPath);
    const group = await resolveKnowledgeCarousel(root, entityId, carouselId);
    const job = jobs.get(
      activeGroups.get(JSON.stringify([root, entityId, carouselId])),
    );
    if (
      !job ||
      JSON.stringify(group.sourceIds) !==
        JSON.stringify(job.entries.map((entry) => entry.sourceId))
    )
      return null;
    // Revalidate every exposed source so a past job cannot retain access after unassignment.
    for (let index = 0; index < job.entries.length; index++) {
      try {
        await authorize(
          root,
          entityId,
          carouselId,
          job.entries[index].sourceId,
        );
      } catch (error) {
        job.entries[index] = {
          sourceId: job.entries[index].sourceId,
          status: "failed",
          result: null,
          error: error.message,
        };
      }
    }
    if (job.status !== "processing") job.status = completedStatus(job.entries);
    return snapshot(job);
  }
  /** Explicitly aborts this group's active OCR process and pending slides; completed cache records remain reusable. */
  async function cancel(root, entityId, carouselId) {
    const state = await status(root, entityId, carouselId);
    if (state) jobs.get(state.id).controller.abort();
    return state;
  }
  return { getKnowledge, preview, start, status, cancel, processSource };
}
const imageParserService = createImageParserService();
module.exports = { createImageParserService, imageParserService };
