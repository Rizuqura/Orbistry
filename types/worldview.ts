import type { WorldViewChip } from "../features/worldview/chips";

export type WorldViewSource = Readonly<{
  sourceId: string;
  sourceRef: string;
  filename: string;
  extension: string;
  origin: "universe";
  sizeBytes: number | null;
  recordedSizeBytes: number | null;
  status: "available" | "missing" | "unavailable";
  message?: string;
}>;
export type WorldViewState = Readonly<{
  rootPath: string;
  indexDirectory: string;
  chips: WorldViewChip[];
  issues: { index: string; message: string }[];
}>;
export type UniverseEntry = Readonly<{
  kind: "file" | "folder";
  name: string;
  relativePath: string;
  extension?: string;
  sizeBytes?: number | null;
}>;
export type UniverseListing = Readonly<{
  rootPath: string;
  directory: string;
  query: string;
  entries: UniverseEntry[];
  issues: { relativePath: string; message: string }[];
}>;
export type WorldViewOperation =
  "load" | "save" | "delete" | "list" | "assign" | "unassign" | "reveal";
export type WorldViewRequest = {
  vaultPath: string;
  chip?: WorldViewChip;
  id?: string;
  directory?: string;
  query?: string;
  sourceRefs?: string[];
  sourceId?: string;
  sourceRef?: string;
};
export type WorldViewBridge = {
  request: <T = unknown>(
    operation: WorldViewOperation,
    input: WorldViewRequest,
  ) => Promise<T>;
};
