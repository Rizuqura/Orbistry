# Indexing

Collection mode groups assigned images with this declaration.

```text
# Industry

Carousel = [
  source: Archive/TSMC Equity Research/SEMICONDUCTOR101.png
  source: Archive/TSMC Equity Research/TSMC to Tech Paradiggm.png
].view(carousel)
```

Timeline mode uses the same viewer with observation navigation.

```text
# Project Monitoring

Carousel = [
  source: Project/Site_January.png
  source: Project/Site_April.png
  source: Project/Site_July.png
].view(timeline)
```

Identifiers start with an ASCII letter and contain letters, numbers or underscores, up to 64 characters. Names are case-insensitively unique within a section. Multiple named groups are supported. Collection groups contain 1–50 assigned PNG/JPEG sources. Timeline groups accept up to 50 sources and may be empty, displaying an empty state until observations are declared. Source paths retain their exact spelling and spaces after declaration whitespace is trimmed. Use forward-slash relative Universe IDs from the assigned source list.

Standalone `source:` lines keep the existing preview behavior. Invalid operations, paths, formats, unknown/unassigned references, duplicate sources within a group and unclosed groups produce line-specific errors. Failed Apply preserves the previous applied index.

New declarations accept only the two view operations shown above. `.parse(image)` is reserved for future processing integration. Previously saved Phase 08 chains can still be restored as Collection viewers, with their sources accessible. Editing and reapplying those records requires the Phase 08A view-only form. No processing operation is executed by restoration.

Observation dates currently enter through optional structured component metadata. This declaration grammar supplies source references and mode. It does not derive dates from filenames or file timestamps.
