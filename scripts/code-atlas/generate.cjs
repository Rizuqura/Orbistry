const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");
const { analyze, compare } = require("./analyze.cjs");
const { portable } = require("./catalog.cjs");
const { discoverIpc } = require("./ipc.cjs");
const { render } = require("./render.cjs");
const { appendPowerShell } = require("./powershell.cjs");

const PREFIX = "docs/code-atlas/";
const MANIFEST = PREFIX + "generated-files.json";
const EXCLUDED = new Set([
  "node_modules",
  ".git",
  ".next",
  "out",
  "dist",
  "release",
  "test-results",
  "tmp",
  "temp",
  ".cache",
  "coverage",
  ".codex",
  ".agents",
  ".engine",
  ".wonnyy",
  "vault",
  "vaults",
  "user-data",
  "app-data",
  "research-outbox",
  "secrets",
  "credentials",
  "tokens",
  ".venv",
  "venv",
  "__pycache__",
]);

/** Defines repository intelligence scope; excludes local state/secrets and its own generated artifacts. */
function included(file) {
  if (
    file.startsWith(PREFIX) ||
    file.split("/").some((part) => EXCLUDED.has(part))
  )
    return false;
  const base = path.posix.basename(file);
  return (
    !/^\.env(?!\.example$)/.test(base) &&
    !/(?:\.engine-private\.pem|\.tsbuildinfo|\.log|\.db|\.sqlite\d?)$/.test(
      base,
    ) &&
    !/^(?:provider-credentials|model-settings|vault-settings|agents|credentials|tokens)\.json$/.test(
      base,
    ) &&
    !file.startsWith("public/pdfjs/") &&
    file !== "public/pdf.worker.min.mjs"
  );
}

/** Inventories ignored-aware repository files using ripgrep; fails if source paths are symlinks or escape the root. */
function inventory(root) {
  const files = execFileSync(
    "rg",
    [
      "--files",
      "--hidden",
      "-g",
      "!.git",
      "-g",
      "!node_modules",
      "-g",
      "!docs/code-atlas",
      "-g",
      "!.next",
      "-g",
      "!out",
      "-g",
      "!dist",
      "-g",
      "!tmp",
      "-g",
      "!test-results",
    ],
    { cwd: root, encoding: "utf8", maxBuffer: 16 * 1024 * 1024 },
  )
    .trim()
    .split(/\r?\n/)
    .filter(Boolean)
    .map(portable)
    .filter(included)
    .sort(compare);
  for (const file of files) {
    const absolute = path.resolve(root, file);
    if (
      !absolute.startsWith(path.resolve(root) + path.sep) ||
      fs.lstatSync(absolute).isSymbolicLink()
    )
      throw new Error(`Unsafe Atlas input path: ${file}`);
  }
  return files;
}

/** Builds artifacts in memory; reads only inventoried code, selected JSON contracts and package declarations. */
function buildAtlas(
  root,
  { files = inventory(root), architecture = true } = {},
) {
  const { data, state } = analyze(root, files);
  appendPowerShell(root, files, data);
  data.ipc = discoverIpc(state);
  data.jsonContracts = files
    .filter(
      (file) =>
        /^docs\/engines\/.*schema\.json$/.test(file) ||
        /^examples\/engines\/.*\/engine_manifest\.json$/.test(file),
    )
    .map((file) => ({
      file,
      kind: file.endsWith("schema.json")
        ? "json-schema"
        : "engine-manifest-example",
      declaration: JSON.parse(
        fs.readFileSync(path.join(root, file), "utf8").replace(/^\uFEFF/, ""),
      ),
    }));
  const packageInfo = JSON.parse(
    fs.readFileSync(path.join(root, "package.json"), "utf8"),
  );
  if (data.diagnostics.length)
    throw new Error(
      `Atlas analysis found ${data.diagnostics.length} syntax diagnostics: ${JSON.stringify(data.diagnostics)}`,
    );
  const artifacts = render(data, packageInfo, { architecture });
  const owned = [...artifacts.keys(), MANIFEST].sort(compare);
  artifacts.set(
    MANIFEST,
    JSON.stringify(
      { schemaVersion: 1, generator: "scripts/code-atlas.cjs", files: owned },
      null,
      2,
    ) + "\n",
  );
  return { data, artifacts };
}

