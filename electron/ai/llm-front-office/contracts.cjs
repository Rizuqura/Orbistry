/**
 * Purpose: validate the allowlisted, content-free baseline metrics contract.
 * Inputs/outputs: untrusted metrics -> a new validated metrics object.
 * Dependencies: existing Zod; no provider, network or storage access.
 * Failure modes: generic TypeError, without echoing rejected input.
 * Tuning knobs: none; schema changes require a version review. Owner: backend.
 */
const { z } = require("zod");
const { MODEL_ERROR_CODES } = require("../model-errors.cjs");

const providerId = z.enum([
  "ollama",
  "gemini",
  "openrouter",
  "nvidia",
  "huggingface",
  "unknown",
]);
const identity = z
  .string()
  .max(200)
  .regex(/^~?[A-Za-z0-9][A-Za-z0-9._:/-]*$/);
const count = z.number().int().nonnegative().max(Number.MAX_SAFE_INTEGER);
const routingId = z
  .string()
  .min(1)
  .max(240)
  .regex(/^(openrouter|nvidia):[~A-Za-z0-9][A-Za-z0-9._:/-]*$/);
const duration = z.number().finite().nonnegative();
const stageName = z.enum([
  "REQUEST_RECEIVED",
  "REQUEST_VALIDATED",
  "MODEL_CANDIDATES_EVALUATED",
  "MODEL_SELECTED",
  "GATEWAY_REQUEST_STARTED",
  "PROVIDER_RESPONSE_RECEIVED",
  "STREAM_STARTED",
  "FIRST_CONTENT_RECEIVED",
  "RESPONSE_NORMALIZED",
  "OUTPUT_VALIDATED",
  "FRONTEND_RESPONSE_DELIVERED",
  "REQUEST_COMPLETED",
]);
const status = z.enum(["running", "succeeded", "failed", "cancelled"]);
const errorCode = z.enum([
  ...new Set(Object.values(MODEL_ERROR_CODES)),
  "AUTH_REQUIRED",
  "AUTH_INVALID",
  "AUTH_STORAGE_UNAVAILABLE",
  "RATE_LIMITED",
  "PAYMENT_REQUIRED",
  "PROVIDER_OFFLINE",
  "REMOTE_TIMEOUT",
  "REMOTE_SERVER_ERROR",
  "REMOTE_REQUEST_INVALID",
  "REMOTE_CONTENT_BLOCKED",
  "MODEL_UNAVAILABLE",
]);
const finishReason = z.enum([
  "stop",
  "length",
  "content_filter",
  "tool_calls",
  "function_call",
  "other",
]);

// Zod's default object behavior strips extra fields at every level. Export
// callers cannot smuggle prompts, headers or raw errors through this contract.
const callSchema = z.object({
  index: count.positive(),
  startedAt: z.iso.datetime().optional(),
  phase: z.enum([
    "generation",
    "answer-repair",
    "dataset-planning",
    "statistics-planning",
  ]),
  requestedModelId: identity,
  actualModelId: identity.nullable(),
  actualProviderId: providerId.nullable(),
  estimatedInputTokens: count.nullable(),
  estimateMethod: z.literal("utf8-bytes/3 + framing"),
  estimateBoundary: z.literal("before-provider-translation"),
  outputTokenCap: count.nullable(),
  reportedPromptTokens: count.nullable(),
  reportedCompletionTokens: count.nullable(),
  durationMs: duration,
  firstContentMs: duration.nullable(),
  adapterFirstTokenMs: duration.nullable(),
  streamingRequested: z.boolean(),
  contentCallbackObserved: z.boolean(),
  generationStarted: z.boolean(),
  status,
  finishReason: finishReason.nullable(),
  errorCode: errorCode.nullable(),
  estimatedCostUsd: z.number().finite().nonnegative().nullable().optional(),
  costSource: z
    .object({
      url: z.string().url(),
      checkedAt: z.iso.datetime(),
      kind: z.enum(["provider-catalog", "local-override"]),
    })
    .nullable()
    .optional(),
});

const traceSchema = z.object({
  stages: z
    .array(
      z.object({
        requestId: identity,
        timestamp: z.iso.datetime(),
        stage: stageName,
        elapsedMs: duration,
        status: z.enum(["ok", "error", "skipped", "bypassed", "buffered"]),
        provider: providerId.optional(),
        model: identity.optional(),
        errorCode: errorCode.optional(),
        httpStatus: z.number().int().min(100).max(599).optional(),
        contentCharacters: count.optional(),
        candidateCount: count.optional(),
      }),
    )
    .max(128)
    .optional(),
  failedStage: stageName.optional(),
  schemaVersion: z.literal(1),
  agentId: identity.optional(),
  mode: z.enum(["existing-agent-baseline", "experiment"]),
  requestId: identity,
  runId: identity,
  sessionPseudonym: z
    .string()
    .regex(/^[a-f0-9]{64}$/)
    .nullable(),
  startedAt: z.iso.datetime(),
  completedAt: z.iso.datetime().nullable(),
  durationMs: duration,
  timingBoundary: z.enum([
    "orchestrator-through-validation-before-persistence",
    "accepted-service-through-validation-before-persistence",
  ]),
  providerId,
  requestedModelId: identity,
  deploymentAlias: z.enum([
    "ollama:default",
    "gemini:default",
    "openrouter:default",
    "nvidia:default",
    "huggingface:default",
    "unknown:default",
  ]),
  selectionReason: z.enum([
    "existing-manual-selection-preserved",
    "manual-experiment",
    "capability-router",
  ]),
  status,
  errorCode: errorCode.nullable(),
  providerCallCount: count,
  usageCoverage: z.enum(["none", "partial", "complete"]),
  reportedPromptTokens: count.nullable(),
  reportedCompletionTokens: count.nullable(),
  estimatedCostUsd: z.number().finite().nonnegative().nullable(),
  costSource: z
    .object({
      url: z.string().url(),
      checkedAt: z.iso.datetime(),
      kind: z.enum(["provider-catalog", "local-override"]),
    })
    .nullable(),
  routing: z
    .object({
      selectedDeploymentId: routingId,
      eligibleDeploymentIds: z.array(routingId),
      selectionReasons: z.array(z.string().max(500)),
      warnings: z.array(z.string().max(500)),
      fallbackUsed: z.boolean(),
    })
    .optional(),
  estimatedInputTokens: z.number().int().nonnegative().nullable().optional(),
  historyMessages: z.number().int().nonnegative().optional(),
  formatPass: z.boolean().nullable().optional(),
  rejections: z
    .array(
      z.object({
        deploymentId: routingId,
        reasons: z.array(z.string().max(500)),
      }),
    )
    .optional(),
  costSources: z
    .array(
      z.object({
        url: z.string().url(),
        checkedAt: z.iso.datetime(),
        kind: z.enum(["provider-catalog", "local-override"]),
      }),
    )
    .optional(),
  calls: z.array(callSchema),
});

/** Validate/clone a trace for export; reject malformed values without input leaks. */
function validateTrace(value) {
  const result = traceSchema.safeParse(value);
  if (!result.success)
    throw new TypeError("Invalid front-office metrics trace.");
  return result.data;
}

module.exports = {
  validateTrace,
  providerId,
  identity,
  errorCode,
  finishReason,
  stageName,
};
