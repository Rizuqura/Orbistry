import type { KnowledgeNode, PlanetGraph } from "../types/graph";

export interface PlanetDetailsProps {
  selected: KnowledgeNode | null;
  graph: PlanetGraph | null;
  onOpenFile: (id: string) => void;
  onExplore: (id: string) => void;
}

export function PlanetDetails({
  selected,
  graph,
  onOpenFile,
  onExplore,
}: Readonly<PlanetDetailsProps>) {
  if (!graph) {
    return (
      <div className="pd-body">
        <div className="pd-section-title">PLANET VIEW</div>
        <p className="pd-empty">
          Vault offline.
          <br />
          Open Orbistry and choose a Universe.
        </p>
      </div>
    );
  }

  if (!selected) {
    const { directories, files, connections, orphans } = graph.stats;
    return (
      <div className="pd-body">
        <div className="pd-section-title">PLANET VIEW</div>
        <p className="pd-empty">
          Select a directory or file
          <br />
          to inspect its context.
        </p>
        <div className="pd-rule" />
        <Detail label="DIRECTORIES" value={String(directories)} />
        <Detail label="FILES" value={String(files)} />
        <Detail label="CONNECTIONS" value={String(connections)} />
        <Detail label="ORPHANS" value={String(orphans)} />
      </div>
    );
  }

  const isDir = selected.type === "directory";
  const isAsteroid = selected.fileType === "other";
  const parent = selected.parentId
    ? graph.byId.get(selected.parentId)
    : undefined;
  const childFiles = selected.children.filter((id) => {
    const child = graph.byId.get(id);
    return child?.type === "file";
  }).length;
  const childDirs = selected.children.length - childFiles;

  return (
    <div className="pd-body">
      <div className="pd-section-title">
        <span className={isDir ? "pd-star" : "pd-planet"}>
          {isDir ? "★" : "○"}
        </span>
        {selected.name}
      </div>
      <div className="pd-rule" />
      <Detail
        label="TYPE"
        value={
          isDir
            ? "Directory"
            : isAsteroid
              ? "ASTEROID · UNREADABLE"
              : (selected.fileType ?? "file").toUpperCase()
        }
      />
      <Detail label="PATH" value={selected.path} wrap />
      {parent ? <Detail label="PARENT" value={parent.name} /> : null}
      <div className="pd-rule" />
      {isDir ? (
        <>
          <Detail
            label="CHILDREN"
            value={`${childFiles} files · ${childDirs} directories`}
          />
          <Detail
            label="CONNECTIONS"
            value={String(selected.connections.length)}
          />
          <div className="pd-rule" />
          <button className="pd-action" onClick={() => onExplore(selected.id)}>
            EXPLORE ▸
          </button>
        </>
      ) : (
        <>
          <Detail label="LINKS" value={String(selected.connections.length)} />
          <Detail label="MODIFIED" value={selected.modified ?? "—"} />
          {selected.size ? <Detail label="SIZE" value={selected.size} /> : null}
          <div className="pd-rule" />
          {selected.tags && selected.tags.length > 0 ? (
            <div className="pd-tags">
              {selected.tags.map((tag) => (
                <span key={tag} className="pd-tag">
                  #{tag}
                </span>
              ))}
            </div>
          ) : null}
          <div className="pd-rule" />
          {isAsteroid ? (
            <p className="pd-empty">
              This file is mapped for structure only and cannot be opened in
              Orbistry.
            </p>
          ) : (
            <button
              className="pd-action"
              onClick={() => onOpenFile(selected.id)}
            >
              OPEN ⏎
            </button>
          )}
        </>
      )}
    </div>
  );
}

function Detail({
  label,
  value,
  wrap,
}: Readonly<{ label: string; value: string; wrap?: boolean }>) {
  return (
    <div className={`pd-detail${wrap ? " pd-detail-wrap" : ""}`}>
      <span className="pd-detail-label">{label}</span>
      <span className="pd-detail-value">{value}</span>
    </div>
  );
}
