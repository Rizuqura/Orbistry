const unzipper = require("unzipper");
const sax = require("sax");
const { crc32 } = require("node:zlib");
const { TextDecoder } = require("node:util");
const { LIMITS } = require("./limits.cjs");

/** Checks the small ZIP directory trailer before the ZIP library allocates its entry list. Rejects ZIP64/multi-volume archives. */
function validateDirectory(bytes) {
  if (bytes.length < 22 || bytes.readUInt32LE(0) !== 0x04034b50)
    throw new Error(
      "Not an XLSX ZIP workbook (encrypted/legacy files are unsupported).",
    );
  let end = -1;
  for (let i = bytes.length - 22; i >= Math.max(0, bytes.length - 65557); i--) {
    if (
      bytes.readUInt32LE(i) === 0x06054b50 &&
      i + 22 + bytes.readUInt16LE(i + 20) === bytes.length
    ) {
      end = i;
      break;
    }
  }
  if (end < 0) throw new Error("Corrupt workbook ZIP directory.");
  const count = bytes.readUInt16LE(end + 10);
  if (
    bytes.readUInt16LE(end + 4) ||
    bytes.readUInt16LE(end + 6) ||
    bytes.readUInt16LE(end + 8) !== count ||
    !count ||
    count > LIMITS.entries ||
    bytes.readUInt32LE(end + 12) > 2 * 1024 * 1024 ||
    bytes.readUInt32LE(end + 16) + bytes.readUInt32LE(end + 12) !== end
  )
    throw new Error(
      "Unsupported or oversized ZIP directory (ZIP64 is not supported).",
    );
}

/** Opens an in-memory XLSX archive without extracting files. Limits declared and actual expansion and verifies CRC on every consumed part. */
async function openArchive(bytes) {
  if (bytes.length > LIMITS.fileBytes)
    throw new Error("Workbook exceeds 25 MB.");
  validateDirectory(bytes);
  const directory = await unzipper.Open.buffer(bytes);
  const entries = new Map();
  const names = new Set();
  let declared = 0;
  for (const entry of directory.files) {
    const name = entry.path;
    if (
      !name ||
      name.includes("\\") ||
      name.startsWith("/") ||
      name.split("/").some((part) => part === ".." || part === "./index") ||
      names.has(name.toLowerCase()) ||
      entry.flags & 1 ||
      ![0, 8].includes(entry.compressionMethod)
    )
      throw new Error("Unsafe, duplicate, encrypted or unsupported ZIP entry.");
    names.add(name.toLowerCase());
    declared += entry.uncompressedSize;
    if (
      !Number.isSafeInteger(declared) ||
      entry.uncompressedSize > LIMITS.partBytes ||
      declared > LIMITS.expandedBytes
    )
      throw new Error("Workbook exceeds safe expanded-size limits.");
    entries.set(name, entry);
  }
  /** Reads one bounded part, checking actual output rather than trusting attacker-controlled ZIP size headers. */
  async function read(name, optional = false) {
    const entry = entries.get(name);
    if (!entry) {
      if (optional) return null;
      throw new Error(`Workbook part is missing: ${name}`);
    }
    const chunks = [];
    let size = 0;
    let checksum = 0;
    const stream = entry.stream();
    try {
      for await (const chunk of stream) {
        size += chunk.length;
        if (size > LIMITS.partBytes || size > entry.uncompressedSize)
          throw new Error("Workbook part exceeds its safe expansion limit.");
        checksum = crc32(chunk, checksum);
        chunks.push(chunk);
      }
    } finally {
      stream.destroy();
    }
    if (size !== entry.uncompressedSize || checksum !== entry.crc32)
      throw new Error("Corrupt workbook part: size or CRC does not match.");
    return Buffer.concat(chunks, size);
  }
  return { entries, read };
}

/** Streams strict namespace-aware XML events to a scanner; rejects DTDs/entities and non-XML processing instructions. No resources are fetched. */
function scanXml(bytes, handlers) {
  const encoding =
    bytes[0] === 0xff && bytes[1] === 0xfe
      ? "utf-16le"
      : bytes[0] === 0xfe && bytes[1] === 0xff
        ? "utf-16be"
        : "utf-8";
  const xml = new TextDecoder(encoding, { fatal: true }).decode(bytes);
  if (/<!DOCTYPE|<!ENTITY/i.test(xml))
    throw new Error("Workbook XML DTDs/entities are not supported.");
  const parser = sax.parser(true, { xmlns: true, strictEntities: true });
  let depth = 0;
  parser.onprocessinginstruction = function instruction(node) {
    if (node.name !== "xml")
      throw new Error("Unsupported XML processing instruction.");
  };
  parser.onopentag = function open(node) {
    if (++depth > 64)
      throw new Error("Workbook XML nesting exceeds the safe limit.");
    const attributes = {};
    for (const attribute of Object.values(node.attributes))
      attributes[attribute.name] = attribute.value;
    handlers.open?.(node.local, attributes, node.uri);
  };
  parser.ontext = parser.oncdata = function text(value) {
    handlers.text?.(value);
  };
  parser.onclosetag = function close(name) {
    handlers.close?.(name.split(":").at(-1));
    depth--;
  };
  for (let offset = 0; offset < xml.length; offset += 8192)
    parser.write(xml.slice(offset, offset + 8192));
  parser.close();
}
module.exports = { openArchive, scanXml };
