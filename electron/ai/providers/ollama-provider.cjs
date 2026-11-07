const crypto = require("node:crypto");
const { MODEL_ERROR_CODES, ModelRuntimeError } = require("../model-errors.cjs");
const { readChatStream } = require("./ollama-stream.cjs");

const DEFAULT_BASE_URL = "http://127.0.0.1:11434";
const LOCAL_HOSTS = new Set(["127.0.0.1", "localhost", "[::1]"]);

function validateBaseUrl(rawUrl) {
  let url;
  try {
    url = new URL(rawUrl);
  } catch {
    throw new ModelRuntimeError(
      MODEL_ERROR_CODES.INVALID_REQUEST,
      "Ollama endpoint is not a valid URL.",
      { field: "baseUrl" },
    );
  }
  if (
    url.protocol !== "http:" ||
    !LOCAL_HOSTS.has(url.hostname) ||
    url.username ||
    url.password ||
    url.search ||
    url.hash
  ) {
    throw new ModelRuntimeError(
      MODEL_ERROR_CODES.INVALID_REQUEST,
      "M7.1 only permits an unauthenticated local Ollama HTTP endpoint.",
      { endpoint: rawUrl },
    );
  }
  return url.origin;
}

function validateModelName(value) {
  if (
    typeof value !== "string" ||
    !value.trim() ||
    value.length > 200 ||
    /[\u0000-\u001f\u007f]/u.test(value)
  ) {
    throw new ModelRuntimeError(
      MODEL_ERROR_CODES.INVALID_REQUEST,
      "Model must be a non-empty local Ollama model name.",
      { field: "model" },
    );
  }
  return value.trim();
}

function validateMessages(value) {
  if (!Array.isArray(value) || !value.length || value.length > 100) {
    throw new ModelRuntimeError(
      MODEL_ERROR_CODES.INVALID_REQUEST,
      "Model messages must be a non-empty array of at most 100 entries.",
      { field: "messages" },
    );
  }
  return value.map((message, index) => {
    if (
      !message ||
      typeof message !== "object" ||
      Array.isArray(message) ||
      !["system", "user", "assistant"].includes(message.role) ||
      typeof message.content !== "string" ||
      !message.content ||
      message.content.length > 100_000
    ) {
      throw new ModelRuntimeError(
        MODEL_ERROR_CODES.INVALID_REQUEST,
        "A model message is malformed.",
        { field: `messages[${index}]` },
      );
    }
    return { role: message.role, content: message.content };
  });
}

function normalizeModel(value) {
  if (
    !value ||
    typeof value !== "object" ||
    typeof value.name !== "string" ||
    typeof value.size !== "number"
  ) {
    throw new ModelRuntimeError(
      MODEL_ERROR_CODES.INVALID_RESPONSE,
      "Ollama returned a malformed model record.",
    );
  }
  return {
    name: value.name,
    model: typeof value.model === "string" ? value.model : value.name,
    size: value.size,
    digest: typeof value.digest === "string" ? value.digest : "",
    modifiedAt:
      typeof value.modified_at === "string" ? value.modified_at : null,
    family:
      typeof value.details?.family === "string" ? value.details.family : null,
    parameterSize:
      typeof value.details?.parameter_size === "string"
        ? value.details.parameter_size
        : null,
    quantization:
      typeof value.details?.quantization_level === "string"
        ? value.details.quantization_level
        : null,
    contextLength:
      typeof value.details?.context_length === "number"
        ? value.details.context_length
        : null,
    capabilities: Array.isArray(value.capabilities)
      ? value.capabilities.filter((item) => typeof item === "string")
      : [],
  };
}

class OllamaProvider {
  constructor(options = {}) {
    this.baseUrl = validateBaseUrl(
      options.baseUrl || process.env.WONNYY_OLLAMA_URL || DEFAULT_BASE_URL,
    );
    this.fetch = options.fetchImpl || globalThis.fetch;
    this.statusTimeoutMs = options.statusTimeoutMs || 3_000;
    // A cold model load can take several minutes on CPU-bound machines.
    this.completionTimeoutMs = options.completionTimeoutMs || 300_000;
    if (typeof this.fetch !== "function")
      throw new ModelRuntimeError(
        MODEL_ERROR_CODES.NOT_INSTALLED,
        "This Electron runtime cannot connect to Ollama because fetch is unavailable.",
      );
  }

