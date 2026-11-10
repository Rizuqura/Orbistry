const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { randomUUID } = require("node:crypto");
const stations = require("../station-service.cjs");
const { ChatService } = require("./chat-service.cjs");
const { ModelRegistry, DEFAULTS } = require("./model-registry.cjs");
const { readModelRun } = require("./run-store.cjs");
const { budgetHistory } = require("./history-budget.cjs");
const { answerPrefix, validateAnswer } = require("./response-validation.cjs");

const scopeInput = { activeStationIds: [], matchMode: "any" };
test("runtime kernel compacts the known policy while keeping bindings, ordinary guidance and run provenance", async (t) => {
  const f = await studioFixture(t);
  const { canonical, canonicalHash } = require("./runtime-context.cjs");
  await fs.writeFile(path.join(f.root, "policy.md"), canonical);
  const box = await f.service.editBox(f.root, {
    action: "create",
    name: "Policy plus research",
    paths: ["policy.md", "a.md"],
  });
  const chat = await f.service.create(f.root, {
    contextBoxId: box.id,
    creationId: randomUUID(),
  });
  const before = structuredClone(chat.contextIdentity);
  const result = await f.service.run(
    f.root,
    1,
    f.input(chat, { userMessage: "What is ALPHA's allocation?" }),
  );
  const request = f.calls.at(-1);
  assert.doesNotMatch(
    JSON.stringify(request.messages),
    /## 30\. FINAL OPERATING PRINCIPLES/,
  );
  assert.deepEqual(result.run.diagnostics.evidenceSourceIds, ["a.md"]);
  const baseline = result.run.diagnostics.frontOffice;
  assert.equal(baseline.mode, "existing-agent-baseline");
  assert.equal(
    baseline.requestId,
    result.conversation.attempts.at(-1).requestId,
  );
  assert.equal(baseline.runId, result.run.runId);
  assert.equal(baseline.providerCallCount, 1);
  assert.equal(baseline.calls[0].phase, "generation");
  assert.equal(baseline.status, "succeeded");
  assert.equal(baseline.estimatedCostUsd, null);
  assert.equal(JSON.stringify(baseline).includes("ALPHA"), false);
  assert.deepEqual(
    (await readModelRun(f.root, result.run.runId)).diagnostics.frontOffice,
    baseline,
  );
  assert.equal(
    result.run.diagnostics.runtimePolicy.canonicalHash,
    canonicalHash,
  );
  assert.equal(
    result.run.diagnostics.compactedPolicySources[0].relativePath,
    "policy.md",
  );
  assert.deepEqual(result.conversation.contextIdentity, before);
  assert.deepEqual(
    result.run.sourcesActuallyRead.map((s) => s.relativePath),
    ["a.md", "policy.md"],
  );
  assert.deepEqual(
    (await f.service.inspectBox(f.root, box.id)).items.map(
      (s) => s.relativePath,
    ),
    ["a.md", "policy.md"],
  );
  await f.registry.save({ contextWindow: 32768 });
  const document = await f.service.run(
    f.root,
    1,
    f.input(result.conversation, {
      userMessage: "Summarize section 17 of the policy.",
    }),
  );
  assert.match(
    JSON.stringify(f.calls.at(-1).messages),
    /## 30\. FINAL OPERATING PRINCIPLES/,
  );
  assert.deepEqual(document.run.diagnostics.compactedPolicySources, []);
});

test("a model cannot cite a compacted policy as current documentary evidence", async (t) => {
  const f = await fixture(t);
  const { canonical } = require("./runtime-context.cjs");
  await fs.writeFile(path.join(f.root, "policy.md"), canonical);
  const box = await f.service.editBox(f.root, {
    action: "create",
    name: "Research",
    paths: ["policy.md", "a.md"],
  });
  const chat = await f.service.create(f.root, {
    contextBoxId: box.id,
    creationId: randomUUID(),
  });
  f.provider.complete = async () => ({
    model: "qwen3:4b",
    provider: "ollama",
    content: JSON.stringify({
      answer: "ALPHA allocation is 25%.",
      citations: ["policy.md"],
    }),
    finishReason: "stop",
    usage: null,
  });
  await assert.rejects(
    f.service.run(
      f.root,
      1,
      f.input(chat, { userMessage: "What is ALPHA's allocation?" }),
    ),
    { code: "MODEL_INVALID_RESPONSE" },
  );
  assert.equal(
    (await f.service.list(f.root))[0].messages.filter(
      (m) => m.role === "assistant",
    ).length,
    0,
  );
});

