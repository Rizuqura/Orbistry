# Entity agent runtime diagnostic and remediation

Latest policy update: [Automatic read access and identity refresh](agent-read-only-autonomy.md). The user has now authorized standing read-only execution and automatic identity rebuilding. That report supersedes this report's manual-approval usage instructions and records the new no-approval live verification.

Assessment and live verification: 17 November 2026. Scope: the existing Entity assignment, Agent Workbench, Backend Identity, registered capability execution and Direct Chat. Followed `instruction/CODEWRITINGSTD.md`, `instruction/DEBUGANDAUDIT.md` and the installed Next.js client-component/static-export guides.

**P0 and P1 passed through the actual desktop interface using the configured NVIDIA model and real Yahoo Finance data.** The test used disposable application/Universe data and an isolated TSMC assignment. The existing user's graph, disabled policies, credential and source document were preserved.

## 1. Root cause analysis

There were two separate runtime gaps and several actual configuration restrictions.

1. **Capability descriptions had no conversational execution lifecycle.** Assignment chat passed descriptive capability metadata into `runStandaloneTurn`, but its ordinary answer format had no assignment action dispatcher. Text such as “I'll request the engine” was an answer, not a backend request. “Yes, please” was another ordinary chat message. No persisted proposal bound that text to an engine operation. The separate manual execution button could reach the existing registry, so the engine itself was not missing.
2. **Execution and conversation were disconnected.** Manual execution returned a result to the UI and saved an audit, but did not immediately continue the model with that result. Later context assembly could include earlier results, subject to size limits. That was insufficient to prove the requested proposal → approval → execution → answer lifecycle.
3. **Knowledge lacked model-directed traversal.** Existing lexical search and `getChunk` already read compiled evidence. Assignment chat could include a bounded lexical selection when a Knowledge node was connected. It exposed no model-directed heading enumeration, retrieval or chunk dispatcher. A query asking for _all_ topics was therefore not a reliable exhaustive traversal.
4. **The saved `test` agent has no Knowledge node.** Its 25 compiled chunks are readable, but the graph intentionally grants no Knowledge connection. This independently explains metadata without body access for that saved agent. Its assignment held six messages and zero execution records at baseline.
5. **All four saved Engine nodes are disabled.** `daily-price / price / TSM` matches a configured entity capability, but its node policy is disabled. Both Yahoo Financials nodes select `quote`; the entity declares `financials` and `earnings`, so those nodes also have an operation mismatch. The Excel node has no matching entity capability adapter. None were silently enabled.

Baseline entity: `3baf7fcb-69c7-468c-962c-7ee3db2d8df2`; assignment: `e40e4bd0-eecd-4bef-b435-b2100d0c94e0`; definition: `agent-a6db3583-5148-41d3-90cc-31a0e24949fa`. Baseline identity version: `2b151d9bfff0dcb64967d078e0df8338d1c70f4dcb980b2e0502e843bb832abf`.

Read-only investigation independently enumerated all 25 indexed topics and read all 25 compiled chunks through the Backend Identity runtime, with entity-scoped authorization and source hashes/trust metadata. Reference-only bodies were excluded. This rejected a missing/corrupt chunk-storage explanation for this entity.

## 2. Hypothesis assessment

Assessments describe the implementation before this repair. Partial confirmation distinguishes a conversational integration gap from failure of the existing backend.

