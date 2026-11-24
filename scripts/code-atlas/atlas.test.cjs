const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { analyze, resolveLocal } = require("./analyze.cjs");
const { discoverIpc } = require("./ipc.cjs");
const { appendPowerShell } = require("./powershell.cjs");
const {
  included,
  buildAtlas,
  checkAtlas,
  writeAtlas,
  validateLinks,
} = require("./generate.cjs");

/** Creates isolated source fixtures with no application/provider access; cleanup is limited to the exact temporary directory. */
function fixture(t, files) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "orbistry-atlas-test-"));
  for (const [file, text] of Object.entries({
    "package.json": '{"name":"atlas-fixture","devDependencies":{}}',
    ...files,
  })) {
    fs.mkdirSync(path.dirname(path.join(root, file)), { recursive: true });
    fs.writeFileSync(path.join(root, file), text, "utf8");
  }
  t.after(() => {
    assert.ok(
      path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep) &&
        path.basename(root).startsWith("orbistry-atlas-test-"),
    );
    fs.rmSync(root, { recursive: true, force: true });
  });
  return {
    root,
    files: ["package.json", ...Object.keys(files)].sort(),
    architecture: false,
  };
}

/** Finds one named fixture declaration, failing visibly if indexing missed or duplicated it. */
function named(data, name) {
  const matches = data.symbols.filter(
    (symbol) => symbol.qualifiedName === name,
  );
  assert.equal(matches.length, 1, `Expected one symbol named ${name}`);
  return matches[0];
}

test("AST discovery preserves contracts, source locations, aliases, nested ownership and test associations", (t) => {
  const sample = fixture(t, {
    "electron/math.ts":
      "/** Adds two measured values. */\nexport function add(a: number, b: number): number { return a + b; }\nexport const VERSION = 1;\nexport interface Sink { consume(value: number): void; }\nexport type Handler = (value: number) => void;\nexport class Counter { tick(): number { return add(1, 2); } }\n",
    "electron/use.ts":
      'import { add as plus, Counter } from "./math";\nimport type { Sink } from "./math";\nexport const run = () => { const c = new Counter(); return plus(c.tick(), 2); };\nfunction relay(sink: Sink) { sink.consume(1); }\n',
    "electron/math.test.cjs":
      'const { add } = require("./math.ts");\nconst test = require("node:test");\ntest("adds", () => add(1,2));\n',
  });
  const { data } = analyze(sample.root, sample.files);
  assert.deepEqual(data.diagnostics, []);
  const add = named(data, "add"),
    run = named(data, "run");
  assert.equal(add.line, 2);
  assert.equal(add.purpose.evidence, "jsdoc");
  assert.equal(add.parameters[0].contract.text, "number");
  assert.equal(add.returns.evidence, "annotation");
  assert.ok(
    data.calls.some((edge) => edge.from === run.id && edge.to === add.id),
  );
  assert.ok(add.callers.length >= 2);
  assert.ok(
    add.relatedTests.some((entry) => entry.file === "electron/math.test.cjs"),
  );
  assert.ok(
    data.dependencies.some(
      (edge) => edge.typeOnly && edge.target === "electron/math.ts",
    ),
  );
  assert.equal(named(data, "Sink").contract.evidence, "typescript-declaration");
  assert.ok(
    data.unresolvedCalls.some(
      (site) =>
        site.expression === "sink.consume" &&
        site.reason === "declaration-without-runtime-body",
    ),
  );
  assert.ok(
    named(data, "VERSION").exports.some((entry) => entry.name === "VERSION"),
  );
});

test("CommonJS require/re-export and class methods resolve without executing source", (t) => {
  const sample = fixture(t, {
    "electron/a.cjs":
      '/** Safe to index, never to evaluate. */\nfunction alpha(value) { return value; }\nclass Worker { execute() { return alpha(1); } }\nconst VERSION = 7;\nmodule.exports = { alpha, Worker, VERSION };\nthrow new Error("SOURCE MUST NEVER EXECUTE");\n',
    "electron/bridge.cjs": 'module.exports = require("./a.cjs");\n',
    "electron/b.cjs":
      'const { alpha: renamed, Worker } = require("./bridge.cjs");\nconst namespace = require("./a.cjs");\nfunction beta() { const worker = new Worker(); renamed(1); namespace.alpha(2); worker.execute(); }\nmodule.exports = { beta };\n',
  });
  const { data } = analyze(sample.root, sample.files);
  const beta = named(data, "beta"),
    alpha = named(data, "alpha"),
    execute = named(data, "Worker.execute");
  assert.ok(
    data.calls.some(
      (edge) =>
        edge.from === beta.id &&
        edge.to === alpha.id &&
        edge.expression === "renamed",
    ),
  );
  assert.ok(
    data.calls.some(
      (edge) =>
        edge.from === beta.id &&
        edge.to === alpha.id &&
        edge.expression === "namespace.alpha",
    ),
  );
  assert.ok(
    data.calls.some((edge) => edge.from === beta.id && edge.to === execute.id),
  );
  assert.ok(
    data.exports.some(
      (entry) =>
        entry.file === "electron/bridge.cjs" &&
        entry.name === "alpha" &&
        entry.targetId === alpha.id,
    ),
  );
  assert.ok(named(data, "VERSION").exports.length);
});

