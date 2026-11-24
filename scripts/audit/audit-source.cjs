const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { execFileSync } = require("node:child_process");
const ts = require("typescript");

/** Audits repository CommonJS syntax and literal relative imports under electron without executing application code. Dynamic imports, renderer types and runtime behavior require their separate checks. */
function auditSource(root = path.resolve(__dirname, "../..")) {
  const files = execFileSync(
    "rg",
    [
      "--files",
      "electron",
      "features",
      "components",
      "scripts",
      "app",
      "types",
    ],
    { cwd: root, encoding: "utf8" },
  )
    .trim()
    .split(/\r?\n/);
  const syntaxErrors = [],
    missingImports = [];
  let checked = 0,
    imports = 0;
  for (const relative of files.filter((file) => file.endsWith(".cjs"))) {
    const file = path.join(root, relative),
      source = fs.readFileSync(file, "utf8");
    try {
      new vm.Script(source, { filename: relative });
      checked++;
    } catch (error) {
      syntaxErrors.push({ file: relative, message: error.message });
    }
    if (
      !relative.startsWith("electron" + path.sep) ||
      relative.endsWith(".test.cjs")
    )
      continue;
    const ast = ts.createSourceFile(
      file,
      source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.JS,
    );
    /** Visits actual require calls, excluding lookalikes embedded in comments and template text. */
    function visit(node) {
      if (
        ts.isCallExpression(node) &&
        ts.isIdentifier(node.expression) &&
        node.expression.text === "require" &&
        node.arguments.length === 1 &&
        ts.isStringLiteral(node.arguments[0]) &&
        node.arguments[0].text.startsWith(".")
      ) {
        imports++;
        try {
          require.resolve(
            path.resolve(path.dirname(file), node.arguments[0].text),
          );
        } catch (error) {
          if (error.code !== "MODULE_NOT_FOUND") throw error;
          missingImports.push({
            file: relative,
            module: node.arguments[0].text,
          });
        }
      }
      ts.forEachChild(node, visit);
    }
    visit(ast);
  }
  return {
    indexedFiles: files.length,
    commonJsFilesChecked: checked,
    literalProductionImportsChecked: imports,
    syntaxErrors,
    missingImports,
  };
}
if (require.main === module) {
  const result = auditSource();
  console.log(JSON.stringify(result, null, 2));
  if (result.syntaxErrors.length || result.missingImports.length)
    process.exitCode = 1;
}
module.exports = { auditSource };
