"use client";

import { useEffect, useState } from "react";
import { CsvTable, MarkdownContent } from "../../components/document-workspace";
import { PdfViewer } from "../../components/pdf-viewer";
import type {
  KnowledgeSourcePreview,
  WorldViewSource,
} from "../../types/worldview";
import { requireWorldViewBridge } from "./chip-session";
import { ExcelPreview } from "./excel-preview";
import { IndexedDocument } from "./indexed-document-view";

/** Resolves an applied source through the guarded preview API, rendering attributed document widgets and read-only original viewers. */
export function SourcePreview({
  entityId,
  vaultPath,
  sourceId,
  assigned,
}: Readonly<{
  entityId: string;
  vaultPath: string;
  sourceId: string;
  assigned?: WorldViewSource;
}>) {
  const [file, setFile] = useState<KnowledgeSourcePreview | null>(null);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);
  const [locating, setLocating] = useState(false);
  /** Loads only the selected reference, ignoring late results after source switching or unmount. */
  useEffect(
    function loadPreview() {
      let cancelled = false;
      setFile(null);
      setError("");
      if (assigned?.status === "available") {
        void requireWorldViewBridge()
          .request<KnowledgeSourcePreview>("knowledge-preview", {
            vaultPath,
            id: entityId,
            sourceId,
          })
          .then(
            function loaded(value) {
              if (!cancelled) setFile(value);
            },
            function failed(cause: unknown) {
              if (!cancelled)
                setError(
                  cause instanceof Error
                    ? cause.message
                    : "Source preview could not be loaded.",
                );
            },
          );
      }
      return () => {
        cancelled = true;
      };
    },
    [
      vaultPath,
      entityId,
      sourceId,
      assigned?.sourceRef,
      assigned?.status,
      assigned?.sizeBytes,
      retry,
    ],
  );

  /** Reveals an authorized original through the existing shell and surfaces any file availability failure. */
  async function locateOriginal(): Promise<void> {
    setLocating(true);
    try {
      await requireWorldViewBridge().request("knowledge-reveal", {
        vaultPath,
        id: entityId,
        sourceId,
      });
    } catch (cause) {
      setError(
        cause instanceof Error
          ? cause.message
          : "Original file could not be located.",
      );
    } finally {
      setLocating(false);
    }
  }

  if (!assigned)
    return (
      <p role="alert">
        Broken reference — {sourceId} was unassigned. Correct the index or
        assign the source again.
      </p>
    );
  if (assigned.status !== "available")
    return (
      <p role="alert">
        Original source is {assigned.status}: {sourceId}. Check its Universe
        location.
      </p>
    );
  return (
    <section
      className="knowledge-source-preview"
      aria-label="Read-only source preview"
    >
      <header>
        <div>
          <strong>{assigned.filename}</strong>
          <small>
            {assigned.extension || "No extension"} ·{" "}
            {file?.size ?? assigned.sizeBytes} bytes
          </small>
        </div>
      </header>
      {error && <p role="alert">{error} </p>}
      {!file && !error && <p role="status">Loading source preview…</p>}
      {file?.kind === "text" &&
        (file.extension === ".csv" ? (
          <CsvTable content={file.content} maxRows={2000} maxColumns={200} />
        ) : [".md", ".markdown"].includes(file.extension.toLowerCase()) ? (
          <IndexedDocument
            content={file.content}
            filename={assigned.filename}
            sourceRef={assigned.sourceRef}
          />
        ) : (
          <MarkdownContent content={file.content} />
        ))}
      {file?.kind === "pdf" && <PdfViewer file={file} />}
      {file?.kind === "excel" && (
        <ExcelPreview
          key={file.sourceHash}
          initial={file}
          entityId={entityId}
          vaultPath={vaultPath}
          sourceId={sourceId}
        />
      )}
      {file?.kind === "image" && (
        <img
          className="knowledge-source-image"
          src={file.dataUrl}
          alt={file.name}
          onError={() =>
            setError("Image preview could not be decoded. Use Locate Original.")
          }
        />
      )}
      {file?.kind === "unsupported" && (
        <p>
          Preview is unavailable for this file type. Use Locate Original to
          access the source.
        </p>
      )}
      <footer className="knowledge-utilities" aria-label="Source utilities">
        <button
          type="button"
          onClick={() => void locateOriginal()}
          disabled={locating}
        >
          Locate Original
        </button>
        {error && (
          <button type="button" onClick={() => setRetry(retry + 1)}>
            Retry Preview
          </button>
        )}
      </footer>
    </section>
  );
}
