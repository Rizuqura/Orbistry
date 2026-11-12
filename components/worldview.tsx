"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type MouseEvent as ReactMouseEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import {
  DEFAULT_CAMERA,
  MAX_ZOOM,
  MIN_ZOOM,
  panCamera,
  zoomCameraAt,
  screenToWorld,
  type Point,
  type Viewport,
  type WorldCamera,
} from "../features/worldview/coordinates";
import { drawWorldGrid } from "../features/worldview/grid";
import { ChipDialog } from "../features/worldview/chip-dialog";
import { createChipImageCache } from "../features/worldview/chip-images";
import { AssignFilesDialog } from "../features/worldview/assign-files-dialog";
import { FileInspector } from "../features/worldview/file-inspector";
import { layoutFileBuildings } from "../features/worldview/buildings";
import type { BuildingTarget } from "../features/worldview/building-renderer";
import { useConfirmation } from "../features/dialogs/use-confirmation";
import {
  findAvailableChipPosition,
  type ChipDraft,
  type WorldViewChip,
} from "../features/worldview/chips";
import {
  addSessionChip,
  getSessionChips,
  getServerChips,
  moveSessionChip,
  removeSessionChip,
  updateSessionChip,
  subscribeChips,
  getWorldViewPersistence,
  getServerPersistence,
  loadWorldViewSession,
  retryWorldViewWrites,
} from "../features/worldview/chip-session";
import {
  draggedChipPosition,
  drawWorldChips,
  hitTestWorld,
} from "../features/worldview/chip-renderer";

type CameraControls = {
  zoom: (factor: number) => void;
  reset: () => void;
  create: (draft: ChipDraft) => void;
  select: (id: string) => void;
  nudge: (id: string, key: string) => void;
  remove: (id: string) => void;
  update: (id: string, draft: ChipDraft) => void;
  inspect: (id: string, sourceId: string | null) => void;
};
type Drag = { pointerId: number; start: Point; camera: WorldCamera } & (
  | { kind: "camera" }
  | {
      kind: "chip";
      chip: WorldViewChip;
      offset: Point;
      preview: Point;
      moved: boolean;
    }
);
const CHIP_KEY_DELTAS: Readonly<Record<string, Point>> = {
  ArrowLeft: { x: -1, y: 1 },
  ArrowRight: { x: 1, y: -1 },
  ArrowUp: { x: -1, y: -1 },
  ArrowDown: { x: 1, y: 1 },
};

type HoverInfo = Readonly<{
  x: number;
  y: number;
  filename: string;
  detail: string;
}>;

