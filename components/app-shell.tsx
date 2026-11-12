"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useChatPopout } from "../features/chat/use-chat-popout";
import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";
import { DocumentWorkspace } from "./document-workspace";
import { ChatPanel, type ChatPanelProps } from "./chat-panel";
import { WorldView } from "./worldview";
import { KnowledgeSidebar } from "./knowledge-sidebar";
import { StatusBar } from "./status-bar";
import { TopBar } from "./top-bar";
import { StartupProgress } from "./startup-progress";
import type {
  VaultEntry,
  VaultFile,
  VaultPdfFile,
  VaultSnapshot,
  VaultSearchResult,
} from "../types/electron";

import { useChatRuntime } from "../features/chat/use-chat-runtime";
import { ModelSettings } from "../features/model-settings/model-settings";
import { AgentWorkspace } from "../features/agent/agent-workspace";
import { AgentSettings } from "../features/agent/agent-settings";
import { useConfirmation } from "../features/dialogs/use-confirmation";

type View = "workspace" | "worldview" | "agent";

function requireVaultBridge() {
  const vault = window.orbistryDesktop?.vault;
  if (
    !vault?.getSnapshot ||
    !vault.rescan ||
    !vault.selectFolder ||
    !vault.readPdf ||
    !vault.search
  ) {
    throw new Error(
      "The Orbistry desktop bridge is outdated. Stop the running app and restart npm run dev.",
    );
  }
  return vault;
}

