export type PanelGeometry = {
  x: number;
  y: number;
  width: number;
  height: number;
};
export type ResizeDirection = "n" | "s" | "w" | "e" | "nw" | "ne" | "sw" | "se";
export function clampGeometry(
  g: PanelGeometry,
  width: number,
  height: number,
): PanelGeometry {
  const w = Math.min(width, Math.max(Math.min(360, width), g.width));
  const h = Math.min(height, Math.max(Math.min(360, height), g.height));
  return {
    x: Math.max(0, Math.min(g.x, width - w)),
    y: Math.max(0, Math.min(g.y, height - h)),
    width: w,
    height: h,
  };
}
export function defaultPlanetChatGeometry(
  width: number,
  height: number,
): PanelGeometry {
  const geometry = clampGeometry(
    {
      x: 12,
      y: 0,
      width: 440,
      height: Math.min(560, Math.max(0, height - 24)),
    },
    width,
    height,
  );
  return {
    ...geometry,
    x: Math.min(12, Math.max(0, width - geometry.width)),
    y: Math.max(0, height - geometry.height - 12),
  };
}

export function resizeGeometry(
  g: PanelGeometry,
  direction: ResizeDirection,
  dx: number,
  dy: number,
  width: number,
  height: number,
): PanelGeometry {
  let left = g.x,
    top = g.y,
    right = g.x + g.width,
    bottom = g.y + g.height;
  const minW = Math.min(360, width),
    minH = Math.min(360, height);
  if (direction.includes("w"))
    left = Math.max(0, Math.min(right - minW, left + dx));
  if (direction.includes("e"))
    right = Math.min(width, Math.max(left + minW, right + dx));
  if (direction.includes("n"))
    top = Math.max(0, Math.min(bottom - minH, top + dy));
  if (direction.includes("s"))
    bottom = Math.min(height, Math.max(top + minH, bottom + dy));
  return clampGeometry(
    { x: left, y: top, width: right - left, height: bottom - top },
    width,
    height,
  );
}
