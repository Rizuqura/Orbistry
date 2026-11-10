# Numeric answer evidence rule, revised 2026-10-27

The previous literal-number whitelist could reject correct rounded values, equivalent percentages and secondary calculations. `dataset-evidence.cjs` now checks presentation precision and notation, then verifies explicitly shown arithmetic before accepting additional results. The public `validateDatasetAnswer` string-returning API remains compatible. `inspectDatasetAnswer` additionally returns verification metadata for immutable run diagnostics.

Allowed evidence remains current dataset results/profiles and row/filter metadata, recomputed same-source analytical history, approved non-CSV source text, locally computed statistics and operands in the current question. Agent construction guides remain outside this pool. No source authority, history binding or storage keys change; historical runs are not rewritten.

## What now passes

- Ordinary rounding at the written decimal/scientific precision: `12.3456 → 12.35`, `12.6 → 13`. Integer counts cannot drift to neighboring integer counts.
- Thousands separators and compact scales such as `1234567 → 1.23M` and `1234 → 1.2k`.
- Fractional evidence displayed as percentages, such as `0.25 → 25%`. Reverse conversion needs explicit percent notation in the evidence or a percent/pct column label. Sign changes remain invalid.
- Complete basic numeric equations, such as `25 + 15 = 40`, when every input is supported. A bounded parser recomputes `+`, `-`, `*`, `/`, unary signs and parentheses with standard precedence. The verified result can be stated elsewhere in the same answer, with ordinary display rounding.

An unshown `40` still fails if only `25` and `15` were supplied. Wrong arithmetic fails even if its right-hand value happens to appear elsewhere in evidence. Invented operands, division by zero, non-finite/unsafe intermediate results, unsupported power/function syntax and unrelated new quantities do not acquire evidence through a valid equation. Expressions do not execute code. Inputs must match evidence without rounding; one equation's newly derived output does not become an input to another equation in this revision.

Arithmetic verification is bounded to 256-character expressions, 64 parser steps, 32 equality candidates and 16 verified equations per answer. Percent/scale display is supported on a result; expression inputs use ordinary numeric literals. Symbolic formulas, natural-language calculations and advanced functions should use the existing planning/local calculation engine. Dataset-wide totals, grouping and statistics must still come from the full-dataset engine, not extrapolated sample rows.

`diagnostics.answerNumberValidation` stores policy `numeric-evidence-v2` and the expression, inputs, recomputed value and displayed value for each accepted equation. Prompt version is `orbistry-conversation-v18-numeric-evidence`. Unsupported values retain `MODEL_INVALID_RESPONSE` and stable repair reason `dataset_unsupported_number`; details include rejected values/calculations and policy. The error now explains what to correct. One bounded final-answer correction remains; rejected text is not published as a successful response.

## Limits and verification

This is numeric consistency checking, not semantic grounding. It cannot prove a metric's meaning, a ratio's units, that a matching number answers the question, or that a sampled observation justifies a population claim. No arbitrary scale, currency or new factual evidence is authorized. Rounding tolerances follow written precision, replacing the previous blanket 0.005 tolerance that could accept large relative errors for tiny values.

Focused tests cover rounding, percentages, scales, signed/scientific values, correct/wrong equations, precedence, unknown operands, zero division, overflow, Markdown lists/code/tables and actionable errors. Orchestrator tests cover saved local verification metadata and one correction without publishing the rejected answer.

Verification: **257 deterministic tests passed**, zero failed or skipped; strict TypeScript, formatting and production build pass. The actual Electron preload → ChatService → CSV worker → provider → immutable answer pipeline passed with 20,000 rows, a secondary mean equation and rounded presentation. Its saved run contains `numeric-evidence-v2` and the locally recomputed value; evidence is in ignored `test-results/dataset-electron.json`. Electron transport is synthetic; live-model quality is not claimed. Restart Electron for the changed backend rule.
