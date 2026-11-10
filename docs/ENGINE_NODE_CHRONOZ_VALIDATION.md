# Engine node v0.1 implementation and validation

Native chat follow-up added November 6, 2026 (Asia/Jakarta), after the original
November 5 direct-controls milestone. The status table below describes the
current implementation; original direct-controls test history remains below.
See the
[beginner setup guide](ENGINE_NODE_CHRONOZ_SETUP.md) for operation and changed-file
inventory. Existing uncommitted model/provider-settings work was preserved.

## Implementation status

| Status | Scope |
| --- | --- |
| Implemented and tested | Engine palette/canvas, drag/drop, keyboard connector, typed connections, native folder-picker boundary, bounded real probe, UUID instance bindings, revision-protected draft/apply isolation, agent isolation, persistence/restart, removal/disconnect validation, responsive workbench at 1440/1024/680 px. |
| Implemented and tested | Registered CHronoZ Online 1.0.0 execution; strict get_report arguments; real October PARTIAL PDF; latest/no-month and unpublished-month fixture paths; shell:false; sanitized environment; manifest/source/runtime integrity; realpath/symlink checks; checksum, signature and size verification; managed-copy opening boundary; immutable per-run provenance; timeouts, cancellation, application shutdown and concurrency. |
| Implemented but not live-tested | Visible native folder-dialog interaction and launching a real Windows PDF reader. Electron acceptance intercepts the dialog result and shell.openPath to keep the test isolated, asserting the real main/preload/UI path and verified managed PDF path. |
| Implemented and tested | Native function adapters for Ollama, Gemini, NVIDIA NIM and OpenRouter; one strict model-selected get_report call per turn; source-free Engine chats; verified PDF cards in the conversation; cancellation, persistence, replay protection and per-agent permissions. Provider transport fixtures exercise all four formats. |
| Implemented but not live-tested | Remote Gemini, NVIDIA and OpenRouter model-native calls; provider-specific models may reject tools. These adapters have transport-level tests; no live provider entitlement or quota is assumed. |
| Not implemented | Automatic report interpretation, automatic vault/evidence import, mutating/acquisition/scheduler/key operations, additional engine types, multiple CHronoZ nodes per agent, managed-report retention/deletion UI. These are outside v0.1's direct-retrieval path. |

The primary chat wording now reaches a native model tool-selection request.
`chronoz.get_report` is advertised using wire-safe name `chronoz_get_report`.
Electron dispatches only a validated structured function call; model prose or
JSON embedded in text is ignored. A source-free chat has explicit schema 6 and
zero evidence sources; research chat schemas keep their existing source checks.
The backend creates the PDF attachment and status text after verification. It
does not send report text back to the model for interpretation. Direct controls
remain available if a selected model rejects native tool calling.

## Executed checks

### November 6 native-chat follow-up

| Check | Result |
| --- | --- |
| npm.cmd run typecheck | Passed after native chat changes. |
| npm.cmd run build | Passed after the final chat UI changes. |
| npm.cmd test | **397 passed, 0 failed, 2 skipped; 399 total.** The skips remain optional credentialed live OpenRouter/NVIDIA experiments. |
| node --test electron/ai/engine-chat.test.cjs | **10 passed.** Covers all four native provider transports, strict arguments, no text emulation, missing registration, agent isolation/revocation, cancellation, replay/restart, and research fallback with source provenance. |
| node scripts/electron-engine-smoke.cjs <bundle> | Passed with a native Ollama response fixture and **real bundled CHronoZ**. A source-free user chat received the verified October PDF card, opened its managed receipt, and retained the attachment across restart. Construction, probing, responsive layout and removal regressions also passed. |
| node scripts/engine-chat-live.cjs <bundle> | **Passed with real local Ollama qwen3:4b and real bundled CHronoZ**, zero research files. The real model requested chronoz_get_report with month 2026-10; the returned 4,552,137-byte PARTIAL PDF passed verification and persisted in chat. |

The live model run used an 8,192-token context, 2,048 output tokens, temperature
0.7 and the model's default thinking behavior. It used 313 prompt tokens and 754
completion tokens; the measured turn lasted 203,246 ms, including 15,998 ms in the
engine. Only the native call and its strict arguments were executed. Hidden
reasoning was counted for diagnostics but never logged, surfaced or used as
report evidence.

Earlier live probes hit a two-minute deadline or exhausted a deliberately small
512-token output budget without emitting a function call. They executed no
engine. The native path now honors the configured output allowance and sampling
temperature and leaves Ollama's thinking behavior to the selected model, while
discarding reasoning fields. A probe during concurrent CPU-heavy testing also
hit the original 15-second engine startup limit; bounded status probing now
allows 30 seconds. The first chat UI test reached the PDF card but later failed
on a test-only lookup for a Construction card that had been cleared on reopening;
the corrected test explicitly retrieves that card again and passed.

