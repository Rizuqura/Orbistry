const path = require("node:path");

// Editorial ownership describes today's implementation; it does not impose a new directory layout.
const MODULES = [
  [
    "worldview-domain",
    "WorldView domain aggregate",
    "Owns membership, placement and connection invariants; coordinates authorized compatible persistence without Entity OOP or inference.",
    "electron/domains/worldview/",
  ],
  [
    "portal-entities",
    "Entity UI",
    "Edits Entity metadata, source assignments and navigation.",
    "features/entities/",
  ],
  [
    "portal-knowledge",
    "Knowledge Cards and readers",
    "Presents applied indexes, source readers and existing data views.",
    "features/knowledge/",
  ],
  [
    "portal-shell",
    "Portal shell",
    "Composes the static React application, navigation, dialogs and workspace surfaces.",
    "app/, components/ and features/dialogs/",
  ],
  [
    "portal-worldview",
    "WorldView and Knowledge Cards (Portal)",
    "Presents Entities, relationships, applied indexes, Knowledge Cards and data previews.",
    "features/worldview/ and features/worldview/worldview.tsx",
  ],
  [
    "portal-agents",
    "Agent workspace and construction (Portal)",
    "Presents assigned-agent conversations, assignment controls and retained agent construction.",
    "features/agents/",
  ],
  [
    "portal-chat",
    "Conversation presentation",
    "Owns conversation rendering, bridge connection, state hooks and history controls.",
    "features/chat/ and components/chat-panel.tsx",
  ],
  [
    "portal-settings",
    "Settings and Engine list",
    "Presents provider settings and read-only Engine catalog discovery.",
    "features/model-settings/",
  ],
  [
    "portal-documents",
    "Document workspace",
    "Presents Vault documents, PDF navigation and the knowledge sidebar.",
    "features/workspace/",
  ],
  [
    "desktop",
    "Electron composition and IPC security",
    "Composes backend services, creates isolated windows and exposes the narrow desktop bridge.",
    "Electron entry, preload, security, launch and window modules",
  ],
  [
    "worldview",
    "WorldView persistence and IPC",
    "Owns Entity records, source associations and validated WorldView operations.",
    "electron/worldview-*.cjs",
  ],
  [
    "vault",
    "Vault and stations",
    "Owns controlled file access, Vault settings, stations, source bindings and OCR adapters.",
    "Vault/station/OCR services under electron/",
  ],
  [
    "knowledge",
    "Knowledge indexing and source access",
    "Parses applied index declarations and resolves authorized source references and editor state.",
    "electron/knowledge-*.cjs",
  ],
  [
    "connectors",
    "Connectors",
    "Persists explicit relationship metadata; relationships do not grant endpoint permissions.",
    "electron/domains/entity/connector-store.cjs",
  ],
  [
    "engine-registry",
    "Engine package registry",
    "Validates packages, signatures, local trust and Entity links; dispatches workers and persists receipts.",
    "electron/engines/registry/",
  ],
  [
    "identity",
    "Backend Identity Engine",
    "Compiles versioned Entity identity/knowledge snapshots and exposes scoped retrieval/capability contracts.",
    "electron/engines/backend-identity/ and backend-identity-service.cjs",
  ],
  [
    "engines",
    "Built-in Engines and data adapters",
    "Owns deterministic native dispatch, parsing, indexing and market-data integration services.",
    "Other electron/engines/ and their host services",
  ],
  [
    "agents",
    "Assigned Agents and jurisdiction",
    "Owns Entity assignment, construction, scoped consultation, proposals and authorized execution integration.",
    "Assignment/jurisdiction/construction modules under electron/ai/",
  ],
  [
    "providers",
    "Model-provider adapters",
    "Isolates optional inference transports from deterministic application services.",
    "electron/ai/providers/",
  ],
  [
    "ai-runtime",
    "Retained AI runtime",
    "Owns optional model configuration, context, conversation stores and legacy/experimental runtime modules. Presence does not imply active composition.",
    "Remaining electron/ai/ modules",
  ],
  [
    "shared",
    "Shared deterministic infrastructure",
    "Owns neutral persistence, validation, errors and context arithmetic with compatibility exports retained elsewhere.",
    "electron/shared/ and electron/core/persistence/",
  ],
  [
    "contracts",
    "Cross-boundary TypeScript contracts",
    "Declares renderer/backend DTOs and public types; declarations do not implement authorization.",
    "types/",
  ],
  [
    "tooling",
    "Development and acceptance tooling",
    "Owns CLI commands, package/build tooling, architecture checks, Atlas generation and acceptance harnesses.",
    "scripts/",
  ],
  [
    "examples",
    "Engine authoring examples",
    "Provides a package-format example independent of the application runtime.",
    "examples/",
  ],
  [
    "configuration",
    "Repository configuration",
    "Declares application build, styling and compiler integration settings.",
    "Root configuration sources",
  ],
].map(([id, name, purpose, owns]) => ({ id, name, purpose, owns }));

