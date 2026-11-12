import { PdfViewer } from "./pdf-viewer";
import type { VaultFile, VaultPdfFile } from "../types/electron";

export function DocumentWorkspace({
  file,
  error,
  onClose,
  markdownDraft = null,
  markdownSaving,
  markdownError,
  onEditMarkdown,
  onMarkdownChange,
  onSaveMarkdown,
  onCancelMarkdown,
}: Readonly<{
  file: VaultFile | VaultPdfFile | null;
  error?: string | null;
  onClose?: () => void;
  markdownDraft?: string | null;
  markdownSaving?: boolean;
  markdownError?: string | null;
  onEditMarkdown?: () => void;
  onMarkdownChange?: (content: string) => void;
  onSaveMarkdown?: () => void;
  onCancelMarkdown?: () => void;
}>) {
  if (error)
    return (
      <section className="document-pane">
        <div className="tab-strip">
          <button className="active-tab">Could not open file</button>
        </div>
        <article className="document-scroll">
          <div className="document-inner">
            <div className="workspace-error">
              <b>File unavailable</b>
              <p>{error}</p>
            </div>
          </div>
        </article>
      </section>
    );
  if (!file)
    return (
      <section className="document-pane">
        <div className="tab-strip">
          <button className="active-tab">No document open</button>
        </div>
        <article className="document-scroll">
          <div className="document-inner">
            <header className="document-header">
              <h1>
                Select a file<span> — from your Universe</span>
              </h1>
              <p>
                Open a <b>.md</b>, <b>.csv</b>, <b>.pdf</b>, <b>.png</b> or{" "}
                <b>.jpg/.jpeg</b> file from the left sidebar to read it here.
              </p>
            </header>
          </div>
        </article>
      </section>
    );

  const segments = file.relativePath.split(/[\\/]+/);
  if ("image" in file && file.image)
    return (
      <section className="document-pane document-pane-image">
        <div className="tab-strip">
          <button className="active-tab" title={file.relativePath}>
            {file.name}
          </button>
          <button
            className="tab-close"
            aria-label="Close document"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <article className="document-scroll">
          <div className="document-inner">
            <img
              src={file.image.dataUrl}
              alt={file.name}
              style={{
                maxWidth: "100%",
                height: "auto",
                display: "block",
                background: "#fff",
              }}
            />
            <details className="image-ocr-text">
              <summary>
                Extracted image text
                {file.image.language ? ` · ${file.image.language}` : ""}
              </summary>
              <pre style={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}>
                {file.content || "No text detected."}
              </pre>
            </details>
          </div>
        </article>
      </section>
    );
  const isPdf = "data" in file;
  if (isPdf)
    return (
      <section className="document-pane document-pane-pdf">
        <div className="tab-strip">
          <button className="active-tab" title={file.relativePath}>
            {file.name}
          </button>
          <button
            className="tab-close"
            aria-label="Close document"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <PdfViewer file={file} />
      </section>
    );
  const isMarkdown = file.extension === ".md" || file.extension === ".markdown";
  const editing = isMarkdown && markdownDraft !== null;
  const dirty =
    editing && markdownDraft !== file.content.replace(/\r\n/g, "\n");
  return (
    <section className="document-pane">
      <div className="tab-strip">
        <button className="active-tab">
          {file.name}
          {dirty ? " *" : ""}
        </button>
        <button
          className="tab-close"
          aria-label="Close document"
          disabled={markdownSaving}
          onClick={onClose}
        >
          ×
        </button>
      </div>
      {isMarkdown && (
        <div className="document-context-toolbar">
          {isMarkdown && (
            <div className="markdown-editor-actions">
              {editing ? (
                <>
                  <button
                    onClick={onSaveMarkdown}
                    disabled={markdownSaving || !dirty}
                  >
                    {markdownSaving ? "Saving..." : "Save"}
                  </button>
                  <button onClick={onCancelMarkdown} disabled={markdownSaving}>
                    Cancel
                  </button>
                  <span role="status">
                    {markdownSaving
                      ? "Saving to vault"
                      : dirty
                        ? "Unsaved changes"
                        : "No changes"}
                  </span>
                </>
              ) : (
                <button onClick={onEditMarkdown}>Edit Markdown</button>
              )}
            </div>
          )}
          {markdownError && <p role="alert">{markdownError}</p>}
        </div>
      )}
      <article className="document-scroll">
        <div className="document-inner">
          <div className="breadcrumb">
            {segments.slice(0, -1).join(" / ")}
            {segments.length > 1 ? " / " : ""}
            <b>{file.name}</b>
            <span className="reading-pill">
              {editing ? "EDITING" : "READING"}
            </span>
          </div>
          <header className="document-header">
            <h1>
              {stripExtension(file.name)}
              <span>
                {" "}
                — {file.extension === ".csv" ? "Dataset" : "Markdown note"}
              </span>
            </h1>
            <p>
              <b>{file.extension.toUpperCase()}</b> · {file.relativePath}
            </p>
          </header>
          {editing ? (
            <div className="document-section">
              <label
                className="markdown-editor-label"
                htmlFor="markdown-editor"
              >
                Markdown source
              </label>
              <textarea
                id="markdown-editor"
                className="markdown-editor"
                aria-label="Markdown source"
                autoFocus
                spellCheck={false}
                disabled={markdownSaving}
                value={markdownDraft}
                onChange={(event) => onMarkdownChange?.(event.target.value)}
                onKeyDown={(event) => {
                  if (
                    (event.ctrlKey || event.metaKey) &&
                    event.key.toLowerCase() === "s"
                  ) {
                    event.preventDefault();
                    if (dirty && !markdownSaving) onSaveMarkdown?.();
                  }
                }}
              />
              <p>
                Save to update this vault file. Ctrl+S / Cmd+S saves your
                changes.
              </p>
            </div>
          ) : file.extension === ".csv" ? (
            <CsvTable content={file.content} />
          ) : (
            <MarkdownContent content={file.content} />
          )}
        </div>
      </article>
    </section>
  );
}

function stripExtension(name: string): string {
  return name.replace(/\.(md|markdown|csv|pdf)$/i, "");
}

function MarkdownContent({ content }: Readonly<{ content: string }>) {
  return (
    <div className="document-section">
      <pre className="markdown-raw">{content}</pre>
    </div>
  );
}

function CsvTable({ content }: Readonly<{ content: string }>) {
  const lines = content
    .trim()
    .split(/\r?\n/)
    .filter((line) => line.length > 0);
  if (lines.length === 0)
    return (
      <div className="document-section">
        <p>This CSV file is empty.</p>
      </div>
    );
  const parseLine = (line: string): string[] => {
    const cells: string[] = [];
    let current = "";
    let quoted = false;
    for (let index = 0; index < line.length; index += 1) {
      const character = line[index];
      if (character === '"') {
        if (quoted && line[index + 1] === '"') {
          current += '"';
          index += 1;
        } else quoted = !quoted;
      } else if (character === "," && !quoted) {
        cells.push(current);
        current = "";
      } else current += character;
    }
    cells.push(current);
    return cells.map((cell) => cell.trim());
  };
  const headers = parseLine(lines[0]);
  const rows = lines.slice(1).map(parseLine);
  return (
    <div className="document-section">
      <table className="metrics">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((_, cellIndex) => (
                <td
                  key={cellIndex}
                  className={cellIndex === 0 ? "metric-strong" : ""}
                >
                  {row[cellIndex] ?? ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ marginTop: 10 }}>
        {rows.length} rows · {headers.length} columns
      </p>
    </div>
  );
}
