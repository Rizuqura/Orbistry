import type { BrainScope, BrainScopeMode, BrainErrorCode } from "./electron";
import type { BaselineTrace } from "./front-office";
import type {
  ExperimentConfig,
  ExperimentConversation,
  ExperimentEvent,
  ExperimentResult,
  FrontOfficeState,
} from "./front-office";

export type ModelMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};
export type ModelRequest = {
  id: string;
  model: string;
  messages: ModelMessage[];
  scope?: BrainScope;
  format?: Record<string, unknown>;
  contextWindow?: number;
  settings?: ModelSettings;
  signal?: AbortSignal;
  onContent?: (content: string) => void;
};
export type ModelErrorCode =
  | "CONTEXT_INSUFFICIENT"
  | "MODEL_PULL_FAILED"
  | "AUTH_REQUIRED"
  | "AUTH_INVALID"
  | "AUTH_STORAGE_UNAVAILABLE"
  | "RATE_LIMITED"
  | "PROVIDER_OFFLINE"
  | "REMOTE_TIMEOUT"
  | "REMOTE_SERVER_ERROR"
  | "REMOTE_REQUEST_INVALID"
  | "REMOTE_CONTENT_BLOCKED"
  | "MODEL_UNAVAILABLE"
  | "MODEL_INVALID_REQUEST"
  | "MODEL_CONTEXT_INVALID"
  | "MODEL_CONTEXT_TOO_LARGE"
  | "MODEL_RUN_RECORD_INVALID"
  | "MODEL_RUN_RECORD_EXISTS"
  | "MODEL_RUN_RECORD_NOT_FOUND"
  | "MODEL_RUN_RECORD_FAILED"
  | "MODEL_OFFLINE"
  | "MODEL_NOT_INSTALLED"
  | "MODEL_NOT_FOUND"
  | "MODEL_TIMEOUT"
  | "MODEL_CANCELLED"
  | "MODEL_INVALID_RESPONSE"
  | "PROVIDER_ERROR"
  | "MODEL_INTERNAL_ERROR"
  | "MODEL_BUSY"
  | "MODEL_RESTART_REQUIRED"
  | "MODEL_STORAGE_INVALID"
  | "MODEL_STORAGE_FAILED"
  | "MODEL_INTERRUPTED";
export type ModelRuntimeErrorValue = {
  code: ModelErrorCode | BrainErrorCode;
  message: string;
  details: Record<string, unknown>;
};
export type LocalModel = {
  name: string;
  model: string;
  size: number;
  digest: string;
  modifiedAt: string | null;
  family: string | null;
  parameterSize: string | null;
  quantization: string | null;
  contextLength: number | null;
  outputLimit?: number | null;
  capabilities: string[];
};
export type ModelStatus = {
  provider: "ollama";
  endpoint: string;
  online: boolean;
  checkedAt: string;
  models: LocalModel[];
  error: ModelRuntimeErrorValue | null;
};
export type ModelSourceReference = {
  sourceId: string;
  relativePath: string;
  contentHash: string;
};
export type ModelAvailableSourceReference = {
  sourceId: string;
  relativePath: string;
  contentHash: string | null;
};
export type ModelResponse = {
  id: string;
  provider: string;
  model: string;
  content: string;
  sources: ModelSourceReference[];
  finishReason: string;
  createdAt: string;
  usage: {
    promptTokens: number | null;
    completionTokens: number | null;
    totalDurationNs: number | null;
  };
};
export type ContextModelResult = ModelResponse & {
  scopeId: string;
  scopeMode: "active-context";
  scopeManifestVersion: string;
  promptVersion: string;
};
export type ModelRunStatus = "succeeded" | "failed";
export type ModelRunErrorValue = {
  code: ModelErrorCode | BrainErrorCode;
  message: string;
  details: Record<string, unknown>;
};
export type ModelRunRecord = {
  schemaVersion: 1;
  runId: string;
  status: ModelRunStatus;
  startedAt: string;
  completedAt: string;
  durationMs: number;
  scope: { id: string; mode: BrainScopeMode; manifestVersion: string } | null;
  provider: string;
  model: string;
  promptVersion: string | null;
  userMessage: string;
  sourcesAvailable: ModelAvailableSourceReference[];
  sourcesActuallyRead: ModelSourceReference[];
  response: string | null;
  finishReason: string | null;
  usage: ModelResponse["usage"] | null;
  error: ModelRunErrorValue | null;
};
export type ModelConnectivityTest = ModelResponse & {
  passed: boolean;
  expected: "WONNYY ONLINE";
};
export interface ModelProvider {
  complete(request: ModelRequest): Promise<ModelResponse>;
}

