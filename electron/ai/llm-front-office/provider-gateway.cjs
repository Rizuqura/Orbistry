/** Purpose: provider-neutral experiment transport, no agent prompt translation or retries.
 * Inputs: text messages/generation settings/AbortSignal; outputs: normalized content/usage/finish.
 * Dependencies: existing secure HTTP request adapter; SSE parser below. Knobs: direct or loopback LiteLLM.
 * Failures: safe transport/schema errors, no raw provider body. Owner: backend. */
const { OpenAIChatProvider } = require("../providers/openai-chat-provider.cjs");
const { ModelRuntimeError } = require("../model-errors.cjs");
const {
  z,
  parse,
  modelId,
  validateConfig,
} = require("./experiment-contracts.cjs");
const MAX_STREAM_BYTES = 4 * 1024 * 1024;
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
          refusal: z.string().nullable().optional(),
          tool_calls: z.unknown().optional(),
        }),
        finish_reason: z.string().nullable().optional(),
      }),
    )
    .max(1),
  usage: z
    .object({
      prompt_tokens: z.number().int().nonnegative().optional(),
      completion_tokens: z.number().int().nonnegative().optional(),
      completion_tokens_details: z
        .object({ reasoning_tokens: z.number().int().nonnegative().optional() })
        .optional(),
    })
    .nullable()
    .optional(),
});
const invalid = () =>
  new ModelRuntimeError(
    "MODEL_INVALID_RESPONSE",
    "The provider returned an invalid or incomplete experimental stream.",
  );

/** Parse SSE across arbitrary boundaries, comments and trailing usage; callbacks contain cumulative visible text. */
async function consumeStream(
  response,
  touch,
  request,
  providerId,
  requestedModel,
) {
  if (!response.headers.get("content-type")?.includes("text/event-stream"))
    throw invalid();
  request.onStage?.("STREAM_STARTED", "ok");
  request.onDiagnostic?.("STREAM_STARTED", { wireStreaming: true });
  const start = performance.now();
  const decoder = new TextDecoder("utf-8", { fatal: true });
  let buffer = "",
    data = [],
    content = "",
    finishReason = null,
    bytes = 0,
    doneEvent = false,
    usage = null,
    actualModel = null,
    firstTokenMs = null,
    refusal = false;
  let reasoningCharacters = 0;
  const event = () => {
    if (!data.length) return;
    const raw = data.join("\n");
    data = [];
    if (raw === "[DONE]") {
      doneEvent = true;
      return;
    }
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      throw invalid();
    }
    if (parsed.error)
      throw new ModelRuntimeError(
        "REMOTE_SERVER_ERROR",
        "The provider reported a stream error. Retry explicitly if any text was received.",
      );
    const chunk = parse(chunkSchema, parsed, "MODEL_INVALID_RESPONSE");
    const choice = chunk.choices[0];
    const reasoning =
      choice?.delta.reasoning_content ?? choice?.delta.reasoning ?? "";
    if (reasoning && !reasoningCharacters)
      request.onDiagnostic?.("REASONING_STARTED", {
        reasoningCharacters: reasoning.length,
      });
    reasoningCharacters += reasoning.length;
    if ((choice?.index && choice.index !== 0) || choice?.delta.tool_calls)
      throw invalid();
    if (choice?.delta.refusal) refusal = true;
    if (choice?.delta.content) {
      if (finishReason) throw invalid();
      if (!content) {
        request.onStage?.("FIRST_CONTENT_RECEIVED", "ok", {
          contentCharacters: choice.delta.content.length,
        });
        request.onDiagnostic?.("FIRST_CONTENT_RECEIVED", {
          contentCharacters: choice.delta.content.length,
        });
      }
      content += choice.delta.content;
      firstTokenMs ??= Math.round(performance.now() - start);
      request.onGenerationStarted?.();
      request.onContent?.(content);
    }
    if (choice?.finish_reason) finishReason = choice.finish_reason;
    if (chunk.usage) usage = chunk.usage;
    if (chunk.model && modelId.safeParse(chunk.model).success)
      actualModel = chunk.model;
  };
  const reader = response.body.getReader();
  try {
    while (!doneEvent) {
      request.signal?.throwIfAborted();
      const { done, value } = await reader.read();
      if (done) {
        buffer += decoder.decode();
        break;
      }
      bytes += value.byteLength;
      if (bytes > MAX_STREAM_BYTES) throw invalid();
      touch();
      buffer += decoder.decode(value, { stream: true });
      let index;
      while ((index = buffer.indexOf("\n")) !== -1) {
        const line = buffer.slice(0, index).replace(/\r$/, "");
        buffer = buffer.slice(index + 1);
        if (!line) {
          event();
          if (doneEvent) break;
        } else if (line.startsWith("data:"))
          data.push(line.slice(5).replace(/^ /, ""));
      }
    }
    if (!doneEvent) {
      if (buffer.startsWith("data:")) data.push(buffer.slice(5).trimStart());
      event();
    }
    if (!finishReason) throw invalid();
    request.onDiagnostic?.("STREAM_COMPLETED", {
      bytesReceived: bytes,
      contentCharacters: content.length,
      reasoningCharacters,
      finishReason,
    });
    return {
      provider: providerId,
      model: actualModel ?? requestedModel,
      content,
      finishReason: refusal ? "content_filter" : finishReason,
      usage: {
        promptTokens: usage?.prompt_tokens ?? null,
        completionTokens: usage?.completion_tokens ?? null,
        totalDurationNs: Math.round((performance.now() - start) * 1000000),
      },
      reasoningTokens:
        usage?.completion_tokens_details?.reasoning_tokens ?? null,
      diagnostics: { firstTokenMs },
    };
  } catch (error) {
    if (error instanceof ModelRuntimeError || request.signal?.aborted)
      throw error;
    throw invalid();
  } finally {
    await reader.cancel().catch(() => {});
    reader.releaseLock();
  }
}

