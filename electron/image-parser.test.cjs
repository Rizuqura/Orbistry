const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");
const { createCanvas } = require("@napi-rs/canvas");
const {
  parseKnowledgeIndex,
} = require("./domains/indexing/knowledge-index.cjs");
const {
  imageMetadata,
  parseImage,
  MAX_IMAGE_BYTES,
} = require("./engines/image-parser/parser.cjs");
const { createImageParserService } = require("./image-parser-service.cjs");
const {
  saveWorldViewChip,
  assignWorldViewFiles,
  unassignWorldViewFile,
} = require("./domains/entity/worldview-store.cjs");
const {
  saveKnowledgeIndex,
  saveKnowledgeNote,
  validateKnowledgeIndex,
} = require("./domains/knowledge/knowledge-store.cjs");

/** Produces actual bounded image fixtures through the application's existing canvas dependency. */
function image(color, format = "image/png") {
  const canvas = createCanvas(160, 90);
  const context = canvas.getContext("2d");
  context.fillStyle = color;
  context.fillRect(0, 0, 160, 90);
  return canvas.toBuffer(format);
}
const declarations =
  "# Industry\nCarousel = [\n source: images/a.png\n source: images/b.png\n].view(carousel)";

/** Verifies strict declarative grammar, legacy compatibility, unique group IDs and hostile operation/path rejection. */
test("carousel declarations extend existing heading/source grammar without execution", () => {
  const parsed = parseKnowledgeIndex(
    `${declarations}\nGallery = [\nsource: images/a.png\n].view(carousel)\nsource: notes.md`,
  );
  assert.deepEqual(parsed.errors, []);
  assert.equal(parsed.menus[0].carousels.length, 2);
  assert.deepEqual(parsed.menus[0].sourceIds, ["notes.md"]);
  assert.deepEqual(parsed.menus[0].carousels[0].sourceIds, [
    "images/a.png",
    "images/b.png",
  ]);
  assert.notEqual(
    parsed.menus[0].carousels[0].id,
    parsed.menus[0].carousels[1].id,
  );
  assert.equal(
    parseKnowledgeIndex(declarations).menus[0].carousels[0].id,
    parsed.menus[0].carousels[0].id,
  );
  for (const text of [
    declarations.replace(".view(carousel)", ".parse(exec).view(carousel)"),
    declarations.replace("view(carousel)", "view(eval)"),
    declarations + ".evil()",
    declarations.replace("images/a.png", "../secret.png"),
    "# A\nCarousel = [\nsource: images/a.png",
    "# A\nCarousel = [\n].view(carousel)",
    `${declarations}\n${declarations.replace("# Industry\n", "")}`,
  ])
    assert.ok(parseKnowledgeIndex(text).errors.length, text);
  assert.deepEqual(
    parseKnowledgeIndex("# Old\nsource: images/a.png").menus[0].sourceIds,
    ["images/a.png"],
  );
});

/** Checks dimensions, optional/unavailable/failing OCR, empty output, explicit vision provenance, malformed input and cancellation. */
test("image parser separates deterministic metadata, OCR text and optional visual description", async () => {
  const bytes = image("red");
  assert.deepEqual(imageMetadata(bytes), {
    format: "png",
    width: 160,
    height: 90,
    sizeBytes: bytes.length,
  });
  assert.equal(imageMetadata(image("blue", "image/jpeg")).format, "jpeg");
  const unavailable = await parseImage(bytes);
  assert.equal(unavailable.status, "partial");
  assert.equal(unavailable.description, null);
  assert.equal(unavailable.visualInterpretationAvailable, false);
  const failed = await parseImage(bytes, {
    ocrAdapter: {
      id: "fixture",
      version: "1",
      recognize: async () => {
        throw new Error("OCR unavailable fixture");
      },
    },
  });
  assert.equal(failed.status, "partial");
  assert.match(failed.errors[0], /OCR unavailable/);
  const empty = await parseImage(bytes, {
    ocrAdapter: {
      id: "fixture",
      version: "1",
      recognize: async () => ({ pages: [{ text: "" }] }),
    },
  });
  assert.equal(empty.status, "completed");
  assert.ok(empty.warnings.some((value) => value.includes("no readable text")));
  const vision = await parseImage(bytes, {
    ocr: false,
    visionAdapter: {
      id: "test-vision",
      version: "1",
      describe: async () => ({ description: "Fixture description" }),
    },
  });
  assert.equal(vision.description, "Fixture description");
  assert.equal(vision.descriptionMethod.adapterId, "test-vision");
  assert.throws(() => imageMetadata(Buffer.from("<svg/>")), /valid PNG/);
  assert.throws(
    () => imageMetadata(Buffer.alloc(MAX_IMAGE_BYTES + 1)),
    /25 MB/,
  );
  const giant = Buffer.from(bytes);
  giant.writeUInt32BE(100000, 16);
  assert.throws(() => imageMetadata(giant), /megapixels/);
  await assert.rejects(
    parseImage(bytes, { signal: AbortSignal.abort() }),
    /cancelled/,
  );
});