/** Assigns one editorial owner using existing source paths; no source is moved or evaluated. */
function moduleFor(file) {
  if (file.startsWith("electron/domains/worldview/")) return "worldview-domain";
  if (file.startsWith("features/entities/")) return "portal-entities";
  if (file.startsWith("features/knowledge/")) return "portal-knowledge";
  if (file.startsWith("features/workspace/")) return "portal-documents";
  if (file.startsWith("electron/core/persistence/")) return "shared";
  if (file.startsWith("electron/core/")) return "desktop";
  if (file.startsWith("electron/domains/entity/connector-"))
    return "connectors";
  if (file.startsWith("electron/domains/entity/")) return "worldview";
  if (file.startsWith("electron/domains/universe/")) return "vault";
  if (file.startsWith("electron/domains/knowledge/backend-identity"))
    return "identity";
  if (
    file.startsWith("electron/domains/knowledge/") ||
    file.startsWith("electron/domains/indexing/")
  )
    return "knowledge";
  if (
    file.startsWith("electron/engines/runtime/") ||
    file.startsWith("electron/engines/contracts/")
  )
    return "engine-registry";
  if (file.startsWith("electron/ai/agents/")) return "agents";
  if (file.startsWith("tests/integration/")) return "tooling";
  if (file.startsWith("scripts/")) return "tooling";
  if (file.startsWith("examples/")) return "examples";
  if (file.startsWith("types/")) return "contracts";
  if (
    file.startsWith("features/worldview/") ||
    file === "features/worldview/worldview.tsx"
  )
    return "portal-worldview";
  if (file.startsWith("features/agents/")) return "portal-agents";
  if (file.startsWith("features/chat/") || file === "components/chat-panel.tsx")
    return "portal-chat";
  if (file.startsWith("features/model-settings/")) return "portal-settings";
  if (
    /^components\/(document-workspace|pdf-viewer|knowledge-sidebar)\./.test(
      file,
    )
  )
    return "portal-documents";
  if (/^(app|components|features)\//.test(file)) return "portal-shell";
  if (file.startsWith("electron/engines/registry/")) return "engine-registry";
  if (
    file.startsWith("electron/engines/backend-identity/") ||
    /^electron\/backend-identity/.test(file)
  )
    return "identity";
  if (file.startsWith("electron/shared/")) return "shared";
  if (file.startsWith("electron/ai/providers/")) return "providers";
  if (
    /^electron\/ai\/(entity-|assigned-chat|agent-(store|construction|policy)|construction-context|gateway-profile)/.test(
      file,
    )
  )
    return "agents";
  if (file.startsWith("electron/ai/")) return "ai-runtime";
  if (/^electron\/worldview-/.test(file)) return "worldview";
  if (/^electron\/knowledge-/.test(file)) return "knowledge";
  if (/^electron\/connector-/.test(file)) return "connectors";
  if (
    file.startsWith("electron/engines/") ||
    /^electron\/(daily-price|financial|excel|image-parser|tag-association|yahoo-engine)/.test(
      file,
    )
  )
    return "engines";
  if (
    /^electron\/(vault-|station-|agent-memory-|local-ocr|windows-ocr|document-ocr)/.test(
      file,
    )
  )
    return "vault";
  if (file.startsWith("electron/")) return "desktop";
  return "configuration";
}

/** Classifies evidence sources without equating test association with executable coverage. */
function roleFor(file) {
  if (/\.test\.[cm]?[jt]sx?$/.test(file)) return "test";
  if (file.startsWith("scripts/")) return "tooling";
  if (/\.d\.[cm]?ts$/.test(file) || file.startsWith("types/"))
    return "declaration";
  if (file.startsWith("examples/")) return "example";
  if (/^(app|components|features|electron)\//.test(file)) return "production";
  return "configuration";
}

/** Normalizes generated paths so output is byte-identical across supported operating systems. */
function portable(file) {
  return file.split(path.sep).join("/");
}

module.exports = { MODULES, moduleFor, roleFor, portable };
