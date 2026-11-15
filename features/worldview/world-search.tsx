"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ChangeEvent,
  type KeyboardEvent,
  type MouseEvent,
} from "react";
import {
  flushWorldViewWrites,
  getSessionChips,
  getServerChips,
  getWorldViewPersistence,
  getServerPersistence,
  requireWorldViewBridge,
  subscribeChips,
} from "./chip-session";
import type {
  WorldTagSearchResponse,
  WorldTagSearchResult,
} from "../../types/worldview";

/** Explains a measured result using its actual matched field/count. Pure; never invents semantic relevance or a probability. */
function resultExplanation(
  result: WorldTagSearchResult,
  query: string,
): string {
  if (result.matchField === "name")
    return result.matchType === "exact"
      ? "Exact entity name"
      : "Partial entity name";
  if (result.matchType === "associated")
    return `Via ${result.matchedTag} · ${query} + ${result.matchedTag} = ${result.cooccurrence} ${result.cooccurrence === 1 ? "entity" : "entities"}`;
  return `${result.matchType === "exact" ? "Exact" : "Partial"} tag · ${result.matchedTag}`;
}

/** Presents compact persisted-tag search. Debounces queries, awaits metadata writes and discards stale responses after query/World changes. */
export function WorldSearch({
  vaultPath,
  disabled,
  onSelect,
}: Readonly<{
  vaultPath: string | null;
  disabled: boolean;
  onSelect: (id: string) => void;
}>) {
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [response, setResponse] = useState<WorldTagSearchResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);
  const [rebuilding, setRebuilding] = useState(false);
  const chips = useSyncExternalStore(
    subscribeChips,
    getSessionChips,
    getServerChips,
  );
  const persistence = useSyncExternalStore(
    subscribeChips,
    getWorldViewPersistence,
    getServerPersistence,
  );
  const sourceRevision = JSON.stringify(
    chips.map(
      /** Invalidates UI results only for searchable metadata changes. */ (
        chip,
      ) => [chip.id, chip.name, chip.tags],
    ),
  );

  /** Initializes/restores the engine even before typing; queries always use persisted tags after queued writes settle. */
  useEffect(
    function searchPersistedMetadata() {
      let current = true;
      setResponse(null);
      setError("");
      setActiveIndex(-1);
      if (!vaultPath || disabled || persistence.pending) {
        setLoading(Boolean(vaultPath));
        return;
      }
      setLoading(true);
      const timer = window.setTimeout(
        /** Loads one debounced response; stale or unmounted requests cannot replace newer results. */ async function requestSearch() {
          try {
            await flushWorldViewWrites();
            const value =
              await requireWorldViewBridge().request<WorldTagSearchResponse>(
                "tag-search",
                { vaultPath, query },
              );
            if (current) setResponse(value);
          } catch (cause) {
            if (current)
              setError(
                cause instanceof Error
                  ? cause.message
                  : "WorldView search failed.",
              );
          } finally {
            if (current) setLoading(false);
          }
        },
        180,
      );
      /** Cancels pending debounce work and ignores in-flight results from an old query or Universe. */
      return function cancelSearch() {
        current = false;
        window.clearTimeout(timer);
      };
    },
    [vaultPath, query, sourceRevision, disabled, persistence.pending, retry],
  );

  /** Dismisses the dropdown on outside pointer input without intercepting canvas controls. */
  useEffect(function dismissOutside() {
    /** Closes results when pointer input leaves this floating search region. */
    function closeOutside(event: PointerEvent): void {
      if (
        event.target instanceof Node &&
        !rootRef.current?.contains(event.target)
      )
        setOpen(false);
    }
    document.addEventListener("pointerdown", closeOutside);
    /** Releases the document listener when WorldView unmounts. */
    return function removeOutsideListener() {
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, []);

  /** Stages query text and opens the dropdown; matching remains in the local engine. */
  function changeQuery(event: ChangeEvent<HTMLInputElement>): void {
    setQuery(event.target.value);
    setOpen(true);
  }
  /** Reopens existing results when the user focuses a nonempty search. */
  function focusSearch(): void {
    if (query.trim()) setOpen(true);
  }
  /** Clears query/results visibility and restores input focus without moving the camera. */
  function clearSearch(): void {
    setQuery("");
    setOpen(false);
    setActiveIndex(-1);
    inputRef.current?.focus();
  }
  /** Resolves one existing entity through WorldView selection/camera controls; Knowledge Card opening stays a separate action. */
  function chooseResult(id: string): void {
    onSelect(id);
    inputRef.current?.focus();
    setOpen(false);
  }
  /** Selects a stable entity ID from a pointer-activated result. */
  function clickResult(event: MouseEvent<HTMLButtonElement>): void {
    const id = event.currentTarget.dataset.entityId;
    if (id) chooseResult(id);
  }
  /** Accepts a complete lexical tag suggestion without splitting a multiword phrase. */
  function chooseSuggestion(event: MouseEvent<HTMLButtonElement>): void {
    setQuery(event.currentTarget.dataset.tag ?? "");
    setOpen(true);
    inputRef.current?.focus();
  }
  /** Supports result navigation, selection and Escape while keeping input events separate from canvas shortcuts. */
  function navigate(event: KeyboardEvent<HTMLInputElement>): void {
    const results = response?.results ?? [];
    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      setOpen(true);
      if (results.length)
        setActiveIndex(
          event.key === "ArrowDown"
            ? (activeIndex + 1) % results.length
            : (activeIndex <= 0 ? results.length : activeIndex) - 1,
        );
    } else if (event.key === "Enter" && open && results.length) {
      event.preventDefault();
      chooseResult(results[Math.max(0, activeIndex)].entityId);
    }
  }
  /** Scrolls the keyboard-active result into the bounded dropdown without scrolling the world viewport. */
  useEffect(
    function revealActiveResult() {
      if (open && activeIndex >= 0)
        rootRef.current
          ?.querySelector(`#worldview-search-result-${activeIndex}`)
          ?.scrollIntoView({ block: "nearest" });
    },
    [activeIndex, open],
  );
  /** Retries an explicit failed query using the same persisted metadata boundary. */
  function retrySearch(): void {
    setRetry(retry + 1);
  }
  /** Recreates disposable cache data and refreshes results; failures are displayed in the dropdown. */
  async function rebuildCache(): Promise<void> {
    if (!vaultPath || rebuilding) return;
    setRebuilding(true);
    try {
      await flushWorldViewWrites();
      await requireWorldViewBridge().request("tag-rebuild", { vaultPath });
      setRetry(retry + 1);
    } catch (cause) {
      setError(
        cause instanceof Error ? cause.message : "Cache rebuild failed.",
      );
    } finally {
      setRebuilding(false);
    }
  }
  const visible = open && Boolean(query.trim());
  return (
    <div
      ref={rootRef}
      className="worldview-search"
      aria-label="WorldView search"
    >
      <div className="worldview-search-bar">
        <span className="worldview-search-icon" aria-hidden="true" />
        <input
          ref={inputRef}
          role="combobox"
          aria-label="Search WorldView"
          placeholder="Search tags or entities"
          value={query}
          maxLength={500}
          disabled={disabled}
          onChange={changeQuery}
          onFocus={focusSearch}
          onKeyDown={navigate}
          aria-expanded={visible}
          aria-controls="worldview-search-results"
          aria-autocomplete="list"
          aria-activedescendant={
            visible && activeIndex >= 0
              ? `worldview-search-result-${activeIndex}`
              : undefined
          }
          autoComplete="off"
          spellCheck={false}
        />
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            aria-label="Clear WorldView search"
          >
            ×
          </button>
        )}
      </div>
      {visible && (
        <div
          className="worldview-search-dropdown"
          aria-busy={loading}
          data-query={response?.query ?? ""}
        >
          {loading && <p role="status">Searching…</p>}
          {error && (
            <p role="alert">
              {error}{" "}
              <button type="button" onClick={retrySearch}>
                Retry search
              </button>
            </p>
          )}
          {!loading && !error && response && (
            <>
              {response.suggestions.length > 0 && (
                <div
                  className="worldview-search-suggestions"
                  aria-label="Matching tags"
                >
                  {response.suggestions.slice(0, 6).map(
                    /** Offers measured lexical tags as complete query buttons. */ (
                      suggestion,
                    ) => (
                      <button
                        type="button"
                        key={suggestion.tag}
                        data-tag={suggestion.display}
                        onClick={chooseSuggestion}
                      >
                        #{suggestion.display}
                      </button>
                    ),
                  )}
                </div>
              )}
              {response.results.length === 0 && (
                <p role="status">
                  No entities match “{query}”. Search an assigned tag or entity
                  name.
                </p>
              )}
            </>
          )}
          <ul
            id="worldview-search-results"
            role="listbox"
            aria-label="WorldView search results"
          >
            {!loading &&
              !error &&
              response?.results.map(
                /** Displays a single stable entity with its measured matching explanation and all relevant tags. */ (
                  result,
                  index,
                ) => (
                  <li key={result.entityId} role="presentation">
                    <button
                      id={`worldview-search-result-${index}`}
                      type="button"
                      role="option"
                      aria-selected={activeIndex === index}
                      data-entity-id={result.entityId}
                      data-world-id={result.worldId}
                      data-match-type={result.matchType}
                      data-match-field={result.matchField}
                      data-cooccurrence={result.cooccurrence ?? ""}
                      onClick={clickResult}
                    >
                      <strong>{result.name}</strong>
                      <span>
                        {resultExplanation(result, response.normalizedQuery)}
                      </span>
                      {result.matchedTags.length > 1 && (
                        <small>
                          Matched tags · {result.matchedTags.join(", ")}
                        </small>
                      )}
                    </button>
                  </li>
                ),
              )}
          </ul>
          {response?.warnings.length ? (
            <div className="worldview-search-warning" role="status">
              {response.warnings.map(
                /** Reports real cache/metadata failures while healthy in-memory search continues. */ (
                  warning,
                  index,
                ) => (
                  <p key={index}>{warning}</p>
                ),
              )}
              <button
                type="button"
                onClick={rebuildCache}
                disabled={rebuilding}
              >
                {rebuilding ? "Rebuilding…" : "Rebuild cache"}
              </button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
