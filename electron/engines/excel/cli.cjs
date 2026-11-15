const { excel, renderWorkbook } = require("./index.cjs");

/** Prints structured JSON by default or full faithful Markdown with --markdown. Errors go to stderr with a failing exit code; source files remain untouched. */
async function main() {
  const [filename, flag] = process.argv.slice(2);
  if (!filename || (flag && flag !== "--markdown"))
    throw new Error("Usage: node cli.cjs workbook.xlsx [--markdown]");
  const result = await excel(filename);
  process.stdout.write(
    flag === "--markdown"
      ? renderWorkbook(result, { full: true }) + "\n"
      : JSON.stringify(result, null, 2) + "\n",
  );
}
main().catch(function failed(error) {
  console.error(error.message);
  process.exitCode = 1;
});
