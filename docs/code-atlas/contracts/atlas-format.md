# Atlas data format and maintenance

[Atlas](<../README.md>) / [Symbol index](<../symbols/symbol-index.json>)

## Machine-readable records

The indexes use schemaVersion: 1. Repository paths use forward slashes. Lines and columns are one-based. IDs identify source locations, not persistent application objects. All cross-references use exact symbol IDs; duplicate display names must not be merged.

| File / field | Contract |
| --- | --- |
| symbol-index.json: inventory | Ignored-aware, bounded list of repository paths; includes non-code assets without parsing them as JavaScript. |
| files | Source path, editorial module, role, UTF-8 bytes, SHA-256, line count and symbol IDs. Hashes detect source drift; they do not prove trusted authorship. |
| symbols | ID, anchor, name, qualifiedName, kind, file/line/column/endLine, owning module/lexical owner, purpose evidence, export references, caller/callee references and test associations. Callable records add parameter/return contracts, async and body-presence flags. |
| symbols[].parameters / returns | Explicit annotations when present; otherwise bounded local compiler inference. Default values are indicated, not reproduced. External/global types are not loaded. |
| symbols[].contract | Exact TypeScript declaration or candidate Zod initializer syntax, with evidence classification. No schema evaluation. |
| dependencies | From-file, source line, syntax kind, typeOnly/deferred flags, literal specifier and inventory-backed target, or explicit external/unresolved status. |
| exports | Compiler-observed or literal CommonJS re-export name with targetId where resolved. Unresolved/data exports remain visible. |
| calls | Potential statically bound caller/callee pair, call/construct kind, source location and optional-call flag. Neither runtime reachability nor execution is established. |
| unresolvedCalls | Call site plus reason and optional candidateId. A signature-only candidate is an inference and is deliberately excluded from verified call edges. |
| ipc | Channel or dynamic pattern, handler/invoke/event kind, source, lexical owner, handler/operation symbol references where resolved and expansion evidence. |
| contract-index.json | TypeScript/Zod declarations, parsed Engine JSON format artifacts and IPC records. |
| module-edges.json | Module catalog and aggregated production runtime import sites with original file/line evidence. |
| call-edges.json | Complete resolved call-site edges; symbol metadata and unresolved sites are referenced through symbolIndex to avoid a duplicate store. svgExcerpt records the exact displayed subset. |
| generated-files.json | Generator-owned artifact list used to identify obsolete output and preserve unexpected manual files. |

Test associations carry coverageProven: false. A direct file import does not prove that a particular symbol was tested. A completed analyzer run cannot attest to a provider, an authorization decision or a completed Engine execution.

## Generator components

1. [CLI](<../../../scripts/code-atlas.cjs>) accepts generation or --check, reports failures through a nonzero exit code and never starts the application.
2. [Generation service](<../../../scripts/code-atlas/generate.cjs>) inventories source, builds artifacts in memory, verifies links and performs bounded output writes. It rejects linked output directories and preserves unowned files.
3. [AST analyzer](<../../../scripts/code-atlas/analyze.cjs>) creates a repository-only TypeScript program, indexes declarations and resolves bound call/import/export relationships. Source bodies are not evaluated.
4. [IPC discovery](<../../../scripts/code-atlas/ipc.cjs>) recognizes direct channels, the bound AI registration wrapper and finite WorldView operation tables. Dynamic strings remain patterns.
5. [PowerShell adapter](<../../../scripts/code-atlas/powershell.cjs>) runs the native parser against text only. The helper script uses System.Management.Automation.Language.Parser; it does not execute or import the indexed scripts. Script/function parameters and local literal command calls are indexed. Member/.NET/external/dynamic commands remain unresolved; pipeline return types and parameter optionality are not inferred.
6. [Ownership catalog](<../../../scripts/code-atlas/catalog.cjs>) assigns existing paths to editorial modules. Adjust this small map when source ownership changes; do not move source files to fit the Atlas.
7. [Documentation renderer](<../../../scripts/code-atlas/render.cjs>) and [SVG renderer](<../../../scripts/code-atlas/graphs.cjs>) create relative navigation, source-backed reviewed routes and deterministic diagrams.

To update the Atlas, change source normally, regenerate, inspect the relevant module and symbol pages, then run atlas:check. Commit generator changes and regenerated artifacts together. For a new module, update the ownership catalog and reviewed narrative only where source evidence supports it. The architecture narrative fails generation when a required source/symbol reference disappears; review the route instead of substituting a similarly named function.

CI can run npm ci, npm run test:atlas and npm run atlas:check with ripgrep and Windows PowerShell (or pwsh on other systems) installed. The existing TypeScript development dependency and lockfile supply the JS/TS parser; there is no new production dependency. Generated indexes may be sizeable because tests, tools and anonymous closures are included. Per-file Markdown pages and one-record-per-line JSON keep navigation and diffs bounded.

## Debug Audit: conservative call resolution

**Component:** Atlas AST analyzer (new development tooling).
**Affected files:** [analyze.cjs](<../../../scripts/code-atlas/analyze.cjs>) and [Atlas regression fixtures](<../../../scripts/code-atlas/atlas.test.cjs>).
**Observed error:** An early fixture showed compiler signature inference selecting alpha for a defaulted function parameter or a conditional alpha/beta call.
**Root cause:** A signature declaration describes the callable shape and may refer to one inferred branch; it does not establish a unique bound runtime implementation.
**Changes applied:** Only bound local declarations create verified call edges. Signature-only candidates remain unresolved records. Accessor-returned functions are not mislabeled as direct calls to getter bodies. Literal CommonJS re-export bridges are expanded separately.
**Verification:** Deterministic fixtures assert imported aliases, constructors/methods, CommonJS bridges, defaulted/injected/conditional calls, callback passing, accessor dispatch, shadowed require, IPC expansion, reproducibility, stale output and link validation.
**Remaining risks:** Static analysis cannot prove runtime execution, handle arbitrary reassignment or resolve every injected/dynamic call. Those limits remain explicit in every graph/index.
