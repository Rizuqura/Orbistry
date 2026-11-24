const crypto = require("node:crypto");
const { sha, fail } = require("../contracts/contract.cjs");
const DOMAIN = "orbistry.engine.signature/1\n";

/** Encodes protocol JSON deterministically: sorted UTF-16 object keys, original array order and JSON.stringify primitives. This bounded profile is not a claim of full RFC 8785 support. */
function canonicalJson(value, depth = 0) {
  if (depth > 64)
    fail("ENGINE_SIGNATURE_INVALID", "Signature payload is too deeply nested.");
  if (
    value === null ||
    typeof value === "string" ||
    typeof value === "boolean" ||
    (typeof value === "number" && Number.isFinite(value))
  )
    return JSON.stringify(value);
  if (Array.isArray(value))
    return (
      "[" + value.map((item) => canonicalJson(item, depth + 1)).join(",") + "]"
    );
  if (
    value &&
    typeof value === "object" &&
    Object.getPrototypeOf(value) === Object.prototype
  )
    return (
      "{" +
      Object.keys(value)
        .sort()
        .map(
          (key) =>
            JSON.stringify(key) + ":" + canonicalJson(value[key], depth + 1),
        )
        .join(",") +
      "}"
    );
  fail(
    "ENGINE_SIGNATURE_INVALID",
    "Signature payload must contain ordinary JSON values.",
  );
}

/** Computes the signed digest from the complete raw manifest excluding only its top-level signature. File digests in that payload bind package contents. Pure. */
function signingDigest(manifest) {
  const { signature, ...payload } = manifest;
  return sha(canonicalJson(payload));
}

/** Imports an SPKI Ed25519 public key and returns its DER fingerprint. Private-key PEM is explicitly rejected; parser errors never echo key material. */
function publicIdentity(pem) {
  try {
    if (
      typeof pem !== "string" ||
      !pem.startsWith("-----BEGIN PUBLIC KEY-----") ||
      pem.includes("PRIVATE KEY")
    )
      throw Error("Public key required");
    const key = crypto.createPublicKey({
      key: pem,
      format: "pem",
      type: "spki",
    });
    if (key.asymmetricKeyType !== "ed25519") throw Error("Ed25519 required");
    return {
      key,
      keyId: "sha256:" + sha(key.export({ format: "der", type: "spki" })),
    };
  } catch {
    fail(
      "ENGINE_SIGNATURE_INVALID",
      "Provide a valid Ed25519 SPKI public key.",
    );
  }
}

/** Verifies optional publisher proof without granting local trust. An expected external public key pins the signer; an unsigned package cannot satisfy that pin. */
function verifySignature(manifest, expectedPublicKey = null) {
  const signature = manifest.signature;
  if (!signature) {
    if (expectedPublicKey)
      fail(
        "ENGINE_SIGNATURE_REQUIRED",
        "A signature is required when checking an expected publisher key.",
      );
    return { status: "unsigned", keyId: null, algorithm: null };
  }
  const { key, keyId } = publicIdentity(signature.public_key);
  const digest = signingDigest(manifest);
  const bytes = Buffer.from(signature.value, "base64");
  if (
    keyId !== signature.key_id ||
    digest !== signature.manifest_digest ||
    bytes.length !== 64 ||
    bytes.toString("base64") !== signature.value ||
    !crypto.verify(null, Buffer.from(DOMAIN + digest, "utf8"), key, bytes)
  )
    fail(
      "ENGINE_SIGNATURE_INVALID",
      "Engine signature does not match its manifest and signing key.",
    );
  if (expectedPublicKey && publicIdentity(expectedPublicKey).keyId !== keyId)
    fail(
      "ENGINE_SIGNER_MISMATCH",
      "Engine was signed by a different publisher key.",
    );
  return { status: "valid", keyId, algorithm: "Ed25519" };
}

/** Signs the canonical manifest digest using a caller-loaded Ed25519 private key. Returns public proof only; never persists or returns private material. */
function createSignature(manifest, privateKey) {
  if (privateKey.asymmetricKeyType !== "ed25519")
    fail("ENGINE_KEY_INVALID", "An Ed25519 private key is required.");
  const publicKey = crypto
    .createPublicKey(privateKey)
    .export({ format: "pem", type: "spki" })
    .toString();
  const digest = signingDigest(manifest);
  return {
    signature_version: 1,
    algorithm: "Ed25519",
    key_id: publicIdentity(publicKey).keyId,
    public_key: publicKey,
    manifest_digest: digest,
    value: crypto
      .sign(null, Buffer.from(DOMAIN + digest, "utf8"), privateKey)
      .toString("base64"),
  };
}
module.exports = {
  DOMAIN,
  canonicalJson,
  signingDigest,
  publicIdentity,
  verifySignature,
  createSignature,
};
