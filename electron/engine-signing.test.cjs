const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { promisify } = require("node:util");
const { execFile } = require("node:child_process");
const {
  initPackage,
  pullPackage,
} = require("./engines/registry/authoring.cjs");
const {
  inspectPackage,
  sealPackage,
} = require("./engines/registry/package.cjs");
const {
  createSigningKey,
  signPackage,
  verifyPackage,
} = require("./engines/registry/signing.cjs");
const { EnginePackageRegistry } = require("./engines/registry/registry.cjs");

/** Uses real cryptography and disposable package/Universe files. Private keys stay outside package sources and all fixture paths are removed after the test. */
async function fixture(t) {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-engine-signing-"),
  );
  t.after(async () => {
    assert.ok(
      path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep),
    );
    await fs.rm(root, { recursive: true, force: true });
  });
  const source = path.join(root, "source"),
    vault = path.join(root, "Universe"),
    privateFile = path.join(root, "publisher.engine-private.pem"),
    publicFile = path.join(root, "publisher.public.pem");
  await initPackage(source, "signed-math");
  await fs.mkdir(vault);
  return { root, source, vault, privateFile, publicFile };
}

test("Ed25519 keys can be encrypted, never overwrite existing files and never expose private bytes in metadata", async (t) => {
  const f = await fixture(t),
    passphrase = "synthetic-passphrase-only";
  const result = await createSigningKey(
    f.privateFile,
    f.publicFile,
    passphrase,
  );
  const original = await fs.readFile(f.privateFile, "utf8");
  assert.match(original, /BEGIN ENCRYPTED PRIVATE KEY/);
  assert.equal(result.encrypted, true);
  assert.match(result.keyId, /^sha256:[a-f0-9]{64}$/);
  assert.doesNotMatch(
    JSON.stringify(result),
    /BEGIN .*PRIVATE KEY|synthetic-passphrase/,
  );
  await assert.rejects(createSigningKey(f.privateFile, f.publicFile), {
    code: "ENGINE_KEY_STORAGE_FAILED",
  });
  assert.equal(await fs.readFile(f.privateFile, "utf8"), original);
  await assert.rejects(
    signPackage(f.source, f.privateFile, "wrong-passphrase"),
    { code: "ENGINE_KEY_INVALID" },
  );
  await assert.rejects(
    signPackage(f.source, path.join(f.root, "missing-key.pem")),
    { code: "ENGINE_KEY_INVALID" },
  );
  const signed = await signPackage(f.source, f.privateFile, passphrase);
  assert.equal(signed.signature.keyId, result.keyId);
  assert.equal(
    (await verifyPackage(f.source, f.publicFile)).publisherKeyPinned,
    true,
  );
  const freshPrivate = path.join(f.root, "new-private.pem");
  await assert.rejects(createSigningKey(freshPrivate, f.publicFile), {
    code: "ENGINE_KEY_STORAGE_FAILED",
  });
  await assert.rejects(fs.stat(freshPrivate), { code: "ENOENT" });
});

test("signature canonicalization tolerates object key order and formatting while exact-byte trust digests change", async (t) => {
  const f = await fixture(t);
  await createSigningKey(f.privateFile, f.publicFile);
  const signed = await signPackage(f.source, f.privateFile);
  const file = path.join(f.source, "engine_manifest.json");
  const manifest = JSON.parse(await fs.readFile(file, "utf8"));
  await fs.writeFile(
    file,
    JSON.stringify(Object.fromEntries(Object.entries(manifest).reverse())),
  );
  const result = await verifyPackage(f.source, f.publicFile);
  assert.equal(result.signature.status, "valid");
  assert.equal(result.signature.keyId, signed.signature.keyId);
  assert.notEqual(result.digest, signed.digest);
});

test("metadata/code/key/signature tampering fails before execution and expected publisher keys are pinned", async (t) => {
  const f = await fixture(t);
  await createSigningKey(f.privateFile, f.publicFile);
  await signPackage(f.source, f.privateFile);
  const file = path.join(f.source, "engine_manifest.json"),
    original = await fs.readFile(file, "utf8"),
    data = JSON.parse(original);
  await fs.writeFile(
    file,
    JSON.stringify({ ...data, description: "Changed declaration" }),
  );
  await assert.rejects(inspectPackage(f.source), {
    code: "ENGINE_SIGNATURE_INVALID",
  });
  const first = data.signature.value[0] === "A" ? "B" : "A";
  await fs.writeFile(
    file,
    JSON.stringify({
      ...data,
      signature: {
        ...data.signature,
        value: first + data.signature.value.slice(1),
      },
    }),
  );
  await assert.rejects(inspectPackage(f.source), {
    code: "ENGINE_SIGNATURE_INVALID",
  });
  await fs.writeFile(
    file,
    JSON.stringify({
      ...data,
      signature: {
        ...data.signature,
        public_key: await fs.readFile(f.privateFile, "utf8"),
      },
    }),
  );
  await assert.rejects(inspectPackage(f.source), {
    code: "ENGINE_SIGNATURE_INVALID",
  });
  await fs.writeFile(file, original);
  await fs.appendFile(path.join(f.source, "index.cjs"), "\n// changed");
  await assert.rejects(inspectPackage(f.source), {
    code: "ENGINE_INTEGRITY_FAILED",
  });
  await fs.writeFile(
    path.join(f.source, "index.cjs"),
    await initTemporaryEntry(f.root),
  );
  await fs.writeFile(
    file,
    JSON.stringify({
      ...data,
      signature: { ...data.signature, key_id: "sha256:" + "0".repeat(64) },
    }),
  );
  await assert.rejects(inspectPackage(f.source), {
    code: "ENGINE_SIGNATURE_INVALID",
  });
  await fs.writeFile(file, original);
  const secondPrivate = path.join(f.root, "other-private.pem"),
    secondPublic = path.join(f.root, "other-public.pem");
  await createSigningKey(secondPrivate, secondPublic);
  await assert.rejects(verifyPackage(f.source, secondPublic), {
    code: "ENGINE_SIGNER_MISMATCH",
  });
});

