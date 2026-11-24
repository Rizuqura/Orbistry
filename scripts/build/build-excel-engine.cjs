const fs = require("node:fs/promises");
const path = require("node:path");
const { createRequire } = require("node:module");
const { createHash, randomUUID } = require("node:crypto");
const {
  safeDirectory,
  rejectSymlink,
} = require("../../electron/ai/json-store.cjs");
const { workbook } = require("../fixtures/excel.cjs");
const { VERSION } = require("../../electron/engines/excel/limits.cjs");
const repository = path.resolve(__dirname, "../..");

/** Finds a dependency's own package manifest even when its exports deliberately hide package.json. Only local installed modules are resolved. */
async function dependencyManifest(resolveFrom, name) {
  try {
    return resolveFrom.resolve(`${name}/package.json`);
  } catch (error) {
    if (error.code !== "ERR_PACKAGE_PATH_NOT_EXPORTED") throw error;
  }
  let current = path.dirname(resolveFrom.resolve(name));
  while (path.dirname(current) !== current) {
    const candidate = path.join(current, "package.json");
    try {
      const metadata = JSON.parse(await fs.readFile(candidate, "utf8"));
      if (metadata.name === name) return candidate;
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
    current = path.dirname(current);
  }
  throw new Error(`Installed dependency manifest is missing: ${name}`);
}

/** Copies declared runtime dependencies with licenses, rejecting version collisions rather than silently producing an ambiguous standalone package. */
async function copyDependencies(manifestPath, destination, copied = new Map()) {
  const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
  const resolveFrom = createRequire(manifestPath);
  for (const name of Object.keys(manifest.dependencies ?? {})) {
    const dependencyPath = await dependencyManifest(resolveFrom, name);
    const metadata = JSON.parse(await fs.readFile(dependencyPath, "utf8"));
    if (copied.has(name)) {
      if (copied.get(name) !== metadata.version)
        throw new Error(`Conflicting dependency versions: ${name}`);
      continue;
    }
    copied.set(name, metadata.version);
    await fs.cp(
      path.dirname(dependencyPath),
      path.join(destination, "node_modules", name),
      { recursive: true, errorOnExist: true, force: false },
    );
    await copyDependencies(dependencyPath, destination, copied);
  }
  return Object.fromEntries(copied);
}

/** Enumerates staged package bytes in deterministic path order for a reviewable integrity manifest; linked entries are rejected. */
async function checksums(directory, prefix = "") {
  const files = {};
  for (const entry of (
    await fs.readdir(directory, { withFileTypes: true })
  ).sort(function byName(a, b) {
    return a.name.localeCompare(b.name, "en");
  })) {
    const relative = prefix ? `${prefix}/${entry.name}` : entry.name;
    const absolute = path.join(directory, entry.name);
    if (entry.isSymbolicLink())
      throw new Error("Linked package entries are unsupported.");
    if (entry.isDirectory())
      Object.assign(files, await checksums(absolute, relative));
    else
      files[relative] = createHash("sha256")
        .update(await fs.readFile(absolute))
        .digest("hex");
  }
  return files;
}

/** Builds and smoke-checks a self-contained package. Explicit upgrades verify the existing manifest and preserve the old package in a sibling backup; user sources are never moved. */
async function main() {
  const args = process.argv.slice(2);
  if (
    args.length &&
    (![2, 3].includes(args.length) ||
      args[0] !== "--universe" ||
      (args.length === 3 && args[2] !== "--upgrade"))
  )
    throw new Error(
      "Usage: node scripts/build/build-excel-engine.cjs [--universe <existing Universe> [--upgrade]]",
    );
  const source = path.join(repository, "electron", "engines", "excel");
  const stageRoot = path.join(repository, ".cache", "engine-packages");
  await safeDirectory(stageRoot);
  const stage = await fs.mkdtemp(
    path.join(stageRoot, `wonton-excel-${VERSION}-`),
  );
  await fs.cp(source, stage, { recursive: true });
  const dependencies = await copyDependencies(
    path.join(source, "package.json"),
    stage,
  );
  await fs.copyFile(
    path.join(repository, "docs", "worldview", "packages", "excel-v0.1.md"),
    path.join(stage, "README.md"),
  );
  const report = await require("../report-section.cjs").reportSection(
    repository,
    "wonton-excel-v0.1",
  );
  await fs.writeFile(
    path.join(stage, "IMPLEMENTATION_REPORT.md"),
    report.replaceAll("(worldview/packages/excel-v0.1.md)", "(README.md)"),
  );
  const files = await checksums(stage);
  await fs.writeFile(
    path.join(stage, "engine_manifest.json"),
    JSON.stringify(
      {
        schema_version: 1,
        engine_id: "wonton-excel",
        engine_version: VERSION,
        entry: "index.cjs",
        read_only: true,
        offline: true,
        runtime: "Node.js >=22.18.0",
        operations: ["excel"],
        dependencies,
        sha256: files,
      },
      null,
      2,
    ) + "\n",
  );
  const standalone = require(path.join(stage, "index.cjs"));
  const result = await standalone.excel(workbook(), {
    filename: "PackageSmoke.xlsx",
  });
  if (result.sheets[0].cells[1].value !== 0)
    throw new Error("Standalone package smoke failed.");
  let installed = null;
  let backup = null;
  if (args.length) {
    const root = await fs.realpath(args[1]);
    const parent = path.join(root, ".engine");
    const target = path.resolve(parent, "wonton-excel");
    if (path.relative(root, target) !== path.join(".engine", "wonton-excel"))
      throw new Error("Package target escaped Universe.");
    await safeDirectory(parent);
    await rejectSymlink(target);
    let existing = false;
    try {
      await fs.lstat(target);
      existing = true;
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
    if (existing) {
      if (!args.includes("--upgrade"))
        throw new Error(
          "Package already exists; installation refuses to overwrite it. Use --upgrade to preserve a verified backup.",
        );
      const current = JSON.parse(
        await fs.readFile(path.join(target, "engine_manifest.json"), "utf8"),
      );
      if (
        current.engine_id !== "wonton-excel" ||
        current.schema_version !== 1 ||
        !current.sha256
      )
        throw new Error(
          "Existing directory is not a recognized Excel Engine package; it was preserved.",
        );
      const actual = await checksums(target);
      delete actual["engine_manifest.json"];
      if (
        Object.keys(actual).length !== Object.keys(current.sha256).length ||
        Object.entries(actual).some(
          ([name, hash]) => current.sha256[name] !== hash,
        )
      )
        throw new Error(
          "Existing package contains changed or untracked files; it was preserved.",
        );
      backup = path.resolve(parent, `wonton-excel-backup-${randomUUID()}`);
      if (path.dirname(backup) !== parent)
        throw new Error("Package backup escaped its .engine directory.");
    }
    const temporary = path.join(
      parent,
      `.wonton-excel-install-${randomUUID()}`,
    );
    await fs.cp(stage, temporary, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
    if (backup) await fs.rename(target, backup);
    try {
      await fs.rename(temporary, target);
    } catch (error) {
      if (backup) await fs.rename(backup, target);
      throw error;
    }
    installed = target;
  }
  console.log(
    JSON.stringify(
      {
        package: stage,
        installed,
        backup,
        files: Object.keys(files).length,
        dependencies,
        smoke: "passed",
      },
      null,
      2,
    ),
  );
}
module.exports = { copyDependencies, checksums };
if (require.main === module) {
  main().catch(function failed(error) {
    console.error(error.message);
    process.exitCode = 1;
  });
}