Remote Gemini, NVIDIA and OpenRouter adapters have native transport fixtures but
were not exercised with live account credentials. Gemini uses parametersJsonSchema
for its full JSON Schema declaration, consistent with the
[official function declaration contract](https://ai.google.dev/api/generate-content?hl=en).
Native tool protocols follow the [Ollama tool guide](https://docs.ollama.com/capabilities/tool-calling)
and [OpenRouter tool guide](https://openrouter.ai/docs/guides/features/tool-calling).
No universal per-model tool support or general multi-step agent loop is claimed.

Native-chat evidence:

- [Live model plus real engine acceptance](backend/evidence/engine-chronoz/chat-live.json)
- [Electron chat UI acceptance](backend/evidence/engine-chronoz/chat-ui-acceptance.json)
- [Actual chat attachment screenshot](backend/evidence/engine-chronoz/chat.png)

### Original November 5 direct-controls checks

| Check | Result |
| --- | --- |
| npm.cmd run typecheck | Passed. |
| npm.cmd run build | Passed, including TypeScript, static export, PDF resources and production CSP. Repeated after final runtime/UI changes. |
| npm.cmd test (initial) | 385 passed, 0 failed, 2 optional live-provider tests skipped, before the final extra security test was added. |
| npm.cmd test (intermediate) | 385 passed, 1 failed, 2 skipped. Existing knowledge-store concurrent numbering test encountered Windows EPERM opening .writer.lock. No Engine test failed. |
| node --test electron/ai/knowledge-store.test.cjs electron/ai/engine-registry.test.cjs | 33 passed, 0 failed. Includes successful retry of that existing concurrency test. |
| npm.cmd test (direct-controls final) | 386 passed, 0 failed, 2 skipped, 388 total. Skips are existing optional live OpenRouter/NVIDIA front-office experiments requiring explicit opt-in/dedicated credentials. |
| npm.cmd run test:construction:electron | Build passed; initial Electron launch failed on the command sandbox's Windows AppContainer ACL. Existing script passed when rerun outside the command sandbox with Electron sandboxing retained. |
| node scripts/electron-engine-smoke.cjs <actual portable folder> | Final pass against the real bundled Python and October report. Initial launch hit the same ACL issue; an intermediate test run exposed a stale Playwright locator after app restart, fixed in the test. |
| Targeted Prettier check and git diff --check | Passed for feature changes. |

The initial npm PowerShell wrapper was blocked by local script-execution policy;
all npm checks were subsequently run through npm.cmd. No execution policy or
Windows ACL was changed. The app's Electron sandbox was not disabled.

The real Engine UI test ran after a successful production build, against the
extracted portable package located beside this checkout. It uses a temporary
agent profile and vault; it does not configure the owner's live app profile.
The engine's own Python/reporting implementation and official report were not
modified or copied into Orbistry's distribution.

## Real-bundle evidence

- [Machine-readable acceptance](backend/evidence/engine-chronoz/acceptance.json)
- [Construction screenshot](backend/evidence/engine-chronoz/construction.png)
- [Verified report-card screenshot](backend/evidence/engine-chronoz/report.png)

The October 2026 PDF returned status PARTIAL and exit code 2. Verified size:
**4,552,137 bytes**. Verified SHA-256:

```text
dd85790de3ba02ae2569a7611164f58f748e3ba6a46287754a015d81d733b2cd
```

The test exercised the native-folder-picker call, actual approved bundled Python,
real JSON response, report containment and checksum verification, managed-copy
creation, the opening boundary, restart persistence, agent permission denial,
disconnect validation and removal. No model/API key was needed for retrieval;
provider requests in the Electron harness use the repository's synthetic fetch
fixture. Offline retrieval does not test network acquisition, provider tool calls
or semantic research validity.

Deterministic child-process fixtures separately exercise unsupported operations,
extra arguments, malicious months, alternate engine identities, cross-agent
access, stale revisions, changed interpreter/source/manifest, extra import files,
missing bundle files, junction substitution, escaped report paths, wrong months,
bad hashes, invalid PDF signatures, oversized PDFs, malformed/multiple JSON
responses, oversized stdout/stderr, inconsistent exit codes, timeout,
owner-scoped cancellation, shutdown, contention, and suppression of raw secret
diagnostics in UI/audit output. Original seven-kind profiles still round-trip
through the same schema and existing construction tests.

## Trust and follow-up boundaries

The native folder selection approves local code. Manifest hashes detect
corruption and post-approval substitution; they do not authenticate the publisher.
The interpreter runs as the current Windows user, without an inherited credential
environment or arbitrary command arguments. File checks mitigate path substitution
but are not protection against an administrator racing local filesystem writes.

Native tool selection, authorized dispatch, turn cancellation and conversation
attachments are implemented. This is a single tool invocation, followed by a
backend-authored verified status; no general multi-step model agent loop is
claimed. Report interpretation would additionally need explicit reviewed
evidence import and existing token/source provenance checks.
