"use client";

import { useEffect, useState, type CSSProperties } from "react";
import type {
  VaultEntry,
  VaultSearchResult,
  VaultSnapshot,
} from "../types/electron";

export function KnowledgeSidebar({
  snapshot,
  isScanning,
  error,
  selectedIds,
  pdfSearchResults,
  isSearchingPdf,
  onSearchPdf,
  query,
  onQueryChange,
  onRescan,
  onChangeVault,
  onSelect,
  onOpen,
  onOpenSearchResult,
}: Readonly<{
  snapshot: VaultSnapshot | null;
  isScanning: boolean;
  error: string | null;
  selectedIds: ReadonlySet<string>;
  pdfSearchResults: VaultSearchResult[];
  isSearchingPdf: boolean;
  onSearchPdf: (query: string) => void;
  onQueryChange: (query: string) => void;
  query: string;
  onRescan: () => void;
  onChangeVault: () => void;
  onSelect: (entry: VaultEntry, additive: boolean) => void;
  onOpen: (entry: VaultEntry) => void;
  onOpenSearchResult: (relativePath: string) => void;
}>) {
  const [collapsed, setCollapsed] = useState<ReadonlySet<string>>(new Set());
  const ready = snapshot?.status === "ready";
  const vaultName = snapshot?.rootPath.split(/[\\/]/).filter(Boolean).pop();
  const filteredEntries = ready
    ? filterEntries(readableEntries(snapshot.entries), query)
    : [];

  useEffect(() => {
    if (!ready || !query.trim()) {
      onSearchPdf("");
      return;
    }
    const timer = window.setTimeout(() => onSearchPdf(query), 220);
    return () => window.clearTimeout(timer);
  }, [query, ready, onSearchPdf]);

  const toggleFolder = (relativePath: string) =>
    setCollapsed((current) => {
      const next = new Set(current);
      if (next.has(relativePath)) next.delete(relativePath);
      else next.add(relativePath);
      return next;
    });

  return (
    <aside className="knowledge-sidebar">
      <div className="pane-heading">
        <span>Universe</span>
        <button
          className="refresh-button"
          onClick={onRescan}
          disabled={isScanning}
          aria-label="Rescan Universe"
          title="Rescan Universe"
        >
          ↻
        </button>
      </div>
      <label className="search-box">
        <span aria-hidden="true">⌕</span>
        <input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search Universe…"
          aria-label="Search Universe"
          disabled={!ready}
        />
      </label>
      <div
        className="vault-title"
        title={snapshot?.rootPath ?? "Choose a Universe"}
      >
        {vaultName ?? "Choose a Universe"}
      </div>
      <button className="vault-change" onClick={onChangeVault}>
        Change Universe
      </button>
      <div className="tree">
        {isScanning ? (
          <SidebarMessage
            title="Scanning vault…"
            detail="Indexing Markdown, CSV, and PDF files."
          />
        ) : null}
        {!isScanning && error ? (
          <SidebarMessage title="Vault error" detail={error} />
        ) : null}
        {!isScanning && !error && !ready ? (
          <SidebarMessage
            title="Vault unavailable"
            detail={snapshot?.message ?? "No active vault is available."}
          />
        ) : null}
        {!isScanning && ready && snapshot.entries.length === 0 ? (
          <SidebarMessage
            title="No supported files"
            detail="Add .md, .markdown, .csv, .pdf, .png, .jpg or .jpeg files, then rescan."
          />
        ) : null}
        {!isScanning && ready && query.trim() ? (
          <PdfSearchResults
            results={pdfSearchResults}
            isSearching={isSearchingPdf}
            onOpen={onOpenSearchResult}
          />
        ) : null}
        {!isScanning &&
        ready &&
        snapshot.entries.length > 0 &&
        filteredEntries.length === 0 ? (
          <SidebarMessage
            title="No matching file paths"
            detail={`Nothing in this vault matches “${query}”.`}
          />
        ) : null}
        {!isScanning && ready && filteredEntries.length > 0 ? (
          <VaultTree
            entries={filteredEntries}
            selectedIds={selectedIds}
            collapsed={collapsed}
            onToggle={toggleFolder}
            onSelect={onSelect}
            onOpen={onOpen}
          />
        ) : null}
        {!isScanning && ready && snapshot.issues.length > 0 ? (
          <SidebarMessage
            title="Scan completed with warnings"
            detail={snapshot.issues
              .map((item) => `${item.relativePath}: ${item.message}`)
              .join(" ")}
          />
        ) : null}
      </div>
      <div className="sidebar-footer">
        {isScanning ? "Scanning…" : `${snapshot?.totalFiles ?? 0} files`}{" "}
        <span>{ready ? "Ready" : "Offline"}</span>
      </div>
    </aside>
  );
}