/** Reads an untouched generated entry for tamper recovery without copying implementation text into the test. */
async function initTemporaryEntry(root) {
  const directory = path.join(root, "untouched");
  await initPackage(directory, "untouched-math");
  return fs.readFile(path.join(directory, "index.cjs"));
}

test("seal deliberately removes stale proof and unsigned packages cannot pass signature verification", async (t) => {
  const f = await fixture(t);
  await assert.rejects(verifyPackage(f.source), {
    code: "ENGINE_SIGNATURE_REQUIRED",
  });
  await createSigningKey(f.privateFile, f.publicFile);
  await signPackage(f.source, f.privateFile);
  await fs.appendFile(path.join(f.source, "index.cjs"), "\n// new author edit");
  const sealed = await sealPackage(f.source);
  assert.equal(sealed.signature.status, "unsigned");
  assert.equal(sealed.manifest.signature, undefined);
  const copiedKey = path.join(f.source, "private.pem");
  await fs.copyFile(f.privateFile, copiedKey);
  await assert.rejects(signPackage(f.source, copiedKey), {
    code: "ENGINE_KEY_IN_PACKAGE",
  });
});

test("signed installs/pulls remain untrusted and local Entity linking remains separate from signing", async (t) => {
  const f = await fixture(t);
  await createSigningKey(f.privateFile, f.publicFile);
  await signPackage(f.source, f.privateFile);
  await require("./domains/entity/worldview-store.cjs").saveWorldViewChip(
    f.vault,
    {
      id: "company",
      name: "Company",
      icon: "",
      tags: [],
      color: "#263f4b",
      position: { x: 0, y: 0 },
    },
  );
  const registry = new EnginePackageRegistry(f.vault, {
    authorize: async () => true,
  });
  const checked = await inspectPackage(f.source);
  const installed = await pullPackage(
    registry,
    "https://example.test/package/engine_manifest.json",
    {
      fetchImpl: async (url) =>
        new Response(
          checked.files.get(new URL(url).pathname.split("/").at(-1)),
        ),
    },
  );
  assert.equal(installed.trusted, false);
  let catalog = await registry.catalog("company");
  assert.equal(catalog.engines[0].signature.status, "valid");
  assert.deepEqual(catalog.tools, []);
  await assert.rejects(
    registry.link({
      entityId: "company",
      engineId: "signed-math",
      operations: ["add"],
    }),
    { code: "ENGINE_NOT_TRUSTED" },
  );
  await registry.trust(installed.engineId, installed.digest);
  await registry.link({
    entityId: "company",
    engineId: "signed-math",
    operations: ["add"],
  });
  catalog = await registry.catalog();
  assert.equal(catalog.engines[0].links[0].entityId, "company");
  const result = await registry.execute({
    entityId: "company",
    engineId: "signed-math",
    operation: "add",
    input: { left: 2, right: 3 },
    approved: true,
  });
  assert.deepEqual(result.data, { sum: 5 });
  assert.equal(
    (await registry.readResult("company", result.receipt.executionId)).origin,
    "historical",
  );
});

test("real terminal keygen/sign/verify workflow supports encrypted keys without printing the passphrase", async (t) => {
  const f = await fixture(t),
    script = path.resolve(__dirname, "../scripts/orbistry-engine.cjs");
  const cli = async (args) =>
    JSON.parse(
      (
        await promisify(execFile)(process.execPath, [script, ...args], {
          windowsHide: true,
          env: {
            ...process.env,
            ORBISTRY_SIGN_TEST_PASSPHRASE: "test-only-passphrase",
          },
        })
      ).stdout,
    );
  const options = ["--passphrase-env", "ORBISTRY_SIGN_TEST_PASSPHRASE"];
  const key = await cli([
    "keygen",
    "--private-key",
    f.privateFile,
    "--public-key",
    f.publicFile,
    ...options,
  ]);
  assert.equal(key.encrypted, true);
  const signed = await cli([
    "sign",
    "--source",
    f.source,
    "--private-key",
    f.privateFile,
    ...options,
  ]);
  assert.equal(signed.signature.status, "valid");
  const verified = await cli([
    "verify",
    "--source",
    f.source,
    "--public-key",
    f.publicFile,
  ]);
  assert.equal(verified.publisherKeyPinned, true);
  assert.doesNotMatch(
    JSON.stringify([key, signed, verified]),
    /test-only-passphrase|BEGIN .*PRIVATE KEY/,
  );
});
