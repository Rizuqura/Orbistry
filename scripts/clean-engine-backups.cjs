const fs = require("node:fs/promises");
const path = require("node:path");
const { checksums } = require("./build/build-excel-engine.cjs");
const { rejectSymlink } = require("../electron/ai/json-store.cjs");
const uuid = "[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}";

/** Verifies every package byte against its manifest, rejecting altered files and links before considering removal of an obsolete backup. */
async function verify(directory, id) {
  await rejectSymlink(directory);
  const manifestPath = path.join(directory, "engine_manifest.json");
  await rejectSymlink(manifestPath);
  const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
  if (
    manifest.engine_id !== id ||
    !manifest.sha256 ||
    !Object.keys(manifest.sha256).length
  )
    throw new Error(`Unrecognized package manifest: ${directory}`);
  const actual = await checksums(directory);
  delete actual["engine_manifest.json"];
  if (
    Object.keys(actual).length !== Object.keys(manifest.sha256).length ||
    Object.entries(actual).some(
      ([name, hash]) => manifest.sha256[name] !== hash,
    )
  )
    throw new Error(
      `Changed or untracked backup/package files were preserved: ${directory}`,
    );
  return manifest.engine_version;
}

/** Plans removal only of recognized, intact installer backups whose active replacement also verifies; active engines, caches and arbitrary directories are never selected. */
async function planCleanup(universe) {
  const root = await fs.realpath(universe);
  const engine = path.join(root, ".engine");
  await rejectSymlink(engine);
  const candidates = [];
  for (const entry of await fs.readdir(engine, { withFileTypes: true })) {
    const legacy = new RegExp(`^(wonton-excel)-backup-${uuid}$`, "i").exec(
      entry.name,
    );
    if (legacy)
      candidates.push({
        id: legacy[1],
        target: path.join(engine, entry.name),
        active: path.join(engine, legacy[1]),
      });
    else if (["daily-price", "yahoo-financials"].includes(entry.name)) {
      const parent = path.join(engine, entry.name);
      await rejectSymlink(parent);
      for (const child of await fs.readdir(parent))
        if (new RegExp(`^package-backup-${uuid}$`, "i").test(child))
          candidates.push({
            id: entry.name,
            target: path.join(parent, child),
            active: path.join(parent, "package"),
          });
    }
  }
  const plan = [];
  for (const candidate of candidates) {
    const relative = path.relative(engine, candidate.target);
    if (
      !relative ||
      relative.startsWith("..") ||
      path.isAbsolute(relative) ||
      candidate.target === candidate.active
    )
      throw new Error("Backup removal escaped its Engine directory.");
    const activeVersion = await verify(candidate.active, candidate.id);
    const backupVersion = await verify(candidate.target, candidate.id);
    plan.push({ ...candidate, activeVersion, backupVersion });
  }
  return plan;
}

/** Prints a reviewable plan by default; --apply revalidates each exact package immediately before removing it. */
async function main() {
  const args = process.argv.slice(2);
  if (
    args[0] !== "--universe" ||
    !args[1] ||
    args.length > 3 ||
    (args[2] && args[2] !== "--apply")
  )
    throw new Error(
      "Usage: node scripts/clean-engine-backups.cjs --universe <existing Universe> [--apply]",
    );
  const plan = await planCleanup(args[1]);
  if (args[2] === "--apply")
    for (const item of plan) {
      await verify(item.active, item.id);
      await verify(item.target, item.id);
      await fs.rm(item.target, { recursive: true });
    }
  console.log(
    JSON.stringify({ applied: args[2] === "--apply", backups: plan }, null, 2),
  );
}
module.exports = { planCleanup };
if (require.main === module)
  main().catch(function failed(error) {
    console.error(error.message);
    process.exitCode = 1;
  });
