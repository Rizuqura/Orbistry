const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { randomUUID } = require("node:crypto");
const { AgentStore } = require("./agent-store.cjs");
const { EntityAgentService } = require("./entity-agents.cjs");
const { validateConstruction } = require("./agent-construction.cjs");
const { ENGINE_DEFINITIONS } = require("../engine-registry.cjs");
const { DEFAULTS } = require("../model-registry.cjs");
const {
  saveWorldViewChip,
  assignWorldViewFiles,
} = require("../../domains/entity/worldview-store.cjs");
const {
  saveKnowledgeIndex,
} = require("../../domains/knowledge/knowledge-store.cjs");
const compiler = require("../../engines/backend-identity/identity-compiler.cjs");
const capabilities = require("../../engines/backend-identity/capability-registry.cjs");

/** Builds disposable entities and definitions with optional precompiled identity; provider replies are explicit test adapters. */
async function fixture(t, configured = false, compiled = true) {
  const parent = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-entity-agents-"),
  );
  t.after(async () => {
    assert.ok(
      path.resolve(parent).startsWith(path.resolve(os.tmpdir()) + path.sep),
    );
    await fs.rm(parent, { recursive: true, force: true });
  });
  const root = path.join(parent, "Universe");
  await fs.mkdir(root);
  const agents = new AgentStore(path.join(parent, "app-data"));
  let agent = await agents.create({
    name: "Research Agent",
    creationId: randomUUID(),
  });
  const graph = structuredClone(agent.construction.draft);
  graph.nodes.push({
    id: "knowledge",
    kind: "Knowledge",
    x: 64,
    y: 0,
    config: { mode: "preview-only", maxTokens: 500 },
  });
  graph.edges.push({ from: "knowledge", to: "llm" });
  for (const [index, [engineId, operation]] of [
    ["daily-price", "price"],
    ["yahoo-financials", "financials"],
    ["yahoo-financials", "earnings"],
  ].entries()) {
    const nodeId = `engine-${index}`;
    graph.nodes.push({
      id: nodeId,
      kind: "Engine",
      x: 256 + index * 192,
      y: 0,
      config: {
        engineId,
        operation,
        engineVersion: ENGINE_DEFINITIONS[engineId].version,
        instanceId: randomUUID(),
        permissionPolicy: "read-only-approval",
        parameters: { force: false },
      },
    });
    graph.edges.push({ from: nodeId, to: "llm" });
  }
  agent = await agents.saveConstruction({
    id: agent.id,
    action: "apply",
    expectedRevision: 0,
    config: graph,
  });
  await fs.writeFile(
    path.join(root, "reference.cjs"),
    "DO_NOT_READ_OR_EXECUTE_REFERENCE",
  );
  for (const entityId of ["tsmc", "peer"]) {
    await saveWorldViewChip(root, {
      id: entityId,
      name: entityId === "tsmc" ? "TSMC" : "Peer",
      icon: "",
      color: "#262b30",
      tags: [],
      category: "Company",
      position: { x: entityId === "tsmc" ? 0 : 4, y: 0 },
    });
    await fs.writeFile(
      path.join(root, `${entityId}.md`),
      `# Revenue\n${entityId} revenue evidence.\n## Outlook\n${entityId} outlook evidence.\n`,
    );
    await assignWorldViewFiles(root, entityId, [
      `${entityId}.md`,
      "reference.cjs",
    ]);
    await saveKnowledgeIndex(
      root,
      entityId,
      `# About\nsource: ${entityId}.md\nsource: reference.cjs\n# Price\nsource: yahooPrice("2330.TW")\n# Financials\nsource: yahooFinancials("2330.TW")\n# Earnings\nsource: yahooEarnings("2330.TW")`,
      null,
      true,
    );
    if (compiled) await compiler.generate(root, entityId);
  }
  const requests = [];
  const settings = {
    ...DEFAULTS,
    modelId: configured ? "unit-test-model" : null,
  };
  const registry = {
    read: async () => settings,
    validateSelection: async () => {
      assert.ok(settings.modelId);
    },
    providerFor: () => ({
      /** Returns a fixed test envelope solely to inspect the real provider runner's input and session persistence. */
      complete: async (request) => {
        requests.push(request);
        return {
          content: JSON.stringify({ answer: "Unit-test provider response." }),
          finishReason: "stop",
        };
      },
    }),
  };
  const service = new EntityAgentService({
    agents,
    registry,
    getVault: () => root,
  });
  const assignment = await service.assign({
    vaultPath: root,
    entityId: "tsmc",
    agentId: agent.id,
  });
  return {
    root,
    parent,
    agents,
    agent,
    graph,
    registry,
    requests,
    settings,
    service,
    assignment,
    scope: { vaultPath: root, assignmentId: assignment.id },
  };
}

test("assigned NVIDIA chat and data access survive the Universe backend/history reset", async (t) => {
  const f = await fixture(t, true);
  f.settings.providerId = "nvidia";
  const definitions = await fs.readFile(f.agents.file, "utf8");
  const initial = await f.service.send({
    ...f.scope,
    message: "Review this Entity",
  });
  assert.equal(initial.session.error, null);
  await require("../backend-reset.cjs").resetBackend({
    profile: path.dirname(f.agents.file),
    vault: f.root,
    apply: true,
  });
  assert.equal((await f.service.open(f.scope)).session.messages.length, 0);
  const result = await f.service.send({
    ...f.scope,
    message: "Review this Entity after reset",
  });
  assert.equal(result.session.error, null);
  assert.match(
    result.session.messages.at(-1).content,
    /Unit-test provider response/,
  );
  assert.equal(f.requests.length, 2);
  assert.equal(f.requests[1].settings.providerId, "nvidia");
  assert.equal(
    f.requests[1].messages.some(
      (message) => message.content === "Review this Entity",
    ),
    false,
  );
  assert.equal(await fs.readFile(f.agents.file, "utf8"), definitions);
  assert.equal(
    (await f.service.list({ vaultPath: f.root }))[0].id,
    f.assignment.id,
  );
  assert.ok(result.context.engines.length);
});

