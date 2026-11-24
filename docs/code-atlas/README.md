# Orbistry Code Atlas v1

A generated map of the existing implementation for architecture review and task delegation. Start with the architecture routes, choose an owning module, then follow a symbol to its implementation, contracts, callers, callees and associated tests.

- [Architecture map, execution routes, findings and cleanup priorities](<architecture-map.md>)
- [Contract index](<contracts/README.md>) and [Electron IPC entry points](<contracts/electron-ipc.md>)
- [Module dependency graph](<graphs/module-dependencies.svg>) (row imports column)
- [Function call graph excerpt](<graphs/call-graph.svg>) and [complete call-site graph](<graphs/call-edges.json>)
- [Machine-readable symbol, source, import and unresolved-call index](<symbols/symbol-index.json>)
- [Data format, generator components and maintenance guide](<contracts/atlas-format.md>)

## Regenerate and check

```sh
npm run atlas:generate
npm run atlas:check
npm run test:atlas
```

Requires the existing development install (Node, TypeScript and ripgrep on PATH), plus the native PowerShell parser: Windows PowerShell on Windows, or pwsh on other systems. No additional npm dependencies or application runtime processes are introduced. The development generator starts a parser process for PowerShell text only. Run from the repository root. Generation writes only owned docs/code-atlas files. Check mode regenerates in memory, compares exact bytes, validates generated Markdown/SVG links and source-line anchors, and fails for stale, missing or unexpected artifacts. It does not modify files.

Output order, IDs, LF encoding and graph layout are deterministic for the same source bytes, inventory and installed TypeScript version. There are no wall-clock timestamps or absolute machine paths. Source location IDs change when declarations move; they are navigation IDs, not persistent application identities. Generated content indexes the current working tree, including uncommitted sources.

## Discovery scope

517 inventoried repository files; 418 analyzed source files (2 PowerShell, remainder JavaScript/TypeScript); 7991 symbols including file scopes; 7117 callable declarations; 354 TypeScript/Zod contract declarations; 895 compiler-observed/literal-bridge exports.

7051 statically resolved call sites; 32567 unresolved/external call sites; 2074 import/re-export/require sites; 246 IPC observations. 6098 callable declarations have no purpose JSDoc. These are discovery counts, not code-quality scores or coverage measurements.

Discovery uses rg --files --hidden with repository ignore rules plus explicit exclusions for dependencies, generated output, Atlas output, temporary files, credentials, application state and Universe data. TypeScript AST analysis covers JS, JSX, CJS, MJS, TS, TSX, CTS and MTS, including tests, scripts, declarations, examples and root configuration. Native PowerShell AST analysis adds the Windows OCR helper and parser-tool script without executing them. Other inventoried formats (CSS, Markdown, YAML, images and generic JSON) are listed but are not parsed as JS/TS. Relevant Engine JSON schemas/manifests are indexed separately. Ignored local files and third-party/vendor source are not repository implementation evidence.

AST parse diagnostics: 0. No indexed source syntax errors reported.

## Evidence and limitations

| Label | Meaning |
| --- | --- |
| static-declaration | Local checker resolves a call expression to an indexed implementation. A potential static edge, not proof it ran. |
| powershell-static-command | Native AST command name matches one local function declaration. PowerShell runtime shadowing/redefinition is not resolved. |
| annotation / typescript-declaration | Explicit source type syntax. Types do not replace runtime validators. |
| compiler-inferred | Approximate local inference without standard-library or third-party types; may be any/unknown or incomplete. |
| jsdoc / undocumented | Purpose copied from an existing documentation comment, or a visible documentation gap. |
| local-wrapper / literal-operation-table expansion | IPC name derived from a bound wrapper or literal table, not a function-call edge. |
| dynamic-unresolved / external-or-dynamic-dispatch | No unique local implementation established; includes injected methods, external libraries, callbacks and computed access. |
| signature-only-candidate | Compiler signature suggests a declaration, but no unique bound implementation is established. Candidate retained outside the verified graph. |
| static-call-site / file-import-only | A test/harness association; execution and coverage are not proven. |
| Editorial ownership / reviewed route | Human-readable interpretation backed by linked source, kept separate from AST facts. |