export type ContextIdentity = {
  id: string;
  mode: "active-context";
  sources: ModelSourceReference[];
};
export type ChatMessage = {
  engineToolTurn?: boolean;
  engineReports?: ChatEngineReport[];
  contextFile?: { relativePath: string };
  knowledgeBox?: { id: string; name: string };
  contextIdentity?: ContextIdentity;
  contextBox?: { id: string; name: string; revision: number };
  provider?: string;
  id: string;
  conversationId: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
  runId?: string;
  userMessageId?: string;
  sources?: ModelSourceReference[];
  model?: string;
};
export type ChatAttempt = {
  requestId: string;
  runId: string;
  userMessageId: string;
  status: "pending" | "succeeded" | "failed" | "cancelled" | "interrupted";
  error: ModelRuntimeErrorValue | null;
};
export type ContextBox = {
  id: string;
  name: string;
  revision: number;
  createdAt: string;
  updatedAt: string;
  contextIdentity: ContextIdentity | null;
  items: ContextBoxItem[];
};
export type ContextBoxItem = {
  id: string;
  relativePath: string;
  addedAt: string;
  status?: "ready" | "unavailable";
  message?: string;
  contentHash?: string;
  estimatedTokens?: number;
  type?: string;
};
export type ContextBoxEdit = {
  action: "create" | "add" | "remove" | "relink" | "delete";
  id?: string;
  name?: string;
  paths?: string[];
  itemId?: string;
  relativePath?: string;
};
export type Conversation = {
  engineOnly?: boolean;
  agentKnowledge?: ConstructionSourceBinding;
  contextFile?: ConstructionFileBinding;
  agentId?: string;
  schemaVersion: 1 | 2 | 3 | 4 | 6;
  contextBoxId?: string;
  contextBoxRevision?: number;
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  contextIdentity: ContextIdentity;
  messages: ChatMessage[];
  attempts: ChatAttempt[];
};
export type AgentNodeKind =
  | "Context"
  | "Personality"
  | "Skill"
  | "LLM"
  | "Workflow"
  | "Knowledge"
  | "Engine"
  | "Output";
export type EngineState = {
  id: "chronoz";
  name: string;
  version: string;
  operations: string[];
  nativeToolCalling: boolean;
  bundlePath: string | null;
  status: string;
  probe: { status: string; diagnostic: string; at: string } | null;
};
export type EngineReportResult = {
  status: string;
  diagnostic: string;
  attachment: null | {
    runId: string;
    month: string;
    researchStatus: string;
    sha256: string;
    sourcePath: string;
  };
};
export type ChatEngineReport = NonNullable<EngineReportResult["attachment"]> & {
  engineId: "chronoz";
  instanceId: string;
};
export type ConstructionBoxBinding = {
  vaultPath: string;
  boxId: string;
  boxName: string;
  boxRevision: number;
  reviewedAt: string;
  estimatedTokens: number;
  contextIdentity: ContextIdentity;
};
export type ConstructionBoxPreview = {
  binding: ConstructionBoxBinding;
  sources: {
    sourceId: string;
    relativePath: string;
    contentHash: string;
    content: string;
  }[];
  chars: number;
};
export type ConstructionFileBinding = Omit<
  ConstructionBoxBinding,
  "boxId" | "boxName" | "boxRevision"
> & { relativePath: string };
export type ConstructionSourceBinding =
  ConstructionBoxBinding | ConstructionFileBinding;
export type ConstructionFilePreview = Omit<
  ConstructionBoxPreview,
  "binding"
