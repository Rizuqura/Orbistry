/** Terminal-only request tracing. Receives trusted stage names and allowlisted
 * scalar metadata; never accepts prompts, source paths, bodies or error messages.
 * Logging failures cannot change inference. No files, network or retention store. */
const { randomUUID } = require("node:crypto");
const { errorCode } = require("./llm-front-office/contracts.cjs");

const PHASES = {
  INPUT: [
    "REQUEST_RECEIVED",
    "REQUEST_VALIDATED",
    "ADMISSION_ACCEPTED",
    "CONVERSATION_LOADED",
    "REQUEST_REPLAYED",
  ],
  FRONT_OFFICE: [
    "FRONT_OFFICE_PATH",
    "BINDING_VALIDATING",
    "BINDING_VALIDATED",
    "MODEL_CHECKING",
    "MODEL_SELECTED",
    "CONTEXT_PREPARING",
    "CONTEXT_READY",
    "SOURCE_READING",
    "SOURCE_READ",
    "POLICY_PREPARED",
    "BUDGET_CHECKING",
    "BUDGET_CHECKED",
    "PROMPT_READY",
    "MODEL_PREPARING",
    "MODEL_READY",
    "GENERATION_PREPARING",
    "MODEL_CANDIDATES_EVALUATED",
    "ROUTING_REJECTED",
    "RETRY_SCHEDULED",
    "FALLBACK_SELECTED",
    "GATEWAY_REQUEST_STARTED",
  ],
  LLM: [
    "LLM_REQUEST_STARTED",
    "GENERATION_SETTINGS_APPLIED",
    "CREDENTIAL_CHECKING",
    "CREDENTIAL_READY",
    "HTTP_REQUEST_STARTED",
    "HTTP_RESPONSE_RECEIVED",
    "STREAM_STARTED",
    "REASONING_STARTED",
    "FIRST_CONTENT_RECEIVED",
    "STREAM_COMPLETED",
    "LLM_WAITING",
    "LLM_RESPONSE_RECEIVED",
  ],
  PROCESSING: [
    "RESPONSE_NORMALIZED",
    "OUTPUT_VALIDATING",
    "OUTPUT_VALIDATED",
    "OUTPUT_VALIDATION_FAILED",
    "ANSWER_REPAIR_STARTED",
    "BACKEND_GENERATION_COMPLETED",
  ],
  OUTPUT: [
    "STORAGE_WRITING",
    "RUN_SAVED",
    "CONVERSATION_SAVED",
    "CONVERSATION_SAVING",
    "RENDERER_EVENT_SENT",
    "RENDERER_EVENT_DISPATCHING",
    "RENDERER_EVENT_SKIPPED",
    "RESULT_RETURNED",
    "REQUEST_FAILED",
    "REQUEST_COMPLETED",
  ],
};
const stages = new Map(
  Object.entries(PHASES).flatMap(([phase, names]) =>
    names.map((name) => [name, phase]),
  ),
);
const counts = new Set([
  "messageCharacters",
  "sourceCount",
  "sourceIndex",
  "contentCharacters",
  "reasoningCharacters",
  "bytesReceived",
  "historyMessages",
  "includedExchanges",
  "droppedExchanges",
  "inputTokensEstimated",
  "inputTokensReported",
  "outputTokensReported",
  "outputTokenCap",
  "contextWindow",
  "headroomTokens",
  "candidateCount",
  "eligibleCount",
  "rejectedCount",
  "callIndex",
  "attempt",
  "deadlineMs",
  "idleTimeoutMs",
]);
const flags = new Set([
  "streaming",
  "wireStreaming",
  "thinkingDisabled",
  "fallback",
  "routerActive",
  "contextChanged",
  "usageKnown",
]);
const enums = {
  mode: ["agent", "experiment"],
  routingMode: ["manual", "auto", "agent"],
  transport: ["direct", "litellm", "local"],
  callType: [
    "generation",
    "answer-repair",
    "dataset-planning",
    "statistics-planning",
  ],
  sourceType: ["pdf", "markdown", "csv", "image", "text"],
  waitingFor: ["http_response", "visible_content", "completion"],
  finishReason: [
    "stop",
    "length",
    "content_filter",
    "STOP",
    "MAX_TOKENS",
    "unknown",
    "other",
  ],
};
const categories = new Set([
  "context",
  "output",
  "cost",
  "credential",
  "provider",
  "circuit",
  "parameter",
  "capability",
  "stale",
  "evidence",
  "other",
]);
const secretLike = /(?:sk-|nvapi-|AIza|ghp_|github_pat_|bearer)/i;
const safeId = (value) =>
  typeof value === "string" &&
  /^[A-Za-z0-9._:-]{1,128}$/.test(value) &&
  !secretLike.test(value)
    ? value
    : undefined;
const safeModel = (value) =>
  typeof value === "string" &&
  /^[~A-Za-z0-9][A-Za-z0-9._:/-]{0,199}$/.test(value) &&
  !secretLike.test(value)
    ? value
    : undefined;

