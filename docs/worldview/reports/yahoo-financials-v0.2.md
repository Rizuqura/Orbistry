# Yahoo Finance package and Knowledge Card content update

The existing Node/Electron backend continues to use `yahoo-finance2`. The Yahoo Finance engine is now version 0.2.0 with an allowlisted execution interface, offline JSON discovery contract and bounded stdin/stdout CLI. It supports quote, OHLCV history, annual/quarterly statements and earnings. The existing statement/earnings API remains compatible. The native dispatcher exposes this trusted implementation for future model integrations without reconnecting ordinary agent chat to local tools.

Knowledge Card document content now uses explicit headings and labeled fields to build attributed panels. These are literal source excerpts, labeled unverified; no LLM extraction, financial inference or new indexed-document persistence is introduced. Complete original rendering and Locate Original remain accessible. User-authored menus and non-financial entities continue to work. Financial content has compact metric summaries, fiscal-date trends and tabular numerals. Excel data stays coordinate-faithful. The content wrapper uses near-black panels, amber headings, warm white text and IBM Plex Mono, with green/red indicators. The surrounding header, sidebar, window, WorldView and navigation retain their existing design. Source, refresh, export and image-note utilities sit below their content; section and period navigation remain next to the data they select.

Price panels retain existing daily caches and add provider market metrics. Longer 5Y/MAX histories use the Yahoo package through a guarded operation that reauthorizes applied sources before and after retrieval. Range caches remain separate; currencies are checked before plotting. Five-year history uses weekly observations and MAX uses monthly observations. Corporate actions appear only when supplied. Defaults are five minutes for quotes, six hours for history and 24 hours for statements/earnings, with configurable per-type TTLs.

Cleanup selects only recognized installer backups. Both active and backup package manifests must match every file, including the absence of untracked files, before removal. Active engines, caches, original sources and unknown directories are retained.

## Verification

- Production static-export build and TypeScript validation passed.
- Full unit suite: 460 passed, two optional skips, no failures.
- Full Electron WorldView acceptance passed, including explicit document widgets, HTML escaping, original file integrity, Excel previews, both long-range history controls and range-cache reuse.
- Focused Electron finance acceptance passed for statement periods, trend rendering, earnings, navigation without refetch and stale refresh recovery.
- Self-contained package build, manifest, offline CLI discovery and injected execution passed. The package was installed in `C:/Universe/.engine/yahoo-financials/package` with all runtime dependencies.
- Live `TSM` quote returned USD and `2330.TW` returned TWD. Live Taiwan history returned 263 weekly observations for 5Y and 324 monthly observations for MAX, including supplied dividends and splits. This is a provider-availability check on 2026-11-16, not a freshness guarantee for future requests.
- Verified obsolete installer backups were removed. The five active directories remain: `daily-price`, `image-parser`, `tag-association`, `wonton-excel` and `yahoo-financials`. Existing caches remain in their original engine directories.

## Debug Audit

**Component:** Knowledge Card content typography.
**Affected Files:** `app/knowledge-content.css`.
**Observed Error:** Desktop acceptance detected an 11px headline price instead of the existing 28px size.
**Root Cause:** A shared content rule assigned table font size to the price headline.
**Changes Applied:** Restrict table font size to tables while retaining shared monospaced numerals.
**Verification:** Rerun the price and WorldView desktop acceptance checks after the correction.
**Remaining Risks:** Provider coverage and availability remain external; historical announcement dates and unsupplied fields remain unavailable. No generated market figures are shipped.

**Component:** Price range cache navigation.
**Affected Files:** `features/worldview/daily-price.tsx`.
**Observed Error:** Revisiting 5Y history after a previous manual refresh refetched the provider instead of returning the saved range.
**Root Cause:** Every range change inherited a permanently positive refresh counter as a force flag.
**Changes Applied:** Compare refresh generations so only a new explicit refresh forces the selected range.
**Verification:** Native acceptance switches 5Y → MAX → 5Y and checks that only two history requests occurred.
**Remaining Risks:** Explicit refresh continues to request the provider; failed refreshes retain validated saved data with a warning.

## Content theme and source cleanup

The content theme follows the supplied terminal reference: `#05090D` background, `#0A1015` panels, `#FFB000` amber, `#E8E5DC` text and IBM Plex Mono. The WorldView font system required a content-scoped `--font-worldview` override; a desktop computed-style assertion caught the initial global Sans override and verifies the repair. Actual document rendering, escaped HTML, original source integrity and bottom utility placement are covered by WorldView acceptance.

Repository cleanup used relative-import reachability, entrypoint searches, compiler unused-local checks and documentation-link validation. It removed 22 verified unused or superseded files: the unmounted Context Box UI, its unused usage-display peer and test, and 19 obsolete documentation/evidence files. It also removed 101 CSS rules whose required parent classes were exclusive to the removed UI, 14 ignored one-off temporary scripts, and 82 obsolete or incomplete generated package staging directories. Current package stages, original source data, runtime/IPC modules, workers, canonical policies, declarations, regression fixtures, dependency licenses and authored architecture references remain. Historical files are recoverable from Git where tracked.

After cleanup, the full unit suite passed with 458 successes and two optional skips. Typecheck, production build, full WorldView acceptance, focused financial acceptance and shared layout/carousel regressions passed. Project source has no unused local/parameter diagnostics; Next-generated validator diagnostics are excluded from that optional compiler audit. All 37 maintained Markdown documents checked had valid local links. The release secret-pattern scan found no known-pattern findings.
