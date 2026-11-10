# Executed fixture evaluation

Date: 2026-10-30 (Asia/Jakarta). Command executed: `node scripts/front-office-benchmark.cjs --mock --output test-results/front-office`.

| Item | Observed result |
| --- | --- |
| Fixture version | orbistry-synthetic-v1 |
| Task cases | 40 |
| Turns per repetition | 112, including three separate 25-turn conversations |
| Repetitions | 3 |
| Scenario labels | A / B / C, all explicitly mocked |
| Total fixture client calls | 1,008 |
| Samples per scenario | 336 |
| Ground-truth-scored samples per scenario | 318 |
| Human-rubric samples left unscored per scenario | 18 |
| Fixture execution errors | 0 |
| Fixture ground-truth success | 318/318 per scenario, expected for scripted responses |
| Descriptive scored-success Wilson interval | Approximately 0.9881–1.0000 per scenario; repeated tasks are correlated |
| Billed tokens / cost | Unknown; no billing call occurred |
| Production registry evidence emitted | None; mock evidence.json is empty |

Artifacts: `test-results/front-office/report.json`, `results.csv`, `report.md`, `evidence.json`. These generated local files are ignored by Git. Reports include timing values for fixture execution, but those values do not measure a model or actual gateway overhead and are not interpreted as performance improvements.

The suite covers exact short answers, synthetic fact retrieval, JSON formatting, conceptual finance rubrics, positioned synthetic needles at three approximate context lengths and complete 25-turn canonical-history replay. A/B control hashes match underlying model/provider/settings/messages. Scenario order rotates. Conceptual finance quality needs human review; fluent completion is not treated as a correct answer. No proprietary inputs were used.

Backend and Electron acceptance separately verify stream parsing, usage coverage, metadata filters/sorts/overrides, full history, manual pins, fallback authorization, bounded retries/circuits, cancellation, partial failure, recovery and privacy exports. The gateway acceptance uses a mocked authenticated loopback endpoint, not a running LiteLLM instance. Existing normal-agent Electron regression also passed. Screenshots are in `test-results/front-office/capability-catalog.png` and `experimental-chat.png`.

Real OpenRouter/NVIDIA inference tests are explicitly skipped without the dedicated live-test environment flags/key/model. NVIDIA entitlement/quota is not established by a catalog URL. A real LiteLLM runtime was not installed or started; only Windows Store Python launcher aliases were found. No provider quality, real transport overhead, cost savings or statistically supported improvement is claimed. Numerical product success thresholds remain an owner decision after real baseline evidence exists.

For a real comparison, configure the permitted provider/model and optional pinned local service, use the live command and explicit call/cost limits described in [evaluation instructions](07-observability-and-benchmark.md), inspect identities/control hashes, review rubric answers, run repetitions and assess uncertainty/failures before changing routing policy.
