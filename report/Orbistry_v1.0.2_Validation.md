# Orbistry v1.0.2 Victoria (Beta) validation

Release scope: UI revamp, native agent window, Planet View gravity logic, and Orbistry rebranding. Windows product/shortcut name: ORB Terminal. Source/package/lockfile version: 1.0.2.

- Unit tests: 427 total, 425 passed, 2 skipped, 0 failures.
- Typecheck and secured production static export: passed.
- Native chat pop-out smoke: passed (same draft/conversation/Context Box, mocked reply, attach/native close, view switch, reload cleanup, child IPC restrictions).
- Planet gravity smoke: passed (seven root guides, 480-unit root, no folder-to-folder connections or root spokes).
- Actual packaged executable smoke: passed (empty state/CSP, native image/scanned-PDF OCR, CSV worker, custom agent and Context Box creation; no real-provider calls).
- Windows x64 NSIS package built with publishing disabled during validation; unsigned.
- Package-content audit passed: 1,523 entries, no forbidden source maps/tests/research data; required resources present.
- Installer bytes: 138,574,728. Unpacked bytes: 444,531,575.
- Installer SHA-256: 58fece61863b858d0c92e64b955eee9c4213cf0bc5d4c04780068131dc7fbf90.

The initial audit remains historical evidence, not a claim of a fully green release gate. Seven pre-existing formatting failures, moderate build-tool dependency advisories, expanded usage/chat obstruction, deep-folder Fit View scaling, and a stale general performance smoke fixture remain documented in audit-2026-11-10/AUDIT.md. No real-provider paid inference was used for these release checks. Installer signing is not configured.
