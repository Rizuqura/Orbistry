# Signing an Orbistry Engine

This guide explains how an engine author creates a signing key, signs a standard package, verifies a publisher and grants local trust. The package structure and operation contract are covered in [Engine Authoring](ENGINE_AUTHORING.md).

Orbistry uses **Ed25519 publisher signatures**. Signing is optional for existing packages, but any present signature must verify before a package can be installed, listed, trusted or executed. `check` accepts valid unsigned packages; `verify` requires a signature. Signature validity, publisher identity, local trust and Entity permission are separate decisions.

## Where Engines appear in Settings

Open **Settings → Engines**. The list shows:

- Registered built-in/external integrations and their operation names.
- Installed packages in the selected Universe, their versions, local trust and signature status.
- Exact package SHA-256, signing-key fingerprint, Entity links, permissions and operation schemas.

Use the search field and select a row to inspect its details. **Refresh list** reloads packages changed through the terminal. This screen is read-only: opening it does not sign, install, trust, link or execute an Engine. Registered integrations are definitions, not proof of connectivity or successful execution. Signing status applies to standard third-party package manifests, not to the existing specialized built-in adapter formats.

## 1. Create or prepare the package

Run these commands from the Orbistry repository with its dependencies installed:

```powershell
npm.cmd run engine -- init --source "C:\EngineProjects\my-engine" --id my-engine
```

The source package has this structure:

```text
my-engine/
  engine_manifest.json
  index.cjs
  README.md
  lib/                      # optional integrity-listed helper files
```

The manifest remains `schema_version: 2`, `protocol: "orbistry.engine/1"`. It declares identity/version, entry, operations, input/output contracts and SHA-256 file checksums. The entry exports `async execute({ operation, input, context })`. Never put a private key or passphrase in this folder.

Finish editing and formatting before sealing:

```powershell
npm.cmd run engine -- seal --source "C:\EngineProjects\my-engine"
npm.cmd run engine -- check --source "C:\EngineProjects\my-engine"
```

`seal` updates the file inventory/checksums and deliberately removes any old signature. After edits, repeat **seal → sign → verify**. Signing never silently seals changed code.

## 2. Generate a publisher key

Store keys in a protected folder outside the package and outside version control. The private key signs; the public key verifies. Back up the private key securely because it cannot be recovered from the public key.

The recommended PowerShell workflow uses an encrypted private key and a masked passphrase prompt:

```powershell
$enginePassphrase = Read-Host "Publisher key passphrase (8+ characters)" -AsSecureString
$env:ORBISTRY_ENGINE_PASSPHRASE = [System.Net.NetworkCredential]::new("", $enginePassphrase).Password

try {
  npm.cmd run engine -- keygen `
    --private-key "C:\EngineKeys\publisher.engine-private.pem" `
    --public-key "C:\EngineKeys\publisher.public.pem" `
    --passphrase-env ORBISTRY_ENGINE_PASSPHRASE

  if ($LASTEXITCODE -ne 0) { throw "Key generation failed; check the output before signing." }

  npm.cmd run engine -- sign `
    --source "C:\EngineProjects\my-engine" `
    --private-key "C:\EngineKeys\publisher.engine-private.pem" `
    --passphrase-env ORBISTRY_ENGINE_PASSPHRASE

  if ($LASTEXITCODE -ne 0) { throw "Signing failed; do not install this package." }
}
finally {
  Remove-Item Env:\ORBISTRY_ENGINE_PASSPHRASE -ErrorAction SilentlyContinue
  $enginePassphrase.Dispose()
}
```

`keygen` creates new files and refuses overwrites. Its JSON output contains paths and the public-key fingerprint, never private key bytes or the passphrase. If the key already exists, skip `keygen` and run `sign` with that key and passphrase. A failed command must be corrected before continuing; verify the final package explicitly below.

`--passphrase-env` names an environment variable; the secret itself does not appear in command arguments. Omitting this option creates/loads an unencrypted key, so use that mode only when the key file is otherwise appropriately protected. Private files use mode `0600` where supported; on Windows, folder/file ACLs determine access. The repository ignores the recommended `*.engine-private.pem` filename pattern, but this does not protect keys stored under arbitrary names.

## 3. Verify the signature and publisher

Obtain the expected public key independently from the package, such as through the author's verified repository or a separately authenticated channel. Then run:

```powershell
npm.cmd run engine -- verify `
  --source "C:\EngineProjects\my-engine" `
  --public-key "C:\EngineKeys\publisher.public.pem"
```

A successful result includes:

```json
{
  "signature": {
    "status": "valid",
    "keyId": "sha256:<64 lowercase hex characters>",
    "algorithm": "Ed25519"
  },
  "valid": true,
  "publisherKeyPinned": true
}
```

