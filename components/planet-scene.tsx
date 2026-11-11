import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { MouseEvent, PointerEvent } from "react";
import type {
  KnowledgeNode,
  PlanetGraph,
  StationCluster,
} from "../types/graph";
import {
  boxSelectPlanetNodes,
  pickPlanetNode,
  planetVisualDiameter,
  planetSizeOpacity,
} from "../lib/planet-hit-testing";
import {
  ancestorPath,
  computeLayout,
  computeStationLayout,
  subtreeIds,
} from "../lib/planet-layout";
import { PlanetNode } from "./planet-node";
import { PlanetMinimap } from "./planet-minimap";
import { PlanetControls } from "./planet-controls";
import type { PlanetCamera } from "../lib/planet-navigation";
import { ChatPanel, type ChatPanelProps } from "./chat-panel";
import { PlanetUsageBadge } from "../features/usage-monitor/planet-usage-badge";
import { withPlanetOrbits, orbitInPlanetViewport } from "../lib/planet-orbits";
import { animatePlanetLayout, preparePlanetMotion } from "../lib/planet-motion";
import { usePlanetAnimation } from "../lib/use-planet-animation";
import {
  layoutPlanetLabels,
  planetLabelFontSize,
  type PlanetLabelCandidate,
} from "../lib/planet-labels";
import {
  edgeInPlanetViewport,
  fitPlanetCamera,
  inPlanetViewport,
} from "../lib/planet-rendering";
const EMPTY_IDS: ReadonlySet<string> = new Set();
const EMPTY_CLUSTERS: readonly StationCluster[] = [];

export interface PlanetSceneProps {
  graph: PlanetGraph;
  navigationTarget?: { id: string } | null;
  selectedIds: ReadonlySet<string>;
  onSelect: (id: string | null, additive?: boolean) => void;
  onSelectMany: (ids: string[], additive: boolean) => void;
  onOpenFile: (id: string) => void;
  focusId: string | null;
  onFocus: (id: string | null) => void;
  stationMatchIds?: ReadonlySet<string>;
  activeContextIds?: ReadonlySet<string>;
  projectionIds?: ReadonlySet<string> | null;
  stationClusters?: readonly StationCluster[];
  chatProps: Omit<ChatPanelProps, "variant">;
  chatDetached?: boolean;
  onOpenSettings: () => void;
  canvasFocus: boolean;
  onToggleCanvasFocus: () => void;
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

type SemanticZoomBand = "far" | "normal" | "near";

function isSceneOverlay(target: EventTarget | null): boolean {
  return (
    target instanceof Element &&
    Boolean(
      target.closest(
        ".pmini, .pctrl, .chat-panel, .planet-usage, .planet-view-header",
      ),
    )
  );
}

export function PlanetScene({
  graph,
  navigationTarget,
  selectedIds,
  onSelect,
  onSelectMany,
  onOpenFile,
  focusId,
  onFocus,
  stationMatchIds = EMPTY_IDS,
  activeContextIds = EMPTY_IDS,
  projectionIds = null,
  stationClusters = EMPTY_CLUSTERS,
  chatProps,
  chatDetached = false,
  onOpenSettings,
  canvasFocus,
  onToggleCanvasFocus,
}: Readonly<PlanetSceneProps>) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [canvas, setCanvas] = useState({ w: 0, h: 0 });
  const [transform, updateTransform] = useState({ x: 0, y: 0, k: 1 });
  const transformRef = useRef(transform);
  const setTransform = useCallback(
    (next: PlanetCamera | ((current: PlanetCamera) => PlanetCamera)) => {
      const value =
        typeof next === "function" ? next(transformRef.current) : next;
      transformRef.current = value;
      updateTransform(value);
    },
    [],
  );
  const [asteroidsVisible, setAsteroidsVisible] = useState(true);
  const [selectionBox, setSelectionBox] = useState<{
    x: number;
    y: number;
    w: number;
    h: number;
  } | null>(null);
  const [panMode, setPanMode] = useState(false);
  const spaceHeld = useRef(false);
  const [spacePanning, setSpacePanning] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const motion = usePlanetAnimation(
    Boolean(hoveredId) || interacting || spacePanning,
    graph.nodes.length,
  );
  useEffect(() => {
    const clear = () => {
      spaceHeld.current = false;
      setSpacePanning(false);
    };
    const down = (event: KeyboardEvent) => {
      if (
        event.code !== "Space" ||
        event.ctrlKey ||
        event.metaKey ||
        event.altKey
      )
        return;
      const target = event.target;
      if (
        target instanceof Element &&
        (target.closest("input, textarea, select, [contenteditable], dialog") ||
          isSceneOverlay(target))
      )
        return;
      const canvas = canvasRef.current;
      if (
        !canvas ||
        !(
          canvas.matches(":hover") ||
          (target instanceof Node && canvas.contains(target))
        )
      )
        return;
      event.preventDefault();
      spaceHeld.current = true;
      setSpacePanning(true);
    };
    const up = (event: KeyboardEvent) => {
      if (event.code === "Space") clear();
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    window.addEventListener("blur", clear);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      window.removeEventListener("blur", clear);
    };
  }, []);
  const dragStart = useRef<{
    px: number;
    py: number;
    ox: number;
    oy: number;
    moved: boolean;
    box: boolean;
    additive: boolean;
    pointerId: number;
  } | null>(null);

