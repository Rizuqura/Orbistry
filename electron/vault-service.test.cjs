const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");
const { cmapPdf } = require("../scripts/fixtures/cmap-pdf.cjs");
const {
  MAX_PDF_BYTES,
  readPdfFile,
  readVaultFile,
  saveMarkdownFile,
  resolveVaultFile,
  scanVault,
  searchPdfText,
} = require("./vault-service.cjs");

async function withVault(run) {
  const vaultPath = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-vault-"));
  try {
    await run(vaultPath);
  } finally {
    await fs.rm(vaultPath, { recursive: true, force: true });
  }
}
test("engine storage and relocated portable bundles never become research planets or indexed PDF text", async () => {
  await withVault(async (vault) => {
    await fs.mkdir(path.join(vault, ".engine", "runtime"), { recursive: true });
    await fs.writeFile(
      path.join(vault, ".engine", "runtime", "internal.md"),
      "not research",
    );
    const bundle = path.join(vault, "portable-engine");
    for (const file of [
      "runtime/python.exe",
      "src/chronoz/issue/trigger.py",
      "chronoz-tool.json",
      "outputs/2026-10/report.pdf",
    ]) {
      await fs.mkdir(path.dirname(path.join(bundle, file)), {
        recursive: true,
      });
      await fs.writeFile(
        path.join(bundle, file),
        "engine file must not be indexed",
      );
    }
    await fs.writeFile(
      path.join(bundle, "package_manifest.json"),
      JSON.stringify({
        integration_version: "1.0.0",
        platform: "Windows x64",
        files: [],
      }),
    );
    await fs.mkdir(path.join(vault, "runtime"));
    await fs.writeFile(
      path.join(vault, "runtime", "research.md"),
      "normal folder remains research",
    );
    await fs.writeFile(path.join(vault, "note.md"), "Reviewed research");
    const snapshot = await scanVault(vault);
    assert.deepEqual(snapshot.entries.map((entry) => entry.name).sort(), [
      "note.md",
      "runtime",
    ]);
    assert.equal(snapshot.totalFiles, 2);
    assert.equal(snapshot.issues.length, 2);
    assert.deepEqual(searchPdfText(vault, "engine file"), []);
    await assert.rejects(
      saveMarkdownFile(vault, {
        vaultPath: vault,
        relativePath: ".engine/runtime/internal.md",
        originalContent: "not research",
        content: "changed",
      }),
      /metadata/,
    );
    assert.equal(
      await fs.readFile(
        path.join(vault, ".engine/runtime/internal.md"),
        "utf8",
      ),
      "not research",
    );
  });
});

test("agent memory stays on disk and readable through settings but is excluded from vault indexing", async () => {
  await withVault(async (vault) => {
    const memoryPath = "agentContext.memory/profile.md";
    await fs.mkdir(path.join(vault, "agentContext.memory"));
    await fs.writeFile(path.join(vault, memoryPath), "# Agent memory");
    await fs.writeFile(path.join(vault, "research.md"), "# Research");
    const snapshot = await scanVault(vault);
    assert.deepEqual(
      snapshot.entries.map((entry) => entry.name),
      ["research.md"],
    );
    assert.equal(snapshot.totalFiles, 1);
    assert.equal(snapshot.totalDirectories, 0);
    assert.equal(snapshot.issues.length, 0);
    assert.equal(
      await fs.readFile(path.join(vault, memoryPath), "utf8"),
      "# Agent memory",
    );
    await readVaultFile(vault, memoryPath);
  });
});

test("Markdown saves preserve text, reject stale edits and leave no temporary files", async () => {
  await withVault(async (vaultPath) => {
    const target = path.join(vaultPath, "note.markdown");
    const originalContent = "# Original\r\n";
    await fs.writeFile(target, originalContent);
    const request = {
      vaultPath,
      relativePath: "note.markdown",
      originalContent,
      content: "# Edited é\r\n",
    };
    const saved = await saveMarkdownFile(vaultPath, request);
    assert.equal(saved.content, request.content);
    assert.equal(await fs.readFile(target, "utf8"), request.content);
    await assert.rejects(
      saveMarkdownFile(vaultPath, request),
      /changed on disk/,
    );
    assert.equal(await fs.readFile(target, "utf8"), request.content);
    await saveMarkdownFile(vaultPath, {
      ...request,
      originalContent: request.content,
      content: "",
    });
    assert.equal(await fs.readFile(target, "utf8"), "");
    assert.deepEqual(await fs.readdir(vaultPath), ["note.markdown"]);
  });
});

