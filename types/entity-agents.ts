/**
 * Renderer/backend contracts for Entity-assigned Agents.
 * Implementation: electron/ai/agents/entity-agents.cjs; transport: electron/ai/ipc.cjs
 * and electron/preload.cjs. These types describe data; they do not grant access.
 * Backend runtime validation and live Entity/graph checks remain authoritative.
 *
 * Read in this order: AgentAssignment -> AssignmentScope -> EntityAgentState
 * -> EntityAgentBridge. AgentToolRequest describes the approval workflow;
 * PriceEvidence and AgentEvidenceReference describe evidence, not model claims.
 */
import type {
  IdentityCapability,
  IdentityChunk,
  IdentityChunkPage,
} from "./backend-identity";

/** Saved association between one reusable Agent definition and one Entity; not a copy of the Agent. */
export type AgentAssignment = {
  /** Assignment UUID: also identifies its isolated conversation/session. */
  id: string;
  entityId: string;
  agentId: string;
  createdAt: string;
};
/** Compact navigation context used when opening an assigned Agent from its Entity. */
export type AssignmentContext = {
  id: string;
  name: string;
  assignmentId: string;
  vaultPath: string;
};
/** Registration metadata for construction/discovery; does not assert configuration, authorization or provider health. */
export type EngineDefinition = {
  id: string;
  name?: string;
  version: string;
  operations: string[];
};
/** Captured Universe path plus saved assignment UUID. Backend rejects requests after the active Universe changes. */
export type AssignmentScope = { vaultPath: string; assignmentId: string };
/** Citation identity, source version and location only; does not duplicate the chunk's private text. */
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
/** Compact price evidence derived from a successful Engine execution, retaining freshness and provenance. */
export type PriceEvidence = {
  executionId: string;
  engineId: "daily-price";
  operation: "price";
  status: "succeeded";
  symbol: string;
  price: number;
  currency: string;
  priceType: string;
  /** Provider observation time, distinct from when Orbistry retrieved the data. */
  marketTimestamp: string;
  retrievedAt: string;
  source: string;
  marketState: string;
  delayMinutes: number | null;
  cached: boolean;
  /** Missing on some older records. Historical/cached values must not be presented as a fresh provider read. */
  origin?: "provider" | "valid_cache" | "stale_cache" | "historical";
  stale: boolean;
  warning: string | null;
};
/** Backend-persisted proposal for one exact invocation; creating a request does not execute its Engine. */
export type AgentToolRequest = {
  /** Existing node policy determines whether a human decision is needed; model text cannot choose this authority. */
  authorizationMode: "human-approval" | "standing-read-only";
  id: string;
  assignmentId: string;
  entityId: string;
  agentId: string;
  /** Particular Engine node instance in the applied construction graph, not just an Engine type. */
  nodeId: string;
  /** Identifies an Entity-configured capability discovered through Backend Identity. */
  capabilityId: string;
  engineId: string;
  operation: string;
  symbol: string | null;
  parameters: { force?: boolean };
  /** Bind approval to the configuration and knowledge used when proposing it; changes invalidate the request. */
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
  /** Populated when associated execution evidence is available; the request ID itself is not an execution ID. */
  executionId: string | null;
  error: string | null;
};
/** UI snapshot returned by opening/chatting/deciding an assignment; combines persisted history with live availability. */
export type EntityAgentState = {
  /** Optional result supplied after approval continuation; arbitrary output must be interpreted using its Engine contract. */
  toolResult?: unknown;
  assignment: AgentAssignment;
  /** Assignment-owned history, not the reusable Agent definition or the original Vault source files. */
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
    /** A failed or interrupted turn may retain its user message without an assistant response. */
    error: string | null;
    /** Recent execution summaries; full backend audits/output files are stored separately. */
    executions: {
      id: string;
      nodeId: string;
      engineId: string | null;
      operation: string | null;
      timestamp: string;
      /** Pending is admitted work, rejected failed admission, succeeded verified output; none is a model-completion status. */
      status: "pending" | "succeeded" | "failed" | "rejected";
      error: string | null;
      requestId?: string;
      errorCode?: string;
      providerHealth?: "unchecked" | "succeeded" | "failed";
      authorizationMode?: "human-approval" | "standing-read-only";
      priceQuote?: PriceEvidence;
    }[];
    /** Approval/request ledger is separate from completed Engine execution evidence. */
    requests: AgentToolRequest[];
  };
  /** Recomputed Entity/Identity/graph metadata; reading this snapshot does not run a provider health probe. */
  context: {
    /** Describes backend-enforced jurisdiction. It is not a permission object the renderer can edit to grant access. */
    jurisdiction?: Readonly<{
      assignmentId: string;
      agentId: string;
      entityId: string;
      universeId: string;
      jurisdiction: Readonly<{
        knowledgeRead: "connected-knowledge-node-only";
        knowledgeUpdate: "authorized-engine-operations-only";
        localEngineExecution: "applied-node-policy";
        connectorMetadataRead: true;
        crossEntityKnowledgeRead: false;
        crossEntityEngineExecution: false;
        directAgentDelegation: false;
      }>;
    }>;
    entity: {
      id: string;
      name: string;
      category: string | null;
      tags: string[];
    };
    /** Freshness of the compiled Entity knowledge snapshot relative to its current inputs. */
    identityStatus: "missing" | "stale" | "fresh";
    identityVersion: string | null;
    knowledge: { chunkCount: number; tokenEstimate: number } | null;
    knowledgeAccess: { connected: boolean; reason: string };
    /** Sources recorded as references rather than extracted searchable content. */
    referenceOnlyCount: number;
    /** One entry per connected Engine node; multiple nodes may use the same Engine with different operations/policies. */
    engines: {
      nodeId: string;
      engineId: string;
      operation: string;
      permissionPolicy: "disabled" | "read-only-approval" | "read-only-auto";
      status: "configured" | "unavailable";
      capabilities: IdentityCapability[];
      /** Engine/operation exists in the registry; this alone does not make it runnable. */
      registered: boolean;
      /** Current Entity Identity contains a matching configured capability. */
      configured: boolean;
      /** Applied node policy permits an implemented read adapter. */
      enabled: boolean;
      authorization: "approval-required" | "disabled" | "automatic-read-only";
      /** Snapshot of standing-read permission or matching pending admission; execution still rechecks live authority. */
      authorized: boolean;
      /** Last recorded outcome, not a live connectivity guarantee; cache reads may remain unchecked. */
      health: {
        status: "unchecked" | "succeeded" | "failed";
        checkedAt: string | null;
      };
      /** Last matching ledger entry is beyond rejection; pending/failed work can also make this true. */
      executed: boolean;
      succeeded: boolean;
      reason: string;
    }[];
  };
  /** A model selection exists; does not prove valid credentials, connectivity or successful inference. */
  providerConfigured: boolean;
  providerId: string | null;
  modelId: string | null;
};

