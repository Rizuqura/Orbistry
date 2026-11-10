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