test("Markdown save rejects other types, metadata, wrong vault, invalid and oversized input", async () => {
  await withVault(async (vaultPath) => {
    await fs.mkdir(path.join(vaultPath, ".wonnyy"));
    for (const name of ["data.csv", ".wonnyy/note.md", "note.md"])
      await fs.writeFile(path.join(vaultPath, name), "original");
    const request = {
      vaultPath,
      relativePath: "note.md",
      originalContent: "original",
      content: "edited",
    };
    for (const relativePath of ["data.csv", ".wonnyy/note.md", "../outside.md"])
      await assert.rejects(
        saveMarkdownFile(vaultPath, { ...request, relativePath }),
      );
    await assert.rejects(
      saveMarkdownFile(vaultPath, {
        ...request,
        vaultPath: path.join(vaultPath, "other"),
      }),
      /vault changed/,
    );
    await assert.rejects(
      saveMarkdownFile(vaultPath, { ...request, extra: true }),
      /Invalid/,
    );
    await assert.rejects(
      saveMarkdownFile(vaultPath, {
        ...request,
        content: "x".repeat(10 * 1024 * 1024 + 1),
      }),
      /10 MB/,
    );
    assert.equal(
      await fs.readFile(path.join(vaultPath, "note.md"), "utf8"),
      "original",
    );
    assert.equal(
      await fs.readFile(path.join(vaultPath, "data.csv"), "utf8"),
      "original",
    );
  });
});

test("Markdown save rejects linked parent directories", async () => {
  await withVault(async (vaultPath) => {
    await fs.mkdir(path.join(vaultPath, "actual"));
    await fs.writeFile(path.join(vaultPath, "actual", "note.md"), "original");
    await fs.symlink(
      path.join(vaultPath, "actual"),
      path.join(vaultPath, "linked"),
      process.platform === "win32" ? "junction" : "dir",
    );
    await assert.rejects(
      saveMarkdownFile(vaultPath, {
        vaultPath,
        relativePath: "linked/note.md",
        originalContent: "original",
        content: "edited",
      }),
      /Linked/,
    );
    assert.equal(
      await fs.readFile(path.join(vaultPath, "actual", "note.md"), "utf8"),
      "original",
    );
  });
});

