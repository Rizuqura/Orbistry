import type { WorldViewChip } from "../features/worldview/chips";
import type { WorldConnector } from "../features/worldview/connectors";

export type WorldViewSource = Readonly<{
  sourceId: string;
  sourceRef: string;
  filename: string;
  extension: string;
  origin: "universe";
  sizeBytes: number | null;
  recordedSizeBytes: number | null;
  status: "available" | "missing" | "unavailable";
  message?: string;
}>;
export type WorldViewState = Readonly<{
  rootPath: string;
  indexDirectory: string;
  chips: WorldViewChip[];
  connectors?: WorldConnector[];
  issues: { index: string; message: string }[];
}>;
export type UniverseEntry = Readonly<{
  kind: "file" | "folder";
  name: string;
  relativePath: string;
  extension?: string;
  sizeBytes?: number | null;
}>;
export type UniverseListing = Readonly<{
  rootPath: string;
  directory: string;
  query: string;
  entries: UniverseEntry[];
  issues: { relativePath: string; message: string }[];
}>;
export type WorldViewOperation =
  | "knowledge-note"
  | "image-preview"
  | "image-knowledge"
  | "image-parse"
  | "image-status"
  | "image-cancel"
  | "tag-search"
  | "tag-index"
  | "tag-associations"
  | "tag-rebuild"
  | "connector-create"
  | "connector-update"
  | "connector-delete"
  | "knowledge-load"
  | "knowledge-draft"
  | "knowledge-validate"
  | "knowledge-apply"
  | "knowledge-preview"
  | "price-symbol"
  | "price-get"
  | "price-index"
  | "knowledge-excel"
  | "knowledge-excel-copy"
  | "knowledge-reveal"
  | "load"
  | "save"
  | "delete"
  | "list"
  | "assign"
  | "unassign"
  | "reveal";
export type WorldViewRequest = {
  vaultPath: string;
  chip?: WorldViewChip;
  connector?: WorldConnector;
  previousConnector?: WorldConnector;
  id?: string;
  directory?: string;
  query?: string;
  sourceRefs?: string[];
  sourceId?: string;
  sourceRef?: string;
  draft?: string;
  revision?: string | null;
  carouselId?: string;
  force?: boolean;
  note?: string;
  symbol?: string;
  menuId?: string;
  priceId?: string;
  sheetIndex?: number;
  rowOffset?: number;
  columnOffset?: number;
  sourceHash?: string;
  format?: "preview" | "markdown" | "structured";
};

export type WorldTagSearchResult = Readonly<{
  entityId: string;
  name: string;
  worldId: string;
  matchedTag: string | null;
  matchedTags: readonly string[];
  matchType: "exact" | "partial" | "associated";
  matchField: "tag" | "name";
  cooccurrence: number | null;
  confidence: number | null;
}>;
export type WorldTagSearchResponse = Readonly<{
  query: string;
  normalizedQuery: string;
  worldId: string;
  revision: string;
  results: readonly WorldTagSearchResult[];
  suggestions: readonly { tag: string; display: string; count: number }[];
  associations: readonly {
    tag: string;
    display: string;
    count: number;
    confidence: number;
  }[];
  cacheState: "restored" | "rebuilt" | "memory";
  warnings: readonly string[];
}>;

