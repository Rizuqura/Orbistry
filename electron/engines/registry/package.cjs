const fs = require("node:fs/promises");
const path = require("node:path");
const {
  manifest,
  LIMITS,
  fail,
  filePath,
  sha,
} = require("../contracts/contract.cjs");
const { writeJson } = require("../../core/persistence/json-store.cjs");
const { verifySignature } = require("./signature.cjs");

/** Reads a regular, non-linked file within a fixed byte limit. Rejects path changes/oversized files before collecting bytes. */
async function readBytes(file, maximum = LIMITS.fileBytes) {
  const stat = await fs.lstat(file);
  if (!stat.isFile() || stat.isSymbolicLink() || stat.size > maximum)
    fail(
      "ENGINE_FILE_INVALID",
      "Package file is linked, non-regular or oversized.",
    );
  const handle = await fs.open(file, "r");
  try {
    const opened = await handle.stat();
    if (opened.size !== stat.size || opened.ino !== stat.ino)
      fail("ENGINE_CHANGED", "Package changed while being read.");
    const data = Buffer.alloc(Math.min(maximum + 1, stat.size + 1));
    let used = 0;
    while (used < data.length) {
      const result = await handle.read(data, used, data.length - used, null);
      if (!result.bytesRead) break;
      used += result.bytesRead;
    }
    const after = await handle.stat();
    if (
      used !== stat.size ||
      after.size !== stat.size ||
      after.mtimeMs !== stat.mtimeMs
    )
      fail("ENGINE_CHANGED", "Package changed while being read.");
    return data.subarray(0, used);
  } finally {
    await handle.close();
  }
}

/** Parses bounded JSON without returning parser snippets in errors. */
function parseJson(bytes) {
  try {
    return JSON.parse(bytes.toString("utf8").replace(/^\uFEFF/, ""));
  } catch {
    fail("ENGINE_JSON_INVALID", "Invalid Engine JSON document.");
  }
}

/** Lists portable package files without following links. Bundled dependencies must fit the same bounded integrity inventory. */
async function filesIn(
  root,
  directory = root,
  output = [],
  budget = { entries: 0 },
) {
  if (path.relative(root, directory).split(path.sep).length > 8)
    fail("ENGINE_PACKAGE_TOO_LARGE", "Package directory depth exceeded.");
  for await (const entry of await fs.opendir(directory)) {
    if (++budget.entries > LIMITS.files * 2 + 1)
      fail(
        "ENGINE_PACKAGE_TOO_LARGE",
        "Package directory entry count exceeded.",
      );
    const absolute = path.join(directory, entry.name);
    const relative = path.relative(root, absolute).split(path.sep).join("/");
    filePath(relative);
    if (entry.isSymbolicLink())
      fail("ENGINE_PATH_INVALID", "Package links are forbidden.");
    if (entry.isDirectory()) await filesIn(root, absolute, output, budget);
    else if (entry.isFile()) output.push(relative);
    else fail("ENGINE_FILE_INVALID", "Unsupported package entry.");
    if (output.length > LIMITS.files + 1)
      fail("ENGINE_PACKAGE_TOO_LARGE", "Package file count exceeded.");
  }
  return output.sort();
}

/** Inspects checksums and any publisher signature without loading JavaScript. Every non-manifest file must be listed exactly; returns verified bytes and proof status without granting local trust. */
async function inspectPackage(directory) {
  const root = await fs.realpath(directory);
  const raw = await readBytes(
    path.join(root, "engine_manifest.json"),
    256 * 1024,
  );
  const source = parseJson(raw);
  const contract = manifest(source);
  const signature = verifySignature(source);
  const names = (await filesIn(root)).filter(
    (name) => name !== "engine_manifest.json",
  );
  if (
    JSON.stringify(names) !== JSON.stringify(Object.keys(contract.files).sort())
  )
    fail(
      "ENGINE_INTEGRITY_FAILED",
      "Package inventory differs from its manifest.",
    );
  const files = new Map([["engine_manifest.json", raw]]);
  let bytes = raw.length;
  for (const name of names) {
    const data = await readBytes(path.join(root, name));
    bytes += data.length;
    if (bytes > LIMITS.packageBytes)
      fail("ENGINE_PACKAGE_TOO_LARGE", "Package byte limit exceeded.");
    if (sha(data) !== contract.files[name])
      fail("ENGINE_INTEGRITY_FAILED", "Package checksum mismatch.");
    files.set(name, data);
  }
  return {
    root,
    manifest: contract,
    digest: sha(raw),
    bytes,
    files,
    signature,
  };
}

/** Rebuilds author-owned checksums and removes previous signatures so edited bytes must be re-signed explicitly. Never executes package code or grants trust. */
async function sealPackage(directory) {
  const root = await fs.realpath(directory);
  const source = parseJson(
    await readBytes(path.join(root, "engine_manifest.json"), 256 * 1024),
  );
  const files = {};
  for (const name of (await filesIn(root)).filter(
    (name) => name !== "engine_manifest.json",
  ))
    files[name] = sha(await readBytes(path.join(root, name)));
  // Any author edit/seal invalidates prior publisher proof; re-sign the completed package explicitly.
  const { signature, ...unsigned } = source;
  const result = manifest({ ...unsigned, files });
  await writeJson(path.join(root, "engine_manifest.json"), result);
  return inspectPackage(root);
}
module.exports = { inspectPackage, sealPackage, readBytes, parseJson, filesIn };
