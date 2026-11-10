// Graph data model for the Planet View.
// This is intentionally separated from the vault/electron types so the
// renderer can consume mock data now and a real indexed vault later.

export type NodeType = "directory" | "file";
export type FileType = "md" | "csv" | "pdf" | "image" | "other";

export interface KnowledgeNode {
  id: string;
  name: string;
  type: NodeType;
  parentId?: string;
  path: string;
  fileType?: FileType;
  extension?: string;
  children: string[];
  connections: string[];
  level: number;
  // Display metadata (mock for V0.0.1; real values come from the indexed vault).
  tags?: string[];
  modified?: string;
  size?: string;
  sizeBytes?: number;
}

export type EdgeKind = "hierarchy" | "secondary";

export interface PlanetEdge {
  source: string;
  target: string;
  kind: EdgeKind;
  similarity?: number;
  stationId?: string;
}

export interface StationCluster {
  id: string;
  name: string;
  memberIds: string[];
}

export interface ContextHubLayout {
  id: string;
  name: string;
  x: number;
  y: number;
  size: number;
}

export interface PlanetGraph {
  nodes: KnowledgeNode[];
  edges: PlanetEdge[];
  rootId: string;
  byId: Map<string, KnowledgeNode>;
  stats: {
    directories: number;
    files: number;
    connections: number;
    orphans: number;
  };
  projection?: "filesystem" | "station";
}

export type LayoutMode = "orbital" | "radial" | "force";

export interface NodeLayout {
  x: number;
  y: number;
  size: number;
}

export interface LayoutResult {
  orbits?: PlanetOrbit[];
  positions: Map<string, NodeLayout>;
  width: number;
  height: number;
  minX: number;
  minY: number;
  contextHubs?: Map<string, ContextHubLayout>;
}
export interface PlanetOrbit {
  parentId: string;
  x: number;
  y: number;
  radius: number;
}
