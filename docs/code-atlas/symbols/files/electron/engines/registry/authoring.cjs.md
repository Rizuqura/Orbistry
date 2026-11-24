# electron/engines/registry/authoring.cjs: symbols

[Atlas](<../../../../../README.md>) / [Engine package registry](<../../../../../modules/engine-registry.md>) / [electron/engines/registry/authoring.cjs:1](<../../../../../../../electron/engines/registry/authoring.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/registry/authoring.cjs](<authoring.cjs.md#s-114b550546c154b5>) (Module)
- [initPackage](<authoring.cjs.md#s-bbfb28bee2f9c0b0>) (FunctionDeclaration)
- [download](<authoring.cjs.md#s-0041180bfde21954>) (FunctionDeclaration)
- [pullPackage](<authoring.cjs.md#s-dd26bc55111fb682>) (FunctionDeclaration)

<a id="s-114b550546c154b5"></a>

## electron/engines/registry/authoring.cjs

[electron/engines/registry/authoring.cjs:1](<../../../../../../../electron/engines/registry/authoring.cjs#L1>) · Module · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- require — module-loader; [electron/engines/registry/authoring.cjs:1](<../../../../../../../electron/engines/registry/authoring.cjs#L1>)
- require — module-loader; [electron/engines/registry/authoring.cjs:2](<../../../../../../../electron/engines/registry/authoring.cjs#L2>)
- require — module-loader; [electron/engines/registry/authoring.cjs:3](<../../../../../../../electron/engines/registry/authoring.cjs#L3>)
- require — module-loader; [electron/engines/registry/authoring.cjs:4](<../../../../../../../electron/engines/registry/authoring.cjs#L4>)
- require — module-loader; [electron/engines/registry/authoring.cjs:5](<../../../../../../../electron/engines/registry/authoring.cjs#L5>)
- require — module-loader; [electron/engines/registry/authoring.cjs:6](<../../../../../../../electron/engines/registry/authoring.cjs#L6>)

**Related tests / acceptance harnesses:**

- [electron/engine-packages.test.cjs:12](<../../../../../../../electron/engine-packages.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:11](<../../../../../../../electron/engine-signing.test.cjs#L11>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:65](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L65>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:89](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L89>) — file-import-only; coverage not established.

<a id="s-bbfb28bee2f9c0b0"></a>

## initPackage

[electron/engines/registry/authoring.cjs:9](<../../../../../../../electron/engines/registry/authoring.cjs#L9>) · FunctionDeclaration · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

Creates an editable self-contained starter package in a new explicit folder. Refuses existing directories; creates no registration or trust grant.

Purpose evidence: jsdoc.

Exported as: initPackage ([electron/engines/registry/authoring.cjs:1](<../../../../../../../electron/engines/registry/authoring.cjs#L1>)).

Lexical owner: [electron/engines/registry/authoring.cjs](<authoring.cjs.md#s-114b550546c154b5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| directory | any | compiler-inferred | required |
| engineId | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [safeDirectory](<../../core/persistence/json-store.cjs.md#s-429fa54bc1a890a0>) — [electron/engines/registry/authoring.cjs:12](<../../../../../../../electron/engines/registry/authoring.cjs#L12>)
- [sealPackage](<package.cjs.md#s-d9c25ce14dcf2863>) — [electron/engines/registry/authoring.cjs:64](<../../../../../../../electron/engines/registry/authoring.cjs#L64>)

**Called by (statically resolved):**

- [fixture](<../../engine-packages.test.cjs.md#s-b71f48b3abd96309>) — [electron/engine-packages.test.cjs:41](<../../../../../../../electron/engine-packages.test.cjs#L41>)
- [fixture](<../../engine-signing.test.cjs.md#s-7b808f72af17b9f9>) — [electron/engine-signing.test.cjs:38](<../../../../../../../electron/engine-signing.test.cjs#L38>)
- [initTemporaryEntry](<../../engine-signing.test.cjs.md#s-2db75a0c9a167587>) — [electron/engine-signing.test.cjs:172](<../../../../../../../electron/engine-signing.test.cjs#L172>)
- [main](<../../../scripts/acceptance/electron-backend-reset-smoke.cjs.md#s-648eff2573c5a425>) — [scripts/acceptance/electron-backend-reset-smoke.cjs:65](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L65>)
- [main](<../../../scripts/acceptance/electron-backend-reset-smoke.cjs.md#s-648eff2573c5a425>) — [scripts/acceptance/electron-backend-reset-smoke.cjs:89](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L89>)
- [main](<../../../scripts/orbistry-engine.cjs.md#s-74bbb93b9a0b7abf>) — [scripts/orbistry-engine.cjs:112](<../../../../../../../scripts/orbistry-engine.cjs#L112>)

Unresolved / external call sites: 11.

- id.parse — external-or-dynamic-dispatch; [electron/engines/registry/authoring.cjs:10](<../../../../../../../electron/engines/registry/authoring.cjs#L10>)
- path.resolve — external-or-dynamic-dispatch; [electron/engines/registry/authoring.cjs:11](<../../../../../../../electron/engines/registry/authoring.cjs#L11>)
- path.dirname — external-or-dynamic-dispatch; [electron/engines/registry/authoring.cjs:12](<../../../../../../../electron/engines/registry/authoring.cjs#L12>)
- fs.mkdir — external-or-dynamic-dispatch; [electron/engines/registry/authoring.cjs:13](<../../../../../../../electron/engines/registry/authoring.cjs#L13>)
- fs.writeFile — external-or-dynamic-dispatch; [electron/engines/registry/authoring.cjs:26](<../../../../../../../electron/engines/registry/authoring.cjs#L26>)
- path.join — external-or-dynamic-dispatch; [electron/engines/registry/authoring.cjs:27](<../../../../../../../electron/engines/registry/authoring.cjs#L27>)
- fs.writeFile — external-or-dynamic-dispatch; [electron/engines/registry/authoring.cjs:31](<../../../../../../../electron/engines/registry/authoring.cjs#L31>)
- path.join — external-or-dynamic-dispatch; [electron/engines/registry/authoring.cjs:32](<../../../../../../../electron/engines/registry/authoring.cjs#L32>)
- 3 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/engine-packages.test.cjs:41](<../../../../../../../electron/engine-packages.test.cjs#L41>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:38](<../../../../../../../electron/engine-signing.test.cjs#L38>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:172](<../../../../../../../electron/engine-signing.test.cjs#L172>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:65](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L65>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:89](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L89>) — static-call-site; coverage not established.
- [electron/engine-packages.test.cjs:12](<../../../../../../../electron/engine-packages.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:11](<../../../../../../../electron/engine-signing.test.cjs#L11>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:65](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L65>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:89](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L89>) — file-import-only; coverage not established.

<a id="s-0041180bfde21954"></a>

## download

[electron/engines/registry/authoring.cjs:68](<../../../../../../../electron/engines/registry/authoring.cjs#L68>) · FunctionDeclaration · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

Downloads a response within fixed limits. No redirect following, HTML evaluation, install scripts or credential forwarding occur.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/registry/authoring.cjs](<authoring.cjs.md#s-114b550546c154b5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| url | any | compiler-inferred | required |
| maximum | any | compiler-inferred | required |
| fetchImpl | any | compiler-inferred | required |
| signal | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [fail](<../contracts/contract.cjs.md#s-85aeb8bea7b60d5e>) — [electron/engines/registry/authoring.cjs:71](<../../../../../../../electron/engines/registry/authoring.cjs#L71>)
- [fail](<../contracts/contract.cjs.md#s-85aeb8bea7b60d5e>) — [electron/engines/registry/authoring.cjs:73](<../../../../../../../electron/engines/registry/authoring.cjs#L73>)
- [fail](<../contracts/contract.cjs.md#s-85aeb8bea7b60d5e>) — [electron/engines/registry/authoring.cjs:82](<../../../../../../../electron/engines/registry/authoring.cjs#L82>)

**Called by (statically resolved):**

- [pullPackage](<authoring.cjs.md#s-dd26bc55111fb682>) — [electron/engines/registry/authoring.cjs:117](<../../../../../../../electron/engines/registry/authoring.cjs#L117>)
- [pullPackage](<authoring.cjs.md#s-dd26bc55111fb682>) — [electron/engines/registry/authoring.cjs:144](<../../../../../../../electron/engines/registry/authoring.cjs#L144>)

Unresolved / external call sites: 6.

- fetchImpl — external-or-dynamic-dispatch; [electron/engines/registry/authoring.cjs:69](<../../../../../../../electron/engines/registry/authoring.cjs#L69>)
- Number — external-or-dynamic-dispatch; [electron/engines/registry/authoring.cjs:72](<../../../../../../../electron/engines/registry/authoring.cjs#L72>)
- response.headers.get — external-or-dynamic-dispatch; [electron/engines/registry/authoring.cjs:72](<../../../../../../../electron/engines/registry/authoring.cjs#L72>)
- chunks.push — external-or-dynamic-dispatch; [electron/engines/registry/authoring.cjs:86](<../../../../../../../electron/engines/registry/authoring.cjs#L86>)
- Buffer.from — external-or-dynamic-dispatch; [electron/engines/registry/authoring.cjs:86](<../../../../../../../electron/engines/registry/authoring.cjs#L86>)
- Buffer.concat — external-or-dynamic-dispatch; [electron/engines/registry/authoring.cjs:88](<../../../../../../../electron/engines/registry/authoring.cjs#L88>)

**Related tests / acceptance harnesses:**

- [electron/engine-packages.test.cjs:12](<../../../../../../../electron/engine-packages.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:11](<../../../../../../../electron/engine-signing.test.cjs#L11>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:65](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L65>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:89](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L89>) — file-import-only; coverage not established.

<a id="s-dd26bc55111fb682"></a>

## pullPackage

[electron/engines/registry/authoring.cjs:92](<../../../../../../../electron/engines/registry/authoring.cjs#L92>) · FunctionDeclaration · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

Pulls an HTTPS manifest plus same-directory integrity-listed files into untrusted staging, then installs verified bytes. Explicit trust remains a separate human action.

Purpose evidence: jsdoc.

Exported as: pullPackage ([electron/engines/registry/authoring.cjs:1](<../../../../../../../electron/engines/registry/authoring.cjs#L1>)).

Lexical owner: [electron/engines/registry/authoring.cjs](<authoring.cjs.md#s-114b550546c154b5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| registry | any | compiler-inferred | required |
| source | any | compiler-inferred | required |
| { fetchImpl = fetch, signal } | { fetchImpl?: (url: any, init?: {}) =&gt; any; } | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [fail](<../contracts/contract.cjs.md#s-85aeb8bea7b60d5e>) — [electron/engines/registry/authoring.cjs:101](<../../../../../../../electron/engines/registry/authoring.cjs#L101>)
- [fail](<../contracts/contract.cjs.md#s-85aeb8bea7b60d5e>) — [electron/engines/registry/authoring.cjs:111](<../../../../../../../electron/engines/registry/authoring.cjs#L111>)
- [download](<authoring.cjs.md#s-0041180bfde21954>) — [electron/engines/registry/authoring.cjs:117](<../../../../../../../electron/engines/registry/authoring.cjs#L117>)
- [manifest](<../contracts/contract.cjs.md#s-b1886f302525e88e>) — [electron/engines/registry/authoring.cjs:118](<../../../../../../../electron/engines/registry/authoring.cjs#L118>)
- [parseJson](<package.cjs.md#s-fb6b0b1816d9018a>) — [electron/engines/registry/authoring.cjs:118](<../../../../../../../electron/engines/registry/authoring.cjs#L118>)
- [safeDirectory](<../../core/persistence/json-store.cjs.md#s-429fa54bc1a890a0>) — [electron/engines/registry/authoring.cjs:123](<../../../../../../../electron/engines/registry/authoring.cjs#L123>)
- [fail](<../contracts/contract.cjs.md#s-85aeb8bea7b60d5e>) — [electron/engines/registry/authoring.cjs:140](<../../../../../../../electron/engines/registry/authoring.cjs#L140>)
- [download](<authoring.cjs.md#s-0041180bfde21954>) — [electron/engines/registry/authoring.cjs:144](<../../../../../../../electron/engines/registry/authoring.cjs#L144>)
- [safeDirectory](<../../core/persistence/json-store.cjs.md#s-429fa54bc1a890a0>) — [electron/engines/registry/authoring.cjs:152](<../../../../../../../electron/engines/registry/authoring.cjs#L152>)
- [inspectPackage](<package.cjs.md#s-71ed017a00706142>) — [electron/engines/registry/authoring.cjs:155](<../../../../../../../electron/engines/registry/authoring.cjs#L155>)

**Called by (statically resolved):**

- [&lt;anonymous@387:73&gt;](<../../engine-packages.test.cjs.md#s-22e914933f749df3>) — [electron/engine-packages.test.cjs:391](<../../../../../../../electron/engine-packages.test.cjs#L391>)
- [&lt;anonymous@574:106&gt;](<../../engine-packages.test.cjs.md#s-dd8dd447d9bb9292>) — [electron/engine-packages.test.cjs:585](<../../../../../../../electron/engine-packages.test.cjs#L585>)
- [&lt;anonymous@574:106&gt;](<../../engine-packages.test.cjs.md#s-dd8dd447d9bb9292>) — [electron/engine-packages.test.cjs:590](<../../../../../../../electron/engine-packages.test.cjs#L590>)
- [&lt;anonymous@194:103&gt;](<../../engine-signing.test.cjs.md#s-41839bdef2512cfd>) — [electron/engine-signing.test.cjs:213](<../../../../../../../electron/engine-signing.test.cjs#L213>)
- [main](<../../../scripts/orbistry-engine.cjs.md#s-74bbb93b9a0b7abf>) — [scripts/orbistry-engine.cjs:130](<../../../../../../../scripts/orbistry-engine.cjs#L130>)

Unresolved / external call sites: 22.

- URL — external-or-dynamic-dispatch; [electron/engines/registry/authoring.cjs:99](<../../../../../../../electron/engines/registry/authoring.cjs#L99>)
- url.pathname.endsWith — external-or-dynamic-dispatch; [electron/engines/registry/authoring.cjs:109](<../../../../../../../electron/engines/registry/authoring.cjs#L109>)
- AbortSignal.timeout — external-or-dynamic-dispatch; [electron/engines/registry/authoring.cjs:115](<../../../../../../../electron/engines/registry/authoring.cjs#L115>)
- AbortSignal.any — external-or-dynamic-dispatch; [electron/engines/registry/authoring.cjs:116](<../../../../../../../electron/engines/registry/authoring.cjs#L116>)
- registry.location — external-or-dynamic-dispatch; [electron/engines/registry/authoring.cjs:119](<../../../../../../../electron/engines/registry/authoring.cjs#L119>)
- randomUUID — external-or-dynamic-dispatch; [electron/engines/registry/authoring.cjs:121](<../../../../../../../electron/engines/registry/authoring.cjs#L121>)
- fs.writeFile — external-or-dynamic-dispatch; [electron/engines/registry/authoring.cjs:125](<../../../../../../../electron/engines/registry/authoring.cjs#L125>)
- path.join — external-or-dynamic-dispatch; [electron/engines/registry/authoring.cjs:125](<../../../../../../../electron/engines/registry/authoring.cjs#L125>)
- 14 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/engine-packages.test.cjs:391](<../../../../../../../electron/engine-packages.test.cjs#L391>) — static-call-site; coverage not established.
- [electron/engine-packages.test.cjs:585](<../../../../../../../electron/engine-packages.test.cjs#L585>) — static-call-site; coverage not established.
- [electron/engine-packages.test.cjs:590](<../../../../../../../electron/engine-packages.test.cjs#L590>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:213](<../../../../../../../electron/engine-signing.test.cjs#L213>) — static-call-site; coverage not established.
- [electron/engine-packages.test.cjs:12](<../../../../../../../electron/engine-packages.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:11](<../../../../../../../electron/engine-signing.test.cjs#L11>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:65](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L65>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:89](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L89>) — file-import-only; coverage not established.
