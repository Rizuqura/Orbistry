export const LOCAL_CONTEXT_LIMIT: number;
export const REMOTE_CONTEXT_LIMIT: number;
export function contextLimit(
  providerId: string,
  advertisedLength?: number | null,
): number;