  const baseLayout = useMemo(
    () =>
      graph.projection === "station"
        ? computeStationLayout(graph, stationMatchIds, stationClusters)
        : withPlanetOrbits(graph, computeLayout(graph, "orbital")),
    [graph, stationClusters, stationMatchIds],
  );
  const opacityRange = useMemo(() => {
    let minimum = Infinity;
    let maximum = 0;
    for (const [id, position] of baseLayout.positions) {
      if (graph.byId.get(id)?.type !== "directory") continue;
      minimum = Math.min(minimum, position.size);
      maximum = Math.max(maximum, position.size);
    }
    return { minimum, maximum };
  }, [baseLayout, graph.byId]);
  const motionPlan = useMemo(
    () => preparePlanetMotion(graph, baseLayout),
    [graph, baseLayout],
  );
  const layout = useMemo(
    () => animatePlanetLayout(baseLayout, motionPlan, motion.seconds),
    [baseLayout, motionPlan, motion.seconds],
  );
  const layoutRef = useRef(layout);
  layoutRef.current = layout;
  const semanticBand: SemanticZoomBand =
    transform.k < 0.55 ? "far" : transform.k < 1.15 ? "normal" : "near";

  useEffect(() => {
    if (!hoveredId) return;
    const hovered = graph.byId.get(hoveredId);
    if (!hovered || (semanticBand === "far" && hovered.type === "file"))
      setHoveredId(null);
  }, [graph, hoveredId, semanticBand]);

  const childCounts = useMemo(() => {
    const map = new Map<string, { files: number; dirs: number }>();
    for (const node of graph.nodes) {
      let files = 0;
      let dirs = 0;
      for (const childId of node.children) {
        const child = graph.byId.get(childId);
        if (child?.type === "file") files += 1;
        else dirs += 1;
      }
      map.set(node.id, { files, dirs });
    }
    return map;
  }, [graph]);

  const adjacency = useMemo(() => {
    const map = new Map<string, Set<string>>();
    for (const node of graph.nodes) map.set(node.id, new Set());
    for (const edge of graph.edges) {
      map.get(edge.source)?.add(edge.target);
      map.get(edge.target)?.add(edge.source);
    }
    return map;
  }, [graph]);