| Hypothesis                        | Assessment                                                           | Supporting and contradictory evidence; repair                                                                                                                                                                     |
| --------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| H01-A: manifest only              | Conditional, not universal                                           | The saved graph has no Knowledge node and receives metadata only. Other connected graphs already received selected lexical chunk bodies. Preserve the graph gate and explain it in chat.                          |
| H01-B: retrieval not exposed      | Confirmed for callable chat actions                                  | `identity-runtime.cjs` already has search/getChunk; chat had no callable retrieval protocol. Expose scoped `knowledge.listTopics`, `knowledge.retrieve`, `knowledge.getChunk`.                                    |
| H01-C: no dispatcher              | Confirmed in assignment chat                                         | `EntityAgentService.send` previously performed initial lexical retrieval, without a model-action dispatcher. Add validated dispatch in `toolRuntime`.                                                             |
| H01-D: results not injected       | Partial                                                              | Initial lexical bodies were injected for connected graphs. No model-directed tool-result continuation existed. Feed validated evidence responses into the bounded continuation loop.                              |
| H01-E: wrong entity/version/scope | Rejected for this entity                                             | Stable assignment resolves the expected entity; its fresh version yields 25 readable chunks. Version, root and assignment checks remain enforced at every boundary.                                               |
| H02-A: prompt-only awareness      | Confirmed                                                            | Metadata described tools, while ordinary standalone completion accepted answers only. Add a strict host-owned JSON action contract using existing provider structured output.                                     |
| H02-B: missing dispatcher         | Confirmed in chat                                                    | No assignment tool-action parsing or dispatch followed model completion. Existing manual execution worked independently. Add `runEntityProtocol` plus scoped backend dispatch.                                    |
| H02-C: approval is ordinary text  | Confirmed                                                            | There was no persisted pending proposal for “yes” to consume. Persist exact invocation scope and consume it durably before provider work.                                                                         |
| H02-D: registry disconnected      | Partial                                                              | The existing manual execution path already reached `executeCapability`. Conversational proposals did not. Reuse that execution boundary without bypassing the registry.                                           |
| H02-E: result not returned        | Partial                                                              | Manual results and later bounded context existed, but same-turn model continuation did not. Continue immediately after approval, including compact integrity-checked price evidence.                              |
| H02-F: adapter failure            | Rejected for tested TSM price path                                   | Direct Yahoo invocation and real model/UI execution both returned actual TSM data. No conclusion about untested providers/operations. Errors still return actionable codes without fabricated prices.             |
| H02-G: graph routing failure      | No serialization failure found; configuration restrictions confirmed | Saved nodes/edges resolve correctly. Disabled policies and wrong Yahoo operation selections prevent valid execution. Keep these restrictions; route only a connected applied node and matching entity capability. |

Relevant functions are `EntityAgentService.context/runtime/sendTurn/toolRuntime/createRequest/consumeRequest/executeBound`, `runStandaloneTurn`, `runEntityProtocol`, and Backend Identity `listTopics/searchChunks/getChunk/executeCapability`.

## 3. Execution trace

Verified in the real UI, using `nvidia/nemotron-3-ultra-550b-a55b` through the configured NVIDIA provider:

1. Created an isolated TSMC entity and assigned research agent through WorldView and the existing Workbench. Connected Knowledge and `daily-price / price`, explicitly selected **Read-only with human approval**, then **Save & apply**. This changed only the disposable test graph.
2. Applied the entity's `yahooPrice("TSM")` declaration and compiled its Backend Identity. Copied the explicitly authorized existing TSMC document into the disposable Universe and compiled its same 25 topics.
3. Sent: “Get the latest available TSM price using your assigned engine. Show the price, currency, market timestamp, data source, retrieval time and execution status. Keep timestamps in their returned ISO format.”
4. The actual model returned a structured `engine.request`. Backend validation persisted request `ecb220f9-5dd4-4f1a-a784-305aedf235aa`, including node/capability IDs, `TSM`, normalized `{ "force": false }`, graph revision, identity version and expiry. The test verified **zero price calls before approval** and that this proposal originated from the chat turn.
5. Sent **“Yes, please.”** through the same chat. Exactly one valid pending request existed. The backend checked its scope/freshness, durably marked it executing, then called the existing registered capability handler. An execution audit was persisted before provider work.
6. Yahoo Finance returned actual data. Backend validated the native response, wrote the raw result and SHA-256 hash, and completed execution `e61abb1d-77b8-4928-b6f5-2dd9f4d750a3` successfully.
7. Compact price evidence entered the **actual provider request** for model continuation. An observer recorded only its execution ID, not prompts, private source text or credentials.
8. The model's answer displayed the exact returned price, currency, both ISO timestamps, provider, execution status and execution ID. The UI execution history displayed the canonical receipt. The test verified exactly **one** provider invocation and checked the result hash.
9. In the same UI conversation, requested every indexed topic with source references. The model used heading enumeration. The test compared the answer against **all 25 actual indexed headings**, checked source references, and verified there were no additional price invocations. The original document hash was unchanged.

The pending-request lifecycle is `awaiting-approval → executing → succeeded/failed`, with cancellation and expiry. The executing claim survives process interruption; retries do not automatically repeat uncertain external work. Explicit UI decisions accept only request ID and approval, never replacement operation parameters. Exact whole-message approvals are accepted only for one unambiguous pending request. Concurrent decisions, repeated approval, message retries and restart are covered by tests.

## 4. Files modified and reasons

The earlier assignment/construction integration is documented separately in [entity-agent-assignment.md](entity-agent-assignment.md). This remediation extends it:

