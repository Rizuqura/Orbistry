const { createHash } = require("node:crypto");
const { OpenRouterUsageService, blank } = require("./openrouter-usage.cjs");
const PROVIDERS = ["ollama", "gemini", "nvidia", "openrouter"];
const LABELS = {
  ollama: "Ollama",
  gemini: "Gemini",
  nvidia: "NVIDIA",
  openrouter: "OpenRouter",
};
const keyIdentity = (provider, key) =>
  provider +
  ":" +
  createHash("sha256")
    .update(key ?? "local-runtime")
    .digest("hex");

class ProviderUsageService {
  constructor({
    credentials,
    registry,
    agents,
    fetchImpl = fetch,
    now = Date.now,
  }) {
    Object.assign(this, { credentials, registry, agents, now });
    this.meters = new Map();
    this.versions = new Map();
    // Agent model overrides can select OpenRouter independently of global settings.
    this.openrouter = new OpenRouterUsageService({
      credentials,
      registry: { read: async () => ({ providerId: "openrouter" }) },
      fetchImpl,
      now,
    });
  }
  version(provider) {
    return this.versions.get(provider) ?? 0;
  }
  invalidate(provider) {
    if (!provider) {
      for (const id of PROVIDERS) this.invalidate(id);
      return;
    }
    this.versions.set(provider, this.version(provider) + 1);
    for (const id of this.meters.keys())
      if (id.startsWith(provider + ":")) this.meters.delete(id);
    if (provider === "openrouter") this.openrouter.invalidate();
  }
  selectionChanged() {
    this.openrouter.invalidate();
  }
  async selected(agentId) {
    const settings = await this.registry.read();
    const agent = agentId ? await this.agents.get(agentId) : null;
    const override = agent?.runtimeModel;
    return override?.providerId && override.modelId
      ? override.providerId
      : settings.providerId;
  }
  async record(provider, usage, key, version = this.version(provider)) {
    if (!PROVIDERS.includes(provider) || version !== this.version(provider))
      return;
    if (provider !== "ollama") {
      if (!key) return;
      try {
        if ((await this.credentials.get(provider)) !== key) return;
      } catch {
        return;
      }
    }
    if (version !== this.version(provider)) return;
    const input = usage?.promptTokens,
      output = usage?.completionTokens;
    const valid = (value) => Number.isSafeInteger(value) && value >= 0;
    if (!valid(input) && !valid(output)) return;
    const id = keyIdentity(provider, key);
    const meter = this.meters.get(id) ?? {
      input: null,
      output: null,
      since: new Date(this.now()).toISOString(),
    };
    for (const [field, value] of [
      ["input", input],
      ["output", output],
    ]) {
      if (valid(value) && Number.isSafeInteger((meter[field] ?? 0) + value))
        meter[field] = (meter[field] ?? 0) + value;
    }
    this.meters.set(id, meter);
    if (provider === "openrouter" && !this.openrouter.failures)
      this.openrouter.nextAt = Math.min(
        this.openrouter.nextAt,
        this.now() + 2000,
      );
  }
  async get(options = {}, retry = true) {
    const provider = await this.selected(options.agentId);
    const base = { ...blank(), provider };
    let key = null;
    if (provider !== "ollama") {
      try {
        key = await this.credentials.get(provider);
      } catch {}
      if (!key)
        return {
          ...base,
          errorMessage: "Connect a " + LABELS[provider] + " key in Settings.",
        };
    }
    const id = keyIdentity(provider, key),
      version = this.version(provider);
    const value =
      provider === "openrouter"
        ? await this.openrouter.get(options)
        : {
            ...base,
            status: "ready",
            dataSource: "local_meter",
            fetchedAt: new Date(this.now()).toISOString(),
            safeKeyAlias:
              provider === "ollama"
                ? "Local runtime (no API key)"
                : "Connected key " + id.split(":")[1].slice(0, 10),
          };
    let currentKey = null;
    try {
      currentKey =
        provider === "ollama" ? null : await this.credentials.get(provider);
    } catch {}
    if (
      version !== this.version(provider) ||
      (await this.selected(options.agentId)) !== provider ||
      currentKey !== key
    ) {
      return retry
        ? this.get(options, false)
        : {
            ...blank("loading"),
            provider: await this.selected(options.agentId),
          };
    }
    const meter = this.meters.get(id);
    return {
      ...value,
      provider,
      inputTokens: meter?.input ?? null,
      outputTokens: meter?.output ?? null,
      tokenMeasurementScope: meter
        ? "Completed requests on this device since " +
          meter.since +
          " (current app session; " +
          (provider === "ollama" ? "local runtime" : "selected key") +
          "; partial/cancelled requests excluded). Only reported token counts are included."
        : "No completed token measurements for this " +
          (provider === "ollama" ? "local runtime" : "key") +
          " in the current app session.",
    };
  }
  async legacyGet(options) {
    return (await this.registry.read()).providerId === "openrouter"
      ? this.get(options)
      : { ...blank(), errorMessage: "Select OpenRouter in Settings." };
  }
}

// Observe transport completions, including probes and repairs. Keys stay in the
// main process; observer failures never turn successful inference into an error.
function observeProviderUsage(
  adapter,
  provider,
  credentials,
  usage,
  onChanged,
) {
  if (!adapter?.complete) return;
  const complete = adapter.complete.bind(adapter);
  adapter.complete = async (request) => {
    const version = usage.version(provider);
    let key = null;
    try {
      if (provider !== "ollama") key = await credentials.get(provider);
    } catch {}
    const result = await complete(request);
    try {
      await usage.record(provider, result.usage, key, version);
      onChanged();
    } catch {}
    return result;
  };
}
module.exports = { ProviderUsageService, observeProviderUsage };