/** Consume a bounded JSON completion when streaming is disabled. No artificial
 * content callback/TTFT is generated; the final conversation renders the result. */
async function consumeCompletion(
  response,
  touch,
  request,
  providerId,
  requestedModel,
) {
  const started = performance.now();
  let raw = "",
    bytes = 0;
  const decoder = new TextDecoder("utf-8", { fatal: true });
  try {
    for await (const part of response.body) {
      bytes += part.byteLength;
      if (bytes > MAX_STREAM_BYTES) throw invalid();
      touch();
      raw += decoder.decode(part, { stream: true });
    }
    raw += decoder.decode();
    const schema = z.object({
      model: z.string().max(200).optional(),
      choices: z
        .array(
          z.object({
            message: z.object({
              content: z
                .union([
                  z.string(),
                  z.array(
                    z.object({ type: z.string(), text: z.string().optional() }),
                  ),
                ])
                .nullable()
                .optional(),
              refusal: z.string().nullable().optional(),
              reasoning: z.string().nullable().optional(),
              reasoning_content: z.string().nullable().optional(),
              tool_calls: z.unknown().optional(),
            }),
            finish_reason: z.string().nullable().optional(),
          }),
        )
        .min(1)
        .max(1),
      usage: chunkSchema.shape.usage,
    });
    const data = parse(schema, JSON.parse(raw), "MODEL_INVALID_RESPONSE");
    const choice = data.choices[0];
    const reasoning =
      choice.message.reasoning_content ?? choice.message.reasoning ?? "";
    if (reasoning)
      request.onDiagnostic?.("REASONING_STARTED", {
        reasoningCharacters: reasoning.length,
      });
    if (choice.message.tool_calls) throw invalid();
    const parts = choice.message.content;
    const content =
      typeof parts === "string"
        ? parts
        : Array.isArray(parts)
          ? parts
              .filter((p) => p.type === "text")
              .map((p) => p.text ?? "")
              .join("")
          : "";
    if (content) {
      request.onStage?.("FIRST_CONTENT_RECEIVED", "buffered", {
        contentCharacters: content.length,
      });
      request.onDiagnostic?.("FIRST_CONTENT_RECEIVED", {
        contentCharacters: content.length,
      });
    }
    return {
      provider: providerId,
      model:
        data.model && modelId.safeParse(data.model).success
          ? data.model
          : requestedModel,
      content,
      finishReason: choice.message.refusal
        ? "content_filter"
        : (choice.finish_reason ?? "unknown"),
      usage: {
        promptTokens: data.usage?.prompt_tokens ?? null,
        completionTokens: data.usage?.completion_tokens ?? null,
        totalDurationNs: Math.round((performance.now() - started) * 1000000),
      },
      reasoningTokens:
        data.usage?.completion_tokens_details?.reasoning_tokens ?? null,
      diagnostics: { firstTokenMs: null },
    };
  } catch (error) {
    if (error instanceof ModelRuntimeError || request.signal?.aborted)
      throw error;
    throw invalid();
  }
}