The CLI also returns the Engine ID, version and exact signed-manifest digest. Placeholders above describe the format; actual values are generated by the tool.

Without `--public-key`, verification checks against the key embedded in the manifest and reports `publisherKeyPinned: false`. That establishes consistency with the included key, **not who owns it**. An attacker can create a different key and self-sign different code. Compare fingerprints or pin the independently obtained public key before trusting a publisher.

No certificate authority, automatic publisher-key trust, certificate chain, timestamp authority or online revocation service is implied by this format.

## 4. Install, review, trust and link

```powershell
npm.cmd run engine -- install --vault "C:\Universe" --source "C:\EngineProjects\my-engine"
npm.cmd run engine -- trust --vault "C:\Universe" --id my-engine --digest "<digest returned by verify/install>"
npm.cmd run engine -- link --vault "C:\Universe" --entity "<saved-entity-id>" --id my-engine --operations add
```

Before `trust`, review all code and confirm the installed digest matches the verified package. A valid signature never grants local trust or Entity authority automatically. The default link requires approval for each run; standing permission and outbound-network consent are explicit link options described in the authoring guide.

The installed layout is managed by the registry:

```text
<Universe>/.engine/
  packages/<engine-id>/<version>/engine_manifest.json
  packages/<engine-id>/<version>/index.cjs
  registry/registry.json
  registry/executions/<execution-uuid>.json
  registry/results/<execution-uuid>.json
```

The signing commands do not place private keys in this layout; authors must never bundle keys or secrets as package files. Publish the signed package, optionally alongside its public key. HTTPS pulling verifies the same signatures and file checksums but still installs untrusted. Installing changed bytes under an existing version is refused; publish a new version, verify it, then explicitly trust and relink it.

## Signature format

The only added manifest field is the optional top-level `signature` object. The generator writes it; authors should not hand-edit its computed values:

```json
{
  "signature": {
    "signature_version": 1,
    "algorithm": "Ed25519",
    "key_id": "sha256:<SHA-256 of public-key SPKI DER>",
    "public_key": "-----BEGIN PUBLIC KEY-----\n<base64 SPKI>\n-----END PUBLIC KEY-----\n",
    "manifest_digest": "<SHA-256 of canonical unsigned manifest>",
    "value": "<base64 of the 64-byte Ed25519 signature>"
  }
}
```

The complete machine-readable formats are [manifest schema](engine-manifest.schema.json) and [signature schema](engine-signature.schema.json). CLI `check` and `verify` perform additional semantic and cryptographic checks beyond those schemas.

| Field               | Meaning                                                                             |
| ------------------- | ----------------------------------------------------------------------------------- |
| `signature_version` | Signature protocol version, currently `1`                                           |
| `algorithm`         | Exact literal `Ed25519`                                                             |
| `key_id`            | `sha256:` plus 64 lowercase hex characters, hashing SPKI DER public-key bytes       |
| `public_key`        | Ed25519 public key in SPKI PEM; private-key PEM is forbidden                        |
| `manifest_digest`   | 64 lowercase hex characters hashing the canonical payload below                     |
| `value`             | Standard padded base64 encoding of the 64-byte signature; 88 characters ending `==` |

