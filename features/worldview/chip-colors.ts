export type HsvColor = Readonly<{
  hue: number;
  saturation: number;
  value: number;
}>;

/** Normalizes a six-digit CSS hex color; invalid input throws without side effects. */
export function normalizeChipColor(input: string): string {
  const color = input.trim();
  if (!/^#[0-9a-f]{6}$/i.test(color))
    throw new Error("Enter a color as #RRGGBB.");
  return color.toLowerCase();
}

/** Converts degrees and unit-range saturation/value into a clamped six-digit CSS color. */
export function hsvToHex(color: HsvColor): string {
  const hue = (((color.hue % 360) + 360) % 360) / 60;
  const saturation = Math.max(0, Math.min(1, color.saturation));
  const value = Math.max(0, Math.min(1, color.value));
  const chroma = value * saturation;
  const secondary = chroma * (1 - Math.abs((hue % 2) - 1));
  const sections = [
    [chroma, secondary, 0],
    [secondary, chroma, 0],
    [0, chroma, secondary],
    [0, secondary, chroma],
    [secondary, 0, chroma],
    [chroma, 0, secondary],
  ];
  let hex = "#";
  for (const channel of sections[Math.floor(hue)])
    hex += Math.round((channel + value - chroma) * 255)
      .toString(16)
      .padStart(2, "0");
  return hex;
}

/** Converts validated CSS hex into HSV for wheel positioning; invalid colors throw. */
export function hexToHsv(input: string): HsvColor {
  const hex = normalizeChipColor(input);
  const red = parseInt(hex.slice(1, 3), 16) / 255;
  const green = parseInt(hex.slice(3, 5), 16) / 255;
  const blue = parseInt(hex.slice(5, 7), 16) / 255;
  const maximum = Math.max(red, green, blue);
  const minimum = Math.min(red, green, blue);
  const delta = maximum - minimum;
  let hue = 0;
  if (delta) {
    if (maximum === red) hue = 60 * (((green - blue) / delta) % 6);
    else if (maximum === green) hue = 60 * ((blue - red) / delta + 2);
    else hue = 60 * ((red - green) / delta + 4);
  }
  return {
    hue: (hue + 360) % 360,
    saturation: maximum ? delta / maximum : 0,
    value: maximum,
  };
}

/** Darkens the chosen top color for a side face; rejects invalid CSS colors. */
export function shadeChipColor(color: string, amount: number): string {
  const hsv = hexToHsv(color);
  return hsvToHex({ ...hsv, value: hsv.value * amount });
}

/** Chooses dark or light icon/name ink using relative luminance for readable custom tiles. */
export function chipTextColor(color: string): string {
  const hex = normalizeChipColor(color);
  const weights = [0.2126, 0.7152, 0.0722];
  let luminance = 0;
  for (let index = 0; index < 3; index += 1) {
    const channel = parseInt(hex.slice(1 + index * 2, 3 + index * 2), 16) / 255;
    const linear =
      channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
    luminance += linear * weights[index];
  }
  return luminance > 0.179 ? "#101418" : "#f4f7fa";
}
