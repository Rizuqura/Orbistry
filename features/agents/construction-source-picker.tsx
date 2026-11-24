"use client";
import { useEffect, useState } from "react";
import type {
  AgentConstructionConfig,
  ConstructionBoxPreview,
  ConstructionFilePreview,
} from "../../types/ai";
import type { ChatController } from "../chat/use-chat-runtime";

type Node = AgentConstructionConfig["nodes"][number];
export function ConstructionSourcePicker({
  node,
  chat,
  blocked,
  onConfig,
  onBusy,
  onError,
  onNotice,
}: {
  node: Node;
  chat: ChatController;
  blocked: boolean;
  onConfig: (config: Node["config"]) => void;
  onBusy: (busy: boolean) => void;
  onError: (message: string) => void;
  onNotice: (message: string) => void;
}) {
  const [mode, setMode] = useState<"box" | "file">(
    node.config.contextFile ? "file" : "box",
  );
  const [files, setFiles] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [preview, setPreview] = useState<
    ConstructionBoxPreview | ConstructionFilePreview | null
  >(null);
  const binding = node.config.contextFile ?? node.config.contextBox;
  const label = binding
    ? "relativePath" in binding
      ? binding.relativePath
      : (chat.contextBoxes.find((box) => box.id === binding.boxId)?.name ??
        binding.boxName)
    : "";
  useEffect(() => {
    let stale = false;
    if (mode === "file") {
      onBusy(true);
      void chat
        .listConstructionFiles()
        .then((paths) => {
          if (!stale) setFiles(paths);
        })
        .catch((error) => {
          if (!stale)
            onError(
              error instanceof Error ? error.message : "Could not list files.",
            );
        })
        .finally(() => onBusy(false));
    }
    return () => {
      stale = true;
    };
  }, [mode]);
  const review = async (value: string, kind = mode) => {
    if (!value) {
      setPreview(null);
      return;
    }
    onBusy(true);
    onError("");
    try {
      setPreview(
        kind === "file"
          ? await chat.previewConstructionFile(value)
          : await chat.previewConstructionBox(value),
      );
    } catch (error) {
      onError(
        error instanceof Error
          ? error.message
          : "Could not review this source.",
      );
    } finally {
      onBusy(false);
    }
  };
  return (
    <section className="studio-node-box" aria-label={`${node.kind} source`}>
      <label>
        Source method
        <select
          aria-label={`Source method for ${node.kind}`}
          disabled={blocked}
          value={mode}
          onChange={(event) => {
            setMode(event.target.value as "box" | "file");
            setPreview(null);
            onError("");
          }}
        >
          <option value="box">Context Box</option>
          <option value="file">Single file</option>
        </select>
      </label>
      {mode === "box" ? (
        <label>
          Context Box source
          <select
            aria-label={`Context Box for ${node.kind}`}
            disabled={blocked}
            value={
              preview && "boxId" in preview.binding
                ? preview.binding.boxId
                : (node.config.contextBox?.boxId ?? "")
            }
            onChange={(event) => void review(event.target.value)}
          >
            <option value="">Choose a box to review</option>
            {chat.contextBoxes.map((box) => (
              <option key={box.id} value={box.id}>
                {box.name} · {box.items.length} files
              </option>
            ))}
          </select>
        </label>
      ) : (
        <>
          <label>
            Find a vault file
            <input
              aria-label={`Search files for ${node.kind}`}
              placeholder="File name or path"
              disabled={blocked}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <label>
            Single file
            <select
              aria-label={`Single file for ${node.kind}`}
              disabled={blocked}
              value={
                preview && "relativePath" in preview.binding
                  ? preview.binding.relativePath
                  : (node.config.contextFile?.relativePath ?? "")
              }
              onChange={(event) => void review(event.target.value)}
            >
              <option value="">Choose a file to review</option>
              {files
                .filter((path) =>
                  path.toLowerCase().includes(query.toLowerCase()),
                )
                .map((path) => (
                  <option key={path} value={path}>
                    {path}
                  </option>
                ))}
            </select>
          </label>
          <p>
            Choose a single Markdown, CSV, PDF or PNG/JPG/JPEG image from this
            vault. Review its full contents and estimated tokens before
            attaching it.
          </p>
        </>
      )}
      {binding && (
        <>
          <p>
            Attached: {label}
            <br />
            {binding.contextIdentity.sources.length} reviewed sources · ~
            {binding.estimatedTokens.toLocaleString()} tokens
          </p>
          <button
            disabled={blocked}
            onClick={() =>
              void review(
                "relativePath" in binding
                  ? binding.relativePath
                  : binding.boxId,
                "relativePath" in binding ? "file" : "box",
              )
            }
          >
            Review attached {"relativePath" in binding ? "file" : "box"}
          </button>
          <button
            disabled={blocked}
            onClick={() => {
              onConfig({
                ...node.config,
                contextBox: undefined,
                contextFile: undefined,
              });
              setPreview(null);
            }}
          >
            Detach source
          </button>
        </>
      )}
      {preview && (
        <div className="studio-box-review">
          <h4>
            Review{" "}
            {"relativePath" in preview.binding
              ? preview.binding.relativePath
              : preview.binding.boxName}
          </h4>
          <p>
            {preview.sources.length} sources · ~
            {preview.binding.estimatedTokens.toLocaleString()} tokens · full
            content
          </p>
          {preview.sources.map((source) => (
            <details key={source.sourceId}>
              <summary>{source.relativePath}</summary>
              <pre>{source.content}</pre>
            </details>
          ))}
          <p>
            {["Context", "Knowledge"].includes(node.kind)
              ? "These research sources are used only after you explicitly create a chat with them."
              : "These materials guide this role and stay separate from documentary evidence. They cannot grant tools or override protected policy."}
          </p>
          <button
            disabled={blocked}
            onClick={() => {
              const next =
                "relativePath" in preview.binding
                  ? { contextFile: preview.binding, contextBox: undefined }
                  : { contextBox: preview.binding, contextFile: undefined };
              onConfig({ ...node.config, ...next });
              setPreview(null);
              onNotice(
                `Reviewed source attached to ${node.kind}. Save & apply to activate it.`,
              );
            }}
          >
            Use reviewed {"relativePath" in preview.binding ? "file" : "box"}{" "}
            for {node.kind}
          </button>
          <button disabled={blocked} onClick={() => setPreview(null)}>
            Cancel review
          </button>
        </div>
      )}
      {mode === "box" && !chat.contextBoxes.length && (
        <p>
          Create a named Context Box in WorldView, or choose Single file above.
          Reviewing sources never creates a chat.
        </p>
      )}
    </section>
  );
}