test("assignment persistence is idempotent under concurrent retries and leaves reusable definitions intact", async (t) => {
  const f = await fixture(t);
  const before = await fs.readFile(f.agents.file, "utf8");
  const again = new EntityAgentService({
    agents: f.agents,
    registry: f.registry,
    getVault: () => f.root,
  });
  const records = await Promise.all(
    Array.from({ length: 6 }, (_, index) =>
      (index % 2 ? f.service : again).assign({
        vaultPath: f.root,
        entityId: "tsmc",
        agentId: f.agent.id,
      }),
    ),
  );
  assert.ok(records.every((item) => item.id === f.assignment.id));
  assert.equal((await again.list({ vaultPath: f.root })).length, 1);
  assert.equal(await fs.readFile(f.agents.file, "utf8"), before);
});

test("multiple agents per entity and one definition across entities retain independent assignments and sessions", async (t) => {
  const f = await fixture(t);
  const other = await f.agents.create({
    name: "Other Agent",
    creationId: randomUUID(),
  });
  const second = await f.service.assign({
    vaultPath: f.root,
    entityId: "tsmc",
    agentId: other.id,
  });
  const peer = await f.service.assign({
    vaultPath: f.root,
    entityId: "peer",
    agentId: f.agent.id,
  });
  assert.equal(
    (await f.service.list({ vaultPath: f.root, entityId: "tsmc" })).length,
    2,
  );
  await f.service.send({ ...f.scope, message: "Private TSMC question" });
  assert.equal(
    (await f.service.open({ vaultPath: f.root, assignmentId: peer.id })).session
      .messages.length,
    0,
  );
  assert.equal(
    (await f.service.open({ vaultPath: f.root, assignmentId: second.id }))
      .session.messages.length,
    0,
  );
  await f.service.remove(f.scope);
  assert.equal((await f.service.list({ vaultPath: f.root })).length, 2);
  const replacement = await f.service.assign({
    vaultPath: f.root,
    entityId: "tsmc",
    agentId: f.agent.id,
  });
  assert.notEqual(replacement.id, f.assignment.id);
  assert.equal(
    (await f.service.open({ vaultPath: f.root, assignmentId: replacement.id }))
      .session.messages.length,
    0,
  );
  await assert.rejects(f.service.open(f.scope), /unavailable/);
});

test("multiple Engine nodes retain independent operations, parameters, positions and connections after restart/removal", async (t) => {
  const f = await fixture(t);
  const saved = await new AgentStore(path.dirname(f.agents.file)).get(
    f.agent.id,
  );
  assert.deepEqual(saved.construction.active.nodes, f.graph.nodes);
  assert.deepEqual(saved.construction.active.edges, f.graph.edges);
  const graph = structuredClone(f.graph);
  graph.nodes = graph.nodes.filter((node) => node.id !== "engine-1");
  graph.edges = graph.edges.filter((edge) => edge.from !== "engine-1");
  await f.agents.saveConstruction({
    id: f.agent.id,
    action: "apply",
    expectedRevision: 1,
    config: graph,
  });
  const state = await f.service.open(f.scope);
  assert.deepEqual(
    state.context.engines.map((node) => node.operation),
    ["price", "earnings"],
  );
  assert.ok(
    state.context.engines.every((node) => node.status === "configured"),
  );
  const duplicate = structuredClone(graph);
  duplicate.nodes.push({ ...duplicate.nodes[0], id: "another-context" });
  assert.throws(
    () => validateConstruction(duplicate, f.agent.id, true),
    /one node/,
  );
});

test("legacy graphs with zero/one CHronoZ node keep their original definitions and permission defaults", async (t) => {
  const f = await fixture(t);
  const graph = structuredClone(f.graph);
  graph.nodes = graph.nodes.filter((node) => node.kind !== "Engine");
  graph.edges = graph.edges.filter((edge) => !edge.from.startsWith("engine-"));
  validateConstruction(graph, f.agent.id, true);
  graph.nodes.push({
    id: "old-engine",
    kind: "Engine",
    x: 0,
    y: 0,
    config: { engineId: "chronoz", instanceId: randomUUID() },
  });
  graph.edges.push({ from: "old-engine", to: "llm" });
  const validated = validateConstruction(graph, f.agent.id, true);
  assert.deepEqual(validated.config, graph);
  const bad = structuredClone(graph);
  bad.nodes.at(-1).config.operation = "run_shell";
  assert.throws(
    () => validateConstruction(bad, f.agent.id, true),
    /old-engine/,
  );
  bad.nodes.at(-1).config.engineId = "__proto__";
  assert.throws(
    () => validateConstruction(bad, f.agent.id, true),
    /old-engine/,
  );
});

test("Knowledge node retrieves only assigned entity chunks with provenance, lexical pagination and source freshness", async (t) => {
  const f = await fixture(t);
  const page = await f.service.retrieve({ ...f.scope, query: "", limit: 1 });
  assert.equal(page.items.length, 1);
  assert.equal(page.nextOffset, 1);
  const next = await f.service.retrieve({
    ...f.scope,
    query: "",
    limit: 1,
    offset: page.nextOffset,
  });
  assert.notEqual(next.items[0].chunkId, page.items[0].chunkId);
  for (const chunk of [...page.items, ...next.items]) {
    assert.equal(chunk.entityId, "tsmc");
    assert.equal(chunk.sourceId, "tsmc.md");
    assert.match(chunk.contentHash, /^[a-f0-9]{64}$/);
    assert.ok(chunk.startLine > 0 && chunk.sourceVersion && chunk.headingPath);
    assert.equal(chunk.trust, "untrusted-source");
  }
  assert.doesNotMatch(
    JSON.stringify(page),
    /peer revenue|DO_NOT_READ_OR_EXECUTE_REFERENCE/,
  );
  assert.equal((await f.service.open(f.scope)).context.referenceOnlyCount, 1);
  await fs.appendFile(path.join(f.root, "tsmc.md"), "Changed source.");
  assert.equal((await f.service.open(f.scope)).context.identityStatus, "stale");
  await assert.rejects(
    f.service.retrieve({ ...f.scope, query: "Revenue" }),
    /stale/,
  );
});

