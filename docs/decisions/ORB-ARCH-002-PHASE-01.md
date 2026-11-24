# ORB-ARCH-002 Phase 01: structural ownership

Status: implemented structural organization, pending owner review.

Context: approved Phase 01 request; extensive pre-existing working changes.

Decision: relocate primary feature/backend/tooling modules, rebase references and retain stable process, CLI and Engine compatibility entry points.

Alternatives considered: mass directory rename or business-logic extraction. Rejected because neither is necessary for ownership.

Consequences: clearer navigation; imports, workers, tests, packaging and tooling must use new paths.

Migration requirements: no user-data moves, schema changes, Entity OOP conversion or Engine package extraction. See ../architecture/restructure-moves.json.

Verification plan: baseline/final test counts, typecheck, format, build, architecture/source audit, Engine/Identity/assignment tests and offline Electron WorldView/assigned-agent acceptance.
