import { memo, type CSSProperties, type KeyboardEvent } from "react";
import type { KnowledgeNode, NodeLayout } from "../types/graph";

export interface PlanetNodeProps {
  anchor: boolean;
  node: KnowledgeNode;
  layout: NodeLayout;
  selected: boolean;
  hovered: boolean;
  dimmed: boolean;
  emphasized: boolean;
  stationMatch: boolean;
  activeContext: boolean;
  structural: boolean;
  semanticBand: "far" | "normal" | "near";
  childFiles: number;
  childDirs: number;
  onHover: (id: string | null) => void;
  onSelect: (id: string, additive?: boolean) => void;
  onOpen: (id: string) => void;
}

export const PlanetNode = memo(function PlanetNode({
  anchor,
  node,
  layout,
  selected,
  hovered,
  dimmed,
  emphasized,
  stationMatch,
  activeContext,
  structural,
  semanticBand,
  childFiles,
  childDirs,
  onHover,
  onSelect,
  onOpen,
}: Readonly<PlanetNodeProps>) {
  const isDir = node.type === "directory";
  const isAsteroid = node.fileType === "other";
  const className = [
    "pnode",
    anchor ? "panchor" : "",
    isDir ? "pdir" : "pfile",
    isAsteroid ? "pasteroid" : "",
    !isDir && node.fileType ? `pfile-${node.fileType}` : "",
    selected ? "selected" : "",
    hovered ? "hovered" : "",
    dimmed ? "dim" : "",
    emphasized ? "emphasized" : "",
    stationMatch ? "station-match" : "",
    activeContext ? "active-context" : "",
    structural ? "station-structural" : "",
    `semantic-${semanticBand}`,
  ]
    .filter(Boolean)
    .join(" ");

  const style: CSSProperties = {
    left: `${layout.x}px`,
    top: `${layout.y}px`,
  };

  return (
    <div
      className={className}
      style={style}
      role="button"
      tabIndex={0}
      aria-label={`${isDir ? "Directory" : "File"}: ${node.name}`}
      onFocus={() => onHover(node.id)}
      onBlur={() => onHover(null)}
      onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
          event.preventDefault();
          if (event.shiftKey) onSelect(node.id, true);
          else onOpen(node.id);
        }
      }}
    >
      <span
        className="porb"
        style={{ width: `${layout.size}px`, height: `${layout.size}px` }}
      >
        <svg
          width={layout.size}
          height={layout.size}
          viewBox={`0 0 ${layout.size} ${layout.size}`}
          aria-hidden="true"
          className="planet-orb-svg"
        >
          <circle
            className="planet-orb-shape"
            cx={layout.size / 2}
            cy={layout.size / 2}
            r={Math.max(0.5, layout.size / 2 - 0.6)}
          />
        </svg>
      </span>
      {(hovered || selected) && (
        <div className="ptip" role="tooltip">
          <div className="ptip-title">
            <span
              className={
                isDir
                  ? "ptip-star"
                  : isAsteroid
                    ? "ptip-asteroid"
                    : "ptip-planet"
              }
            >
              {isDir ? "★" : isAsteroid ? "◆" : "○"}
            </span>
            {node.name}
          </div>
          <div className="ptip-row">
            <span>TYPE</span>
            <b>
              {isDir
                ? "Directory"
                : isAsteroid
                  ? `Asteroid · ${node.extension || "unknown"}`
                  : (node.fileType?.toUpperCase() ?? "File")}
            </b>
          </div>
          <div className="ptip-row">
            <span>PATH</span>
            <b>{node.path}</b>
          </div>
          {isDir ? (
            <div className="ptip-row">
              <span>CHILDREN</span>
              <b>
                {childFiles} files · {childDirs} dirs
              </b>
            </div>
          ) : (
            <>
              <div className="ptip-row">
                <span>SIZE</span>
                <b>{node.size ?? "—"}</b>
              </div>
              <div className="ptip-row">
                <span>LINKS</span>
                <b>{node.connections.length}</b>
              </div>
            </>
          )}
          <div className="ptip-row">
            <span>MODIFIED</span>
            <b>{node.modified ?? "—"}</b>
          </div>
        </div>
      )}
    </div>
  );
});
