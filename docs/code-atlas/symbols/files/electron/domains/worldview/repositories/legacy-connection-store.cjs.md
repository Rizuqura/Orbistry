# electron/domains/worldview/repositories/legacy-connection-store.cjs: symbols

[Atlas](<../../../../../../README.md>) / [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>) / [electron/domains/worldview/repositories/legacy-connection-store.cjs:1](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/domains/worldview/repositories/legacy-connection-store.cjs](<legacy-connection-store.cjs.md#s-ef66afd73a1dd318>) (Module)
- [connectorPath](<legacy-connection-store.cjs.md#s-d166b7a4f9c51c75>) (FunctionDeclaration)
- [readConnector](<legacy-connection-store.cjs.md#s-e6a3f75334a5c1ae>) (FunctionDeclaration)
- [loadConnectors](<legacy-connection-store.cjs.md#s-2937b562dd1ce8b4>) (FunctionDeclaration)
- [loadConnectors.readRelationships](<legacy-connection-store.cjs.md#s-1bdcb8ed639df6a1>) (FunctionExpression)
- [createConnector](<legacy-connection-store.cjs.md#s-1cf3233508e51f50>) (FunctionDeclaration)
- [createConnector.writeRelationship](<legacy-connection-store.cjs.md#s-46615bffd58cc088>) (FunctionExpression)
- [updateConnector](<legacy-connection-store.cjs.md#s-0c4952848c75ff0b>) (FunctionDeclaration)
- [updateConnector.editRelationship](<legacy-connection-store.cjs.md#s-cdb4ffc076e40381>) (FunctionExpression)
- [deleteConnector](<legacy-connection-store.cjs.md#s-2ec984f7c5214ed3>) (FunctionDeclaration)
- [deleteConnector.removeRelationship](<legacy-connection-store.cjs.md#s-a2f8d4eb9e3aa4ab>) (FunctionExpression)

<a id="s-ef66afd73a1dd318"></a>

## electron/domains/worldview/repositories/legacy-connection-store.cjs

[electron/domains/worldview/repositories/legacy-connection-store.cjs:1](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L1>) · Module · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- require — module-loader; [electron/domains/worldview/repositories/legacy-connection-store.cjs:1](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L1>)
- require — module-loader; [electron/domains/worldview/repositories/legacy-connection-store.cjs:2](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L2>)
- require — module-loader; [electron/domains/worldview/repositories/legacy-connection-store.cjs:6](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L6>)
- require — module-loader; [electron/domains/worldview/repositories/legacy-connection-store.cjs:10](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L10>)
- require — module-loader; [electron/domains/worldview/repositories/legacy-connection-store.cjs:14](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L14>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d166b7a4f9c51c75"></a>

## connectorPath

[electron/domains/worldview/repositories/legacy-connection-store.cjs:17](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L17>) · FunctionDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Resolves a protected relationship record inside the existing WorldView metadata namespace. Invalid IDs/links throw.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/worldview/repositories/legacy-connection-store.cjs](<legacy-connection-store.cjs.md#s-ef66afd73a1dd318>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [rejectSymlink](<../../../core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/domains/worldview/repositories/legacy-connection-store.cjs:22](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L22>)
- [rejectSymlink](<../../../core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/domains/worldview/repositories/legacy-connection-store.cjs:26](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L26>)

**Called by (statically resolved):**

- [readConnector](<legacy-connection-store.cjs.md#s-e6a3f75334a5c1ae>) — [electron/domains/worldview/repositories/legacy-connection-store.cjs:32](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L32>)
- [loadConnectors.readRelationships](<legacy-connection-store.cjs.md#s-1bdcb8ed639df6a1>) — [electron/domains/worldview/repositories/legacy-connection-store.cjs:47](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L47>)
- [createConnector.writeRelationship](<legacy-connection-store.cjs.md#s-46615bffd58cc088>) — [electron/domains/worldview/repositories/legacy-connection-store.cjs:78](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L78>)
- [deleteConnector.removeRelationship](<legacy-connection-store.cjs.md#s-a2f8d4eb9e3aa4ab>) — [electron/domains/worldview/repositories/legacy-connection-store.cjs:134](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L134>)

Unresolved / external call sites: 4.

- identifier.parse — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:18](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L18>)
- fs.realpath — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:19](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L19>)
- path.join — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:21](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L21>)
- path.join — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:25](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L25>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e6a3f75334a5c1ae"></a>

## readConnector

[electron/domains/worldview/repositories/legacy-connection-store.cjs:31](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L31>) · FunctionDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Reads and validates one bounded record, rejecting corrupt or misidentified metadata.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/worldview/repositories/legacy-connection-store.cjs](<legacy-connection-store.cjs.md#s-ef66afd73a1dd318>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [connectorPath](<legacy-connection-store.cjs.md#s-d166b7a4f9c51c75>) — [electron/domains/worldview/repositories/legacy-connection-store.cjs:32](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L32>)

**Called by (statically resolved):**

- [loadConnectors.readRelationships](<legacy-connection-store.cjs.md#s-1bdcb8ed639df6a1>) — [electron/domains/worldview/repositories/legacy-connection-store.cjs:61](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L61>)
- [createConnector.writeRelationship](<legacy-connection-store.cjs.md#s-46615bffd58cc088>) — [electron/domains/worldview/repositories/legacy-connection-store.cjs:80](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L80>)
- [updateConnector.editRelationship](<legacy-connection-store.cjs.md#s-cdb4ffc076e40381>) — [electron/domains/worldview/repositories/legacy-connection-store.cjs:104](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L104>)

Unresolved / external call sites: 7.

- fs.stat — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:33](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L33>)
- stats.isFile — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:34](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L34>)
- Error — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:35](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L35>)
- fs.readFile — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:36](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L36>)
- connectorSchema.parse — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:37](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L37>)
- JSON.parse — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:37](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L37>)
- Error — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:39](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L39>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2937b562dd1ce8b4"></a>

## loadConnectors

[electron/domains/worldview/repositories/legacy-connection-store.cjs:44](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L44>) · FunctionDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Loads every independent relationship, isolating damaged records without imposing collection capacity or endpoint occupancy.

Purpose evidence: jsdoc.

Exported as: loadConnectors ([electron/domains/worldview/repositories/legacy-connection-store.cjs:1](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L1>)), loadConnectors ([electron/domains/entity/connector-store.cjs:1](<../../../../../../../../electron/domains/entity/connector-store.cjs#L1>)).

Lexical owner: [electron/domains/worldview/repositories/legacy-connection-store.cjs](<legacy-connection-store.cjs.md#s-ef66afd73a1dd318>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [connectorMetadata](<../../../ai/agents/entity-jurisdiction.cjs.md#s-b6a80bf6793f82d4>) — [electron/ai/agents/entity-jurisdiction.cjs:106](<../../../../../../../../electron/ai/agents/entity-jurisdiction.cjs#L106>)
- [&lt;anonymous@15:94&gt;](<../../entity/connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:56](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L56>)
- [&lt;anonymous@15:94&gt;](<../../entity/connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:98](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L98>)
- [&lt;anonymous@15:94&gt;](<../../entity/connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:162](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L162>)
- [&lt;anonymous@15:94&gt;](<../../entity/connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:182](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L182>)
- [WorldViewRepository.read](<WorldViewRepository.cjs.md#s-91419ef7bf2fa99e>) — [electron/domains/worldview/repositories/WorldViewRepository.cjs:16](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L16>)
- [WorldViewRepository.connectionEntities](<WorldViewRepository.cjs.md#s-a43f5163c18edd36>) — [electron/domains/worldview/repositories/WorldViewRepository.cjs:71](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L71>)
- [&lt;anonymous@223:99&gt;](<../tests/worldview-domain.test.cjs.md#s-bbf315728a031ceb>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:256](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L256>)
- [&lt;anonymous@223:99&gt;](<../tests/worldview-domain.test.cjs.md#s-bbf315728a031ceb>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:265](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L265>)
- [&lt;anonymous@328:92&gt;](<../tests/worldview-domain.test.cjs.md#s-a99f92d221b5ce7c>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:368](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L368>)
- [capture](<../../../engines/backend-identity/identity-compiler.cjs.md#s-1f99e7da5df73158>) — [electron/engines/backend-identity/identity-compiler.cjs:220](<../../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L220>)

Unresolved / external call sites: 1.

- withWorldViewMutation — signature-only-candidate; [electron/domains/worldview/repositories/legacy-connection-store.cjs:46](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L46>)

**Related tests / acceptance harnesses:**

- [electron/domains/entity/connector-store.test.cjs:56](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L56>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:98](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L98>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:162](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L162>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:182](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L182>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:256](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L256>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:265](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L265>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:368](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L368>) — static-call-site; coverage not established.

<a id="s-1bdcb8ed639df6a1"></a>

## loadConnectors.readRelationships

[electron/domains/worldview/repositories/legacy-connection-store.cjs:46](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L46>) · FunctionExpression · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [loadConnectors](<legacy-connection-store.cjs.md#s-2937b562dd1ce8b4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [connectorPath](<legacy-connection-store.cjs.md#s-d166b7a4f9c51c75>) — [electron/domains/worldview/repositories/legacy-connection-store.cjs:47](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L47>)
- [readConnector](<legacy-connection-store.cjs.md#s-e6a3f75334a5c1ae>) — [electron/domains/worldview/repositories/legacy-connection-store.cjs:61](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L61>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- fs.readdir — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:50](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L50>)
- entries.sort — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:57](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L57>)
- entry.endsWith — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:58](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L58>)
- connectors.push — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:60](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L60>)
- entry.slice — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:61](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L61>)
- issues.push — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:64](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L64>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1cf3233508e51f50"></a>

## createConnector

[electron/domains/worldview/repositories/legacy-connection-store.cjs:72](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L72>) · FunctionDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Creates one immutable identity after validating both entities. Exact retries succeed, ID collisions reject, all other records survive.

Purpose evidence: jsdoc.

Exported as: createConnector ([electron/domains/worldview/repositories/legacy-connection-store.cjs:1](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L1>)), createConnector ([electron/domains/entity/connector-store.cjs:1](<../../../../../../../../electron/domains/entity/connector-store.cjs#L1>)).

Lexical owner: [electron/domains/worldview/repositories/legacy-connection-store.cjs](<legacy-connection-store.cjs.md#s-ef66afd73a1dd318>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@84:124&gt;.&lt;anonymous@85:17&gt;](<../../../backend-identity.test.cjs.md#s-f8f1a3d6ac3824e8>) — [electron/backend-identity.test.cjs:108](<../../../../../../../../electron/backend-identity.test.cjs#L108>)
- [&lt;anonymous@84:124&gt;.&lt;anonymous@85:17&gt;](<../../../backend-identity.test.cjs.md#s-f8f1a3d6ac3824e8>) — [electron/backend-identity.test.cjs:114](<../../../../../../../../electron/backend-identity.test.cjs#L114>)
- [&lt;anonymous@15:94&gt;.&lt;anonymous@53:22&gt;](<../../entity/connector-store.test.cjs.md#s-fb700745bf6a76bb>) — [electron/domains/entity/connector-store.test.cjs:53](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L53>)
- [&lt;anonymous@15:94&gt;](<../../entity/connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:61](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L61>)
- [&lt;anonymous@15:94&gt;](<../../entity/connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:63](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L63>)
- [&lt;anonymous@15:94&gt;](<../../entity/connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:67](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L67>)
- [&lt;anonymous@15:94&gt;](<../../entity/connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:74](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L74>)
- [&lt;anonymous@15:94&gt;](<../../entity/connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:82](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L82>)
- [&lt;anonymous@15:94&gt;](<../../entity/connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:102](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L102>)
- [WorldViewRepository.createConnection](<WorldViewRepository.cjs.md#s-a831539ba65e984b>) — [electron/domains/worldview/repositories/WorldViewRepository.cjs:59](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L59>)

Unresolved / external call sites: 2.

- connectorSchema.parse — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:73](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L73>)
- withWorldViewMutation — signature-only-candidate; [electron/domains/worldview/repositories/legacy-connection-store.cjs:75](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L75>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:108](<../../../../../../../../electron/backend-identity.test.cjs#L108>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:114](<../../../../../../../../electron/backend-identity.test.cjs#L114>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:53](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L53>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:61](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L61>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:63](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L63>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:67](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L67>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:74](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L74>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:82](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L82>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:102](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L102>) — static-call-site; coverage not established.

<a id="s-46615bffd58cc088"></a>

## createConnector.writeRelationship

[electron/domains/worldview/repositories/legacy-connection-store.cjs:75](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L75>) · FunctionExpression · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createConnector](<legacy-connection-store.cjs.md#s-1cf3233508e51f50>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [connectorPath](<legacy-connection-store.cjs.md#s-d166b7a4f9c51c75>) — [electron/domains/worldview/repositories/legacy-connection-store.cjs:78](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L78>)
- [readConnector](<legacy-connection-store.cjs.md#s-e6a3f75334a5c1ae>) — [electron/domains/worldview/repositories/legacy-connection-store.cjs:80](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L80>)
- [writeTextAtomic](<../../../core/persistence/json-store.cjs.md#s-eaf1fb4e46036574>) — [electron/domains/worldview/repositories/legacy-connection-store.cjs:87](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L87>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- readWorldViewChip — signature-only-candidate; [electron/domains/worldview/repositories/legacy-connection-store.cjs:76](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L76>)
- readWorldViewChip — signature-only-candidate; [electron/domains/worldview/repositories/legacy-connection-store.cjs:77](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L77>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:81](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L81>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:81](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L81>)
- Error — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:83](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L83>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:89](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L89>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0c4952848c75ff0b"></a>

## updateConnector

[electron/domains/worldview/repositories/legacy-connection-store.cjs:97](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L97>) · FunctionDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Updates semantic fields of one saved connection atomically. Expected prior metadata rejects stale edits, while exact retries succeed. Invalid endpoints or missing records throw.

Purpose evidence: jsdoc.

Exported as: updateConnector ([electron/domains/worldview/repositories/legacy-connection-store.cjs:1](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L1>)), updateConnector ([electron/domains/entity/connector-store.cjs:1](<../../../../../../../../electron/domains/entity/connector-store.cjs#L1>)).

Lexical owner: [electron/domains/worldview/repositories/legacy-connection-store.cjs](<legacy-connection-store.cjs.md#s-ef66afd73a1dd318>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| input | any | compiler-inferred | required |
| previousInput | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@84:124&gt;.&lt;anonymous@85:17&gt;](<../../../backend-identity.test.cjs.md#s-f8f1a3d6ac3824e8>) — [electron/backend-identity.test.cjs:137](<../../../../../../../../electron/backend-identity.test.cjs#L137>)
- [&lt;anonymous@15:94&gt;](<../../entity/connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:112](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L112>)
- [&lt;anonymous@15:94&gt;](<../../entity/connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:113](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L113>)
- [&lt;anonymous@15:94&gt;](<../../entity/connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:115](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L115>)
- [&lt;anonymous@15:94&gt;](<../../entity/connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:119](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L119>)
- [&lt;anonymous@15:94&gt;](<../../entity/connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:130](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L130>)
- [&lt;anonymous@15:94&gt;](<../../entity/connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:134](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L134>)
- [&lt;anonymous@15:94&gt;](<../../entity/connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:142](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L142>)
- [&lt;anonymous@15:94&gt;.&lt;anonymous@149:21&gt;](<../../entity/connector-store.test.cjs.md#s-1ea8482b614bca05>) — [electron/domains/entity/connector-store.test.cjs:149](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L149>)
- [WorldViewRepository.updateConnection](<WorldViewRepository.cjs.md#s-e6def28894ad4362>) — [electron/domains/worldview/repositories/WorldViewRepository.cjs:63](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L63>)

Unresolved / external call sites: 4.

- connectorSchema.parse — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:98](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L98>)
- connectorSchema.parse — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:99](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L99>)
- Error — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:101](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L101>)
- withWorldViewMutation — signature-only-candidate; [electron/domains/worldview/repositories/legacy-connection-store.cjs:103](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L103>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:137](<../../../../../../../../electron/backend-identity.test.cjs#L137>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:112](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L112>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:113](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L113>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:115](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L115>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:119](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L119>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:130](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L130>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:134](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L134>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:142](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L142>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:149](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L149>) — static-call-site; coverage not established.

<a id="s-cdb4ffc076e40381"></a>

## updateConnector.editRelationship

[electron/domains/worldview/repositories/legacy-connection-store.cjs:103](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L103>) · FunctionExpression · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [updateConnector](<legacy-connection-store.cjs.md#s-0c4952848c75ff0b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readConnector](<legacy-connection-store.cjs.md#s-e6a3f75334a5c1ae>) — [electron/domains/worldview/repositories/legacy-connection-store.cjs:104](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L104>)
- [writeTextAtomic](<../../../core/persistence/json-store.cjs.md#s-eaf1fb4e46036574>) — [electron/domains/worldview/repositories/legacy-connection-store.cjs:121](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L121>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- Error — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:112](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L112>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:113](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L113>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:113](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L113>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:115](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L115>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:115](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L115>)
- Error — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:116](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L116>)
- readWorldViewChip — signature-only-candidate; [electron/domains/worldview/repositories/legacy-connection-store.cjs:119](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L119>)
- readWorldViewChip — signature-only-candidate; [electron/domains/worldview/repositories/legacy-connection-store.cjs:120](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L120>)
- 1 additional sites in [symbol-index.json](<../../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2ec984f7c5214ed3"></a>

## deleteConnector

[electron/domains/worldview/repositories/legacy-connection-store.cjs:131](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L131>) · FunctionDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Deletes only the specified relationship metadata, allowing safe retries without touching entities or Universe sources.

Purpose evidence: jsdoc.

Exported as: deleteConnector ([electron/domains/worldview/repositories/legacy-connection-store.cjs:1](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L1>)), deleteConnector ([electron/domains/entity/connector-store.cjs:1](<../../../../../../../../electron/domains/entity/connector-store.cjs#L1>)).

Lexical owner: [electron/domains/worldview/repositories/legacy-connection-store.cjs](<legacy-connection-store.cjs.md#s-ef66afd73a1dd318>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@84:124&gt;.&lt;anonymous@85:17&gt;](<../../../backend-identity.test.cjs.md#s-f8f1a3d6ac3824e8>) — [electron/backend-identity.test.cjs:149](<../../../../../../../../electron/backend-identity.test.cjs#L149>)
- [&lt;anonymous@15:94&gt;](<../../entity/connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:88](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L88>)
- [&lt;anonymous@15:94&gt;](<../../entity/connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:180](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L180>)
- [&lt;anonymous@15:94&gt;](<../../entity/connector-store.test.cjs.md#s-6dca86833f2a7aa5>) — [electron/domains/entity/connector-store.test.cjs:181](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L181>)
- [WorldViewRepository.deleteConnection](<WorldViewRepository.cjs.md#s-d80b86147b2451c3>) — [electron/domains/worldview/repositories/WorldViewRepository.cjs:67](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L67>)

Unresolved / external call sites: 1.

- withWorldViewMutation — signature-only-candidate; [electron/domains/worldview/repositories/legacy-connection-store.cjs:133](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L133>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:149](<../../../../../../../../electron/backend-identity.test.cjs#L149>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:88](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L88>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:180](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L180>) — static-call-site; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:181](<../../../../../../../../electron/domains/entity/connector-store.test.cjs#L181>) — static-call-site; coverage not established.

<a id="s-a2f8d4eb9e3aa4ab"></a>

## deleteConnector.removeRelationship

[electron/domains/worldview/repositories/legacy-connection-store.cjs:133](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L133>) · FunctionExpression · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [deleteConnector](<legacy-connection-store.cjs.md#s-2ec984f7c5214ed3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [connectorPath](<legacy-connection-store.cjs.md#s-d166b7a4f9c51c75>) — [electron/domains/worldview/repositories/legacy-connection-store.cjs:134](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L134>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- fs.unlink — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/legacy-connection-store.cjs:136](<../../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L136>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