| Files                                                                                    | Reason                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `electron/ai/entity-agent-protocol.cjs`                                                  | Strict action schemas, bounded tool/answer loop, approval recognition, validated normalized price evidence.                                                                            |
| `electron/ai/entity-agents.cjs`                                                          | Persisted proposals, exact approval consumption, live graph/identity authorization, knowledge dispatch, continuation, explicit availability states, correlated audits and safe errors. |
| `electron/ai/standalone-chat.cjs`                                                        | Opt-in assignment tool loop within the existing provider/grounding/history/observer pipeline; ordinary standalone chat keeps its existing contract.                                    |
| `electron/ai/providers/openai-chat-provider.cjs`, `gemini-provider.cjs`                  | Support the host-owned assignment structured-output schema alongside existing formats. NVIDIA uses the existing OpenAI-compatible adapter; Ollama already accepts the bounded schema.  |
| `electron/engines/backend-identity/identity-runtime.cjs`                                 | Deterministic paginated heading traversal with source/version/trust/chunk metadata; reads no body text for topic listing.                                                              |
| `electron/ai/ipc.cjs`, `electron/preload.cjs`, `features/chat/desktop-client.ts`         | Guarded propose/decide bridge and API version 19, requiring an old running backend to restart.                                                                                         |
| `types/entity-agents.ts`                                                                 | Typed request state, price receipts, availability/health and bridge contracts.                                                                                                         |
| `features/worldview/entity-agents-dialog.tsx`, `entity-agents.css`                       | Exact proposal approve/cancel cards, immediate result continuation, idempotent sends, Workbench access, configuration reasons and price provenance.                                    |
| `entity-agent-protocol.test.cjs`, `entity-agents.test.cjs`, NVIDIA/Gemini provider tests | Strict schemas, authorization, deduplication, errors, scope isolation, pagination, result delivery and provider compatibility.                                                         |
| `scripts/electron-entity-agents-smoke.cjs`, `scripts/fixtures/online-smoke-fetch.cjs`    | Explicitly synthetic, offline UI regression for proposal/approval/continuation/repeated approval. No live-market claim.                                                                |
| `scripts/electron-entity-runtime-live.cjs`, `electron-entity-runtime-live-main.cjs`      | Actual desktop/model/registry/Yahoo acceptance with isolated data, read-only credential use and metadata-only observation.                                                             |
| `scripts/electron-worldview-smoke.cjs`                                                   | Retain disposable expected/actual canvas images on a strict pixel-comparison failure, without weakening assertions or logging image payloads.                                          |
| Seven existing chat/agent smoke scripts                                                  | Update bridge compatibility expectation from 18 to 19.                                                                                                                                 |
| `package.json`                                                                           | Add `test:entity-runtime:live`. No dependency changes.                                                                                                                                 |

New and modified named functions carry documentation comments describing boundaries, side effects or failure behavior. Formatting follows the repository's Prettier conventions.

## 5. Architecture changes and efficiency

The existing ownership remains: **Entity owns context. Agent owns responsibility. Engine owns execution. Human owns authority.** Workbench, definitions, graphs, Identity compiler, engine registry and provider configuration remain in place.

Assignment chat adds a validated orchestration interface rather than interpreting arbitrary natural-language promises. Allowed actions are `answer`, `engine.request`, `knowledge.listTopics`, `knowledge.retrieve` and `knowledge.getChunk`. Action-specific strict schemas reject additional fields, arbitrary function names, filesystem paths and substituted symbols. Symbols come from the assigned entity capability, not model input. Only explicit human approval creates a temporary execution grant. Knowledge access requires the live applied Knowledge connection. Graph/root/assignment/version are revalidated during dispatch and before final response commit.

The existing provider completion API carries host-owned structured output. Backend tool responses return as explicitly untrusted evidence within the protected grounding policy. Eight completions bound the loop; provider message and context-window limits still apply. No native tool API or new provider dependency is required.

Heading listing groups existing indexed references and paginates without reading chunk bodies. Actual chunk reads preserve source ID, heading path, source version, content hash, line range and trust label. Reference-only documents never become indexed text. A shared per-turn Knowledge token budget bounds body injection. Compact validated price receipts avoid dropping useful provenance simply because the full native result exceeds the prior context allowance; complete results remain in the existing result store and are hash-checked before later inclusion. Recent ledgers are bounded and merged before conversation commit. Per-Universe serialization and idempotency prevent duplicate work.

Availability is deliberately separate:

