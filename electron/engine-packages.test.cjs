const test = require("node:test"),
  assert = require("node:assert/strict"),
  fs = require("node:fs/promises"),
  os = require("node:os"),
  path = require("node:path");
const { execFile } = require("node:child_process"),
  { promisify } = require("node:util");
const { EnginePackageRegistry } = require("./ai/engine-registry.cjs");
const {
  initPackage,
  pullPackage,
} = require("./engines/registry/authoring.cjs");
const {
  inspectPackage,
  sealPackage,
} = require("./engines/registry/package.cjs");
const { manifest, checkSchema } = require("./engines/contracts/contract.cjs");
const { saveWorldViewChip } = require("./domains/entity/worldview-store.cjs");

/** Builds real disposable Universe metadata and a self-contained author package; only download transport is mocked when requested by a test. */
async function fixture(t) {
  const root = await fs.mkdtemp(
      path.join(os.tmpdir(), "orbistry-engine-packages-"),
    ),
    vault = path.join(root, "Universe"),
    source = path.join(root, "source");
  await fs.mkdir(vault);
  t.after(async () => {
    assert.ok(root.startsWith(path.resolve(os.tmpdir()) + path.sep));
    await fs.rm(root, { recursive: true, force: true });
  });
  for (const id of ["tsmc", "asml"])
    await saveWorldViewChip(vault, {
      id,
      name: id,
      icon: "",
      tags: [],
      color: "#263f4b",
      position: { x: 0, y: 0 },
    });
  await initPackage(source, "sample-math");
  const registry = new EnginePackageRegistry(vault, {
    authorize: async ({ entityId }) => entityId === "tsmc",
  });
  return { root, vault, source, registry };
}

/** Installs reviewed bytes and grants a single explicit Entity operation through the real registry. */
async function activate(f, policy = "manual") {
  const installed = await f.registry.install(f.source);
  await f.registry.trust(installed.engineId, installed.digest);
  await f.registry.link({
    entityId: "tsmc",
    engineId: "sample-math",
    operations: ["add"],
    policy,
  });
  return installed;
}

test("standard package discovery is offline, untrusted until review and scope-linked before execution", async (t) => {
  const f = await fixture(t);
  const installed = await f.registry.install(f.source);
  assert.equal(installed.trusted, false);
  assert.deepEqual((await f.registry.catalog("tsmc")).tools, []);
  await assert.rejects(f.registry.trust("sample-math", "0".repeat(64)), {
    code: "ENGINE_CHANGED",
  });
  await assert.rejects(
    f.registry.link({
      entityId: "tsmc",
      engineId: "sample-math",
      operations: ["add"],
    }),
    { code: "ENGINE_NOT_TRUSTED" },
  );
  await f.registry.trust("sample-math", installed.digest);
  assert.deepEqual((await f.registry.catalog("tsmc")).tools, []);
  await f.registry.link({
    entityId: "tsmc",
    engineId: "sample-math",
    operations: ["add"],
  });
  const catalog = await f.registry.catalog("tsmc");
  assert.equal(catalog.tools.length, 1);
  assert.deepEqual(Object.keys(catalog.tools[0]).sort(), ["function", "type"]);
  assert.equal(catalog.bindings[0].approvalRequired, true);
  assert.deepEqual((await f.registry.catalog("asml")).tools, []);
  await assert.rejects(
    f.registry.execute({
      entityId: "tsmc",
      engineId: "sample-math",
      operation: "add",
      input: { left: 1, right: 2 },
    }),
    { code: "ENGINE_APPROVAL_REQUIRED" },
  );
  const result = await f.registry.executeTool(
    "tsmc",
    { name: catalog.tools[0].function.name, arguments: '{"left":2,"right":3}' },
    { approved: true },
  );
  assert.deepEqual(result.data, { sum: 5 });
  assert.equal(result.receipt.status, "succeeded");
  assert.equal(result.receipt.origin, "local_execution");
  assert.match(result.receipt.inputHash, /^[a-f0-9]{64}$/);
  assert.deepEqual(result.receipt.authorization, {
    hostAdmitted: true,
    policy: "manual",
    approved: true,
    network: "none",
  });
  const restarted = new EnginePackageRegistry(f.vault, {
    authorize: async () => true,
  });
  const historical = await restarted.readResult(
    "tsmc",
    result.receipt.executionId,
  );
  assert.deepEqual(historical.data, { sum: 5 });
  assert.equal(historical.origin, "historical");
  await assert.rejects(
    restarted.readResult("asml", result.receipt.executionId),
    { code: "ENGINE_RESULT_UNAVAILABLE" },
  );
  assert.equal(
    (await fs.readdir(path.join(f.vault, ".engine/registry/executions")))
      .length,
    1,
    "history reads do not create executions",
  );
});

