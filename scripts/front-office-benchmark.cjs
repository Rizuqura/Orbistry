/** Reproducible evaluation CLI. Mock mode uses no provider. Live mode requires explicit model/call cap and environment-only BYOK.
 * Writes new local metric artifacts (no prompts/answers/keys). No saved application credentials are read. */
const fs = require("node:fs/promises"),
  path = require("node:path"),
  os = require("node:os");
const {
  fixtures,
} = require("../electron/ai/llm-front-office/evaluation/fixtures.cjs");
const {
  runEvaluation,
  reportMarkdown,
  reportCsv,
  evidenceRecords,
} = require("../electron/ai/llm-front-office/evaluation/harness.cjs");
const {
  defaultConfig,
} = require("../electron/ai/llm-front-office/experiment-contracts.cjs");
const {
  createLLMClient,
  gatewayHealth,
} = require("../electron/ai/llm-front-office/provider-gateway.cjs");
const {
  OpenRouterProvider,
} = require("../electron/ai/providers/openrouter-provider.cjs");
const {
  NvidiaProvider,
} = require("../electron/ai/providers/nvidia-provider.cjs");
const {
  CapabilityRegistry,
} = require("../electron/ai/llm-front-office/model-registry.cjs");
const {
  buildRequirements,
} = require("../electron/ai/llm-front-office/request-intake.cjs");
const {
  routeModels,
} = require("../electron/ai/llm-front-office/model-router.cjs");
const {
  checkBudget,
} = require("../electron/ai/llm-front-office/token-budget.cjs");
const { ModelRuntimeError } = require("../electron/ai/model-errors.cjs");
async function main() {
  const args = process.argv.slice(2);
  const live = args.includes("--live"),
    mock = args.includes("--mock");
  if (live === mock) throw new Error("Choose exactly --mock or --live.");
  const opts = {};
  for (let i = 0; i < args.length; i++) {
    if (["--live", "--mock"].includes(args[i])) continue;
    if (
      ![
        "--output",
        "--provider",
        "--model",
        "--models",
        "--repetitions",
        "--max-calls",
        "--max-output",
        "--context",
        "--max-usd",
      ].includes(args[i]) ||
      !args[i + 1] ||
      opts[args[i]]
    )
      throw new Error("Invalid benchmark options.");
    opts[args[i]] = args[++i];
  }
  const cases = fixtures(),
    repetitions = Number(opts["--repetitions"] ?? 3),
    provider = opts["--provider"] ?? "openrouter",
    model = opts["--model"] ?? "fixture/model";
  const output = path.resolve(opts["--output"] ?? "test-results/front-office");
  const config = defaultConfig();
  config.enabled = true;
  config.generation.maxOutputTokens = Number(opts["--max-output"] ?? 128);
  config.generation.contextWindow = Number(opts["--context"] ?? 131072);
  config.reliability.maxAttempts = 1;
  config.reliability.backoffMs = 0;
  config.routing.allowedProviders = [provider];
  config.routing.selectedDeploymentId = `${provider}:${model}`;
  const clients = {},
    skips = [];
  let temporary;
  try {
    if (mock) {
      for (const scenario of ["A", "B", "C"])
        clients[scenario] = async ({ turn, onContent }) => {
          const content = turn.expected ?? turn.canonical;
          onContent(content);
          return {
            provider,
            model,
            content,
            finishReason: "stop",
            usage: null,
          };
        };
    } else {
      if (
        !opts["--model"] ||
        !opts["--max-calls"] ||
        !["openrouter", "nvidia"].includes(provider)
      )
        throw new Error(
          "Live mode requires --provider openrouter|nvidia, --model and --max-calls.",
        );
      const envName =
        provider === "openrouter" ? "OPENROUTER_API_KEY" : "NVIDIA_API_KEY";
      if (!process.env[envName]) {
        const skipped = {
          status: "skipped",
          reason: `Live inference not run: ${envName} is absent. Saved application credentials were not inspected.`,
          provider,
        };
        await fs.mkdir(output, { recursive: true });
        await fs.writeFile(
          path.join(output, "live-skipped.json"),
          JSON.stringify(skipped, null, 2) + "\n",
        );
        console.log(JSON.stringify(skipped));
        return;
      }
      const credentials = {
        get: async (id) => {
          const key =
            process.env[id === "litellm" ? "LITELLM_MASTER_KEY" : envName];
          if (!key)
            throw new ModelRuntimeError(
              "AUTH_REQUIRED",
              "Missing environment credential.",
            );
          return key;
        },
        status: async (id) => ({
          configured: Boolean(
            process.env[id === "litellm" ? "LITELLM_MASTER_KEY" : envName],
          ),
        }),
      };
      const adapter =
        provider === "openrouter"
          ? new OpenRouterProvider({ credentials })
          : new NvidiaProvider({ credentials });
      const registry = { providerFor: () => adapter };
      temporary = await fs.mkdtemp(
        path.join(os.tmpdir(), "orbistry-evaluation-"),
      );
      const catalog = new CapabilityRegistry(temporary, registry, credentials);
      await catalog.refresh(provider);
      const inventory = await catalog.state();
      const selected = inventory.profiles.find((p) => p.modelId === model);
      if (!selected)
        throw new Error(
          "Requested live model is absent from provider catalog.",
        );
      const allowed = (opts["--models"] ?? model).split(",");
      const profiles = inventory.profiles.filter((p) =>
        allowed.includes(p.modelId),
      );
      config.budget.maxEstimatedUsd =
        opts["--max-usd"] === undefined ? null : Number(opts["--max-usd"]);
      // Preflight every task/turn and the full cumulative estimated output reservation before spending.
      let totalCost = 0,
        unknownCost = false;
      for (const fixture of cases) {
        let history = [];
        for (const turn of fixture.turns) {
          const messages = [...history, { role: "user", content: turn.prompt }];
          const r = buildRequirements(
            { task: fixture.task },
            messages,
            config,
            selected.deploymentId,
          );
          const budget = checkBudget(r, selected, config);
          if (!budget.eligible)
            throw new Error(
              "A benchmark task does not fit the configured context/output/cost limits.",
            );
          if (budget.estimatedCostUsd === null) unknownCost = true;
          else totalCost += budget.estimatedCostUsd;
          history = [
            ...messages,
            { role: "assistant", content: turn.expected ?? turn.canonical },
          ];
        }
      }
      const runClient =
        (transport, auto = false) =>
        async ({ messages, fixture, onContent }) => {
          const c = structuredClone(config);
          c.routing.mode = auto ? "auto" : "manual";
          c.budget.maxEstimatedUsd = null;
          const r = buildRequirements(
            { task: fixture.task },
            messages,
            c,
            selected.deploymentId,
          );
          const chosen = auto
            ? routeModels(r, profiles, inventory.evidence, c).primary.model
            : selected;
          const result = await createLLMClient({
            model: chosen,
            transport,
            config: c,
            registry,
            credentials,
          }).complete({ model: chosen.modelId, messages, onContent });
          return {
            ...result,
            deploymentId: chosen.deploymentId,
            estimatedCostUsd:
              result.usage.promptTokens !== null &&
              result.usage.completionTokens !== null &&
              chosen.inputUsdPerMillion !== null &&
              chosen.outputUsdPerMillion !== null
                ? (result.usage.promptTokens * chosen.inputUsdPerMillion +
                    result.usage.completionTokens *
                      chosen.outputUsdPerMillion) /
                  1000000
                : null,
          };
        };
      clients.A = runClient("direct");
      clients.C = runClient("direct", true);
      if (process.env.LITELLM_MASTER_KEY) {
        config.gateway.enabled = true;
        try {
          await gatewayHealth(config, credentials);
          clients.B = runClient("litellm");
        } catch {
          skips.push(
            "B skipped: authenticated local LiteLLM gateway is unavailable.",
          );
        }
      } else
        skips.push(
          "B skipped: LITELLM_MASTER_KEY is absent; no real gateway result was fabricated.",
        );
      if (
        config.budget.maxEstimatedUsd !== null &&
        (unknownCost ||
          totalCost * repetitions * Object.keys(clients).length >
            config.budget.maxEstimatedUsd)
      )
        throw new Error(
          "The full evaluation cannot fit the cumulative USD estimate cap, or price metadata is unknown.",
        );
    }
    const report = await runEvaluation({
      cases,
      clients,
      model,
      provider,
      settings: config.generation,
      repetitions,
      maxCalls: Number(opts["--max-calls"] ?? (mock ? 5000 : 0)),
      evidence: mock ? "mock" : "live",
    });
    report.skips = skips;
    await fs.mkdir(output, { recursive: true });
    for (const [name, data] of [
      ["report.json", JSON.stringify(report, null, 2) + "\n"],
      ["results.csv", reportCsv(report.rows)],
      [
        "evidence.json",
        JSON.stringify(evidenceRecords(report), null, 2) + "\n",
      ],
      ["report.md", reportMarkdown(report) + "\n" + skips.join("\n") + "\n"],
    ])
      await fs.writeFile(path.join(output, name), data);
    console.log(
      JSON.stringify(
        {
          evidence: report.evidence,
          fixtureCount: report.fixtureCount,
          repetitions: report.repetitions,
          calls: report.rows.length,
          summary: report.summary,
          skips,
          output,
        },
        null,
        2,
      ),
    );
  } finally {
    if (temporary) await fs.rm(temporary, { recursive: true, force: true });
  }
}
main().catch((error) => {
  console.error(
    error instanceof Error &&
      [
        "Choose exactly --mock or --live.",
        "Invalid benchmark options.",
        "Live mode requires --provider openrouter|nvidia, --model and --max-calls.",
      ].includes(error.message)
      ? error.message
      : "Benchmark failed. Check the explicit model, environment-only credential, call/context/cost limits and local output access. No raw provider error was logged.",
  );
  process.exitCode = 1;
});
