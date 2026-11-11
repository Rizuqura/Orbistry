// Explicit Agent Construction reads only. Never added to a vault scan/search.
const fs = require("node:fs/promises");
const path = require("node:path");

function isMemoryPath(relativePath) {
  return (
    typeof relativePath === "string" &&
    /^agentContext\.memory\//i.test(relativePath) &&
    !relativePath.includes("\\") &&
    !relativePath.includes("\0") &&
    relativePath.length <= 128 &&
    relativePath
      .split("/")
      .every((part) => part && part !== "." && part !== "..") &&
    /\.(md|markdown)$/i.test(relativePath)
  );
}

async function memoryEntry(rootPath, relativePath) {
  if (!isMemoryPath(relativePath))
    throw new Error("Choose one Markdown file inside agentContext.memory.");
  const root = await fs.realpath(rootPath);
  let current = root;
  for (const part of relativePath.split("/")) {
    current = path.join(current, part);
    const stats = await fs.lstat(current);
    if (stats.isSymbolicLink())
      throw new Error("Linked agent-memory files/folders are not supported.");
  }
  const actual = await fs.realpath(current);
  const within = path.relative(root, actual);
  if (within.startsWith("..") || path.isAbsolute(within))
    throw new Error("Agent memory is outside the active vault.");
  const stats = await fs.stat(actual);
  if (!stats.isFile() || stats.size > 320000)
    throw new Error("Choose a bounded Markdown agent-memory file.");
  return {
    kind: "file",
    name: path.basename(relativePath),
    relativePath,
    extension: path.extname(relativePath).toLowerCase(),
    sizeBytes: stats.size,
    readable: true,
  };
}

async function listMemoryFiles(rootPath) {
  const files = [];
  async function visit(relative) {
    const directory = path.join(rootPath, relative);
    let stats;
    try {
      stats = await fs.lstat(directory);
    } catch (error) {
      if (error.code === "ENOENT") return;
      throw error;
    }
    if (!stats.isDirectory() || stats.isSymbolicLink()) return;
    for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
      if (entry.isSymbolicLink()) continue;
      const child = `${relative}/${entry.name}`;
      if (entry.isDirectory() && child.length < 110) await visit(child);
      else if (entry.isFile() && isMemoryPath(child)) {
        try {
          await memoryEntry(rootPath, child);
          files.push(child);
        } catch {
          /* Unsupported or unavailable entries are not selectable. */
        }
      }
      if (files.length > 1000) throw new Error("Too many agent-memory files.");
    }
  }
  await visit("agentContext.memory");
  return files.sort();
}
module.exports = { isMemoryPath, memoryEntry, listMemoryFiles };