test("unconfigured provider persists an explicit error and user history without fabricating a response or invoking engines", async (t) => {
  const f = await fixture(t);
  const state = await f.service.send({ ...f.scope, message: "Revenue" });
  assert.equal(state.providerConfigured, false);
  assert.match(state.session.error, /not configured/);
  assert.deepEqual(
    state.session.messages.map((message) => message.role),
    ["user"],
  );
  assert.equal(f.requests.length, 0);
  await assert.rejects(
    fs.readdir(path.join(f.service.directory(f.root), "executions")),
    { code: "ENOENT" },
  );
});

test("assignment chat uses existing provider runtime with bounded untrusted evidence and isolated history, without automatic engine calls", async (t) => {
  const f = await fixture(t, true);
  const state = await f.service.send({ ...f.scope, message: "Revenue" });
  assert.equal(state.session.error, null);
  assert.deepEqual(
    state.session.messages.map((message) => message.role),
    ["user", "assistant"],
  );
  assert.ok(state.session.messages[1].references.length > 0);
  const request = f.requests[0];
  assert.match(request.messages[0].content, /STRICT_CONTEXT_ANALYSIS/);
  assert.match(request.messages[0].content, /structured assignment protocol/);
  const supplied = JSON.parse(
    request.messages[1].content.split("\n").slice(1).join("\n"),
  );
  assert.equal(supplied.entity.id, "tsmc");
  assert.ok(
    supplied.chunks.reduce((sum, chunk) => sum + chunk.tokenEstimate, 0) <= 500,
  );
  assert.doesNotMatch(
    JSON.stringify(request),
    /peer revenue|DO_NOT_READ_OR_EXECUTE_REFERENCE/,
  );
  assert.equal(supplied.engines.length, 3);
  const peer = await f.service.assign({
    vaultPath: f.root,
    entityId: "peer",
    agentId: f.agent.id,
  });
  await f.service.send({
    vaultPath: f.root,
    assignmentId: peer.id,
    message: "Outlook",
  });
  assert.doesNotMatch(
    JSON.stringify(f.requests[1]),
    /tsmc revenue|Unit-test provider response/,
  );
  assert.equal((await f.service.open(f.scope)).session.messages.length, 2);
  await assert.rejects(
    fs.readdir(path.join(f.service.directory(f.root), "executions")),
    { code: "ENOENT" },
  );
});

test("engine invocation rejects missing approval, wrong node/scope, disabled permission and secret parameters with a redacted audit trail", async (t) => {
  const f = await fixture(t);
  let executions = 0;
  t.mock.method(capabilities, "executeCapability", async () => {
    executions++;
    return { snapshot: "test-only" };
  });
  const context = (await f.service.open(f.scope)).context;
  const capabilityId = context.engines[0].capabilities[0].capabilityId;
  const input = {
    ...f.scope,
    nodeId: "engine-0",
    capabilityId,
    approved: true,
  };
  await assert.rejects(
    f.service.execute({ ...input, approved: false }),
    /rejected/,
  );
  await assert.rejects(
    f.service.execute({ ...input, nodeId: "missing-node" }),
    /rejected/,
  );
  await assert.rejects(
    f.service.execute({ ...input, capabilityId: "f".repeat(64) }),
    /unavailable/,
  );
  const peer = await f.service.assign({
    vaultPath: f.root,
    entityId: "peer",
    agentId: f.agent.id,
  });
  const peerCapability = (
    await f.service.open({ vaultPath: f.root, assignmentId: peer.id })
  ).context.engines[0].capabilities[0].capabilityId;
  await assert.rejects(
    f.service.execute({ ...input, capabilityId: peerCapability }),
    /unavailable/,
  );
  await assert.rejects(
    f.service.execute({ ...input, arguments: { apiKey: "SYNTHETIC_SECRET" } }),
    /rejected/,
  );
  const graph = structuredClone(f.graph);
  graph.nodes.find((node) => node.id === "engine-0").config.permissionPolicy =
    "disabled";
  await f.agents.saveConstruction({
    id: f.agent.id,
    action: "apply",
    expectedRevision: 1,
    config: graph,
  });
  await assert.rejects(f.service.execute(input), /rejected/);
  assert.equal(executions, 0);
  const directory = path.join(f.service.directory(f.root), "executions");
  const audits = await Promise.all(
    (await fs.readdir(directory)).map(async (file) =>
      JSON.parse(await fs.readFile(path.join(directory, file), "utf8")),
    ),
  );
  assert.equal(audits.length, 6);
  assert.ok(
    audits.every(
      (audit) =>
        audit.status === "rejected" &&
        audit.assignmentId === f.assignment.id &&
        audit.entityId === "tsmc",
    ),
  );
  assert.doesNotMatch(JSON.stringify(audits), /SYNTHETIC_SECRET|apiKey/);
});