test("model arguments cannot grant approval, change Entity scope or bypass independent host authorization", async (t) => {
  const f = await fixture(t);
  await activate(f);
  const name = (await f.registry.catalog("tsmc")).tools[0].function.name;
  for (const args of [
    { left: 1, right: 2, approved: true },
    { left: 1, right: 2, entityId: "asml" },
    { left: "1", right: 2 },
  ])
    await assert.rejects(
      f.registry.executeTool(
        "tsmc",
        { name, arguments: args },
        { approved: true },
      ),
      { code: "ENGINE_DATA_INVALID" },
    );
  await assert.rejects(
    f.registry.executeTool("asml", { name, arguments: { left: 1, right: 2 } }),
    { code: "ENGINE_TOOL_UNAVAILABLE" },
  );
  const denied = new EnginePackageRegistry(f.vault);
  await assert.rejects(
    denied.executeTool(
      "tsmc",
      { name, arguments: { left: 1, right: 2 } },
      { approved: true },
    ),
    { code: "ENGINE_NOT_AUTHORIZED" },
  );
});

test("authorization and receipts bind an immutable snapshot of operation arguments", async (t) => {
  const f = await fixture(t);
  await activate(f, "automatic");
  const input = { left: 1, right: 2 },
    hashes = [];
  const registry = new EnginePackageRegistry(f.vault, {
    authorize: async (request) => {
      hashes.push(request.inputHash);
      input.left = 99;
      return true;
    },
  });
  const result = await registry.execute({
    entityId: "tsmc",
    engineId: "sample-math",
    operation: "add",
    input,
  });
  assert.equal(input.left, 99);
  assert.deepEqual(result.data, { sum: 3 });
  assert.ok(
    hashes.length >= 2 &&
      hashes.every((hash) => hash === result.receipt.inputHash),
  );
});

test("Engine host policies must explicitly return true for execution and historical disclosure", async (t) => {
  const f = await fixture(t);
  await activate(f, "automatic");
  const call = {
    entityId: "tsmc",
    engineId: "sample-math",
    operation: "add",
    input: { left: 1, right: 2 },
  };
  const prior = await f.registry.execute(call);
  for (const decision of [{ allowed: false }, "false", 1, null, undefined]) {
    const registry = new EnginePackageRegistry(f.vault, {
      authorize: async () => decision,
    });
    await assert.rejects(registry.execute(call), {
      code: "ENGINE_NOT_AUTHORIZED",
    });
    await assert.rejects(
      registry.readResult("tsmc", prior.receipt.executionId),
      { code: "ENGINE_NOT_AUTHORIZED" },
    );
  }
  let checks = 0;
  const changing = new EnginePackageRegistry(f.vault, {
    authorize: async () => (++checks === 1 ? true : { allowed: false }),
  });
  await assert.rejects(changing.execute(call), {
    code: "ENGINE_AUTHORIZATION_CHANGED",
  });
  checks = 0;
  await assert.rejects(changing.readResult("tsmc", prior.receipt.executionId), {
    code: "ENGINE_NOT_AUTHORIZED",
  });
});

