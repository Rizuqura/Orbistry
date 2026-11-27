# electron/engines/registry/signing.cjs: symbols

[Atlas](<../../../../../README.md>) / [Engine package registry](<../../../../../modules/engine-registry.md>) / [electron/engines/registry/signing.cjs:1](<../../../../../../../electron/engines/registry/signing.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/registry/signing.cjs](<signing.cjs.md#s-b391e8a33f9617c9>) (Module)
- [createSigningKey](<signing.cjs.md#s-dbf5e585ccf2aea6>) (FunctionDeclaration)
- [signPackage](<signing.cjs.md#s-9317466d274715e3>) (FunctionDeclaration)
- [verifyPackage](<signing.cjs.md#s-3b8c467c9b1420c7>) (FunctionDeclaration)

<a id="s-b391e8a33f9617c9"></a>

## electron/engines/registry/signing.cjs

[electron/engines/registry/signing.cjs:1](<../../../../../../../electron/engines/registry/signing.cjs#L1>) · Module · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- require — module-loader; [electron/engines/registry/signing.cjs:1](<../../../../../../../electron/engines/registry/signing.cjs#L1>)
- require — module-loader; [electron/engines/registry/signing.cjs:2](<../../../../../../../electron/engines/registry/signing.cjs#L2>)
- require — module-loader; [electron/engines/registry/signing.cjs:3](<../../../../../../../electron/engines/registry/signing.cjs#L3>)
- require — module-loader; [electron/engines/registry/signing.cjs:4](<../../../../../../../electron/engines/registry/signing.cjs#L4>)
- require — module-loader; [electron/engines/registry/signing.cjs:9](<../../../../../../../electron/engines/registry/signing.cjs#L9>)
- require — module-loader; [electron/engines/registry/signing.cjs:10](<../../../../../../../electron/engines/registry/signing.cjs#L10>)
- require — module-loader; [electron/engines/registry/signing.cjs:14](<../../../../../../../electron/engines/registry/signing.cjs#L14>)

**Related tests / acceptance harnesses:**

- [electron/engine-signing.test.cjs:20](<../../../../../../../electron/engine-signing.test.cjs#L20>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:72](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L72>) — file-import-only; coverage not established.

<a id="s-dbf5e585ccf2aea6"></a>

## createSigningKey

[electron/engines/registry/signing.cjs:17](<../../../../../../../electron/engines/registry/signing.cjs#L17>) · FunctionDeclaration · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

Creates a new publisher key pair at explicit paths, refusing overwrites. PKCS8 encryption is used when passphrase is supplied; private bytes never enter returned metadata.

Purpose evidence: jsdoc.

Exported as: createSigningKey ([electron/engines/registry/signing.cjs:1](<../../../../../../../electron/engines/registry/signing.cjs#L1>)).

Lexical owner: [electron/engines/registry/signing.cjs](<signing.cjs.md#s-b391e8a33f9617c9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| privateFile | any | compiler-inferred | required |
| publicFile | any | compiler-inferred | required |
| passphrase | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/signing.cjs:19](<../../../../../../../electron/engines/registry/signing.cjs#L19>)
- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/signing.cjs:26](<../../../../../../../electron/engines/registry/signing.cjs#L26>)
- [safeDirectory](<../../core/persistence/json-store.cjs.md#s-429fa54bc1a890a0>) — [electron/engines/registry/signing.cjs:27](<../../../../../../../electron/engines/registry/signing.cjs#L27>)
- [safeDirectory](<../../core/persistence/json-store.cjs.md#s-429fa54bc1a890a0>) — [electron/engines/registry/signing.cjs:28](<../../../../../../../electron/engines/registry/signing.cjs#L28>)
- [publicIdentity](<signature.cjs.md#s-c2fa63b996ceefd7>) — [electron/engines/registry/signing.cjs:54](<../../../../../../../electron/engines/registry/signing.cjs#L54>)
- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/signing.cjs:66](<../../../../../../../electron/engines/registry/signing.cjs#L66>)

**Called by (statically resolved):**

- [&lt;anonymous@43:114&gt;](<../../engine-signing.test.cjs.md#s-3f1693c64119836b>) — [electron/engine-signing.test.cjs:46](<../../../../../../../electron/engine-signing.test.cjs#L46>)
- [&lt;anonymous@43:114&gt;](<../../engine-signing.test.cjs.md#s-3f1693c64119836b>) — [electron/engine-signing.test.cjs:59](<../../../../../../../electron/engine-signing.test.cjs#L59>)
- [&lt;anonymous@43:114&gt;](<../../engine-signing.test.cjs.md#s-3f1693c64119836b>) — [electron/engine-signing.test.cjs:78](<../../../../../../../electron/engine-signing.test.cjs#L78>)
- [&lt;anonymous@84:116&gt;](<../../engine-signing.test.cjs.md#s-02bf4bb73d3661ee>) — [electron/engine-signing.test.cjs:86](<../../../../../../../electron/engine-signing.test.cjs#L86>)
- [&lt;anonymous@100:109&gt;](<../../engine-signing.test.cjs.md#s-6bb332f41f761ed8>) — [electron/engine-signing.test.cjs:102](<../../../../../../../electron/engine-signing.test.cjs#L102>)
- [&lt;anonymous@100:109&gt;](<../../engine-signing.test.cjs.md#s-6bb332f41f761ed8>) — [electron/engine-signing.test.cjs:163](<../../../../../../../electron/engine-signing.test.cjs#L163>)
- [&lt;anonymous@176:104&gt;](<../../engine-signing.test.cjs.md#s-090bc15d5cdc7060>) — [electron/engine-signing.test.cjs:181](<../../../../../../../electron/engine-signing.test.cjs#L181>)
- [&lt;anonymous@194:103&gt;](<../../engine-signing.test.cjs.md#s-41839bdef2512cfd>) — [electron/engine-signing.test.cjs:196](<../../../../../../../electron/engine-signing.test.cjs#L196>)
- [main](<../../../scripts/acceptance/electron-backend-reset-smoke.cjs.md#s-648eff2573c5a425>) — [scripts/acceptance/electron-backend-reset-smoke.cjs:75](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L75>)
- [main](<../../../scripts/orbistry-engine.cjs.md#s-74bbb93b9a0b7abf>) — [scripts/orbistry-engine.cjs:103](<../../../../../../../scripts/orbistry-engine.cjs#L103>)

Unresolved / external call sites: 18.

- path.resolve — external-or-dynamic-dispatch; [electron/engines/registry/signing.cjs:23](<../../../../../../../electron/engines/registry/signing.cjs#L23>)
- path.resolve — external-or-dynamic-dispatch; [electron/engines/registry/signing.cjs:24](<../../../../../../../electron/engines/registry/signing.cjs#L24>)
- path.relative — external-or-dynamic-dispatch; [electron/engines/registry/signing.cjs:25](<../../../../../../../electron/engines/registry/signing.cjs#L25>)
- path.dirname — external-or-dynamic-dispatch; [electron/engines/registry/signing.cjs:27](<../../../../../../../electron/engines/registry/signing.cjs#L27>)
- path.dirname — external-or-dynamic-dispatch; [electron/engines/registry/signing.cjs:28](<../../../../../../../electron/engines/registry/signing.cjs#L28>)
- handles.push — external-or-dynamic-dispatch; [electron/engines/registry/signing.cjs:32](<../../../../../../../electron/engines/registry/signing.cjs#L32>)
- fs.open — external-or-dynamic-dispatch; [electron/engines/registry/signing.cjs:34](<../../../../../../../electron/engines/registry/signing.cjs#L34>)
- handles.push — external-or-dynamic-dispatch; [electron/engines/registry/signing.cjs:36](<../../../../../../../electron/engines/registry/signing.cjs#L36>)
- 10 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/engine-signing.test.cjs:46](<../../../../../../../electron/engine-signing.test.cjs#L46>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:59](<../../../../../../../electron/engine-signing.test.cjs#L59>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:78](<../../../../../../../electron/engine-signing.test.cjs#L78>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:86](<../../../../../../../electron/engine-signing.test.cjs#L86>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:102](<../../../../../../../electron/engine-signing.test.cjs#L102>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:163](<../../../../../../../electron/engine-signing.test.cjs#L163>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:181](<../../../../../../../electron/engine-signing.test.cjs#L181>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:196](<../../../../../../../electron/engine-signing.test.cjs#L196>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:75](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L75>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:20](<../../../../../../../electron/engine-signing.test.cjs#L20>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:72](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L72>) — file-import-only; coverage not established.

<a id="s-9317466d274715e3"></a>

## signPackage

[electron/engines/registry/signing.cjs:76](<../../../../../../../electron/engines/registry/signing.cjs#L76>) · FunctionDeclaration · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

Signs an already sealed author package. The private key must be outside the package; encrypted keys require the caller's passphrase. Only the manifest is atomically replaced.

Purpose evidence: jsdoc.

Exported as: signPackage ([electron/engines/registry/signing.cjs:1](<../../../../../../../electron/engines/registry/signing.cjs#L1>)).

Lexical owner: [electron/engines/registry/signing.cjs](<signing.cjs.md#s-b391e8a33f9617c9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| directory | any | compiler-inferred | required |
| privateFile | any | compiler-inferred | required |
| passphrase | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/signing.cjs:78](<../../../../../../../electron/engines/registry/signing.cjs#L78>)
- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/signing.cjs:87](<../../../../../../../electron/engines/registry/signing.cjs#L87>)
- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/signing.cjs:98](<../../../../../../../electron/engines/registry/signing.cjs#L98>)
- [inspectPackage](<package.cjs.md#s-71ed017a00706142>) — [electron/engines/registry/signing.cjs:102](<../../../../../../../electron/engines/registry/signing.cjs#L102>)
- [readBytes](<package.cjs.md#s-a5f5a53e124cf066>) — [electron/engines/registry/signing.cjs:106](<../../../../../../../electron/engines/registry/signing.cjs#L106>)
- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/signing.cjs:111](<../../../../../../../electron/engines/registry/signing.cjs#L111>)
- [parseJson](<package.cjs.md#s-fb6b0b1816d9018a>) — [electron/engines/registry/signing.cjs:117](<../../../../../../../electron/engines/registry/signing.cjs#L117>)
- [createSignature](<signature.cjs.md#s-429b3d691e551f54>) — [electron/engines/registry/signing.cjs:118](<../../../../../../../electron/engines/registry/signing.cjs#L118>)
- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/signing.cjs:121](<../../../../../../../electron/engines/registry/signing.cjs#L121>)
- [writeTextAtomic](<../../core/persistence/json-store.cjs.md#s-eaf1fb4e46036574>) — [electron/engines/registry/signing.cjs:125](<../../../../../../../electron/engines/registry/signing.cjs#L125>)
- [inspectPackage](<package.cjs.md#s-71ed017a00706142>) — [electron/engines/registry/signing.cjs:130](<../../../../../../../electron/engines/registry/signing.cjs#L130>)

**Called by (statically resolved):**

- [&lt;anonymous@43:114&gt;](<../../engine-signing.test.cjs.md#s-3f1693c64119836b>) — [electron/engine-signing.test.cjs:64](<../../../../../../../electron/engine-signing.test.cjs#L64>)
- [&lt;anonymous@43:114&gt;](<../../engine-signing.test.cjs.md#s-3f1693c64119836b>) — [electron/engine-signing.test.cjs:68](<../../../../../../../electron/engine-signing.test.cjs#L68>)
- [&lt;anonymous@43:114&gt;](<../../engine-signing.test.cjs.md#s-3f1693c64119836b>) — [electron/engine-signing.test.cjs:71](<../../../../../../../electron/engine-signing.test.cjs#L71>)
- [&lt;anonymous@84:116&gt;](<../../engine-signing.test.cjs.md#s-02bf4bb73d3661ee>) — [electron/engine-signing.test.cjs:87](<../../../../../../../electron/engine-signing.test.cjs#L87>)
- [&lt;anonymous@100:109&gt;](<../../engine-signing.test.cjs.md#s-6bb332f41f761ed8>) — [electron/engine-signing.test.cjs:103](<../../../../../../../electron/engine-signing.test.cjs#L103>)
- [&lt;anonymous@176:104&gt;](<../../engine-signing.test.cjs.md#s-090bc15d5cdc7060>) — [electron/engine-signing.test.cjs:182](<../../../../../../../electron/engine-signing.test.cjs#L182>)
- [&lt;anonymous@176:104&gt;](<../../engine-signing.test.cjs.md#s-090bc15d5cdc7060>) — [electron/engine-signing.test.cjs:189](<../../../../../../../electron/engine-signing.test.cjs#L189>)
- [&lt;anonymous@194:103&gt;](<../../engine-signing.test.cjs.md#s-41839bdef2512cfd>) — [electron/engine-signing.test.cjs:197](<../../../../../../../electron/engine-signing.test.cjs#L197>)
- [main](<../../../scripts/acceptance/electron-backend-reset-smoke.cjs.md#s-648eff2573c5a425>) — [scripts/acceptance/electron-backend-reset-smoke.cjs:76](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L76>)
- [main](<../../../scripts/orbistry-engine.cjs.md#s-74bbb93b9a0b7abf>) — [scripts/orbistry-engine.cjs:106](<../../../../../../../scripts/orbistry-engine.cjs#L106>)

Unresolved / external call sites: 12.

- fs.realpath — external-or-dynamic-dispatch; [electron/engines/registry/signing.cjs:82](<../../../../../../../electron/engines/registry/signing.cjs#L82>)
- fs.realpath — external-or-dynamic-dispatch; [electron/engines/registry/signing.cjs:85](<../../../../../../../electron/engines/registry/signing.cjs#L85>)
- path.relative — external-or-dynamic-dispatch; [electron/engines/registry/signing.cjs:92](<../../../../../../../electron/engines/registry/signing.cjs#L92>)
- relative.startsWith — external-or-dynamic-dispatch; [electron/engines/registry/signing.cjs:94](<../../../../../../../electron/engines/registry/signing.cjs#L94>)
- path.isAbsolute — external-or-dynamic-dispatch; [electron/engines/registry/signing.cjs:96](<../../../../../../../electron/engines/registry/signing.cjs#L96>)
- crypto.createPrivateKey — external-or-dynamic-dispatch; [electron/engines/registry/signing.cjs:105](<../../../../../../../electron/engines/registry/signing.cjs#L105>)
- checked.files.get("engine_manifest.json").toString — external-or-dynamic-dispatch; [electron/engines/registry/signing.cjs:116](<../../../../../../../electron/engines/registry/signing.cjs#L116>)
- checked.files.get — external-or-dynamic-dispatch; [electron/engines/registry/signing.cjs:116](<../../../../../../../electron/engines/registry/signing.cjs#L116>)
- 4 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/engine-signing.test.cjs:64](<../../../../../../../electron/engine-signing.test.cjs#L64>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:68](<../../../../../../../electron/engine-signing.test.cjs#L68>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:71](<../../../../../../../electron/engine-signing.test.cjs#L71>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:87](<../../../../../../../electron/engine-signing.test.cjs#L87>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:103](<../../../../../../../electron/engine-signing.test.cjs#L103>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:182](<../../../../../../../electron/engine-signing.test.cjs#L182>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:189](<../../../../../../../electron/engine-signing.test.cjs#L189>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:197](<../../../../../../../electron/engine-signing.test.cjs#L197>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:76](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L76>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:20](<../../../../../../../electron/engine-signing.test.cjs#L20>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:72](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L72>) — file-import-only; coverage not established.

<a id="s-3b8c467c9b1420c7"></a>

## verifyPackage

[electron/engines/registry/signing.cjs:141](<../../../../../../../electron/engines/registry/signing.cjs#L141>) · FunctionDeclaration · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

Verifies a signed package; an optional independently obtained public key pins the expected signer. Unsigned packages must use check, and never pass this signature-specific operation.

Purpose evidence: jsdoc.

Exported as: verifyPackage ([electron/engines/registry/signing.cjs:1](<../../../../../../../electron/engines/registry/signing.cjs#L1>)).

Lexical owner: [electron/engines/registry/signing.cjs](<signing.cjs.md#s-b391e8a33f9617c9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| directory | any | compiler-inferred | required |
| publicFile | any | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [inspectPackage](<package.cjs.md#s-71ed017a00706142>) — [electron/engines/registry/signing.cjs:142](<../../../../../../../electron/engines/registry/signing.cjs#L142>)
- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/signing.cjs:144](<../../../../../../../electron/engines/registry/signing.cjs#L144>)
- [readBytes](<package.cjs.md#s-a5f5a53e124cf066>) — [electron/engines/registry/signing.cjs:149](<../../../../../../../electron/engines/registry/signing.cjs#L149>)
- [verifySignature](<signature.cjs.md#s-9f88c255d4e362de>) — [electron/engines/registry/signing.cjs:151](<../../../../../../../electron/engines/registry/signing.cjs#L151>)
- [parseJson](<package.cjs.md#s-fb6b0b1816d9018a>) — [electron/engines/registry/signing.cjs:152](<../../../../../../../electron/engines/registry/signing.cjs#L152>)

**Called by (statically resolved):**

- [&lt;anonymous@43:114&gt;](<../../engine-signing.test.cjs.md#s-3f1693c64119836b>) — [electron/engine-signing.test.cjs:74](<../../../../../../../electron/engine-signing.test.cjs#L74>)
- [&lt;anonymous@84:116&gt;](<../../engine-signing.test.cjs.md#s-02bf4bb73d3661ee>) — [electron/engine-signing.test.cjs:94](<../../../../../../../electron/engine-signing.test.cjs#L94>)
- [&lt;anonymous@100:109&gt;](<../../engine-signing.test.cjs.md#s-6bb332f41f761ed8>) — [electron/engine-signing.test.cjs:164](<../../../../../../../electron/engine-signing.test.cjs#L164>)
- [&lt;anonymous@176:104&gt;](<../../engine-signing.test.cjs.md#s-090bc15d5cdc7060>) — [electron/engine-signing.test.cjs:178](<../../../../../../../electron/engine-signing.test.cjs#L178>)
- [main](<../../../scripts/orbistry-engine.cjs.md#s-74bbb93b9a0b7abf>) — [scripts/orbistry-engine.cjs:107](<../../../../../../../scripts/orbistry-engine.cjs#L107>)

Unresolved / external call sites: 4.

- (await readBytes(path.resolve(publicFile), 4096)).toString — external-or-dynamic-dispatch; [electron/engines/registry/signing.cjs:149](<../../../../../../../electron/engines/registry/signing.cjs#L149>)
- path.resolve — external-or-dynamic-dispatch; [electron/engines/registry/signing.cjs:149](<../../../../../../../electron/engines/registry/signing.cjs#L149>)
- checked.files.get — external-or-dynamic-dispatch; [electron/engines/registry/signing.cjs:152](<../../../../../../../electron/engines/registry/signing.cjs#L152>)
- Boolean — external-or-dynamic-dispatch; [electron/engines/registry/signing.cjs:161](<../../../../../../../electron/engines/registry/signing.cjs#L161>)

**Related tests / acceptance harnesses:**

- [electron/engine-signing.test.cjs:74](<../../../../../../../electron/engine-signing.test.cjs#L74>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:94](<../../../../../../../electron/engine-signing.test.cjs#L94>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:164](<../../../../../../../electron/engine-signing.test.cjs#L164>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:178](<../../../../../../../electron/engine-signing.test.cjs#L178>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:20](<../../../../../../../electron/engine-signing.test.cjs#L20>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:72](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L72>) — file-import-only; coverage not established.
