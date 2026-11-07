export function TopBar({
  view,
  onChangeView,
  settingsOpen,
  onOpenSettings,
}: Readonly<{
  view: "workspace" | "planet" | "agent";
  onChangeView: (view: "workspace" | "planet" | "agent") => void;
  settingsOpen: boolean;
  onOpenSettings: () => void;
}>) {
  return (
    <header className="top-bar">
      <div className="brand">
        <img
          className="brand-mark"
          src="./qterminal-logo.png"
          alt=""
          width={16}
          height={16}
        />
        <span>Orbistry</span>
        <span className="version">v1.0.1 Victoria Beta</span>
      </div>
      <nav className="top-nav" aria-label="Primary">
        <button
          className={`nav-item${!settingsOpen && view === "workspace" ? " active" : ""}`}
          aria-label="WORKSPACE"
          onClick={() => onChangeView("workspace")}
        >
          WORKSPACE
        </button>
        <button
          className={`nav-item${!settingsOpen && view === "planet" ? " active" : ""}`}
          aria-label="PLANET VIEW"
          onClick={() => onChangeView("planet")}
        >
          PLANET VIEW
        </button>
        <button
          className={`nav-item${!settingsOpen && view === "agent" ? " active" : ""}`}
          aria-label="AGENT"
          aria-current={!settingsOpen && view === "agent" ? "page" : undefined}
          onClick={() => onChangeView("agent")}
        >
          AGENT
        </button>
        <button
          className={`nav-item${settingsOpen ? " active" : ""}`}
          aria-label="SETTINGS"
          aria-current={settingsOpen ? "page" : undefined}
          onClick={onOpenSettings}
        >
          SETTINGS
        </button>
      </nav>
      <div className="top-actions">
        <span className="workspace-edition">Your knowledge workspace</span>
      </div>
    </header>
  );
}