Anonymous functions, object methods and nested closures have source-location labels and lexical owners. Passing a callback is not recorded as invoking it. Declaration-only methods and function types are indexed as contracts, not executed implementations. Re-exports resolve through compiler declarations and explicit literal CommonJS bridges; dynamic export spreads/assignments may stay unresolved. Injected/defaulted function parameters, conditional/union callees and accessor-returned functions do not acquire a verified callee from signature inference alone. Interpolated imports, IPC, workers, dependency injection, runtime reassignment, reflection and provider behavior cannot be fully resolved statically. External symbol details are deliberately not loaded. Large JSON arrays use one record per line to limit generated size; symbol pages are split by source file for navigation.

The SVG call graph is a bounded excerpt: up to two distinct caller/callee pairs for reviewed Engine/assignment/Identity entry functions (preferring non-utility callees), followed by one cross-module pair per selected production module. Selection and tie-breaking are deterministic; the reviewed seed list is in scripts/code-atlas/graphs.cjs. It does not imply exhaustive execution paths. Every resolved site, including same-module, test and tool calls, is preserved in call-edges.json and the symbol detail pages. The dependency SVG includes literal runtime production imports (including lazy imports), excludes type/test/tool imports and shows no permission relationship.

The generator checks syntax and documentation links. It does not replace application tests, runtime authorization review, live provider verification or performance measurement. No runtime performance improvement is claimed.

## Modules

| Module | Responsibility | Navigation |
| --- | --- | --- |
| [Entity UI](<modules/portal-entities.md>) | Edits Entity metadata, source assignments and navigation. | [Symbols](<symbols/portal-entities.md>) |
| [Knowledge Cards and readers](<modules/portal-knowledge.md>) | Presents applied indexes, source readers and existing data views. | [Symbols](<symbols/portal-knowledge.md>) |
| [Portal shell](<modules/portal-shell.md>) | Composes the static React application, navigation, dialogs and workspace surfaces. | [Symbols](<symbols/portal-shell.md>) |
| [WorldView and Knowledge Cards (Portal)](<modules/portal-worldview.md>) | Presents Entities, relationships, applied indexes, Knowledge Cards and data previews. | [Symbols](<symbols/portal-worldview.md>) |
| [Agent workspace and construction (Portal)](<modules/portal-agents.md>) | Presents assigned-agent conversations, assignment controls and retained agent construction. | [Symbols](<symbols/portal-agents.md>) |
| [Conversation presentation](<modules/portal-chat.md>) | Owns conversation rendering, bridge connection, state hooks and history controls. | [Symbols](<symbols/portal-chat.md>) |
| [Settings and Engine list](<modules/portal-settings.md>) | Presents provider settings and read-only Engine catalog discovery. | [Symbols](<symbols/portal-settings.md>) |
| [Document workspace](<modules/portal-documents.md>) | Presents Vault documents, PDF navigation and the knowledge sidebar. | [Symbols](<symbols/portal-documents.md>) |
| [Electron composition and IPC security](<modules/desktop.md>) | Composes backend services, creates isolated windows and exposes the narrow desktop bridge. | [Symbols](<symbols/desktop.md>) |
| [WorldView persistence and IPC](<modules/worldview.md>) | Owns Entity records, source associations and validated WorldView operations. | [Symbols](<symbols/worldview.md>) |
| [Vault and stations](<modules/vault.md>) | Owns controlled file access, Vault settings, stations, source bindings and OCR adapters. | [Symbols](<symbols/vault.md>) |
| [Knowledge indexing and source access](<modules/knowledge.md>) | Parses applied index declarations and resolves authorized source references and editor state. | [Symbols](<symbols/knowledge.md>) |
| [Connectors](<modules/connectors.md>) | Persists explicit relationship metadata; relationships do not grant endpoint permissions. | [Symbols](<symbols/connectors.md>) |
| [Engine package registry](<modules/engine-registry.md>) | Validates packages, signatures, local trust and Entity links; dispatches workers and persists receipts. | [Symbols](<symbols/engine-registry.md>) |
| [Backend Identity Engine](<modules/identity.md>) | Compiles versioned Entity identity/knowledge snapshots and exposes scoped retrieval/capability contracts. | [Symbols](<symbols/identity.md>) |
| [Built-in Engines and data adapters](<modules/engines.md>) | Owns deterministic native dispatch, parsing, indexing and market-data integration services. | [Symbols](<symbols/engines.md>) |
| [Assigned Agents and jurisdiction](<modules/agents.md>) | Owns Entity assignment, construction, scoped consultation, proposals and authorized execution integration. | [Symbols](<symbols/agents.md>) |
| [Model-provider adapters](<modules/providers.md>) | Isolates optional inference transports from deterministic application services. | [Symbols](<symbols/providers.md>) |
| [Retained AI runtime](<modules/ai-runtime.md>) | Owns optional model configuration, context, conversation stores and legacy/experimental runtime modules. Presence does not imply active composition. | [Symbols](<symbols/ai-runtime.md>) |
| [Shared deterministic infrastructure](<modules/shared.md>) | Owns neutral persistence, validation, errors and context arithmetic with compatibility exports retained elsewhere. | [Symbols](<symbols/shared.md>) |
| [Cross-boundary TypeScript contracts](<modules/contracts.md>) | Declares renderer/backend DTOs and public types; declarations do not implement authorization. | [Symbols](<symbols/contracts.md>) |
| [Development and acceptance tooling](<modules/tooling.md>) | Owns CLI commands, package/build tooling, architecture checks, Atlas generation and acceptance harnesses. | [Symbols](<symbols/tooling.md>) |
| [Engine authoring examples](<modules/examples.md>) | Provides a package-format example independent of the application runtime. | [Symbols](<symbols/examples.md>) |
| [Repository configuration](<modules/configuration.md>) | Declares application build, styling and compiler integration settings. | [Symbols](<symbols/configuration.md>) |

