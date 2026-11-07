/** Settings credential boundary. Only user BYOK credentials enter this service;
 * curated previews never resolve credentials or expose an execution handle. */
const { z, parse, parseCredential } = require("./schemas.cjs");
const { GeminiProvider } = require("./providers/gemini-provider.cjs");
const { NvidiaProvider } = require("./providers/nvidia-provider.cjs");
const { OpenRouterProvider } = require("./providers/openrouter-provider.cjs");

const connectionInput = z
  .object({
    apiKey: z
      .string()
      .trim()
      .min(10)
      .max(512)
      .regex(/^[A-Za-z0-9._-]+$/),
  })
  .strict();

/** Detect the issuer in the main process before making any request. Unknown
 * formats stop here: probing unrelated services would disclose the secret. */
function identifyProvider(apiKey) {
  const detected = apiKey.startsWith("sk-or-")
    ? "openrouter"
    : apiKey.startsWith("nvapi-")
      ? "nvidia"
      : /^(AIza|AQ\.)/.test(apiKey)
        ? "gemini"
        : null;
  const providerId = detected;
  return {
    state: providerId ? "identified_unverified" : "unrecognized",
    providerId,
    message: providerId
      ? "Provider identified; key not verified."
      : "Provider not recognized. Paste a supported OpenRouter, NVIDIA or Gemini API key.",
  };
}

class ModelAccess {
  constructor(credentials, { fetchImpl = fetch, now = Date.now } = {}) {
    this.credentials = credentials;
    this.fetch = fetchImpl;
    this.now = now;
    this.nextAttempt = 0;
    this.modelChecks = new Map();
  }
  recordCheck(result) {
    this.modelChecks.set(`${result.providerId}:${result.model}`, result.passed);
  }
  failedCheck(deploymentId) {
    return this.modelChecks.get(deploymentId) === false;
  }
  clearChecks(providerId) {
    for (const id of this.modelChecks.keys())
      if (id.startsWith(`${providerId}:`)) this.modelChecks.delete(id);
  }
  async connect(input) {
    const value = parse(connectionInput, input);
    const identity = identifyProvider(value.apiKey);
    if (!identity.providerId)
      return { ...identity, saved: false, credentialScope: "user_byok" };
    const { providerId } = identity;
    if (this.now() < this.nextAttempt)
      return {
        ...identity,
        saved: false,
        credentialScope: "user_byok",
        message: "Wait a few seconds before checking again.",
      };
    this.nextAttempt = this.now() + 3000;
    const credential = parseCredential({ providerId, apiKey: value.apiKey });
    // A temporary adapter validates the replacement before overwriting a working
    // connection. It cannot read another provider's stored key or change defaults.
    const options = {
      credentials: {
        get: async (id = "gemini") => {
          if (id !== providerId) throw new Error("Credential scope mismatch");
          return credential.apiKey;
        },
      },
      fetchImpl: this.fetch,
    };
    const Adapter = {
      gemini: GeminiProvider,
      nvidia: NvidiaProvider,
      openrouter: OpenRouterProvider,
    }[providerId];
    const adapter = new Adapter(options);
    try {
      if (providerId === "openrouter") {
        // /models can be public: its success alone does not verify a key.
        await adapter.request("auth/key", {}, async (response) => {
          await response.body?.cancel();
        });
      }
      await adapter.listModels();
      await this.credentials.save(credential);
      this.clearChecks(providerId);
      // NVIDIA's catalog can be public too. Do not call paid inference merely
      // to turn this status green; the existing explicit model check can do that.
      const verified = providerId !== "nvidia";
      return {
        providerId,
        state: verified ? "verified" : "identified_unverified",
        saved: true,
        credentialScope: "user_byok",
        message: verified
          ? "Key verified and saved securely. Model catalog loaded."
          : "NVIDIA identified and key saved securely. Catalog loaded; key and inference access remain unverified. Use an explicit model check to test access (uses quota).",
      };
    } catch (error) {
      // Never return transport messages, raw provider bodies or secret-bearing
      // validation errors, even if a future adapter throws an unexpected error.
      const invalid = error?.code === "AUTH_INVALID";
      return {
        providerId,
        state: invalid ? "invalid" : "unreachable",
        saved: false,
        credentialScope: "user_byok",
        message: invalid
          ? "Key rejected. Check the key and account permissions. Your saved connection was kept."
          : "Could not verify and save this connection. Check network, quota and secure storage, then retry. Your saved connection was kept.",
      };
    }
  }
}

/** Public policy is deliberately unconditional: there is no trusted developer
 * authorization service yet. A renderer toggle must never reveal diagnostics.
 * Only explicit metadata fields leave this boundary; no configuration or keys. */
function providedPreview(catalog, health = () => ({ failures: 0 })) {
  const favorites = new Set(catalog.favorites);
  return catalog.profiles
    .filter(
      (profile) =>
        favorites.has(profile.deploymentId) &&
        !["error", "unavailable"].includes(profile.availability) &&
        !health(profile.deploymentId).failures,
    )
    .map((profile) => ({
      providerId: profile.providerId,
      modelId: profile.modelId,
      displayName: profile.label,
      contextLength: profile.contextTokens,
      outputLimit: profile.maxOutputTokens,
      capabilities: [
        profile.tools === true && "tools",
        profile.vision === true && "vision",
        profile.structuredOutput === true && "structured output",
      ].filter(Boolean),
      inputUsdPerMillion: profile.inputUsdPerMillion,
      outputUsdPerMillion: profile.outputUsdPerMillion,
      isFavorite: true,
      availability: "unverified",
      executable: false,
    }));
}

module.exports = { identifyProvider, ModelAccess, providedPreview };