/** Create an LLMClient for the explicitly permitted endpoint; provider keys stay in the main process. */
function createLLMClient({ model, transport, config, registry, credentials }) {
  config = validateConfig(config);
  if (transport === "litellm" && !config.gateway.enabled)
    throw new ModelRuntimeError(
      "MODEL_INVALID_REQUEST",
      "Enable the authenticated local LiteLLM gateway first.",
    );
  const adapter =
    transport === "litellm"
      ? new OpenAIChatProvider(
          { credentials },
          {
            providerId: "litellm",
            label: "LiteLLM",
            baseUrl: config.gateway.baseUrl,
          },
        )
      : registry.providerFor(model.providerId);
  const wireModel =
    transport === "litellm"
      ? `${model.providerId === "nvidia" ? "nvidia_nim" : "openrouter"}/${model.modelId}`
      : model.modelId;
  return {
    /** Perform exactly one inference call with identical A/B messages and generation options. */
    async complete(request) {
      const g = config.generation;
      // Provider catalogs may advertise only the canonical completion-cap name.
      // Preserve the cap using that supported wire keyword, never drop it.
      const outputParameter =
        model.supportedParameters?.includes("max_completion_tokens") &&
        !model.supportedParameters.includes("max_tokens")
          ? "max_completion_tokens"
          : "max_tokens";
      const body = {
        model: wireModel,
        messages: request.messages,
        temperature: g.temperature,
        [outputParameter]: g.maxOutputTokens,
        stream: g.streaming,
        ...(transport === "direct"
          ? adapter.generationParameters?.(model.modelId)
          : {}),
        ...(g.format === "json"
          ? {
              response_format: g.jsonSchema
                ? {
                    type: "json_schema",
                    json_schema: {
                      name: "qterminal_output",
                      strict: true,
                      schema: g.jsonSchema,
                    },
                  }
                : { type: "json_object" },
            }
          : {}),
      };
      request.onStage?.("GATEWAY_REQUEST_STARTED", "ok");
      request.onDiagnostic?.("GATEWAY_REQUEST_STARTED", { transport });
      request.onDiagnostic?.("GENERATION_SETTINGS_APPLIED", {
        wireStreaming: g.streaming,
        outputTokenCap: g.maxOutputTokens,
        thinkingDisabled:
          body.chat_template_kwargs?.enable_thinking === false
            ? true
            : undefined,
      });
      let received = false;
      try {
        const result = await adapter.request(
          "chat/completions",
          { method: "POST", body: JSON.stringify(body) },
          (response, touch) => {
            received = true;
            request.onStage?.("PROVIDER_RESPONSE_RECEIVED", "ok", {
              httpStatus: response.status,
            });
            return (g.streaming ? consumeStream : consumeCompletion)(
              response,
              touch,
              request,
              model.providerId,
              model.modelId,
            );
          },
          {
            signal: request.signal,
            timeoutMs: config.reliability.deadlineMs,
            absoluteMs: config.reliability.deadlineMs,
            onDiagnostic: request.onDiagnostic,
          },
        );
        request.onStage?.("RESPONSE_NORMALIZED", "ok", {
          contentCharacters: result.content.length,
        });
        request.onDiagnostic?.("RESPONSE_NORMALIZED", {
          contentCharacters: result.content.length,
        });
        return result;
      } catch (error) {
        request.onDiagnostic?.(
          "RESPONSE_NORMALIZED",
          { errorCode: error?.code },
          "error",
        );
        request.onStage?.(
          received ? "RESPONSE_NORMALIZED" : "PROVIDER_RESPONSE_RECEIVED",
          "error",
          { errorCode: error?.code, httpStatus: error?.details?.status },
        );
        throw error;
      }
    },
  };
}
/** Authenticated, loopback-only liveness check; no provider inference or process startup. */
async function gatewayHealth(config, credentials) {
  validateConfig(config);
  if (!config.gateway.enabled)
    return {
      status: "disabled",
      pinnedVersion: config.gateway.version,
      versionVerified: false,
    };
  const adapter = new OpenAIChatProvider(
    { credentials },
    {
      providerId: "litellm",
      label: "LiteLLM",
      baseUrl: config.gateway.baseUrl.replace(/\/v1$/, ""),
    },
  );
  await adapter.request("health/liveliness", {}, async () => true, {
    timeoutMs: 3000,
  });
  return {
    status: "reachable",
    pinnedVersion: config.gateway.version,
    versionVerified: false,
  };
}
module.exports = {
  createLLMClient,
  consumeStream,
  consumeCompletion,
  gatewayHealth,
};
