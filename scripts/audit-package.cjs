const fs = require("node:fs"),
  path = require("node:path"),
  assert = require("node:assert/strict");
const asar = require("@electron/asar");
const directory = path.resolve(process.argv[2] ?? "dist/win-unpacked");
const archive = path.join(directory, "resources", "app.asar");
const entries = asar
  .listPackage(archive)
  .map((entry) => entry.replaceAll("\\", "/"));
const forbidden =
  /(?:\.test\.cjs$|\.map$|\/(?:\.git|\.next|test-results|scripts|big-context|\.wonnyy|research-outbox)(?:\/|$)|\/node_modules\/(?:next|react|react-dom|@next|electron-builder)(?:\/|$)|\/(?:provider-credentials|agents|model-settings|vault-settings)\.json$|\.(?:pdf|csv|sqlite|db|safetensors|gguf)$)/;
const found = entries.filter((entry) => forbidden.test(entry));
assert.deepEqual(found, [], "Unexpected development/user files in package");
for (const file of [
  "electron/main.cjs",
  "electron/preload.cjs",
  "electron/ai/policies/Orbistry_Strict_Context_Bound_Research_Agent_v1.1.md",
  "out/index.html",
  "out/pdf.worker.min.mjs",
  "node_modules/zod/package.json",
  "node_modules/pdfjs-dist/package.json",
  "node_modules/@napi-rs/canvas/package.json",
])
  assert.ok(entries.includes("/" + file), `Missing required ${file}`);
assert.ok(
  fs.existsSync(
    path.join(
      directory,
      "resources",
      "app.asar.unpacked",
      "electron",
      "windows-ocr.ps1",
    ),
  ),
  "OCR helper must be unpacked",
);
const html = asar.extractFile(archive, "out/index.html").toString();
assert.match(html, /Content-Security-Policy/);
const releaseVersion = require("../package.json").version;
assert.ok(html.includes(`v${releaseVersion} Victoria (Beta)`));
assert.equal(
  JSON.parse(asar.extractFile(archive, "package.json").toString()).version,
  releaseVersion,
);
function size(target) {
  return fs
    .readdirSync(target, { withFileTypes: true })
    .reduce(
      (sum, entry) =>
        sum +
        (entry.isDirectory()
          ? size(path.join(target, entry.name))
          : fs.statSync(path.join(target, entry.name)).size),
      0,
    );
}
const report = {
  unpackedBytes: size(directory),
  asarBytes: fs.statSync(archive).size,
  entries: entries.length,
  forbiddenEntries: found,
  files: fs
    .readdirSync(path.dirname(directory))
    .filter((name) => /\.(exe|blockmap)$/.test(name))
    .map((name) => ({
      name,
      bytes: fs.statSync(path.join(path.dirname(directory), name)).size,
    })),
};
fs.mkdirSync("test-results", { recursive: true });
fs.writeFileSync(
  "test-results/release-package-after.json",
  JSON.stringify(report, null, 2),
);
console.log(JSON.stringify(report, null, 2));
