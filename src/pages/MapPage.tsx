import { useMemo, useState } from "react";
import { installations } from "../data/installations";
import { categoryFor } from "../data/installationCategories";
import { InstallationMap } from "../components/map/InstallationMap";
import { FilterChips } from "../components/map/FilterChips";
import { InstallationList } from "../components/map/InstallationList";
import { InstallationDetail } from "../components/map/InstallationDetail";
import "../styles/map.css";

export function MapPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const visibleInstallations = useMemo(() => {
    if (activeFilter === "all") return installations;
    return installations.filter((inst) => categoryFor(inst.type).label === activeFilter);
  }, [activeFilter]);

  const selectedInstallation = installations.find((inst) => inst.id === selectedId) ?? null;

  return (
    <div className="map-page">
      <header className="map-page__header">
        <div>
          <span className="map-page__wordmark">Strong Cities LA</span>
          <span className="map-page__tagline">Map &amp; Registry</span>
        </div>
        <span className="map-page__demo-badge">Demo data — not real installations</span>
      </header>

      <div className="map-page__layout">
        <InstallationMap
          installations={visibleInstallations}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
        <aside className="map-page__aside">
          <div className="map-page__filters">
            <h2 className="display">Nearby installations</h2>
            <FilterChips activeFilter={activeFilter} onChange={setActiveFilter} />
          </div>
          <InstallationList
            installations={visibleInstallations}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </aside>
      </div>

      <InstallationDetail
        installation={selectedInstallation}
        onClose={() => setSelectedId(null)}
      />
    </div>
  );
}