/** Creates isolated assigned images and applied group declarations for service/security verification, cleaning only the verified temporary root. */
async function fixture(run) {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-image-parser-"),
  );
  try {
    await fs.mkdir(path.join(root, "images"));
    await fs.writeFile(path.join(root, "images/a.png"), image("red"));
    await fs.writeFile(path.join(root, "images/b.png"), image("blue"));
    await fs.writeFile(path.join(root, "unassigned.png"), image("green"));
    await fs.writeFile(path.join(root, "notes.md"), "Original note");
    for (const id of ["a", "b"]) {
      await saveWorldViewChip(root, {
        id,
        name: id,
        icon: "",
        color: "#262b30",
        tags: [],
        position: { x: 0, y: 0 },
      });
      await assignWorldViewFiles(root, id, [
        "images/a.png",
        "images/b.png",
        "notes.md",
      ]);
      await saveKnowledgeIndex(root, id, declarations, null, true);
    }
    const group = parseKnowledgeIndex(declarations).menus[0].carousels[0];
    await run(root, group);
  } finally {
    assert.ok(
      path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep),
    );
    await fs.rm(root, { recursive: true, force: true });
  }
}

/** Waits for an explicitly started background job to leave Processing without touching application UI. */
async function finished(service, root, entityId, groupId) {
  for (let retry = 0; retry < 200; retry++) {
    const status = await service.status(root, entityId, groupId);
    if (status?.status !== "processing") return status;
    await new Promise((resolve) => setTimeout(resolve, 10));
  }
  throw new Error("Image fixture job did not finish.");
}