test("valid large results remain readable when indentation would exceed the history file limit", async (t) => {
  const f = await fixture(t);
  let item = 0,
    itemSchema = { type: "number" };
  for (let depth = 0; depth < 7; depth++) {
    item = { a: item };
    itemSchema = {
      type: "object",
      properties: { a: itemSchema },
      required: ["a"],
      additionalProperties: false,
    };
  }
  const data = Array(22500).fill(item);
  assert.ok(Buffer.byteLength(JSON.stringify(data)) < 1024 * 1024);
  assert.ok(Buffer.byteLength(JSON.stringify(data, null, 2)) > 4 * 1024 * 1024);
  const config = JSON.parse(
    await fs.readFile(path.join(f.source, "engine_manifest.json")),
  );
  config.operations[0].output_schema = {
    type: "array",
    items: itemSchema,
    maxItems: 22500,
  };
  await fs.writeFile(
    path.join(f.source, "engine_manifest.json"),
    JSON.stringify(config),
  );
  await fs.writeFile(
    path.join(f.source, "index.cjs"),
    `exports.execute = async () => Array(22500).fill(${JSON.stringify(item)});`,
  );
  await sealPackage(f.source);
  await activate(f, "automatic");
  const result = await f.registry.execute({
    entityId: "tsmc",
    engineId: "sample-math",
    operation: "add",
    input: { left: 1, right: 2 },
  });
  assert.equal(
    (await f.registry.readResult("tsmc", result.receipt.executionId)).data
      .length,
    22500,
  );
});

test("integrity checks reject tampering, unlisted code, traversal and reserved IDs without executing packages", async (t) => {
  const f = await fixture(t),
    original = await inspectPackage(f.source);
  const bad = structuredClone(original.manifest);
  bad.files["../escape.cjs"] = "0".repeat(64);
  assert.throws(() => manifest(bad), { code: "ENGINE_PATH_INVALID" });
  bad.files = { ...original.manifest.files };
  bad.operations[0].input_schema.$ref = "https://untrusted/schema";
  assert.throws(() => manifest(bad), { code: "ENGINE_SCHEMA_INVALID" });
  await fs.writeFile(
    path.join(f.source, "extra.cjs"),
    "throw Error('must not load')",
  );
  await assert.rejects(f.registry.install(f.source), {
    code: "ENGINE_INTEGRITY_FAILED",
  });
  await fs.unlink(path.join(f.source, "extra.cjs"));
  const installed = await activate(f);
  const packageEntry = path.join(
    f.vault,
    ".engine/packages/sample-math/1.0.0/index.cjs",
  );
  await fs.appendFile(packageEntry, "\n// modified");
  await assert.rejects(f.registry.catalog("tsmc"), {
    code: "ENGINE_INTEGRITY_FAILED",
  });
  assert.equal(installed.version, "1.0.0");
  await fs.writeFile(
    path.join(f.source, "engine_manifest.json"),
    JSON.stringify({ ...original.manifest, engine_id: "daily-price" }),
  );
  await assert.rejects(f.registry.install(f.source), {
    code: "ENGINE_ID_RESERVED",
  });
});

test("schema validation rejects constraints it cannot honestly enforce", () => {
  for (const schema of [
    { type: "number", minLength: 2 },
    { type: "string", enum: false },
    { type: "string", enum: [4] },
    { type: "integer", minimum: 5, maximum: 2 },
    { type: "string", enum: ["same", "same"] },
    { type: "number", $schema: "" },
  ])
    assert.throws(() => checkSchema(schema), { code: "ENGINE_SCHEMA_INVALID" });
});

