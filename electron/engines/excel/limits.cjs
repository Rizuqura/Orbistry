const VERSION = "0.1.2";
const LIMITS = Object.freeze({
  fileBytes: 25 * 1024 * 1024,
  expandedBytes: 128 * 1024 * 1024,
  partBytes: 32 * 1024 * 1024,
  entries: 4096,
  sheets: 128,
  cells: 100000,
  textLength: 65536,
  resultBytes: 48 * 1024 * 1024,
  timeoutMs: 20000,
  previewRows: 100,
  previewColumns: 20,
  markdownCells: 200000,
});
module.exports = { VERSION, LIMITS };
