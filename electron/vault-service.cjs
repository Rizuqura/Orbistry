const fs = require("fs/promises");
const path = require("path");

const SUPPORTED_EXTENSIONS = new Set([
  ".md",
  ".markdown",
  ".csv",
  ".pdf",
  ".png",
  ".jpg",
  ".jpeg",
]);
const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);
const MAX_IMAGE_BYTES = 25 * 1024 * 1024;
const { recognizeFile } = require("./local-ocr.cjs");
const imageIndexes = new Map();
const pdfOcrJobs = new Map();
const TEXT_EXTENSIONS = new Set([".md", ".markdown", ".csv"]);
const IGNORED_DIRECTORIES = new Set([
  ".git",
  ".wonnyy",
  ".engine",
  "node_modules",
]);
async function isEngineBundle(directory) {
  // Recognition only, never registration or execution. Avoid traversing an
  // extracted Python distribution even when it is outside the reserved .engine.
  try {
    const file = path.join(directory, "package_manifest.json");
    const stat = await fs.lstat(file);
    if (!stat.isFile() || stat.isSymbolicLink() || stat.size > 8 * 1024 * 1024)
      return false;
    const manifest = JSON.parse(await fs.readFile(file, "utf8"));
    if (
      manifest.integration_version !== "1.0.0" ||
      manifest.platform !== "Windows x64" ||
      !Array.isArray(manifest.files)
    )
      return false;
    for (const relative of [
      "runtime/python.exe",
      "src/chronoz/issue/trigger.py",
      "chronoz-tool.json",
    ]) {
      const entry = await fs.lstat(path.join(directory, relative));
      if (!entry.isFile() || entry.isSymbolicLink()) return false;
    }
    return true;
  } catch {
    return false;
  }
}
const MAX_PDF_BYTES = 100 * 1024 * 1024;
const PDFJS_DIRECTORY = path.dirname(
  require.resolve("pdfjs-dist/package.json"),
);