export type IndexedKnowledgeMenu = Readonly<{
  id: string;
  title: string;
  sourceIds: readonly string[];
  line: number;
  carousels?: readonly KnowledgeCarousel[];
  prices?: readonly IndexedPriceSource[];
}>;
export type IndexedPriceSource = Readonly<{
  id: string;
  symbol: string | null;
  line: number;
}>;
export type KnowledgeCarousel = Readonly<{
  id: string;
  name: string;
  sourceIds: readonly string[];
  view: "carousel" | "timeline";
  line: number;
  observations?: readonly CarouselObservation[];
}>;
export type CarouselObservation = Readonly<{
  sourceId: string;
  observedAt?: string;
  location?: string;
  caption?: string;
  notes?: string;
  analysisStatus?: string;
}>;
export type ImageKnowledgeResult = Readonly<{
  sourceId: string;
  sourceRef: string;
  sourceHash: string;
  parser: "image-parser";
  parserVersion: string;
  format: "png" | "jpeg";
  width: number;
  height: number;
  sizeBytes: number;
  extractedText: string;
  description: string | null;
  descriptionMethod: {
    type: "vision";
    adapterId: string;
    adapterVersion: string;
  } | null;
  visualInterpretationAvailable: boolean;
  method: string;
  status: "completed" | "partial";
  warnings: readonly string[];
  errors: readonly string[];
  processedAt: string;
  cacheHit: boolean;
  cacheKey: string;
  configuration: Readonly<{
    ocr: boolean;
    ocrAdapter: string | null;
    visionAdapter: string | null;
  }>;
}>;
export type ImageParseJob = Readonly<{
  id: string;
  entityId: string;
  carouselId: string;
  status: "processing" | "completed" | "partial" | "failed";
  entries: readonly {
    sourceId: string;
    status: "not-parsed" | "processing" | "completed" | "partial" | "failed";
    result: ImageKnowledgeResult | null;
    error: string;
  }[];
}>;
export type IndexValidation = Readonly<{
  menus: readonly IndexedKnowledgeMenu[];
  errors: readonly { line: number; message: string }[];
}>;
export type KnowledgeIndexState = Readonly<{
  priceSymbol?: string;
  sourceNotes?: readonly { sourceId: string; text: string }[];
  draft: string;
  applied: string | null;
  menus: readonly IndexedKnowledgeMenu[];
  revision: string | null;
}>;
export type DailyPriceResponse = Readonly<{
  cached: boolean;
  stale: boolean;
  warning: string | null;
  snapshot: Readonly<{
    symbol: string;
    currency: string;
    exchangeTimezone: string;
    price: number;
    previousClose: number | null;
    marketTime: string;
    marketState: string;
    delayMinutes: number | null;
    fetchedAt: string;
    historyFetchedAt: string;
    history: readonly Readonly<{ date: string; close: number }>[];
  }>;
}>;
export type KnowledgeIndexSave = KnowledgeIndexState &
  Readonly<{ saved: boolean; validation?: IndexValidation }>;
type PreviewMetadata = Readonly<{
  name: string;
  relativePath: string;
  extension: string;
  size: number;
}>;
export type ExcelSourcePreview = PreviewMetadata &
  Readonly<{
    kind: "excel";
    sourceHash: string;
    engineVersion: string;
    dateSystem: "1900" | "1904";
    cacheHit: boolean;
    sheetIndex: number;
    warnings: readonly string[];
    sheets: readonly Readonly<{
      name: string;
      index: number;
      state: string;
      range: string | null;
      merges: readonly string[];
      warnings: readonly string[];
    }>[];
    page: Readonly<{
      columns: readonly string[];
      rows: readonly Readonly<{
        number: number;
        cells: readonly Readonly<{
          coordinate: string;
          text: string;
          isNumeric: boolean;
        }>[];
      }>[];
      truncated: boolean;
      rowOffset: number;
      columnOffset: number;
      totalRows: number;
      totalColumns: number;
    }>;
    markdown: string;
  }>;
export type KnowledgeSourcePreview = PreviewMetadata &
  (
    | Readonly<{ kind: "text"; content: string }>
    | Readonly<{ kind: "pdf"; data: Uint8Array }>
    | Readonly<{ kind: "image"; dataUrl: string }>
    | Readonly<{ kind: "unsupported" }>
    | ExcelSourcePreview
  );
export type WorldViewBridge = {
  request: <T = unknown>(
    operation: WorldViewOperation,
    input: WorldViewRequest,
  ) => Promise<T>;
};
