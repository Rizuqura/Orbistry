"use client";

import { useEffect, useRef, useState } from "react";
import type { StationState } from "../../types/electron";
import type { ChatController } from "../chat/use-chat-runtime";

export function ContextBoxManager({
  state,
  chat,
  busy,
  selectedCount,
  onAddSelected,
  onRemove,
  onClear,
  onManageBox,
  activeBoxIds,
  onToggleFilter,
  onOpenLibrary,
}: {
  state: StationState | null;
  chat: ChatController;
  busy: boolean;
  selectedCount: number;
  onAddSelected: () => void;
  onRemove: (path: string) => void;
  onClear: () => void;
  onManageBox: (id: string) => void;
  activeBoxIds: ReadonlySet<string>;
  onToggleFilter: (id: string) => void;
  onOpenLibrary: () => void;
}) {
  const [creating, setCreating] = useState(false);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [estimateRevision, setEstimateRevision] = useState(0);
  const [estimates, setEstimates] = useState<
    Record<string, { tokens: number; unavailable: number; error?: string }>
  >({});
  const pending = useRef(false);
  const sources = state?.activeContext ?? [];
  const disabled = busy || chat.busy;
  useEffect(() => {
    let stale = false;
    setEstimates({});
    void Promise.all(
      chat.contextBoxes.map(async (box) => {
        try {
          const current = await chat.inspectContextBox(box.id);
          return [
            box.id,
            {
              tokens: current.items.reduce(
                (sum, item) => sum + (item.estimatedTokens ?? 0),
                0,
              ),
              unavailable: current.items.filter(
                (item) => item.status !== "ready",
              ).length,
              error: current.items
                .filter((item) => item.status !== "ready")
                .map(
                  (item) =>
                    `${item.relativePath}: ${item.message ?? "Could not read this source."}`,
                )
                .join(" "),
            },
          ] as const;
        } catch (error) {
          return [
            box.id,
            {
              tokens: 0,
              unavailable: box.items.length || 1,
              error:
                error instanceof Error
                  ? error.message
                  : "Token estimation failed. Refresh estimates to retry.",
            },
          ] as const;
        }
      }),
    ).then((values) => {
      if (!stale) setEstimates(Object.fromEntries(values));
    });
    return () => {
      stale = true;
    };
  }, [chat.contextBoxes, state, estimateRevision]);
  return (
    <section className="context-box-manager" aria-label="Context Box Manager">
      <div className="pd-section-title">CONTEXT BOXES</div>
      <button
        className="pd-action context-library-action"
        onClick={onOpenLibrary}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="m12 2 9 5v10l-9 5-9-5V7Zm0 10v10M3 7l9 5 9-5M8 4l9 5" />
        </svg>
        Open Context Box library
      </button>
      {!!chat.contextBoxes.length && (
        <button
          className="station-secondary context-estimates-refresh"
          disabled={chat.contextBoxes.some((box) => !estimates[box.id])}
          onClick={() => setEstimateRevision((value) => value + 1)}
        >
          Refresh token estimates
        </button>
      )}
      {!chat.contextBoxes.length && (
        <p className="context-summary">Your saved boxes will appear here.</p>
      )}
      <div className="context-manager-boxes">
        {chat.contextBoxes.map((box) => (
          <div
            className={`context-manager-box-row${activeBoxIds.has(box.id) ? " is-highlighted" : ""}`}
            key={box.id}
          >
            <button
              className={`station-filter${activeBoxIds.has(box.id) ? " on" : ""}`}
              aria-label={`Filter ${box.name} on Planet`}
              aria-pressed={activeBoxIds.has(box.id)}
              onClick={() => onToggleFilter(box.id)}
              title="Toggle this box in the Station ANY/ALL filter"
            >
              {activeBoxIds.has(box.id) ? "●" : "○"}
            </button>
            <button disabled={disabled} onClick={() => onManageBox(box.id)}>
              <strong>{box.name}</strong>
              <small>
                {box.items.length} files ·{" "}
                {estimates[box.id]
                  ? estimates[box.id].unavailable
                    ? `${estimates[box.id].unavailable} unavailable · ~${estimates[box.id].tokens.toLocaleString()} readable source tokens`
                    : `~${estimates[box.id].tokens.toLocaleString()} est. tokens`
                  : "Estimating tokens…"}
              </small>
              {estimates[box.id]?.error && (
                <small
                  className="context-estimate-error"
                  style={{ color: "#efad95" }}
                >
                  {estimates[box.id].error}
                </small>
              )}
            </button>
          </div>
        ))}
      </div>
      <div className="pd-section-title context-selected-heading">
        SELECTED CONTEXT
      </div>
      <p className="context-summary">{sources.length} approved sources</p>
      <div className="context-token-estimate" role="status">
        <strong>
          ~{(state?.contextEstimatedTokens ?? 0).toLocaleString()}
        </strong>
        <span>estimated source tokens</span>
      </div>
      {selectedCount > 0 && (
        <button
          className="pd-action"
          disabled={disabled}
          onClick={onAddSelected}
        >
          REVIEW + ADD SELECTED
        </button>
      )}
      <div className="context-list">
        {sources.map((source) => (
          <div
            key={source.relativePath}
            className={
              source.missing ? "missing" : source.changed ? "changed" : ""
            }
          >
            <svg
              className="context-source-icon"
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M5 2h9l5 5v15H5ZM14 2v6h5M8 12h8M8 16h8" />
            </svg>
            <span title={source.relativePath}>
              {source.relativePath}
              {source.missing
                ? " · MISSING"
                : source.changed
                  ? " · CHANGED"
                  : ""}
            </span>
            <button
              aria-label={`Remove ${source.relativePath} from selected context`}
              disabled={disabled}
              onClick={() => onRemove(source.relativePath)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
      {!sources.length && (
        <p className="context-summary">
          Select files in Explorer or Planet View and choose Review + Add
          Selected.
        </p>
      )}
      {!!sources.length && (
        <>
          {!creating ? (
            <button
              className="pd-action"
              disabled={
                disabled ||
                sources.some((source) => source.missing || source.changed)
              }
              onClick={() => {
                setName("");
                setError("");
                setCreating(true);
              }}
            >
              CREATE CONTEXT BOX
            </button>
          ) : (
            <form
              className="context-box-manager-form"
              onKeyDown={(event) => {
                if (event.key === "Escape" && !pending.current) {
                  event.preventDefault();
                  setCreating(false);
                }
              }}
              onSubmit={async (event) => {
                event.preventDefault();
                if (pending.current || disabled || !name.trim()) return;
                pending.current = true;
                setError("");
                try {
                  if (await chat.saveContextBox(name)) {
                    setCreating(false);
                    setName("");
                  } else
                    setError(
                      "Could not create this box. Your selected sources and name are retained.",
                    );
                } finally {
                  pending.current = false;
                }
              }}
            >
              <label>
                Context Box name
                <input
                  autoFocus
                  required
                  maxLength={120}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </label>
              <p className="context-summary">
                {sources.length} sources · ~
                {(state?.contextEstimatedTokens ?? 0).toLocaleString()}{" "}
                estimated source tokens
              </p>
              {error && (
                <p className="station-error" role="alert">
                  {error} {chat.runtime.error}
                </p>
              )}
              <button className="pd-action" disabled={disabled || !name.trim()}>
                CREATE CONTEXT BOX
              </button>
              <button
                className="station-secondary"
                type="button"
                disabled={disabled}
                onClick={() => setCreating(false)}
              >
                Cancel
              </button>
            </form>
          )}
          {sources.some((source) => source.missing || source.changed) && (
            <p className="station-error">
              Remove or review changed/missing files before creating a box.
            </p>
          )}
          <button
            className="station-secondary"
            disabled={disabled}
            onClick={onClear}
          >
            CLEAR ALL CONTEXT
          </button>
        </>
      )}
      <p className="context-summary">
        Estimates use source characters ÷ 4. Prompt, history and output add to
        usage; CSV sends computed profiles. Creating a box does not start a
        chat.
      </p>
    </section>
  );
}
