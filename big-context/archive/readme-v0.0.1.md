# Orbistry — Amadeus V0.0.1

Orbistry is a local-first desktop research workspace for navigating a user-owned knowledge vault. The current prototype scans local Markdown, CSV, and PDF files, then exposes the same vault through a file Explorer, a spatial Planet View, and a document reader.

The product principle is simple:

> AI models should be replaceable. Knowledge should be permanent.

V0.0.1 establishes the local knowledge infrastructure first. The chat interface is currently visual only: no model, network, or vault content is used by chat yet.

## Project flow at a glance

```text
User chooses a local vault
          |
          v
Electron validates and recursively scans the folder
          |
          +--> Markdown / CSV metadata
          +--> PDF metadata + session-memory text extraction
          |
          v
Typed vault snapshot crosses the isolated preload bridge
          |
          v
React stores one shared application state
          |
          +--> Explorer tree and search
          +--> Planet graph and deterministic layout
          +--> Document workspace and PDF viewer
          +--> Status and details panels
```

Both navigation modes operate on the same snapshot and selection state. Selecting a folder can focus its Planet branch; opening a supported file switches to the document workspace and asks Electron for its contents.

## User workflow

1. Start Orbistry. The session opens `C:\bank` by default, or the path supplied through `ORBISTRY_VAULT_PATH`.
2. Select **Change Vault** to choose another local folder for the current session.
3. Electron scans the folder recursively and returns a vault snapshot containing its hierarchy, file metadata, totals, warnings, and scan time.
4. Browse the snapshot in either view:
   - **Explorer** provides folders, path filtering, PDF content matches, and file opening.
   - **Planet View** converts the hierarchy into a deterministic spatial graph with zoom, pan, focus, minimap, shared selection, and multi-select.
5. Double-click a supported file to read it:
   - Markdown is displayed as readable raw text.
   - CSV is parsed into a basic table with row and column counts.
   - PDF is rendered locally one page at a time with zoom, navigation, and a selectable text layer.
6. Select **Rescan** after files are added, removed, or changed. The refreshed snapshot resets stale selection and document state.

The selected vault is not persisted. A new application session returns to the default or environment-configured path.

## Software engine flow

### 1. Desktop startup

In development, `npm run dev` prepares the local PDF.js worker and runs two processes:

```text
Next.js development server (http://localhost:3000)
                      +
Electron launcher waits for port 3000, then opens the desktop window
```

In a production build, Next.js exports the interface to `out/`. Electron loads `out/index.html` directly with `file://`; no application web server is required.

### 2. Vault discovery and indexing

The Electron main process owns the active vault path and delegates vault operations to `electron/vault-service.cjs`.

```text
scanVault(root)
  -> validate that root exists and is a directory
  -> recursively enumerate entries in stable name order
  -> skip symlinks, .git, and node_modules
  -> mark unsupported files as unreadable
  -> extract text and page counts from eligible PDFs
  -> remove stale PDF index records
  -> return a typed VaultSnapshot
```

Supported extensions are `.md`, `.markdown`, `.csv`, and `.pdf`. PDF text is cached only in process memory and reused while file size and modification time remain unchanged. PDFs larger than 100 MB are not previewed or indexed. Image-only PDFs can be displayed, but without OCR they do not produce searchable content.

### 3. Secure process boundary

The renderer has no direct Node.js or filesystem access. Electron runs with context isolation enabled, Node integration disabled, and Chromium sandboxing enabled.

The preload script exposes only these operations through `window.orbistryDesktop.vault`:

| Operation | Purpose |
| --- | --- |
| `getSnapshot()` / `rescan()` | Scan and return the active vault hierarchy |
| `selectFolder()` | Open the native folder picker and scan the chosen vault |
| `read(relativePath)` | Read an allowed Markdown or CSV file |
| `readPdf(relativePath)` | Read a bounded PDF as bytes for local rendering |
| `search(query)` | Search the in-memory PDF text index |

Every file read is resolved again inside the active vault. Absolute paths, path traversal, unsupported extensions, missing files, directories, and oversized PDFs are rejected by the main process.

### 4. Renderer state and views

`AppShell` is the client-side coordinator. It loads a snapshot through the bridge and owns shared state for the active view, selected entries, focused Planet branch, opened document, search results, scan status, and errors.

```text
VaultSnapshot
    |
    +--> KnowledgeSidebar: tree, filename/path filter, PDF search results
    |
    +--> buildGraphFromVault(): folders/files become nodes and hierarchy edges
            |
            +--> computeLayout(): stable radial sectors and depth rings
            +--> PlanetScene / minimap / details
    |
    +--> DocumentWorkspace: Markdown, CSV, or PDF presentation
```

The graph is derived in memory from the current snapshot; it is not a separate database. Layout uses stable hierarchy sectors, depth rings, and deterministic placement, so rescanning the same structure produces a predictable map.