/** Strip unknown metadata recursively by constructing a new flat record. Null
 * reported usage stays unknown. Error text/headers are never serialized. */
function safeMetadata(metadata = {}) {
  const result = {};
  for (const [key, value] of Object.entries(metadata ?? {})) {
    if (
      counts.has(key) &&
      (value === null || (Number.isSafeInteger(value) && value >= 0))
    )
      result[key] = value;
    else if (flags.has(key) && typeof value === "boolean") result[key] = value;
    else if (Object.hasOwn(enums, key) && enums[key].includes(value))
      result[key] = value;
    else if (
      key === "httpStatus" &&
      Number.isInteger(value) &&
      value >= 100 &&
      value <= 599
    )
      result[key] = value;
    else if (key === "errorCode")
      result[key] = errorCode.safeParse(value).success
        ? value
        : "MODEL_INTERNAL_ERROR";
    else if (["model", "actualModel"].includes(key) && safeModel(value))
      result[key] = value;
    else if (
      key === "provider" &&
      [
        "ollama",
        "nvidia",
        "openrouter",
        "gemini",
        "litellm",
        "unknown",
      ].includes(value)
    )
      result[key] = value;
    else if (key === "reasonCategories" && Array.isArray(value))
      result[key] = [...new Set(value.filter((v) => categories.has(v)))].slice(
        0,
        10,
      );
    else if (
      ["failedStage", "firstErrorStage"].includes(key) &&
      stages.has(value)
    )
      result[key] = value;
  }
  return result;
}

/** One shared logger per IPC request, through admission, provider and dispatch.
 * An injected writer/clock supports deterministic privacy and failure tests. */
function createRequestLogger({
  requestId,
  runId,
  mode = "agent",
  enabled = (process.env.ORBISTRY_REQUEST_LOGS ??
    process.env.QTERMINAL_REQUEST_LOGS) !== "0",
  write = (line) => process.stdout?.write(line + "\n"),
  clock = () => performance.now(),
  wallClock = Date.now,
  heartbeatMs = 15000,
} = {}) {
  const start = clock();
  const identity = {
    requestId: safeId(requestId) ?? randomUUID(),
    ...(safeId(runId) ? { runId } : {}),
  };
  let context = safeMetadata({ mode }),
    lastStage = "REQUEST_RECEIVED",
    failedStage,
    firstErrorStage,
    closed = false;
  const firstEvents = new Set(),
    timers = new Set();
  const step = (stage, metadata = {}, status = "ok") => {
    if (!enabled || closed || !stages.has(stage)) return;
    const safe = safeMetadata(metadata);
    if (["FIRST_CONTENT_RECEIVED", "REASONING_STARTED"].includes(stage)) {
      const key = `${stage}:${safe.callIndex ?? 0}`;
      if (firstEvents.has(key)) return;
      firstEvents.add(key);
    }
    const terminal = ["REQUEST_FAILED", "REQUEST_COMPLETED"].includes(stage);
    if (stage !== "LLM_WAITING" && !terminal) lastStage = stage;
    const result = ["ok", "error", "waiting", "cancelled", "skipped"].includes(
      status,
    )
      ? status
      : "error";
    if (result === "error" && !terminal) {
      firstErrorStage ??= stage;
      failedStage = stage;
    }
    try {
      write(
        "[Orbistry pipeline] " +
          JSON.stringify({
            time: new Date(wallClock()).toISOString(),
            ...identity,
            phase: stages.get(stage),
            stage,
            status: result,
            elapsedMs: Math.max(0, Math.round(clock() - start)),
            ...context,
            ...safe,
          }),
      );
    } catch {
      /* A closed terminal must never fail the user's request. */
    }
  };
  return {
    step,
    update(metadata) {
      if (safeId(metadata?.runId)) identity.runId = metadata.runId;
      context = { ...context, ...safeMetadata(metadata) };
    },
    fail(error, metadata = {}) {
      const stage = lastStage;
      step(
        stage,
        { ...metadata, errorCode: error?.code },
        error?.code === "MODEL_CANCELLED" ? "cancelled" : "error",
      );
    },
    waiting(metadata, state = () => "visible_content") {
      if (!enabled || closed) return () => {};
      const timer = setInterval(
        () =>
          step("LLM_WAITING", { ...metadata, waitingFor: state() }, "waiting"),
        heartbeatMs,
      );
      timer.unref?.();
      timers.add(timer);
      return () => {
        clearInterval(timer);
        timers.delete(timer);
      };
    },
    finish(status = "ok", error) {
      if (closed) return;
      if (error) step("REQUEST_FAILED", { errorCode: error.code }, status);
      step(
        "REQUEST_COMPLETED",
        {
          ...(error ? { errorCode: error.code } : {}),
          ...(failedStage ? { failedStage, firstErrorStage } : {}),
        },
        status,
      );
      closed = true;
      for (const timer of timers) clearInterval(timer);
      timers.clear();
    },
  };
}

module.exports = { createRequestLogger, safeMetadata };
