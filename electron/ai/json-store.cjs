const fs = require("node:fs/promises");
const path = require("node:path");
const { randomUUID } = require("node:crypto");
const { ModelRuntimeError } = require("./model-errors.cjs");

// Each store owns a serial queue. A rejected write must not poison later reads.
function serialQueue() {
  let tail = Promise.resolve();
  return (operation) => {
    const next = tail.then(operation);
    tail = next.catch(() => {});
    return next;
  };
}

async function rejectSymlink(target) {
  try {
    if ((await fs.lstat(target)).isSymbolicLink())
      throw new Error("Symbolic metadata paths are not supported.");
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}

async function safeDirectory(directory) {
  // Check each existing parent before creating/writing internal metadata.
  const parents = [];
  for (
    let current = path.resolve(directory);
    path.dirname(current) !== current;
    current = path.dirname(current)
  )
    parents.unshift(current);
  for (const parent of parents) await rejectSymlink(parent);
  await fs.mkdir(directory, { recursive: true });
}

async function readJson(target, validate, fallback) {
  try {
    await rejectSymlink(target);
    return validate(JSON.parse(await fs.readFile(target, "utf8")));
  } catch (error) {
    if (error.code === "ENOENT" && fallback !== undefined)
      return structuredClone(fallback);
    throw new ModelRuntimeError(
      "MODEL_STORAGE_INVALID",
      `Cannot read ${path.basename(target)}. Restore or repair this metadata file; it has not been overwritten.`,
      { cause: error.message },
    );
  }
}

async function writeJson(target, value) {
  await safeDirectory(path.dirname(target));
  await rejectSymlink(target);
  const temporary = `${target}.${randomUUID()}.tmp`;
  try {
    const file = await fs.open(temporary, "wx");
    try {
      await file.writeFile(`${JSON.stringify(value, null, 2)}\n`);
      await file.sync();
    } finally {
      await file.close();
    }
    await fs.rename(temporary, target);
  } catch (error) {
    throw new ModelRuntimeError(
      "MODEL_STORAGE_FAILED",
      "Could not save local model state.",
      { cause: error.message },
    );
  } finally {
    await fs.rm(temporary, { force: true }).catch(() => {});
  }
}

/**
 * Saves caller-validated text to an internal metadata path using a synced temporary file and atomic rename.
 * original is the expected previous text, null for a new document, or undefined to skip the conflict check.
 * Throws on linked paths, filesystem errors, or external edits; source files are not involved.
 */
async function writeTextAtomic(target, text, original) {
  await safeDirectory(path.dirname(target));
  await rejectSymlink(target);
  const temporary = `${target}.${randomUUID()}.tmp`;
  try {
    const file = await fs.open(temporary, "wx");
    try {
      await file.writeFile(text, "utf8");
      await file.sync();
    } finally {
      await file.close();
    }
    // Detect external edits instead of overwriting a document read earlier.
    let current = null;
    try {
      current = await fs.readFile(target, "utf8");
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
    if (original !== undefined && current !== original)
      throw new Error("Metadata changed on disk. Reload before saving again.");
    await rejectSymlink(target);
    await fs.rename(temporary, target);
  } finally {
    try {
      await fs.unlink(temporary);
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  }
}

module.exports = {
  writeTextAtomic,
  readJson,
  writeJson,
  serialQueue,
  safeDirectory,
  rejectSymlink,
};
