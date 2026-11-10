# CHronoZ chat and Planet selection space

Requested 2026-10-26. Product remains Orbistry 1.0.0 Victoria. Desktop bridge is now **18**; restart Electron to load the new preload/backend contract. Earlier placeholder-only CHronoZ descriptions are superseded by this release.

## Planet View

- Wider direct-file and subtree orbital gaps, with eight readable files per inner ring instead of ten, keep node families more separated. Unsupported-file asteroid belts retain their compact placement. Coordinates remain deterministic and filesystem/Station identity is unchanged.
- Minimum screen-space picking radii are 18 px for small directories, 16 px for readable files and 8 px for asteroids. Direct rendered-body hits still win over another node's invisible assistance area; far zoom still excludes unreadable file targets. Tests cover the larger readable-file target and direct-hit priority.
- **Focus canvas** hides both side panels and minimizes the floating chat. It frees approximately the combined sidebar widths while preserving selection, filters, panning and source approvals. **Exit focus** restores the panels; chat can be restored explicitly. Opening the context manager exits focus. The toggle also remains available in the unavailable/scanning fallback. No animation or new frame loop is added.

## Real agents

Orbistry Agent (`wonnyy-agent`) and CHronoZ (`chronoz`) use the same provider/runtime/context/citation pipeline. Each has its own selected conversation, searchable history, in-memory draft and profile preferences. Selecting an agent does not create a chat. Explicit chat creation binds both a Context Box and agent ID. Duplicate creation IDs cannot be reused with a different agent. UI Clear history removes only the selected agent's conversations.

CHronoZ starts with empty **custom** instructions, no custom skills and no uploaded profile picture (C initials fallback). Shared protected Orbistry grounding rules still apply, with CHronoZ's actual identity in preflight, execution and correction prompts. There is no inherited Orbistry persona, avatar or custom preference. The same profile editor can configure CHronoZ later. No skill execution or marketplace subsystem is added; the exposed custom-skills list is empty.

Agent settings remain schema 1 in the existing app-owned `agents.json`; CHronoZ defaults are supplied lazily without a read-time rewrite. Explicit profile saves preserve other agents and managed assets. Existing Orbistry profile/avatar and legacy conversations remain unchanged. Existing conversation schemas and filenames are retained; legacy absent-agent rows still normalize to Orbistry in memory. Per-run agent ID/policy/custom-instruction hashes remain immutable. New per-vault/per-agent selection keys extend the existing `qterminal-active-chat:` localStorage convention without removing the old global selected-chat key.

Agent selection is blocked while another agent is generating or during connection/metadata loading. Backend execution obtains the agent from the persisted conversation, not a renderer-supplied send-time identity. Settings/credentials/models remain shared app settings; source capability and history stay conversation-bound. No profile reset, credential migration or full-document snapshot is introduced.

## Verification

- **215 deterministic tests pass**, including new CHronoZ default/no-write/profile isolation, identity/custom-preference separation during actual orchestration, duplicate-ID agent validation and forgiving screen-space picking. Legacy source/history/provider/layout tests remain in the suite.
- TypeScript including `--noUnusedLocals --noUnusedParameters`, formatting and production build pass.
- `npm run test:chronoz:electron`: real UI/IPC/filesystem, synthetic Ollama transport. Covers Focus canvas width/minimization, blank CHronoZ profile/settings, two independent bound conversations, correct request identity without Orbistry preferences or prior messages, draft/history isolation, restart restoration and per-agent Clear history. Evidence: ignored `test-results/chronoz.json`, `chronoz-agent.png`, `planet-focus.png`.
- Existing Agent workspace Electron regression passes: Orbistry profile/avatar editing, protected-policy conflicts, context-bound prompts, cancelled setup, history restoration, pane controls and empty-source blocking. Both Electron checks use isolated profiles and synthetic transport. Prompt provenance now records `orbistry-conversation-v14-multi-agent`.

Live-model grounding is not exercised or claimed by these synthetic transport checks. Source/citation validation remains distinct from factual correctness.
