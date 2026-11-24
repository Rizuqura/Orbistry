# components/status-bar.tsx: symbols

[Atlas](<../../../README.md>) / [Portal shell](<../../../modules/portal-shell.md>) / [components/status-bar.tsx:1](<../../../../../components/status-bar.tsx#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [components/status-bar.tsx](<status-bar.tsx.md#s-92f2c93b5cbae222>) (Module)
- [StatusBar](<status-bar.tsx.md#s-bc96af59cfd8aed8>) (FunctionDeclaration)

<a id="s-92f2c93b5cbae222"></a>

## components/status-bar.tsx

[components/status-bar.tsx:1](<../../../../../components/status-bar.tsx#L1>) · Module · production · [Portal shell](<../../../modules/portal-shell.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bc96af59cfd8aed8"></a>

## StatusBar

[components/status-bar.tsx:3](<../../../../../components/status-bar.tsx#L3>) · FunctionDeclaration · production · [Portal shell](<../../../modules/portal-shell.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: StatusBar ([components/status-bar.tsx:1](<../../../../../components/status-bar.tsx#L1>)).

Lexical owner: [components/status-bar.tsx](<status-bar.tsx.md#s-92f2c93b5cbae222>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   view,   snapshot,   isScanning,   error,   agentContext,   agentModel,   agentName, } | Readonly&lt;{ view: "workspace" &#124; "worldview" &#124; "agent"; snapshot: VaultSnapshot &#124; null; isScanning: boolean; error?: string &#124; null; agentContext?: string; agentModel?: string; agentName?: string; }&gt; | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- new Date(snapshot.lastScannedAt).toLocaleTimeString — external-or-dynamic-dispatch; [components/status-bar.tsx:22](<../../../../../components/status-bar.tsx#L22>)
- Date — external-or-dynamic-dispatch; [components/status-bar.tsx:22](<../../../../../components/status-bar.tsx#L22>)
- (agentName ?? "Orbistry").replace(" Agent", "").toUpperCase — external-or-dynamic-dispatch; [components/status-bar.tsx:43](<../../../../../components/status-bar.tsx#L43>)
- (agentName ?? "Orbistry").replace — external-or-dynamic-dispatch; [components/status-bar.tsx:43](<../../../../../components/status-bar.tsx#L43>)
- view.toUpperCase — external-or-dynamic-dispatch; [components/status-bar.tsx:61](<../../../../../components/status-bar.tsx#L61>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
