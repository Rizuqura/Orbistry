"use client";
import { useEffect, useRef, useState } from "react";
import type { ChatController } from "../chat/use-chat-runtime";
import type { ContextBox } from "../../types/ai";
import { useConfirmation } from "../dialogs/use-confirmation";

export function ContextBoxes({
  chat,
  selectedPaths,
  onOpenSource,
  onAttach,
  openBoxRequest,
  libraryRequest = 0,
}: {
  chat: ChatController;
  selectedPaths: string[];
  onOpenSource: (path: string) => void;
  onAttach: () => void;
  openBoxRequest?: { id: string; nonce: number } | null;
  libraryRequest?: number;
}) {
  const [mode, setMode] = useState<"add" | "details" | null>(null);
  const [box, setBox] = useState<ContextBox | null>(null);
  const [target, setTarget] = useState("");
  const [name, setName] = useState("");
  const [query, setQuery] = useState("");
  const [destinationQuery, setDestinationQuery] = useState("");
  const [files, setFiles] = useState<string[]>([]);
  const [skipped, setSkipped] = useState<string[]>([]);
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const busy = chat.busy || saving;
  const [renaming, setRenaming] = useState(false);
  const [relink, setRelink] = useState("");
  const [replacement, setReplacement] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  const libraryDialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (libraryRequest) libraryDialog.current?.showModal();
  }, [libraryRequest]);
  const pending = useRef(false);
  const loadId = useRef(0);
  const { confirm, confirmation } = useConfirmation();
  useEffect(() => {
    if (mode) dialog.current?.showModal();
    else dialog.current?.close();
  }, [mode]);
  const details = async (id: string) => {
    const currentLoad = ++loadId.current;
    setMode("details");
    setLoading(true);
    setBox(null);
    setError("");
    setRenaming(false);
    setRelink("");
    try {
      const value = await chat.inspectContextBox(id);
      if (currentLoad !== loadId.current) return;
      setBox(value);
      setName(value.name);
    } catch (e) {
      if (currentLoad === loadId.current) setError((e as Error).message);
    } finally {
      if (currentLoad === loadId.current) setLoading(false);
    }
  };
  const setup = async (create: boolean, targetId = "") => {
    const currentLoad = ++loadId.current;
    setMode("add");
    setTarget(create ? "" : targetId || chat.preselectedBoxId);
    setDestinationQuery("");
    setName(
      selectedPaths.length === 1
        ? selectedPaths[0]
            .split(/[\\/]/)
            .pop()!
            .replace(/\.[^.]+$/, "")
        : "New Context Box",
    );
    setFiles([]);
    setChecked(new Set());
    setSkipped([]);
    setLoading(true);
    setError("");
    try {
      const preview = await chat.previewBoxSelection(selectedPaths);
      if (currentLoad !== loadId.current) return;
      setFiles(preview.files);
      setChecked(new Set(preview.files));
      setSkipped(preview.skipped);
    } catch (e) {
      if (currentLoad === loadId.current) setError((e as Error).message);
    } finally {
      if (currentLoad === loadId.current) setLoading(false);
    }
  };
  useEffect(() => {
    if (openBoxRequest) void details(openBoxRequest.id);
  }, [openBoxRequest]);
  const mutate = async (
    operation: () => Promise<boolean | undefined>,
    next?: () => Promise<void>,
  ) => {
    if (pending.current || chat.busy) return;
    pending.current = true;
    setSaving(true);
    setError("");
    try {
      if (await operation()) {
        if (next) await next();
      } else
        setError(
          "Could not save. Review the error and retry; your selection is retained.",
        );
    } catch (e) {
      setError((e as Error).message);
    } finally {
      pending.current = false;
      setSaving(false);
    }
  };
  const available =
    box?.items.filter((item) => item.status === "ready").length ?? 0;
  const duplicateCount = files.filter(
    (file) =>
      checked.has(file) &&
      chat.contextBoxes
        .find((b) => b.id === target)
        ?.items.some((item) => item.relativePath === file),
  ).length;
  return (
    <div className="context-box-host">
      <dialog
        ref={libraryDialog}
        className="agent-create-dialog context-library-dialog"
        aria-label="Context Box library"
      >
        <section className="context-boxes" aria-label="Context Boxes">
          <div className="pane-heading">
            <span>Context Boxes</span>
            <button
              disabled={busy}
              onClick={() => void setup(true)}
              aria-label="Create Context Box"
              title="Create Context Box"
            >
              +
            </button>
          </div>
          <div className="box-selection-actions">
            <button
              disabled={busy || !selectedPaths.length}
              onClick={() => void setup(false)}
            >
              Add to Context Box…
            </button>
            <button
              disabled={busy || !selectedPaths.length}
              onClick={() => void setup(true)}
            >
              Create Context Box from Selection…
            </button>
            <small>
              {selectedPaths.length} selected in Explorer / Planet View
            </small>
          </div>
          <input
            aria-label="Search Context Box library"
            placeholder="Find a Context Box"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="context-box-sidebar-list">
            {chat.contextBoxes
              .filter((b) => b.name.toLowerCase().includes(query.toLowerCase()))
              .map((b) => (
                <button
                  key={b.id}
                  data-context-box-id={b.id}
                  onClick={() => void details(b.id)}
                >
                  <strong>{b.name}</strong>
                  <small>
                    {b.items.length} {b.items.length === 1 ? "file" : "files"}
                  </small>
                </button>
              ))}
            {!chat.contextBoxes.length && (
              <p>
                Group selected files into a named box, then attach it to the
                selected agent.
              </p>
            )}
          </div>
        </section>
        <button onClick={() => libraryDialog.current?.close()}>
          Close library
        </button>
      </dialog>
      <dialog
        ref={dialog}
        className="agent-create-dialog context-box-dialog"
        aria-labelledby="context-box-dialog-title"
        onCancel={(e) => {
          e.preventDefault();
          if (!busy && !pending.current) setMode(null);
        }}
      >
        <h2 id="context-box-dialog-title">
          {mode === "add"
            ? "Add knowledge to a Context Box"
            : (box?.name ?? "Context Box")}
        </h2>
        {loading && <p role="status">Reviewing vault sources…</p>}
        {error && (
          <p role="alert">
            {error} {chat.runtime.error}
          </p>
        )}
        {mode === "add" && (
          <form
            className="context-box-add-form"
            onSubmit={(e) => {
              e.preventDefault();
              if (loading) return;
              void mutate(
                () =>
                  chat.editContextBox({
                    action: target ? "add" : "create",
                    id: target || undefined,
                    name: target ? undefined : name,
                    paths: files.filter((file) => checked.has(file)),
                  }),
                async () => {
                  setMode(null);
                },
              );
            }}
          >
            <fieldset className="box-form-section" disabled={busy}>
              <legend>1. Choose a destination</legend>
              <p className="box-form-hint">
                Create a new box or choose an existing one.
              </p>
              {chat.contextBoxes.length > 0 && (
                <label>
                  Search existing boxes{" "}
                  <span className="box-field-optional">Optional</span>
                  <input
                    aria-label="Search existing Context Boxes"
                    placeholder="Search by box name"
                    type="search"
                    value={destinationQuery}
                    onChange={(e) => setDestinationQuery(e.target.value)}
                  />
                </label>
              )}
              <label>
                Destination
                <select
                  aria-label="Context Box destination"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                >
                  <option value="">Create a new Context Box</option>
                  {chat.contextBoxes
                    .filter(
                      (b) =>
                        b.id === target ||
                        b.name
                          .toLowerCase()
                          .includes(destinationQuery.toLowerCase()),
                    )
                    .map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.name} ({b.items.length} files)
                      </option>
                    ))}
                </select>
              </label>
              {!target && (
                <label>
                  Context Box name
                  <input
                    autoFocus
                    aria-label="Context Box name"
                    required
                    maxLength={120}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
              )}
            </fieldset>
            <fieldset
              className="box-form-section box-review-section"
              disabled={busy}
            >
              <legend>2. Review knowledge</legend>
              <div className="box-review-summary">
                <strong>
                  {checked.size} of {files.length} files selected
                </strong>
                <span>Supported files</span>
              </div>
              <p className="box-form-hint">
                Choose which files to include. Files added to a folder later are
                not included automatically.
              </p>
              {!!files.length && (
                <div className="box-source-list">
                  {files.map((file) => (
                    <label key={file}>
                      <input
                        type="checkbox"
                        checked={checked.has(file)}
                        onChange={(e) =>
                          setChecked((previous) => {
                            const next = new Set(previous);
                            if (e.target.checked) next.add(file);
                            else next.delete(file);
                            return next;
                          })
                        }
                      />
                      <span>{file}</span>
                    </label>
                  ))}
                </div>
              )}
              {!!skipped.length && (
                <details>
                  <summary>
                    {skipped.length} unsupported or unavailable selections
                    skipped
                  </summary>
                  {skipped.map((file) => (
                    <p key={file}>{file}</p>
                  ))}
                </details>
              )}
              {!!duplicateCount && (
                <p>
                  {duplicateCount} already in this box; duplicates will be
                  skipped.
                </p>
              )}
              {!files.length && !loading && (
                <div className="box-empty-state">
                  <strong>No files selected</strong>
                  <p>
                    You can create an empty box and add Markdown, CSV or text
                    PDF files later. Add knowledge before starting a chat.
                  </p>
                </div>
              )}
            </fieldset>
            <p className="box-save-note">
              Saving updates this box. It does not start a chat or send a model
              request.
            </p>
            <div className="agent-actions box-form-actions">
              <button
                className="box-primary-action"
                disabled={
                  busy ||
                  loading ||
                  (!target && !name.trim()) ||
                  (!!target && !checked.size)
                }
              >
                {target ? "Add selected files" : "Create Context Box"}
              </button>
              <button
                type="button"
                disabled={busy}
                onClick={() => setMode(null)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
        {mode === "details" && box && !loading && (
          <>
            <p className="context-box-meta">
              {box.items.length} files · revision {box.revision} · {available}{" "}
              readable
            </p>
            <p className="context-token-estimate">
              ~
              {box.items
                .reduce((sum, item) => sum + (item.estimatedTokens ?? 0), 0)
                .toLocaleString()}{" "}
              estimated readable source tokens
            </p>
            <p>
              Future turns read the latest contents of these files. Previous
              answers retain their original hashes. Files stay in the vault when
              removed from a box.
            </p>
            <div className="agent-actions context-box-toolbar">
              <button disabled={busy} onClick={() => setRenaming(!renaming)}>
                Rename Context Box
              </button>
              <button
                disabled={busy || !selectedPaths.length}
                onClick={() => void setup(false, box.id)}
              >
                Add selection
              </button>
              <label className="context-box-agent-picker">
                Attach to agent
                <select
                  aria-label="Agent to attach Context Box to"
                  value={chat.agent?.id ?? ""}
                  disabled={busy || !chat.agents.length}
                  onChange={(event) =>
                    void chat.selectAgent(event.target.value)
                  }
                >
                  {!chat.agent && <option value="">Choose an agent</option>}
                  {chat.agents.map((agent) => (
                    <option key={agent.id} value={agent.id}>
                      {agent.displayName}
                    </option>
                  ))}
                </select>
              </label>
              <button
                className="context-box-attach"
                disabled={
                  busy ||
                  !chat.agent ||
                  !box.items.length ||
                  box.items.length > 32 ||
                  available !== box.items.length
                }
                onClick={() => {
                  chat.preselectBox(box.id);
                  setMode(null);
                  libraryDialog.current?.close();
                  onAttach();
                }}
              >
                {chat.agent ? "Attach to agent" : "Create an agent first"}
              </button>
            </div>
            {renaming && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  void mutate(
                    () => chat.renameContextBox(box.id, name),
                    () => details(box.id),
                  );
                }}
              >
                <label>
                  New name
                  <input
                    autoFocus
                    required
                    maxLength={120}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <button disabled={busy || !name.trim()}>Save name</button>
              </form>
            )}
            {!box.items.length && (
              <p>
                This box is empty. Select files in Explorer or Planet View, then
                choose Add selection.
              </p>
            )}
            {box.items.length > 32 && (
              <p>
                Chat supports up to 32 files per turn. Remove files from this
                box or create a smaller box before attaching it.
              </p>
            )}
            <ul className="box-source-list">
              {box.items.map((item) => (
                <li key={item.id}>
                  <button
                    title={item.relativePath}
                    disabled={item.status !== "ready"}
                    onClick={() => {
                      setMode(null);
                      onOpenSource(item.relativePath);
                    }}
                  >
                    {item.relativePath}
                  </button>
                  <small>
                    {item.status === "ready"
                      ? `${item.type?.toUpperCase()} · ~${item.estimatedTokens?.toLocaleString()} source tokens`
                      : (item.message ?? "Unavailable")}
                  </small>
                  <div className="agent-actions">
                    <button
                      disabled={busy}
                      onClick={() =>
                        void mutate(
                          () =>
                            chat.editContextBox({
                              action: "remove",
                              id: box.id,
                              itemId: item.id,
                            }),
                          () => details(box.id),
                        )
                      }
                    >
                      Remove from box
                    </button>
                    <button
                      disabled={busy}
                      onClick={() => {
                        setRelink(item.id);
                        setReplacement(item.relativePath);
                      }}
                    >
                      Relink
                    </button>
                  </div>
                  {relink === item.id && (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        void mutate(
                          () =>
                            chat.editContextBox({
                              action: "relink",
                              id: box.id,
                              itemId: item.id,
                              relativePath: replacement,
                            }),
                          () => details(box.id),
                        );
                      }}
                    >
                      <label>
                        Replacement vault-relative file path
                        <input
                          autoFocus
                          value={replacement}
                          onChange={(e) => setReplacement(e.target.value)}
                        />
                      </label>
                      <button disabled={busy || !replacement.trim()}>
                        Save replacement
                      </button>
                      <button type="button" onClick={() => setRelink("")}>
                        Cancel relink
                      </button>
                    </form>
                  )}
                </li>
              ))}
            </ul>
            <p className="context-box-note">
              Source token counts are estimates. CSV uses computed profiles and
              queries; provider limits are checked on the assembled prompt
              before answer generation. No box sources are silently truncated.
            </p>
            <div className="agent-actions context-box-footer">
              <button
                className="context-box-delete"
                disabled={busy}
                onClick={async () => {
                  if (
                    await confirm(
                      "Delete this Context Box? Original files and historical messages remain. Chats bound to it will need another box before sending.",
                      "Delete Context Box",
                    )
                  )
                    void mutate(
                      () =>
                        chat.editContextBox({ action: "delete", id: box.id }),
                      async () => {
                        setMode(null);
                      },
                    );
                }}
              >
                Delete Context Box
              </button>
              <button disabled={busy} onClick={() => setMode(null)}>
                Close
              </button>
              <button disabled={busy} onClick={() => void details(box.id)}>
                Refresh sources
              </button>
            </div>
          </>
        )}
        {mode === "details" && !box && !loading && (
          <button onClick={() => setMode(null)}>Close</button>
        )}
      </dialog>
      {confirmation}
    </div>
  );
}
