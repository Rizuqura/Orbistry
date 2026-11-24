const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");
const { execFile } = require("node:child_process");
const { promisify } = require("node:util");
const {
  auditArchitecture,
  runtimeImports,
  dependencyCycles,
} = require("../../scripts/audit/audit-architecture.cjs");

test("ORB-ARCH-001 distinguishes runtime imports, type imports and deferred cycles", () => {
  const result = runtimeImports(
    `import type { A } from "node:fs"; import { type B } from "electron"; const text = "require('node:fs')"; async function run() { return require('./core.cjs'); }`,
    "components/demo.ts",
  );
  assert.deepEqual(
    result.imports.map((item) => [item.specifier, item.deferred]),
    [["./core.cjs", true]],
  );
  const graph = new Map([
    ["a", [{ target: "b", deferred: false }]],
    ["b", [{ target: "a", deferred: true }]],
  ]);
  assert.deepEqual(dependencyCycles(graph)[0].files, ["a", "b"]);
});

test("ORB-ARCH-001 rejects renderer privileges and core AI imports without executing source", async (t) => {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-architecture-"),
  );
  t.after(async () => {
    assert.ok(
      path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep),
    );
    await fs.rm(root, { recursive: true, force: true });
  });
  const sources = {
    "components/view.ts": `import fs from "node:fs"; import type { A } from "../electron/ai/chat/chat-service.cjs";`,
    "electron/core.cjs": `throw Error('must not execute'); require('./ai/chat/chat-service.cjs');`,
    "electron/ai/chat/chat-service.cjs": "module.exports = {};",
  };
  for (const [file, source] of Object.entries(sources)) {
    await fs.mkdir(path.dirname(path.join(root, file)), { recursive: true });
    await fs.writeFile(path.join(root, file), source);
  }
  assert.deepEqual(
    auditArchitecture(root, Object.keys(sources))
      .violations.map((item) => item.rule)
      .sort(),
    ["CORE_NO_AI_RUNTIME_IMPORT", "PORTAL_NO_PRIVILEGED_IMPORT"],
  );
  const shared = "electron/shared/context-limits.cjs";
  await fs.mkdir(path.dirname(path.join(root, shared)), { recursive: true });
  await fs.writeFile(
    path.join(root, "components/view.ts"),
    `import { contextLimit } from '../${shared}';`,
  );
  await fs.writeFile(
    path.join(root, shared),
    "exports.contextLimit = () => 123;",
  );
  const files = [...Object.keys(sources), shared];
  assert.equal(
    auditArchitecture(root, files).violations.filter(
      (item) => item.rule === "PORTAL_NO_PRIVILEGED_IMPORT",
    ).length,
    0,
  );
  await fs.writeFile(path.join(root, shared), "require('node:fs');");
  assert.equal(
    auditArchitecture(root, files).violations.filter(
      (item) => item.rule === "PORTAL_NO_PRIVILEGED_IMPORT",
    ).length,
    1,
  );
});

test("ORB-ARCH-001 production sources preserve Portal and optional-AI boundaries", () => {
  const result = auditArchitecture();
  assert.deepEqual(result.violations, []);
  assert.deepEqual(result.unresolvedLocalImports, []);
  assert.deepEqual(result.unexpectedDependencyCycles, []);
  assert.deepEqual(result.dependencyCycles, []);
  assert.deepEqual(result.sharedUtilities, []);
});

test("native Engine public exports retain the existing allowlist without duplicating AI dispatch", async () => {
  const native = require("../../electron/engines/native.cjs");
  assert.equal(
    require("../../electron/ai/engine-registry.cjs").executeNativeEngine,
    native.executeNativeEngine,
  );
  await assert.rejects(
    native.executeNativeEngine("unknown", "execute", {}),
    /Unsupported native Engine operation/,
  );
  await assert.rejects(
    native.executeNativeEngine("yahoo-financials", "quote", {
      operation: "quote",
    }),
    /separate Yahoo arguments/,
  );
});

