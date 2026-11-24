# Knowledge Card indexing and package guide

This guide covers the current WorldView indexing controls, source syntax, viewers and finance packages in 1.0.5 Victoria (Beta).

Indexed content uses black terminal panels, amber headings and IBM Plex Mono. Source actions such as **Locate Original**, refresh controls, workbook exports and image-note saving are grouped below their content. Section, worksheet, period and chart-range controls remain alongside the views they select.

For a provider-independent, compiled view of an entity's applied index, use **… → See Backend Identity** below **Edit Entity**, then **Generate Backend Identity**. Compilation is manual and does not execute declared tools. See the [Backend Identity guide](packages/backend-identity-v1.md) for schemas, chunk retrieval, freshness and backend permissions.

## Start here

1. Select an entity chip in WorldView and open **View Knowledge Card**.
2. For local documents or images, use the entity's **Assign Files** action first. Browse Universe, select the files and confirm assignment.
3. Choose **Write Index** in the Knowledge Card.
4. Enter a section heading and its source declarations. Copy local references from **Assigned source IDs** in the editor.
5. Choose **Validate Index** and correct any listed line errors.
6. Choose **Apply Index**. The headings become sidebar sections. Select a section to view its sources.

Yahoo sources require a ticker declaration. Local files use their existing Universe reference. Assignments allow one original file to appear in multiple entities.

## Index editor controls

| Control              | Effect                                                                                                                             |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Write Index          | Opens the declaration editor.                                                                                                      |
| Save Draft           | Saves your text for later editing. The applied sections remain available.                                                          |
| Validate Index       | Checks syntax, ticker literals and local file assignments. Errors include line numbers.                                            |
| Apply Index          | Validates and saves the declarations that drive the sidebar and viewers. Invalid declarations preserve the previous applied index. |
| Clear Draft          | Asks for confirmation, then clears the editor draft. Apply the cleared draft to update the active index.                           |
| Close Editor         | Returns to the section viewer. Save Draft preserves edits for reopening.                                                           |
| Reload Saved Index   | Reads the saved index again and confirms before discarding unsaved edits.                                                          |
| Assigned source IDs  | Lists the exact references available for local source declarations.                                                                |
| Close Knowledge Card | Closes the floating window and confirms when unsaved draft edits would be discarded.                                               |

The card opens at 80% of the window width, subject to available viewport space. Drag its title bar to move it. Focus the title bar and use arrow keys to move it, or Home to center it.

## Complete example

Replace the local file references below with IDs from your entity's assigned files. Each statement occupies its own line.

```text
# About
source: Research/Company Profile.md

# Price
source: yahooPrice("TSM")

# Financials
source: yahooFinancials("TSM")

# Earnings
source: yahooEarnings("TSM")

# Workbook
source: Research/Company Financials.xlsx

# Images
CompanyImages = [
  source: Images/Company Overview.png
  source: Images/Factory.jpg
].view(carousel)

# Project Monitoring
Observations = [
  source: Project/Site January.png
  source: Project/Site April.png
].view(timeline)
```

## Syntax rules

- A section starts with `# ` and a unique title of up to 80 characters. Sections appear in declaration order. The index supports up to 100 sections and 256 KB of declaration text.
- A local source uses `source: relative/Universe/reference.ext`. Copy the exact assigned ID, including case and spaces. Use forward slashes. Place file paths directly after `source:` without quotation marks.
- A registered Yahoo function uses a quoted ticker. Double or single quotes work. `yahooPrice()` also accepts empty parentheses. Financials and Earnings require an explicit ticker.
- Blank lines are allowed. The editor accepts declaration syntax. Markdown document content is supplied through an assigned `.md` source.
- Group identifiers start with a letter and use letters, numbers or underscores, up to 64 characters. Names are case-insensitively unique within their section.
- Grouped sources must be assigned PNG/JPG/JPEG files. A carousel accepts 1–50 images. A timeline accepts 0–50 observations.
- Duplicate references in one component produce validation errors. A file can appear in separate sections or groups.
- Use `].view(carousel)` or `].view(timeline)` to close an image group. Older `.parse(image)` chains are historical syntax. Current declarations use the view forms shown above.

Multiple finance sources can share a section. You can also mix local files and image groups with Yahoo sources. The current viewer groups content by type, displaying price panels, financial panels, image groups and the local-source selector in that order. Within each type, declaration order is preserved.

## Local source viewers

