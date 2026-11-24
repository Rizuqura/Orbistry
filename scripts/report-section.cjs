const fs = require("node:fs/promises");
const path = require("node:path");

/** Extracts optional historical documentation for an offline Engine package. An explicitly absent report is disclosed in the artifact and points to its bundled README; unreadable/malformed existing reports still abort packaging. */
async function reportSection(repository, slug) {
  if (!/^[a-z0-9.-]+$/.test(slug)) throw Error("Invalid report section.");
  let text;
  try {
    text = await fs.readFile(path.join(repository, "docs/REPORTS.md"), "utf8");
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    return "# Historical implementation report unavailable\n\nThe consolidated historical report is no longer present in this repository. No historical implementation or verification claims are included in this package. See [the bundled package and API guide](README.md) for current documentation.\n";
  }
  const marker = `<a id="report-${slug}"></a>`;
  if (text.split(marker).length !== 2)
    throw Error("Implementation report section is unavailable.");
  return text.split(marker)[1].split("\n---\n")[0].trim() + "\n";
}
module.exports = { reportSection };
