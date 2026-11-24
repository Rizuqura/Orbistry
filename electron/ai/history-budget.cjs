const { ModelRuntimeError } = require("./model-errors.cjs");

// Conservative estimate, including message framing. No source is truncated.
const { estimateTokens } = require("../shared/token-budget.cjs");

function budgetHistory(baseMessages, history, settings) {
  const available = settings.contextWindow - settings.outputLimit - 256;
  const baseTokens = estimateTokens(baseMessages);
  if (baseTokens > available)
    throw new ModelRuntimeError(
      "MODEL_CONTEXT_TOO_LARGE",
      `Context Box, agent references and question need approximately ${baseTokens} input tokens; ${available} are available (${settings.contextWindow} window minus ${settings.outputLimit} output and 256 reserve). In Settings, set the context window to at least ${baseTokens + settings.outputLimit + 256} tokens if ${settings.providerId}/${settings.modelId} supports it, or use smaller research/guidance boxes. No sources were truncated.`,
      {
        estimatedTokens: baseTokens,
        available,
        contextWindow: settings.contextWindow,
        outputLimit: settings.outputLimit,
        reserve: 256,
        requiredContextWindow: baseTokens + settings.outputLimit + 256,
        messageBreakdown: baseMessages.map((message) => ({
          role: message.role,
          estimatedTokens: estimateTokens([message]),
        })),
      },
    );
  const exchanges = [];
  for (let index = 0; index + 1 < history.length; index += 2) {
    if (
      history[index].role === "user" &&
      history[index + 1].role === "assistant"
    )
      exchanges.push(history.slice(index, index + 2));
  }
  const kept = exchanges.slice(-12);
  while (kept.length && baseTokens + estimateTokens(kept.flat()) > available)
    kept.shift();
  return {
    history: kept.flat(),
    diagnostics: {
      estimatedPromptTokens: baseTokens + estimateTokens(kept.flat()),
      droppedExchanges: exchanges.length - kept.length,
      estimateMethod: "utf8-bytes/3 + framing",
    },
  };
}

module.exports = { budgetHistory, estimateTokens };