test("approved read-only execution passes through the live identity registry and records a result reference", async (t) => {
  const f = await fixture(t, true);
  const calls = [];
  t.mock.method(capabilities, "executeCapability", async (...args) => {
    calls.push(args);
    return unitPriceResult();
  });
  const capabilityId = (await f.service.open(f.scope)).context.engines[0]
    .capabilities[0].capabilityId;
  const result = await f.service.execute({
    ...f.scope,
    nodeId: "engine-0",
    capabilityId,
    approved: true,
    arguments: { force: false },
  });
  assert.equal(result.audit.status, "succeeded");
  assert.equal(calls.length, 1);
  assert.equal(calls[0][0], f.root);
  assert.equal(calls[0][1], "tsmc");
  assert.deepEqual(calls[0][3], { force: false });
  const audit = JSON.parse(
    await fs.readFile(
      path.join(
        f.service.directory(f.root),
        "executions",
        result.audit.id + ".json",
      ),
      "utf8",
    ),
  );
  assert.equal(audit.resultReference, result.audit.id);
  assert.equal(audit.engineId, "daily-price");
  assert.match(audit.resultHash, /^[a-f0-9]{64}$/);
  const state = await f.service.send({ ...f.scope, message: "Revenue" });
  assert.equal(state.session.error, null);
  assert.equal(state.session.executions[0].id, audit.id);
  const context = JSON.parse(
    f.requests[0].messages[1].content.split("\n").slice(1).join("\n"),
  );
  assert.equal(context.capabilityResults[0].execution.id, audit.id);
  assert.equal(context.capabilityResults[0].result.price, 123.45);
  assert.equal(context.capabilityResults[0].result.currency, "TWD");
  await fs.writeFile(
    path.join(f.service.directory(f.root), "results", audit.id + ".json"),
    JSON.stringify({ testResult: false }),
  );
  const rejected = await f.service.send({ ...f.scope, message: "Revenue" });
  assert.ok(rejected.session.error);
  assert.equal(
    f.requests.length,
    1,
    "changed result bytes never reach the provider",
  );
});

test("scope changes and tampered session owners cannot expose another assignment's history", async (t) => {
  const f = await fixture(t);
  await assert.rejects(
    f.service.open({ ...f.scope, vaultPath: f.parent }),
    /Universe changed/,
  );
  await f.service.send({ ...f.scope, message: "Private question" });
  const sessionFile = path.join(
    f.service.directory(f.root),
    "sessions",
    f.assignment.id + ".json",
  );
  const session = JSON.parse(await fs.readFile(sessionFile, "utf8"));
  session.entityId = "peer";
  await fs.writeFile(sessionFile, JSON.stringify(session));
  await assert.rejects(f.service.open(f.scope), /owner/);
  await assert.rejects(
    f.service.assign({
      vaultPath: f.root,
      entityId: "missing",
      agentId: f.agent.id,
    }),
  );
});

test("failed turns retain their transcript while later successful exchanges reach provider history as complete pairs", async (t) => {
  const f = await fixture(t);
  await f.service.send({ ...f.scope, message: "Unconfigured question" });
  f.settings.modelId = "unit-test-model";
  await f.service.send({ ...f.scope, message: "Revenue" });
  const state = await f.service.send({ ...f.scope, message: "Outlook" });
  assert.equal(state.session.error, null);
  assert.deepEqual(
    state.session.messages.map((message) => message.role),
    ["user", "user", "assistant", "user", "assistant"],
  );
  assert.deepEqual(
    f.requests[1].messages
      .slice(-3)
      .map(({ role, content }) => ({ role, content })),
    [
      { role: "user", content: "Revenue" },
      { role: "assistant", content: "Unit-test provider response." },
      { role: "user", content: "Outlook" },
    ],
  );
});

test("retrieval requires a connected Knowledge node and graph capacity expands only for Engine instances", async (t) => {
  const f = await fixture(t);
  const graph = structuredClone(f.graph);
  graph.nodes = graph.nodes.filter((node) => node.kind !== "Knowledge");
  graph.edges = graph.edges.filter((edge) => edge.from !== "knowledge");
  for (let index = 3; index < 16; index++) {
    const node = {
      ...structuredClone(graph.nodes.find((item) => item.id === "engine-0")),
      id: `engine-${index}`,
    };
    node.config.instanceId = randomUUID();
    graph.nodes.push(node);
    graph.edges.push({ from: node.id, to: "llm" });
  }
  validateConstruction(graph, f.agent.id, true);
  await f.agents.saveConstruction({
    id: f.agent.id,
    action: "apply",
    expectedRevision: 1,
    config: graph,
  });
  await assert.rejects(
    f.service.retrieve({ ...f.scope, query: "Revenue" }),
    /Connect a Knowledge node/,
  );
  graph.nodes.push({
    ...structuredClone(graph.nodes.at(-1)),
    id: "engine-over-limit",
    config: { ...graph.nodes.at(-1).config, instanceId: randomUUID() },
  });
  graph.edges.push({ from: "engine-over-limit", to: "llm" });
  assert.throws(() => validateConstruction(graph, f.agent.id, true), /sixteen/);
});

/** Builds explicitly synthetic native-engine output for unit tests, including a deliberately large history to exercise compact result delivery. */
function unitPriceResult(symbol = "2330.TW") {
  return {
    snapshot: {
      schemaVersion: 1,
      engineVersion: "0.1.0",
      provider: "Yahoo Finance",
      symbol,
      currency: "TWD",
      exchangeTimezone: "Asia/Taipei",
      price: 123.45,
      previousClose: 120,
      marketTime: "2026-11-16T05:30:00.000Z",
      marketState: "CLOSED",
      delayMinutes: 20,
      fetchedAt: "2026-11-17T04:00:00.000Z",
      historyFetchedAt: "2026-11-17T04:00:00.000Z",
      history: Array.from({ length: 300 }, (_, index) => ({
        date: new Date(Date.UTC(2025, 0, 1 + index)).toISOString().slice(0, 10),
        close: 100 + index / 10,
      })),
    },
    cached: false,
    stale: false,
    warning: null,
  };
}

/** Replaces only the fixture's model adapter so tests can inspect real runtime dispatch, authorization and persisted outcomes. */
function modelReplies(f, reply) {
  f.registry.providerFor = () => ({
    complete: async (request) => {
      f.requests.push(request);
      return {
        content: JSON.stringify(await reply(request)),
        finishReason: "stop",
      };
    },
  });
}

/** Reads host-supplied assignment data from a captured provider request, excluding any private/user messages from test output. */
function suppliedContext(request) {
  return JSON.parse(
    request.messages[1].content.split("\n").slice(1).join("\n"),
  );
}

