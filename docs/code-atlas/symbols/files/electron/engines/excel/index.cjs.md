# electron/engines/excel/index.cjs: symbols

[Atlas](<../../../../../README.md>) / [Built-in Engines and data adapters](<../../../../../modules/engines.md>) / [electron/engines/excel/index.cjs:1](<../../../../../../../electron/engines/excel/index.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/excel/index.cjs](<index.cjs.md#s-8caa24a0b5100de7>) (Module)
- [excel](<index.cjs.md#s-4ad525b82bdaff94>) (FunctionDeclaration)
- [exportWorkbook](<index.cjs.md#s-5fdb06b40561b758>) (FunctionDeclaration)
- [runWorker](<index.cjs.md#s-49e93fb5401a5447>) (FunctionDeclaration)
- [runWorker.processing](<index.cjs.md#s-63f8e141ea6ee9d9>) (FunctionExpression)
- [runWorker.processing.finish](<index.cjs.md#s-419c10a0ad5229e0>) (FunctionDeclaration)
- [runWorker.processing.timeout](<index.cjs.md#s-42c251dd400dea63>) (FunctionExpression)
- [runWorker.processing.message](<index.cjs.md#s-82033507ea5d4844>) (FunctionExpression)
- [runWorker.processing.failed](<index.cjs.md#s-3e1634ffd5b13c32>) (FunctionExpression)
- [runWorker.processing.exited](<index.cjs.md#s-e022ed5439d697cb>) (FunctionExpression)

<a id="s-8caa24a0b5100de7"></a>

## electron/engines/excel/index.cjs

[electron/engines/excel/index.cjs:1](<../../../../../../../electron/engines/excel/index.cjs#L1>) · Module · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- require — module-loader; [electron/engines/excel/index.cjs:1](<../../../../../../../electron/engines/excel/index.cjs#L1>)
- require — module-loader; [electron/engines/excel/index.cjs:2](<../../../../../../../electron/engines/excel/index.cjs#L2>)
- require — module-loader; [electron/engines/excel/index.cjs:3](<../../../../../../../electron/engines/excel/index.cjs#L3>)
- require — module-loader; [electron/engines/excel/index.cjs:4](<../../../../../../../electron/engines/excel/index.cjs#L4>)
- Object.freeze — external-or-dynamic-dispatch; [electron/engines/excel/index.cjs:5](<../../../../../../../electron/engines/excel/index.cjs#L5>)

**Related tests / acceptance harnesses:**

- [electron/excel-engine.test.cjs:13](<../../../../../../../electron/excel-engine.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-4ad525b82bdaff94"></a>

## excel

[electron/engines/excel/index.cjs:15](<../../../../../../../electron/engines/excel/index.cjs#L15>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Runs offline XLSX extraction in a disposable bounded worker. Accepts a local filename or bytes plus options.filename; rejects unsupported modes, limits and corrupt content.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/excel/index.cjs](<index.cjs.md#s-8caa24a0b5100de7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |
| options | {} | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runWorker](<index.cjs.md#s-49e93fb5401a5447>) — [electron/engines/excel/index.cjs:22](<../../../../../../../electron/engines/excel/index.cjs#L22>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- Error — external-or-dynamic-dispatch; [electron/engines/excel/index.cjs:17](<../../../../../../../electron/engines/excel/index.cjs#L17>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/index.cjs:19](<../../../../../../../electron/engines/excel/index.cjs#L19>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/index.cjs:21](<../../../../../../../electron/engines/excel/index.cjs#L21>)

**Related tests / acceptance harnesses:**

- [electron/excel-engine.test.cjs:13](<../../../../../../../electron/excel-engine.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-5fdb06b40561b758"></a>

## exportWorkbook

[electron/engines/excel/index.cjs:26](<../../../../../../../electron/engines/excel/index.cjs#L26>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Exports an extracted model in a background worker. valuesOnly selects formatted final text for Portal exports. Invalid formats or option types throw.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/excel/index.cjs](<index.cjs.md#s-8caa24a0b5100de7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| model | any | compiler-inferred | required |
| format | any | compiler-inferred | required |
| { valuesOnly = false } | { valuesOnly?: boolean; } | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runWorker](<index.cjs.md#s-49e93fb5401a5447>) — [electron/engines/excel/index.cjs:31](<../../../../../../../electron/engines/excel/index.cjs#L31>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- &#91;"markdown", "structured"&#93;.includes — external-or-dynamic-dispatch; [electron/engines/excel/index.cjs:27](<../../../../../../../electron/engines/excel/index.cjs#L27>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/index.cjs:28](<../../../../../../../electron/engines/excel/index.cjs#L28>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/index.cjs:30](<../../../../../../../electron/engines/excel/index.cjs#L30>)

**Related tests / acceptance harnesses:**

- [electron/excel-engine.test.cjs:13](<../../../../../../../electron/excel-engine.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-49e93fb5401a5447"></a>

## runWorker

[electron/engines/excel/index.cjs:35](<../../../../../../../electron/engines/excel/index.cjs#L35>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Owns one worker's bounded lifecycle for extraction or derived export, surfacing timeouts and unexpected exits.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/excel/index.cjs](<index.cjs.md#s-8caa24a0b5100de7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| data | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [excel](<index.cjs.md#s-4ad525b82bdaff94>) — [electron/engines/excel/index.cjs:22](<../../../../../../../electron/engines/excel/index.cjs#L22>)
- [exportWorkbook](<index.cjs.md#s-5fdb06b40561b758>) — [electron/engines/excel/index.cjs:31](<../../../../../../../electron/engines/excel/index.cjs#L31>)

Unresolved / external call sites: 1.

- Promise — external-or-dynamic-dispatch; [electron/engines/excel/index.cjs:36](<../../../../../../../electron/engines/excel/index.cjs#L36>)

**Related tests / acceptance harnesses:**

- [electron/excel-engine.test.cjs:13](<../../../../../../../electron/excel-engine.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-63f8e141ea6ee9d9"></a>

## runWorker.processing

[electron/engines/excel/index.cjs:36](<../../../../../../../electron/engines/excel/index.cjs#L36>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runWorker](<index.cjs.md#s-49e93fb5401a5447>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| resolve | any | compiler-inferred | required |
| reject | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- Worker — external-or-dynamic-dispatch; [electron/engines/excel/index.cjs:37](<../../../../../../../electron/engines/excel/index.cjs#L37>)
- path.join — external-or-dynamic-dispatch; [electron/engines/excel/index.cjs:37](<../../../../../../../electron/engines/excel/index.cjs#L37>)
- setTimeout — external-or-dynamic-dispatch; [electron/engines/excel/index.cjs:51](<../../../../../../../electron/engines/excel/index.cjs#L51>)
- worker.once — external-or-dynamic-dispatch; [electron/engines/excel/index.cjs:54](<../../../../../../../electron/engines/excel/index.cjs#L54>)
- worker.once — external-or-dynamic-dispatch; [electron/engines/excel/index.cjs:57](<../../../../../../../electron/engines/excel/index.cjs#L57>)
- worker.once — external-or-dynamic-dispatch; [electron/engines/excel/index.cjs:60](<../../../../../../../electron/engines/excel/index.cjs#L60>)

**Related tests / acceptance harnesses:**

- [electron/excel-engine.test.cjs:13](<../../../../../../../electron/excel-engine.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-419c10a0ad5229e0"></a>

## runWorker.processing.finish

[electron/engines/excel/index.cjs:43](<../../../../../../../electron/engines/excel/index.cjs#L43>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Settles the caller once and releases the worker and timeout on both success and failure.

Purpose evidence: jsdoc.

Lexical owner: [runWorker.processing](<index.cjs.md#s-63f8e141ea6ee9d9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |
| result | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [runWorker.processing.timeout](<index.cjs.md#s-42c251dd400dea63>) — [electron/engines/excel/index.cjs:52](<../../../../../../../electron/engines/excel/index.cjs#L52>)
- [runWorker.processing.message](<index.cjs.md#s-82033507ea5d4844>) — [electron/engines/excel/index.cjs:55](<../../../../../../../electron/engines/excel/index.cjs#L55>)
- [runWorker.processing.failed](<index.cjs.md#s-3e1634ffd5b13c32>) — [electron/engines/excel/index.cjs:58](<../../../../../../../electron/engines/excel/index.cjs#L58>)
- [runWorker.processing.exited](<index.cjs.md#s-e022ed5439d697cb>) — [electron/engines/excel/index.cjs:62](<../../../../../../../electron/engines/excel/index.cjs#L62>)

Unresolved / external call sites: 4.

- clearTimeout — external-or-dynamic-dispatch; [electron/engines/excel/index.cjs:46](<../../../../../../../electron/engines/excel/index.cjs#L46>)
- worker.terminate — external-or-dynamic-dispatch; [electron/engines/excel/index.cjs:47](<../../../../../../../electron/engines/excel/index.cjs#L47>)
- reject — external-or-dynamic-dispatch; [electron/engines/excel/index.cjs:48](<../../../../../../../electron/engines/excel/index.cjs#L48>)
- resolve — external-or-dynamic-dispatch; [electron/engines/excel/index.cjs:49](<../../../../../../../electron/engines/excel/index.cjs#L49>)

**Related tests / acceptance harnesses:**

- [electron/excel-engine.test.cjs:13](<../../../../../../../electron/excel-engine.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-42c251dd400dea63"></a>

## runWorker.processing.timeout

[electron/engines/excel/index.cjs:51](<../../../../../../../electron/engines/excel/index.cjs#L51>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runWorker.processing](<index.cjs.md#s-63f8e141ea6ee9d9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runWorker.processing.finish](<index.cjs.md#s-419c10a0ad5229e0>) — [electron/engines/excel/index.cjs:52](<../../../../../../../electron/engines/excel/index.cjs#L52>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [electron/engines/excel/index.cjs:52](<../../../../../../../electron/engines/excel/index.cjs#L52>)

**Related tests / acceptance harnesses:**

- [electron/excel-engine.test.cjs:13](<../../../../../../../electron/excel-engine.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-82033507ea5d4844"></a>

## runWorker.processing.message

[electron/engines/excel/index.cjs:54](<../../../../../../../electron/engines/excel/index.cjs#L54>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runWorker.processing](<index.cjs.md#s-63f8e141ea6ee9d9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| response | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runWorker.processing.finish](<index.cjs.md#s-419c10a0ad5229e0>) — [electron/engines/excel/index.cjs:55](<../../../../../../../electron/engines/excel/index.cjs#L55>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [electron/engines/excel/index.cjs:55](<../../../../../../../electron/engines/excel/index.cjs#L55>)

**Related tests / acceptance harnesses:**

- [electron/excel-engine.test.cjs:13](<../../../../../../../electron/excel-engine.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-3e1634ffd5b13c32"></a>

## runWorker.processing.failed

[electron/engines/excel/index.cjs:57](<../../../../../../../electron/engines/excel/index.cjs#L57>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runWorker.processing](<index.cjs.md#s-63f8e141ea6ee9d9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runWorker.processing.finish](<index.cjs.md#s-419c10a0ad5229e0>) — [electron/engines/excel/index.cjs:58](<../../../../../../../electron/engines/excel/index.cjs#L58>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [electron/engines/excel/index.cjs:58](<../../../../../../../electron/engines/excel/index.cjs#L58>)

**Related tests / acceptance harnesses:**

- [electron/excel-engine.test.cjs:13](<../../../../../../../electron/excel-engine.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-e022ed5439d697cb"></a>

## runWorker.processing.exited

[electron/engines/excel/index.cjs:60](<../../../../../../../electron/engines/excel/index.cjs#L60>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runWorker.processing](<index.cjs.md#s-63f8e141ea6ee9d9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| code | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runWorker.processing.finish](<index.cjs.md#s-419c10a0ad5229e0>) — [electron/engines/excel/index.cjs:62](<../../../../../../../electron/engines/excel/index.cjs#L62>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [electron/engines/excel/index.cjs:63](<../../../../../../../electron/engines/excel/index.cjs#L63>)

**Related tests / acceptance harnesses:**

- [electron/excel-engine.test.cjs:13](<../../../../../../../electron/excel-engine.test.cjs#L13>) — file-import-only; coverage not established.