/** Lists existing Atlas files without following links, rejecting non-files and unsafe generated output ancestors. */
function existingArtifacts(root) {
  const found = [];
  const base = path.join(root, "docs", "code-atlas");
  for (const directory of [path.join(root, "docs"), base])
    if (
      fs.existsSync(directory) &&
      (fs.lstatSync(directory).isSymbolicLink() ||
        !fs.lstatSync(directory).isDirectory())
    )
      throw new Error(`Unsafe Atlas output directory: ${directory}`);
  /** Traverses only the generated documentation directory and reports repository-relative file names. */
  function visit(directory) {
    if (!fs.existsSync(directory)) return;
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const target = path.join(directory, entry.name);
      if (entry.isSymbolicLink())
        throw new Error(`Refusing linked Atlas artifact: ${target}`);
      if (entry.isDirectory()) visit(target);
      else if (entry.isFile())
        found.push(portable(path.relative(root, target)));
      else throw new Error(`Unexpected Atlas filesystem entry: ${target}`);
    }
  }
  visit(base);
  return found.sort(compare);
}

/** Validates generated relative links, explicit symbol anchors and source-line bounds against virtual artifacts and the source inventory. */
function validateLinks(root, artifacts, data) {
  const errors = [];
  const known = new Set(data.inventory);
  const lineCounts = new Map(data.files.map((file) => [file.file, file.lines]));
  for (const [file, content] of artifacts) {
    if (!/\.(?:md|svg)$/.test(file)) continue;
    const targets = file.endsWith(".md")
      ? [...content.matchAll(/\]\(<([^>]+)>\)/g)].map((match) => match[1])
      : [...content.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
    for (const target of targets) {
      if (/^(?:https?:|mailto:)/.test(target)) continue;
      const [relative, fragment] = target.split("#");
      const resolved = path.posix.normalize(
        path.posix.join(path.posix.dirname(file), relative),
      );
      if (resolved.startsWith("../") || path.posix.isAbsolute(resolved)) {
        errors.push(`${file}: escaped target ${target}`);
        continue;
      }
      const generated = artifacts.get(resolved);
      if (generated === undefined && !known.has(resolved)) {
        errors.push(`${file}: missing target ${target}`);
        continue;
      }
      if (
        fragment &&
        generated !== undefined &&
        !generated.includes(`id="${fragment}"`)
      )
        errors.push(`${file}: missing generated anchor ${target}`);
      if (fragment && generated === undefined && /^L\d+$/.test(fragment)) {
        const lines =
          lineCounts.get(resolved) ??
          fs.readFileSync(path.join(root, resolved), "utf8").split(/\r?\n/)
            .length;
        if (+fragment.slice(1) < 1 || +fragment.slice(1) > lines)
          errors.push(`${file}: source line out of bounds ${target}`);
      }
    }
  }
  return errors;
}

/** Compares exact generated bytes and reports stale/missing/extra files without mutating the repository. */
function checkAtlas(root, artifacts, data) {
  const issues = validateLinks(root, artifacts, data);
  const existing = existingArtifacts(root);
  for (const [file, content] of artifacts) {
    if (!existing.includes(file)) issues.push(`Missing: ${file}`);
    else if (fs.readFileSync(path.join(root, file), "utf8") !== content)
      issues.push(`Stale: ${file}`);
  }
  for (const file of existing)
    if (!artifacts.has(file)) issues.push(`Unexpected: ${file}`);
  return issues;
}

/** Writes only generated Atlas artifacts. Removes obsolete previously owned files, while refusing to overwrite/delete unexpected manual files. */
function writeAtlas(root, artifacts, data) {
  const linkErrors = validateLinks(root, artifacts, data);
  if (linkErrors.length) throw new Error(linkErrors.join("\n"));
  const existing = existingArtifacts(root);
  const previous = existing.includes(MANIFEST)
    ? JSON.parse(fs.readFileSync(path.join(root, MANIFEST), "utf8")).files
    : [];
  if (
    !Array.isArray(previous) ||
    previous.some(
      (file) =>
        typeof file !== "string" ||
        !file.startsWith(PREFIX) ||
        path.posix.normalize(file) !== file,
    )
  )
    throw new Error("Invalid Atlas ownership manifest.");
  const unexpected = existing.filter((file) => !previous.includes(file));
  if (unexpected.length)
    throw new Error(
      `Unowned Atlas files require review; preserved: ${unexpected.join(", ")}`,
    );
  for (const [file, content] of artifacts) {
    const absolute = path.resolve(root, file);
    if (
      !absolute.startsWith(path.resolve(root, "docs", "code-atlas") + path.sep)
    )
      throw new Error(`Unsafe output path: ${file}`);
    fs.mkdirSync(path.dirname(absolute), { recursive: true });
    fs.writeFileSync(absolute, content, "utf8");
  }
  for (const file of previous)
    if (!artifacts.has(file) && existing.includes(file))
      fs.unlinkSync(path.join(root, file));
}

module.exports = {
  inventory,
  included,
  buildAtlas,
  validateLinks,
  checkAtlas,
  writeAtlas,
};