/** Verifies explicit processing, independent structured retrieval, shared caches, content/config invalidation and source preservation. */
test("image knowledge caches share content across entities and invalidate safely", async () => {
  await fixture(async (root, group) => {
    let calls = 0;
    const service = createImageParserService({
      ocrAdapter: {
        id: "fixture",
        version: "1",
        recognize: async () => {
          calls++;
          return { pages: [{ text: `OCR fixture ${calls}` }] };
        },
      },
    });
    const original = await fs.readFile(path.join(root, "images/a.png"));
    const entity = await fs.readFile(
      path.join(root, ".wonnyy/worldview/entities/a.md"),
      "utf8",
    );
    assert.equal(
      await service.getKnowledge(root, "a", group.id, "images/a.png"),
      null,
    );
    assert.ok(
      (
        await service.preview(root, "a", group.id, "images/a.png")
      ).dataUrl.startsWith("data:image/png"),
    );
    assert.equal(
      calls,
      0,
      "applying/rendering/reading cache never invokes OCR",
    );
    await service.start(root, "a", group.id);
    assert.equal(
      (await finished(service, root, "a", group.id)).status,
      "completed",
    );
    assert.equal(calls, 2);
    const first = await service.getKnowledge(
      root,
      "a",
      group.id,
      "images/a.png",
    );
    assert.equal(first.sourceId, "images/a.png");
    assert.equal(first.extractedText, "OCR fixture 1");
    assert.equal(first.description, null);
    assert.equal(first.cacheHit, true);
    const cacheFile = path.join(
      root,
      ".engine/image-parser/cache",
      `${first.cacheKey}.json`,
    );
    const cacheBefore = await fs.readFile(cacheFile, "utf8");
    await fs.writeFile(
      cacheFile,
      JSON.stringify({
        ...JSON.parse(cacheBefore),
        description: { invalid: "untrusted cache" },
      }),
    );
    const cacheReader = createImageParserService({
      ocrAdapter: {
        id: "fixture",
        version: "1",
        recognize: async () => ({ pages: [] }),
      },
    });
    await assert.rejects(
      cacheReader.getKnowledge(root, "a", group.id, "images/a.png"),
      /Invalid image knowledge cache/,
    );
    assert.ok(
      (await cacheReader.preview(root, "a", group.id, "images/a.png")).dataUrl,
    );
    await fs.writeFile(cacheFile, cacheBefore);
    await service.start(root, "b", group.id);
    await finished(service, root, "b", group.id);
    assert.equal(calls, 2, "shared source results are reused across entities");
    const freshHost = createImageParserService({
      ocrAdapter: {
        id: "fixture",
        version: "1",
        recognize: async () => {
          throw new Error("must use cache");
        },
      },
    });
    assert.equal(
      (await freshHost.getKnowledge(root, "a", group.id, "images/a.png"))
        .sourceHash,
      first.sourceHash,
    );
    const changedAdapter = createImageParserService({
      ocrAdapter: {
        id: "fixture",
        version: "2",
        recognize: async () => ({ pages: [] }),
      },
    });
    assert.equal(
      await changedAdapter.getKnowledge(root, "a", group.id, "images/a.png"),
      null,
    );
    assert.equal(
      await service.getKnowledge(root, "a", group.id, "images/a.png", {
        ocr: false,
      }),
      null,
    );
    await service.start(root, "a", group.id, { force: true });
    await finished(service, root, "a", group.id);
    assert.equal(calls, 4);
    assert.deepEqual(
      await fs.readFile(path.join(root, "images/a.png")),
      original,
    );
    assert.equal(
      await fs.readFile(
        path.join(root, ".wonnyy/worldview/entities/a.md"),
        "utf8",
      ),
      entity,
    );
    await fs.writeFile(path.join(root, "images/a.png"), image("yellow"));
    assert.equal(
      await service.getKnowledge(root, "a", group.id, "images/a.png"),
      null,
    );
    await service.start(root, "a", group.id);
    await finished(service, root, "a", group.id);
    assert.equal(calls, 5);
    await assert.rejects(
      service.getKnowledge(root, "a", group.id, "../unassigned.png"),
      /outside/,
    );
    await assert.rejects(
      service.getKnowledge(root, "a", group.id, "unassigned.png"),
      /outside/,
    );
    const invalid = await validateKnowledgeIndex(
      root,
      "a",
      declarations.replace("images/a.png", "notes.md"),
    );
    assert.ok(invalid.errors.some((issue) => issue.message.includes("PNG")));
    await unassignWorldViewFile(root, "a", "images/a.png");
    await assert.rejects(
      service.getKnowledge(root, "a", group.id, "images/a.png"),
      /unassigned/,
    );
    const revoked = await service.status(root, "a", group.id);
    assert.equal(revoked.status, "partial");
    assert.equal(
      revoked.entries.find((entry) => entry.sourceId === "images/a.png").result,
      null,
    );
  });
});

