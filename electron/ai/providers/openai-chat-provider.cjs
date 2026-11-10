const { randomUUID } = require("node:crypto");
const {
  ModelRuntimeError,
  serializeModelError,
} = require("../model-errors.cjs");
const { z, parse, settingsSchema } = require("../schemas.cjs");
const BASE = "https://integrate.api.nvidia.com/v1/";
const LIMIT = 2 * 1024 * 1024;
const modelId = z
  .string()
  .min(1)
  .max(200)
  .regex(/^[A-Za-z0-9._-]+\/[A-Za-z0-9._-]+$/);
const catalog = z.object({
  data: z.array(z.object({ id: modelId })).max(5000),
});
const chunkSchema = z.object({
  model: z.string().max(200).optional(),
  choices: z
    .array(
      z.object({
        index: z.number().int().optional(),
        delta: z.object({
          content: z.string().nullable().optional(),
          reasoning: z.string().nullable().optional(),
          reasoning_content: z.string().nullable().optional(),
        }),
        finish_reason: z.string().nullable().optional(),
      }),
    )
    .max(1),
  usage: z
    .object({
      prompt_tokens: z.number().nonnegative().optional(),
      completion_tokens: z.number().nonnegative().optional(),
    })
    .nullable()
    .optional(),
});
const invalid = (label = "NVIDIA") =>
  new ModelRuntimeError(
    "MODEL_INVALID_RESPONSE",
    `${label} returned an incomplete or unsupported answer.`,
  );

