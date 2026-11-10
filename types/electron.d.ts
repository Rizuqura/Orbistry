import type { AiBridge } from "./ai";
export type * from "./ai";

export type VaultEntry = {
  kind: "file" | "folder";
  name: string;
  relativePath: string;
  extension?: string;
  readable?: boolean;
  sizeBytes?: number;
  pdf?: {
    textStatus: "ready" | "empty" | "error" | "too-large";
    pageCount: number | null;
  };
  children?: VaultEntry[];
};

export type VaultSnapshot = {
  status: "ready" | "missing" | "unavailable";
  rootPath: string;
  entries: VaultEntry[];
  totalFiles: number;
  totalDirectories: number;
  lastScannedAt: string | null;
  issues: VaultIssue[];
  message?: string;
};

export type VaultIssue = {
  relativePath: string;
  message: string;
};

export type VaultFile = {
  name: string;
  relativePath: string;
  extension: ".md" | ".markdown" | ".csv" | ".png" | ".jpg" | ".jpeg";
  content: string;
  image?: { dataUrl: string; textStatus: "ready" | "empty"; language?: string };
};

export type VaultPdfFile = {
  name: string;
  relativePath: string;
  size: number;
  data: Uint8Array;
  textStatus?: "ready" | "empty" | "error" | "too-large";
  pageCount?: number | null;
  textError?: string;
};

export type VaultSearchResult = {
  relativePath: string;
  name: string;
  matchCount: number;
  excerpt: string;
};

export type Station = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  assignmentCount: number;
};
export type StationAssignment = {
  relativePath: string;
  kind: "file" | "folder";
  stationIds: string[];
  missing: boolean;
  fingerprint?: { size: number; modifiedMs: number; sha256?: string };
};
export type ActiveContextEntry = {
  relativePath: string;
  addedAt: string;
  missing: boolean;
  changed: boolean;
  fingerprint?: { size: number; modifiedMs: number; sha256?: string };
};
export type StationState = {
  schemaVersion: number;
  revision: number;
  stations: Station[];
  assignments: StationAssignment[];
  activeContext: ActiveContextEntry[];
  contextEstimatedTokens: number;
  writable: boolean;
  error: string | null;
};
export type ContextPreview = { files: string[]; estimatedTokens: number };
export type ContextSource = {
  id: string;
  relativePath: string;
  name?: string;
  type?: string;
  order: number;
  missing: boolean;
  stations: string[];
  content: string | null;
  contentHash: string | null;
  estimatedTokens: number;
};
export type ContextPackage = {
  schemaVersion: number;
  vault: { rootPath: string };
  generatedAt: string;
  tokenEstimateMethod: string;
  estimatedTokens: number;
  sources: ContextSource[];
};
export type ReattachmentSuggestion = {
  relativePath: string;
  candidates: string[];
};
export type BrainScopeMode = "universe" | "station" | "active-context";
export type BrainErrorCode =
  | "BRAIN_INVALID_REQUEST"
  | "BRAIN_INVALID_STATIONS"
  | "BRAIN_VAULT_UNAVAILABLE"
  | "BRAIN_SCOPE_NOT_FOUND"
  | "BRAIN_SCOPE_EXPIRED"
  | "BRAIN_SCOPE_OWNER_MISMATCH"
  | "BRAIN_SOURCE_NOT_AUTHORIZED"
  | "BRAIN_SOURCE_UNAVAILABLE"
  | "BRAIN_SOURCE_CHANGED"
  | "BRAIN_INTERNAL_ERROR";
export type BrainScopeInput = {
  ownerId: string;
  activeStationIds: string[];
  matchMode: "any" | "all";
};
export type BrainSourceReadInput = {
  ownerId: string;
  scopeId: string;
  sourceId: string;
};
export type BrainSource = {
  id: string;
  relativePath: string;
  name: string;
  type: "md" | "markdown" | "csv" | "pdf" | "png" | "jpg" | "jpeg";
  stations: string[];
  estimatedTokens: number;
  contentHash: string | null;
  missing: boolean;
  changed: boolean;
};
export type BrainScope = {
  id: string;
  ownerId: string;
  mode: BrainScopeMode;
  reason: string;
  stationIds: string[];
  stationNames: string[];
  manifestVersion: string;
  createdAt: string;
  expiresAt: string;
  estimatedTokens: number;
  sources: BrainSource[];
};
export type BrainSourceContent = {
  scopeId: string;
  ownerId: string;
  manifestVersion: string;
  sourceId: string;
  relativePath: string;
  type: BrainSource["type"];
  content: string;
  contentHash: string;
  estimatedTokens: number;
};
export interface BrainScopeClientError extends Error {
  name: "BrainScopeError";
  code: BrainErrorCode;
  details: Record<string, unknown>;
}
declare global {
  interface Window {
    orbistryDesktop?: {
      apiVersion: number;
      platform: string;
      vault: {
        getSnapshot: () => Promise<VaultSnapshot>;
        rescan: () => Promise<VaultSnapshot>;
        selectFolder: () => Promise<VaultSnapshot | null>;
        read: (relativePath: string) => Promise<VaultFile>;
        saveMarkdown: (input: {
          vaultPath: string;
          relativePath: string;
          content: string;
          originalContent: string;
        }) => Promise<VaultFile>;
        readPdf: (relativePath: string) => Promise<VaultPdfFile>;
        search: (query: string) => Promise<VaultSearchResult[]>;
      };
      stations: {
        getState: () => Promise<StationState>;
        create: (name: string) => Promise<StationState>;
        rename: (id: string, name: string) => Promise<StationState>;
        delete: (id: string) => Promise<StationState>;
        setAssignments: (
          paths: string[],
          stationId: string,
          assigned: boolean,
        ) => Promise<StationState>;
        suggestions: () => Promise<ReattachmentSuggestion[]>;
        reattach: (fromPath: string, toPath: string) => Promise<StationState>;
      };
      context: {
        preview: (paths: string[]) => Promise<ContextPreview>;
        add: (paths: string[]) => Promise<StationState>;
        remove: (paths: string[]) => Promise<StationState>;
        clear: () => Promise<StationState>;
        buildPackage: () => Promise<ContextPackage>;
        prepareBrainScope: (input: BrainScopeInput) => Promise<BrainScope>;
        readBrainSource: (
          input: BrainSourceReadInput,
        ) => Promise<BrainSourceContent>;
      };
      ai: AiBridge;
    };
  }
}

export {};