test("direct file guidance uses the entire reviewed document without creating a hidden box or session", async (t) => {
  const f = await studioFixture(t),
    agent = await f.service.agents.get(),
    config = structuredClone(agent.construction.draft);
  const content =
    "FULL_METHOD_START\n" +
    "Method guidance. ".repeat(1300) +
    "\nFULL_METHOD_END";
  await f.registry.save({ contextWindow: 32768 });
  await fs.writeFile(path.join(f.root, "method.md"), content);
  const beforeBoxes = (await f.service.listBoxes(f.root)).length,
    beforeChats = (await f.service.list(f.root)).length;
  const preview = await f.service.previewConstructionFile(f.root, {
    relativePath: "method.md",
  });
  assert.equal(preview.sources[0].content, content);
  config.nodes.find((node) => node.kind === "Skill").config.contextFile =
    preview.binding;
  await f.service.saveConstruction(f.root, {
    id: agent.id,
    action: "apply",
    expectedRevision: 0,
    config,
  });
  const result = await f.service.run(f.root, 1, f.input());
  const envelope = f.calls
    .at(-1)
    .messages.map((m) => {
      try {
        return JSON.parse(m.content);
      } catch {
        return null;
      }
    })
    .find((v) => v?.kind === "agent-construction-reference");
  assert.equal(envelope.sources[0].content, content);
  assert.deepEqual(
    result.run.sourcesActuallyRead.map((source) => source.relativePath),
    ["a.md"],
  );
  assert.equal(
    result.run.diagnostics.agent.configurationReferences[0].relativePath,
    "method.md",
  );
  assert.equal((await f.service.listBoxes(f.root)).length, beforeBoxes);
  assert.equal((await f.service.list(f.root)).length, beforeChats);
  assert.ok(
    !(await fs.readFile(f.service.agents.file, "utf8")).includes(
      "FULL_METHOD_END",
    ),
  );
});
test("Context and Knowledge file bindings create explicit schema-4 chats with immutable per-turn provenance", async (t) => {
  const f = await studioFixture(t),
    agent = await f.service.agents.get(),
    config = structuredClone(agent.construction.draft);
  const a = (
      await f.service.previewConstructionFile(f.root, { relativePath: "a.md" })
    ).binding,
    b = (
      await f.service.previewConstructionFile(f.root, { relativePath: "b.md" })
    ).binding;
  config.nodes.find((node) => node.kind === "Context").config.contextFile = a;
  const knowledge = nodeWithBox(config, "Knowledge", null);
  delete knowledge.config.contextBox;
  knowledge.config.contextFile = b;
  await f.service.saveConstruction(f.root, {
    id: agent.id,
    action: "apply",
    expectedRevision: 0,
    config,
  });
  const boxes = (await f.service.listBoxes(f.root)).length,
    creationId = randomUUID();
  const chat = await f.service.create(f.root, {
    agentId: agent.id,
    contextFile: a,
    creationId,
    includeAgentKnowledge: true,
  });
  assert.equal(chat.schemaVersion, 4);
  assert.equal(chat.contextBoxId, undefined);
  assert.deepEqual(
    chat.contextIdentity.sources.map((source) => source.relativePath),
    ["a.md", "b.md"],
  );
  assert.equal(
    (
      await f.service.create(f.root, {
        agentId: agent.id,
        contextFile: a,
        creationId,
        includeAgentKnowledge: true,
      })
    ).id,
    chat.id,
  );
  const first = await f.service.run(f.root, 1, f.input(chat));
  assert.equal(
    first.conversation.messages.at(-1).contextFile.relativePath,
    "a.md",
  );
  assert.equal(first.conversation.messages.at(-1).knowledgeBox.name, "b.md");
  await f.service.run(f.root, 1, f.input(first.conversation));
  assert.equal((await f.service.resume(f.root, chat.id)).messages.length, 4);
  assert.equal((await f.service.listBoxes(f.root)).length, boxes);
  await fs.writeFile(path.join(f.root, "a.md"), "CHANGED");
  await assert.rejects(f.service.run(f.root, 1, f.input(first.conversation)), {
    code: "MODEL_CONTEXT_INVALID",
  });
  assert.equal(
    (await readModelRun(f.root, first.run.runId)).contextIdentity.id,
    chat.contextIdentity.id,
  );
});
test("reviewed files reject cross-vault, ambiguous node sources and changed guidance", async (t) => {
  const f = await studioFixture(t),
    agent = await f.service.agents.get(),
    config = structuredClone(agent.construction.draft);
  const binding = (
    await f.service.previewConstructionFile(f.root, { relativePath: "a.md" })
  ).binding;
  const skill = config.nodes.find((node) => node.kind === "Skill");
  skill.config.contextFile = { ...binding, vaultPath: f.root + "-other" };
  await assert.rejects(
    f.service.saveConstruction(f.root, {
      id: agent.id,
      action: "apply",
      expectedRevision: 0,
      config,
    }),
    /another vault|different vault/,
  );
  skill.config.contextFile = binding;
  await f.service.saveConstruction(f.root, {
    id: agent.id,
    action: "apply",
    expectedRevision: 0,
    config,
  });
  await fs.writeFile(path.join(f.root, "a.md"), "Edited method");
  await assert.rejects(f.service.run(f.root, 1, f.input()), {
    code: "MODEL_CONTEXT_INVALID",
  });
  assert.equal(f.calls.length, 0);
  await assert.rejects(
    f.service.previewConstructionFile(f.root, {
      relativePath: "../outside.md",
    }),
  );
});
test("created agents use the shared bound-chat engine with independent histories and protected identity", async (t) => {
  const f = await studioFixture(t);
  await f.service.agents.save({
    id: "wonnyy-agent",
    customInstructions: "ORBISTRY_PRIVATE: Use numbered findings.",
  });
  const count = (await f.service.list(f.root)).length;
  const agent = await f.service.agents.create({
    name: "Research assistant",
    creationId: randomUUID(),
  });
  assert.equal((await f.service.list(f.root)).length, count);
  const chat = await f.service.create(f.root, {
    agentId: agent.id,
    creationId: randomUUID(),
    contextBoxId: f.conversation.contextBoxId,
  });
  const result = await f.service.run(f.root, 1, f.input(chat));
  assert.equal(result.conversation.agentId, agent.id);
  assert.match(
    f.calls.at(-1).messages[0].content,
    /You are Research assistant/,
  );
  assert.doesNotMatch(f.calls.at(-1).messages[0].content, /ORBISTRY_PRIVATE/);
  assert.equal(result.run.diagnostics.agent.id, agent.id);
  assert.equal(
    (await f.service.list(f.root)).find((item) => item.id === f.conversation.id)
      .messages.length,
    0,
  );
  await assert.rejects(
    f.service.create(f.root, {
      agentId: "not-created",
      creationId: randomUUID(),
      contextBoxId: f.conversation.contextBoxId,
    }),
    { code: "MODEL_INVALID_REQUEST" },
  );
  assert.equal((await f.service.list(f.root)).length, count + 1);
});
test("contextual skill playbooks work for CHronoZ without enabling executable capabilities", async (t) => {
  const f = await studioFixture(t),
    agent = await f.service.agents.get("chronoz"),
    config = structuredClone(agent.construction.draft);
  const binding = await constructionBox(
    f,
    "Chrono method",
    "method.md",
    "CHRONO_PLAYBOOK: State assumptions before comparing periods.",
  );
  nodeWithBox(config, "Skill", binding);
  await f.service.saveConstruction(f.root, {
    id: agent.id,
    action: "apply",
    expectedRevision: 0,
    config,
  });
  const chat = await f.service.create(f.root, {
    agentId: agent.id,
    contextBoxId: f.conversation.contextBoxId,
    creationId: randomUUID(),
  });
  const result = await f.service.run(f.root, 1, f.input(chat));
  assert.match(JSON.stringify(f.calls.at(-1).messages), /CHRONO_PLAYBOOK/);
  assert.deepEqual((await f.service.agents.get(agent.id)).skills, []);
  assert.equal(result.run.sourcesActuallyRead.length, 1);
});
test("configuration-source IDs cannot be cited as research evidence", async (t) => {
  const f = await studioFixture(t),
    agent = await f.service.agents.get(),
    config = structuredClone(agent.construction.draft);
  nodeWithBox(
    config,
    "Personality",
    await constructionBox(f, "Tone", "persona.md", "Use concise prose."),
  );
  await f.service.saveConstruction(f.root, {
    id: agent.id,
    action: "apply",
    expectedRevision: 0,
    config,
  });
  f.provider.complete = async (request) => {
    f.calls.push(request);
    return {
      model: request.model,
      provider: "ollama",
      finishReason: "stop",
      content: JSON.stringify({
        answer: "ALPHA is present.",
        citations: ["persona.md"],
      }),
      usage: null,
    };
  };
  await assert.rejects(f.service.run(f.root, 1, f.input()), {
    code: "MODEL_INVALID_RESPONSE",
  });
  assert.equal(
    (await f.service.list(f.root))[0].messages.filter(
      (m) => m.role === "assistant",
    ).length,
    0,
  );
});
test("Knowledge source edits or membership changes cannot silently expand existing chats", async (t) => {
  const f = await studioFixture(t),
    agent = await f.service.agents.get(),
    config = structuredClone(agent.construction.draft);
  const knowledge = await constructionBox(f, "Pinned knowledge", "b.md");
  nodeWithBox(config, "Knowledge", knowledge);
  await f.service.saveConstruction(f.root, {
    id: agent.id,
    action: "apply",
    expectedRevision: 0,
    config,
  });
  const chat = await f.service.create(f.root, {
    agentId: agent.id,
    contextBoxId: f.conversation.contextBoxId,
    creationId: randomUUID(),
    includeAgentKnowledge: true,
  });
  const first = await f.service.run(f.root, 1, f.input(chat)),
    before = f.calls.length;
  await fs.writeFile(path.join(f.root, "b.md"), "UPDATED BETA.");
  await assert.rejects(f.service.run(f.root, 1, f.input(chat)), {
    code: "MODEL_CONTEXT_INVALID",
  });
  assert.equal(f.calls.length, before);
  assert.equal(
    (await f.service.list(f.root)).find((c) => c.id === chat.id).messages
      .length,
    2,
  );
  assert.equal(
    (await readModelRun(f.root, first.run.runId)).contextIdentity.id,
    chat.contextIdentity.id,
  );
});
async function studioFixture(t) {
  const f = await fixture(t);
  f.service.agents =
    new (require("../../scripts/fixtures/legacy-agents.cjs").AgentStore)(
      path.join(f.root, "agent-profiles"),
    );
  return f;
}
async function constructionBox(f, name, file, content) {
  if (content !== undefined)
    await fs.writeFile(path.join(f.root, file), content);
  const box = await f.service.editBox(f.root, {
    action: "create",
    name,
    paths: [file],
  });
  return (await f.service.previewConstructionBox(f.root, { boxId: box.id }))
    .binding;
}
function nodeWithBox(config, kind, binding) {
  let node = config.nodes.find((node) => node.kind === kind);
  if (!node) {
    node = {
      id: kind.toLowerCase(),
      kind,
      x: 64,
      y: 360,
      config: kind === "Knowledge" ? { mode: "preview-only" } : {},
    };
    config.nodes.push(node);
    config.edges.push({ from: node.id, to: "llm" });
  }
  node.config.contextBox = binding;
  return node;
}
test("reviewed boxes build personality/output/skill guidance without becoming documentary evidence or snapshots", async (t) => {
  const f = await studioFixture(t),
    agent = await f.service.agents.get(),
    config = structuredClone(agent.construction.draft);
  for (const [kind, file, text] of [
    [
      "Personality",
      "persona.md",
      "STYLE_BOX_SENTINEL: Be concise and cautious.",
    ],
    [
      "Output",
      "output.md",
      "OUTPUT_BOX_SENTINEL: Put the answer before an evidence list.",
    ],
    [
      "Skill",
      "skill.md",
      "SKILL_BOX_SENTINEL: Compare supporting and contradicting evidence; never assume causality.",
    ],
  ])
    nodeWithBox(
      config,
      kind,
      await constructionBox(f, kind + " blueprint", file, text),
    );
  const count = (await f.service.list(f.root)).length;
  await f.service.saveConstruction(f.root, {
    id: agent.id,
    action: "draft",
    expectedRevision: 0,
    config,
  });
  await f.service.run(f.root, 1, f.input());
  assert.doesNotMatch(
    JSON.stringify(f.calls.at(-1).messages),
    /STYLE_BOX_SENTINEL/,
  );
  await f.service.saveConstruction(f.root, {
    id: agent.id,
    action: "apply",
    expectedRevision: 1,
    config,
  });
  const result = await f.service.run(f.root, 1, f.input());
  const prompt = f.calls.at(-1).messages;
  const references = prompt
    .filter((m) => m.role === "user")
    .map((m) => {
      try {
        return JSON.parse(m.content);
      } catch {
        return null;
      }
    })
    .filter((m) => m?.kind === "agent-construction-reference");
  assert.deepEqual(references.map((r) => r.role).sort(), [
    "Output",
    "Personality",
    "Skill",
  ]);
  assert.match(JSON.stringify(references), /STYLE_BOX_SENTINEL/);
  assert.match(JSON.stringify(references), /SKILL_BOX_SENTINEL/);
  assert.deepEqual(
    result.run.sourcesActuallyRead.map((s) => s.relativePath),
    ["a.md"],
  );
  assert.equal(result.run.diagnostics.agent.configurationReferences.length, 3);
  assert.ok(
    !JSON.stringify(
      result.run.diagnostics.agent.configurationReferences,
    ).includes("STYLE_BOX_SENTINEL"),
  );
  assert.ok(
    !(await fs.readFile(f.service.agents.file, "utf8")).includes(
      "STYLE_BOX_SENTINEL",
    ),
  );
  assert.equal((await f.service.list(f.root)).length, count);
  assert.equal(
    (await f.service.agents.get("chronoz")).construction.active,
    null,
  );
});
test("Knowledge boxes require explicit chat creation, deduplicate sources and retain historical combined provenance", async (t) => {
  const f = await studioFixture(t),
    agent = await f.service.agents.get(),
    config = structuredClone(agent.construction.draft);
  const knowledge = await constructionBox(f, "Saved research", "b.md");
  nodeWithBox(config, "Knowledge", knowledge);
  await f.service.saveConstruction(f.root, {
    id: agent.id,
    action: "apply",
    expectedRevision: 0,
    config,
  });
  assert.equal(
    (await f.service.checkConversation(f.root, f.conversation.id)).sources
      .length,
    1,
  );
  const plain = await f.service.create(f.root, {
    agentId: agent.id,
    contextBoxId: f.conversation.contextBoxId,
    creationId: randomUUID(),
  });
  assert.equal(plain.contextIdentity.sources.length, 1);
  const creationId = randomUUID(),
    combined = await f.service.create(f.root, {
      agentId: agent.id,
      contextBoxId: f.conversation.contextBoxId,
      creationId,
      includeAgentKnowledge: true,
    });
  assert.deepEqual(
    combined.contextIdentity.sources.map((s) => s.relativePath).sort(),
    ["a.md", "b.md"],
  );
  assert.equal(
    (
      await f.service.create(f.root, {
        agentId: agent.id,
        contextBoxId: f.conversation.contextBoxId,
        creationId,
        includeAgentKnowledge: true,
      })
    ).id,
    combined.id,
  );
  await assert.rejects(
    f.service.create(f.root, {
      agentId: agent.id,
      contextBoxId: f.conversation.contextBoxId,
      creationId,
      includeAgentKnowledge: false,
    }),
    { code: "MODEL_INVALID_REQUEST" },
  );
  const result = await f.service.run(f.root, 1, f.input(combined));
  assert.equal(result.run.sourcesActuallyRead.length, 2);
  assert.equal(result.run.diagnostics.agentKnowledge.boxId, knowledge.boxId);
  const switched = await f.service.switchBox(f.root, {
    conversationId: combined.id,
    contextBoxId: f.conversation.contextBoxId,
  });
  assert.equal(switched.agentKnowledge, undefined);
  assert.equal(switched.contextIdentity.sources.length, 1);
  assert.equal(switched.messages.at(-1).sources.length, 2);
});
test("changed guidance fails closed until explicit re-review; renaming preserves source identity", async (t) => {
  const f = await studioFixture(t),
    agent = await f.service.agents.get(),
    config = structuredClone(agent.construction.draft);
  const binding = await constructionBox(
    f,
    "Persona notes",
    "persona.md",
    "GUIDANCE_V1: Be concise.",
  );
  const node = nodeWithBox(config, "Personality", binding);
  await f.service.saveConstruction(f.root, {
    id: agent.id,
    action: "apply",
    expectedRevision: 0,
    config,
  });
  const first = await f.service.run(f.root, 1, f.input());
  const before = f.calls.length;
  await fs.writeFile(
    path.join(f.root, "persona.md"),
    "GUIDANCE_V2: Use plain language.",
  );
  await assert.rejects(f.service.run(f.root, 1, f.input()));
  assert.equal(f.calls.length, before);
  assert.equal((await f.service.list(f.root))[0].messages.length, 2);
  node.config.contextBox = (
    await f.service.previewConstructionBox(f.root, { boxId: binding.boxId })
  ).binding;
  await f.service.saveConstruction(f.root, {
    id: agent.id,
    action: "apply",
    expectedRevision: 1,
    config,
  });
  await f.service.renameBox(f.root, {
    id: binding.boxId,
    name: "Renamed persona notes",
  });
  const next = await f.service.run(f.root, 1, f.input());
  assert.match(JSON.stringify(f.calls.at(-1).messages), /GUIDANCE_V2/);
  assert.equal(
    next.run.diagnostics.agent.configurationReferences[0].boxName,
    "Renamed persona notes",
  );
  assert.equal(
    (await readModelRun(f.root, first.run.runId)).diagnostics.agent
      .configurationReferences[0].contextIdentity.id,
    binding.contextIdentity.id,
  );
});
test("guidance references and Knowledge membership cannot expand or cross vaults silently", async (t) => {
  const f = await studioFixture(t),
    agent = await f.service.agents.get(),
    config = structuredClone(agent.construction.draft);
  const binding = await constructionBox(
    f,
    "Persona notes",
    "persona.md",
    "LOCAL_GUIDANCE: use concise prose.",
  );
  nodeWithBox(config, "Personality", binding);
  await f.service.saveConstruction(f.root, {
    id: agent.id,
    action: "apply",
    expectedRevision: 0,
    config,
  });
  const other = path.join(f.root, "other-vault");
  await fs.mkdir(other);
  await fs.writeFile(path.join(other, "a.md"), "OTHER_VAULT content.");
  const box = await f.service.editBox(other, {
    action: "create",
    name: "Other evidence",
    paths: ["a.md"],
  });
  const chat = await f.service.create(other, {
    agentId: agent.id,
    contextBoxId: box.id,
    creationId: randomUUID(),
  });
  await assert.rejects(f.service.run(other, 1, f.input(chat)));
  assert.equal(f.calls.length, 0);
  await f.service.editBox(f.root, {
    action: "add",
    id: binding.boxId,
    paths: ["b.md"],
  });
  await assert.rejects(
    f.service.saveConstruction(f.root, {
      id: agent.id,
      action: "apply",
      expectedRevision: 1,
      config,
    }),
    /changed membership/,
  );
});
test("configuration references are fully budgeted and oversized guidance is never silently truncated", async (t) => {
  const f = await studioFixture(t),
    agent = await f.service.agents.get(),
    config = structuredClone(agent.construction.draft);
  const binding = await constructionBox(
    f,
    "Large persona",
    "persona.md",
    "Context note. ".repeat(4000),
  );
  nodeWithBox(config, "Personality", binding);
  nodeWithBox(config, "Output", binding);
  await assert.rejects(
    f.service.saveConstruction(f.root, {
      id: agent.id,
      action: "apply",
      expectedRevision: 0,
      config,
    }),
    /80,000/,
  );
  await fs.writeFile(
    path.join(f.root, "persona.md"),
    "Style note. ".repeat(800),
  );
  config.nodes.find((n) => n.kind === "Personality").config.contextBox = (
    await f.service.previewConstructionBox(f.root, { boxId: binding.boxId })
  ).binding;
  delete config.nodes.find((n) => n.kind === "Output").config.contextBox;
  await f.service.saveConstruction(f.root, {
    id: agent.id,
    action: "apply",
    expectedRevision: 0,
    config,
  });
  await f.registry.save({ contextWindow: 4096, outputLimit: 512 });
  await assert.rejects(f.service.run(f.root, 1, f.input()), {
    code: "MODEL_CONTEXT_TOO_LARGE",
  });
  assert.equal(f.calls.length, 0);
});
test("applied construction changes actual prompt identity/preferences and model; drafts and old run provenance stay isolated", async (t) => {
  const f = await fixture(t);
  const { AgentStore } = require("../../scripts/fixtures/legacy-agents.cjs");
  f.service.agents = new AgentStore(path.join(f.root, "studio-profiles"));
  const agent = await f.service.agents.get();
  const config = structuredClone(agent.construction.draft);
  config.displayName = "Victoria Research";
  config.personality = "STUDIO_PERSONALITY: Favor concise prose.";
  config.nodes.find((n) => n.kind === "LLM").config = {
    providerId: "ollama",
    modelId: "qwen3:1.7b",
  };
  config.nodes.find((n) => n.kind === "Output").config.instructions =
    "STUDIO_OUTPUT: End with open questions.";
  await f.service.agents.saveConstruction({
    id: agent.id,
    action: "draft",
    expectedRevision: 0,
    config,
  });
  const first = await f.service.run(f.root, 1, f.input());
  assert.doesNotMatch(f.calls.at(-1).messages[0].content, /STUDIO_PERSONALITY/);
  assert.equal(first.run.model, "qwen3:4b");
  await f.service.agents.saveConstruction({
    id: agent.id,
    action: "apply",
    expectedRevision: 1,
    config,
  });
  const second = await f.service.run(f.root, 1, f.input());
  assert.equal(second.run.model, "qwen3:1.7b");
  assert.match(f.calls.at(-1).messages[0].content, /You are Victoria Research/);
  assert.match(f.calls.at(-1).messages[0].content, /STUDIO_PERSONALITY/);
  assert.match(f.calls.at(-1).messages[0].content, /STUDIO_OUTPUT/);
  assert.match(f.calls.at(-1).messages[0].content, /STRICT_CONTEXT_ANALYSIS/);
  assert.equal(second.run.diagnostics.agent.constructionRevision, 2);
  assert.equal(
    (await readModelRun(f.root, first.run.runId)).diagnostics.agent
      .constructionRevision,
    0,
  );
  assert.equal((await f.registry.read()).modelId, "qwen3:4b");
});
test("agent-bound creation and inference isolate CHronoZ identity, settings, history and duplicate IDs", async (t) => {
  const f = await fixture(t);
  const { AgentStore } = require("../../scripts/fixtures/legacy-agents.cjs");
  f.service.agents = new AgentStore(path.join(f.root, "profiles"));
  await f.service.agents.save({
    id: "wonnyy-agent",
    customInstructions: "ORBISTRY_ONLY_PREF: Use numbered findings.",
  });
  const creationId = randomUUID();
  const chrono = await f.service.create(f.root, {
    contextBoxId: f.conversation.contextBoxId,
    creationId,
    agentId: "chronoz",
  });
  assert.equal(chrono.agentId, "chronoz");
  assert.equal(
    (
      await f.service.create(f.root, {
        contextBoxId: chrono.contextBoxId,
        creationId,
        agentId: "chronoz",
      })
    ).id,
    chrono.id,
  );
  await assert.rejects(
    f.service.create(f.root, {
      contextBoxId: chrono.contextBoxId,
      creationId,
      agentId: "wonnyy-agent",
    }),
    { code: "MODEL_INVALID_REQUEST" },
  );
  await assert.rejects(
    f.service.create(f.root, {
      contextBoxId: chrono.contextBoxId,
      creationId: randomUUID(),
      agentId: "unknown",
    }),
    { code: "MODEL_INVALID_REQUEST" },
  );
  const run = await f.service.run(f.root, 1, f.input(chrono));
  assert.equal(run.run.diagnostics.agent.id, "chronoz");
  assert.match(f.calls.at(-1).messages[0].content, /You are CHronoZ/);
  assert.doesNotMatch(f.calls.at(-1).messages[0].content, /ORBISTRY_ONLY_PREF/);
  assert.equal(
    (await f.service.list(f.root)).find((c) => c.id === f.conversation.id)
      .messages.length,
    0,
  );
  await f.service.run(f.root, 1, f.input());
  assert.match(f.calls.at(-1).messages[0].content, /ORBISTRY_ONLY_PREF/);
  assert.equal(
    (await f.service.list(f.root)).find((c) => c.id === chrono.id).messages
      .length,
    2,
  );
});
const repeatedSummary =
  "The document describes the company, its customer segments, trading products, custody services, wallet infrastructure, revenue sources, research observations, and operating risks. It provides an overview of the business and its financial metrics.";

