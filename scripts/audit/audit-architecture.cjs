const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");
const { builtinModules } = require("node:module");
const { performance } = require("node:perf_hooks");
const ts = require("typescript");
const builtins = new Set(
  builtinModules.map((name) => name.replace(/^node:/, "")),
);
const rendererPath = /^(app|components|features)\//;
// Reviewed pure arithmetic shared by existing Settings/backend consumers; new imports are not implicitly allowed.
const rendererShared = new Set(["electron/shared/context-limits.cjs"]);

/** Resolves literal local imports against source files only. Does not load modules, evaluate manifests or read user/application data. */
function resolveLocal(root, from, specifier) {
  const base = specifier.startsWith("@/")
    ? path.join(root, specifier.slice(2))
    : specifier.startsWith(".")
      ? path.resolve(root, path.dirname(from), specifier)
      : null;
  if (!base) return null;
  for (const extension of [
    "",
    ".cjs",
    ".ts",
    ".tsx",
    ".js",
    ".json",
    "/index.cjs",
    "/index.ts",
    "/index.tsx",
  ]) {
    const candidate = base + extension;
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile())
      return path.relative(root, candidate).split(path.sep).join("/");
  }
  return null;
}

/** Extracts actual literal runtime imports with locations, excluding type-only imports and strings/comments. Lazy require edges remain visible as structural dependencies. */
function runtimeImports(source, file) {
  const ast = ts.createSourceFile(
    file,
    source,
    ts.ScriptTarget.Latest,
    true,
    file.endsWith(".tsx")
      ? ts.ScriptKind.TSX
      : file.endsWith(".ts")
        ? ts.ScriptKind.TS
        : ts.ScriptKind.JS,
  );
  const imports = [];
  let dynamic = 0;
  /** Visits syntax nodes while retaining whether execution of an import is deferred by a function body. */
  function visit(node, deferred = false) {
    let argument;
    if (ts.isImportDeclaration(node)) {
      const clause = node.importClause;
      const named = clause?.namedBindings;
      const onlyTypes =
        clause?.isTypeOnly ||
        (!clause?.name &&
          named &&
          ts.isNamedImports(named) &&
          named.elements.length > 0 &&
          named.elements.every((item) => item.isTypeOnly));
      if (!onlyTypes) argument = node.moduleSpecifier;
    } else if (ts.isExportDeclaration(node) && !node.isTypeOnly) {
      const named = node.exportClause;
      if (!(
        named &&
        ts.isNamedExports(named) &&
        named.elements.length > 0 &&
        named.elements.every((item) => item.isTypeOnly)
      ))
        argument = node.moduleSpecifier;
    } else if (
      ts.isCallExpression(node) &&
      ((ts.isIdentifier(node.expression) &&
        node.expression.text === "require") ||
        node.expression.kind === ts.SyntaxKind.ImportKeyword)
    ) {
      if (node.arguments.length === 1 && ts.isStringLiteral(node.arguments[0]))
        argument = node.arguments[0];
      else dynamic++;
    }
    if (argument && ts.isStringLiteral(argument))
      imports.push({
        specifier: argument.text,
        line:
          ast.getLineAndCharacterOfPosition(argument.getStart(ast)).line + 1,
        deferred,
      });
    ts.forEachChild(node, (child) =>
      visit(child, deferred || ts.isFunctionLike(node)),
    );
  }
  visit(ast);
  return { imports, dynamic };
}

/** Finds strongly connected source groups. Includes lazy imports; a reported cycle requires review and is not proof of a runtime initialization failure. */
function dependencyCycles(graph) {
  let next = 0;
  const indices = new Map(),
    low = new Map(),
    stack = [],
    active = new Set(),
    cycles = [];
  /** Traverses one graph component with Tarjan's algorithm; no module code is executed. */
  function visit(node) {
    indices.set(node, next);
    low.set(node, next++);
    stack.push(node);
    active.add(node);
    for (const edge of graph.get(node) ?? []) {
      if (!graph.has(edge.target)) continue;
      if (!indices.has(edge.target)) {
        visit(edge.target);
        low.set(node, Math.min(low.get(node), low.get(edge.target)));
      } else if (active.has(edge.target))
        low.set(node, Math.min(low.get(node), indices.get(edge.target)));
    }
    if (low.get(node) !== indices.get(node)) return;
    const members = [];
    let current;
    do {
      current = stack.pop();
      active.delete(current);
      members.push(current);
    } while (current !== node);
    if (
      members.length > 1 ||
      (graph.get(node) ?? []).some((edge) => edge.target === node)
    ) {
      const included = new Set(members);
      cycles.push({
        files: members.sort(),
        edges: members.flatMap((from) =>
          (graph.get(from) ?? [])
            .filter((edge) => included.has(edge.target))
            .map((edge) => ({ from, ...edge })),
        ),
      });
    }
  }
  for (const node of graph.keys()) if (!indices.has(node)) visit(node);
  return cycles.sort((a, b) => a.files[0].localeCompare(b.files[0]));
}

