import { FILTER_CATEGORIES } from "../../data/installationCategories";

interface FilterChipsProps {
  activeFilter: string;
  onChange: (filter: string) => void;
}

export function FilterChips({ activeFilter, onChange }: FilterChipsProps) {
  return (
    <div className="map-page__chip-row">
      {FILTER_CATEGORIES.map((cat) => (
        <button
          key={cat}
          type="button"
          className={
            "map-page__chip" + (cat === activeFilter ? " map-page__chip--active" : "")
          }
          onClick={() => onChange(cat)}
        >
          {cat === "all" ? "All" : cat}
        </button>
      ))}
    </div>
  );
}
