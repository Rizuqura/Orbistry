import type { VaultEntry, VaultSnapshot } from "../types/electron";
import type { KnowledgeNode, PlanetEdge, PlanetGraph } from "../types/graph";

const INTERNAL_PLANET_FOLDERS = new Set([".engine", "agentcontext.memory"]);

// Visual exclusions are separate from reviewed source permissions: agent memory
// remains available to explicit construction bindings and Settings.
export function buildGraphFromVault(
  snapshot: VaultSnapshot,
): PlanetGraph | null {
  if (snapshot.status !== "ready") return null;

  const rootName =
    snapshot.rootPath.split(/[\\/]/).filter(Boolean).pop() ?? "VAULT";
  const rootId = snapshot.rootPath;
  const nodes: KnowledgeNode[] = [];
  const edges: PlanetEdge[] = [];

  const root: KnowledgeNode = {
    id: rootId,
    name: rootName,
    type: "directory",
    path: rootId,
    children: [],
    connections: [],
    level: 0,
  };
  nodes.push(root);
  const byId = new Map<string, KnowledgeNode>([[rootId, root]]);

  const walk = (
    entries: VaultEntry[],
    parentId: string,
    level: number,
  ): void => {
    for (const entry of entries) {
      if (
        entry.relativePath
          .split(/[\\/]/)
          .some((part) => INTERNAL_PLANET_FOLDERS.has(part.toLowerCase()))
      )
        continue;
      const isDir = entry.kind === "folder";
      const fileType =
        entry.extension === ".csv"
          ? "csv"
          : entry.extension === ".pdf"
            ? "pdf"
            : entry.extension === ".md" || entry.extension === ".markdown"
              ? "md"
              : [".png", ".jpg", ".jpeg"].includes(entry.extension ?? "")
                ? "image"
                : isDir
                  ? undefined
                  : "other";
      const node: KnowledgeNode = {
        id: entry.relativePath,
        name: entry.name,
        type: isDir ? "directory" : "file",
        parentId,
        path: entry.relativePath,
        fileType,
        extension: entry.extension,
        sizeBytes: entry.sizeBytes,
        children: [],
        connections: [],
        level,
      };
      nodes.push(node);
      byId.set(node.id, node);
      byId.get(parentId)?.children.push(node.id);
      edges.push({ source: parentId, target: node.id, kind: "hierarchy" });
      if (isDir && entry.children) walk(entry.children, node.id, level + 1);
    }
  };

  walk(snapshot.entries, rootId, 1);

  // Aggregate only the visible vault tree; no document reads are needed.
  for (let index = nodes.length - 1; index >= 0; index--) {
    const node = nodes[index];
    if (node.type === "directory")
      node.sizeBytes = node.children.reduce(
        (sum, id) => sum + (byId.get(id)?.sizeBytes ?? 0),
        0,
      );
  }

  for (const node of nodes) {
    if (node.sizeBytes === undefined) continue;
    const bytes = node.sizeBytes;
    const units = ["B", "KiB", "MiB", "GiB", "TiB"];
    const unit = Math.min(
      units.length - 1,
      Math.floor(Math.log(Math.max(1, bytes)) / Math.log(1024)),
    );
    node.size =
      (bytes / 1024 ** unit).toLocaleString(undefined, {
        maximumFractionDigits: 1,
      }) +
      " " +
      units[unit];
  }

  const directories = nodes.filter((node) => node.type === "directory").length;
  const files = nodes.length - directories;

  return {
    nodes,
    edges,
    rootId,
    byId,
    stats: { directories, files, connections: 0, orphans: 0 },
  };
}