/** Narrow preload API used by the renderer. Methods return promises; backend validation, scope or provider failures can reject them. */
export interface EntityAgentBridge {
  /** Clears this assignment's transcript and unused approvals while retaining execution evidence and sources. */
  clearEntityAgentChat(input: AssignmentScope): Promise<EntityAgentState>;
  /** Lists built-in registration metadata without executing Engines or probing providers. */
  engineDefinitions(): Promise<EngineDefinition[]>;
  /** Lists current associations, optionally restricted to one Entity; does not retrieve private knowledge. */
  listEntityAgents(input: {
    vaultPath: string;
    entityId?: string;
  }): Promise<AgentAssignment[]>;
  /** Idempotently links an existing Agent to an existing Entity; returns the original assignment for a repeated pair. */
  assignEntityAgent(input: {
    vaultPath: string;
    entityId: string;
    agentId: string;
  }): Promise<AgentAssignment>;
  /** Removes the association, retaining the reusable Agent definition and isolated historical files. */
  removeEntityAgent(input: AssignmentScope): Promise<boolean>;
  /** Opens history with current availability metadata; does not invoke inference or an Engine. */
  openEntityAgent(input: AssignmentScope): Promise<EntityAgentState>;
  /** Persists a human turn, refreshes derived Identity and runs scoped optional inference; requestId deduplicates message retries. */
  sendEntityAgent(
    input: AssignmentScope & { message: string; requestId?: string },
  ): Promise<EntityAgentState>;
  /** Reads a bounded lexical chunk page through the connected Knowledge node and Entity authorization boundary. */
  retrieveEntityAgentKnowledge(
    input: AssignmentScope & { query: string; offset?: number; limit?: number },
  ): Promise<IdentityChunkPage>;
  /** Runs an authorized read-only capability through the backend execution path and returns actual audit/result evidence. */
  executeEntityAgent(
    input: AssignmentScope & {
      nodeId: string;
      capabilityId: string;
      approved: boolean;
      arguments?: { force?: boolean };
    },
  ): Promise<{ audit: { id: string; status: string }; result: unknown }>;
  /** Persists a graph/Identity-bound proposal without executing it; requestId supports idempotent proposal retries. */
  proposeEntityAgent(
    input: AssignmentScope & {
      requestId?: string;
      nodeId: string;
      capabilityId: string;
      arguments?: { force?: boolean };
    },
  ): Promise<AgentToolRequest>;
  /** Decides one exact pending request; consumed/expired/stale requests cannot authorize another invocation. */
  decideEntityAgentRequest(
    input: AssignmentScope & {
      requestId: string;
      approved: boolean;
      /** False executes approved deterministic work without starting a continuation LLM turn. */
      continueAgent?: boolean;
    },
  ): Promise<EntityAgentState>;
}
