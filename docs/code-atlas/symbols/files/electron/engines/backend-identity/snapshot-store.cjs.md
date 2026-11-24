# electron/engines/backend-identity/snapshot-store.cjs: symbols

[Atlas](<../../../../../README.md>) / [Backend Identity Engine](<../../../../../modules/identity.md>) / [electron/engines/backend-identity/snapshot-store.cjs:1](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/backend-identity/snapshot-store.cjs](<snapshot-store.cjs.md#s-92351d084d994c00>) (Module)
- [pointerSchema](<snapshot-store.cjs.md#s-3d698d57fbf15c48>) (SchemaBinding)
- [attemptSchema](<snapshot-store.cjs.md#s-94998d70a14c0291>) (SchemaBinding)
- [location](<snapshot-store.cjs.md#s-d045ef361cdcece4>) (FunctionDeclaration)
- [read](<snapshot-store.cjs.md#s-c2efce1b7070b548>) (FunctionDeclaration)
- [readVersion](<snapshot-store.cjs.md#s-a51351659d223525>) (FunctionDeclaration)
- [current](<snapshot-store.cjs.md#s-1b3b25fe1054f619>) (FunctionDeclaration)
- [index](<snapshot-store.cjs.md#s-0306e55cc435f9ec>) (FunctionDeclaration)
- [index.schema](<snapshot-store.cjs.md#s-f94bcd088de6429f>) (SchemaBinding)
- [index.&lt;anonymous@122:16&gt;](<snapshot-store.cjs.md#s-ceb8326ad36bb3ca>) (ArrowFunction)
- [getChunk](<snapshot-store.cjs.md#s-4d5e1ea6610b8273>) (FunctionDeclaration)
- [putChunk](<snapshot-store.cjs.md#s-ed9516fc7e10fb38>) (FunctionDeclaration)
- [publish](<snapshot-store.cjs.md#s-aad15ef56f75a7c7>) (FunctionDeclaration)
- [publish.&lt;anonymous@162:5&gt;](<snapshot-store.cjs.md#s-d0c73e94cfb33136>) (ArrowFunction)
- [recordAttempt](<snapshot-store.cjs.md#s-ae275b9de6284ebc>) (FunctionDeclaration)
- [lastAttempt](<snapshot-store.cjs.md#s-739f94fed52517ad>) (FunctionDeclaration)

<a id="s-92351d084d994c00"></a>

## electron/engines/backend-identity/snapshot-store.cjs

[electron/engines/backend-identity/snapshot-store.cjs:1](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L1>) · Module · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- require — module-loader; [electron/engines/backend-identity/snapshot-store.cjs:1](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L1>)
- require — module-loader; [electron/engines/backend-identity/snapshot-store.cjs:2](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L2>)
- require — module-loader; [electron/engines/backend-identity/snapshot-store.cjs:3](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L3>)
- require — module-loader; [electron/engines/backend-identity/snapshot-store.cjs:7](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L7>)
- require — module-loader; [electron/engines/backend-identity/snapshot-store.cjs:18](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L18>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:24](<../../../../../../../electron/backend-identity.test.cjs#L24>) — file-import-only; coverage not established.

<a id="s-3d698d57fbf15c48"></a>

## pointerSchema

[electron/engines/backend-identity/snapshot-store.cjs:19](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L19>) · SchemaBinding · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/engines/backend-identity/snapshot-store.cjs](<snapshot-store.cjs.md#s-92351d084d994c00>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- z .object({ schemaVersion: z.literal(1), identityVersion: hashSchema, manifestHash: hashSchema, }) .strict — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:19](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L19>)
- z .object — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:19](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L19>)
- z.literal — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:21](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L21>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:24](<../../../../../../../electron/backend-identity.test.cjs#L24>) — file-import-only; coverage not established.

<a id="s-94998d70a14c0291"></a>

## attemptSchema

[electron/engines/backend-identity/snapshot-store.cjs:26](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L26>) · SchemaBinding · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/engines/backend-identity/snapshot-store.cjs](<snapshot-store.cjs.md#s-92351d084d994c00>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- z .object({ at: z.string().datetime(), outcome: z.enum(&#91;"succeeded", "reused", "failed"&#93;), identityVersion: hashSchema.nullable(), error: z.string().max(2000).nullable(), }) .stric — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:26](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L26>)
- z .object — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:26](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L26>)
- z.string().datetime — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:28](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L28>)
- z.string — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:28](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L28>)
- z.enum — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:29](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L29>)
- hashSchema.nullable — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:30](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L30>)
- z.string().max(2000).nullable — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:31](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L31>)
- z.string().max — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:31](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L31>)
- 1 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:24](<../../../../../../../electron/backend-identity.test.cjs#L24>) — file-import-only; coverage not established.

<a id="s-d045ef361cdcece4"></a>

## location

[electron/engines/backend-identity/snapshot-store.cjs:36](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L36>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Resolves only fixed engine paths and validated ID/hash segments, rejecting links at every existing parent.

Purpose evidence: jsdoc.

Exported as: location ([electron/engines/backend-identity/snapshot-store.cjs:1](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L1>)).

Lexical owner: [electron/engines/backend-identity/snapshot-store.cjs](<snapshot-store.cjs.md#s-92351d084d994c00>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| parts | {} | compiler-inferred | required, rest |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [rejectSymlink](<../../core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/engines/backend-identity/snapshot-store.cjs:42](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L42>)

**Called by (statically resolved):**

- [read](<snapshot-store.cjs.md#s-c2efce1b7070b548>) — [electron/engines/backend-identity/snapshot-store.cjs:48](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L48>)
- [putChunk](<snapshot-store.cjs.md#s-ed9516fc7e10fb38>) — [electron/engines/backend-identity/snapshot-store.cjs:156](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L156>)
- [publish](<snapshot-store.cjs.md#s-aad15ef56f75a7c7>) — [electron/engines/backend-identity/snapshot-store.cjs:179](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L179>)
- [publish](<snapshot-store.cjs.md#s-aad15ef56f75a7c7>) — [electron/engines/backend-identity/snapshot-store.cjs:181](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L181>)
- [publish](<snapshot-store.cjs.md#s-aad15ef56f75a7c7>) — [electron/engines/backend-identity/snapshot-store.cjs:184](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L184>)
- [publish](<snapshot-store.cjs.md#s-aad15ef56f75a7c7>) — [electron/engines/backend-identity/snapshot-store.cjs:214](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L214>)
- [publish](<snapshot-store.cjs.md#s-aad15ef56f75a7c7>) — [electron/engines/backend-identity/snapshot-store.cjs:223](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L223>)
- [recordAttempt](<snapshot-store.cjs.md#s-ae275b9de6284ebc>) — [electron/engines/backend-identity/snapshot-store.cjs:236](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L236>)

Unresolved / external call sites: 4.

- fs.realpath — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:37](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L37>)
- /^&#91;a-zA-Z0-9_.-&#93;+$/.test — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:39](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L39>)
- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:40](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L40>)
- path.join — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:41](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L41>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:24](<../../../../../../../electron/backend-identity.test.cjs#L24>) — file-import-only; coverage not established.

<a id="s-c2efce1b7070b548"></a>

## read

[electron/engines/backend-identity/snapshot-store.cjs:47](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L47>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Reads bounded engine-owned JSON. Missing optional records remain absent; corruption is explicit and never silently overwritten.

Purpose evidence: jsdoc.

Exported as: read ([electron/engines/backend-identity/snapshot-store.cjs:1](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L1>)).

Lexical owner: [electron/engines/backend-identity/snapshot-store.cjs](<snapshot-store.cjs.md#s-92351d084d994c00>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| parts | any | compiler-inferred | required |
| schema | any | compiler-inferred | required |
| missing | boolean | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [location](<snapshot-store.cjs.md#s-d045ef361cdcece4>) — [electron/engines/backend-identity/snapshot-store.cjs:48](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L48>)

**Called by (statically resolved):**

- [readVersion](<snapshot-store.cjs.md#s-a51351659d223525>) — [electron/engines/backend-identity/snapshot-store.cjs:65](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L65>)
- [current](<snapshot-store.cjs.md#s-1b3b25fe1054f619>) — [electron/engines/backend-identity/snapshot-store.cjs:88](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L88>)
- [index](<snapshot-store.cjs.md#s-0306e55cc435f9ec>) — [electron/engines/backend-identity/snapshot-store.cjs:106](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L106>)
- [getChunk](<snapshot-store.cjs.md#s-4d5e1ea6610b8273>) — [electron/engines/backend-identity/snapshot-store.cjs:131](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L131>)
- [putChunk](<snapshot-store.cjs.md#s-ed9516fc7e10fb38>) — [electron/engines/backend-identity/snapshot-store.cjs:148](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L148>)
- [publish](<snapshot-store.cjs.md#s-aad15ef56f75a7c7>) — [electron/engines/backend-identity/snapshot-store.cjs:192](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L192>)
- [lastAttempt](<snapshot-store.cjs.md#s-739f94fed52517ad>) — [electron/engines/backend-identity/snapshot-store.cjs:243](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L243>)

Unresolved / external call sites: 7.

- fs.stat — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:50](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L50>)
- stat.isFile — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:51](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L51>)
- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:52](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L52>)
- schema.parse — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:53](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L53>)
- JSON.parse — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:53](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L53>)
- fs.readFile — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:53](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L53>)
- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:56](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L56>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:24](<../../../../../../../electron/backend-identity.test.cjs#L24>) — file-import-only; coverage not established.

<a id="s-a51351659d223525"></a>

## readVersion

[electron/engines/backend-identity/snapshot-store.cjs:62](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L62>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Returns a validated immutable version, without exposing absolute filesystem paths in its public manifest.

Purpose evidence: jsdoc.

Exported as: readVersion ([electron/engines/backend-identity/snapshot-store.cjs:1](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L1>)).

Lexical owner: [electron/engines/backend-identity/snapshot-store.cjs](<snapshot-store.cjs.md#s-92351d084d994c00>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |
| version | any | compiler-inferred | required |
| missing | boolean | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [read](<snapshot-store.cjs.md#s-c2efce1b7070b548>) — [electron/engines/backend-identity/snapshot-store.cjs:65](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L65>)

**Called by (statically resolved):**

- [generate.compileIdentity](<identity-compiler.cjs.md#s-433e03f963d494bb>) — [electron/engines/backend-identity/identity-compiler.cjs:320](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L320>)
- [current](<snapshot-store.cjs.md#s-1b3b25fe1054f619>) — [electron/engines/backend-identity/snapshot-store.cjs:95](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L95>)
- [publish](<snapshot-store.cjs.md#s-aad15ef56f75a7c7>) — [electron/engines/backend-identity/snapshot-store.cjs:172](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L172>)

Unresolved / external call sites: 4.

- idSchema.parse — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:63](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L63>)
- hashSchema.parse — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:64](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L64>)
- digest — signature-only-candidate; [electron/engines/backend-identity/snapshot-store.cjs:76](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L76>)
- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:82](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L82>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:24](<../../../../../../../electron/backend-identity.test.cjs#L24>) — file-import-only; coverage not established.

<a id="s-1b3b25fe1054f619"></a>

## current

[electron/engines/backend-identity/snapshot-store.cjs:86](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L86>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Follows an integrity-checked current pointer. No record is created just by opening an inspector.

Purpose evidence: jsdoc.

Exported as: current ([electron/engines/backend-identity/snapshot-store.cjs:1](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L1>)).

Lexical owner: [electron/engines/backend-identity/snapshot-store.cjs](<snapshot-store.cjs.md#s-92351d084d994c00>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [read](<snapshot-store.cjs.md#s-c2efce1b7070b548>) — [electron/engines/backend-identity/snapshot-store.cjs:88](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L88>)
- [readVersion](<snapshot-store.cjs.md#s-a51351659d223525>) — [electron/engines/backend-identity/snapshot-store.cjs:95](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L95>)

**Called by (statically resolved):**

- [&lt;anonymous@183:122&gt;.&lt;anonymous@184:17&gt;](<../../backend-identity.test.cjs.md#s-432a7be95c4ed388>) — [electron/backend-identity.test.cjs:211](<../../../../../../../electron/backend-identity.test.cjs#L211>)
- [&lt;anonymous@573:116&gt;.&lt;anonymous@574:11&gt;](<../../backend-identity.test.cjs.md#s-65925d3a759e86b5>) — [electron/backend-identity.test.cjs:597](<../../../../../../../electron/backend-identity.test.cjs#L597>)
- [status](<identity-compiler.cjs.md#s-028f3e6557e09194>) — [electron/engines/backend-identity/identity-compiler.cjs:426](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L426>)

Unresolved / external call sites: 3.

- idSchema.parse — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:87](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L87>)
- digest — signature-only-candidate; [electron/engines/backend-identity/snapshot-store.cjs:96](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L96>)
- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:97](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L97>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:211](<../../../../../../../electron/backend-identity.test.cjs#L211>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:597](<../../../../../../../electron/backend-identity.test.cjs#L597>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:24](<../../../../../../../electron/backend-identity.test.cjs#L24>) — file-import-only; coverage not established.

<a id="s-0306e55cc435f9ec"></a>

## index

[electron/engines/backend-identity/snapshot-store.cjs:101](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L101>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Retrieves compact chunk descriptors or full capability contracts from an immutable, hash-checked snapshot.

Purpose evidence: jsdoc.

Exported as: index ([electron/engines/backend-identity/snapshot-store.cjs:1](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L1>)).

Lexical owner: [electron/engines/backend-identity/snapshot-store.cjs](<snapshot-store.cjs.md#s-92351d084d994c00>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| manifest | any | compiler-inferred | required |
| kind | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [read](<snapshot-store.cjs.md#s-c2efce1b7070b548>) — [electron/engines/backend-identity/snapshot-store.cjs:106](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L106>)

**Called by (statically resolved):**

- [&lt;anonymous@183:122&gt;.&lt;anonymous@184:17&gt;](<../../backend-identity.test.cjs.md#s-432a7be95c4ed388>) — [electron/backend-identity.test.cjs:193](<../../../../../../../electron/backend-identity.test.cjs#L193>)
- [&lt;anonymous@183:122&gt;.&lt;anonymous@184:17&gt;](<../../backend-identity.test.cjs.md#s-432a7be95c4ed388>) — [electron/backend-identity.test.cjs:194](<../../../../../../../electron/backend-identity.test.cjs#L194>)
- [createIdentityRuntime.getChunk](<identity-runtime.cjs.md#s-29a452afb89fd235>) — [electron/engines/backend-identity/identity-runtime.cjs:78](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L78>)
- [createIdentityRuntime.searchChunks](<identity-runtime.cjs.md#s-20cff2901c3b4e03>) — [electron/engines/backend-identity/identity-runtime.cjs:101](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L101>)
- [createIdentityRuntime.listTopics](<identity-runtime.cjs.md#s-ce2a3585d4984a6b>) — [electron/engines/backend-identity/identity-runtime.cjs:154](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L154>)
- [createIdentityRuntime.listCapabilities](<identity-runtime.cjs.md#s-3148355880ff347e>) — [electron/engines/backend-identity/identity-runtime.cjs:189](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L189>)
- [publish](<snapshot-store.cjs.md#s-aad15ef56f75a7c7>) — [electron/engines/backend-identity/snapshot-store.cjs:188](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L188>)
- [publish](<snapshot-store.cjs.md#s-aad15ef56f75a7c7>) — [electron/engines/backend-identity/snapshot-store.cjs:189](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L189>)

Unresolved / external call sites: 3.

- digest — signature-only-candidate; [electron/engines/backend-identity/snapshot-store.cjs:118](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L118>)
- value.some — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:122](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L122>)
- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:124](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L124>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:193](<../../../../../../../electron/backend-identity.test.cjs#L193>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:194](<../../../../../../../electron/backend-identity.test.cjs#L194>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:24](<../../../../../../../electron/backend-identity.test.cjs#L24>) — file-import-only; coverage not established.

<a id="s-f94bcd088de6429f"></a>

## index.schema

[electron/engines/backend-identity/snapshot-store.cjs:103](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L103>) · SchemaBinding · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [index](<snapshot-store.cjs.md#s-0306e55cc435f9ec>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- z .array(capabilities ? capabilitySchema : chunkReference) .max — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:103](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L103>)
- z .array — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:103](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L103>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:24](<../../../../../../../electron/backend-identity.test.cjs#L24>) — file-import-only; coverage not established.

<a id="s-ceb8326ad36bb3ca"></a>

## index.&lt;anonymous@122:16&gt;

[electron/engines/backend-identity/snapshot-store.cjs:122](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L122>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [index](<snapshot-store.cjs.md#s-0306e55cc435f9ec>).

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

- [electron/backend-identity.test.cjs:24](<../../../../../../../electron/backend-identity.test.cjs#L24>) — file-import-only; coverage not established.

<a id="s-4d5e1ea6610b8273"></a>

## getChunk

[electron/engines/backend-identity/snapshot-store.cjs:128](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L128>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Reads one content-addressed chunk after its manifest membership was checked by the runtime.

Purpose evidence: jsdoc.

Exported as: getChunk ([electron/engines/backend-identity/snapshot-store.cjs:1](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L1>)).

Lexical owner: [electron/engines/backend-identity/snapshot-store.cjs](<snapshot-store.cjs.md#s-92351d084d994c00>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |
| reference | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [read](<snapshot-store.cjs.md#s-c2efce1b7070b548>) — [electron/engines/backend-identity/snapshot-store.cjs:131](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L131>)

**Called by (statically resolved):**

- [createIdentityRuntime.getChunk](<identity-runtime.cjs.md#s-29a452afb89fd235>) — [electron/engines/backend-identity/identity-runtime.cjs:82](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L82>)
- [createIdentityRuntime.searchChunks](<identity-runtime.cjs.md#s-20cff2901c3b4e03>) — [electron/engines/backend-identity/identity-runtime.cjs:113](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L113>)
- [createIdentityRuntime.searchChunks](<identity-runtime.cjs.md#s-20cff2901c3b4e03>) — [electron/engines/backend-identity/identity-runtime.cjs:132](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L132>)

Unresolved / external call sites: 6.

- idSchema.parse — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:129](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L129>)
- hashSchema.parse — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:130](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L130>)
- digest — signature-only-candidate; [electron/engines/backend-identity/snapshot-store.cjs:139](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L139>)
- digest — signature-only-candidate; [electron/engines/backend-identity/snapshot-store.cjs:140](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L140>)
- digest — signature-only-candidate; [electron/engines/backend-identity/snapshot-store.cjs:140](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L140>)
- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:142](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L142>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:24](<../../../../../../../electron/backend-identity.test.cjs#L24>) — file-import-only; coverage not established.

<a id="s-ed9516fc7e10fb38"></a>

## putChunk

[electron/engines/backend-identity/snapshot-store.cjs:146](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L146>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Writes a new content-addressed chunk once, reusing validated unchanged knowledge across snapshot versions.

Purpose evidence: jsdoc.

Exported as: putChunk ([electron/engines/backend-identity/snapshot-store.cjs:1](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L1>)).

Lexical owner: [electron/engines/backend-identity/snapshot-store.cjs](<snapshot-store.cjs.md#s-92351d084d994c00>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| chunk | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [read](<snapshot-store.cjs.md#s-c2efce1b7070b548>) — [electron/engines/backend-identity/snapshot-store.cjs:148](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L148>)
- [writeJson](<../../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/engines/backend-identity/snapshot-store.cjs:156](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L156>)
- [location](<snapshot-store.cjs.md#s-d045ef361cdcece4>) — [electron/engines/backend-identity/snapshot-store.cjs:156](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L156>)

**Called by (statically resolved):**

- [&lt;anonymous@573:116&gt;.&lt;anonymous@574:11&gt;.&lt;anonymous@578:24&gt;](<../../backend-identity.test.cjs.md#s-9d7fd2c5546ba8f7>) — [electron/backend-identity.test.cjs:579](<../../../../../../../electron/backend-identity.test.cjs#L579>)
- [generate.compileIdentity.encodeSource](<identity-compiler.cjs.md#s-ae162f23d69f55da>) — [electron/engines/backend-identity/identity-compiler.cjs:290](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L290>)

Unresolved / external call sites: 3.

- digest — signature-only-candidate; [electron/engines/backend-identity/snapshot-store.cjs:150](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L150>)
- digest — signature-only-candidate; [electron/engines/backend-identity/snapshot-store.cjs:150](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L150>)
- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:151](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L151>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:579](<../../../../../../../electron/backend-identity.test.cjs#L579>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:24](<../../../../../../../electron/backend-identity.test.cjs#L24>) — file-import-only; coverage not established.

<a id="s-aad15ef56f75a7c7"></a>

## publish

[electron/engines/backend-identity/snapshot-store.cjs:159](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L159>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Publishes metadata only after all validated chunks and both indexes are durable. Existing versions remain immutable.

Purpose evidence: jsdoc.

Exported as: publish ([electron/engines/backend-identity/snapshot-store.cjs:1](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L1>)).

Lexical owner: [electron/engines/backend-identity/snapshot-store.cjs](<snapshot-store.cjs.md#s-92351d084d994c00>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| manifest | any | compiler-inferred | required |
| chunks | any | compiler-inferred | required |
| capabilities | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readVersion](<snapshot-store.cjs.md#s-a51351659d223525>) — [electron/engines/backend-identity/snapshot-store.cjs:172](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L172>)
- [writeJson](<../../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/engines/backend-identity/snapshot-store.cjs:179](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L179>)
- [location](<snapshot-store.cjs.md#s-d045ef361cdcece4>) — [electron/engines/backend-identity/snapshot-store.cjs:179](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L179>)
- [writeJson](<../../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/engines/backend-identity/snapshot-store.cjs:180](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L180>)
- [location](<snapshot-store.cjs.md#s-d045ef361cdcece4>) — [electron/engines/backend-identity/snapshot-store.cjs:181](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L181>)
- [writeJson](<../../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/engines/backend-identity/snapshot-store.cjs:184](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L184>)
- [location](<snapshot-store.cjs.md#s-d045ef361cdcece4>) — [electron/engines/backend-identity/snapshot-store.cjs:184](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L184>)
- [index](<snapshot-store.cjs.md#s-0306e55cc435f9ec>) — [electron/engines/backend-identity/snapshot-store.cjs:188](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L188>)
- [index](<snapshot-store.cjs.md#s-0306e55cc435f9ec>) — [electron/engines/backend-identity/snapshot-store.cjs:189](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L189>)
- [read](<snapshot-store.cjs.md#s-c2efce1b7070b548>) — [electron/engines/backend-identity/snapshot-store.cjs:192](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L192>)
- [writeJson](<../../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/engines/backend-identity/snapshot-store.cjs:214](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L214>)
- [location](<snapshot-store.cjs.md#s-d045ef361cdcece4>) — [electron/engines/backend-identity/snapshot-store.cjs:214](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L214>)
- [writeJson](<../../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/engines/backend-identity/snapshot-store.cjs:222](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L222>)
- [location](<snapshot-store.cjs.md#s-d045ef361cdcece4>) — [electron/engines/backend-identity/snapshot-store.cjs:223](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L223>)

**Called by (statically resolved):**

- [&lt;anonymous@183:122&gt;.&lt;anonymous@184:17&gt;](<../../backend-identity.test.cjs.md#s-432a7be95c4ed388>) — [electron/backend-identity.test.cjs:199](<../../../../../../../electron/backend-identity.test.cjs#L199>)
- [generate.compileIdentity](<identity-compiler.cjs.md#s-433e03f963d494bb>) — [electron/engines/backend-identity/identity-compiler.cjs:385](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L385>)

Unresolved / external call sites: 9.

- manifestSchema.parse — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:160](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L160>)
- &#91;manifest, chunks, capabilities&#93;.some — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:161](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L161>)
- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:165](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L165>)
- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:187](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L187>)
- digest — signature-only-candidate; [electron/engines/backend-identity/snapshot-store.cjs:200](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L200>)
- digest — signature-only-candidate; [electron/engines/backend-identity/snapshot-store.cjs:213](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L213>)
- fs.readFile — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:213](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L213>)
- path.join — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:213](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L213>)
- 1 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:199](<../../../../../../../electron/backend-identity.test.cjs#L199>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:24](<../../../../../../../electron/backend-identity.test.cjs#L24>) — file-import-only; coverage not established.

<a id="s-d0c73e94cfb33136"></a>

## publish.&lt;anonymous@162:5&gt;

[electron/engines/backend-identity/snapshot-store.cjs:162](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L162>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [publish](<snapshot-store.cjs.md#s-aad15ef56f75a7c7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- Buffer.byteLength — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:162](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L162>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:162](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L162>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:24](<../../../../../../../electron/backend-identity.test.cjs#L24>) — file-import-only; coverage not established.

<a id="s-ae275b9de6284ebc"></a>

## recordAttempt

[electron/engines/backend-identity/snapshot-store.cjs:233](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L233>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Records the latest explicit compilation attempt separately so a failure cannot replace a good immutable snapshot.

Purpose evidence: jsdoc.

Exported as: recordAttempt ([electron/engines/backend-identity/snapshot-store.cjs:1](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L1>)).

Lexical owner: [electron/engines/backend-identity/snapshot-store.cjs](<snapshot-store.cjs.md#s-92351d084d994c00>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |
| attempt | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [writeJson](<../../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/engines/backend-identity/snapshot-store.cjs:235](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L235>)
- [location](<snapshot-store.cjs.md#s-d045ef361cdcece4>) — [electron/engines/backend-identity/snapshot-store.cjs:236](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L236>)

**Called by (statically resolved):**

- [generate.compileIdentity](<identity-compiler.cjs.md#s-433e03f963d494bb>) — [electron/engines/backend-identity/identity-compiler.cjs:392](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L392>)
- [generate.compileIdentity](<identity-compiler.cjs.md#s-433e03f963d494bb>) — [electron/engines/backend-identity/identity-compiler.cjs:405](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L405>)

Unresolved / external call sites: 2.

- idSchema.parse — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:234](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L234>)
- attemptSchema.parse — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:237](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L237>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:24](<../../../../../../../electron/backend-identity.test.cjs#L24>) — file-import-only; coverage not established.

<a id="s-739f94fed52517ad"></a>

## lastAttempt

[electron/engines/backend-identity/snapshot-store.cjs:241](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L241>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Returns only the most recent manual attempt; this read does not create metadata or compile anything.

Purpose evidence: jsdoc.

Exported as: lastAttempt ([electron/engines/backend-identity/snapshot-store.cjs:1](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L1>)).

Lexical owner: [electron/engines/backend-identity/snapshot-store.cjs](<snapshot-store.cjs.md#s-92351d084d994c00>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [read](<snapshot-store.cjs.md#s-c2efce1b7070b548>) — [electron/engines/backend-identity/snapshot-store.cjs:243](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L243>)

**Called by (statically resolved):**

- [status](<identity-compiler.cjs.md#s-028f3e6557e09194>) — [electron/engines/backend-identity/identity-compiler.cjs:436](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L436>)

Unresolved / external call sites: 1.

- idSchema.parse — external-or-dynamic-dispatch; [electron/engines/backend-identity/snapshot-store.cjs:242](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L242>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:24](<../../../../../../../electron/backend-identity.test.cjs#L24>) — file-import-only; coverage not established.
