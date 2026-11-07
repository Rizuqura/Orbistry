// Native provider tool selection. No prose/JSON-in-text is ever executed.
const { z, parse, settingsSchema } = require("./schemas.cjs");
const { ModelRuntimeError } = require("./model-errors.cjs");
const { argumentsSchema } = require("./chronoz-adapter.cjs");
const TOOL_NAME = "chronoz_get_report"; // Wire-safe alias for chronoz.get_report.
const tool = {
  type: "function",
  function: {
    name: TOOL_NAME,
    description:
      "Retrieve an existing CHronoZ monthly macroeconomic research PDF. Never acquires data or publishes. Omit month for the latest scheduled issue. Returns a verified PDF attachment; PARTIAL is a usable research status.",
    parameters: {
      type: "object",
      properties: {
        month: {
          type: "string",
          pattern: "^(19|20|21)[0-9]{2}-(0[1-9]|1[0-2])$",
          description:
            "Requested issue month YYYY-MM. Omit for latest; do not invent a year.",
        },
      },
      additionalProperties: false,
    },
  },
};
const system =
  "You are Orbistry's report retrieval assistant. Use the native chronoz_get_report function when the user asks to retrieve/open/send an existing CHronoZ macro research report, including follow-up requests. Do not call it for unrelated questions or for interpreting research. If the requested month is ambiguous, ask for clarification rather than guessing. No documents or report text are available. Do not claim you have fetched a report without a real function call. Only existing reports can be retrieved; no acquisition, commands, paths, credentials, publication or other functions are allowed.";