test("legacy agent association normalizes without rewrites and subsequent runs capture custom-policy provenance", async (t) => {
  const f = await fixture(t);
  const file = path.join(
    f.root,
    ".wonnyy",
    "conversations",
    f.conversation.id + ".json",
  );
  const raw = JSON.parse(await fs.readFile(file, "utf8"));
  delete raw.agentId;
  await fs.writeFile(file, JSON.stringify(raw));
  const original = await fs.readFile(file, "utf8");
  for (let i = 0; i < 2; i++) {
    const list = await f.service.list(f.root);
    assert.equal(list.length, 1);
    assert.equal(list[0].agentId, "wonnyy-agent");
  }
  assert.equal(await fs.readFile(file, "utf8"), original);
  const { AgentStore } = require("../../scripts/fixtures/legacy-agents.cjs");
  f.service.agents = new AgentStore(path.join(f.root, "agent-settings"));
  await f.service.agents.save({
    id: "wonnyy-agent",
    customInstructions: "Use numbered findings.",
  });
  const result = await f.service.run(f.root, 1, f.input());
  assert.equal(result.run.diagnostics.agent.id, "wonnyy-agent");
  assert.match(
    result.run.diagnostics.agent.customInstructionsHash,
    /^[a-f0-9]{64}$/,
  );
  assert.match(f.calls.at(-1).messages[0].content, /Use numbered findings/);
  assert.doesNotMatch(
    JSON.stringify(f.calls.at(-1).messages),
    /The B source only contains BETA/,
  );
  assert.equal(
    JSON.parse(await fs.readFile(file, "utf8")).agentId,
    "wonnyy-agent",
  );
  const oldHash = result.run.diagnostics.agent.customInstructionsHash;
  await f.service.agents.save({
    id: "wonnyy-agent",
    customInstructions: "Be concise.",
  });
  assert.equal(
    (await readModelRun(f.root, result.run.runId)).diagnostics.agent
      .customInstructionsHash,
    oldHash,
  );
});

