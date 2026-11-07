export type DiagnosticCallback = (
  stage: string,
  metadata?: Record<string, unknown>,
  status?: "ok" | "error",
) => void;
export type RequestLogger = {
  step(
    stage: string,
    metadata?: Record<string, unknown>,
    status?: string,
  ): void;
  update(metadata: Record<string, unknown>): void;
  fail(error: unknown, metadata?: Record<string, unknown>): void;
  waiting(metadata: Record<string, unknown>, state?: () => string): () => void;
  finish(status?: string, error?: { code?: string }): void;
};
export function createRequestLogger(options?: {
  requestId?: string;
  runId?: string;
  mode?: "agent" | "experiment";
  enabled?: boolean;
  write?: (line: string) => void;
  clock?: () => number;
  wallClock?: () => number;
  heartbeatMs?: number;
}): RequestLogger;
export function safeMetadata(
  metadata?: Record<string, unknown>,
): Record<string, unknown>;
