const SSF = require("ssf");
const BUILTIN_FORMATS = {
  0: "General",
  1: "0",
  2: "0.00",
  3: "#,##0",
  4: "#,##0.00",
  9: "0%",
  10: "0.00%",
  11: "0.00E+00",
  12: "# ?/?",
  13: "# ??/??",
  14: "mm-dd-yy",
  15: "d-mmm-yy",
  16: "d-mmm",
  17: "mmm-yy",
  18: "h:mm AM/PM",
  19: "h:mm:ss AM/PM",
  20: "h:mm",
  21: "h:mm:ss",
  22: "m/d/yy h:mm",
  37: "#,##0 ;(#,##0)",
  38: "#,##0 ;[Red](#,##0)",
  39: "#,##0.00;(#,##0.00)",
  40: "#,##0.00;[Red](#,##0.00)",
  45: "mm:ss",
  46: "[h]:mm:ss",
  47: "mmss.0",
  48: "##0.0E+0",
  49: "@",
};

/** Returns an Excel column label for a validated one-based column number. */
function columnLabel(column) {
  let result = "";
  for (let n = column; n > 0; n = Math.floor((n - 1) / 26))
    result = String.fromCharCode(65 + ((n - 1) % 26)) + result;
  return result;
}

/** Parses a real XLSX coordinate, rejecting out-of-grid or malformed references rather than shifting cells. */
function coordinate(address) {
  const match = /^([A-Z]{1,3})([1-9]\d{0,6})$/.exec(address ?? "");
  if (!match) throw new Error("Invalid worksheet cell coordinate.");
  let column = 0;
  for (const character of match[1])
    column = column * 26 + character.charCodeAt(0) - 64;
  const row = Number(match[2]);
  if (column > 16384 || row > 1048576)
    throw new Error("Worksheet coordinate is outside the Excel grid.");
  return { row, column };
}

/** Parses and validates an inclusive worksheet range, returning its original bounds. */
function sourceRange(value) {
  const parts = value.split(":");
  if (parts.length > 2) throw new Error("Invalid worksheet range.");
  const start = coordinate(parts[0]);
  const end = coordinate(parts[1] ?? parts[0]);
  if (start.row > end.row || start.column > end.column)
    throw new Error("Reversed worksheet range.");
  return {
    startRow: start.row,
    startColumn: start.column,
    endRow: end.row,
    endColumn: end.column,
  };
}

/** Decodes OOXML escaped control characters in one pass, preserving escaped literal _xNNNN_ sequences. */
function decodeString(text) {
  return text.replace(/_x([0-9a-f]{4})_/gi, function decode(_, digits) {
    return String.fromCharCode(parseInt(digits, 16));
  });
}

/** Classifies number-format meaning without pretending to implement Excel's full locale/conditional formatting engine. */
function formatMeaning(format, id) {
  const code = format.replace(/"[^"]*"|\\.|\[(?![hms]+\])[^\]]*\]/gi, "");
  if (/\[[hms]+\]/i.test(code)) return "duration";
  if (
    /[yd]/i.test(code) ||
    (id >= 14 && id <= 17) ||
    (id >= 27 && id <= 36) ||
    (id >= 50 && id <= 58)
  )
    return /[hs]/i.test(code) ? "datetime" : "date";
  if (/[hs]/i.test(code) || /^[m]+[:/]/i.test(code)) return "time";
  return "number";
}

/** Renders a serial deterministically in UTC; preserves the fictitious Excel 1900 leap day explicitly. */
function serialDisplay(value, meaning, dateSystem) {
  if (meaning === "duration") return `${value * 24} hours`;
  const day = Math.floor(value);
  const milliseconds = Math.round((value - day) * 86400000);
  const time = new Date(milliseconds)
    .toISOString()
    .slice(11, 23)
    .replace(/\.000$/, "");
  if (meaning === "time") return time;
  const serial = dateSystem === "1904" ? day : day > 60 ? day - 1 : day;
  const epoch =
    dateSystem === "1904" ? Date.UTC(1904, 0, 1) : Date.UTC(1899, 11, 31);
  const date =
    dateSystem === "1900" && day === 60
      ? "1900-02-29 (Excel serial 60)"
      : new Date(epoch + serial * 86400000).toISOString().slice(0, 10);
  return meaning === "date" ? date : `${date}T${time}`;
}

/** Converts a stored scalar to typed data and deterministic display, retaining raw XML and format metadata separately. Throws on invalid scalar data. */
function scalar(raw, storageType, format, formatId, strings, dateSystem) {
  if (storageType === "s") {
    if (!/^\d+$/.test(raw) || strings[Number(raw)] === undefined)
      throw new Error("Invalid shared-string reference.");
    return {
      type: "string",
      value: strings[Number(raw)],
      display: strings[Number(raw)],
    };
  }
  if (["inlineStr", "str"].includes(storageType)) {
    const value = decodeString(raw);
    return { type: "string", value, display: value };
  }
  if (storageType === "b") {
    if (raw !== "0" && raw !== "1") throw new Error("Invalid boolean cell.");
    return {
      type: "boolean",
      value: raw === "1",
      display: raw === "1" ? "true" : "false",
    };
  }
  if (storageType === "e") return { type: "error", value: raw, display: raw };
  if (storageType === "d") return { type: "date", value: raw, display: raw };
  if (storageType && storageType !== "n")
    throw new Error(`Unsupported cell storage type: ${storageType}`);
  if (
    !/^[+-]?(?:\d+\.?\d*|\.\d+)(?:[Ee][+-]?\d+)?$/.test(raw) ||
    !Number.isFinite(Number(raw))
  )
    throw new Error("Invalid numeric cell value.");
  const value = Number(raw);
  const type = formatMeaning(format, formatId);
  if (type !== "number")
    return { type, value, display: serialDisplay(value, type, dateSystem) };
  return { type, value, ...numericDisplay(value, raw, format) };
}

/** Formats a saved number with inert spreadsheet format rules. Unsupported formats return raw text plus an explicit metadata warning, never inline format-code clutter. */
function numericDisplay(value, raw, format) {
  const fallback = {
    display: raw,
    displayWarning:
      "An unsupported number format is shown as its raw value; the original format remains available in cell metadata.",
  };
  if (format.startsWith("builtin:")) return fallback;
  try {
    const display = SSF.format(format, value);
    return typeof display === "string" ? { display } : fallback;
  } catch (error) {
    // SSF reports unsupported input formats as either Error objects or strings.
    if (!(error instanceof Error) && typeof error !== "string") throw error;
    return fallback;
  }
}
module.exports = {
  BUILTIN_FORMATS,
  columnLabel,
  coordinate,
  sourceRange,
  decodeString,
  scalar,
};
