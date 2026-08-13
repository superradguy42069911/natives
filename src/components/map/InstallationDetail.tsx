import type { Installation } from "../../data/installations";
import { ICONS, TYPE_LABELS, categoryFor } from "../../data/installationCategories";

interface InstallationDetailProps {
  installation: Installation | null;
  onClose: () => void;
}

export function InstallationDetail({ installation, onClose }: InstallationDetailProps) {
  const cat = installation ? categoryFor(installation.type) : null;
  const Icon = cat ? ICONS[cat.icon] : null;

  return (
    <div
      className={
        "map-page__detail-panel" + (installation ? " map-page__detail-panel--open" : "")
      }
    >
      <button className="map-page__close-btn" onClick={onClose} aria-label="Close">
        &times;
      </button>
      {installation && cat && Icon && (
        <div>
          <div
            className="map-page__detail-photo"
            style={{ background: `linear-gradient(135deg, ${cat.color}, var(--primary-dark))` }}
          >
            <Icon size={40} />
          </div>
          <div className="map-page__detail-body">
            <span className="map-page__type-badge" style={{ background: cat.color }}>
              {TYPE_LABELS[installation.type] ?? installation.type}
            </span>
            <h2 className="display">{installation.name}</h2>
            <p className="map-page__detail-desc">{installation.description}</p>
            <div className="map-page__tag-row">
              {installation.techniques.map((t) => (
                <span key={t} className="map-page__tag">
                  {TYPE_LABELS[t] ?? t}
                </span>
              ))}
            </div>
            <div className="map-page__meta-row">
              <span>Neighborhood</span>
              <strong>{installation.location.neighborhood}</strong>
            </div>
            <div className="map-page__meta-row">
              <span>Installed</span>
              <strong>{installation.installed_year}</strong>
            </div>
            <div className="map-page__meta-row">
              <span>Source</span>
              <strong>{installation.source_type.replace(/_/g, " ")}</strong>
            </div>
            <div className="map-page__visitor-note">{installation.visitor_notes}</div>
          </div>
        </div>
      )}
    </div>
  );
}
