# Orbistry 1.0.0 Victoria Beta

This source release brings reusable Context Boxes, independent agent conversations, OpenRouter support and a quieter workspace interface. The Windows application name is Orbistry; Victoria Beta names this release. Package version is 1.0.0.

## Features

- Explicit Context Box creation from reviewed sources, named vault-owned boxes, token estimates and integration with Station ANY/ALL filtering. Saved membership does not expand automatically.
- Explicit chat creation bound to a Context Box and creation-time source manifest. Separate conversation titles, searchable agent history, persistent renames and last-chat restoration. Source changes require a new bound chat; legacy histories remain readable without automatic rewriting.
- Orbistry Agent and CHronoZ share provider and context execution, with independent history, drafts and preferences. CHronoZ starts with blank custom instructions, no configured skills and no uploaded profile image.
- OpenRouter provider, encrypted API-key settings, model discovery and usage/token reporting alongside Ollama, Gemini and NVIDIA. Unified Settings retains provider and runtime controls.
- Minimalist workspace and agent contacts, collapsible chat history, soft hover surfaces, dark scrollbars, comfortable pane controls and floating chat resizing/minimization.
- More generous Planet spacing and picking areas, plus Focus canvas to free sidebar space while retaining selection and filtering.
- Startup progress through vault, context and agent restoration, with error recovery. New Q emblem for app/window, navbar and startup branding; Windows multi-size icon for packaging and shortcuts.
- Grounding and structured citation checks use session-bound source manifests. Local CSV/statistics calculations distinguish calculation inputs from documentary evidence.

## Compatibility

Desktop bridge version 18 requires restarting Electron. Existing storage keys, encrypted credentials, vault-owned histories and immutable run records are retained. Legacy conversations need an explicitly created bound chat before further sends. No full-document snapshots, semantic retrieval or executable marketplace agents are introduced.

## Verification and limits

215 deterministic tests, strict TypeScript, formatting and production build pass. Isolated Electron checks cover Orbistry workspace behavior, CHronoZ isolation/restoration and startup progress/recovery, including logo loading and the Orbistry window title. Additional feature-specific acceptance procedures and earlier results are recorded in the feature handoffs.

These Electron provider checks use synthetic transport. They do not establish live-model grounding quality or guarantee factual correctness. This commit is a source release; no new installer binary is included.
