# features/worldview/connector-dialog.tsx: symbols

[Atlas](<../../../../README.md>) / [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>) / [features/worldview/connector-dialog.tsx:1](<../../../../../../features/worldview/connector-dialog.tsx#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/worldview/connector-dialog.tsx](<connector-dialog.tsx.md#s-61fca21b096c1275>) (Module)
- [ConnectorDialog](<connector-dialog.tsx.md#s-4cc13f08e6e55168>) (FunctionDeclaration)
- [ConnectorDialog.&lt;anonymous@28:11&gt;](<connector-dialog.tsx.md#s-1d38c9d7948ed703>) (FunctionType)
- [ConnectorDialog.&lt;anonymous@29:12&gt;](<connector-dialog.tsx.md#s-72f7de59e5cb98e7>) (FunctionType)
- [ConnectorDialog.openDefinition](<connector-dialog.tsx.md#s-9a3233623358d5c3>) (FunctionExpression)
- [ConnectorDialog.openDefinition.closeDefinition](<connector-dialog.tsx.md#s-166cc8193d4da6e9>) (FunctionExpression)
- [ConnectorDialog.submit](<connector-dialog.tsx.md#s-24f60735194e5a9f>) (FunctionDeclaration)
- [ConnectorDialog.cancel](<connector-dialog.tsx.md#s-2f80bfcaa8193e02>) (FunctionDeclaration)

<a id="s-61fca21b096c1275"></a>

## features/worldview/connector-dialog.tsx

[features/worldview/connector-dialog.tsx:1](<../../../../../../features/worldview/connector-dialog.tsx#L1>) · Module · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4cc13f08e6e55168"></a>

## ConnectorDialog

[features/worldview/connector-dialog.tsx:13](<../../../../../../features/worldview/connector-dialog.tsx#L13>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Creates or edits semantic connection fields. Prefills existing metadata, awaits edit persistence and keeps failed submissions open for correction. Cancel/Escape discard staged fields.

Purpose evidence: jsdoc.

Exported as: ConnectorDialog ([features/worldview/connector-dialog.tsx:1](<../../../../../../features/worldview/connector-dialog.tsx#L1>)).

Lexical owner: [features/worldview/connector-dialog.tsx](<connector-dialog.tsx.md#s-61fca21b096c1275>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   endpoints,   sourceName,   targetName,   connector,   onSave,   onClose, } | Readonly&lt;{ endpoints: Pick&lt; WorldConnector, "sourceEntityId" &#124; "sourcePortId" &#124; "targetEntityId" &#124; "targetPortId" &gt;; sourceName: string; targetName: string; connector?: WorldConnector; onSave: (connector: WorldConnector) =&gt; void &#124; Promise&lt;void&gt;; onClose: () =&gt; void; }&gt; | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- useRef — external-or-dynamic-dispatch; [features/worldview/connector-dialog.tsx:31](<../../../../../../features/worldview/connector-dialog.tsx#L31>)
- useRef — external-or-dynamic-dispatch; [features/worldview/connector-dialog.tsx:32](<../../../../../../features/worldview/connector-dialog.tsx#L32>)
- useState — external-or-dynamic-dispatch; [features/worldview/connector-dialog.tsx:33](<../../../../../../features/worldview/connector-dialog.tsx#L33>)
- useState — external-or-dynamic-dispatch; [features/worldview/connector-dialog.tsx:34](<../../../../../../features/worldview/connector-dialog.tsx#L34>)
- useEffect — external-or-dynamic-dispatch; [features/worldview/connector-dialog.tsx:36](<../../../../../../features/worldview/connector-dialog.tsx#L36>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1d38c9d7948ed703"></a>

## ConnectorDialog.&lt;anonymous@28:11&gt;

[features/worldview/connector-dialog.tsx:28](<../../../../../../features/worldview/connector-dialog.tsx#L28>) · FunctionType · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConnectorDialog](<connector-dialog.tsx.md#s-4cc13f08e6e55168>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| connector | WorldConnector | annotation | required |

Returns: void &#124; Promise&lt;void&gt; (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-72f7de59e5cb98e7"></a>

## ConnectorDialog.&lt;anonymous@29:12&gt;

[features/worldview/connector-dialog.tsx:29](<../../../../../../features/worldview/connector-dialog.tsx#L29>) · FunctionType · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConnectorDialog](<connector-dialog.tsx.md#s-4cc13f08e6e55168>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9a3233623358d5c3"></a>

## ConnectorDialog.openDefinition

[features/worldview/connector-dialog.tsx:36](<../../../../../../features/worldview/connector-dialog.tsx#L36>) · FunctionExpression · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConnectorDialog](<connector-dialog.tsx.md#s-4cc13f08e6e55168>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: () =&gt; void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- dialog.showModal — external-or-dynamic-dispatch; [features/worldview/connector-dialog.tsx:39](<../../../../../../features/worldview/connector-dialog.tsx#L39>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-166cc8193d4da6e9"></a>

## ConnectorDialog.openDefinition.closeDefinition

[features/worldview/connector-dialog.tsx:41](<../../../../../../features/worldview/connector-dialog.tsx#L41>) · FunctionExpression · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Restores the prior control after closing the native definition dialog.

Purpose evidence: jsdoc.

Lexical owner: [ConnectorDialog.openDefinition](<connector-dialog.tsx.md#s-9a3233623358d5c3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- dialog.close — external-or-dynamic-dispatch; [features/worldview/connector-dialog.tsx:42](<../../../../../../features/worldview/connector-dialog.tsx#L42>)
- previous.focus — external-or-dynamic-dispatch; [features/worldview/connector-dialog.tsx:44](<../../../../../../features/worldview/connector-dialog.tsx#L44>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-24f60735194e5a9f"></a>

## ConnectorDialog.submit

[features/worldview/connector-dialog.tsx:48](<../../../../../../features/worldview/connector-dialog.tsx#L48>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Validates staged semantic fields, retains an edited connection's identity and waits for saving. Errors preserve the draft for retry.

Purpose evidence: jsdoc.

Lexical owner: [ConnectorDialog](<connector-dialog.tsx.md#s-4cc13f08e6e55168>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | FormEvent&lt;HTMLFormElement&gt; | annotation | required |

Returns: Promise&lt;void&gt; (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 16.

- event.preventDefault — external-or-dynamic-dispatch; [features/worldview/connector-dialog.tsx:49](<../../../../../../features/worldview/connector-dialog.tsx#L49>)
- FormData — external-or-dynamic-dispatch; [features/worldview/connector-dialog.tsx:51](<../../../../../../features/worldview/connector-dialog.tsx#L51>)
- String(values.get("name") ?? "").trim — external-or-dynamic-dispatch; [features/worldview/connector-dialog.tsx:52](<../../../../../../features/worldview/connector-dialog.tsx#L52>)
- String — external-or-dynamic-dispatch; [features/worldview/connector-dialog.tsx:52](<../../../../../../features/worldview/connector-dialog.tsx#L52>)
- values.get — external-or-dynamic-dispatch; [features/worldview/connector-dialog.tsx:52](<../../../../../../features/worldview/connector-dialog.tsx#L52>)
- setError — external-or-dynamic-dispatch; [features/worldview/connector-dialog.tsx:54](<../../../../../../features/worldview/connector-dialog.tsx#L54>)
- setSaving — external-or-dynamic-dispatch; [features/worldview/connector-dialog.tsx:59](<../../../../../../features/worldview/connector-dialog.tsx#L59>)
- setError — external-or-dynamic-dispatch; [features/worldview/connector-dialog.tsx:60](<../../../../../../features/worldview/connector-dialog.tsx#L60>)
- 8 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2f80bfcaa8193e02"></a>

## ConnectorDialog.cancel

[features/worldview/connector-dialog.tsx:81](<../../../../../../features/worldview/connector-dialog.tsx#L81>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Discards staged fields on Escape while allowing an in-progress save to finish.

Purpose evidence: jsdoc.

Lexical owner: [ConnectorDialog](<connector-dialog.tsx.md#s-4cc13f08e6e55168>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | SyntheticEvent&lt;HTMLDialogElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- event.preventDefault — external-or-dynamic-dispatch; [features/worldview/connector-dialog.tsx:82](<../../../../../../features/worldview/connector-dialog.tsx#L82>)
- onClose — external-or-dynamic-dispatch; [features/worldview/connector-dialog.tsx:83](<../../../../../../features/worldview/connector-dialog.tsx#L83>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