### 5. File opening and search

```text
User opens file
  -> AppShell sends only its relative path through IPC
  -> Electron validates the path and extension
  -> text content or PDF bytes return to the renderer
  -> DocumentWorkspace chooses the matching reader
```

Explorer search has two coordinated paths:

- Markdown, CSV, PDF, and folder names/paths are filtered immediately in the renderer.
- The same query is debounced and sent to Electron to search extracted PDF text held in session memory.

No indexed text is written to disk, uploaded, or sent to a model.

## Technology stack and responsibility flow

| Layer | Technology | Responsibility |
| --- | --- | --- |
| Desktop runtime | Electron 37 | Window lifecycle, native folder picker, IPC, filesystem boundary, production loading |
| Secure bridge | Electron preload + `contextBridge` | Narrow typed API between the isolated renderer and main process |
| Application framework | Next.js 16 App Router, static export | Builds the UI into self-contained static assets for Electron |
| Interface and state | React 19 + TypeScript 5 | Shared state, interaction, Explorer, workspace, and Planet views |
| Styling | Tailwind CSS 4 + project CSS | Visual tokens and desktop layout |
| PDF engine | Mozilla PDF.js 6 | Main-process text extraction and renderer-side page/text-layer rendering |
| Knowledge visualization | Project TypeScript modules | Snapshot-to-graph conversion and deterministic Planet layout |
| Packaging | electron-builder | Windows NSIS installer containing `out/`, Electron code, and package metadata |
| Development tooling | npm, concurrently, wait-on, cross-env | Coordinates the web server and desktop process |
| Tests | Node.js built-in test runner | Vault scanning, boundaries, PDF handling, and search behavior |

The dependency direction is intentionally one-way:

```text
React components -> typed preload API -> Electron IPC -> vault service -> local filesystem
```

Filesystem and PDF-indexing logic never moves into the renderer. This preserves the security boundary and leaves a clear place for future engine capabilities.

## Repository map

```text
app/          Next.js App Router entry, root layout, and global styling
components/   Interactive application shell and UI surfaces
electron/     Desktop main process, preload bridge, vault engine, and tests
lib/          Vault-to-graph conversion and deterministic Planet layout
types/        Shared Electron bridge and graph contracts
scripts/      Build preparation, including the local PDF.js worker
public/       Static assets copied into the Next.js export
big-context/  Product goals, engineering context, and milestone documents
```

`big-context/` documents the product; it is not a user vault and is not automatically scanned by Orbistry.

## Development workflow

Install dependencies:

```bash
npm install
```

Run Next.js and Electron together:

```bash
npm run dev
```

If the PowerShell npm shim is restricted on Windows, use:

```powershell
npm.cmd run dev
```

React and Next.js changes hot-reload. Changes under `electron/` require stopping the running command with `Ctrl+C` and starting it again because the main process and preload bridge do not hot-reload.

### Validation

```bash
npm test
npm run build
```

`npm test` exercises recursive scanning, supported-file filtering, vault-boundary validation, binary PDF reads, PDF limits, text extraction, and search. `npm run build` prepares the local PDF worker and generates the static Next.js export.

### Production-like preview

```bash
npm run desktop:preview
```

This builds the static UI and opens it through Electron without the development server.

### Windows installer

```bash
npm run desktop:dist
```

The NSIS installer is written to `dist/`.

## Current scope and planned AI flow

Implemented today:

- Session-scoped local vault selection and rescanning
- Markdown, CSV, and PDF discovery and reading
- Filename/path filtering and session-memory PDF text search
- Explorer and Planet navigation over one shared snapshot
- Local-only PDF rendering and text extraction
- Secure, narrow renderer-to-filesystem boundary
- Manual, case-sensitive Knowledge Stations stored per vault in `.wonnyy/stations.json`
- `ANY`/`ALL` Station projections in Planet View with deterministic similarity links
- Explicit, persistent Active Context with reviewed directory expansion and approximate token estimates
- Model-readable context packages with ordered source provenance and content hashes

Not implemented today:

- Connected AI providers or API requests
- Live AI provider/model requests or response rendering
- AI-driven vault changes
- Markdown/CSV content search
- OCR, cloud sync, collaboration, or autonomous agents

The intended future model workflow is:

```text
User request
  -> user selects files or folders
  -> Context Manager reads only approved vault content
  -> context is assembled with provenance and limits
  -> replaceable model provider receives that context
  -> response returns to Orbistry
  -> user reviews insight before any knowledge is saved or acted on
```

This future pipeline is deliberately separated from the current chat prototype. The local vault remains the durable source of truth; a model is an optional reasoning engine over explicitly chosen context.

For the broader product thesis, see [big-context/product.md](big-context/product.md). For milestones and current implementation state, see [big-context/state.md](big-context/state.md).
