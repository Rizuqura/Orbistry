const crypto = require("node:crypto");
const { setTimeout: delay } = require("node:timers/promises");
const { MODEL_ERROR_CODES, ModelRuntimeError } = require("./model-errors.cjs");
const {
  buildContextMessages,
  validateUserMessage,
} = require("./prompt-builder.cjs");
const { contextIdentity } = require("./context-identity.cjs");
const { budgetHistory } = require("./history-budget.cjs");
const { validateAnswer, answerPrefix } = require("./response-validation.cjs");
const { DEFAULTS } = require("./model-registry.cjs");
const { createDatasetSession } = require("./dataset-session.cjs");
const { planDataset } = require("./dataset-planner.cjs");
const { inspectDatasetAnswer } = require("./dataset-evidence.cjs");
const { planStatistics, wantsStatistics } = require("./statistics.cjs");
const { selectRuntimeSources } = require("./runtime-context.cjs");
const {
  createBaselineObserver,
} = require("./llm-front-office/observability.cjs");

const ANSWER_FORMAT = Object.freeze({
  type: "object",
  properties: {
    citations: { type: "array", items: { type: "string" }, maxItems: 32 },
    answer: {
      type: "string",
      description:
        "The completed useful answer, grounded in the approved source and conversation. Perform the user's task; never echo their request.",
    },
  },
  required: ["answer"],
  additionalProperties: false,
});

function contextError(message, details = {}) {
  return new ModelRuntimeError(
    MODEL_ERROR_CODES.CONTEXT_INVALID,
    message,
    details,
  );
}

function serializeRunError(error) {
  return {
    code:
      typeof error?.code === "string" ? error.code : MODEL_ERROR_CODES.INTERNAL,
    message:
      error instanceof Error
        ? error.message
        : "An unexpected model run error occurred.",
    details:
      error?.details &&
      typeof error.details === "object" &&
      !Array.isArray(error.details)
        ? structuredClone(error.details)
        : {},
  };
}

function sourceReference(source) {
  return {
    sourceId: source.sourceId ?? source.id,
    relativePath: source.relativePath,
    contentHash: source.contentHash ?? null,
  };
}

function validateRequest(rawRequest) {
  if (
    !rawRequest ||
    typeof rawRequest !== "object" ||
    Array.isArray(rawRequest)
  )
    throw new ModelRuntimeError(
      MODEL_ERROR_CODES.INVALID_REQUEST,
      "Context model request must be an object.",
    );
  const allowed = new Set([
    "model",
    "userMessage",
    "history",
    "activeStationIds",
    "matchMode",
  ]);
  const unknown = Object.keys(rawRequest).filter(
    (field) => !allowed.has(field),
  );
  if (unknown.length)
    throw new ModelRuntimeError(
      MODEL_ERROR_CODES.INVALID_REQUEST,
      "Context model request contains unsupported fields.",
      { fields: unknown },
    );
  if (typeof rawRequest.model !== "string" || !rawRequest.model.trim())
    throw new ModelRuntimeError(
      MODEL_ERROR_CODES.INVALID_REQUEST,
      "A model name is required.",
      { field: "model" },
    );
  if (
    !Array.isArray(rawRequest.activeStationIds) ||
    rawRequest.activeStationIds.some((id) => typeof id !== "string" || !id)
  )
    throw new ModelRuntimeError(
      MODEL_ERROR_CODES.INVALID_REQUEST,
      "activeStationIds must be an array of Station identifiers.",
      { field: "activeStationIds" },
    );
  if (!["any", "all"].includes(rawRequest.matchMode))
    throw new ModelRuntimeError(
      MODEL_ERROR_CODES.INVALID_REQUEST,
      'matchMode must be either "any" or "all".',
      { field: "matchMode" },
    );
  const history = rawRequest.history ?? [];
  if (
    !Array.isArray(history) ||
    history.length > 24 ||
    history.some(
      (message) =>
        !message ||
        typeof message !== "object" ||
        !["user", "assistant"].includes(message.role) ||
        typeof message.content !== "string" ||
        !message.content.trim() ||
        message.content.length > 100_000,
    )
  ) {
    throw new ModelRuntimeError(
      MODEL_ERROR_CODES.INVALID_REQUEST,
      "Chat history must contain at most twelve valid exchanges.",
      { field: "history" },
    );
  }
  return {
    model: rawRequest.model.trim(),
    userMessage: validateUserMessage(rawRequest.userMessage),
    history: history.map((message) => ({
      role: message.role,
      content: message.content.trim(),
    })),
    activeStationIds: [...new Set(rawRequest.activeStationIds)].sort(),
    matchMode: rawRequest.matchMode,
  };
}

