const path = require("node:path");
const { readJson, writeJson, serialQueue } = require("./json-store.cjs");
const { ModelRuntimeError } = require("./model-errors.cjs");

const { ProviderRegistry } = require("./provider-registry.cjs");
const { parse, settingsSchema } = require("./schemas.cjs");
const { contextLimit } = require("./context-limits.cjs");

const DEFAULTS = Object.freeze({
  schemaVersion: 1,
  providerId: "ollama",
  modelId: null,
  contextWindow: 8192,
  outputLimit: 2048,
  temperature: 0.2,
  streaming: true,
  keepAliveSeconds: 300,
  loadTimeoutMs: 300000,
  inactivityTimeoutMs: 120000,
  absoluteTimeoutMs: 600000,
});
const PROFILES = {
  "qwen3:4b": "balanced",
  "qwen3:1.7b": "fast",
  "llama3.2:3b": "balanced",
};

function validateSettings(value) {
  return parse(settingsSchema, value);
}

class ModelRegistry {
  constructor(provider, settingsDirectory) {
    this.providers =
      provider instanceof ProviderRegistry
        ? provider
        : new ProviderRegistry({ ollama: provider });
    this.file = path.join(settingsDirectory, "model-settings.json");
    this.queue = serialQueue();
  }
  read() {
    return readJson(this.file, validateSettings, DEFAULTS);
  }
  async state() {
    let settings = await this.read();
    const statuses = await Promise.all(
      this.providers.entries().map(async ([id, provider]) => ({
        id,
        ...(await provider.getStatus()),
      })),
    );
    const models = statuses.flatMap((status) =>
      status.models.map((model) => ({
        providerId: status.id,
        modelId: model.name,
        displayName: model.displayName ?? model.name,
        location: status.id === "ollama" ? "local" : "remote",
        installed: status.id === "ollama",
        available: true,
        active:
          status.id === settings.providerId && model.name === settings.modelId,
        profile:
          status.id === "ollama"
            ? (PROFILES[model.name] ?? "unprofiled")
            : "online",
        recommended: status.id === "ollama" && model.name === "qwen3:4b",
        pricingClass: "unknown",
        inputUsdPerMillion:
          model.frontOfficeMetadata?.inputUsdPerMillion ?? null,
        outputUsdPerMillion:
          model.frontOfficeMetadata?.outputUsdPerMillion ?? null,
        capabilities: model.capabilities,
        contextLength: model.contextLength,
        outputLimit: model.outputLimit,
        warnings:
          status.id === "ollama" && model.size > 4_500_000_000
            ? ["High memory use on an 8 GB device."]
            : status.id === "nvidia"
              ? ["Catalog listing only; run Check model to verify inference."]
              : [],
      })),
    );
    if (
      settings.providerId === "ollama" &&
      !settings.modelId &&
      models.some(
        (model) =>
          model.providerId === "ollama" && model.modelId === "qwen3:4b",
      )
    ) {
      settings = await this.save({ modelId: "qwen3:4b" });
    }
    const selected = statuses.find(
      (status) => status.id === settings.providerId,
    );
    return {
      online: selected?.online ?? false,
      error: selected?.error ?? null,
      settings,
      providers: statuses.map(
        ({ id, online, error, configured, secureStorageAvailable }) => ({
          id,
          displayName:
            id === "ollama"
              ? "Ollama"
              : id === "openrouter"
                ? "OpenRouter"
                : id === "nvidia"
                  ? "NVIDIA NIM"
                  : "Gemini",
          location: id === "ollama" ? "local" : "remote",
          online,
          error: error ?? null,
          configured: configured ?? id === "ollama",
          secureStorageAvailable,
        }),
      ),
      models: models.map((model) => ({
        ...model,
        active:
          model.providerId === settings.providerId &&
          model.modelId === settings.modelId,
      })),
    };
  }
  providerFor(id) {
    return this.providers.get(id);
  }
  save(patch) {
    return this.queue(async () => {
      if (!patch || typeof patch !== "object" || Array.isArray(patch))
        throw new ModelRuntimeError(
          "MODEL_INVALID_REQUEST",
          "Model settings must be an object.",
        );
      const settings = validateSettings({ ...(await this.read()), ...patch });
      await this.validateSelection(settings);
      await writeJson(this.file, settings);
      return settings;
    });
  }
  async validateSelection(settings, options = {}) {
    settings = validateSettings(settings);
    if (!settings.modelId)
      throw new ModelRuntimeError(
        "MODEL_NOT_FOUND",
        "Select an available model in Settings.",
      );
    const provider = this.providerFor(settings.providerId);
    const models = await provider.listModels(options);
    const selected = models.find((model) => model.name === settings.modelId);
    if (!selected)
      throw new ModelRuntimeError(
        settings.providerId !== "ollama"
          ? "MODEL_UNAVAILABLE"
          : "MODEL_NOT_FOUND",
        `The selected model ${settings.modelId} is unavailable. Refresh Models in Settings.`,
      );
    const details =
      typeof provider.describeModel === "function"
        ? await provider.describeModel(settings.modelId)
        : selected;
    if (
      details.capabilities?.length &&
      !details.capabilities.includes("completion")
    )
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "This model does not support text completion.",
      );
    const limit = contextLimit(
      settings.providerId,
      details.contextLength ?? selected.contextLength,
    );
    if (settings.contextWindow > limit)
      throw new ModelRuntimeError(
        "MODEL_CONTEXT_TOO_LARGE",
        `The context window for ${settings.providerId}/${settings.modelId} is limited to ${limit} tokens${details.contextLength || selected.contextLength ? " by model capacity or the application ceiling" : " until the provider reports its capacity"}.`,
      );
    if (details.outputLimit && settings.outputLimit > details.outputLimit)
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "The output limit exceeds this model's capability.",
      );
    if (
      details.maxTemperature !== undefined &&
      settings.temperature > details.maxTemperature
    )
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "Temperature exceeds this model's capability.",
      );
    return settings;
  }
}

module.exports = { DEFAULTS, ModelRegistry, validateSettings };
