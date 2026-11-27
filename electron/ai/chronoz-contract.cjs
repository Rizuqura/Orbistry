const fs = require("node:fs/promises");
const path = require("node:path");
const { createHash } = require("node:crypto");
const { z } = require("./schemas.cjs");
const { ModelRuntimeError } = require("./model-errors.cjs");
const sha = (bytes) => createHash("sha256").update(bytes).digest("hex");
const monthSchema = z.string().regex(/^(19|20|21)\d{2}-(0[1-9]|1[0-2])$/);
const argumentsSchema = z.object({ month: monthSchema.optional() }).strict();
function fail(message, code = "MODEL_INVALID_RESPONSE") {
  throw new ModelRuntimeError(code, message);
}
function contained(root, target) {
  const relative = path.relative(root, target);
  return (
    relative !== "" &&
    !relative.startsWith(".." + path.sep) &&
    relative !== ".." &&
    !path.isAbsolute(relative)
  );
}
async function unlinked(target) {
  const absolute = path.resolve(target);
  for (let p = absolute; path.dirname(p) !== p; p = path.dirname(p)) {
    if ((await fs.lstat(p)).isSymbolicLink())
      fail(
        "Linked bundle/report paths are not allowed. Extract a fresh bundle.",
      );
  }
  // Windows native pickers/temp paths may use 8.3 names or different casing.
  // Canonicalize after rejecting links; compare this identity on subsequent runs.
  return fs.realpath(absolute);
}
async function boundedRead(file, maxBytes) {
  await unlinked(file);
  const handle = await fs.open(file, "r");
  try {
    const info = await handle.stat();
    if (!info.isFile() || info.size > maxBytes)
      fail("Engine file is missing, oversized or not a regular file.");
    // Read from the checked descriptor with a hard allocation bound, including growth races.
    const bytes = Buffer.alloc(info.size + 1);
    let length = 0;
    while (length < bytes.length) {
      const read = await handle.read(
        bytes,
        length,
        bytes.length - length,
        length,
      );
      if (!read.bytesRead) break;
      length += read.bytesRead;
    }
    if (length !== info.size)
      fail(
        "Engine file changed while reading. Retry after the bundle is idle.",
      );
    return bytes.subarray(0, length);
  } finally {
    await handle.close();
  }
}
module.exports = {
  argumentsSchema,
  monthSchema,
  sha,
  unlinked,
  boundedRead,
  contained,
  fail,
};
