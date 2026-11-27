const fs = require("node:fs/promises"),
  path = require("node:path"),
  { createHash } = require("node:crypto");
/** Bundles pinned dependencies and seals exact runtime bytes. The destination must be a fresh directory. */
async function build(directory, plugins = []) {
  const { outputFiles } = await require("esbuild").build({
    plugins,
    entryPoints: [path.join(__dirname, "index.cjs")],
    bundle: true,
    platform: "node",
    target: "node22",
    format: "cjs",
    minify: true,
    write: false,
    legalComments: "inline",
  });
  const bytes = outputFiles[0].contents,
    manifest = structuredClone(require("./manifest.template.json"));
  manifest.files = {
    "index.cjs": createHash("sha256").update(bytes).digest("hex"),
  };
  await fs.mkdir(directory);
  await fs.writeFile(path.join(directory, "index.cjs"), bytes);
  await fs.writeFile(
    path.join(directory, "engine_manifest.json"),
    JSON.stringify(manifest, null, 2) + "\n",
  );
}
module.exports = { build };
if (require.main === module)
  build(path.resolve(process.argv[2] ?? "dist")).catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
