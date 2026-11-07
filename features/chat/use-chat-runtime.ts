"use client";

import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import type {
  AiBridge,
  ProviderConnection,
  AgentConfig,
  AgentConstructionConfig,
  ConstructionFileBinding,
  AgentAppearanceOptions,
  ModelRuntimeErrorValue,
  ContextBox,
  ContextBoxEdit,
  ModelPullStatus,
  Conversation,
  ContextIdentity,
  ModelSettings,
  ModelCheckResult,
  RegistryState,
  ScopeSelection,
  ChatState,
} from "../../types/ai";
import { connectAi } from "./desktop-client";
import { initialRuntime, runtimeReducer } from "./runtime-state";
import { chatErrorMessage } from "./context-readiness";

type Options = {
  vaultPath: string | null;
  contextKey: string;
  scope: ScopeSelection;
  onKnowledgeChange: () => Promise<void>;
};
const errorState = (error: unknown): ChatState => {
  const code = (error as { code?: string })?.code;
  if (code === "MODEL_CANCELLED") return "CANCELLED";
  if (code === "MODEL_CONTEXT_TOO_LARGE") return "CONTEXT_TOO_LARGE";
  if (code === "CONTEXT_INSUFFICIENT") return "CONTEXT_INSUFFICIENT";
  if (code === "MODEL_RESTART_REQUIRED") return "RESTART_REQUIRED";
  if (code === "MODEL_OFFLINE" || code === "PROVIDER_OFFLINE")
    return "MODEL_OFFLINE";
  if (code === "MODEL_NOT_FOUND" || code === "MODEL_UNAVAILABLE")
    return "MODEL_MISSING";
  return "ERROR";
};

