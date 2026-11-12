const test = require("node:test");
const assert = require("node:assert/strict");
const {
  normalizeChipColor,
  hexToHsv,
  hsvToHex,
  shadeChipColor,
  chipTextColor,
} = require("./chip-colors.ts");
const { readChipIcon } = require("./chip-icon.ts");

/** Checks color math against primary colors, grays, and arbitrary hex round trips. */
test("chip colors round-trip through HSV and wheel endpoints remain consistent", () => {
  for (const color of [
    "#000000",
    "#ffffff",
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#808080",
    "#262b30",
    "#db8243",
    "#2767ab",
  ]) {
    assert.equal(hsvToHex(hexToHsv(color)), color);
  }
  assert.equal(hsvToHex({ hue: 360, saturation: 1, value: 1 }), "#ff0000");
  assert.equal(hsvToHex({ hue: -120, saturation: 1, value: 1 }), "#0000ff");
  assert.equal(hsvToHex({ hue: 0, saturation: 2, value: 2 }), "#ff0000");
  assert.equal(hsvToHex({ hue: 0, saturation: 1, value: -1 }), "#000000");
});

/** Checks invalid colors are rejected and chosen block colors retain readable text and dimensional sides. */
test("custom colors normalize, validate, shade, and choose contrasting ink", () => {
  assert.equal(normalizeChipColor(" #ABCDEF "), "#abcdef");
  for (const invalid of ["red", "#gggggg", "#abcd", "#12345678", "url(test)"])
    assert.throws(() => normalizeChipColor(invalid), /RRGGBB/);
  assert.equal(shadeChipColor("#ffffff", 0.5), "#808080");
  assert.equal(shadeChipColor("#000000", 0.7), "#000000");
  assert.equal(chipTextColor("#ffffff"), "#101418");
  assert.equal(chipTextColor("#ffff00"), "#101418");
  assert.equal(chipTextColor("#000000"), "#f4f7fa");
  assert.equal(chipTextColor("#262b30"), "#f4f7fa");
});

/** Ensures unsupported and oversized files fail before any browser decoding or storage can occur. */
test("custom icons reject unsupported and oversized input", async () => {
  await assert.rejects(
    readChipIcon(new File(["text"], "notes.txt", { type: "text/plain" })),
    /PNG, JPEG, or WebP/,
  );
  await assert.rejects(
    readChipIcon(
      new File([new Uint8Array(5 * 1024 * 1024 + 1)], "large.png", {
        type: "image/png",
      }),
    ),
    /smaller than 5 MB/,
  );
});
