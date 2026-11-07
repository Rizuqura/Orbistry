/** Shared, content-free contracts for the existing-adapter baseline observer. */
export type BaselineCallPhase =
  "generation" | "answer-repair" | "dataset-planning" | "statistics-planning";

export type BaselineCall = {
  estimatedCostUsd?: number | null;
  costSource?: MetadataSource | null;
  index: number;
  phase: BaselineCallPhase;
  requestedModelId: string;
  actualModelId: string | null;
  actualProviderId: string | null;
  estimatedInputTokens: number | null;
  estimateMethod: "utf8-bytes/3 + framing";
  estimateBoundary: "before-provider-translation";
  outputTokenCap: number | null;
  reportedPromptTokens: number | null;
  reportedCompletionTokens: number | null;
  durationMs: number;
  firstContentMs: number | null;
  adapterFirstTokenMs: number | null;
  streamingRequested: boolean;
  contentCallbackObserved: boolean;
  generationStarted: boolean;
  status: "running" | "succeeded" | "failed" | "cancelled";
  finishReason: string | null;
  errorCode: string | null;
};

export type BaselineTrace = {
  stages?: RequestStage[];
  failedStage?: RequestStageName;
  schemaVersion: 1;
  mode: "existing-agent-baseline" | "experiment";
  requestId: string;
  runId: string;
  sessionPseudonym: string | null;
  startedAt: string;
  completedAt: string | null;
  durationMs: number;
  timingBoundary:
    | "orchestrator-through-validation-before-persistence"
    | "accepted-service-through-validation-before-persistence";
  providerId: string;
  requestedModelId: string;
  deploymentAlias: string;
  selectionReason:
    | "existing-manual-selection-preserved"
    | "manual-experiment"
    | "capability-router";
  status: "running" | "succeeded" | "failed" | "cancelled";
  errorCode: string | null;
  providerCallCount: number;
  usageCoverage: "none" | "partial" | "complete";
  reportedPromptTokens: number | null;
  reportedCompletionTokens: number | null;
  estimatedCostUsd: number | null;
  costSource: MetadataSource | null;
  routing?: {
    selectedDeploymentId: string;
    eligibleDeploymentIds: string[];
    selectionReasons: string[];
    warnings: string[];
    fallbackUsed: boolean;
  };
  estimatedInputTokens?: number | null;
  historyMessages?: number;
  formatPass?: boolean | null;
  rejections?: { deploymentId: string; reasons: string[] }[];
  costSources?: MetadataSource[];
  calls: BaselineCall[];
};

export type MetadataSource = {
  url: string;
  checkedAt: string;
  kind: "provider-catalog" | "local-override";
};
export type ExperimentConfig = {
  schemaVersion: 1;
  enabled: boolean;
  routing: {
    mode: "manual" | "auto";
    priority: "balanced" | "quality" | "speed" | "cost";
    selectedDeploymentId: string | null;
    allowedProviders: ("openrouter" | "nvidia")[];
    unverifiedContext: "strict" | "warn" | "allow";
    allowFallback: boolean;
    allowCrossProviderFallback: boolean;
    allowModelSwitch: boolean;
    weights: {
      quality: number;
      cost: number;
      latency: number;
      reliability: number;
    };
    benchmarkMaxAgeDays: number;
  };
  generation: {
    streaming: boolean;
    maxOutputTokens: number;
    contextWindow: number;
    headroomFraction: number;
    temperature: number;
    format: "text" | "json";
    jsonSchema: Record<string, unknown> | null;
  };
  budget: { maxEstimatedUsd: number | null; maxTotalTokens: number | null };
  reliability: {
    maxAttempts: number;
    deadlineMs: number;
    backoffMs: number;
    cooldownMs: number;
    circuitThreshold: number;
  };
  gateway: { enabled: boolean; baseUrl: string; version: "1.106.6" };
  telemetry: {
    retentionDays: number;
    rawPromptLogging: boolean;
    rawResponseLogging: boolean;
  };
};
export type ReliabilityEvidence = {
  status: "unverified" | "measured";
  qualityScore: number | null;
  successRate: number | null;
  medianTtftMs: number | null;
  medianE2eMs: number | null;
  testedContextTokens: number | null;
  lastTestAt: string | null;
  methodology: string | null;
  observations: unknown[];
};
export type ModelProfile = {
  deploymentId: string;
  modelId: string;
  logicalModelId: string;
  providerId: "openrouter" | "nvidia";
  label: string;
  inputModalities: string[];
  outputModalities: string[];
  tools: boolean | "unknown";
  vision: boolean | "unknown";
  structuredOutput: boolean | "unknown";
  supportedParameters: string[] | null;
  contextTokens: number | null;
  maxOutputTokens: number | null;
  inputUsdPerMillion: number | null;
  outputUsdPerMillion: number | null;
  source: MetadataSource;
  pricingSource?: MetadataSource;
  catalogSource: MetadataSource;
  credentialConfigured: boolean;
  favorite: boolean;
  availability: string;
  evidence: ReliabilityEvidence;
  health: { failures: number; openUntil: number };
  stale: boolean;
};
export type ExperimentConversation = {
  schemaVersion: 5;
  mode: "front-office";
  id: string;
  title: string;
  selection: string | null;
  createdAt: string;
  updatedAt: string;
  messages: { id: string; role: "user" | "assistant"; content: string }[];
  attempts: {
    requestId: string;
    runId: string;
    userMessageId: string;
    status: string;
    error: unknown;
  }[];
};
export type FrontOfficeState = {
  config: ExperimentConfig;
  profiles: ModelProfile[];
  overrides: {
    deploymentId: string;
    patch: Record<string, unknown>;
    checkedAt: string;
  }[];
  evidence: unknown[];
  favorites: string[];
  gatewayCredentialConfigured: boolean;
};
export type ExperimentEvent = {
  requestId: string;
  conversationId: string;
  runId: string;
  type:
    | "start"
    | "routing"
    | "attempt"
    | "delta"
    | "usage"
    | "finish"
    | "error"
    | "cancelled"
    | "warning";
  delta?: string;
  message?: string;
  error?: { code: string; message: string };
  trace?: BaselineTrace;
  validation?: { valid: boolean; format: string };
  routing?: unknown;
  attempt?: unknown;
  usage?: unknown;
};
export type ExperimentResult = {
  conversation: ExperimentConversation;
  run: {
    runId: string;
    response: string | null;
    diagnostics: {
      frontOffice: BaselineTrace;
      validation: { valid: boolean; format: string } | null;
    };
  } | null;
};

