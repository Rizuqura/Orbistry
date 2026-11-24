# electron/domains/entity/connector-store.cjs: symbols

[Atlas](<../../../../../README.md>) / [Connectors](<../../../../../modules/connectors.md>) / [electron/domains/entity/connector-store.cjs:1](<../../../../../../../electron/domains/entity/connector-store.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/domains/entity/connector-store.cjs](<connector-store.cjs.md#s-a2ab3ea8e361c06f>) (Module)
- [identifier](<connector-store.cjs.md#s-2104479eaa57ef09>) (SchemaBinding)
- [port](<connector-store.cjs.md#s-53a4d9046bfb2b72>) (SchemaBinding)
- [connectorSchema](<connector-store.cjs.md#s-7bf84e78bc138f53>) (SchemaBinding)
- [connectorSchema.&lt;anonymous@28:5&gt;](<connector-store.cjs.md#s-253fe603741411ca>) (ArrowFunction)
- [connectorPath](<connector-store.cjs.md#s-2b79d024f1e5e30c>) (FunctionDeclaration)
- [readConnector](<connector-store.cjs.md#s-0805b18e2fe71f10>) (FunctionDeclaration)
- [loadConnectors](<connector-store.cjs.md#s-8ec496ccfadb4d52>) (FunctionDeclaration)
- [loadConnectors.readRelationships](<connector-store.cjs.md#s-4fbbf62d7ee6af40>) (FunctionExpression)
- [createConnector](<connector-store.cjs.md#s-68abee44921e90c9>) (FunctionDeclaration)
- [createConnector.writeRelationship](<connector-store.cjs.md#s-717e54eefd910ebd>) (FunctionExpression)
- [updateConnector](<connector-store.cjs.md#s-5920f12a905870a0>) (FunctionDeclaration)
- [updateConnector.editRelationship](<connector-store.cjs.md#s-7f7caec55e96417a>) (FunctionExpression)
- [deleteConnector](<connector-store.cjs.md#s-023228a431672d6c>) (FunctionDeclaration)
- [deleteConnector.removeRelationship](<connector-store.cjs.md#s-2fcfbc487755d4da>) (FunctionExpression)

<a id="s-a2ab3ea8e361c06f"></a>

## electron/domains/entity/connector-store.cjs

[electron/domains/entity/connector-store.cjs:1](<../../../../../../../electron/domains/entity/connector-store.cjs#L1>) · Module · production · [Connectors](<../../../../../modules/connectors.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- require — module-loader; [electron/domains/entity/connector-store.cjs:1](<../../../../../../../electron/domains/entity/connector-store.cjs#L1>)
- require — module-loader; [electron/domains/entity/connector-store.cjs:2](<../../../../../../../electron/domains/entity/connector-store.cjs#L2>)
- require — module-loader; [electron/domains/entity/connector-store.cjs:3](<../../../../../../../electron/domains/entity/connector-store.cjs#L3>)
- require — module-loader; [electron/domains/entity/connector-store.cjs:7](<../../../../../../../electron/domains/entity/connector-store.cjs#L7>)
- require — module-loader; [electron/domains/entity/connector-store.cjs:11](<../../../../../../../electron/domains/entity/connector-store.cjs#L11>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:31](<../../../../../../../electron/backend-identity.test.cjs#L31>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:12](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-2104479eaa57ef09"></a>

## identifier

[electron/domains/entity/connector-store.cjs:12](<../../../../../../../electron/domains/entity/connector-store.cjs#L12>) · SchemaBinding · production · [Connectors](<../../../../../modules/connectors.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/domains/entity/connector-store.cjs](<connector-store.cjs.md#s-a2ab3ea8e361c06f>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- z.string().regex — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:12](<../../../../../../../electron/domains/entity/connector-store.cjs#L12>)
- z.string — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:12](<../../../../../../../electron/domains/entity/connector-store.cjs#L12>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:31](<../../../../../../../electron/backend-identity.test.cjs#L31>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:12](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-53a4d9046bfb2b72"></a>

## port

[electron/domains/entity/connector-store.cjs:13](<../../../../../../../electron/domains/entity/connector-store.cjs#L13>) · SchemaBinding · production · [Connectors](<../../../../../modules/connectors.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/domains/entity/connector-store.cjs](<connector-store.cjs.md#s-a2ab3ea8e361c06f>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- z.enum — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:13](<../../../../../../../electron/domains/entity/connector-store.cjs#L13>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:31](<../../../../../../../electron/backend-identity.test.cjs#L31>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:12](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-7bf84e78bc138f53"></a>

## connectorSchema

[electron/domains/entity/connector-store.cjs:14](<../../../../../../../electron/domains/entity/connector-store.cjs#L14>) · SchemaBinding · production · [Connectors](<../../../../../modules/connectors.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/domains/entity/connector-store.cjs](<connector-store.cjs.md#s-a2ab3ea8e361c06f>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 10.

- z .object({ id: identifier, sourceEntityId: identifier, sourcePortId: port, targetEntityId: identifier, targetPortId: port, name: z.string().trim().min(1).max(160), definition: z.s — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:14](<../../../../../../../electron/domains/entity/connector-store.cjs#L14>)
- z .object({ id: identifier, sourceEntityId: identifier, sourcePortId: port, targetEntityId: identifier, targetPortId: port, name: z.string().trim().min(1).max(160), definition: z.s — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:14](<../../../../../../../electron/domains/entity/connector-store.cjs#L14>)
- z .object — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:14](<../../../../../../../electron/domains/entity/connector-store.cjs#L14>)
- z.string().trim().min(1).max — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:21](<../../../../../../../electron/domains/entity/connector-store.cjs#L21>)
- z.string().trim().min — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:21](<../../../../../../../electron/domains/entity/connector-store.cjs#L21>)
- z.string().trim — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:21](<../../../../../../../electron/domains/entity/connector-store.cjs#L21>)
- z.string — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:21](<../../../../../../../electron/domains/entity/connector-store.cjs#L21>)
- z.string().max — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:22](<../../../../../../../electron/domains/entity/connector-store.cjs#L22>)
- 2 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:31](<../../../../../../../electron/backend-identity.test.cjs#L31>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:12](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-253fe603741411ca"></a>

## connectorSchema.&lt;anonymous@28:5&gt;

[electron/domains/entity/connector-store.cjs:28](<../../../../../../../electron/domains/entity/connector-store.cjs#L28>) · ArrowFunction · production · [Connectors](<../../../../../modules/connectors.md>)

Requires separate entities while accepting every combination of geometric port IDs.

Purpose evidence: jsdoc.

Lexical owner: [connectorSchema](<connector-store.cjs.md#s-7bf84e78bc138f53>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:31](<../../../../../../../electron/backend-identity.test.cjs#L31>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:12](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-2b79d024f1e5e30c"></a>

## connectorPath

[electron/domains/entity/connector-store.cjs:33](<../../../../../../../electron/domains/entity/connector-store.cjs#L33>) · FunctionDeclaration · production · [Connectors](<../../../../../modules/connectors.md>)

Resolves a protected relationship record inside the existing WorldView metadata namespace. Invalid IDs/links throw.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/connector-store.cjs](<connector-store.cjs.md#s-a2ab3ea8e361c06f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [rejectSymlink](<../../core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/domains/entity/connector-store.cjs:38](<../../../../../../../electron/domains/entity/connector-store.cjs#L38>)
- [rejectSymlink](<../../core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/domains/entity/connector-store.cjs:42](<../../../../../../../electron/domains/entity/connector-store.cjs#L42>)

**Called by (statically resolved):**

- [readConnector](<connector-store.cjs.md#s-0805b18e2fe71f10>) — [electron/domains/entity/connector-store.cjs:48](<../../../../../../../electron/domains/entity/connector-store.cjs#L48>)
- [loadConnectors.readRelationships](<connector-store.cjs.md#s-4fbbf62d7ee6af40>) — [electron/domains/entity/connector-store.cjs:63](<../../../../../../../electron/domains/entity/connector-store.cjs#L63>)
- [createConnector.writeRelationship](<connector-store.cjs.md#s-717e54eefd910ebd>) — [electron/domains/entity/connector-store.cjs:94](<../../../../../../../electron/domains/entity/connector-store.cjs#L94>)
- [deleteConnector.removeRelationship](<connector-store.cjs.md#s-2fcfbc487755d4da>) — [electron/domains/entity/connector-store.cjs:150](<../../../../../../../electron/domains/entity/connector-store.cjs#L150>)

Unresolved / external call sites: 4.

- identifier.parse — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:34](<../../../../../../../electron/domains/entity/connector-store.cjs#L34>)
- fs.realpath — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:35](<../../../../../../../electron/domains/entity/connector-store.cjs#L35>)
- path.join — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:37](<../../../../../../../electron/domains/entity/connector-store.cjs#L37>)
- path.join — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:41](<../../../../../../../electron/domains/entity/connector-store.cjs#L41>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:31](<../../../../../../../electron/backend-identity.test.cjs#L31>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:12](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-0805b18e2fe71f10"></a>

## readConnector

[electron/domains/entity/connector-store.cjs:47](<../../../../../../../electron/domains/entity/connector-store.cjs#L47>) · FunctionDeclaration · production · [Connectors](<../../../../../modules/connectors.md>)

Reads and validates one bounded record, rejecting corrupt or misidentified metadata.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/connector-store.cjs](<connector-store.cjs.md#s-a2ab3ea8e361c06f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [connectorPath](<connector-store.cjs.md#s-2b79d024f1e5e30c>) — [electron/domains/entity/connector-store.cjs:48](<../../../../../../../electron/domains/entity/connector-store.cjs#L48>)

**Called by (statically resolved):**

- [loadConnectors.readRelationships](<connector-store.cjs.md#s-4fbbf62d7ee6af40>) — [electron/domains/entity/connector-store.cjs:77](<../../../../../../../electron/domains/entity/connector-store.cjs#L77>)
- [createConnector.writeRelationship](<connector-store.cjs.md#s-717e54eefd910ebd>) — [electron/domains/entity/connector-store.cjs:96](<../../../../../../../electron/domains/entity/connector-store.cjs#L96>)
- [updateConnector.editRelationship](<connector-store.cjs.md#s-7f7caec55e96417a>) — [electron/domains/entity/connector-store.cjs:120](<../../../../../../../electron/domains/entity/connector-store.cjs#L120>)

Unresolved / external call sites: 7.

- fs.stat — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:49](<../../../../../../../electron/domains/entity/connector-store.cjs#L49>)
- stats.isFile — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:50](<../../../../../../../electron/domains/entity/connector-store.cjs#L50>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:51](<../../../../../../../electron/domains/entity/connector-store.cjs#L51>)
- fs.readFile — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:52](<../../../../../../../electron/domains/entity/connector-store.cjs#L52>)
- connectorSchema.parse — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:53](<../../../../../../../electron/domains/entity/connector-store.cjs#L53>)
- JSON.parse — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:53](<../../../../../../../electron/domains/entity/connector-store.cjs#L53>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:55](<../../../../../../../electron/domains/entity/connector-store.cjs#L55>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:31](<../../../../../../../electron/backend-identity.test.cjs#L31>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:12](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-8ec496ccfadb4d52"></a>

## loadConnectors

[electron/domains/entity/connector-store.cjs:60](<../../../../../../../electron/domains/entity/connector-store.cjs#L60>) · FunctionDeclaration · production · [Connectors](<../../../../../modules/connectors.md>)

Loads every independent relationship, isolating damaged records without imposing collection capacity or endpoint occupancy.

Purpose evidence: jsdoc.

Exported as: loadConnectors ([electron/domains/entity/connector-store.cjs:1](<../../../../../../../electron/domains/entity/connector-store.cjs#L1>)).

Lexical owner: [electron/domains/entity/connector-store.cjs](<connector-store.cjs.md#s-a2ab3ea8e361c06f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [connectorMetadata](<../../ai/agents/entity-jurisdiction.cjs.md#s-b6a80bf6793f82d4>) — [electron/ai/agents/entity-jurisdiction.cjs:106](<../../../../../../../electron/ai/agents/entity-jurisdiction.cjs#L106>)
- [registerWorldViewIpc.load](<../../core/ipc/worldview-ipc.cjs.md#s-36a8f483419dd47e>) — [electron/core/ipc/worldview-ipc.cjs:239](<../../../../../../../electron/core/ipc/worldview-ipc.cjs#L239>)
- [&lt;anonymous@15:94&gt;](<connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:56](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L56>)
- [&lt;anonymous@15:94&gt;](<connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:98](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L98>)
- [&lt;anonymous@15:94&gt;](<connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:162](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L162>)
- [&lt;anonymous@15:94&gt;](<connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:182](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L182>)
- [capture](<../../engines/backend-identity/identity-compiler.cjs.md#s-1f99e7da5df73158>) — [electron/engines/backend-identity/identity-compiler.cjs:220](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L220>)

Unresolved / external call sites: 1.

- withWorldViewMutation — signature-only-candidate; [electron/domains/entity/connector-store.cjs:62](<../../../../../../../electron/domains/entity/connector-store.cjs#L62>)

**Related tests / acceptance harnesses:**

- [electron/domains/entity/connector-store.test.cjs:56](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L56>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:98](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L98>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:162](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L162>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:182](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L182>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:31](<../../../../../../../electron/backend-identity.test.cjs#L31>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:12](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-4fbbf62d7ee6af40"></a>

## loadConnectors.readRelationships

[electron/domains/entity/connector-store.cjs:62](<../../../../../../../electron/domains/entity/connector-store.cjs#L62>) · FunctionExpression · production · [Connectors](<../../../../../modules/connectors.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [loadConnectors](<connector-store.cjs.md#s-8ec496ccfadb4d52>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [connectorPath](<connector-store.cjs.md#s-2b79d024f1e5e30c>) — [electron/domains/entity/connector-store.cjs:63](<../../../../../../../electron/domains/entity/connector-store.cjs#L63>)
- [readConnector](<connector-store.cjs.md#s-0805b18e2fe71f10>) — [electron/domains/entity/connector-store.cjs:77](<../../../../../../../electron/domains/entity/connector-store.cjs#L77>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- fs.readdir — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:66](<../../../../../../../electron/domains/entity/connector-store.cjs#L66>)
- entries.sort — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:73](<../../../../../../../electron/domains/entity/connector-store.cjs#L73>)
- entry.endsWith — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:74](<../../../../../../../electron/domains/entity/connector-store.cjs#L74>)
- connectors.push — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:76](<../../../../../../../electron/domains/entity/connector-store.cjs#L76>)
- entry.slice — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:77](<../../../../../../../electron/domains/entity/connector-store.cjs#L77>)
- issues.push — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:80](<../../../../../../../electron/domains/entity/connector-store.cjs#L80>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:31](<../../../../../../../electron/backend-identity.test.cjs#L31>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:12](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-68abee44921e90c9"></a>

## createConnector

[electron/domains/entity/connector-store.cjs:88](<../../../../../../../electron/domains/entity/connector-store.cjs#L88>) · FunctionDeclaration · production · [Connectors](<../../../../../modules/connectors.md>)

Creates one immutable identity after validating both entities. Exact retries succeed, ID collisions reject, all other records survive.

Purpose evidence: jsdoc.

Exported as: createConnector ([electron/domains/entity/connector-store.cjs:1](<../../../../../../../electron/domains/entity/connector-store.cjs#L1>)).

Lexical owner: [electron/domains/entity/connector-store.cjs](<connector-store.cjs.md#s-a2ab3ea8e361c06f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@84:124&gt;.&lt;anonymous@85:17&gt;](<../../backend-identity.test.cjs.md#s-f8f1a3d6ac3824e8>) — [electron/backend-identity.test.cjs:108](<../../../../../../../electron/backend-identity.test.cjs#L108>)
- [&lt;anonymous@84:124&gt;.&lt;anonymous@85:17&gt;](<../../backend-identity.test.cjs.md#s-f8f1a3d6ac3824e8>) — [electron/backend-identity.test.cjs:114](<../../../../../../../electron/backend-identity.test.cjs#L114>)
- [registerWorldViewIpc."connector-create"](<../../core/ipc/worldview-ipc.cjs.md#s-0280476ff888fb64>) — [electron/core/ipc/worldview-ipc.cjs:188](<../../../../../../../electron/core/ipc/worldview-ipc.cjs#L188>)
- [&lt;anonymous@15:94&gt;.&lt;anonymous@53:22&gt;](<connector-store.test.cjs.md#s-fb700745bf6a76bb>) — [electron/domains/entity/connector-store.test.cjs:53](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L53>)
- [&lt;anonymous@15:94&gt;](<connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:61](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L61>)
- [&lt;anonymous@15:94&gt;](<connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:63](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L63>)
- [&lt;anonymous@15:94&gt;](<connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:67](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L67>)
- [&lt;anonymous@15:94&gt;](<connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:74](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L74>)
- [&lt;anonymous@15:94&gt;](<connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:82](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L82>)
- [&lt;anonymous@15:94&gt;](<connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:102](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L102>)

Unresolved / external call sites: 2.

- connectorSchema.parse — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:89](<../../../../../../../electron/domains/entity/connector-store.cjs#L89>)
- withWorldViewMutation — signature-only-candidate; [electron/domains/entity/connector-store.cjs:91](<../../../../../../../electron/domains/entity/connector-store.cjs#L91>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:108](<../../../../../../../electron/backend-identity.test.cjs#L108>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:114](<../../../../../../../electron/backend-identity.test.cjs#L114>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:53](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L53>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:61](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L61>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:63](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L63>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:67](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L67>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:74](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L74>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:82](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L82>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:102](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L102>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:31](<../../../../../../../electron/backend-identity.test.cjs#L31>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:12](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-717e54eefd910ebd"></a>

## createConnector.writeRelationship

[electron/domains/entity/connector-store.cjs:91](<../../../../../../../electron/domains/entity/connector-store.cjs#L91>) · FunctionExpression · production · [Connectors](<../../../../../modules/connectors.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createConnector](<connector-store.cjs.md#s-68abee44921e90c9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [connectorPath](<connector-store.cjs.md#s-2b79d024f1e5e30c>) — [electron/domains/entity/connector-store.cjs:94](<../../../../../../../electron/domains/entity/connector-store.cjs#L94>)
- [readConnector](<connector-store.cjs.md#s-0805b18e2fe71f10>) — [electron/domains/entity/connector-store.cjs:96](<../../../../../../../electron/domains/entity/connector-store.cjs#L96>)
- [writeTextAtomic](<../../core/persistence/json-store.cjs.md#s-eaf1fb4e46036574>) — [electron/domains/entity/connector-store.cjs:103](<../../../../../../../electron/domains/entity/connector-store.cjs#L103>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- readWorldViewChip — signature-only-candidate; [electron/domains/entity/connector-store.cjs:92](<../../../../../../../electron/domains/entity/connector-store.cjs#L92>)
- readWorldViewChip — signature-only-candidate; [electron/domains/entity/connector-store.cjs:93](<../../../../../../../electron/domains/entity/connector-store.cjs#L93>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:97](<../../../../../../../electron/domains/entity/connector-store.cjs#L97>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:97](<../../../../../../../electron/domains/entity/connector-store.cjs#L97>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:99](<../../../../../../../electron/domains/entity/connector-store.cjs#L99>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:105](<../../../../../../../electron/domains/entity/connector-store.cjs#L105>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:31](<../../../../../../../electron/backend-identity.test.cjs#L31>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:12](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-5920f12a905870a0"></a>

## updateConnector

[electron/domains/entity/connector-store.cjs:113](<../../../../../../../electron/domains/entity/connector-store.cjs#L113>) · FunctionDeclaration · production · [Connectors](<../../../../../modules/connectors.md>)

Updates semantic fields of one saved connection atomically. Expected prior metadata rejects stale edits, while exact retries succeed. Invalid endpoints or missing records throw.

Purpose evidence: jsdoc.

Exported as: updateConnector ([electron/domains/entity/connector-store.cjs:1](<../../../../../../../electron/domains/entity/connector-store.cjs#L1>)).

Lexical owner: [electron/domains/entity/connector-store.cjs](<connector-store.cjs.md#s-a2ab3ea8e361c06f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| input | any | compiler-inferred | required |
| previousInput | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@84:124&gt;.&lt;anonymous@85:17&gt;](<../../backend-identity.test.cjs.md#s-f8f1a3d6ac3824e8>) — [electron/backend-identity.test.cjs:137](<../../../../../../../electron/backend-identity.test.cjs#L137>)
- [registerWorldViewIpc."connector-update"](<../../core/ipc/worldview-ipc.cjs.md#s-cbf1d4375c683631>) — [electron/core/ipc/worldview-ipc.cjs:191](<../../../../../../../electron/core/ipc/worldview-ipc.cjs#L191>)
- [&lt;anonymous@15:94&gt;](<connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:112](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L112>)
- [&lt;anonymous@15:94&gt;](<connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:113](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L113>)
- [&lt;anonymous@15:94&gt;](<connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:115](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L115>)
- [&lt;anonymous@15:94&gt;](<connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:119](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L119>)
- [&lt;anonymous@15:94&gt;](<connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:130](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L130>)
- [&lt;anonymous@15:94&gt;](<connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:134](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L134>)
- [&lt;anonymous@15:94&gt;](<connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:142](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L142>)
- [&lt;anonymous@15:94&gt;.&lt;anonymous@149:21&gt;](<connector-store.test.cjs.md#s-1ea8482b614bca05>) — [electron/domains/entity/connector-store.test.cjs:149](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L149>)

Unresolved / external call sites: 4.

- connectorSchema.parse — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:114](<../../../../../../../electron/domains/entity/connector-store.cjs#L114>)
- connectorSchema.parse — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:115](<../../../../../../../electron/domains/entity/connector-store.cjs#L115>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:117](<../../../../../../../electron/domains/entity/connector-store.cjs#L117>)
- withWorldViewMutation — signature-only-candidate; [electron/domains/entity/connector-store.cjs:119](<../../../../../../../electron/domains/entity/connector-store.cjs#L119>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:137](<../../../../../../../electron/backend-identity.test.cjs#L137>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:112](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L112>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:113](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L113>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:115](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L115>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:119](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L119>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:130](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L130>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:134](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L134>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:142](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L142>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:149](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L149>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:31](<../../../../../../../electron/backend-identity.test.cjs#L31>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:12](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-7f7caec55e96417a"></a>

## updateConnector.editRelationship

[electron/domains/entity/connector-store.cjs:119](<../../../../../../../electron/domains/entity/connector-store.cjs#L119>) · FunctionExpression · production · [Connectors](<../../../../../modules/connectors.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [updateConnector](<connector-store.cjs.md#s-5920f12a905870a0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readConnector](<connector-store.cjs.md#s-0805b18e2fe71f10>) — [electron/domains/entity/connector-store.cjs:120](<../../../../../../../electron/domains/entity/connector-store.cjs#L120>)
- [writeTextAtomic](<../../core/persistence/json-store.cjs.md#s-eaf1fb4e46036574>) — [electron/domains/entity/connector-store.cjs:137](<../../../../../../../electron/domains/entity/connector-store.cjs#L137>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- Error — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:128](<../../../../../../../electron/domains/entity/connector-store.cjs#L128>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:129](<../../../../../../../electron/domains/entity/connector-store.cjs#L129>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:129](<../../../../../../../electron/domains/entity/connector-store.cjs#L129>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:131](<../../../../../../../electron/domains/entity/connector-store.cjs#L131>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:131](<../../../../../../../electron/domains/entity/connector-store.cjs#L131>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:132](<../../../../../../../electron/domains/entity/connector-store.cjs#L132>)
- readWorldViewChip — signature-only-candidate; [electron/domains/entity/connector-store.cjs:135](<../../../../../../../electron/domains/entity/connector-store.cjs#L135>)
- readWorldViewChip — signature-only-candidate; [electron/domains/entity/connector-store.cjs:136](<../../../../../../../electron/domains/entity/connector-store.cjs#L136>)
- 1 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:31](<../../../../../../../electron/backend-identity.test.cjs#L31>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:12](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-023228a431672d6c"></a>

## deleteConnector

[electron/domains/entity/connector-store.cjs:147](<../../../../../../../electron/domains/entity/connector-store.cjs#L147>) · FunctionDeclaration · production · [Connectors](<../../../../../modules/connectors.md>)

Deletes only the specified relationship metadata, allowing safe retries without touching entities or Universe sources.

Purpose evidence: jsdoc.

Exported as: deleteConnector ([electron/domains/entity/connector-store.cjs:1](<../../../../../../../electron/domains/entity/connector-store.cjs#L1>)).

Lexical owner: [electron/domains/entity/connector-store.cjs](<connector-store.cjs.md#s-a2ab3ea8e361c06f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@84:124&gt;.&lt;anonymous@85:17&gt;](<../../backend-identity.test.cjs.md#s-f8f1a3d6ac3824e8>) — [electron/backend-identity.test.cjs:149](<../../../../../../../electron/backend-identity.test.cjs#L149>)
- [registerWorldViewIpc."connector-delete"](<../../core/ipc/worldview-ipc.cjs.md#s-43a269fd3db0953f>) — [electron/core/ipc/worldview-ipc.cjs:198](<../../../../../../../electron/core/ipc/worldview-ipc.cjs#L198>)
- [&lt;anonymous@15:94&gt;](<connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:88](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L88>)
- [&lt;anonymous@15:94&gt;](<connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:180](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L180>)
- [&lt;anonymous@15:94&gt;](<connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:181](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L181>)

Unresolved / external call sites: 1.

- withWorldViewMutation — signature-only-candidate; [electron/domains/entity/connector-store.cjs:149](<../../../../../../../electron/domains/entity/connector-store.cjs#L149>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:149](<../../../../../../../electron/backend-identity.test.cjs#L149>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:88](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L88>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:180](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L180>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:181](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L181>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:31](<../../../../../../../electron/backend-identity.test.cjs#L31>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:12](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-2fcfbc487755d4da"></a>

## deleteConnector.removeRelationship

[electron/domains/entity/connector-store.cjs:149](<../../../../../../../electron/domains/entity/connector-store.cjs#L149>) · FunctionExpression · production · [Connectors](<../../../../../modules/connectors.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [deleteConnector](<connector-store.cjs.md#s-023228a431672d6c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [connectorPath](<connector-store.cjs.md#s-2b79d024f1e5e30c>) — [electron/domains/entity/connector-store.cjs:150](<../../../../../../../electron/domains/entity/connector-store.cjs#L150>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- fs.unlink — external-or-dynamic-dispatch; [electron/domains/entity/connector-store.cjs:152](<../../../../../../../electron/domains/entity/connector-store.cjs#L152>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:31](<../../../../../../../electron/backend-identity.test.cjs#L31>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:12](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L12>) — file-import-only; coverage not established.
