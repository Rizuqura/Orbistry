# Repository map

ORB-ARCH-002 Phase 01 reorganizes ownership without changing public IPC names, schemas, Engine protocol, or user-data locations.

## Before

```text
app/
components/ (shell + WorldView + document workspace)
features/agent/, chat/, worldview/, model-settings/
electron/ (domain services, security, IPC and tests mixed at root)
electron/ai/ (assignment, chat, inference and model services mixed)
electron/engines/registry/ (contracts + worker + registry)
scripts/ (build, audit and acceptance mixed)
```

## After

```text
app/                         Next entry points, global feature styles
components/                  shared shell, navigation and chat compatibility component
features/
  worldview/                 canvas, spatial math, graph state and relationships
  entities/                  Entity editing, source assignment and sidebar
  knowledge/                 Knowledge Card, readers, existing data previews/index editor
  workspace/                 document workspace, PDF viewer and source sidebar
  agents/                    Agent construction, assignment UI and workspace
  chat/                      conversation rendering and runtime hooks
  model-settings/, dialogs/  existing settings and shared dialogs
electron/
  main.cjs, preload.cjs       stable process/bridge entry points
  core/security/             trusted-window IPC security
  core/persistence/          atomic JSON/text persistence and queues
  core/ipc/                  WorldView IPC registration
  domains/entity/            Entity records, source associations and connectors
  domains/universe/          Vault/settings/stations
  domains/knowledge/         applied index state, authorized sources, Identity inspector
  domains/indexing/          declaration parser and tag association host service
  engines/registry/          package discovery, trust, linking and signing
  engines/runtime/           package worker and runner
  engines/contracts/         package schema and validation
  engines/backend-identity/  unchanged compiler/runtime ownership
  ai/agents/                 assignment, jurisdiction, construction and assigned chat
  ai/chat/                   conversation store and chat service
  ai/inference/              prompt assembly and response validation
  ai/providers/              provider adapters
packages/                    package ownership guidance; no Engine extraction
scripts/build/, audit/, acceptance/
tests/integration/           cross-domain architecture regression
docs/architecture/, code-atlas/, engines/, decisions/
```

No empty Dashboard or frontend indexing folders were created. The current Index editor is part of Knowledge workspace; extracting it would change component boundaries. Existing financial viewers remain Knowledge readers rather than being relabeled as a Dashboard Builder. Original Engine package examples stay in examples/engines/.

See [module ownership](MODULE_OWNERSHIP.md), [relocation changelog](RESTRUCTURE_CHANGELOG.md), [exact move manifest](restructure-moves.json) and [Code Atlas](../code-atlas/README.md).
