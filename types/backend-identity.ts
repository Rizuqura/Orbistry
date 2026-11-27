export type IdentitySource = Readonly<{
  fingerprintMethod: "sha256-content" | "metadata-status";
  noteVersion: string | null;
  sourceId: string;
  sourceRef: string;
  filename: string;
  extension: string;
  sourceVersion: string;
  modifiedAt: string | null;
  sizeBytes: number | null;
  status: string;
  chunkCount: number;
}>;
export type IdentityChunk = Readonly<{
  origin: "source" | "entity-note";
  chunkId: string;
  entityId: string;
  sourceId: string;
  sourceVersion: string;
  headingPath: readonly string[];
  content: string;
  contentHash: string;
  tokenEstimate: number;
  startOffset: number;
  endOffset: number;
  startLine: number;
  endLine: number;
  trust: "untrusted-source";
}>;
export type IdentityCapability = Readonly<{
  capabilityId: string;
  entityId: string;
  engineId: string;
  version: string;
  operation: string;
  description: string;
  inputSchema: unknown;
  outputSchema: unknown;
  requiredPermissions: readonly string[];
  executionMode: string;
  availability: string;
  menuId: string;
  sourceId: string;
  symbol: string | null;
}>;
export type IdentityLogEntry = Readonly<{
  level: "info" | "warning" | "error";
  code: string;
  message: string;
  sourceId?: string;
}>;
export type IdentityConnection = Readonly<{
  type: "input" | "output";
  connectorId: string;
  name: string;
  description: string;
  direction: "directed" | "undirected";
  sourceEntityId: string;
  sourcePortId: "north" | "east" | "south" | "west";
  targetEntityId: string;
  targetPortId: "north" | "east" | "south" | "west";
  trust: "untrusted-relationship";
}>;
export type IdentityManifest = Readonly<{
  schemaVersion: 1;
  compilerVersion: string;
  entityId: string;
  identityVersion: string;
  sourceFingerprint: string;
  compiledAt: string;
  status: "complete" | "partial";
  entity: Readonly<{
    id: string;
    name: string;
    category: string | null;
    tags: readonly string[];
    createdAt: string | null;
  }>;
  sources: readonly IdentitySource[];
  /** Absent only in snapshots produced before compiler 1.1.0. */
  connections?: Readonly<{
    inputs: readonly (IdentityConnection & { type: "input" })[];
    outputs: readonly (IdentityConnection & { type: "output" })[];
    unavailableCount: number;
  }>;
  indexedMenus: readonly Readonly<{
    id: string;
    title: string;
    sourceIds: readonly string[];
  }>[];
  knowledge: Readonly<{
    chunkCount: number;
    tokenEstimate: number;
    chunkIndexHash: string;
    retrieval: "entity-scoped-chunks";
  }>;
  packageSources?: readonly {
    declarationId: string;
    menuId?: string;
    grantId?: string;
    engineId: string;
    sourceId: string;
    version: string | null;
    digest: string | null;
    operation: string | null;
    status: string;
  }[];
  capabilities: readonly Pick<
    IdentityCapability,
    | "capabilityId"
    | "engineId"
    | "version"
    | "operation"
    | "availability"
    | "sourceId"
    | "symbol"
  >[];
  capabilityRegistryHash: string;
  log: readonly IdentityLogEntry[];
}>;
export type BackendIdentityState = Readonly<{
  status: "missing" | "fresh" | "stale";
  manifest: IdentityManifest | null;
  currentFingerprint: string;
  reused?: boolean;
  lastAttempt?: Readonly<{
    at: string;
    outcome: "succeeded" | "reused" | "failed";
    identityVersion: string | null;
    error: string | null;
  }> | null;
}>;
export type IdentityChunkPage = Readonly<{
  items: readonly IdentityChunk[];
  total: number;
  offset: number;
  nextOffset: number | null;
  version: string;
}>;