test("copied summaries receive one correction for a new question without duplicating history", async (t) => {
  const f = await fixture(t);
  const calls = [];
  let answer = repeatedSummary;
  f.provider.complete = async (request) => {
    calls.push(request);
    request.onContent?.(JSON.stringify({ answer }));
    return {
      model: request.model,
      content: JSON.stringify({ answer }),
      finishReason: "stop",
      usage: null,
    };
  };
  await f.service.run(f.root, 1, f.input());
  const original = f.provider.complete;
  f.provider.complete = async (request) => {
    if (calls.length === 2)
      answer =
        "1. The source contains ALPHA. It does not support five distinct facts.";
    return original(request);
  };
  const events = [];
  const result = await f.service.run(
    f.root,
    1,
    f.input(undefined, { userMessage: "Tell me 5 facts from the file." }),
    (event) => events.push(event),
  );
  assert.equal(calls.length, 3);
  assert.equal(
    result.run.diagnostics.initialValidationFailure,
    "repeated_answer",
  );
  assert.equal(result.run.diagnostics.validationRepairCount, 1);
  assert.equal(result.conversation.messages.length, 4);
  assert.equal(result.conversation.attempts.length, 2);
  assert.equal(
    calls[2].answerRepair,
    true,
    "Repetition correction uses the existing bounded answer-repair path",
  );
  assert.equal(
    calls[2].messages.at(-1).content,
    "Tell me 5 facts from the file.",
  );
  assert.ok(
    events.some(
      (event) => event.state === "VALIDATING" && event.content === "",
    ),
  );
  answer = repeatedSummary;
  f.provider.complete = original;
  await assert.rejects(
    f.service.run(
      f.root,
      1,
      f.input(undefined, { userMessage: "Give the main risks instead." }),
    ),
    { code: "MODEL_INVALID_RESPONSE" },
  );
  assert.equal(calls.length, 5);
  assert.equal(
    (await f.service.list(f.root))[0].messages.filter(
      (message) => message.role === "assistant",
    ).length,
    2,
  );
});

test("repeat requests, repeated questions, and short factual answers remain valid", () => {
  const history = [
    { role: "user", content: "Summarize this." },
    { role: "assistant", content: repeatedSummary },
  ];
  const response = {
    content: JSON.stringify({ answer: repeatedSummary }),
    finishReason: "stop",
  };
  for (const question of [
    "Summarize this.",
    "Repeat the previous answer verbatim.",
  ])
    assert.equal(validateAnswer(response, question, history), repeatedSummary);
  assert.equal(
    validateAnswer(
      { content: '{"answer":"25%"}', finishReason: "stop" },
      "What percentage?",
      [
        { role: "user", content: "What allocation?" },
        { role: "assistant", content: "25%" },
      ],
    ),
    "25%",
  );
});
const { ModelRuntimeError } = require("./model-errors.cjs");

test("a box with empty and populated files answers and retries without losing full source provenance", async (t) => {
  const f = await fixture(t);
  await fs.writeFile(path.join(f.root, "empty.md"), "");
  const box = await f.service.editBox(f.root, {
    action: "create",
    name: "Mixed text",
    paths: ["a.md", "empty.md"],
  });
  const chat = await f.service.create(f.root, {
    contextBoxId: box.id,
    creationId: randomUUID(),
  });
  const result = await f.service.run(f.root, 1, f.input(chat));
  assert.equal(result.run.status, "succeeded");
  assert.deepEqual(
    result.run.sourcesActuallyRead.map((source) => source.relativePath),
    ["a.md", "empty.md"],
  );
  const envelopes = f.calls[0].messages
    .slice(1, 3)
    .map((message) => JSON.parse(message.content));
  assert.equal(envelopes[1].content, "");
  assert.match(envelopes[0].content, /ALPHA/);
  const complete = f.provider.complete;
  f.provider.complete = async () => {
    throw new ModelRuntimeError("MODEL_OFFLINE", "Synthetic offline");
  };
  const failedRequest = f.input(result.conversation);
  await assert.rejects(f.service.run(f.root, 1, failedRequest), {
    code: "MODEL_OFFLINE",
  });
  f.provider.complete = complete;
  const retried = await f.service.run(
    f.root,
    1,
    f.input(result.conversation, { retryOf: failedRequest.requestId }),
  );
  assert.equal(retried.conversation.messages.length, 4);
  assert.equal(retried.conversation.messages[3].sources.length, 2);
});