test("dynamic/injected/union calls and callback passing never invent a unique callee", (t) => {
  const sample = fixture(t, {
    "electron/dynamic.ts": `
    function alpha(value: number) { return value; }
    function beta(value: number) { return value * 2; }
    declare const flag: boolean;
    declare function accept(callback: (value: number) => number): void;
    function dispatch(fn = alpha) { return fn(1); }
    function dynamic(key: string) {
      accept(alpha);
      (flag ? alpha : beta)(1);
      const choice = flag ? alpha : beta; choice(2);
      const table: Record<string, (value: number) => number> = { alpha, beta }; table[key](3);
    }
  `,
  });
  const { data } = analyze(sample.root, sample.files);
  const alpha = named(data, "alpha"),
    beta = named(data, "beta"),
    dispatch = named(data, "dispatch"),
    dynamic = named(data, "dynamic");
  assert.ok(
    !data.calls.some(
      (edge) =>
        [dispatch.id, dynamic.id].includes(edge.from) &&
        [alpha.id, beta.id].includes(edge.to),
    ),
  );
  assert.ok(data.unresolvedCalls.some((site) => site.expression === "fn"));
  assert.ok(
    data.unresolvedCalls.some((site) => site.expression === "table[key]"),
  );
});

test("IPC catalogs literal registration, bound wrapper and finite operation table without asserting invocation", (t) => {
  const sample = fixture(t, {
    "electron/ipc.cjs":
      'function register(ipcMain, trustedIpc) {\nconst handle = (name, operation) => ipcMain.handle(`ai:${name}`, operation);\nhandle("assign", () => 1);\nconst operations = { load: () => 1, "price-get": () => 2 };\nfor (const [name, operation] of Object.entries(operations)) trustedIpc.handle(`worldview:${name}`, async () => operation());\nipcMain.handle("vault:read", () => 3);\n}\n',
    "electron/preload.cjs":
      'const { ipcRenderer } = require("electron");\nfunction invokeModel(channel,input) { return ipcRenderer.invoke(channel,input); }\nconst assign = () => invokeModel("ai:assign", {});\nconst world = operation => ipcRenderer.invoke(`worldview:${operation}`,{});\n',
  });
  const { state } = analyze(sample.root, sample.files);
  const ipc = discoverIpc(state);
  assert.ok(
    ipc.some(
      (entry) =>
        entry.channel === "ai:assign" &&
        entry.kind === "handler" &&
        entry.evidence === "local-wrapper-expansion",
    ),
  );
  assert.ok(
    ipc.some(
      (entry) => entry.channel === "ai:assign" && entry.kind === "invoke",
    ),
  );
  assert.deepEqual(
    ipc
      .filter((entry) => entry.evidence === "literal-operation-table-expansion")
      .map((entry) => entry.channel),
    ["worldview:load", "worldview:price-get"],
  );
  assert.ok(
    ipc.some(
      (entry) =>
        entry.pattern === "`worldview:${operation}`" &&
        entry.evidence === "dynamic-unresolved",
    ),
  );
  assert.ok(
    ipc.every((entry) => entry.registrationReachability === "not-established"),
  );
});

test("artifacts reproduce across roots and check detects source drift, broken anchors and unexpected files without writes", (t) => {
  const source = {
    "electron/safe.cjs":
      "/** Doubles a fixture input. */\nfunction twice(value) { return value * 2; }\nmodule.exports = { twice };\n",
    "AGENTS.md": "# Fixture engineering contract\n",
    "scripts/code-atlas.cjs": "/** CLI fixture. */\nfunction main() {}\n",
    "scripts/code-atlas/generate.cjs":
      "/** Fixture generator. */\nfunction build() {}\n",
    ...Object.fromEntries(
      [
        "analyze",
        "ipc",
        "catalog",
        "render",
        "graphs",
        "atlas.test",
        "powershell",
      ].map((name) => [
        `scripts/code-atlas/${name}.cjs`,
        "/** Fixture module. */\nfunction placeholder() {}\n",
      ]),
    ),
  };
  const first = fixture(t, source),
    second = fixture(t, source);
  const a = buildAtlas(first.root, first),
    b = buildAtlas(second.root, second);
  assert.deepEqual([...a.artifacts], [...b.artifacts]);
  assert.deepEqual(validateLinks(first.root, a.artifacts, a.data), []);
  writeAtlas(first.root, a.artifacts, a.data);
  assert.deepEqual(checkAtlas(first.root, a.artifacts, a.data), []);
  const readme = path.join(first.root, "docs/code-atlas/README.md");
  fs.appendFileSync(readme, "stale\n");
  assert.ok(
    checkAtlas(first.root, a.artifacts, a.data).some((issue) =>
      issue.startsWith("Stale:"),
    ),
  );
  assert.ok(fs.readFileSync(readme, "utf8").endsWith("stale\n"));
  fs.writeFileSync(
    path.join(first.root, "docs/code-atlas/manual.md"),
    "preserve this",
  );
  assert.ok(
    checkAtlas(first.root, a.artifacts, a.data).some((issue) =>
      issue.startsWith("Unexpected:"),
    ),
  );
  assert.throws(
    () => writeAtlas(first.root, a.artifacts, a.data),
    /Unowned Atlas files/,
  );
  assert.equal(
    fs.readFileSync(path.join(first.root, "docs/code-atlas/manual.md"), "utf8"),
    "preserve this",
  );
  const broken = new Map(a.artifacts);
  broken.set(
    "docs/code-atlas/README.md",
    "[Broken](<symbols/shared.md#missing-anchor>)\n[Line](<../../electron/safe.cjs#L9000>)\n",
  );
  assert.ok(
    validateLinks(first.root, broken, a.data).some((issue) =>
      issue.includes("missing generated anchor"),
    ),
  );
  assert.ok(
    validateLinks(first.root, broken, a.data).some((issue) =>
      issue.includes("source line out of bounds"),
    ),
  );
  fs.appendFileSync(
    path.join(first.root, "electron/safe.cjs"),
    "// input drift\n",
  );
  const changed = buildAtlas(first.root, first);
  assert.notEqual(
    changed.artifacts.get("docs/code-atlas/symbols/symbol-index.json"),
    a.artifacts.get("docs/code-atlas/symbols/symbol-index.json"),
  );
});

