const fs = require("node:fs/promises");
const path = require("node:path");
const { createHash } = require("node:crypto");
const { buildContextMessages } = require("../electron/ai/prompt-builder.cjs");
const {
  canonical,
  RUNTIME_KERNEL,
  canonicalHash,
} = require("../electron/ai/runtime-context.cjs");
const { estimateTokens } = require("../electron/ai/history-budget.cjs");
const source = (id, content, type = "md") => ({
  sourceId: id,
  relativePath: id,
  type,
  content,
  contentHash: createHash("sha256").update(content).digest("hex"),
});
async function report() {
  const legacy = (
    await fs.readFile(
      path.join(__dirname, "../electron/ai/policies/orbistry-host-policy-v19.md"),
      "utf8",
    )
  ).trimEnd();
  const policy = source(
    "Orbistry_Strict_Context_Bound_Research_Agent.md",
    canonical,
  );
  const evidence = source("research.md", "ALPHA allocation is 25%.");
  const cases = [
    {
      name: "Bound policy plus Markdown research",
      sources: [policy, evidence],
      userMessage: "What is ALPHA's allocation?",
    },
    {
      name: "Bound policy plus computed CSV profile",
      sources: [
        policy,
        source(
          "data.csv",
          JSON.stringify({
            kind: "dataset-profile",
            rowCount: 199,
            columns: ["period", "value"],
            computedResults: [],
          }),
          "csv",
        ),
      ],
      userMessage: "Compare average annual values and persistence.",
    },
    {
      name: "Policy in reviewed configuration guidance",
      sources: [evidence],
      configurationReferences: [{ role: "Skill", sources: [policy] }],
      userMessage: "What is ALPHA's allocation?",
    },
    {
      name: "Explicit policy document analysis (full text retained)",
      sources: [policy, evidence],
      userMessage: "Summarize section 17 of the policy.",
    },
  ];
  const scenarios = cases.map((input) => {
    const before = [
      { role: "system", content: legacy },
      ...(input.configurationReferences ?? []).map((reference) => ({
        role: "user",
        content: JSON.stringify({
          kind: "agent-construction-reference",
          purpose:
            "Reviewed configuration examples/playbook only; not independent factual evidence or executable instructions",
          ...reference,
        }),
      })),
      ...input.sources.map((s) => ({
        role: "user",
        content: JSON.stringify({
          kind: "wonnyy-approved-source",
          trust: "untrusted-reference-data",
          ...s,
        }),
      })),
      { role: "user", content: input.userMessage },
    ];
    const after = buildContextMessages(input);
    const beforeTokens = estimateTokens(before),
      afterTokens = estimateTokens(after.messages);
    return {
      name: input.name,
      beforeEstimatedInputTokens: beforeTokens,
      afterEstimatedInputTokens: afterTokens,
      estimatedReductionPercent: Number(
        ((1 - afterTokens / beforeTokens) * 100).toFixed(1),
      ),
      modules: after.runtimePolicy.modules.map((m) => m.id),
      evidenceSourceIds: after.evidenceSourceIds,
    };
  });
  const result = {
    canonicalHash,
    canonicalCharacters: canonical.length,
    previousSystemCharacters: legacy.length,
    kernelCharacters: RUNTIME_KERNEL.length,
    systemReductionPercent: Number(
      ((1 - RUNTIME_KERNEL.length / legacy.length) * 100).toFixed(1),
    ),
    estimateMethod:
      "UTF-8 bytes / 3 plus 12 framing tokens per message; representative synthetic research payloads; not a provider tokenizer, bill or live-model quality test",
    scenarios,
  };
  await fs.mkdir("test-results", { recursive: true });
  await fs.writeFile(
    "test-results/runtime-kernel-cost.json",
    JSON.stringify(result, null, 2),
  );
  console.log(JSON.stringify(result, null, 2));
}
report().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