test("explicit box switches and membership edits affect future turns only, survive restart, and exclude other evidence", async (t) => {
  const f = await fixture(t);
  const first = await f.service.run(f.root, 1, f.input());
  const oldMessage = structuredClone(first.conversation.messages[1]);
  const otherBox = await f.service.editBox(f.root, {
    action: "create",
    name: "Other",
    paths: ["b.md"],
  });
  const switched = await f.service.switchBox(f.root, {
    conversationId: f.conversation.id,
    contextBoxId: otherBox.id,
  });
  assert.deepEqual(switched.messages[1], oldMessage);
  assert.equal(switched.contextTransitions.length, 1);
  const next = await f.service.run(f.root, 1, f.input(switched));
  assert.deepEqual(
    next.run.sourcesActuallyRead.map((source) => source.relativePath),
    ["b.md"],
  );
  assert.doesNotMatch(JSON.stringify(f.calls.at(-1).messages), /ALPHA/);
  assert.equal(
    f.calls.at(-1).messages.filter((message) => message.role === "assistant")
      .length,
    0,
  );
  assert.equal(next.conversation.messages[3].contextBox.id, otherBox.id);
  await f.service.editBox(f.root, {
    action: "add",
    id: otherBox.id,
    paths: ["a.md"],
  });
  const added = await f.service.run(f.root, 1, f.input(next.conversation));
  assert.equal(added.run.sourcesActuallyRead.length, 2);
  assert.deepEqual(added.conversation.messages[1], oldMessage);
  const restart = new ChatService({
    provider: f.provider,
    registry: f.registry,
  });
  assert.deepEqual((await restart.list(f.root))[0].messages[1], oldMessage);
  await restart.renameBox(f.root, { id: otherBox.id, name: "Renamed chunk" });
  assert.equal(
    (await restart.listBoxes(f.root)).find((box) => box.id === otherBox.id)
      .name,
    "Renamed chunk",
  );
  await restart.editBox(f.root, { action: "delete", id: otherBox.id });
  await assert.rejects(restart.run(f.root, 1, f.input(added.conversation)), {
    code: "MODEL_CONTEXT_INVALID",
  });
  assert.equal((await restart.list(f.root))[0].messages.length, 6);
});

test("schema-two chat reads do not rewrite files; first explicit turn upgrades per-turn provenance", async (t) => {
  const f = await fixture(t);
  const first = await f.service.run(f.root, 1, f.input());
  const { store } = await f.service.store(f.root);
  const value = structuredClone(first.conversation);
  value.schemaVersion = 2;
  for (const message of value.messages) delete message.contextIdentity;
  for (const attempt of value.attempts) delete attempt.contextIdentity;
  await store.write(value);
  const before = await fs.readFile(store.file(value.id), "utf8");
  const restarted = new ChatService({
    provider: f.provider,
    registry: f.registry,
  });
  await restarted.list(f.root);
  assert.equal(await fs.readFile(store.file(value.id), "utf8"), before);
  const second = await restarted.run(f.root, 1, f.input(value));
  assert.equal(second.conversation.schemaVersion, 3);
  assert.equal(
    second.conversation.messages[1].contextIdentity.id,
    first.run.contextIdentity.id,
  );
});

test("pre-generation timeout recovery retains one turn and one audit", async (t) => {
  for (const phase of ["load", "generation"]) {
    const f = await fixture(t);
    const complete = f.provider.complete;
    let attempts = 0;
    const failOnce = async (request) => {
      if (++attempts === 1) {
        throw new ModelRuntimeError("MODEL_TIMEOUT", "Slow model");
      }
      return request ? complete(request) : undefined;
    };
    if (phase === "load") f.provider.prepare = () => failOnce();
    else f.provider.complete = failOnce;
    const events = [];
    const input = f.input();
    const result = await f.service.run(f.root, 1, input, (event) =>
      events.push(event),
    );
    assert.equal(attempts, 2);
    assert.equal(result.conversation.messages.length, 2);
    assert.equal(result.conversation.attempts.length, 1);
    assert.equal(result.run.diagnostics.timeoutRetryCount, 1);
    const baseline = result.run.diagnostics.frontOffice;
    assert.equal(baseline.providerCallCount, phase === "load" ? 1 : 2);
    assert.equal(baseline.status, "succeeded");
    if (phase === "generation") {
      assert.equal(baseline.calls[0].status, "failed");
      assert.equal(baseline.calls[0].errorCode, "MODEL_TIMEOUT");
      assert.equal(baseline.usageCoverage, "none");
    }
    assert.equal(result.run.status, "succeeded");
    assert.ok(
      events.some(
        (event) =>
          event.content === "" && event.diagnostics?.timeoutRetryCount === 1,
      ),
    );
    assert.equal(new Set(events.map((event) => event.runId)).size, 1);
    await f.service.run(f.root, 1, input);
    assert.equal(attempts, 2);
  }
});

test("timeout retry is bounded across loading and generation; other failures are not retried", async (t) => {
  for (const code of [
    "MODEL_TIMEOUT",
    "MODEL_OFFLINE",
    "MODEL_INVALID_RESPONSE",
  ]) {
    const f = await fixture(t);
    let attempts = 0;
    f.provider.complete = async () => {
      attempts++;
      throw new ModelRuntimeError(code, "Failed");
    };
    await assert.rejects(f.service.run(f.root, 1, f.input()), { code });
    assert.equal(attempts, code === "MODEL_TIMEOUT" ? 2 : 1);
    assert.equal(f.service.active, null);
  }
  const f = await fixture(t);
  let loads = 0;
  let generations = 0;
  f.provider.prepare = async () => {
    if (++loads === 1)
      throw new ModelRuntimeError("MODEL_TIMEOUT", "Load timeout");
  };
  f.provider.complete = async () => {
    generations++;
    throw new ModelRuntimeError("MODEL_TIMEOUT", "Generation timeout");
  };
  await assert.rejects(f.service.run(f.root, 1, f.input()), {
    code: "MODEL_TIMEOUT",
  });
  assert.equal(loads, 2);
  assert.equal(generations, 1);
});

test("Stop and the original absolute deadline prevent further timeout recovery", async (t) => {
  for (const stop of [true, false]) {
    const f = await fixture(t);
    if (!stop) await f.registry.save({ absoluteTimeoutMs: 1000 });
    let attempts = 0;
    f.provider.complete = async (request) => {
      attempts++;
      if (stop || attempts === 2) {
        await new Promise((resolve) =>
          request.signal.addEventListener("abort", resolve, { once: true }),
        );
      }
      throw new ModelRuntimeError("MODEL_TIMEOUT", "Timeout");
    };
    const input = f.input();
    const pending = f.service.run(f.root, 1, input, (event) => {
      if (stop && event.state === "GENERATING")
        setTimeout(() => f.service.cancel(1, input.requestId), 10);
    });
    await assert.rejects(pending, {
      code: stop ? "MODEL_CANCELLED" : "MODEL_TIMEOUT",
    });
    assert.equal(attempts, stop ? 1 : 2);
    assert.equal(f.service.active, null);
  }
});
async function fixture(t) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-chat-test-"));
  t.after(async () => {
    assert.ok(
      path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep),
    );
    await fs.rm(root, { recursive: true, force: true });
  });
  const calls = [];
  const provider = {
    listModels: async () => [
      { name: "qwen3:4b", size: 2000, capabilities: ["completion"] },
      { name: "qwen3:1.7b", size: 1000, capabilities: ["completion"] },
    ],
    getStatus: async () => ({
      online: true,
      error: null,
      models: await provider.listModels(),
    }),
    complete: async (request) => {
      calls.push(request);
      if (request.format?.properties?.queries)
        return {
          model: request.model,
          provider: "ollama",
          finishReason: "stop",
          content: JSON.stringify({
            queries: [{ sourceId: "numbers.csv", operation: "profile" }],
          }),
          usage: null,
        };
      request.onContent?.('{"answer":"Source answer."}');
      return {
        model: request.model,
        provider: "ollama",
        content: '{"answer":"Source answer."}',
        finishReason: "stop",
        createdAt: new Date().toISOString(),
        usage: null,
      };
    },
  };
  const registry = new ModelRegistry(provider, path.join(root, "settings"));
  await registry.save({ modelId: "qwen3:4b" });
  const service = new ChatService({ provider, registry });
  await fs.writeFile(
    path.join(root, "a.md"),
    "The A source only contains ALPHA.",
  );
  await fs.writeFile(
    path.join(root, "b.md"),
    "The B source only contains BETA.",
  );
  await stations.addContext(root, ["a.md"]);
  const conversation = await createBound(service, root, scopeInput);
  const input = (chat = conversation, extra = {}) => ({
    ...scopeInput,
    conversationId: chat.id,
    requestId: randomUUID(),
    userMessage: "Summarize this.",
    expectedContextId: chat.contextIdentity.id,
    ...extra,
  });
  return { root, calls, provider, registry, service, conversation, input };
}

