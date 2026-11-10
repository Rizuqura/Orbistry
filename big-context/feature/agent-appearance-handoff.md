# Agent banners, chat wallpapers and readable messages

Implemented 2026-10-27. Access **Agent → the contact's three-dot button → Profile banner & chat appearance** in the existing floating construction editor. General Settings remains unchanged.

## Appearance

Every agent has separate optional banner/wallpaper settings. The editor offers upload/change/removal, plain-dark or soft-dot backgrounds, custom-image wallpaper, 0–90% image dimming and 14/15/16/18 px message text. A preview shows the pending appearance. The banner appears above the profile identity in the editor, behind its contact row and behind its chat header. Wallpaper is limited to the conversation timeline; the composer remains separate and sticky. Opaque, softly rounded message bubbles preserve contrast over images.

The existing draft/apply workflow covers appearance too: Save draft persists pending appearance without changing live chats; Save & apply updates that agent's profile and chats. Closing/discarding unsaved changes writes nothing. The same controls apply to all default agents; one agent's settings do not alter another's. Existing profiles acquire default appearance in memory without read-time migration.

The native picker accepts PNG/JPG/WebP up to 5 MB and reuses the existing image decoder/dimension limits. Banners are center-cropped to 1600×480; wallpapers retain aspect ratio and are bounded to 1600×1000. Processed PNGs are limited to 4 MB. Managed files are stored under the existing app-owned `agent-assets` directory using SHA-256 references. Agent schema 1 adds optional active `appearance` and construction `draftAppearance` metadata; graph JSON never contains image bytes or arbitrary file/remote URLs. Missing/corrupt assets fall back to an unadorned presentation. Removal clears references; existing managed files are retained rather than deleting potentially shared assets.

Preload/guarded IPC adds optional `chooseAgentBackdrop` and extends `saveAgentConstruction` with validated appearance settings and processed local image payloads. Bridge 18 is retained; restart Electron to load the added capability. Neither images nor appearance settings become model evidence or provider attachments. Research source permissions, Context Box membership and historical conversation/run content remain unchanged.

## Message presentation

Completed assistant responses use a dependency-free, React-escaped Markdown subset: paragraphs, headings, bold, italic, strike-through, inline/fenced code, ordered/unordered lists, quotes, rules, HTTPS links and bounded rectangular tables. Unsupported/malformed structures remain text. This is not a complete CommonMark/GFM implementation; deeply nested lists, full nested emphasis, math typesetting and syntax highlighting are not provided. Images are represented by text rather than loaded, raw HTML is never interpreted, and unsafe URL schemes are not made clickable. HTTPS links open only on explicit user action through the existing desktop policy.

The renderer preserves the original saved answer, numbers and source provenance. Computed-source footers retain their separate evidence styling. Factual correctness and citation validation remain runtime responsibilities; Markdown rendering does not establish correctness. Completed-message rendering is memoized; provisional streaming content stays plain text until finalized to avoid reparsing the full stream on every token. No blur, animated wallpaper, shader or new package is introduced. Composer placement, cancellation and timeline scrolling keep their existing behavior.

The system prompt now requests readable Markdown inside the final answer string, while retaining protected grounding and structured response rules (`orbistry-conversation-v16-readable-markdown`). Appearance choices are never included in that prompt.

## Verification

- **240 deterministic tests pass**, including safe Markdown tokenization, literal code and numbers, escaped table cells, blocked link/image execution, appearance draft/apply/restart/isolation, image validation and removal. Existing provider/context/history tests remain included.
- Strict TypeScript, formatting and production build pass.
- `npm run test:appearance:electron`: real UI/native image processing/IPC/filesystem with synthetic provider transport. Checks upload/preview, persisted local references, separate draft/live appearance, other-agent isolation, contact/header/timeline updates, readable bold/lists/code/tables, preserved saved response/source identity, inert HTML/images, text sizing, stable composer during timeline scrolling, restart and removal. Evidence: ignored `test-results/appearance.json` and `chat-appearance.png`.
- Existing floating construction Electron regression passes, including graph editing, draft/apply, applied prompts, PFPs, Close/Escape protection and restart.

Synthetic responses verify rendering and transport plumbing, not live-model Markdown adherence or grounding quality.
