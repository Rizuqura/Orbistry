# Daily Price Engine v0.1 implementation

Completed on 2026-11-15.

Implemented keyless Yahoo Finance prices in each entity's existing Knowledge Card. The user chose Yahoo Finance without an API key. The implementation uses the application's Node runtime and `yahoo-finance2` 4.0.6.

The Prices panel saves a ticker in the existing Knowledge Card Markdown companion, displays the latest available regular-session quote with market timestamp, currency, market state and reported delay, and renders an interactive daily chart. Ranges cover 1M, 3M, 6M and 1Y. Pointer and keyboard inspection expose source observations. Quote caching lasts five minutes and history caching lasts six hours. Offline snapshots retain their original timestamps and an explicit stale-data message.

Changed components include the new `electron/engines/daily-price` package, `electron/daily-price-service.cjs`, native Engine definition, guarded WorldView operations, entity companion metadata, `features/worldview/daily-price.tsx`, Knowledge Card navigation, scoped styles, types, tests and package builder. Shared dependency-copy helpers are exported from the Excel package builder with direct execution guarded by `require.main`.

Live Yahoo verification succeeded for `AAPL`, returning a timestamped USD quote and 251 daily observations. The recorded history ran from 2025-11-14 through 2026-11-13. Synthetic regressions cover ticker validation, exchange-local dates, zero/missing closes, unavailable quotes, history reuse, forced refresh, cached persistence, offline fallback, corrupt cache recovery and metadata revision conflicts.

Automated verification passed with 445 tests, 443 passed and 2 optional skips. Typecheck, the secured production build and formatting checks passed. The full WorldView Electron suite passed, covering the new Prices workflow alongside existing navigation, Canvas, entities, connectors, sources and viewers. Focused native price acceptance was repeated after the final styling and first-load retry fixes. It verified ticker validation, timestamp/currency display, actual Canvas drawing, range changes, keyboard inspection, persisted tickers, initial outage recovery, stale cache status and ticker removal with zero renderer errors.

Live verification also succeeded for `BBCA.JK`, returning IDR, the Asia/Jakarta timezone and 238 daily observations. The self-contained staged package successfully retrieved AAPL data through its copied dependency tree. The installation target was resolved from the saved Universe setting as `C:\Universe\.engine\daily-price\package`. Its cache remains alongside the package under `.engine/daily-price/cache`.

Local evidence includes `test-results/daily-price-tests.txt`, `test-results/daily-price-build.txt`, `test-results/daily-price-native.json`, `test-results/worldview-reset-ui.json` and `test-results/worldview-daily-price.png`. The native screenshot was visually inspected.

Yahoo availability, market closures and provider delay determine quote freshness. The UI exposes the source timestamps. The current package delivers quote and chart data for personal research, using the provider's chart adjustment conventions.

## Debug Audit

**Component**

Knowledge Card price presentation and recovery.

**Affected Files**

`features/worldview/daily-price.tsx`, `app/worldview.css` and native acceptance helpers.

**Observed Error**

The initial quote could fail before a refresh control appeared. Generic header typography also reduced the primary quote size, and global keyboard focus styling added a chart glow.

**Root Cause**

The first refresh control was nested under the successful quote branch. Existing global selectors outranked the new component's initial styles.

**Changes Applied**

Place refresh beside the saved ticker controls and scope the price size and chart focus outline with selectors that win the existing cascade. A native regression starts with an unavailable provider, retries successfully, then checks quote font size and chart focus styling.

**Verification**

Focused Electron acceptance passed after these fixes. Early full-suite acceptance fixtures also needed updated expected menu labels for Prices and a Node `createRequire` inside the test-only Electron evaluation context. The corrected full WorldView run passed.

**Remaining Risks**

Fresh market data requires Yahoo availability. Cached data carries its original market and retrieval timestamps, and failed refreshes display an explicit saved-data message.

## Yahoo price index commands

The index now accepts `source: yahooPrice("TICKER")` under any section heading. Multiple calls support independent symbols within a section. The exact `source: yahooPrice()` form renders a configurable ticker field using the entity default. Sections retain their user-defined industry names, while legacy ticker settings remain accessible for existing cards.

The parser creates stable price-source identities from menu identity and normalized ticker. It retains Vault references in the existing file source collection. Validation works offline. A dedicated guarded operation authorizes each applied entity/menu/price-source triple before retrieval and rechecks it after asynchronous work. Removed, draft-only and forged declarations reject. Calls are parsed as literal declarations.

Affected files include the index parser, Knowledge Card validation, daily-price authorization service, guarded bridge, shared chart component, menu rendering, types, source tests and native acceptance. Verification passed with 447 tests, 445 passed and 2 optional skips, together with typecheck, production build, formatting and full WorldView Electron acceptance. Focused tests cover strict command parsing, applied-source authorization, default ticker lookup, draft-only and forged references, and declaration removal during a request. Native acceptance covers the empty call's ticker field, two explicit symbols in an industry section, persistence after reopening, section switching, refresh and cached offline results. The inspected screenshot uses synthetic provider data. Evidence is recorded in `test-results/indexed-price-tests.txt`, `test-results/indexed-price-build.txt`, `test-results/daily-price-native.json`, `test-results/worldview-reset-ui.json` and `test-results/worldview-indexed-prices.png`.

Empty calls share one entity default ticker. Use explicit ticker arguments for independent symbols across industries.
