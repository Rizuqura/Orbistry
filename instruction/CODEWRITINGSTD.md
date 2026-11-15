# Orbistry — Code Writing Standards
**Version:** 0.1  
**Scope:** All Codex agents working on Orbistry / W&T (Wonton)

## 1. Core Principles

- Prefer readable, explicit code over clever or overly compressed implementations.
- Use English for code identifiers and technical documentation.
- Follow existing repository conventions unless there is a justified reason to change them.
- Prioritize maintainability, modularity, and predictable behavior.
- Avoid unnecessary dependencies, abstractions, and duplicated logic.

## 2. Naming Conventions

Use descriptive names that communicate intent.

**Preferred:**
```python
def build_entity_knowledge_index(entity_id, source_ids):
    ...
```

**Avoid:**
```python
def process(x, y):
    ...
```

Use consistent naming conventions appropriate to the language.

## 3. Function Design

- Each function SHOULD have one primary responsibility.
- Keep functions reasonably small and understandable.
- Separate business logic from UI, storage, and external integrations where practical.
- Use type annotations when supported.
- Make dependencies explicit.

## 4. Error Handling

- NEVER silently suppress unexpected exceptions.
- NEVER use empty exception handlers such as `except: pass`.
- Handle expected errors explicitly.
- Preserve useful error context when re-raising exceptions.
- Avoid fallback behavior that hides broken functionality.

## 5. Code Modification Rules

Before modifying code:

1. Inspect the relevant implementation.
2. Understand its dependencies and callers.
3. Identify the intended behavior.
4. Prefer the smallest maintainable change.

After modifying code:

1. Review affected code paths.
2. Check for unintended side effects.
3. Run relevant verification.
4. Report unresolved issues.

**Guiding principle:** Code must remain understandable to both human developers and future AI agents.

# Orbistry — Function Documentation Standards
**Version:** 0.1  
**Scope:** All new and modified functions, methods, and definitions

## 1. Mandatory Documentation

Every new or modified function MUST include a meaningful docstring or equivalent documentation comment.

Documentation should explain:

- Purpose: Why the function exists.
- Inputs: Important parameters and their meaning.
- Outputs: Return values and expected results.
- Errors: Relevant exceptions or failure conditions.
- Side Effects: File writes, database changes, network requests, or other state changes.

Short, obvious functions may use a concise one-line docstring.

## 2. Python Example

```python
def assign_source_to_entity(
    entity_id: str,
    source_id: str
) -> bool:
    """
    Assign an existing Vault source to a World entity.

    Args:
        entity_id: Target entity identifier.
        source_id: Existing Vault source identifier.

    Returns:
        True when the assignment succeeds.

    Raises:
        ValueError: If an identifier is invalid.

    Side Effects:
        Creates an entity-source reference.
        Does not move or duplicate the original file.
    """
```

## 3. JavaScript / TypeScript Example

```typescript
/**
 * Assigns an indexed source reference to an entity.
 *
 * @param entityId - Target entity identifier.
 * @param sourceId - Existing source identifier.
 * @returns The resulting assignment.
 * @throws If validation or persistence fails.
 *
 * Side effects:
 * Updates the entity-source relationship.
 */
```

## 4. Commenting Rules

- Comments SHOULD explain reasoning, assumptions, and non-obvious behavior.
- Avoid comments that merely repeat the next line of code.
- Document important architectural constraints.
- Keep documentation synchronized with implementation changes.
- Do not write misleading or speculative documentation.

## 5. Architectural Documentation

Functions crossing Wonton boundaries SHOULD identify their responsibilities.

Examples:

- Vault: Source storage and retrieval.
- World Building: Entity and relationship management.
- Engine: Parsing, indexing, transformation, and execution.
- Portal: User interaction and presentation.

Document cross-boundary side effects when relevant.

## 6. Codex Compliance

Before completing a task, Codex MUST verify that:

1. New functions have documentation.
2. Modified function documentation remains accurate.
3. Important errors and side effects are described.
4. Comments do not contradict actual behavior.

**Guiding principle:** Every function should communicate its purpose without requiring the reader to reverse-engineer its implementation.