> & { binding: ConstructionFileBinding };
export type AgentConstructionConfig = {
  displayName: string;
  description: string;
  personality: string;
  instructions: string;
  nodes: {
    id: string;
    kind: AgentNodeKind;
    x: number;
    y: number;
    config: {
      maxTokens?: number;
      instructions?: string;
      contextBox?: ConstructionBoxBinding;
      contextFile?: ConstructionFileBinding;
      providerId?: ModelSettings["providerId"];
      modelId?: string;
      skillId?: "knowledge-consolidation";
      engineId?: "chronoz";
      instanceId?: string;
      mode?: "bound-only" | "single-pass" | "preview-only" | "text";
    };
  }[];
  edges: { from: string; to: string }[];
};
export type AgentConstructionInput = {
  id: string;
  action: "draft" | "apply";
  expectedRevision: number;
  config: AgentConstructionConfig;
  avatarDataUrl?: string | null;
  bannerDataUrl?: string | null;
  wallpaperDataUrl?: string | null;
  appearance?: AgentAppearanceOptions;
};
export type AgentAppearanceOptions = {
  wallpaperMode: "none" | "dots" | "image";
  dim: number;
  fontSize: 14 | 15 | 16 | 18;
};
export type AgentAppearance = AgentAppearanceOptions & {
  banner: { type: "local-asset"; assetId: string } | null;
  wallpaper: { type: "local-asset"; assetId: string } | null;
  bannerUrl: string | null;
  wallpaperUrl: string | null;
};
export type AgentConfig = {
  id: string;
  displayName: string;
  avatar:
    | { type: "letter"; letter: string }
    | { type: "local-asset"; assetId: string };
  avatarUrl: string | null;
  appearance: AgentAppearance;
  customInstructions: string;
  description: string;
  personality: string;
  runtimeInstructions: string;
  runtimeModel: { providerId?: ModelSettings["providerId"]; modelId?: string };
  construction: {
    revision: number;
    draftRevision: number;
    activeRevision: number;
    draft: AgentConstructionConfig;
    active: AgentConstructionConfig | null;
    draftAvatar: AgentConfig["avatar"];
    draftAvatarUrl: string | null;
    draftAppearance: AgentAppearance;
    log: {
      revision: number;
      action: "draft" | "apply" | "profile";
      at: string;
    }[];
  };
  skills: string[];
  availableSkills: string[];
  protectedInstructions: string;
  policyVersion: string;
  mode: "strict-context-analysis";
  createdAt: string;
  updatedAt: string;
};
export type RuntimeStatus = {
  message?: string;
  startedAt?: number;
  progress?: { current: number; total?: number; unit: string };
  context?: { sourceCount: number; estimatedTokens?: number };
};
export type ModelPullStatus = RuntimeStatus & {
  model: string;
  phase: "model-pulling" | "model-installed" | "cancelled" | "error";
  error?: string;
};
export type ChatState =
  | "CONTEXT_TOO_LARGE"
  | "CONTEXT_READING"
  | "CONTEXT_READY"
  | "CONTEXT_INSUFFICIENT"
  | "LIMITED_CONTEXT"
  | "MODEL_CHECKING"
  | "MODEL_READY"
  | "CANCELLED"
  | "REMOTE_CONNECTING"
  | "IDLE"
  | "CONTEXT_NEEDED"
  | "MODEL_OFFLINE"
  | "MODEL_MISSING"
  | "MODEL_LOADING"
  | "READY"
  | "PREPARING_CONTEXT"
  | "GENERATING"
  | "VALIDATING"
  | "RECORDING"
  | "CANCELLING"
  | "ERROR"
  | "RESTART_REQUIRED";
