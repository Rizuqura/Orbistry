"use client";
import { useState } from "react";
import type { WorldViewChip } from "./chips";
import {
  flushWorldViewWrites,
  replaceChipSources,
  requireWorldViewBridge,
} from "./chip-session";
import { useConfirmation } from "../dialogs/use-confirmation";

/** Inspects every assigned file, including overflow/missing sources; locate and unassign never read original contents. */
export function FileInspector({
  chip,
  vaultPath,
  sourceId,
  onSelect,
  onClose,
}: Readonly<{
  chip: WorldViewChip;
  vaultPath: string;
  sourceId: string | null;
  onSelect: (id: string) => void;
  onClose: () => void;
}>) {
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const { confirm, confirmation } = useConfirmation();
  const sources = chip.sources ?? [];
  const source =
    sources.find(
      /** Finds the selected exact source ID without relying on duplicate filenames. */ function selectedSource(
        item,
      ) {
        return item.sourceId === sourceId;
      },
    ) ?? sources[0];

  /** Locates the source through the desktop's existing OS shell capability after validating its Universe reference. */
  async function revealSource(): Promise<void> {
    if (!source) return;
    setError("");
    try {
      await requireWorldViewBridge().request("reveal", {
        vaultPath,
        sourceRef: source.sourceRef,
      });
    } catch (cause) {
      setError(
        cause instanceof Error
          ? cause.message
          : "Could not locate the original file.",
      );
    }
  }

  /** Confirms removal of one entity association; only its Markdown index is written. */
  async function unassignSource(): Promise<void> {
    if (!source || busy) return;
    setBusy(true);
    setError("");
    try {
      const accepted = await confirm(
        `Unassign “${source.filename}” from “${chip.name}”? The original file stays in Universe.`,
        "Unassign File",
      );
      if (!accepted) return;
      await flushWorldViewWrites();
      const saved = await requireWorldViewBridge().request<WorldViewChip>(
        "unassign",
        { vaultPath, id: chip.id, sourceId: source.sourceId },
      );
      replaceChipSources(saved);
      if (saved.sources?.[0]) onSelect(saved.sources[0].sourceId);
    } catch (cause) {
      setError(
        cause instanceof Error
          ? cause.message
          : "Could not unassign this file.",
      );
    } finally {
      setBusy(false);
    }
  }

  /** Selects a list item for metadata review without dragging the chip or moving the camera. */
  function selectSource(event: React.MouseEvent<HTMLButtonElement>): void {
    const id = event.currentTarget.dataset.sourceId;
    if (id) onSelect(id);
  }

  return (
    <aside className="worldview-file-inspector" aria-label="Entity files">
      <header>
        <h2>
          {chip.name} · {sources.length} files
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close file inspector"
        >
          ×
        </button>
      </header>
      <p>
        Heights compare log-compressed byte sizes within this entity. One file
        or equal sizes use a moderate height.
      </p>
      <ul>
        {sources.map(
          /** Preserves access to all assignments rather than silently hiding buildings beyond capacity. */ function renderSource(
            item,
          ) {
            return (
              <li key={item.sourceId}>
                <button
                  type="button"
                  data-source-id={item.sourceId}
                  aria-pressed={source?.sourceId === item.sourceId}
                  onClick={selectSource}
                >
                  <span>{item.filename}</span>
                  <small>
                    {item.status === "available"
                      ? `${item.sizeBytes?.toLocaleString()} bytes`
                      : item.status === "missing"
                        ? "Missing file"
                        : "Size unavailable"}
                  </small>
                </button>
              </li>
            );
          },
        )}
      </ul>
      {source ? (
        <div className="worldview-source-details">
          <strong>{source.filename}</strong>
          <dl>
            <dt>Type</dt>
            <dd>{source.extension || "No extension"}</dd>
            <dt>Size</dt>
            <dd>
              {source.sizeBytes === null
                ? "Unavailable"
                : `${source.sizeBytes.toLocaleString()} bytes`}
            </dd>
            <dt>Universe reference</dt>
            <dd>{source.sourceRef}</dd>
            <dt>Status</dt>
            <dd>
              {source.status}
              {source.message ? ` · ${source.message}` : ""}
            </dd>
          </dl>
          <button
            type="button"
            onClick={revealSource}
            disabled={source.status !== "available" || busy}
          >
            Locate Original
          </button>
          <button type="button" onClick={unassignSource} disabled={busy}>
            Unassign File
          </button>
        </div>
      ) : (
        <p>No files assigned.</p>
      )}
      {error && <p role="alert">{error}</p>}
      {confirmation}
    </aside>
  );
}
