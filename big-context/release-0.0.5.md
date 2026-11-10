# Orbistry 0.0.5 - Amadeus Station Context

This checkpoint lets users select groups in Planet View, assign them to Stations, review Station matches, and ask existing local or online models over multiple explicitly approved sources.

## Completed

- Planet drag selection, additive selection, cancellation, pan alternatives, selected counts and a control guide above asteroid visibility.
- Review Station context using ANY/ALL filters, including expanded file paths before approval. Existing selected-file review also supports multiple sources.
- Chat over 1-32 approved Markdown, CSV or extracted-PDF-text sources through Ollama, Gemini and NVIDIA. Separate source envelopes, complete source-set identity/provenance, and atomic resumption of unchanged source sets preserve authorization and history boundaries.
- Changed sources fail closed; new Station members do not silently enter approved context. Bridge version 12 requires reopening Electron.
- Updated goals, M9 execution plan, state and audit records distinguish implemented progress from pending acceptance.
- User confirmed a real two-Markdown conversation worked after manually adjusting context sizing.

## Not complete

- Context sizing remains manual. Sidebar and runtime estimates differ; a unified pre-send budget breakdown is pending.
- Exact saved settings for the reported successful run were not confirmed. Maximum usable provider/model capacity has not been measured or recorded. Configured token limits are not measured capacity.
- Named reusable Context Windows, per-window authorization controls, pins, adjustable package budgets and bulk undo remain planned.
- Sustained live chat quality, long-conversation continuity and representative capacity/performance acceptance remain open. Source snapshots and semantic retrieval are absent.
- Rich Markdown rendering, multiple document tabs, Markdown/CSV content search and robust CSV parsing remain unfinished. CSV context is text, not an analytics tool; scanned PDFs require OCR that is not implemented.
- Analytics tools and tool-using agents remain later milestones.

## Validation

118 automated tests passed. Production build with TypeScript passed. The isolated Electron regression passed Station approval of Markdown/CSV together, local/online chat, Gemini/NVIDIA switching, retry/draft recovery, responsive checks and restart.

Desktop provider responses are synthetic. The user's two-source success is a live observation, not a sustained reliability or maximum-capacity benchmark. Combined source content is capped at 80,000 characters and must fit configured model/history/output budgets.

This GitHub release is a source checkpoint; no new installer artifact is included.