let pdfjsPromise;
const pdfIndexes = new Map();
const activeScans = new Map();
const snapshots = new Map();
async function getVaultSnapshot(rootPath) {
  const key = await fs.realpath(rootPath).catch(() => null);
  if (!key) return scanVault(rootPath);
  return (
    activeScans.get(path.resolve(rootPath)) ??
    activeScans.get(key) ??
    snapshots.get(key) ??
    scanVault(key)
  );
}
async function readIndexedPdfText(rootPath, relativePath) {
  const { absolutePath, stats } = await statVaultFile(
    rootPath,
    relativePath,
    ".pdf",
  );
  const issues = [];
  await indexPdf(rootPath, absolutePath, relativePath, stats, issues);
  const record = pdfIndexForRoot(rootPath).get(relativePath);
  if (
    record &&
    !record.ocrAttempted &&
    (!record.ocrRetryAt || Date.now() >= record.ocrRetryAt) &&
    (record.error || record.pageTexts?.some((text) => !text.trim()))
  ) {
    const missing = record.error
      ? []
      : record.pageTexts.flatMap((text, index) =>
          text.trim() ? [] : [index + 1],
        );
    try {
      const key = `${absolutePath}:${stats.size}:${stats.mtimeMs}`;
      if (!pdfOcrJobs.has(key))
        pdfOcrJobs.set(
          key,
          recognizePdfPages(absolutePath, missing).finally(() =>
            pdfOcrJobs.delete(key),
          ),
        );
      const recognized = await pdfOcrJobs.get(key);
      const pages =
        record.pageTexts ??
        Array.from({ length: recognized.pages.length }, () => "");
      for (const page of recognized.pages)
        if (page.text.trim())
          pages[page.page - 1] =
            `[OCR extracted text; verify recognition against the page.]\n${page.text}`;
      record.pageTexts = pages;
      record.pageCount = pages.length;
      record.text = formatPdfPages(pages);
      record.ocrAttempted = true;
      record.error = null;
    } catch (error) {
      if (!record.text) throw error;
      record.ocrRetryAt = Date.now() + 60000;
      // Text-bearing pages remain usable when OCR is unavailable for blank pages.
    }
  }
  if (record?.error || (!record && issues.length))
    throw new Error(record?.error || issues[0].message);
  return getIndexedPdfText(rootPath, relativePath) ?? "";
}
function formatPdfPages(pages) {
  return pages.some((text) => text.trim())
    ? pages
        .map(
          (text, index) =>
            `[PDF page ${index + 1}]\n${text || "[No extractable text on this page. Page images were not supplied.]"}`,
        )
        .join("\n\n")
    : "";
}
async function recognizePdfPages(absolutePath, requested) {
  const pdfjs = await loadPdfJs();
  const task = pdfjs.getDocument({
    data: new Uint8Array(await fs.readFile(absolutePath)),
    useSystemFonts: true,
    cMapUrl: path.join(PDFJS_DIRECTORY, "cmaps") + "/",
    cMapPacked: true,
    standardFontDataUrl: path.join(PDFJS_DIRECTORY, "standard_fonts") + "/",
    wasmUrl: path.join(PDFJS_DIRECTORY, "wasm") + "/",
    useWorkerFetch: false,
  });
  let temporary;
  try {
    const document = await task.promise;
    const numbers = requested.length
      ? requested
      : Array.from({ length: document.numPages }, (_, i) => i + 1);
    if (numbers.length > 60)
      throw new Error(
        "OCR is limited to 60 scanned pages per document. Split this PDF into smaller files.",
      );
    let createCanvas;
    try {
      ({ createCanvas } = require("@napi-rs/canvas"));
    } catch {
      throw new Error(
        "The local PDF image renderer is unavailable. Reinstall Orbistry with its PDF rendering dependencies.",
      );
    }
    const os = require("node:os");
    temporary = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-pdf-ocr-"));
    const pages = [];
    for (const number of numbers) {
      const page = await document.getPage(number);
      const original = page.getViewport({ scale: 1 });
      const viewport = page.getViewport({
        scale: Math.min(1800 / original.width, 2400 / original.height),
      });
      const canvas = createCanvas(
        Math.ceil(viewport.width),
        Math.ceil(viewport.height),
      );
      await page.render({ canvasContext: canvas.getContext("2d"), viewport })
        .promise;
      const image = path.join(temporary, `page-${number}.png`);
      await fs.writeFile(image, canvas.toBuffer("image/png"));
      const result = await recognizeFile(image);
      pages.push({ page: number, text: result.pages[0]?.text ?? "" });
      page.cleanup();
    }
    return { pages };
  } finally {
    await task.destroy();
    if (temporary) {
      const base = path.resolve(require("node:os").tmpdir()) + path.sep;
      if (!path.resolve(temporary).startsWith(base))
        throw new Error("Invalid OCR temporary directory.");
      await fs.rm(temporary, { recursive: true, force: true });
    }
  }
}

function issue(relativePath, message) {
  return { relativePath, message };
}

function readableError(error) {
  if (error && error.code === "ENOENT")
    return "Folder or file no longer exists.";
  if (error && error.code === "EACCES") return "Permission was denied.";
  return "Could not read this location.";
}

function pdfIndexForRoot(rootPath) {
  const key = path.resolve(rootPath);
  if (!pdfIndexes.has(key)) pdfIndexes.set(key, new Map());
  return pdfIndexes.get(key);
}

async function loadPdfJs() {
  pdfjsPromise ??= import("pdfjs-dist/legacy/build/pdf.mjs");
  return pdfjsPromise;
}

async function extractPdfText(absolutePath) {
  const pdfjs = await loadPdfJs();
  const bytes = new Uint8Array(await fs.readFile(absolutePath));
  // PDF.js's Node factory reads filesystem paths, not file:// URL strings.
  const loadingTask = pdfjs.getDocument({
    data: bytes,
    useSystemFonts: true,
    cMapUrl: path.join(PDFJS_DIRECTORY, "cmaps") + "/",
    cMapPacked: true,
    standardFontDataUrl: path.join(PDFJS_DIRECTORY, "standard_fonts") + "/",
    wasmUrl: path.join(PDFJS_DIRECTORY, "wasm") + "/",
    useWorkerFetch: false,
  });
  try {
    const document = await loadingTask.promise;
    try {
      const pages = [];
      for (
        let pageNumber = 1;
        pageNumber <= document.numPages;
        pageNumber += 1
      ) {
        const page = await document.getPage(pageNumber);
        const textContent = await page.getTextContent();
        const text = textContent.items
          .filter((item) => "str" in item)
          .map((item) => item.str + (item.hasEOL ? "\n" : " "))
          .join("")
          .replace(/[^\S\n]+/g, " ")
          .replace(/ *\n */g, "\n")
          .trim();
        pages.push(text);
        page.cleanup();
      }
      return {
        text: formatPdfPages(pages),
        pageTexts: pages,
        pageCount: document.numPages,
      };
    } finally {
      await document.cleanup();
    }
  } finally {
    await loadingTask.destroy();
  }
}

