const fs = require("fs");
const path = require("path");

// Electron's Chromium can lag the newest JavaScript typed-array APIs used by
// PDF.js. Keep the renderer and worker on the legacy build, which includes the
// compatibility polyfills required by those runtimes.
const source = require.resolve("pdfjs-dist/legacy/build/pdf.worker.min.mjs");
const targetDirectory = path.join(__dirname, "../../public");
const target = path.join(targetDirectory, "pdf.worker.min.mjs");

fs.mkdirSync(targetDirectory, { recursive: true });
fs.copyFileSync(source, target);
const packageDirectory = path.dirname(
  require.resolve("pdfjs-dist/package.json"),
);
for (const directory of ["cmaps", "standard_fonts", "wasm"]) {
  fs.cpSync(
    path.join(packageDirectory, directory),
    path.join(targetDirectory, "pdfjs", directory),
    { recursive: true },
  );
}
console.log(
  "Prepared local PDF.js worker, character maps, fonts, and decoders.",
);
