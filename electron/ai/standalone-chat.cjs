const {
  ModelRuntimeError,
  serializeModelError,
} = require("./model-errors.cjs");
const { budgetHistory } = require("./history-budget.cjs");
const { answerPrefix } = require("./response-validation.cjs");

function inactiveIntegration() {
  throw new ModelRuntimeError(
    "MODEL_INTEGRATION_INACTIVE",
    "Agent file, knowledge and tool integrations are temporarily inactive. Chat uses only instructions and conversation history.",
  );
}

// This module deliberately accepts no vault, source reader, engine or tool executor.
async function runStandaloneTurn({
  provider,
  settings,
  question,
  history,
  agent,
  agentId,
  identity,
  runId,
  requestId,
  conversationId,
  signal,
  onEvent,
  requestLogger,
  recordRun,
}) {
  const started = Date.now();
  const baseline =
    require("./llm-front-office/observability.cjs").createBaselineObserver({
      requestId,
      runId,
      conversationId,
      providerId: settings.providerId,
      modelId: settings.modelId,
      requestLogger,
    });
  const active = agent?.construction?.active;
  const instructions = active?.instructions ?? agent?.customInstructions ?? "";
  const personality = active?.personality ?? agent?.personality ?? "";
  const base = [
    {
      role: "system",
      content: [
        `You are ${agent?.displayName ?? "Orbistry Agent"}, a helpful conversational assistant.`,
        "You have no access to local files, Vault, WorldView, Context Boxes, knowledge retrieval or tools. Do not claim to read or change them. Answer using the conversation and your general knowledge.",
        instructions,
        ...(active?.nodes ?? [])
          .filter((node) =>
            ["Personality", "Output", "LLM"].includes(node.kind),
          )
          .map((node) => node.config?.instructions ?? ""),
        personality ? `Personality preferences:\n${personality}` : "",
      ]
        .filter(Boolean)
        .join("\n\n"),
    },
    { role: "user", content: question },
  ];
  const diagnostics = { standalone: true, agentId, sourceCount: 0 };
  let generationStarted = false;
  const recover = async (operation) => {
    try {
      return await operation();
    } catch (error) {
      if (
        signal.aborted ||
        diagnostics.timeoutRetryCount ||
        generationStarted ||
        !["MODEL_TIMEOUT", "REMOTE_SERVER_ERROR"].includes(error.code) ||
        error.details?.phase === "generation" ||
        (error.details?.retryAfterSeconds ?? 0) > 10
      )
        throw error;
      diagnostics.timeoutRetryCount = 1;
      requestLogger?.step("RETRY_SCHEDULED", {
        attempt: 2,
        errorCode: error.code,
      });
      if (error.code === "REMOTE_SERVER_ERROR")
        await require("node:timers/promises").setTimeout(
          Math.max(1000, (error.details?.retryAfterSeconds ?? 0) * 1000),
          undefined,
          { signal },
        );
      signal.throwIfAborted();
      return operation();
    }
  };
  const metadata = () => ({
    schemaVersion: 2,
    runId,
    requestId,
    conversationId,
    contextIdentity: identity,
    settings,
    diagnostics,
    startedAt: new Date(started).toISOString(),
    completedAt: new Date().toISOString(),
    durationMs: Math.max(0, Date.now() - started),
    scope: {
      id: runId,
      mode: "active-context",
      manifestVersion: "standalone-chat-v1",
    },
    provider: settings.providerId,
    model: settings.modelId,
    promptVersion: "standalone-chat-v1",
    userMessage: question,
    sourcesAvailable: [],
    sourcesActuallyRead: [],
  });
  try {
    const budget = budgetHistory(base, history, settings);
    Object.assign(diagnostics, budget.diagnostics, {
      includedExchanges: budget.history.length / 2,
    });
    const messages = [base[0], ...budget.history, base[1]];
    signal.throwIfAborted();
    if (typeof provider.prepare === "function") {
      onEvent({
        state:
          settings.providerId === "ollama"
            ? "MODEL_LOADING"
            : "REMOTE_CONNECTING",
        status: { message: "Preparing selected model." },
      });
      await recover(() => provider.prepare(settings.modelId, settings, signal));
    }
    onEvent({
      state: "GENERATING",
      status: { message: "Generating response." },
    });
    requestLogger?.step("GENERATING", { standalone: true });
    const response = await recover(() =>
      baseline.complete(provider, {
        id: runId,
        model: settings.modelId,
        messages,
        settings,
        contextWindow: settings.contextWindow,
        // Existing provider adapters normalize their response to this text envelope.
        format: {
          type: "object",
          properties: { answer: { type: "string" } },
          required: ["answer"],
          additionalProperties: false,
        },
        signal,
        onDiagnostic: (step, details) => requestLogger?.step(step, details),
        onGenerationStarted: () => {
          generationStarted = true;
        },
        onContent: (raw) => {
          generationStarted = true;
          if (settings.streaming) {
            const content = answerPrefix(raw);
            if (content) onEvent({ state: "GENERATING", content });
          }
        },
      }),
    );
    signal.throwIfAborted();
    let answer = response.content;
    try {
      const parsed = JSON.parse(answer);
      if (typeof parsed.answer === "string") answer = parsed.answer;
    } catch {}
    if (
      response.finishReason !== "stop" ||
      typeof answer !== "string" ||
      !answer.trim()
    )
      throw new ModelRuntimeError(
        "MODEL_INVALID_RESPONSE",
        "The model did not finish a valid answer. Retry or adjust the output limit.",
      );
    baseline.finish("succeeded");
    diagnostics.frontOffice = baseline.snapshot();
    diagnostics.executionLocation =
      response.diagnostics?.executionLocation ??
      (settings.providerId === "ollama" ? "local" : "remote");
    await recordRun({
      ...metadata(),
      provider: response.provider ?? settings.providerId,
      model: response.model ?? settings.modelId,
      status: "succeeded",
      response: answer.trim(),
      finishReason: response.finishReason,
      usage: response.usage ?? null,
      error: null,
    });
  } catch (caught) {
    const error = signal.aborted ? signal.reason : caught;
    baseline.finish(
      error.code === "MODEL_CANCELLED" ? "cancelled" : "failed",
      error,
    );
    diagnostics.frontOffice = baseline.snapshot();
    await recordRun({
      ...metadata(),
      status: error.code === "MODEL_CANCELLED" ? "cancelled" : "failed",
      response: null,
      finishReason: null,
      usage: null,
      error: serializeModelError(error),
    });
    throw error;
  }
}
module.exports = { runStandaloneTurn, inactiveIntegration };
