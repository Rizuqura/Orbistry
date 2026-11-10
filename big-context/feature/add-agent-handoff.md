# Add agent — 2026-10-27

**Agent → + Add agent** opens a small native dialog. Enter a name and choose **Create agent**; the new contact becomes selected. Cancel/Escape writes nothing. The dialog uses the existing dark surfaces and static soft shadow. Name errors stay inside the dialog and clear on editing. Configure the agent through its own three-dot menu, using the shared floating construction editor and reviewed Context Box bindings.

New profiles start from the same blank template as an unconfigured CHronoZ, not from CHronoZ's current saved data. Instructions, description, personality, per-agent model, skills, banner, wallpaper and Context Box bindings are empty. The draft graph contains Context → LLM → Output and an empty Skill slot. No active construction is applied automatically. Shared provider/model settings remain available for normal chat. There is **no default or inherited PFP**; a letter placeholder is shown until a local image is explicitly uploaded. Image removal/corruption fallback uses the new agent's own initial, not Orbistry's W.

Creation uses a trimmed, 1–120 character name with control characters rejected. Names must be unique among current contacts, ignoring case. A stable creation UUID maps to an `agent-…` ID; identical retries return that profile, conflicting requests fail, and duplicate UI submissions are guarded immediately. The backend accepts only name/creation ID, so a create request cannot inject images, instructions, agent IDs or executable capabilities.

Agent schema 1, application-data storage location and existing built-in IDs remain unchanged. The list merges built-in defaults with persisted custom profiles. Reads do not rewrite the file. Creation is serialized and saves only a blank profile. Existing Orbistry/CHronoZ settings, images and conversations are preserved. Unknown agent IDs still cannot start a conversation; custom chats require a persisted profile and an explicitly selected Context Box. New custom agents use the same protected grounding, provider, streaming/cancel/retry and immutable source/run pipeline. Registered capabilities remain separate; a contextual Skill guide cannot install them.

Agent profiles are application-wide; chats and last-selection keys retain their existing per-vault scope. Creating/selecting an agent never creates a chat. Draft text and history are isolated by stable agent ID. Current per-agent draft text remains in-memory, as before; profile/construction and chats persist through restart. Agent deletion, arbitrary executable skills and cloning configured agents are outside this increment.

## Verification

- **261 deterministic tests pass**, zero failed or skipped. New tests cover blank/image-free defaults despite a customized CHronoZ, persistence/listing without read-time writes, duplicate IDs/names, invalid or privileged create fields, independent construction/PFP reset and actual custom-agent identity in bound-chat requests.
- Strict TypeScript, formatting and production build pass.
- `scripts/electron-add-agent-smoke.cjs`: isolated vault/profile, synthetic provider. Cancellation, duplicate-name recovery, double-submit guard, two custom contacts without PFPs, floating construction and rename/apply, separate drafts/histories, actual model identity/preferences, and selected custom agent/chat restoration pass. Evidence: ignored `test-results/add-agent.json`, `add-agent-dialog.png`, `added-agents.png`.
- The existing CHronoZ Electron regression passes, retaining built-in separation, blank defaults, history and restart behavior.

The optional `createAgent` IPC method is guarded by the existing handshake and exclusive mutation admission under bridge **18**. Restart Electron to load the updated backend/preload. Transport verification is synthetic; this increment does not establish live-model answer quality.
