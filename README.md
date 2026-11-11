# Orbistry

A local-first workspace with configurable AI agents and a blank WorldView baseline.

**v1.0.2 Victoria (Beta)** — controlled architectural reset, 2026-11-11.

The reset is documented in [WorldView reset report](docs/architecture/WORLDVIEW_RESET.md). The [pre-reset guide](docs/archive/README-before-worldview-reset.md), release notes, prior architecture documents and audit evidence describe historical behavior.

## Current behavior

- **WorldView** opens an empty workspace: “Your world begins here.” It has no graph, file mapping, indexing, spatial interactions or restored visualization state.
- **Agent** keeps its existing workspace, construction controls, personality/model settings, appearance, chat history, streaming, cancellation and explicit retry.
- Agent inference uses system/personality instructions, user messages, included conversation history and provider inference settings. It has no file readers, retrieval callbacks, native tool declarations or local execution bindings.
- File, Context Box, Knowledge, node-source guidance, skill and Engine integrations in agent controls are temporarily inactive. Stored bindings remain historical metadata; selecting one cannot inject source content. A chat can start with no selected sources.
- **Workspace** retains the Vault explorer, Markdown editor, CSV/PDF/image readers, Windows OCR and explicit Vault operations. Those operations are independent of agent inference.
- Ollama, Gemini, NVIDIA NIM, OpenRouter, BYOK, provided-model selection, encrypted credentials and provider usage tracking remain available.

No future entity model, knowledge cards, indexing pipeline, context engineering system or ontology is implemented.

## Development

Use Node.js 22.18 or newer and npm on Windows:

```powershell
npm ci
npm run dev
npm test
npm run typecheck
npm run build
npm run test:worldview:electron
```

`npm run build` creates a static export with local PDF resources and a production content security policy. `npm start` opens the Electron app. `npm run package` and `npm run release` build Windows distributions.

There is no configured lint command. `npm run format:check` runs the repository's existing Prettier check. Older acceptance scripts that depend on source-bound chats or the removed map need migration; use the reset test above for the current baseline.

## Start a chat

1. Open **Agent**, choose **+ Add agent**, and create a profile.
2. Configure a local model or supported provider in Settings. Enter your own key in the provider form when needed.
3. Open the agent's settings to apply personality and model preferences.
4. Choose **+ New Chat**, then **Start Chat**. A file or Context Box is not required.
5. Send a message. Up to twelve recent exchanges fit within the configured context budget; older saved history remains available.

Existing conversations can continue even if their formerly bound files are missing or changed. Previous conversation text can contain information discussed before the reset; it remains conversation history, and its source files are not re-read.

## Data and privacy

Original Vault files, `.wonnyy/` Stations, Context Boxes, knowledge records, conversations and model-run records are preserved. The Electron user profile retains agent settings, managed images, provider configuration and encrypted API keys. No persistent visualization records were deleted; old browser preference keys are simply unused.

Conversation and run metadata still use the existing Vault-local `.wonnyy/` storage. This reset isolates inference from source content; it does not relocate conversation storage or the shared Vault services. A valid storage directory is still required.

Remote requests send instructions/personality, the current message and included conversation history to the chosen provider. Credentials remain in the main-process provider adapter and encrypted OS storage. There is no plaintext credential fallback or mandatory hosted Orbistry storage. Historical run records can remain after chat deletion.

## Implementation map

| Path | Responsibility |
| --- | --- |
| `components/worldview.tsx`, `app/worldview.css` | Stateless, source-free empty workspace |
| `components/app-shell.tsx` | Navigation, independent Vault workspace and agent controls |
| `features/agent/`, `features/chat/` | Existing agent UI, configuration, history and chat presentation |
| `electron/ai/chat-service.cjs` | Conversation lifecycle, admission, cancellation and durable runs |
| `electron/ai/standalone-chat.cjs` | Source-free model request and response pipeline |
| `electron/ai/providers/`, `llm-front-office/` | Provider adapters, model gateway, provided models and observability |
| `electron/vault-service.cjs`, `station-service.cjs` | Shared Vault/source infrastructure, retained independently |
| `electron/ai/context-box-store.cjs`, `knowledge-store.cjs` | Preserved persistent data infrastructure |

The older source-bound orchestrator, source validators and report adapters retain shared infrastructure and historical record consumers. They are not called by normal agent chat. See the reset report before reconnecting any of them.
