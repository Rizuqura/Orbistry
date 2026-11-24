# electron/user-data-path.cjs: symbols

[Atlas](<../../../README.md>) / [Electron composition and IPC security](<../../../modules/desktop.md>) / [electron/user-data-path.cjs:1](<../../../../../electron/user-data-path.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/user-data-path.cjs](<user-data-path.cjs.md#s-c10cc074d3cca721>) (Module)
- [selectUserDataPath](<user-data-path.cjs.md#s-9b29881ed0ce8238>) (FunctionDeclaration)
- [selectUserDataPath.populated](<user-data-path.cjs.md#s-d779e3fbfbe9fbfc>) (ArrowFunction)
- [selectUserDataPath.populated.&lt;anonymous@14:7&gt;](<user-data-path.cjs.md#s-9c0f24eb7c1ae7fa>) (ArrowFunction)
- [selectUserDataPath.&lt;anonymous@30:12&gt;](<user-data-path.cjs.md#s-d338528fa40f6233>) (ArrowFunction)

<a id="s-c10cc074d3cca721"></a>

## electron/user-data-path.cjs

[electron/user-data-path.cjs:1](<../../../../../electron/user-data-path.cjs#L1>) · Module · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [electron/user-data-path.cjs:1](<../../../../../electron/user-data-path.cjs#L1>)
- require — module-loader; [electron/user-data-path.cjs:2](<../../../../../electron/user-data-path.cjs#L2>)

**Related tests / acceptance harnesses:**

- [electron/user-data-path.test.cjs:4](<../../../../../electron/user-data-path.test.cjs#L4>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-openrouter-live-main.cjs:4](<../../../../../scripts/acceptance/electron-openrouter-live-main.cjs#L4>) — file-import-only; coverage not established.

<a id="s-9b29881ed0ce8238"></a>

## selectUserDataPath

[electron/user-data-path.cjs:6](<../../../../../electron/user-data-path.cjs#L6>) · FunctionDeclaration · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: selectUserDataPath ([electron/user-data-path.cjs:1](<../../../../../electron/user-data-path.cjs#L1>)).

Lexical owner: [electron/user-data-path.cjs](<user-data-path.cjs.md#s-c10cc074d3cca721>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| appData | any | compiler-inferred | required |
| current | any | compiler-inferred | required |
| exists | any | compiler-inferred | optional, default present |
| explicit | boolean | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [selectUserDataPath.populated](<user-data-path.cjs.md#s-d779e3fbfbe9fbfc>) — [electron/user-data-path.cjs:25](<../../../../../electron/user-data-path.cjs#L25>)

**Called by (statically resolved):**

- [electron/main.cjs](<main.cjs.md#s-f5a36143526f73da>) — [electron/main.cjs:154](<../../../../../electron/main.cjs#L154>)
- [&lt;anonymous@8:82&gt;](<user-data-path.test.cjs.md#s-4f8de87bf419540c>) — [electron/user-data-path.test.cjs:11](<../../../../../electron/user-data-path.test.cjs#L11>)
- [&lt;anonymous@13:92&gt;](<user-data-path.test.cjs.md#s-332f212508572289>) — [electron/user-data-path.test.cjs:16](<../../../../../electron/user-data-path.test.cjs#L16>)
- [&lt;anonymous@13:92&gt;](<user-data-path.test.cjs.md#s-332f212508572289>) — [electron/user-data-path.test.cjs:18](<../../../../../electron/user-data-path.test.cjs#L18>)
- [&lt;anonymous@27:71&gt;](<user-data-path.test.cjs.md#s-bd2de65dc942d01d>) — [electron/user-data-path.test.cjs:32](<../../../../../electron/user-data-path.test.cjs#L32>)
- [&lt;anonymous@34:61&gt;](<user-data-path.test.cjs.md#s-f6e9f92f0e157d02>) — [electron/user-data-path.test.cjs:36](<../../../../../electron/user-data-path.test.cjs#L36>)
- [&lt;anonymous@34:61&gt;](<user-data-path.test.cjs.md#s-f6e9f92f0e157d02>) — [electron/user-data-path.test.cjs:41](<../../../../../electron/user-data-path.test.cjs#L41>)
- [&lt;anonymous@34:61&gt;](<user-data-path.test.cjs.md#s-f6e9f92f0e157d02>) — [electron/user-data-path.test.cjs:45](<../../../../../electron/user-data-path.test.cjs#L45>)
- [&lt;anonymous@49:101&gt;](<user-data-path.test.cjs.md#s-12c4e2ee17bc47fb>) — [electron/user-data-path.test.cjs:53](<../../../../../electron/user-data-path.test.cjs#L53>)
- [&lt;anonymous@49:101&gt;](<user-data-path.test.cjs.md#s-12c4e2ee17bc47fb>) — [electron/user-data-path.test.cjs:55](<../../../../../electron/user-data-path.test.cjs#L55>)
- [&lt;anonymous@49:101&gt;](<user-data-path.test.cjs.md#s-12c4e2ee17bc47fb>) — [electron/user-data-path.test.cjs:63](<../../../../../electron/user-data-path.test.cjs#L63>)
- [&lt;anonymous@49:101&gt;](<user-data-path.test.cjs.md#s-12c4e2ee17bc47fb>) — [electron/user-data-path.test.cjs:65](<../../../../../electron/user-data-path.test.cjs#L65>)
- [&lt;anonymous@74:83&gt;](<user-data-path.test.cjs.md#s-3c571613cc1cbe47>) — [electron/user-data-path.test.cjs:81](<../../../../../electron/user-data-path.test.cjs#L81>)
- [&lt;anonymous@74:83&gt;](<user-data-path.test.cjs.md#s-3c571613cc1cbe47>) — [electron/user-data-path.test.cjs:83](<../../../../../electron/user-data-path.test.cjs#L83>)
- [&lt;anonymous@74:83&gt;](<user-data-path.test.cjs.md#s-3c571613cc1cbe47>) — [electron/user-data-path.test.cjs:90](<../../../../../electron/user-data-path.test.cjs#L90>)
- [scripts/acceptance/electron-openrouter-live-main.cjs](<../scripts/acceptance/electron-openrouter-live-main.cjs.md#s-23bff485a85792a9>) — [scripts/acceptance/electron-openrouter-live-main.cjs:7](<../../../../../scripts/acceptance/electron-openrouter-live-main.cjs#L7>)
- [scripts/nvidia-thinking-probe-main.cjs](<../scripts/nvidia-thinking-probe-main.cjs.md#s-5c41525186c69ba8>) — [scripts/nvidia-thinking-probe-main.cjs:13](<../../../../../scripts/nvidia-thinking-probe-main.cjs#L13>)
- [scripts/provider-rca-main.cjs](<../scripts/provider-rca-main.cjs.md#s-b21a107abae20886>) — [scripts/provider-rca-main.cjs:19](<../../../../../scripts/provider-rca-main.cjs#L19>)

Unresolved / external call sites: 8.

- path.resolve — external-or-dynamic-dispatch; [electron/user-data-path.cjs:18](<../../../../../electron/user-data-path.cjs#L18>)
- path.dirname — external-or-dynamic-dispatch; [electron/user-data-path.cjs:18](<../../../../../electron/user-data-path.cjs#L18>)
- path.resolve — external-or-dynamic-dispatch; [electron/user-data-path.cjs:18](<../../../../../electron/user-data-path.cjs#L18>)
- &#91; "orb terminal", "orbistry", "qterminal", "qterminal 1.0.0 victoria", &#93;.includes — external-or-dynamic-dispatch; [electron/user-data-path.cjs:19](<../../../../../electron/user-data-path.cjs#L19>)
- path.basename(current).toLowerCase — external-or-dynamic-dispatch; [electron/user-data-path.cjs:24](<../../../../../electron/user-data-path.cjs#L24>)
- path.basename — external-or-dynamic-dispatch; [electron/user-data-path.cjs:24](<../../../../../electron/user-data-path.cjs#L24>)
- &#91;"Orbistry", "QTerminal", "wonnyy-amadeus", "Wonnyy"&#93; .map((name) =&gt; path.join(appData, name)) .find — external-or-dynamic-dispatch; [electron/user-data-path.cjs:29](<../../../../../electron/user-data-path.cjs#L29>)
- &#91;"Orbistry", "QTerminal", "wonnyy-amadeus", "Wonnyy"&#93; .map — external-or-dynamic-dispatch; [electron/user-data-path.cjs:29](<../../../../../electron/user-data-path.cjs#L29>)

**Related tests / acceptance harnesses:**

- [electron/user-data-path.test.cjs:11](<../../../../../electron/user-data-path.test.cjs#L11>) — static-call-site; coverage not established.
- [electron/user-data-path.test.cjs:16](<../../../../../electron/user-data-path.test.cjs#L16>) — static-call-site; coverage not established.
- [electron/user-data-path.test.cjs:18](<../../../../../electron/user-data-path.test.cjs#L18>) — static-call-site; coverage not established.
- [electron/user-data-path.test.cjs:32](<../../../../../electron/user-data-path.test.cjs#L32>) — static-call-site; coverage not established.
- [electron/user-data-path.test.cjs:36](<../../../../../electron/user-data-path.test.cjs#L36>) — static-call-site; coverage not established.
- [electron/user-data-path.test.cjs:41](<../../../../../electron/user-data-path.test.cjs#L41>) — static-call-site; coverage not established.
- [electron/user-data-path.test.cjs:45](<../../../../../electron/user-data-path.test.cjs#L45>) — static-call-site; coverage not established.
- [electron/user-data-path.test.cjs:53](<../../../../../electron/user-data-path.test.cjs#L53>) — static-call-site; coverage not established.
- [electron/user-data-path.test.cjs:55](<../../../../../electron/user-data-path.test.cjs#L55>) — static-call-site; coverage not established.
- [electron/user-data-path.test.cjs:63](<../../../../../electron/user-data-path.test.cjs#L63>) — static-call-site; coverage not established.
- [electron/user-data-path.test.cjs:65](<../../../../../electron/user-data-path.test.cjs#L65>) — static-call-site; coverage not established.
- [electron/user-data-path.test.cjs:81](<../../../../../electron/user-data-path.test.cjs#L81>) — static-call-site; coverage not established.
- [electron/user-data-path.test.cjs:83](<../../../../../electron/user-data-path.test.cjs#L83>) — static-call-site; coverage not established.
- [electron/user-data-path.test.cjs:90](<../../../../../electron/user-data-path.test.cjs#L90>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-openrouter-live-main.cjs:7](<../../../../../scripts/acceptance/electron-openrouter-live-main.cjs#L7>) — static-call-site; coverage not established.
- [electron/user-data-path.test.cjs:4](<../../../../../electron/user-data-path.test.cjs#L4>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-openrouter-live-main.cjs:4](<../../../../../scripts/acceptance/electron-openrouter-live-main.cjs#L4>) — file-import-only; coverage not established.

<a id="s-d779e3fbfbe9fbfc"></a>

## selectUserDataPath.populated

[electron/user-data-path.cjs:12](<../../../../../electron/user-data-path.cjs#L12>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [selectUserDataPath](<user-data-path.cjs.md#s-9b29881ed0ce8238>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| directory | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [selectUserDataPath](<user-data-path.cjs.md#s-9b29881ed0ce8238>) — [electron/user-data-path.cjs:25](<../../../../../electron/user-data-path.cjs#L25>)

Unresolved / external call sites: 1.

- &#91;"model-settings.json", "provider-credentials.json", "agents.json"&#93;.some — external-or-dynamic-dispatch; [electron/user-data-path.cjs:13](<../../../../../electron/user-data-path.cjs#L13>)

**Related tests / acceptance harnesses:**

- [electron/user-data-path.test.cjs:4](<../../../../../electron/user-data-path.test.cjs#L4>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-openrouter-live-main.cjs:4](<../../../../../scripts/acceptance/electron-openrouter-live-main.cjs#L4>) — file-import-only; coverage not established.

<a id="s-9c0f24eb7c1ae7fa"></a>

## selectUserDataPath.populated.&lt;anonymous@14:7&gt;

[electron/user-data-path.cjs:14](<../../../../../electron/user-data-path.cjs#L14>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [selectUserDataPath.populated](<user-data-path.cjs.md#s-d779e3fbfbe9fbfc>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- exists — external-or-dynamic-dispatch; [electron/user-data-path.cjs:14](<../../../../../electron/user-data-path.cjs#L14>)
- path.join — external-or-dynamic-dispatch; [electron/user-data-path.cjs:14](<../../../../../electron/user-data-path.cjs#L14>)

**Related tests / acceptance harnesses:**

- [electron/user-data-path.test.cjs:4](<../../../../../electron/user-data-path.test.cjs#L4>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-openrouter-live-main.cjs:4](<../../../../../scripts/acceptance/electron-openrouter-live-main.cjs#L4>) — file-import-only; coverage not established.

<a id="s-d338528fa40f6233"></a>

## selectUserDataPath.&lt;anonymous@30:12&gt;

[electron/user-data-path.cjs:30](<../../../../../electron/user-data-path.cjs#L30>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [selectUserDataPath](<user-data-path.cjs.md#s-9b29881ed0ce8238>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- path.join — external-or-dynamic-dispatch; [electron/user-data-path.cjs:30](<../../../../../electron/user-data-path.cjs#L30>)

**Related tests / acceptance harnesses:**

- [electron/user-data-path.test.cjs:4](<../../../../../electron/user-data-path.test.cjs#L4>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-openrouter-live-main.cjs:4](<../../../../../scripts/acceptance/electron-openrouter-live-main.cjs#L4>) — file-import-only; coverage not established.
