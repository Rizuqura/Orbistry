import type { Point } from "./coordinates";
import type { ChipDraft, WorldViewChip } from "./chips";
import type { WorldViewBridge, WorldViewState } from "../../types/worldview";

// Render snapshots stay in memory; configured desktop sessions save each entity to its Markdown index.
const EMPTY_CHIPS: readonly WorldViewChip[] = [];
let chips = EMPTY_CHIPS;
const listeners = new Set<() => void>();
type PersistenceState = Readonly<{
  rootPath: string | null;
  loading: boolean;
  ready: boolean;
  pending: number;
  error: string;
  indexDirectory: string;
  issues: readonly { index: string; message: string }[];
}>;
let persistence: PersistenceState = {
  rootPath: null,
  loading: false,
  ready: false,
  pending: 0,
  error: "",
  indexDirectory: "",
  issues: [],
};
const SERVER_PERSISTENCE = persistence;
let generation = 0;
let tail: Promise<void> = Promise.resolve();
let loading: Promise<void> | null = null;
const failed = new Map<
  string,
  { root: string; key: string; operation: () => Promise<void> }
>();

/** Returns stable save/load status for React's external-store subscription. */
export function getWorldViewPersistence(): PersistenceState {
  return persistence;
}
/** Returns a stable SSR status without accessing the desktop bridge. */
export function getServerPersistence(): PersistenceState {
  return SERVER_PERSISTENCE;
}
/** Publishes loading/save status without changing source files or triggering another save. */
function setPersistence(next: Partial<PersistenceState>): void {
  persistence = { ...persistence, ...next };
  for (const listener of listeners) listener();
}

/** Requires the explicit WorldView desktop API; an outdated bridge is surfaced instead of pretending to save. */
export function requireWorldViewBridge(): WorldViewBridge {
  const bridge = window.orbistryDesktop?.worldview;
  if (!bridge?.request)
    throw new Error(
      "Restart the desktop app to enable saved WorldView metadata.",
    );
  return bridge;
}

/** Updates resolved source metadata while preserving any more recent local chip movement or edits. */
export function replaceChipSources(saved: WorldViewChip): void {
  const next: WorldViewChip[] = [];
  for (const chip of chips)
    next.push(
      chip.id === saved.id
        ? { ...chip, sources: saved.sources, indexRef: saved.indexRef }
        : chip,
    );
  publish(next);
}

/** Queues a recoverable metadata write; failure remains visible until the latest operation for that entity succeeds. */
function queueWrite(
  root: string,
  key: string,
  operation: () => Promise<void>,
): void {
  const failureKey = `${root}\0${key}`;
  if (persistence.rootPath === root)
    setPersistence({ pending: persistence.pending + 1 });
  tail = tail.then(async function writeMetadata() {
    try {
      await operation();
      failed.delete(failureKey);
    } catch (error) {
      failed.set(failureKey, { root, key, operation });
      if (persistence.rootPath === root)
        setPersistence({
          error:
            error instanceof Error
              ? error.message
              : "WorldView changes could not be saved.",
        });
    } finally {
      if (persistence.rootPath === root) {
        let hasFailure = false;
        for (const item of failed.values())
          if (item.root === root) hasFailure = true;
        setPersistence({
          pending: Math.max(0, persistence.pending - 1),
          error: hasFailure ? persistence.error : "",
        });
      }
    }
  });
}

/** Schedules a snapshot save only after a real Universe session has been loaded. */
function persistChip(chip: WorldViewChip): void {
  const root = persistence.rootPath;
  if (!root || !persistence.ready) return;
  const bridge = requireWorldViewBridge();
  const snapshot = structuredClone(chip);
  queueWrite(root, chip.id, async function saveEntity() {
    const saved = await bridge.request<WorldViewChip>("save", {
      vaultPath: root,
      chip: snapshot,
    });
    if (persistence.rootPath === root) replaceChipSources(saved);
  });
}

/** Waits until queued writes finish; failed writes reject so assignment cannot silently outpace persistence. */
export async function flushWorldViewWrites(): Promise<void> {
  await tail;
  for (const item of failed.values())
    if (item.root === persistence.rootPath)
      throw new Error(
        persistence.error || "WorldView metadata has unsaved changes.",
      );
}

