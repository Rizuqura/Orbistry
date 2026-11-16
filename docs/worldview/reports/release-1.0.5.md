# 1.0.5 Victoria (Beta)

WorldView financial statements, earnings and documentation update.

- Add `yahooFinancials("TICKER")` and `yahooEarnings("TICKER")` declarations to Knowledge Card indexes.
- Browse annual and quarterly income statements, balance sheets and cash flows without refetching when switching local tabs.
- Display EPS estimates, actuals, labeled surprise calculations and scheduled earnings dates with provider availability and currency information.
- Cache successful snapshots for 24 hours and retain the last usable snapshot with an explicit warning after a failed refresh.
- Include the independently versioned Yahoo Financials engine package and its build and acceptance scripts.
- Reorganize current WorldView guides, package references and implementation reports under `docs/worldview/`.
- Update package and lockfile metadata to 1.0.5. The top bar, startup screen and installer filename derive their release version from the package metadata.

Engine package versions retain their independent release numbers. Historical release notes retain their original versions.

Yahoo Finance coverage varies by ticker and reporting period. Missing data is displayed as Unavailable. No currency conversion is applied.

## Verification

- Unit suite: 452 passed, two optional skips, zero failures.
- Typecheck and production static-export build passed.
- Full isolated Electron WorldView acceptance passed.
- Isolated Electron financial statements and earnings acceptance passed, including local period/tab navigation and stale-cache recovery after a failed refresh.
- Exported top-bar and startup-screen labels, package metadata, lockfile metadata and installer filename template agree on version 1.0.5.
- Release secret scan found zero known credential or private-key patterns in source, static export and Git history.

No Windows installer was built or published as part of this source update.
