interface ScorePillProps {
  label: string;
  value: string;
}

// Caller formats the display value (e.g. "4 / 5" or "Easy") so this
// component stays agnostic to whether the underlying data is numeric or
// a category label.
export function ScorePill({ label, value }: ScorePillProps) {
  return (
    <span className="score-pill">
      <span className="score-pill__label">{label}</span>
      <span className="score-pill__value">{value}</span>
    </span>
  );
}