/** Renders saved entity/source metadata and a shared isometric camera; never requests source contents. */
export function WorldView({
  vaultPath,
}: Readonly<{ vaultPath: string | null }>) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const controlsRef = useRef<CameraControls | null>(null);
  const [zoom, setZoom] = useState(1);
  const [canvasError, setCanvasError] = useState(false);
  const [addingChip, setAddingChip] = useState(false);
  const [editingChip, setEditingChip] = useState<WorldViewChip | null>(null);
  const [iconError, setIconError] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [assigningChip, setAssigningChip] = useState<WorldViewChip | null>(
    null,
  );
  const [inspectorOpen, setInspectorOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<BuildingTarget | null>(null);
  const [hoverInfo, setHoverInfo] = useState<HoverInfo | null>(null);
  const [operationError, setOperationError] = useState("");
  const deletionPending = useRef(false);
  const { confirm, confirmation } = useConfirmation();
  const chips = useSyncExternalStore(
    subscribeChips,
    getSessionChips,
    getServerChips,
  );
  const persistence = useSyncExternalStore(
    subscribeChips,
    getWorldViewPersistence,
    getServerPersistence,
  );
  const controlsDisabled =
    canvasError || !vaultPath || !persistence.ready || persistence.loading;

  /** Loads/restores this existing Universe's indexes whenever WorldView is opened. */
  useEffect(
    function restoreWorldView() {
      if (vaultPath) void loadWorldViewSession(vaultPath);
    },
    [vaultPath],
  );
  const selectedChip = chips.find(
    /** Resolves the selected stable ID for the delete action and confirmation message. */
    function matchesSelection(chip) {
      return chip.id === selectedId;
    },
  );

  /** Owns painting and chip/camera controls; cleanup releases observers, capture, and animation work. */
  useEffect(function connectWorldCanvas() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) {
      setCanvasError(true);
      return;
    }
    let camera = DEFAULT_CAMERA;
    let viewport: Viewport = { width: 0, height: 0 };
    let drag: Drag | null = null;
    let selectedChipId: string | null = null;
    let selectedBuilding: BuildingTarget | null = null;
    let hoveredBuilding: BuildingTarget | null = null;
    let frame = 0;
    const stroke = getComputedStyle(canvas)
      .getPropertyValue("--worldview-grid")
      .trim();
    const iconCache = createChipImageCache(schedulePaint, reportIconError);

    /** Reports an actual icon decode failure without hiding it behind a silent text fallback. */
    function reportIconError(): void {
      setIconError(
        "A custom icon could not be displayed. Edit the chip to choose another icon.",
      );
    }

    /** Paints once per requested frame using the latest camera and display resolution. */
    function paint(): void {
      frame = 0;
      if (viewport.width <= 0 || viewport.height <= 0) return;
      drawWorldGrid(
        canvas!,
        context!,
        camera,
        viewport,
        window.devicePixelRatio || 1,
        stroke,
      );
      drawWorldChips(
        context!,
        getSessionChips(),
        camera,
        viewport,
        selectedChipId,
        drag?.kind === "chip"
          ? { id: drag.chip.id, position: drag.preview }
          : null,
        iconCache.images,
        selectedBuilding,
        hoveredBuilding,
      );
    }

    /** Coalesces fast input events into one paint per display frame. */
    function schedulePaint(): void {
      if (!frame) frame = requestAnimationFrame(paint);
    }

    /** Resizes around the same world center; cancels any drag to avoid a stale anchor. */
    function resize(): void {
      stopDrag();
      const bounds = canvas!.getBoundingClientRect();
      viewport = { width: bounds.width, height: bounds.height };
      schedulePaint();
    }

    /** Applies camera state immediately; React updates only the zoom readout and button limits. */
    function updateCamera(next: WorldCamera): void {
      camera = next;
      setZoom(next.zoom);
      schedulePaint();
    }

    /** Returns canvas-local CSS pixels, independent of display scaling. */
    function localPoint(event: MouseEvent): Point {
      const bounds = canvas!.getBoundingClientRect();
      return { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
    }

    /** Selects a chip for both canvas styling and its accessible button; null clears selection. */
    function selectChip(id: string | null): void {
      selectedChipId = id;
      setSelectedId(id);
      selectedBuilding = null;
      setSelectedFile(null);
      setInspectorOpen(false);
      schedulePaint();
    }

    /** Opens full source metadata for a clicked prism or overflow marker without starting a drag. */
    function inspectBuilding(id: string, sourceId: string | null): void {
      stopDrag();
      selectChip(id);
      selectedBuilding = { chipId: id, sourceId };
      setSelectedFile(selectedBuilding);
      setInspectorOpen(true);
      schedulePaint();
    }

    /** Captures the primary pointer for either chip movement or empty-ground camera panning. */
    function startDrag(event: PointerEvent): void {
      if (event.button !== 0 || !event.isPrimary || drag) return;
      const status = getWorldViewPersistence();
      if (!status.ready || status.loading) return;
      event.preventDefault();
      canvas!.focus({ preventScroll: true });
      const start = localPoint(event);
      const hit = hitTestWorld(start, getSessionChips(), camera, viewport);
      const chip = hit?.chip;
      if (hit?.building) {
        inspectBuilding(
          chip!.id,
          hit.building.kind === "file" ? hit.building.source.sourceId : null,
        );
        return;
      }
      selectChip(chip?.id ?? null);
      if (chip) {
        const world = screenToWorld(start, camera, viewport);
        drag = {
          kind: "chip",
          pointerId: event.pointerId,
          start,
          camera,
          chip,
          offset: {
            x: world.x - chip.position.x,
            y: world.y - chip.position.y,
          },
          preview: chip.position,
          moved: false,
        };
      } else
        drag = { kind: "camera", pointerId: event.pointerId, start, camera };
      canvas!.setPointerCapture(event.pointerId);
      canvas!.classList.add("is-panning");
    }

    /** Updates source hover, previews chip movement, or pans the camera using the same world projection. */
    function moveDrag(event: PointerEvent): void {
      const point = localPoint(event);
      if (!drag) {
        const hit = hitTestWorld(point, getSessionChips(), camera, viewport);
        const building = hit?.building;
        const target =
          hit && building
            ? {
                chipId: hit.chip.id,
                sourceId:
                  building.kind === "file" ? building.source.sourceId : null,
              }
            : null;
        if (
          target?.chipId !== hoveredBuilding?.chipId ||
          target?.sourceId !== hoveredBuilding?.sourceId
        )
          schedulePaint();
        hoveredBuilding = target;
        if (building?.kind === "file")
          setHoverInfo({
            ...point,
            filename: building.source.filename,
            detail: `${building.source.extension || "No extension"} · ${building.source.sizeBytes === null ? "Byte metadata unavailable" : `${building.source.sizeBytes.toLocaleString()} bytes`} · ${building.source.status}`,
          });
        else if (building?.kind === "overflow")
          setHoverInfo({
            ...point,
            filename: `${building.count} more files`,
            detail: "Click to inspect the complete assigned file list.",
          });
        else setHoverInfo(null);
        return;
      }
      if (drag.pointerId !== event.pointerId) return;
      if (drag.kind === "chip") {
        if (
          !drag.moved &&
          Math.hypot(point.x - drag.start.x, point.y - drag.start.y) < 3
        )
          return;
        drag.moved = true;
        drag.preview = draggedChipPosition(
          point,
          drag.offset,
          drag.camera,
          viewport,
        );
        schedulePaint();
        return;
      }
      updateCamera(
        panCamera(drag.camera, {
          x: point.x - drag.start.x,
          y: point.y - drag.start.y,
        }),
      );
    }

    /** Commits a snapped non-overlapping chip position only on release; cancellation discards its preview. */
    function stopDrag(event?: PointerEvent): void {
      if (!drag || (event && event.pointerId !== drag.pointerId)) return;
      if (event?.type === "pointerup") moveDrag(event);
      const finished = drag;
      const pointerId = drag.pointerId;
      drag = null;
      if (
        finished.kind === "chip" &&
        finished.moved &&
        event?.type === "pointerup"
      ) {
        const position = findAvailableChipPosition(
          finished.preview,
          getSessionChips(),
          finished.chip.id,
        );
        moveSessionChip(finished.chip.id, position);
      }
      schedulePaint();
      canvas!.classList.remove("is-panning");
      if (canvas!.hasPointerCapture(pointerId))
        canvas!.releasePointerCapture(pointerId);
    }

    /** Cancels capture when the application loses focus, regardless of event type. */
    function blurCanvas(): void {
      stopDrag();
      clearHover();
    }

    /** Clears stale building hover styling and tooltips when leaving or moving the camera. */
    function clearHover(): void {
      hoveredBuilding = null;
      setHoverInfo(null);
      schedulePaint();
    }

    /** Normalizes wheel units and preserves the world point beneath the cursor. */
    function wheelZoom(event: WheelEvent): void {
      event.preventDefault();
      stopDrag();
      clearHover();
      const unit =
        event.deltaMode === 1
          ? 16
          : event.deltaMode === 2
            ? viewport.height
            : 1;
      const delta = Math.max(-1000, Math.min(1000, event.deltaY * unit));
      updateCamera(
        zoomCameraAt(
          camera,
          camera.zoom * Math.exp(-delta * 0.0015),
          localPoint(event),
          viewport,
        ),
      );
    }

    /** Zooms around the viewport center for keyboard-accessible buttons. */
    function zoomBy(factor: number): void {
      stopDrag();
      updateCamera(
        zoomCameraAt(
          camera,
          camera.zoom * factor,
          { x: viewport.width / 2, y: viewport.height / 2 },
          viewport,
        ),
      );
    }

    /** Restores the world origin and 100% zoom without changing application state. */
    function resetCamera(): void {
      stopDrag();
      updateCamera(DEFAULT_CAMERA);
    }

    /** Adds one confirmed chip near the current viewport center, snapped around occupied cells. */
    function createChip(draft: ChipDraft): void {
      stopDrag();
      const target = screenToWorld(
        { x: viewport.width / 2, y: viewport.height / 2 },
        camera,
        viewport,
      );
      const chip: WorldViewChip = {
        ...draft,
        id: crypto.randomUUID(),
        position: findAvailableChipPosition(target, getSessionChips()),
      };
      addSessionChip(chip);
      selectChip(chip.id);
    }

    /** Moves an accessible selected chip by an arrow-key world step and resolves occupied destinations. */
    function nudgeChip(id: string, key: string): void {
      if (getWorldViewPersistence().loading || !getWorldViewPersistence().ready)
        return;
      const delta = CHIP_KEY_DELTAS[key];
      if (!delta) return;
      for (const chip of getSessionChips()) {
        if (chip.id !== id) continue;
        stopDrag();
        const target = {
          x: chip.position.x + delta.x,
          y: chip.position.y + delta.y,
        };
        moveSessionChip(
          id,
          findAvailableChipPosition(target, getSessionChips(), id),
        );
        selectChip(id);
        return;
      }
    }

    /** Removes a confirmed chip, cancels any active preview, and clears its selection in both renderers. */
    function removeChip(id: string): void {
      stopDrag();
      removeSessionChip(id);
      if (selectedChipId === id) selectChip(null);
      schedulePaint();
    }

    /** Applies confirmed metadata/appearance without changing the chip's world anchor or camera. */
    function updateChip(id: string, draft: ChipDraft): void {
      stopDrag();
      updateSessionChip(id, draft);
      selectChip(id);
    }

    /** Synchronizes decoded icons after a session change and schedules the latest scene. */
    function refreshScene(): void {
      setIconError("");
      iconCache.sync(getSessionChips());
      schedulePaint();
    }

    /** Supports selected-chip movement, deselection, and camera controls from the focused canvas. */
    function keyControl(event: KeyboardEvent): void {
      if (event.key === "Escape") {
        stopDrag();
        selectChip(null);
        return;
      }
      if (selectedChipId && CHIP_KEY_DELTAS[event.key]) {
        event.preventDefault();
        nudgeChip(selectedChipId, event.key);
        return;
      }
      const deltas: Record<string, Point> = {
        ArrowLeft: { x: 48, y: 0 },
        ArrowRight: { x: -48, y: 0 },
        ArrowUp: { x: 0, y: 48 },
        ArrowDown: { x: 0, y: -48 },
      };
      if (deltas[event.key]) {
        event.preventDefault();
        stopDrag();
        updateCamera(panCamera(camera, deltas[event.key]));
      } else if (["+", "=", "-", "0"].includes(event.key)) {
        event.preventDefault();
        if (event.key === "0") resetCamera();
        else zoomBy(event.key === "-" ? 1 / 1.2 : 1.2);
      }
    }

    controlsRef.current = {
      zoom: zoomBy,
      reset: resetCamera,
      create: createChip,
      select: selectChip,
      nudge: nudgeChip,
      remove: removeChip,
      update: updateChip,
      inspect: inspectBuilding,
    };
    const unsubscribe = subscribeChips(refreshScene);
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    canvas.addEventListener("pointerdown", startDrag);
    canvas.addEventListener("pointermove", moveDrag);
    canvas.addEventListener("pointerleave", clearHover);
    canvas.addEventListener("pointerup", stopDrag);
    canvas.addEventListener("pointercancel", stopDrag);
    canvas.addEventListener("lostpointercapture", stopDrag);
    canvas.addEventListener("wheel", wheelZoom, { passive: false });
    canvas.addEventListener("keydown", keyControl);
    window.addEventListener("blur", blurCanvas);
    window.addEventListener("resize", resize);
    resize();
    refreshScene();

    /** Releases canvas-owned resources when navigation unmounts WorldView. */
    return function disconnectWorldCanvas() {
      stopDrag();
      cancelAnimationFrame(frame);
      observer.disconnect();
      unsubscribe();
      iconCache.dispose();
      controlsRef.current = null;
      canvas.removeEventListener("pointerdown", startDrag);
      canvas.removeEventListener("pointermove", moveDrag);
      canvas.removeEventListener("pointerleave", clearHover);
      canvas.removeEventListener("pointerup", stopDrag);
      canvas.removeEventListener("pointercancel", stopDrag);
      canvas.removeEventListener("lostpointercapture", stopDrag);
      canvas.removeEventListener("wheel", wheelZoom);
      canvas.removeEventListener("keydown", keyControl);
      window.removeEventListener("blur", blurCanvas);
      window.removeEventListener("resize", resize);
    };
  }, []);

  /** Increases zoom around the viewport center. */
  function zoomIn(): void {
    controlsRef.current?.zoom(1.2);
  }
  /** Decreases zoom around the viewport center. */
  function zoomOut(): void {
    controlsRef.current?.zoom(1 / 1.2);
  }
  /** Returns the camera to its initial pose. */
  function resetView(): void {
    controlsRef.current?.reset();
  }

  /** Opens metadata collection without creating or mutating any chip. */
  function openChipDialog(): void {
    setEditingChip(null);
    setAddingChip(true);
  }
  /** Dismisses the dialog without adding another chip. */
  function closeChipDialog(): void {
    setAddingChip(false);
    setEditingChip(null);
  }
  /** Opens a staged editor for the selected stable-ID chip; no session data changes yet. */
  function editSelectedChip(): void {
    if (!selectedChip) return;
    setEditingChip(selectedChip);
    setAddingChip(true);
  }

  /** Opens Universe file selection for the current entity without changing its memberships. */
  function assignFiles(): void {
    if (selectedChip) setAssigningChip(selectedChip);
  }
  /** Closes staged file selection; confirmed mutations are handled inside the picker. */
  function closeAssignment(): void {
    setAssigningChip(null);
  }
  /** Opens the full list, including sources represented by an overflow marker. */
  function inspectFiles(): void {
    if (selectedChip) controlsRef.current?.inspect(selectedChip.id, null);
  }
  /** Selects a source from the inspector while preserving the active entity. */
  function inspectSource(id: string): void {
    if (selectedChip) controlsRef.current?.inspect(selectedChip.id, id);
  }
  /** Hides source details without affecting assignments or the camera. */
  function closeInspector(): void {
    setInspectorOpen(false);
  }
  /** Retries failed disk writes or a failed initial load with visible errors on failure. */
  async function retryPersistence(): Promise<void> {
    setOperationError("");
    try {
      await retryWorldViewWrites();
    } catch (error) {
      setOperationError(
        error instanceof Error
          ? error.message
          : "WorldView could not be saved.",
      );
    }
  }
  /** Exposes rendered building selection to keyboard and screen-reader users. */
  function selectAccessibleBuilding(
    event: ReactMouseEvent<HTMLButtonElement>,
  ): void {
    const id = event.currentTarget.dataset.chipId;
    if (id)
      controlsRef.current?.inspect(
        id,
        event.currentTarget.dataset.sourceId || null,
      );
  }
  /** Applies a confirmed create/edit draft; reports unavailable rendering explicitly. */
  function saveChip(draft: ChipDraft): void {
    if (!controlsRef.current)
      throw new Error("WorldView is not ready to create a chip.");
    if (editingChip) controlsRef.current.update(editingChip.id, draft);
    else controlsRef.current.create(draft);
  }

  /** Confirms the named stable-ID target before deletion; Cancel/Escape and unmount leave chips intact. */
  async function deleteSelectedChip(): Promise<void> {
    if (!selectedChip || deletionPending.current) return;
    const target = selectedChip;
    deletionPending.current = true;
    try {
      const accepted = await confirm(
        `Delete “${target.name}”? This removes the chip and its associations from WorldView and cannot be undone. Original Universe files stay untouched.`,
        "Delete Chip",
      );
      if (accepted && controlsRef.current) {
        controlsRef.current.remove(target.id);
        canvasRef.current?.focus({ preventScroll: true });
      }
    } finally {
      deletionPending.current = false;
    }
  }
  /** Selects a chip from its keyboard/screen-reader button using its stable ID. */
  function selectAccessibleChip(
    event: ReactMouseEvent<HTMLButtonElement>,
  ): void {
    const id = event.currentTarget.dataset.chipId;
    if (id) controlsRef.current?.select(id);
  }
  /** Gives accessible chip buttons the same snapped arrow-key movement as canvas selection. */
  function moveAccessibleChip(
    event: ReactKeyboardEvent<HTMLButtonElement>,
  ): void {
    const id = event.currentTarget.dataset.chipId;
    if (id && CHIP_KEY_DELTAS[event.key]) {
      event.preventDefault();
      controlsRef.current?.nudge(id, event.key);
    }
  }

  return (
    <section className="worldview" aria-labelledby="worldview-title">
      <canvas
        ref={canvasRef}
        className="worldview-canvas"
        tabIndex={0}
        aria-label="Isometric world grid. Click a chip to select; drag it to move. Drag empty ground to pan; scroll to zoom. Arrow keys move the selected chip or pan; plus and minus zoom; zero resets; Escape deselects."
      />
      <h1 id="worldview-title" className="worldview-label">
        WorldView
      </h1>
      <div
        className="worldview-chip-actions"
        role="group"
        aria-label="Chip actions"
      >
        {selectedChip && (
          <>
            <button
              type="button"
              className="worldview-edit-chip"
              onClick={assignFiles}
              disabled={controlsDisabled}
              aria-haspopup="dialog"
            >
              Assign Files
            </button>
            <button
              type="button"
              className="worldview-edit-chip"
              onClick={inspectFiles}
              disabled={controlsDisabled}
            >
              Files ({selectedChip.sources?.length ?? 0})
            </button>
          </>
        )}
        {selectedChip && (
          <button
            type="button"
            className="worldview-edit-chip"
            onClick={editSelectedChip}
            disabled={controlsDisabled}
            aria-haspopup="dialog"
          >
            Edit Chip
          </button>
        )}
        {selectedChip && (
          <button
            type="button"
            className="worldview-delete-chip"
            onClick={deleteSelectedChip}
            disabled={controlsDisabled}
            aria-haspopup="dialog"
            title={`Delete ${selectedChip.name}`}
          >
            Delete Chip
          </button>
        )}
        <button
          type="button"
          className="worldview-add-chip"
          onClick={openChipDialog}
          disabled={controlsDisabled}
          aria-haspopup="dialog"
        >
          + Add Chip
        </button>
      </div>
      <ul className="worldview-sr-only" aria-label="WorldView chips">
        {chips.map(
          /** Mirrors canvas entities for keyboard access and full metadata without visual panels. */ function renderChipAccess(
            chip,
          ) {
            return (
              <li key={chip.id}>
                <button
                  type="button"
                  data-chip-id={chip.id}
                  data-world-x={chip.position.x}
                  data-world-y={chip.position.y}
                  data-icon={chip.icon}
                  data-icon-image={chip.iconImage ? "true" : "false"}
                  data-color={chip.color}
                  data-category={chip.category}
                  data-tags={JSON.stringify(chip.tags)}
                  aria-pressed={selectedId === chip.id}
                  onClick={selectAccessibleChip}
                  onKeyDown={moveAccessibleChip}
                >
                  {chip.name}
                  {chip.category ? `, ${chip.category}` : ""}
                  {chip.tags.length ? `, tags: ${chip.tags.join(", ")}` : ""}
                </button>
              </li>
            );
          },
        )}
      </ul>
      <ul className="worldview-sr-only" aria-label="File buildings">
        {chips.flatMap(
          /** Mirrors visible buildings and overflow markers for inspectable geometry and keyboard selection. */ function accessibleBuildings(
            chip,
          ) {
            return layoutFileBuildings(chip.sources ?? []).map(
              /** Renders the exact same source/height/layout used by Canvas. */ function buildingButton(
                building,
              ) {
                return (
                  <li
                    key={`${chip.id}:${building.kind === "file" ? building.source.sourceId : "overflow"}`}
                  >
                    <button
                      type="button"
                      data-chip-id={chip.id}
                      data-source-id={
                        building.kind === "file" ? building.source.sourceId : ""
                      }
                      data-building-height={building.height ?? ""}
                      data-building-x={building.position.x}
                      data-building-y={building.position.y}
                      data-building-overflow={
                        building.kind === "overflow" ? building.count : ""
                      }
                      onClick={selectAccessibleBuilding}
                    >
                      {building.kind === "file"
                        ? `${building.source.filename}, ${building.source.sizeBytes === null ? "size unavailable" : `${building.source.sizeBytes} bytes`}`
                        : `${building.count} more files`}
                    </button>
                  </li>
                );
              },
            );
          },
        )}
      </ul>
      <div
        className="worldview-controls"
        role="group"
        aria-label="WorldView camera"
      >
        <button
          type="button"
          onClick={zoomOut}
          disabled={canvasError || zoom <= MIN_ZOOM}
          aria-label="Zoom out"
        >
          −
        </button>
        <output aria-label="Zoom percentage">{Math.round(zoom * 100)}%</output>
        <button
          type="button"
          onClick={zoomIn}
          disabled={canvasError || zoom >= MAX_ZOOM}
          aria-label="Zoom in"
        >
          +
        </button>
        <button
          type="button"
          onClick={resetView}
          disabled={canvasError}
          className="worldview-reset"
          title="Reset camera to origin at 100%"
        >
          Reset view
        </button>
      </div>
      {canvasError && (
        <p className="worldview-error" role="alert">
          WorldView requires Canvas 2D support. Restart the app to try again.
        </p>
      )}
      {addingChip && (
        <ChipDialog
          key={editingChip?.id ?? "new"}
          chip={editingChip ?? undefined}
          onSave={saveChip}
          onClose={closeChipDialog}
        />
      )}
      {assigningChip && vaultPath && (
        <AssignFilesDialog
          chip={assigningChip}
          vaultPath={vaultPath}
          onClose={closeAssignment}
        />
      )}
      {inspectorOpen && selectedChip && vaultPath && (
        <FileInspector
          key={selectedChip.id}
          chip={selectedChip}
          vaultPath={vaultPath}
          sourceId={selectedFile?.sourceId ?? null}
          onSelect={inspectSource}
          onClose={closeInspector}
        />
      )}
      {hoverInfo && (
        <div
          className="worldview-building-tooltip"
          role="tooltip"
          style={{
            left: Math.max(
              8,
              Math.min(
                hoverInfo.x + 14,
                (canvasRef.current?.clientWidth ?? 300) - 250,
              ),
            ),
            top: Math.max(
              8,
              Math.min(
                hoverInfo.y + 12,
                (canvasRef.current?.clientHeight ?? 200) - 80,
              ),
            ),
          }}
        >
          <strong>{hoverInfo.filename}</strong>
          <span>{hoverInfo.detail}</span>
        </div>
      )}
      <div className="worldview-save-status" aria-live="polite">
        {persistence.loading
          ? "Loading WorldView…"
          : persistence.pending
            ? "Saving WorldView…"
            : ""}
        {(persistence.error || operationError) && (
          <p role="alert">
            Changes not saved: {persistence.error || operationError}{" "}
            <button type="button" onClick={retryPersistence}>
              Retry
            </button>
          </p>
        )}
        {!!persistence.issues.length && (
          <details>
            <summary>
              {persistence.issues.length} entity index(es) need review
            </summary>
            {persistence.issues.map(
              /** Reports damaged indexes without discarding other entities or overwriting files. */ function renderIndexIssue(
                issue,
              ) {
                return (
                  <p key={issue.index}>
                    {issue.index}: {issue.message}
                  </p>
                );
              },
            )}
          </details>
        )}
      </div>
      {iconError && (
        <p className="worldview-icon-error" role="alert">
          {iconError}
        </p>
      )}
      {confirmation}
    </section>
  );
}
