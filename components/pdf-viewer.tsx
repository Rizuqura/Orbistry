"use client";

import { useEffect, useRef, useState } from "react";
import type { VaultPdfFile } from "../types/electron";

type PdfDocument = import("pdfjs-dist").PDFDocumentProxy;

export function PdfViewer({ file }: Readonly<{ file: VaultPdfFile }>) {
  const [document, setDocument] = useState<PdfDocument | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.2);
  const [status, setStatus] = useState("Loading PDF…");
  const [error, setError] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textLayerRef = useRef<HTMLDivElement>(null);
  const renderQueueRef = useRef<Promise<unknown>>(Promise.resolve());

  useEffect(() => {
    let cancelled = false;
    let loadedDocument: PdfDocument | null = null;
    let loadingTask: { destroy: () => Promise<void> } | null = null;
    setDocument(null);
    setPageNumber(1);
    setError(null);
    setStatus("Loading PDF…");
    void (async () => {
      try {
        const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
        pdfjs.GlobalWorkerOptions.workerSrc = new URL(
          "pdf.worker.min.mjs",
          window.location.href,
        ).toString();
        const assetUrl = (directory: string) =>
          new URL(`pdfjs/${directory}/`, window.location.href).toString();
        const task = pdfjs.getDocument({
          data: file.data.slice(),
          cMapUrl: assetUrl("cmaps"),
          cMapPacked: true,
          standardFontDataUrl: assetUrl("standard_fonts"),
          wasmUrl: assetUrl("wasm"),
          // The main-thread loader also handles packaged file:// asset URLs.
          useWorkerFetch: false,
        });
        loadingTask = task;
        const loaded = await task.promise;
        loadedDocument = loaded;
        if (cancelled) {
          await loaded.cleanup();
          return;
        }
        setDocument(loaded);
        setStatus(`${loaded.numPages} pages`);
      } catch (loadError) {
        if (!cancelled) setError(pdfErrorMessage(loadError, "load this PDF"));
      }
    })();
    return () => {
      cancelled = true;
      if (loadedDocument) void loadedDocument.cleanup();
      if (loadingTask) void loadingTask.destroy();
    };
  }, [file]);

  useEffect(() => {
    if (!document || !canvasRef.current || !textLayerRef.current) return;
    let cancelled = false;
    let renderTask: { cancel: () => void; promise: Promise<unknown> } | null =
      null;
    const canvas = canvasRef.current;
    const textLayer = textLayerRef.current;
    setStatus(`Rendering page ${pageNumber}…`);
    const renderWork = renderQueueRef.current
      .catch(() => undefined)
      .then(async () => {
        try {
          if (cancelled) return;
          const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
          const page = await document.getPage(pageNumber);
          const viewport = page.getViewport({ scale });
          const outputScale = Math.min(window.devicePixelRatio || 1, 2);
          canvas.width = Math.floor(viewport.width * outputScale);
          canvas.height = Math.floor(viewport.height * outputScale);
          canvas.style.width = `${Math.floor(viewport.width)}px`;
          canvas.style.height = `${Math.floor(viewport.height)}px`;
          textLayer.replaceChildren();
          textLayer.style.width = `${Math.floor(viewport.width)}px`;
          textLayer.style.height = `${Math.floor(viewport.height)}px`;
          renderTask = page.render({
            canvas,
            viewport,
            transform:
              outputScale === 1
                ? undefined
                : [outputScale, 0, 0, outputScale, 0, 0],
          });
          await renderTask.promise;
          if (cancelled) return;
          const textContent = await page.getTextContent();
          const layer = new pdfjs.TextLayer({
            textContentSource: textContent,
            container: textLayer,
            viewport,
          });
          await layer.render();
          if (!cancelled)
            setStatus(`Page ${pageNumber} of ${document.numPages}`);
          page.cleanup();
        } catch (renderError) {
          if (
            !cancelled &&
            !(
              renderError instanceof Error &&
              renderError.name === "RenderingCancelledException"
            )
          )
            setError(pdfErrorMessage(renderError, "render this page"));
        }
      });
    renderQueueRef.current = renderWork;
    return () => {
      cancelled = true;
      renderTask?.cancel();
    };
  }, [document, pageNumber, scale]);

  if (error)
    return (
      <div className="pdf-error">
        <b>PDF unavailable</b>
        <p>{error}</p>
      </div>
    );
  return (
    <section className="pdf-reader">
      <div className="pdf-toolbar">
        <button
          onClick={() => setPageNumber((current) => Math.max(1, current - 1))}
          disabled={!document || pageNumber === 1}
        >
          ‹
        </button>
        <span>
          {document ? `PAGE ${pageNumber} / ${document.numPages}` : "PAGE —"}
        </span>
        <button
          onClick={() =>
            setPageNumber((current) =>
              Math.min(document?.numPages ?? current, current + 1),
            )
          }
          disabled={!document || pageNumber === document.numPages}
        >
          ›
        </button>
        <span className="pdf-toolbar-spacer" />
        <button
          onClick={() =>
            setScale((current) =>
              Math.max(0.7, Number((current - 0.1).toFixed(1))),
            )
          }
          disabled={scale <= 0.7}
        >
          −
        </button>
        <span>{Math.round(scale * 100)}%</span>
        <button
          onClick={() =>
            setScale((current) =>
              Math.min(2.2, Number((current + 0.1).toFixed(1))),
            )
          }
          disabled={scale >= 2.2}
        >
          +
        </button>
      </div>
      <p className="pdf-status">{status}</p>
      <div className="pdf-page-scroll">
        <div className="pdf-page">
          <canvas ref={canvasRef} />
          <div ref={textLayerRef} className="pdf-text-layer" />
        </div>
      </div>
    </section>
  );
}

function pdfErrorMessage(error: unknown, action: string): string {
  const detail =
    error instanceof Error && error.message ? ` ${error.message}` : "";
  return `Orbistry could not ${action}.${detail}`;
}