export function useChatRuntime({
  vaultPath,
  contextKey,
  scope,
  onKnowledgeChange,
}: Options) {
  const [runtime, dispatch] = useReducer(runtimeReducer, initialRuntime);
  const [contextBoxes, setContextBoxes] = useState<ContextBox[]>([]);
  const [preselectedBoxId, setPreselectedBoxId] = useState("");
  const [boxesVersion, setBoxesVersion] = useState(0);
  const [openAgentVersion, setOpenAgentVersion] = useState(0);
  const [creatingChat, setCreatingChat] = useState(false);
  const [contextError, setContextError] = useState<string | null>(null);
  const [pulls, setPulls] = useState<ModelPullStatus[]>([]);
  const [draft, setDraft] = useState("");
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [context, setContext] = useState<ContextIdentity | null>(null);
  const [registry, setRegistry] = useState<RegistryState | null>(null);
  const [agent, setAgent] = useState<AgentConfig | null>(null);
  const [agents, setAgents] = useState<AgentConfig[]>([]);
  const [activeAgentId, setActiveAgentId] = useState("wonnyy-agent");
  const [switchingAgent, setSwitchingAgent] = useState(false);
  const switchingAgentRef = useRef(false);
  const agentRef = useRef("wonnyy-agent");
  const agentDrafts = useRef(new Map<string, string>());
  const [connected, setConnected] = useState(false);
  const [canonicalVault, setCanonicalVault] = useState<string | null>(null);
  const [startup, setStartup] = useState({
    vaultPath,
    progress: 0,
    label: "Connecting desktop services",
    error: null as string | null,
  });
  const [working, setWorking] = useState(false);
  const bridge = useRef<AiBridge | null>(null);
  const session = useRef(0);
  const request = useRef<string | null>(null);
  const eventError = useRef<{
    requestId: string;
    error: ModelRuntimeErrorValue;
  } | null>(null);
  const selected = useRef<Conversation | null>(null);
  const chats = useRef<Conversation[]>([]);
  const scopeRef = useRef(scope);
  const mutation = useRef(false);
  const checksStopped = useRef(false);
  const checkedLoadedKeys = useRef(new Set<string>());
  const scanActive = useRef(false);
  const operationDone = useRef<Promise<void>>(Promise.resolve());
  scopeRef.current = scope;
  selected.current = conversation;
  chats.current = conversations;

  const fail = useCallback(
    (error: unknown) =>
      dispatch({
        type: "error",
        message: chatErrorMessage(error),
        state: errorState(error),
      }),
    [],
  );
  const accept = useCallback((value: Conversation) => {
    setConversation(value);
    setConversations((current) => [
      value,
      ...current.filter((item) => item.id !== value.id),
    ]);
  }, []);

  useEffect(() => {
    const version = ++session.current;
    setStartup({
      vaultPath,
      progress: 0,
      label: "Connecting desktop services",
      error: null,
    });
    setConnected(false);
    setCanonicalVault(null);
    setConversation(null);
    setContextBoxes([]);
    setPreselectedBoxId("");
    setCreatingChat(false);
    setConversations([]);
    setContext(null);
    setDraft("");
    setAgent(null);
    setAgents([]);
    agentDrafts.current.clear();
    dispatch({ type: "reset" });
    let unsubscribePull: (() => void) | undefined;
    let unsubscribe: (() => void) | undefined;
    void connectAi()
      .then(async (client) => {
        if (session.current !== version) return;
        bridge.current = client;
        setStartup({
          vaultPath,
          progress: 25,
          label: "Loading provider settings and chat history",
          error: null,
        });
        const updatePull = (value: ModelPullStatus) => {
          if (session.current !== version) return;
          setPulls((current) => [
            ...current.filter((p) => p.model !== value.model),
            value,
          ]);
          if (value.phase === "model-installed")
            void client
              .models()
              .then((models) => {
                if (session.current === version) {
                  setRegistry(models);
                  if (!request.current)
                    dispatch({ type: "reset", state: "READY" });
                }
              })
              .catch(fail);
        };
        unsubscribePull = client.onPull(updatePull);
        (await client.pullStatus()).forEach(updatePull);
        if (session.current !== version) return;
        unsubscribe = client.onEvent((event) => {
          if (
            session.current !== version ||
            event.requestId !== request.current
          )
            return;
          if (event.error)
            eventError.current = {
              requestId: event.requestId,
              error: event.error,
            };
          // Bridge promise rejections may lose custom Error properties. The
          // versioned runtime event retains the authoritative context error code.
          if (
            event.error &&
            [
              "MODEL_CONTEXT_INVALID",
              "BRAIN_SOURCE_CHANGED",
              "BRAIN_SOURCE_UNAVAILABLE",
            ].includes(event.error.code)
          ) {
            setContext(null);
            setContextError(event.error.message);
          }
          dispatch({ type: "event", event });
          if (event.conversation) accept(event.conversation);
        });
        const [models, list] = await Promise.all([
          client.models(),
          vaultPath ? client.listConversations() : Promise.resolve([]),
        ]);
        if (session.current !== version) return;
        setRegistry(models);
        setConversations(list);
        setStartup({
          vaultPath,
          progress: 60,
          label: "Loading Context Boxes",
          error: null,
        });
        setContextBoxes(vaultPath ? await client.listContextBoxes() : []);
        if (session.current !== version) return;
        let savedId: string | null = null;
        try {
          savedId = localStorage.getItem("qterminal-active-chat:" + vaultPath);
        } catch {}
        const resolvedVault =
          vaultPath && client.getVaultIdentity
            ? (await client.getVaultIdentity()).vaultPath
            : vaultPath;
        if (session.current !== version) return;
        setCanonicalVault(resolvedVault);
        const profiles = client.listAgents
          ? await client.listAgents()
          : await Promise.all([
              client.getAgent("wonnyy-agent"),
              client.getAgent("chronoz"),
            ]);
        if (session.current !== version) return;
        setStartup({
          vaultPath,
          progress: 85,
          label: "Restoring agents and workspace",
          error: null,
        });
        let restoredAgent = list.find((c) => c.id === savedId)?.agentId;
        try {
          restoredAgent ??=
            localStorage.getItem("qterminal-active-agent:" + vaultPath) ??
            undefined;
        } catch {}
        const profile =
          profiles.find((p) => p.id === restoredAgent) ?? profiles[0];
        if (!savedId && profile)
          try {
            savedId = localStorage.getItem(
              `qterminal-active-chat:${vaultPath}:${profile.id}`,
            );
          } catch {}
        setAgents(profiles);
        setAgent(profile ?? null);
        agentRef.current = profile?.id ?? "";
        setActiveAgentId(profile?.id ?? "");
        setConversation(
          list.find(
            (c) => profile && c.id === savedId && c.agentId === profile.id,
          ) ?? null,
        );
        chats.current = list;
        setConnected(true);
        setStartup({
          vaultPath,
          progress: 100,
          label: "Workspace ready",
          error: null,
        });
        dispatch({ type: "reset", state: "READY" });
      })
      .catch((error) => {
        if (session.current === version) {
          setStartup({
            vaultPath,
            progress: 0,
            label: "Startup needs attention",
            error:
              error instanceof Error
                ? error.message
                : "Could not initialize chat services.",
          });
          fail(error);
        }
      });
    return () => {
      session.current++;
      checksStopped.current = true;
      void bridge.current?.stopModelChecks().catch(() => {});
      unsubscribe?.();
      unsubscribePull?.();
      if (request.current)
        void bridge.current?.cancel(request.current).catch(() => {});
      request.current = null;
    };
  }, [vaultPath, accept, fail]);

  useEffect(() => {
    if (!connected || !bridge.current) return;
    let stale = false;
    setContext(null);
    setContextError(null);
    try {
      localStorage.setItem(
        "qterminal-active-agent:" + vaultPath,
        activeAgentId,
      );
      if (conversation) {
        localStorage.setItem(
          "qterminal-active-chat:" + vaultPath,
          conversation.id,
        );
        localStorage.setItem(
          `qterminal-active-chat:${vaultPath}:${activeAgentId}`,
          conversation.id,
        );
      } else {
        localStorage.removeItem("qterminal-active-chat:" + vaultPath);
        localStorage.removeItem(
          `qterminal-active-chat:${vaultPath}:${activeAgentId}`,
        );
      }
    } catch {}
    if (!conversation) return;
    if (
      !conversation.engineOnly &&
      !conversation.contextBoxId &&
      !conversation.contextFile
    ) {
      setContextError(
        "Legacy chat is read-only. Create a bound chat with a Context Box.",
      );
      return;
    }
    void bridge.current
      .checkConversation(conversation.id)
      .then(async (identity) => {
        const box = conversation.contextBoxId
          ? await bridge.current!.inspectContextBox(conversation.contextBoxId)
          : null;
        if (!stale) {
          if (
            box?.items.length &&
            box.items.every(
              (item) => item.status === "ready" && item.estimatedTokens === 0,
            )
          ) {
            setContext(null);
            setContextError(
              "Insufficient evidence in the active Context Box. Its sources contain no readable text.",
            );
            return;
          }
          setContext(identity);
          setContextError(null);
        }
      })
      .catch((error) => {
        if (!stale) setContextError(chatErrorMessage(error));
      });
    return () => {
      stale = true;
    };
  }, [
    connected,
    conversation?.id,
    conversation?.contextBoxId,
    contextKey,
    vaultPath,
    boxesVersion,
    activeAgentId,
  ]);

  const interruptChecks = useCallback(async () => {
    if (!scanActive.current) return;
    checksStopped.current = true;
    checkedLoadedKeys.current.add("gemini");
    checkedLoadedKeys.current.add("nvidia");
    await bridge.current?.stopModelChecks().catch(() => {});
    await operationDone.current;
  }, []);
  // The experiment panel shares backend admission with normal model checks,
  // but has its own request state. Prioritize an explicit user operation and
  // await the existing check/mutation cleanup instead of racing MODEL_BUSY.
  const prepareBasicChat = useCallback(async () => {
    checkedLoadedKeys.current.add("gemini");
    checkedLoadedKeys.current.add("nvidia");
    await interruptChecks();
    await operationDone.current;
  }, [interruptChecks]);
  const operate = useCallback(
    async (
      operation: (client: AiBridge, current: () => boolean) => Promise<void>,
      reportError = true,
    ) => {
      await interruptChecks();
      if (!bridge.current || mutation.current || request.current) return;
      const version = session.current;
      mutation.current = true;
      let release!: () => void;
      operationDone.current = new Promise<void>((resolve) => {
        release = resolve;
      });
      setWorking(true);
      try {
        await operation(bridge.current, () => version === session.current);
        return true;
      } catch (error) {
        if (!reportError) throw error;
        if (version === session.current) fail(error);
        return false;
      } finally {
        mutation.current = false;
        setWorking(false);
        release();
      }
    },
    [fail, interruptChecks],
  );

  const requestError = useCallback(
    (id: string) =>
      eventError.current?.requestId === id ? eventError.current.error : null,
    [],
  );
  const attached = Boolean(
    context &&
    (conversation?.engineOnly ||
      conversation?.contextBoxId ||
      conversation?.contextFile),
  );
  const run = useCallback(
    async (text: string, retryOf?: string) => {
      await interruptChecks();
      if (
        request.current ||
        mutation.current ||
        pulls.some((p) => p.phase === "model-pulling") ||
        !text.trim()
      )
        return;
      if (
        !bridge.current ||
        !conversation ||
        !context ||
        !attached ||
        contextError
      ) {
        fail(
          new Error(
            contextError ??
              "Resume this chat's approved source or start a new chat first.",
          ),
        );
        return;
      }
      const client = bridge.current;
      const requestId = crypto.randomUUID();
      const version = session.current;
      request.current = requestId;
      eventError.current = null;
      dispatch({ type: "start", requestId });
      setDraft("");
      try {
        const result = await client.chat({
          ...scopeRef.current,
          conversationId: conversation.id,
          expectedContextId: context.id,
          requestId,
          userMessage: text,
          ...(retryOf ? { retryOf } : {}),
        });
        if (version === session.current) {
          accept(result.conversation);
          setContext(result.conversation.contextIdentity);
        }
      } catch (error) {
        if (version === session.current) {
          const terminalError = requestError(requestId);
          if (terminalError)
            error = Object.assign(
              new Error(terminalError.message),
              terminalError,
            );
          fail(error);
          const invalidContext = [
            "MODEL_CONTEXT_INVALID",
            "BRAIN_SOURCE_CHANGED",
            "BRAIN_SOURCE_UNAVAILABLE",
          ].includes((error as { code?: string }).code ?? "");
          if (invalidContext) {
            setContext(null);
            setContextError(chatErrorMessage(error));
          }
          setDraft((current) => current || text);
          try {
            const list = await client.listConversations();
            if (version === session.current) {
              setConversations(list);
              const restored =
                list.find((item) => item.id === conversation.id) ?? null;
              setConversation(restored);
              // A failed/cancelled turn may already have recorded a newer file
              // manifest. Keep retries attached to that persisted version.
              if (restored && !invalidContext) {
                // ContextBridge can drop custom Error properties, and terminal
                // events may race promise rejection. Revalidate capabilities
                // instead of restoring a stale saved manifest after failure.
                try {
                  const verified = await client.checkConversation(restored.id);
                  if (version === session.current) setContext(verified);
                } catch (contextFailure) {
                  if (version === session.current) {
                    setContext(null);
                    setContextError(chatErrorMessage(contextFailure));
                  }
                }
              }
            }
          } catch (loadError) {
            if (version === session.current) fail(loadError);
          }
        }
      } finally {
        if (request.current === requestId) request.current = null;
        if (version === session.current) dispatch({ type: "finish" });
      }
    },
    [
      conversation,
      context,
      attached,
      contextError,
      requestError,
      accept,
      fail,
      interruptChecks,
      pulls,
    ],
  );

  const stop = useCallback(() => {
    if (!request.current) return;
    const version = session.current;
    dispatch({ type: "stop" });
    void bridge.current?.cancel(request.current).catch((error) => {
      if (version === session.current) fail(error);
    });
  }, [fail]);

  const latest = conversation?.attempts.at(-1);
  const retryMessage =
    latest && ["failed", "cancelled", "interrupted"].includes(latest.status)
      ? conversation?.messages.find((item) => item.id === latest.userMessageId)
      : undefined;
  const retryOnSubmit =
    !!retryMessage &&
    (!draft.trim() || draft.trim() === retryMessage.content.trim());
  const retry = () => {
    if (
      !latest ||
      !["failed", "cancelled", "interrupted"].includes(latest.status)
    )
      return;
    const message = conversation?.messages.find(
      (item) => item.id === latest.userMessageId,
    );
    if (message) void run(message.content, latest.requestId);
  };
  const newChat = () => {
    setCreatingChat(true);
    void operate(async (client, current) => {
      const boxes = await client.listContextBoxes();
      const reviewed = await Promise.all(
        boxes.map((box) => client.inspectContextBox(box.id).catch(() => box)),
      );
      if (current()) setContextBoxes(reviewed);
    });
  };
  const createChat = (
    contextBoxId: string,
    creationId: string,
    includeAgentKnowledge = false,
    contextFile?: ConstructionFileBinding,
    engineOnly = false,
  ) =>
    operate(async (client, current) => {
      const value = await client.createConversation({
        agentId: agentRef.current,
        ...(engineOnly
          ? { engineOnly: true }
          : contextFile
            ? { contextFile }
            : { contextBoxId }),
        creationId,
        ...(!engineOnly && includeAgentKnowledge
          ? { includeAgentKnowledge }
          : {}),
      });
      if (!current()) return;
      setContext(value.contextIdentity);
      setContextError(null);
      accept(value);
      setCreatingChat(false);
      setDraft("");
      dispatch({ type: "reset", state: "READY" });
    });
  const saveContextBox = (name: string) =>
    operate(async (client, current) => {
      await client.saveContextBox({ name });
      const boxes = await client.listContextBoxes();
      if (current()) setContextBoxes(boxes);
    });
  const renameContextBox = (id: string, name: string) =>
    operate(async (client, current) => {
      await client.renameContextBox({ id, name });
      const boxes = await client.listContextBoxes();
      if (current()) {
        setContextBoxes(boxes);
        dispatch({ type: "reset", state: "READY" });
      }
    });
  const editContextBox = (input: ContextBoxEdit) =>
    operate(async (client, current) => {
      await client.editContextBox(input);
      const boxes = await client.listContextBoxes();
      if (current()) {
        setContextBoxes(boxes);
        if (input.action === "delete" && input.id === preselectedBoxId)
          setPreselectedBoxId("");
        setBoxesVersion((v) => v + 1);
        dispatch({ type: "reset", state: "READY" });
      }
    });
  const switchContextBox = (contextBoxId: string) =>
    operate(async (client, current) => {
      if (!conversation) return;
      const value = await client.switchContextBox({
        conversationId: conversation.id,
        contextBoxId,
      });
      if (current()) {
        accept(value);
        setContext(value.contextIdentity);
        setContextError(null);
        setBoxesVersion((v) => v + 1);
        dispatch({ type: "reset", state: "READY" });
      }
    });
  const selectAgent = (id: string, chatId?: string) => {
    if (
      switchingAgentRef.current ||
      request.current ||
      mutation.current ||
      !agents.some((profile) => profile.id === id)
    )
      return Promise.resolve(false);
    switchingAgentRef.current = true;
    setSwitchingAgent(true);
    return operate(async (client, current) => {
      const profile = await client.getAgent(id);
      if (!current()) return;
      if (agentRef.current !== id)
        agentDrafts.current.set(agentRef.current, draft);
      let savedId = chatId;
      if (!savedId)
        try {
          savedId =
            localStorage.getItem(`qterminal-active-chat:${vaultPath}:${id}`) ??
            undefined;
        } catch {}
      const next =
        conversations.find((c) => c.id === savedId && c.agentId === id) ??
        conversations.find((c) => c.agentId === id) ??
        null;
      setAgent(profile);
      setAgents((profiles) => profiles.map((p) => (p.id === id ? profile : p)));
      agentRef.current = id;
      setActiveAgentId(id);
      setConversation(next);
      setCreatingChat(false);
      setContext(null);
      setContextError(null);
      setDraft(agentDrafts.current.get(id) ?? "");
      dispatch({ type: "reset", state: "READY" });
    }).finally(() => {
      switchingAgentRef.current = false;
      setSwitchingAgent(false);
    });
  };
  const selectChat = (id: string) => {
    if (request.current || mutation.current) return;
    const value = conversations.find((item) => item.id === id);
    if (value) {
      if (value.agentId !== agentRef.current) {
        void selectAgent(value.agentId ?? "wonnyy-agent", id);
        return;
      }
      setConversation(value);
      dispatch({ type: "reset", state: "READY" });
    }
  };
  const resume = () =>
    void operate(async (client, current) => {
      if (!conversation) return;
      const value = await client.resumeConversation(conversation.id);
      const identity = await client.checkConversation(conversation.id);
      if (!current()) return;
      accept(value);
      setContext(identity);
      await onKnowledgeChange();
    });
  const refreshSource = () =>
    void operate(async (client, current) => {
      await client.refreshSource();
      if (!current()) return;
      await onKnowledgeChange();
    });
  const rename = (title: string, id = conversation?.id) =>
    operate(async (client, current) => {
      if (id) {
        const value = await client.renameConversation({
          conversationId: id,
          title,
        });
        if (current()) {
          setConversations((list) =>
            list.map((c) => (c.id === id ? value : c)),
          );
          if (selected.current?.id === id) accept(value);
        }
      }
    });
  const remove = (all: boolean, id = conversation?.id) =>
    void operate(async (client, current) => {
      if (all) {
        for (const item of conversations.filter(
          (c) => c.agentId === agentRef.current,
        ))
          await client.deleteConversation(item.id);
      } else if (id) await client.deleteConversation(id);
      if (!current()) return;
      const list = await client.listConversations();
      if (!current()) return;
      setConversations(list);
      if (all || selected.current?.id === id) setConversation(null);
      dispatch({ type: "reset", state: "READY" });
    });
  const deleteMessage = (messageId: string) => {
    const id = conversation?.id;
    if (!id) return;
    const message = conversation.messages.find((item) => item.id === messageId);
    void operate(async (client, current) => {
      if (!client.deleteMessage)
        throw new Error("Restart Orbistry to enable message deletion.");
      const value = await client.deleteMessage({
        conversationId: id,
        messageId,
      });
      if (!current()) return;
      accept(value);
      if (message?.role === "user")
        setDraft((currentDraft) =>
          currentDraft.trim() === message.content.trim() ? "" : currentDraft,
        );
      dispatch({ type: "reset", state: "READY" });
    });
  };
  const refreshModels = () =>
    void operate(async (client, current) => {
      const value = await client.models();
      if (current()) {
        setRegistry(value);
        if (!value.error) dispatch({ type: "reset", state: "READY" });
      }
    });
  const saveSettings = (settings: Partial<ModelSettings>) =>
    void operate(async (client, current) => {
      await client.settings(settings);
      if (!current()) return;
      const value = await client.models();
      if (current()) {
        setRegistry(value);
        dispatch({ type: "reset", state: "READY" });
      }
    });
  const [modelChecks, setModelChecks] = useState<
    Record<string, ModelCheckResult>
  >({});
  const [modelScan, setModelScan] = useState<{
    providerId: "gemini" | "nvidia" | "openrouter";
    running: boolean;
    completed: number;
    total: number;
    model: string | null;
    note: string;
  } | null>(null);
  const clearChecks = (providerId: "gemini" | "nvidia" | "openrouter") =>
    setModelChecks((checks) =>
      Object.fromEntries(
        Object.entries(checks).filter(
          ([, result]) => result.providerId !== providerId,
        ),
      ),
    );
  const scanModels = async (
    client: AiBridge,
    current: () => boolean,
    providerId: "gemini" | "nvidia" | "openrouter",
    models: string[],
    clear = true,
  ) => {
    checksStopped.current = false;
    scanActive.current = true;
    if (clear) clearChecks(providerId);
    let completed = 0;
    let note =
      "Checks complete. Stars indicate a successful sample, not guaranteed availability.";
    setModelScan({
      providerId,
      running: true,
      completed,
      total: models.length,
      model: null,
      note: "",
    });
    try {
      for (const model of models) {
        if (!current() || checksStopped.current) break;
        setModelScan({
          providerId,
          running: true,
          completed,
          total: models.length,
          model,
          note: "",
        });
        const result = await client.checkRemoteModel({ providerId, model });
        if (!current() || checksStopped.current) break;
        completed++;
        setModelChecks((checks) => ({
          ...checks,
          [providerId + "/" + model]: result,
        }));
        if (
          ["RATE_LIMITED", "AUTH_INVALID", "AUTH_REQUIRED"].includes(
            result.code ?? "",
          )
        ) {
          note = "Checks paused: " + result.message;
          break;
        }
        if (completed < models.length)
          await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    } catch (error) {
      note = "Checks interrupted. Remaining models are untested.";
      throw error;
    } finally {
      scanActive.current = false;
      if (checksStopped.current)
        note = "Checks stopped. Remaining models are untested.";
      setModelScan({
        providerId,
        running: false,
        completed,
        total: models.length,
        model: null,
        note,
      });
    }
  };
  const stopModelChecks = () => {
    checksStopped.current = true;
    registry?.providers.forEach((provider) =>
      checkedLoadedKeys.current.add(provider.id),
    );
    void bridge.current?.stopModelChecks().catch(fail);
  };
  const recheckModels = (providerId: "gemini" | "nvidia" | "openrouter") =>
    operate(async (client, current) => {
      checkedLoadedKeys.current.add(providerId);
      const value = await client.models();
      if (!current()) return;
      setRegistry(value);
      await scanModels(
        client,
        current,
        providerId,
        value.models
          .filter((m) => m.providerId === providerId)
          .map((m) => m.modelId),
      );
    });
  const checkModel = (
    providerId: "gemini" | "nvidia" | "openrouter",
    model: string,
  ) =>
    operate((client, current) =>
      scanModels(client, current, providerId, [model], false),
    );
  const saveCredential = (
    apiKey: string,
    providerId: "gemini" | "nvidia" | "openrouter" = "gemini",
    onSaved?: () => void,
  ) =>
    operate(async (client, current) => {
      await client.saveCredential({ providerId, apiKey });
      checkedLoadedKeys.current.add(providerId);
      if (!current()) return;
      onSaved?.();
      clearChecks(providerId);
      // Saving is a local, committed action. Model discovery is a separate
      // network operation and must not make a saved credential look unsaved.
      setRegistry(
        (previous) =>
          previous && {
            ...previous,
            online:
              previous.settings.providerId === providerId
                ? false
                : previous.online,
            providers: previous.providers.map((provider) =>
              provider.id === providerId
                ? {
                    ...provider,
                    configured: true,
                    secureStorageAvailable: true,
                    online: false,
                    error: null,
                  }
                : provider,
            ),
            models: previous.models.filter(
              (model) => model.providerId !== providerId,
            ),
          },
      );
      let value: RegistryState;
      try {
        value = await client.models();
      } catch (error) {
        if (current()) fail(error);
        return;
      }
      if (!current()) return;
      setRegistry(value);
      dispatch({ type: "reset", state: "READY" });
    });
  const removeCredential = (
    providerId: "gemini" | "nvidia" | "openrouter" = "gemini",
  ) =>
    operate(async (client, current) => {
      await client.removeCredential({ providerId });
      checkedLoadedKeys.current.delete(providerId);
      if (!current()) return;
      clearChecks(providerId);
      setModelScan(null);
      const value = await client.models();
      if (current()) {
        setRegistry(value);
        dispatch({ type: "reset", state: "READY" });
      }
    });
  // Inference checks are explicit actions: startup and key saving must not
  // consume provider quota just to determine whether a catalog is reachable.
  const connectCredential = async (
    input: Parameters<AiBridge["connectCredential"]>[0],
  ) => {
    let result: ProviderConnection | null = null;
    await operate(async (client, current) => {
      const connection = await client.connectCredential(input);
      result = connection;
      if (!connection.saved || !connection.providerId || !current()) return;
      clearChecks(connection.providerId);
      checkedLoadedKeys.current.add(connection.providerId);
      try {
        const value = await client.models();
        if (current()) setRegistry(value);
      } catch {
        // The key is already committed. A later catalog failure must not make
        // the connection look unsaved or leave the secret in the input.
        result = {
          ...connection,
          message: `${connection.message} Refresh models to retry catalog discovery.`,
        };
      }
    }, false);
    return result as ProviderConnection | null;
  };

  const effectiveSettings = registry
    ? {
        ...registry.settings,
        ...(agent?.runtimeModel?.providerId && agent.runtimeModel.modelId
          ? {
              providerId: agent.runtimeModel.providerId,
              modelId: agent.runtimeModel.modelId,
            }
          : {}),
      }
    : null;
  const effectiveOnline =
    registry?.providers.find(
      (provider) => provider.id === effectiveSettings?.providerId,
    )?.online ?? registry?.online;
  const selectedModelAvailable = registry?.models.some(
    (model) =>
      model.providerId === effectiveSettings?.providerId &&
      model.modelId === effectiveSettings?.modelId,
  );
  const status =
    runtime.state === "READY" && !effectiveOnline
      ? "MODEL_OFFLINE"
      : runtime.state === "READY" && !selectedModelAvailable
        ? "MODEL_MISSING"
        : runtime.state;

  return {
    createAgent: (name: string, creationId: string) =>
      operate(async (client, current) => {
        if (!client.createAgent)
          throw new Error("Restart Orbistry to add agents.");
        const profile = await client.createAgent({ name, creationId });
        if (!current()) return;
        agentDrafts.current.set(agentRef.current, draft);
        setAgents((profiles) => [
          ...profiles.filter((item) => item.id !== profile.id),
          profile,
        ]);
        setAgent(profile);
        agentRef.current = profile.id;
        setActiveAgentId(profile.id);
        setConversation(null);
        setCreatingChat(false);
        setPreselectedBoxId("");
        setContext(null);
        setContextError(null);
        setDraft("");
        dispatch({ type: "reset", state: "READY" });
      }, false),
    researchDefaults: (() => {
      const sameVault = (path: string) =>
        window.wonnyyDesktop?.platform === "win32"
          ? path.toLowerCase() === canonicalVault?.toLowerCase()
          : path === canonicalVault;
      const nodes = agent?.construction?.active?.nodes ?? [];
      const contextNode = nodes.find((node) => node.kind === "Context");
      const context = contextNode?.config.contextBox;
      const contextFile = contextNode?.config.contextFile;
      const knowledgeNode = nodes.find((node) => node.kind === "Knowledge");
      const knowledge =
        knowledgeNode?.config.contextFile ?? knowledgeNode?.config.contextBox;
      return {
        contextBoxId:
          context && sameVault(context.vaultPath) ? context.boxId : undefined,
        contextFile:
          contextFile && sameVault(contextFile.vaultPath)
            ? contextFile
            : undefined,
        knowledge:
          knowledge && sameVault(knowledge.vaultPath) ? knowledge : undefined,
      };
    })(),
    previewConstructionBox: async (boxId: string) => {
      if (!bridge.current?.previewConstructionBox)
        throw new Error(
          "Restart Orbistry to use Context Boxes in agent construction.",
        );
      await interruptChecks();
      return bridge.current.previewConstructionBox({ boxId });
    },
    listConstructionFiles: async () => {
      if (!bridge.current?.listConstructionFiles)
        throw new Error("Restart Orbistry to select node files.");
      await interruptChecks();
      return bridge.current.listConstructionFiles();
    },
    previewConstructionFile: async (relativePath: string) => {
      if (!bridge.current?.previewConstructionFile)
        throw new Error("Restart Orbistry to review node files.");
      await interruptChecks();
      return bridge.current.previewConstructionFile({ relativePath });
    },
    effectiveSettings,
    saveConstruction: async (
      action: "draft" | "apply",
      config: AgentConstructionConfig,
      expectedRevision: number,
      avatarDataUrl?: string | null,
      presentation?: {
        appearance: AgentAppearanceOptions;
        bannerDataUrl?: string | null;
        wallpaperDataUrl?: string | null;
      },
    ) => {
      if (!bridge.current?.saveAgentConstruction)
        throw new Error("Restart Orbistry to load Agent Construction.");
      const owner = agentRef.current;
      const version = session.current;
      await interruptChecks();
      if (agentRef.current !== owner)
        throw new Error(
          "Agent changed before saving. Reopen its construction settings.",
        );
      const value = await bridge.current.saveAgentConstruction({
        id: owner,
        action,
        config,
        expectedRevision,
        ...(avatarDataUrl !== undefined ? { avatarDataUrl } : {}),
        ...presentation,
      });
      if (agentRef.current === owner) setAgent(value);
      setAgents((profiles) =>
        profiles.map((profile) => (profile.id === value.id ? value : profile)),
      );
      const chatId = selected.current?.id;
      if (
        action === "apply" &&
        chatId &&
        agentRef.current === owner &&
        session.current === version
      ) {
        try {
          const identity = await bridge.current.checkConversation(chatId);
          if (
            selected.current?.id === chatId &&
            agentRef.current === owner &&
            session.current === version
          ) {
            setContext(identity);
            setContextError(null);
            dispatch({ type: "reset", state: "READY" });
          }
        } catch (error) {
          if (
            selected.current?.id === chatId &&
            agentRef.current === owner &&
            session.current === version
          ) {
            setContext(null);
            setContextError(chatErrorMessage(error));
          }
        }
      }
      return value;
    },
    startup,
    proposeKnowledge: async (runId: string, extraction: unknown) => {
      if (!bridge.current?.proposeKnowledge)
        throw new Error("Restart Orbistry to load knowledge proposal support.");
      return bridge.current.proposeKnowledge({ runId, extraction });
    },
    retrieveKnowledge: async (query: {
      entity: string;
      topic: string;
      period: string;
      maxTokens: number;
    }) => {
      if (!bridge.current?.retrieveKnowledge || !selected.current)
        throw new Error(
          "Select a bound Wonnyy chat and restart Orbistry if it was updated.",
        );
      return bridge.current.retrieveKnowledge({
        conversationId: selected.current.id,
        query,
      });
    },
    pulls,
    downloadModel: async (model: string) => {
      try {
        await interruptChecks();
        if (bridge.current) await bridge.current.pullModel(model);
      } catch (error) {
        fail(error);
      }
    },
    cancelPull: (model: string) =>
      void bridge.current?.cancelPull(model).catch(fail),
    runtime: { ...runtime, state: status as ChatState },
    draft,
    setDraft,
    conversation,
    conversations,
    context,
    registry,
    agent,
    agents,
    activeAgentId,
    selectAgent,
    chooseAgentAvatar: async () => {
      if (!bridge.current)
        throw new Error("Desktop connection is unavailable.");
      return bridge.current.chooseAgentAvatar();
    },
    chooseAgentBackdrop: async (kind: "banner" | "wallpaper") => {
      if (!bridge.current?.chooseAgentBackdrop)
        throw new Error(
          "Restart Orbistry to load banner and wallpaper settings.",
        );
      return bridge.current.chooseAgentBackdrop(kind);
    },
    saveAgent: async (
      customInstructions: string,
      avatarDataUrl?: string | null,
    ) => {
      if (!bridge.current)
        throw new Error("Desktop connection is unavailable.");
      const value = await bridge.current.saveAgent({
        id: agentRef.current,
        customInstructions,
        ...(avatarDataUrl !== undefined ? { avatarDataUrl } : {}),
      });
      if (agentRef.current === value.id) setAgent(value);
      setAgents((profiles) =>
        profiles.map((p) => (p.id === value.id ? value : p)),
      );
      return value;
    },
    attached,
    busy:
      !connected ||
      switchingAgent ||
      Boolean(runtime.requestId) ||
      (working && !modelScan?.running),
    unavailableReason: contextError,
    contextBoxes,
    preselectedBoxId,
    openAgentVersion,
    preselectBox: (id: string) => {
      setPreselectedBoxId(id);
      setOpenAgentVersion((v) => v + 1);
    },
    previewBoxSelection: async (paths: string[]) => {
      if (!bridge.current)
        throw new Error("Desktop connection is unavailable.");
      return bridge.current.previewBoxSelection(paths);
    },
    inspectContextBox: async (id: string) => {
      if (!bridge.current)
        throw new Error("Desktop connection is unavailable.");
      return bridge.current.inspectContextBox(id);
    },
    editContextBox,
    switchContextBox,
    creatingChat,
    hasEngine: !!agent?.construction?.active?.nodes.some(
      (n) => n.kind === "Engine" && n.config.engineId === "chronoz",
    ),
    createChat,
    saveContextBox,
    renameContextBox,
    cancelCreation: () => setCreatingChat(false),
    canSend:
      !!agent &&
      attached &&
      !contextError &&
      !!selectedModelAvailable &&
      !!effectiveOnline,
    submit: () => (retryOnSubmit ? retry() : void run(draft)),
    retryOnSubmit,
    retry,
    stop,
    newChat,
    selectChat,
    resume,
    rename,
    remove,
    deleteMessage,
    refreshSource,
    refreshModels,
    saveSettings,
    saveCredential,
    connectCredential,
    modelChecks,
    modelScan,
    checkModel,
    recheckModels,
    stopModelChecks,
    prepareBasicChat,
    removeCredential,
  };
}

export type ChatController = ReturnType<typeof useChatRuntime>;