/** Exercises interruption cleanup and original display when one OCR operation fails, with no completed-cache writes after cancellation. */
test("background cancellation and partial failures preserve original images", async () => {
  await fixture(async (root, group) => {
    let entered;
    const started = new Promise((resolve) => {
      entered = resolve;
    });
    const service = createImageParserService({
      ocrAdapter: {
        id: "cancel",
        version: "1",
        recognize: (file, { signal }) =>
          new Promise((resolve, reject) => {
            entered();
            signal.addEventListener(
              "abort",
              () => reject(new Error("cancel fixture")),
              { once: true },
            );
          }),
      },
    });
    await service.start(root, "a", group.id);
    await started;
    await service.cancel(root, "a", group.id);
    const cancelled = await finished(service, root, "a", group.id);
    assert.equal(cancelled.status, "failed");
    assert.equal(
      await service.getKnowledge(root, "a", group.id, "images/a.png"),
      null,
    );
    assert.deepEqual(
      await fs.readdir(path.join(root, ".engine/image-parser/work")),
      [],
    );
    const failure = createImageParserService({
      ocrAdapter: {
        id: "failure",
        version: "1",
        recognize: async () => {
          throw new Error("Offline OCR adapter unavailable");
        },
      },
    });
    await failure.start(root, "a", group.id);
    assert.equal(
      (await finished(failure, root, "a", group.id)).status,
      "partial",
    );
    assert.ok(
      (await failure.preview(root, "a", group.id, "images/a.png")).dataUrl,
    );
  });
});

/** Ensures a source changed during OCR cannot receive a completed cache entry from an earlier snapshot. */
test("source mutation during processing invalidates the pending result", async () => {
  await fixture(async (root, group) => {
    const service = createImageParserService({
      ocrAdapter: {
        id: "mutating-fixture",
        version: "1",
        recognize: async () => {
          await fs.writeFile(path.join(root, "images/a.png"), image("purple"));
          return { pages: [{ text: "Snapshot text" }] };
        },
      },
    });
    await assert.rejects(
      service.processSource(root, "a", group.id, "images/a.png"),
      /changed during parsing/,
    );
    assert.equal(
      await service.getKnowledge(root, "a", group.id, "images/a.png"),
      null,
    );
    assert.ok(
      (
        await validateKnowledgeIndex(
          root,
          "a",
          declarations.replace("images/a.png", "unassigned.png"),
        )
      ).errors.some((issue) => issue.message.includes("not assigned")),
    );
  });
});

/** Verifies view-only grammar, old saved declaration restoration and entity-scoped notes with conflict protection. */
test("viewer syntax and notes preserve applied declarations and original files", async () => {
  const timeline = declarations.replace("view(carousel)", "view(timeline)");
  assert.equal(
    parseKnowledgeIndex(timeline).menus[0].carousels[0].view,
    "timeline",
  );
  assert.deepEqual(
    parseKnowledgeIndex("# Monitoring\nEmpty = [\n].view(timeline)").errors,
    [],
  );
  assert.ok(
    parseKnowledgeIndex("# Monitoring\nEmpty = [\n].view(carousel)").errors
      .length,
  );
  const legacy = declarations.replace(
    "].view(carousel)",
    "].parse(image).view(carousel)",
  );
  assert.ok(parseKnowledgeIndex(legacy).errors.length);
  assert.deepEqual(
    parseKnowledgeIndex(legacy, { allowLegacyParsing: true }).errors,
    [],
  );
  await fixture(async (root) => {
    const {
      readKnowledgeIndex,
    } = require("./domains/knowledge/knowledge-store.cjs");
    const before = await readKnowledgeIndex(root, "a");
    const saved = await saveKnowledgeNote(
      root,
      "a",
      "images/a.png",
      "Human-authored note",
      before.revision,
    );
    assert.equal(saved.applied, before.applied);
    assert.equal(saved.sourceNotes[0].text, "Human-authored note");
    assert.equal((await readKnowledgeIndex(root, "b")).sourceNotes, undefined);
    await assert.rejects(
      saveKnowledgeNote(
        root,
        "a",
        "images/a.png",
        "overwrite",
        before.revision,
      ),
      /changed on disk/,
    );
    await assert.rejects(
      saveKnowledgeNote(
        root,
        "a",
        "unassigned.png",
        "unauthorized",
        saved.revision,
      ),
      /referenced/,
    );
  });
});
