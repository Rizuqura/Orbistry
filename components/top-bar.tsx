import { version } from "../package.json";

export function TopBar({
  view,
  onChangeView,
  settingsOpen,
  onOpenSettings,
}: Readonly<{
  view: "workspace" | "worldview" | "agent";
  onChangeView: (view: "workspace" | "worldview" | "agent") => void;
  settingsOpen: boolean;
  onOpenSettings: () => void;
}>) {
  return (
    <header className="top-bar">
      <div className="brand">
        <img
          className="brand-mark"
          src="./orbistry-logo.png"
          alt="Orbistry"
          width={96}
          height={32}
        />
        <span className="version">{`v${version} Victoria (Beta)`}</span>
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
          className={`nav-item${!settingsOpen && view === "worldview" ? " active" : ""}`}
          aria-label="WORLDVIEW"
          onClick={() => onChangeView("worldview")}
        >
          WORLDVIEW
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
