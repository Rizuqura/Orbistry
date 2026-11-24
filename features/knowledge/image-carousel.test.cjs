const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const ts = require("typescript");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const { carouselSlides, observationTime } = require("./carousel-model.ts");
const filename = path.join(__dirname, "image-carousel.tsx");
const compiled = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
  compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS },
});
const component = new Module(filename);
const nativeRequire = Module.createRequire(filename);
/** Isolates presentation rendering and rejects any accidental desktop processing call. */
component.require = function dependencies(specifier) {
  if (specifier === "../worldview/chip-session")
    return {
      requireWorldViewBridge() {
        throw new Error("No processing in the viewer");
      },
    };
  if (specifier === "./carousel-model")
    return { carouselSlides, observationTime };
  if (specifier === "./carousel-source")
    return {
      CarouselImage: (props) => React.createElement("img", { alt: props.name }),
    };
  return nativeRequire(specifier);
};
component._compile(compiled.outputText, filename);
const { ImageCarousel } = component.exports;

/** Verifies source context, reserved analysis, notes and both navigation presentations without Engine access. */
test("shared source viewer renders Collection and undated Timeline", () => {
  const props = {
    entityId: "a",
    vaultPath: "fixture",
    group: {
      id: "group",
      name: "Gallery",
      sourceIds: ["Site_July.png", "Site_January.png"],
      view: "carousel",
    },
    sources: [
      {
        sourceId: "Site_July.png",
        filename: "Site_July.png",
        extension: ".png",
        sizeBytes: 100,
      },
    ],
    index: {
      revision: null,
      sourceNotes: [{ sourceId: "Site_July.png", text: "Human note" }],
    },
    onIndexChange() {},
  };
  const collection = renderToStaticMarkup(
    React.createElement(ImageCarousel, props),
  );
  assert.match(
    collection,
    /aria-label="Previous image in Gallery"[^>]*>&lt;<\/button>/,
  );
  assert.match(
    collection,
    /aria-label="Next image in Gallery"[^>]*>&gt;<\/button>/,
  );
  assert.ok(collection.includes("Image thumbnails"));
  assert.ok(collection.includes("Source Information"));
  assert.ok(collection.includes("Human note"));
  assert.ok(collection.includes("No analysis available"));
  assert.ok(!collection.includes('type="range"'));
  const timeline = renderToStaticMarkup(
    React.createElement(ImageCarousel, {
      ...props,
      group: { ...props.group, view: "timeline" },
    }),
  );
  assert.ok(timeline.includes("Timeline observations"));
  assert.ok(timeline.includes("Undated observation 1"));
  assert.ok(timeline.includes("Undated observations"));
  assert.match(timeline, /type="range"[^>]*min="0"[^>]*max="1"[^>]*step="1"/);
  assert.ok(timeline.includes("Observation Information"));
  assert.deepEqual(
    carouselSlides({ ...props.group, view: "timeline" }, props.sources).map(
      (slide) => slide.sourceId,
    ),
    props.group.sourceIds,
  );
  assert.equal(observationTime("2026-02-30"), null);
  const dated = {
    ...props.group,
    view: "timeline",
    observations: [
      { sourceId: "Site_July.png", observedAt: "2026-07-01" },
      { sourceId: "Site_January.png", observedAt: "2026-01-01" },
    ],
  };
  const datedMarkup = renderToStaticMarkup(
    React.createElement(ImageCarousel, {
      ...props,
      group: dated,
    }),
  );
  assert.ok(datedMarkup.includes("Observation 1 of 2, 2026-01-01"));
  assert.ok(!datedMarkup.includes("Undated observations"));
  assert.ok(
    datedMarkup.indexOf('aria-label="Select Site_January.png"') <
      datedMarkup.indexOf('aria-label="Select Site_July.png"'),
  );
  assert.deepEqual(
    carouselSlides(dated, []).map((slide) => slide.sourceId),
    ["Site_January.png", "Site_July.png"],
  );
  assert.deepEqual(
    carouselSlides(
      { ...dated, observations: dated.observations.slice(0, 1) },
      [],
    ).map((slide) => slide.sourceId),
    props.group.sourceIds,
  );
});

/** Verifies safe single-observation controls, an empty state and all discrete stops in a large collection. */
test("timeline scrubber handles one, zero and fifty observations", () => {
  const props = {
    entityId: "a",
    vaultPath: "fixture",
    sources: [],
    index: { revision: null },
    /** Ignores persistence in this pure presentation fixture. */
    onIndexChange() {},
    group: {
      id: "timeline",
      name: "Monitoring",
      view: "timeline",
      sourceIds: ["only.png"],
    },
  };
  const single = renderToStaticMarkup(
    React.createElement(ImageCarousel, props),
  );
  assert.match(single, /type="range"[^>]*max="0"[^>]*step="1"[^>]*disabled=""/);
  assert.ok(single.includes("Observation 1 of 1"));
  const empty = renderToStaticMarkup(
    React.createElement(ImageCarousel, {
      ...props,
      group: { ...props.group, sourceIds: [] },
    }),
  );
  assert.ok(empty.includes("No observations in this timeline."));
  assert.ok(!empty.includes('type="range"'));
  const many = renderToStaticMarkup(
    React.createElement(ImageCarousel, {
      ...props,
      group: {
        ...props.group,
        sourceIds: Array.from(
          { length: 50 },
          (_, number) => `source-${number}.png`,
        ),
      },
    }),
  );
  assert.match(many, /type="range"[^>]*max="49"[^>]*step="1"/);
  assert.equal((many.match(/data-position=/g) ?? []).length, 50);
});
