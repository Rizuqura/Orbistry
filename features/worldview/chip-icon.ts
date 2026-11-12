const MAX_ICON_BYTES = 5 * 1024 * 1024;
const ICON_SIZE = 128;

/**
 * Decodes an explicitly chosen PNG/JPEG/WebP into a small PNG data URL for the frontend session.
 * Rejects unsupported, oversized, or undecodable images; no upload, file write, or Vault access occurs.
 */
export async function readChipIcon(file: File): Promise<string> {
  if (!["image/png", "image/jpeg", "image/webp"].includes(file.type))
    throw new Error("Choose a PNG, JPEG, or WebP image.");
  if (file.size > MAX_ICON_BYTES)
    throw new Error("Choose an icon smaller than 5 MB.");
  const bitmap = await createImageBitmap(file);
  try {
    const canvas = document.createElement("canvas");
    canvas.width = ICON_SIZE;
    canvas.height = ICON_SIZE;
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Canvas is unavailable for this icon.");
    const scale = Math.min(ICON_SIZE / bitmap.width, ICON_SIZE / bitmap.height);
    const width = bitmap.width * scale;
    const height = bitmap.height * scale;
    context.drawImage(
      bitmap,
      (ICON_SIZE - width) / 2,
      (ICON_SIZE - height) / 2,
      width,
      height,
    );
    return canvas.toDataURL("image/png");
  } finally {
    bitmap.close();
  }
}
