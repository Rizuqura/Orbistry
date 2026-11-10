const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");
const { execFile } = require("node:child_process");
const { promisify } = require("node:util");
const { KnowledgeStore, hash } = require("./knowledge-store.cjs");
const { readResearchSource } = require("./research-knowledge.cjs");
const { skillsFor } = require("./skills.cjs");
async function fixture(t) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-knowledge-"));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const vault = path.join(root, "BankVault"),
    appData = path.join(root, "app-data");
  await fs.mkdir(vault);
  await fs.mkdir(appData);
  const content =
    "SYNTHETIC GOTO TEST FIXTURE - NOT ACTUAL FINANCIAL DATA.\nThe fictional margin measure moved from 10 units to 12 units.\nFictional cost-efficiency actions were described; causality was not established.\nA corrected fictional margin measure is 11 units.";
  await fs.writeFile(path.join(vault, "synthetic-goto.md"), content);
  const source = {
    sourceId: "synthetic-goto.md",
    relativePath: "synthetic-goto.md",
    contentHash: hash(content),
  };
  const run = {
    schemaVersion: 2,
    status: "succeeded",
    runId: "synthetic-run-1",
    conversationId: "synthetic-chat",
    diagnostics: { agent: { id: "wonnyy-agent" } },
    sourcesActuallyRead: [source],
    contextIdentity: { sources: [source] },
  };
  const observation = {
    kind: "evidence",
    claim: "The synthetic margin measure increased to 12 units.",
    entity: "PT GoTo Gojek Tokopedia Tbk (synthetic)",
    topic: "margin",
    period: "synthetic Q1",
    metricValue: "12 units",
    sourceId: source.sourceId,
    location: "line 2",
    quote: "The fictional margin measure moved from 10 units to 12 units.",
  };
  const store = new KnowledgeStore(appData, vault);
  const propose = (
    observations = [observation],
    objective = "Synthetic GOTO research",
  ) => store.propose(run, { objective, observations });
  const approve = (proposal, index = 0, extra = {}) =>
    store.approve(
      {
        iteration: proposal.iteration,
        recordId: proposal.records[index].id,
        reviewer: "Synthetic pilot operator",
        rationale:
          "Reviewed exact quote and meaning in the explicitly synthetic fixture.",
        ...extra,
      },
      (file) => readResearchSource(vault, file),
    );
  const query = {
    entity: observation.entity,
    topic: observation.topic,
    period: observation.period,
    maxTokens: 8000,
  };
  return {
    root,
    vault,
    appData,
    store,
    run,
    source,
    content,
    observation,
    propose,
    approve,
    query,
  };
}
test("synthetic GOTO multi-iteration pilot: explicit operator CLI approval, restart reuse, hypothesis separation and read-only vault", async (t) => {
  const f = await fixture(t);
  const before = await fs.readFile(path.join(f.vault, "synthetic-goto.md"));
  const loop1 = await f.propose();
  assert.equal(loop1.iteration, 0);
  assert.equal(loop1.records[0].verification, "unverified");
  assert.equal(
    (await f.store.retrieve(f.query, [f.source])).evidence.length,
    0,
  );
  await promisify(execFile)(
    process.execPath,
    [
      "scripts/knowledge-review.cjs",
      "--app-data",
      f.appData,
      "--vault",
      f.vault,
      "--action",
      "approve",
      "--iteration",
      "0",
      "--record",
      loop1.records[0].id,
      "--reviewer",
      "Synthetic pilot operator",
      "--rationale",
      "I independently checked the synthetic document and exact quotation.",
    ],
    { cwd: path.resolve(__dirname, "../..") },
  );
  const restarted = new KnowledgeStore(f.appData, f.vault);
  assert.equal(
    (await restarted.retrieve(f.query, [f.source])).evidence[0].record.id,
    loop1.records[0].id,
  );
  const loop2 = await f.propose([
    {
      ...f.observation,
      claim: "Synthetic cost-efficiency actions were described.",
      topic: "efficiency",
      metricValue: undefined,
      quote:
        "Fictional cost-efficiency actions were described; causality was not established.",
      location: "line 3",
    },
    {
      kind: "analytical",
      claim:
        "Synthetic efficiency actions may relate to the margin movement; causality is unestablished.",
      entity: f.query.entity,
      topic: "margin",
      period: f.query.period,
      supportingIds: [loop1.records[0].id],
      assumptions: ["Actions occurred during the same reporting period."],
      rationale:
        "The prior evidence supports a margin movement only, not its cause.",
      questions: [
        "Does a source explicitly attribute the movement to these actions?",
      ],
    },
  ]);
  await f.approve(loop2, 0);
  await f.approve(loop2, 1);
  const loop3 = await new KnowledgeStore(f.appData, f.vault).retrieve(f.query, [
    f.source,
  ]);
  assert.equal(loop3.evidence.length, 1);
  assert.equal(loop3.analytical.length, 1);
  assert.match(loop3.analytical[0].record.claim, /causality is unestablished/);
  assert.deepEqual(
    loop3.evidence[0].sources.map((s) => s.contentHash),
    [f.source.contentHash],
  );
  assert.deepEqual(await fs.readdir(f.vault), ["synthetic-goto.md"]);
  assert.deepEqual(
    await fs.readFile(path.join(f.vault, "synthetic-goto.md")),
    before,
  );
});
test("duplicates and explicit metric conflicts are retained; periods stay distinct", async (t) => {
  const f = await fixture(t);
  const first = await f.propose();
  const second = await f.propose([
    f.observation,
    {
      ...f.observation,
      claim: "Synthetic corrected value is 11 units.",
      metricValue: "11 units",
    },
    { ...f.observation, period: "synthetic Q2" },
  ]);
  assert.deepEqual(second.records[0].duplicateIds, [first.records[0].id]);
  assert.deepEqual(second.records[1].conflictingIds, [first.records[0].id]);
  assert.ok(second.records[2].relatedPeriodIds.includes(first.records[0].id));
  assert.equal(second.records[1].approval, "pending");
});
test("missing attribution stays candidate; out-of-manifest provenance and automatic promotion fields are rejected", async (t) => {
  const f = await fixture(t);
  const pending = await f.propose([
    {
      kind: "evidence",
      claim: "Unattributed synthetic claim",
      entity: "GOTO",
      topic: "margin",
      period: "Q1",
    },
  ]);
  await assert.rejects(f.approve(pending), /exact source location/);
  await assert.rejects(
    f.propose([{ ...f.observation, sourceId: "secret.md" }]),
    /outside this run/,
  );
  await assert.rejects(
    f.propose([
      { ...f.observation, lifecycle: "reusable", approval: "approved" },
    ]),
    { code: "MODEL_INVALID_REQUEST" },
  );
  await assert.rejects(
    f.store.propose(
      { ...f.run, status: "failed" },
      { objective: "x", observations: [f.observation] },
    ),
    /completed Orbistry/,
  );
  await assert.rejects(
    f.store.propose(
      { ...f.run, diagnostics: { agent: { id: "chronoz" } } },
      { objective: "x", observations: [f.observation] },
    ),
    /completed Orbistry/,
  );
});
test("approval checks exact source version and quote without semantic correctness claims", async (t) => {
  const f = await fixture(t);
  const proposal = await f.propose();
  await fs.appendFile(path.join(f.vault, "synthetic-goto.md"), "\nChanged.");
  await assert.rejects(f.approve(proposal), /Source hash or quotation changed/);
  await fs.writeFile(path.join(f.vault, "synthetic-goto.md"), f.content);
  await f.approve(proposal);
  await assert.rejects(f.approve(proposal), /already has committed history/);
  assert.match(
    (await f.store.retrieve(f.query, [f.source])).limitation,
    /do not guarantee factual/,
  );
});
test("supersession preserves original Markdown and invalidates dependent hypotheses", async (t) => {
  const f = await fixture(t);
  const first = await f.propose();
  await f.approve(first);
  const h = await f.propose([
    {
      kind: "analytical",
      claim: "Unverified causal interpretation",
      entity: f.query.entity,
      topic: f.query.topic,
      period: f.query.period,
      supportingIds: [first.records[0].id],
      rationale: "Only association, not causality.",
      questions: ["What establishes causality?"],
    },
  ]);
  await f.approve(h);
  const corrected = await f.propose([
    {
      ...f.observation,
      claim: "Synthetic corrected margin is 11 units.",
      metricValue: "11 units",
      quote: "A corrected fictional margin measure is 11 units.",
      location: "line 4",
    },
  ]);
  await f.approve(corrected, 0, { supersedes: first.records[0].id });
  const result = await f.store.retrieve(f.query, [f.source]);
  assert.deepEqual(
    result.evidence.map((v) => v.record.id),
    [corrected.records[0].id],
  );
  assert.equal(result.analytical.length, 0);
  assert.equal((await f.store.versions()).length, 3);
  assert.equal(
    (await f.store.latest()).find((v) => v.record.id === first.records[0].id)
      .lifecycle,
    "superseded",
  );
});
test("retrieval requires entity/topic/period, bound source hashes and conservative context budget", async (t) => {
  const f = await fixture(t);
  await f.approve(await f.propose());
  for (const query of [
    { ...f.query, entity: "other" },
    { ...f.query, topic: "other" },
    { ...f.query, period: "other" },
    { ...f.query, maxTokens: 64 },
  ])
    assert.equal(
      (await f.store.retrieve(query, [f.source])).evidence.length,
      0,
    );
  assert.equal((await f.store.retrieve(f.query, [])).evidence.length, 0);
  assert.equal(
    (
      await f.store.retrieve(f.query, [
        { ...f.source, contentHash: hash("new") },
      ])
    ).evidence.length,
    0,
  );
  const fresh = new KnowledgeStore(
    f.appData,
    path.join(f.root, "another-vault"),
  );
  await fs.mkdir(fresh.vault);
  assert.equal((await fresh.retrieve(f.query, [f.source])).evidence.length, 0);
});
test("numbering survives concurrent store instances, failure and restart without overwriting", async (t) => {
  const f = await fixture(t);
  const stores = [
    f.store,
    new KnowledgeStore(f.appData, f.vault),
    new KnowledgeStore(f.appData, f.vault),
  ];
  const proposals = await Promise.all(
    stores.map((s) =>
      s.propose(f.run, {
        objective: "synthetic",
        observations: [f.observation],
      }),
    ),
  );
  assert.deepEqual(proposals.map((p) => p.iteration).sort(), [0, 1, 2]);
  assert.deepEqual(
    (await fs.readdir(path.join(f.store.directory, "iteration"))).sort(),
    ["iteration0000.md", "iteration0001.md", "iteration0002.md"],
  );
  await fs.writeFile(
    path.join(f.store.directory, ".writer.lock"),
    "stale test lock",
  );
  await assert.rejects(f.propose(), /writer is locked/);
  await fs.unlink(path.join(f.store.directory, ".writer.lock"));
  assert.equal((await f.propose()).iteration, 3);
});
test("outbox filesystem failures recover with no published partial iteration or consumed number", async (t) => {
  const f = await fixture(t);
  await f.store.checkBoundary();
  await fs.writeFile(
    path.join(f.store.directory, "iteration"),
    "block directory",
  );
  await assert.rejects(f.propose());
  await fs.unlink(path.join(f.store.directory, "iteration"));
  assert.equal((await f.propose()).iteration, 0);
});
test("vault boundary and symbolic output paths fail closed at filesystem boundary", async (t) => {
  const f = await fixture(t);
  assert.throws(
    () => new KnowledgeStore(path.join(f.vault, "outbox"), f.vault),
    /outside the research vault/,
  );
  assert.throws(
    () =>
      new KnowledgeStore(f.appData, path.join(f.appData, "research-outbox")),
    /outside the Bank Vault/,
  );
  await f.store.checkBoundary();
  try {
    await fs.symlink(
      f.vault,
      path.join(f.store.directory, "iteration"),
      process.platform === "win32" ? "junction" : "dir",
    );
  } catch (error) {
    if (error.code === "EPERM") {
      t.skip("OS does not grant junction/symlink creation");
      return;
    }
    throw error;
  }
  await assert.rejects(f.propose(), /symbolic|Symbolic/);
  assert.deepEqual(await fs.readdir(f.vault), ["synthetic-goto.md"]);
});
test("missing vault rejects capture/retrieval without creating a replacement vault", async (t) => {
  const f = await fixture(t);
  const missing = path.join(f.root, "missing");
  const store = new KnowledgeStore(f.appData, missing);
  await assert.rejects(store.retrieve(f.query, [f.source]), { code: "ENOENT" });
  await assert.rejects(
    store.propose(f.run, {
      objective: "synthetic",
      observations: [f.observation],
    }),
    { code: "ENOENT" },
  );
  await assert.rejects(fs.stat(missing), { code: "ENOENT" });
});
test("skill registry is Orbistry-only and does not claim an installed loop", () => {
  assert.deepEqual(skillsFor("wonnyy-agent"), ["knowledge-consolidation"]);
  assert.deepEqual(skillsFor("chronoz"), []);
  assert.equal(
    require("./skills.cjs").SKILLS["knowledge-consolidation"].loopIntegration,
    "unavailable",
  );
});
test("applied Knowledge node limits approved preview retrieval without expanding bound sources", async (t) => {
  const f = await fixture(t);
  await f.approve(await f.propose());
  const { ResearchKnowledge } = require("./research-knowledge.cjs");
  const node = { kind: "Knowledge", config: { maxTokens: 64 } };
  const service = {
    store: async () => ({
      root: await fs.realpath(f.vault),
      store: {
        read: async () => ({ id: "synthetic-chat", agentId: "wonnyy-agent" }),
      },
    }),
    agents: {
      get: async () => ({ construction: { active: { nodes: [node] } } }),
    },
    boundScope: async () => ({
      sources: [{ ...f.source, id: f.source.sourceId }],
    }),
  };
  const request = { conversationId: "synthetic-chat", query: f.query };
  const research = new ResearchKnowledge(f.appData);
  assert.equal(
    (await research.retrieve(f.vault, request, service)).evidence.length,
    0,
  );
  node.config.maxTokens = 8000;
  assert.equal(
    (await research.retrieve(f.vault, request, service)).evidence.length,
    1,
  );
});
test("unchanged claim can be explicitly reverified against a new source version without losing old approval", async (t) => {
  const f = await fixture(t);
  const first = await f.propose();
  await f.approve(first);
  const content = f.content + "\nA new synthetic reporting note.";
  await fs.writeFile(path.join(f.vault, "synthetic-goto.md"), content);
  const source = { ...f.source, contentHash: hash(content) };
  const second = await f.store.propose(
    {
      ...f.run,
      runId: "synthetic-run-2",
      sourcesActuallyRead: [source],
      contextIdentity: { sources: [source] },
    },
    { objective: "Reverify synthetic evidence", observations: [f.observation] },
  );
  const approved = await f.approve(second);
  assert.equal(approved.version, 2);
  assert.equal((await f.store.versions()).length, 2);
  assert.equal(
    (await f.store.retrieve(f.query, [f.source])).evidence.length,
    0,
  );
  assert.equal(
    (await f.store.retrieve(f.query, [source])).evidence[0].version,
    2,
  );
});