test("resubmitting the latest failed prompt reuses its user message across repeated errors and recovery", async (t) => {
  const f = await fixture(t);
  const complete = f.provider.complete;
  f.provider.complete = async () => {
    throw new ModelRuntimeError("MODEL_OFFLINE", "Synthetic failure");
  };
  for (let i = 0; i < 3; i++)
    await assert.rejects(f.service.run(f.root, 1, f.input()), {
      code: "MODEL_OFFLINE",
    });
  let chat = (await f.service.list(f.root))[0];
  assert.equal(chat.messages.length, 1);
  assert.equal(new Set(chat.attempts.map((a) => a.userMessageId)).size, 1);
  assert.equal(chat.attempts.length, 3);
  f.provider.complete = complete;
  const result = await f.service.run(f.root, 1, f.input());
  assert.equal(result.conversation.messages.length, 2);
  assert.equal(result.conversation.attempts.length, 4);
  // The same text after success is a new, intentionally submitted turn.
  assert.equal(
    (await f.service.run(f.root, 1, f.input())).conversation.messages.length,
    4,
  );
});

test("deleting answers or whole turns persists without rewriting immutable runs or other turns", async (t) => {
  const f = await fixture(t);
  const first = await f.service.run(f.root, 1, f.input());
  const second = await f.service.run(
    f.root,
    1,
    f.input(undefined, { userMessage: "Another question." }),
  );
  const record = await readModelRun(f.root, first.run.runId);
  let chat = await f.service.deleteMessage(f.root, {
    conversationId: first.conversation.id,
    messageId: first.conversation.messages[1].id,
  });
  assert.equal(chat.messages.length, 3);
  assert.equal(chat.attempts.length, 2);
  const restarted = new ChatService({
    provider: f.provider,
    registry: f.registry,
  });
  chat = (await restarted.list(f.root))[0];
  assert.equal(chat.messages.length, 3);
  chat = await restarted.deleteMessage(f.root, {
    conversationId: chat.id,
    messageId: second.conversation.messages[2].id,
  });
  assert.equal(chat.messages.length, 1);
  assert.equal(chat.attempts.length, 1);
  assert.deepEqual(await readModelRun(f.root, first.run.runId), record);
  assert.equal(
    (await readModelRun(f.root, second.run.runId)).status,
    "succeeded",
  );
  // Repeated deletion is harmless, and the final prompt can also be removed.
  await restarted.deleteMessage(f.root, {
    conversationId: chat.id,
    messageId: second.conversation.messages[2].id,
  });
  chat = await restarted.deleteMessage(f.root, {
    conversationId: chat.id,
    messageId: chat.messages[0].id,
  });
  assert.deepEqual(chat.messages, []);
  assert.deepEqual(chat.attempts, []);
  await assert.rejects(
    restarted.deleteMessage(f.root, {
      conversationId: "../escape",
      messageId: "invalid",
    }),
    { code: "MODEL_INVALID_REQUEST" },
  );
});

test("edited prompts after failures create independent turns and failed turns can be deleted", async (t) => {
  const f = await fixture(t);
  f.provider.complete = async () => {
    throw new ModelRuntimeError("MODEL_OFFLINE", "Synthetic failure");
  };
  await assert.rejects(f.service.run(f.root, 1, f.input()));
  await assert.rejects(
    f.service.run(
      f.root,
      1,
      f.input(undefined, { userMessage: "A different question." }),
    ),
  );
  const before = (await f.service.list(f.root))[0];
  assert.equal(before.messages.length, 2);
  const after = await f.service.deleteMessage(f.root, {
    conversationId: before.id,
    messageId: before.messages[1].id,
  });
  assert.equal(after.messages.length, 1);
  assert.equal(after.attempts.length, 1);
});

test("backend owns ten-turn history, model switching, duplicate delivery, and source isolation", async (t) => {
  const f = await fixture(t);
  let result;
  for (let i = 0; i < 10; i++)
    result = await f.service.run(f.root, 1, f.input());
  assert.equal(result.conversation.messages.length, 20);
  assert.equal(f.calls.at(-1).messages.length, 21);
  await f.registry.save({ modelId: "qwen3:1.7b" });
  const request = f.input();
  result = await f.service.run(f.root, 1, request);
  assert.equal(result.run.model, "qwen3:1.7b");
  assert.equal(result.run.schemaVersion, 2);
  await f.service.run(f.root, 1, request);
  assert.equal(f.calls.length, 11);
  await assert.rejects(
    f.service.run(f.root, 1, { ...f.input(), history: [] }),
    { code: "MODEL_INVALID_REQUEST" },
  );
  await stations.clearContext(f.root);
  await stations.addContext(f.root, ["b.md"]);
  await f.service.run(f.root, 1, f.input());
  assert.ok(JSON.stringify(f.calls.at(-1).messages).includes("ALPHA"));
  const second = await createBound(f.service, f.root, scopeInput);
  await f.service.run(f.root, 1, f.input(second));
  assert.equal(f.calls.at(-1).messages.length, 3);
  assert.ok(!JSON.stringify(f.calls.at(-1).messages).includes("ALPHA"));
  await f.service.resume(f.root, f.conversation.id);
  assert.equal(
    (await f.service.checkConversation(f.root, f.conversation.id)).id,
    f.conversation.contextIdentity.id,
  );
  const other = path.join(f.root, "another-vault");
  await fs.mkdir(other);
  await assert.rejects(f.service.run(other, 1, f.input()));
});

test("box turns use latest contents while saved historical evidence stays unchanged", async (t) => {
  const f = await fixture(t);
  const first = await f.service.run(f.root, 1, f.input());
  await fs.writeFile(path.join(f.root, "a.md"), "A revised version.");
  const second = await f.service.run(f.root, 1, f.input());
  assert.notEqual(second.run.contextIdentity.id, first.run.contextIdentity.id);
  assert.equal(second.run.diagnostics.contextChanged, true);
  assert.deepEqual(
    second.conversation.messages[1].sources,
    first.run.sourcesActuallyRead,
  );
  assert.deepEqual(
    second.conversation.messages[3].sources,
    second.run.sourcesActuallyRead,
  );
  assert.equal(
    f.calls.at(-1).messages.filter((message) => message.role === "assistant")
      .length,
    0,
  );
  await f.service.resume(f.root, f.conversation.id);
});

test("cancellation is owner-bound, prevents duplicates, and permits an immediate retry", async (t) => {
  const f = await fixture(t);
  const normal = f.provider.complete;
  let entered;
  const started = new Promise((resolve) => {
    entered = resolve;
  });
  f.provider.complete = (request) =>
    new Promise((_, reject) => {
      entered();
      request.signal.addEventListener(
        "abort",
        () => reject(request.signal.reason),
        { once: true },
      );
    });
  const input = f.input();
  const running = f.service.run(f.root, 1, input);
  const rejected = assert.rejects(running, { code: "MODEL_CANCELLED" });
  await started;
  assert.equal(await f.service.cancel(2, input.requestId), false);
  await assert.rejects(f.service.run(f.root, 1, input), { code: "MODEL_BUSY" });
  await f.service.cancel(1, input.requestId);
  await rejected;
  const chat = (await f.service.list(f.root))[0];
  assert.equal(chat.attempts[0].status, "cancelled");
  assert.equal(chat.messages.length, 1);
  f.provider.complete = normal;
  const result = await f.service.run(
    f.root,
    1,
    f.input(chat, { retryOf: input.requestId }),
  );
  assert.equal(result.conversation.messages.length, 2);
});

test("restart recovers only pending references and deletion retains audits without resurrection", async (t) => {
  const f = await fixture(t);
  const result = await f.service.run(f.root, 1, f.input());
  const { store } = await f.service.store(f.root);
  await store.update(f.conversation.id, (value) => {
    value.messages = value.messages.filter(
      (message) => message.role === "user",
    );
    value.attempts[0].status = "pending";
  });
  const restarted = new ChatService({
    provider: f.provider,
    registry: f.registry,
  });
  assert.equal((await restarted.list(f.root))[0].messages.length, 2);
  await restarted.remove(f.root, f.conversation.id);
  assert.equal(
    (await readModelRun(f.root, result.run.runId)).response,
    "Source answer.",
  );
  assert.deepEqual(
    await new ChatService({ provider: f.provider, registry: f.registry }).list(
      f.root,
    ),
    [],
  );
});

