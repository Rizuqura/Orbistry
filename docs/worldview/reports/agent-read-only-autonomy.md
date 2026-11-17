# Automatic read access and identity refresh

Updated 17 November 2026 following the user's standing authorization: agents may use engines for reads without repeated approval and may rebuild their entity's Backend Identity before informing the user. This supersedes the per-invocation approval instructions in the earlier runtime diagnostic.

## Behavior

- New Engine nodes default to **Automatic read-only access** (`read-only-auto`). Existing **Disabled** and **Read-only with human approval** modes remain meaningful when deliberately selected.
- A model's valid `engine.request` executes immediately for an applied, connected automatic node with a matching configured read capability. The result returns to the model in the same turn; no approval card or “Yes, please” is needed.
- Automatic execution currently supports the existing entity adapters: `daily-price / price`, `yahoo-financials / financials`, and `yahoo-financials / earnings`. A registered engine without an entity adapter or a matching declaration remains unavailable; permission does not invent a source binding. Quote/history/Excel/CHronoZ adapter coverage is unchanged.
- `engine.readResult` reads an already completed result, with exact JSON field paths, pagination, assignment/version checks and hash verification. Large financial outputs can be read in pages without rerunning the engine. Price results retain their compact canonical receipt.
- Before every chat turn, the host checks the **whole assigned Backend Identity**. Missing or stale identity is regenerated through the existing compiler, covering entity metadata, applied sources/chunks, relationships and capabilities. This also works before the first response when no identity has been generated manually.
- Fresh identity is reused rather than rewritten. Existing compiler limits and reference-only/missing/restricted-source classifications remain in force; freshness does not guarantee every source is readable. The applied Knowledge Card index remains authoritative. Refresh does not automatically assign new files or apply draft declarations.
- Source or graph changes during an operation still invalidate old evidence/authority. A failed refresh stops inference with an actionable error. It does not fall back to an outdated answer. A source change during inference rejects the outdated response; the next turn refreshes again.

Standing permission permits provider reads and their normal derived caches, execution receipts and identity snapshots. The agent receives no interface to edit documents, entity settings, source assignments, applied declarations, permissions or arbitrary files. The identity compiler's derived writes are separately scoped from engine execution. It cannot grant execution permission or change engine policy.

Automatic requests retain durable request IDs, node/capability IDs, parameters, graph revision, identity version and execution IDs. Records identify `authorizationMode: standing-read-only`; existing manual requests identify `human-approval`. Admission is persisted before provider work. Equivalent requests within one model turn reuse the same outcome, including a failed/uncertain attempt. Message retries remain idempotent. A new user request can intentionally perform a new read.

## Existing assigned agent updated

Applied the explicit request to assigned definitions in the existing `wonnyy-amadeus` profile and `C:\Universe`, using `scripts/enable-entity-agent-read-access.cjs`:

- Updated one assigned definition, `agent-a6db3583-5148-41d3-90cc-31a0e24949fa`; resulting active revision **5**.
- Enabled automatic access for its supported `daily-price / price` node and ensured Knowledge is connected to the LLM.
- Preserved other operation selections and settings, including unsupported/mismatched bindings. The current Yahoo `quote` and Excel nodes still need supported entity adapters/declarations. The existing Backend Identity `compile` node does not need to be manually invoked: automatic pre-answer refresh uses the compiler directly with scoped host authorization.
- Preserved active versus unapplied draft content; the migration uses revision-checked AgentStore saves.
- Backed up definitions beside the original: `C:\Users\HYPE AMD\AppData\Roaming\wonnyy-amadeus\agents.before-read-only-1794904321381.json`.
- Changed no source documents, applied indexes or credentials. Existing user data was not replaced with the disposable acceptance fixture.

Restart Orbistry once to load bridge **version 20**, then open the entity's **Chat Agent** and ask for data. The new read policy is already applied to the current supported price node. Other definitions can select **Automatic read-only access** in Workbench and **Save & apply**.

## Real UI verification

Ran the actual desktop interface with the configured NVIDIA model `nvidia/nemotron-3-ultra-550b-a55b`, existing authorized credential and authorized TSMC document, in disposable application/Universe data. No synthetic provider responses were installed.

1. Created an entity assignment in the existing UI, connected Knowledge and an automatic `daily-price / price / TSM` node, then saved/applied.
2. Intentionally made the disposable identity stale after compilation by appending a newline to its source copy.
3. Sent one price question. The runtime regenerated identity to a new fresh version before inference. The model requested the engine, which executed **once**, and the model's answer rendered in Direct Chat. No approval message or approval button was used.
4. Verified matching backend/model/rendered values and execution ID. The provider received the actual result in its continuation input; the raw result hash was checked.
5. Requested all indexed topics in the same conversation. Every one of **25 actual headings** and its references passed comparison. No additional engine invocation occurred. The original source document's hash was unchanged.

