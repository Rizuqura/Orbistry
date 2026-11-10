# Orbistry v1.0.2 Victoria (Beta)

This release brings the Orbistry rebranding, UI revamp, native agent chat window, and revised Planet View gravity layout. The Windows app and shortcut are named **ORB Terminal**, using the latest Orbistry icon.

## Changes

- Refresh interface colors, typography, Context Box controls, agent profile/banner hierarchy, and smaller chat text. Urbanist, IBM Plex Mono, and Space Mono are hosted locally.
- Add a movable, resizable native chat pop-out with the same conversation, draft, Context Box, and live replies. Closing or attaching the window returns chat to Planet View; workspace reload closes its pop-out.
- Arrange Planet View around a larger universe sun with seven size-ranked orbital bands. Larger folders/files sit nearer their parent; folder-to-folder lines and root spokes are removed.
- Remove the light/flat view switches and 3D presentation; place the minimap on the right and default chat at the bottom left.
- Show token budgeting for the selected provider/key, including NVIDIA, Gemini, and OpenRouter; replacement keys reset session usage.
- Update Windows icons, desktop launch paths, application name, and release packaging. Preserve populated Orbistry/QTerminal profiles, encrypted credentials, existing vault metadata, and saved agent IDs.
- Include the initial codebase audit and reproducible native-window/provider/layout validation scripts.

## Beta limitations

The audit records an expanded budget-panel/chat overlap, excessive Fit View scaling for deeply nested folder chains, and a stale general Planet performance smoke fixture. Formatting and build-tool dependency advisories remain documented baseline issues. These limitations are not claimed fixed by this release. See report/audit-2026-11-10/AUDIT.md.

Windows installers are unsigned. Provider access remains bring-your-own-key or local Ollama; no API keys, research vaults, or private profiles are included. Restart the desktop process after upgrading main/preload code.

---

# Orbistry v1.0.0 — Victoria Beta

Draft first public beta: a local-first AI research workspace with optional BYOK providers.

- Workspace file reading and Planet View navigation over a user-owned vault.
- Reviewed, named Context Boxes with source identities, token estimates and explicit chat binding.
- User-created configurable agents, per-agent construction and profile/chat appearance.
- Streaming chat, cancellation, explicit retry, history and immutable local run provenance.
- Local CSV calculations, PDF text extraction and Windows image/scanned-PDF OCR.
- Ollama integration plus optional Gemini, NVIDIA NIM and OpenRouter configuration.
- Empty fresh-install agents, chats, Context Boxes, keys and research vault; existing profiles are preserved.
- Reduced packaging scope: no Next development server, tests, research data or source maps in the distributed application.
- Updated desktop/build dependencies and hardened renderer/IPC boundaries.

Beta limitations: model responses can be wrong; citation checks do not establish factual correctness. Context windows and provider quotas still apply. OCR is Windows-only and may misread content. CSV calculations are bounded, not arbitrary Python/code execution. No bundled models, accounts, hosted credits, cloud sync or advanced memory backend. Windows x64 is the validated packaging target; other platforms need independent testing. Installer signing and project-source licensing must be addressed before claiming a signed open-source release.

See [the measured release audit](docs/release-audit.md) for readiness, security findings, test evidence and remaining gaps. This draft does not publish a GitHub release.
