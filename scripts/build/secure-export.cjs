const fs = require("node:fs");
const path = require("node:path");
const { createHash } = require("node:crypto");
function secure(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      secure(file);
      continue;
    }
    if (!entry.name.endsWith(".html")) continue;
    let html = fs.readFileSync(file, "utf8");
    html = html.replace(
      /<meta http-equiv="Content-Security-Policy" content="[^"]*"\s*\/?\s*>/gi,
      "",
    );
    const hashes = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
      .filter((match) => !/\bsrc\s*=/i.test(match[1]) && match[2])
      .map(
        (match) =>
          `'sha256-${createHash("sha256").update(match[2]).digest("base64")}'`,
      );
    const policy = `default-src 'self'; script-src 'self' 'wasm-unsafe-eval' ${[...new Set(hashes)].join(" ")}; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; worker-src 'self' blob:; object-src 'none'; base-uri 'none'; form-action 'none'; frame-src 'none'`;
    html = html.replace(
      "<head>",
      `<head><meta http-equiv="Content-Security-Policy" content="${policy}">`,
    );
    fs.writeFileSync(file, html);
  }
}
secure(path.resolve(__dirname, "../../out"));
console.log(
  "Secured static export with inline-script hashes and local-only resource policy.",
);