test("desktop catalog uses the versioned IPC gate and preserves safe integrity errors", async (t) => {
  const f = await fixture(t);
  await activate(f);
  const { registerAiIpc, API_VERSION } = require("./ai/ipc.cjs"),
    handlers = new Map(),
    event = { sender: { id: 42 } };
  registerAiIpc({
    ipcMain: { handle: (name, handler) => handlers.set(name, handler) },
    service: {},
    getVault: () => f.vault,
  });
  const catalog = (input) =>
    handlers.get("ai:enginePackageCatalog")(event, input);
  assert.equal(
    (await catalog({ entityId: "tsmc" })).error.code,
    "MODEL_RESTART_REQUIRED",
  );
  handlers.get("ai:handshake")(event, API_VERSION);
  assert.equal(
    (
      await catalog({
        entityId: "tsmc",
        vaultPath: path.join(f.root, "different-Universe"),
      })
    ).error.code,
    "MODEL_CONTEXT_INVALID",
  );
  assert.equal((await catalog({ entityId: "tsmc" })).value.tools.length, 1);
  assert.equal(
    (await catalog({ entityId: "../escape" })).error.code,
    "MODEL_INVALID_REQUEST",
  );
  await fs.appendFile(
    path.join(f.vault, ".engine/packages/sample-math/1.0.0/index.cjs"),
    "// changed",
  );
  assert.equal(
    (await catalog({ entityId: "tsmc" })).error.code,
    "ENGINE_INTEGRITY_FAILED",
  );
  assert.equal(handlers.has("ai:installEnginePackage"), false);
  assert.equal(handlers.has("ai:trustEnginePackage"), false);
});

test("package discovery never loads code and rejects directory junctions", async (t) => {
  const f = await fixture(t),
    marker = path.join(f.root, "loaded.txt");
  await fs.writeFile(
    path.join(f.source, "index.cjs"),
    `require('node:fs').writeFileSync(${JSON.stringify(marker)}, 'loaded'); exports.execute = async () => ({sum:0});`,
  );
  await sealPackage(f.source);
  await activate(f);
  assert.equal((await f.registry.catalog("tsmc")).tools.length, 1);
  await assert.rejects(fs.stat(marker), { code: "ENOENT" });
  await fs.symlink(
    f.vault,
    path.join(f.source, "linked"),
    process.platform === "win32" ? "junction" : "dir",
  );
  await assert.rejects(inspectPackage(f.source), {
    code: "ENGINE_PATH_INVALID",
  });
});

test("failed HTTPS integrity checks cannot register partial downloads", async (t) => {
  const f = await fixture(t),
    checked = await inspectPackage(f.source);
  await assert.rejects(
    pullPackage(f.registry, "https://example.test/math/engine_manifest.json", {
      fetchImpl: async (url) =>
        new Response(
          url.endsWith("engine_manifest.json")
            ? checked.files.get("engine_manifest.json")
            : "tampered",
        ),
    }),
    { code: "ENGINE_INTEGRITY_FAILED" },
  );
  assert.deepEqual((await f.registry.catalog()).engines, []);
  assert.ok(
    !(await fs.readdir(path.join(f.vault, ".engine/registry"))).some((name) =>
      name.startsWith(".download-"),
    ),
  );
});

