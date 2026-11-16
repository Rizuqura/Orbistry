const fs = require("node:fs/promises");
const path = require("node:path");
const { randomUUID } = require("node:crypto");
const {
  safeDirectory,
  rejectSymlink,
} = require("../electron/ai/json-store.cjs");
const { copyDependencies, checksums } = require("./build-excel-engine.cjs");

/** Builds a self-contained financials and earnings package. Explicit upgrades verify installed files and retain a sibling package backup, preserving the separate financial cache. */
async function main() {
  const args = process.argv.slice(2);
  if (
    args.length &&
    (![2, 3].includes(args.length) ||
      args[0] !== "--universe" ||
      (args.length === 3 && args[2] !== "--upgrade"))
  )
    throw new Error(
      "Usage: node scripts/build-yahoo-financials-engine.cjs [--universe <existing Universe> [--upgrade]]",
    );
  const repository = path.resolve(__dirname, "..");
  const source = path.join(
    repository,
    "electron",
    "engines",
    "yahoo-financials",
  );
  const stageRoot = path.join(repository, ".cache", "engine-packages");
  await safeDirectory(stageRoot);
  const stage = await fs.mkdtemp(
    path.join(stageRoot, "yahoo-financials-0.1.0-"),
  );
  await fs.cp(source, stage, { recursive: true });
  const dependencies = await copyDependencies(
    path.join(source, "package.json"),
    stage,
  );
  await fs.copyFile(
    path.join(
      repository,
      "docs",
      "worldview",
      "packages",
      "yahoo-financials-v0.1.md",
    ),
    path.join(stage, "README.md"),
  );
  await fs.copyFile(
    path.join(
      repository,
      "docs",
      "worldview",
      "reports",
      "yahoo-financials-v0.1.md",
    ),
    path.join(stage, "IMPLEMENTATION_REPORT.md"),
  );
  const sha256 = await checksums(stage);
  await fs.writeFile(
    path.join(stage, "engine_manifest.json"),
    JSON.stringify(
      {
        schema_version: 1,
        engine_id: "yahoo-financials",
        engine_version: "0.1.0",
        entry: "index.cjs",
        operations: ["financials", "earnings"],
        dependencies,
        sha256,
      },
      null,
      2,
    ) + "\n",
  );
  const bundled = require(path.join(stage, "index.cjs"));
  if (bundled.normalizeSymbol(" bbca.jk ") !== "BBCA.JK")
    throw new Error("Financial package smoke failed.");
  let installed = null;
  let backup = null;
  if (args.length) {
    const root = await fs.realpath(args[1]);
    const parent = path.join(root, ".engine", "yahoo-financials");
    const target = path.join(parent, "package");
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
          "A yahoo-financials package already exists. Use --upgrade to retain a verified backup.",
        );
      const manifest = JSON.parse(
        await fs.readFile(path.join(target, "engine_manifest.json"), "utf8"),
      );
      const actual = await checksums(target);
      delete actual["engine_manifest.json"];
      if (
        manifest.engine_id !== "yahoo-financials" ||
        !manifest.sha256 ||
        Object.keys(actual).length !== Object.keys(manifest.sha256).length ||
        Object.entries(actual).some(
          ([name, hash]) => manifest.sha256[name] !== hash,
        )
      )
        throw new Error(
          "Installed financial package contains changed or untracked files. Existing files were preserved.",
        );
      backup = path.resolve(parent, `package-backup-${randomUUID()}`);
      if (
        path.dirname(backup) !== parent ||
        path.dirname(path.resolve(target)) !== parent
      )
        throw new Error("Package move escaped its Engine directory.");
    }
    const temporary = path.join(parent, `.package-install-${randomUUID()}`);
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
        files: Object.keys(sha256).length,
        dependencies,
        smoke: "passed",
      },
      null,
      2,
    ),
  );
}
main().catch(function failed(error) {
  console.error(error.message);
  process.exitCode = 1;
});
