import type { ModelMessage } from "../../../types/ai";
import type {
  BaselineCallPhase,
  BaselineTrace,
  RequestStageName,
} from "../../../types/front-office";

export type ObservedRequest = {
  model: string;
  messages: ModelMessage[];
  settings?: { outputLimit?: number; streaming?: boolean };
  signal?: AbortSignal;
  onContent?: (content: string) => void;
  onGenerationStarted?: (...args: unknown[]) => unknown;
};

/** Passive observer; the caller retains ownership of routing and cancellation. */
export function createBaselineObserver(options: {
  enabled?: boolean;
  mode?: "existing-agent-baseline" | "experiment";
  requestId?: string;
  runId: string;
  conversationId?: string;
  providerId: string;
  modelId: string;
  requestLogger?: import("../request-logger.cjs").RequestLogger;
  wallClock?: () => number;
  clock?: () => number;
}): {
  stage(
    name: RequestStageName,
    status?: "ok" | "error" | "skipped" | "bypassed" | "buffered",
    metadata?: {
      provider?: string;
      model?: string;
      errorCode?: string;
      httpStatus?: number;
      contentCharacters?: number;
      candidateCount?: number;
    },
  ): void;
  complete<Request extends ObservedRequest, Response>(
    provider: { complete(request: Request): Promise<Response> },
    request: Request,
    phase?: BaselineCallPhase,
  ): Promise<Response>;
  finish(
    status: "succeeded" | "failed" | "cancelled",
    error?: { code?: string },
  ): void;
  snapshot(): BaselineTrace | null;
};