test("worker environments omit provider secrets and reject invalid output contracts", async (t) => {
  const f = await fixture(t);
  const prior = process.env.ORBISTRY_REGISTRY_TEST_SECRET;
  process.env.ORBISTRY_REGISTRY_TEST_SECRET = "test-only-marker";
  t.after(() => {
    if (prior === undefined) delete process.env.ORBISTRY_REGISTRY_TEST_SECRET;
    else process.env.ORBISTRY_REGISTRY_TEST_SECRET = prior;
  });
  await fs.writeFile(
    path.join(f.source, "index.cjs"),
    "exports.execute = async () => ({sum: process.env.ORBISTRY_REGISTRY_TEST_SECRET ? 1 : 0});",
  );
  await sealPackage(f.source);
  await activate(f, "automatic");
  assert.deepEqual(
    (
      await f.registry.execute({
        entityId: "tsmc",
        engineId: "sample-math",
        operation: "add",
        input: { left: 1, right: 2 },
      })
    ).data,
    { sum: 0 },
  );
  const source = JSON.parse(
    await fs.readFile(path.join(f.source, "engine_manifest.json")),
  );
  source.engine_version = "1.0.1";
  await fs.writeFile(
    path.join(f.source, "engine_manifest.json"),
    JSON.stringify(source),
  );
  await fs.writeFile(
    path.join(f.source, "index.cjs"),
    "exports.execute = async () => ({sum: 'invalid'});",
  );
  await sealPackage(f.source);
  await activate(f, "automatic");
  await assert.rejects(
    f.registry.execute({
      entityId: "tsmc",
      engineId: "sample-math",
      operation: "add",
      input: { left: 1, right: 2 },
    }),
    { code: "ENGINE_EXECUTION_FAILED" },
  );
});

test("publication rechecks live trust and historical access rechecks authorization and hashes", async (t) => {
  const f = await fixture(t);
  await activate(f, "automatic");
  const call = {
    entityId: "tsmc",
    engineId: "sample-math",
    operation: "add",
    input: { left: 1, right: 2 },
  };
  const first = await f.registry.execute(call);
  let checks = 0;
  const expiring = new EnginePackageRegistry(f.vault, {
    authorize: async () => ++checks === 1,
  });
  await assert.rejects(expiring.readResult("tsmc", first.receipt.executionId), {
    code: "ENGINE_NOT_AUTHORIZED",
  });
  await fs.writeFile(
    path.join(
      f.vault,
      ".engine/registry/results",
      first.receipt.executionId + ".json",
    ),
    '{"sum":999}',
  );
  await assert.rejects(
    f.registry.readResult("tsmc", first.receipt.executionId),
    { code: "ENGINE_INTEGRITY_FAILED" },
  );
  checks = 0;
  const revoking = new EnginePackageRegistry(f.vault, {
    authorize: async () => {
      if (++checks === 2) {
        const checked = await inspectPackage(f.source);
        await f.registry.trust("sample-math", checked.digest, false);
      }
      return true;
    },
  });
  await assert.rejects(revoking.execute(call), {
    code: "ENGINE_AUTHORIZATION_CHANGED",
  });
});

test("registry writers fail explicitly on external locks and roll back unsuccessful installs", async (t) => {
  const f = await fixture(t),
    directory = path.join(f.vault, ".engine/registry");
  await fs.mkdir(directory, { recursive: true });
  await fs.writeFile(path.join(directory, ".writer.lock"), "external writer");
  await assert.rejects(f.registry.install(f.source), {
    code: "ENGINE_REGISTRY_BUSY",
  });
  await fs.unlink(path.join(directory, ".writer.lock"));
  // A directory at the registry-file destination forces the final atomic metadata rename to fail.
  await fs.mkdir(path.join(directory, "registry.json"));
  const originalRead = f.registry.read.bind(f.registry);
  f.registry.read = async () => ({ schemaVersion: 1, packages: {}, links: [] });
  await assert.rejects(f.registry.install(f.source));
  f.registry.read = originalRead;
  await assert.rejects(
    fs.stat(path.join(f.vault, ".engine/packages/sample-math/1.0.0")),
    { code: "ENOENT" },
  );
});

test("registry metadata cannot grow beyond the size its reader can recover", async (t) => {
  const f = await fixture(t);
  await activate(f);
  await assert.rejects(
    f.registry.mutate((state) => {
      const record = state.packages["sample-math"].versions["1.0.0"];
      state.packages["sample-math"].versions = Object.fromEntries(
        Array.from({ length: 2500 }, (_, index) => [
          "1.0." + index,
          { ...record, source: "x".repeat(1000) },
        ]),
      );
    }),
    { code: "ENGINE_REGISTRY_FULL" },
  );
  assert.equal(
    Object.keys((await f.registry.read()).packages["sample-math"].versions)
      .length,
    1,
  );
  assert.equal((await f.registry.catalog("tsmc")).tools.length, 1);
});