/** Loads chip indexes for the actual Universe root, preserving unsaved edits if a reload fails. */
export async function loadWorldViewSession(root: string): Promise<void> {
  if (loading && persistence.rootPath === root) return loading;
  if (persistence.rootPath !== root) {
    generation += 1;
    persistence = { ...SERVER_PERSISTENCE, rootPath: root };
    publish(EMPTY_CHIPS);
  }
  const version = generation;
  setPersistence({ loading: true, error: "" });
  /** Reconstructs saved chips and reports individual damaged index records for review. */
  const request = async function readWorld() {
    try {
      await flushWorldViewWrites();
      const value = await requireWorldViewBridge().request<WorldViewState>(
        "load",
        { vaultPath: root },
      );
      if (version !== generation) return;
      publish(value.chips);
      setPersistence({
        ready: true,
        indexDirectory: value.indexDirectory,
        issues: value.issues,
      });
    } catch (error) {
      if (version === generation)
        setPersistence({
          error:
            error instanceof Error
              ? error.message
              : "WorldView metadata could not be loaded.",
        });
    } finally {
      if (version === generation) {
        setPersistence({ loading: false });
        loading = null;
      }
    }
  };
  loading = request();
  return loading;
}

/** Retries failed writes for the current Universe, or reloads metadata after an initial load failure. */
export async function retryWorldViewWrites(): Promise<void> {
  const root = persistence.rootPath;
  if (!root) return;
  let retried = false;
  for (const item of [...failed.values()])
    if (item.root === root) {
      retried = true;
      queueWrite(root, item.key, item.operation);
    }
  if (retried) {
    await flushWorldViewWrites();
    if (!persistence.ready) await loadWorldViewSession(root);
  } else await loadWorldViewSession(root);
}

/** Returns the stable current render snapshot for React and the canvas renderer. */
export function getSessionChips(): readonly WorldViewChip[] {
  return chips;
}

/** Returns an empty SSR snapshot; saved entities hydrate through the desktop metadata bridge. */
export function getServerChips(): readonly WorldViewChip[] {
  return EMPTY_CHIPS;
}

/** Subscribes to in-memory chip changes and returns a cleanup function; no I/O occurs. */
export function subscribeChips(listener: () => void): () => void {
  listeners.add(listener);
  /** Releases this subscriber when its component unmounts. */
  return function unsubscribe() {
    listeners.delete(listener);
  };
}

/** Publishes an immutable session snapshot to all mounted WorldView consumers. */
function publish(next: readonly WorldViewChip[]): void {
  chips = next;
  for (const listener of listeners) listener();
}

/** Adds one confirmed chip and queues its index save; duplicate IDs throw before mutation. */
export function addSessionChip(chip: WorldViewChip): void {
  for (const current of chips) {
    if (current.id === chip.id) throw new Error("Chip IDs must be unique.");
  }
  publish([...chips, chip]);
  persistChip(chip);
}

/** Replaces and queues one chip's world position; missing IDs throw and disk failures surface in save status. */
export function moveSessionChip(id: string, position: Point): void {
  let found = false;
  const next: WorldViewChip[] = [];
  for (const chip of chips) {
    if (chip.id === id) {
      found = true;
      next.push({ ...chip, position });
    } else next.push(chip);
  }
  if (!found) throw new Error("The chip to move no longer exists.");
  publish(next);
  for (const chip of next) if (chip.id === id) persistChip(chip);
}

/** Replaces confirmed metadata/appearance and queues its save while preserving position, sources, and ID. */
export function updateSessionChip(id: string, draft: ChipDraft): void {
  let found = false;
  const next: WorldViewChip[] = [];
  for (const chip of chips) {
    if (chip.id === id) {
      found = true;
      next.push({ ...chip, ...draft, id: chip.id, position: chip.position });
    } else next.push(chip);
  }
  if (!found) throw new Error("The chip to edit no longer exists.");
  publish(next);
  for (const chip of next) if (chip.id === id) persistChip(chip);
}

/**
 * Removes only the requested stable ID and queues deletion of its Markdown index.
 * Returns false for an already-removed/missing ID without changing the snapshot.
 * Only the entity's metadata index is deleted; original Universe files remain untouched.
 */
export function removeSessionChip(id: string): boolean {
  const remaining: WorldViewChip[] = [];
  let found = false;
  for (const chip of chips) {
    if (chip.id === id) found = true;
    else remaining.push(chip);
  }
  if (!found) return false;
  publish(remaining);
  const root = persistence.rootPath;
  if (root && persistence.ready) {
    const bridge = requireWorldViewBridge();
    queueWrite(root, id, async function deleteEntityIndex() {
      await bridge.request("delete", { vaultPath: root, id });
    });
  }
  return true;
}
