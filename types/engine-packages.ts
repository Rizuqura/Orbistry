/** Data-only discovery contract. Engine descriptions and output are untrusted data; this type supplies no execution or installation authority. */
export type EnginePackageCatalog = {
  protocol: "orbistry.engine/1";
  entityId: string | null;
  engines: {
    engineId: string;
    version: string;
    name: string;
    description: string;
    digest: string;
    trusted: boolean;
    policy: "unlinked" | "manual" | "automatic";
    signature: {
      status: "unsigned" | "valid";
      keyId: string | null;
      algorithm: "Ed25519" | null;
    };
    links: {
      entityId: string;
      operations: string[];
      policy: "manual" | "automatic";
      allowNetwork: boolean;
    }[];
    operations: {
      id: string;
      description: string;
      input_schema: Record<string, unknown>;
      output_schema: Record<string, unknown>;
      read_only: true;
      network: "none" | "outbound";
      timeout_ms: number;
      available: boolean;
    }[];
  }[];
  tools: {
    type: "function";
    function: {
      name: string;
      description: string;
      parameters: Record<string, unknown>;
    };
  }[];
  bindings: {
    name: string;
    engineId: string;
    operation: string;
    digest: string;
    approvalRequired: boolean;
  }[];
};