export type ModelSettings = {
  schemaVersion: 1;
  providerId: "ollama" | "gemini" | "nvidia" | "openrouter";
  modelId: string | null;
  contextWindow: number;
  outputLimit: number;
  temperature: number;
  streaming: boolean;
  keepAliveSeconds: number;
  loadTimeoutMs: number;
  inactivityTimeoutMs: number;
  absoluteTimeoutMs: number;
};
export type ModelDescriptor = {
  providerId: ModelSettings["providerId"];
  modelId: string;
  displayName: string;
  location: "local" | "remote";
  installed: boolean;
  available: boolean;
  active: boolean;
  profile: string;
  recommended: boolean;
  capabilities: string[];
  contextLength: number | null;
  outputLimit?: number | null;
  warnings: string[];
  pricingClass: "unknown";
  inputUsdPerMillion?: number | null;
  outputUsdPerMillion?: number | null;
};
export type ProviderStatus = {
  id: ModelSettings["providerId"];
  displayName: string;
  location: "local" | "remote";
  online: boolean;
  error: ModelRuntimeErrorValue | null;
  configured: boolean;
  secureStorageAvailable?: boolean;
};
export type RegistryState = {
  providers: ProviderStatus[];
  online: boolean;
  error: ModelRuntimeErrorValue | null;
  settings: ModelSettings;
  models: ModelDescriptor[];
};
export type ScopeSelection = {
  activeStationIds: string[];
  matchMode: "any" | "all";
};
export type ChatRequest = ScopeSelection & {
  conversationId: string;
  requestId: string;
  userMessage: string;
  expectedContextId: string;
  retryOf?: string;
};
export type ChatRun = Omit<ModelRunRecord, "schemaVersion" | "status"> & {
  schemaVersion: 2;
  status: "succeeded" | "failed" | "cancelled";
  conversationId: string;
  requestId: string;
  contextIdentity: ContextIdentity;
  settings: ModelSettings;
  diagnostics: Record<string, unknown> & { frontOffice?: BaselineTrace };
};
export type ChatResult = { conversation: Conversation; run: ChatRun | null };
export type ChatEvent = {
  requestId: string;
  conversationId: string;
  runId: string;
  state: ChatState;
  status?: RuntimeStatus;
  content?: string;
  conversation?: Conversation;
  error?: ModelRuntimeErrorValue;
  diagnostics?: Record<string, unknown> & { frontOffice?: BaselineTrace };
};
export interface OpenRouterUsageSnapshot {
  status:
    | "unconfigured"
    | "loading"
    | "ready"
    | "stale"
    | "offline"
    | "unauthorized"
    | "rate_limited"
    | "unsupported"
    | "error";
  provider: "openrouter";
  safeKeyAlias: string | null;
  limitUsd: number | null;
  remainingUsd: number | null;
  usedUsdThisPeriod: number | null;
  resetCadence: "daily" | "weekly" | "monthly" | "none" | "unknown";
  resetAt?: string | null;
  accountCreditsRemainingUsd: number | null;
  inputTokens: number | null;
  outputTokens: number | null;
  tokenMeasurementScope: string | null;
  dataSource: "current_key" | "management_key" | "local_meter" | "none";
  fetchedAt: string | null;
  errorMessage?: string;
}
export interface AiBridge {
  connectCredential(input: { apiKey: string }): Promise<ProviderConnection>;
  providedModels(): Promise<ProvidedModelPreview[]>;
  modelFavorites(): Promise<string[]>;
  frontOfficeState(
    task?: "general" | "finance" | "format" | "retrieval" | "conversation",
  ): Promise<FrontOfficeState>;
  frontOfficeConfig(config: ExperimentConfig): Promise<ExperimentConfig>;
  frontOfficeRefresh(provider: "openrouter" | "nvidia"): Promise<number>;
  frontOfficeOverride(input: {
    deploymentId: string;
    patch: Record<string, unknown> | null;
  }): Promise<void>;
  frontOfficeEvidence(input: unknown): Promise<void>;
  frontOfficeFavorite(input: {
    deploymentId: string;
    favorite: boolean;
  }): Promise<void>;
  frontOfficeHealth(): Promise<{
    status: string;
    pinnedVersion: string;
    versionVerified: boolean;
  }>;
  frontOfficeList(): Promise<ExperimentConversation[]>;
  frontOfficeRead(id: string): Promise<ExperimentConversation>;
  frontOfficeCreate(): Promise<ExperimentConversation>;
  frontOfficeDelete(id: string): Promise<void>;
  frontOfficeExport(format: "json" | "csv"): Promise<string>;
  frontOfficeChat(input: {
    conversationId: string;
    requestId: string;
    userMessage: string;
    transport?: "direct" | "litellm";
    task?: "general" | "finance" | "format" | "retrieval" | "conversation";
    retryOf?: string;
  }): Promise<ExperimentResult>;
  onFrontOfficeEvent(callback: (event: ExperimentEvent) => void): () => void;
  listConstructionFiles?(): Promise<string[]>;
  engineState?(): Promise<EngineState>;
  chooseEngineFolder?(): Promise<EngineState | null>;
  probeEngine?(): Promise<EngineState>;
  executeEngine?(input: {
    agentId: string;
    instanceId: string;
    engineId: "chronoz";
    operation: "get_report";
    arguments: { month?: string };
  }): Promise<EngineReportResult>;
  cancelEngine?(): Promise<boolean>;
  openEngineReport?(input: {
    agentId: string;
    instanceId: string;
    runId: string;
  }): Promise<{ opened: boolean }>;
  previewConstructionFile?(input: {
    relativePath: string;
  }): Promise<ConstructionFilePreview>;
  getVaultIdentity?(): Promise<{ vaultPath: string }>;
  previewConstructionBox?(input: {
    boxId: string;
  }): Promise<ConstructionBoxPreview>;
  listAgents?(): Promise<AgentConfig[]>;
  createAgent?(input: {
    name: string;
    creationId: string;
  }): Promise<AgentConfig>;
  saveAgentConstruction?(input: AgentConstructionInput): Promise<AgentConfig>;
  proposeKnowledge?(input: {
    runId: string;
    extraction: unknown;
  }): Promise<unknown>;
  retrieveKnowledge?(input: {
    conversationId: string;
    query: { entity: string; topic: string; period: string; maxTokens: number };
  }): Promise<unknown>;
  openRouterUsage(input?: {
    refresh?: boolean;
  }): Promise<OpenRouterUsageSnapshot>;
  onUsageChanged(callback: () => void): () => void;
  getAgent(id?: string): Promise<AgentConfig>;
  saveAgent(input: {
    id: string;
    customInstructions: string;
    avatarDataUrl?: string | null;
  }): Promise<AgentConfig>;
  chooseAgentAvatar(): Promise<string | null>;
  chooseAgentBackdrop?(kind: "banner" | "wallpaper"): Promise<string | null>;
  previewBoxSelection(
    paths: string[],
  ): Promise<{ files: string[]; skipped: string[] }>;
  inspectContextBox(id: string): Promise<ContextBox>;
  editContextBox(input: ContextBoxEdit): Promise<ContextBox>;
  switchContextBox(input: {
    conversationId: string;
    contextBoxId: string;
  }): Promise<Conversation>;
  listContextBoxes(): Promise<ContextBox[]>;
  saveContextBox(input: { name: string }): Promise<ContextBox>;
  renameContextBox(input: { id: string; name: string }): Promise<ContextBox>;
  checkConversation(id: string): Promise<ContextIdentity>;
  pullModel(model: string): Promise<ModelPullStatus>;
  pullStatus(): Promise<ModelPullStatus[]>;
  cancelPull(model: string): Promise<void>;
  onPull(callback: (status: ModelPullStatus) => void): () => void;
  checkRemoteModel(input: {
    providerId: "gemini" | "nvidia" | "openrouter";
    model: string;
  }): Promise<ModelCheckResult>;
  stopModelChecks(): Promise<void>;
  checkNvidiaModel(model: string): Promise<{
    model: string;
    passed: boolean;
    latencyMs: number;
    checkedAt: string;
    message: string;
    code?: string;
  }>;
  handshake(version: number): Promise<{ apiVersion: number }>;
  getStatus(): Promise<ModelStatus>;
  listModels(): Promise<LocalModel[]>;
  testModel(model: string): Promise<ModelConnectivityTest>;
  models(): Promise<RegistryState>;
  settings(input: Partial<ModelSettings>): Promise<ModelSettings>;
  saveCredential(input: {
    providerId: "gemini" | "nvidia" | "openrouter" | "litellm";
    apiKey: string;
  }): Promise<{ configured: boolean; secureStorageAvailable: boolean }>;
  removeCredential(input: {
    providerId: "gemini" | "nvidia" | "openrouter" | "litellm";
  }): Promise<{ configured: boolean; secureStorageAvailable: boolean }>;
  context(input: ScopeSelection): Promise<ContextIdentity>;
  listConversations(): Promise<Conversation[]>;
  createConversation(input: {
    engineOnly?: boolean;
    includeAgentKnowledge?: boolean;
    agentId?: string;
    contextBoxId?: string;
    contextFile?: ConstructionFileBinding;
    creationId: string;
  }): Promise<Conversation>;
  renameConversation(input: {
    conversationId: string;
    title: string;
  }): Promise<Conversation>;
  deleteConversation(id: string): Promise<void>;
  deleteMessage?(input: {
    conversationId: string;
    messageId: string;
  }): Promise<Conversation>;
  clearConversations(): Promise<void>;
  resumeConversation(id: string): Promise<Conversation>;
  refreshSource(): Promise<unknown>;
  chat(input: ChatRequest): Promise<ChatResult>;
  cancel(requestId?: string): Promise<boolean>;
  onEvent(callback: (event: ChatEvent) => void): () => void;
}
export type ProviderVerification =
  | "unrecognized"
  | "ambiguous"
  | "identified_unverified"
  | "verified"
  | "invalid"
  | "unreachable";
export type CredentialScope =
  "user_byok" | "developer_local" | "managed_server";
export type ProviderConnection = {
  providerId: "gemini" | "nvidia" | "openrouter" | null;
  state: ProviderVerification;
  saved: boolean;
  credentialScope: "user_byok";
  message: string;
};
/** Metadata only. There is intentionally no managed execution API. */
export type ProvidedModelPreview = {
  providerId: "openrouter" | "nvidia";
  modelId: string;
  displayName: string;
  contextLength: number | null;
  outputLimit: number | null;
  capabilities: string[];
  inputUsdPerMillion: number | null;
  outputUsdPerMillion: number | null;
  isFavorite: true;
  availability: "unverified";
  executable: false;
};
export type ModelCheckResult = {
  providerId: "gemini" | "nvidia" | "openrouter";
  model: string;
  passed: boolean;
  latencyMs: number;
  checkedAt: string;
  message: string;
  code?: string;
};
