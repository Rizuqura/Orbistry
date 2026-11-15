const fs = require("node:fs/promises");
const path = require("node:path");
const { createHash } = require("node:crypto");
const { statVaultSource } = require("./vault-service.cjs");
const { serialQueue } = require("./ai/json-store.cjs");
const { executeNativeEngine } = require("./ai/engine-registry.cjs");
const {
  LIMITS,
  VERSION,
  renderSheet,
  exportWorkbook,
} = require("./engines/excel/index.cjs");
const { resultPage } = require("./engines/excel/results.cjs");

/** Reads only a currently authorized Universe source through containment/symlink checks and a read-only bounded handle. Detects source replacement or concurrent edits. */
async function snapshot(root, sourceRef) {
  const source = await statVaultSource(root, sourceRef);
  if (
    !source.stats.isFile() ||
    path.extname(sourceRef).toLowerCase() !== ".xlsx"
  )
    throw new Error("Choose an assigned XLSX source.");
  const file = await fs.open(source.absolutePath, "r");
  try {
    const before = await file.stat();
    const current = await statVaultSource(root, sourceRef);
    if (
      before.dev !== current.stats.dev ||
      before.ino !== current.stats.ino ||
      !before.isFile()
    )
      throw new Error("Workbook reference changed. Retry.");
    if (before.size > LIMITS.fileBytes)
      throw new Error("Workbook exceeds 25 MB.");
    const bytes = Buffer.alloc(before.size + 1);
    let size = 0;
    while (size < bytes.length) {
      const chunk = await file.read(bytes, size, bytes.length - size, size);
      if (!chunk.bytesRead) break;
      size += chunk.bytesRead;
    }
    const after = await file.stat();
    const confirmed = await statVaultSource(root, sourceRef);
    if (
      size !== before.size ||
      before.size !== after.size ||
      before.mtimeMs !== after.mtimeMs ||
      before.ctimeMs !== after.ctimeMs ||
      confirmed.absolutePath !== source.absolutePath ||
      confirmed.stats.dev !== before.dev ||
      confirmed.stats.ino !== before.ino
    )
      throw new Error("Workbook changed while reading. Reload its preview.");
    return {
      bytes: bytes.subarray(0, size),
      size,
      name: path.basename(sourceRef),
      stats: before,
      absolutePath: source.absolutePath,
    };
  } finally {
    await file.close();
  }
}

/** Creates a small content/version-keyed in-memory Engine cache. Sources and assignments are reauthorized on every page/export; no derived data is trusted from disk. */
function createExcelService({ execute = executeNativeEngine } = {}) {
  const cache = new Map();
  const pending = new Map();
  const queue = serialQueue();

  /** Returns an authorized immutable model, sharing unchanged snapshots across entities and coalescing identical in-flight parsing. */
  async function load(root, id, sourceId, expectedHash) {
    const { resolveKnowledgeSource } = require("./knowledge-store.cjs");
    const source = await resolveKnowledgeSource(root, id, sourceId);
    const file = await snapshot(root, source.sourceRef);
    const hash = `sha256:${createHash("sha256").update(file.bytes).digest("hex")}`;
    if (expectedHash && hash !== expectedHash)
      throw new Error(
        "Workbook changed. Reload the source preview before continuing.",
      );
    const key = JSON.stringify([
      path.resolve(root),
      source.sourceRef,
      hash,
      VERSION,
    ]);
    let model = cache.get(key);
    const cacheHit = Boolean(model || pending.has(key));
    if (!model) {
      if (!pending.has(key)) {
        if (pending.size >= 4)
          throw new Error(
            "Excel Engine is busy. Retry after current workbooks finish.",
          );
        const job = queue(async function parseWorkbook() {
          const result = await execute("wonton-excel", "excel", file.bytes, {
            filename: file.name,
          });
          cache.set(key, result);
          while (cache.size > 2) cache.delete(cache.keys().next().value);
          return result;
        });
        pending.set(key, job);
      }
      try {
        model = await pending.get(key);
      } finally {
        pending.delete(key);
      }
    } else {
      cache.delete(key);
      cache.set(key, model);
    }
    const confirmed = await resolveKnowledgeSource(root, id, sourceId);
    if (confirmed.sourceRef !== source.sourceRef)
      throw new Error("Workbook assignment changed. Reload the preview.");
    // Recheck metadata after a background parse so deleted/replaced originals cannot produce a stale first preview.
    const live = await statVaultSource(root, source.sourceRef);
    if (
      live.stats.size !== file.size ||
      live.stats.mtimeMs !== file.stats.mtimeMs ||
      live.stats.ctimeMs !== file.stats.ctimeMs ||
      live.stats.ino !== file.stats.ino ||
      live.stats.dev !== file.stats.dev ||
      live.absolutePath !== file.absolutePath
    )
      throw new Error("Workbook changed. Reload the preview.");
    return { model, file, cacheHit };
  }

  /** Supplies final-text worksheet pages and exports for the Knowledge Card. Authorizes each request and rejects invalid coordinates, output formats or stale source hashes. */
  async function request(root, id, sourceId, options = {}) {
    const format = options.format ?? "preview";
    if (!["preview", "markdown", "structured"].includes(format))
      throw new Error("Unsupported Excel output format.");
    for (const value of [
      options.sheetIndex ?? 0,
      options.rowOffset ?? 0,
      options.columnOffset ?? 0,
    ])
      if (!Number.isSafeInteger(value) || value < 0)
        throw new Error("Invalid worksheet page coordinates.");
    if (
      options.sourceHash !== undefined &&
      (typeof options.sourceHash !== "string" ||
        !/^sha256:[a-f0-9]{64}$/.test(options.sourceHash))
    )
      throw new Error("Invalid workbook content identity.");
    const { model, file, cacheHit } = await load(
      root,
      id,
      sourceId,
      options.sourceHash,
    );
    if (format !== "preview") {
      const content = await queue(function exportCached() {
        return exportWorkbook(model, format, { valuesOnly: true });
      });
      await require("./knowledge-store.cjs").resolveKnowledgeSource(
        root,
        id,
        sourceId,
      );
      return {
        content,
        filename: `${path.basename(file.name, path.extname(file.name))}.${format === "markdown" ? "md" : "json"}`,
        mime: format === "markdown" ? "text/markdown" : "application/json",
      };
    }
    const sheet = model.sheets.find(function byIndex(item) {
      return item.index === (options.sheetIndex ?? 0);
    });
    if (!sheet) throw new Error("Worksheet does not exist.");
    const page = resultPage(sheet, options);
    return {
      kind: "excel",
      name: file.name,
      relativePath: sourceId,
      extension: ".xlsx",
      size: file.size,
      sourceHash: model.sourceHash,
      engineVersion: model.engineVersion,
      dateSystem: model.dateSystem,
      cacheHit,
      sheets: model.sheets.map(function metadata(item) {
        return {
          name: item.name,
          index: item.index,
          state: item.state,
          range: item.range,
          merges: item.merges,
          warnings: item.warnings,
        };
      }),
      sheetIndex: sheet.index,
      warnings: model.warnings,
      page,
      markdown: renderSheet(sheet, { ...options, formulaDisplay: "result" }),
    };
  }
  return { request };
}
const excelService = createExcelService();
module.exports = { createExcelService, excelService };
