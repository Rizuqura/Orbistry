const { z } = require("zod");
const {
  LOCAL_CONTEXT_LIMIT,
  REMOTE_CONTEXT_LIMIT,
} = require("./context-limits.cjs");

const { parse } = require("../shared/validation.cjs");

// Retired provider identifiers remain readable in saved settings/conversations;
// this schema does not register adapters or expose credential operations.
const providerId = z.enum([
  "ollama",
  "gemini",
  "nvidia",
  "openrouter",
  "huggingface",
]);
const credentialInput = z
  .object({
    providerId: z.enum(["gemini", "nvidia", "openrouter", "litellm"]),
    apiKey: z
      .string()
      .trim()
      .min(10)
      .max(512)
      // Authorization keys (AQ.*) contain dots; legacy AIza keys do not.
      .regex(/^[A-Za-z0-9._-]+$/),
  })
  .strict();
const credentialProvider = z
  .object({
    providerId: z.enum(["gemini", "nvidia", "openrouter", "litellm"]),
  })
  .strict();
/** Validates supported credential operations with content-free errors; retired infrastructure credentials cannot be configured. */
function parseCredential(input) {
  return parse(
    credentialInput,
    input,
    "MODEL_INVALID_REQUEST",
    input?.providerId === "litellm"
      ? "Enter the complete local LiteLLM gateway key without quotes or spaces."
      : input?.providerId === "openrouter"
        ? "Enter the complete OpenRouter API key without quotes or spaces."
        : input?.providerId === "nvidia"
          ? "Enter the complete NVIDIA API key without quotes or spaces."
          : "Enter the complete Gemini API key from Google AI Studio, without quotes or spaces. Both AQ. authorization keys and legacy AIza keys are supported.",
  );
}
const settingsSchema = z
  .object({
    schemaVersion: z.literal(1),
    providerId,
    modelId: z.string().min(1).max(200).nullable(),
    contextWindow: z.number().int().min(2048).max(REMOTE_CONTEXT_LIMIT),
    outputLimit: z.number().int().min(128).max(8192),
    temperature: z.number().min(0).max(2),
    streaming: z.boolean(),
    keepAliveSeconds: z.number().int().min(0).max(3600),
    loadTimeoutMs: z.number().int().min(1000).max(1800000),
    inactivityTimeoutMs: z.number().int().min(1000).max(1800000),
    absoluteTimeoutMs: z.number().int().min(1000).max(1800000),
  })
  .strict()
  .refine((v) => v.outputLimit + 512 < v.contextWindow)
  .refine(
    (v) => v.providerId !== "ollama" || v.contextWindow <= LOCAL_CONTEXT_LIMIT,
  );
const geminiModel = z.object({
  name: z
    .string()
    .regex(/^models\/[A-Za-z0-9._-]+$/)
    .max(207),
  displayName: z.string().max(200).optional(),
  supportedGenerationMethods: z.array(z.string()),
  inputTokenLimit: z.number().int().positive().optional(),
  outputTokenLimit: z.number().int().positive().optional(),
  maxTemperature: z.number().nonnegative().optional(),
});
const geminiPage = z.object({
  models: z.array(geminiModel).max(1000).default([]),
  nextPageToken: z.string().max(4096).optional(),
});
const tokenCount = z.number().int().nonnegative().optional();
const geminiChunk = z.object({
  candidates: z
    .array(
      z.object({
        index: z.number().int().optional(),
        content: z
          .object({
            parts: z
              .array(
                z.object({
                  text: z.string().optional(),
                  thought: z.boolean().optional(),
                }),
              )
              .optional(),
          })
          .optional(),
        finishReason: z.string().optional(),
      }),
    )
    .max(1)
    .optional(),
  promptFeedback: z.object({ blockReason: z.string().optional() }).optional(),
  usageMetadata: z
    .object({ promptTokenCount: tokenCount, candidatesTokenCount: tokenCount })
    .optional(),
  modelVersion: z.string().max(200).optional(),
});
module.exports = {
  z,
  parse,
  providerId,
  credentialInput,
  parseCredential,
  credentialProvider,
  settingsSchema,
  geminiPage,
  geminiChunk,
};
