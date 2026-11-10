/** QT-RCA-001 real-provider diagnostic entry. Uses a disposable profile/vault;
 * reads only existing encrypted provider credentials and selected model metadata.
 * No mock fetch, raw credential logging, private prompts or account mutations.
 * All inference uses fixed public diagnostic prompts with bounded token/time caps. */
const { app, safeStorage, ipcMain } = require("electron");
const fs = require("node:fs"),
  path = require("node:path"),
  crypto = require("node:crypto");
const { CredentialStore } = require("../electron/ai/credential-store.cjs");
const {
  OpenRouterProvider,
} = require("../electron/ai/providers/openrouter-provider.cjs");
const {
  NvidiaProvider,
} = require("../electron/ai/providers/nvidia-provider.cjs");
const { selectUserDataPath } = require("../electron/user-data-path.cjs");
if (!process.env.QT_RCA_PROFILE || !process.env.ORBISTRY_VAULT_PATH)
  throw new Error("Disposable diagnostic profile/vault required.");
const sourceProfile = selectUserDataPath(
  app.getPath("appData"),
  path.join(app.getPath("appData"), "orbistry"),
);
const isolated = path.resolve(process.env.QT_RCA_PROFILE);
app.setPath("userData", isolated);
fs.mkdirSync(isolated, { recursive: true });
// Windows safeStorage uses the profile's encrypted OSCrypt key. Preserve only
// that encrypted key material in the disposable profile, never browser state.
const localStateFile = path.join(sourceProfile, "Local State");
if (fs.existsSync(localStateFile)) {
  const localState = JSON.parse(fs.readFileSync(localStateFile, "utf8"));
  if (localState.os_crypt)
    fs.writeFileSync(
      path.join(isolated, "Local State"),
      JSON.stringify({ os_crypt: localState.os_crypt }),
    );
}
const sourceFile = path.join(sourceProfile, "provider-credentials.json");
if (fs.existsSync(sourceFile)) {
  const encrypted = JSON.parse(fs.readFileSync(sourceFile, "utf8"));
  fs.writeFileSync(
    path.join(isolated, "provider-credentials.json"),
    JSON.stringify({
      schemaVersion: 1,
      gemini: null,
      openrouter: encrypted.openrouter ?? null,
      nvidia: encrypted.nvidia ?? null,
      litellm: encrypted.litellm ?? null,
    }),
  );
}
const credentials = new CredentialStore(isolated, safeStorage);
const providers = {
  openrouter: new OpenRouterProvider({ credentials }),
  nvidia: new NvidiaProvider({ credentials }),
};
const report = {
  profileSource: path.basename(sourceProfile),
  providers: {},
  requests: [],
  stages: [],
  backgroundChecks: { started: 0, active: null },
};
// Observe real IPC admission without changing any response or provider request.
const register = ipcMain.handle.bind(ipcMain);
ipcMain.handle = (channel, handler) =>
  register(channel, async (event, input) => {
    if (channel !== "ai:checkRemoteModel") return handler(event, input);
    report.backgroundChecks.started++;
    report.backgroundChecks.active = {
      provider: ["nvidia", "gemini", "openrouter"].includes(input?.providerId)
        ? input.providerId
        : "unknown",
      model:
        typeof input?.model === "string" &&
        /^[~A-Za-z0-9._:/-]{1,200}$/.test(input.model)
          ? input.model
          : "unknown",
    };
    try {
      return await handler(event, input);
    } finally {
      report.backgroundChecks.active = null;
    }
  });
let selected = null;
try {
  const v = JSON.parse(
    fs.readFileSync(path.join(sourceProfile, "model-settings.json"), "utf8"),
  );
  selected = { providerId: v.providerId, modelId: v.modelId };
} catch {}
const stage = (requestId, name, status, started, metadata = {}) =>
  report.stages.push({
    timestamp: new Date().toISOString(),
    requestId,
    stage: name,
    elapsedMs: Math.round(performance.now() - started),
    status,
    ...metadata,
  });
const safeText = (text) =>
  typeof text === "string" && text.trim() === "ORBISTRY_OK"
    ? "ORBISTRY_OK"
    : typeof text === "string" && text.trim() === "ORBITAL"
      ? "ORBITAL"
      : text
        ? "[nonempty diagnostic text]"
        : "";