test("version updates preserve old package bytes but require fresh trust and Entity linking", async (t) => {
  const f = await fixture(t);
  await activate(f, "automatic");
  const old = await fs.readFile(
    path.join(f.vault, ".engine/packages/sample-math/1.0.0/index.cjs"),
    "utf8",
  );
  const source = JSON.parse(
    await fs.readFile(path.join(f.source, "engine_manifest.json")),
  );
  source.engine_version = "1.1.0";
  await fs.writeFile(
    path.join(f.source, "engine_manifest.json"),
    JSON.stringify(source),
  );
  const installed = await f.registry.install(f.source);
  assert.equal(installed.trusted, false);
  assert.deepEqual((await f.registry.catalog("tsmc")).tools, []);
  assert.equal(
    await fs.readFile(
      path.join(f.vault, ".engine/packages/sample-math/1.0.0/index.cjs"),
      "utf8",
    ),
    old,
  );
});

test("HTTPS pulling validates exact downloaded bytes and never trusts or executes the downloaded entry", async (t) => {
  const f = await fixture(t),
    checked = await inspectPackage(f.source),
    calls = [];
  const fetchImpl = async (url, options) => {
    calls.push(url);
    assert.equal(options.redirect, "error");
    const name = new URL(url).pathname.split("/").at(-1);
    return new Response(checked.files.get(name), { status: 200 });
  };
  await assert.rejects(
    pullPackage(f.registry, "http://example.test/engine_manifest.json", {
      fetchImpl,
    }),
    { code: "ENGINE_SOURCE_INVALID" },
  );
  const result = await pullPackage(
    f.registry,
    "https://example.test/math/engine_manifest.json",
    { fetchImpl },
  );
  assert.equal(result.trusted, false);
  assert.equal(calls.length, 3);
  assert.deepEqual((await f.registry.catalog("tsmc")).tools, []);
  assert.equal(
    await fs
      .stat(path.join(f.vault, ".engine/registry/executions"))
      .catch((error) => error.code),
    "ENOENT",
  );
});

test("deadlines and cancellation persist failed receipts without publishing output", async (t) => {
  const f = await fixture(t);
  await fs.writeFile(
    path.join(f.source, "index.cjs"),
    "exports.execute = async () => new Promise(() => { setInterval(() => {}, 100); });\n",
  );
  const source = JSON.parse(
    await fs.readFile(path.join(f.source, "engine_manifest.json")),
  );
  source.operations[0].timeout_ms = 200;
  await fs.writeFile(
    path.join(f.source, "engine_manifest.json"),
    JSON.stringify(source),
  );
  await sealPackage(f.source);
  await activate(f, "automatic");
  await assert.rejects(
    f.registry.execute({
      entityId: "tsmc",
      engineId: "sample-math",
      operation: "add",
      input: { left: 1, right: 2 },
    }),
    { code: "ENGINE_TIMEOUT" },
  );
  const controller = new AbortController();
  const running = f.registry.execute({
    entityId: "tsmc",
    engineId: "sample-math",
    operation: "add",
    input: { left: 1, right: 2 },
    signal: controller.signal,
  });
  setTimeout(() => controller.abort(), 50);
  await assert.rejects(running);
  const names = await fs.readdir(
    path.join(f.vault, ".engine/registry/executions"),
  );
  const receipts = await Promise.all(
    names.map((name) =>
      fs
        .readFile(
          path.join(f.vault, ".engine/registry/executions", name),
          "utf8",
        )
        .then(JSON.parse),
    ),
  );
  assert.ok(
    receipts.every((receipt) =>
      ["failed", "cancelled"].includes(receipt.status),
    ),
  );
});

