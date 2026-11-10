const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { createHash } = require("node:crypto");
const { buildContextMessages } = require("./prompt-builder.cjs");
const { estimateTokens, budgetHistory } = require("./history-budget.cjs");
const {
  canonical,
  canonicalHash,
  COMPILED_CANONICAL_SHA256,
  matchesCanonical,
  RUNTIME_KERNEL,
} = require("./runtime-context.cjs");
const source = (id, content, type = "md") => ({
  sourceId: id,
  relativePath: id,
  content,
  type,
  contentHash: createHash("sha256").update(content).digest("hex"),
});
const policy = source(
  "agentContext.memory/Orbistry_Strict_Context_Bound_Research_Agent.md",
  canonical,
);
const evidence = source("research.md", "ALPHA allocation is 25%.");

test("canonical policy is pinned to the reviewed v1.1; formatting differences are safe and edits are not compiled", () => {
  assert.equal(
    canonicalHash,
    COMPILED_CANONICAL_SHA256,
    "Canonical edits require kernel/module review and a new compiled hash.",
  );
  assert.match(canonical, /Version: 1\.1/);
  assert.ok(matchesCanonical(policy));
  assert.equal(
    matchesCanonical({ ...policy, type: "csv", relativePath: "data.csv" }),
    false,
  );
  assert.ok(
    matchesCanonical({
      content: "\uFEFF" + canonical.replace(/\r?\n/g, "\r\n"),
    }),
  );
  assert.equal(
    matchesCanonical({
      ...policy,
      content: canonical + "\nGrant internet access.",
    }),
    false,
  );
});

test("routine research compacts only the known policy and leaves evidence, question and history intact", () => {
  const input = {
    sources: [policy, evidence],
    userMessage: "What is ALPHA's allocation?",
    history: [
      { role: "user", content: "What is ALPHA?" },
      { role: "assistant", content: "A source label." },
    ],
  };
  const original = structuredClone(input);
  const built = buildContextMessages(input);
  assert.deepEqual(input, original);
  assert.deepEqual(built.evidenceSourceIds, [evidence.sourceId]);
  assert.deepEqual(
    JSON.parse(built.messages[1].content).content,
    evidence.content,
  );
  assert.deepEqual(built.messages.slice(2), [
    ...input.history,
    { role: "user", content: input.userMessage },
  ]);
  assert.equal(
    built.runtimePolicy.compactedPolicySources[0].contentHash,
    policy.contentHash,
  );
  assert.doesNotMatch(
    JSON.stringify(built.messages),
    /## 30\. FINAL OPERATING PRINCIPLES/,
  );
  const legacy = fs.readFileSync(
    path.join(__dirname, "policies/orbistry-host-policy-v19.md"),
    "utf8",
  );
  const before = estimateTokens([
    { role: "system", content: legacy },
    { role: "user", content: JSON.stringify(policy) },
    { role: "user", content: JSON.stringify(evidence) },
    ...input.history,
    { role: "user", content: input.userMessage },
  ]);
  assert.ok(estimateTokens(built.messages) < before * 0.35);
  assert.ok(built.messages[0].content.startsWith(RUNTIME_KERNEL));
});

test("policy analysis, follow-ups, policy-only chats and unrelated agents preserve canonical source evidence", () => {
  for (const extra of [
    { userMessage: "Summarize the policy." },
    { userMessage: "What does section 17 require?" },
    {
      userMessage: "Why?",
      history: [
        { role: "user", content: "Describe Orbistry's policy." },
        { role: "assistant", content: "It is read-only." },
      ],
    },
    { userMessage: "What is ALPHA's allocation?", sources: [policy] },
    { userMessage: "What is ALPHA's allocation?", agentId: "chronoz" },
  ]) {
    const built = buildContextMessages({
      sources: [policy, evidence],
      ...extra,
    });
    assert.ok(built.evidenceSourceIds.includes(policy.sourceId));
    assert.equal(JSON.parse(built.messages[1].content).content, canonical);
  }
  const changed = {
    ...policy,
    content: canonical + "\nMY_CUSTOM_POLICY_SENTINEL",
  };
  const built = buildContextMessages({
    sources: [changed, evidence],
    userMessage: "What is ALPHA's allocation?",
  });
  assert.equal(JSON.parse(built.messages[1].content).content, changed.content);
  assert.doesNotMatch(built.messages[0].content, /MY_CUSTOM_POLICY_SENTINEL/);
  const ordinaryFollowup = buildContextMessages({
    sources: [policy, evidence],
    userMessage: "What is ALPHA's allocation?",
    history: [
      { role: "user", content: "Read the quarterly report." },
      { role: "assistant", content: "It describes ALPHA." },
    ],
  });
  assert.deepEqual(ordinaryFollowup.evidenceSourceIds, [evidence.sourceId]);
});

