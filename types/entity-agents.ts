import type {
  IdentityCapability,
  IdentityChunk,
  IdentityChunkPage,
} from "./backend-identity";

export type AgentAssignment = {
  id: string;
  entityId: string;
  agentId: string;
  createdAt: string;
};
export type AssignmentContext = {
  id: string;
  name: string;
  assignmentId: string;
  vaultPath: string;
};
export type EngineDefinition = {
  id: string;
  name?: string;
  version: string;
  operations: string[];
};
export type AssignmentScope = { vaultPath: string; assignmentId: string };
export type AgentEvidenceReference = Pick<
  IdentityChunk,
  | "chunkId"
  | "sourceId"
  | "sourceVersion"
  | "contentHash"
  | "headingPath"
  | "startLine"
  | "endLine"
  | "trust"
>;
export type PriceEvidence = {
  executionId: string;
  engineId: "daily-price";
  operation: "price";
  status: "succeeded";
  symbol: string;
  price: number;
  currency: string;
  priceType: string;
  marketTimestamp: string;
  retrievedAt: string;
  source: string;
  marketState: string;
  delayMinutes: number | null;
  cached: boolean;
  stale: boolean;
  warning: string | null;
};
export type AgentToolRequest = {
  authorizationMode: "human-approval" | "standing-read-only";
  id: string;
  assignmentId: string;
  entityId: string;
  agentId: string;
  nodeId: string;
  capabilityId: string;
  engineId: string;
  operation: string;
  symbol: string | null;
  parameters: { force?: boolean };
  graphRevision: number;
  identityVersion: string;
  createdAt: string;
  expiresAt: string;
  userMessageId: string | null;
  status:
    | "awaiting-approval"
    | "executing"
    | "succeeded"
    | "failed"
    | "cancelled"
    | "expired";
  executionId: string | null;
  error: string | null;
};
export type EntityAgentState = {
  toolResult?: unknown;
  assignment: AgentAssignment;
  session: {
    assignmentId: string;
    entityId: string;
    agentId: string;
    messages: {
      id: string;
      role: "user" | "assistant";
      content: string;
      at: string;
      references?: AgentEvidenceReference[];
    }[];
    error: string | null;
    executions: {
      id: string;
      nodeId: string;
      engineId: string | null;
      operation: string | null;
      timestamp: string;
      status: "pending" | "succeeded" | "failed" | "rejected";
      error: string | null;
      requestId?: string;
      errorCode?: string;
      providerHealth?: "unchecked" | "succeeded" | "failed";
      authorizationMode?: "human-approval" | "standing-read-only";
      priceQuote?: PriceEvidence;
    }[];
    requests: AgentToolRequest[];
  };
  context: {
    entity: {
      id: string;
      name: string;
      category: string | null;
      tags: string[];
    };
    identityStatus: "missing" | "stale" | "fresh";
    identityVersion: string | null;
    knowledge: { chunkCount: number; tokenEstimate: number } | null;
    knowledgeAccess: { connected: boolean; reason: string };
    referenceOnlyCount: number;
    engines: {
      nodeId: string;
      engineId: string;
      operation: string;
      permissionPolicy: "disabled" | "read-only-approval" | "read-only-auto";
      status: "configured" | "unavailable";
      capabilities: IdentityCapability[];
      registered: boolean;
      configured: boolean;
      enabled: boolean;
      authorization: "approval-required" | "disabled" | "automatic-read-only";
      authorized: boolean;
      health: {
        status: "unchecked" | "succeeded" | "failed";
        checkedAt: string | null;
      };
      executed: boolean;
      succeeded: boolean;
      reason: string;
    }[];
  };
  providerConfigured: boolean;
  providerId: string | null;
  modelId: string | null;
};

export interface EntityAgentBridge {
  engineDefinitions(): Promise<EngineDefinition[]>;
  listEntityAgents(input: {
    vaultPath: string;
    entityId?: string;
  }): Promise<AgentAssignment[]>;
  assignEntityAgent(input: {
    vaultPath: string;
    entityId: string;
    agentId: string;
  }): Promise<AgentAssignment>;
  removeEntityAgent(input: AssignmentScope): Promise<boolean>;
  openEntityAgent(input: AssignmentScope): Promise<EntityAgentState>;
  sendEntityAgent(
    input: AssignmentScope & { message: string; requestId?: string },
  ): Promise<EntityAgentState>;
  retrieveEntityAgentKnowledge(
    input: AssignmentScope & { query: string; offset?: number; limit?: number },
  ): Promise<IdentityChunkPage>;
  executeEntityAgent(
    input: AssignmentScope & {
      nodeId: string;
      capabilityId: string;
      approved: boolean;
      arguments?: { force?: boolean };
    },
  ): Promise<{ audit: { id: string; status: string }; result: unknown }>;
  proposeEntityAgent(
    input: AssignmentScope & {
      requestId?: string;
      nodeId: string;
      capabilityId: string;
      arguments?: { force?: boolean };
    },
  ): Promise<AgentToolRequest>;
  decideEntityAgentRequest(
    input: AssignmentScope & { requestId: string; approved: boolean },
  ): Promise<EntityAgentState>;
}
