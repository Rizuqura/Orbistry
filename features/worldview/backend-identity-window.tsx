"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type PointerEvent,
  type KeyboardEvent,
} from "react";
import type {
  BackendIdentityState,
  IdentityCapability,
  IdentityChunkPage,
} from "../../types/backend-identity";
import type { WorldViewChip } from "./chips";
import {
  clampGeometry,
  resizeGeometry,
  type PanelGeometry,
} from "../chat/panel-geometry";
import { flushWorldViewWrites, requireWorldViewBridge } from "./chip-session";

type Tab = "identity" | "knowledge" | "capabilities" | "log";
const tabs: readonly Tab[] = ["identity", "knowledge", "capabilities", "log"];

/** Highlights JSON as escaped React text. Large records have a bounded DOM preview; Copy retrieves the complete authorized page through the backend. */
function StructuredContent({ value }: Readonly<{ value: unknown }>) {
  const serialized = JSON.stringify(value, null, 2) ?? "null";
  const text = serialized.slice(0, 150000);
  const parts = text.split(
    /("(?:\\.|[^"\\])*"\s*:|"(?:\\.|[^"\\])*"|\b(?:true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,
  );
  return (
    <>
      <pre className="identity-json" tabIndex={0}>
        {parts.map((part, index) => (
          <span
            key={index}
            className={
              /^"/.test(part)
                ? /:\s*$/.test(part)
                  ? "identity-json-key"
                  : "identity-json-string"
                : /^(?:true|false|null|-?\d)/.test(part)
                  ? "identity-json-value"
                  : undefined
            }
          >
            {part}
          </span>
        ))}
      </pre>
      {serialized.length > text.length && (
        <p>
          Preview limited to 150,000 characters. Copy includes the complete
          authorized data.
        </p>
      )}
    </>
  );
}

/** Opens a separate read-only, draggable/resizable inspector over the existing WorldView. Compilation is manual; no execution controls or LLM connection are exposed. */
export function BackendIdentityWindow({
  chip,
  vaultPath,
  onClose,
}: Readonly<{ chip: WorldViewChip; vaultPath: string; onClose: () => void }>) {
  const panel = useRef<HTMLElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const [geometry, setGeometry] = useState<PanelGeometry>({
    x: 24,
    y: 24,
    width: 900,
    height: 600,
  });
  const drag = useRef<{
    pointerId: number;
    mode: "move" | "resize";
    x: number;
    y: number;
    geometry: PanelGeometry;
  } | null>(null);
  const [tab, setTab] = useState<Tab>("identity");
  const [state, setState] = useState<BackendIdentityState | null>(null);
  const [chunks, setChunks] = useState<IdentityChunkPage | null>(null);
  const [capabilities, setCapabilities] = useState<
    readonly IdentityCapability[]
  >([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const [loadingTab, setLoadingTab] = useState(false);
  const generation = useRef(0);

  /** Keeps the window inside its existing WorldView parent as the viewport changes, using shared panel geometry constraints. */
  useLayoutEffect(function containWindow() {
    const parent = panel.current!.parentElement!;
    setGeometry(
      clampGeometry(
        { x: 24, y: 24, width: 900, height: 600 },
        parent.clientWidth,
        parent.clientHeight,
      ),
    );
    const observer = new ResizeObserver(() =>
      setGeometry((value) =>
        clampGeometry(value, parent.clientWidth, parent.clientHeight),
      ),
    );
    observer.observe(parent);
    return () => observer.disconnect();
  }, []);
  /** Focuses the new window and invalidates pending responses after closure or a different entity/Universe selection. */
  useEffect(
    function lifecycle() {
      closeButton.current?.focus();
      const ticket = ++generation.current;
      setBusy(true);
      void (async function readIdentity() {
        try {
          await flushWorldViewWrites();
          const result =
            await requireWorldViewBridge().request<BackendIdentityState>(
              "identity-status",
              { vaultPath, id: chip.id },
            );
          if (generation.current === ticket) setState(result);
        } catch (cause) {
          if (generation.current === ticket)
            setError(
              cause instanceof Error
                ? cause.message
                : "Identity could not be loaded.",
            );
        } finally {
          if (generation.current === ticket) setBusy(false);
        }
      })();
      return () => {
        generation.current++;
      };
    },
    [vaultPath, chip.id],
  );
  /** Retrieves only the selected inspector page; requests and late responses never trigger compilation or capability execution. */
  useEffect(
    function loadSection() {
      let cancelled = false;
      setChunks(null);
      setCapabilities([]);
      setLoadingTab(false);
      if (
        state?.status !== "fresh" ||
        !state.manifest ||
        !["knowledge", "capabilities"].includes(tab)
      )
        return;
      setLoadingTab(true);
      setError("");
      void requireWorldViewBridge()
        .request<IdentityChunkPage | readonly IdentityCapability[]>(
          tab === "knowledge" ? "identity-chunks" : "identity-capabilities",
          {
            vaultPath,
            id: chip.id,
            version: state.manifest.identityVersion,
            query: search,
            offset,
            limit: 10,
          },
        )
        .then(
          function loaded(value) {
            if (!cancelled) {
              if (tab === "knowledge") setChunks(value as IdentityChunkPage);
              else setCapabilities(value as readonly IdentityCapability[]);
              setLoadingTab(false);
            }
          },
          function failed(cause: unknown) {
            if (!cancelled) {
              setLoadingTab(false);
              setError(
                cause instanceof Error
                  ? cause.message
                  : "Inspector section could not be loaded.",
              );
            }
          },
        );
      return () => {
        cancelled = true;
      };
    },
    [tab, state, vaultPath, chip.id, search, offset],
  );

  /** Manually checks freshness or compiles current applied inputs; errors leave the previous snapshot visible. */
  async function run(compile: boolean): Promise<void> {
    const ticket = ++generation.current;
    setBusy(true);
    setError("");
    setNotice("");
    try {
      await flushWorldViewWrites();
      const result =
        await requireWorldViewBridge().request<BackendIdentityState>(
          compile ? "identity-generate" : "identity-status",
          { vaultPath, id: chip.id },
        );
      if (generation.current !== ticket) return;
      setState(result);
      setOffset(0);
      if (compile)
        setNotice(
          result.reused
            ? "Unchanged inputs. Existing identity version reused."
            : "Backend identity generated. No capability was executed.",
        );
    } catch (cause) {
      if (generation.current === ticket) {
        const message =
          cause instanceof Error ? cause.message : "Identity operation failed.";
        setError(message);
        try {
          const latest =
            await requireWorldViewBridge().request<BackendIdentityState>(
              "identity-status",
              { vaultPath, id: chip.id },
            );
          if (generation.current === ticket) setState(latest);
        } catch {
          if (generation.current === ticket)
            setError(`${message} The saved status could not be refreshed.`);
        }
      }
    } finally {
      if (generation.current === ticket) setBusy(false);
    }
  }
  /** Copies server-authorized inspector data instead of arbitrary renderer text; clipboard failures remain visible. */
  async function copy(): Promise<void> {
    const ticket = generation.current;
    try {
      await requireWorldViewBridge().request("identity-copy", {
        vaultPath,
        id: chip.id,
        version: state?.manifest?.identityVersion,
        section: tab,
        query: search,
        offset,
        limit: 10,
      });
      if (ticket === generation.current) setNotice("Inspector data copied.");
    } catch (cause) {
      if (ticket === generation.current)
        setError(
          cause instanceof Error ? cause.message : "Clipboard copy failed.",
        );
    }
  }
  /** Captures a title-bar move or bottom-right resize without invoking WorldView pointer actions. */
  function start(
    event: PointerEvent<HTMLElement>,
    mode: "move" | "resize",
  ): void {
    if (
      event.button !== 0 ||
      !event.isPrimary ||
      (event.target as Element).closest("button")
    )
      return;
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.focus();
    drag.current = {
      pointerId: event.pointerId,
      mode,
      x: event.clientX,
      y: event.clientY,
      geometry,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }
  /** Applies shared geometry limits during captured move/resize gestures. */
  function move(event: PointerEvent<HTMLElement>): void {
    if (drag.current?.pointerId !== event.pointerId) return;
    const parent = panel.current!.parentElement!;
    const session = drag.current,
      dx = event.clientX - session.x,
      dy = event.clientY - session.y;
    setGeometry(
      session.mode === "resize"
        ? resizeGeometry(
            session.geometry,
            "se",
            dx,
            dy,
            parent.clientWidth,
            parent.clientHeight,
          )
        : clampGeometry(
            {
              ...session.geometry,
              x: session.geometry.x + dx,
              y: session.geometry.y + dy,
            },
            parent.clientWidth,
            parent.clientHeight,
          ),
    );
  }
  /** Releases capture after a completed or cancelled gesture. */
  function stop(event: PointerEvent<HTMLElement>): void {
    drag.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId);
  }
  /** Provides keyboard movement and resizing so window management does not require pointer precision. */
  function positionByKey(
    event: KeyboardEvent<HTMLElement>,
    resize: boolean,
  ): void {
    if (
      event.target !== event.currentTarget ||
      !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home"].includes(
        event.key,
      )
    )
      return;
    event.preventDefault();
    const parent = panel.current!.parentElement!;
    const dx =
        event.key === "ArrowRight" ? 20 : event.key === "ArrowLeft" ? -20 : 0,
      dy = event.key === "ArrowDown" ? 20 : event.key === "ArrowUp" ? -20 : 0;
    setGeometry((value) =>
      event.key === "Home"
        ? clampGeometry(
            {
              ...value,
              x: (parent.clientWidth - value.width) / 2,
              y: (parent.clientHeight - value.height) / 2,
            },
            parent.clientWidth,
            parent.clientHeight,
          )
        : resize
          ? resizeGeometry(
              value,
              "se",
              dx,
              dy,
              parent.clientWidth,
              parent.clientHeight,
            )
          : clampGeometry(
              { ...value, x: value.x + dx, y: value.y + dy },
              parent.clientWidth,
              parent.clientHeight,
            ),
    );
  }
  const manifest = state?.manifest;
  return (
    <section
      ref={panel}
      className="backend-identity-window"
      role="dialog"
      aria-label={`Backend Identity — ${chip.name}`}
      aria-modal="false"
      style={{
        left: geometry.x,
        top: geometry.y,
        width: geometry.width,
        height: geometry.height,
      }}
      onPointerDown={(event) => event.stopPropagation()}
      onWheel={(event) => event.stopPropagation()}
      onKeyDown={(event) => {
        event.stopPropagation();
        if (event.key === "Escape") onClose();
      }}
    >
      <header
        className="identity-titlebar"
        tabIndex={0}
        aria-label="Move Backend Identity window"
        onPointerDown={(event) => start(event, "move")}
        onPointerMove={move}
        onPointerUp={stop}
        onPointerCancel={stop}
        onKeyDown={(event) => positionByKey(event, false)}
      >
        <span>{`WONTON://${chip.id}/BACKEND_IDENTITY`}</span>
        <button
          ref={closeButton}
          type="button"
          onClick={onClose}
          aria-label="Close Backend Identity"
        >
          ×
        </button>
      </header>
      <nav
        className="identity-tabs"
        role="tablist"
        aria-label="Backend Identity sections"
      >
        {tabs.map((item) => (
          <button
            type="button"
            role="tab"
            id={`identity-tab-${item}`}
            aria-controls="identity-panel"
            aria-selected={tab === item}
            key={item}
            onClick={() => {
              setTab(item);
              setOffset(0);
            }}
          >
            {item === "log"
              ? "Compilation Log"
              : item[0].toUpperCase() + item.slice(1)}
          </button>
        ))}
      </nav>
      <div className="identity-status" role="status">
        {busy ? "Processing…" : `Snapshot: ${state?.status ?? "checking"}`}
        {manifest &&
          ` · ${manifest.status} · ${manifest.knowledge.chunkCount} chunks`}
      </div>
      <div
        id="identity-panel"
        className="identity-panel"
        role="tabpanel"
        aria-labelledby={`identity-tab-${tab}`}
        aria-busy={busy || loadingTab}
      >
        {error && <p role="alert">{error}</p>}
        {notice && <p role="status">{notice}</p>}
        {!busy && state?.status === "missing" && (
          <p>
            No backend identity compiled. Generate Backend Identity to compile
            this entity’s applied index locally.
          </p>
        )}
        {state?.status === "stale" && (
          <p className="identity-warning">
            Source data or entity metadata changed. Regenerate before retrieving
            chunks or requesting capabilities.
          </p>
        )}
        {tab === "identity" && manifest && (
          <StructuredContent value={manifest} />
        )}
        {tab === "log" && (
          <StructuredContent
            value={{
              status: state?.status ?? "checking",
              compiledAt: manifest?.compiledAt ?? null,
              lastAttempt: state?.lastAttempt ?? null,
              entries: manifest?.log ?? [],
              ...(error ? { error } : {}),
            }}
          />
        )}
        {tab === "knowledge" && state?.status === "fresh" && (
          <>
            <form
              className="identity-search"
              onSubmit={(event) => {
                event.preventDefault();
                setSearch(query);
                setOffset(0);
              }}
            >
              <label>
                Search knowledge
                <input
                  value={query}
                  maxLength={200}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </label>
              <button type="submit" disabled={loadingTab}>
                Search
              </button>
            </form>
            {loadingTab ? (
              <p>Loading knowledge page…</p>
            ) : (
              chunks && (
                <>
                  <p>
                    {chunks.total} matching chunks · page{" "}
                    {Math.floor(offset / 10) + 1} · source excerpts are
                    untrusted data
                  </p>
                  <StructuredContent value={chunks.items} />
                  <div className="identity-page-controls">
                    <button
                      type="button"
                      disabled={!offset}
                      onClick={() => setOffset(Math.max(0, offset - 10))}
                    >
                      Previous chunks
                    </button>
                    <button
                      type="button"
                      disabled={chunks.nextOffset === null}
                      onClick={() => setOffset(chunks.nextOffset ?? offset)}
                    >
                      Next chunks
                    </button>
                  </div>
                </>
              )
            )}
          </>
        )}
        {tab === "capabilities" &&
          state?.status === "fresh" &&
          (loadingTab ? (
            <p>Loading capability contracts…</p>
          ) : (
            <>
              <p>
                Discovery only. Configured availability does not guarantee
                provider access. Execution requires separate backend
                permissions.
              </p>
              <StructuredContent value={capabilities} />
            </>
          ))}
      </div>
      <footer className="identity-utilities">
        <button type="button" disabled={busy} onClick={() => void run(true)}>
          {manifest
            ? "Regenerate Backend Identity"
            : "Generate Backend Identity"}
        </button>
        <button type="button" disabled={busy} onClick={() => void run(false)}>
          Check freshness
        </button>
        <button
          type="button"
          disabled={
            busy ||
            loadingTab ||
            !manifest ||
            (state?.status !== "fresh" &&
              ["knowledge", "capabilities"].includes(tab))
          }
          onClick={() => void copy()}
        >
          Copy {tab === "log" ? "log" : tab}
        </button>
      </footer>
      <div
        className="identity-resize-handle"
        role="separator"
        aria-label="Resize Backend Identity window"
        aria-orientation="horizontal"
        tabIndex={0}
        onPointerDown={(event) => start(event, "resize")}
        onPointerMove={move}
        onPointerUp={stop}
        onPointerCancel={stop}
        onKeyDown={(event) => positionByKey(event, true)}
      >
        ↘
      </div>
    </section>
  );
}