| Field              | Actual returned value                  |
| ------------------ | -------------------------------------- |
| Symbol             | TSM                                    |
| Price              | **373.45 USD**                         |
| Provider           | Yahoo Finance                          |
| Market observation | `2026-11-16T21:00:02.000Z`             |
| Retrieved          | `2026-11-17T08:32:49.770Z`             |
| Price type         | Regular-session quote                  |
| Reported delay     | 20 minutes                             |
| Market state       | PREPRE                                 |
| Cached / stale     | false / false                          |
| Execution ID       | `40891fcb-2604-4d0d-a5bc-3783c90e5b05` |
| Request ID         | `75ed0bf6-d416-4c0c-952d-eef81bb6c898` |
| Identity refresh   | stale → fresh before inference         |

This is the recorded provider observation, not a current live exchange quote. Local ignored evidence: `test-results/tsm-runtime-auto-proof.json`, `tsm-runtime-auto-execution.json`, `tsm-runtime-auto-request.json`, `tsm-runtime-auto-result.json` and `tsm-runtime-auto.png`. Private document bodies, prompts and credentials are excluded from diagnostic logs.

## Changes and verification

| Files                                                                                | Responsibility                                                                                                                                  |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `electron/ai/entity-agents.cjs`                                                      | Scoped pre-turn identity refresh, standing authorization, immediate execution/continuation, same-turn deduplication and paginated result reads. |
| `electron/ai/entity-agent-protocol.cjs`, `standalone-chat.cjs`                       | Validated result-read action and current host-owned authorization/identity instructions.                                                        |
| `electron/engines/backend-identity/capability-registry.cjs`, `identity-runtime.cjs`  | Explicit read-adapter allowlist and documented host-authorized compilation boundary.                                                            |
| `electron/ai/agent-construction.cjs`, `types/ai.ts`, `types/entity-agents.ts`        | Automatic policy and authorization-mode contracts; legacy modes remain supported.                                                               |
| `features/agent/agent-construction.tsx`, `engine-node-settings.tsx`                  | Default automatic policy and visible policy choice/cache-refresh behavior.                                                                      |
| `features/worldview/entity-agents-dialog.tsx`                                        | Identity-refresh explanation, automatic read status and Run labels.                                                                             |
| `electron/ai/entity-agent-access.cjs`, `scripts/enable-entity-agent-read-access.cjs` | Explicit, backed-up migration of assigned definitions, preserving drafts and revisions.                                                         |
| IPC/preload/client and seven smoke scripts                                           | Bridge version 20 compatibility.                                                                                                                |
| Runtime unit tests and live acceptance scripts                                       | Automatic execution, identity freshness, errors, authorization isolation, configuration preservation and actual provider/UI proof.              |

| Verification                                              | Result                                                                       |
| --------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `npm.cmd test`                                            | **508 tests: 506 passed, 2 optional live experiments skipped, 0 failed.**    |
| `npm.cmd run build`                                       | Passed, including TypeScript and secured static export.                      |
| Native assignment / Workbench / Knowledge Card regression | Passed, including legacy approval and duplicate suppression.                 |
| Native Backend Identity regression                        | Passed.                                                                      |
| Actual NVIDIA + Yahoo automatic UI flow                   | Passed without human approval; stale identity refreshed; 25 topics verified. |
| Migration regression                                      | Passed: backup, active/draft separation, source integrity and idempotency.   |
| Formatting and `git diff --check`                         | Passed.                                                                      |

Focused tests additionally cover failed automatic reads without same-turn retry or fabricated price; missing identity before inference; unchanged identity reuse; failed refresh preserving the old snapshot and stopping inference; denied execution from a compile-only grant; cross-assignment result denial; and original source bytes/mtime remaining unchanged. Existing manual-policy authorization and graph/Universe isolation tests still pass.

## Debug Audit

**Component:** Entity agent read permission and Backend Identity lifecycle.

**Observed behavior:** Every engine invocation needed a human approval, and missing/stale identity required manual regeneration. This no longer matched the user's requested standing read permission.

**Root cause:** The only execution policies were disabled/manual approval; the chat runtime checked identity freshness but did not compile it itself.

**Changes applied:** Added a default automatic read policy for supported adapters, durable scoped automatic execution and result continuation, paginated stored-result access, and host-controlled complete identity refresh before inference. Applied the user-authorized configuration migration to the existing assigned definition.

**Verification:** Unit/build/native checks and the real no-approval NVIDIA → Yahoo → rendered Direct Chat trace above passed.

**Remaining limits:** Unsupported entity adapters and declaration mismatches remain unavailable; context/page/compiler limits still apply. Protected source/entity writes remain unavailable. Interrupted admitted reads are not silently repeated. Native Electron checks require the existing environment's sandbox escalation; they preserve Electron's sandbox and use disposable data. The earlier report's separately scoped framework security advisory and unreproduced WorldView pixel-test mismatch remain historical limitations.