globalThis.qtRca = {
  report,
  /** Read configured status and public model IDs, without inference or returning credentials. */
  async discover() {
    for (const [id, provider] of Object.entries(providers)) {
      const status = await credentials.status(id);
      const value = {
        configured: status.configured,
        secureStorageAvailable: status.secureStorageAvailable,
        selectedModel: selected?.providerId === id ? selected.modelId : null,
        candidateModel: null,
        catalogCount: null,
      };
      report.providers[id] = value;
      if (!status.configured) continue;
      try {
        await credentials.get(id);
        value.credentialDecrypted = true;
      } catch (error) {
        value.credentialDecrypted = false;
        value.credentialError = error.code ?? "UNKNOWN";
        continue;
      }
      try {
        const models = await provider.listModels();
        value.catalogCount = models.length;
        value.alternateModelCandidates = models
          .filter((m) => /llama|mistral|gemma|nemotron/i.test(m.name))
          .map((m) => m.name)
          .slice(0, 18);
        const preferred =
          id === "openrouter"
            ? [
                "openai/gpt-4.1-nano",
                "google/gemini-2.0-flash-001",
                "meta-llama/llama-3.1-8b-instruct",
              ]
            : [
                value.selectedModel,
                "meta/llama-3.1-8b-instruct",
                "mistralai/mistral-7b-instruct-v0.3",
              ];
        value.candidateModel =
          preferred
            .filter(Boolean)
            .find((name) => models.some((m) => m.name === name)) ??
          models.find((m) => /llama.*(?:8b|3b)|mistral.*7b/i.test(m.name))
            ?.name ??
          null;
        value.candidateParameters =
          models.find((m) => m.name === value.candidateModel)
            ?.frontOfficeMetadata?.supportedParameters ?? null;
        value.selectedModelListed = value.selectedModel
          ? models.some((m) => m.name === value.selectedModel)
          : null;
      } catch (error) {
        value.catalogError = error.code ?? "UNKNOWN";
      }
    }
    return structuredClone(report.providers);
  },
  /** Raw native non-streaming call: bypasses adapter.complete, router, context and agent runtime. */
  async direct(providerId, model, outputLimit = 256) {
    const requestId = crypto.randomUUID(),
      started = performance.now();
    const result = {
      test: "A",
      provider: providerId,
      model,
      requestId,
      endpoint: providerId === "nvidia" ? "nvidia-hosted-v1" : "openrouter-v1",
      streaming: false,
      outputLimit,
      httpStatus: null,
      status: "FAIL",
      visibleText: "",
      contentCharacters: 0,
      reasoningPresent: false,
      finishReason: null,
      usage: null,
      errorCode: null,
    };
    stage(requestId, "REQUEST_RECEIVED", "ok", started, {
      provider: providerId,
      model,
    });
    stage(requestId, "REQUEST_VALIDATED", "ok", started);
    stage(requestId, "MODEL_CANDIDATES_EVALUATED", "bypassed", started);
    stage(requestId, "MODEL_SELECTED", "manual", started, {
      provider: providerId,
      model,
    });
    stage(requestId, "GATEWAY_REQUEST_STARTED", "native-direct", started);
    try {
      await providers[providerId].request(
        "chat/completions",
        {
          method: "POST",
          body: JSON.stringify({
            model,
            messages: [
              { role: "user", content: "Reply with exactly: ORBISTRY_OK" },
            ],
            temperature: 0.2,
            max_tokens: outputLimit,
            stream: false,
          }),
        },
        async (response) => {
          result.httpStatus = response.status;
          stage(requestId, "PROVIDER_RESPONSE_RECEIVED", "ok", started, {
            httpStatus: response.status,
          });
          const data = await response.json();
          const choice = data.choices?.[0],
            content = choice?.message?.content;
          const text =
            typeof content === "string"
              ? content
              : Array.isArray(content)
                ? content
                    .filter((p) => p.type === "text")
                    .map((p) => p.text ?? "")
                    .join("")
                : "";
          result.contentCharacters = text.length;
          result.visibleText = safeText(text);
          result.reasoningPresent = Boolean(
            choice?.message?.reasoning || choice?.message?.reasoning_content,
          );
          result.finishReason = choice?.finish_reason ?? null;
          result.usage = {
            inputTokens: data.usage?.prompt_tokens ?? null,
            outputTokens: data.usage?.completion_tokens ?? null,
            reasoningTokens:
              data.usage?.completion_tokens_details?.reasoning_tokens ?? null,
          };
          if (text)
            stage(requestId, "FIRST_CONTENT_RECEIVED", "ok", started, {
              contentCharacters: text.length,
            });
          stage(
            requestId,
            "RESPONSE_NORMALIZED",
            text ? "nonempty" : "empty",
            started,
          );
          result.status = text.trim() === "ORBISTRY_OK" ? "PASS" : "FAIL";
          stage(requestId, "OUTPUT_VALIDATED", result.status, started);
          stage(
            requestId,
            "FRONTEND_RESPONSE_DELIVERED",
            "not-applicable-direct-test",
            started,
          );
        },
        { timeoutMs: 60000, absoluteMs: 60000 },
      );
    } catch (error) {
      result.errorCode = error.code ?? "UNKNOWN";
      result.httpStatus = error.details?.status ?? null;
      stage(requestId, "PROVIDER_RESPONSE_RECEIVED", "error", started, {
        errorCode: result.errorCode,
        httpStatus: result.httpStatus,
      });
    }
    result.latencyMs = Math.round(performance.now() - started);
    stage(requestId, "REQUEST_COMPLETED", result.status, started);
    report.requests.push(result);
    return result;
  },
};
app.on("browser-window-created", (_, window) =>
  window.webContents.setBackgroundThrottling(false),
);
require("../electron/main.cjs");