/** Audits selected repository sources against explicit ORB-ARCH-001 import boundaries. Returns violations, structural cycles and utility-placement debt; cannot establish runtime authorization, dynamic-import safety or live-provider health. */
function auditArchitecture(
  root = path.resolve(__dirname, "../.."),
  files = null,
) {
  const started = performance.now();
  files ??= execFileSync(
    "rg",
    ["--files", "electron", "features", "components", "app", "types"],
    { cwd: root, encoding: "utf8" },
  )
    .trim()
    .split(/\r?\n/);
  const sources = files
    .map((file) => file.split(path.sep).join("/"))
    .filter(
      (file) =>
        /\.(cjs|js|ts|tsx)$/.test(file) &&
        !/\.(?:test\.cjs|d\.cts|d\.ts)$/.test(file),
    );
  const graph = new Map(),
    violations = [],
    sharedUtilities = [],
    rendererSharedModules = [],
    unresolvedLocalImports = [];
  let dynamicImports = 0,
    importsChecked = 0;
  for (const file of sources.sort()) {
    const extracted = runtimeImports(
      fs.readFileSync(path.join(root, file), "utf8"),
      file,
    );
    dynamicImports += extracted.dynamic;
    const edges = [];
    for (const item of extracted.imports) {
      importsChecked++;
      const target = resolveLocal(root, file, item.specifier),
        detail = {
          file,
          line: item.line,
          specifier: item.specifier,
          target,
          deferred: item.deferred,
        };
      if (
        (item.specifier.startsWith(".") || item.specifier.startsWith("@/")) &&
        !target
      )
        unresolvedLocalImports.push(detail);
      if (target)
        edges.push({ target, line: item.line, deferred: item.deferred });
      let pureShared = false;
      if (rendererPath.test(file) && rendererShared.has(target)) {
        const contract = runtimeImports(
          fs.readFileSync(path.join(root, target), "utf8"),
          target,
        );
        pureShared = contract.imports.length === 0 && contract.dynamic === 0;
        rendererSharedModules.push({ ...detail, dependencyFree: pureShared });
      }
      if (
        rendererPath.test(file) &&
        (builtins.has(item.specifier.replace(/^node:/, "")) ||
          item.specifier === "electron" ||
          (target?.startsWith("electron/") && !pureShared))
      )
        violations.push({ rule: "PORTAL_NO_PRIVILEGED_IMPORT", ...detail });
      if (file.startsWith("electron/") && rendererPath.test(target ?? ""))
        violations.push({ rule: "BACKEND_NO_PRESENTATION_IMPORT", ...detail });
      const core =
        file.startsWith("electron/") &&
        !file.startsWith("electron/ai/") &&
        !["electron/main.cjs", "electron/preload.cjs"].includes(file);
      if (core && target?.startsWith("electron/ai/"))
        violations.push({ rule: "CORE_NO_AI_RUNTIME_IMPORT", ...detail });
      else if (core && target?.startsWith("electron/ai/"))
        sharedUtilities.push(detail);
    }
    graph.set(file, edges);
  }
  const cycles = dependencyCycles(graph);
  return {
    specification: "ORB-ARCH-001",
    sourceFiles: sources.length,
    runtimeImportsChecked: importsChecked,
    nonliteralImportsForManualReview: dynamicImports,
    violations,
    unresolvedLocalImports,
    dependencyCycles: cycles,
    unexpectedDependencyCycles: cycles,
    sharedUtilities,
    rendererSharedModules,
    elapsedMs: Math.round((performance.now() - started) * 100) / 100,
  };
}

if (require.main === module) {
  const result = auditArchitecture();
  console.log(JSON.stringify(result, null, 2));
  if (
    result.violations.length ||
    result.unresolvedLocalImports.length ||
    result.unexpectedDependencyCycles.length
  )
    process.exitCode = 1;
}
module.exports = { auditArchitecture, runtimeImports, dependencyCycles };