| Source        | Viewer and controls                                                                          |
| ------------- | -------------------------------------------------------------------------------------------- |
| Markdown      | Formatted headings, emphasis, lists, blockquotes, code and tables. Embedded HTML is escaped. |
| CSV           | Tabular preview with bounded row and column counts.                                          |
| PDF           | Existing PDF viewer controls.                                                                |
| PNG/JPG/JPEG  | Original image preview, or a declared carousel/timeline.                                     |
| XLSX          | Worksheet tabs, paginated cells, saved calculation results and exports.                      |
| Other formats | Availability message and Locate Original where supported.                                    |

Use the local-source selector when a section references several standalone files. **Locate Original** reveals the authorized file in the OS file browser. Removing a source association from an entity removes its building and association. The original remains in Universe. Update any index declarations that refer to an unassigned file.

### Excel controls

Choose a worksheet tab, then use **Previous rows**, **Next rows**, **Previous columns** and **Next columns** to navigate. Previews show up to 100 rows and 20 columns per page, with original row numbers and column letters.

**Copy preview Markdown** copies the current table. **Export workbook Markdown** exports the workbook as Markdown within resource limits. **Export results JSON** exports the final text results and coordinates. **See worksheet Markdown** opens the current Markdown preview, and **Reading notes** shows extraction warnings.

The viewer displays saved formula results with number formatting. Cells lacking saved results display `[saved result unavailable]`. Save a recalculated workbook in your spreadsheet application to supply those results. Preview and export limits are described in the package reference.

### Carousel and timeline controls

The centered black `<` and `>` buttons below the image navigate observations. Left and Right arrow keys work while the viewer has focus. Carousel thumbnails select images directly.

Timeline adds a discrete **Observation index** slider with step 1. Moving it immediately selects an observation. Markers and the counter identify the active item. The evenly spaced positions represent observation order. Actual dates appear when explicitly supplied through structured observation metadata.

All observations need valid explicit dates for chronological sorting. Otherwise the viewer preserves declaration order and displays **Undated observations**. Filename text and file modification times do not supply observation dates. Current text declarations provide sources and mode. Dates, location and captions require structured component metadata.

**Source Information** or **Observation Information** shows the current reference and byte metadata. **Locate Original** opens its file location. Enter documentation in **Notes** and choose **Save Notes**. Save before changing sections or closing the card. Notes belong to the entity/source association. Analysis currently displays **No analysis available**.

## Yahoo finance functions

The packages use keyless Yahoo Finance access. Data coverage depends on the ticker and Yahoo availability.

| Declaration                      | Result                                                                   |
| -------------------------------- | ------------------------------------------------------------------------ |
| `source: yahooPrice("TSM")`      | Latest available regular-session price and daily chart.                  |
| `source: yahooPrice()`           | Price panel using an editable default ticker for this entity.            |
| `source: yahooFinancials("TSM")` | Annual and quarterly financial statements.                               |
| `source: yahooEarnings("TSM")`   | Reported/estimated EPS, surprise and available scheduled earnings dates. |

Examples of ticker forms include `AAPL`, `TSM`, `BBCA.JK`, `^JKSE`, `BTC-USD` and `EURUSD=X`. Financial statements and earnings coverage varies by instrument. Changing the ticker changes the selected company or market instrument.

### Price controls

Choose **1M**, **3M**, **6M**, **1Y**, **5Y** or **MAX** for the chart range. Hover the chart or use its arrow-key navigation to inspect observations. Short ranges use daily observations, **5Y** uses weekly observations and **MAX** uses monthly observations. Longer histories load only when selected and have a six-hour cache. Corporate actions supplied by the provider appear under **Dividends and stock splits** for longer ranges. The panel shows currency, market state, market timestamp, reported delay, market cap, P/E, EPS, 52-week range and volume when available. Each listing retains its original currency; `TSM` and `2330.TW` are distinct listings.

For `yahooPrice()`, enter a ticker and choose **Save ticker**. Empty calls share the entity's saved default ticker. Explicit ticker arguments select their own symbol. Saving a blank ticker field removes the default association.

**Refresh prices** requests a new quote and history. Quotes refresh on opening, on becoming visible and every five minutes while visible. Daily history can be reused for six hours between automatic refreshes. Failed refreshes display a saved snapshot with a warning when available.

### Financials controls

Choose **Income Statement**, **Balance Sheet** or **Cash Flow**, then **Annual** or **Quarterly**. These controls use the loaded snapshot. Columns retain actual reporting period-end dates and reporting currencies. Metric names come from the provider.