| State      | Meaning in this implementation                                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| registered | Engine/operation exists in the registry.                                                                                                         |
| configured | Current fresh entity identity contains a matching configured capability/version.                                                                 |
| enabled    | Applied connected node permits read-only proposals with approval.                                                                                |
| authorized | A specific admitted invocation currently holds approval; no reusable session grant.                                                              |
| health     | `unchecked`, `succeeded` or `failed`, with last relevant audit timestamp. Discovery does not probe providers; a cache hit is not a health check. |
| executed   | A specific invocation was admitted/attempted, independently of its outcome.                                                                      |
| succeeded  | A specific invocation returned a validated successful result.                                                                                    |

## 6. Tests executed

| Check                                                 | Result                                                                                                                       |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Direct backend TSM price, real Yahoo Finance          | Passed; 373.45 USD, fetched `2026-11-17T04:06:16.004Z`.                                                                      |
| `npm.cmd test`                                        | Passed: **503 tests, 501 passed, 2 optional provider experiments skipped, 0 failed**.                                        |
| `npm.cmd run build`                                   | Passed; includes TypeScript and secured static export.                                                                       |
| Offline entity assignment/approval desktop regression | Passed, including zero executions before approval, immediate continuation and no repeated execution after another approval.  |
| WorldView desktop regression                          | Passed on rerun with unchanged strict assertions; first attempt failed the pan round-trip pixel comparison, described below. |
| Backend Identity / Knowledge Card desktop regression  | Passed.                                                                                                                      |
| Actual NVIDIA + Yahoo UI acceptance                   | Passed P0 and P1; no synthetic provider responses installed.                                                                 |
| Formatting and `git diff --check`                     | Passed.                                                                                                                      |

Tests cover capability binding; rejected unapproved execution; exactly-once approval and concurrent/repeated decisions; request expiry and stale graph; restart; invalid parameters; cross-assignment access; model result delivery; timeout and malformed output; failed operation without fabricated evidence; cache success versus provider health; topic pagination and actual chunk content; disabled policy and missing Knowledge explanations. Existing unit tests cover legacy graphs, multiple Engines, ordinary chat/providers, assignment reuse, Universe and entity isolation.

The two optional skipped unit experiments require their own test credentials; this does not describe the separate successful actual configured-provider UI acceptance.

The first final WorldView run failed `drag round trip has no drift` by comparing different canvas image digests. Its failure screenshot showed the empty grid. The fixture already requests a stable readback context. Added failure-only retention of expected/actual disposable canvas images and reran without changing product camera/grid code or relaxing pixel equality. The complete rerun passed four-direction pan, cursor zoom, reset, resize, connectors, chips, source assignments, Knowledge Cards, charts, deletion, chat and Vault navigation. The original pixel mismatch did not reproduce; its underlying cause remains unresolved and is not attributed to a proven renderer or camera defect. Logs: `test-results/entity-runtime-worldview-regression.log` and `entity-runtime-worldview-regression-retry.log`.

## 7. Real price demonstration

| Field                        | Verified backend value                                                               |
| ---------------------------- | ------------------------------------------------------------------------------------ |
| Symbol                       | TSM                                                                                  |
| Engine / operation / version | daily-price / price / 0.1.0                                                          |
| Price / currency             | **373.45 USD**                                                                       |
| Provider                     | Yahoo Finance                                                                        |
| Price classification         | Regular-session quote; latest available market observation returned by the provider. |
| Market timestamp             | `2026-11-16T21:00:02.000Z`                                                           |
| Retrieved at                 | `2026-11-17T04:50:54.474Z`                                                           |
| Market state                 | POSTPOST                                                                             |
| Reported delay               | 20 minutes                                                                           |
| Cache / stale                | false / false                                                                        |
| Status                       | succeeded                                                                            |
| Execution ID                 | `e61abb1d-77b8-4928-b6f5-2dd9f4d750a3`                                               |
| Request ID                   | `ecb220f9-5dd4-4f1a-a784-305aedf235aa`                                               |
| Result SHA-256               | `4ef5837ce45fb2ce4888792f18e038893148d263da3ad5c8c9bc09def2efd273`                   |

This is a recorded demonstration value, not a current trading recommendation or a live exchange quote. Successful retrieval does not make the market observation contemporaneous with retrieval. The model displayed the same price and currency and disclosed the regular-session classification, market state, reported delay, cache and stale flags.

Ignored local evidence lives under `test-results/`: `tsm-runtime-live-proof.json`, `tsm-runtime-live-execution.json`, `tsm-runtime-live-request.json`, `tsm-runtime-live-result.json`, and the price-chat screenshot `tsm-runtime-live.png`. The proof records model delivery of the execution ID, exactly one engine call, all 25 topic matches and original-source integrity. Private document bodies, provider prompts and credentials are not written to diagnostic logs. Disposable app/Universe data is removed after the run; the preserved public price receipts provide the correlation evidence.