test("model proposal, bound approval and immediate continuation execute once and deliver compact price provenance", async (t) => {
  const f = await fixture(t, true);
  let calls = 0;
  t.mock.method(
    capabilities,
    "executeCapability",
    async (root, entityId, capability, args) => {
      calls++;
      assert.equal(root, f.root);
      assert.equal(entityId, "tsmc");
      assert.deepEqual(args, { force: true });
      return unitPriceResult(capability.symbol);
    },
  );
  modelReplies(f, (request) => {
    const context = suppliedContext(request);
    const result = context.capabilityResults[0]?.result;
    if (result)
      return {
        action: "answer",
        answer: `${result.symbol} ${result.price} ${result.currency}. ${result.source}. Market ${result.marketTimestamp}. Retrieved ${result.retrievedAt}. Execution ${result.executionId}. Delay ${result.delayMinutes} minutes.`,
      };
    const engine = context.engines.find(
      (item) => item.engineId === "daily-price",
    );
    return {
      action: "engine.request",
      nodeId: engine.nodeId,
      capabilityId: engine.capabilities[0].capabilityId,
      arguments: { force: true },
    };
  });
  const proposed = await f.service.send({
    ...f.scope,
    message: "Get latest available price using the assigned engine.",
  });
  assert.equal(calls, 0);
  assert.equal(proposed.session.requests.length, 1);
  const proposal = proposed.session.requests[0];
  assert.equal(proposal.status, "awaiting-approval");
  assert.equal(proposal.symbol, "2330.TW");
  assert.match(proposed.session.messages.at(-1).content, /Approval required/);
  const completed = await f.service.decide({
    ...f.scope,
    requestId: proposal.id,
    approved: true,
  });
  assert.equal(completed.session.error, null);
  assert.equal(calls, 1);
  assert.match(completed.session.messages.at(-1).content, /123\.45 TWD/);
  assert.match(completed.session.messages.at(-1).content, /Yahoo Finance/);
  const audit = completed.session.executions.at(-1);
  assert.equal(audit.status, "succeeded");
  assert.equal(audit.requestId, proposal.id);
  assert.equal(audit.priceQuote.price, 123.45);
  assert.match(completed.session.messages.at(-1).content, new RegExp(audit.id));
  assert.equal(
    suppliedContext(f.requests.at(-1)).capabilityResults[0].contentStatus,
    "included",
  );
  assert.ok(
    (
      await fs.stat(
        path.join(f.service.directory(f.root), "results", audit.id + ".json"),
      )
    ).size > 6000,
  );
  await Promise.all(
    Array.from({ length: 3 }, () =>
      f.service.decide({ ...f.scope, requestId: proposal.id, approved: true }),
    ),
  );
  await f.service.send({ ...f.scope, message: "Yes, please." });
  assert.equal(
    calls,
    1,
    "repeated approvals cannot execute a consumed request",
  );
  const restart = new EntityAgentService({
    agents: f.agents,
    registry: f.registry,
    getVault: () => f.root,
  });
  await restart.decide({ ...f.scope, requestId: proposal.id, approved: true });
  assert.equal(calls, 1);
});

test("chat approval is bound to one pending proposal and source/graph changes invalidate its authority", async (t) => {
  const f = await fixture(t, true);
  let calls = 0;
  t.mock.method(
    capabilities,
    "executeCapability",
    async (_root, _entity, capability) => {
      calls++;
      return unitPriceResult(capability.symbol);
    },
  );
  const state = await f.service.open(f.scope);
  const input = {
    ...f.scope,
    nodeId: "engine-0",
    capabilityId: state.context.engines[0].capabilities[0].capabilityId,
  };
  const first = await f.service.propose(input);
  await f.service.decide({ ...f.scope, requestId: first.id, approved: false });
  assert.equal(calls, 0);
  const second = await f.service.propose({ ...input, requestId: randomUUID() });
  modelReplies(f, (request) => ({
    action: "answer",
    answer: `Execution ${suppliedContext(request).capabilityResults[0]?.result.executionId ?? "missing"} completed.`,
  }));
  const approved = await f.service.send({ ...f.scope, message: "yes pls" });
  assert.equal(calls, 1);
  assert.equal(
    approved.session.requests.find((item) => item.id === second.id).status,
    "succeeded",
  );
  const third = await f.service.propose({ ...input, requestId: randomUUID() });
  const graph = structuredClone(f.graph);
  graph.nodes.find((node) => node.id === "engine-0").config.parameters.force =
    true;
  await f.agents.saveConstruction({
    id: f.agent.id,
    action: "apply",
    expectedRevision: 1,
    config: graph,
  });
  const rejected = await f.service.decide({
    ...f.scope,
    requestId: third.id,
    approved: true,
  });
  assert.match(rejected.session.error, /scope changed/);
  assert.equal(
    rejected.session.requests.find((item) => item.id === third.id).status,
    "cancelled",
  );
  assert.equal(calls, 1);
});

test("expired approvals, cross-assignment approval IDs and parameter substitution cannot execute", async (t) => {
  const f = await fixture(t, true);
  const state = await f.service.open(f.scope);
  const input = {
    ...f.scope,
    requestId: randomUUID(),
    nodeId: "engine-0",
    capabilityId: state.context.engines[0].capabilities[0].capabilityId,
    arguments: { force: false },
  };
  const request = await f.service.propose(input);
  await assert.rejects(
    f.service.propose({ ...input, arguments: { force: true } }),
    /different parameters/,
  );
  const peer = await f.service.assign({
    vaultPath: f.root,
    entityId: "peer",
    agentId: f.agent.id,
  });
  await assert.rejects(
    f.service.decide({
      vaultPath: f.root,
      assignmentId: peer.id,
      requestId: request.id,
      approved: true,
    }),
    /does not belong/,
  );
  await assert.rejects(
    f.service.decide({
      ...f.scope,
      requestId: request.id,
      approved: true,
      arguments: { force: true },
    }),
  );
  const session = await f.service.session(f.root, f.assignment);
  session.requests[0].expiresAt = "2000-01-01T00:00:00.000Z";
  await f.service.saveSession(f.root, session);
  const expired = await f.service.decide({
    ...f.scope,
    requestId: request.id,
    approved: true,
  });
  assert.match(expired.session.error, /expired/);
  assert.equal(expired.session.requests[0].status, "expired");
  assert.equal(expired.session.executions.length, 0);
});

