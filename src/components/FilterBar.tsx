export type SortKey = "name" | "type";
export type WaterZone = "wet" | "medium" | "dry";

interface FilterBarProps {
  types: string[];
  selectedType: string;
  onTypeChange: (type: string) => void;
  selectedZone: WaterZone | "all";
  onZoneChange: (zone: WaterZone | "all") => void;
  sortKey: SortKey;
  onSortChange: (key: SortKey) => void;
}

export function FilterBar({
  types,
  selectedType,
  onTypeChange,
  selectedZone,
  onZoneChange,
  sortKey,
  onSortChange,
}: FilterBarProps) {
  return (
    <div className="filter-bar">
      <label className="filter-bar__field">
        Type
        <select value={selectedType} onChange={(e) => onTypeChange(e.target.value)}>
          <option value="all">All types</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <label className="filter-bar__field">
        Water zone
        <select value={selectedZone} onChange={(e) => onZoneChange(e.target.value as WaterZone | "all")}>
          <option value="all">All zones</option>
          <option value="wet">Wet</option>
          <option value="medium">Medium</option>
          <option value="dry">Dry</option>
        </select>
      </label>

      <label className="filter-bar__field">
        Sort by
        <select value={sortKey} onChange={(e) => onSortChange(e.target.value as SortKey)}>
          <option value="name">Name</option>
          <option value="type">Type</option>
        </select>
      </label>
    </div>
  );
}
