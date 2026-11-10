# Product Context — Orbistry V0.0.1-Amadeus

## Problem

Current AI chatbots are powerful, but their intelligence is largely session- and model-dependent.

A user may spend months researching, reasoning, documenting, and building knowledge with an AI system, yet much of that intellectual progress remains trapped inside:

- Individual conversations
- Specific AI models
- Disconnected applications
- Plugins
- Files and folders
- Temporary context windows

This creates several fundamental problems.

### AI Conversations Are Not Permanent Intellectual Infrastructure

AI systems do not necessarily preserve a user's:

- Research progress
- Evolving thesis
- Assumptions
- Evidence
- Models
- Decisions
- Relationships between ideas
- Accumulated domain knowledge

Long conversations can also become increasingly inefficient as context grows.

### Knowledge Is Fragmented Across Tools

A user's knowledge may be distributed across:

- AI conversations
- PDFs
- Spreadsheets
- Images
- Websites
- Notes
- Code
- Databases
- Cloud storage
- Specialized software

Existing solutions may connect some of these sources, but often remain plugins, integrations, or isolated applications rather than a persistent knowledge layer underneath the user's workflow.

### AI Progress Can Create Switching Costs

AI models evolve rapidly.

A user may build a workflow around one model and later discover that another model is significantly better. If accumulated context, workflow, and knowledge are deeply tied to the original model, changing models can feel like starting over.

The fundamental question is:

> Why should a user's knowledge belong to an AI model?

Orbistry's answer is:

> It shouldn't.

---

## Product Philosophy

> **AI models should be replaceable. Knowledge should be permanent.**

Orbistry aims to build infrastructure around AI models rather than another AI model itself.

The core philosophy is:

> **Your intelligence should outlive the model that helps you build it.**

The underlying knowledge environment should remain persistent while different models can provide different capabilities, including:

- Reasoning
- Coding
- Multimodal understanding
- Summarization
- Research
- Planning
- Decision support
- Automation

The model is therefore treated as a replaceable reasoning engine, while the user's accumulated knowledge remains persistent.

---

## Core Functions

### 1. Knowledge Building

Transform raw information and interaction into structured knowledge.

The system should eventually help users:

- Capture information
- Extract concepts
- Identify relationships
- Formulate claims
- Build hypotheses
- Develop research
- Connect new information with existing knowledge

### 2. Knowledge Banking

Maintain a persistent, structured repository of accumulated knowledge.

The intended relationship is:

Source
↓
Observation
↓
Concept
↓
Claim
↓
Assumption
↓
Model
↓
Conclusion
↓
Decision

The goal is for knowledge to become **compounding intellectual capital**, rather than merely a collection of files.

### 3. Knowledge Documentation

Preserve the history and provenance of intellectual work.

The long-term system should be able to understand:

- Where an idea came from
- What evidence supported it
- What assumptions were used
- What changed over time
- Which research contributed to a conclusion
- Which model produced a result
- What the user previously believed
- Why a thesis changed

The objective is not simply remembering information, but preserving **how knowledge was constructed**.

---

## Initial Domain

The architecture is intended to eventually become domain-agnostic, but the initial product is deliberately focused.

The founding use case is:

> **Knowledge infrastructure for data-intensive research and financial decision-making.**

The initial knowledge environment focuses on:

### Knowledge

- Concepts
- Literature
- Observations
- Notes
- Sources

### Research

- Documents
- Financial statements
- Datasets
- Spreadsheets
- Web research
- Papers
- Earnings calls
- Filings

### Thesis

- Hypotheses
- Investment theses
- Arguments
- Assumptions
- Counterarguments

### Data

- Financial data
- Datasets
- Spreadsheets
- APIs
- Models
- Calculations

### V0.0.1 Practical Data Sources

For Amadeus, the initial implementation focuses specifically on:

- Markdown files
- CSV files
- Selected folders containing these files

This provides the initial bridge between **knowledge management and data interaction**.

---

## Target User

### V0.0.1 Target User

**Internal users.**

Amadeus is initially intended as an internal research and development environment rather than a public product.

The initial purpose is to:

1. Build a continuously compounding information bank.
2. Test AI interaction with persistent research and data.
3. Develop the underlying knowledge infrastructure.
4. Validate workflows before exposing the system to external users.

The initial user profile is therefore intentionally narrow:

> **Internal users working with research, data, financial information, and accumulated knowledge.**

A detailed external customer persona is not yet defined for V0.0.1.

### Future Target User

The architecture may eventually be expanded toward **corporate users**, particularly through a future relationship with the user's private infrastructure company.

Corporate functionality is a future direction and **not a V0.0.1 requirement**.

---

## Product Principles

### 1. AI Models Are Replaceable

The product should avoid fundamental dependence on a single AI model or provider.

### 2. Knowledge Should Persist

Information and accumulated intellectual work should remain available across model and application changes.

### 3. Information Should Compound

