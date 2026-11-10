# Orbistry 1.0.0 Victoria — workspace ergonomics

The user requested a comfortable Workspace and Planet View, minimalist main UI/chat, retro context-building tools, and the release name **Orbistry 1.0.0 Victoria**. This authorizes the presentation work deferred by the earlier usage-monitor milestone. Existing providers, approvals, source binding, model execution, Stations and history remain on their shared services.

## Presentation and workflow

Follow-up UI fixes are documented in [the UI polish handoff](./ui-polish-handoff.md): the vault has no library beneath it, Context Boxes open through an explicit library dialog, scrollbars use dark colors, minimized chat has a single-row header, and CHronoZ is a UI-only placeholder contact.

`app/victoria.css` layers the release styling over existing components: system fonts, subdued dark surfaces, readable document and conversation text, restrained mint accents, clearer keyboard focus, independent message scrolling and a sticky composer. At the user's request, navigation retains the original compact 25 px terminal bar, uppercase monospace tabs and amber active underline, with the Victoria version label. Floating chat stays opaque, without blur or shadow animation. Default Explorer/chat widths are 240/400 px; resizing remains available. Compact desktop layouts and a stacked layout below 900 px retain controls. The native desktop minimum width remains 1100 px.

The Explorer is easier to read; Context Box library, source review, Station filtering and active-context manager retain terminal typography and amber/cyan cues with more spacing and larger targets. Planet graph geometry, selection, hit-testing and filtering are unchanged. Existing low-GPU flat mode remains available; no GPU benchmark or new GPU performance guarantee is claimed.

Shared chat keeps New Chat and History prominent. Context selection, switching, rename-box and saving Active Context are in the explicit **Context Box · choose or manage** disclosure. The searchable history and explicit creation picker still use the existing controller. The Agent contact view retains its own nested history and contextual details. Source evidence remains visible with every response; settings, reset, undock and floating controls remain available. Context controls do not create chats. The chat picker is centered, and radio inputs no longer inherit full-width text-input styling. Floating chat has priority over the budget badge when windows overlap, keeping its header accessible at compact desktop widths.

Markdown and CSV readers now expose **Add file to context**, using the existing approval dialog. Cancelling writes no approval or session; approval still does not create a chat. PDF approval remains unchanged. Close document is a keyboard-accessible button. The existing raw Markdown renderer is retained; this is a typography/layout change, not a new Markdown rendering engine.

## Identity and persistence

- Package and root lockfile versions: **1.0.0**. Packager product name, Electron app/window name and page title: **Orbistry 1.0.0 Victoria**. Navigation displays Orbistry with `1.0.0 Victoria`.
- `electron/user-data-path.cjs` recognizes the Victoria display-name directory and reuses populated Orbistry or legacy storage without moving files. Agent-only stored configuration also counts as populated. Explicit/isolated userData paths and populated current directories retain precedence. Deterministic tests cover these paths.
- Stable app ID `com.orbistry.desktop`, credential encryption, model settings, managed agent assets, browser preferences and vault-owned conversations/context storage retain their identities. No schema or bridge change; bridge remains **17**.

## Verification

`npm test`: **213 passed**. TypeScript and production build passed. `npm run test:victoria:electron` is the release UI acceptance command. It uses an isolated vault/userData, real app/UI/IPC and synthetic model transport. Checks cover application/title identity, Markdown/CSV reader actions, cancelled/approved review, explicit box creation without sessions, bound chat creation, response sources, history, keyboard disclosure/divider, sticky composer, Workspace/Planet continuity, compact desktop viewport and accessible document close. Screenshots: ignored `test-results/victoria-workspace.png`, `victoria-planet.png`, `victoria-compact.png`, `victoria-picker.png`; results: `victoria.json`.

Existing local chat (`electron-chat-smoke.cjs`), Agent workspace (`electron-agent-workspace-smoke.cjs`), bound-context/floating geometry (`agent-electron-acceptance.cjs`) and usage monitor (`electron-usage-monitor-smoke.cjs`) suites passed. They cover streaming/cancel/retry and history, PDF approval/page provenance, vault rescan/switch, profile/instructions, all eight floating resize directions during streaming, keyboard/reset, restart restoration, long names and deleted-source blocking. The broader rescan check caught an overlap with the vault minimize button; the controls now have separate targets. Fixture helpers explicitly open the context disclosure before interacting with moved controls. Synthetic transport checks do not establish live-model grounding or provider reliability. No installer package is generated by the Next production build.

Unrelated working-tree edits are preserved. Existing source approval and history migrations remain as described in their own handoffs.
