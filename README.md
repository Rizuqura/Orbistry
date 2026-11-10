# Orbistry

A local-first AI research workspace and agent environment.

**v1.0.2 Victoria (Beta)** · Version: 1.0.2 · Codename: Victoria · Status: Beta

[v1.0.2 release notes](big-context/release-1.0.2.md): UI revamp, native agent window, Planet View gravity layout and Orbistry rebranding. Token/credit savings remain unverified end-to-end; see the [comparison status](report/Orbistry_Token_Credit_Comparison_Status.md).

This README covers using Orbistry and learning how its software works. Start with installation and the first research workflow, then follow the learning guide to trace inputs, processing, outputs and code.

## Contents

- [What Orbistry is](#what-orbistry-is) and [current capabilities](#current-capabilities)
- [Installation](#installation) and [development commands](#development)
- [First research workflow](#first-research-workflow)
- [Edit Markdown in the file reader](#edit-markdown-in-the-file-reader)
- [BYOK](#byok), [privacy and storage](#privacy-and-storage), and [known limitations](#known-limitations)
- [Concepts and vocabulary](#learning-guide-concepts-and-vocabulary)
- [Inputs and outputs](#inputs-and-outputs)
- [How the software works](#how-the-software-works)
- [Where data is stored](#where-data-is-stored)
- [Code map](#code-map-for-learning-and-changes)
- [Software development workflow](#software-development-workflow)
- [Troubleshooting](#troubleshooting-while-learning)
- [Self-study path](#suggested-self-study-path)

## What Orbistry is

Orbistry brings a user-owned file vault, Planet View, reviewed Context Boxes and configurable agents into a desktop workspace. Model access is optional: connect a local Ollama model or bring your own key for a supported external provider. There is no required Orbistry account, subscription, hosted database or cloud sync.

Fresh installations start with **no agents, chats, Context Boxes, API keys or research files**. An empty `Documents/Universe` folder is created. Choose another folder in Settings, or add your own files, then create an agent. Existing profiles and explicitly chosen vaults are preserved when upgrading.

## Current capabilities

- Workspace explorer/document reader and Planet View, with local Stations and source selection.
- Named Context Boxes built through explicit source review, token estimates and stable source identities.
- **Agent → + Add agent**: blank agents without photos or custom knowledge. Their **⋯** menu opens construction, model, personality, guidance and appearance settings.
- Context Box or single reviewed file bindings for agent nodes; explicit research selection when creating chats.
- Streaming Markdown chat, cancellation, retry, searchable history, message deletion and local run provenance.
- Markdown, CSV and PDF text reading; PNG/JPG/JPEG and scanned-PDF OCR on Windows with an installed OCR language.
- Bounded local CSV inspection, filtering, grouping, aggregation, date trends and basic statistics. No arbitrary Python or user-code execution.
- Ollama, Gemini, NVIDIA NIM and OpenRouter; manual context/output budgets and provider usage information where available.
- [CHronoZ Engine node](docs/ENGINE_NODE_CHRONOZ_SETUP.md): bind a verified local portable bundle to an applied agent, then ask a tool-capable LLM for existing monthly PDFs in chat. Source-free Engine chats return verified PDF attachments; Construction also provides direct report controls.

## Installation

Windows x64 is the currently validated release target. When a verified Victoria Beta release is available, use its `ORB-Terminal-1.0.2-Victoria-Beta-win-x64.exe` installer. Source commits and tags do not automatically publish an installer. Unsigned beta installers may trigger Windows reputation warnings; verify the published SHA-256 before installing.

To build from source, use Node.js **22.18 or newer** and npm on Windows:

```powershell
git clone https://github.com/Rizuqura/Orbistry.git
cd orbistry
npm ci
npm run build
npm start
```

No Python, model weights or Ollama service is bundled. Install Ollama separately only if using local models. Remote providers require an internet connection, your own key and provider allowance. Windows OCR needs an installed Windows OCR language.

## Development

```powershell
npm run dev          # Next development renderer + Electron
npm test             # Deterministic synthetic tests
npm run typecheck
npm run build        # Static export, local PDF resources and production CSP
npm run package      # Windows x64 unpacked application + package audit
npm run release      # Windows x64 NSIS installer + package audit
npm run audit:size   # Measured logical disk-size report
npm run test:release:electron
```

Commit `package-lock.json`; use `npm ci` for repeatable dependency installation. Packaging requires standard Electron/electron-builder download access. Production uses local static files and does not run a Next.js web server. `build/` contains required source icons, not generated installers. Outputs go to ignored `dist/`.

## First research workflow

1. Choose a vault in Settings or add files to the empty default vault and rescan.
2. Select files, review sources and choose **Create Context Box**. Saving a box does not create a chat.
3. Open **Agent → + Add agent**, then its **⋯** settings to configure identity, model and optional reviewed knowledge/guidance.
4. Configure a model in Settings. Choose **+ New Chat**, confirm the research source and start the conversation.
5. Inspect source links, filters and calculations. Retry a failed turn explicitly; sources are never silently shortened to fit a budget.

## Edit Markdown in the file reader

Open a `.md` or `.markdown` file in Workspace and choose **Edit Markdown**. Edit its source text, then choose **Save** or press **Ctrl+S** (Cmd+S on macOS). Saving updates the original vault file and refreshes source status. **Cancel** returns to reading; the app asks before discarding unsaved changes. Drafts survive switching workspace views, but are not saved across application restarts.

Only Markdown files are editable; CSV, PDF and images keep their existing readers. If another program changes a file while you edit, saving is refused and your draft remains available: copy your edits, reopen the file and reconcile the changes. Editing is limited to existing files up to 10 MB and rejects linked files/folders and application metadata. Save your draft before adding the file to AI context.

For editor acceptance checks, run `npm run test:markdown:electron` (isolated synthetic vault/profile; no live provider needed).

## BYOK

Enter keys in **Settings → provider → API key**. Keys are encrypted with Electron safeStorage in your OS user profile; they are not embedded in the renderer or research files. Secure storage must be available; there is no plaintext fallback. No key is included in source or release defaults. Provider prices, token limits, availability and billing remain the provider's responsibility. Remote models are discovered through the provider, not assumed from a fixed catalog.

## Privacy and storage

Research files remain in your chosen vault. `.wonnyy/` inside that vault stores local Stations, Context Boxes, chat history and immutable model-run records. The Electron profile stores settings, agents, managed images and encrypted credentials; Chromium stores UI preferences/caches there. The selected vault path persists in `vault-settings.json`. Upgrades can reuse historical application profiles to preserve existing encrypted keys.

With a remote provider, the request includes reviewed research/guidance text, questions and included history; CSV requests can include column profiles, samples and computed results. That provider's policies apply. Ollama communicates with a separately running loopback service. Model discovery/usage checks may contact configured providers. There is no mandatory Orbistry telemetry or cloud storage.

Run records can retain questions, answers and analysis evidence after chat deletion. Source hashes identify historical versions, but complete source snapshots are not retained; source links open current files. Protect and back up both your vault and application profile. Do not use the app as a guarantee of confidentiality or factual accuracy.

## Known limitations

- Beta software: answers, inferred conclusions and OCR can be wrong. Citation IDs and numeric checks validate constrained structure/evidence, not semantic correctness.
- Full document/guidance content must fit the selected model window. The displayed estimator is conservative; configure a larger supported cloud window or smaller boxes. Local Ollama retains a 32K application ceiling.
- CSV analysis is bounded JavaScript computation, not general SQL, joins, forecasting, training or an executable skill marketplace.
- Image reading supplies OCR text, not general visual chart/photo understanding. OCR is currently Windows-only.
- Windows x64 packaging is tested here. macOS/Linux, signing and live-model grounding need separate verification.
- Legacy Orbistry/CHronoZ profiles may remain visible on upgraded installations; a clean installation has no seeded agent.

## Project structure

`app/`, `components/`, `features/` and `lib/` implement the static renderer. `electron/` owns controlled filesystem access, providers, workers, storage and IPC. `types/` declares the desktop contract. `scripts/` holds reproducible build/audit and synthetic acceptance tooling. `big-context/` preserves design/handoff history and is not packaged.

See [release notes](RELEASE_NOTES.md), [audit and measurements](docs/release-audit.md), [security](SECURITY.md) and [contributing](CONTRIBUTING.md). No project-source license has been selected (`UNLICENSED`); public visibility does not imply an open-source license. Third-party notices remain applicable.

## Learning guide: concepts and vocabulary

Use this guide to understand both the research workflow and the implementation. It describes the current code; `big-context/` contains historical plans and handoffs that may describe different versions.

| Concept | Meaning in this application |
| --- | --- |
| Vault | Your folder of research documents and datasets; the main evidence input. |
| Planet View | A visual way to navigate local sources and workspace objects. |
| Station | A named group with file assignments. Assigning files does not move the originals. |
| Context Box | A named, reviewed source selection with identities and token estimates. It does not train a model or freeze a copy of all source contents. |
| Agent | Saved identity, appearance, model choices and construction settings, including optional reviewed context/guidance bindings. |
| Conversation | Questions, responses and execution attempts associated with an agent and research selection. |
| Brain Scope | A backend-controlled manifest identifying the sources an operation can read and their content hashes. |
| Model run | A recorded execution attempt, with provider/model, source provenance, response or error, and diagnostics. A conversation can contain multiple runs. |
| Provider / model | A provider connects the app to a service; the model is the particular AI selected through it. |
| Token budget | The estimated text capacity available for instructions, evidence, history, question and response. |

## Inputs and outputs

There are three main inputs: **research evidence**, **configuration**, and **your question/history**. Guidance influences behavior or style; it does not automatically become factual research evidence.

| Input | Processing | Output |
| --- | --- | --- |
| `.md` / `.markdown` | Read document text from the vault | Document preview and approved text for context |
| `.csv` | Read data; perform supported bounded analysis locally | Column profiles, samples, computed results and model explanation |
| `.pdf` | Extract text with PDF.js; use Windows OCR for scanned content where available | PDF viewer and page-marked research text |
| `.png` / `.jpg` / `.jpeg` | Read image and perform Windows OCR | Image preview and recognized text |
| File selections / Stations | Review sources and construct manifests | Context Boxes and controlled Brain Scopes |
| Agent settings / guidance | Validate and apply configuration | Saved identity, appearance and runtime instructions |
| Model settings / key | Select provider/model and budgets; encrypt credentials | Saved configuration and authorized provider requests |
| Question and included history | Combine with approved evidence and host instructions | Streaming Markdown answer, source links, status and diagnostics |

Unsupported extensions are not research inputs. Scanning skips `.git`, `.wonnyy`, `.engine`, `node_modules` and recognized CHronoZ portable bundles. Engine runtimes are not research documents; copy a report PDF into a regular research folder to review it. Files must pass backend access and size checks; visibility in the explorer does not guarantee processing succeeds.

Planet View also hides `agentContext.memory` and its contents, while retaining those files for explicit agent bindings and vault browsing. Add research by dragging/copying files from your device into an ordinary vault folder in File Explorer, then click **Rescan vault**.

The main user-facing output is the chat answer. Persistent outputs also include Station metadata, Context Boxes, conversations and model-run records. Generated answers do not automatically rewrite your research documents. Image research receives OCR text rather than general visual chart/photo understanding.

CSV analysis uses bounded JavaScript computation in workers. The model helps plan supported operations and explain computed evidence; it does not execute arbitrary Python or unrestricted code. The runtime currently limits combined approved CSV data for analysis to 50 MB.

### A small exercise you can check yourself

Save this as `trial.csv` in a disposable vault:

```csv
month,revenue,cost
2026-01,100,60
2026-02,150,90
```

Rescan, open the file, review it as context, create an agent and start a chat with that source. Ask: "What is total revenue across these rows? State the file, columns and row count used." The expected total is **250**, which you can verify by hand. This is an illustrative learning exercise, not a report of a live-provider test.

Edit a value and rescan to observe source changes. Later turns can read current files and record new hashes; previous answers retain their original provenance. A Context Box is a source binding, not a version-control backup.

## How the software works

### Application layers

```text
User actions in the Electron window
                 |
React / Next.js renderer (components and features)
                 |
window.orbistryDesktop (explicit preload bridge)
                 |
Electron IPC handlers (validated desktop requests)
                 |
Main-process services
    |                 |                      |
Vault readers     Context/chat runtime    Profile settings
    |                 |                      |
Local files       Provider adapters       Encrypted credentials
                      |
              Ollama or remote model
                      |
              Events and final result
                      |
              Chat UI + local records
```

The **renderer** is the interface running in Electron's Chromium window. The **main process** is the Node.js side that owns desktop services. **IPC** means inter-process communication: named requests and events between those sides. The preload bridge exposes specific capabilities rather than unrestricted Node.js or filesystem access.

[next.config.ts](next.config.ts) uses `output: "export"`. Development runs a Next.js server; production loads `out/index.html` from disk. Provider networking and file access run through Electron services. A normal browser can display the renderer, but does not have the desktop bridge needed for vault and AI operations.

### Follow one question through the code

1. [app/page.tsx](app/page.tsx) renders [components/app-shell.tsx](components/app-shell.tsx), which connects the workspace, source views, agents and chat.
2. [use-chat-runtime.ts](features/chat/use-chat-runtime.ts) manages chat actions and interface state. [desktop-client.ts](features/chat/desktop-client.ts) checks renderer/backend API-version compatibility.
3. The interface calls `window.orbistryDesktop.ai.chat(...)`. [electron/preload.cjs](electron/preload.cjs) sends `ai:chat` IPC. [electron/ai/ipc.cjs](electron/ai/ipc.cjs) registers AI handlers and returns structured results or errors.
4. [ChatService](electron/ai/chat-service.cjs) validates the request, resolves the conversation/agent/model, manages cancellation and mutation ordering, and records the pending attempt.
5. [orchestrator.cjs](electron/ai/orchestrator.cjs) prepares the approved scope, reads sources through controlled readers, and checks identities and hashes. Source/guidance content must fit the configured budget; research sources are not silently shortened just to fit.
6. Where relevant, the dataset planner and worker compute supported CSV results. Prompt construction combines the question, evidence, app-owned instructions, agent guidance and budgeted history.
7. The selected provider adapter sends the request to Ollama, Gemini, NVIDIA NIM or OpenRouter. Progress and response events return through `ai:event` to update the chat interface.
8. Response validation checks supported citation/evidence structure and applicable numeric evidence. Some invalid results trigger a bounded repair attempt; unrecoverable failures produce an error.
9. The runtime writes a model-run record. ChatService applies the recorded result to the conversation, and the renderer shows the final state. Failed or cancelled executions can also leave attempt/run evidence.

Only included history goes to the model; a long saved conversation does not mean every previous message is sent on each turn. Missing readable evidence can produce `CONTEXT INSUFFICIENT` without executing a model. Partial evidence can produce `LIMITED CONTEXT`. Structural and numeric checks do not prove an answer's overall factual correctness.

## Where data is stored

Separate your evidence, saved application state, and generated software when learning or backing up the project:

| Location | Contents / role |
| --- | --- |
| Your chosen vault | Original research files; the evidence input |
| `<vault>/.wonnyy/stations.json` | Station assignments and active context metadata |
| `<vault>/.wonnyy/context-boxes.json` | Saved Context Boxes |
| `<vault>/.wonnyy/conversations/<id>.json` | Conversation messages and attempts |
| `<vault>/.wonnyy/model-runs/<run-id>.json` | Immutable provenance, response/error, usage where supplied, and diagnostics |
| Electron user-data profile | Settings, agents/assets, encrypted credentials, Chromium preferences and caches |
| `<profile>/vault-settings.json` | Selected vault path |
| `<profile>/model-settings.json` | Provider/model configuration and budgets |
| `<profile>/agents.json`, `<profile>/agent-assets/` | Agent definitions and managed appearance images |
| `<profile>/provider-credentials.json` | Credentials encrypted through Electron `safeStorage` |
| `<profile>/research-outbox/<vault-hash>/skill/` | Specialized research knowledge proposals and reviewed records, outside the source vault |
| `.next/` | Generated Next.js build/cache files in this repository |
| `public/pdf.worker.min.mjs`, `public/pdfjs/` | Generated local PDF runtime resources copied from dependencies |
| `out/` | Generated production HTML, CSS, JavaScript and assets |
| `dist/` | Generated packaged application and installer outputs |
| `build/` | Tracked source icons used for packaging |

On Windows, the profile normally lives under `%APPDATA%`. Its exact folder comes from Electron's `app.getPath("userData")`. [user-data-path.cjs](electron/user-data-path.cjs) can reuse populated historical `QTerminal`, `wonnyy-amadeus` or `Wonnyy` profiles to preserve settings and encrypted keys. An explicitly configured profile takes precedence; do not assume every installation uses the same folder name.

Back up both the vault and application profile. Deleting a chat does not necessarily delete independent model-run records. Full source snapshots are not retained, and source links open current files. Copying encrypted credential files to another machine does not guarantee that the new OS user can decrypt them.

Research knowledge consolidation is a specialized feature registered for the `wonnyy-agent` identity, not automatic memory for every new agent. Proposals remain pending review. Approval is an operator-only path in [scripts/knowledge-review.cjs](scripts/knowledge-review.cjs), not a renderer or model permission. Read [research-knowledge.cjs](electron/ai/research-knowledge.cjs) and [knowledge-store.cjs](electron/ai/knowledge-store.cjs) before changing this feature.

## Code map for learning and changes

| Path | Responsibility |
| --- | --- |
| `app/` | Next.js entry point, root layout, global styles and themes |
| `components/` | Workspace shell, sidebar, Planet View, document/PDF viewers and layout panels |
| `features/chat/` | Runtime hook, history, Markdown rendering, readiness, presentation and desktop client |
| `features/agent/` | Agent workspace, construction, settings, appearance and knowledge proposal UI |
| `features/context-boxes/` | Source review and Context Box management |
| `features/model-settings/` | Provider/model configuration UI |
| `features/usage-monitor/` | Provider usage presentation |
| `lib/` | Planet layout/navigation/hit testing, Station projections and related helpers |
| `electron/main.cjs` | Startup, window security, vault handlers and service wiring |
| `electron/preload.cjs` | Explicit `window.orbistryDesktop` API |
| `electron/vault-service.cjs` | Vault scanning, controlled reads, PDF extraction and image reading |
| `electron/local-ocr.cjs`, `electron/windows-ocr.ps1` | Local Windows OCR integration |
| `electron/station-service.cjs` | Stations, source selection, manifests and controlled Brain Scope reads |
| `electron/ai/chat-service.cjs`, `orchestrator.cjs` | Conversation lifecycle and execution pipeline |
| `electron/ai/prompt-builder.cjs`, `runtime-context.cjs`, `history-budget.cjs` | Prompt assembly, app-owned runtime guidance and history budgeting |
| `electron/ai/dataset-*.cjs`, `statistics.cjs`, `numeric-equations.cjs` | Bounded dataset computation and numeric evidence |
| `electron/ai/response-validation.cjs` | Response structure and citation checks |
| `electron/ai/providers/` | Provider requests, response conversion, streaming and errors |
| `electron/ai/*-store.cjs` | Validated persistence for conversations, agents, boxes, runs, knowledge and credentials |
| `types/ai.ts`, `types/electron.d.ts`, `types/graph.ts` | Type contracts for AI, desktop bridge and graph data |
| `scripts/` | Build preparation, export hardening, acceptance checks, audits and operator tools |
| `docs/`, `big-context/` | Release evidence and design/history documents; check dates and scope |

Some names still say **Orbistry** or **Amadeus** because they are historical internal identifiers. The current product name is Orbistry. Follow actual imports from `app/page.tsx` and `app-shell.tsx` to identify active components rather than assuming similarly named files are interchangeable.

## Software development workflow

1. Read [AGENTS.md](AGENTS.md) and [CONTRIBUTING.md](CONTRIBUTING.md). Before framework changes, read the relevant installed guide under `node_modules/next/dist/docs/`. Static export guidance is in `01-app/02-guides/static-exports.md`.
2. Run `npm ci`, then `npm run dev`. This prepares PDF resources, starts Next.js on port 3000, waits for that port and launches Electron. Use synthetic files and isolated profiles for testing.
3. Locate the responsible layer in the code map. Visual work usually begins in components/features/CSS. File, context, storage and provider behavior usually requires Electron services.
4. For a new desktop capability, update bridge types, preload API and IPC handler together. Preserve API-version compatibility and backend request validation.
5. Add meaningful regression coverage when changing runtime, storage, capability or security boundaries.
6. Run `npm test`, `npm run typecheck`, `npm run build` and the relevant Electron acceptance scripts, as required by contributing guidance. Inspect the diff and keep personal research, keys and generated outputs out of commits.

Additional useful commands:

| Command | Purpose |
| --- | --- |
| `npm run dev:web` | Renderer server only; a normal browser lacks desktop capabilities |
| `npm start` | Launch Electron against an existing `out/` build; does not build first |
| `npm run desktop:preview` | Build and launch the production app locally |
| `npm run test:chat:electron` | Build and exercise chat in Electron |
| `npm run test:dataset:electron` | Build and exercise dataset integration in Electron |
| `npm run test:packaged:electron` | Exercise an existing packaged build |
| `npm run format:check` | Check formatting for the integration paths listed in `package.json` |

[package.json](package.json) is the command reference. Live-provider tests have additional service/credential requirements and may consume provider allowance; inspect their scripts first. `.env.example` documents an optional live-test key, not normal desktop credential setup. Enter application keys in Settings.

For controlled development/testing, `ORBISTRY_VAULT_PATH` overrides the vault at startup. `ELECTRON_START_URL` selects an allowed development renderer URL; `dev:desktop` sets it to `http://localhost:3000`. Normal users choose vaults and credentials through Settings.

### Build inputs and outputs

```text
Source files + package-lock.json
    -> npm ci: install dependencies into node_modules/
    -> prepare:pdf: copy worker/resources into public/
    -> next build: generate .next/ and out/
    -> secure-export.cjs: apply production CSP to exported HTML
    -> Electron: load out/index.html
    -> electron-builder: package runtime + exported interface
    -> audit-package.cjs: inspect packaged output
    -> dist/: unpacked app or Windows installer
```

`npm run build` covers PDF preparation, Next build and export hardening. `npm run package` adds Windows x64 unpacked packaging and an audit; `npm run release` adds the NSIS installer and audit. These commands create local artifacts; they do not upload or publish them.

The package uses the compiled static UI and Electron runtime code. Next.js/React source packages are excluded by packaging rules because the interface has already been compiled. Tests and design handoff documents are not release inputs. Keep the tracked icons in `build/`; `.next/`, `out/`, `dist/` and generated PDF resources are ignored.

## Troubleshooting while learning

| Symptom | Check |
| --- | --- |
| Desktop capabilities missing in browser | Launch Electron with `npm run dev`, or build and use `npm start`. |
| Production interface fails to load | Run `npm run build` first; Electron needs `out/index.html`. |
| Port 3000 occupied | Stop the conflicting process or align the dev server port and desktop URL/wait settings. |
| Empty workspace | Fresh installs are empty. Check vault path, add supported files and rescan. |
| Agent has no research context | Review/bind sources and confirm the selection when creating a chat. |
| PDF/image has no usable text | Check extraction, OCR availability and installed Windows OCR language. |
| Model unavailable | Check provider/model, Ollama service or API key, connection, model access and allowance. |
| Key cannot be stored | OS secure storage must be available; no plaintext fallback exists. |
| Context over budget | Select fewer/smaller sources or a supported larger model window. Local Ollama has a 32K application ceiling. |
| Restart-required/API mismatch | Fully restart Electron after main/preload changes; renderer hot reload cannot replace them. |
| Busy or cancelled operation | Wait or stop the response. Vault/context changes can cancel active work to preserve consistency. |
| Old agent names on upgrade | The app may be preserving a legacy profile. Clean installs have no seeded agent. |

## Suggested self-study path

Use disposable research files and work through these exercises:

1. **Find the UI entry.** Read `app/page.tsx`, `app/layout.tsx` and `components/app-shell.tsx`. Identify how the shell connects views.
2. **Trace a file read.** Follow `vault.read` from preload to main to `vault-service.cjs`. Find supported extensions and path checks. Compare your note with its extracted preview.
3. **Trace selection.** Read `station-service.cjs` and `context-box-store.cjs`. Create a box, close the app and inspect its saved JSON. Explain source selection versus source contents.
4. **Trace a question.** Follow the nine execution steps above. After one question, compare its conversation JSON with the model-run JSON. Locate the model, source hashes, response and diagnostics.
5. **Understand computation.** Try the tiny CSV example. Read the dataset planner, engine, worker and evidence modules. Distinguish model plans from results computed by the host.
6. **Understand trust and persistence.** Read the store modules, `desktop-security.cjs` and `SECURITY.md`. Identify which values come from users, files, models and trusted application code.
7. **Make a small change.** Adjust a label or layout, verify it in Electron, then follow development checks before tackling runtime behavior.

For any feature, ask yourself: What triggers it? Which input crosses the bridge? Who validates it? Which files/services are accessed? What is displayed? What is saved? What happens on cancellation or failure?

## Roadmap

Future possibilities include a stronger local memory boundary and runtime improvements. Capability routing is now available in the opt-in backend experiment area below. Hosted accounts, commercial credits and synchronization remain future decisions.

## LLM Backend Engineering / Front Office

Settings → **LLM Backend / Front Office** provides an opt-in experiment path with full local conversation history and no injected Context Box, custom personality, skills, tools, RAG or long-term memory. Normal agent chat retains its existing behavior. The backend exposes intake, deterministic requirements, budgets, capability evidence, routing, transport, reliability, response validation and local metrics as separate modules.

    Experiment input → requirements + full-history budget → capability router
      → one retry/deadline controller → native or optional LiteLLM HTTP client
      → provider → stream/schema validation → existing conversation/run stores
      → content-free local metrics and evaluation

| Status | Capability |
| --- | --- |
| Implemented | Strict request/config contracts, provenance-aware capability catalog, filters/sorts/inspector, overrides and favorites |
| Implemented | Manual session pins, opt-in auto routing with rationale, context/output/cost preflight and reject-and-warn history overflow |
| Implemented | Bounded retries/deadlines/circuits, cancellation, explicit cross-provider consent, no automatic retry after partial text |
| Implemented | Experimental streaming, JSON/schema validation, actual usage/estimated costs with unknowns, retention and JSON/CSV export |
| Implemented | Controlled 40-case A/B/C evaluation harness, fixture/live separation, sample sizes/uncertainty and live evidence import |
| Optional integration | Authenticated loopback LiteLLM HTTP transport, pinned external service setup; no bundled Python or automatic process startup |
| Live audit QT-RCA-001 | Real OpenRouter basic chat verified in streaming/non-streaming UI and two-turn history; NVIDIA probes failed; actual LiteLLM disabled/unverified. See the provider RCA below. |

Enter OpenRouter/NVIDIA BYOK keys in existing provider Settings; they remain encrypted with Electron safeStorage. Refresh provider capabilities explicitly, enable experimental chat, choose a manual deployment, save settings and create an experiment. Existing manual sessions stay pinned even if global auto settings change. Auto routing/fallback/gateway use are disabled by default. Sending history to another provider requires separate explicit consent and stays inside the listed providers; alternate logical models need additional permission.

The capability catalog distinguishes advertised context from measured context and unknown features from supported ones. Quality is shown only from fresh matching benchmark evidence. Unknown/stale prices cannot justify cost caps; usage gaps never mean free. Client token/cost caps are estimates, while provider-side quota/credit controls remain authoritative. Backend timing is labeled and excludes final persistence/rendering.

Run local verification/evaluation:

    npm.cmd run test:front-office
    npm.cmd run test:front-office:electron
    npm.cmd run benchmark:front-office

The mock benchmark executed 40 cases, three repetitions and 1,008 fixture calls, including 25-turn replay and long-context tests. This verifies harness behavior; it does not measure real model quality or LiteLLM overhead. Unreviewed rubric answers stay unscored. Live execution requires explicit model/provider/call limits and environment-only credentials; see the evaluation guide.

Settings exports content-free metrics JSON/CSV. To extract metrics from an existing run without exporting the private conversation:

    node scripts/front-office-metrics-export.cjs "path/to/vault/.wonnyy/model-runs/RUN_ID.json" --format json --output metrics.json

Disable experimental execution through its enable setting. The older normal-agent passive observer can be disabled separately with ORBISTRY_FRONT_OFFICE_METRICS=0 before launch. Schema-5 experiment conversations and schema-3 runs require preserving newer data before rolling back to an older application build.

Read the [audit](docs/architecture/pre-llm/00-existing-architecture-audit.md), [flow diagrams](docs/architecture/pre-llm/01-overview-and-flow.md), [module contracts](docs/architecture/pre-llm/02-modules-and-contracts.md), [provider/LiteLLM setup](docs/architecture/pre-llm/03-provider-setup-openrouter-nvidia.md), [ranking](docs/architecture/pre-llm/04-model-registry-and-ranking.md), [budgets](docs/architecture/pre-llm/05-token-economics-and-context.md), [recovery](docs/architecture/pre-llm/06-reliability-errors-and-recovery.md), [metrics/evaluation](docs/architecture/pre-llm/07-observability-and-benchmark.md), [Indonesian tuning guide](docs/architecture/pre-llm/08-front-office-tuning-playbook.md), [security/rollback](docs/architecture/pre-llm/09-security-and-rollback.md), [executed benchmark report](docs/architecture/pre-llm/10-benchmark-report.md), [changelog](docs/architecture/pre-llm/11-changelog.md) and [implementation status](big-context/backend-feature/Orbistry_Backend_Implementation_Status.md).

## LLM Provider Infrastructure & Troubleshooting

The normal agent path supports Ollama, Gemini, NVIDIA NIM and OpenRouter. The context-free experiment path supports OpenRouter/NVIDIA and an optional externally managed LiteLLM proxy. LiteLLM is an authenticated loopback HTTP transport; Orbistry does not install/start a Python sidecar. It is disabled by default and was not enabled in QT-RCA-001.

For basic diagnostic chat, launch Electron, select a vault, open **Settings → LLM Backend / Front Office**, refresh a configured provider, enable experiments, choose an exact manual model, save and create a **New experiment**. Send `Reply with exactly: ORBISTRY_OK`. This path needs no Context Box, agent personality, skills or augmented memory. Disable **Stream generated text** to isolate real non-streaming JSON completion. The normal Agent Chat retains its existing context requirements.

Input and successful local history pass through validated IPC, requirements/budget checks, capability routing, one retry/deadline controller, native provider or optional LiteLLM transport, response validation, local persistence and final assistant rendering. Manual sessions stay pinned. Automatic fallback/model switching require explicit consent; errors include safe diagnostic codes. Experiment actions stop/await existing model checks to avoid shared-admission races.

Desktop keys belong in provider Settings and use OS-encrypted storage. Environment variables in `.env.example` are for opt-in test scripts, not the desktop credential source. `ELECTRON_START_URL` selects a development renderer; `ORBISTRY_VAULT_PATH` selects a vault. Neither changes provider authentication. `ORBISTRY_FRONT_OFFICE_METRICS=0` disables the older normal-agent passive metrics observer. Never put real keys or authorization headers into logs/config JSON. Gateway URL, enable flag and generation options are configured in the experiment panel; gateway credentials use its separate encrypted field.

QT-RCA-001 verified real OpenRouter text visibly in both assistant paths and ORBITAL conversation continuity. NVIDIA's saved model timed out; a catalog-listed alternate returned 404. A catalog listing alone does not prove generation works. Actual LiteLLM remains unverified. If there is no answer, inspect the first failed stage: admission, candidate rejection, HTTP, first visible content, normalization, validation or DOM rendering. Minimal output caps accept either advertised `max_tokens` or `max_completion_tokens`; provider/account restrictions still apply.

After building, `node scripts/provider-rca.cjs --ui --multi-turn` runs opt-in real-provider UI diagnostics using existing encrypted credentials in a disposable profile. `--ui --nonstream` isolates C/E; the default invocation probes raw providers. These calls can consume provider quota. `node scripts/electron-front-office-smoke.cjs` instead runs isolated synthetic failure/fallback regressions. Unit/mock success alone is insufficient to certify operation.

See [root causes and evidence](docs/backend/PROVIDER_RCA.md), [request lifecycle](docs/backend/PROVIDER_REQUEST_FLOW.md), and [diagnostic commands A–H](docs/backend/PROVIDER_DIAGNOSTICS.md), including the webpack build command for this nested audit worktree. Audit branch: `audit/qt-rca-001`; comparison baseline: `829d704`.

### Orbistry rebrand compatibility

Orbistry is the product, desktop bridge (`window.orbistryDesktop`) and build identity (`com.orbistry.desktop`). The GitHub repository is `Rizuqura/Orbistry` (https://github.com/Rizuqura/Orbistry).

Existing `.wonnyy/` vault metadata, stored agent IDs, provenance envelope types and `qterminal-*` browser preference keys intentionally retain their storage identifiers so saved work stays readable. Historical profile and default-vault names are detected for upgrades. Runtime settings prefer `ORBISTRY_VAULT_PATH`, `ORBISTRY_OLLAMA_URL`, `ORBISTRY_REQUEST_LOGS` and `ORBISTRY_FRONT_OFFICE_METRICS`, with the previous environment variable names accepted as fallbacks. Existing saved agent names and instructions remain user-owned and are not overwritten.

### Active-provider token budgeting

Planet View's AI BUDGET panel follows the active agent's provider and current key for Ollama, Gemini, NVIDIA and OpenRouter. Completed-request token measurements stay separate for each provider/key. OpenRouter also shows its reported key allowance; other providers' unintegrated balances and reset schedules remain unavailable. See [provider budget monitoring](docs/PROVIDER_BUDGET_MONITOR.md) for measurement scope and verification.
