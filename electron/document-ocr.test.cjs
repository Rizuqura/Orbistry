const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const vault = require("./vault-service.cjs");
const stations = require("./station-service.cjs");
const { imagePdf } = require("../scripts/fixtures/image-pdf.cjs");
test(
  "native OCR supplies real image/PDF text and Context Box token estimates without sessions",
  { skip: process.platform !== "win32", timeout: 120000 },
  async (t) => {
    const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-ocr-"));
    t.after(() => fs.rm(root, { recursive: true, force: true }));
    for (const extension of ["png", "jpg", "jpeg"])
      await fs.copyFile(
        path.join(
          __dirname,
          "../scripts/fixtures",
          `ocr-text.${extension === "png" ? "png" : "jpg"}`,
        ),
        path.join(root, `image.${extension}`),
      );
    await fs.writeFile(path.join(root, "scanned.pdf"), imagePdf());
    const snapshot = await vault.scanVault(root);
    assert.equal(snapshot.totalFiles, 4);
    for (const extension of ["png", "jpg", "jpeg"]) {
      const file = await vault.readVaultFile(root, `image.${extension}`);
      assert.match(file.content, /ALPHA allocation is 25%/);
      assert.equal(file.image.textStatus, "ready");
      assert.match(file.image.dataUrl, /^data:image\/(png|jpeg);base64,/);
    }
    const text = await vault.readIndexedPdfText(root, "scanned.pdf");
    assert.match(text, /\[PDF page 1\]/);
    assert.match(text, /OCR extracted text/);
    assert.match(text, /ALPHA allocation is 25%/);
    const preview = await stations.previewContext(root, [
      "scanned.pdf",
      "image.png",
      "image.jpg",
      "image.jpeg",
    ]);
    assert.ok(preview.estimatedTokens > 0);
    const items = await stations.inspectBoxSources(
      root,
      preview.files.map((relativePath) => ({ relativePath })),
    );
    assert.ok(
      items.every(
        (item) => item.status === "ready" && item.estimatedTokens > 0,
      ),
    );
    const scope = await stations.prepareBrainScope(
      root,
      { ownerId: "ocr-test", activeStationIds: [], matchMode: "any" },
      items.map((item) => ({
        sourceId: item.relativePath,
        relativePath: item.relativePath,
        contentHash: item.contentHash,
      })),
      true,
    );
    const source = await stations.readBrainSource(root, {
      ownerId: "ocr-test",
      scopeId: scope.id,
      sourceId: "image.png",
    });
    assert.match(source.content, /25%/);
    await fs.writeFile(path.join(root, "image.png"), "invalid changed image");
    await assert.rejects(
      stations.readBrainSource(root, {
        ownerId: "ocr-test",
        scopeId: scope.id,
        sourceId: "image.png",
      }),
    );
    assert.equal((await fs.readdir(root)).includes("conversations"), false);
  },
);