function normalizeAnswer(content, label = "NVIDIA") {
  const text = content.trim();
  const fenced = /^```(?:json)?\s*\n([\s\S]*?)\n```$/i.exec(text);
  const candidate = fenced ? fenced[1].trim() : text;
  let value;
  try {
    value = JSON.parse(candidate);
  } catch {
    if (/^\{\s*"answer"\s*:/.test(candidate)) throw invalid(label);
  }
  // Some models still emit the old envelope. Unwrap only that exact shape;
  // user-requested JSON/code remains part of the answer, not a transport format.
  if (
    value &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    Object.keys(value).length === 1 &&
    typeof value.answer === "string"
  )
    return JSON.stringify({ answer: value.answer });
  return JSON.stringify({ answer: text });
}
function remoteError(status, retryAfter, label = "NVIDIA") {
  const code =
    status === 402
      ? "PAYMENT_REQUIRED"
      : status === 401 || status === 403
        ? "AUTH_INVALID"
        : status === 429
          ? "RATE_LIMITED"
          : status === 404
            ? "MODEL_UNAVAILABLE"
            : status >= 500
              ? "REMOTE_SERVER_ERROR"
              : "REMOTE_REQUEST_INVALID";
  const advice =
    code === "AUTH_INVALID"
      ? `Check the ${label} API key and account access.`
      : code === "RATE_LIMITED"
        ? `${label} quota or rate limit reached. Wait before retrying.`
        : code === "MODEL_UNAVAILABLE"
          ? `This ${label} model is unavailable. Refresh models.`
          : code === "PAYMENT_REQUIRED"
            ? `${label} credits are insufficient. Check your balance or key credit limit.`
            : `${label} could not complete this request. Retry or explicitly choose another model.`;
  const seconds = retryAfter
    ? /^\d+$/.test(retryAfter)
      ? Number(retryAfter)
      : Math.ceil((Date.parse(retryAfter) - Date.now()) / 1000)
    : NaN;
  return new ModelRuntimeError(code, advice + " (HTTP " + status + ")", {
    status,
    retryAfterSeconds: Number.isFinite(seconds)
      ? Math.max(0, Math.min(86400, seconds))
      : null,
  });
}
class OpenAIChatProvider {
  // Provider subclasses opt in only to documented model-specific wire options.
  // Unknown deployments and OpenRouter retain their existing request body.
  generationParameters(_model) {
    return {};
  }
  constructor({ credentials, fetchImpl = fetch }, configuration = {}) {
    this.providerId = configuration.providerId ?? "nvidia";
    this.label = configuration.label ?? "NVIDIA";
    this.modelSchema = configuration.modelSchema ?? modelId;
    this.consumeTrailingUsage = configuration.consumeTrailingUsage ?? false;
    this.maxMessages = configuration.maxMessages ?? 30;
    this.extraHeaders = configuration.headers ?? {};
    this.credentials = credentials;
    this.fetch = fetchImpl;
    this.location = "remote";
    this.baseUrl = configuration.baseUrl ?? BASE.slice(0, -1);
  }
  async request(
    resource,
    init,
    consume,
    { signal, timeoutMs = 15000, absoluteMs = timeoutMs, onDiagnostic } = {},
  ) {
    const controller = new AbortController();
    const expire = () =>
      controller.abort(
        new ModelRuntimeError(
          "REMOTE_TIMEOUT",
          `${this.label} did not respond within the configured time limit.`,
        ),
      );
    let idle;
    const touch = () => {
      clearTimeout(idle);
      idle = setTimeout(expire, timeoutMs);
    };
    const timer = setTimeout(expire, absoluteMs);
    const cancel = () => controller.abort(signal.reason);
    signal?.addEventListener("abort", cancel, { once: true });
    let response;
    try {
      signal?.throwIfAborted();
      touch();
      onDiagnostic?.("CREDENTIAL_CHECKING");
      const key = await this.credentials.get(this.providerId);
      onDiagnostic?.("CREDENTIAL_READY");
      controller.signal.throwIfAborted();
      controller.signal.throwIfAborted();
      touch();
      onDiagnostic?.("HTTP_REQUEST_STARTED");
      response = await this.fetch(this.baseUrl + "/" + resource, {
        ...init,
        redirect: "error",
        signal: controller.signal,
        headers: {
          ...this.extraHeaders,
          "Content-Type": "application/json",
          Authorization: "Bearer " + key,
        },
      });
      onDiagnostic?.("HTTP_RESPONSE_RECEIVED", { httpStatus: response.status });
      if (!response.ok)
        throw remoteError(
          response.status,
          response.headers.get("retry-after"),
          this.label,
        );
      return await consume(response, touch);
    } catch (error) {
      if (signal?.aborted)
        throw (
          signal.reason ??
          new ModelRuntimeError("MODEL_CANCELLED", "The response was stopped.")
        );
      if (controller.signal.aborted) throw controller.signal.reason;
      if (error instanceof ModelRuntimeError) throw error;
      throw new ModelRuntimeError(
        "PROVIDER_OFFLINE",
        `Could not connect to ${this.label}. Check your connection and retry.`,
      );
    } finally {
      controller.abort();
      clearTimeout(timer);
      clearTimeout(idle);
      signal?.removeEventListener("abort", cancel);
      await response?.body?.cancel().catch(() => {});
    }
  }
  async listModels({ signal } = {}) {
    return this.request(
      "models",
      {},
      async (response) => {
        let raw = "";
        let bytes = 0;
        const decoder = new TextDecoder("utf-8", { fatal: true });
        try {
          for await (const part of response.body) {
            bytes += part.byteLength;
            if (bytes > LIMIT) throw invalid(this.label);
            raw += decoder.decode(part, { stream: true });
          }
          raw += decoder.decode();
          const data = parse(
            catalog,
            JSON.parse(raw),
            "MODEL_INVALID_RESPONSE",
          );
          return [...new Set(data.data.map((m) => m.id))]
            .filter(
              (id) =>
                !/embed|rerank|retriev|reward|guard|safety|gliner|riva|transcri|diffusion|flux|synth|ocr|parse|segment|detect|vision|clip|dino/i.test(
                  id,
                ),
            )
            .map((name) => ({
              name,
              displayName: name,
              size: 0,
              capabilities: ["completion"],
              contextLength: null,
            }));
        } catch {
          throw invalid(this.label);
        }
      },
      { signal },
    );
  }
  async getStatus() {
    let status = {};
    try {
      status = await this.credentials.status(this.providerId);
      if (!status.configured)
        return {
          ...status,
          online: false,
          models: [],
          error: {
            code: "AUTH_REQUIRED",
            message: `Add a ${this.label} API key in Settings.`,
            details: {},
          },
        };
      return {
        ...status,
        online: true,
        models: await this.listModels(),
        error: null,
      };
    } catch (error) {
      return {
        ...status,
        online: false,
        models: [],
        error: serializeModelError(error),
      };
    }
  }
  async prepare(_model, _settings, signal) {
    signal?.throwIfAborted();
    await this.credentials.get(this.providerId);
  }
  async probe(input) {
    const model = parse(this.modelSchema, input);
    const started = Date.now();
    try {
      const { DEFAULTS } = require("../model-registry.cjs");
      const response = await this.complete({
        model,
        settings: {
          ...DEFAULTS,
          providerId: this.providerId,
          modelId: model,
          streaming: false,
          absoluteTimeoutMs: 30000,
        },
        messages: [
          {
            role: "system",
            content: "Reply exactly NVIDIA ONLINE. Do not include reasoning.",
          },
          { role: "user", content: "Run the connection check." },
        ],
      });
      let passed = false;
      try {
        passed =
          require("../response-validation.cjs").validateAnswer(response) ===
          "NVIDIA ONLINE";
      } catch {}
      return {
        model,
        passed,
        latencyMs: Date.now() - started,
        checkedAt: new Date().toISOString(),
        message: passed
          ? "Passed synthetic chat check"
          : "Responded, but did not pass the answer-format check",
      };
    } catch (error) {
      const safe = serializeModelError(error);
      return {
        model,
        passed: false,
        latencyMs: Date.now() - started,
        checkedAt: new Date().toISOString(),
        message: safe.message,
        code: safe.code,
      };
    }
  }
  async complete(request) {
    const model = parse(this.modelSchema, request.model);
    const settings = parse(settingsSchema, request.settings);
    const messages = parse(
      z
        .array(
          z
            .object({
              role: z.enum(["system", "user", "assistant"]),
              content: z.string().min(1).max(500000),
            })
            .strict(),
        )
        .min(2)
        .max(this.maxMessages),
      request.messages,
    );
    const started = performance.now();
    if (
      messages[0].role !== "system" ||
      messages.slice(1).some((message) => message.role === "system")
    )
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "A single system instruction must precede the conversation.",
      );
    // Hosted chat models need not generate Orbistry's internal transport envelope.
    // Normalize their final content here; keep the shared answer validator intact.
    const datasetPlan = Boolean(
      request.format?.properties?.queries ||
      request.format?.properties?.calculations,
    );
    messages[0].content += datasetPlan
      ? `\nReturn only a JSON object matching this schema, without Markdown fences: ${JSON.stringify(request.format)}`
      : "\nWrite the completed answer directly as text or Markdown. Do not wrap it in an answer JSON object. Do not include reasoning or planning. Orbistry handles response serialization.";
    request.onDiagnostic?.("GENERATION_SETTINGS_APPLIED", {
      wireStreaming: true,
      thinkingDisabled:
        this.generationParameters(model).chat_template_kwargs
          ?.enable_thinking === false
          ? true
          : undefined,
      outputTokenCap: settings.outputLimit,
      idleTimeoutMs: settings.inactivityTimeoutMs,
      deadlineMs: settings.absoluteTimeoutMs,
    });
    return this.request(
      "chat/completions",
      {
        method: "POST",
        body: JSON.stringify({
          model,
          messages,
          temperature: settings.temperature,
          max_tokens: settings.outputLimit,
          stream: true,
          ...this.generationParameters(model),
        }),
      },
      async (response, touch) => {
        if (
          !response.headers.get("content-type")?.includes("text/event-stream")
        )
          throw invalid(this.label);
        request.onDiagnostic?.("STREAM_STARTED", { wireStreaming: true });
        let buffer = "",
          data = [],
          content = "",
          finish = null,
          actualModel = model,
          usage = {},
          firstTokenMs = null,
          bytes = 0,
          streamDone = false;
        let reasoningCharacters = 0;
        const decoder = new TextDecoder("utf-8", { fatal: true });
        const event = () => {
          if (!data.length) return;
          const raw = data.join("\n");
          data = [];
          if (raw === "[DONE]") {
            streamDone = true;
            return;
          }
          let value;
          const parsed = (() => {
            try {
              return JSON.parse(raw);
            } catch {
              throw invalid(this.label);
            }
          })();
          if (parsed?.error)
            throw remoteError(
              Number(parsed.error.code) || 500,
              null,
              this.label,
            );
          try {
            value = parse(chunkSchema, parsed, "MODEL_INVALID_RESPONSE");
          } catch {
            throw invalid(this.label);
          }
          const choice = value.choices[0];
          if (choice?.index && choice.index !== 0) throw invalid(this.label);
          // Count activity, never retain or forward hidden reasoning to the UI.
          const reasoning =
            choice?.delta.reasoning_content ?? choice?.delta.reasoning ?? "";
          if (reasoning && !reasoningCharacters)
            request.onDiagnostic?.("REASONING_STARTED", {
              reasoningCharacters: reasoning.length,
            });
          reasoningCharacters += reasoning.length;
          if (choice?.delta.content) {
            if (finish) throw invalid(this.label);
            if (!content)
              request.onDiagnostic?.("FIRST_CONTENT_RECEIVED", {
                contentCharacters: choice.delta.content.length,
              });
            request.onGenerationStarted?.();
            content += choice.delta.content;
            // Separate reasoning fields are discarded. Inline reasoning is rejected.
            if (/<\/?think(?:ing)?>/i.test(content)) throw invalid(this.label);
            firstTokenMs ??= Math.round(performance.now() - started);
            touch();
            // Hold envelopes/code and possible inline reasoning until complete.
            // Ordinary text is serialized for the existing renderer contract.
            if (settings.streaming && !/[{<`]/.test(content))
              request.onContent?.(JSON.stringify({ answer: content }));
          }
          if (choice?.finish_reason) finish = choice.finish_reason;
          if (value.model) actualModel = value.model;
          if (value.usage) usage = value.usage;
        };
        const reader = response.body.getReader();
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) {
              try {
                buffer += decoder.decode();
              } catch {
                throw invalid(this.label);
              }
              break;
            }
            bytes += value.byteLength;
            if (bytes > LIMIT) throw invalid(this.label);
            // Reasoning/heartbeat bytes are network activity too. The absolute
            // request deadline remains unchanged even while the idle timer resets.
            touch();
            try {
              buffer += decoder.decode(value, { stream: true });
            } catch {
              throw invalid(this.label);
            }
            let index;
            while ((index = buffer.indexOf("\n")) !== -1) {
              const line = buffer.slice(0, index).replace(/\r$/, "");
              buffer = buffer.slice(index + 1);
              if (!line) event();
              else if (line.startsWith("data:"))
                data.push(line.slice(5).replace(/^ /, ""));
            }
            if (streamDone || (finish && !this.consumeTrailingUsage)) break;
          }
          request.onDiagnostic?.("STREAM_COMPLETED", {
            contentCharacters: content.length,
            reasoningCharacters,
            bytesReceived: bytes,
            finishReason: finish ?? "unknown",
          });
          if (finish === "length")
            throw new ModelRuntimeError(
              "MODEL_INVALID_RESPONSE",
              !content.trim() && reasoningCharacters
                ? `${this.label} used the output allowance for internal reasoning before producing an answer. This does not establish an input-context overflow. Check this model's thinking configuration.`
                : `${this.label} reached the output limit before finishing. Increase the output limit or ask for a shorter answer.`,
              {
                reason: "truncated",
                visibleCharacters: content.length,
                reasoningCharacters,
              },
            );
          if (finish !== "stop" || !content.trim()) throw invalid(this.label);
          const normalized = datasetPlan
            ? content.trim()
            : normalizeAnswer(content, this.label);
          request.onDiagnostic?.("RESPONSE_NORMALIZED", {
            contentCharacters: normalized.length,
          });
          request.onGenerationStarted?.();
          if (settings.streaming) request.onContent?.(normalized);
          return {
            id: request.id ?? randomUUID(),
            provider: this.providerId,
            model: actualModel,
            content: normalized,
            finishReason: "stop",
            createdAt: new Date().toISOString(),
            sources: [],
            usage: {
              promptTokens: usage.prompt_tokens ?? null,
              completionTokens: usage.completion_tokens ?? null,
              totalDurationNs: Math.round((performance.now() - started) * 1e6),
            },
            diagnostics: {
              executionLocation: "remote",
              requestedModel: model,
              firstTokenMs,
              reasoningCharacters,
            },
          };
        } finally {
          await reader.cancel().catch(() => {});
          reader.releaseLock();
        }
      },
      {
        signal: request.signal,
        timeoutMs: settings.inactivityTimeoutMs,
        absoluteMs: settings.absoluteTimeoutMs,
        onDiagnostic: request.onDiagnostic,
      },
    );
  }
}
module.exports = { OpenAIChatProvider, remoteError };
