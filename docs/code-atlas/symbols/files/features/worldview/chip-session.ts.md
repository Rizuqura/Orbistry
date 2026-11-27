# features/worldview/chip-session.ts: symbols

[Atlas](<../../../../README.md>) / [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>) / [features/worldview/chip-session.ts:1](<../../../../../../features/worldview/chip-session.ts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>) (Module)
- [getSessionConnectors](<chip-session.ts.md#s-9c92b48ec18e1929>) (FunctionDeclaration)
- [getServerConnectors](<chip-session.ts.md#s-115d01ef038b6bae>) (FunctionDeclaration)
- [addSessionConnector](<chip-session.ts.md#s-5165f757bde396b7>) (FunctionDeclaration)
- [addSessionConnector.&lt;anonymous@28:74&gt;](<chip-session.ts.md#s-fa1d7fdfa42333a9>) (ArrowFunction)
- [addSessionConnector.saveRelationship](<chip-session.ts.md#s-12a3dd2e55746f6b>) (FunctionExpression)
- [updateSessionConnector](<chip-session.ts.md#s-ba7a43e417a8d197>) (FunctionDeclaration)
- [updateSessionConnector.&lt;anonymous@57:35&gt;](<chip-session.ts.md#s-d71ec401e796ef5e>) (ArrowFunction)
- [updateSessionConnector.&lt;anonymous@75:5&gt;](<chip-session.ts.md#s-153c5a244bcb23bf>) (ArrowFunction)
- [removeSessionConnector](<chip-session.ts.md#s-30a0ccc8e0ec03c6>) (FunctionDeclaration)
- [removeSessionConnector.&lt;anonymous@87:70&gt;](<chip-session.ts.md#s-d813234f53973f1b>) (ArrowFunction)
- [removeSessionConnector.deleteRelationship](<chip-session.ts.md#s-b5f527c0a0733208>) (FunctionExpression)
- [&lt;anonymous@99:27&gt;](<chip-session.ts.md#s-2cf20bad2b0f1a33>) (FunctionType)
- [PersistenceState](<chip-session.ts.md#s-946532c0010e3395>) (TypeAliasDeclaration)
- [&lt;anonymous@124:43&gt;](<chip-session.ts.md#s-417a20f1163dd164>) (FunctionType)
- [getWorldViewPersistence](<chip-session.ts.md#s-170ed9fa2eb9b784>) (FunctionDeclaration)
- [getServerPersistence](<chip-session.ts.md#s-b6db58bffdf0d11b>) (FunctionDeclaration)
- [setPersistence](<chip-session.ts.md#s-49d6ac841e2cc70e>) (FunctionDeclaration)
- [requireWorldViewBridge](<chip-session.ts.md#s-724ceb52bd424e76>) (FunctionDeclaration)
- [replaceChipSources](<chip-session.ts.md#s-9ff8f1a12cc5c2ed>) (FunctionDeclaration)
- [queueWrite](<chip-session.ts.md#s-eda5e528d475ea62>) (FunctionDeclaration)
- [queueWrite.&lt;anonymous@167:14&gt;](<chip-session.ts.md#s-60f16815958c4a2d>) (FunctionType)
- [queueWrite.writeMetadata](<chip-session.ts.md#s-85be4f211b45bcde>) (FunctionExpression)
- [persistChip](<chip-session.ts.md#s-04a124d1c5950ab3>) (FunctionDeclaration)
- [persistChip.saveEntity](<chip-session.ts.md#s-8bedc702975b23d2>) (FunctionExpression)
- [flushWorldViewWrites](<chip-session.ts.md#s-14cfc10edca5869e>) (FunctionDeclaration)
- [loadWorldViewSession](<chip-session.ts.md#s-16fd179714630bf4>) (FunctionDeclaration)
- [loadWorldViewSession.readWorld](<chip-session.ts.md#s-c7169a7fa9a66511>) (FunctionExpression)
- [retryWorldViewWrites](<chip-session.ts.md#s-20897c315f6c802a>) (FunctionDeclaration)
- [getSessionChips](<chip-session.ts.md#s-4bccdef1d4d202d5>) (FunctionDeclaration)
- [getServerChips](<chip-session.ts.md#s-fac340d0d0dbb44a>) (FunctionDeclaration)
- [subscribeChips](<chip-session.ts.md#s-84efc8cede0b1c37>) (FunctionDeclaration)
- [subscribeChips.&lt;anonymous@297:42&gt;](<chip-session.ts.md#s-05b24580d6b4c067>) (FunctionType)
- [subscribeChips.&lt;anonymous@297:55&gt;](<chip-session.ts.md#s-e4bcdb99dac59cd9>) (FunctionType)
- [subscribeChips.unsubscribe](<chip-session.ts.md#s-9b5e61ffb6e761ab>) (FunctionExpression)
- [publish](<chip-session.ts.md#s-6b69d901fb5116fa>) (FunctionDeclaration)
- [addSessionChip](<chip-session.ts.md#s-323a156c7123bc4e>) (FunctionDeclaration)
- [moveSessionChip](<chip-session.ts.md#s-ca7fa5bab39f79d9>) (FunctionDeclaration)
- [updateKnowledgeMenus](<chip-session.ts.md#s-f11b5e5262683bb8>) (FunctionDeclaration)
- [updateKnowledgeMenus.&lt;anonymous@340:27&gt;](<chip-session.ts.md#s-b3533518a7fe3c07>) (ArrowFunction)
- [updateKnowledgeMenus.&lt;anonymous@343:21&gt;](<chip-session.ts.md#s-27e9830477dce8fd>) (ArrowFunction)
- [updateSessionChip](<chip-session.ts.md#s-ea5b80cfa0863cae>) (FunctionDeclaration)
- [removeSessionChip](<chip-session.ts.md#s-6d3b3ae95e4a805a>) (FunctionDeclaration)
- [removeSessionChip.deleteEntityIndex](<chip-session.ts.md#s-d79e182eaece8514>) (FunctionExpression)

<a id="s-1740b9ad7924f798"></a>

## features/worldview/chip-session.ts

[features/worldview/chip-session.ts:1](<../../../../../../features/worldview/chip-session.ts#L1>) · Module · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- Set — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:99](<../../../../../../features/worldview/chip-session.ts#L99>)
- Promise.resolve — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:120](<../../../../../../features/worldview/chip-session.ts#L120>)
- Map — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:122](<../../../../../../features/worldview/chip-session.ts#L122>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-9c92b48ec18e1929"></a>

## getSessionConnectors

[features/worldview/chip-session.ts:13](<../../../../../../features/worldview/chip-session.ts#L13>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Returns stable relationship snapshots for the canvas and React, without port occupancy state.

Purpose evidence: jsdoc.

Exported as: getSessionConnectors ([features/worldview/chip-session.ts:1](<../../../../../../features/worldview/chip-session.ts#L1>)).

Lexical owner: [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: readonly WorldConnector&#91;&#93; (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [WorldView.connectWorldCanvas.paint](<worldview.tsx.md#s-f30798102198d6d1>) — [features/worldview/worldview.tsx:305](<../../../../../../features/worldview/worldview.tsx#L305>)
- [WorldView.connectWorldCanvas.startDrag](<worldview.tsx.md#s-8232bd9f09185164>) — [features/worldview/worldview.tsx:521](<../../../../../../features/worldview/worldview.tsx#L521>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-115d01ef038b6bae"></a>

## getServerConnectors

[features/worldview/chip-session.ts:17](<../../../../../../features/worldview/chip-session.ts#L17>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Supplies a stable empty relationship snapshot during server rendering.

Purpose evidence: jsdoc.

Exported as: getServerConnectors ([features/worldview/chip-session.ts:1](<../../../../../../features/worldview/chip-session.ts#L1>)).

Lexical owner: [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: readonly WorldConnector&#91;&#93; (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-5165f757bde396b7"></a>

## addSessionConnector

[features/worldview/chip-session.ts:22](<../../../../../../features/worldview/chip-session.ts#L22>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Adds a confirmed relationship and queues a recoverable, identity-specific write after preceding entity writes.

Purpose evidence: jsdoc.

Exported as: addSessionConnector ([features/worldview/chip-session.ts:1](<../../../../../../features/worldview/chip-session.ts#L1>)).

Lexical owner: [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| connector | WorldConnector | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [requireWorldViewBridge](<chip-session.ts.md#s-724ceb52bd424e76>) — [features/worldview/chip-session.ts:34](<../../../../../../features/worldview/chip-session.ts#L34>)
- [publish](<chip-session.ts.md#s-6b69d901fb5116fa>) — [features/worldview/chip-session.ts:36](<../../../../../../features/worldview/chip-session.ts#L36>)
- [queueWrite](<chip-session.ts.md#s-eda5e528d475ea62>) — [features/worldview/chip-session.ts:38](<../../../../../../features/worldview/chip-session.ts#L38>)

**Called by (statically resolved):**

- [WorldView.saveConnector](<worldview.tsx.md#s-c4da7be5d248ae20>) — [features/worldview/worldview.tsx:906](<../../../../../../features/worldview/worldview.tsx#L906>)

Unresolved / external call sites: 3.

- Error — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:25](<../../../../../../features/worldview/chip-session.ts#L25>)
- connectors.some — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:27](<../../../../../../features/worldview/chip-session.ts#L27>)
- Error — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:33](<../../../../../../features/worldview/chip-session.ts#L33>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-fa1d7fdfa42333a9"></a>

## addSessionConnector.&lt;anonymous@28:74&gt;

[features/worldview/chip-session.ts:28](<../../../../../../features/worldview/chip-session.ts#L28>) · ArrowFunction · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Detects identity collisions without testing port occupancy.

Purpose evidence: jsdoc.

Lexical owner: [addSessionConnector](<chip-session.ts.md#s-5165f757bde396b7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-12a3dd2e55746f6b"></a>

## addSessionConnector.saveRelationship

[features/worldview/chip-session.ts:41](<../../../../../../features/worldview/chip-session.ts#L41>) · FunctionExpression · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [addSessionConnector](<chip-session.ts.md#s-5165f757bde396b7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- bridge.request — declaration-without-runtime-body; [features/worldview/chip-session.ts:42](<../../../../../../features/worldview/chip-session.ts#L42>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-ba7a43e417a8d197"></a>

## updateSessionConnector

[features/worldview/chip-session.ts:48](<../../../../../../features/worldview/chip-session.ts#L48>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Saves an edited connection after earlier writes finish, publishing only persisted metadata. Stale/deleted connections and storage failures reject for the editor to display.

Purpose evidence: jsdoc.

Exported as: updateSessionConnector ([features/worldview/chip-session.ts:1](<../../../../../../features/worldview/chip-session.ts#L1>)).

Lexical owner: [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| previous | WorldConnector | annotation | required |
| connector | WorldConnector | annotation | required |

Returns: Promise&lt;void&gt; (annotation). Implementation present.

**Calls (statically resolved):**

- [flushWorldViewWrites](<chip-session.ts.md#s-14cfc10edca5869e>) — [features/worldview/chip-session.ts:56](<../../../../../../features/worldview/chip-session.ts#L56>)
- [requireWorldViewBridge](<chip-session.ts.md#s-724ceb52bd424e76>) — [features/worldview/chip-session.ts:64](<../../../../../../features/worldview/chip-session.ts#L64>)
- [publish](<chip-session.ts.md#s-6b69d901fb5116fa>) — [features/worldview/chip-session.ts:77](<../../../../../../features/worldview/chip-session.ts#L77>)

**Called by (statically resolved):**

- [WorldView.saveConnector](<worldview.tsx.md#s-c4da7be5d248ae20>) — [features/worldview/worldview.tsx:905](<../../../../../../features/worldview/worldview.tsx#L905>)

Unresolved / external call sites: 7.

- Error — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:55](<../../../../../../features/worldview/chip-session.ts#L55>)
- connectors.find — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:57](<../../../../../../features/worldview/chip-session.ts#L57>)
- JSON.stringify — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:61](<../../../../../../features/worldview/chip-session.ts#L61>)
- JSON.stringify — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:61](<../../../../../../features/worldview/chip-session.ts#L61>)
- Error — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:63](<../../../../../../features/worldview/chip-session.ts#L63>)
- requireWorldViewBridge().request — declaration-without-runtime-body; [features/worldview/chip-session.ts:64](<../../../../../../features/worldview/chip-session.ts#L64>)
- connectors.map — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:73](<../../../../../../features/worldview/chip-session.ts#L73>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-d71ec401e796ef5e"></a>

## updateSessionConnector.&lt;anonymous@57:35&gt;

[features/worldview/chip-session.ts:57](<../../../../../../features/worldview/chip-session.ts#L57>) · ArrowFunction · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [updateSessionConnector](<chip-session.ts.md#s-ba7a43e417a8d197>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-153c5a244bcb23bf"></a>

## updateSessionConnector.&lt;anonymous@75:5&gt;

[features/worldview/chip-session.ts:75](<../../../../../../features/worldview/chip-session.ts#L75>) · ArrowFunction · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Replaces exactly the saved connection while retaining every other relationship.

Purpose evidence: jsdoc.

Lexical owner: [updateSessionConnector](<chip-session.ts.md#s-ba7a43e417a8d197>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-30a0ccc8e0ec03c6"></a>

## removeSessionConnector

[features/worldview/chip-session.ts:81](<../../../../../../features/worldview/chip-session.ts#L81>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Removes one confirmed relationship and queues its recoverable deletion, retaining all other connections.

Purpose evidence: jsdoc.

Exported as: removeSessionConnector ([features/worldview/chip-session.ts:1](<../../../../../../features/worldview/chip-session.ts#L1>)).

Lexical owner: [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | string | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [requireWorldViewBridge](<chip-session.ts.md#s-724ceb52bd424e76>) — [features/worldview/chip-session.ts:85](<../../../../../../features/worldview/chip-session.ts#L85>)
- [publish](<chip-session.ts.md#s-6b69d901fb5116fa>) — [features/worldview/chip-session.ts:90](<../../../../../../features/worldview/chip-session.ts#L90>)
- [queueWrite](<chip-session.ts.md#s-eda5e528d475ea62>) — [features/worldview/chip-session.ts:91](<../../../../../../features/worldview/chip-session.ts#L91>)

**Called by (statically resolved):**

- [WorldView.deleteSelectedConnector](<worldview.tsx.md#s-e66495427c8b2214>) — [features/worldview/worldview.tsx:928](<../../../../../../features/worldview/worldview.tsx#L928>)

Unresolved / external call sites: 2.

- Error — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:84](<../../../../../../features/worldview/chip-session.ts#L84>)
- connectors.filter — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:86](<../../../../../../features/worldview/chip-session.ts#L86>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-d813234f53973f1b"></a>

## removeSessionConnector.&lt;anonymous@87:70&gt;

[features/worldview/chip-session.ts:87](<../../../../../../features/worldview/chip-session.ts#L87>) · ArrowFunction · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Retains every relationship except the confirmed identity.

Purpose evidence: jsdoc.

Lexical owner: [removeSessionConnector](<chip-session.ts.md#s-30a0ccc8e0ec03c6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-b5f527c0a0733208"></a>

## removeSessionConnector.deleteRelationship

[features/worldview/chip-session.ts:94](<../../../../../../features/worldview/chip-session.ts#L94>) · FunctionExpression · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Removes one saved relationship without changing either entity.

Purpose evidence: jsdoc.

Lexical owner: [removeSessionConnector](<chip-session.ts.md#s-30a0ccc8e0ec03c6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- bridge.request — declaration-without-runtime-body; [features/worldview/chip-session.ts:95](<../../../../../../features/worldview/chip-session.ts#L95>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-2cf20bad2b0f1a33"></a>

## &lt;anonymous@99:27&gt;

[features/worldview/chip-session.ts:99](<../../../../../../features/worldview/chip-session.ts#L99>) · FunctionType · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>).

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

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-946532c0010e3395"></a>

## PersistenceState

[features/worldview/chip-session.ts:100](<../../../../../../features/worldview/chip-session.ts#L100>) · TypeAliasDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-417a20f1163dd164"></a>

## &lt;anonymous@124:43&gt;

[features/worldview/chip-session.ts:124](<../../../../../../features/worldview/chip-session.ts#L124>) · FunctionType · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: Promise&lt;void&gt; (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-170ed9fa2eb9b784"></a>

## getWorldViewPersistence

[features/worldview/chip-session.ts:128](<../../../../../../features/worldview/chip-session.ts#L128>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Returns stable save/load status for React's external-store subscription.

Purpose evidence: jsdoc.

Exported as: getWorldViewPersistence ([features/worldview/chip-session.ts:1](<../../../../../../features/worldview/chip-session.ts#L1>)).

Lexical owner: [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: PersistenceState (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@16:90&gt;](<chip-persistence.test.cjs.md#s-c6dda4078cc18edc>) — [features/worldview/chip-persistence.test.cjs:51](<../../../../../../features/worldview/chip-persistence.test.cjs#L51>)
- [&lt;anonymous@16:90&gt;](<chip-persistence.test.cjs.md#s-c6dda4078cc18edc>) — [features/worldview/chip-persistence.test.cjs:63](<../../../../../../features/worldview/chip-persistence.test.cjs#L63>)
- [&lt;anonymous@16:90&gt;](<chip-persistence.test.cjs.md#s-c6dda4078cc18edc>) — [features/worldview/chip-persistence.test.cjs:73](<../../../../../../features/worldview/chip-persistence.test.cjs#L73>)
- [&lt;anonymous@16:90&gt;](<chip-persistence.test.cjs.md#s-c6dda4078cc18edc>) — [features/worldview/chip-persistence.test.cjs:77](<../../../../../../features/worldview/chip-persistence.test.cjs#L77>)
- [WorldView.connectWorldCanvas.startDrag](<worldview.tsx.md#s-8232bd9f09185164>) — [features/worldview/worldview.tsx:474](<../../../../../../features/worldview/worldview.tsx#L474>)
- [WorldView.connectWorldCanvas.nudgeChip](<worldview.tsx.md#s-71368d37124fa960>) — [features/worldview/worldview.tsx:764](<../../../../../../features/worldview/worldview.tsx#L764>)
- [WorldView.connectWorldCanvas.nudgeChip](<worldview.tsx.md#s-71368d37124fa960>) — [features/worldview/worldview.tsx:764](<../../../../../../features/worldview/worldview.tsx#L764>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:51](<../../../../../../features/worldview/chip-persistence.test.cjs#L51>) — static-call-site; coverage not established.
- [features/worldview/chip-persistence.test.cjs:63](<../../../../../../features/worldview/chip-persistence.test.cjs#L63>) — static-call-site; coverage not established.
- [features/worldview/chip-persistence.test.cjs:73](<../../../../../../features/worldview/chip-persistence.test.cjs#L73>) — static-call-site; coverage not established.
- [features/worldview/chip-persistence.test.cjs:77](<../../../../../../features/worldview/chip-persistence.test.cjs#L77>) — static-call-site; coverage not established.
- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-b6db58bffdf0d11b"></a>

## getServerPersistence

[features/worldview/chip-session.ts:132](<../../../../../../features/worldview/chip-session.ts#L132>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Returns a stable SSR status without accessing the desktop bridge.

Purpose evidence: jsdoc.

Exported as: getServerPersistence ([features/worldview/chip-session.ts:1](<../../../../../../features/worldview/chip-session.ts#L1>)).

Lexical owner: [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: PersistenceState (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-49d6ac841e2cc70e"></a>

## setPersistence

[features/worldview/chip-session.ts:136](<../../../../../../features/worldview/chip-session.ts#L136>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Publishes loading/save status without changing source files or triggering another save.

Purpose evidence: jsdoc.

Lexical owner: [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| next | Partial&lt;PersistenceState&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [queueWrite](<chip-session.ts.md#s-eda5e528d475ea62>) — [features/worldview/chip-session.ts:171](<../../../../../../features/worldview/chip-session.ts#L171>)
- [queueWrite.writeMetadata](<chip-session.ts.md#s-85be4f211b45bcde>) — [features/worldview/chip-session.ts:179](<../../../../../../features/worldview/chip-session.ts#L179>)
- [queueWrite.writeMetadata](<chip-session.ts.md#s-85be4f211b45bcde>) — [features/worldview/chip-session.ts:190](<../../../../../../features/worldview/chip-session.ts#L190>)
- [loadWorldViewSession](<chip-session.ts.md#s-16fd179714630bf4>) — [features/worldview/chip-session.ts:234](<../../../../../../features/worldview/chip-session.ts#L234>)
- [loadWorldViewSession.readWorld](<chip-session.ts.md#s-c7169a7fa9a66511>) — [features/worldview/chip-session.ts:246](<../../../../../../features/worldview/chip-session.ts#L246>)
- [loadWorldViewSession.readWorld](<chip-session.ts.md#s-c7169a7fa9a66511>) — [features/worldview/chip-session.ts:253](<../../../../../../features/worldview/chip-session.ts#L253>)
- [loadWorldViewSession.readWorld](<chip-session.ts.md#s-c7169a7fa9a66511>) — [features/worldview/chip-session.ts:261](<../../../../../../features/worldview/chip-session.ts#L261>)

Unresolved / external call sites: 1.

- listener — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:138](<../../../../../../features/worldview/chip-session.ts#L138>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-724ceb52bd424e76"></a>

## requireWorldViewBridge

[features/worldview/chip-session.ts:142](<../../../../../../features/worldview/chip-session.ts#L142>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Requires the explicit WorldView desktop API; an outdated bridge is surfaced instead of pretending to save.

Purpose evidence: jsdoc.

Exported as: requireWorldViewBridge ([features/worldview/chip-session.ts:1](<../../../../../../features/worldview/chip-session.ts#L1>)).

Lexical owner: [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: WorldViewBridge (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [AgentWorkspace.&lt;anonymous@193:13&gt;.&lt;anonymous@199:30&gt;](<../agents/agent-workspace.tsx.md#s-1bee5bbb125f21ee>) — [features/agents/agent-workspace.tsx:200](<../../../../../../features/agents/agent-workspace.tsx#L200>)
- [AgentWorkspace.&lt;anonymous@221:13&gt;](<../agents/agent-workspace.tsx.md#s-c7ee1704cb22e842>) — [features/agents/agent-workspace.tsx:233](<../../../../../../features/agents/agent-workspace.tsx#L233>)
- [AssignFilesDialog.loadDirectory.listFiles](<../entities/assign-files-dialog.tsx.md#s-ffadbf9590b8d852>) — [features/entities/assign-files-dialog.tsx:65](<../../../../../../features/entities/assign-files-dialog.tsx#L65>)
- [AssignFilesDialog.confirmAssignment](<../entities/assign-files-dialog.tsx.md#s-a01e254655f4acbc>) — [features/entities/assign-files-dialog.tsx:115](<../../../../../../features/entities/assign-files-dialog.tsx#L115>)
- [useCarouselSource.loadOriginal](<../knowledge/carousel-source.tsx.md#s-98c473b6638d1c84>) — [features/knowledge/carousel-source.tsx:19](<../../../../../../features/knowledge/carousel-source.tsx#L19>)
- [DailyPrice.loadExtendedHistory](<../knowledge/daily-price.tsx.md#s-6e9ab92bdf60231d>) — [features/knowledge/daily-price.tsx:225](<../../../../../../features/knowledge/daily-price.tsx#L225>)
- [DailyPrice.loadPrices.fetchPrices](<../knowledge/daily-price.tsx.md#s-178f7f303a4695ce>) — [features/knowledge/daily-price.tsx:285](<../../../../../../features/knowledge/daily-price.tsx#L285>)
- [DailyPrice.saveTicker](<../knowledge/daily-price.tsx.md#s-74156e965031e0d2>) — [features/knowledge/daily-price.tsx:336](<../../../../../../features/knowledge/daily-price.tsx#L336>)
- [ExcelPreview.navigate](<../knowledge/excel-preview.tsx.md#s-3b9c4df3469cd19e>) — [features/knowledge/excel-preview.tsx:47](<../../../../../../features/knowledge/excel-preview.tsx#L47>)
- [ExcelPreview.copyMarkdown](<../knowledge/excel-preview.tsx.md#s-e4c569b0998f1cf1>) — [features/knowledge/excel-preview.tsx:79](<../../../../../../features/knowledge/excel-preview.tsx#L79>)
- [ExcelPreview.download](<../knowledge/excel-preview.tsx.md#s-3c66b0a01fdc8755>) — [features/knowledge/excel-preview.tsx:107](<../../../../../../features/knowledge/excel-preview.tsx#L107>)
- [FileInspector.revealSource](<../knowledge/file-inspector.tsx.md#s-16a1cf6c2c2f9829>) — [features/knowledge/file-inspector.tsx:43](<../../../../../../features/knowledge/file-inspector.tsx#L43>)
- [FileInspector.unassignSource](<../knowledge/file-inspector.tsx.md#s-c1814e4103505ec0>) — [features/knowledge/file-inspector.tsx:68](<../../../../../../features/knowledge/file-inspector.tsx#L68>)
- [FinancialViewer.load](<../knowledge/financial-viewer.tsx.md#s-d12838ae3f9b06d6>) — [features/knowledge/financial-viewer.tsx:44](<../../../../../../features/knowledge/financial-viewer.tsx#L44>)
- [ImageCarousel.locate](<../knowledge/image-carousel.tsx.md#s-c997c42ded29e071>) — [features/knowledge/image-carousel.tsx:194](<../../../../../../features/knowledge/image-carousel.tsx#L194>)
- [ImageCarousel.saveNotes](<../knowledge/image-carousel.tsx.md#s-8d1e3e27807cc102>) — [features/knowledge/image-carousel.tsx:213](<../../../../../../features/knowledge/image-carousel.tsx#L213>)
- [KnowledgeWorkspace.loadIndex.readIndex](<../knowledge/knowledge-workspace.tsx.md#s-32f3d6687ac94b28>) — [features/knowledge/knowledge-workspace.tsx:77](<../../../../../../features/knowledge/knowledge-workspace.tsx#L77>)
- [KnowledgeWorkspace.runIndexAction](<../knowledge/knowledge-workspace.tsx.md#s-ee0eba4471a17a6c>) — [features/knowledge/knowledge-workspace.tsx:128](<../../../../../../features/knowledge/knowledge-workspace.tsx#L128>)
- [KnowledgeWorkspace.runIndexAction](<../knowledge/knowledge-workspace.tsx.md#s-ee0eba4471a17a6c>) — [features/knowledge/knowledge-workspace.tsx:136](<../../../../../../features/knowledge/knowledge-workspace.tsx#L136>)
- [PackageSource.&lt;anonymous@20:13&gt;](<../knowledge/package-source.tsx.md#s-f523d34e84afaeb0>) — [features/knowledge/package-source.tsx:22](<../../../../../../features/knowledge/package-source.tsx#L22>)
- [PackageSource.request](<../knowledge/package-source.tsx.md#s-79a3c5c06726917d>) — [features/knowledge/package-source.tsx:45](<../../../../../../features/knowledge/package-source.tsx#L45>)
- [SourcePreview.loadPreview](<../knowledge/source-preview.tsx.md#s-94839dee0bfd0dd8>) — [features/knowledge/source-preview.tsx:37](<../../../../../../features/knowledge/source-preview.tsx#L37>)
- [SourcePreview.locateOriginal](<../knowledge/source-preview.tsx.md#s-1f3c37bba8a58dfb>) — [features/knowledge/source-preview.tsx:76](<../../../../../../features/knowledge/source-preview.tsx#L76>)
- [BackendIdentityWindow.lifecycle.readIdentity](<backend-identity-window.tsx.md#s-7b28884f11e3ddbe>) — [features/worldview/backend-identity-window.tsx:128](<../../../../../../features/worldview/backend-identity-window.tsx#L128>)
- [BackendIdentityWindow.loadSection](<backend-identity-window.tsx.md#s-c7f0533ac6baeabb>) — [features/worldview/backend-identity-window.tsx:165](<../../../../../../features/worldview/backend-identity-window.tsx#L165>)
- [BackendIdentityWindow.run](<backend-identity-window.tsx.md#s-a5a0b225615eb1eb>) — [features/worldview/backend-identity-window.tsx:212](<../../../../../../features/worldview/backend-identity-window.tsx#L212>)
- [BackendIdentityWindow.run](<backend-identity-window.tsx.md#s-a5a0b225615eb1eb>) — [features/worldview/backend-identity-window.tsx:232](<../../../../../../features/worldview/backend-identity-window.tsx#L232>)
- [BackendIdentityWindow.copy](<backend-identity-window.tsx.md#s-c68c8aa0bf7cccc6>) — [features/worldview/backend-identity-window.tsx:250](<../../../../../../features/worldview/backend-identity-window.tsx#L250>)
- [addSessionConnector](<chip-session.ts.md#s-5165f757bde396b7>) — [features/worldview/chip-session.ts:34](<../../../../../../features/worldview/chip-session.ts#L34>)
- [updateSessionConnector](<chip-session.ts.md#s-ba7a43e417a8d197>) — [features/worldview/chip-session.ts:64](<../../../../../../features/worldview/chip-session.ts#L64>)
- [removeSessionConnector](<chip-session.ts.md#s-30a0ccc8e0ec03c6>) — [features/worldview/chip-session.ts:85](<../../../../../../features/worldview/chip-session.ts#L85>)
- [persistChip](<chip-session.ts.md#s-04a124d1c5950ab3>) — [features/worldview/chip-session.ts:203](<../../../../../../features/worldview/chip-session.ts#L203>)
- [loadWorldViewSession.readWorld](<chip-session.ts.md#s-c7169a7fa9a66511>) — [features/worldview/chip-session.ts:239](<../../../../../../features/worldview/chip-session.ts#L239>)
- [removeSessionChip](<chip-session.ts.md#s-6d3b3ae95e4a805a>) — [features/worldview/chip-session.ts:378](<../../../../../../features/worldview/chip-session.ts#L378>)
- [WorldSearch.searchPersistedMetadata.requestSearch](<world-search.tsx.md#s-fcacac8ba3cdd291>) — [features/worldview/world-search.tsx:95](<../../../../../../features/worldview/world-search.tsx#L95>)
- [WorldSearch.rebuildCache](<world-search.tsx.md#s-7246c3c99790de9a>) — [features/worldview/world-search.tsx:212](<../../../../../../features/worldview/world-search.tsx#L212>)

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:145](<../../../../../../features/worldview/chip-session.ts#L145>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-9ff8f1a12cc5c2ed"></a>

## replaceChipSources

[features/worldview/chip-session.ts:152](<../../../../../../features/worldview/chip-session.ts#L152>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Updates resolved source metadata while preserving any more recent local chip movement or edits.

Purpose evidence: jsdoc.

Exported as: replaceChipSources ([features/worldview/chip-session.ts:1](<../../../../../../features/worldview/chip-session.ts#L1>)).

Lexical owner: [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| saved | WorldViewChip | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [publish](<chip-session.ts.md#s-6b69d901fb5116fa>) — [features/worldview/chip-session.ts:160](<../../../../../../features/worldview/chip-session.ts#L160>)

**Called by (statically resolved):**

- [AssignFilesDialog.confirmAssignment](<../entities/assign-files-dialog.tsx.md#s-a01e254655f4acbc>) — [features/entities/assign-files-dialog.tsx:119](<../../../../../../features/entities/assign-files-dialog.tsx#L119>)
- [FileInspector.unassignSource](<../knowledge/file-inspector.tsx.md#s-c1814e4103505ec0>) — [features/knowledge/file-inspector.tsx:72](<../../../../../../features/knowledge/file-inspector.tsx#L72>)
- [persistChip.saveEntity](<chip-session.ts.md#s-8bedc702975b23d2>) — [features/worldview/chip-session.ts:210](<../../../../../../features/worldview/chip-session.ts#L210>)

Unresolved / external call sites: 1.

- next.push — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:155](<../../../../../../features/worldview/chip-session.ts#L155>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-eda5e528d475ea62"></a>

## queueWrite

[features/worldview/chip-session.ts:164](<../../../../../../features/worldview/chip-session.ts#L164>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Queues a recoverable metadata write; failure remains visible until the latest operation for that entity succeeds.

Purpose evidence: jsdoc.

Lexical owner: [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | string | annotation | required |
| key | string | annotation | required |
| operation | () =&gt; Promise&lt;void&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [setPersistence](<chip-session.ts.md#s-49d6ac841e2cc70e>) — [features/worldview/chip-session.ts:171](<../../../../../../features/worldview/chip-session.ts#L171>)

**Called by (statically resolved):**

- [addSessionConnector](<chip-session.ts.md#s-5165f757bde396b7>) — [features/worldview/chip-session.ts:38](<../../../../../../features/worldview/chip-session.ts#L38>)
- [removeSessionConnector](<chip-session.ts.md#s-30a0ccc8e0ec03c6>) — [features/worldview/chip-session.ts:91](<../../../../../../features/worldview/chip-session.ts#L91>)
- [persistChip](<chip-session.ts.md#s-04a124d1c5950ab3>) — [features/worldview/chip-session.ts:205](<../../../../../../features/worldview/chip-session.ts#L205>)
- [retryWorldViewWrites](<chip-session.ts.md#s-20897c315f6c802a>) — [features/worldview/chip-session.ts:278](<../../../../../../features/worldview/chip-session.ts#L278>)
- [removeSessionChip](<chip-session.ts.md#s-6d3b3ae95e4a805a>) — [features/worldview/chip-session.ts:379](<../../../../../../features/worldview/chip-session.ts#L379>)

Unresolved / external call sites: 1.

- tail.then — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:172](<../../../../../../features/worldview/chip-session.ts#L172>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-60f16815958c4a2d"></a>

## queueWrite.&lt;anonymous@167:14&gt;

[features/worldview/chip-session.ts:167](<../../../../../../features/worldview/chip-session.ts#L167>) · FunctionType · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [queueWrite](<chip-session.ts.md#s-eda5e528d475ea62>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: Promise&lt;void&gt; (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-85be4f211b45bcde"></a>

## queueWrite.writeMetadata

[features/worldview/chip-session.ts:172](<../../../../../../features/worldview/chip-session.ts#L172>) · FunctionExpression · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [queueWrite](<chip-session.ts.md#s-eda5e528d475ea62>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [setPersistence](<chip-session.ts.md#s-49d6ac841e2cc70e>) — [features/worldview/chip-session.ts:179](<../../../../../../features/worldview/chip-session.ts#L179>)
- [setPersistence](<chip-session.ts.md#s-49d6ac841e2cc70e>) — [features/worldview/chip-session.ts:190](<../../../../../../features/worldview/chip-session.ts#L190>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- operation — declaration-without-runtime-body; [features/worldview/chip-session.ts:174](<../../../../../../features/worldview/chip-session.ts#L174>)
- failed.delete — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:175](<../../../../../../features/worldview/chip-session.ts#L175>)
- failed.set — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:177](<../../../../../../features/worldview/chip-session.ts#L177>)
- failed.values — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:188](<../../../../../../features/worldview/chip-session.ts#L188>)
- Math.max — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:191](<../../../../../../features/worldview/chip-session.ts#L191>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-04a124d1c5950ab3"></a>

## persistChip

[features/worldview/chip-session.ts:200](<../../../../../../features/worldview/chip-session.ts#L200>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Schedules a snapshot save only after a real Universe session has been loaded.

Purpose evidence: jsdoc.

Lexical owner: [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chip | WorldViewChip | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [requireWorldViewBridge](<chip-session.ts.md#s-724ceb52bd424e76>) — [features/worldview/chip-session.ts:203](<../../../../../../features/worldview/chip-session.ts#L203>)
- [queueWrite](<chip-session.ts.md#s-eda5e528d475ea62>) — [features/worldview/chip-session.ts:205](<../../../../../../features/worldview/chip-session.ts#L205>)

**Called by (statically resolved):**

- [addSessionChip](<chip-session.ts.md#s-323a156c7123bc4e>) — [features/worldview/chip-session.ts:317](<../../../../../../features/worldview/chip-session.ts#L317>)
- [moveSessionChip](<chip-session.ts.md#s-ca7fa5bab39f79d9>) — [features/worldview/chip-session.ts:332](<../../../../../../features/worldview/chip-session.ts#L332>)
- [updateKnowledgeMenus](<chip-session.ts.md#s-f11b5e5262683bb8>) — [features/worldview/chip-session.ts:344](<../../../../../../features/worldview/chip-session.ts#L344>)
- [updateSessionChip](<chip-session.ts.md#s-ea5b80cfa0863cae>) — [features/worldview/chip-session.ts:359](<../../../../../../features/worldview/chip-session.ts#L359>)

Unresolved / external call sites: 1.

- structuredClone — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:204](<../../../../../../features/worldview/chip-session.ts#L204>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-8bedc702975b23d2"></a>

## persistChip.saveEntity

[features/worldview/chip-session.ts:205](<../../../../../../features/worldview/chip-session.ts#L205>) · FunctionExpression · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [persistChip](<chip-session.ts.md#s-04a124d1c5950ab3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [replaceChipSources](<chip-session.ts.md#s-9ff8f1a12cc5c2ed>) — [features/worldview/chip-session.ts:210](<../../../../../../features/worldview/chip-session.ts#L210>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- bridge.request — declaration-without-runtime-body; [features/worldview/chip-session.ts:206](<../../../../../../features/worldview/chip-session.ts#L206>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-14cfc10edca5869e"></a>

## flushWorldViewWrites

[features/worldview/chip-session.ts:215](<../../../../../../features/worldview/chip-session.ts#L215>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Waits until queued writes finish; failed writes reject so assignment cannot silently outpace persistence.

Purpose evidence: jsdoc.

Exported as: flushWorldViewWrites ([features/worldview/chip-session.ts:1](<../../../../../../features/worldview/chip-session.ts#L1>)).

Lexical owner: [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: Promise&lt;void&gt; (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [AssignFilesDialog.confirmAssignment](<../entities/assign-files-dialog.tsx.md#s-a01e254655f4acbc>) — [features/entities/assign-files-dialog.tsx:114](<../../../../../../features/entities/assign-files-dialog.tsx#L114>)
- [FileInspector.unassignSource](<../knowledge/file-inspector.tsx.md#s-c1814e4103505ec0>) — [features/knowledge/file-inspector.tsx:67](<../../../../../../features/knowledge/file-inspector.tsx#L67>)
- [KnowledgeWorkspace.loadIndex.readIndex](<../knowledge/knowledge-workspace.tsx.md#s-32f3d6687ac94b28>) — [features/knowledge/knowledge-workspace.tsx:75](<../../../../../../features/knowledge/knowledge-workspace.tsx#L75>)
- [KnowledgeWorkspace.runIndexAction](<../knowledge/knowledge-workspace.tsx.md#s-ee0eba4471a17a6c>) — [features/knowledge/knowledge-workspace.tsx:120](<../../../../../../features/knowledge/knowledge-workspace.tsx#L120>)
- [BackendIdentityWindow.lifecycle.readIdentity](<backend-identity-window.tsx.md#s-7b28884f11e3ddbe>) — [features/worldview/backend-identity-window.tsx:126](<../../../../../../features/worldview/backend-identity-window.tsx#L126>)
- [BackendIdentityWindow.run](<backend-identity-window.tsx.md#s-a5a0b225615eb1eb>) — [features/worldview/backend-identity-window.tsx:210](<../../../../../../features/worldview/backend-identity-window.tsx#L210>)
- [&lt;anonymous@16:90&gt;](<chip-persistence.test.cjs.md#s-c6dda4078cc18edc>) — [features/worldview/chip-persistence.test.cjs:62](<../../../../../../features/worldview/chip-persistence.test.cjs#L62>)
- [&lt;anonymous@16:90&gt;](<chip-persistence.test.cjs.md#s-c6dda4078cc18edc>) — [features/worldview/chip-persistence.test.cjs:72](<../../../../../../features/worldview/chip-persistence.test.cjs#L72>)
- [&lt;anonymous@16:90&gt;](<chip-persistence.test.cjs.md#s-c6dda4078cc18edc>) — [features/worldview/chip-persistence.test.cjs:84](<../../../../../../features/worldview/chip-persistence.test.cjs#L84>)
- [updateSessionConnector](<chip-session.ts.md#s-ba7a43e417a8d197>) — [features/worldview/chip-session.ts:56](<../../../../../../features/worldview/chip-session.ts#L56>)
- [loadWorldViewSession.readWorld](<chip-session.ts.md#s-c7169a7fa9a66511>) — [features/worldview/chip-session.ts:238](<../../../../../../features/worldview/chip-session.ts#L238>)
- [retryWorldViewWrites](<chip-session.ts.md#s-20897c315f6c802a>) — [features/worldview/chip-session.ts:281](<../../../../../../features/worldview/chip-session.ts#L281>)
- [WorldSearch.searchPersistedMetadata.requestSearch](<world-search.tsx.md#s-fcacac8ba3cdd291>) — [features/worldview/world-search.tsx:93](<../../../../../../features/worldview/world-search.tsx#L93>)
- [WorldSearch.rebuildCache](<world-search.tsx.md#s-7246c3c99790de9a>) — [features/worldview/world-search.tsx:211](<../../../../../../features/worldview/world-search.tsx#L211>)

Unresolved / external call sites: 2.

- failed.values — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:217](<../../../../../../features/worldview/chip-session.ts#L217>)
- Error — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:219](<../../../../../../features/worldview/chip-session.ts#L219>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:62](<../../../../../../features/worldview/chip-persistence.test.cjs#L62>) — static-call-site; coverage not established.
- [features/worldview/chip-persistence.test.cjs:72](<../../../../../../features/worldview/chip-persistence.test.cjs#L72>) — static-call-site; coverage not established.
- [features/worldview/chip-persistence.test.cjs:84](<../../../../../../features/worldview/chip-persistence.test.cjs#L84>) — static-call-site; coverage not established.
- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-16fd179714630bf4"></a>

## loadWorldViewSession

[features/worldview/chip-session.ts:225](<../../../../../../features/worldview/chip-session.ts#L225>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Loads chip indexes for the actual Universe root, preserving unsaved edits if a reload fails.

Purpose evidence: jsdoc.

Exported as: loadWorldViewSession ([features/worldview/chip-session.ts:1](<../../../../../../features/worldview/chip-session.ts#L1>)).

Lexical owner: [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | string | annotation | required |

Returns: Promise&lt;void&gt; (annotation). Implementation present.

**Calls (statically resolved):**

- [publish](<chip-session.ts.md#s-6b69d901fb5116fa>) — [features/worldview/chip-session.ts:231](<../../../../../../features/worldview/chip-session.ts#L231>)
- [setPersistence](<chip-session.ts.md#s-49d6ac841e2cc70e>) — [features/worldview/chip-session.ts:234](<../../../../../../features/worldview/chip-session.ts#L234>)
- [loadWorldViewSession.readWorld](<chip-session.ts.md#s-c7169a7fa9a66511>) — [features/worldview/chip-session.ts:266](<../../../../../../features/worldview/chip-session.ts#L266>)

**Called by (statically resolved):**

- [&lt;anonymous@16:90&gt;](<chip-persistence.test.cjs.md#s-c6dda4078cc18edc>) — [features/worldview/chip-persistence.test.cjs:50](<../../../../../../features/worldview/chip-persistence.test.cjs#L50>)
- [&lt;anonymous@16:90&gt;](<chip-persistence.test.cjs.md#s-c6dda4078cc18edc>) — [features/worldview/chip-persistence.test.cjs:68](<../../../../../../features/worldview/chip-persistence.test.cjs#L68>)
- [&lt;anonymous@16:90&gt;](<chip-persistence.test.cjs.md#s-c6dda4078cc18edc>) — [features/worldview/chip-persistence.test.cjs:79](<../../../../../../features/worldview/chip-persistence.test.cjs#L79>)
- [&lt;anonymous@16:90&gt;](<chip-persistence.test.cjs.md#s-c6dda4078cc18edc>) — [features/worldview/chip-persistence.test.cjs:81](<../../../../../../features/worldview/chip-persistence.test.cjs#L81>)
- [&lt;anonymous@16:90&gt;](<chip-persistence.test.cjs.md#s-c6dda4078cc18edc>) — [features/worldview/chip-persistence.test.cjs:85](<../../../../../../features/worldview/chip-persistence.test.cjs#L85>)
- [retryWorldViewWrites](<chip-session.ts.md#s-20897c315f6c802a>) — [features/worldview/chip-session.ts:282](<../../../../../../features/worldview/chip-session.ts#L282>)
- [retryWorldViewWrites](<chip-session.ts.md#s-20897c315f6c802a>) — [features/worldview/chip-session.ts:283](<../../../../../../features/worldview/chip-session.ts#L283>)
- [WorldView.restoreWorldView](<worldview.tsx.md#s-059d8decde74d9dd>) — [features/worldview/worldview.tsx:230](<../../../../../../features/worldview/worldview.tsx#L230>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:50](<../../../../../../features/worldview/chip-persistence.test.cjs#L50>) — static-call-site; coverage not established.
- [features/worldview/chip-persistence.test.cjs:68](<../../../../../../features/worldview/chip-persistence.test.cjs#L68>) — static-call-site; coverage not established.
- [features/worldview/chip-persistence.test.cjs:79](<../../../../../../features/worldview/chip-persistence.test.cjs#L79>) — static-call-site; coverage not established.
- [features/worldview/chip-persistence.test.cjs:81](<../../../../../../features/worldview/chip-persistence.test.cjs#L81>) — static-call-site; coverage not established.
- [features/worldview/chip-persistence.test.cjs:85](<../../../../../../features/worldview/chip-persistence.test.cjs#L85>) — static-call-site; coverage not established.
- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-c7169a7fa9a66511"></a>

## loadWorldViewSession.readWorld

[features/worldview/chip-session.ts:236](<../../../../../../features/worldview/chip-session.ts#L236>) · FunctionExpression · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Reconstructs saved chips and reports individual damaged index records for review.

Purpose evidence: jsdoc.

Lexical owner: [loadWorldViewSession](<chip-session.ts.md#s-16fd179714630bf4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [flushWorldViewWrites](<chip-session.ts.md#s-14cfc10edca5869e>) — [features/worldview/chip-session.ts:238](<../../../../../../features/worldview/chip-session.ts#L238>)
- [requireWorldViewBridge](<chip-session.ts.md#s-724ceb52bd424e76>) — [features/worldview/chip-session.ts:239](<../../../../../../features/worldview/chip-session.ts#L239>)
- [publish](<chip-session.ts.md#s-6b69d901fb5116fa>) — [features/worldview/chip-session.ts:245](<../../../../../../features/worldview/chip-session.ts#L245>)
- [setPersistence](<chip-session.ts.md#s-49d6ac841e2cc70e>) — [features/worldview/chip-session.ts:246](<../../../../../../features/worldview/chip-session.ts#L246>)
- [setPersistence](<chip-session.ts.md#s-49d6ac841e2cc70e>) — [features/worldview/chip-session.ts:253](<../../../../../../features/worldview/chip-session.ts#L253>)
- [setPersistence](<chip-session.ts.md#s-49d6ac841e2cc70e>) — [features/worldview/chip-session.ts:261](<../../../../../../features/worldview/chip-session.ts#L261>)

**Called by (statically resolved):**

- [loadWorldViewSession](<chip-session.ts.md#s-16fd179714630bf4>) — [features/worldview/chip-session.ts:266](<../../../../../../features/worldview/chip-session.ts#L266>)

Unresolved / external call sites: 1.

- requireWorldViewBridge().request — declaration-without-runtime-body; [features/worldview/chip-session.ts:239](<../../../../../../features/worldview/chip-session.ts#L239>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-20897c315f6c802a"></a>

## retryWorldViewWrites

[features/worldview/chip-session.ts:271](<../../../../../../features/worldview/chip-session.ts#L271>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Retries failed writes for the current Universe, or reloads metadata after an initial load failure.

Purpose evidence: jsdoc.

Exported as: retryWorldViewWrites ([features/worldview/chip-session.ts:1](<../../../../../../features/worldview/chip-session.ts#L1>)).

Lexical owner: [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: Promise&lt;void&gt; (annotation). Implementation present.

**Calls (statically resolved):**

- [queueWrite](<chip-session.ts.md#s-eda5e528d475ea62>) — [features/worldview/chip-session.ts:278](<../../../../../../features/worldview/chip-session.ts#L278>)
- [flushWorldViewWrites](<chip-session.ts.md#s-14cfc10edca5869e>) — [features/worldview/chip-session.ts:281](<../../../../../../features/worldview/chip-session.ts#L281>)
- [loadWorldViewSession](<chip-session.ts.md#s-16fd179714630bf4>) — [features/worldview/chip-session.ts:282](<../../../../../../features/worldview/chip-session.ts#L282>)
- [loadWorldViewSession](<chip-session.ts.md#s-16fd179714630bf4>) — [features/worldview/chip-session.ts:283](<../../../../../../features/worldview/chip-session.ts#L283>)

**Called by (statically resolved):**

- [&lt;anonymous@16:90&gt;](<chip-persistence.test.cjs.md#s-c6dda4078cc18edc>) — [features/worldview/chip-persistence.test.cjs:76](<../../../../../../features/worldview/chip-persistence.test.cjs#L76>)
- [WorldView.retryPersistence](<worldview.tsx.md#s-2675128e9348840d>) — [features/worldview/worldview.tsx:1021](<../../../../../../features/worldview/worldview.tsx#L1021>)

Unresolved / external call sites: 1.

- failed.values — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:275](<../../../../../../features/worldview/chip-session.ts#L275>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:76](<../../../../../../features/worldview/chip-persistence.test.cjs#L76>) — static-call-site; coverage not established.
- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-4bccdef1d4d202d5"></a>

## getSessionChips

[features/worldview/chip-session.ts:287](<../../../../../../features/worldview/chip-session.ts#L287>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Returns the stable current render snapshot for React and the canvas renderer.

Purpose evidence: jsdoc.

Exported as: getSessionChips ([features/worldview/chip-session.ts:1](<../../../../../../features/worldview/chip-session.ts#L1>)).

Lexical owner: [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: readonly WorldViewChip&#91;&#93; (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@16:90&gt;](<chip-persistence.test.cjs.md#s-c6dda4078cc18edc>) — [features/worldview/chip-persistence.test.cjs:69](<../../../../../../features/worldview/chip-persistence.test.cjs#L69>)
- [&lt;anonymous@16:90&gt;](<chip-persistence.test.cjs.md#s-c6dda4078cc18edc>) — [features/worldview/chip-persistence.test.cjs:74](<../../../../../../features/worldview/chip-persistence.test.cjs#L74>)
- [&lt;anonymous@16:90&gt;](<chip-persistence.test.cjs.md#s-c6dda4078cc18edc>) — [features/worldview/chip-persistence.test.cjs:80](<../../../../../../features/worldview/chip-persistence.test.cjs#L80>)
- [&lt;anonymous@16:90&gt;](<chip-persistence.test.cjs.md#s-c6dda4078cc18edc>) — [features/worldview/chip-persistence.test.cjs:82](<../../../../../../features/worldview/chip-persistence.test.cjs#L82>)
- [&lt;anonymous@16:90&gt;](<chip-persistence.test.cjs.md#s-c6dda4078cc18edc>) — [features/worldview/chip-persistence.test.cjs:86](<../../../../../../features/worldview/chip-persistence.test.cjs#L86>)
- [&lt;anonymous@112:81&gt;](<chips.test.cjs.md#s-5a388644096a684a>) — [features/worldview/chips.test.cjs:113](<../../../../../../features/worldview/chips.test.cjs#L113>)
- [&lt;anonymous@112:81&gt;](<chips.test.cjs.md#s-5a388644096a684a>) — [features/worldview/chips.test.cjs:128](<../../../../../../features/worldview/chips.test.cjs#L128>)
- [&lt;anonymous@112:81&gt;](<chips.test.cjs.md#s-5a388644096a684a>) — [features/worldview/chips.test.cjs:133](<../../../../../../features/worldview/chips.test.cjs#L133>)
- [&lt;anonymous@112:81&gt;](<chips.test.cjs.md#s-5a388644096a684a>) — [features/worldview/chips.test.cjs:135](<../../../../../../features/worldview/chips.test.cjs#L135>)
- [&lt;anonymous@148:70&gt;](<chips.test.cjs.md#s-10e26ccfad544496>) — [features/worldview/chips.test.cjs:149](<../../../../../../features/worldview/chips.test.cjs#L149>)
- [&lt;anonymous@148:70&gt;](<chips.test.cjs.md#s-10e26ccfad544496>) — [features/worldview/chips.test.cjs:159](<../../../../../../features/worldview/chips.test.cjs#L159>)
- [&lt;anonymous@148:70&gt;](<chips.test.cjs.md#s-10e26ccfad544496>) — [features/worldview/chips.test.cjs:169](<../../../../../../features/worldview/chips.test.cjs#L169>)
- [&lt;anonymous@148:70&gt;](<chips.test.cjs.md#s-10e26ccfad544496>) — [features/worldview/chips.test.cjs:174](<../../../../../../features/worldview/chips.test.cjs#L174>)
- [&lt;anonymous@148:70&gt;](<chips.test.cjs.md#s-10e26ccfad544496>) — [features/worldview/chips.test.cjs:176](<../../../../../../features/worldview/chips.test.cjs#L176>)
- [&lt;anonymous@148:70&gt;](<chips.test.cjs.md#s-10e26ccfad544496>) — [features/worldview/chips.test.cjs:178](<../../../../../../features/worldview/chips.test.cjs#L178>)
- [&lt;anonymous@148:70&gt;](<chips.test.cjs.md#s-10e26ccfad544496>) — [features/worldview/chips.test.cjs:180](<../../../../../../features/worldview/chips.test.cjs#L180>)
- [&lt;anonymous@184:96&gt;](<chips.test.cjs.md#s-3c93037ba54e5f5b>) — [features/worldview/chips.test.cjs:185](<../../../../../../features/worldview/chips.test.cjs#L185>)
- [&lt;anonymous@184:96&gt;](<chips.test.cjs.md#s-3c93037ba54e5f5b>) — [features/worldview/chips.test.cjs:196](<../../../../../../features/worldview/chips.test.cjs#L196>)
- [&lt;anonymous@184:96&gt;](<chips.test.cjs.md#s-3c93037ba54e5f5b>) — [features/worldview/chips.test.cjs:205](<../../../../../../features/worldview/chips.test.cjs#L205>)
- [&lt;anonymous@184:96&gt;](<chips.test.cjs.md#s-3c93037ba54e5f5b>) — [features/worldview/chips.test.cjs:208](<../../../../../../features/worldview/chips.test.cjs#L208>)
- [&lt;anonymous@184:96&gt;](<chips.test.cjs.md#s-3c93037ba54e5f5b>) — [features/worldview/chips.test.cjs:211](<../../../../../../features/worldview/chips.test.cjs#L211>)
- [&lt;anonymous@184:96&gt;](<chips.test.cjs.md#s-3c93037ba54e5f5b>) — [features/worldview/chips.test.cjs:214](<../../../../../../features/worldview/chips.test.cjs#L214>)
- [&lt;anonymous@184:96&gt;](<chips.test.cjs.md#s-3c93037ba54e5f5b>) — [features/worldview/chips.test.cjs:218](<../../../../../../features/worldview/chips.test.cjs#L218>)
- [&lt;anonymous@184:96&gt;](<chips.test.cjs.md#s-3c93037ba54e5f5b>) — [features/worldview/chips.test.cjs:221](<../../../../../../features/worldview/chips.test.cjs#L221>)
- [WorldView.connectWorldCanvas.paint](<worldview.tsx.md#s-f30798102198d6d1>) — [features/worldview/worldview.tsx:299](<../../../../../../features/worldview/worldview.tsx#L299>)
- [WorldView.connectWorldCanvas.paint](<worldview.tsx.md#s-f30798102198d6d1>) — [features/worldview/worldview.tsx:306](<../../../../../../features/worldview/worldview.tsx#L306>)
- [WorldView.connectWorldCanvas.paint](<worldview.tsx.md#s-f30798102198d6d1>) — [features/worldview/worldview.tsx:316](<../../../../../../features/worldview/worldview.tsx#L316>)
- [WorldView.connectWorldCanvas.paint](<worldview.tsx.md#s-f30798102198d6d1>) — [features/worldview/worldview.tsx:323](<../../../../../../features/worldview/worldview.tsx#L323>)
- [WorldView.connectWorldCanvas.paint](<worldview.tsx.md#s-f30798102198d6d1>) — [features/worldview/worldview.tsx:335](<../../../../../../features/worldview/worldview.tsx#L335>)
- [WorldView.connectWorldCanvas.paint](<worldview.tsx.md#s-f30798102198d6d1>) — [features/worldview/worldview.tsx:338](<../../../../../../features/worldview/worldview.tsx#L338>)
- [WorldView.connectWorldCanvas.locateChip](<worldview.tsx.md#s-0f4652f862657c4e>) — [features/worldview/worldview.tsx:424](<../../../../../../features/worldview/worldview.tsx#L424>)
- [WorldView.connectWorldCanvas.visiblePort](<worldview.tsx.md#s-503fa0e23a0b68cb>) — [features/worldview/worldview.tsx:454](<../../../../../../features/worldview/worldview.tsx#L454>)
- [WorldView.connectWorldCanvas.visiblePort](<worldview.tsx.md#s-503fa0e23a0b68cb>) — [features/worldview/worldview.tsx:459](<../../../../../../features/worldview/worldview.tsx#L459>)
- [WorldView.connectWorldCanvas.startDrag](<worldview.tsx.md#s-8232bd9f09185164>) — [features/worldview/worldview.tsx:493](<../../../../../../features/worldview/worldview.tsx#L493>)
- [WorldView.connectWorldCanvas.startDrag](<worldview.tsx.md#s-8232bd9f09185164>) — [features/worldview/worldview.tsx:522](<../../../../../../features/worldview/worldview.tsx#L522>)
- [WorldView.connectWorldCanvas.moveDrag](<worldview.tsx.md#s-c9cbc6a06e08fe3f>) — [features/worldview/worldview.tsx:587](<../../../../../../features/worldview/worldview.tsx#L587>)
- [WorldView.connectWorldCanvas.stopDrag](<worldview.tsx.md#s-416b42ba7224fd63>) — [features/worldview/worldview.tsx:680](<../../../../../../features/worldview/worldview.tsx#L680>)
- [WorldView.connectWorldCanvas.createChip](<worldview.tsx.md#s-5eca98fe9e1f676c>) — [features/worldview/worldview.tsx:756](<../../../../../../features/worldview/worldview.tsx#L756>)
- [WorldView.connectWorldCanvas.nudgeChip](<worldview.tsx.md#s-71368d37124fa960>) — [features/worldview/worldview.tsx:768](<../../../../../../features/worldview/worldview.tsx#L768>)
- [WorldView.connectWorldCanvas.nudgeChip](<worldview.tsx.md#s-71368d37124fa960>) — [features/worldview/worldview.tsx:777](<../../../../../../features/worldview/worldview.tsx#L777>)
- [WorldView.connectWorldCanvas.refreshScene](<worldview.tsx.md#s-636a6badd4f04675>) — [features/worldview/worldview.tsx:802](<../../../../../../features/worldview/worldview.tsx#L802>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:69](<../../../../../../features/worldview/chip-persistence.test.cjs#L69>) — static-call-site; coverage not established.
- [features/worldview/chip-persistence.test.cjs:74](<../../../../../../features/worldview/chip-persistence.test.cjs#L74>) — static-call-site; coverage not established.
- [features/worldview/chip-persistence.test.cjs:80](<../../../../../../features/worldview/chip-persistence.test.cjs#L80>) — static-call-site; coverage not established.
- [features/worldview/chip-persistence.test.cjs:82](<../../../../../../features/worldview/chip-persistence.test.cjs#L82>) — static-call-site; coverage not established.
- [features/worldview/chip-persistence.test.cjs:86](<../../../../../../features/worldview/chip-persistence.test.cjs#L86>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:113](<../../../../../../features/worldview/chips.test.cjs#L113>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:128](<../../../../../../features/worldview/chips.test.cjs#L128>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:133](<../../../../../../features/worldview/chips.test.cjs#L133>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:135](<../../../../../../features/worldview/chips.test.cjs#L135>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:149](<../../../../../../features/worldview/chips.test.cjs#L149>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:159](<../../../../../../features/worldview/chips.test.cjs#L159>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:169](<../../../../../../features/worldview/chips.test.cjs#L169>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:174](<../../../../../../features/worldview/chips.test.cjs#L174>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:176](<../../../../../../features/worldview/chips.test.cjs#L176>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:178](<../../../../../../features/worldview/chips.test.cjs#L178>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:180](<../../../../../../features/worldview/chips.test.cjs#L180>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:185](<../../../../../../features/worldview/chips.test.cjs#L185>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:196](<../../../../../../features/worldview/chips.test.cjs#L196>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:205](<../../../../../../features/worldview/chips.test.cjs#L205>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:208](<../../../../../../features/worldview/chips.test.cjs#L208>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:211](<../../../../../../features/worldview/chips.test.cjs#L211>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:214](<../../../../../../features/worldview/chips.test.cjs#L214>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:218](<../../../../../../features/worldview/chips.test.cjs#L218>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:221](<../../../../../../features/worldview/chips.test.cjs#L221>) — static-call-site; coverage not established.
- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-fac340d0d0dbb44a"></a>

## getServerChips

[features/worldview/chip-session.ts:292](<../../../../../../features/worldview/chip-session.ts#L292>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Returns an empty SSR snapshot; saved entities hydrate through the desktop metadata bridge.

Purpose evidence: jsdoc.

Exported as: getServerChips ([features/worldview/chip-session.ts:1](<../../../../../../features/worldview/chip-session.ts#L1>)).

Lexical owner: [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: readonly WorldViewChip&#91;&#93; (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-84efc8cede0b1c37"></a>

## subscribeChips

[features/worldview/chip-session.ts:297](<../../../../../../features/worldview/chip-session.ts#L297>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Subscribes to in-memory chip changes and returns a cleanup function; no I/O occurs.

Purpose evidence: jsdoc.

Exported as: subscribeChips ([features/worldview/chip-session.ts:1](<../../../../../../features/worldview/chip-session.ts#L1>)).

Lexical owner: [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| listener | () =&gt; void | annotation | required |

Returns: () =&gt; void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@112:81&gt;](<chips.test.cjs.md#s-5a388644096a684a>) — [features/worldview/chips.test.cjs:119](<../../../../../../features/worldview/chips.test.cjs#L119>)
- [&lt;anonymous@184:96&gt;](<chips.test.cjs.md#s-3c93037ba54e5f5b>) — [features/worldview/chips.test.cjs:202](<../../../../../../features/worldview/chips.test.cjs#L202>)
- [WorldView.connectWorldCanvas](<worldview.tsx.md#s-64662d49c3ebf665>) — [features/worldview/worldview.tsx:848](<../../../../../../features/worldview/worldview.tsx#L848>)

Unresolved / external call sites: 1.

- listeners.add — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:298](<../../../../../../features/worldview/chip-session.ts#L298>)

**Related tests / acceptance harnesses:**

- [features/worldview/chips.test.cjs:119](<../../../../../../features/worldview/chips.test.cjs#L119>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:202](<../../../../../../features/worldview/chips.test.cjs#L202>) — static-call-site; coverage not established.
- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-05b24580d6b4c067"></a>

## subscribeChips.&lt;anonymous@297:42&gt;

[features/worldview/chip-session.ts:297](<../../../../../../features/worldview/chip-session.ts#L297>) · FunctionType · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [subscribeChips](<chip-session.ts.md#s-84efc8cede0b1c37>).

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

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-e4bcdb99dac59cd9"></a>

## subscribeChips.&lt;anonymous@297:55&gt;

[features/worldview/chip-session.ts:297](<../../../../../../features/worldview/chip-session.ts#L297>) · FunctionType · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Subscribes to in-memory chip changes and returns a cleanup function; no I/O occurs.

Purpose evidence: jsdoc.

Lexical owner: [subscribeChips](<chip-session.ts.md#s-84efc8cede0b1c37>).

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

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-9b5e61ffb6e761ab"></a>

## subscribeChips.unsubscribe

[features/worldview/chip-session.ts:300](<../../../../../../features/worldview/chip-session.ts#L300>) · FunctionExpression · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Releases this subscriber when its component unmounts.

Purpose evidence: jsdoc.

Lexical owner: [subscribeChips](<chip-session.ts.md#s-84efc8cede0b1c37>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- listeners.delete — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:301](<../../../../../../features/worldview/chip-session.ts#L301>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-6b69d901fb5116fa"></a>

## publish

[features/worldview/chip-session.ts:306](<../../../../../../features/worldview/chip-session.ts#L306>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Publishes an immutable session snapshot to all mounted WorldView consumers.

Purpose evidence: jsdoc.

Lexical owner: [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| next | readonly WorldViewChip&#91;&#93; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [addSessionConnector](<chip-session.ts.md#s-5165f757bde396b7>) — [features/worldview/chip-session.ts:36](<../../../../../../features/worldview/chip-session.ts#L36>)
- [updateSessionConnector](<chip-session.ts.md#s-ba7a43e417a8d197>) — [features/worldview/chip-session.ts:77](<../../../../../../features/worldview/chip-session.ts#L77>)
- [removeSessionConnector](<chip-session.ts.md#s-30a0ccc8e0ec03c6>) — [features/worldview/chip-session.ts:90](<../../../../../../features/worldview/chip-session.ts#L90>)
- [replaceChipSources](<chip-session.ts.md#s-9ff8f1a12cc5c2ed>) — [features/worldview/chip-session.ts:160](<../../../../../../features/worldview/chip-session.ts#L160>)
- [loadWorldViewSession](<chip-session.ts.md#s-16fd179714630bf4>) — [features/worldview/chip-session.ts:231](<../../../../../../features/worldview/chip-session.ts#L231>)
- [loadWorldViewSession.readWorld](<chip-session.ts.md#s-c7169a7fa9a66511>) — [features/worldview/chip-session.ts:245](<../../../../../../features/worldview/chip-session.ts#L245>)
- [addSessionChip](<chip-session.ts.md#s-323a156c7123bc4e>) — [features/worldview/chip-session.ts:316](<../../../../../../features/worldview/chip-session.ts#L316>)
- [moveSessionChip](<chip-session.ts.md#s-ca7fa5bab39f79d9>) — [features/worldview/chip-session.ts:331](<../../../../../../features/worldview/chip-session.ts#L331>)
- [updateKnowledgeMenus](<chip-session.ts.md#s-f11b5e5262683bb8>) — [features/worldview/chip-session.ts:343](<../../../../../../features/worldview/chip-session.ts#L343>)
- [updateSessionChip](<chip-session.ts.md#s-ea5b80cfa0863cae>) — [features/worldview/chip-session.ts:358](<../../../../../../features/worldview/chip-session.ts#L358>)
- [removeSessionChip](<chip-session.ts.md#s-6d3b3ae95e4a805a>) — [features/worldview/chip-session.ts:375](<../../../../../../features/worldview/chip-session.ts#L375>)

Unresolved / external call sites: 1.

- listener — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:308](<../../../../../../features/worldview/chip-session.ts#L308>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-323a156c7123bc4e"></a>

## addSessionChip

[features/worldview/chip-session.ts:312](<../../../../../../features/worldview/chip-session.ts#L312>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Adds one confirmed chip and queues its index save; duplicate IDs throw before mutation.

Purpose evidence: jsdoc.

Exported as: addSessionChip ([features/worldview/chip-session.ts:1](<../../../../../../features/worldview/chip-session.ts#L1>)).

Lexical owner: [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chip | WorldViewChip | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [publish](<chip-session.ts.md#s-6b69d901fb5116fa>) — [features/worldview/chip-session.ts:316](<../../../../../../features/worldview/chip-session.ts#L316>)
- [persistChip](<chip-session.ts.md#s-04a124d1c5950ab3>) — [features/worldview/chip-session.ts:317](<../../../../../../features/worldview/chip-session.ts#L317>)

**Called by (statically resolved):**

- [&lt;anonymous@16:90&gt;](<chip-persistence.test.cjs.md#s-c6dda4078cc18edc>) — [features/worldview/chip-persistence.test.cjs:60](<../../../../../../features/worldview/chip-persistence.test.cjs#L60>)
- [&lt;anonymous@112:81&gt;](<chips.test.cjs.md#s-5a388644096a684a>) — [features/worldview/chips.test.cjs:127](<../../../../../../features/worldview/chips.test.cjs#L127>)
- [&lt;anonymous@112:81&gt;.&lt;anonymous@136:17&gt;](<chips.test.cjs.md#s-6a74a1bd5204f6d1>) — [features/worldview/chips.test.cjs:136](<../../../../../../features/worldview/chips.test.cjs#L136>)
- [&lt;anonymous@148:70&gt;](<chips.test.cjs.md#s-10e26ccfad544496>) — [features/worldview/chips.test.cjs:158](<../../../../../../features/worldview/chips.test.cjs#L158>)
- [&lt;anonymous@184:96&gt;](<chips.test.cjs.md#s-3c93037ba54e5f5b>) — [features/worldview/chips.test.cjs:194](<../../../../../../features/worldview/chips.test.cjs#L194>)
- [&lt;anonymous@184:96&gt;](<chips.test.cjs.md#s-3c93037ba54e5f5b>) — [features/worldview/chips.test.cjs:195](<../../../../../../features/worldview/chips.test.cjs#L195>)
- [WorldView.connectWorldCanvas.createChip](<worldview.tsx.md#s-5eca98fe9e1f676c>) — [features/worldview/worldview.tsx:758](<../../../../../../features/worldview/worldview.tsx#L758>)

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:314](<../../../../../../features/worldview/chip-session.ts#L314>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:60](<../../../../../../features/worldview/chip-persistence.test.cjs#L60>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:127](<../../../../../../features/worldview/chips.test.cjs#L127>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:136](<../../../../../../features/worldview/chips.test.cjs#L136>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:158](<../../../../../../features/worldview/chips.test.cjs#L158>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:194](<../../../../../../features/worldview/chips.test.cjs#L194>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:195](<../../../../../../features/worldview/chips.test.cjs#L195>) — static-call-site; coverage not established.
- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-ca7fa5bab39f79d9"></a>

## moveSessionChip

[features/worldview/chip-session.ts:321](<../../../../../../features/worldview/chip-session.ts#L321>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Replaces and queues one chip's world position; missing IDs throw and disk failures surface in save status.

Purpose evidence: jsdoc.

Exported as: moveSessionChip ([features/worldview/chip-session.ts:1](<../../../../../../features/worldview/chip-session.ts#L1>)).

Lexical owner: [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | string | annotation | required |
| position | Point | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [publish](<chip-session.ts.md#s-6b69d901fb5116fa>) — [features/worldview/chip-session.ts:331](<../../../../../../features/worldview/chip-session.ts#L331>)
- [persistChip](<chip-session.ts.md#s-04a124d1c5950ab3>) — [features/worldview/chip-session.ts:332](<../../../../../../features/worldview/chip-session.ts#L332>)

**Called by (statically resolved):**

- [&lt;anonymous@16:90&gt;](<chip-persistence.test.cjs.md#s-c6dda4078cc18edc>) — [features/worldview/chip-persistence.test.cjs:61](<../../../../../../features/worldview/chip-persistence.test.cjs#L61>)
- [&lt;anonymous@112:81&gt;](<chips.test.cjs.md#s-5a388644096a684a>) — [features/worldview/chips.test.cjs:131](<../../../../../../features/worldview/chips.test.cjs#L131>)
- [&lt;anonymous@112:81&gt;.&lt;anonymous@138:5&gt;](<chips.test.cjs.md#s-3992466e906dec4d>) — [features/worldview/chips.test.cjs:138](<../../../../../../features/worldview/chips.test.cjs#L138>)
- [&lt;anonymous@112:81&gt;](<chips.test.cjs.md#s-5a388644096a684a>) — [features/worldview/chips.test.cjs:143](<../../../../../../features/worldview/chips.test.cjs#L143>)
- [WorldView.connectWorldCanvas.stopDrag](<worldview.tsx.md#s-416b42ba7224fd63>) — [features/worldview/worldview.tsx:683](<../../../../../../features/worldview/worldview.tsx#L683>)
- [WorldView.connectWorldCanvas.nudgeChip](<worldview.tsx.md#s-71368d37124fa960>) — [features/worldview/worldview.tsx:775](<../../../../../../features/worldview/worldview.tsx#L775>)

Unresolved / external call sites: 3.

- next.push — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:327](<../../../../../../features/worldview/chip-session.ts#L327>)
- next.push — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:328](<../../../../../../features/worldview/chip-session.ts#L328>)
- Error — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:330](<../../../../../../features/worldview/chip-session.ts#L330>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:61](<../../../../../../features/worldview/chip-persistence.test.cjs#L61>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:131](<../../../../../../features/worldview/chips.test.cjs#L131>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:138](<../../../../../../features/worldview/chips.test.cjs#L138>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:143](<../../../../../../features/worldview/chips.test.cjs#L143>) — static-call-site; coverage not established.
- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-f11b5e5262683bb8"></a>

## updateKnowledgeMenus

[features/worldview/chip-session.ts:336](<../../../../../../features/worldview/chip-session.ts#L336>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Replaces one entity's menu configuration and queues its existing recoverable metadata save. Missing IDs throw.

Purpose evidence: jsdoc.

Exported as: updateKnowledgeMenus ([features/worldview/chip-session.ts:1](<../../../../../../features/worldview/chip-session.ts#L1>)).

Lexical owner: [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | string | annotation | required |
| knowledgeMenus | NonNullable&lt;WorldViewChip&#91;"knowledgeMenus"&#93;&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [publish](<chip-session.ts.md#s-6b69d901fb5116fa>) — [features/worldview/chip-session.ts:343](<../../../../../../features/worldview/chip-session.ts#L343>)
- [persistChip](<chip-session.ts.md#s-04a124d1c5950ab3>) — [features/worldview/chip-session.ts:344](<../../../../../../features/worldview/chip-session.ts#L344>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- chips.find — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:340](<../../../../../../features/worldview/chip-session.ts#L340>)
- Error — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:341](<../../../../../../features/worldview/chip-session.ts#L341>)
- chips.map — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:343](<../../../../../../features/worldview/chip-session.ts#L343>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-b3533518a7fe3c07"></a>

## updateKnowledgeMenus.&lt;anonymous@340:27&gt;

[features/worldview/chip-session.ts:340](<../../../../../../features/worldview/chip-session.ts#L340>) · ArrowFunction · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [updateKnowledgeMenus](<chip-session.ts.md#s-f11b5e5262683bb8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-27e9830477dce8fd"></a>

## updateKnowledgeMenus.&lt;anonymous@343:21&gt;

[features/worldview/chip-session.ts:343](<../../../../../../features/worldview/chip-session.ts#L343>) · ArrowFunction · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [updateKnowledgeMenus](<chip-session.ts.md#s-f11b5e5262683bb8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-ea5b80cfa0863cae"></a>

## updateSessionChip

[features/worldview/chip-session.ts:348](<../../../../../../features/worldview/chip-session.ts#L348>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Replaces confirmed metadata/appearance and queues its save while preserving position, sources, and ID.

Purpose evidence: jsdoc.

Exported as: updateSessionChip ([features/worldview/chip-session.ts:1](<../../../../../../features/worldview/chip-session.ts#L1>)).

Lexical owner: [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | string | annotation | required |
| draft | ChipDraft | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [publish](<chip-session.ts.md#s-6b69d901fb5116fa>) — [features/worldview/chip-session.ts:358](<../../../../../../features/worldview/chip-session.ts#L358>)
- [persistChip](<chip-session.ts.md#s-04a124d1c5950ab3>) — [features/worldview/chip-session.ts:359](<../../../../../../features/worldview/chip-session.ts#L359>)

**Called by (statically resolved):**

- [&lt;anonymous@16:90&gt;](<chip-persistence.test.cjs.md#s-c6dda4078cc18edc>) — [features/worldview/chip-persistence.test.cjs:71](<../../../../../../features/worldview/chip-persistence.test.cjs#L71>)
- [&lt;anonymous@148:70&gt;](<chips.test.cjs.md#s-10e26ccfad544496>) — [features/worldview/chips.test.cjs:168](<../../../../../../features/worldview/chips.test.cjs#L168>)
- [&lt;anonymous@148:70&gt;.&lt;anonymous@175:17&gt;](<chips.test.cjs.md#s-8d5cf8fb8ebc7189>) — [features/worldview/chips.test.cjs:175](<../../../../../../features/worldview/chips.test.cjs#L175>)
- [&lt;anonymous@148:70&gt;](<chips.test.cjs.md#s-10e26ccfad544496>) — [features/worldview/chips.test.cjs:177](<../../../../../../features/worldview/chips.test.cjs#L177>)
- [WorldView.connectWorldCanvas.updateChip](<worldview.tsx.md#s-9233408705e9539c>) — [features/worldview/worldview.tsx:795](<../../../../../../features/worldview/worldview.tsx#L795>)

Unresolved / external call sites: 3.

- next.push — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:354](<../../../../../../features/worldview/chip-session.ts#L354>)
- next.push — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:355](<../../../../../../features/worldview/chip-session.ts#L355>)
- Error — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:357](<../../../../../../features/worldview/chip-session.ts#L357>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:71](<../../../../../../features/worldview/chip-persistence.test.cjs#L71>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:168](<../../../../../../features/worldview/chips.test.cjs#L168>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:175](<../../../../../../features/worldview/chips.test.cjs#L175>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:177](<../../../../../../features/worldview/chips.test.cjs#L177>) — static-call-site; coverage not established.
- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-6d3b3ae95e4a805a"></a>

## removeSessionChip

[features/worldview/chip-session.ts:367](<../../../../../../features/worldview/chip-session.ts#L367>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Removes only the requested stable ID and queues deletion of its Markdown index. Returns false for an already-removed/missing ID without changing the snapshot. Only the entity's metadata index is deleted; original Universe files remain untouched.

Purpose evidence: jsdoc.

Exported as: removeSessionChip ([features/worldview/chip-session.ts:1](<../../../../../../features/worldview/chip-session.ts#L1>)).

Lexical owner: [features/worldview/chip-session.ts](<chip-session.ts.md#s-1740b9ad7924f798>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | string | annotation | required |

Returns: boolean (annotation). Implementation present.

**Calls (statically resolved):**

- [publish](<chip-session.ts.md#s-6b69d901fb5116fa>) — [features/worldview/chip-session.ts:375](<../../../../../../features/worldview/chip-session.ts#L375>)
- [requireWorldViewBridge](<chip-session.ts.md#s-724ceb52bd424e76>) — [features/worldview/chip-session.ts:378](<../../../../../../features/worldview/chip-session.ts#L378>)
- [queueWrite](<chip-session.ts.md#s-eda5e528d475ea62>) — [features/worldview/chip-session.ts:379](<../../../../../../features/worldview/chip-session.ts#L379>)

**Called by (statically resolved):**

- [&lt;anonymous@16:90&gt;](<chip-persistence.test.cjs.md#s-c6dda4078cc18edc>) — [features/worldview/chip-persistence.test.cjs:83](<../../../../../../features/worldview/chip-persistence.test.cjs#L83>)
- [&lt;anonymous@148:70&gt;](<chips.test.cjs.md#s-10e26ccfad544496>) — [features/worldview/chips.test.cjs:179](<../../../../../../features/worldview/chips.test.cjs#L179>)
- [&lt;anonymous@184:96&gt;](<chips.test.cjs.md#s-3c93037ba54e5f5b>) — [features/worldview/chips.test.cjs:203](<../../../../../../features/worldview/chips.test.cjs#L203>)
- [&lt;anonymous@184:96&gt;](<chips.test.cjs.md#s-3c93037ba54e5f5b>) — [features/worldview/chips.test.cjs:212](<../../../../../../features/worldview/chips.test.cjs#L212>)
- [&lt;anonymous@184:96&gt;](<chips.test.cjs.md#s-3c93037ba54e5f5b>) — [features/worldview/chips.test.cjs:213](<../../../../../../features/worldview/chips.test.cjs#L213>)
- [&lt;anonymous@184:96&gt;](<chips.test.cjs.md#s-3c93037ba54e5f5b>) — [features/worldview/chips.test.cjs:216](<../../../../../../features/worldview/chips.test.cjs#L216>)
- [&lt;anonymous@184:96&gt;](<chips.test.cjs.md#s-3c93037ba54e5f5b>) — [features/worldview/chips.test.cjs:220](<../../../../../../features/worldview/chips.test.cjs#L220>)
- [WorldView.connectWorldCanvas.removeChip](<worldview.tsx.md#s-82b9bbd91c87a612>) — [features/worldview/worldview.tsx:787](<../../../../../../features/worldview/worldview.tsx#L787>)

Unresolved / external call sites: 1.

- remaining.push — external-or-dynamic-dispatch; [features/worldview/chip-session.ts:372](<../../../../../../features/worldview/chip-session.ts#L372>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:83](<../../../../../../features/worldview/chip-persistence.test.cjs#L83>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:179](<../../../../../../features/worldview/chips.test.cjs#L179>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:203](<../../../../../../features/worldview/chips.test.cjs#L203>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:212](<../../../../../../features/worldview/chips.test.cjs#L212>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:213](<../../../../../../features/worldview/chips.test.cjs#L213>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:216](<../../../../../../features/worldview/chips.test.cjs#L216>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:220](<../../../../../../features/worldview/chips.test.cjs#L220>) — static-call-site; coverage not established.
- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.

<a id="s-d79e182eaece8514"></a>

## removeSessionChip.deleteEntityIndex

[features/worldview/chip-session.ts:379](<../../../../../../features/worldview/chip-session.ts#L379>) · FunctionExpression · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [removeSessionChip](<chip-session.ts.md#s-6d3b3ae95e4a805a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- bridge.request — declaration-without-runtime-body; [features/worldview/chip-session.ts:380](<../../../../../../features/worldview/chip-session.ts#L380>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>) — file-import-only; coverage not established.
