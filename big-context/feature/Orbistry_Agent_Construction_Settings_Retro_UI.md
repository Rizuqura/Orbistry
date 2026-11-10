## ADDITIONAL REQUIREMENTS — SETTINGS INTEGRATION & RETRO UI

### 1. Integrate Agent Construction into Settings

The Visual Agent Builder must be integrated into the existing **Settings** interface as a dedicated **Agent Construction** tab.

Do not create an unrelated standalone page.

This tab should combine agent identity customization and visual agent construction in one cohesive workspace.

Include:

- Agent profile picture (PFP) upload, preview, change, and removal.
- Agent name and description.
- Agent personality configuration.
- Agent behavior and instruction settings.
- Visual drag-and-drop construction canvas.
- Context, Skill, LLM, Workflow, and Knowledge Nodes.
- Save and apply configuration actions.

Reuse existing settings persistence and profile-image mechanisms where available. Persist PFP references safely and validate file type and size. Do not store raw image binaries inside graph JSON.

Changes should persist after reopening Settings. Distinguish saved drafts from configurations currently active in the Orbistry runtime.

### 2. Dedicated Retro-Futuristic Visual Design

Give the Agent Construction tab a distinctive **retro-futuristic interface**, while preserving compatibility with Quantfun's existing design system.

Design direction:

- Retro computer-terminal aesthetics.
- Soft floating bubble-shaped nodes.
- Rounded, slightly dimensional surfaces.
- Thin retro-style outlines.
- Subtle shadows and highlights.
- Cohesive monochromatic or tightly coordinated color palette derived from Quantfun's existing theme.
- Subtle pixel or vintage UI details.
- Elegant typography with clear technical labels.
- Smooth, restrained motion.

The nodes should feel like interactive floating bubbles rather than ordinary rectangular workflow cards.

Maintain a consistent visual language across Context, Personality, Skill, LLM, and Knowledge Nodes.

Distinguish node categories through icons, labels, and subtle tonal variations rather than unrelated bright colors.

### 3. Floating Bubble Interactions

Implement:

- Smooth drag-and-drop behavior.
- Subtle floating animation when idle.
- Gentle elevation while dragging.
- Soft glow or outline on selection.
- Animated connection handles.
- Clear connection feedback.
- Smooth snapping and repositioning.

Floating animations must never alter actual graph coordinates or interfere with dragging, connecting, or hit testing.

Respect reduced-motion accessibility preferences.

Avoid excessive animation, visual clutter, and performance-heavy effects.

### 4. Settings Layout

Suggested layout:

**Agent Construction tab**

- Top: Agent identity section with PFP, name, and description.
- Left: Bubble Node Library.
- Center: Interactive Agent Construction Canvas.
- Right: Selected Node Settings / Inspector.
- Bottom: Execution Preview and Logs.

Use responsive panels where appropriate.

Preserve the existing Settings navigation, functionality, and overall application identity.

### 5. Functional Requirements

The PFP, identity settings, node configurations, and saved workflow must remain synchronized with the actual agent configuration.

Changing an agent PFP must update the avatar wherever that agent is displayed in the application, using existing shared state and persistence conventions.

The canvas must remain fully functional despite its custom visual design.

**Priority: functional drag-and-drop architecture first, polished retro bubble aesthetics second.**

The final result should feel like a distinctive, customizable **Orbistry Agent Construction Studio inside Settings**, not a generic workflow editor.