test("unrecorded pending turns become interrupted and corrupt snapshots remain intact", async (t) => {
  const f = await fixture(t);
  const { store } = await f.service.store(f.root);
  await store.update(f.conversation.id, (value) => {
    const userMessageId = randomUUID();
    value.messages.push({
      id: userMessageId,
      conversationId: value.id,
      role: "user",
      content: "Question",
      createdAt: new Date().toISOString(),
    });
    value.attempts.push({
      requestId: randomUUID(),
      runId: randomUUID(),
      userMessageId,
      status: "pending",
      contextIdentity: value.contextIdentity,
    });
  });
  const restarted = new ChatService({
    provider: f.provider,
    registry: f.registry,
  });
  assert.equal(
    (await restarted.list(f.root))[0].attempts[0].status,
    "interrupted",
  );
  await fs.writeFile(store.file(f.conversation.id), "broken");
  await assert.rejects(restarted.list(f.root), {
    code: "MODEL_STORAGE_INVALID",
  });
  assert.equal(
    await fs.readFile(store.file(f.conversation.id), "utf8"),
    "broken",
  );
});

test("budgeting drops whole exchanges and never truncates source", () => {
  const base = [{ role: "user", content: "a".repeat(1000) }];
  const history = Array.from({ length: 24 }, (_, i) => ({
    role: i % 2 ? "assistant" : "user",
    content: "h".repeat(600),
  }));
  const result = budgetHistory(base, history, {
    contextWindow: 2048,
    outputLimit: 512,
  });
  assert.equal(result.history.length % 2, 0);
  assert.ok(result.diagnostics.droppedExchanges > 0);
  assert.throws(
    () => budgetHistory([{ content: "a".repeat(20_000) }], [], DEFAULTS),
    { code: "MODEL_CONTEXT_TOO_LARGE" },
  );
});

test("answer decoding hides framing and thinking; final validation rejects incomplete results", () => {
  assert.equal(answerPrefix('{"answer":"Hello \\uD83D'), "");
  assert.equal(answerPrefix('{"answer":"Hello \\uD83D\\uDE00!"}'), "Hello 😀!");
  assert.equal(
    answerPrefix('{"answer":"I need to inspect the document first."}'),
    "",
  );
  for (const content of [
    '{"answer":""}',
    '{"answer":"I need to inspect the file."}',
    '{"answer":"ok","extra":true}',
    "invalid",
  ])
    assert.throws(() => validateAnswer({ content, finishReason: "stop" }));
  assert.throws(() =>
    validateAnswer({ content: '{"answer":"ok"}', finishReason: "length" }),
  );
});

test("snapshot failure after audit publication recovers exactly once without another model call", async (t) => {
  const f = await fixture(t);
  const { store } = await f.service.store(f.root);
  const write = store.write.bind(store);
  store.write = async (value) => {
    if (value.attempts.some((attempt) => attempt.status === "succeeded"))
      throw Object.assign(new Error("Simulated disk failure"), {
        code: "MODEL_STORAGE_FAILED",
      });
    return write(value);
  };
  await assert.rejects(f.service.run(f.root, 1, f.input()), {
    code: "MODEL_STORAGE_FAILED",
  });
  const restarted = new ChatService({
    provider: f.provider,
    registry: f.registry,
  });
  assert.equal((await restarted.list(f.root))[0].messages.length, 2);
  assert.equal(f.calls.length, 1);
  assert.equal((await restarted.list(f.root))[0].messages.length, 2);
});

test("knowledge changes reserve admission before awaiting cancellation", async (t) => {
  const f = await fixture(t);
  let release;
  const gate = new Promise((resolve) => {
    release = resolve;
  });
  const changing = f.service.changeKnowledge(async () => {
    await gate;
  });
  await assert.rejects(f.service.run(f.root, 1, f.input()), {
    code: "MODEL_BUSY",
  });
  await assert.rejects(createBound(f.service, f.root, scopeInput), {
    code: "MODEL_BUSY",
  });
  release();
  await changing;
  await f.service.run(f.root, 1, f.input());
});

test("vault changes wait for in-flight mutations and keep admission reserved through the queue", async (t) => {
  const f = await fixture(t);
  const order = [];
  let release;
  const gate = new Promise((resolve) => {
    release = resolve;
  });
  const scanning = f.service.exclusive(async () => {
    order.push("scan");
    await gate;
  });
  const switching = f.service.changeKnowledge(async () => {
    order.push("switch");
    await assert.rejects(f.service.run(f.root, 1, f.input()), {
      code: "MODEL_BUSY",
    });
    return "new vault";
  });
  const refreshing = f.service.changeKnowledge(async () => {
    order.push("refresh");
  });
  // Attach handlers before releasing the blocked scan, including on regressions.
  const results = Promise.allSettled([scanning, switching, refreshing]);
  await assert.rejects(createBound(f.service, f.root, scopeInput), {
    code: "MODEL_BUSY",
  });
  release();
  const settled = await results;
  assert.deepEqual(
    settled.map((result) => result.status),
    ["fulfilled", "fulfilled", "fulfilled"],
  );
  assert.equal(settled[1].value, "new vault");
  assert.deepEqual(order, ["scan", "switch", "refresh"]);
  await f.service.run(f.root, 1, f.input());
});

test("a failed queued operation does not block the next vault change", async (t) => {
  const f = await fixture(t);
  const failing = f.service.changeKnowledge(async () => {
    throw new Error("Unreadable folder");
  });
  const switching = f.service.changeKnowledge(async () => "recovered");
  const results = await Promise.allSettled([failing, switching]);
  assert.equal(results[0].status, "rejected");
  assert.deepEqual(results[1], { status: "fulfilled", value: "recovered" });
  await f.service.run(f.root, 1, f.input());
});

test("queued vault changes wait for generation cancellation cleanup", async (t) => {
  const f = await fixture(t);
  let started;
  let aborted;
  let release;
  const generating = new Promise((resolve) => {
    started = resolve;
  });
  const cancelling = new Promise((resolve) => {
    aborted = resolve;
  });
  const cleanup = new Promise((resolve) => {
    release = resolve;
  });
  f.provider.complete = (request) =>
    new Promise((_, reject) => {
      started();
      request.signal.addEventListener(
        "abort",
        () => {
          aborted();
          void cleanup.then(() => reject(request.signal.reason));
        },
        { once: true },
      );
    });
  const stopped = assert.rejects(f.service.run(f.root, 1, f.input()), {
    code: "MODEL_CANCELLED",
  });
  await generating;
  let switched = false;
  const changing = f.service.changeKnowledge(async () => {
    switched = true;
    assert.equal(f.service.active, null);
    assert.equal(
      (await f.service.list(f.root))[0].attempts[0].status,
      "cancelled",
    );
  });
  await cancelling;
  assert.equal(switched, false);
  await assert.rejects(f.service.run(f.root, 1, f.input()), {
    code: "MODEL_BUSY",
  });
  release();
  await Promise.all([stopped, changing]);
  assert.equal(switched, true);
});

test("model registry preserves missing selections and validates unknown model capabilities", async (t) => {
  const f = await fixture(t);
  f.provider.listModels = async () => [
    { name: "other:small", capabilities: ["embedding"], size: 100 },
  ];
  const state = await f.registry.state();
  assert.equal(state.settings.modelId, "qwen3:4b");
  assert.equal(state.models[0].profile, "unprofiled");
  await assert.rejects(f.registry.save({ modelId: "other:small" }), {
    code: "MODEL_INVALID_REQUEST",
  });
  await assert.rejects(f.registry.validateSelection(await f.registry.read()), {
    code: "MODEL_NOT_FOUND",
  });
});

test("task echoes receive one bounded repair and rejected output never enters history", async (t) => {
  const f = await fixture(t);
  const normal = f.provider.complete;
  let attempts = 0;
  f.provider.complete = async (request) => {
    attempts++;
    if (attempts === 1)
      return {
        model: request.model,
        content: JSON.stringify({ answer: request.messages.at(-1).content }),
        finishReason: "stop",
        usage: null,
      };
    return normal(request);
  };
  const result = await f.service.run(f.root, 1, f.input());
  assert.equal(attempts, 2);
  assert.equal(result.run.diagnostics.validationRepairCount, 1);
  assert.equal(result.conversation.messages.length, 2);
  assert.equal(result.conversation.attempts.length, 1);
  f.provider.complete = async (request) => {
    attempts++;
    return {
      model: request.model,
      content: JSON.stringify({ answer: request.messages.at(-1).content }),
      finishReason: "stop",
      usage: null,
    };
  };
  await assert.rejects(f.service.run(f.root, 1, f.input()), {
    code: "MODEL_INVALID_RESPONSE",
  });
  assert.equal(attempts, 4);
  assert.equal(
    (await f.service.list(f.root))[0].messages.filter(
      (message) => message.role === "assistant",
    ).length,
    1,
  );
});

