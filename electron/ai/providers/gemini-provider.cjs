const { randomUUID } = require("node:crypto");
const {
  ModelRuntimeError,
  serializeModelError,
} = require("../model-errors.cjs");
const {
  z,
  parse,
  geminiPage,
  geminiChunk,
  settingsSchema,
} = require("../schemas.cjs");

const BASE_URL = "https://generativelanguage.googleapis.com/v1beta/";
const LIMIT = 2 * 1024 * 1024;
const modelName = z
  .string()
  .max(200)
  .regex(/^[A-Za-z0-9._-]+$/);
const messagesSchema = z
  .array(
    z
      .object({
        role: z.enum(["system", "user", "assistant"]),
        content: z.string().min(1).max(500000),
      })
      .strict(),
  )
  .min(2)
  .max(30);
const invalid = () =>
  new ModelRuntimeError(
    "MODEL_INVALID_RESPONSE",
    "Gemini returned an incomplete or invalid response.",
  );

function remoteError(status, retryAfter) {
  const codes = {
    400: [
      "REMOTE_REQUEST_INVALID",
      "Gemini rejected the request. Check model capabilities and API key restrictions.",
    ],
    401: [
      "AUTH_INVALID",
      "Gemini rejected the API key. Replace it in Settings.",
    ],
    403: [
      "AUTH_INVALID",
      "Gemini denied access. Check the API key, project permissions, and regional availability.",
    ],
    404: [
      "MODEL_UNAVAILABLE",
      "This Gemini model is unavailable. Refresh models and choose another.",
    ],
    429: [
      "RATE_LIMITED",
      "Gemini quota or rate limit reached. Wait, then retry or explicitly select another model.",
    ],
    503: [
      "REMOTE_SERVER_ERROR",
      "Google could not serve the selected Gemini model (HTTP 503). Retry shortly, or choose another available model in Settings.",
    ],
  };
  const [code, message] =
    codes[status] ??
    (status >= 500
      ? [
          "REMOTE_SERVER_ERROR",
          `Google returned a server error (HTTP ${status}). Retry shortly, or choose another available model in Settings.`,
        ]
      : ["REMOTE_REQUEST_INVALID", "Gemini rejected this request."]);
  let seconds = Number(retryAfter);
  if (retryAfter && !Number.isFinite(seconds))
    seconds = Math.ceil((Date.parse(retryAfter) - Date.now()) / 1000);
  const retryAfterSeconds =
    retryAfter && Number.isFinite(seconds)
      ? Math.max(0, Math.min(seconds, 86400))
      : null;
  return new ModelRuntimeError(
    code,
    message +
      (retryAfterSeconds !== null
        ? ` Retry after ${retryAfterSeconds} seconds.`
        : ""),
    { status, retryAfterSeconds },
  );
}