Values remain in original unscaled units. EPS uses currency per share, share counts use shares, and ratios retain provider units. Missing fields display **Unavailable**. Empty frequencies show an empty state. The request covers up to five years of history, subject to Yahoo retention.

### Earnings controls and meaning

Earnings shows fiscal period ends, announcement dates when available, EPS estimates, reported EPS, surprise percentages and their basis. Missing values display **Unavailable**. Historical announcement dates are currently unavailable through the selected earnings-history endpoint. Fiscal period ends are shown in their own column.

When a provider surprise is absent, the engine computes one only when actual and estimated EPS exist and the estimate is nonzero. Computed results are labeled **computed**.

```text
Surprise (%) = ((Actual EPS - Estimated EPS) / abs(Estimated EPS)) * 100
```

Scheduled earnings dates appear separately. Multiple dates may describe a date window. Estimate and confirmation status reflect the available provider fields. A scheduled date alone does not establish a completed announcement.

### Financials and Earnings refresh

Opening a section reads a valid saved snapshot or retrieves data. Successful results have a 24-hour cache TTL. **Refresh** requests a new snapshot. Financials and Earnings retrieve on opening and manual refresh.

The displayed retrieval timestamp identifies data age. A failed refresh preserves the last usable snapshot with a stale warning. Offline access uses previously cached data when available. Corrupt or incomplete caches trigger retrieval with an explicit warning. Provider failures stay local to the selected section.

## Package locations and maintenance

| Package                     | Installed location                            | Derived cache                                     |
| --------------------------- | --------------------------------------------- | ------------------------------------------------- |
| Daily Price                 | `<Universe>/.engine/daily-price/package`      | `<Universe>/.engine/daily-price/cache`            |
| Yahoo Financials & Earnings | `<Universe>/.engine/yahoo-financials/package` | `<Universe>/.engine/yahoo-financials/cache`       |
| Wonton Excel                | `<Universe>/.engine/wonton-excel`             | Extraction handled by the existing Excel service. |

The current Universe is `C:/Universe`. Package files and entity associations are managed separately from original Universe sources. The application uses its trusted bundled implementations for Knowledge Card dispatch. Standalone packages are also available to Node consumers.

From the repository root, these commands build and install packages into an existing Universe.

```powershell
node scripts/build-daily-price-engine.cjs --universe C:/Universe
node scripts/build/build-yahoo-financials-engine.cjs --universe C:/Universe
node scripts/build/build-excel-engine.cjs --universe C:/Universe
```

For an existing installation, append `--upgrade`. The builders verify installed files and retain backups. Run a builder without arguments to stage a standalone package under `.cache/engine-packages`. `node scripts/clean-engine-backups.cjs --universe C:/Universe` previews verified obsolete installer backups; append `--apply` to remove only those backups. Active engines and all caches remain in place.

## Troubleshooting

| Symptom                             | Action                                                                                            |
| ----------------------------------- | ------------------------------------------------------------------------------------------------- |
| Unknown or unassigned source        | Assign the original Universe file, copy its exact ID and reapply the index.                       |
| Malformed declaration               | Correct the reported line. Check the heading, function spelling, quotes and group closing line.   |
| Sidebar still shows older sections  | Save Draft preserves text. Choose Apply Index to update the active sections.                      |
| Reload conflict                     | Save your draft before reloading or reopening the Knowledge Card.                                 |
| Financials unavailable for a ticker | Check its Yahoo symbol, coverage and connection, then use Refresh.                                |
| Stale saved data                    | Read the retrieval timestamp and refresh when the provider is reachable.                          |
| Quarterly data unavailable          | Select Annual or retry later. Availability depends on Yahoo's response.                           |
| XLSX formula result unavailable     | Recalculate and save the source workbook in a spreadsheet application.                            |
| Undated timeline                    | Text declarations currently lack observation-date authoring. Ordering remains the declared order. |

## Documentation map

- Package API and maintenance details are in [Daily Price](packages/daily-price-v0.1.md), [Yahoo Finance and future LLM access](packages/yahoo-financials-v0.2.md) and [Excel](packages/excel-v0.1.md).
- Viewer details are in [Carousel and Timeline behavior](reference/carousel-viewer/UI_BEHAVIOR.md).
- Implementation and verification notes are grouped in [reports](../REPORTS.md#report-index).
- Broader project documentation is listed in the [documentation index](../README.md).