test("cancellation settles even when a descendant inherits the worker output pipes", async (t) => {
  const f = await fixture(t),
    marker = path.join(f.root, "descendant.pid");
  await fs.writeFile(
    path.join(f.source, "index.cjs"),
    `exports.execute = async () => {
    const child = require('node:child_process').spawn(process.execPath, ['-e', 'setTimeout(() => {}, 60000)'], {windowsHide:true, stdio:['ignore', process.stdout, process.stderr]});
    require('node:fs').writeFileSync(${JSON.stringify(marker)}, String(child.pid));
    return new Promise(() => {});
  };`,
  );
  await sealPackage(f.source);
  await activate(f, "automatic");
  let descendant;
  const controller = new AbortController();
  const pending = f.registry.execute({
    entityId: "tsmc",
    engineId: "sample-math",
    operation: "add",
    input: { left: 1, right: 2 },
    signal: controller.signal,
  });
  // Observe rejection immediately, then wait for the actual inherited-pipe setup before cancelling.
  const settled = pending.then(
    () => null,
    (error) => error,
  );
  let timer;
  try {
    const started = Date.now();
    while (!descendant && Date.now() - started < 5000) {
      try {
        descendant = Number(await fs.readFile(marker, "utf8"));
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
      }
      if (!descendant) await new Promise((resolve) => setTimeout(resolve, 25));
    }
    assert.ok(descendant, "worker started its descendant");
    controller.abort();
    const error = await Promise.race([
      settled,
      new Promise((_, reject) => {
        timer = setTimeout(
          () => reject(Error("Cancellation waited on descendant pipes")),
          2000,
        );
      }),
    ]);
    assert.equal(error.code, "ENGINE_CANCELLED");
  } finally {
    clearTimeout(timer);
    controller.abort();
    if (descendant) {
      try {
        process.kill(descendant);
      } catch (error) {
        if (error.code !== "ESRCH") throw error;
      }
    }
  }
});

test("terminal workflow installs, trusts, links and executes through the same persistent registry", async (t) => {
  const f = await fixture(t),
    script = path.resolve(__dirname, "../scripts/orbistry-engine.cjs");
  const cli = async (args) =>
    JSON.parse(
      (
        await promisify(execFile)(process.execPath, [script, ...args], {
          windowsHide: true,
        })
      ).stdout,
    );
  const installed = await cli([
    "install",
    "--vault",
    f.vault,
    "--source",
    f.source,
  ]);
  await cli([
    "trust",
    "--vault",
    f.vault,
    "--id",
    installed.engineId,
    "--digest",
    installed.digest,
  ]);
  await cli([
    "link",
    "--vault",
    f.vault,
    "--id",
    installed.engineId,
    "--entity",
    "tsmc",
    "--operations",
    "add",
  ]);
  const input = path.join(f.root, "input.json");
  await fs.writeFile(input, '{"left":8,"right":13}');
  const result = await cli([
    "run",
    "--vault",
    f.vault,
    "--id",
    installed.engineId,
    "--entity",
    "tsmc",
    "--operation",
    "add",
    "--input",
    input,
    "--approve",
  ]);
  assert.deepEqual(result.data, { sum: 21 });
  assert.equal(
    (
      await cli([
        "result",
        "--vault",
        f.vault,
        "--entity",
        "tsmc",
        "--execution",
        result.receipt.executionId,
      ])
    ).origin,
    "historical",
  );
});

