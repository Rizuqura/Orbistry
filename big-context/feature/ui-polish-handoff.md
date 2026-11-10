# Vault, scrolling and minimized-agent UI fixes

Requested on 2026-10-26 after the Victoria UI update. Product/version and the compact retro navbar remain unchanged.

- Vault header/search/path/change-folder controls no longer shrink when file lists are long. Header buttons have independent 24 px targets, without overlapping the minimize control. Only the file tree consumes remaining sidebar height.
- Removed the Context Boxes section from beneath the vault. Saved boxes and CRUD services are preserved. **Planet View → Context Box Manager → Open Context Box library** opens the existing selection/library controls in a dialog. Box details are separately mounted, so direct manager/Agent requests still work. Library open requests are vault-scoped. Attaching a box closes both dialogs and preselects without creating a chat. Chat’s context disclosure links to the manager.
- Root dark color scheme and standard/WebKit scrollbar colors cover the file tree, document/detail panes, forms and dialogs. No white scrollbar track is introduced. Original PDF page colors are unchanged.
- Orbistry’s minimized floating panel is a 52 px single-row bar: avatar/title, close and restore. Secondary actions, subtitle, timeline and composer are hidden while minimized. Expanded dimensions are retained. Restore clamps the full-size geometry after dragging the minimized bar near a viewport edge, preventing the composer from reopening offscreen.
- Added **CHronoZ · Coming soon** to Agent contacts with a keyboard-accessible preview. It is UI-only: no AgentConfig, provider, credential, session, source binding or message is created. Orbistry remains the executable agent. Contact count reflects the two visible entries.

Main modules: `components/{app-shell,knowledge-sidebar}.tsx`, `features/context-boxes/{context-boxes,context-box-manager}.tsx`, `features/agent/{agent-contacts.tsx,agent.css}`, `features/chat/{chat-panel,conversation-history}.tsx`, `app/victoria.css`.

Verification: 213 deterministic tests pass, plus TypeScript, formatting and production build. `scripts/electron-ui-polish-smoke.cjs` passes vault geometry/rescan, absent sidebar library, explicit library opening, dark scrollbars, minimized/restore geometry after dragging, and CHronoZ preview with no session/config writes. `electron-victoria-smoke.cjs` passes explicit context creation through the relocated library and shared Workspace/Planet chat. Screenshots/results are ignored under `test-results/polish-*.png`, `ui-polish.json` and `victoria*.png/json`. Electron uses isolated temporary data and synthetic provider transport; no live credentials or live-model grounding are exercised.

The updated `agent-electron-acceptance.cjs --context-boxes` suite also passes five-source review/cancel/double-submit, rename/remove/relink, preselection, confirmed context switching, changed-file evidence, provider failure/retry without duplicate messages, and safe deletion/restart. `electron-agent-workspace-smoke.cjs` passes Orbistry history/profile/instruction settings, image processing, source provenance and pane restoration alongside the dummy contact.

## Window-control fix and unused-code cleanup

The Planet chat minimize/restore button now uses fixed-size, centered SVG icons with tooltips instead of Unicode glyphs. Its 32 × 30 px hit area and zero padding override the shared header-button padding that squeezed the old 18 px control and let its glyph protrude below the button. The Electron polish check verifies both icon shapes remain inside their controls, plus minimize/drag/restore behavior.

Removed the unreferenced Tools marketplace component/styles, obsolete `.chat-history*` dropdown styles, a duplicate reopen-button rule, and superseded minimized-height/header-flex rules. Removed the unused global Active Context readiness argument/memo/helper and its retired unit test; active session-bound context validation and error formatting remain. The test count is now **212 passing**, down from 213 because that unused-policy test was removed. TypeScript also passes with `--noUnusedLocals --noUnusedParameters`; formatting and production build pass. Credentials, histories, provider adapters and source-binding storage are unchanged.

## Shared soft surfaces

At the user's request the shadow treatment now covers the whole interface. `app/soft-surfaces.css`, imported after the baseline styles, centralizes transparent decorative borders, filled controls, static soft hover shadows, elevated floating panels/dialogs and a soft keyboard-focus glow. Search fields get one shared outer glow instead of nested input highlights. Disabled controls do not gain hover shadows. Tables use subtle alternate-row fills instead of thin grid lines.

The compact navbar and amber active underline remain. Planet-world selection/evidence markings and native checked controls are excluded from decorative border removal. OS forced-color mode retains visible system borders/focus cues. No animation, backdrop filter, layout/resize dimensions, storage or provider behavior is changed.

`npm run test:surfaces:electron` checks Workspace, Planet, Agent, Settings and dialogs; transparent borders, hover shadows, keyboard focus (including while hovered), and the retained 25 px active navbar. It uses isolated data and synthetic providers. Screenshots/results: ignored `test-results/soft-workspace.png`, `soft-settings.png`, `soft-surfaces.json`. Production build and formatting checks pass.