test("provider failure or an invalid engine payload persists failure and never reaches the model as price evidence", async (t) => {
  const f = await fixture(t, true);
  const context = (await f.service.open(f.scope)).context;
  const input = {
    ...f.scope,
    nodeId: "engine-0",
    capabilityId: context.engines[0].capabilities[0].capabilityId,
  };
  const mock = t.mock.method(capabilities, "executeCapability", async () => {
    throw new Error("Provider timed out with PRIVATE_PROVIDER_BODY");
  });
  const request = await f.service.propose(input);
  const failed = await f.service.decide({
    ...f.scope,
    requestId: request.id,
    approved: true,
  });
  assert.match(failed.session.error, /timed out/);
  assert.doesNotMatch(JSON.stringify(failed), /PRIVATE_PROVIDER_BODY/);
  assert.equal(failed.session.executions.at(-1).status, "failed");
  assert.equal(failed.session.executions.at(-1).errorCode, "PROVIDER_TIMEOUT");
  assert.equal(f.requests.length, 0);
  mock.mock.mockImplementation(async () => ({
    snapshot: { symbol: "WRONG", price: 1 },
  }));
  const invalid = await f.service.propose({
    ...input,
    requestId: randomUUID(),
  });
  const invalidResult = await f.service.decide({
    ...f.scope,
    requestId: invalid.id,
    approved: true,
  });
  assert.equal(invalidResult.session.executions.at(-1).status, "failed");
  assert.equal(invalidResult.session.executions.at(-1).priceQuote, undefined);
  assert.equal(
    invalidResult.session.executions.at(-1).errorCode,
    "ENGINE_INVALID_RESPONSE",
  );
});

test("cached success and provider health remain distinct in capability diagnostics", async (t) => {
  const f = await fixture(t, true);
  t.mock.method(capabilities, "executeCapability", async () => ({
    ...unitPriceResult(),
    cached: true,
  }));
  const state = await f.service.open(f.scope);
  await f.service.execute({
    ...f.scope,
    nodeId: "engine-0",
    capabilityId: state.context.engines[0].capabilities[0].capabilityId,
    approved: true,
  });
  const engine = (await f.service.open(f.scope)).context.engines.find(
    (item) => item.nodeId === "engine-0",
  );
  assert.equal(engine.succeeded, true);
  assert.equal(engine.executed, true);
  assert.equal(
    engine.authorized,
    false,
    "a completed invocation grants no reusable approval",
  );
  assert.equal(
    engine.health.status,
    "unchecked",
    "a cache hit does not probe provider health",
  );
});

test("topic tools traverse indexed heading pages and retrieve scoped content in the same model turn", async (t) => {
  const f = await fixture(t, true);
  const pages = [];
  modelReplies(f, (request) => {
    const last = request.messages.at(-1);
    if (!last.content.startsWith("Backend tool response"))
      return { action: "knowledge.listTopics", offset: 0, limit: 1 };
    const page = JSON.parse(last.content.split("\n").slice(1).join("\n"));
    pages.push(page);
    if (page.nextOffset !== null)
      return {
        action: "knowledge.listTopics",
        offset: page.nextOffset,
        limit: 1,
      };
    return {
      action: "answer",
      answer: pages
        .flatMap((item) => item.items)
        .map((topic) => `${topic.headingPath.join(" / ")} [${topic.sourceId}]`)
        .join("\n"),
    };
  });
  const state = await f.service.send({
    ...f.scope,
    message: "Give me all topics available through this entity.",
  });
  assert.equal(state.session.error, null);
  assert.match(state.session.messages.at(-1).content, /Revenue.*tsmc.md/s);
  assert.match(state.session.messages.at(-1).content, /Outlook/);
  assert.equal(pages.at(-1).nextOffset, null);
  assert.ok(state.session.messages.at(-1).references.length >= 2);
  assert.doesNotMatch(
    JSON.stringify(pages),
    /DO_NOT_READ_OR_EXECUTE_REFERENCE|peer revenue/,
  );
  const chunkId = pages[0].items[0].chunks[0].chunkId;
  modelReplies(f, (request) => {
    if (!request.messages.at(-1).content.startsWith("Backend tool response"))
      return { action: "knowledge.getChunk", chunkId };
    const response = JSON.parse(
      request.messages.at(-1).content.split("\n").slice(1).join("\n"),
    );
    return { action: "answer", answer: response.items[0].content };
  });
  const content = await f.service.send({
    ...f.scope,
    message: "Read that indexed section.",
  });
  assert.equal(content.session.error, null);
  assert.match(
    content.session.messages.at(-1).content,
    /tsmc revenue evidence/,
  );
});

test("disabled policies and a missing Knowledge node are explained independently of capability configuration", async (t) => {
  const f = await fixture(t, true);
  const graph = structuredClone(f.graph);
  graph.nodes = graph.nodes.filter((node) => node.kind !== "Knowledge");
  graph.edges = graph.edges.filter((edge) => edge.from !== "knowledge");
  graph.nodes.find((node) => node.id === "engine-0").config.permissionPolicy =
    "disabled";
  await f.agents.saveConstruction({
    id: f.agent.id,
    action: "apply",
    expectedRevision: 1,
    config: graph,
  });
  const current = await f.service.open(f.scope);
  const engine = current.context.engines.find(
    (item) => item.nodeId === "engine-0",
  );
  assert.equal(engine.registered, true);
  assert.equal(engine.configured, true);
  assert.equal(engine.enabled, false);
  assert.equal(engine.health.status, "unchecked");
  assert.equal(current.context.knowledgeAccess.connected, false);
  await assert.rejects(
    f.service.propose({
      ...f.scope,
      nodeId: engine.nodeId,
      capabilityId: engine.capabilities[0].capabilityId,
    }),
    /disabled/,
  );
  modelReplies(f, (request) =>
    request.messages.at(-1).content.startsWith("Backend tool response")
      ? {
          action: "answer",
          answer: "Add and connect a Knowledge node, then Save & apply.",
        }
      : { action: "knowledge.listTopics" },
  );
  const state = await f.service.send({
    ...f.scope,
    message: "List all topics",
  });
  assert.equal(state.session.error, null);
  assert.match(state.session.messages.at(-1).content, /Knowledge node/);
  assert.equal(state.session.requests.length, 0);
});

