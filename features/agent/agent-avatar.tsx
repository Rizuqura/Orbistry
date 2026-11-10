"use client";
import { useEffect, useState } from "react";
import type { AgentConfig } from "../../types/ai";
export function AgentAvatar({
  agent,
  preview,
}: {
  agent: AgentConfig | null;
  preview?: string | null;
}) {
  const url = preview === undefined ? agent?.avatarUrl : preview;
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [url]);
  return (
    <span
      className="agent-avatar"
      aria-label={`${agent?.displayName ?? "Orbistry Agent"} profile picture`}
    >
      {url && !failed ? (
        <img
          src={url}
          alt={agent?.displayName ?? "Orbistry Agent"}
          onError={() => setFailed(true)}
        />
      ) : (
        <span aria-hidden="true">
          {agent?.avatar.type === "letter"
            ? agent.avatar.letter
            : (agent?.displayName.toUpperCase().match(/[A-Z0-9]/)?.[0] ?? "A")}
        </span>
      )}
    </span>
  );
}