export type ExperimentTask =
  "general" | "finance" | "format" | "retrieval" | "conversation";
export type NormalizedChatRequest = {
  conversationId: string;
  requestId: string;
  userMessage: string;
  transport: "direct" | "litellm";
  task: ExperimentTask;
  retryOf?: string;
};
export type TaskRequirements = {
  taskType: ExperimentTask;
  transport: "direct" | "litellm";
  requiredModalities: ["text"];
  needsTools: false;
  requiresJsonSchema: boolean;
  expectedInputTokens: number;
  reservedOutputTokens: number;
  minimumReliability: null;
  costCap: number | null;
  latencyTarget: null;
  userModelOverride: string | null;
  routingPolicy: ExperimentConfig["routing"]["priority"];
  historyMessages: number;
};
export type BudgetDecision = {
  eligible: boolean;
  reasons: string[];
  estimatedInputTokens: number;
  reservedOutputTokens: number;
  headroomTokens: number;
  capacityTokens: number;
  totalTokens: number;
  estimatedCostUsd: number | null;
  estimateMethod: "utf8-bytes/3 + framing";
  warnings: string[];
};
export type RoutingCandidate = {
  model: ModelProfile;
  budget: BudgetDecision;
  evidence: ReliabilityEvidence;
  reasons: string[];
  warnings: string[];
  score: number;
};
export type RoutingPlan = {
  mode: "manual" | "auto";
  priority: ExperimentConfig["routing"]["priority"];
  primary: RoutingCandidate;
  fallback: RoutingCandidate[];
  eligibleDeploymentIds: string[];
  selectionReasons: string[];
  warnings: string[];
  rejections: { deploymentId: string; reasons: string[] }[];
};
export type LLMResponse = {
  provider: "openrouter" | "nvidia";
  model: string;
  content: string;
  finishReason: string;
  usage: {
    promptTokens: number | null;
    completionTokens: number | null;
    totalDurationNs: number | null;
  };
  reasoningTokens?: number | null;
  diagnostics?: { firstTokenMs: number | null };
};
export type LLMRequest = {
  /** Main-process diagnostic callback; never serialized into provider payloads. */
  onDiagnostic?: import("../electron/ai/request-logger.cjs").DiagnosticCallback;
  id?: string;
  onStage?: (
    stage: RequestStageName,
    status: "ok" | "error" | "buffered",
    metadata?: {
      httpStatus?: number;
      contentCharacters?: number;
      errorCode?: string;
    },
  ) => void;
  model?: string;
  messages: { role: "user" | "assistant"; content: string }[];
  signal?: AbortSignal;
  onContent?: (cumulativeContent: string) => void;
  onGenerationStarted?: () => void;
};
export interface LLMClient {
  complete(request: LLMRequest): Promise<LLMResponse>;
}
export type RequestStageName =
  | "REQUEST_RECEIVED"
  | "REQUEST_VALIDATED"
  | "MODEL_CANDIDATES_EVALUATED"
  | "MODEL_SELECTED"
  | "GATEWAY_REQUEST_STARTED"
  | "PROVIDER_RESPONSE_RECEIVED"
  | "STREAM_STARTED"
  | "FIRST_CONTENT_RECEIVED"
  | "RESPONSE_NORMALIZED"
  | "OUTPUT_VALIDATED"
  | "FRONTEND_RESPONSE_DELIVERED"
  | "REQUEST_COMPLETED";
export type RequestStage = {
  requestId: string;
  timestamp: string;
  stage: RequestStageName;
  elapsedMs: number;
  status: "ok" | "error" | "skipped" | "bypassed" | "buffered";
  provider?: string;
  model?: string;
  errorCode?: string;
  httpStatus?: number;
  contentCharacters?: number;
  candidateCount?: number;
};
