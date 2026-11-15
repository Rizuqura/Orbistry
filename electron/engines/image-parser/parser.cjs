const { createHash } = require("node:crypto");
const PARSER_VERSION = "0.1.0";
const MAX_IMAGE_BYTES = 25 * 1024 * 1024;
const MAX_IMAGE_PIXELS = 20 * 1024 * 1024;

/** Extracts PNG/JPEG header dimensions before decoding. Rejects unsupported, malformed, oversized or excessive-dimension input. Pure. */
function imageMetadata(bytes) {
  if (!Buffer.isBuffer(bytes) || bytes.length > MAX_IMAGE_BYTES)
    throw new Error("Image must be within 25 MB.");
  let format;
  let width;
  let height;
  if (
    bytes.length >= 33 &&
    bytes
      .subarray(0, 8)
      .equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])) &&
    bytes.readUInt32BE(8) === 13 &&
    bytes.toString("ascii", 12, 16) === "IHDR"
  ) {
    format = "png";
    width = bytes.readUInt32BE(16);
    height = bytes.readUInt32BE(20);
  } else if (bytes[0] === 0xff && bytes[1] === 0xd8) {
    format = "jpeg";
    let offset = 2;
    while (offset + 4 < bytes.length) {
      if (bytes[offset++] !== 0xff) continue;
      while (bytes[offset] === 0xff) offset++;
      const marker = bytes[offset++];
      if (marker === 0xda || marker === 0xd9) break;
      if (marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) continue;
      if (offset + 2 > bytes.length) break;
      const length = bytes.readUInt16BE(offset);
      if (length < 2 || offset + length > bytes.length)
        throw new Error("Malformed JPEG segment.");
      if (
        [
          0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd,
          0xce, 0xcf,
        ].includes(marker) &&
        length >= 8
      ) {
        height = bytes.readUInt16BE(offset + 3);
        width = bytes.readUInt16BE(offset + 5);
        break;
      }
      offset += length;
    }
  }
  if (!format || !width || !height)
    throw new Error("A valid PNG or JPEG image is required.");
  if (width > 16384 || height > 16384 || width * height > MAX_IMAGE_PIXELS)
    throw new Error("Image exceeds 16384 pixels per edge or 20 megapixels.");
  return { format, width, height, sizeBytes: bytes.length };
}

/** Builds a stable cache identity including content, parser version, explicit processing options and trusted adapter identities. */
function imageCacheKey(bytes, configuration) {
  return createHash("sha256")
    .update(bytes)
    .update(JSON.stringify({ parserVersion: PARSER_VERSION, configuration }))
    .digest("hex");
}

/**
 * Parses bounded image bytes with optional trusted offline OCR and vision adapters, returning provenance-rich knowledge.
 * OCR adapter exposes id/version and recognize(snapshotPath,{signal}); a future vision adapter exposes id/version and describe({bytes,metadata,extractedText,signal}).
 * Metadata errors/cancellation reject. Adapter failures produce explicit partial results. Performs adapter work only on an explicit caller request.
 */
async function parseImage(
  bytes,
  {
    snapshotPath,
    ocr = true,
    ocrAdapter = null,
    visionAdapter = null,
    signal,
  } = {},
) {
  if (signal?.aborted) throw new Error("Image parsing was cancelled.");
  const metadata = imageMetadata(bytes);
  const warnings = [];
  const errors = [];
  let extractedText = "";
  let description = null;
  let descriptionMethod = null;
  let method = "metadata";
  if (ocr && ocrAdapter) {
    try {
      const result = await ocrAdapter.recognize(snapshotPath, { signal });
      extractedText = result.pages.map((page) => page.text).join("\n");
      method = "local-ocr";
      if (extractedText.length > 1024 * 1024) {
        extractedText = extractedText.slice(0, 1024 * 1024);
        warnings.push("OCR text was limited to 1 MB.");
      }
      if (!extractedText.trim())
        warnings.push("Local OCR found no readable text.");
    } catch (error) {
      errors.push(error.message);
    }
  } else if (ocr) warnings.push("Local OCR is unavailable on this platform.");
  if (signal?.aborted) throw new Error("Image parsing was cancelled.");
  if (visionAdapter) {
    try {
      const result = await visionAdapter.describe({
        bytes,
        metadata,
        extractedText,
        signal,
      });
      if (
        typeof result.description !== "string" ||
        !result.description.trim() ||
        result.description.length > 32768
      )
        throw new Error("Vision adapter returned an invalid description.");
      description = result.description;
      descriptionMethod = {
        type: "vision",
        adapterId: visionAdapter.id,
        adapterVersion: visionAdapter.version,
      };
      method = method === "local-ocr" ? "local-ocr+vision" : "vision";
    } catch (error) {
      errors.push(error.message);
    }
  }
  if (signal?.aborted) throw new Error("Image parsing was cancelled.");
  if (description === null)
    warnings.push("Visual interpretation has not been performed.");
  return {
    parser: "image-parser",
    parserVersion: PARSER_VERSION,
    sourceHash: `sha256:${createHash("sha256").update(bytes).digest("hex")}`,
    ...metadata,
    extractedText,
    description,
    descriptionMethod,
    visualInterpretationAvailable: description !== null,
    method,
    status: errors.length || (ocr && !ocrAdapter) ? "partial" : "completed",
    warnings,
    errors,
    processedAt: new Date().toISOString(),
  };
}
module.exports = {
  PARSER_VERSION,
  MAX_IMAGE_BYTES,
  MAX_IMAGE_PIXELS,
  imageMetadata,
  imageCacheKey,
  parseImage,
};