  async request(pathname, options = {}, timeoutMs = this.statusTimeoutMs) {
    const { onDiagnostic, maxResponseBytes, ...transportOptions } = options;
    const controller = new AbortController();
    const externalSignal = options.signal;
    let timedOut = false;
    const cancelRequest = () => controller.abort();
    if (externalSignal?.aborted) controller.abort();
    else
      externalSignal?.addEventListener("abort", cancelRequest, { once: true });
    const timeout = setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, timeoutMs);
    try {
      let response;
      try {
        onDiagnostic?.("HTTP_REQUEST_STARTED");
        response = await this.fetch(`${this.baseUrl}${pathname}`, {
          ...transportOptions,
          signal: controller.signal,
        });
        onDiagnostic?.("HTTP_RESPONSE_RECEIVED", {
          httpStatus: response.status,
        });
      } catch (error) {
        if (
          error?.name === "AbortError" &&
          !timedOut &&
          externalSignal?.aborted
        )
          throw new ModelRuntimeError(
            MODEL_ERROR_CODES.CANCELLED,
            "The current model request was stopped.",
          );
        if (error?.name === "AbortError")
          throw new ModelRuntimeError(
            MODEL_ERROR_CODES.TIMEOUT,
            "Ollama did not respond before the request timed out.",
            { endpoint: this.baseUrl, timeoutMs },
          );
        throw new ModelRuntimeError(
          MODEL_ERROR_CODES.OFFLINE,
          "Ollama is not reachable on this computer. Start Ollama and try again.",
          { endpoint: this.baseUrl },
        );
      }
      let body;
      try {
        body = maxResponseBytes
          ? await require("../engine-chat.cjs").readJson(response)
          : await response.json();
      } catch {
        if (externalSignal?.aborted)
          throw new ModelRuntimeError(
            MODEL_ERROR_CODES.CANCELLED,
            "The current model request was stopped.",
          );
        if (timedOut)
          throw new ModelRuntimeError(
            MODEL_ERROR_CODES.TIMEOUT,
            "Ollama timed out while reading the response.",
          );
        throw new ModelRuntimeError(
          MODEL_ERROR_CODES.INVALID_RESPONSE,
          "Ollama returned a response that was not valid JSON.",
          { status: response.status },
        );
      }
      if (!response.ok) {
        const providerMessage =
          typeof body?.error === "string"
            ? body.error
            : `Ollama request failed with HTTP ${response.status}.`;
        const missing =
          response.status === 404 &&
          /model.*(?:not found|missing)/iu.test(providerMessage);
        throw new ModelRuntimeError(
          missing ? MODEL_ERROR_CODES.NOT_FOUND : MODEL_ERROR_CODES.PROVIDER,
          providerMessage,
          { status: response.status },
        );
      }
      return body;
    } finally {
      clearTimeout(timeout);
      externalSignal?.removeEventListener("abort", cancelRequest);
    }
  }

  async pull(model, signal, onProgress) {
    const controller = new AbortController();
    const cancel = () => controller.abort();
    let timer;
    const touch = () => {
      clearTimeout(timer);
      timer = setTimeout(cancel, 120000);
    };
    if (signal.aborted) controller.abort();
    signal.addEventListener("abort", cancel, { once: true });
    const deadline = setTimeout(cancel, 2 * 60 * 60 * 1000);
    let reader;
    try {
      touch();
      const response = await this.fetch(this.baseUrl + "/api/pull", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: validateModelName(model), stream: true }),
        signal: controller.signal,
      });
      if (!response.ok || !response.body) throw new Error("Pull unavailable");
      reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8", { fatal: true });
      let buffer = "",
        complete = false;
      const consume = (line) => {
        if (!line.trim()) return;
        const event = JSON.parse(line);
        if (event.error || typeof event.status !== "string")
          throw new Error("Invalid pull event");
        complete ||= event.status === "success";
        const hasBytes =
          Number.isSafeInteger(event.total) &&
          event.total > 0 &&
          Number.isSafeInteger(event.completed) &&
          event.completed >= 0 &&
          event.completed <= event.total;
        onProgress({
          message: event.status.slice(0, 240),
          progress: hasBytes
            ? {
                current: event.completed,
                total: event.total,
                unit: "layer bytes",
              }
            : undefined,
        });
      };
      while (!complete) {
        const { value, done } = await reader.read();
        touch();
        buffer += done
          ? decoder.decode()
          : decoder.decode(value, { stream: true });
        if (buffer.length > 65536) throw new Error("Pull event too large");
        let newline;
        while ((newline = buffer.indexOf("\n")) >= 0) {
          consume(buffer.slice(0, newline));
          buffer = buffer.slice(newline + 1);
        }
        if (done) {
          consume(buffer);
          break;
        }
      }
      if (!complete) throw new Error("Download ended before completion");
    } finally {
      clearTimeout(timer);
      clearTimeout(deadline);
      signal.removeEventListener("abort", cancel);
      await reader?.cancel().catch(() => {});
      reader?.releaseLock();
    }
  }

  async listModels() {
    const body = await this.request("/api/tags");
    if (!Array.isArray(body?.models))
      throw new ModelRuntimeError(
        MODEL_ERROR_CODES.INVALID_RESPONSE,
        "Ollama model listing is malformed.",
      );
    return body.models
      .map(normalizeModel)
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  async describeModel(model) {
    const body = await this.request("/api/show", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: validateModelName(model) }),
    });
    const contextLength = Object.entries(body.model_info ?? {}).find(([key]) =>
      key.endsWith(".context_length"),
    )?.[1];
    return {
      capabilities: Array.isArray(body.capabilities) ? body.capabilities : [],
      contextLength: Number.isInteger(contextLength) ? contextLength : null,
    };
  }

  async prepare(model, settings, signal) {
    await this.request(
      "/api/generate",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal,
        body: JSON.stringify({
          model,
          prompt: "",
          stream: false,
          // Keep preparation resident long enough for the chat request even when
          // the user's preference is to unload immediately after the answer.
          keep_alive: `${Math.max(settings.keepAliveSeconds, 60)}s`,
          options: { num_ctx: settings.contextWindow },
        }),
      },
      settings.loadTimeoutMs,
    );
  }

  async streamChat(payload, request) {
    const controller = new AbortController();
    const signal = request.signal;
    let expired = false;
    let timer;
    let phase = "prompt";
    let timeoutMs;
    const cancel = () => controller.abort();
    const arm = (duration) => {
      clearTimeout(timer);
      timeoutMs = duration;
      timer = setTimeout(() => {
        expired = true;
        controller.abort();
      }, duration);
    };
    const activity = () => {
      phase = "generation";
      request.onGenerationStarted?.();
      arm(request.settings.inactivityTimeoutMs);
    };
    if (signal?.aborted) controller.abort();
    else signal?.addEventListener("abort", cancel, { once: true });
    // Prompt evaluation produces no tokens, even after the model is loaded.
    arm(
      Math.max(
        request.settings.loadTimeoutMs,
        request.settings.inactivityTimeoutMs,
      ),
    );
    try {
      request.onDiagnostic?.("HTTP_REQUEST_STARTED");
      const response = await this.fetch(`${this.baseUrl}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      request.onDiagnostic?.("HTTP_RESPONSE_RECEIVED", {
        httpStatus: response.status,
      });
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new ModelRuntimeError(
          response.status === 404 ? "MODEL_NOT_FOUND" : "PROVIDER_ERROR",
          body.error || `Ollama HTTP ${response.status}`,
        );
      }
      request.onDiagnostic?.("STREAM_STARTED", { wireStreaming: true });
      let first = true;
      const onContent = request.onDiagnostic
        ? (content) => {
            if (first) {
              first = false;
              request.onDiagnostic("FIRST_CONTENT_RECEIVED", {
                contentCharacters: content.length,
              });
            }
            request.onContent?.(content);
          }
        : request.onContent;
      const result = await readChatStream(response, onContent, activity);
      request.onDiagnostic?.("STREAM_COMPLETED", {
        contentCharacters: result.message.content.length,
        finishReason: result.done_reason ?? "unknown",
      });
      return result;
    } catch (error) {
      if (signal?.aborted)
        throw new ModelRuntimeError(
          "MODEL_CANCELLED",
          "The response was stopped.",
        );
      if (expired)
        throw new ModelRuntimeError(
          "MODEL_TIMEOUT",
          phase === "prompt"
            ? "Ollama took too long to process the prompt."
            : "Ollama stopped producing response data.",
          {
            phase,
            timeoutMs,
          },
        );
      if (error instanceof ModelRuntimeError) throw error;
      throw new ModelRuntimeError(
        error instanceof TypeError ? "MODEL_OFFLINE" : "MODEL_INVALID_RESPONSE",
        error.message,
      );
    } finally {
      clearTimeout(timer);
      signal?.removeEventListener("abort", cancel);
    }
  }

  async getStatus() {
    const checkedAt = new Date().toISOString();
    try {
      const models = await this.listModels();
      return {
        provider: "ollama",
        endpoint: this.baseUrl,
        online: true,
        checkedAt,
        models,
        error: null,
      };
    } catch (error) {
      if (!(error instanceof ModelRuntimeError)) throw error;
      return {
        provider: "ollama",
        endpoint: this.baseUrl,
        online: false,
        checkedAt,
        models: [],
        error: {
          code: error.code,
          message: error.message,
          details: error.details,
        },
      };
    }
  }

  async complete(rawRequest) {
    if (
      !rawRequest ||
      typeof rawRequest !== "object" ||
      Array.isArray(rawRequest)
    )
      throw new ModelRuntimeError(
        MODEL_ERROR_CODES.INVALID_REQUEST,
        "Model request must be an object.",
      );
    const model = validateModelName(rawRequest.model);
    const messages = validateMessages(rawRequest.messages);
    const contextWindow = rawRequest.contextWindow ?? 8_192;
    if (
      !Number.isInteger(contextWindow) ||
      contextWindow < 2_048 ||
      contextWindow > 32_768
    )
      throw new ModelRuntimeError(
        MODEL_ERROR_CODES.INVALID_REQUEST,
        "Model contextWindow must be an integer from 2048 through 32768.",
        { field: "contextWindow" },
      );
    const settings = rawRequest.settings;
    // Repair is still a direct-answer request; hidden reasoning can consume the
    // entire output allowance without producing anything the user can see.
    const repairThinking = false;
    const payload = {
      model,
      messages,
      // Transport streaming lets us observe progress even when the UI waits
      // for the complete answer. A total-response timer is not inactivity.
      stream: Boolean(settings),
      think: repairThinking,
      keep_alive: settings ? `${settings.keepAliveSeconds}s` : "5m",
      options: {
        temperature: settings?.temperature ?? 0,
        num_predict: settings?.outputLimit ?? 768,
        num_ctx: contextWindow,
      },
    };
    if (rawRequest.format !== undefined) {
      if (
        !rawRequest.format ||
        typeof rawRequest.format !== "object" ||
        Array.isArray(rawRequest.format) ||
        JSON.stringify(rawRequest.format).length > 20_000
      ) {
        throw new ModelRuntimeError(
          MODEL_ERROR_CODES.INVALID_REQUEST,
          "Structured output format must be a JSON schema object smaller than 20 KB.",
          { field: "format" },
        );
      }
      payload.format = rawRequest.format;
    }
    const body = payload.stream
      ? await this.streamChat(payload, {
          ...rawRequest,
          onContent: settings.streaming ? rawRequest.onContent : undefined,
        })
      : await this.request(
          "/api/chat",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            signal: rawRequest.signal,
            onDiagnostic: rawRequest.onDiagnostic,
          },
          settings?.inactivityTimeoutMs ?? this.completionTimeoutMs,
        );
    if (
      body?.done !== true ||
      typeof body?.message?.content !== "string" ||
      typeof body?.model !== "string"
    ) {
      throw new ModelRuntimeError(
        MODEL_ERROR_CODES.INVALID_RESPONSE,
        "Ollama returned an incomplete chat response.",
      );
    }
    rawRequest.onDiagnostic?.("RESPONSE_NORMALIZED", {
      contentCharacters: body.message.content.length,
    });
    return {
      id:
        typeof rawRequest.id === "string" && rawRequest.id
          ? rawRequest.id
          : crypto.randomUUID(),
      provider: "ollama",
      model: body.model,
      content: body.message.content,
      finishReason:
        typeof body.done_reason === "string" ? body.done_reason : "stop",
      createdAt:
        typeof body.created_at === "string"
          ? body.created_at
          : new Date().toISOString(),
      usage: {
        promptTokens: Number.isFinite(body.prompt_eval_count)
          ? body.prompt_eval_count
          : null,
        completionTokens: Number.isFinite(body.eval_count)
          ? body.eval_count
          : null,
        totalDurationNs: Number.isFinite(body.total_duration)
          ? body.total_duration
          : null,
      },
      sources: [],
      diagnostics: {
        reasoningEnabled: repairThinking,
        loadDurationNs: body.load_duration ?? null,
        promptEvalDurationNs: body.prompt_eval_duration ?? null,
        generationDurationNs: body.eval_duration ?? null,
      },
    };
  }

  async testModel(rawModel) {
    const model = validateModelName(rawModel);
    const models = await this.listModels();
    if (!models.some((item) => item.name === model || item.model === model)) {
      throw new ModelRuntimeError(
        MODEL_ERROR_CODES.NOT_FOUND,
        `Ollama model "${model}" is not installed. Pull it before running the Wonnyy test.`,
        { model },
      );
    }
    const response = await this.complete({
      id: crypto.randomUUID(),
      model,
      messages: [
        { role: "user", content: "Return the required connectivity status." },
      ],
      format: {
        type: "object",
        properties: { status: { type: "string", const: "WONNYY ONLINE" } },
        required: ["status"],
        additionalProperties: false,
      },
    });
    let status = null;
    try {
      const parsed = JSON.parse(response.content);
      if (
        parsed &&
        typeof parsed === "object" &&
        typeof parsed.status === "string"
      )
        status = parsed.status;
    } catch {}
    return {
      ...response,
      content: status ?? response.content,
      passed: status === "WONNYY ONLINE",
      expected: "WONNYY ONLINE",
    };
  }
}

module.exports = { DEFAULT_BASE_URL, OllamaProvider, validateBaseUrl };