function createContextOrchestrator({
  prepareScope,
  readSource,
  provider,
  recordRun,
  randomUUID = crypto.randomUUID,
  promptBuilder = buildContextMessages,
  now = Date.now,
  providerName = "ollama",
}) {
  if (
    typeof prepareScope !== "function" ||
    typeof readSource !== "function" ||
    typeof provider?.complete !== "function" ||
    typeof recordRun !== "function"
  )
    throw new TypeError("Context orchestrator dependencies are incomplete.");

  return {
    async run(rawRequest, options = {}) {
      const request = validateRequest(rawRequest);
      const runId = options.runId ?? randomUUID();
      const settings = { ...DEFAULTS, ...options.settings };
      const diagnostics = {
        ...(options.contextFile ? { contextFile: options.contextFile } : {}),
        ...(options.agentKnowledge
          ? { agentKnowledge: options.agentKnowledge }
          : {}),
        ...(options.agentConfig
          ? {
              agent: {
                id: options.agentConfig.id,
                displayName: options.agentConfig.displayName,
                configurationReferences: (
                  options.agentConfig.configurationReferences ?? []
                ).map(
                  ({
                    nodeId,
                    role,
                    boxId,
                    boxName,
                    relativePath,
                    contextIdentity,
                  }) => ({
                    nodeId,
                    role,
                    boxId,
                    boxName,
                    ...(relativePath ? { relativePath } : {}),
                    contextIdentity,
                  }),
                ),
                constructionRevision:
                  options.agentConfig.construction?.activeRevision ?? 0,
                constructionHash: options.agentConfig.construction?.active
                  ? require("node:crypto")
                      .createHash("sha256")
                      .update(
                        JSON.stringify(options.agentConfig.construction.active),
                      )
                      .digest("hex")
                  : null,
                policyVersion: options.agentConfig.policyVersion,
                customInstructionsHash: require("node:crypto")
                  .createHash("sha256")
                  .update(
                    options.agentConfig.runtimeInstructions ??
                      options.agentConfig.customInstructions,
                  )
                  .digest("hex"),
              },
            }
          : {}),
        ...(options.contextBox
          ? {
              contextBox: {
                id: options.contextBox.id,
                name: options.contextBox.name,
                revision: options.contextBox.revision,
              },
            }
          : {}),
        executionLocation: providerName === "ollama" ? "local" : "remote",
      };
      const baseline = createBaselineObserver({
        enabled: process.env.QTERMINAL_FRONT_OFFICE_METRICS !== "0",
        requestId: options.requestId,
        runId,
        conversationId: options.conversationId,
        providerId: providerName,
        modelId: request.model,
        requestLogger: options.requestLogger,
      });
      // Share one retry across loading, initial generation and answer repair.
      // The ChatService signal still owns the original absolute deadline.
      let generationStarted = false;
      const recoverTimeout = async (state, operation) => {
        try {
          return await operation();
        } catch (error) {
          if (
            !["MODEL_TIMEOUT", "REMOTE_SERVER_ERROR"].includes(error.code) ||
            options.signal?.aborted ||
            !options.signal ||
            diagnostics.timeoutRetryCount ||
            generationStarted ||
            error.details?.phase === "generation" ||
            (error.details?.retryAfterSeconds ?? 0) > 10
          )
            throw error;
          diagnostics.timeoutRetryCount = 1;
          options.requestLogger?.step("RETRY_SCHEDULED", {
            attempt: 2,
            errorCode: error.code,
          });
          diagnostics.attempt = 2;
          diagnostics.maxAttempts = 2;
          diagnostics.timeoutRetryPhase = error.details?.phase ?? state;
          options.onEvent?.({
            state,
            content: "",
            diagnostics: { ...diagnostics },
          });
          if (error.code === "REMOTE_SERVER_ERROR")
            await delay(
              Math.max(1000, (error.details?.retryAfterSeconds ?? 0) * 1000),
              undefined,
              { signal: options.signal },
            );
          options.signal.throwIfAborted();
          return await operation();
        }
      };
      const stage = (state) => {
        options.signal?.throwIfAborted();
        const terminalStage = {
          PREPARING_CONTEXT: "CONTEXT_PREPARING",
          MODEL_LOADING: "MODEL_PREPARING",
          REMOTE_CONNECTING: "MODEL_PREPARING",
          MODEL_READY: "MODEL_READY",
          GENERATING: "GENERATION_PREPARING",
          VALIDATING: "OUTPUT_VALIDATING",
          RECORDING: "STORAGE_WRITING",
        }[state];
        if (terminalStage) options.requestLogger?.step(terminalStage);
        const messages = {
          MODEL_LOADING: "Loading the selected model into memory.",
          MODEL_READY: "Model is ready.",
          GENERATING: "Generating from approved sources.",
          VALIDATING: "Checking the response.",
          RECORDING: "Saving the response and source provenance.",
          PREPARING_CONTEXT: "Preparing approved Brain Scope.",
          REMOTE_CONNECTING: "Connecting to the selected provider.",
        };
        options.onEvent?.({
          state,
          status: { message: messages[state] ?? state, progress: undefined },
        });
      };
      const measure = async (name, operation) => {
        const start = performance.now();
        try {
          return await operation();
        } finally {
          diagnostics[name] =
            (diagnostics[name] ?? 0) + Math.round(performance.now() - start);
        }
      };
      const ownerId = `model-run:${runId}`;
      const startedMs = now();
      const startedAt = new Date(startedMs).toISOString();
      let scope = null;
      let promptVersion = null;
      let sourcesAvailable = [];
      let sourcesActuallyRead = [];
      let datasetSession;
      const recordMetadata = () => {
        const trace = baseline.snapshot();
        if (trace) diagnostics.frontOffice = trace;
        return options.conversationId
          ? {
              schemaVersion: 2,
              conversationId: options.conversationId,
              requestId: options.requestId,
              contextIdentity: options.contextIdentity,
              settings,
              diagnostics,
            }
          : { schemaVersion: 1 };
      };
      try {
        stage("PREPARING_CONTEXT");
        scope = await measure("scopeMs", () =>
          prepareScope({
            ownerId,
            activeStationIds: request.activeStationIds,
            matchMode: request.matchMode,
          }),
        );
        const identity = contextIdentity(scope);
        if (
          options.contextIdentity &&
          identity.id !== options.contextIdentity.id
        )
          throw contextError(
            "Active Context changed. Start a new conversation.",
          );
        sourcesAvailable = Array.isArray(scope?.sources)
          ? scope.sources.map(sourceReference)
          : [];
        options.requestLogger?.step("CONTEXT_READY", {
          sourceCount: sourcesAvailable.length,
        });
        options.onEvent?.({
          state: "CONTEXT_READING",
          status: {
            message: "Reading approved sources.",
            context: { sourceCount: scope.sources.length },
            progress: {
              current: 0,
              total: scope.sources.length,
              unit: "sources",
            },
          },
        });
        const sources = [];
        for (const manifestSource of scope.sources) {
          options.signal?.throwIfAborted();
          options.requestLogger?.step("SOURCE_READING", {
            sourceIndex: sources.length + 1,
            sourceCount: scope.sources.length,
            sourceType: manifestSource.type,
          });

          const source = await measure("sourceReadMs", () =>
            readSource({
              ownerId,
              scopeId: scope.id,
              sourceId: manifestSource.id,
            }),
          );
          if (
            source.scopeId !== scope.id ||
            source.ownerId !== ownerId ||
            source.manifestVersion !== scope.manifestVersion ||
            source.sourceId !== manifestSource.id ||
            source.relativePath !== manifestSource.relativePath ||
            source.contentHash !== manifestSource.contentHash ||
            source.type !== manifestSource.type
          ) {
            throw contextError(
              "The controlled source read did not match the prepared Brain Scope manifest.",
              { sourceId: manifestSource.id },
            );
          }
          sources.push(source);
          options.requestLogger?.step("SOURCE_READ", {
            sourceIndex: sources.length,
            sourceCount: scope.sources.length,
            contentCharacters: source.content.length,
            sourceType: source.type,
          });
          sourcesActuallyRead.push(sourceReference(source));
          options.onEvent?.({
            state: "CONTEXT_READING",
            status: {
              message: "Checking source hashes.",
              progress: {
                current: sources.length,
                total: scope.sources.length,
                unit: "sources",
              },
            },
          });
        }
        const policySelection = selectRuntimeSources({
          sources,
          userMessage: request.userMessage,
          history: request.history,
          agentId: options.agentConfig?.id,
        });
        options.requestLogger?.step("POLICY_PREPARED", {
          sourceCount: policySelection.sources.length,
        });
        sources.splice(0, sources.length, ...policySelection.sources);
        diagnostics.compactedPolicySources = policySelection.compacted;
        const evidenceSources = sourcesActuallyRead.filter((source) =>
          sources.some((item) => item.sourceId === source.sourceId),
        );
        diagnostics.evidenceSourceIds = evidenceSources.map(
          (source) => source.sourceId,
        );
        if (sources.every((source) => !source.content.trim())) {
          const answer =
            "CONTEXT INSUFFICIENT\nInsufficient evidence in the active Context Box. The approved sources contain no readable text. Add more context or select a text-based source.";
          Object.assign(diagnostics, {
            contextInsufficient: true,
            evidence: "empty",
            modelExecuted: false,
          });
          const completedAt = new Date(now()).toISOString();
          const scopeRecord = {
            id: scope.id,
            mode: scope.mode,
            manifestVersion: scope.manifestVersion,
          };
          stage("RECORDING");
          baseline.finish("succeeded");
          await recordRun({
            ...recordMetadata(),
            runId,
            status: "succeeded",
            startedAt,
            completedAt,
            durationMs: Math.max(0, Date.parse(completedAt) - startedMs),
            scope: scopeRecord,
            provider: providerName,
            model: request.model,
            promptVersion: null,
            userMessage: request.userMessage,
            sourcesAvailable,
            sourcesActuallyRead,
            response: answer,
            finishReason: "stop",
            usage: null,
            error: null,
          });
          options.onEvent?.({ state: "CONTEXT_INSUFFICIENT", diagnostics });
          return {
            id: runId,
            provider: providerName,
            model: request.model,
            content: answer,
            sources: sourcesActuallyRead,
            scopeId: scope.id,
            scopeMode: scope.mode,
            scopeManifestVersion: scope.manifestVersion,
            promptVersion: null,
            createdAt: completedAt,
            finishReason: "stop",
            usage: null,
            diagnostics,
          };
        }
        options.onEvent?.({
          state: "CONTEXT_READY",
          status: {
            message: "Approved sources read and verified.",
            context: {
              sourceCount: sources.length,
              estimatedTokens: Math.ceil(
                sources.reduce(
                  (sum, source) => sum + source.content.length,
                  0,
                ) / 4,
              ),
            },
            progress: undefined,
          },
        });
        const csvSources = sources.filter((source) => source.type === "csv");
        if (csvSources.length) {
          if (
            csvSources.reduce(
              (sum, source) => sum + Buffer.byteLength(source.content),
              0,
            ) >
            50 * 1024 * 1024
          )
            throw new ModelRuntimeError(
              "MODEL_CONTEXT_TOO_LARGE",
              "CSV analysis supports up to 50 MB of combined approved CSV data. Select fewer or smaller datasets.",
            );
          datasetSession = createDatasetSession(options.signal);
          const profiles = await measure("datasetReadMs", () =>
            datasetSession.call("load", { sources: csvSources }),
          );
          for (const source of csvSources) {
            const profile = profiles.find(
              (item) => item.sourceId === source.sourceId,
            );
            source.content = JSON.stringify({
              kind: "dataset-profile",
              ...profile,
            });
          }
        }
        // Check source envelopes and question before model warm-up or analytical planning.
        // CSV has already been reduced to its explicit profile, never silently sliced.
        diagnostics.sourceBudget = sources.map((source) => ({
          relativePath: source.relativePath,
          estimatedTokens: Math.ceil(
            Buffer.byteLength(source.content, "utf8") / 3,
          ),
        }));
        const preflight = promptBuilder({
          policyHistory: request.history,
          customInstructions:
            options.agentConfig?.runtimeInstructions ??
            options.agentConfig?.customInstructions,
          agentId: options.agentConfig?.id,
          agentName: options.agentConfig?.displayName,
          configurationReferences: options.agentConfig?.configurationReferences,
          userMessage: request.userMessage,
          sources,
        });
        options.requestLogger?.step("BUDGET_CHECKING", {
          outputTokenCap: settings.outputLimit,
          contextWindow: settings.contextWindow,
        });
        const preflightBudget = budgetHistory(preflight.messages, [], settings);
        options.requestLogger?.step("BUDGET_CHECKED", {
          inputTokensEstimated:
            preflightBudget.diagnostics.estimatedPromptTokens,
          outputTokenCap: settings.outputLimit,
        });
        diagnostics.contextChanged = Boolean(options.contextChanged);
        diagnostics.preflightPromptTokens =
          preflightBudget.diagnostics.estimatedPromptTokens;
        if (options.prepareModel && typeof provider.prepare === "function") {
          stage(
            providerName === "ollama" ? "MODEL_LOADING" : "REMOTE_CONNECTING",
          );
          await measure("modelLoadMs", () =>
            recoverTimeout("MODEL_LOADING", () =>
              provider.prepare(request.model, settings, options.signal),
            ),
          );
          stage("MODEL_READY");
        }
        if (datasetSession) {
          stage("GENERATING");
          const previousAnalyses = [];
          for (const previous of (options.datasetHistory ?? []).slice(-2)) {
            if (previous.contextIdentityId !== identity.id) continue;
            let results;
            try {
              results = await datasetSession.call("query", {
                queries: previous.queries,
              });
            } catch (error) {
              options.signal?.throwIfAborted();
              if (error.code !== "MODEL_INVALID_REQUEST") throw error;
              // An older app may have accepted a now-unsupported query. Optional
              // memory must not prevent a new analysis with current validation.
              diagnostics.skippedDatasetHistory ??= [];
              diagnostics.skippedDatasetHistory.push({
                runId: previous.runId,
                reason: error.message,
              });
              continue;
            }
            const entry = {
              runId: previous.runId,
              question: previous.question,
              queries: previous.queries,
              results,
            };
            // Analytical memory is optional and bounded independently of source data.
            if (JSON.stringify([...previousAnalyses, entry]).length <= 6000)
              previousAnalyses.push(entry);
          }
          diagnostics.datasetHistory = previousAnalyses;
          for (const source of csvSources) {
            const previousResults = previousAnalyses.flatMap((entry) =>
              entry.results
                .filter((result) => result.sourceId === source.sourceId)
                .map((result) => ({ question: entry.question, result })),
            );
            if (previousResults.length)
              source.content = JSON.stringify({
                ...JSON.parse(source.content),
                previousResults,
              });
          }
          const results = await measure("datasetAnalysisMs", () =>
            planDataset({
              session: datasetSession,
              sources,
              model: request.model,
              settings,
              signal: options.signal,
              history: request.history,
              userMessage: request.userMessage,
              diagnostics,
              complete: (input) =>
                recoverTimeout("GENERATING", () =>
                  baseline.complete(
                    provider,
                    { ...input, id: runId, scope },
                    "dataset-planning",
                  ),
                ),
            }),
          );
          for (const source of csvSources)
            source.content = JSON.stringify({
              kind: "dataset-analysis",
              profile: JSON.parse(source.content),
              computedResults: results.filter(
                (result) => result.sourceId === source.sourceId,
              ),
              evidenceRule:
                "Computed results cover all matched rows before pagination. Samples are previews only. Cite the file, columns, filters and matched row count. Do not claim unsupported analyses or calculate unseen results. Explain nulls and any truncation.",
            });
          await datasetSession.close();
          datasetSession = null;
        }
        if (
          wantsStatistics(request.userMessage) &&
          (sources.some((source) => source.type !== "csv") ||
            /\d\s*[,;]|\b(?:mean|average|delta|difference|sum|change)\s+(?:of|between|from)\s*[+-]?\d/i.test(
              request.userMessage,
            ))
        ) {
          stage("GENERATING");
          diagnostics.statistics = await measure("statisticsMs", () =>
            planStatistics({
              sources,
              userMessage: request.userMessage,
              history: request.history,
              model: request.model,
              settings,
              signal: options.signal,
              complete: (input) =>
                recoverTimeout("GENERATING", () =>
                  baseline.complete(
                    provider,
                    { ...input, id: runId, scope },
                    "statistics-planning",
                  ),
                ),
            }),
          );
        }
        const base = promptBuilder({
          policyHistory: request.history,
          customInstructions:
            options.agentConfig?.runtimeInstructions ??
            options.agentConfig?.customInstructions,
          agentId: options.agentConfig?.id,
          agentName: options.agentConfig?.displayName,
          configurationReferences: options.agentConfig?.configurationReferences,
          userMessage: request.userMessage,
          sources,
          statistics: diagnostics.statistics,
        });
        const budget = budgetHistory(base.messages, request.history, settings);
        Object.assign(diagnostics, budget.diagnostics);
        diagnostics.droppedExchanges += options.earlierExchangesDropped ?? 0;
        diagnostics.includedExchanges = budget.history.length / 2;
        const prompt = promptBuilder({
          policyHistory: request.history,
          customInstructions:
            options.agentConfig?.runtimeInstructions ??
            options.agentConfig?.customInstructions,
          agentId: options.agentConfig?.id,
          agentName: options.agentConfig?.displayName,
          configurationReferences: options.agentConfig?.configurationReferences,
          userMessage: request.userMessage,
          history: budget.history,
          sources,
          statistics: diagnostics.statistics,
        });
        promptVersion = prompt.promptVersion;
        options.requestLogger?.step("PROMPT_READY", {
          historyMessages: budget.history.length,
          inputTokensEstimated: budget.diagnostics.estimatedPromptTokens,
          includedExchanges: diagnostics.includedExchanges,
          droppedExchanges: diagnostics.droppedExchanges,
        });
        diagnostics.runtimePolicy = {
          ...prompt.runtimePolicy,
          compactedPolicySources: policySelection.compacted,
          systemCharacters: prompt.messages[0].content.length,
          estimatedSystemTokens: Math.ceil(
            Buffer.byteLength(prompt.messages[0].content, "utf8") / 3,
          ),
        };
        options.onEvent?.({
          state: "CONTEXT_READY",
          status: {
            message: "Approved context is ready.",
            context: {
              sourceCount: sources.length,
              estimatedTokens: budget.diagnostics.estimatedPromptTokens,
            },
          },
        });
        stage("GENERATING");
        const generationStart = performance.now();
        const generate = (messages, answerRepair = false) =>
          recoverTimeout("GENERATING", () =>
            baseline.complete(
              provider,
              {
                id: runId,
                model: request.model,
                messages,
                scope,
                format: ANSWER_FORMAT,
                contextWindow: settings.contextWindow,
                settings,
                answerRepair,
                signal: options.signal,
                onGenerationStarted: () => {
                  generationStarted = true;
                },
                onContent: (raw) => {
                  generationStarted = true;
                  diagnostics.timeToFirstTokenMs ??= Math.round(
                    performance.now() - generationStart,
                  );
                  if (csvSources.length || diagnostics.statistics) return;
                  const content = answerPrefix(raw);
                  if (content)
                    options.onEvent?.({ state: "GENERATING", content });
                },
              },
              answerRepair ? "answer-repair" : "generation",
            ),
          );
        let response = await measure("generationMs", () =>
          generate(prompt.messages),
        );
        stage("VALIDATING");
        let answer;
        const validate = (response) => {
          const text = validateAnswer(
            response,
            request.userMessage,
            request.history,
            evidenceSources,
          );
          diagnostics.citedSourceIds =
            JSON.parse(response.content).citations ?? [];
          if (diagnostics.datasetAnalysis || diagnostics.statistics) {
            const validation = inspectDatasetAnswer(
              text,
              [
                ...(diagnostics.datasetAnalysis?.results ?? []),
                ...(diagnostics.statistics?.results ?? []).map((result) => ({
                  results: [
                    {
                      values: [...result.inputs, result.value, result.formula],
                    },
                  ],
                })),
                ...(diagnostics.datasetHistory ?? []).flatMap(
                  (entry) => entry.results,
                ),
              ],
              request.userMessage,
              sources
                .filter((source) => source.type !== "csv")
                .map((source) => source.content),
            );
            diagnostics.answerNumberValidation = {
              policy: validation.policy,
              calculations: validation.calculations,
            };
            return validation.answer;
          }
          return text;
        };
        try {
          answer = validate(response);
          options.requestLogger?.step("OUTPUT_VALIDATED", {
            contentCharacters: answer.length,
          });
        } catch (error) {
          options.requestLogger?.step(
            "OUTPUT_VALIDATION_FAILED",
            { errorCode: error.code },
            "error",
          );
          if (
            diagnostics.timeoutRetryCount ||
            ![
              "task_echo",
              "planning",
              "repeated_answer",
              "dataset_unsupported_number",
            ].includes(error.details?.reason)
          )
            throw error;
          // One bounded final-answer repair within the same authorized run. Never
          // append rejected content to conversation history or execute tools.
          diagnostics.validationRepairCount = 1;
          options.requestLogger?.step("ANSWER_REPAIR_STARTED", {
            attempt: 2,
            errorCode: error.code,
          });
          diagnostics.initialValidationFailure = error.details.reason;
          diagnostics.initialUsage = response.usage;
          options.onEvent?.({ state: "VALIDATING", content: "" });
          const correction =
            error.details.reason === "dataset_unsupported_number"
              ? `The previous answer contained unverified quantities or incorrect arithmetic. Unverified values: ${JSON.stringify(error.details.numbers ?? [])}. Unverified calculations: ${JSON.stringify(error.details.calculations ?? [])}. Use supplied evidence with accurate rounding or equivalent percentage notation. Additional basic arithmetic must be shown as a complete numeric equation using only supported inputs so the host can recompute it. Do not infer whole-dataset totals from samples, invent units or invent missing inputs. If the needed analysis is unavailable, state that limitation.`
              : error.details.reason === "repeated_answer"
                ? "The previous attempt copied an earlier answer to a different question. Answer the LAST user message directly from the approved source. Follow its requested count and format. Supply the requested facts or deliverable, not the earlier general summary."
                : "The previous response only repeated the task or described a plan. Produce the requested content itself now. Use concrete facts from the source and discussion. The answer must be the actual completed deliverable, not an instruction to create it.";
          const withCorrection = (messages) =>
            messages.map((message, index) =>
              index === 0
                ? {
                    ...message,
                    content: `${message.content}\nCORRECTION: ${correction}`,
                  }
                : message,
            );
          const repairBudget = budgetHistory(
            withCorrection(base.messages),
            request.history,
            settings,
          );
          diagnostics.repairEstimatedPromptTokens =
            repairBudget.diagnostics.estimatedPromptTokens;
          diagnostics.repairDroppedExchanges =
            repairBudget.diagnostics.droppedExchanges +
            (options.earlierExchangesDropped ?? 0);
          diagnostics.initialDroppedExchanges = diagnostics.droppedExchanges;
          diagnostics.droppedExchanges = diagnostics.repairDroppedExchanges;
          diagnostics.includedExchanges = repairBudget.history.length / 2;
          const repairedMessages = withCorrection(
            promptBuilder({
              policyHistory: request.history,
              customInstructions:
                options.agentConfig?.runtimeInstructions ??
                options.agentConfig?.customInstructions,
              agentId: options.agentConfig?.id,
              agentName: options.agentConfig?.displayName,
              configurationReferences:
                options.agentConfig?.configurationReferences,
              userMessage: request.userMessage,
              history: repairBudget.history,
              sources,
              statistics: diagnostics.statistics,
            }).messages,
          );
          stage("GENERATING");
          response = await measure("repairGenerationMs", () =>
            generate(repairedMessages, true),
          );
          stage("VALIDATING");
          answer = validate(response);
          options.requestLogger?.step("OUTPUT_VALIDATED", {
            contentCharacters: answer.length,
          });
        }
        if (response.diagnostics) diagnostics.provider = response.diagnostics;
        if (diagnostics.statistics?.results.length) {
          answer +=
            "\n\nCalculated locally:\n" +
            diagnostics.statistics.results
              .map(
                (result) =>
                  `${result.operation}(${result.inputs.join(", ")}) = ${result.value === null ? "undefined" : Number(result.value.toPrecision(12))}. Inputs: ${[...new Set(result.evidence.map((item) => `${JSON.stringify(item.file)}${item.page ? `, page ${item.page}` : ""}: ${JSON.stringify(item.quote)}`))].join("; ")}.`,
              )
              .join("\n");
        }
        // This is an explicit model abstention, not a retrieval confidence score.
        if (answer.startsWith("CONTEXT INSUFFICIENT"))
          diagnostics.contextInsufficient = true;
        if (answer.startsWith("LIMITED CONTEXT"))
          diagnostics.limitedContext = true;
        if (diagnostics.datasetAnalysis) {
          const analyses = [
            diagnostics.datasetAnalysis,
            ...(diagnostics.datasetHistory ?? []),
          ];
          const evidence = analyses.flatMap((analysis) =>
            analysis.results.map((result, index) => {
              const query = analysis.queries[index];
              const fields =
                query.metrics
                  ?.map((metric) => `${metric.op}(${metric.column || "rows"})`)
                  .join(", ") ||
                query.columns?.join(", ") ||
                "column profile";
              const operators = {
                eq: "=",
                ne: "≠",
                gt: ">",
                gte: "≥",
                lt: "<",
                lte: "≤",
                contains: "contains",
                is_missing: "is blank",
                not_missing: "is not blank",
              };
              const filters = query.filters?.length
                ? query.filters
                    .map(
                      (filter) =>
                        `${JSON.stringify(filter.column)} ${operators[filter.op]}${["is_missing", "not_missing"].includes(filter.op) ? "" : ` ${JSON.stringify(filter.value)}`}`,
                    )
                    .join(" AND ")
                : "none";
              const grouping = query.groupBy?.length
                ? `; grouped by ${query.groupBy.map((group) => `${JSON.stringify(group.column)}${group.unit && group.unit !== "value" ? ` (${group.unit})` : ""}`).join(", ")}`
                : "";
              const growth = query.growth
                ? `; growth of ${JSON.stringify(query.growth.metric)} from ${JSON.stringify(query.growth.from)} to ${JSON.stringify(query.growth.to)}`
                : "";
              return `${analysis.runId ? "Recomputed earlier analysis. " : ""}Source: ${JSON.stringify(result.sourceId)}; ${result.matchedRows}/${result.totalRows} rows matched; ${fields}; filters: ${filters}${grouping}${growth}${result.truncated ? "; result preview is paginated" : ""}.`;
            }),
          );
          answer += `\n\n${evidence.join("\n")}`;
        }
        const completedMs = now();
        const result = {
          ...response,
          id: runId,
          content: answer,
          sources: sourcesActuallyRead,
          scopeId: scope.id,
          scopeMode: scope.mode,
          scopeManifestVersion: scope.manifestVersion,
          promptVersion,
          diagnostics,
        };
        stage("RECORDING");
        baseline.finish("succeeded");
        await recordRun({
          ...recordMetadata(),
          runId,
          status: "succeeded",
          startedAt,
          completedAt: new Date(completedMs).toISOString(),
          durationMs: Math.max(0, completedMs - startedMs),
          scope: {
            id: scope.id,
            mode: scope.mode,
            manifestVersion: scope.manifestVersion,
          },
          provider: response.provider || providerName,
          model: response.model || request.model,
          promptVersion,
          userMessage: request.userMessage,
          sourcesAvailable,
          sourcesActuallyRead,
          response: answer,
          finishReason: response.finishReason,
          usage: response.usage ?? null,
          error: null,
        });
        return result;
      } catch (error) {
        options.requestLogger?.fail(error);
        if (
          error.code === "MODEL_CONTEXT_TOO_LARGE" &&
          diagnostics.sourceBudget
        ) {
          error.details = {
            ...error.details,
            sourceBudget: diagnostics.sourceBudget,
          };
          error.message +=
            " Source content estimates (UTF-8 bytes / 3, excluding envelopes): " +
            diagnostics.sourceBudget
              .map(
                (source) =>
                  `${source.relativePath}: ~${source.estimatedTokens} tokens`,
              )
              .join("; ") +
            ".";
        }
        if (options.signal?.aborted)
          error = new ModelRuntimeError(
            options.signal.reason?.code ?? "MODEL_CANCELLED",
            options.signal.reason?.message ?? "The response was stopped.",
          );
        const completedMs = now();
        const failure = serializeRunError(error);
        baseline.finish(
          failure.code === "MODEL_CANCELLED" ? "cancelled" : "failed",
          error,
        );
        try {
          await recordRun({
            ...recordMetadata(),
            runId,
            status:
              options.conversationId && failure.code === "MODEL_CANCELLED"
                ? "cancelled"
                : "failed",
            startedAt,
            completedAt: new Date(completedMs).toISOString(),
            durationMs: Math.max(0, completedMs - startedMs),
            scope: scope
              ? {
                  id: scope.id,
                  mode: scope.mode,
                  manifestVersion: scope.manifestVersion,
                }
              : null,
            provider: providerName,
            model: request.model,
            promptVersion,
            userMessage: request.userMessage,
            sourcesAvailable,
            sourcesActuallyRead,
            response: null,
            finishReason: null,
            usage: null,
            error: failure,
          });
        } catch (recordError) {
          throw new ModelRuntimeError(
            MODEL_ERROR_CODES.RUN_RECORD_FAILED,
            "The failed model execution could not be recorded.",
            {
              runId,
              originalError: failure,
              recordError: serializeRunError(recordError),
            },
          );
        }
        throw error;
      } finally {
        await datasetSession?.close();
      }
    },
  };
}

module.exports = {
  ANSWER_FORMAT,
  createContextOrchestrator,
  validateRequest,
};