function PdfSearchResults({
  results,
  isSearching,
  onOpen,
}: Readonly<{
  results: VaultSearchResult[];
  isSearching: boolean;
  onOpen: (relativePath: string) => void;
}>) {
  if (isSearching)
    return <div className="pdf-search-status">Searching PDF text…</div>;
  if (results.length === 0) return null;
  return (
    <section className="pdf-search-results">
      <h2>PDF CONTENT MATCHES</h2>
      {results.map((result) => (
        <button
          key={result.relativePath}
          className="pdf-search-result"
          onClick={() => onOpen(result.relativePath)}
        >
          <span>
            <b>{result.name}</b>
            <small>
              {result.matchCount} match{result.matchCount === 1 ? "" : "es"}
            </small>
          </span>
          <em>{result.excerpt}</em>
        </button>
      ))}
    </section>
  );
}

function filterEntries(entries: VaultEntry[], query: string): VaultEntry[] {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  if (!normalizedQuery) return entries;
  return entries.flatMap((entry) => {
    const children =
      entry.kind === "folder"
        ? filterEntries(entry.children ?? [], normalizedQuery)
        : undefined;
    const matches =
      entry.name.toLocaleLowerCase().includes(normalizedQuery) ||
      entry.relativePath.toLocaleLowerCase().includes(normalizedQuery);
    if (!matches && (!children || children.length === 0)) return [];
    return [{ ...entry, children }];
  });
}

function readableEntries(entries: VaultEntry[]): VaultEntry[] {
  return entries.flatMap((entry) => {
    if (entry.kind === "file") return entry.readable === false ? [] : [entry];
    return [{ ...entry, children: readableEntries(entry.children ?? []) }];
  });
}

function fileFormatLabel(extension: VaultEntry["extension"]): string {
  if ([".png", ".jpg", ".jpeg"].includes(extension ?? ""))
    return extension!.slice(1).toUpperCase();
  if (extension === ".csv") return "CSV";
  if (extension === ".pdf") return "PDF";
  return "MD";
}

function VaultTree({
  entries,
  depth = 0,
  selectedIds,
  collapsed,
  onToggle,
  onSelect,
  onOpen,
}: Readonly<{
  entries: VaultEntry[];
  depth?: number;
  selectedIds: ReadonlySet<string>;
  collapsed: ReadonlySet<string>;
  onToggle: (relativePath: string) => void;
  onSelect: (entry: VaultEntry, additive: boolean) => void;
  onOpen: (entry: VaultEntry) => void;
}>) {
  return (
    <>
      {entries.map((entry) =>
        entry.kind === "folder" ? (
          <section key={entry.relativePath} className="tree-section">
            <div
              className={`tree-folder${selectedIds.has(entry.relativePath) ? " active" : ""}`}
              style={{ paddingLeft: 8 + depth * 13 }}
            >
              <button
                className="tree-twist"
                aria-label={`Toggle ${entry.name}`}
                aria-expanded={!collapsed.has(entry.relativePath)}
                onClick={() => onToggle(entry.relativePath)}
              >
                {collapsed.has(entry.relativePath) ? "▸" : "▾"}
              </button>
              <button
                className="tree-folder-name"
                title={entry.relativePath}
                onClick={(event) =>
                  onSelect(entry, event.ctrlKey || event.metaKey)
                }
                onDoubleClick={() => onToggle(entry.relativePath)}
              >
                <span className="folder">▰</span> {entry.name}
              </button>
            </div>
            {!collapsed.has(entry.relativePath) ? (
              <div
                className="tree-children"
                style={
                  {
                    "--tree-guide-offset": `${19 + depth * 13}px`,
                  } as CSSProperties
                }
              >
                <VaultTree
                  entries={entry.children ?? []}
                  depth={depth + 1}
                  selectedIds={selectedIds}
                  collapsed={collapsed}
                  onToggle={onToggle}
                  onSelect={onSelect}
                  onOpen={onOpen}
                />
              </div>
            ) : null}
          </section>
        ) : (
          <button
            key={entry.relativePath}
            className={`file-row${selectedIds.has(entry.relativePath) ? " active" : ""}`}
            style={{ paddingLeft: 18 + depth * 13 }}
            title={entry.relativePath}
            onClick={(event) => onSelect(entry, event.ctrlKey || event.metaKey)}
            onDoubleClick={() => onOpen(entry)}
          >
            <span className="file-icon">
              {entry.extension === ".csv"
                ? "▦"
                : entry.extension === ".pdf"
                  ? "▤"
                  : "□"}
            </span>
            <span className="file-name">{entry.name}</span>
            <small
              className={`ticker ${entry.extension === ".csv" ? "cyan" : entry.extension === ".pdf" ? "red" : "amber"}`}
            >
              {fileFormatLabel(entry.extension)}
            </small>
          </button>
        ),
      )}
    </>
  );
}

function SidebarMessage({
  title,
  detail,
}: Readonly<{ title: string; detail: string }>) {
  return (
    <div className="sidebar-message">
      <b>{title}</b>
      <p>{detail}</p>
    </div>
  );
}
