interface ScorePillProps {
  label: string;
  score: number | null;
}

// Score scale isn't finalized yet, so an unscored plant shows "Not yet rated"
// instead of a fabricated number.
export function ScorePill({ label, score }: ScorePillProps) {
  return (
    <span className="score-pill">
      <span className="score-pill__label">{label}</span>
      <span className="score-pill__value">{score === null ? "Not yet rated" : score}</span>
    </span>
  );
}