  const visibleIds = useMemo(() => {
    if (focusId && graph.byId.has(focusId)) return subtreeIds(graph, focusId);
    return null;
  }, [graph, focusId]);
  useEffect(() => {
    if (focusId && !graph.byId.has(focusId)) onFocus(null);
  }, [focusId, graph, onFocus]);
  const sceneNodes = useMemo(
    () =>
      graph.nodes.filter((node) => {
        if (
          (!asteroidsVisible && node.fileType === "other") ||
          (visibleIds && !visibleIds.has(node.id)) ||
          (projectionIds && !projectionIds.has(node.id))
        )
          return false;
        const position = layout.positions.get(node.id);
        return (
          !!position &&
          inPlanetViewport(position, transform, canvas.w, canvas.h)
        );
      }),
    [
      graph,
      asteroidsVisible,
      visibleIds,
      projectionIds,
      layout.positions,
      transform,
      canvas,
    ],
  );
  const minimumZoom = Math.min(
    0.2,
    fitPlanetCamera(canvas.w, canvas.h, layout.width, layout.height).k,
  );

  // Measure the canvas.
  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const measure = () => setCanvas({ w: el.clientWidth, h: el.clientHeight });
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const pickAt = useCallback(
    (clientX: number, clientY: number) => {
      const canvasElement = canvasRef.current;
      if (!canvasElement) return null;
      const rect = canvasElement.getBoundingClientRect();
      return pickPlanetNode(
        sceneNodes,
        layout.positions,
        transform,
        { x: clientX - rect.left, y: clientY - rect.top },
        semanticBand,
      );
    },
    [sceneNodes, layout.positions, semanticBand, transform],
  );

  const fitView = useCallback(() => {
    if (canvas.w === 0 || canvas.h === 0) return;
    setTransform(
      fitPlanetCamera(canvas.w, canvas.h, baseLayout.width, baseLayout.height),
    );
  }, [canvas, baseLayout, setTransform]);

  // Fit on first measurement and whenever the layout changes (mode switch).
  useEffect(() => {
    fitView();
  }, [fitView, baseLayout]);

  const focusOnNode = useCallback(
    (id: string) => {
      const pos = layoutRef.current.positions.get(id);
      if (!pos || canvas.w === 0) return;
      const from = transformRef.current;
      const k = clamp(Math.max(from.k, 1.6), 0.2, 4);
      const to = {
        x: canvas.w / 2 - pos.x * k,
        y: canvas.h / 2 - pos.y * k,
        k,
      };
      setTransform(to);
    },
    [baseLayout, canvas, setTransform],
  );

  const lastNavigation = useRef<typeof navigationTarget>(null);
  useEffect(() => {
    if (
      !navigationTarget ||
      navigationTarget === lastNavigation.current ||
      !canvas.w ||
      !canvas.h
    )
      return;
    if (!layout.positions.has(navigationTarget.id)) return;
    lastNavigation.current = navigationTarget;
    if (graph.byId.get(navigationTarget.id)?.fileType === "other")
      setAsteroidsVisible(true);
    focusOnNode(navigationTarget.id);
  }, [navigationTarget, canvas, layout, graph, focusOnNode]);

  const handleOpen = useCallback(
    (id: string) => {
      const node = graph.byId.get(id);
      if (!node) return;
      if (node.type === "directory") {
        onFocus(id);
      } else {
        onOpenFile(id);
      }
    },
    [graph, onFocus, onOpenFile],
  );

  const resetView = useCallback(() => {
    onFocus(null);
    fitView();
  }, [onFocus, fitView]);

  // Center on the focused node whenever focus changes (double-click, breadcrumb, or details panel).
  useEffect(() => {
    if (focusId) focusOnNode(focusId);
  }, [focusId, focusOnNode]);

  const zoomBy = useCallback(
    (factor: number) => {
      setTransform((t) => {
        const k = clamp(t.k * factor, minimumZoom, 4);
        const cx = canvas.w / 2;
        const cy = canvas.h / 2;
        return {
          x: cx - (cx - t.x) * (k / t.k),
          y: cy - (cy - t.y) * (k / t.k),
          k,
        };
      });
    },
    [canvas, setTransform, minimumZoom],
  );