/** Exercises the same applied-index, scoped source and history routes used by the desktop, across a registry restart. */
test("external weather declaration survives disable, removal and reviewed restoration", async (t) => {
  const f = await fixture(t);
  const {
    saveKnowledgeIndex,
    readKnowledgeIndex,
  } = require("./domains/knowledge/knowledge-store.cjs");
  const { packageSource } = require("./domains/knowledge/package-source.cjs");
  const source = path.join(f.root, "outside-core");
  await fs.cp(path.resolve("examples/engines/weather-demo"), source, {
    recursive: true,
  });
  const declaration =
    '# Climate\nsource: engineSource("weather-demo","hourly",1,{"station":"test"})';
  const saved = await saveKnowledgeIndex(
    f.vault,
    "tsmc",
    declaration,
    null,
    true,
  );
  const input = {
    id: "tsmc",
    declarationId: saved.menus[0].packageSources[0].id,
  };
  const status = async () =>
    (await packageSource(f.vault, input, () => true)).status;
  assert.equal(await status(), "package_missing");
  const { digest } = await f.registry.install(source);
  const trust = () => f.registry.trust("weather-demo", digest);
  const link = () =>
    f.registry.link({
      entityId: "tsmc",
      engineId: "weather-demo",
      operations: ["temperature"],
      policy: "automatic",
    });
  assert.equal(await status(), "untrusted");
  await trust();
  await link();
  const first = await packageSource(f.vault, input, () => true, true);
  assert.equal(first.data.observations[1].value, 19);
  await f.registry.setEnabled("weather-demo", digest, false);
  assert.equal(await status(), "package_disabled");
  await f.registry.uninstall("weather-demo", digest);
  assert.equal(await status(), "package_missing");
  assert.equal(
    (await f.registry.readResult("tsmc", first.executionId)).origin,
    "historical",
  );
  assert.equal(
    (await readKnowledgeIndex(f.vault, "tsmc")).applied,
    declaration,
  );
  await f.registry.install(source);
  assert.equal(await status(), "untrusted");
  await trust();
  assert.equal(await status(), "unlinked");
  await link();
  assert.deepEqual(
    (await packageSource(f.vault, input, () => true, true)).data,
    first.data,
  );
  await assert.rejects(
    packageSource(f.vault, { ...input, id: "asml" }, () => true, true),
  );
  await assert.rejects(packageSource(f.vault, input, () => false, true));
});

test("incompatible restoration and altered runtime bytes preserve the declaration without exposing execution", async (t) => {
  const f = await fixture(t);
  const {
    saveKnowledgeIndex,
    readKnowledgeIndex,
  } = require("./domains/knowledge/knowledge-store.cjs");
  const { packageSource } = require("./domains/knowledge/package-source.cjs");
  const source = path.join(f.root, "external-source");
  await fs.cp(path.resolve("examples/engines/weather-demo"), source, {
    recursive: true,
  });
  const draft =
    '# Lab\nsource: engineSource("weather-demo","hourly",1,{"station":"lab"})';
  const state = await saveKnowledgeIndex(f.vault, "tsmc", draft, null, true);
  const ref = {
    id: "tsmc",
    declarationId: state.menus[0].packageSources[0].id,
  };
  const file = path.join(source, "engine_manifest.json");
  const manifest = JSON.parse(await fs.readFile(file, "utf8"));
  manifest.engine_version = "2.0.0";
  await fs.writeFile(file, JSON.stringify(manifest));
  const { engineId, digest } = await f.registry.install(source);
  await f.registry.trust(engineId, digest);
  await f.registry.link({
    entityId: "tsmc",
    engineId,
    operations: ["temperature"],
    policy: "automatic",
  });
  assert.equal(
    (await packageSource(f.vault, ref, () => true, true)).status,
    "incompatible_version",
  );
  const runtime = path.join(
    (await f.registry.installed(engineId)).root,
    "index.cjs",
  );
  await fs.appendFile(runtime, "\n// changed");
  await assert.rejects(f.registry.uninstall(engineId, digest), {
    code: "ENGINE_INTEGRITY_FAILED",
  });
  await assert.rejects(
    packageSource(f.vault, ref, () => true, true),
    { code: "ENGINE_INTEGRITY_FAILED" },
  );
  assert.equal((await readKnowledgeIndex(f.vault, "tsmc")).applied, draft);
});
