# Persistent Knowledge Consolidation: safe first increment

Implemented 2026-10-26, following repository inspection. This is a proposal/review/retrieval increment, **not a completed `/loop` integration**.

## Architecture assessment

The inspected repository has no `/loop` parser/executor, extraction-result schema, iteration notes or executable skill registration mechanism. `AgentStore.get()` previously returned an empty `skills` list. Orbistry and CHronoZ use the existing ChatService/orchestrator, immutable model-run JSON, Context Box manifests and source capabilities. Context Boxes are vault-owned `.wonnyy/context-boxes.json` metadata; conversations and run records are also under `.wonnyy/`. Source readers enforce paths and hashes. Sources enter a box only through explicit selection/review; Stations never expand a saved box automatically. Vault scanning supports Markdown/CSV/text-PDF, with `.wonnyy` excluded from the graph. The repository does not supply an investment Bank Vault or real GOTO research documents.

Existing source read capabilities and metadata writers are not a general authorization to write research notes. Therefore this feature chooses an **app-owned outbox outside the primary vault**, with a separate operator tool for committing reviewed knowledge there. It never creates `skill/` in the Bank Vault or edits source files. Existing `.wonnyy` writers for normal chat remain unchanged.

## Implemented components and invocation

- `electron/ai/skills.cjs`: explicit app-owned `knowledge-consolidation` registration for Orbistry only. `loopIntegration` is `unavailable`; no tools are loaded from research text.
- `knowledge-store.cjs`: validated structured observations; immutable Markdown proposals; exact metadata duplicate/metric-conflict/period detection; independent operator approval; versioned knowledge; supersession; bounded source-bound retrieval.
- `research-knowledge.cjs`: read-only validation of completed Orbistry run records and current source readers; connects retrieval to ChatService's existing bound-scope capability.
- Existing guarded IPC/preload: additive optional `proposeKnowledge` and `retrieveKnowledge` methods. No approval method is exposed. Bridge 18 and existing message/storage schemas remain unchanged; stale clients get a restart message when invoking the new optional capability.
- `features/agent/knowledge-proposal.tsx`: **Create knowledge proposal** on completed Orbistry answers. Enter reviewed structured extraction JSON; Save stages pending candidates. Double submissions are guarded while saving. Preview approved knowledge uses the first observation's entity/topic/period and a 1,500-token estimate budget. The native modal supports Escape before saving, error display and retry. CHronoZ remains unconfigured.
- `scripts/knowledge-review.cjs`: explicit external operator list/approve/retrieve interface. Approval is not available to model execution or the renderer.

The UI expects structured observations entered by the reviewer; this release does not turn arbitrary natural-language answers into automatically trusted atomic facts.

## `/loop` execution flow and missing infrastructure

No existing loop was replaced or duplicated. `/loop ...` now fails explicitly before adding messages or calling a provider, rather than producing a misleading model response that implies a loop ran. Ordinary questions, providers, cancellation, retries and history keep their existing execution path.

Current end-to-end workflow: normal bound research question → completed run → structured extraction proposal → independent operator review/commit → approved retrieval preview in a later session. The deterministic GOTO pilot simulates successive research iterations, not executions of an installed `/loop` command. Live prompt injection, automatic extraction, loop before/during/after hooks and context-section assembly remain blocked by the absent workflow contract. Retrieval is inspectable and reusable by a caller, but is **not automatically loaded into a Context Box or provider prompt**. Original session-bound documents remain the only documentary evidence authority.

## Markdown schema and storage

```text
<application userData>/research-outbox/<SHA-256 canonical-vault-path>/skill/
  iteration/iteration0000.md
  iteration/iteration0001.md
  knowledge/evidence/<knowledge-id>-v0001.md
  knowledge/analytical/<hypothesis-id>-v0001.md
  knowledge/process/<knowledge-id>-v0001.md
```

Files have a human-readable heading and fenced JSON metadata. Schema version 1 includes canonical vault, iteration, objective, timestamp, run/conversation IDs and bound manifest. Each observation has kind, claim, entity, topic, reporting period and optional metricValue; evidence adds source ID/path/hash, exact-location assertion and quote. Hypotheses carry supporting/contradicting evidence IDs, assumptions, rationale, questions and previousHypothesisIds. Process observations use the claim/topic to describe failures, methods, missing information or limitations. Source text is untrusted data, never a tool instruction.

New records are `verification: unverified`, `approval: pending`, `lifecycle: candidate`. An explicit approval stores a separate immutable record with reviewer, rationale, timestamp, verification result, reusable lifecycle, version and sources. The proposal remains unchanged as the extraction audit. Evidence requires source hash and exact quote presence plus operator attestation; location and claim meaning are reviewed by the operator. Analytical approval requires current approved evidence, rationale and unresolved questions. Hypotheses remain interpretations, never verified facts. There is no numeric LLM confidence score.

