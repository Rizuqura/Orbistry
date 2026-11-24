const fs = require("node:fs/promises");
const path = require("node:path");
const crypto = require("node:crypto");
const { inspectPackage, readBytes, parseJson } = require("./package.cjs");
const {
  createSignature,
  publicIdentity,
  verifySignature,
} = require("./signature.cjs");
const { fail } = require("../contracts/contract.cjs");
const {
  safeDirectory,
  writeTextAtomic,
} = require("../../core/persistence/json-store.cjs");

/** Creates a new publisher key pair at explicit paths, refusing overwrites. PKCS8 encryption is used when passphrase is supplied; private bytes never enter returned metadata. */
async function createSigningKey(privateFile, publicFile, passphrase) {
  if (!privateFile || !publicFile)
    fail(
      "ENGINE_KEY_INVALID",
      "Provide separate private-key and public-key output paths.",
    );
  const privatePath = path.resolve(privateFile),
    publicPath = path.resolve(publicFile);
  if (path.relative(privatePath, publicPath) === "")
    fail("ENGINE_KEY_INVALID", "Private and public key paths must differ.");
  await safeDirectory(path.dirname(privatePath));
  await safeDirectory(path.dirname(publicPath));
  const handles = [];
  try {
    // Reserve both paths before writing either secret or public content.
    handles.push({
      file: privatePath,
      handle: await fs.open(privatePath, "wx", 0o600),
    });
    handles.push({
      file: publicPath,
      handle: await fs.open(publicPath, "wx", 0o644),
    });
    const pair = crypto.generateKeyPairSync("ed25519", {
      publicKeyEncoding: { format: "pem", type: "spki" },
      privateKeyEncoding: {
        format: "pem",
        type: "pkcs8",
        ...(passphrase ? { cipher: "aes-256-cbc", passphrase } : {}),
      },
    });
    await handles[0].handle.writeFile(pair.privateKey);
    await handles[0].handle.sync();
    await handles[1].handle.writeFile(pair.publicKey);
    await handles[1].handle.sync();
    return {
      algorithm: "Ed25519",
      keyId: publicIdentity(pair.publicKey).keyId,
      privateKeyFile: privatePath,
      publicKeyFile: publicPath,
      encrypted: Boolean(passphrase),
    };
  } catch {
    // Remove only files this invocation exclusively created; never delete a pre-existing key.
    for (const entry of handles) {
      await entry.handle.close();
      entry.closed = true;
      await fs.unlink(entry.file);
    }
    fail(
      "ENGINE_KEY_STORAGE_FAILED",
      "Could not create the key pair. Output files must be new and writable.",
    );
  } finally {
    for (const entry of handles) if (!entry.closed) await entry.handle.close();
  }
}

/** Signs an already sealed author package. The private key must be outside the package; encrypted keys require the caller's passphrase. Only the manifest is atomically replaced. */
async function signPackage(directory, privateFile, passphrase) {
  if (!directory || !privateFile)
    fail(
      "ENGINE_KEY_INVALID",
      "Provide the source package and private-key file.",
    );
  const root = await fs.realpath(directory);
  let keyFile;
  try {
    keyFile = await fs.realpath(privateFile);
  } catch {
    fail(
      "ENGINE_KEY_INVALID",
      "Private key file is unavailable. Check the key path and permissions.",
    );
  }
  const relative = path.relative(root, keyFile);
  if (
    !relative.startsWith(".." + path.sep) &&
    relative !== ".." &&
    !path.isAbsolute(relative)
  )
    fail(
      "ENGINE_KEY_IN_PACKAGE",
      "Keep the private signing key outside the Engine package.",
    );
  const checked = await inspectPackage(root);
  let key;
  try {
    key = crypto.createPrivateKey({
      key: await readBytes(keyFile, 16384),
      format: "pem",
      passphrase,
    });
  } catch {
    fail(
      "ENGINE_KEY_INVALID",
      "Private key could not be loaded. Check its format and passphrase.",
    );
  }
  const original = checked.files.get("engine_manifest.json").toString("utf8");
  const source = parseJson(Buffer.from(original));
  const signature = createSignature(source, key);
  const next = JSON.stringify({ ...source, signature }, null, 2) + "\n";
  if (Buffer.byteLength(next) > 256 * 1024)
    fail(
      "ENGINE_MANIFEST_TOO_LARGE",
      "Signed manifest exceeds 256 KiB; the original was preserved.",
    );
  await writeTextAtomic(
    path.join(root, "engine_manifest.json"),
    next,
    original,
  );
  const result = await inspectPackage(root);
  return {
    engineId: result.manifest.engine_id,
    version: result.manifest.engine_version,
    digest: result.digest,
    signature: result.signature,
    valid: true,
  };
}

/** Verifies a signed package; an optional independently obtained public key pins the expected signer. Unsigned packages must use check, and never pass this signature-specific operation. */
async function verifyPackage(directory, publicFile = null) {
  const checked = await inspectPackage(directory);
  if (checked.signature.status !== "valid")
    fail(
      "ENGINE_SIGNATURE_REQUIRED",
      "This package is unsigned. Seal and sign it before signature verification.",
    );
  const expected = publicFile
    ? (await readBytes(path.resolve(publicFile), 4096)).toString("utf8")
    : null;
  const signature = verifySignature(
    parseJson(checked.files.get("engine_manifest.json")),
    expected,
  );
  return {
    engineId: checked.manifest.engine_id,
    version: checked.manifest.engine_version,
    digest: checked.digest,
    signature,
    valid: true,
    publisherKeyPinned: Boolean(expected),
  };
}
module.exports = { createSigningKey, signPackage, verifyPackage };