function minimalPdf(text) {
  const stream = `BT\n/F1 18 Tf\n72 720 Td\n(${text.replace(/[()\\]/g, "\\$&")}) Tj\nET`;
  const bodies = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    `<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}\nendstream`,
  ];
  let document = "%PDF-1.4\n";
  const offsets = [0];
  for (let index = 0; index < bodies.length; index += 1) {
    offsets.push(Buffer.byteLength(document));
    document += `${index + 1} 0 obj\n${bodies[index]}\nendobj\n`;
  }
  const xrefOffset = Buffer.byteLength(document);
  document += `xref\n0 ${bodies.length + 1}\n0000000000 65535 f \n`;
  document += offsets
    .slice(1)
    .map((offset) => `${String(offset).padStart(10, "0")} 00000 n \n`)
    .join("");
  document += `trailer\n<< /Size ${bodies.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;
  return Buffer.from(document, "binary");
}

test("scanVault recursively returns supported files and folders", async () => {
  await withVault(async (vaultPath) => {
    await fs.mkdir(path.join(vaultPath, "research"));
    await fs.writeFile(path.join(vaultPath, "research", "note.md"), "# Note");
    await fs.writeFile(path.join(vaultPath, "data.csv"), "name\nOrbistry");
    await fs.writeFile(
      path.join(vaultPath, "report.pdf"),
      minimalPdf("Revenue outlook"),
    );
    await fs.writeFile(path.join(vaultPath, "image.bmp"), "not indexed");
    const snapshot = await scanVault(vaultPath);
    assert.equal(snapshot.status, "ready");
    assert.equal(snapshot.totalFiles, 3);
    assert.equal(snapshot.totalDirectories, 1);
    const image = snapshot.entries.find((entry) => entry.name === "image.bmp");
    assert.equal(image?.readable, false);
    const report = snapshot.entries.find(
      (entry) => entry.name === "report.pdf",
    );
    assert.equal(report?.pdf?.textStatus, "ready");
    assert.equal(searchPdfText(vaultPath, "revenue")[0]?.matchCount, 1);
    await fs.writeFile(
      path.join(vaultPath, "report.pdf"),
      minimalPdf("Margin outlook"),
    );
    await scanVault(vaultPath);
    assert.equal(searchPdfText(vaultPath, "revenue").length, 0);
    assert.equal(searchPdfText(vaultPath, "margin")[0]?.matchCount, 1);
    await fs.unlink(path.join(vaultPath, "report.pdf"));
    await scanVault(vaultPath);
    assert.equal(searchPdfText(vaultPath, "margin").length, 0);
  });
});

test("a transient PDF indexing failure recovers without editing or renaming the file", async () => {
  await withVault(async (root) => {
    const target = path.join(root, "retry.pdf");
    await fs.writeFile(target, minimalPdf("Recovered PDF tokens"));
    const original = fs.readFile;
    let fail = true;
    fs.readFile = async (file, ...args) => {
      if (file === target && fail) {
        fail = false;
        throw new Error("Synthetic transient read failure");
      }
      return original(file, ...args);
    };
    try {
      assert.equal((await scanVault(root)).entries[0].pdf.textStatus, "error");
    } finally {
      fs.readFile = original;
    }
    const { readIndexedPdfText } = require("./vault-service.cjs");
    assert.match(
      await readIndexedPdfText(root, "retry.pdf"),
      /Recovered PDF tokens/,
    );
    assert.equal((await scanVault(root)).entries[0].pdf.textStatus, "ready");
  });
});

test("readVaultFile stays inside the vault and PDF reads are binary", async () => {
  await withVault(async (vaultPath) => {
    await fs.writeFile(path.join(vaultPath, "note.md"), "# Safe");
    await fs.writeFile(
      path.join(vaultPath, "report.pdf"),
      minimalPdf("Binary PDF"),
    );
    const file = await readVaultFile(vaultPath, "note.md");
    const pdf = await readPdfFile(vaultPath, "report.pdf");
    assert.equal(file.content, "# Safe");
    assert.equal(pdf.data instanceof Uint8Array, true);
    assert.throws(
      () => resolveVaultFile(vaultPath, "..\\outside.md"),
      /outside the active vault/,
    );
  });
});

test("PDFs above the configured limit are visible but cannot be read or indexed", async () => {
  await withVault(async (vaultPath) => {
    const largePdfPath = path.join(vaultPath, "large.pdf");
    const handle = await fs.open(largePdfPath, "w");
    await handle.truncate(MAX_PDF_BYTES + 1);
    await handle.close();
    const snapshot = await scanVault(vaultPath);
    assert.equal(snapshot.entries[0]?.pdf?.textStatus, "too-large");
    await assert.rejects(() => readPdfFile(vaultPath, "large.pdf"), /100 MB/);
  });
});

test("overlapping scans share work and keep same-named PDFs isolated by vault", async () => {
  await withVault(async (alpha) =>
    withVault(async (beta) => {
      await fs.writeFile(
        path.join(alpha, "report.pdf"),
        minimalPdf("ALPHA research"),
      );
      await fs.writeFile(
        path.join(beta, "report.pdf"),
        minimalPdf("BETA research"),
      );
      const first = scanVault(alpha);
      assert.equal(
        scanVault(alpha),
        first,
        "Concurrent callers must share the same scan",
      );
      const [a, b] = await Promise.all([first, scanVault(beta)]);
      assert.equal(a.entries[0].pdf.textStatus, "ready");
      assert.equal(b.entries[0].pdf.textStatus, "ready");
      assert.equal(searchPdfText(alpha, "ALPHA").length, 1);
      assert.equal(searchPdfText(alpha, "BETA").length, 0);
      assert.equal(searchPdfText(beta, "BETA").length, 1);
      assert.equal(searchPdfText(beta, "ALPHA").length, 0);
      await fs.writeFile(path.join(alpha, "updated.md"), "Fresh scan");
      assert.equal(
        (await scanVault(alpha)).totalFiles,
        2,
        "Completed snapshots must not be cached indefinitely",
      );
    }),
  );
});

test("PDF indexing loads local character maps for non-embedded composite fonts", async () => {
  await withVault(async (vaultPath) => {
    await fs.writeFile(path.join(vaultPath, "mapped.pdf"), cmapPdf());
    const snapshot = await scanVault(vaultPath);
    assert.equal(snapshot.entries[0].pdf.textStatus, "ready");
    assert.equal(searchPdfText(vaultPath, "日本").length, 1);
    assert.deepEqual(snapshot.issues, []);
  });
});

test("snapshot reads reuse the scan until explicit refresh and report missing vaults distinctly", async () => {
  const { getVaultSnapshot } = require("./vault-service.cjs");
  await withVault(async (root) => {
    await fs.writeFile(path.join(root, "first.md"), "First");
    const initial = await scanVault(root);
    await fs.writeFile(path.join(root, "second.md"), "Second");
    assert.equal((await getVaultSnapshot(root)).totalFiles, initial.totalFiles);
    await scanVault(root);
    assert.equal((await getVaultSnapshot(root)).totalFiles, 2);
    const missing = await getVaultSnapshot(path.join(root, "absent"));
    assert.equal(missing.status, "missing");
    assert.equal(missing.totalFiles, 0);
  });
});

test("Brain Scope reuses scan metadata but still rejects changed sources", async () => {
  const stations = require("./station-service.cjs");
  await withVault(async (root) => {
    await fs.writeFile(path.join(root, "source.md"), "Approved text");
    await stations.addContext(root, ["source.md"]);
    const originalReadDir = fs.readdir;
    let scans = 0;
    fs.readdir = async (...args) => {
      scans++;
      return originalReadDir(...args);
    };
    try {
      const scope = await stations.prepareBrainScope(root, {
        ownerId: "runtime-test",
        activeStationIds: [],
        matchMode: "any",
      });
      const input = {
        ownerId: "runtime-test",
        scopeId: scope.id,
        sourceId: "source.md",
      };
      assert.equal(
        (await stations.readBrainSource(root, input)).content,
        "Approved text",
      );
      await fs.writeFile(path.join(root, "source.md"), "Changed text");
      await assert.rejects(stations.readBrainSource(root, input), {
        code: "BRAIN_SOURCE_CHANGED",
      });
      assert.equal(scans, 0);
    } finally {
      fs.readdir = originalReadDir;
    }
  });
});

test("PDF extraction preserves page boundaries and lines without treating empty pages as evidence", async () => {
  const { textPdf } = require("../scripts/fixtures/text-pdf.cjs");
  const { readIndexedPdfText } = require("./vault-service.cjs");
  await withVault(async (root) => {
    await fs.writeFile(
      path.join(root, "report.pdf"),
      textPdf([
        ["Revenue was 120 million.", "Costs were 80 million."],
        [],
        ["Profit was 40 million."],
      ]),
    );
    const text = await readIndexedPdfText(root, "report.pdf");
    assert.match(
      text,
      /\[PDF page 1\]\nRevenue was 120 million\.\nCosts were 80 million\./,
    );
    assert.match(text, /\[PDF page 2\]\n\[No extractable text/);
    assert.match(text, /\[PDF page 3\]\nProfit was 40 million\./);
    assert.equal((await readPdfFile(root, "report.pdf")).textStatus, "ready");
    await fs.writeFile(path.join(root, "empty.pdf"), textPdf([[]]));
    assert.equal(await readIndexedPdfText(root, "empty.pdf"), "");
    assert.equal((await readPdfFile(root, "empty.pdf")).textStatus, "empty");
  });
});
