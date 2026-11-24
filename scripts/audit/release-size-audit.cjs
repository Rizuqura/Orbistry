const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");
const root = path.resolve(__dirname, "../..");
const files = [],
  directories = [],
  errors = [];
function walk(directory) {
  let bytes = 0,
    count = 0;
  let entries;
  try {
    entries = fs.readdirSync(directory, { withFileTypes: true });
  } catch (error) {
    errors.push({ path: path.relative(root, directory), code: error.code });
    return { bytes, count };
  }
  for (const entry of entries) {
    const full = path.join(directory, entry.name);
    if (entry.isSymbolicLink()) continue;
    if (entry.isDirectory()) {
      const child = walk(full);
      bytes += child.bytes;
      count += child.count;
    } else if (entry.isFile()) {
      const size = fs.statSync(full).size;
      bytes += size;
      count++;
      files.push({
        path: path.relative(root, full).replaceAll("\\", "/"),
        bytes: size,
      });
    }
  }
  directories.push({
    path: path.relative(root, directory).replaceAll("\\", "/") || ".",
    bytes,
    files: count,
  });
  return { bytes, count };
}
const total = walk(root);
const tracked = execFileSync("git", ["ls-files", "-z"], { cwd: root })
  .toString()
  .split("\0")
  .filter(Boolean);
const trackedFiles = tracked.map((file) => ({
  path: file,
  bytes: fs.existsSync(path.join(root, file))
    ? fs.statSync(path.join(root, file)).size
    : 0,
}));
const pending = execFileSync(
  "git",
  ["ls-files", "--others", "--exclude-standard", "-z"],
  { cwd: root },
)
  .toString()
  .split("\0")
  .filter(Boolean);
const sourceFiles = [
  ...trackedFiles,
  ...pending.map((file) => ({
    path: file,
    bytes: fs.statSync(path.join(root, file)).size,
  })),
];
const top = (rows, limit = 20) =>
  [...rows].sort((a, b) => b.bytes - a.bytes).slice(0, limit);
const topLevel = directories.filter(
  (row) => row.path !== "." && !row.path.includes("/"),
);
const packages = directories.filter((row) =>
  /^node_modules\/(?:@[^/]+\/[^/]+|[^@/][^/]*)$/.test(row.path),
);
const report = {
  capturedAt: new Date().toISOString(),
  unit: "bytes (logical file sizes, links excluded)",
  total,
  topLevel: top(topLevel, 100),
  topDirectories: top(directories.filter((row) => row.path !== ".")),
  largestPackages: top(packages),
  trackedBytes: trackedFiles.reduce((sum, row) => sum + row.bytes, 0),
  sourceBytesIncludingPendingFiles: sourceFiles.reduce(
    (sum, row) => sum + row.bytes,
    0,
  ),
  largestTrackedFiles: top(trackedFiles),
  topFiles: top(files),
  errors,
};
const destination = path.resolve(
  process.argv[2] ?? "test-results/release-size.json",
);
fs.mkdirSync(path.dirname(destination), { recursive: true });
fs.writeFileSync(destination, JSON.stringify(report, null, 2) + "\n");
console.log(
  JSON.stringify(
    {
      total,
      trackedBytes: report.trackedBytes,
      topLevel: report.topLevel,
      largestPackages: report.largestPackages.slice(0, 8),
      errors,
    },
    null,
    2,
  ),
);