function invalid(
  message = "The selected model returned an invalid native engine tool call. No engine was executed.",
) {
  throw new ModelRuntimeError("MODEL_INVALID_RESPONSE", message);
}
async function readJson(response, touch = () => {}) {
  const chunks = [];
  let size = 0;
  for await (const chunk of response.body) {
    size += chunk.byteLength;
    if (size > 65536)
      invalid("Native tool response exceeded 64 KiB. No engine was executed.");
    chunks.push(chunk);
    touch();
  }
  try {
    return JSON.parse(
      new TextDecoder("utf-8", { fatal: true }).decode(Buffer.concat(chunks)),
    );
  } catch {
    invalid();
  }
}
function engineNode(profile) {
  const graph = profile?.construction?.active;
  return graph?.nodes.find(
    (n) =>
      n.kind === "Engine" &&
      n.config.engineId === "chronoz" &&
      graph.edges.some(
        (e) =>
          e.from === n.id &&
          graph.nodes.some(
            (target) => target.id === e.to && target.kind === "LLM",
          ),
      ),
  );
}
async function selectTool(
  provider,
  providerId,
  {
    model,
    settings: rawSettings,
    question,
    history = [],
    signal,
    onDiagnostic,
  },
) {
  const started = Date.now();
  const settings = parse(settingsSchema, rawSettings);
  const cap = settings.outputLimit;
  const messages = [
    { role: "system", content: system },
    ...history,
    { role: "user", content: question },
  ];
  parse(
    z
      .array(
        z
          .object({
            role: z.enum(["system", "user", "assistant"]),
            content: z.string().min(1).max(50000),
          })
          .strict(),
      )
      .min(2)
      .max(26),
    messages,
  );
  if (
    Math.ceil(JSON.stringify({ messages, tool }).length / 3) + cap >
    settings.contextWindow
  )
    throw new ModelRuntimeError(
      "MODEL_CONTEXT_TOO_LARGE",
      "Engine chat exceeds the selected context budget. Start a new Engine chat or shorten the request.",
    );
  signal?.throwIfAborted();
  const transport = {
    signal,
    timeoutMs: settings.inactivityTimeoutMs,
    absoluteMs: settings.absoluteTimeoutMs,
    onDiagnostic,
  };
  let data, calls, finish, usage;
  try {
    if (["openrouter", "nvidia"].includes(providerId)) {
      data = await provider.request(
        "chat/completions",
        {
          method: "POST",
          body: JSON.stringify({
            model,
            messages,
            tools: [tool],
            tool_choice: "auto",
            parallel_tool_calls: false,
            stream: false,
            temperature: settings.temperature,
            max_tokens: cap,
            ...provider.generationParameters(model),
          }),
        },
        readJson,
        transport,
      );
      if (data.error || data.choices?.length !== 1) invalid();
      const choice = data.choices[0];
      finish = choice.finish_reason;
      if (finish === "length")
        invalid(
          "The model reached its output limit during native tool selection. Raise the output limit or choose another tool-capable model. No engine was executed.",
        );
      if (choice.message?.role !== "assistant") invalid();
      calls = choice.message.tool_calls ?? [];
      if (finish !== (calls.length ? "tool_calls" : "stop")) invalid();
      usage = data.usage;
    } else if (providerId === "gemini") {
      data = await provider.request(
        `models/${encodeURIComponent(model)}:generateContent`,
        {
          method: "POST",
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: system }] },
            contents: messages.slice(1).map((m) => ({
              role: m.role === "assistant" ? "model" : "user",
              parts: [{ text: m.content }],
            })),
            tools: [
              {
                functionDeclarations: [
                  {
                    name: TOOL_NAME,
                    description: tool.function.description,
                    parametersJsonSchema: tool.function.parameters,
                  },
                ],
              },
            ],
            toolConfig: { functionCallingConfig: { mode: "AUTO" } },
            generationConfig: {
              temperature: settings.temperature,
              maxOutputTokens: cap,
            },
          }),
        },
        readJson,
        transport,
      );
      if (
        data.error ||
        data.candidates?.length !== 1 ||
        data.candidates[0].finishReason !== "STOP" ||
        !Array.isArray(data.candidates[0].content?.parts)
      )
        invalid();
      calls = data.candidates[0].content.parts
        .filter((p) => p.functionCall)
        .map((p) => ({
          type: "function",
          function: {
            name: p.functionCall.name,
            arguments: p.functionCall.args,
          },
        }));
      usage = {
        prompt_tokens: data.usageMetadata?.promptTokenCount,
        completion_tokens: data.usageMetadata?.candidatesTokenCount,
      };
    } else if (providerId === "ollama") {
      data = await provider.request(
        "/api/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            model,
            messages,
            tools: [tool],
            stream: false,
            keep_alive: `${settings.keepAliveSeconds}s`,
            options: {
              temperature: settings.temperature,
              num_ctx: settings.contextWindow,
              num_predict: cap,
            },
          }),
          signal,
          onDiagnostic,
          maxResponseBytes: 65536,
        },
        settings.absoluteTimeoutMs,
      );
      if (data.done_reason === "length")
        invalid(
          "The model reached its output limit during native tool selection. Raise the output limit or choose another tool-capable model. No engine was executed.",
        );
      if (
        !data.done ||
        !data.message ||
        data.message.role !== "assistant" ||
        (data.done_reason && data.done_reason !== "stop")
      )
        invalid();
      calls = data.message.tool_calls ?? [];
      usage = {
        prompt_tokens: data.prompt_eval_count,
        completion_tokens: data.eval_count,
      };
    } else
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "This provider has no native Engine tool adapter. Use the Engine inspector.",
      );
  } catch (error) {
    if (["REMOTE_REQUEST_INVALID", "PROVIDER_ERROR"].includes(error.code))
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "The selected provider/model rejected native tool calling. Choose a model that supports functions, or use the Engine inspector.",
      );
    throw error;
  }
  if (!Array.isArray(calls) || calls.length > 1)
    invalid(
      "Only one CHronoZ tool call is permitted per chat turn. No engine was executed.",
    );
  const normalizedUsage = {
    promptTokens:
      Number.isFinite(usage?.prompt_tokens) && usage.prompt_tokens >= 0
        ? usage.prompt_tokens
        : null,
    completionTokens:
      Number.isFinite(usage?.completion_tokens) && usage.completion_tokens >= 0
        ? usage.completion_tokens
        : null,
    totalDurationNs:
      Number.isFinite(data.total_duration) && data.total_duration >= 0
        ? data.total_duration
        : (Date.now() - started) * 1e6,
  };
  if (providerId === "openrouter" && provider.onUsage) {
    try {
      await provider.onUsage(
        normalizedUsage,
        await provider.credentials.get("openrouter"),
      );
    } catch {}
  }
  if (!calls.length) return { call: null, usage: normalizedUsage };
  const call = calls[0];
  if (
    (call.type && call.type !== "function") ||
    call.function?.name !== TOOL_NAME
  )
    invalid();
  let args = call.function.arguments;
  if (typeof args === "string") {
    if (args.length > 1024) invalid();
    try {
      args = JSON.parse(args);
    } catch {
      invalid();
    }
  }
  const validated = parse(
    argumentsSchema,
    args,
    "MODEL_INVALID_RESPONSE",
    "The model supplied invalid engine arguments. Only an optional YYYY-MM month is allowed; no engine was executed.",
  );
  return {
    call: { name: TOOL_NAME, arguments: validated },
    usage: normalizedUsage,
  };
}
const reportSchema = z
  .object({
    runId: z.string().uuid(),
    month: require("./chronoz-adapter.cjs").monthSchema,
    researchStatus: z.enum(["PUBLISHED", "PARTIAL", "READY"]),
    sha256: z.string().regex(/^[a-f0-9]{64}$/),
    sourcePath: z.string().min(1).max(4096),
    engineId: z.literal("chronoz"),
    instanceId: z.string().uuid(),
  })
  .strict();
