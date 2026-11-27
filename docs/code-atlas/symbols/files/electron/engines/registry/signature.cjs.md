# electron/engines/registry/signature.cjs: symbols

[Atlas](<../../../../../README.md>) / [Engine package registry](<../../../../../modules/engine-registry.md>) / [electron/engines/registry/signature.cjs:1](<../../../../../../../electron/engines/registry/signature.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/registry/signature.cjs](<signature.cjs.md#s-28422d3d99dd34a2>) (Module)
- [DOMAIN](<signature.cjs.md#s-bb5276fc6d0aea9d>) (VariableDeclaration)
- [canonicalJson](<signature.cjs.md#s-8b357e437a59fd61>) (FunctionDeclaration)
- [canonicalJson.&lt;anonymous@18:23&gt;](<signature.cjs.md#s-e8b96c3bcb873b16>) (ArrowFunction)
- [canonicalJson.&lt;anonymous@30:11&gt;](<signature.cjs.md#s-6daf180d66370aaa>) (ArrowFunction)
- [signingDigest](<signature.cjs.md#s-41e21f01cf00ee75>) (FunctionDeclaration)
- [publicIdentity](<signature.cjs.md#s-c2fa63b996ceefd7>) (FunctionDeclaration)
- [verifySignature](<signature.cjs.md#s-9f88c255d4e362de>) (FunctionDeclaration)
- [createSignature](<signature.cjs.md#s-429b3d691e551f54>) (FunctionDeclaration)

<a id="s-28422d3d99dd34a2"></a>

## electron/engines/registry/signature.cjs

[electron/engines/registry/signature.cjs:1](<../../../../../../../electron/engines/registry/signature.cjs#L1>) · Module · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [electron/engines/registry/signature.cjs:1](<../../../../../../../electron/engines/registry/signature.cjs#L1>)
- require — module-loader; [electron/engines/registry/signature.cjs:2](<../../../../../../../electron/engines/registry/signature.cjs#L2>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bb5276fc6d0aea9d"></a>

## DOMAIN

[electron/engines/registry/signature.cjs:3](<../../../../../../../electron/engines/registry/signature.cjs#L3>) · VariableDeclaration · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: DOMAIN ([electron/engines/registry/signature.cjs:1](<../../../../../../../electron/engines/registry/signature.cjs#L1>)).

Lexical owner: [electron/engines/registry/signature.cjs](<signature.cjs.md#s-28422d3d99dd34a2>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8b357e437a59fd61"></a>

## canonicalJson

[electron/engines/registry/signature.cjs:6](<../../../../../../../electron/engines/registry/signature.cjs#L6>) · FunctionDeclaration · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

Encodes protocol JSON deterministically: sorted UTF-16 object keys, original array order and JSON.stringify primitives. This bounded profile is not a claim of full RFC 8785 support.

Purpose evidence: jsdoc.

Exported as: canonicalJson ([electron/engines/registry/signature.cjs:1](<../../../../../../../electron/engines/registry/signature.cjs#L1>)).

Lexical owner: [electron/engines/registry/signature.cjs](<signature.cjs.md#s-28422d3d99dd34a2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |
| depth | number | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/signature.cjs:8](<../../../../../../../electron/engines/registry/signature.cjs#L8>)
- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/signature.cjs:36](<../../../../../../../electron/engines/registry/signature.cjs#L36>)

**Called by (statically resolved):**

- [canonicalJson.&lt;anonymous@18:23&gt;](<signature.cjs.md#s-e8b96c3bcb873b16>) — [electron/engines/registry/signature.cjs:18](<../../../../../../../electron/engines/registry/signature.cjs#L18>)
- [canonicalJson.&lt;anonymous@30:11&gt;](<signature.cjs.md#s-6daf180d66370aaa>) — [electron/engines/registry/signature.cjs:31](<../../../../../../../electron/engines/registry/signature.cjs#L31>)
- [signingDigest](<signature.cjs.md#s-41e21f01cf00ee75>) — [electron/engines/registry/signature.cjs:45](<../../../../../../../electron/engines/registry/signature.cjs#L45>)

Unresolved / external call sites: 10.

- Number.isFinite — external-or-dynamic-dispatch; [electron/engines/registry/signature.cjs:13](<../../../../../../../electron/engines/registry/signature.cjs#L13>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/engines/registry/signature.cjs:15](<../../../../../../../electron/engines/registry/signature.cjs#L15>)
- Array.isArray — external-or-dynamic-dispatch; [electron/engines/registry/signature.cjs:16](<../../../../../../../electron/engines/registry/signature.cjs#L16>)
- value.map((item) =&gt; canonicalJson(item, depth + 1)).join — external-or-dynamic-dispatch; [electron/engines/registry/signature.cjs:18](<../../../../../../../electron/engines/registry/signature.cjs#L18>)
- value.map — external-or-dynamic-dispatch; [electron/engines/registry/signature.cjs:18](<../../../../../../../electron/engines/registry/signature.cjs#L18>)
- Object.getPrototypeOf — external-or-dynamic-dispatch; [electron/engines/registry/signature.cjs:23](<../../../../../../../electron/engines/registry/signature.cjs#L23>)
- Object.keys(value) .sort() .map( (key) =&gt; JSON.stringify(key) + ":" + canonicalJson(value&#91;key&#93;, depth + 1), ) .join — external-or-dynamic-dispatch; [electron/engines/registry/signature.cjs:27](<../../../../../../../electron/engines/registry/signature.cjs#L27>)
- Object.keys(value) .sort() .map — external-or-dynamic-dispatch; [electron/engines/registry/signature.cjs:27](<../../../../../../../electron/engines/registry/signature.cjs#L27>)
- 2 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e8b96c3bcb873b16"></a>

## canonicalJson.&lt;anonymous@18:23&gt;

[electron/engines/registry/signature.cjs:18](<../../../../../../../electron/engines/registry/signature.cjs#L18>) · ArrowFunction · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [canonicalJson](<signature.cjs.md#s-8b357e437a59fd61>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [canonicalJson](<signature.cjs.md#s-8b357e437a59fd61>) — [electron/engines/registry/signature.cjs:18](<../../../../../../../electron/engines/registry/signature.cjs#L18>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6daf180d66370aaa"></a>

## canonicalJson.&lt;anonymous@30:11&gt;

[electron/engines/registry/signature.cjs:30](<../../../../../../../electron/engines/registry/signature.cjs#L30>) · ArrowFunction · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [canonicalJson](<signature.cjs.md#s-8b357e437a59fd61>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| key | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [canonicalJson](<signature.cjs.md#s-8b357e437a59fd61>) — [electron/engines/registry/signature.cjs:31](<../../../../../../../electron/engines/registry/signature.cjs#L31>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- JSON.stringify — external-or-dynamic-dispatch; [electron/engines/registry/signature.cjs:31](<../../../../../../../electron/engines/registry/signature.cjs#L31>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-41e21f01cf00ee75"></a>

## signingDigest

[electron/engines/registry/signature.cjs:43](<../../../../../../../electron/engines/registry/signature.cjs#L43>) · FunctionDeclaration · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

Computes the signed digest from the complete raw manifest excluding only its top-level signature. File digests in that payload bind package contents. Pure.

Purpose evidence: jsdoc.

Exported as: signingDigest ([electron/engines/registry/signature.cjs:1](<../../../../../../../electron/engines/registry/signature.cjs#L1>)).

Lexical owner: [electron/engines/registry/signature.cjs](<signature.cjs.md#s-28422d3d99dd34a2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| manifest | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [sha](<../contracts/contract.cjs.md#s-27c50df18ef30dc9>) — [electron/engines/registry/signature.cjs:45](<../../../../../../../electron/engines/registry/signature.cjs#L45>)
- [canonicalJson](<signature.cjs.md#s-8b357e437a59fd61>) — [electron/engines/registry/signature.cjs:45](<../../../../../../../electron/engines/registry/signature.cjs#L45>)

**Called by (statically resolved):**

- [verifySignature](<signature.cjs.md#s-9f88c255d4e362de>) — [electron/engines/registry/signature.cjs:87](<../../../../../../../electron/engines/registry/signature.cjs#L87>)
- [createSignature](<signature.cjs.md#s-429b3d691e551f54>) — [electron/engines/registry/signature.cjs:116](<../../../../../../../electron/engines/registry/signature.cjs#L116>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c2fa63b996ceefd7"></a>

## publicIdentity

[electron/engines/registry/signature.cjs:49](<../../../../../../../electron/engines/registry/signature.cjs#L49>) · FunctionDeclaration · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

Imports an SPKI Ed25519 public key and returns its DER fingerprint. Private-key PEM is explicitly rejected; parser errors never echo key material.

Purpose evidence: jsdoc.

Exported as: publicIdentity ([electron/engines/registry/signature.cjs:1](<../../../../../../../electron/engines/registry/signature.cjs#L1>)).

Lexical owner: [electron/engines/registry/signature.cjs](<signature.cjs.md#s-28422d3d99dd34a2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| pem | any | compiler-inferred | required |

Returns: { key: any; keyId: string; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [sha](<../contracts/contract.cjs.md#s-27c50df18ef30dc9>) — [electron/engines/registry/signature.cjs:65](<../../../../../../../electron/engines/registry/signature.cjs#L65>)
- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/signature.cjs:68](<../../../../../../../electron/engines/registry/signature.cjs#L68>)

**Called by (statically resolved):**

- [verifySignature](<signature.cjs.md#s-9f88c255d4e362de>) — [electron/engines/registry/signature.cjs:86](<../../../../../../../electron/engines/registry/signature.cjs#L86>)
- [verifySignature](<signature.cjs.md#s-9f88c255d4e362de>) — [electron/engines/registry/signature.cjs:100](<../../../../../../../electron/engines/registry/signature.cjs#L100>)
- [createSignature](<signature.cjs.md#s-429b3d691e551f54>) — [electron/engines/registry/signature.cjs:120](<../../../../../../../electron/engines/registry/signature.cjs#L120>)
- [createSigningKey](<signing.cjs.md#s-dbf5e585ccf2aea6>) — [electron/engines/registry/signing.cjs:54](<../../../../../../../electron/engines/registry/signing.cjs#L54>)

Unresolved / external call sites: 6.

- pem.startsWith — external-or-dynamic-dispatch; [electron/engines/registry/signature.cjs:53](<../../../../../../../electron/engines/registry/signature.cjs#L53>)
- pem.includes — external-or-dynamic-dispatch; [electron/engines/registry/signature.cjs:54](<../../../../../../../electron/engines/registry/signature.cjs#L54>)
- Error — external-or-dynamic-dispatch; [electron/engines/registry/signature.cjs:56](<../../../../../../../electron/engines/registry/signature.cjs#L56>)
- crypto.createPublicKey — external-or-dynamic-dispatch; [electron/engines/registry/signature.cjs:57](<../../../../../../../electron/engines/registry/signature.cjs#L57>)
- Error — external-or-dynamic-dispatch; [electron/engines/registry/signature.cjs:62](<../../../../../../../electron/engines/registry/signature.cjs#L62>)
- key.export — external-or-dynamic-dispatch; [electron/engines/registry/signature.cjs:65](<../../../../../../../electron/engines/registry/signature.cjs#L65>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9f88c255d4e362de"></a>

## verifySignature

[electron/engines/registry/signature.cjs:76](<../../../../../../../electron/engines/registry/signature.cjs#L76>) · FunctionDeclaration · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

Verifies optional publisher proof without granting local trust. An expected external public key pins the signer; an unsigned package cannot satisfy that pin.

Purpose evidence: jsdoc.

Exported as: verifySignature ([electron/engines/registry/signature.cjs:1](<../../../../../../../electron/engines/registry/signature.cjs#L1>)).

Lexical owner: [electron/engines/registry/signature.cjs](<signature.cjs.md#s-28422d3d99dd34a2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| manifest | any | compiler-inferred | required |
| expectedPublicKey | any | compiler-inferred | optional, default present |

Returns: { status: string; keyId: string; algorithm: string; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/signature.cjs:80](<../../../../../../../electron/engines/registry/signature.cjs#L80>)
- [publicIdentity](<signature.cjs.md#s-c2fa63b996ceefd7>) — [electron/engines/registry/signature.cjs:86](<../../../../../../../electron/engines/registry/signature.cjs#L86>)
- [signingDigest](<signature.cjs.md#s-41e21f01cf00ee75>) — [electron/engines/registry/signature.cjs:87](<../../../../../../../electron/engines/registry/signature.cjs#L87>)
- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/signature.cjs:96](<../../../../../../../electron/engines/registry/signature.cjs#L96>)
- [publicIdentity](<signature.cjs.md#s-c2fa63b996ceefd7>) — [electron/engines/registry/signature.cjs:100](<../../../../../../../electron/engines/registry/signature.cjs#L100>)
- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/signature.cjs:101](<../../../../../../../electron/engines/registry/signature.cjs#L101>)

**Called by (statically resolved):**

- [inspectPackage](<package.cjs.md#s-71ed017a00706142>) — [electron/engines/registry/package.cjs:93](<../../../../../../../electron/engines/registry/package.cjs#L93>)
- [verifyPackage](<signing.cjs.md#s-3b8c467c9b1420c7>) — [electron/engines/registry/signing.cjs:151](<../../../../../../../electron/engines/registry/signing.cjs#L151>)

Unresolved / external call sites: 4.

- Buffer.from — external-or-dynamic-dispatch; [electron/engines/registry/signature.cjs:88](<../../../../../../../electron/engines/registry/signature.cjs#L88>)
- bytes.toString — external-or-dynamic-dispatch; [electron/engines/registry/signature.cjs:93](<../../../../../../../electron/engines/registry/signature.cjs#L93>)
- crypto.verify — external-or-dynamic-dispatch; [electron/engines/registry/signature.cjs:94](<../../../../../../../electron/engines/registry/signature.cjs#L94>)
- Buffer.from — external-or-dynamic-dispatch; [electron/engines/registry/signature.cjs:94](<../../../../../../../electron/engines/registry/signature.cjs#L94>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-429b3d691e551f54"></a>

## createSignature

[electron/engines/registry/signature.cjs:109](<../../../../../../../electron/engines/registry/signature.cjs#L109>) · FunctionDeclaration · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

Signs the canonical manifest digest using a caller-loaded Ed25519 private key. Returns public proof only; never persists or returns private material.

Purpose evidence: jsdoc.

Exported as: createSignature ([electron/engines/registry/signature.cjs:1](<../../../../../../../electron/engines/registry/signature.cjs#L1>)).

Lexical owner: [electron/engines/registry/signature.cjs](<signature.cjs.md#s-28422d3d99dd34a2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| manifest | any | compiler-inferred | required |
| privateKey | any | compiler-inferred | required |

Returns: { signature_version: number; algorithm: string; key_id: string; public_key: any; manifest_digest: any; value: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/signature.cjs:111](<../../../../../../../electron/engines/registry/signature.cjs#L111>)
- [signingDigest](<signature.cjs.md#s-41e21f01cf00ee75>) — [electron/engines/registry/signature.cjs:116](<../../../../../../../electron/engines/registry/signature.cjs#L116>)
- [publicIdentity](<signature.cjs.md#s-c2fa63b996ceefd7>) — [electron/engines/registry/signature.cjs:120](<../../../../../../../electron/engines/registry/signature.cjs#L120>)

**Called by (statically resolved):**

- [signPackage](<signing.cjs.md#s-9317466d274715e3>) — [electron/engines/registry/signing.cjs:118](<../../../../../../../electron/engines/registry/signing.cjs#L118>)

Unresolved / external call sites: 6.

- crypto .createPublicKey(privateKey) .export({ format: "pem", type: "spki" }) .toString — external-or-dynamic-dispatch; [electron/engines/registry/signature.cjs:112](<../../../../../../../electron/engines/registry/signature.cjs#L112>)
- crypto .createPublicKey(privateKey) .export — external-or-dynamic-dispatch; [electron/engines/registry/signature.cjs:112](<../../../../../../../electron/engines/registry/signature.cjs#L112>)
- crypto .createPublicKey — external-or-dynamic-dispatch; [electron/engines/registry/signature.cjs:112](<../../../../../../../electron/engines/registry/signature.cjs#L112>)
- crypto .sign(null, Buffer.from(DOMAIN + digest, "utf8"), privateKey) .toString — external-or-dynamic-dispatch; [electron/engines/registry/signature.cjs:123](<../../../../../../../electron/engines/registry/signature.cjs#L123>)
- crypto .sign — external-or-dynamic-dispatch; [electron/engines/registry/signature.cjs:123](<../../../../../../../electron/engines/registry/signature.cjs#L123>)
- Buffer.from — external-or-dynamic-dispatch; [electron/engines/registry/signature.cjs:124](<../../../../../../../electron/engines/registry/signature.cjs#L124>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
