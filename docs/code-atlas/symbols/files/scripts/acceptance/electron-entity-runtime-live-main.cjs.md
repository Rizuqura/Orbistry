# scripts/acceptance/electron-entity-runtime-live-main.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/electron-entity-runtime-live-main.cjs:1](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/electron-entity-runtime-live-main.cjs](<electron-entity-runtime-live-main.cjs.md#s-48081af524aebf50>) (Module)
- [ReadOnlyDiagnosticCredentials](<electron-entity-runtime-live-main.cjs.md#s-8ca599343c3b66ba>) (ClassDeclaration)
- [ReadOnlyDiagnosticCredentials.constructor](<electron-entity-runtime-live-main.cjs.md#s-f1054c21d14b413d>) (Constructor)
- [ReadOnlyDiagnosticCredentials.save](<electron-entity-runtime-live-main.cjs.md#s-5ff95d9d554fb2d3>) (MethodDeclaration)
- [ReadOnlyDiagnosticCredentials.remove](<electron-entity-runtime-live-main.cjs.md#s-050df74967035d63>) (MethodDeclaration)
- [observeDelivery](<electron-entity-runtime-live-main.cjs.md#s-2e8dc557b65c4831>) (FunctionExpression)
- [observeDelivery.&lt;anonymous@51:42&gt;](<electron-entity-runtime-live-main.cjs.md#s-900d1cc3cec38f9f>) (ArrowFunction)
- [&lt;anonymous@70:34&gt;](<electron-entity-runtime-live-main.cjs.md#s-725d355229eb220b>) (ArrowFunction)

<a id="s-48081af524aebf50"></a>

## scripts/acceptance/electron-entity-runtime-live-main.cjs

[scripts/acceptance/electron-entity-runtime-live-main.cjs:1](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 16.

- require — module-loader; [scripts/acceptance/electron-entity-runtime-live-main.cjs:1](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L1>)
- require — module-loader; [scripts/acceptance/electron-entity-runtime-live-main.cjs:2](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L2>)
- require — module-loader; [scripts/acceptance/electron-entity-runtime-live-main.cjs:3](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L3>)
- fs.existsSync — external-or-dynamic-dispatch; [scripts/acceptance/electron-entity-runtime-live-main.cjs:9](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L9>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-entity-runtime-live-main.cjs:9](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L9>)
- Error — external-or-dynamic-dispatch; [scripts/acceptance/electron-entity-runtime-live-main.cjs:11](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L11>)
- app.setPath — external-or-dynamic-dispatch; [scripts/acceptance/electron-entity-runtime-live-main.cjs:14](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L14>)
- require — module-loader; [scripts/acceptance/electron-entity-runtime-live-main.cjs:15](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L15>)
- 8 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8ca599343c3b66ba"></a>

## ReadOnlyDiagnosticCredentials

[scripts/acceptance/electron-entity-runtime-live-main.cjs:19](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L19>) · ClassDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Reuses the user's configured encrypted credential through normal Electron secure storage. Diagnostic UI cannot write or remove that credential.

Purpose evidence: jsdoc.

Lexical owner: [scripts/acceptance/electron-entity-runtime-live-main.cjs](<electron-entity-runtime-live-main.cjs.md#s-48081af524aebf50>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f1054c21d14b413d"></a>

## ReadOnlyDiagnosticCredentials.constructor

[scripts/acceptance/electron-entity-runtime-live-main.cjs:21](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L21>) · Constructor · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Reads secrets from the explicitly selected profile without copying credential files into disposable data.

Purpose evidence: jsdoc.

Lexical owner: [ReadOnlyDiagnosticCredentials](<electron-entity-runtime-live-main.cjs.md#s-8ca599343c3b66ba>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _directory | any | compiler-inferred | required |
| storage | any | compiler-inferred | required |

Returns: ReadOnlyDiagnosticCredentials (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- super — declaration-without-runtime-body; [scripts/acceptance/electron-entity-runtime-live-main.cjs:22](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L22>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5ff95d9d554fb2d3"></a>

## ReadOnlyDiagnosticCredentials.save

[scripts/acceptance/electron-entity-runtime-live-main.cjs:25](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L25>) · MethodDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Rejects credential changes from the isolated live acceptance window.

Purpose evidence: jsdoc.

Lexical owner: [ReadOnlyDiagnosticCredentials](<electron-entity-runtime-live-main.cjs.md#s-8ca599343c3b66ba>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [scripts/acceptance/electron-entity-runtime-live-main.cjs:26](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L26>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-050df74967035d63"></a>

## ReadOnlyDiagnosticCredentials.remove

[scripts/acceptance/electron-entity-runtime-live-main.cjs:29](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L29>) · MethodDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Rejects credential removal from the isolated live acceptance window.

Purpose evidence: jsdoc.

Lexical owner: [ReadOnlyDiagnosticCredentials](<electron-entity-runtime-live-main.cjs.md#s-8ca599343c3b66ba>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [scripts/acceptance/electron-entity-runtime-live-main.cjs:30](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L30>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2e8dc557b65c4831"></a>

## observeDelivery

[scripts/acceptance/electron-entity-runtime-live-main.cjs:50](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L50>) · FunctionExpression · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-entity-runtime-live-main.cjs](<electron-entity-runtime-live-main.cjs.md#s-48081af524aebf50>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| request | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 13.

- request.messages?.find — external-or-dynamic-dispatch; [scripts/acceptance/electron-entity-runtime-live-main.cjs:51](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L51>)
- JSON.parse — external-or-dynamic-dispatch; [scripts/acceptance/electron-entity-runtime-live-main.cjs:57](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L57>)
- message.content.split("\\n").slice(1).join — external-or-dynamic-dispatch; [scripts/acceptance/electron-entity-runtime-live-main.cjs:57](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L57>)
- message.content.split("\\n").slice — external-or-dynamic-dispatch; [scripts/acceptance/electron-entity-runtime-live-main.cjs:57](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L57>)
- message.content.split — external-or-dynamic-dispatch; [scripts/acceptance/electron-entity-runtime-live-main.cjs:57](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L57>)
- globalThis.runtimeDeliveredExecutionIds.push — external-or-dynamic-dispatch; [scripts/acceptance/electron-entity-runtime-live-main.cjs:60](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L60>)
- item.content.startsWith — external-or-dynamic-dispatch; [scripts/acceptance/electron-entity-runtime-live-main.cjs:63](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L63>)
- JSON.parse — external-or-dynamic-dispatch; [scripts/acceptance/electron-entity-runtime-live-main.cjs:64](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L64>)
- 5 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-900d1cc3cec38f9f"></a>

## observeDelivery.&lt;anonymous@51:42&gt;

[scripts/acceptance/electron-entity-runtime-live-main.cjs:51](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L51>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [observeDelivery](<electron-entity-runtime-live-main.cjs.md#s-2e8dc557b65c4831>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- item.content.startsWith — external-or-dynamic-dispatch; [scripts/acceptance/electron-entity-runtime-live-main.cjs:52](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L52>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-725d355229eb220b"></a>

## &lt;anonymous@70:34&gt;

[scripts/acceptance/electron-entity-runtime-live-main.cjs:70](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L70>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-entity-runtime-live-main.cjs](<electron-entity-runtime-live-main.cjs.md#s-48081af524aebf50>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _ | any | compiler-inferred | required |
| window | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.webContents.setBackgroundThrottling — external-or-dynamic-dispatch; [scripts/acceptance/electron-entity-runtime-live-main.cjs:71](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L71>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
