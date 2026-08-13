import type { Installation } from "../../data/installations";
import { ICONS, TYPE_LABELS, categoryFor } from "../../data/installationCategories";

interface InstallationListProps {
  installations: Installation[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export function InstallationList({ installations, selectedId, onSelect }: InstallationListProps) {
  if (installations.length === 0) {
    return <p className="map-page__list-empty">No installations match this filter.</p>;
  }

  return (
    <div className="map-page__list">
      {installations.map((inst) => {
        const cat = categoryFor(inst.type);
        const Icon = ICONS[cat.icon];
        return (
          <button
            key={inst.id}
            type="button"
            className={
              "map-page__list-item" +
              (inst.id === selectedId ? " map-page__list-item--selected" : "")
            }
            onClick={() => onSelect(inst.id)}
          >
            <div className="map-page__dot" style={{ background: cat.color }}>
              <Icon size={16} />
            </div>
            <div className="map-page__item-body">
              <h3>{inst.name}</h3>
              <p>
                {inst.location.neighborhood} &middot; {TYPE_LABELS[inst.type] ?? inst.type}
              </p>
              <div className="map-page__item-meta">
                {inst.visible_from_street ? "Visible from street" : "Limited visibility"}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
