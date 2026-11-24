const path = require("node:path");
const {
  buildAtlas,
  checkAtlas,
  writeAtlas,
} = require("./code-atlas/generate.cjs");

/** Generates or checks repository documentation only; exits nonzero on syntax, stale-output or broken-link failures. */
function main(args = process.argv.slice(2)) {
  if (args.some((argument) => argument !== "--check") || args.length > 1)
    throw new Error("Usage: node scripts/code-atlas.cjs [--check]");
  const root = path.resolve(__dirname, "..");
  const { data, artifacts } = buildAtlas(root);
  if (args.includes("--check")) {
    const issues = checkAtlas(root, artifacts, data);
    if (issues.length) throw new Error(issues.join("\n"));
    console.log(
      `Atlas check passed: ${artifacts.size} artifacts, exact bytes and documentation links verified.`,
    );
  } else {
    writeAtlas(root, artifacts, data);
    console.log(
      `Atlas generated: ${artifacts.size} artifacts, ${data.files.length} source files, ${data.symbols.length} symbols, ${data.calls.length} resolved call sites.`,
    );
  }
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

module.exports = { main };