  // Native non-passive wheel listener so we can preventDefault.
  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const onWheel = (event: WheelEvent) => {
      if (isSceneOverlay(event.target)) return;
      event.preventDefault();
      if (dragStart.current) return;
      const rect = el.getBoundingClientRect();
      const mx = event.clientX - rect.left;
      const my = event.clientY - rect.top;
      setTransform((t) => {
        const factor = event.deltaY < 0 ? 1.12 : 1 / 1.12;
        const k = clamp(t.k * factor, minimumZoom, 4);
        return {
          x: mx - (mx - t.x) * (k / t.k),
          y: my - (my - t.y) * (k / t.k),
          k,
        };
      });
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [setTransform, minimumZoom]);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (
      isSceneOverlay(event.target) ||
      dragStart.current ||
      ![0, 1].includes(event.button)
    )
      return;
    event.preventDefault();
    event.currentTarget.focus();
    setInteracting(true);
    dragStart.current = {
      px: event.clientX,
      py: event.clientY,
      ox: transform.x,
      oy: transform.y,
      moved: false,
      box: event.button === 0 && !spaceHeld.current && !panMode,
      additive: event.shiftKey,
      pointerId: event.pointerId,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (isSceneOverlay(event.target)) {
      setHoveredId(null);
      return;
    }
    const start = dragStart.current;
    if (start && start.pointerId !== event.pointerId) return;
    if (!start) {
      setHoveredId(pickAt(event.clientX, event.clientY)?.id ?? null);
      return;
    }
    const dx = event.clientX - start.px;
    const dy = event.clientY - start.py;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
      start.moved = true;
      setHoveredId(null);
    }
    if (start.box) {
      if (start.moved) {
        const rect = event.currentTarget.getBoundingClientRect();
        setSelectionBox({
          x: Math.min(start.px, event.clientX) - rect.left,
          y: Math.min(start.py, event.clientY) - rect.top,
          w: Math.abs(dx),
          h: Math.abs(dy),
        });
      }
    } else setTransform((t) => ({ ...t, x: start.ox + dx, y: start.oy + dy }));
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragStart.current || dragStart.current.pointerId !== event.pointerId)
      return;
    const start = dragStart.current;
    const moved = dragStart.current?.moved ?? false;
    dragStart.current = null;
    setInteracting(false);
    setSelectionBox(null);
    if (moved && start.box) {
      const rect = event.currentTarget.getBoundingClientRect();
      const ids = boxSelectPlanetNodes(
        graph.nodes.filter(isVisible),
        layout.positions,
        transform,
        { x: start.px - rect.left, y: start.py - rect.top },
        { x: event.clientX - rect.left, y: event.clientY - rect.top },
        semanticBand,
      );
      onSelectMany(
        ids.filter((id) => id !== graph.rootId),
        start.additive,
      );
    } else if (!moved && event.button === 0 && start.box) {
      const picked = pickAt(event.clientX, event.clientY);
      onSelect(picked?.id ?? null, picked ? event.shiftKey : false);
      setHoveredId(picked?.id ?? null);
    }
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const cancelDrag = () => {
    const pointerId = dragStart.current?.pointerId;
    dragStart.current = null;
    setInteracting(false);
    setSelectionBox(null);
    if (
      pointerId !== undefined &&
      canvasRef.current?.hasPointerCapture(pointerId)
    )
      canvasRef.current.releasePointerCapture(pointerId);
  };

  const onDoubleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (isSceneOverlay(event.target)) return;
    const picked = pickAt(event.clientX, event.clientY);
    if (picked) handleOpen(picked.id);
  };

  // Derived visibility + highlight sets.
  const selectedId =
    [...selectedIds].filter((id) => graph.byId.has(id)).at(-1) ?? null;
  const activeId =
    hoveredId && graph.byId.has(hoveredId) ? hoveredId : selectedId;
  const related = useMemo(() => {
    if (!activeId) return null;
    const set = new Set<string>([activeId]);
    for (const neighbor of adjacency.get(activeId) ?? []) set.add(neighbor);
    for (const cluster of stationClusters)
      if (cluster.memberIds.includes(activeId)) {
        for (const memberId of cluster.memberIds) set.add(memberId);
      }
    return set;
  }, [activeId, adjacency, stationClusters]);

  const isVisible = (node: KnowledgeNode): boolean => {
    if (!asteroidsVisible && node.fileType === "other") return false;
    if (visibleIds && !visibleIds.has(node.id)) return false;
    if (projectionIds && !projectionIds.has(node.id)) return false;
    return true;
  };

  const breadcrumb = useMemo(
    () => (focusId ? ancestorPath(graph, focusId) : []),
    [graph, focusId],
  );

  const labels = useMemo(() => {
    const candidates: PlanetLabelCandidate[] = [];
    for (const node of sceneNodes) {
      const position = layout.positions.get(node.id);
      if (
        !position ||
        (!asteroidsVisible && node.fileType === "other") ||
        (visibleIds && !visibleIds.has(node.id)) ||
        (projectionIds && !projectionIds.has(node.id))
      )
        continue;
      const hovered = hoveredId === node.id;
      const anchor = node.id === (focusId ?? graph.rootId);
      const selected = selectedIds.has(node.id);
      if (
        !hovered &&
        !selected &&
        node.type !== "directory" &&
        (semanticBand !== "near" || node.fileType === "other")
      )
        continue;
      candidates.push({
        id: node.id,
        name: node.name,
        position: {
          ...position,
          size:
            planetVisualDiameter(node, position.size, transform.k) /
            transform.k,
        },
        priority: hovered
          ? 5
          : anchor
            ? 4
            : selected
              ? 3
              : node.type === "directory"
                ? 2
                : 0,
      });
    }
    for (const hub of layout.contextHubs?.values() ?? []) {
      candidates.push({
        id: `hub:${hub.id}`,
        name: hub.name,
        position: hub,
        priority: 2,
      });
    }
    return layoutPlanetLabels(candidates, transform, canvas.w, canvas.h);
  }, [
    sceneNodes,
    layout,
    asteroidsVisible,
    visibleIds,
    projectionIds,
    hoveredId,
    focusId,
    graph.rootId,
    selectedIds,
    semanticBand,
    transform,
    canvas.w,
    canvas.h,
  ]);

  const viewport = {
    x: (0 - transform.x) / transform.k,
    y: (0 - transform.y) / transform.k,
    w: canvas.w / transform.k,
    h: canvas.h / transform.k,
  };

  const jump = useCallback(
    (worldX: number, worldY: number) => {
      setTransform((t) => ({
        ...t,
        x: canvas.w / 2 - worldX * t.k,
        y: canvas.h / 2 - worldY * t.k,
      }));
    },
    [canvas, setTransform],
  );

  return (
    <section
      className="planet-view planet-neutral"
      data-animation-state={
        motion.enabled ? (motion.running ? "running" : "paused") : "off"
      }
    >
      <div className="planet-view-header">
        <span>PLANET VIEW</span>
        <button
          aria-label="Focus canvas"
          aria-pressed={canvasFocus}
          onClick={onToggleCanvasFocus}
          title="Toggle side panels and minimize chat for selection space"
        >
          {canvasFocus ? "Exit focus" : "Focus canvas"}
        </button>
        {breadcrumb.length > 0 ? (
          <span className="pv-crumbs">
            {breadcrumb.map((id, index) => {
              const node = graph.byId.get(id);
              return (
                <span key={id}>
                  {index > 0 ? <span className="pv-sep">▸</span> : null}
                  <button className="pv-crumb" onClick={() => onFocus(id)}>
                    {node?.name ?? id}
                  </button>
                </span>
              );
            })}
          </span>
        ) : (
          <span className="planet-view-hint">
            Drag to {panMode ? "pan" : "select"} · Shift adds · Space + drag
            pans
          </span>
        )}
        <button
          type="button"
          aria-pressed={panMode}
          onClick={() => setPanMode(!panMode)}
        >
          {panMode ? "Pan mode" : "Select mode"}
        </button>
        <span className="pv-count">
          {selectedIds.size} SELECTED · {graph.nodes.length} NODES
        </span>
      </div>

      <div
        className={`planet-canvas pv-canvas${hoveredId ? " has-pick" : ""}`}
        ref={canvasRef}
        tabIndex={0}
        aria-label="Planet View selection canvas"
        style={{
          touchAction: "none",
          cursor: panMode || spacePanning ? "grab" : "crosshair",
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape" && !isSceneOverlay(event.target)) {
            cancelDrag();
          }
        }}
        onPointerCancel={cancelDrag}
        onLostPointerCapture={cancelDrag}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={() => {
          if (!dragStart.current) setHoveredId(null);
        }}
        onDoubleClick={onDoubleClick}
      >
        <PlanetUsageBadge
          onOpenSettings={onOpenSettings}
          agentId={chatProps.controller.agent?.id}
          activeProvider={chatProps.controller.effectiveSettings?.providerId}
        />
        <svg
          className={`pedges semantic-${semanticBand}${stationMatchIds.size ? " has-station-matches" : ""}`}
          width={canvas.w}
          height={canvas.h}
          opacity={
            0.5 + 0.25 * Math.min(1, Math.max(0, (transform.k - 0.55) / 1.45))
          }
          viewBox={`${viewport.x} ${viewport.y} ${Math.max(viewport.w, 1)} ${Math.max(viewport.h, 1)}`}
          aria-hidden="true"
        >
          <g className="planet-orbits">
            {layout.orbits?.map((orbit) => {
              const parent = graph.byId.get(orbit.parentId);
              if (
                !parent ||
                !isVisible(parent) ||
                !orbitInPlanetViewport(orbit, transform, canvas.w, canvas.h)
              )
                return null;
              return (
                <circle
                  key={`${orbit.parentId}:${orbit.radius}`}
                  className={`planet-orbit${orbit.parentId === (focusId ?? graph.rootId) ? " planet-orbit-anchor" : ""}`}
                  cx={orbit.x}
                  cy={orbit.y}
                  r={orbit.radius}
                />
              );
            })}
          </g>
          {stationClusters.flatMap((cluster) => {
            const hub = layout.contextHubs?.get(cluster.id);
            if (!hub) return [];
            return cluster.memberIds.map((memberId) => {
              const member = layout.positions.get(memberId);
              const node = graph.byId.get(memberId);
              if (
                !member ||
                !node ||
                !isVisible(node) ||
                !edgeInPlanetViewport(
                  hub,
                  member,
                  transform,
                  canvas.w,
                  canvas.h,
                )
              )
                return null;
              return (
                <line
                  key={`${cluster.id}->${memberId}`}
                  className="pedge pedge-station-member"
                  x1={hub.x}
                  y1={hub.y}
                  x2={member.x}
                  y2={member.y}
                />
              );
            });
          })}
          {graph.edges.map((edge) => {
            // Structure mode shows its hierarchy; Context Sorting shows
            // only semantic links between direct Station matches.
            if (graph.projection === "station" && edge.kind !== "secondary")
              return null;
            const a = layout.positions.get(edge.source);
            const b = layout.positions.get(edge.target);
            if (!a || !b) return null;
            if (!edgeInPlanetViewport(a, b, transform, canvas.w, canvas.h))
              return null;
            const sNode = graph.byId.get(edge.source);
            const tNode = graph.byId.get(edge.target);
            if (!sNode || !tNode) return null;
            if (
              graph.projection !== "station" &&
              (edge.source === graph.rootId ||
                edge.target === graph.rootId ||
                sNode.type !== "directory" ||
                tNode.type !== "file")
            )
              return null;
            if (!isVisible(sNode) || !isVisible(tNode)) return null;
            const dim =
              related &&
              !(related.has(edge.source) && related.has(edge.target));
            const cls = [
              "pedge",
              edge.kind === "secondary"
                ? "pedge-sec"
                : tNode.type === "file"
                  ? "pedge-file"
                  : "pedge-dir",
              tNode.fileType === "other" ? "pedge-asteroid" : "",
              dim ? "dim" : "",
            ]
              .filter(Boolean)
              .join(" ");
            return (
              <line
                key={`${edge.source}->${edge.target}`}
                className={cls}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
              />
            );
          })}
        </svg>
        <div
          className={`pworld semantic-${semanticBand}`}
          data-rendered-nodes={sceneNodes.length}
          data-total-nodes={graph.nodes.length}
          style={{
            transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.k})`,
          }}
        >
          {sceneNodes.map((node) => {
            const pos = layout.positions.get(node.id);
            if (!pos) return null;
            if (!isVisible(node)) return null;
            const counts = childCounts.get(node.id) ?? { files: 0, dirs: 0 };
            const dimmed = related ? !related.has(node.id) : false;
            const emphasized = related
              ? related.has(node.id) && node.id !== activeId
              : false;
            return (
              <PlanetNode
                anchor={node.id === (focusId ?? graph.rootId)}
                key={node.id}
                node={node}
                layout={pos}
                zoom={transform.k}
                opacity={planetSizeOpacity(
                  pos.size,
                  opacityRange.minimum,
                  opacityRange.maximum,
                )}
                selected={selectedIds.has(node.id)}
                hovered={hoveredId === node.id}
                dimmed={dimmed}
                emphasized={emphasized}
                stationMatch={stationMatchIds.has(node.id)}
                activeContext={activeContextIds.has(node.id)}
                structural={Boolean(
                  projectionIds && !stationMatchIds.has(node.id),
                )}
                semanticBand={semanticBand}
                childFiles={counts.files}
                childDirs={counts.dirs}
                onHover={setHoveredId}
                onSelect={onSelect}
                onOpen={handleOpen}
              />
            );
          })}

          {[...(layout.contextHubs?.values() ?? [])].map((hub) => (
            <div
              key={hub.id}
              className="pcontext-hub"
              style={{ left: hub.x, top: hub.y }}
            >
              <span className="pcontext-hub-orb" />
            </div>
          ))}
        </div>

        <div
          className="planet-labels"
          aria-hidden="true"
          style={{ fontSize: planetLabelFontSize(transform.k) }}
        >
          {labels.map((label) => (
            <span
              key={label.id}
              className={`planet-screen-label${label.id === (focusId ?? graph.rootId) || label.id === hoveredId || selectedIds.has(label.id) ? " is-active" : ""}${related && graph.byId.has(label.id) && !related.has(label.id) ? " is-dim" : ""}`}
              style={{
                left: label.x,
                top: label.y,
                width: label.width,
                height: label.height,
              }}
            >
              {label.name}
            </span>
          ))}
        </div>

        {selectionBox ? (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              pointerEvents: "none",
              zIndex: 5,
              left: selectionBox.x,
              top: selectionBox.y,
              width: selectionBox.w,
              height: selectionBox.h,
              border: "1px solid #b4d8bb",
              background: "rgba(140, 190, 150, 0.18)",
            }}
          />
        ) : null}
        {chatDetached ? (
          <button className="agent-reopen" onClick={chatProps.onPopOutWindow}>
            Show chat window
          </button>
        ) : (
          <ChatPanel
            variant="floating"
            {...chatProps}
            minimizeForCanvas={canvasFocus}
          />
        )}
        <div className="planet-tools">
          <PlanetMinimap
            graph={graph}
            layout={baseLayout}
            viewport={viewport}
            focusId={focusId}
            asteroidsVisible={asteroidsVisible}
            onJump={jump}
          />

          <PlanetControls
            onZoomIn={() => zoomBy(1.01)}
            onZoomOut={() => zoomBy(1 / 1.01)}
            zoomPercent={Math.round(transform.k * 100)}
            onFocus={() => selectedId && focusOnNode(selectedId)}
            onReset={resetView}
            asteroidsVisible={asteroidsVisible}
            animationEnabled={motion.enabled}
            animationRunning={motion.running}
            onToggleAnimation={motion.toggle}
            onToggleAsteroids={() => {
              if (
                asteroidsVisible &&
                selectedId &&
                graph.byId.get(selectedId)?.fileType === "other"
              )
                onSelect(null);
              setAsteroidsVisible((visible) => !visible);
            }}
          />
        </div>
      </div>
    </section>
  );
}
