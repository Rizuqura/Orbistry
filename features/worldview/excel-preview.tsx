"use client";

import { useEffect, useRef, useState } from "react";
import type { ExcelSourcePreview } from "../../types/worldview";
import { requireWorldViewBridge } from "./chip-session";

/** Presents coordinate-faithful final text inside the existing Knowledge Card, loading pages and exports through the authorized desktop bridge. */
export function ExcelPreview({
  initial,
  entityId,
  vaultPath,
  sourceId,
}: Readonly<{
  initial: ExcelSourcePreview;
  entityId: string;
  vaultPath: string;
  sourceId: string;
}>) {
  const [preview, setPreview] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const generation = useRef(0);
  /** Ignores late page/export responses after switching sources, sections or closing the floating card. */
  useEffect(function guardUnmount() {
    return () => {
      generation.current++;
    };
  }, []);
  const sheet = preview.sheets.find(
    (item) => item.index === preview.sheetIndex,
  )!;
  const page = preview.page;

  /** Loads one bounded source-coordinate page; overlapping requests cannot replace the latest selected worksheet. */
  async function navigate(
    sheetIndex: number,
    rowOffset = 0,
    columnOffset = 0,
  ): Promise<void> {
    const ticket = ++generation.current;
    setLoading(true);
    setError("");
    setNotice("");
    try {
      const next = await requireWorldViewBridge().request<ExcelSourcePreview>(
        "knowledge-excel",
        {
          vaultPath,
          id: entityId,
          sourceId,
          sourceHash: initial.sourceHash,
          sheetIndex,
          rowOffset,
          columnOffset,
        },
      );
      if (ticket === generation.current) setPreview(next);
    } catch (cause) {
      if (ticket === generation.current)
        setError(
          cause instanceof Error
            ? cause.message
            : "Worksheet could not be loaded.",
        );
    } finally {
      if (ticket === generation.current) setLoading(false);
    }
  }

  /** Copies a freshly authorized current-sheet preview through the narrow native clipboard operation; failures remain visible. */
  async function copyMarkdown(): Promise<void> {
    const ticket = generation.current;
    setExporting(true);
    setError("");
    setNotice("");
    try {
      await requireWorldViewBridge().request("knowledge-excel-copy", {
        vaultPath,
        id: entityId,
        sourceId,
        sourceHash: initial.sourceHash,
        sheetIndex: sheet.index,
        rowOffset: page.rowOffset,
        columnOffset: page.columnOffset,
      });
      if (ticket === generation.current)
        setNotice("Worksheet preview Markdown copied.");
    } catch (cause) {
      if (ticket === generation.current)
        setError(
          cause instanceof Error ? cause.message : "Clipboard access failed.",
        );
    } finally {
      if (ticket === generation.current) setExporting(false);
    }
  }

  /** Downloads a full derived export without writing to the Universe source; huge Markdown ranges reject with a structured-JSON alternative. */
  async function download(format: "markdown" | "structured"): Promise<void> {
    const ticket = generation.current;
    setExporting(true);
    setError("");
    setNotice("");
    try {
      const result = await requireWorldViewBridge().request<{
        content: string;
        filename: string;
        mime: string;
      }>("knowledge-excel", {
        vaultPath,
        id: entityId,
        sourceId,
        sourceHash: initial.sourceHash,
        format,
      });
      if (ticket !== generation.current) return;
      const url = URL.createObjectURL(
        new Blob([result.content], { type: `${result.mime};charset=utf-8` }),
      );
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = result.filename;
      anchor.click();
      setTimeout(function releaseDownload() {
        URL.revokeObjectURL(url);
      }, 1000);
      setNotice("Workbook export prepared.");
    } catch (cause) {
      if (ticket === generation.current)
        setError(
          cause instanceof Error ? cause.message : "Workbook export failed.",
        );
    } finally {
      if (ticket === generation.current) setExporting(false);
    }
  }

  return (
    <section
      className="excel-preview"
      aria-label="Excel workbook preview"
      aria-busy={loading}
    >
      <div
        className="excel-tabs"
        role="tablist"
        aria-label="Workbook worksheets"
      >
        {preview.sheets.map((item) => (
          <button
            type="button"
            role="tab"
            key={item.index}
            aria-selected={item.index === preview.sheetIndex}
            disabled={loading || exporting}
            onClick={() => void navigate(item.index)}
          >
            {item.index + 1}. {item.name}
            {item.state !== "visible" ? ` (${item.state})` : ""}
          </button>
        ))}
      </div>
      <div role="tabpanel" aria-label={`Worksheet ${sheet.name}`}>
        <p>
          Sheet {sheet.index + 1}: <strong>{sheet.name}</strong> · Source Range:{" "}
          {sheet.range ?? "(empty)"}
        </p>
        {error && <p role="alert">{error}</p>}
        {notice && <p role="status">{notice}</p>}
        {loading && <p role="status">Loading worksheet…</p>}
        {page.truncated && (
          <p className="excel-truncated">
            Truncated preview · showing original rows {page.rows[0]?.number}–
            {page.rows.at(-1)?.number}, columns {page.columns[0]}–
            {page.columns.at(-1)}. Full results JSON remains available.
          </p>
        )}
        {page.rows.length ? (
          <div
            className="excel-table-scroll"
            tabIndex={0}
            aria-label="Worksheet cells"
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Row</th>
                  {page.columns.map((label) => (
                    <th scope="col" key={label}>
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {page.rows.map((row) => (
                  <tr key={row.number}>
                    <th scope="row">{row.number}</th>
                    {row.cells.map((cell) => (
                      <td
                        key={cell.coordinate}
                        className={cell.isNumeric ? "excel-number" : undefined}
                        title={`${cell.coordinate} · ${cell.text || "empty"}`}
                      >
                        {cell.text}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>Empty worksheet.</p>
        )}
        <div className="excel-controls" aria-label="Worksheet page controls">
          <button
            type="button"
            disabled={loading || exporting || !page.rowOffset}
            onClick={() =>
              void navigate(
                sheet.index,
                Math.max(0, page.rowOffset - 100),
                page.columnOffset,
              )
            }
          >
            Previous rows
          </button>
          <button
            type="button"
            disabled={
              loading ||
              exporting ||
              page.rowOffset + page.rows.length >= page.totalRows
            }
            onClick={() =>
              void navigate(
                sheet.index,
                page.rowOffset + 100,
                page.columnOffset,
              )
            }
          >
            Next rows
          </button>
          <button
            type="button"
            disabled={loading || exporting || !page.columnOffset}
            onClick={() =>
              void navigate(
                sheet.index,
                page.rowOffset,
                Math.max(0, page.columnOffset - 20),
              )
            }
          >
            Previous columns
          </button>
          <button
            type="button"
            disabled={
              loading ||
              exporting ||
              page.columnOffset + page.columns.length >= page.totalColumns
            }
            onClick={() =>
              void navigate(sheet.index, page.rowOffset, page.columnOffset + 20)
            }
          >
            Next columns
          </button>
        </div>
        {sheet.merges.length > 0 && (
          <p>
            Merged ranges: {sheet.merges.join(", ")}. Values remain in their
            stored source cells.
          </p>
        )}
        <footer
          className="excel-controls knowledge-utilities"
          aria-label="Workbook utilities"
        >
          <button
            type="button"
            disabled={loading || exporting}
            onClick={() => void copyMarkdown()}
          >
            Copy preview Markdown
          </button>
          <button
            type="button"
            disabled={loading || exporting}
            onClick={() => void download("markdown")}
          >
            Export workbook Markdown
          </button>
          <button
            type="button"
            disabled={loading || exporting}
            onClick={() => void download("structured")}
          >
            Export results JSON
          </button>
        </footer>
        <details>
          <summary>See worksheet Markdown</summary>
          <pre>{preview.markdown}</pre>
        </details>
        <details>
          <summary>Reading notes</summary>
          <ul>
            {[...preview.warnings, ...sheet.warnings].map((warning) => (
              <li key={warning}>{warning}</li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}