test("approved Station source sets reach prompts, preserve provenance and resume atomically", async (t) => {
  const f = await fixture(t);
  await fs.writeFile(
    path.join(f.root, "numbers.csv"),
    "asset,weight\nbonds,40",
  );
  const state = await stations.createStation(f.root, "Research");
  const stationId = state.stations.find((s) => s.name === "Research").id;
  await stations.setAssignments(
    f.root,
    ["a.md", "numbers.csv"],
    stationId,
    true,
  );
  await stations.clearContext(f.root);
  const selection = { activeStationIds: [stationId], matchMode: "any" };
  await assert.rejects(createBound(f.service, f.root, selection), {
    code: "MODEL_CONTEXT_INVALID",
  });
  const scope = await stations.prepareBrainScope(f.root, {
    ownerId: "test-review",
    ...selection,
  });
  const preview = await stations.previewContext(
    f.root,
    scope.sources.map((s) => s.relativePath),
  );
  await stations.addContext(f.root, preview.files);
  const chat = await createBound(f.service, f.root, selection);
  const result = await f.service.run(f.root, 1, f.input(chat, selection));
  assert.deepEqual(
    result.run.sourcesActuallyRead.map((s) => s.relativePath),
    ["a.md", "numbers.csv"],
  );
  const envelopes = f.calls[0].messages
    .slice(1, 3)
    .map((m) => JSON.parse(m.content));
  assert.deepEqual(
    envelopes.map((s) => s.relativePath),
    ["a.md", "numbers.csv"],
  );
  assert.deepEqual(JSON.parse(envelopes[1].content).sample[0].values, [
    "bonds",
    "40",
  ]);
  assert.equal(result.run.diagnostics.datasetAnalysis.results[0].rowCount, 1);
  assert.doesNotMatch(JSON.stringify(f.calls[0].messages), /BETA/);
  await stations.setAssignments(f.root, ["b.md"], stationId, true);
  const unchanged = await createBound(f.service, f.root, selection);
  assert.equal(
    unchanged.contextIdentity.id,
    chat.contextIdentity.id,
    "new Station members do not expand existing approval",
  );
  await stations.clearContext(f.root);
  await stations.addContext(f.root, ["b.md"]);
  const restarted = new ChatService({
    provider: f.provider,
    registry: f.registry,
  });
  await restarted.resume(f.root, chat.id);
  const followup = await restarted.run(f.root, 1, f.input(chat, selection));
  assert.equal(
    followup.run.diagnostics.datasetHistory[0].runId,
    result.run.runId,
  );
  assert.equal(
    followup.run.diagnostics.datasetHistory[0].results[0].rowCount,
    1,
  );
  assert.ok(
    f.calls
      .filter((call) => call.format?.properties?.queries)
      .at(-1)
      .messages.some(
        (message) =>
          message.role === "user" &&
          message.content.includes("previousResults"),
      ),
  );
  assert.deepEqual(
    (await stations.getStationState(f.root)).activeContext.map(
      (s) => s.relativePath,
    ),
    ["b.md"],
    "opening a chat does not replace global approval",
  );
  await fs.writeFile(
    path.join(f.root, "numbers.csv"),
    "asset,weight\nbonds,90",
  );
  const changed = await restarted.run(f.root, 1, f.input(chat, selection));
  assert.notEqual(changed.run.contextIdentity.id, chat.contextIdentity.id);
  assert.equal(changed.run.diagnostics.contextChanged, true);
  await stations.clearContext(f.root);
  await stations.addContext(f.root, ["b.md"]);
  await restarted.resume(f.root, chat.id);
  assert.deepEqual(
    (await stations.getStationState(f.root)).activeContext.map(
      (s) => s.relativePath,
    ),
    ["b.md"],
    "failed resume leaves approval intact",
  );
});

test("PDF text context uses extracted hashes and can be resumed", async (t) => {
  const f = await fixture(t);
  const { cmapPdf } = require("../../scripts/fixtures/cmap-pdf.cjs");
  await fs.writeFile(path.join(f.root, "mapped.pdf"), cmapPdf());
  await stations.addContext(f.root, ["mapped.pdf"]);
  const chat = await createBound(f.service, f.root, scopeInput);
  const result = await f.service.run(f.root, 1, f.input(chat));
  assert.equal(result.run.sourcesActuallyRead.length, 2);
  const pdf = JSON.parse(f.calls[0].messages[2].content);
  assert.equal(pdf.type, "pdf");
  assert.ok(pdf.content.trim());
  await stations.clearContext(f.root);
  await f.service.resume(f.root, chat.id);
  assert.equal(
    (await stations.getStationState(f.root)).activeContext.length,
    0,
  );
});

test("a timeout after partial output never starts a second generation", async (t) => {
  const f = await fixture(t);
  let calls = 0;
  f.provider.complete = async (request) => {
    calls++;
    request.onContent('{"answer":"Partial');
    throw new ModelRuntimeError("MODEL_TIMEOUT", "Stream stalled");
  };
  await assert.rejects(f.service.run(f.root, 1, f.input()), {
    code: "MODEL_TIMEOUT",
  });
  assert.equal(calls, 1);
  assert.equal(f.service.active, null);
});

test("model-reported context insufficiency is completed once with source provenance", async (t) => {
  const f = await fixture(t);
  let calls = 0;
  f.provider.complete = async () => {
    calls++;
    return {
      model: "qwen3:4b",
      content: JSON.stringify({
        answer:
          "CONTEXT INSUFFICIENT: The selected sources do not establish this fact.",
      }),
      finishReason: "stop",
    };
  };
  const events = [];
  const result = await f.service.run(f.root, 1, f.input(), (event) =>
    events.push(event),
  );
  assert.equal(calls, 1);
  assert.equal(result.run.status, "succeeded");
  assert.equal(result.run.diagnostics.contextInsufficient, true);
  assert.equal(result.run.sourcesActuallyRead.length, 1);
  assert.equal(events.at(-1).state, "CONTEXT_INSUFFICIENT");
});

test("the orchestrator bounds remote provider retries at two attempts", async (t) => {
  const f = await fixture(t);
  let calls = 0;
  f.provider.complete = async () => {
    calls++;
    throw new ModelRuntimeError("REMOTE_SERVER_ERROR", "Unavailable");
  };
  await assert.rejects(f.service.run(f.root, 1, f.input()), {
    code: "REMOTE_SERVER_ERROR",
  });
  assert.equal(calls, 2);
});

test("missing models never trigger an implicit pull or generation", async (t) => {
  const f = await fixture(t);
  let pulls = 0;
  f.provider.pull = async () => {
    pulls++;
  };
  f.provider.listModels = async () => [];
  for (let i = 0; i < 2; i++)
    await assert.rejects(f.service.run(f.root, 1, f.input()), {
      code: "MODEL_NOT_FOUND",
    });
  assert.equal(pulls, 0);
  assert.equal(f.calls.length, 0);
});

test("repeated context abstention never invokes answer repair", () => {
  const answer =
    "CONTEXT INSUFFICIENT: " +
    "The approved source does not establish the requested information. ".repeat(
      4,
    );
  assert.equal(
    validateAnswer(
      { finishReason: "stop", content: JSON.stringify({ answer }) },
      "A different question",
      [
        { role: "user", content: "Earlier question" },
        { role: "assistant", content: answer },
      ],
    ),
    answer.trim(),
  );
});

test("a PDF-only chat supplies page-aware text and keeps verified PDF provenance", async (t) => {
  const f = await fixture(t);
  const { textPdf } = require("../../scripts/fixtures/text-pdf.cjs");
  await fs.writeFile(
    path.join(f.root, "report.pdf"),
    textPdf([["Revenue was 120 million."], ["Costs were 80 million."]]),
  );
  await stations.clearContext(f.root);
  await stations.addContext(f.root, ["report.pdf"]);
  const conversation = await createBound(f.service, f.root, scopeInput);
  const result = await f.service.run(
    f.root,
    1,
    f.input(conversation, {
      userMessage: "Interpret the report and cite its pages.",
    }),
  );
  const source = JSON.parse(f.calls[0].messages[1].content);
  assert.equal(source.type, "pdf");
  assert.match(source.content, /\[PDF page 1\]\nRevenue was 120 million/);
  assert.match(source.content, /\[PDF page 2\]\nCosts were 80 million/);
  assert.match(
    f.calls[0].messages[0].content,
    /cite the filename and supplied page number/,
  );
  assert.equal(
    result.run.sourcesActuallyRead[0].contentHash,
    source.contentHash,
  );
  assert.equal(
    result.conversation.messages.at(-1).sources[0].relativePath,
    "report.pdf",
  );
});

async function createBound(service, root, _scope) {
  const box = await service.saveBox(root, {
    name: "Test " + require("node:crypto").randomUUID(),
  });
  return service.create(root, {
    contextBoxId: box.id,
    creationId: require("node:crypto").randomUUID(),
  });
}
