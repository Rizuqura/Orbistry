# Startup loading progress

Orbistry 1.0.0 Victoria shows a static, lightweight loading screen on every renderer start, including Electron relaunch and reload. The initial screen is included in the exported HTML and remains through vault/Station initialization and chat service restoration. It uses completed initialization milestones, not timed or simulated percentages; percentages describe stages rather than byte-level work.

Stages cover vault scanning, Stations and approved context, provider settings/history, Context Boxes, and agent restoration. Chat startup status is tagged with its vault path so the initial no-vault connection cannot prematurely finish the actual vault startup. Main workspace controls are inert until completion or explicit Continue. Errors show details with a Continue to workspace action; the normal workspace retains its existing recovery controls. The screen does not reappear on ordinary vault rescans or later chat operations. It creates no conversations, downloads no models and adds no animation loop.

Verification: 215 deterministic tests, strict TypeScript and production build pass. `npm run test:startup:electron` uses an isolated profile and synthetic transport to verify repeated startup visibility, inert controls, automatic completion, no conversation creation and scan-failure recovery. Screenshot: ignored `test-results/startup.png`.