async function indexPdf(rootPath, absolutePath, relativePath, stats, issues) {
  const pdfTextIndex = pdfIndexForRoot(rootPath);
  const existing = pdfTextIndex.get(relativePath);
  if (stats.size > MAX_PDF_BYTES) {
    pdfTextIndex.delete(relativePath);
    issues.push(
      issue(relativePath, "PDF exceeds the 100 MB preview and indexing limit."),
    );
    return { textStatus: "too-large", pageCount: null };
  }
  if (
    existing &&
    !existing.error &&
    existing.size === stats.size &&
    existing.mtimeMs === stats.mtimeMs
  ) {
    return {
      textStatus: existing.text ? "ready" : "empty",
      pageCount: existing.pageCount,
    };
  }
  try {
    const { text, pageCount, pageTexts } = await extractPdfText(absolutePath);
    pdfTextIndex.set(relativePath, {
      size: stats.size,
      mtimeMs: stats.mtimeMs,
      text,
      pageCount,
      pageTexts,
    });
    return { textStatus: text ? "ready" : "empty", pageCount };
  } catch {
    const message =
      "Could not extract searchable PDF text. The file may still be previewable.";
    pdfTextIndex.set(relativePath, {
      size: stats.size,
      mtimeMs: stats.mtimeMs,
      text: "",
      pageCount: null,
      error: message,
    });
    issues.push(issue(relativePath, message));
    return { textStatus: "error", pageCount: null };
  }
}