/** Renders application navigation and active views, coordinating Vault and model lifecycles through existing hooks. */
export function AppShell() {
  const [startupDismissed, setStartupDismissed] = useState(false);
  const { confirm, confirmation } = useConfirmation();
  const [snapshot, setSnapshot] = useState<VaultSnapshot | null>(null);
  const [isScanning, setIsScanning] = useState(true);
  const [vaultError, setVaultError] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [openedFile, setOpenedFile] = useState<VaultFile | VaultPdfFile | null>(
    null,
  );
  const [workspaceError, setWorkspaceError] = useState<string | null>(null);
  const [markdownDraft, setMarkdownDraft] = useState<string | null>(null);
  const [markdownSaving, setMarkdownSaving] = useState(false);
  const [markdownError, setMarkdownError] = useState<string | null>(null);
  const markdownDirty =
    markdownDraft !== null &&
    openedFile !== null &&
    "content" in openedFile &&
    markdownDraft !== openedFile.content.replace(/\r\n/g, "\n");
  const editorGuard = useRef({ dirty: false, saving: false });
  editorGuard.current = { dirty: markdownDirty, saving: markdownSaving };
  const canLeaveDocument = useCallback(async () => {
    if (editorGuard.current.saving) return false;
    return (
      !editorGuard.current.dirty ||
      (await confirm(
        "Your Markdown changes have not been saved. Discard them?",
        "Discard changes",
      ))
    );
  }, [confirm]);
  useEffect(() => {
    const warn = (event: BeforeUnloadEvent) => {
      if (editorGuard.current.dirty || editorGuard.current.saving) {
        event.preventDefault();
        event.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, []);
  const [view, setView] = useState<View>("worldview");
  const [agentSettingsOpen, setAgentSettingsOpen] = useState(false);
  const [vaultQuery, setVaultQuery] = useState("");
  const [sidebarWidth, setSidebarWidth] = useState(240);
  const [vaultMinimized, setVaultMinimized] = useState(false);
  const [pdfSearchResults, setPdfSearchResults] = useState<VaultSearchResult[]>(
    [],
  );
  const [isSearchingPdf, setIsSearchingPdf] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const sidebarResizeStart = useRef<{ x: number; width: number } | null>(null);
  const vaultLoadVersion = useRef(0);

  const selectedSet = useMemo(() => new Set(selectedIds), [selectedIds]);
  const applySnapshot = useCallback((next: VaultSnapshot) => {
    setSnapshot(next);
    setSelectedIds([]);
    setOpenedFile(null);
    setMarkdownDraft(null);
    setMarkdownError(null);
    setWorkspaceError(null);
    setPdfSearchResults([]);
    setVaultError(null);
  }, []);

  const rescanVault = useCallback(async () => {
    if (!(await canLeaveDocument())) return;
    const version = ++vaultLoadVersion.current;
    setIsScanning(true);
    setVaultError(null);
    try {
      const next = await requireVaultBridge().rescan();
      if (version !== vaultLoadVersion.current) return;
      applySnapshot(next);
    } catch (error) {
      if (version !== vaultLoadVersion.current) return;
      setVaultError(
        error instanceof Error
          ? error.message
          : "Orbistry could not scan the active vault.",
      );
    } finally {
      if (version === vaultLoadVersion.current) setIsScanning(false);
    }
  }, [applySnapshot, canLeaveDocument]);

  useEffect(() => {
    void rescanVault();
  }, [rescanVault]);

  const changeVault = useCallback(async () => {
    if (!(await canLeaveDocument())) return;
    const version = ++vaultLoadVersion.current;
    setIsScanning(true);
    try {
      const bridge = requireVaultBridge();
      const selected = await bridge.selectFolder();
      if (version !== vaultLoadVersion.current) return;
      // Cancelling the picker still needs a snapshot if it superseded startup.
      const next = selected ?? (await bridge.getSnapshot());
      if (version !== vaultLoadVersion.current) return;
      applySnapshot(next);
    } catch (error) {
      if (version !== vaultLoadVersion.current) return;
      setVaultError(
        error instanceof Error
          ? error.message
          : "Orbistry could not change the active vault.",
      );
    } finally {
      if (version === vaultLoadVersion.current) setIsScanning(false);
    }
  }, [applySnapshot, canLeaveDocument]);

  const selectEntry = useCallback((id: string | null, additive = false) => {
    if (!id) {
      setSelectedIds([]);
      return;
    }
    setSelectedIds((current) => {
      if (!additive) return [id];
      return current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id];
    });
  }, []);

  const selectExplorerEntry = useCallback(
    (entry: VaultEntry, additive: boolean) => {
      selectEntry(entry.relativePath, additive);
    },
    [selectEntry],
  );

  const openVaultFile = useCallback(
    async (relativePath: string) => {
      if (!(await canLeaveDocument())) return;
      const version = vaultLoadVersion.current;
      setMarkdownDraft(null);
      setMarkdownError(null);
      setWorkspaceError(null);
      try {
        const vault = requireVaultBridge();
        const file = relativePath.toLocaleLowerCase().endsWith(".pdf")
          ? await vault.readPdf(relativePath)
          : await vault.read(relativePath);
        if (version !== vaultLoadVersion.current) return;
        setOpenedFile(file);
        setView("workspace");
      } catch (error) {
        if (version !== vaultLoadVersion.current) return;
        setOpenedFile(null);
        setWorkspaceError(
          error instanceof Error
            ? error.message
            : "Orbistry could not open this file.",
        );
        setView("workspace");
      }
    },
    [canLeaveDocument],
  );

  const saveMarkdown = async () => {
    if (
      !openedFile ||
      !("content" in openedFile) ||
      markdownDraft === null ||
      markdownSaving
    )
      return;
    const vaultPath = snapshot?.rootPath;
    if (!vaultPath) return;
    setMarkdownSaving(true);
    setMarkdownError(null);
    try {
      const bridge = requireVaultBridge();
      if (!bridge.saveMarkdown)
        throw new Error("Restart Orbistry to enable Markdown saving.");
      const content = openedFile.content.includes("\r\n")
        ? markdownDraft.replace(/\n/g, "\r\n")
        : markdownDraft;
      const saved = await bridge.saveMarkdown({
        vaultPath,
        relativePath: openedFile.relativePath,
        originalContent: openedFile.content,
        content,
      });
      setOpenedFile(saved);
      setMarkdownDraft(null);
      // Refresh the file listing without closing the document.
      try {
        setSnapshot(await bridge.rescan());
      } catch {
        setVaultError(
          "Markdown saved. Rescan the vault to refresh source status.",
        );
      }
    } catch (error) {
      setMarkdownError(
        error instanceof Error ? error.message : "Could not save Markdown.",
      );
    } finally {
      setMarkdownSaving(false);
    }
  };

  const searchPdfText = useCallback(async (query: string) => {
    if (!query.trim()) {
      setPdfSearchResults([]);
      setIsSearchingPdf(false);
      return;
    }
    setIsSearchingPdf(true);
    try {
      setPdfSearchResults(await requireVaultBridge().search(query));
    } catch {
      setPdfSearchResults([]);
    } finally {
      setIsSearchingPdf(false);
    }
  }, []);

  const chat = useChatRuntime({
    vaultPath: snapshot?.status === "ready" ? snapshot.rootPath : null,
    contextKey: "standalone-chat",
    scope: { activeStationIds: [], matchMode: "any" },
  });
  const startupVaultPath =
    snapshot?.status === "ready" ? snapshot.rootPath : null;
  const startupMatchesVault = chat.startup.vaultPath === startupVaultPath;
  const startupReady =
    !isScanning &&
    !vaultError &&
    startupMatchesVault &&
    chat.startup.progress === 100;
  useEffect(() => {
    if (startupReady) setStartupDismissed(true);
  }, [startupReady]);
  const startupError =
    vaultError ?? (startupMatchesVault ? chat.startup.error : null);
  const startupProgress = isScanning
    ? snapshot
      ? 25
      : 10
    : startupMatchesVault
      ? 30 + Math.round(chat.startup.progress * 0.7)
      : 30;
  const chatPopout = useChatPopout(
    `${chat.agent?.displayName ?? "Orbistry Agent"} - ORB Terminal Chat`,
  );
  const inactiveAgentIntegration = async (): Promise<never> => {
    throw new Error(
      "Agent file, knowledge and tool integrations are temporarily inactive.",
    );
  };
  // Manual Vault/library management remains separate from agent-facing controls.
  const inactiveAgentMutation = async () => {
    chat.reportInactiveIntegration();
    return false;
  };
  const agentChat = {
    ...chat,
    saveContextBox: inactiveAgentMutation,
    renameContextBox: inactiveAgentMutation,
    editContextBox: inactiveAgentMutation,
    inspectContextBox: inactiveAgentIntegration,
    previewBoxSelection: inactiveAgentIntegration,
    switchContextBox: inactiveAgentMutation,
    refreshSource: () => {
      chat.reportInactiveIntegration();
      return undefined;
    },
  };
  const chatProps: Omit<ChatPanelProps, "variant"> = {
    onPopOutWindow: chatPopout.open,
    onOpenAgentSettings: () => setAgentSettingsOpen(true),
    onOpenAgentWorkspace: () => {
      setSettingsOpen(false);
      setView("agent");
    },
    controller: agentChat,
    // Existing knowledge controls stay visible but cannot access source files.
    onExpandContext: () => chat.reportInactiveIntegration(),
    onOpenSource: () => chat.reportInactiveIntegration(),
  };

  const startSidebarResize = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (event.button !== 0) return;
      event.preventDefault();
      event.currentTarget.focus();
      sidebarResizeStart.current = { x: event.clientX, width: sidebarWidth };
      event.currentTarget.setPointerCapture(event.pointerId);
    },
    [sidebarWidth],
  );

  const resizeSidebar = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      const start = sidebarResizeStart.current;
      if (!start) return;
      const maxWidth = Math.min(460, Math.max(260, window.innerWidth * 0.38));
      setSidebarWidth(
        Math.round(
          Math.min(
            maxWidth,
            Math.max(160, start.width + event.clientX - start.x),
          ),
        ),
      );
    },
    [],
  );

  const stopSidebarResize = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      sidebarResizeStart.current = null;
      if (event.currentTarget.hasPointerCapture(event.pointerId))
        event.currentTarget.releasePointerCapture(event.pointerId);
    },
    [],
  );

  const vaultSidebar = (
    <div
      className={`sidebar-slot${vaultMinimized ? " sidebar-minimized" : ""}`}
    >
      <button
        className="vault-window-toggle"
        aria-label={vaultMinimized ? "Restore Universe" : "Minimize Universe"}
        aria-expanded={!vaultMinimized}
        aria-controls="knowledge-vault-content"
        title={vaultMinimized ? "Restore Universe" : "Minimize Universe"}
        onClick={() => setVaultMinimized((value) => !value)}
      >
        {vaultMinimized ? "›" : "−"}
      </button>
      {vaultMinimized && (
        <span className="vault-minimized-label" aria-hidden="true">
          KNOWLEDGE VAULT
        </span>
      )}
      <div
        id="knowledge-vault-content"
        className="vault-sidebar-content"
        hidden={vaultMinimized}
      >
        <KnowledgeSidebar
          snapshot={snapshot}
          isScanning={isScanning}
          error={vaultError}
          selectedIds={selectedSet}
          pdfSearchResults={pdfSearchResults}
          isSearchingPdf={isSearchingPdf}
          onSearchPdf={searchPdfText}
          onQueryChange={setVaultQuery}
          query={vaultQuery}
          onRescan={() => void rescanVault()}
          onChangeVault={() => void changeVault()}
          onSelect={selectExplorerEntry}
          onOpen={(entry) => void openVaultFile(entry.relativePath)}
          onOpenSearchResult={(relativePath) =>
            void openVaultFile(relativePath)
          }
        />
      </div>
      {!vaultMinimized && (
        <div
          className="sidebar-resize-handle"
          role="separator"
          aria-label="Resize Universe"
          aria-orientation="vertical"
          tabIndex={0}
          aria-valuemin={160}
          aria-valuemax={460}
          aria-valuenow={sidebarWidth}
          title="Drag to resize vault. Arrow keys adjust width; double-click to reset."
          onPointerDown={startSidebarResize}
          onPointerMove={resizeSidebar}
          onPointerUp={stopSidebarResize}
          onPointerCancel={stopSidebarResize}
          onLostPointerCapture={() => {
            sidebarResizeStart.current = null;
          }}
          onDoubleClick={() => setSidebarWidth(240)}
          onKeyDown={(event) => {
            if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key))
              return;
            event.preventDefault();
            const maxWidth = Math.min(
              460,
              Math.max(260, window.innerWidth * 0.38),
            );
            setSidebarWidth((width) =>
              event.key === "Home"
                ? 193
                : event.key === "End"
                  ? maxWidth
                  : Math.min(
                      maxWidth,
                      Math.max(
                        160,
                        width + (event.key === "ArrowRight" ? 20 : -20),
                      ),
                    ),
            );
          }}
        />
      )}
    </div>
  );

  return (
    <>
      {!startupDismissed && (
        <StartupProgress
          progress={startupProgress}
          label={
            startupError
              ? "Startup needs attention"
              : isScanning
                ? snapshot
                  ? "Loading workspace"
                  : "Scanning Universe"
                : startupMatchesVault
                  ? chat.startup.label
                  : "Connecting desktop services"
          }
          error={startupError}
          onContinue={() => setStartupDismissed(true)}
        />
      )}
      <main
        inert={!startupDismissed}
        className="app-shell"
        style={
          {
            "--sidebar-width": `${vaultMinimized ? 36 : sidebarWidth}px`,
          } as CSSProperties
        }
      >
        <TopBar
          settingsOpen={settingsOpen}
          onOpenSettings={() => {
            setSettingsOpen(true);
            if (!chat.modelScan?.running) chat.refreshModels();
          }}
          view={view}
          onChangeView={(next) => {
            setSettingsOpen(false);
            setView(next);
          }}
        />
        <div className="vault-runtime-notices">
          {chat.pulls
            .filter((pull) => ["model-pulling", "error"].includes(pull.phase))
            .map((pull) => (
              <div className="chat-notice" role="status" key={pull.model}>
                {pull.phase === "model-pulling"
                  ? "DOWNLOADING MODEL"
                  : "MODEL DOWNLOAD FAILED"}{" "}
                · {pull.model} · {pull.message}
                {pull.phase === "model-pulling" ? (
                  <button onClick={() => chat.cancelPull(pull.model)}>
                    CANCEL
                  </button>
                ) : (
                  <button
                    disabled={chat.busy}
                    onClick={() => void chat.downloadModel(pull.model)}
                  >
                    RETRY DOWNLOAD
                  </button>
                )}
              </div>
            ))}
          {isScanning && (
            <div className="chat-notice" role="status">
              SCANNING VAULT · Discovering files and indexing PDF text…
            </div>
          )}
          {vaultError && (
            <div className="chat-notice chat-error" role="alert">
              VAULT SCAN FAILED · {vaultError}
            </div>
          )}
        </div>
        {settingsOpen ? (
          <ModelSettings
            chat={chat}
            vaultPath={snapshot?.rootPath ?? null}
            changingVault={isScanning}
            onChangeVault={() => void changeVault()}
            onClose={() => {
              setSettingsOpen(false);
              setView("workspace");
            }}
          />
        ) : view === "agent" ? (
          <AgentWorkspace
            chat={agentChat}
            onSettings={() => setAgentSettingsOpen(true)}
            onManageContext={chatProps.onExpandContext!}
            onOpenSource={chatProps.onOpenSource}
          />
        ) : view === "worldview" ? (
          <WorldView
            key={snapshot?.rootPath ?? "loading"}
            vaultPath={snapshot?.status === "ready" ? snapshot.rootPath : null}
          />
        ) : (
          <div className="workspace-grid workspace-main">
            {vaultSidebar}
            <DocumentWorkspace
              file={openedFile}
              markdownDraft={markdownDraft}
              markdownSaving={markdownSaving}
              markdownError={markdownError}
              onEditMarkdown={() => {
                if (openedFile && "content" in openedFile) {
                  setMarkdownDraft(openedFile.content.replace(/\r\n/g, "\n"));
                  setMarkdownError(null);
                }
              }}
              onMarkdownChange={setMarkdownDraft}
              onSaveMarkdown={() => void saveMarkdown()}
              onCancelMarkdown={async () => {
                if (await canLeaveDocument()) {
                  setMarkdownDraft(null);
                  setMarkdownError(null);
                }
              }}
              error={workspaceError}
              onClose={async () => {
                if (!(await canLeaveDocument())) return;
                setOpenedFile(null);
                setMarkdownDraft(null);
                setMarkdownError(null);
                setWorkspaceError(null);
              }}
            />
          </div>
        )}
        <StatusBar
          agentName={chat.agent?.displayName}
          agentContext={
            chat.contextBoxes.find(
              (box) => box.id === chat.conversation?.contextBoxId,
            )?.name
          }
          agentModel={
            chat.effectiveSettings?.modelId
              ? `${chat.effectiveSettings!.providerId} / ${chat.effectiveSettings!.modelId}`
              : undefined
          }
          view={view}
          snapshot={snapshot}
          isScanning={isScanning}
          error={vaultError}
        />
        {chatPopout.error && (
          <div className="chat-popout-error" role="alert">
            {chatPopout.error}
          </div>
        )}
        {chatPopout.container &&
          createPortal(
            <div className="app-shell worldview-chat-window">
              <ChatPanel
                {...chatProps}
                variant="window"
                onAttachWindow={chatPopout.attach}
                onOpenAgentSettings={() => {
                  chatPopout.attach();
                  chatProps.onOpenAgentSettings?.();
                }}
                onOpenAgentWorkspace={() => {
                  chatPopout.attach();
                  chatProps.onOpenAgentWorkspace?.();
                }}
                onExpandContext={() => {
                  chatPopout.attach();
                  chatProps.onExpandContext?.();
                }}
                onOpenSource={(path) => {
                  window.focus();
                  chatProps.onOpenSource(path);
                }}
              />
            </div>,
            chatPopout.container,
          )}
        {confirmation}
        {agentSettingsOpen && (
          <AgentSettings
            key={chat.activeAgentId}
            chat={agentChat}
            onClose={() => setAgentSettingsOpen(false)}
          />
        )}
      </main>
    </>
  );
}
