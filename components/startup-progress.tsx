import { version } from "../package.json";

type StartupProgressProps = {
  progress: number;
  label: string;
  error: string | null;
  onContinue: () => void;
};

export function StartupProgress({
  progress,
  label,
  error,
  onContinue,
}: StartupProgressProps) {
  return (
    <section className="startup-screen" aria-label="Orbistry startup">
      <div className="startup-card">
        <img
          className="startup-brand"
          src="./orbistry-logo.png"
          alt="Orbistry"
          width={360}
          height={120}
        />
        <p className="startup-version">{`v${version} Victoria (Beta)`}</p>
        <p className="startup-stage" role="status" aria-live="polite">
          {label}
        </p>
        <progress aria-label="Startup progress" max={100} value={progress} />
        <div className="startup-caption">
          <span>Preparing your workspace</span>
          <span>{progress}%</span>
        </div>
        {error && (
          <p className="startup-error" role="alert">
            {error}
          </p>
        )}
        <button type="button" onClick={onContinue}>
          <span className="startup-continue-icon" aria-hidden="true">
            →
          </span>
          Continue to workspace
        </button>
      </div>
    </section>
  );
}
