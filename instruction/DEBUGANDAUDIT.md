# Orbistry — Debugging & Audit Protocol
**Version:** 0.1  
**Scope:** Bug investigation, error resolution, and runtime diagnostics

## 1. Core Principle

**Diagnose before modifying. Verify after modifying.**

Codex MUST investigate the probable root cause before applying a fix.

Do not randomly modify code until an error disappears.

## 2. Debugging Lifecycle

### Step 1 — Capture

Collect relevant evidence:

- Error message
- Stack trace
- Affected component
- Operation being executed
- Relevant environment information
- Available logs

Never expose credentials or private user content.

### Step 2 — Reproduce

Attempt to reproduce the issue.

Identify:

- Triggering action
- Expected behavior
- Actual behavior
- Conditions required for reproduction

If reproduction fails, report that limitation.

### Step 3 — Root Cause Analysis

Trace the relevant execution path.

Inspect:

- Function calls
- Input and output values
- State transitions
- Dependencies
- Data transformations
- Relevant asynchronous operations

Distinguish confirmed causes from hypotheses.

### Step 4 — Minimal Repair

Apply the smallest reasonable fix that addresses the underlying cause.

Avoid:

- Unrelated refactoring
- Broad architectural changes
- Silent error suppression
- Removing functionality merely to eliminate errors

### Step 5 — Verification

After the repair:

1. Re-run the failing scenario.
2. Run relevant automated tests.
3. Add regression coverage when practical.
4. Check affected integrations.
5. Report tests that could not be executed.

Never claim a fix is verified when verification was not performed.

### Step 6 — Audit Report

Every meaningful bug fix MUST include:

```markdown
## Debug Audit

**Component:**
**Affected Files:**
**Observed Error:**
**Root Cause:**
**Changes Applied:**
**Verification:**
**Remaining Risks:**
```

## 3. Runtime Logging Standards

Use structured logging when appropriate.

Recommended fields:

```json
{
  "timestamp": "ISO-8601",
  "severity": "ERROR",
  "component": "world.indexer",
  "operation": "parse_source",
  "request_id": "request_001",
  "error_code": "SOURCE_PARSE_FAILED",
  "message": "Unable to parse source"
}
```

Only include fields relevant to the operation.

## 4. Logging Safety

NEVER log:

- API keys
- Authentication tokens
- Passwords
- Private documents
- Sensitive user content
- Complete LLM prompts containing private information

Avoid excessive logging and unnecessary storage of diagnostic data.

## 5. Debugging Restrictions

Codex MUST NOT:

- Claim a root cause without sufficient evidence.
- Hide unresolved failures.
- Delete user data to resolve a bug without explicit authorization.
- Disable tests merely to obtain a passing result.
- Introduce unrelated changes without justification.

## 6. Final Debugging Summary

After completing an investigation, Codex MUST clearly state:

- What failed.
- Why it failed, if established.
- What was changed.
- How the result was verified.
- What remains uncertain.

**Guiding principle:** Every bug should leave the system more understandable than before.