test("WorldView, sources, connectors and Identity compile with AI runtime imports prohibited", async () => {
  /** Runs real local stores/compiler in a fresh process; denies AI entry points and all fetch requests before loading core modules. */
  async function coreOnly() {
    const Module = require("node:module"),
      original = Module._load;
    Module._load = function (request, parent, main) {
      const resolved = Module._resolveFilename(
        request,
        parent,
        main,
      ).replaceAll("\\", "/");
      const ai = resolved.split("/electron/ai/")[1];
      if (ai) throw Error("ORB_ARCH_AI_IMPORT: " + request);
      return original.apply(this, arguments);
    };
    globalThis.fetch = async () => {
      throw Error("Network is forbidden in core-only regression");
    };
    const fs = require("node:fs/promises"),
      path = require("node:path"),
      os = require("node:os"),
      assert = require("node:assert/strict");
    const root = await fs.mkdtemp(
      path.join(os.tmpdir(), "orbistry-core-only-"),
    );
    try {
      const world = require("./electron/domains/entity/worldview-store.cjs"),
        knowledge = require("./electron/domains/knowledge/knowledge-store.cjs"),
        connectors = require("./electron/domains/entity/connector-store.cjs");
      require("./electron/domains/universe/vault-settings.cjs");
      // Loading the Excel service also must not bootstrap the AI registry.
      require("./electron/excel-service.cjs");
      await world.saveWorldViewChip(root, {
        id: "company",
        name: "Company",
        icon: "",
        tags: [],
        color: "#263f4b",
        position: { x: 0, y: 0 },
      });
      const originalSource =
        "# Profile\nLiteral evidence survives without AI.\n";
      await fs.writeFile(path.join(root, "profile.md"), originalSource);
      await world.assignWorldViewFiles(root, "company", ["profile.md"]);
      await knowledge.saveKnowledgeIndex(
        root,
        "company",
        '# About\nsource: profile.md\n# Financials\nsource: yahooFinancials("TSM")',
        null,
        true,
      );
      assert.equal(
        (await connectors.loadConnectors(root)).connectors.length,
        0,
      );
      const {
        createIdentityRuntime,
      } = require("./electron/engines/backend-identity/identity-runtime.cjs");
      const runtime = createIdentityRuntime({
        authorize: async ({ entityId, permission }) =>
          entityId === "company" &&
          ["entity:read", "knowledge:read", "identity:compile"].includes(
            permission,
          ),
      });
      const scope = { root, entityId: "company" };
      await runtime.generate(scope);
      assert.ok(
        (await runtime.searchChunks({ ...scope, query: "Literal" })).items
          .length,
      );
      assert.ok((await runtime.listCapabilities(scope)).length);
      assert.equal(
        await fs.readFile(path.join(root, "profile.md"), "utf8"),
        originalSource,
      );
      process.stdout.write(
        JSON.stringify({ coreIndependent: true, sourcePreserved: true }),
      );
    } finally {
      assert.ok(
        path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep),
      );
      await fs.rm(root, { recursive: true, force: true });
    }
  }
  const result = await promisify(execFile)(
    process.execPath,
    [
      "-e",
      "(" +
        coreOnly.toString() +
        ")().catch(error => { console.error(error.message); process.exitCode=1; })",
    ],
    {
      cwd: path.resolve(__dirname, "../.."),
      windowsHide: true,
      timeout: 20000,
    },
  );
  assert.deepEqual(JSON.parse(result.stdout), {
    coreIndependent: true,
    sourcePreserved: true,
  });
});

test("neutral helper ports preserve legacy error, parser, queue and estimator identities", () => {
  assert.equal(
    require("../../electron/ai/model-errors.cjs"),
    require("../../electron/shared/runtime-errors.cjs"),
  );
  assert.equal(
    require("../../electron/ai/json-store.cjs"),
    require("../../electron/core/persistence/json-store.cjs"),
  );
  assert.equal(
    require("../../electron/ai/context-limits.cjs"),
    require("../../electron/shared/context-limits.cjs"),
  );
  assert.equal(
    require("../../electron/ai/schemas.cjs").parse,
    require("../../electron/shared/validation.cjs").parse,
  );
  assert.equal(
    require("../../electron/ai/history-budget.cjs").estimateTokens,
    require("../../electron/shared/token-budget.cjs").estimateTokens,
  );
  assert.equal(
    require("../../electron/domains/knowledge/knowledge-store.cjs")
      .resolveKnowledgeSource,
    require("../../electron/domains/knowledge/knowledge-source-access.cjs")
      .resolveKnowledgeSource,
  );
});