class GeminiProvider {
  constructor({ credentials, fetchImpl = fetch }) {
    this.credentials = credentials;
    this.fetch = fetchImpl;
    this.location = "remote";
  }
  async request(
    resource,
    init,
    operation,
    { signal, timeoutMs = 15000, absoluteMs = timeoutMs, onDiagnostic } = {},
  ) {
    const controller = new AbortController();
    const timeout = () =>
      controller.abort(
        new ModelRuntimeError(
          "REMOTE_TIMEOUT",
          "Gemini stopped responding within the configured time limit.",
        ),
      );
    let idle;
    const touch = () => {
      clearTimeout(idle);
      idle = setTimeout(timeout, timeoutMs);
    };
    const absolute = setTimeout(timeout, absoluteMs);
    const cancel = () => controller.abort(signal.reason);
    signal?.addEventListener("abort", cancel, { once: true });
    let response;
    try {
      signal?.throwIfAborted();
      touch();
      onDiagnostic?.("CREDENTIAL_CHECKING");
      const apiKey = await this.credentials.get();
      onDiagnostic?.("CREDENTIAL_READY");
      controller.signal.throwIfAborted();
      controller.signal.throwIfAborted();
      onDiagnostic?.("HTTP_REQUEST_STARTED");
      response = await this.fetch(BASE_URL + resource, {
        ...init,
        redirect: "error",
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
      });
      onDiagnostic?.("HTTP_RESPONSE_RECEIVED", { httpStatus: response.status });
      if (!response.ok) {
        if (response.status === 400) {
          let body = "";
          for await (const chunk of response.body) {
            body += Buffer.from(chunk).toString("utf8");
            if (body.length > 16384) break;
          }
          // Google's invalid API key response uses HTTP 400, not always 401.
          if (/API_KEY_INVALID|API key not valid/i.test(body))
            throw remoteError(401, null);
        }
        throw remoteError(response.status, response.headers.get("retry-after"));
      }
      return await operation(response, touch);
    } catch (error) {
      if (signal?.aborted)
        throw (
          signal.reason ??
          new ModelRuntimeError("MODEL_CANCELLED", "The response was stopped.")
        );
      if (controller.signal.aborted) throw controller.signal.reason;
      if (error instanceof ModelRuntimeError) throw error;
      // Neither provider bodies nor transport errors may leak keys or source text.
      throw new ModelRuntimeError(
        "PROVIDER_OFFLINE",
        "Could not connect to Gemini. Check your internet connection and retry.",
      );
    } finally {
      controller.abort();
      clearTimeout(idle);
      clearTimeout(absolute);
      signal?.removeEventListener("abort", cancel);
      await response?.body?.cancel().catch(() => {});
    }
  }
  async listModels({ signal } = {}) {
    const models = [];
    let token;
    const seen = new Set();
    for (let page = 0; page < 10; page++) {
      const data = await this.request(
        `models?pageSize=1000${token ? `&pageToken=${encodeURIComponent(token)}` : ""}`,
        {},
        async (response) => {
          let raw = "";
          const decoder = new TextDecoder("utf-8", { fatal: true });
          for await (const chunk of response.body) {
            try {
              raw += decoder.decode(chunk, { stream: true });
            } catch {
              throw invalid();
            }
            if (Buffer.byteLength(raw) > LIMIT) throw invalid();
          }
          try {
            raw += decoder.decode();
          } catch {
            throw invalid();
          }
          try {
            return parse(geminiPage, JSON.parse(raw), "MODEL_INVALID_RESPONSE");
          } catch {
            throw invalid();
          }
        },
        { signal },
      );
      for (const model of data.models) {
        const name = model.name.slice(7);
        // This slice supports text chat with structured output, not image/audio generation.
        if (
          !name.startsWith("gemini-") ||
          /image|tts|audio|live|robotics|computer-use/i.test(name) ||
          !model.supportedGenerationMethods.includes("generateContent") ||
          !model.inputTokenLimit ||
          !model.outputTokenLimit
        )
          continue;
        models.push({
          name,
          displayName: model.displayName ?? name,
          size: 0,
          capabilities: ["completion"],
          contextLength: model.inputTokenLimit,
          outputLimit: model.outputTokenLimit,
          maxTemperature: model.maxTemperature ?? 2,
        });
      }
      if (!data.nextPageToken) return models;
      if (seen.has(data.nextPageToken)) throw invalid();
      token = data.nextPageToken;
      seen.add(token);
    }
    throw invalid();
  }
  async getStatus() {
    let credential = {};
    try {
      credential = await this.credentials.status();
      if (!credential.configured)
        return {
          online: false,
          models: [],
          error: {
            code: "AUTH_REQUIRED",
            message: "Add a Gemini API key to discover online models.",
            details: {},
          },
          ...credential,
        };
      return {
        online: true,
        models: await this.listModels(),
        error: null,
        ...credential,
      };
    } catch (error) {
      return {
        online: false,
        models: [],
        error: serializeModelError(error),
        ...credential,
      };
    }
  }
  async prepare(_model, _settings, signal) {
    signal?.throwIfAborted();
    await this.credentials.get();
  }
  async complete(request) {
    const model = parse(modelName, request.model);
    const messages = parse(messagesSchema, request.messages);
    const settings = parse(settingsSchema, request.settings);
    if (
      messages[0].role !== "system" ||
      messages.slice(1).some((m) => m.role === "system")
    )
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "A single system instruction must precede the conversation.",
      );
    const { isPlanFormat } = require("../dataset-planner.cjs");
    const { isStatisticsFormat } = require("../statistics.cjs");
    const format =
      isPlanFormat(request.format) || isStatisticsFormat(request.format)
        ? request.format
        : parse(
            z
              .object({
                type: z.literal("object"),
                properties: z
                  .object({
                    citations: z
                      .object({
                        type: z.literal("array"),
                        items: z.object({ type: z.literal("string") }).strict(),
                        maxItems: z.literal(32),
                      })
                      .strict()
                      .optional(),
                    answer: z
                      .object({
                        type: z.literal("string"),
                        description: z.string().max(1000).optional(),
                      })
                      .strict(),
                  })
                  .strict(),
                required: z.tuple([z.literal("answer")]),
                additionalProperties: z.literal(false),
              })
              .strict(),
            request.format,
          );
    const contents = [];
    for (const message of messages.slice(1)) {
      const role = message.role === "assistant" ? "model" : "user";
      if (contents.at(-1)?.role === role)
        contents.at(-1).parts.push({ text: message.content });
      else contents.push({ role, parts: [{ text: message.content }] });
    }
    const payload = {
      systemInstruction: {
        parts: messages
          .filter((m) => m.role === "system")
          .map((m) => ({ text: m.content })),
      },
      contents,
      generationConfig: {
        temperature: settings.temperature,
        maxOutputTokens: settings.outputLimit,
        candidateCount: 1,
        responseMimeType: "application/json",
        responseJsonSchema: format,
      },
    };
    const started = performance.now();
    return this.request(
      `models/${model}:streamGenerateContent?alt=sse`,
      { method: "POST", body: JSON.stringify(payload) },
      async (response, touch) => {
        if (
          !response.headers.get("content-type")?.includes("text/event-stream")
        )
          throw invalid();
        request.onDiagnostic?.("STREAM_STARTED", { wireStreaming: true });
        const reader = response.body.getReader();
        const decoder = new TextDecoder("utf-8", { fatal: true });
        let buffer = "",
          data = [],
          content = "",
          finishReason = null,
          modelVersion = model,
          firstTokenMs = null,
          usage = {};
        let totalBytes = 0,
          reasoningCharacters = 0;
        const event = () => {
          if (!data.length) return;
          let value;
          try {
            value = parse(
              geminiChunk,
              JSON.parse(data.join("\n")),
              "MODEL_INVALID_RESPONSE",
            );
          } catch {
            throw invalid();
          }
          data = [];
          if (value.promptFeedback?.blockReason)
            throw new ModelRuntimeError(
              "REMOTE_CONTENT_BLOCKED",
              "Gemini blocked this request under its content policy.",
            );
          const candidate = value.candidates?.[0];
          if (candidate?.index && candidate.index !== 0) throw invalid();
          for (const part of candidate?.content?.parts ?? []) {
            if (part.thought) {
              if (!reasoningCharacters && part.text)
                request.onDiagnostic?.("REASONING_STARTED", {
                  reasoningCharacters: part.text.length,
                });
              reasoningCharacters += part.text?.length ?? 0;
              continue;
            }
            if (!part.text) continue;
            if (finishReason) throw invalid();
            if (!content)
              request.onDiagnostic?.("FIRST_CONTENT_RECEIVED", {
                contentCharacters: part.text.length,
              });
            content += part.text;
            firstTokenMs ??= Math.round(performance.now() - started);
            touch(); // Thinking/keep-alive traffic does not extend answer inactivity.
            request.onGenerationStarted?.();
            if (settings.streaming) request.onContent?.(content);
          }
          if (candidate?.finishReason) finishReason = candidate.finishReason;
          if (value.modelVersion) modelVersion = value.modelVersion;
          if (value.usageMetadata) usage = value.usageMetadata;
        };
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) {
              try {
                buffer += decoder.decode();
              } catch {
                throw invalid();
              }
              break;
            }
            totalBytes += value.byteLength;
            if (totalBytes > LIMIT) throw invalid();
            try {
              buffer += decoder.decode(value, { stream: true });
            } catch {
              throw invalid();
            }
            let newline;
            while ((newline = buffer.indexOf("\n")) !== -1) {
              const line = buffer.slice(0, newline).replace(/\r$/, "");
              buffer = buffer.slice(newline + 1);
              if (!line) event();
              else if (line.startsWith("data:"))
                data.push(line.slice(5).replace(/^ /, ""));
            }
            if (finishReason) break;
          }
          request.onDiagnostic?.("STREAM_COMPLETED", {
            bytesReceived: totalBytes,
            contentCharacters: content.length,
            reasoningCharacters,
            finishReason: finishReason ?? "unknown",
          });
          if (!finishReason) throw invalid();
          if (finishReason !== "STOP") {
            if (finishReason === "MAX_TOKENS")
              throw new ModelRuntimeError(
                "MODEL_INVALID_RESPONSE",
                "Gemini reached the output limit. Increase it or request a shorter answer.",
                { reason: "truncated" },
              );
            throw new ModelRuntimeError(
              "REMOTE_CONTENT_BLOCKED",
              "Gemini could not complete this answer under its content policy.",
            );
          }
          if (!content.trim()) throw invalid();
          request.onDiagnostic?.("RESPONSE_NORMALIZED", {
            contentCharacters: content.length,
          });
          return {
            id: request.id ?? randomUUID(),
            provider: "gemini",
            model: modelVersion,
            content,
            finishReason: "stop",
            createdAt: new Date().toISOString(),
            sources: [],
            usage: {
              promptTokens: usage.promptTokenCount ?? null,
              completionTokens: usage.candidatesTokenCount ?? null,
              totalDurationNs: Math.round((performance.now() - started) * 1e6),
            },
            diagnostics: {
              executionLocation: "remote",
              requestedModel: model,
              firstTokenMs,
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
module.exports = { GeminiProvider, remoteError };