## External package declarations

Versions below are package.json declarations, not an installed-version or vulnerability audit.

| Package | Declared version | Scope |
| --- | --- | --- |
| @napi-rs/canvas | ^1.0.13 | dependencies |
| js-yaml | ^4.3.2 | dependencies |
| pdfjs-dist | ^6.2.108 | dependencies |
| sax | 1.6.1 | dependencies |
| ssf | 0.11.2 | dependencies |
| unzipper | 0.12.5 | dependencies |
| yahoo-finance2 | 4.0.6 | dependencies |
| zod | ^4.6.7 | dependencies |
| @tailwindcss/postcss | ^4.3.3 | devDependencies |
| @types/node | ^22.0.0 | devDependencies |
| @types/react | ^19.0.0 | devDependencies |
| @types/react-dom | ^19.0.0 | devDependencies |
| concurrently | ^10.0.6 | devDependencies |
| cross-env | ^7.0.3 | devDependencies |
| electron | 45.1.0 | devDependencies |
| electron-builder | ^26.18.0 | devDependencies |
| next | ^16.4.5 | devDependencies |
| playwright | ^1.63.0 | devDependencies |
| postcss | ^8.5.32 | devDependencies |
| prettier | ^3.9.6 | devDependencies |
| react | ^19.3.1 | devDependencies |
| react-dom | ^19.3.1 | devDependencies |
| tailwindcss | ^4.0.0 | devDependencies |
| typescript | ^5.0.0 | devDependencies |
| wait-on | ^9.5.1 | devDependencies |

Generator implementation: [CLI](<../../scripts/code-atlas.cjs>) and [generation/check service](<../../scripts/code-atlas/generate.cjs>). Engineering contract: [ORB-ARCH-001](<../../AGENTS.md>).