Each new piece of information should have the potential to connect with existing information rather than simply becoming another isolated file.

### 4. Context Should Be Grounded in User-Owned Information

AI responses should increasingly be based on information available inside the user's knowledge environment.

### 5. Files Are Inputs, Not the Final Abstraction

The initial system uses files such as Markdown and CSV, but the long-term goal is to move from:

> "Where is the file?"

toward:

> **"What does this information connect to?"**

### 6. Start Internal, Then Validate

V0.0.1 should prioritize experimentation and usefulness for internal users before attempting broader productization.

### 7. Design for Extensibility, Not Premature Scale

The architecture should avoid unnecessarily blocking future corporate use, while V0.0.1 should not introduce corporate infrastructure before it is actually required.

### 8. The Model Is the Engine; the Knowledge System Is the Infrastructure

The long-term architecture remains:

Human
↓
Personal / Organizational Knowledge
↓
Data / Research
↓
Knowledge Layer
↓
AI Models
↓
Intelligence
↓
Decision / Action

---

## MVP

# Orbistry V0.0.1 — Amadeus

V0.0.1 is an **internal AI-native knowledge and data workspace**.

Its purpose is to establish the first practical version of Orbistry's information infrastructure while testing whether AI models can interact meaningfully with a persistent collection of research and data.

### Feature 1 — Vault / Folder Selection

The user selects a folder containing their knowledge.

User
↓
Select Folder
↓
Discover Files

The initial system should be capable of identifying supported files within the selected environment.

### Feature 2 — Markdown Reading

Orbistry can read Markdown-based knowledge files.

Example:

research/
├── TSMC.md
├── Oil.md
└── Macro.md

### Feature 3 — CSV Reading

Orbistry can read CSV datasets as an initial structured-data format.

Example:

data/
├── pgeo_financials.csv
├── btc_returns.csv
└── portfolio.csv

The initial goal is **reading and contextual understanding**, not advanced statistical computing.

### Feature 4 — Search

Search across supported knowledge files.

The user should be able to locate relevant information within the selected knowledge environment.

### Feature 5 — AI Model API

Orbistry connects to external AI models through an API layer.

The initial direction is model-agnostic, with OpenRouter identified as the initial model-access layer.

Potential supported models include:

- Gemini
- Claude
- GPT
- Qwen
- DeepSeek

### Feature 6 — File / Folder-Aware AI Chat

The user can ask the AI to work with a selected folder or specific files.

Basic workflow:

User Request
↓
Identify Relevant Files
↓
Read Files
↓
Build Context
↓
Send Relevant Context to Model
↓
Generate Response

The V0.0.1 AI does not need to autonomously modify the knowledge environment.

The initial objective is:

> **The AI can access, read, understand, and reason over user-selected knowledge and data.**

### V0.0.1 Core Loop

Information
↓
Orbistry
↓
Information Bank
↓
Context
↓
AI Model
↓
Understanding
↓
Research / Insight

---

## Explicitly Out of Scope

The following are outside V0.0.1:

- Trading
- Bloomberg features
- Autonomous agents
- Collaboration
- Quant Engine
- Cloud Sync
- Advanced statistical analysis
- Python-based analysis
- Matplotlib visualization
- Advanced data science workflows
- Corporate user infrastructure

These exclusions exist to prevent premature expansion of the MVP.

---

## Long-Term Vision

Orbistry is intended to evolve from an internal research and data workspace into a broader **persistent intelligence layer**.

### V0.2 — Basic Data Intelligence

Potential next step:

CSV
↓
Data Understanding
↓
Basic Statistics
↓
Conversational Answer

Potential capabilities:

- Mean
- Median
- Standard deviation
- Minimum / maximum
- Observation counts
- Basic descriptive statistics

This stage should validate whether Orbistry can move from **reading data** to **performing basic analysis**.

### Future Data Science Layer

A later stage could introduce:

CSV
↓
Python / Pandas
↓
Statistical Analysis
↓
Matplotlib
↓
Visualization
↓
AI Explanation

This is deliberately beyond V0.0.1.

### Advanced Research Intelligence

The long-term thesis includes AI systems capable of continuously analyzing and updating knowledge environments.

### Decision Intelligence

The system could eventually connect:

Knowledge
↓
Evidence
↓
Models
↓
Assumptions
↓
Outcomes

to support decision-making.

### Automation

Potential recurring workflows include:

- Research
- Monitoring
- Documentation
- Analytical work

### Corporate Knowledge Infrastructure

After validation through internal use, the underlying infrastructure may eventually be adapted for corporate users.

Internal Information Bank
↓
Knowledge Infrastructure
↓
Organizational Information
↓
Corporate Intelligence

Corporate functionality is a **future product expansion**, not part of the current MVP.

### End-State Vision

The ultimate vision is:

> **Not another chatbot, but a persistent intelligence layer for humans.**

The model may change.

The interface may change.

The tools may change.

**The user's accumulated knowledge should not have to.**
