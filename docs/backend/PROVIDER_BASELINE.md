# QT-RCA-001: baseline before repair

Captured 2026-10-30 (Asia/Jakarta), before modifying production code for this audit.

- Original worktree: main, HEAD 9d524d6 (publish ready). It contains existing uncommitted editor/vault/UI changes and the new front-office implementation. The original index/worktree is preserved.
- Isolated branch/worktree: audit/qt-rca-001 at tmp/qt-rca-001. Commit 829d704 snapshots the supplied current source as the comparison base; it is not a repair commit and does not alter main.
- Original snapshot manifest: original worktree test-results/qt-rca-001/baseline-manifest.json (342 source files with hashes). Known-pattern secret audit reported no findings before checkpointing.
- Runtime: Node 24.18.0, Next.js 16.4.3, Electron 45.1.0, React 19.3.1, Zod 4.6.7. Next.js is a static export; provider access is Electron main-process IPC, not a Next API server.
- Environment credential flags: OpenRouter false, NVIDIA false, LiteLLM false. No environment proxy endpoint is set. This does not imply saved application credentials are absent.
- Current orbistry profile directory exists but has no credential/model configuration. Legacy populated wonnyy-amadeus profile contains OS-encrypted OpenRouter/NVIDIA/Gemini credentials; LiteLLM is not configured. The existing profile-selection helper prefers populated legacy storage. Keys/ciphertexts/private messages are not included in this report.
- Saved selection: NVIDIA / deepseek-ai/deepseek-v4.1-flash, 32,768 context, 6,000 output, streaming true. Provider access/quota/model support remain unverified at baseline. No front-office configuration exists in this profile.
- Default front-office behavior: disabled; no cached experiment catalog or manual selection is implied after reset. Normal agent chat requires a bound Context Box/file. These are observed admission conditions, not yet confirmed explanations for the reported missing-response incident.
- Native hosted adapter and experimental gateway client both currently send stream=true. The experiment configuration has no streaming toggle/non-streaming consumer. This is a confirmed missing diagnostic path, not proof that streaming caused the original incident.
- The existing electron-openrouter-live-main.cjs is catalog-only and intentionally blocks POST/inference. Its catalog success is not generation evidence. Previous fixture/UI tests used synthetic responses; previous live generation checks were explicitly skipped.

Baseline full-suite execution is being captured in test-baseline.log in this worktree. No provider-generation success is claimed until an actual response and visible UI text are observed. The audit will compare direct raw provider, optional configured LiteLLM, backend, streaming events and DOM rendering using controlled diagnostic text only.

Hypotheses H1–H8 remain under investigation. No last-known-working commit has yet been established empirically; Git chronology alone is not causality.

## Observed before repair

- Direct OpenRouter / openai/gpt-4.1-nano: HTTP 200, exact ORBISTRY_OK, 16 input / 6 output tokens, 1,328 ms. This proves actual authenticated generation independently of the Orbistry pipeline.
- Direct NVIDIA / saved deepseek-ai/deepseek-v4.1-flash: no HTTP response observed before the 60,000 ms deadline. Catalog listing succeeds and includes the model; quota, server queue and deployment health remain unknown. A tiny direct request therefore reproduces a stall before context/router/UI processing.
- Actual experimental UI: New experiment fails before inference with MODEL_BUSY; the Send button remains disabled because no conversation was created. Sanitized evidence is baseline-ui-admission.json and diagnostic-failure.png.
- Source correlation: useChatRuntime automatically scans configured NVIDIA/Gemini models through checkRemoteModel → service.exclusive; FrontOfficeSettings actions do not invoke the hook's interruptChecks coordination. The normal agent send/operate path does invoke it. The new independent experiment panel therefore competes with background inference checks for the shared ChatService admission slot. This is a confirmed integration defect; exact active operation metadata is being added to diagnostic evidence.
- The UI displays the busy message but omits its diagnostic code. Non-streaming experiment generation is unavailable because the wire request hardcodes stream=true. These are independently confirmed diagnostic/visibility gaps.

Small repair scope: coordinate experimental actions with existing check cancellation/admission, expose the existing safe error code, implement a true non-streaming option in the current transport, and add content-free boundary stages to the existing observer. Do not remove routing/security checks or silently replace the user's saved provider/model.

After admission coordination, the next real UI attempt reached routing and failed at MODEL_CANDIDATES_EVALUATED with zero provider calls: the selected OpenRouter deployment was rejected for its generation parameters. A live public /models lookup for the same model advertised max_completion_tokens (not max_tokens), while direct generation with the legacy alias had already returned ORBISTRY_OK. The router required the literal legacy spelling. The repair therefore recognizes both output-cap aliases and sends the advertised canonical keyword when appropriate, retaining the hard cap and temperature checks. This is a confirmed second integration cause, distinct from the NVIDIA timeout.