Key files use SPKI PEM for the public key and PKCS8 PEM for the private key. With the passphrase option, the private PKCS8 PEM is encrypted using Node's `aes-256-cbc` export support. Node's [crypto signing API](https://nodejs.org/api/crypto.html#cryptosignalgorithm-data-key-callback) supplies the Ed25519 implementation; no custom cryptographic primitive is used.

### Exact signed bytes

1. Parse the raw UTF-8 manifest JSON and remove only its top-level `signature` property.
2. Encode the remaining JSON deterministically: object keys sorted using JavaScript UTF-16 code-unit ordering; array order preserved; strings and finite numbers encoded with `JSON.stringify`; no whitespace. This is Orbistry's versioned profile, not a claim of complete RFC 8785 support.
3. Compute lowercase hexadecimal `SHA256(UTF8(canonicalJSON))`. This is `manifest_digest`.
4. Sign these exact UTF-8 message bytes, without a trailing newline:

```text
orbistry.engine.signature/1\n<manifest_digest>
```

Here `\n` represents one actual LF byte (`0a`), not a backslash and letter. Node signs/verifies this message with Ed25519 and a `null` algorithm parameter. The domain prefix separates this protocol from unrelated uses of the same key.

The canonical payload includes every declared manifest field and every file checksum. Consequently, operation/description/permission/schema changes invalidate the signature, and file changes fail integrity validation. Manifest key ordering or JSON indentation alone does not invalidate the signature.

Local trust uses a different digest: SHA-256 of the **exact complete signed-manifest bytes**, including signature metadata. Therefore formatting can preserve cryptographic validity while changing the local trust digest. Installation checks every file digest as well. Hashes/signatures protect integrity relative to the verified key; they do not establish provider-data correctness or fresh market observations.

## API and troubleshooting

The authoring API is `electron/engines/registry/signing.cjs`:

```javascript
const {
  createSigningKey,
  signPackage,
  verifyPackage,
} = require("./electron/engines/registry/signing.cjs");
```

`createSigningKey(privateFile, publicFile, passphrase?)` creates new files; `signPackage(directory, privateFile, passphrase?)` atomically replaces only the author manifest; `verifyPackage(directory, expectedPublicFile?)` reads/verifies without executing code or modifying trust. Private keys/passphrases are not accepted through renderer IPC or model tool arguments.

Typical errors:

- `ENGINE_SIGNATURE_REQUIRED`: unsigned package passed to `verify`.
- `ENGINE_SIGNATURE_INVALID`: altered manifest, proof or signing-key metadata.
- `ENGINE_SIGNER_MISMATCH`: proof uses a different key from the pinned publisher key.
- `ENGINE_INTEGRITY_FAILED`: package file bytes/inventory do not match the manifest.
- `ENGINE_KEY_INVALID`: wrong passphrase, wrong key type or unreadable key.
- `ENGINE_KEY_IN_PACKAGE`: private signing key is inside the package source.
- `ENGINE_KEY_STORAGE_FAILED`: output key paths already exist or cannot be written.

For key rotation, create a new key under new filenames, distribute its fingerprint independently and publish a new engine version. Review/trust/relink that version explicitly. For a suspected compromised key, stop trusting affected packages and remove/revoke their local links; there is no automatic key-wide revocation service in this release.

## Verification and architecture notes

The implementation preserves manifest v2 and execution protocol v1 for unsigned packages. Every present signature is checked during the same offline integrity inspection used by installation, pulling, discovery and worker execution. Settings performs discovery only; no install/trust/sign/execute endpoint was added to the renderer. All Engine authority remains with trusted application code and explicit local policy.

Tests use disposable keys and synthetic packages; no production publisher keys are generated by the test suite. Coverage includes encrypted keys, overwrite refusal, wrong passphrases, signer pinning, metadata/file/key tampering, canonical formatting, stale-signature removal, independent local trust, HTTPS transport fixtures and real CLI/worker execution. Desktop acceptance covers signed/unsigned rows, Entity links, search, responsive layout, unchanged registry bytes and no new executions while browsing.

Observed on 23 November 2026: 25 focused registry/signing tests passed; the full suite reported 523 tests, 521 passed and 2 optional live skips, with zero failures. Build, typecheck, formatting, source/import and architecture checks passed. The fresh-build production-entry Electron fixture passed signed-package worker execution, Settings inspection, search and command formatting, unchanged registry/execution records while browsing, assigned chat/cancellation and preserved agent definitions, with zero page errors. HTTPS transport was mocked; no live publisher/model availability is claimed.

**Debug Audit:** the previous registry's exact-byte digest approval was local trust, not publisher signing. This change adds optional cryptographic publisher proof while preserving that approval boundary. A valid self-signature is never treated as verified identity or permission. Trusted engine code still runs with the current user's OS permissions; signing does not create a security sandbox.

## Architecture decision — optional publisher proof

**Status:** implemented.

**Context:** authors need a verifiable distribution format, and Settings needs a truthful Engine inventory. The existing checksum/local-trust flow provided no publisher-key proof.

**Decision:** add optional signature v1 metadata to manifest v2, verified by the existing offline package inspection boundary. Use Node Ed25519 primitives, explicit publisher-key pinning and independent digest-based local trust. Settings consumes read-only discovery metadata and exposes no signing/private-key or package-mutation endpoint.

**Alternatives considered:** checksums alone cannot prove possession of a publisher key; automatically trusting an embedded self-signing key would confuse integrity with identity and authority. A certificate authority service and hostile-plugin sandbox are separate designs.

**Consequences and migration:** unsigned packages and built-in adapter formats remain supported without migration. Changed package bytes still require a new immutable engine version and local review. Old strict manifest validators may reject the new optional signature field; use an Orbistry build/tooling version supporting signing. Key ownership, private-key storage, independent public-key distribution and revocation decisions remain with the operator.

**Verification:** retain the cryptographic, tamper, pinning, trust-separation, CLI/worker and read-only desktop regressions described above.