## 8. Regression assessment

No new canvas, agent constructor, model configuration system or engine dispatcher replaces the existing systems. Applied/draft graph revisions and node connection semantics remain intact. Existing zero/single-Engine graphs remain compatible; Engine multiplicity remains supported. Ordinary standalone chat retains its prior answer format. Protected grounding and authorization remain host-owned. Existing user definitions and policies were not migrated or changed by the diagnostic.

The real acceptance exercised WorldView creation, assignment, Workbench node creation/connections, policy configuration, save/apply, Direct Chat, proposal UI, approval via text, registered execution, audit history and indexed knowledge. The offline assignment test also exercised the approval button, retries, definition reuse, isolated history, reload persistence and Knowledge Card access. Backend Identity and the full WorldView native regressions passed, subject to the unreproduced first-run pixel mismatch described above.

An older construction smoke had previously stopped during setup with `Unknown agent`: it expects built-in definitions in a profile where production starts with an empty agent collection. That fixture failure was not hidden or treated as a runtime pass. The current desktop tests create a definition through the UI and exercise the existing Workbench.

## 9. Remaining issues and direct interaction

Restart the desktop application to load API version 19. In WorldView, select the entity and open **Assign / Manage Agents** (or its attached assignment control), then **Chat Agent** beside the assigned definition. Chat history belongs to that assignment.

For the existing `test` definition, open **Workbench**, add/connect a **Knowledge** node if indexed content should be accessible, and set the intended `daily-price / price` node to **Read-only with human approval**. **Save & apply**. Then ask for the TSM price and approve the displayed exact request, or reply **Yes, please** when one request is pending. These are user-controlled graph changes; the diagnostic leaves the saved disabled settings intact. If configuring financial data, select `financials` or `earnings` to match the corresponding entity declarations; a `quote` selection does not match them.

This path currently exposes the Identity capability adapters for `daily-price / price` and Yahoo `financials`/`earnings`. Other registered engines require an appropriate entity capability adapter before assignment execution. Multi-engine coordinated workflows and auto-execution permissions remain future work. No background price tracking or persistent approval is implied.

A model may fail structured output, run out of context, or hit the bounded tool loop; the system reports that failure rather than inventing evidence or indefinitely retrying. Interrupted admitted requests require review of their audit before a fresh proposal. Context/traversal limits remain explicit; the 25-topic target passed, but this is not a claim of unlimited document traversal.

The first live harness attempt could not decrypt a saved credential because the isolated profile lacked the source profile's OS-encrypted safeStorage key metadata. Copying only that encrypted metadata into disposable data restored normal secure-storage access; the source credential was never rewritten. User explicitly approved use of the configured NVIDIA credential and transmission of the named indexed TSMC source after automatic approval review rejected the earlier unapproved private-source test. The approved retry passed.

Native Electron tests require execution outside the managed sandbox in this environment because Windows renderer AppContainer ACL setup fails inside it. Tests preserve Electron's sandbox and use disposable profiles. Next.js 16.4.3 also emitted a framework security-upgrade advisory during an earlier build; dependency remediation is separately scoped and no dependencies were upgraded here.

## Debug Audit

**Component:** Entity-bound assignment chat, Knowledge routing, approval and registered engine continuation.

**Affected Files:** Backend protocol/service/provider/Identity files, assignment dialog/bridge/types, focused tests and acceptance scripts listed above.

**Observed Error:** Capability-aware prose promised execution after approval, with no accepted tool request, invocation record or returned price; indexed topic counts could appear without content access.

**Root Cause:** Missing structured conversational dispatcher and persisted approval lifecycle; no immediate model continuation after manual execution. The actual saved graph additionally omitted Knowledge and disabled its engines, with mismatched Yahoo operation selections.

**Changes Applied:** Strict bounded actions; scoped heading/chunk retrieval; durable exact proposals and approval consumption; existing-registry execution; validated, hash-correlated price evidence; immediate model continuation; explicit configuration and health diagnostics; comments and regression coverage.

**Verification:** Real NVIDIA → approved daily-price → Yahoo Finance → NVIDIA answer → Direct Chat passed with the exact receipt above. Same-agent actual indexed 25-topic enumeration passed. Automated outcomes are listed above.

**Remaining Risks:** External/model failures, bounded traversal/context, interrupted execution uncertainty, adapter coverage, old fixture assumptions and the separately scoped framework advisory. The user's disabled/mismatched graph still requires deliberate configuration before it can execute.
