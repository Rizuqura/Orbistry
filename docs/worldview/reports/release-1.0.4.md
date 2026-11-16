# Victoria 1.0.4 (Beta)

WorldView and Wonton workspace update.

- Entity file buildings, source assignments and floating Knowledge Cards.
- Manual Markdown indexing with formatted document previews.
- Universal port connections with curved routes, editable relationships and floating labels.
- Local entity keys, tags and association search.
- Image carousel and observation timeline viewers.
- Excel previews displaying saved results with readable number formatting.
- Yahoo Finance daily charts and latest prices through `source: yahooPrice()` declarations.
- IBM Plex Sans WorldView typography and refined chip labels.
- Updated application version in the top bar, loading screen and package metadata.

Engine package versions retain their independent release numbers.

## Verification

Typecheck and production build passed. The test suite passed with 445 successes and two optional skips. Isolated Electron verification confirmed `Victoria 1.0.4 (Beta)` on the loading screen and top bar. Full WorldView acceptance passed before the version bump. The release secret scan reported zero findings.

The older Victoria acceptance script stops at its historical `Orbistry` window-title assertion because the current window is named `ORB Terminal`. Direct verification of both release labels passed.

Unrelated local document deletions and the local architecture PDF were excluded from the release commit.