async function runEngineTurn(input) {
  const {
    provider,
    providerId,
    settings,
    question,
    history,
    signal,
    engines,
    agent,
    ownerId,
    conversationId,
    runId,
    requestId,
    identity,
    engineOnly,
    recordRun,
    onEvent,
    onDiagnostic,
    onSelection,
  } = input;
  const node = engineNode(agent);
  if (!node && !engineOnly) return false;
  const startedAt = new Date().toISOString(),
    started = Date.now();
  const base = {
    schemaVersion: 2,
    runId,
    conversationId,
    requestId,
    startedAt,
    contextIdentity: identity,
    settings,
    scope: {
      id: "engine-tool:" + runId,
      mode: "active-context",
      manifestVersion: identity.id,
    },
    provider: providerId,
    model: settings.modelId,
    promptVersion: "engine-tool-1",
    userMessage: question,
    sourcesAvailable: [],
    sourcesActuallyRead: [],
  };
  let usage = null;
  try {
    if (!node || !engines)
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "This agent has no applied Engine binding. Connect Engine to LLM and Save & apply.",
      );
    if (!(await engines.registration()))
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "Choose and approve the CHronoZ bundle folder in Engine settings before asking the model to retrieve a report.",
      );
    await engines.binding({
      agentId: agent.id,
      instanceId: node.config.instanceId,
    });
    onEvent?.({
      state: "GENERATING",
      status: {
        message:
          "Asking the selected model whether to retrieve a CHronoZ report.",
      },
    });
    const selected = await selectTool(provider, providerId, {
      model: settings.modelId,
      settings,
      question,
      history,
      signal,
      onDiagnostic,
    });
    usage = selected.usage;
    onSelection?.({
      provider: providerId,
      model: settings.modelId,
      nativeFunctionRequested: Boolean(selected.call),
      usage,
    });
    if (!selected.call && !engineOnly) return false;
    let response =
      "The selected model did not request a report tool. Ask for an existing CHronoZ report and specify YYYY-MM, or ask for the latest report. This Engine chat has no research sources for interpretation.";
    let reports = [],
      outcome = "not-requested";
    if (selected.call) {
      signal?.throwIfAborted();
      onDiagnostic?.("ENGINE_TOOL_REQUESTED", {
        engineId: "chronoz",
        operation: "get_report",
        hasMonth: Boolean(selected.call.arguments.month),
      });
      onEvent?.({
        state: "GENERATING",
        status: {
          message:
            "CHronoZ is retrieving and verifying the requested research PDF.",
        },
      });
      const result = await engines.execute(
        ownerId,
        {
          agentId: agent.id,
          instanceId: node.config.instanceId,
          engineId: "chronoz",
          operation: "get_report",
          arguments: selected.call.arguments,
        },
        { signal, conversationId, chatRunId: runId },
      );
      if (result.attachment)
        reports = [
          {
            ...result.attachment,
            engineId: "chronoz",
            instanceId: node.config.instanceId,
          },
        ];
      outcome = result.status;
      onDiagnostic?.("ENGINE_TOOL_COMPLETED", {
        status: result.status,
        hasVerifiedPdf: Boolean(result.attachment),
      });
      response = result.attachment
        ? `CHronoZ ${result.attachment.month} research PDF retrieved and verified. Research status: ${result.status}. Open the PDF attachment below. Report interpretation is not enabled; no report text was sent to the model.`
        : `CHronoZ returned ${result.status}. No verified research PDF is available for this request. No data was acquired or report generated.`;
    }
    signal?.throwIfAborted();
    await recordRun({
      ...base,
      status: "succeeded",
      completedAt: new Date().toISOString(),
      durationMs: Date.now() - started,
      response,
      finishReason: "stop",
      usage,
      error: null,
      diagnostics: {
        engineToolTurn: true,
        engineOnly: !!engineOnly,
        agentId: agent.id,
        engineReports: reports,
        engineOutcome: outcome,
        nativeTool: selected.call?.name ?? null,
        toolArguments: selected.call?.arguments ?? null,
      },
    });
    return true;
  } catch (error) {
    const actual = signal?.aborted
      ? (signal.reason ??
        new ModelRuntimeError("MODEL_CANCELLED", "The response was stopped."))
      : error;
    const safe = require("./model-errors.cjs").serializeModelError(actual);
    await recordRun({
      ...base,
      status: safe.code === "MODEL_CANCELLED" ? "cancelled" : "failed",
      completedAt: new Date().toISOString(),
      durationMs: Date.now() - started,
      response: null,
      finishReason: null,
      usage,
      error: safe,
      diagnostics: {
        engineToolTurn: true,
        engineOnly: !!engineOnly,
        agentId: agent?.id,
        engineReports: [],
      },
    });
    throw actual;
  }
}
module.exports = {
  engineNode,
  selectTool,
  readJson,
  TOOL_NAME,
  reportSchema,
  runEngineTurn,
};
