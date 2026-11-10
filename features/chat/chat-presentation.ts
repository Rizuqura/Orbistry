import type { AgentAppearance } from "../../types/ai";
import type { CSSProperties } from "react";
export function bannerStyle(url?: string | null): CSSProperties | undefined {
  return url
    ? {
        backgroundImage: `url("${url}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundOrigin: "border-box",
        backgroundClip: "border-box",
        backgroundRepeat: "no-repeat",
      }
    : undefined;
}
// Stored appearance values remain compatible; display the revised compact scale.
export function chatReadingSize(size = 15): number {
  return Math.max(12, size - 2);
}
export function wallpaperStyle(appearance?: AgentAppearance): CSSProperties {
  const base: CSSProperties = {
    "--chat-reading-size": `${chatReadingSize(appearance?.fontSize)}px`,
  } as CSSProperties;
  if (appearance?.wallpaperMode === "image" && appearance.wallpaperUrl) {
    const shade = appearance.dim / 100;
    return {
      ...base,
      backgroundImage: `linear-gradient(rgba(13,17,23,${shade}),rgba(13,17,23,${shade})),url("${appearance.wallpaperUrl}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  }
  if (appearance?.wallpaperMode === "dots")
    return {
      ...base,
      backgroundImage:
        "radial-gradient(rgba(150,190,190,.17) 1px,transparent 1px)",
      backgroundSize: "24px 24px",
    };
  return base;
}
