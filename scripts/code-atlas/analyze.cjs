const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const ts = require("typescript");
const { moduleFor, roleFor, portable } = require("./catalog.cjs");

const CODE = /\.(?:[cm]?js|[cm]?ts|jsx|tsx)$/;
const CALLABLE = new Set([
  ts.SyntaxKind.FunctionDeclaration,
  ts.SyntaxKind.FunctionExpression,
  ts.SyntaxKind.ArrowFunction,
  ts.SyntaxKind.MethodDeclaration,
  ts.SyntaxKind.MethodSignature,
  ts.SyntaxKind.Constructor,
  ts.SyntaxKind.GetAccessor,
  ts.SyntaxKind.SetAccessor,
  ts.SyntaxKind.CallSignature,
  ts.SyntaxKind.ConstructSignature,
  ts.SyntaxKind.FunctionType,
  ts.SyntaxKind.ConstructorType,
]);

/** Produces deterministic byte-order sorting, independent of host locale. */
function compare(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

/** Creates a compact stable anchor from the declaration's source location and kind. */
function anchor(id) {
  return (
    "s-" + crypto.createHash("sha256").update(id).digest("hex").slice(0, 16)
  );
}

/** Resolves only files present in the repository inventory; never opens application data or dependencies. */
function resolveLocal(from, specifier, known) {
  const base = specifier.startsWith("@/")
    ? specifier.slice(2)
    : specifier.startsWith(".")
      ? path.posix.normalize(
          path.posix.join(path.posix.dirname(from), specifier),
        )
      : null;
  if (!base || base.startsWith("../")) return null;
  const candidates = [
    base,
    ...[
      ".ts",
      ".tsx",
      ".cts",
      ".mts",
      ".cjs",
      ".mjs",
      ".js",
      ".jsx",
      ".d.ts",
      ".json",
    ].map((ext) => base + ext),
    ...[".ts", ".tsx", ".cjs", ".js", ".mjs"].map(
      (ext) => base + "/index" + ext,
    ),
  ];
  if (/\.[cm]?js$/.test(base))
    candidates.push(
      base
        .replace(/\.cjs$/, ".cts")
        .replace(/\.mjs$/, ".mts")
        .replace(/\.js$/, ".ts"),
    );
  return candidates.find((candidate) => known.has(candidate)) ?? null;
}

/** Reads documentation from the declaration or its variable owner, preserving missing documentation explicitly. */
function documentation(node) {
  let current = node;
  for (let depth = 0; current && depth < 4; depth++, current = current.parent) {
    if (current.jsDoc?.length) {
      const doc = current.jsDoc
        .map((item) =>
          typeof item.comment === "string"
            ? item.comment
            : (item.comment?.map((part) => part.text ?? "").join("") ?? ""),
        )
        .filter(Boolean)
        .join(" ");
      if (doc)
        return { text: doc.replace(/\s+/g, " ").trim(), evidence: "jsdoc" };
    }
    if (
      !ts.isVariableDeclaration(current) &&
      !ts.isVariableDeclarationList(current) &&
      !CALLABLE.has(current.kind)
    )
      break;
  }
  return {
    text: "No purpose documentation on this declaration; inspect the linked implementation.",
    evidence: "undocumented",
  };
}

/** Derives a source label without interpreting strings as behavior or authority. */
function nodeName(node, source) {
  if (node.name) return node.name.getText(source);
  if (node.kind === ts.SyntaxKind.Constructor) return "constructor";
  if (node.kind === ts.SyntaxKind.CallSignature) return "<call signature>";
  if (
    ts.isVariableDeclaration(node.parent) ||
    ts.isPropertyAssignment(node.parent) ||
    ts.isPropertyDeclaration(node.parent)
  )
    return node.parent.name.getText(source);
  const point = source.getLineAndCharacterOfPosition(node.getStart(source));
  return `<anonymous@${point.line + 1}:${point.character + 1}>`;
}

/** Distinguishes explicit type syntax from compiler inference; inferred types are not runtime validation. */
function typeText(node, checker, returnType = false) {
  const explicit = node.type;
  if (explicit)
    return {
      text: explicit.getText().replace(/\s+/g, " "),
      evidence: "annotation",
    };
  const signature = returnType
    ? checker.getSignatureFromDeclaration(node)
    : null;
  const inferred = returnType
    ? signature && checker.getReturnTypeOfSignature(signature)
    : checker.getTypeAtLocation(node);
  const text = inferred
    ? checker.typeToString(inferred, node, ts.TypeFormatFlags.NoTruncation)
    : "unknown";
  return {
    text: text.length > 500 ? text.slice(0, 497) + "..." : text,
    evidence: "compiler-inferred",
    truncated: text.length > 500,
  };
}

/** Tests structural Zod initializer syntax only; schemas are never evaluated by the Atlas. */
function isSchema(node) {
  if (!ts.isVariableDeclaration(node) || !node.initializer) return false;
  let found = false;
  /** Recognizes a literal z.* call, including one nested in chained schema construction. */
  function visit(child) {
    if (
      ts.isCallExpression(child) &&
      ts.isPropertyAccessExpression(child.expression) &&
      ts.isIdentifier(child.expression.expression) &&
      child.expression.expression.text === "z"
    )
      found = true;
    ts.forEachChild(child, visit);
  }
  visit(node.initializer);
  return found;
}

/** Analyzes repository JS/TS with a local-only TypeScript program. Returns JSON-safe records plus AST state for IPC discovery; never executes indexed code. */
function analyze(root, inventory) {
  const known = new Set(inventory);
  const files = inventory.filter((file) => CODE.test(file)).sort(compare);
  const options = {
    allowJs: true,
    checkJs: false,
    noLib: true,
    types: [],
    noEmit: true,
    skipLibCheck: true,
    module: ts.ModuleKind.NodeNext,
    moduleResolution: ts.ModuleResolutionKind.NodeNext,
    jsx: ts.JsxEmit.Preserve,
    target: ts.ScriptTarget.ESNext,
  };
  const host = ts.createCompilerHost(options);
  // Isolate semantic analysis from node_modules, default libs and arbitrary triple-slash references.
  host.fileExists = (file) => known.has(portable(path.relative(root, file)));
  host.readFile = (file) =>
    host.fileExists(file) ? fs.readFileSync(file, "utf8") : undefined;
  host.getSourceFile = (file, languageVersion) => {
    const text = host.readFile(file);
    return text === undefined
      ? undefined
      : ts.createSourceFile(file, text, languageVersion, true);
  };
  host.resolveModuleNames = (names, containing) =>
    names.map((specifier) => {
      const target = resolveLocal(
        portable(path.relative(root, containing)),
        specifier,
        known,
      );
      return target && CODE.test(target)
        ? {
            resolvedFileName: path.join(root, target),
            isExternalLibraryImport: false,
          }
        : undefined;
    });
  const program = ts.createProgram(
    files.map((file) => path.join(root, file)),
    options,
    host,
  );
  const checker = program.getTypeChecker();
  const symbols = [],
    fileRecords = [],
    dependencies = [],
    unresolvedCalls = [],
    calls = [],
    exports = [],
    diagnostics = [];
  const nodeRecords = new Map(),
    bindingRecords = new Map(),
    sources = new Map();
  const exportedDeclarations = new Set();
  for (const file of files) {
    const source = program.getSourceFile(path.join(root, file));
    const moduleSymbol = checker.getSymbolAtLocation(source);
    if (!moduleSymbol) continue;
    for (const exported of checker.getExportsOfModule(moduleSymbol)) {
      const target =
        exported.flags & ts.SymbolFlags.Alias
          ? checker.getAliasedSymbol(exported)
          : exported;
      for (const declaration of target.declarations ?? [])
        exportedDeclarations.add(declaration);
    }
  }

  /** Resolves an aliased declaration to a repository symbol; unknown receivers are deliberately left unresolved. */
  function recordFor(node, seen = new Set()) {
    if (!node || seen.has(node)) return null;
    seen.add(node);
    if (ts.isParenthesizedExpression(node))
      return recordFor(node.expression, seen);
    if (nodeRecords.has(node)) return nodeRecords.get(node);
    if (bindingRecords.has(node)) return bindingRecords.get(node);
    const symbol = checker.getSymbolAtLocation(node);
    if (!symbol) return null;
    const target =
      symbol.flags & ts.SymbolFlags.Alias
        ? checker.getAliasedSymbol(symbol)
        : symbol;
    const matches = (target.declarations ?? [])
      .map((decl) => nodeRecords.get(decl) ?? bindingRecords.get(decl))
      .filter(Boolean);
    const unique = [
      ...new Map(matches.map((item) => [item.id, item])).values(),
    ];
    const resolved =
      unique.length === 1 ? unique[0] : unique.find((item) => item.hasBody);
    if (
      resolved?.callable ||
      (resolved &&
        (!target.valueDeclaration ||
          !ts.isVariableDeclaration(target.valueDeclaration)))
    )
      return resolved;
    const declaration = target.valueDeclaration;
    if (
      declaration &&
      ts.isVariableDeclaration(declaration) &&
      declaration.initializer &&
      declaration.parent.flags & ts.NodeFlags.Const &&
      (ts.isIdentifier(declaration.initializer) ||
        ts.isPropertyAccessExpression(declaration.initializer))
    )
      return recordFor(declaration.initializer, seen) ?? resolved ?? null;
    return resolved ?? null;
  }

  for (const file of files) {
    const source = program.getSourceFile(path.join(root, file));
    sources.set(file, source);
    const moduleId = moduleFor(file),
      role = roleFor(file);
    const moduleRecord = {
      id: `${file}:module`,
      anchor: anchor(`${file}:module`),
      name: "<module>",
      qualifiedName: file,
      kind: "Module",
      file,
      line: 1,
      column: 1,
      endLine: source.getLineAndCharacterOfPosition(source.end).line + 1,
      module: moduleId,
      role,
      callable: false,
      purpose: {
        text: "Source-file initialization scope; call edges here describe top-level expressions.",
        evidence: "structural",
      },
      exports: [],
      callers: [],
      callees: [],
      relatedTests: [],
    };
    symbols.push(moduleRecord);
    nodeRecords.set(source, moduleRecord);
    fileRecords.push({
      file,
      module: moduleId,
      role,
      bytes: Buffer.byteLength(source.text),
      sha256: crypto.createHash("sha256").update(source.text).digest("hex"),
      lines: moduleRecord.endLine,
      symbols: [],
    });
    for (const error of source.parseDiagnostics)
      diagnostics.push({
        file,
        line: source.getLineAndCharacterOfPosition(error.start ?? 0).line + 1,
        message: ts.flattenDiagnosticMessageText(error.messageText, " "),
      });
    /** Indexes declarations before resolving calls so forward references and cross-file aliases are available. */
    function declare(node, owner = moduleRecord) {
      const callable = CALLABLE.has(node.kind);
      const schema = isSchema(node);
      const variable =
        ts.isVariableDeclaration(node) &&
        !node.initializer?.parameters &&
        ts.isIdentifier(node.name) &&
        exportedDeclarations.has(node);
      const isDeclaration =
        callable ||
        schema ||
        variable ||
        ts.isClassDeclaration(node) ||
        ts.isClassExpression(node) ||
        ts.isInterfaceDeclaration(node) ||
        ts.isTypeAliasDeclaration(node) ||
        ts.isEnumDeclaration(node);
      if (isDeclaration) {
        const point = source.getLineAndCharacterOfPosition(
          node.getStart(source),
        );
        const kind = schema ? "SchemaBinding" : ts.SyntaxKind[node.kind];
        const id = `${file}:${point.line + 1}:${point.character + 1}:${kind}`;
        const name = nodeName(node, source);
        const record = {
          id,
          anchor: anchor(id),
          name,
          qualifiedName:
            owner.kind === "Module" ? name : `${owner.qualifiedName}.${name}`,
          kind,
          file,
          line: point.line + 1,
          column: point.character + 1,
          endLine: source.getLineAndCharacterOfPosition(node.end).line + 1,
          module: moduleId,
          role,
          callable,
          modifiers: (node.modifiers ?? []).map((modifier) =>
            ts.SyntaxKind[modifier.kind].replace(/Keyword$/, "").toLowerCase(),
          ),
          hasBody: !!node.body,
          ownerId: owner.id,
          purpose: documentation(node),
          exports: [],
          callers: [],
          callees: [],
          relatedTests: [],
        };
        if (callable) {
          record.parameters = node.parameters.map((parameter) => ({
            name: parameter.name.getText(source),
            optional: !!parameter.questionToken || !!parameter.initializer,
            rest: !!parameter.dotDotDotToken,
            defaultPresent: !!parameter.initializer,
            contract: typeText(parameter, checker),
          }));
          record.returns = typeText(node, checker, true);
          record.async = !!node.modifiers?.some(
            (modifier) => modifier.kind === ts.SyntaxKind.AsyncKeyword,
          );
        }
        if (
          schema ||
          ts.isInterfaceDeclaration(node) ||
          ts.isTypeAliasDeclaration(node) ||
          ts.isEnumDeclaration(node)
        )
          record.contract = {
            evidence: schema
              ? "zod-syntax-candidate"
              : "typescript-declaration",
            declaration: node.getText(source),
          };
        symbols.push(record);
        nodeRecords.set(node, record);
        if (callable && ts.isVariableDeclaration(node.parent))
          bindingRecords.set(node.parent, record);
        if (callable && ts.isPropertyAssignment(node.parent))
          bindingRecords.set(node.parent, record);
        owner = record;
      }
      ts.forEachChild(node, (child) => declare(child, owner));
    }
    declare(source);
  }

  for (const [file, source] of sources) {
    const moduleRecord = nodeRecords.get(source);
    /** Records literal dependency edges separately from function calls and labels type-only imports. */
    function dependency(node, owner) {
      let argument,
        kind,
        typeOnly = false;
      if (ts.isImportDeclaration(node)) {
        argument = node.moduleSpecifier;
        kind = "import";
        typeOnly =
          !!node.importClause?.isTypeOnly ||
          (!node.importClause?.name &&
            ts.isNamedImports(node.importClause?.namedBindings ?? source) &&
            node.importClause.namedBindings.elements.every(
              (item) => item.isTypeOnly,
            ));
      } else if (ts.isExportDeclaration(node) && node.moduleSpecifier) {
        argument = node.moduleSpecifier;
        kind = "re-export";
        typeOnly =
          !!node.isTypeOnly ||
          (node.exportClause &&
            ts.isNamedExports(node.exportClause) &&
            node.exportClause.elements.length > 0 &&
            node.exportClause.elements.every((item) => item.isTypeOnly));
      } else if (ts.isImportTypeNode(node)) {
        argument = ts.isLiteralTypeNode(node.argument)
          ? node.argument.literal
          : null;
        kind = "import-type";
        typeOnly = true;
      } else if (
        ts.isCallExpression(node) &&
        ((ts.isIdentifier(node.expression) &&
          node.expression.text === "require") ||
          node.expression.kind === ts.SyntaxKind.ImportKeyword)
      ) {
        argument = node.arguments[0];
        kind =
          node.expression.kind === ts.SyntaxKind.ImportKeyword
            ? "dynamic-import"
            : "require";
        if (
          kind === "require" &&
          checker
            .getSymbolAtLocation(node.expression)
            ?.declarations?.some(
              (declaration) => !declaration.getSourceFile().isDeclarationFile,
            )
        ) {
          argument = null;
          kind = "shadowed-require";
        }
      }
      if (!kind) return;
      const literal =
        argument &&
        (ts.isStringLiteral(argument) ||
          ts.isNoSubstitutionTemplateLiteral(argument));
      const specifier = literal ? argument.text : null;
      const target = specifier ? resolveLocal(file, specifier, known) : null;
      dependencies.push({
        from: file,
        line:
          source.getLineAndCharacterOfPosition(node.getStart(source)).line + 1,
        kind,
        typeOnly,
        deferred: owner !== moduleRecord,
        specifier,
        target,
        status: !literal
          ? "dynamic-unresolved"
          : target
            ? "local-resolved"
            : specifier.startsWith(".") || specifier.startsWith("@/")
              ? "local-unresolved"
              : "external",
      });
    }
    /** Walks call sites with lexical ownership; callbacks are indexed but are not assumed to have been invoked. */
    function visit(node, owner = moduleRecord) {
      owner = nodeRecords.get(node) ?? owner;
      dependency(node, owner);
      if (ts.isCallExpression(node) || ts.isNewExpression(node)) {
        const expression = node.expression;
        let target = recordFor(expression);
        if (ts.isNewExpression(node) && target?.kind === "ClassDeclaration") {
          target =
            symbols.find(
              (item) =>
                item.ownerId === target.id && item.kind === "Constructor",
            ) ?? target;
        }
        const signature = checker.getResolvedSignature(node);
        const signatureTarget =
          signature?.declaration && nodeRecords.get(signature.declaration);
        // Signature inference can point to a default parameter or one branch of a union.
        // It supplies a candidate, never a verified call target without a bound declaration.
        const site = {
          from: owner.id,
          file,
          line:
            source.getLineAndCharacterOfPosition(node.getStart(source)).line +
            1,
          column:
            source.getLineAndCharacterOfPosition(node.getStart(source))
              .character + 1,
          expression: expression
            .getText(source)
            .replace(/\s+/g, " ")
            .slice(0, 180),
          kind: ts.isNewExpression(node) ? "construct" : "call",
        };
        if (
          target &&
          ((target.callable &&
            target.hasBody &&
            !["GetAccessor", "SetAccessor"].includes(target.kind)) ||
            (ts.isNewExpression(node) && /Class/.test(target.kind)))
        )
          calls.push({
            ...site,
            to: target.id,
            evidence: "static-declaration",
            optional: !!node.questionDotToken,
          });
        else
          unresolvedCalls.push({
            ...site,
            candidateId: target?.id ?? signatureTarget?.id ?? null,
            reason:
              target && ["GetAccessor", "SetAccessor"].includes(target.kind)
                ? "accessor-return-dispatch"
                : target || (signatureTarget && !signatureTarget.hasBody)
                  ? "declaration-without-runtime-body"
                  : signatureTarget
                    ? "signature-only-candidate"
                    : (ts.isIdentifier(expression) &&
                          expression.text === "require") ||
                        expression.kind === ts.SyntaxKind.ImportKeyword
                      ? "module-loader"
                      : "external-or-dynamic-dispatch",
          });
      }
      ts.forEachChild(node, (child) => visit(child, owner));
    }
    visit(source);
    const fileSymbol = checker.getSymbolAtLocation(source);
    if (fileSymbol) {
      for (const exported of checker.getExportsOfModule(fileSymbol)) {
        const targetSymbol =
          exported.flags & ts.SymbolFlags.Alias
            ? checker.getAliasedSymbol(exported)
            : exported;
        const declarations = targetSymbol.declarations ?? [];
        const target = declarations
          .map((decl) => nodeRecords.get(decl) ?? bindingRecords.get(decl))
          .find(Boolean);
        const record = {
          file,
          name: exported.name,
          targetId: target?.id ?? null,
          evidence: "compiler-export-table",
          status: target ? "resolved" : "unresolved-or-data-export",
        };
        exports.push(record);
        if (target) target.exports.push({ file, name: exported.name });
      }
    }
  }
  // TypeScript does not enumerate exports for all `module.exports = require(...)` bridges.
  // Expand only literal, whole-module re-exports; dynamic expressions remain unresolved.
  const bridges = [];
  for (const [file, source] of sources) {
    for (const statement of source.statements) {
      if (
        !ts.isExpressionStatement(statement) ||
        !ts.isBinaryExpression(statement.expression)
      )
        continue;
      const assignment = statement.expression;
      if (
        assignment.operatorToken.kind !== ts.SyntaxKind.EqualsToken ||
        assignment.left.getText(source) !== "module.exports"
      )
        continue;
      const value = assignment.right;
      if (
        ts.isCallExpression(value) &&
        ts.isIdentifier(value.expression) &&
        value.expression.text === "require" &&
        value.arguments.length === 1 &&
        ts.isStringLiteral(value.arguments[0])
      ) {
        const target = resolveLocal(file, value.arguments[0].text, known);
        if (target) bridges.push({ file, target });
      }
    }
  }
  let changed = true;
  while (changed) {
    changed = false;
    for (const bridge of bridges)
      for (const entry of exports.filter(
        (item) => item.file === bridge.target,
      )) {
        if (
          exports.some(
            (item) => item.file === bridge.file && item.name === entry.name,
          )
        )
          continue;
        exports.push({
          ...entry,
          file: bridge.file,
          evidence: "literal-commonjs-re-export",
        });
        if (entry.targetId)
          symbols
            .find((symbol) => symbol.id === entry.targetId)
            .exports.push({ file: bridge.file, name: entry.name });
        changed = true;
      }
  }
  const byId = new Map(symbols.map((item) => [item.id, item]));
  for (const call of calls) {
    const caller = byId.get(call.from),
      callee = byId.get(call.to);
    caller.callees.push({
      symbolId: callee.id,
      line: call.line,
      column: call.column,
    });
    callee.callers.push({
      symbolId: caller.id,
      line: call.line,
      column: call.column,
    });
    if (
      caller.role === "test" ||
      (caller.role === "tooling" &&
        /(?:smoke|acceptance|check)/.test(caller.file))
    )
      callee.relatedTests.push({
        file: caller.file,
        line: call.line,
        evidence: "static-call-site",
        coverageProven: false,
      });
  }
  const testImports = new Map();
  for (const edge of dependencies)
    if (
      edge.target &&
      (roleFor(edge.from) === "test" ||
        /^scripts\/.*(?:smoke|acceptance|check)/.test(edge.from))
    ) {
      const list = testImports.get(edge.target) ?? [];
      list.push({
        file: edge.from,
        line: edge.line,
        evidence: "file-import-only",
        coverageProven: false,
      });
      testImports.set(edge.target, list);
    }
  for (const item of symbols) {
    item.relatedTests = [
      ...new Map(
        [...item.relatedTests, ...(testImports.get(item.file) ?? [])].map(
          (entry) => [`${entry.file}:${entry.line}:${entry.evidence}`, entry],
        ),
      ).values(),
    ];
  }
  for (const file of fileRecords)
    file.symbols = symbols
      .filter((item) => item.file === file.file)
      .map((item) => item.id);
  return {
    data: {
      schemaVersion: 1,
      analyzer: {
        name: "TypeScript compiler AST and local-only checker",
        typescriptVersion: ts.version,
        externalTypesLoaded: false,
        sourceBodiesExecuted: false,
      },
      inventory,
      files: fileRecords,
      symbols,
      dependencies,
      exports,
      calls,
      unresolvedCalls,
      diagnostics,
    },
    state: { sources, checker, nodeRecords, recordFor },
  };
}

module.exports = { analyze, resolveLocal, compare, anchor };
