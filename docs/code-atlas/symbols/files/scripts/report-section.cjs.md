# scripts/report-section.cjs: symbols

[Atlas](<../../../README.md>) / [Development and acceptance tooling](<../../../modules/tooling.md>) / [scripts/report-section.cjs:1](<../../../../../scripts/report-section.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/report-section.cjs](<report-section.cjs.md#s-cb513d6528884a07>) (Module)
- [reportSection](<report-section.cjs.md#s-832510fa6a604520>) (FunctionDeclaration)

<a id="s-cb513d6528884a07"></a>

## scripts/report-section.cjs

[scripts/report-section.cjs:1](<../../../../../scripts/report-section.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [scripts/report-section.cjs:1](<../../../../../scripts/report-section.cjs#L1>)
- require — module-loader; [scripts/report-section.cjs:2](<../../../../../scripts/report-section.cjs#L2>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-832510fa6a604520"></a>

## reportSection

[scripts/report-section.cjs:5](<../../../../../scripts/report-section.cjs#L5>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Extracts optional historical documentation for an offline Engine package. An explicitly absent report is disclosed in the artifact and points to its bundled README; unreadable/malformed existing reports still abort packaging.

Purpose evidence: jsdoc.

Exported as: reportSection ([scripts/report-section.cjs:1](<../../../../../scripts/report-section.cjs#L1>)).

Lexical owner: [scripts/report-section.cjs](<report-section.cjs.md#s-cb513d6528884a07>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| repository | any | compiler-inferred | required |
| slug | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [main](<build/build-excel-engine.cjs.md#s-c4423626340c2941>) — [scripts/build/build-excel-engine.cjs:106](<../../../../../scripts/build/build-excel-engine.cjs#L106>)
- [main](<build/build-yahoo-financials-engine.cjs.md#s-226388a0515524ab>) — [scripts/build/build-yahoo-financials-engine.cjs:54](<../../../../../scripts/build/build-yahoo-financials-engine.cjs#L54>)

Unresolved / external call sites: 9.

- /^&#91;a-z0-9.-&#93;+$/.test — external-or-dynamic-dispatch; [scripts/report-section.cjs:6](<../../../../../scripts/report-section.cjs#L6>)
- Error — external-or-dynamic-dispatch; [scripts/report-section.cjs:6](<../../../../../scripts/report-section.cjs#L6>)
- fs.readFile — external-or-dynamic-dispatch; [scripts/report-section.cjs:9](<../../../../../scripts/report-section.cjs#L9>)
- path.join — external-or-dynamic-dispatch; [scripts/report-section.cjs:9](<../../../../../scripts/report-section.cjs#L9>)
- text.split — external-or-dynamic-dispatch; [scripts/report-section.cjs:15](<../../../../../scripts/report-section.cjs#L15>)
- Error — external-or-dynamic-dispatch; [scripts/report-section.cjs:16](<../../../../../scripts/report-section.cjs#L16>)
- text.split(marker)&#91;1&#93;.split("\\n---\\n")&#91;0&#93;.trim — external-or-dynamic-dispatch; [scripts/report-section.cjs:17](<../../../../../scripts/report-section.cjs#L17>)
- text.split(marker)&#91;1&#93;.split — external-or-dynamic-dispatch; [scripts/report-section.cjs:17](<../../../../../scripts/report-section.cjs#L17>)
- 1 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
