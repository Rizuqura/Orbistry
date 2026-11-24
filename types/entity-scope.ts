/** Host-owned per-turn contract; model and renderer payloads cannot authorize or modify it. */
export type EntityScopeContract = Readonly<{
  schemaVersion: 1;
  resolutionStatus?: "RESOLVED" | "AMBIGUOUS" | "NOT_FOUND" | "ALL_REQUESTED";
  scopeId: string;
  runId: string | null;
  universeId: string;
  source: "worldview.entities.resolve";
  selection: Readonly<{
    mode: "registered_entities" | "document_references";
    tags: readonly string[];
    seedEntityIds: readonly string[];
    includeConnectedEntities: boolean;
    allowUnregisteredEntities: false;
  }>;
  resolvedEntityIds: readonly string[];
  registryRevision: string;
  graphRevision: string;
  requirements: Readonly<{
    financial: boolean;
    dataType: "actual_earnings" | "financial_metrics" | "knowledge";
    allowSyntheticFinancials: false;
    allowEstimates: boolean;
  }>;
  status: "validated" | "clarification_required";
  clarificationReason: "external_research" | "unsupported_selection" | null;
  requestHash: string;
  createdAt: string;
}>;

/** Evidence fields retain provider units and periods; document authenticity claims alone cannot create actual records. */
export type FinancialEvidence = {
  evidenceId: string;
  entityId: string;
  metric: string;
  period: string | null;
  periodType: string | null;
  value: number | null;
  currency: string | null;
  unit: string | null;
  evidenceType: "actual" | "estimate" | "synthetic" | "unavailable";
  sourceRef: string | null;
  executionId: string | null;
  retrievedAt: string | null;
  marketTimestamp: string | null;
  reason: string | null;
};
