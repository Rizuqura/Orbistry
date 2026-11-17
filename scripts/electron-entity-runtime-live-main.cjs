const { app } = require("electron");
const fs = require("node:fs");
const path = require("node:path");
const directory = process.env.ORBISTRY_RUNTIME_DATA;
const sourceProfile = process.env.ORBISTRY_RUNTIME_PROFILE;
if (
  !directory ||
  !sourceProfile ||
  !fs.existsSync(path.join(sourceProfile, "provider-credentials.json"))
)
  throw new Error(
    "Explicit isolated data and an existing credential profile are required.",
  );
app.setPath("userData", directory);
const credentials = require("../electron/ai/credential-store.cjs");
const OriginalStore = credentials.CredentialStore;

/** Reuses the user's configured encrypted credential through normal Electron secure storage. Diagnostic UI cannot write or remove that credential. */
class ReadOnlyDiagnosticCredentials extends OriginalStore {
  /** Reads secrets from the explicitly selected profile without copying credential files into disposable data. */
  constructor(_directory, storage) {
    super(sourceProfile, storage);
  }
  /** Rejects credential changes from the isolated live acceptance window. */
  save() {
    throw new Error("Credential changes are disabled in live acceptance.");
  }
  /** Rejects credential removal from the isolated live acceptance window. */
  remove() {
    throw new Error("Credential changes are disabled in live acceptance.");
  }
}
credentials.CredentialStore = ReadOnlyDiagnosticCredentials;
const settings = JSON.parse(
  fs.readFileSync(path.join(directory, "model-settings.json"), "utf8"),
);
const adapters = {
  nvidia: ["nvidia-provider.cjs", "NvidiaProvider"],
  openrouter: ["openrouter-provider.cjs", "OpenRouterProvider"],
  gemini: ["gemini-provider.cjs", "GeminiProvider"],
  ollama: ["ollama-provider.cjs", "OllamaProvider"],
};
if (!Object.hasOwn(adapters, settings.providerId))
  throw new Error("The selected provider has no diagnostic adapter.");
const [moduleName, className] = adapters[settings.providerId];
const Provider = require("../electron/ai/providers/" + moduleName)[className];
const complete = Provider.prototype.complete;
globalThis.runtimeDeliveredExecutionIds = [];
/** Records only execution correlation IDs from the real provider input. Prompt text, source content and credentials are never logged or retained by the observer. */
Provider.prototype.complete = async function observeDelivery(request) {
  const message = request.messages?.find((item) =>
    item.content.startsWith(
      "Host-resolved assignment data and untrusted evidence\n",
    ),
  );
  if (message) {
    const context = JSON.parse(message.content.split("\n").slice(1).join("\n"));
    for (const item of context.capabilityResults ?? [])
      if (item.contentStatus === "included" && item.result?.executionId)
        globalThis.runtimeDeliveredExecutionIds.push(item.result.executionId);
  }
  for (const item of request.messages ?? []) {
    if (!item.content.startsWith("Backend tool response\n")) continue;
    const result = JSON.parse(item.content.split("\n").slice(1).join("\n"));
    if (result.status === "succeeded" && result.executionId)
      globalThis.runtimeDeliveredExecutionIds.push(result.executionId);
  }
  return complete.call(this, request);
};
app.on("browser-window-created", (_, window) =>
  window.webContents.setBackgroundThrottling(false),
);
require("../electron/main.cjs");
