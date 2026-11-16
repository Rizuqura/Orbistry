"use client";

import { useEffect, useState } from "react";
import type {
  IndexValidation,
  KnowledgeIndexState,
  KnowledgeIndexSave,
  WorldViewOperation,
} from "../../types/worldview";
import { DEFAULT_KNOWLEDGE_MENUS, type WorldViewChip } from "./chips";
import { chipTextColor } from "./chip-colors";
import { flushWorldViewWrites, requireWorldViewBridge } from "./chip-session";
import { SourcePreview } from "./source-preview";
import { ImageCarousel } from "./image-carousel";
import { FinancialViewer } from "./financial-viewer";
import { DailyPrice } from "./daily-price";
import { useConfirmation } from "../dialogs/use-confirmation";

/** Presents entity identity, section navigation and source/carousel content in the floating Knowledge Card workspace. */
export function KnowledgeWorkspace({
  chip,
  vaultPath,
  disabled,
  onDirtyChange,
  onBusyChange,
}: Readonly<{
  chip: WorldViewChip;
  vaultPath: string | null;
  disabled: boolean;
  onDirtyChange: (dirty: boolean) => void;
  onBusyChange: (busy: boolean) => void;
}>) {
  const [index, setIndex] = useState<KnowledgeIndexState | null>(null);
  const [draft, setDraft] = useState("");
  const [editing, setEditing] = useState(false);
  const [showPrices, setShowPrices] = useState(false);
  const [selected, setSelected] = useState("overview");
  const [sourceId, setSourceId] = useState<string | null>(null);
  const [validation, setValidation] = useState<IndexValidation | null>(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(0);
  const { confirm, confirmation } = useConfirmation();
  const dirty = index !== null && draft !== index.draft;
  const unavailable = disabled || busy || loading || !index;
  const generated = index?.menus ?? [];
  const legacy = (chip.knowledgeMenus ?? DEFAULT_KNOWLEDGE_MENUS).filter(
    (menu) => menu.id !== "overview" || index?.applied === null,
  );
  const allMenus = [...generated, ...legacy];
  const active = allMenus.find((menu) => menu.id === selected) ?? allMenus[0];
  const activeGenerated = generated.find((menu) => menu.id === active?.id);
  const currentSource = activeGenerated?.sourceIds.includes(sourceId ?? "")
    ? sourceId
    : activeGenerated?.sourceIds[0];

  /** Restores the saved draft and applied declarations after pending entity writes complete; stale results are ignored. */
  useEffect(
    function loadIndex() {
      let cancelled = false;
      setLoading(true);
      setError("");
      void (async function readIndex() {
        try {
          if (!vaultPath) throw new Error("Universe is unavailable.");
          await flushWorldViewWrites();
          const value =
            await requireWorldViewBridge().request<KnowledgeIndexState>(
              "knowledge-load",
              { vaultPath, id: chip.id },
            );
          if (!cancelled) {
            setIndex(value);
            setDraft(value.draft);
            setValidation(null);
          }
        } catch (cause) {
          if (!cancelled)
            setError(
              cause instanceof Error
                ? cause.message
                : "Knowledge index could not be loaded.",
            );
        } finally {
          if (!cancelled) setLoading(false);
        }
      })();
      return () => {
        cancelled = true;
      };
    },
    [vaultPath, chip.id, reload],
  );

  /** Keeps the floating-window close guard and busy indicator synchronized with the explicit draft editor. */
  useEffect(
    function reportEditorState() {
      onDirtyChange(dirty);
      onBusyChange(busy || loading);
    },
    [dirty, busy, loading, onDirtyChange, onBusyChange],
  );

  /** Saves a draft, validates declarations, or atomically applies them. Failed validation preserves applied menus and editor text. */
  async function runIndexAction(operation: WorldViewOperation): Promise<void> {
    if (!vaultPath || !index || unavailable) return;
    setBusy(true);
    setError("");
    setMessage("");
    try {
      await flushWorldViewWrites();
      const request = {
        vaultPath,
        id: chip.id,
        draft,
        revision: index.revision,
      };
      if (operation === "knowledge-validate") {
        const result = await requireWorldViewBridge().request<IndexValidation>(
          operation,
          request,
        );
        setValidation(result);
        if (!result.errors.length) setMessage("Index is valid.");
      } else {
        const result =
          await requireWorldViewBridge().request<KnowledgeIndexSave>(
            operation,
            request,
          );
        if (!result.saved) {
          setValidation(result.validation ?? null);
          return;
        }
        setIndex(result);
        setMessage(
          operation === "knowledge-apply" ? "Index applied." : "Draft saved.",
        );
        if (operation === "knowledge-apply") {
          setValidation(null);
          setEditing(false);
          setShowPrices(false);
          setSelected((previous) =>
            result.menus.some((menu) => menu.id === previous)
              ? previous
              : (result.menus[0]?.id ?? "overview"),
          );
          setSourceId(null);
        }
      }
    } catch (cause) {
      setError(
        cause instanceof Error
          ? cause.message
          : "Index operation failed. Your draft is still available.",
      );
    } finally {
      setBusy(false);
    }
  }

  /** Clears only the draft after confirmation; the applied index is retained until Apply is explicitly requested. */
  async function clearDraft(): Promise<void> {
    if (
      await confirm(
        "Clear the index draft? The applied index remains available until you apply new declarations.",
        "Clear Draft",
      )
    ) {
      setDraft("");
      setValidation(null);
      setMessage("");
    }
  }

  /** Reloads disk state after explicit confirmation if local draft changes would be lost. */
  async function reloadIndex(): Promise<void> {
    if (
      !dirty ||
      (await confirm(
        "Discard unsaved draft changes and reload the saved index?",
        "Reload Index",
      ))
    )
      setReload(reload + 1);
  }

  return (
    <>
      <aside className="knowledge-card-sidebar">
        <button
          type="button"
          className="knowledge-write-index"
          onClick={() => setEditing(true)}
          disabled={unavailable}
        >
          Write Index
        </button>
        <nav aria-label="Indexed menus">
          {index?.priceSymbol &&
            !generated.some((menu) => menu.prices?.length) && (
              <button
                type="button"
                className="knowledge-menu-title"
                aria-current={showPrices && !editing ? "page" : undefined}
                disabled={unavailable}
                onClick={() => {
                  setShowPrices(true);
                  setEditing(false);
                }}
              >
                <span aria-hidden="true">↗</span>
                <span>Prices</span>
              </button>
            )}
          <ol>
            {generated.map((menu) => (
              <li key={menu.id} data-menu-id={menu.id}>
                <button
                  type="button"
                  className="knowledge-menu-title knowledge-indexed-menu"
                  aria-current={
                    !editing && !showPrices && active?.id === menu.id
                      ? "page"
                      : undefined
                  }
                  onClick={() => {
                    setSelected(menu.id);
                    setShowPrices(false);
                    setSourceId(null);
                    setEditing(false);
                  }}
                >
                  <span aria-hidden="true" className="knowledge-menu-icon" />
                  <span>{menu.title}</span>
                </button>
              </li>
            ))}
          </ol>
        </nav>
        {legacy.length > 0 && (
          <nav aria-label="Saved menus">
            {legacy.some((menu) => menu.id !== "overview") && (
              <p className="knowledge-section-label">Saved menus</p>
            )}
            <ol>
              {legacy.map((menu) => (
                <li key={menu.id} data-menu-id={menu.id}>
                  <button
                    type="button"
                    className="knowledge-menu-title"
                    aria-current={
                      !editing && !showPrices && active?.id === menu.id
                        ? "page"
                        : undefined
                    }
                    onClick={() => {
                      setSelected(menu.id);
                      setShowPrices(false);
                      setSourceId(null);
                      setEditing(false);
                    }}
                  >
                    <span aria-hidden="true" className="knowledge-menu-icon" />
                    <span>{menu.title}</span>
                  </button>
                </li>
              ))}
            </ol>
          </nav>
        )}
      </aside>
      <article className="knowledge-card-main">
        <header className="knowledge-entity-header">
          {chip.iconImage ? (
            <img src={chip.iconImage} alt="" width={72} height={72} />
          ) : (
            <span
              className="entity-monogram"
              style={{
                backgroundColor: chip.color,
                color: chipTextColor(chip.color),
              }}
            >
              {chip.name.charAt(0)}
            </span>
          )}
          <div>
            <h1>{chip.name}</h1>
            <div className="knowledge-entity-tags">
              {chip.category && (
                <span className="knowledge-entity-category">
                  {chip.category}
                </span>
              )}
              {chip.tags.map(
                /** Displays user-assigned tags without shortening their text. */ (
                  tag,
                ) => (
                  <span key={tag}>#{tag}</span>
                ),
              )}
            </div>
          </div>
        </header>
        {loading && <p role="status">Loading knowledge index…</p>}
        {error && (
          <p role="alert">
            {error}{" "}
            <button
              type="button"
              onClick={() => void reloadIndex()}
              disabled={busy}
            >
              Reload Saved Index
            </button>
          </p>
        )}
        {message && <p role="status">{message}</p>}
        {editing ? (
          <section
            className="knowledge-index-editor"
            aria-label="Manual index editor"
          >
            <h2>Write Index</h2>
            <p>
              Use # Menu title and source: followed by an assigned source ID.
              Use source: yahooPrice(&quot;BBCA.JK&quot;) for a price chart in
              any section. Use source: yahooFinancials(&quot;TSM&quot;) for
              statements or source: yahooEarnings(&quot;TSM&quot;) for earnings.
              Group images with Carousel = [ source lines ] followed by
              .view(carousel) or .view(timeline), using a separate line for each
              source.
            </p>
            <label>
              Index declarations
              <textarea
                spellCheck={false}
                value={draft}
                disabled={unavailable}
                onChange={(event) => {
                  setDraft(event.target.value);
                  setValidation(null);
                  setMessage("");
                }}
              />
            </label>
            <p className="knowledge-draft-status">
              {dirty ? "Unsaved draft" : "Draft saved"}
              {index?.applied !== null && draft !== index?.applied
                ? " · Applied index differs from this draft"
                : ""}
            </p>
            <div className="knowledge-index-actions">
              <button
                type="button"
                onClick={() => void runIndexAction("knowledge-draft")}
                disabled={unavailable}
              >
                Save Draft
              </button>
              <button
                type="button"
                onClick={() => void runIndexAction("knowledge-validate")}
                disabled={unavailable}
              >
                Validate Index
              </button>
              <button
                type="button"
                onClick={() => void runIndexAction("knowledge-apply")}
                disabled={unavailable}
              >
                Apply Index
              </button>
              <button
                type="button"
                onClick={() => void clearDraft()}
                disabled={unavailable}
              >
                Clear Draft
              </button>
              <button
                type="button"
                onClick={() => setEditing(false)}
                disabled={busy}
              >
                Close Editor
              </button>
            </div>
            {validation && validation.errors.length > 0 && (
              <ul className="knowledge-index-errors" role="alert">
                {validation.errors.map((issue, index) => (
                  <li key={`${issue.line}:${index}`}>
                    Line {issue.line}: {issue.message}
                  </li>
                ))}
              </ul>
            )}
            <details>
              <summary>Assigned source IDs</summary>
              {chip.sources?.length ? (
                <ul className="knowledge-source-ids">
                  {chip.sources.map((source) => (
                    <li key={source.sourceId}>
                      <code>{source.sourceId}</code>
                      <small>
                        {source.filename} · {source.status}
                      </small>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>
                  Assign Universe files to this entity before referencing
                  sources.
                </p>
              )}
            </details>
          </section>
        ) : showPrices && vaultPath && index ? (
          <DailyPrice
            key={`${chip.id}:${vaultPath}`}
            entityId={chip.id}
            vaultPath={vaultPath}
            index={index}
            onIndexChange={setIndex}
          />
        ) : (
          <>
            {active && <h2>{active.title}</h2>}
            {!activeGenerated && (
              <p className="knowledge-card-empty">No knowledge indexed yet.</p>
            )}
            {activeGenerated &&
              activeGenerated.sourceIds.length === 0 &&
              !activeGenerated.prices?.length &&
              !activeGenerated.finance?.length &&
              !activeGenerated.carousels?.length && (
                <p className="knowledge-card-empty">
                  No sources declared for this menu.
                </p>
              )}
            {vaultPath &&
              index &&
              activeGenerated?.prices?.map((source) => (
                <DailyPrice
                  key={`${activeGenerated.id}:${source.id}`}
                  entityId={chip.id}
                  vaultPath={vaultPath}
                  index={index}
                  onIndexChange={setIndex}
                  source={{ ...source, menuId: activeGenerated.id }}
                />
              ))}
            {vaultPath &&
              activeGenerated?.finance?.map((source) => (
                <FinancialViewer
                  key={activeGenerated.id + ":" + source.id}
                  entityId={chip.id}
                  vaultPath={vaultPath}
                  menuId={activeGenerated.id}
                  source={source}
                />
              ))}
            {vaultPath &&
              activeGenerated?.carousels?.map(
                /** Renders only explicitly grouped images, independently of legacy source tabs. */ (
                  group,
                ) => (
                  <ImageCarousel
                    key={`${activeGenerated.id}:${group.id}`}
                    entityId={chip.id}
                    vaultPath={vaultPath}
                    group={group}
                    sources={chip.sources ?? []}
                    index={index!}
                    onIndexChange={setIndex}
                  />
                ),
              )}
            {activeGenerated && activeGenerated.sourceIds.length > 0 && (
              <>
                <div
                  className="knowledge-source-selector"
                  role="group"
                  aria-label="Referenced sources"
                >
                  {activeGenerated.sourceIds.map((id) => (
                    <button
                      type="button"
                      key={id}
                      aria-pressed={currentSource === id}
                      onClick={() => setSourceId(id)}
                    >
                      {chip.sources?.find((source) => source.sourceId === id)
                        ?.filename ?? id}
                    </button>
                  ))}
                </div>
                {currentSource && vaultPath && (
                  <SourcePreview
                    key={`${activeGenerated.id}:${currentSource}`}
                    entityId={chip.id}
                    vaultPath={vaultPath}
                    sourceId={currentSource}
                    assigned={chip.sources?.find(
                      (source) => source.sourceId === currentSource,
                    )}
                  />
                )}
              </>
            )}
          </>
        )}
      </article>
      {confirmation}
    </>
  );
}
