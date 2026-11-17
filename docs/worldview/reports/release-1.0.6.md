# 1.0.6 Victoria (Beta)

Agent assignment prototype for WorldView entities, integrated with the existing Agent Workbench.

- Create or assign reusable agents to entities and open isolated Direct Chat histories.
- Configure multiple Engine nodes using the existing construction canvas.
- Use supported read-only price, financials and earnings adapters automatically, with persisted execution receipts and provenance. Manual approval and disabled policies remain available.
- Check the complete assigned Backend Identity before answering and regenerate missing or stale derived snapshots without editing source documents.
- Retrieve indexed headings and chunks with source references, and read stored engine results in bounded pages.
- Add documented runtime boundaries, authorization checks, duplicate suppression and desktop regression coverage.
- Update application and lockfile versions to 1.0.6. Startup, top-bar and installer labels derive their version from package metadata. Engine packages and historical release notes retain their independent versions.

## Prototype limitations

Historical results persist on disk, but the current result reader requires the current assignment ledger, identity version, graph revision and enabled original node. Cross-assignment historical recovery and records evicted from the bounded ledger require further work. The Experiment 05 audit identified these restrictions and misleading error mapping; its proposed remediation is not implemented in this release.

Registration alone does not supply an entity adapter or a matching declaration. Unsupported engine bindings remain unavailable. Automatic operation permits supported reads, derived caches and identity snapshots, not source-document or entity-setting edits.

## Verification

Runtime verification: 508 tests, 506 passed, two optional skips, zero failures. Production build and native assignment/Workbench/Knowledge Card and Backend Identity checks passed. Real NVIDIA/Yahoo UI acceptance demonstrated automatic price retrieval, stale identity refresh and all 25 indexed topics with original-source integrity.

See [automatic read access report](agent-read-only-autonomy.md) and [runtime diagnostic](agent-runtime-diagnostic.md) for evidence and remaining limitations. No installer or GitHub release is published by this source commit.