test("automatic reads refresh stale identity before inference and deliver one deduplicated execution without approval", async (t) => {
  const f = await fixture(t, true);
  const graph = structuredClone(f.graph);
  graph.nodes.find((node) => node.id === "engine-0").config.permissionPolicy =
    "read-only-auto";
  await f.agents.saveConstruction({
    id: f.agent.id,
    action: "apply",
    expectedRevision: 1,
    config: graph,
  });
  const previous = await compiler.status(f.root, "tsmc");
  const file = path.join(f.root, "tsmc.md");
  const updated = "# Updated research\nCurrent authorized source content.\n";
  await fs.writeFile(file, updated);
  const before = await fs.stat(file);
  let calls = 0;
  let turns = 0;
  t.mock.method(
    capabilities,
    "executeCapability",
    async (_root, _entity, capability) => {
      calls++;
      return unitPriceResult(capability.symbol);
    },
  );
  modelReplies(f, (request) => {
    turns++;
    const context = suppliedContext(request);
    assert.equal(context.identityStatus, "fresh");
    assert.notEqual(context.identityVersion, previous.manifest.identityVersion);
    assert.ok(
      context.chunks.some((chunk) =>
        chunk.content.includes("Current authorized source content"),
      ),
    );
    const engine = context.engines.find((node) => node.nodeId === "engine-0");
    assert.equal(engine.authorization, "automatic-read-only");
    assert.equal(engine.authorized, true);
    if (turns < 3)
      return {
        action: "engine.request",
        nodeId: engine.nodeId,
        capabilityId: engine.capabilities[0].capabilityId,
        ...(turns === 2 ? { arguments: { force: false } } : {}),
      };
    const tool = JSON.parse(
      request.messages.at(-1).content.split("\n").slice(1).join("\n"),
    );
    return {
      action: "answer",
      answer: `Synthetic ${tool.result.price} ${tool.result.currency}, execution ${tool.executionId}.`,
    };
  });
  const result = await f.service.send({
    ...f.scope,
    message: "Read the current source and price.",
  });
  assert.equal(result.session.error, null);
  assert.equal(calls, 1);
  assert.equal(result.session.executions.length, 1);
  assert.equal(
    result.session.executions[0].authorizationMode,
    "standing-read-only",
  );
  assert.equal(result.session.requests[0].status, "succeeded");
  assert.equal(
    result.session.requests[0].authorizationMode,
    "standing-read-only",
  );
  assert.match(result.session.messages.at(-1).content, /123\.45 TWD/);
  assert.equal(await fs.readFile(file, "utf8"), updated);
  assert.equal((await fs.stat(file)).mtimeMs, before.mtimeMs);
  const binding = await f.service.binding(f.root, f.assignment.id);
  const page = await f.service.readResult(
    f.root,
    binding,
    result.context,
    result.session.executions[0].id,
    0,
    2,
  );
  assert.equal(page.items.length, 2);
  assert.equal(page.nextOffset, 2);
  assert.equal(page.origin, "historical");
  assert.equal(page.executionStatus, "previously_completed");
  assert.equal(calls, 1, "reading history must not fetch or execute again");
  const peer = await f.service.assign({
    vaultPath: f.root,
    entityId: "peer",
    agentId: f.agent.id,
  });
  const peerBinding = await f.service.binding(f.root, peer.id);
  await assert.rejects(
    f.service.readResult(
      f.root,
      peerBinding,
      (await f.service.open({ vaultPath: f.root, assignmentId: peer.id }))
        .context,
      page.executionId,
    ),
    /unavailable/,
  );
  const unchanged = await compiler.status(f.root, "tsmc");
  modelReplies(f, () => ({
    action: "answer",
    answer: "Current identity remains available.",
  }));
  await f.service.send({ ...f.scope, message: "Check the identity again." });
  assert.deepEqual(
    (await compiler.status(f.root, "tsmc")).lastAttempt,
    unchanged.lastAttempt,
    "fresh identities do not recompile",
  );
});

test("missing identity is built before answering; compilation grants cannot execute engines or write sources", async (t) => {
  const f = await fixture(t, true, false);
  const bytes = await fs.readFile(path.join(f.root, "tsmc.md"));
  modelReplies(f, (request) => ({
    action: "answer",
    answer: suppliedContext(request).identityStatus,
  }));
  const result = await f.service.send({
    ...f.scope,
    message: "Read this entity.",
  });
  assert.equal(result.session.error, null);
  assert.equal(result.session.messages.at(-1).content, "fresh");
  assert.deepEqual(await fs.readFile(path.join(f.root, "tsmc.md")), bytes);
  const runtime = f.service.runtime(f.root, f.assignment, null, true);
  await assert.rejects(
    runtime.executeCapability({
      root: f.root,
      entityId: "tsmc",
      capabilityId: result.context.engines[0].capabilities[0].capabilityId,
    }),
    /permission denied/,
  );
  await assert.rejects(
    f.service
      .runtime(f.root, f.assignment)
      .generate({ root: f.root, entityId: "tsmc" }),
    /permission denied/,
  );
  assert.equal(result.session.executions.length, 0);
});

