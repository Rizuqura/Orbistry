// Conservative pattern audit; prints locations only, never matching values.
const fs = require("node:fs"),
  path = require("node:path"),
  { execFileSync } = require("node:child_process");
const patterns = [
  /sk-or-v1-[A-Za-z0-9]{40,}/g,
  /AIza[A-Za-z0-9_-]{30,}/g,
  /(?:ghp_|github_pat_)[A-Za-z0-9_]{30,}/g,
  /nvapi-[A-Za-z0-9_-]{30,}/g,
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/g,
];
const findings = [];
function inspect(buffer, location) {
  if (buffer.includes(0)) return;
  const text = buffer.toString("utf8");
  for (let index = 0; index < patterns.length; index++) {
    patterns[index].lastIndex = 0;
    if (patterns[index].test(text)) findings.push({ location, pattern: index });
  }
}
const tracked = execFileSync("git", ["ls-files", "-z"])
  .toString()
  .split("\0")
  .filter(Boolean);
for (const file of tracked)
  if (fs.existsSync(file))
    inspect(fs.readFileSync(file), { scope: "working-tree", path: file });
const untracked = execFileSync("git", [
  "ls-files",
  "--others",
  "--exclude-standard",
  "-z",
])
  .toString()
  .split("\0")
  .filter(Boolean);
for (const file of untracked)
  if (fs.statSync(file).isFile())
    inspect(fs.readFileSync(file), { scope: "new-source-file", path: file });
// Inspect the current static release artifact too; source-only scans cannot
// detect a secret injected while bundling. Report locations, never values.
let exportedFilesScanned = 0;
function inspectExport(directory) {
  if (!fs.existsSync(directory)) return;
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) inspectExport(file);
    else if (entry.isFile()) {
      exportedFilesScanned++;
      inspect(fs.readFileSync(file), {
        scope: "static-release",
        path: path.relative(process.cwd(), file),
      });
    }
  }
}
inspectExport(path.resolve("out"));
const objects = execFileSync("git", ["rev-list", "--objects", "--all"], {
  encoding: "utf8",
})
  .trim()
  .split("\n");
const identities = new Map(
  objects.map((line) => [line.slice(0, 40), line.slice(41)]),
);
const input = [...identities.keys()].join("\n") + "\n";
const batch = execFileSync("git", ["cat-file", "--batch"], {
  input,
  maxBuffer: 256 * 1024 * 1024,
});
let offset = 0,
  blobs = 0;
while (offset < batch.length) {
  const end = batch.indexOf(10, offset);
  if (end < 0) break;
  const [id, type, length] = batch.subarray(offset, end).toString().split(" ");
  const size = Number(length);
  if (!Number.isSafeInteger(size)) throw Error("Invalid Git batch record");
  const content = batch.subarray(end + 1, end + 1 + size);
  if (type === "blob") {
    blobs++;
    inspect(content, { scope: "history", path: identities.get(id), blob: id });
  }
  offset = end + 1 + size + 1;
}
const report = {
  trackedFilesScanned: tracked.length,
  untrackedFilesScanned: untracked.length,
  exportedFilesScanned,
  historicalBlobsScanned: blobs,
  findings,
  limitations:
    "Known credential/private-key patterns only; not an exhaustive entropy or secret-manager audit. Git history was read, never rewritten.",
};
fs.mkdirSync("test-results", { recursive: true });
fs.writeFileSync(
  path.join("test-results", "release-secret-audit.json"),
  JSON.stringify(report, null, 2),
);
console.log(JSON.stringify(report));
if (findings.length) process.exitCode = 1;