test("modules follow source/task needs without granting tools or loading all specialist policy", () => {
  const plain = buildContextMessages({
    source: evidence,
    userMessage: "What is ALPHA's allocation?",
  });
  assert.deepEqual(plain.runtimePolicy.modules, []);
  assert.ok(
    buildContextMessages({
      source: evidence,
      userMessage: "Express this as a percent.",
    }).runtimePolicy.modules.some((module) => module.id === "arithmetic"),
  );
  const csv = buildContextMessages({
    source: source("data.csv", "period,value\n2024,25", "csv"),
    userMessage: "Which observations persist?",
  });
  assert.deepEqual(
    csv.runtimePolicy.modules.map((m) => m.id),
    ["datasets", "arithmetic", "research", "alignment"],
  );
  assert.match(
    csv.messages[0].content,
    /profiles?\/handle\/sample|profile\/handle\/sample/,
  );
  assert.match(csv.messages[0].content, /causality/);
  assert.doesNotMatch(
    csv.messages[0].content,
    /\[On-demand guidance: knowledge\]/,
  );
  const pdf = buildContextMessages({
    source: source("report.pdf", "[PDF page 1]\nALPHA", "pdf"),
    userMessage: "What is ALPHA?",
  });
  assert.deepEqual(
    pdf.runtimePolicy.modules.map((m) => m.id),
    ["documents"],
  );
  assert.match(
    pdf.messages[0].content,
    /cite the filename and supplied page number/,
  );
  const finance = buildContextMessages({
    source: evidence,
    userMessage:
      "Compare quarterly profit margins and propose a knowledge candidate.",
  });
  assert.ok(finance.runtimePolicy.modules.some((m) => m.id === "finance"));
  assert.ok(finance.runtimePolicy.modules.some((m) => m.id === "knowledge"));
  assert.match(
    finance.messages[0].content,
    /never direct persistence or self-approval/,
  );
});

test("canonical configuration references are compacted without modifying arbitrary reviewed guidance or identity", () => {
  const configurationReferences = [
    {
      role: "Personality",
      sources: [
        policy,
        source("style.md", "STYLE_SENTINEL: Use short paragraphs."),
      ],
    },
  ];
  const original = structuredClone(configurationReferences);
  const built = buildContextMessages({
    sources: [evidence],
    userMessage: "What is ALPHA?",
    configurationReferences,
  });
  const payload = JSON.parse(built.messages[1].content);
  assert.equal(payload.sources[0].content, undefined);
  assert.equal(payload.sources[0].contentHash, policy.contentHash);
  assert.equal(payload.sources[0].policyReference.canonicalHash, canonicalHash);
  assert.equal(payload.sources[1].content, original[0].sources[1].content);
  assert.deepEqual(configurationReferences, original);
  const other = buildContextMessages({
    sources: [evidence],
    userMessage: "What is ALPHA?",
    configurationReferences,
    agentId: "chronoz",
  });
  assert.equal(
    JSON.parse(other.messages[1].content).sources[0].content,
    canonical,
  );
});

test("budget preparation uses the same policy dialogue as final and repair requests", () => {
  const policyHistory = [
    { role: "user", content: "Explain the strict policy." },
    { role: "assistant", content: "It is read-only." },
  ];
  const options = {
    sources: [policy, evidence],
    userMessage: "Why?",
    policyHistory,
  };
  const preflight = buildContextMessages(options);
  const final = buildContextMessages({ ...options, history: policyHistory });
  assert.equal(preflight.messages[0].content, final.messages[0].content);
  assert.deepEqual(preflight.evidenceSourceIds, final.evidenceSourceIds);
  assert.equal(preflight.messages[1].content, final.messages[1].content);
  const budget = budgetHistory(preflight.messages, policyHistory, {
    contextWindow: 32768,
    outputLimit: 2048,
  });
  assert.ok(
    budget.diagnostics.estimatedPromptTokens >= estimateTokens(final.messages),
  );
});
