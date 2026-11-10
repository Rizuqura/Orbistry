// Opt-in real NVIDIA diagnostic. Reads encrypted credentials into a disposable
// OS-backed profile. No personal prompts, raw reasoning, key or headers leave main.
const { app, safeStorage } = require("electron");
const fs = require("node:fs"),
  path = require("node:path");
const { CredentialStore } = require("../electron/ai/credential-store.cjs");
const {
  NvidiaProvider,
} = require("../electron/ai/providers/nvidia-provider.cjs");
const { selectUserDataPath } = require("../electron/user-data-path.cjs");
if (!process.env.QT_NVIDIA_PROBE_PROFILE)
  throw Error("Disposable profile required");
const source = selectUserDataPath(
  app.getPath("appData"),
  path.join(app.getPath("appData"), "orbistry"),
);
const isolated = path.resolve(process.env.QT_NVIDIA_PROBE_PROFILE);
app.setPath("userData", isolated);
fs.mkdirSync(isolated, { recursive: true });
const localState = JSON.parse(
  fs.readFileSync(path.join(source, "Local State"), "utf8"),
);
fs.writeFileSync(
  path.join(isolated, "Local State"),
  JSON.stringify({ os_crypt: localState.os_crypt }),
);
const saved = JSON.parse(
  fs.readFileSync(path.join(source, "provider-credentials.json"), "utf8"),
);
fs.writeFileSync(
  path.join(isolated, "provider-credentials.json"),
  JSON.stringify({ schemaVersion: 1, gemini: null, nvidia: saved.nvidia }),
);
const selected = JSON.parse(
  fs.readFileSync(path.join(source, "model-settings.json"), "utf8"),
);
// Pin the diagnostic deployment independently of settings changed in a parallel
// personal app session. This override affects only the disposable profile.
const targetModel = process.env.QT_NVIDIA_TEST_MODEL ?? selected.modelId;
if (
  ![
    "nvidia/nemotron-3.5-lightning-30b-a3b",
    "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
  ].includes(targetModel)
)
  throw Error("Explicit supported diagnostic model required");
selected.modelId = targetModel;
selected.providerId = "nvidia";
const credentials = new CredentialStore(isolated, safeStorage);
const provider = new NvidiaProvider({ credentials });
// Public deterministic source; approximately 7K+ provider input tokens. The UI
// runner uses exactly this source too, so input size is measured rather than inferred.
const sourceText =
  (process.env.QT_NVIDIA_TEN_POINTS === "1"
    ? "Synthetic Demo Company FY2025. These are fictional test facts, not GOTO financial results.\n" +
      [
        "Revenue: 120 billion rupiah",
        "Revenue growth: 12%",
        "Gross profit: 45 billion rupiah",
        "Operating profit: 8 billion rupiah",
        "Net profit: 5 billion rupiah",
        "Operating cash flow: 9 billion rupiah",
        "Cash balance: 30 billion rupiah",
        "Total assets: 150 billion rupiah",
        "Total liabilities: 60 billion rupiah",
        "Total equity: 90 billion rupiah",
      ]
        .map((v, i) => `Financial fact ${i + 1}: ${v}.`)
        .join("\n") +
      "\n"
    : "") +
  Array.from(
    { length: 440 },
    (_, i) =>
      `Archive record ${i}: category alpha; state normal; reference value ${i % 17}.`,
  ).join("\n") +
  "\nVerification marker: ORBISTRY_OK.\n";
globalThis.nvidiaProbe = {
  selected: {
    modelId: selected.modelId,
    providerId: selected.providerId,
    outputLimit: selected.outputLimit,
    streaming: selected.streaming,
  },
  sourceText,
  async run(disableThinking) {
    if (
      selected.providerId !== "nvidia" ||
      ![
        "nvidia/nemotron-3.5-lightning-30b-a3b",
        "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
      ].includes(selected.modelId)
    )
      throw Error("Probe is scoped to the reported selected NVIDIA model");
    const started = performance.now();
    const result = {
      model: selected.modelId,
      disableThinking,
      outputLimit: 256,
      httpStatus: null,
      finishReason: null,
      visibleCharacters: 0,
      reasoningCharacters: 0,
      expectedText: false,
      usage: null,
      errorCode: null,
    };
    try {
      await provider.request(
        "chat/completions",
        {
          method: "POST",
          body: JSON.stringify({
            model: selected.modelId,
            messages: [
              {
                role: "system",
                content:
                  "Answer the user's question from the supplied public archive.",
              },
              {
                role: "user",
                content:
                  sourceText +
                  "\nReply with exactly the verification marker, without explanation.",
              },
            ],
            temperature: selected.temperature,
            max_tokens: 256,
            stream: false,
            ...(disableThinking
              ? { chat_template_kwargs: { enable_thinking: false } }
              : {}),
          }),
        },
        async (response) => {
          result.httpStatus = response.status;
          const data = await response.json(),
            choice = data.choices?.[0],
            message = choice?.message;
          const content =
            typeof message?.content === "string" ? message.content : "";
          result.finishReason = choice?.finish_reason ?? null;
          result.visibleCharacters = content.length;
          result.reasoningCharacters = (
            message?.reasoning_content ??
            message?.reasoning ??
            ""
          ).length;
          result.expectedText = content.trim() === "ORBISTRY_OK";
          result.usage = {
            promptTokens: data.usage?.prompt_tokens ?? null,
            completionTokens: data.usage?.completion_tokens ?? null,
            reasoningTokens:
              data.usage?.completion_tokens_details?.reasoning_tokens ?? null,
          };
        },
        { timeoutMs: 60000, absoluteMs: 60000 },
      );
    } catch (error) {
      result.errorCode = error.code ?? "UNKNOWN";
      result.httpStatus = error.details?.status ?? null;
    }
    result.durationMs = Math.round(performance.now() - started);
    return result;
  },
};
if (process.env.QT_NVIDIA_UI === "1") {
  // Exercise the existing normal Agent Chat in an isolated synthetic workspace,
  // with the actual saved model/output settings and actual provider transport.
  fs.writeFileSync(
    path.join(isolated, "model-settings.json"),
    JSON.stringify(selected),
  );
  fs.writeFileSync(
    path.join(isolated, "agents.json"),
    JSON.stringify({ schemaVersion: 1, agents: {} }),
  );
  globalThis.nvidiaProbe.wireRequests = [];
  const nativeFetch = globalThis.fetch;
  globalThis.fetch = (url, init = {}) => {
    if (
      String(url) === "https://integrate.api.nvidia.com/v1/chat/completions" &&
      init.body
    ) {
      const body = JSON.parse(init.body);
      globalThis.nvidiaProbe.wireRequests.push({
        model: body.model,
        maxTokens: body.max_tokens,
        stream: body.stream,
        thinkingDisabled: body.chat_template_kwargs?.enable_thinking === false,
      });
    }
    return nativeFetch(url, init);
  };
  app.on("browser-window-created", (_, window) =>
    window.webContents.setBackgroundThrottling(false),
  );
  require("../electron/main.cjs");
}
