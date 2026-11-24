const path = require("node:path");
const { readJson, writeJson, serialQueue } = require("./json-store.cjs");
const {
  z,
  parse,
  credentialInput,
  parseCredential,
  credentialProvider,
} = require("./schemas.cjs");
const { ModelRuntimeError } = require("./model-errors.cjs");
const schema = z
  .object({
    schemaVersion: z.literal(1),
    gemini: z
      .string()
      .max(16384)
      .regex(/^[A-Za-z0-9+/]+={0,2}$/)
      .nullable(),
  })
  .extend({
    huggingface: z
      .string()
      .max(16384)
      .regex(/^[A-Za-z0-9+/]+={0,2}$/)
      .nullable()
      .optional(),
    openrouter: z
      .string()
      .max(16384)
      .regex(/^[A-Za-z0-9+/]+={0,2}$/)
      .nullable()
      .optional(),
    nvidia: z
      .string()
      .max(16384)
      .regex(/^[A-Za-z0-9+/]+={0,2}$/)
      .nullable()
      .optional(),
    litellm: z
      .string()
      .max(16384)
      .regex(/^[A-Za-z0-9+/]+={0,2}$/)
      .nullable()
      .optional(),
  })
  .strict();

/** Validates encrypted storage metadata without decrypting or exposing invalid field values. Used by normal reads and reset preflight; malformed state throws a safe storage error. */
function validateCredentialState(value) {
  const result = schema.safeParse(value);
  if (!result.success)
    throw new ModelRuntimeError(
      "MODEL_STORAGE_INVALID",
      "Cannot read provider credentials. Repair provider-credentials.json; it has not been overwritten.",
    );
  return result.data;
}

class CredentialStore {
  constructor(directory, safeStorage) {
    this.file = path.join(directory, "provider-credentials.json");
    this.encryption = safeStorage;
    this.queue = serialQueue();
  }
  available() {
    return (
      this.encryption.isEncryptionAvailable() &&
      this.encryption.getSelectedStorageBackend?.() !== "basic_text"
    );
  }
  /** Reads and validates encrypted configuration without decrypting keys; missing state gets an empty schema and malformed storage produces a content-free error. */
  async read() {
    try {
      return await readJson(this.file, validateCredentialState, {
        schemaVersion: 1,
        gemini: null,
      });
    } catch {
      // JSON parser errors can contain snippets of a manually edited file.
      throw new ModelRuntimeError(
        "MODEL_STORAGE_INVALID",
        "Cannot read provider credentials. Repair or restore provider-credentials.json; it has not been overwritten.",
      );
    }
  }
  async status(providerId = "gemini") {
    parse(credentialProvider, { providerId });
    const state = await this.read();
    return {
      configured: Boolean(state[providerId]),
      secureStorageAvailable: this.available(),
    };
  }
  save(input) {
    const { apiKey, providerId } = parseCredential(input);
    return this.queue(async () => {
      if (!this.available())
        throw new ModelRuntimeError(
          "AUTH_STORAGE_UNAVAILABLE",
          "Secure credential storage is unavailable. Configure the operating system key store first.",
        );
      const state = await this.read();
      try {
        state[providerId] = this.encryption
          .encryptString(apiKey)
          .toString("base64");
      } catch {
        throw new ModelRuntimeError(
          "AUTH_STORAGE_UNAVAILABLE",
          "Could not encrypt the provider credential.",
        );
      }
      await writeJson(this.file, state);
      return this.status(providerId);
    });
  }
  remove(input) {
    const { providerId } = parse(credentialProvider, input);
    return this.queue(async () => {
      const state = await this.read();
      state[providerId] = null;
      await writeJson(this.file, state);
      return this.status(providerId);
    });
  }
  // Main-process adapter only; never exposed through IPC.
  /** Decrypts only the selected provider key through OS storage; missing or invalid credentials fail without returning ciphertext or parser details. */
  async get(providerId = "gemini") {
    parse(credentialProvider, { providerId });
    const state = await this.read();
    if (!state[providerId])
      throw new ModelRuntimeError(
        "AUTH_REQUIRED",
        `Add a ${providerId === "litellm" ? "local LiteLLM gateway" : providerId === "openrouter" ? "OpenRouter" : providerId === "nvidia" ? "NVIDIA" : providerId === "huggingface" ? "Hugging Face" : "Gemini"} API key in Settings.`,
      );
    if (!this.available())
      throw new ModelRuntimeError(
        "AUTH_STORAGE_UNAVAILABLE",
        "Secure credential storage is unavailable.",
      );
    try {
      return parse(credentialInput, {
        providerId,
        apiKey: this.encryption.decryptString(
          Buffer.from(state[providerId], "base64"),
        ),
      }).apiKey;
    } catch {
      throw new ModelRuntimeError(
        "AUTH_INVALID",
        "The saved credential cannot be decrypted. Replace it in Settings.",
      );
    }
  }
}
module.exports = { CredentialStore, validateCredentialState };