test("automatic read failures do not repeat execution inside the model loop or fabricate results", async (t) => {
  const f = await fixture(t, true);
  const graph = structuredClone(f.graph);
  graph.nodes.find((node) => node.id === "engine-0").config.permissionPolicy =
    "read-only-auto";
  await f.agents.saveConstruction({
    id: f.agent.id,
    action: "apply",
    expectedRevision: 1,
    config: graph,
  });
  let calls = 0;
  let turns = 0;
  t.mock.method(capabilities, "executeCapability", async () => {
    calls++;
    throw new Error("Provider timeout PRIVATE_PROVIDER_BODY");
  });
  modelReplies(f, (request) => {
    if (++turns === 3)
      return {
        action: "answer",
        answer: "The engine read failed. No price is available.",
      };
    const engine = suppliedContext(request).engines[0];
    return {
      action: "engine.request",
      nodeId: engine.nodeId,
      capabilityId: engine.capabilities[0].capabilityId,
    };
  });
  const result = await f.service.send({ ...f.scope, message: "Read a price." });
  assert.equal(calls, 1);
  assert.equal(result.session.executions[0].status, "failed");
  assert.equal(result.session.executions[0].priceQuote, undefined);
  assert.equal(result.session.error, null);
  assert.doesNotMatch(JSON.stringify(result), /PRIVATE_PROVIDER_BODY/);
});

test("explicit read-access migration preserves active/draft differences, backs up definitions and is idempotent", async (t) => {
  const f = await fixture(t);
  const graph = structuredClone(f.graph);
  graph.nodes = graph.nodes.filter((node) => node.kind !== "Knowledge");
  graph.edges = graph.edges.filter((edge) => edge.from !== "knowledge");
  await f.agents.saveConstruction({
    id: f.agent.id,
    action: "apply",
    expectedRevision: 1,
    config: graph,
  });
  const draft = {
    ...graph,
    instructions: "Unapplied draft instructions remain unapplied.",
  };
  await f.agents.saveConstruction({
    id: f.agent.id,
    action: "draft",
    expectedRevision: 2,
    config: draft,
  });
  const source = await fs.readFile(path.join(f.root, "tsmc.md"));
  const run = require("node:util").promisify(
    require("node:child_process").execFile,
  );
  const args = [
    path.resolve("scripts/enable-entity-agent-read-access.cjs"),
    path.dirname(f.agents.file),
    f.root,
  ];
  await run(process.execPath, args);
  const saved = await f.agents.get(f.agent.id);
  assert.equal(saved.construction.active.instructions, graph.instructions);
  assert.equal(saved.construction.draft.instructions, draft.instructions);
  assert.notEqual(
    saved.construction.activeRevision,
    saved.construction.draftRevision,
  );
  for (const config of [saved.construction.active, saved.construction.draft]) {
    assert.ok(
      config.nodes
        .filter((node) => node.kind === "Engine")
        .every((node) => node.config.permissionPolicy === "read-only-auto"),
    );
    const knowledge = config.nodes.find((node) => node.kind === "Knowledge");
    assert.ok(
      config.edges.some(
        (edge) => edge.from === knowledge.id && edge.to === "llm",
      ),
    );
  }
  const revision = saved.construction.revision;
  await run(process.execPath, args);
  assert.equal(
    (await f.agents.get(f.agent.id)).construction.revision,
    revision,
  );
  assert.equal(
    (await fs.readdir(path.dirname(f.agents.file))).filter((file) =>
      file.startsWith("agents.before-read-only-"),
    ).length,
    1,
  );
  assert.deepEqual(await fs.readFile(path.join(f.root, "tsmc.md")), source);
});

test("chat deletion cancels pending approvals and agent deletion hides assignments while retaining history files", async (t) => {
  const f = await fixture(t, true);
  await f.service.send({ ...f.scope, message: "Disposable chat to delete." });
  const state = await f.service.open(f.scope);
  const request = await f.service.propose({
    ...f.scope,
    nodeId: "engine-0",
    capabilityId: state.context.engines[0].capabilities[0].capabilityId,
  });
  const result = await f.service.clearChat(f.scope);
  assert.equal(result.session.messages.length, 0);
  assert.equal(
    result.session.requests.find((item) => item.id === request.id).status,
    "cancelled",
  );
  const bytes = await fs.readFile(path.join(f.root, "tsmc.md"));
  const historyFile = path.join(
    f.service.directory(f.root),
    "sessions",
    f.assignment.id + ".json",
  );
  const history = await fs.readFile(historyFile);
  await f.agents.archive({ id: f.agent.id });
  await f.agents.archive({ id: f.agent.id });
  assert.deepEqual(await f.agents.list(), []);
  assert.deepEqual(await f.service.list({ vaultPath: f.root }), []);
  await assert.rejects(f.agents.get(f.agent.id), /Unknown agent/);
  await assert.rejects(
    f.agents.saveConstruction({
      id: f.agent.id,
      action: "apply",
      expectedRevision: 1,
      config: f.graph,
    }),
    /Unknown agent/,
  );
  assert.deepEqual(await fs.readFile(historyFile), history);
  assert.deepEqual(await fs.readFile(path.join(f.root, "tsmc.md")), bytes);
  const restarted = new AgentStore(path.dirname(f.agents.file));
  assert.deepEqual(await restarted.list(), []);
});

test("a failed automatic identity refresh preserves the previous snapshot and stops before inference", async (t) => {
  const f = await fixture(t, true);
  const previous = await compiler.status(f.root, "tsmc");
  await fs.appendFile(path.join(f.root, "tsmc.md"), "\nUpdated source.\n");
  const source = await fs.readFile(path.join(f.root, "tsmc.md"));
  t.mock.method(compiler, "generate", async () => {
    throw new Error("PRIVATE_COMPILER_DETAIL");
  });
  const result = await f.service.send({
    ...f.scope,
    message: "Read current knowledge.",
  });
  assert.match(result.session.error, /could not refresh/);
  assert.equal(f.requests.length, 0);
  assert.equal(
    result.session.messages.filter((message) => message.role === "assistant")
      .length,
    0,
  );
  assert.equal(
    (await compiler.status(f.root, "tsmc")).manifest.identityVersion,
    previous.manifest.identityVersion,
  );
  assert.deepEqual(await fs.readFile(path.join(f.root, "tsmc.md")), source);
  assert.doesNotMatch(JSON.stringify(result), /PRIVATE_COMPILER_DETAIL/);
});