Stable IDs hash normalized kind/entity/topic/period/claim; duplicate proposals point to existing IDs. A new iteration can explicitly reverify the same claim against changed provenance, producing a new version without overwriting the original. Supersession is recorded atomically on the replacement commit; prior files stay intact and their derived lifecycle becomes superseded. Dependent hypotheses are excluded until reviewed against current support. Unapproved conflicts remain pending; an explicit metric mismatch flags possible contradiction, not semantic proof.

## Permissions and operator approval

Renderer/model operations can stage candidates and retrieve previews only. The operator tool is a local trust boundary: a person must inspect the proposal and original documents before invoking approval. It is not an OS sandbox or cryptographic approval system; a local user who can edit app-owned files can alter them. Do not expose this tool to model shell execution. No agent filesystem write capability was added.

Discover the exact application userData path using Electron's `app.getPath("userData")` (existing storage compatibility may retain a legacy folder). Replace placeholders below with real paths and reviewed record IDs:

```powershell
node scripts/knowledge-review.cjs --app-data "<userData>" --vault "<BankVault>" --action list
node scripts/knowledge-review.cjs --app-data "<userData>" --vault "<BankVault>" --action approve --iteration 0 --record "<64-hex-record-id>" --reviewer "<operator>" --rationale "<independent verification rationale>"
# Add --supersedes <old-record-id> only after reviewing the conflicting replacement.
node scripts/knowledge-review.cjs --app-data "<userData>" --vault "<BankVault>" --action retrieve --run "<completed-Orbistry-run-id>" --entity "<entity>" --topic "<topic>" --period "<period>" --max-tokens 1500
```

Both lexical and canonical path checks reject an outbox in the Bank Vault. Parent symlinks/junctions are rejected for outbox reads and writes. Runs are read without creating source-side directories. The source reader rejects traversal and unsupported paths. If a test/deployment deliberately places userData inside its vault, knowledge capture is unavailable until userData is placed outside; the feature does not relocate existing credentials automatically.

## Retrieval and context engineering

Deterministic NFKC/case/whitespace-normalized entity, topic and reporting-period filters come first. Only operator-approved current versions are eligible. Evidence ranks before interpretation; approval recency and stable IDs break ties. Source IDs, paths and hashes must match the current conversation capability; changed/unbound sources and superseded support are excluded. CLI retrieval also re-reads source hashes rather than trusting an old run's manifest alone. Results separate evidence, analytical and process records and report budget/source exclusions. The conservative UTF-8-size token estimate is not provider-measured capacity. No vector database or whole-vault loading is introduced.

## Recovery and numbering

Cross-instance writer locks serialize numbering from iteration0000. The next number is one greater than the highest valid published iteration; no counter file can drift. Files are flushed to temporary siblings, then published with an exclusive hard link so existing history cannot be overwritten. Failed writes do not consume a number. Unsupported filesystems fail closed; there is no unsafe overwrite fallback. A stale `.writer.lock` requires inspection: stop all app/review writers, back up the outbox, confirm the recorded PID is not active, then remove only that lock and retry. Temporary `.tmp` files are not published records and can be archived after the same review. Corrupt records fail closed; restore them from backup rather than allowing automatic repair to erase history.

## Verification

Final results: **227 deterministic tests passed, 0 failed, 0 skipped**; strict TypeScript (`--noEmit --noUnusedLocals --noUnusedParameters`), formatting and production build passed. The knowledge Electron integration and existing CHronoZ regression both passed with isolated profiles and synthetic transport. No live-model or installed-loop execution was tested or claimed.

Deterministic tests cover synthetic GOTO extraction/review/reuse, separate-process CLI approval and restart retrieval, duplicate/conflict/period checks, missing attribution, no automatic promotion, source changes, supersession, interpretation separation, budgets and vault isolation, concurrent numbering, stale-lock and failed-write recovery, junction rejection, missing vault behavior and skill registration. A source-version re-verification test checks immutable version history.

`scripts/electron-knowledge-smoke.cjs` exercises the actual completed-chat → UI proposal → guarded IPC → operator CLI approval → retrieval-after-restart path. It checks the double-submit guard, unchanged source bytes, absence of a renderer approval capability and explicit rejection of the unavailable `/loop` command. Evidence is written to ignored `test-results/knowledge.json` and `knowledge-proposal.png`. Provider transport and all GOTO figures are explicitly synthetic; live-model extraction/grounding is not established by these checks.

## Remaining acceptance gaps / next iteration

Implement an agreed structured extraction and loop-runner contract, then add its hooks to the existing ChatService/orchestrator rather than a competing runtime. Introduce explicit preview/selection and prompt budgeting for reviewed knowledge without broadening source capabilities. Add friendly observation forms, operator review UI, per-claim location/semantic review, temporal interval semantics and targeted re-extraction. No OS ACL enforcement, signed approval identities, general semantic contradiction detector, live GOTO benchmark, primary-vault commit mechanism or automatic context loading is claimed. These are designed extension points, not implemented features.