async function scanDirectory(
  rootPath,
  directoryPath,
  relativePath,
  issues,
  seenPdfPaths,
) {
  let directoryEntries;
  try {
    directoryEntries = await fs.readdir(directoryPath, { withFileTypes: true });
  } catch (error) {
    issues.push(issue(relativePath || ".", readableError(error)));
    return [];
  }

  const entries = [];
  for (const entry of directoryEntries.sort((a, b) =>
    a.name.localeCompare(b.name),
  )) {
    if (entry.isSymbolicLink()) continue;

    const absolutePath = path.join(directoryPath, entry.name);
    // Vault IDs are portable metadata keys, so always use forward slashes even on Windows.
    const childRelativePath = path.posix.join(
      relativePath.replaceAll("\\", "/"),
      entry.name,
    );
    if (entry.isDirectory()) {
      // Settings owns agent memory. Keep it on disk and directly readable by
      // settings, but never publish it as vault knowledge or search results.
      if (entry.name.toLowerCase() === "agentcontext.memory") continue;
      if (
        entry.name.toLowerCase() === ".engine" ||
        (await isEngineBundle(absolutePath))
      ) {
        issues.push(
          issue(
            childRelativePath,
            "External engine storage excluded from research indexing and WorldView. Register the bundle in Agent settings; copy a report PDF into a research folder to review it.",
          ),
        );
        continue;
      }
      if (IGNORED_DIRECTORIES.has(entry.name.toLowerCase())) continue;
      const children = await scanDirectory(
        rootPath,
        absolutePath,
        childRelativePath,
        issues,
        seenPdfPaths,
      );
      entries.push({
        kind: "folder",
        name: entry.name,
        relativePath: childRelativePath,
        children,
      });
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();
    if (!entry.isFile()) continue;
    const fileStats = await fs.stat(absolutePath).catch(() => null);
    const sizeBytes = fileStats?.isFile() ? fileStats.size : undefined;
    if (!SUPPORTED_EXTENSIONS.has(extension)) {
      entries.push({
        kind: "file",
        name: entry.name,
        relativePath: childRelativePath,
        extension,
        sizeBytes,
        readable: false,
      });
      continue;
    }
    if (extension === ".pdf") {
      const stats = fileStats;
      if (!stats) {
        issues.push(
          issue(childRelativePath, "Could not inspect PDF metadata."),
        );
        entries.push({
          kind: "file",
          name: entry.name,
          relativePath: childRelativePath,
          extension,
          sizeBytes,
        });
        continue;
      }
      seenPdfPaths.add(childRelativePath);
      const pdf = await indexPdf(
        rootPath,
        absolutePath,
        childRelativePath,
        stats,
        issues,
      );
      entries.push({
        kind: "file",
        name: entry.name,
        relativePath: childRelativePath,
        extension,
        sizeBytes,
        readable: true,
        pdf,
      });
      continue;
    }
    entries.push({
      kind: "file",
      name: entry.name,
      relativePath: childRelativePath,
      extension,
      sizeBytes,
      readable: true,
    });
  }
  return entries;
}

function countEntries(entries) {
  return entries.reduce(
    (total, entry) => {
      if (entry.kind === "file")
        return {
          ...total,
          files: total.files + (entry.readable === false ? 0 : 1),
        };
      const nested = countEntries(entry.children);
      return {
        files: total.files + nested.files,
        directories: total.directories + nested.directories + 1,
      };
    },
    { files: 0, directories: 0 },
  );
}

function scanVault(rootPath) {
  const key = path.resolve(rootPath);
  if (activeScans.has(key)) return activeScans.get(key);
  const scanning = scanVaultContents(key)
    .then(async (snapshot) => {
      snapshots.set(await fs.realpath(key).catch(() => key), snapshot);
      return snapshot;
    })
    .finally(() => activeScans.delete(key));
  activeScans.set(key, scanning);
  return scanning;
}

async function scanVaultContents(rootPath) {
  try {
    const stats = await fs.stat(rootPath);
    if (!stats.isDirectory()) {
      return {
        status: "unavailable",
        rootPath,
        entries: [],
        totalFiles: 0,
        totalDirectories: 0,
        lastScannedAt: null,
        issues: [],
        message: "Vault path is not a directory.",
      };
    }
  } catch (error) {
    const missing = error && error.code === "ENOENT";
    return {
      status: missing ? "missing" : "unavailable",
      rootPath,
      entries: [],
      totalFiles: 0,
      totalDirectories: 0,
      lastScannedAt: null,
      issues: [],
      message: missing ? "Vault folder does not exist." : readableError(error),
    };
  }

  const pdfTextIndex = pdfIndexForRoot(rootPath);
  const issues = [];
  const seenPdfPaths = new Set();
  const entries = await scanDirectory(
    rootPath,
    rootPath,
    "",
    issues,
    seenPdfPaths,
  );
  if (issues.some((entry) => entry.relativePath === ".")) {
    return {
      status: "unavailable",
      rootPath,
      entries: [],
      totalFiles: 0,
      totalDirectories: 0,
      lastScannedAt: null,
      issues,
      message:
        "The vault directory could not be scanned. Check folder permissions and try again.",
    };
  }
  for (const indexedPath of pdfTextIndex.keys()) {
    if (!seenPdfPaths.has(indexedPath)) pdfTextIndex.delete(indexedPath);
  }
  const { files, directories } = countEntries(entries);
  return {
    status: "ready",
    rootPath,
    entries,
    totalFiles: files,
    totalDirectories: directories,
    lastScannedAt: new Date().toISOString(),
    issues,
  };
}

function resolveVaultFile(rootPath, relativePath) {
  if (typeof relativePath !== "string" || path.isAbsolute(relativePath))
    throw new Error("Invalid vault file path.");
  const absolutePath = path.resolve(rootPath, relativePath);
  const pathWithinVault = path.relative(rootPath, absolutePath);
  if (pathWithinVault.startsWith("..") || path.isAbsolute(pathWithinVault))
    throw new Error("File is outside the active vault.");
  if (!SUPPORTED_EXTENSIONS.has(path.extname(absolutePath).toLowerCase()))
    throw new Error("This file type is not supported.");
  return absolutePath;
}

async function statVaultFile(rootPath, relativePath, requiredExtension) {
  const absolutePath = resolveVaultFile(rootPath, relativePath);
  const actualRoot = await fs.realpath(rootPath);
  const actualPath = await fs.realpath(absolutePath);
  const within = path.relative(actualRoot, actualPath);
  if (within.startsWith("..") || path.isAbsolute(within))
    throw new Error("File is outside the active vault.");
  const extension = path.extname(absolutePath).toLowerCase();
  if (requiredExtension && extension !== requiredExtension)
    throw new Error("Selected file is not a PDF.");
  const stats = await fs.stat(absolutePath).catch((error) => {
    throw new Error(readableError(error));
  });
  if (!stats.isFile()) throw new Error("Selected path is not a file.");
  return { absolutePath, extension, stats };
}

async function readVaultFile(rootPath, relativePath) {
  const { absolutePath, extension } = await statVaultFile(
    rootPath,
    relativePath,
  );
  if (IMAGE_EXTENSIONS.has(extension)) {
    const stats = await fs.stat(absolutePath);
    if (stats.size > MAX_IMAGE_BYTES)
      throw new Error("Image exceeds the 25 MB preview and OCR limit.");
    const bytes = await fs.readFile(absolutePath);
    const digest = require("node:crypto")
      .createHash("sha256")
      .update(bytes)
      .digest("hex");
    const key = path.resolve(absolutePath);
    let record = imageIndexes.get(key);
    if (record?.hash !== digest) {
      const recognized = await recognizeFile(absolutePath);
      if (
        require("node:crypto")
          .createHash("sha256")
          .update(await fs.readFile(absolutePath))
          .digest("hex") !== digest
      )
        throw new Error("Image changed during OCR. Review the file again.");
      const text = recognized.pages[0]?.text.trim() ?? "";
      record = {
        hash: digest,
        content: text
          ? `[Image OCR text; verify recognition against the original image. Visual chart/photo interpretation is not supplied.]\n${text}`
          : "",
        language: recognized.language,
      };
      imageIndexes.set(key, record);
    }
    return {
      name: path.basename(absolutePath),
      relativePath,
      extension,
      content: record.content,
      image: {
        dataUrl: `data:image/${extension === ".png" ? "png" : "jpeg"};base64,${bytes.toString("base64")}`,
        textStatus: record.content ? "ready" : "empty",
        language: record.language,
      },
    };
  }
  if (!TEXT_EXTENSIONS.has(extension))
    throw new Error("Use the PDF reader for this file.");
  return {
    name: path.basename(absolutePath),
    relativePath,
    extension,
    content: await fs.readFile(absolutePath, "utf8").catch((error) => {
      throw new Error(readableError(error));
    }),
  };
}

// Explicit user editing only. Never expose this operation as an AI tool.
async function saveMarkdownFile(rootPath, input) {
  if (
    !input ||
    typeof input !== "object" ||
    Array.isArray(input) ||
    Object.keys(input).some(
      (key) =>
        !["vaultPath", "relativePath", "content", "originalContent"].includes(
          key,
        ),
    ) ||
    typeof input.vaultPath !== "string" ||
    typeof input.relativePath !== "string" ||
    typeof input.content !== "string" ||
    typeof input.originalContent !== "string"
  )
    throw new Error("Invalid Markdown save request.");
  if (path.resolve(input.vaultPath) !== path.resolve(rootPath))
    throw new Error("The active vault changed. Reopen the file before saving.");
  if (Buffer.byteLength(input.content, "utf8") > 10 * 1024 * 1024)
    throw new Error("Markdown editing supports files up to 10 MB.");
  const absolutePath = resolveVaultFile(rootPath, input.relativePath);
  if (!/\.(md|markdown)$/i.test(absolutePath))
    throw new Error("Only Markdown files can be edited.");
  const assertTarget = async () => {
    const parts = path
      .relative(path.resolve(rootPath), absolutePath)
      .split(path.sep);
    let current = path.resolve(rootPath);
    for (const part of parts) {
      if (IGNORED_DIRECTORIES.has(part.toLowerCase()))
        throw new Error("Application metadata cannot be edited.");
      current = path.join(current, part);
      if ((await fs.lstat(current)).isSymbolicLink())
        throw new Error("Linked files or folders cannot be edited.");
    }
    return statVaultFile(rootPath, input.relativePath);
  };
  const { stats } = await assertTarget();
  if (stats.size > 10 * 1024 * 1024)
    throw new Error("Markdown editing supports files up to 10 MB.");
  if ((await fs.readFile(absolutePath, "utf8")) !== input.originalContent)
    throw new Error(
      "This file changed on disk. Copy your edits, then reopen the file before saving.",
    );
  const temporary = path.join(
    path.dirname(absolutePath),
    `.orbistry-${require("node:crypto").randomUUID()}.tmp`,
  );
  try {
    await fs.writeFile(temporary, input.content, {
      encoding: "utf8",
      flag: "wx",
      mode: stats.mode,
    });
    await assertTarget();
    if ((await fs.readFile(absolutePath, "utf8")) !== input.originalContent)
      throw new Error(
        "This file changed on disk. Copy your edits, then reopen the file before saving.",
      );
    await fs.rename(temporary, absolutePath);
  } finally {
    await fs.unlink(temporary).catch((error) => {
      if (error.code !== "ENOENT") throw error;
    });
  }
  return {
    name: path.basename(absolutePath),
    relativePath: input.relativePath,
    extension: path.extname(absolutePath).toLowerCase(),
    content: input.content,
  };
}

async function readPdfFile(rootPath, relativePath) {
  const { absolutePath, stats } = await statVaultFile(
    rootPath,
    relativePath,
    ".pdf",
  );
  if (stats.size > MAX_PDF_BYTES)
    throw new Error("PDF exceeds the 100 MB preview limit.");
  let pdf = await indexPdf(rootPath, absolutePath, relativePath, stats, []);
  try {
    const text = await readIndexedPdfText(rootPath, relativePath);
    pdf = {
      textStatus: text ? "ready" : "empty",
      pageCount:
        pdfIndexForRoot(rootPath).get(relativePath)?.pageCount ?? pdf.pageCount,
    };
  } catch (error) {
    pdf = { ...pdf, textStatus: "error", textError: error.message };
  }
  return {
    name: path.basename(absolutePath),
    relativePath,
    size: stats.size,
    ...pdf,
    data: new Uint8Array(
      await fs.readFile(absolutePath).catch((error) => {
        throw new Error(readableError(error));
      }),
    ),
  };
}

function countMatches(text, query) {
  let count = 0;
  let offset = 0;
  while (offset >= 0) {
    offset = text.indexOf(query, offset);
    if (offset >= 0) {
      count += 1;
      offset += query.length;
    }
  }
  return count;
}

function searchPdfText(rootPath, rawQuery) {
  const pdfTextIndex = pdfIndexes.get(path.resolve(rootPath));
  if (!pdfTextIndex || typeof rawQuery !== "string") return [];
  const query = rawQuery.trim().toLocaleLowerCase();
  if (!query) return [];
  return [...pdfTextIndex.entries()].flatMap(([relativePath, record]) => {
    const normalizedText = record.text.toLocaleLowerCase();
    const matchAt = normalizedText.indexOf(query);
    if (matchAt < 0) return [];
    const excerptStart = Math.max(0, matchAt - 72);
    const excerptEnd = Math.min(
      record.text.length,
      matchAt + query.length + 108,
    );
    return [
      {
        relativePath,
        name: path.basename(relativePath),
        matchCount: countMatches(normalizedText, query),
        excerpt: `${excerptStart > 0 ? "…" : ""}${record.text.slice(excerptStart, excerptEnd)}${excerptEnd < record.text.length ? "…" : ""}`,
      },
    ];
  });
}

function getIndexedPdfText(rootPath, relativePath) {
  return (
    pdfIndexes.get(path.resolve(rootPath))?.get(relativePath)?.text ?? null
  );
}

module.exports = {
  getVaultSnapshot,
  readIndexedPdfText,
  MAX_PDF_BYTES,
  getIndexedPdfText,
  readPdfFile,
  readVaultFile,
  saveMarkdownFile,
  resolveVaultFile,
  scanVault,
  searchPdfText,
};
