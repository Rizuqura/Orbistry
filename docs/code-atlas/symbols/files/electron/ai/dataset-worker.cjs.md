# electron/ai/dataset-worker.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/dataset-worker.cjs:1](<../../../../../../electron/ai/dataset-worker.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/dataset-worker.cjs](<dataset-worker.cjs.md#s-29cf5b201477764a>) (Module)
- [&lt;anonymous@4:26&gt;](<dataset-worker.cjs.md#s-3a61c597cfb634de>) (ArrowFunction)
- [&lt;anonymous@4:26&gt;.&lt;anonymous@8:27&gt;](<dataset-worker.cjs.md#s-b4842ad69cdfd444>) (ArrowFunction)
- [&lt;anonymous@4:26&gt;.&lt;anonymous@21:27&gt;](<dataset-worker.cjs.md#s-e64191ff4f4ce01b>) (ArrowFunction)

<a id="s-29cf5b201477764a"></a>

## electron/ai/dataset-worker.cjs

[electron/ai/dataset-worker.cjs:1](<../../../../../../electron/ai/dataset-worker.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- require — module-loader; [electron/ai/dataset-worker.cjs:1](<../../../../../../electron/ai/dataset-worker.cjs#L1>)
- require — module-loader; [electron/ai/dataset-worker.cjs:2](<../../../../../../electron/ai/dataset-worker.cjs#L2>)
- Map — external-or-dynamic-dispatch; [electron/ai/dataset-worker.cjs:3](<../../../../../../electron/ai/dataset-worker.cjs#L3>)
- parentPort.on — external-or-dynamic-dispatch; [electron/ai/dataset-worker.cjs:4](<../../../../../../electron/ai/dataset-worker.cjs#L4>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3a61c597cfb634de"></a>

## &lt;anonymous@4:26&gt;

[electron/ai/dataset-worker.cjs:4](<../../../../../../electron/ai/dataset-worker.cjs#L4>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/dataset-worker.cjs](<dataset-worker.cjs.md#s-29cf5b201477764a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { id, method, sources, queries } | { id: any; method: any; sources: any; queries: any; } | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- sources.map — external-or-dynamic-dispatch; [electron/ai/dataset-worker.cjs:8](<../../../../../../electron/ai/dataset-worker.cjs#L8>)
- Array.isArray — external-or-dynamic-dispatch; [electron/ai/dataset-worker.cjs:19](<../../../../../../electron/ai/dataset-worker.cjs#L19>)
- Error — external-or-dynamic-dispatch; [electron/ai/dataset-worker.cjs:20](<../../../../../../electron/ai/dataset-worker.cjs#L20>)
- queries.map — external-or-dynamic-dispatch; [electron/ai/dataset-worker.cjs:21](<../../../../../../electron/ai/dataset-worker.cjs#L21>)
- Error — external-or-dynamic-dispatch; [electron/ai/dataset-worker.cjs:29](<../../../../../../electron/ai/dataset-worker.cjs#L29>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/dataset-worker.cjs:30](<../../../../../../electron/ai/dataset-worker.cjs#L30>)
- Error — external-or-dynamic-dispatch; [electron/ai/dataset-worker.cjs:32](<../../../../../../electron/ai/dataset-worker.cjs#L32>)
- parentPort.postMessage — external-or-dynamic-dispatch; [electron/ai/dataset-worker.cjs:35](<../../../../../../electron/ai/dataset-worker.cjs#L35>)
- 1 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b4842ad69cdfd444"></a>

## &lt;anonymous@4:26&gt;.&lt;anonymous@8:27&gt;

[electron/ai/dataset-worker.cjs:8](<../../../../../../electron/ai/dataset-worker.cjs#L8>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@4:26&gt;](<dataset-worker.cjs.md#s-3a61c597cfb634de>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: { rowCount: any; delimiter: any; columns: any; sample: any; sampleOnly: boolean; conventions: string; sourceId: any; relativePath: any; contentHash: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parseCsv](<dataset-engine.cjs.md#s-f70539a577c02a73>) — [electron/ai/dataset-worker.cjs:9](<../../../../../../electron/ai/dataset-worker.cjs#L9>)
- [describe](<dataset-engine.cjs.md#s-73720344763fe3b2>) — [electron/ai/dataset-worker.cjs:15](<../../../../../../electron/ai/dataset-worker.cjs#L15>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- datasets.set — external-or-dynamic-dispatch; [electron/ai/dataset-worker.cjs:10](<../../../../../../electron/ai/dataset-worker.cjs#L10>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e64191ff4f4ce01b"></a>

## &lt;anonymous@4:26&gt;.&lt;anonymous@21:27&gt;

[electron/ai/dataset-worker.cjs:21](<../../../../../../electron/ai/dataset-worker.cjs#L21>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@4:26&gt;](<dataset-worker.cjs.md#s-3a61c597cfb634de>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: { rowCount: any; delimiter: any; columns: any; sample: any; sampleOnly: boolean; conventions: string; totalRows: any; matchedRows: any; filters: any; operation: any; sourceId: any; } &#124; { columns: any; results: any; resultCount: any; offset: any; limit: any; truncated: boolean; sort: any; numericPrecision: string; totalRows: any; matchedRows: any; filters: any; operation: any; sourceId: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [query](<dataset-engine.cjs.md#s-576582b2e04147d3>) — [electron/ai/dataset-worker.cjs:26](<../../../../../../electron/ai/dataset-worker.cjs#L26>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- datasets.has — external-or-dynamic-dispatch; [electron/ai/dataset-worker.cjs:22](<../../../../../../electron/ai/dataset-worker.cjs#L22>)
- Error — external-or-dynamic-dispatch; [electron/ai/dataset-worker.cjs:23](<../../../../../../electron/ai/dataset-worker.cjs#L23>)
- datasets.get — external-or-dynamic-dispatch; [electron/ai/dataset-worker.cjs:26](<../../../../../../electron/ai/dataset-worker.cjs#L26>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
