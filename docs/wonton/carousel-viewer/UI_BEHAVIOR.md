# Viewer behavior

Both modes use the same component, original preview resolver and fixed image stage. Black retro previous/next arrows and the current counter sit below the image. Arrow keys navigate when focus is inside the viewer, while note editing keeps its normal cursor keys. Collection thumbnails scroll horizontally and select images directly.

Timeline uses a native horizontal range labeled Observation index, with one integer stop per observation and a step of 1. Scrubbing immediately selects the corresponding original and context. Date markers also allow direct selection. The active marker is highlighted, and the active date or undated observation label appears beside the slider label. Evenly spaced stops represent observation order. Observation dates provide the actual time information.

Long timelines scroll horizontally. Keyboard and button selections reveal the active marker within that strip. A single observation has one disabled slider stop and disabled previous/next controls. An empty timeline shows an explicit empty state. Switching sections or reopening the card starts at the first observation. Saved notes remain attached to their entity/source.

The image stage retains a stable responsive height across loading, decoding failures and different aspect ratios. Originals use `object-fit: contain`. Missing/invalid sources show an error in the stage while navigation and reference metadata remain accessible. Locate Original uses the existing guarded file-browser action.

Timeline sorts chronologically only when all slides have valid explicit ISO dates. Missing or invalid dates retain declaration order and label the viewer `Undated observations`. Individual markers retain any valid supplied date. Mixed date availability also retains declaration order. Calendar dates and timestamps with explicit timezones are accepted through the structured observation model.

## Context panel

Source Information shows the active filename, format, known byte size and any valid explicitly supplied observation date. Timeline titles this area Observation Information and displays Undated when the active observation's date is unavailable. Optional location and caption appear when supplied. Selection updates all context fields.

Notes are human-authored and entity/source scoped. Save Notes writes to the existing Knowledge Card companion using optimistic revision checks. The same source's notes are shared by its viewers within that entity. Unsaved drafts survive slide switches within the mounted viewer. Save before closing the card or changing sections. Stale concurrent writes fail visibly and preserve the draft. Reopen the card to load an externally changed revision.

Analysis shows `No analysis available`. The observation model reserves an analysis status field for a future integration. The viewer has no processing actions or Engine service calls.

## Limits

Dates, locations and captions currently require structured component input. There is no observation-authoring grammar or complete observation backend. Image formats and original preview limits follow the existing Vault preview service, including its 25 MB image limit. Previews represent the source snapshot loaded at navigation time. Reopen or navigate away and back to refresh originals modified externally.

The focused tests cover both modes, explicit-date ordering, source context and entity notes. Desktop acceptance covers grouping, multiple declarations, arrows, thumbnails, keyboard navigation, undated timelines, missing sources, standalone preview compatibility, metadata changes and saved notes after reopening.
