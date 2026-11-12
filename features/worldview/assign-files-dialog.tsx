"use client";
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type SyntheticEvent,
} from "react";
import type { UniverseListing } from "../../types/worldview";
import type { WorldViewChip } from "./chips";
import {
  flushWorldViewWrites,
  replaceChipSources,
  requireWorldViewBridge,
} from "./chip-session";

/** Browses/searches the existing Universe using metadata only; confirmed selection creates file associations. */
export function AssignFilesDialog({
  chip,
  vaultPath,
  onClose,
}: Readonly<{ chip: WorldViewChip; vaultPath: string; onClose: () => void }>) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [directory, setDirectory] = useState("");
  const [query, setQuery] = useState("");
  const [listing, setListing] = useState<UniverseListing | null>(null);
  const [selected, setSelected] = useState<ReadonlySet<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const busyRef = useRef(false);
  const [error, setError] = useState("");
  const [reload, setReload] = useState(0);
  const assigned = new Set(
    (chip.sources ?? []).map(
      /** Identifies existing memberships so the picker cannot create duplicates. */ function sourceId(
        source,
      ) {
        return source.sourceRef;
      },
    ),
  );

  /** Opens a native modal and restores the initiating Assign Files control when closed. */
  useEffect(function openPicker() {
    const dialog = dialogRef.current!;
    const previous = document.activeElement;
    dialog.showModal();
    /** Releases native modality and returns focus without changing camera position. */
    return function closePicker() {
      dialog.close();
      if (previous instanceof HTMLElement && previous.isConnected)
        previous.focus({ preventScroll: true });
    };
  }, []);

  /** Debounces filename search and discards stale directory responses after navigation or closing. */
  useEffect(
    function loadDirectory() {
      let active = true;
      setLoading(true);
      setError("");
      /** Reads names/folders/stat sizes through the existing Universe root; no content is requested. */
      async function listFiles() {
        try {
          const value = await requireWorldViewBridge().request<UniverseListing>(
            "list",
            { vaultPath, directory, query },
          );
          if (active) setListing(value);
        } catch (cause) {
          if (active)
            setError(
              cause instanceof Error
                ? cause.message
                : "Could not browse Universe.",
            );
        } finally {
          if (active) setLoading(false);
        }
      }
      const timer = setTimeout(listFiles, query ? 180 : 0);
      /** Cancels pending searches and makes in-flight results inert after unmount. */
      return function cancelListing() {
        active = false;
        clearTimeout(timer);
      };
    },
    [vaultPath, directory, query, reload],
  );

  /** Changes search text while preserving selected files across folders. */
  function searchFiles(event: ChangeEvent<HTMLInputElement>): void {
    setQuery(event.target.value);
  }
  /** Navigates a real Universe folder and exits global search mode. */
  function browseFolder(event: React.MouseEvent<HTMLButtonElement>): void {
    setDirectory(event.currentTarget.dataset.path ?? "");
    setQuery("");
  }
  /** Toggles a file reference in the staged multi-selection without writing metadata. */
  function toggleFile(event: ChangeEvent<HTMLInputElement>): void {
    const next = new Set(selected);
    if (event.target.checked) next.add(event.target.value);
    else next.delete(event.target.value);
    setSelected(next);
  }
  /** Confirms the displayed selection, waits for chip persistence, and atomically registers only file metadata. */
  async function confirmAssignment(): Promise<void> {
    if (!selected.size || busyRef.current) return;
    busyRef.current = true;
    setBusy(true);
    setError("");
    try {
      await flushWorldViewWrites();
      const saved = await requireWorldViewBridge().request<WorldViewChip>(
        "assign",
        { vaultPath, id: chip.id, sourceRefs: [...selected] },
      );
      replaceChipSources(saved);
      onClose();
    } catch (cause) {
      setError(
        cause instanceof Error ? cause.message : "Files could not be assigned.",
      );
    } finally {
      busyRef.current = false;
      setBusy(false);
    }
  }
  /** Prevents closing only while a confirmed disk mutation is already running. */
  function cancelPicker(event: SyntheticEvent<HTMLDialogElement>): void {
    event.preventDefault();
    if (!busyRef.current) onClose();
  }
  /** Repeats a failed metadata listing without losing the staged selection. */
  function retryListing(): void {
    setReload(reload + 1);
  }

  const parent = directory.split("/").slice(0, -1).join("/");
  return (
    <dialog
      ref={dialogRef}
      className="worldview-files-dialog"
      aria-labelledby="assign-files-title"
      onCancel={cancelPicker}
    >
      <h2 id="assign-files-title">Assign Files</h2>
      <p>
        Assign Universe files to <strong>{chip.name}</strong>. Originals stay in
        their current folders.
      </p>
      <nav className="worldview-folder-nav" aria-label="Universe folders">
        <button
          type="button"
          data-path=""
          onClick={browseFolder}
          disabled={busy}
        >
          Universe
        </button>
        {directory && (
          <>
            <span>/ {directory}</span>
            <button
              type="button"
              data-path={parent}
              onClick={browseFolder}
              disabled={busy}
            >
              Up one folder
            </button>
          </>
        )}
      </nav>
      <small className="worldview-universe-root">{vaultPath}</small>
      <label className="worldview-file-search">
        Search Universe
        <input
          type="search"
          value={query}
          onChange={searchFiles}
          placeholder="Search filenames in all folders"
          disabled={busy}
          autoFocus
        />
      </label>
      {loading && <p role="status">Loading Universe files…</p>}
      <div className="worldview-file-list" aria-busy={loading}>
        {!loading &&
          listing?.entries.map(
            /** Renders folders as navigation containers and files as selectable metadata rows. */ function renderEntry(
              entry,
            ) {
              if (entry.kind === "folder")
                return (
                  <button
                    type="button"
                    className="worldview-folder-row"
                    key={entry.relativePath}
                    data-path={entry.relativePath}
                    onClick={browseFolder}
                    disabled={busy}
                    aria-label={`Open folder ${entry.name}`}
                  >
                    ▸ {entry.name}
                    <small>Folder</small>
                  </button>
                );
              const exists = assigned.has(entry.relativePath);
              return (
                <label className="worldview-file-row" key={entry.relativePath}>
                  <input
                    type="checkbox"
                    value={entry.relativePath}
                    checked={exists || selected.has(entry.relativePath)}
                    onChange={toggleFile}
                    disabled={
                      busy ||
                      exists ||
                      (!selected.has(entry.relativePath) &&
                        selected.size >= 500)
                    }
                    aria-label={`Select ${entry.relativePath}`}
                  />
                  <span>
                    <strong>{entry.name}</strong>
                    <small>{entry.relativePath}</small>
                  </span>
                  <span>
                    {entry.extension || "No extension"}
                    <small>
                      {entry.sizeBytes === null || entry.sizeBytes === undefined
                        ? "Size unavailable"
                        : `${entry.sizeBytes.toLocaleString()} bytes`}
                    </small>
                  </span>
                  <small>{exists ? "Assigned" : "Not assigned"}</small>
                </label>
              );
            },
          )}
        {!loading && !listing?.entries.length && !error && (
          <p>No files or folders found.</p>
        )}
      </div>
      {!!listing?.issues.length && (
        <p role="status">
          {listing.issues.length} location(s) unavailable.{" "}
          <button type="button" onClick={retryListing}>
            Retry listing
          </button>
        </p>
      )}
      {error && (
        <p role="alert">
          {error}{" "}
          <button type="button" onClick={retryListing}>
            Retry listing
          </button>
        </p>
      )}
      <div className="worldview-dialog-actions">
        <span>{selected.size} file(s) selected</span>
        <button type="button" onClick={onClose} disabled={busy}>
          Cancel
        </button>
        <button
          type="button"
          onClick={confirmAssignment}
          disabled={busy || loading || !selected.size}
        >
          {busy ? "Assigning…" : "Confirm Assignment"}
        </button>
      </div>
    </dialog>
  );
}
