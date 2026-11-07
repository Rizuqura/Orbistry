const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");
const { randomUUID } = require("node:crypto");
const { spawn } = require("node:child_process");
const { EngineRegistry } = require("./engine-registry.cjs");
const adapter = require("./chronoz-adapter.cjs");
const { AgentStore } = require("./agent-store.cjs");
const { defaults, validateConstruction } = require("./agent-construction.cjs");
async function fixture(t) {
  const root = await fs.realpath(
    await fs.mkdtemp(path.join(os.tmpdir(), "qterminal-engine-")),
  );
  t.after(async () => {
    assert.ok(
      path
        .resolve(root)
        .startsWith((await fs.realpath(os.tmpdir())) + path.sep),
    );
    await fs.rm(root, { recursive: true, force: true });
  });
  const bundle = path.join(root, "bundle with spaces"),
    data = path.join(root, "profile");
  const files = {
    "runtime/python.exe": "fixture executable",
    "runtime/python314._pth": "../src\nimport site\n",
    "src/chronoz/__init__.py": '__version__="0.5.0"',
    "src/chronoz/issue/trigger.py": "# fixture",
    "src/chronoz/issue/report_contract.json": "{}",
  };
  for (const [relative, content] of Object.entries(files)) {
    await fs.mkdir(path.dirname(path.join(bundle, relative)), {
      recursive: true,
    });
    await fs.writeFile(path.join(bundle, relative), content);
  }
  await fs.writeFile(
    path.join(bundle, "package_manifest.json"),
    JSON.stringify({
      integration_version: "1.0.0",
      engine_version: "0.5.0",
      platform: "Windows x64",
      files: Object.entries(files).map(([relative, content]) => ({
        path: relative,
        sha256: adapter.sha(content),
      })),
    }),
  );
  await fs.writeFile(
    path.join(bundle, "chronoz-tool.json"),
    JSON.stringify({
      function: {
        name: "chronoz_issue",
        parameters: {
          properties: { operation: { enum: ["get_report", "status"] } },
        },
      },
    }),
  );
  const pdf = path.join(bundle, "outputs", "2026-10", "chronoz_report.pdf");
  await fs.mkdir(path.dirname(pdf), { recursive: true });
  await fs.writeFile(pdf, "%PDF-1.7\nfixture report\n%%EOF");
  const checksum = adapter.sha(await fs.readFile(pdf));
  const mode = (value) =>
    fs.writeFile(
      path.join(bundle, "fixture-mode.json"),
      JSON.stringify({ sha256: checksum, ...value }),
    );
  await mode({});
  const agents = new AgentStore(data);
  const agent = await agents.create({
    name: "Research",
    creationId: randomUUID(),
  });
  const other = await agents.create({
    name: "Other",
    creationId: randomUUID(),
  });
  const instanceId = randomUUID(),
    nodeId = "engine-" + randomUUID();
  const config = structuredClone(agent.construction.draft);
  config.nodes.push({
    id: nodeId,
    kind: "Engine",
    x: 64,
    y: 360,
    config: { engineId: "chronoz", instanceId },
  });
  config.edges.push({ from: nodeId, to: "llm" });
  const calls = [],
    opened = [];
  const processOptions = {
    timeoutMs: 5000,
    spawnImpl: (exe, args, options) => {
      calls.push({ exe, args, options });
      return spawn(
        process.execPath,
        [path.resolve("scripts/fixtures/chronoz-trigger.cjs"), bundle],
        options,
      );
    },
  };
  const registry = new EngineRegistry(data, {
    agents,
    chooseFolder: async () => bundle,
    openPath: async (file) => {
      opened.push(file);
      return "";
    },
    processOptions,
  });
  const input = {
    agentId: agent.id,
    instanceId,
    engineId: "chronoz",
    operation: "get_report",
    arguments: { month: "2026-10" },
  };
  const save = (action, expectedRevision, selected = config) =>
    agents.saveConstruction({
      id: agent.id,
      config: selected,
      action,
      expectedRevision,
    });
  return {
    root,
    bundle,
    data,
    registry,
    agents,
    agent,
    other,
    config,
    nodeId,
    instanceId,
    input,
    save,
    mode,
    calls,
    opened,
    pdf,
    checksum,
    processOptions,
  };
}
test("construction retains seven-kind profiles, typed engine identity, constraints and revision protection", async (t) => {
  const f = await fixture(t);
  const old = defaults({
    id: f.agent.id,
    displayName: "Old",
    customInstructions: "",
  });
  validateConstruction(old, f.agent.id, true);
  validateConstruction(f.config, f.agent.id, true);
  for (const mutate of [
    (c) =>
      c.nodes.push({
        ...c.nodes.at(-1),
        id: "second",
        config: { engineId: "chronoz", instanceId: randomUUID() },
      }),
    (c) => (c.nodes.at(-1).config.engineId = "arbitrary"),
    (c) => (c.nodes.at(-1).config.command = "cmd.exe"),
    (c) => (c.nodes[0].config.engineId = "chronoz"),
    (c) => (c.nodes.at(-1).config.contextFile = {}),
    (c) => c.edges.push({ from: "llm", to: f.nodeId }),
    (c) => (c.edges = c.edges.filter((e) => e.from !== f.nodeId)),
    (c) => delete c.nodes.at(-1).config.instanceId,
  ]) {
    const c = structuredClone(f.config);
    mutate(c);
    assert.throws(() => validateConstruction(c, f.agent.id, true));
  }
  await f.save("draft", 0);
  await assert.rejects(f.save("apply", 0), /changed|revision|another/i);
});
test("registered engine remains agent-scoped; draft/apply/removal/restart and verified PARTIAL opening", async (t) => {
  const f = await fixture(t);
  assert.equal((await f.registry.state()).status, "Not configured");
  await assert.rejects(f.registry.execute(1, f.input), /applied graph/);
  assert.equal((await f.registry.configure(1)).status, "Partial");
  await f.save("draft", 0);
  await assert.rejects(f.registry.execute(1, f.input), /applied graph/);
  await f.save("apply", 1);
  const result = await f.registry.execute(1, f.input);
  assert.equal(result.status, "PARTIAL");
  assert.equal(result.attachment.month, "2026-10");
  await f.registry.open({
    agentId: f.agent.id,
    instanceId: f.instanceId,
    runId: result.attachment.runId,
  });
  assert.equal(f.opened.length, 1);
  assert.ok(f.opened[0].startsWith(f.data));
  await assert.rejects(
    f.registry.execute(1, { ...f.input, agentId: f.other.id }),
    /applied graph/,
  );
  assert.equal(
    (await new AgentStore(f.data).get(f.agent.id)).construction.activeRevision,
    2,
  );
  assert.equal((await new EngineRegistry(f.data).state()).status, "Partial");
  const audit = JSON.parse(
    await fs.readFile(
      path.join(f.data, "engine-runs", result.attachment.runId + ".json"),
    ),
  );
  assert.equal(audit.graphRevision, 2);
  assert.match(audit.graphHash, /^[a-f0-9]{64}$/);
  assert.equal(audit.agentId, f.agent.id);
  assert.equal(audit.attachment.sha256, f.checksum);
  const latest = await f.registry.execute(1, { ...f.input, arguments: {} });
  assert.equal(latest.attachment.month, "2026-10");
  const missing = await f.registry.execute(1, {
    ...f.input,
    arguments: { month: "2026-11" },
  });
  assert.equal(missing.status, "SCHEDULED");
  assert.equal(missing.attachment, null);
  const removed = structuredClone(f.config);
  removed.nodes.pop();
  removed.edges.pop();
  await f.save("draft", 2, removed);
  assert.equal((await f.registry.execute(1, f.input)).status, "PARTIAL");
  await f.save("apply", 3, removed);
  await assert.rejects(f.registry.execute(1, f.input), /applied graph/);
  await f.save("apply", 4);
  await fs.writeFile(f.opened[0], "%PDF-tampered");
  await assert.rejects(
    f.registry.open({
      agentId: f.agent.id,
      instanceId: f.instanceId,
      runId: result.attachment.runId,
    }),
    /changed/,
  );
  for (const call of f.calls) {
    assert.equal(call.exe, path.join(f.bundle, "runtime", "python.exe"));
    assert.deepEqual(call.args, [
      "-B",
      "-m",
      "chronoz.issue.trigger",
      f.bundle,
    ]);
    assert.equal(call.options.shell, false);
    assert.deepEqual(
      Object.keys(call.options.env).filter((key) =>
        /key|token|secret|python|node/i.test(key),
      ),
      [],
    );
  }
});
test("strict operations and arguments cannot register capabilities or supply commands/paths", async (t) => {
  const f = await fixture(t);
  for (const patch of [
    { engineId: "evil" },
    { operation: "monthly_run" },
    { operation: "freeze" },
    { operation: "configure-key" },
    { command: "cmd.exe" },
    { arguments: { month: "2026-10;whoami" } },
    { arguments: { month: "../2026-10" } },
    { arguments: { month: "2026-13" } },
    { arguments: { month: "1800-10" } },
    { arguments: { path: f.bundle } },
    { arguments: { executable: "python" } },
    { arguments: { apiKey: "secret" } },
  ])
    await assert.rejects(f.registry.execute(1, { ...f.input, ...patch }), {
      code: "MODEL_INVALID_REQUEST",
    });
  assert.equal(f.calls.length, 0);
});
test("bundle revalidation rejects executable/source/manifest substitution, extra import files and missing runtime", async (t) => {
  for (const kind of [
    "executable",
    "source",
    "manifest",
    "extra",
    "missing",
    "symlink",
  ])
    await t.test(kind, async (t) => {
      const f = await fixture(t);
      await f.registry.configure(1);
      await f.save("apply", 0);
      if (kind === "executable")
        await fs.writeFile(
          path.join(f.bundle, "runtime/python.exe"),
          "changed",
        );
      if (kind === "source")
        await fs.writeFile(
          path.join(f.bundle, "src/chronoz/issue/trigger.py"),
          "changed",
        );
      if (kind === "manifest") {
        const file = path.join(f.bundle, "package_manifest.json");
        const m = JSON.parse(await fs.readFile(file));
        m.engine_version = "9.0.0";
        await fs.writeFile(file, JSON.stringify(m));
      }
      if (kind === "extra")
        await fs.writeFile(
          path.join(f.bundle, "runtime/sitecustomize.py"),
          "evil",
        );
      if (kind === "missing")
        await fs.unlink(path.join(f.bundle, "runtime/python.exe"));
      if (kind === "symlink") {
        const source = path.join(f.bundle, "src");
        const outside = path.join(f.root, "substitute");
        await fs.rename(source, outside);
        await fs.symlink(outside, source, "junction");
      }
      assert.equal((await f.registry.state()).status, "Unavailable");
      await assert.rejects(f.registry.execute(1, f.input));
      assert.equal(f.calls.length, 1);
    });
});
test("PDF verification refuses traversal, other month, symlink escape, bad checksum, signature and oversized files", async (t) => {
  for (const kind of [
    "outside",
    "month",
    "checksum",
    "signature",
    "oversized",
    "symlink",
  ])
    await t.test(kind, async (t) => {
      const f = await fixture(t);
      const bundle = await adapter.inspectBundle(f.bundle);
      const payload = {
        status: "PARTIAL",
        issue_month: "2026-10",
        primary_output: {
          path: f.pdf,
          media_type: "application/pdf",
          sha256: f.checksum,
        },
      };
      if (kind === "outside")
        payload.primary_output.path = path.join(f.root, "outside.pdf");
      if (kind === "month") payload.issue_month = "2026-09";
      if (kind === "checksum") payload.primary_output.sha256 = "0".repeat(64);
      if (kind === "signature") {
        await fs.writeFile(f.pdf, "not a PDF");
        payload.primary_output.sha256 = adapter.sha("not a PDF");
      }
      if (kind === "oversized") {
        const file = await fs.open(f.pdf, "r+");
        await file.truncate(32 * 1024 * 1024 + 1);
        await file.close();
      }
      if (kind === "symlink") {
        const issue = path.dirname(f.pdf),
          outside = path.join(f.root, "issue");
        await fs.rename(issue, outside);
        await fs.symlink(outside, issue, "junction");
      }
      await assert.rejects(adapter.verifyReport(bundle, payload, "2026-10"));
    });
});
test("bounded child rejects malformed/oversized output, inconsistent exit code, timeout and cancellation", async (t) => {
  const f = await fixture(t),
    bundle = await adapter.inspectBundle(f.bundle);
  for (const kind of ["stdout", "stderr", "malformed", "array", "badshape"]) {
    await f.mode({ kind });
    await assert.rejects(
      adapter.runTrigger(
        bundle,
        "get_report",
        {},
        { ...f.processOptions, maxOutputBytes: 1024 },
      ),
      { code: "MODEL_INVALID_RESPONSE" },
    );
  }
  await f.mode({ exitCode: 0 });
  await assert.rejects(
    adapter.runTrigger(bundle, "get_report", {}, f.processOptions),
    /exit code/,
  );
  await f.mode({ kind: "timeout" });
  await assert.rejects(
    adapter.runTrigger(
      bundle,
      "get_report",
      {},
      { ...f.processOptions, timeoutMs: 50 },
    ),
    { code: "MODEL_TIMEOUT" },
  );
  const controller = new AbortController();
  const canceled = adapter.runTrigger(
    bundle,
    "get_report",
    {},
    { ...f.processOptions, signal: controller.signal },
  );
  controller.abort();
  await assert.rejects(canceled, { code: "MODEL_CANCELLED" });
  await assert.rejects(
    adapter.runTrigger(
      bundle,
      "get_report",
      {},
      { ...f.processOptions, signal: controller.signal },
    ),
    { code: "MODEL_CANCELLED" },
  );
});
test("global concurrency and owner cancellation; failed/blocked/unpublished responses remain distinct", async (t) => {
  const f = await fixture(t);
  await f.registry.configure(1);
  await f.save("apply", 0);
  await f.mode({ kind: "timeout" });
  const running = f.registry.execute(1, f.input);
  await assert.rejects(f.registry.execute(2, f.input), { code: "MODEL_BUSY" });
  f.registry.cancel(2);
  assert.ok(!f.registry.running.controller.signal.aborted);
  f.registry.cancel(1);
  await assert.rejects(running, { code: "MODEL_CANCELLED" });
  for (const status of ["BLOCKED", "FAILED", "SCHEDULED", "FROZEN"]) {
    await f.mode({ payload: { status, report_path: null } });
    const result = await f.registry.execute(1, f.input);
    assert.equal(result.status, status);
    assert.equal(result.attachment, null);
  }
});
test("configuration rejects invalid folders, canceled picker grants nothing, and engine diagnostics never leak raw secrets", async (t) => {
  const f = await fixture(t);
  f.registry.chooseFolder = async () => null;
  assert.equal(await f.registry.configure(1), null);
  assert.equal((await f.registry.state()).status, "Not configured");
  await assert.rejects(adapter.inspectBundle(f.root), /extracted Online 1.0.0/);
  f.registry.chooseFolder = async () => f.bundle;
  await f.registry.configure(1);
  await f.save("apply", 0);
  const secret = "SYNTHETIC_CREDENTIAL_MUST_NOT_LEAK";
  await f.mode({
    payload: { status: "FAILED", error: { message: secret, apiKey: secret } },
  });
  const result = await f.registry.execute(1, f.input);
  assert.equal(result.status, "FAILED");
  assert.ok(!JSON.stringify(result).includes(secret));
  for (const name of await fs.readdir(path.join(f.data, "engine-runs"))) {
    assert.ok(
      !(
        await fs.readFile(path.join(f.data, "engine-runs", name), "utf8")
      ).includes(secret),
    );
  }
  await f.mode({ kind: "timeout" });
  const running = f.registry.execute(1, f.input);
  f.registry.shutdown();
  await assert.rejects(running, { code: "MODEL_CANCELLED" });
});
test("parent chat cancellation terminates the child and preserves chat/engine correlation", async (t) => {
  const f = await fixture(t);
  await f.registry.configure(1);
  await f.save("apply", 0);
  await f.mode({ kind: "timeout" });
  const controller = new AbortController(),
    chatRunId = randomUUID(),
    conversationId = randomUUID();
  let started;
  const ready = new Promise((resolve) => (started = resolve));
  const spawnChild = f.registry.processOptions.spawnImpl;
  f.registry.processOptions.spawnImpl = (...args) => {
    const child = spawnChild(...args);
    started();
    return child;
  };
  const pending = f.registry.execute(77, f.input, {
    signal: controller.signal,
    chatRunId,
    conversationId,
  });
  const rejected = assert.rejects(pending, { code: "MODEL_CANCELLED" });
  await ready;
  controller.abort();
  await rejected;
  assert.equal(f.registry.running, null);
  const records = await fs.readdir(path.join(f.data, "engine-runs"));
  const run = JSON.parse(
    await fs.readFile(path.join(f.data, "engine-runs", records[0]), "utf8"),
  );
  assert.equal(run.outcome, "MODEL_CANCELLED");
  assert.equal(run.chatRunId, chatRunId);
  assert.equal(run.conversationId, conversationId);
});