test("native PowerShell AST indexes OCR-style functions and calls without running script bodies", (t) => {
  const sample = fixture(t, {
    "electron/worker.ps1":
      'param([string]$LiteralPath)\nfunction Echo-Value([string]$Text) { $Text }\nfunction Invoke-Worker { Echo-Value "fixture"; & $dynamicCommand }\nInvoke-Worker\nthrow "INDEXED SCRIPT MUST NEVER EXECUTE"\n',
  });
  const { data } = analyze(sample.root, sample.files);
  appendPowerShell(sample.root, sample.files, data);
  const echo = named(data, "Echo-Value"),
    invoke = named(data, "Invoke-Worker");
  assert.deepEqual(data.diagnostics, []);
  assert.equal(echo.parameters[0].name, "$Text");
  assert.equal(echo.parameters[0].contract.text, "string");
  assert.equal(echo.returns.evidence, "dynamic-language");
  assert.ok(
    data.calls.some(
      (edge) =>
        edge.from === invoke.id &&
        edge.to === echo.id &&
        edge.evidence === "powershell-static-command",
    ),
  );
  assert.ok(
    data.unresolvedCalls.some(
      (site) => site.reason === "powershell-external-or-dynamic-command",
    ),
  );
  assert.equal(named(data, "<script>").parameters[0].name, "$LiteralPath");
});

test("inventory boundaries exclude secrets/state/generated files and resolve only inventory-backed local paths", () => {
  for (const file of [
    ".env",
    ".env.local",
    "nested/.env.production",
    ".wonnyy/worldview/entities.json",
    ".engine/registry/registry.json",
    "credentials.json",
    "key.engine-private.pem",
    "docs/code-atlas/README.md",
    "node_modules/a/index.js",
  ])
    assert.equal(included(file), false, file);
  assert.equal(included(".env.example"), true);
  assert.equal(included("examples/engines/number-tools/index.cjs"), true);
  const known = new Set(["electron/a.ts", "electron/nested/index.cjs"]);
  assert.equal(resolveLocal("electron/b.ts", "./a", known), "electron/a.ts");
  assert.equal(
    resolveLocal("electron/b.cjs", "./nested", known),
    "electron/nested/index.cjs",
  );
  assert.equal(
    resolveLocal("electron/b.cjs", "../../outside.cjs", known),
    null,
  );
  assert.equal(resolveLocal("electron/b.cjs", "typescript", known), null);
});

test("constant aliases resolve, while shadowed loaders and accessor-returned dispatch stay explicit", (t) => {
  const sample = fixture(t, {
    "electron/edges.ts": `
    function alpha(value: number) { return value; }
    const alias = alpha;
    function direct() { return alias(1); }
    class Factory { get callback() { return alpha; } }
    function indirect(factory: Factory) { return factory.callback(2); }
    function shadowed(require: (name: string) => unknown) { require("./edges.ts"); }
  `,
  });
  const { data } = analyze(sample.root, sample.files);
  assert.ok(
    data.calls.some(
      (edge) =>
        edge.from === named(data, "direct").id &&
        edge.to === named(data, "alpha").id,
    ),
  );
  assert.ok(
    !data.calls.some((edge) => edge.from === named(data, "indirect").id),
  );
  assert.ok(
    data.unresolvedCalls.some(
      (site) =>
        site.expression === "factory.callback" &&
        site.reason === "accessor-return-dispatch",
    ),
  );
  assert.ok(
    data.dependencies.some(
      (edge) =>
        edge.kind === "shadowed-require" &&
        edge.status === "dynamic-unresolved" &&
        edge.target === null,
    ),
  );
});
