export type SortKey = "name" | "pollinator";

interface FilterBarProps {
  types: string[];
  selectedType: string;
  onTypeChange: (type: string) => void;
  sortKey: SortKey;
  onSortChange: (key: SortKey) => void;
}

export function FilterBar({ types, selectedType, onTypeChange, sortKey, onSortChange }: FilterBarProps) {
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
        Sort by
        <select value={sortKey} onChange={(e) => onSortChange(e.target.value as SortKey)}>
          <option value="name">Name</option>
          <option value="pollinator">Pollinator score</option>
        </select>
      </label>
    </div>
  );
}
