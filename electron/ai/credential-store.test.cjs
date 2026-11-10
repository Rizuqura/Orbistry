const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { CredentialStore } = require("./credential-store.cjs");
const { parseCredential } = require("./schemas.cjs");

test("optional LiteLLM credential uses OS encryption and remains isolated from provider credentials", async (t) => {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-gateway-key-"),
  );
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const encryption = {
    isEncryptionAvailable: () => true,
    encryptString: (value) => Buffer.from(value.split("").reverse().join("")),
    decryptString: (bytes) => bytes.toString().split("").reverse().join(""),
  };
  const store = new CredentialStore(root, encryption);
  await store.save({
    providerId: "openrouter",
    apiKey: "synthetic-provider-key",
  });
  await store.save({ providerId: "litellm", apiKey: "synthetic-gateway-key" });
  assert.doesNotMatch(
    await fs.readFile(store.file, "utf8"),
    /synthetic-gateway-key|synthetic-provider-key/,
  );
  assert.equal(
    await new CredentialStore(root, encryption).get("litellm"),
    "synthetic-gateway-key",
  );
  await store.remove({ providerId: "litellm" });
  assert.equal(await store.get("openrouter"), "synthetic-provider-key");
  assert.equal((await store.status("litellm")).configured, false);
});

test("OpenRouter keys use encrypted storage and preserve existing provider keys through restart and removal", async (t) => {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-openrouter-"),
  );
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const encryption = {
    isEncryptionAvailable: () => true,
    encryptString: (key) => Buffer.from([...key].reverse().join("")),
    decryptString: (bytes) => [...bytes.toString()].reverse().join(""),
  };
  const store = new CredentialStore(root, encryption);
  await store.save({ providerId: "gemini", apiKey: "legacy-gemini-secret" });
  await store.save({ providerId: "nvidia", apiKey: "nvapi-legacy-secret" });
  await store.save({
    providerId: "openrouter",
    apiKey: "sk-or-v1-synthetic-secret",
  });
  assert.doesNotMatch(
    await fs.readFile(store.file, "utf8"),
    /sk-or-v1-synthetic-secret|legacy-gemini-secret|nvapi-legacy-secret/,
  );
  const restarted = new CredentialStore(root, encryption);
  assert.equal(await restarted.get("openrouter"), "sk-or-v1-synthetic-secret");
  await restarted.remove({ providerId: "openrouter" });
  assert.equal(await restarted.get("gemini"), "legacy-gemini-secret");
  assert.equal(await restarted.get("nvidia"), "nvapi-legacy-secret");
  await assert.rejects(restarted.get("openrouter"), { code: "AUTH_REQUIRED" });
});

test("NVIDIA credentials preserve legacy Gemini storage and remain isolated on removal", async (t) => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-nvidia-"));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const encryption = {
    isEncryptionAvailable: () => true,
    encryptString: (key) => Buffer.from([...key].reverse().join("")),
    decryptString: (bytes) => [...bytes.toString()].reverse().join(""),
  };
  const store = new CredentialStore(root, encryption);
  await store.save({ providerId: "gemini", apiKey: "gemini-test-secret" });
  assert.equal((await store.status("nvidia")).configured, false);
  await store.save({ providerId: "nvidia", apiKey: "nvapi-test-secret" });
  const restarted = new CredentialStore(root, encryption);
  assert.equal(await restarted.get("nvidia"), "nvapi-test-secret");
  assert.equal(await restarted.get(), "gemini-test-secret");
  assert.doesNotMatch(
    await fs.readFile(store.file, "utf8"),
    /nvapi-test-secret|gemini-test-secret/,
  );
  await restarted.remove({ providerId: "nvidia" });
  assert.equal(await restarted.get(), "gemini-test-secret");
  await assert.rejects(restarted.get("nvidia"), { code: "AUTH_REQUIRED" });
});

test("Gemini credential validation accepts authorization and legacy keys without exposing invalid input", () => {
  for (const apiKey of [
    "AQ.synthetic-authorization_key.123",
    "AIzaSyntheticLegacyKey123",
  ]) {
    assert.equal(
      parseCredential({ providerId: "gemini", apiKey: `  ${apiKey}\n` }).apiKey,
      apiKey,
    );
  }
  for (const apiKey of [
    '"AQ.synthetic-secret"',
    "AQ.synthetic secret",
    "AQ.synthetic\r\nheader",
    "short",
  ]) {
    assert.throws(
      () => parseCredential({ providerId: "gemini", apiKey }),
      (error) => {
        assert.equal(error.code, "MODEL_INVALID_REQUEST");
        assert.match(error.message, /complete Gemini API key/);
        assert.ok(!JSON.stringify(error).includes(apiKey));
        return true;
      },
    );
  }
});

test("credentials store ciphertext only, survive reload, remove cleanly, and fail closed without encryption", async (t) => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-credentials-"));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const encryption = {
    isEncryptionAvailable: () => true,
    encryptString: () => Buffer.from("opaque-ciphertext"),
    decryptString: () => "test-secret-key",
  };
  const store = new CredentialStore(root, encryption);
  assert.equal((await store.status()).configured, false);
  await assert.rejects(store.get(), { code: "AUTH_REQUIRED" });
  assert.equal(
    (await store.save({ providerId: "gemini", apiKey: "test-secret-key" }))
      .configured,
    true,
  );
  assert.doesNotMatch(await fs.readFile(store.file, "utf8"), /test-secret-key/);
  assert.equal(
    await new CredentialStore(root, encryption).get(),
    "test-secret-key",
  );
  assert.throws(
    () => store.save({ providerId: "other", apiKey: "test-secret-key" }),
    (error) => {
      assert.doesNotMatch(JSON.stringify(error), /test-secret-key/);
      return error.code === "MODEL_INVALID_REQUEST";
    },
  );
  encryption.isEncryptionAvailable = () => false;
  await assert.rejects(
    store.save({ providerId: "gemini", apiKey: "test-secret-key" }),
    { code: "AUTH_STORAGE_UNAVAILABLE" },
  );
  encryption.isEncryptionAvailable = () => true;
  encryption.getSelectedStorageBackend = () => "basic_text";
  await assert.rejects(store.get(), { code: "AUTH_STORAGE_UNAVAILABLE" });
  await store.remove({ providerId: "gemini" });
  assert.equal((await store.status()).configured, false);
  await fs.writeFile(store.file, "broken-test-secret-key");
  await assert.rejects(store.read(), (error) => {
    assert.doesNotMatch(JSON.stringify(error), /broken-test-secret-key/);
    return error.code === "MODEL_STORAGE_INVALID";
  });
  await assert.rejects(
    store.save({ providerId: "gemini", apiKey: "test-secret-key" }),
  );
  assert.equal(await fs.readFile(store.file, "utf8"), "broken-test-secret-key");
});
