import type { AiBridge } from "../../types/ai";

export const AI_API_VERSION = 18;

export async function connectAi(): Promise<AiBridge> {
  const desktop = window.orbistryDesktop;
  if (desktop?.apiVersion !== AI_API_VERSION || !desktop.ai?.handshake) {
    throw Object.assign(
      new Error("Restart Orbistry to load the updated desktop backend."),
      { code: "MODEL_RESTART_REQUIRED" },
    );
  }
  const result = await desktop.ai.handshake(AI_API_VERSION);
  if (result.apiVersion !== AI_API_VERSION)
    throw Object.assign(
      new Error("Restart Orbistry: renderer and backend versions differ."),
      { code: "MODEL_RESTART_REQUIRED" },
    );
  return desktop.ai;
}
