const LEAF_PATH = "M0 6 C-4.4 6.1, -6.6 3.4, -6 0.3 C-2.2 0.6, 0.4 2.9, 0 6 Z";

interface LeafProps {
  x: number;
  y: number;
  scale?: number;
  rotate?: number;
  color: string;
}

function Leaf({ x, y, scale = 1, rotate = 0, color }: LeafProps) {
  return (
    <path
      d={LEAF_PATH}
      fill={color}
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
    />
  );
}

export function BeforeAfterIllustration() {
  return (
    <svg viewBox="0 0 760 300" className="permaculture-illustration" role="img" aria-label="Before: rain runs off a paved yard straight to the street. After: the same rain is slowed, spread, and soaked in through native planting, a swale, a rain barrel, and a curb cut.">
      <text x="197" y="30" textAnchor="middle" className="permaculture-illustration__label">BEFORE</text>
      <text x="597" y="30" textAnchor="middle" className="permaculture-illustration__label">AFTER</text>

      {/* ---------- BEFORE ---------- */}
      <g>
        <rect x="0" y="220" width="340" height="80" fill="var(--muted-on-dark)" opacity="0.35" />
        <rect x="20" y="90" width="35" height="130" fill="var(--text-muted)" />
        <rect x="46" y="100" width="6" height="112" fill="var(--primary-dark)" />
        <rect x="55" y="213" width="245" height="7" fill="#b7b2a6" />
        <rect x="300" y="205" width="15" height="15" fill="#8f8a7d" />
        <rect x="315" y="213" width="25" height="7" fill="#5f5a52" />
        <line x1="322" y1="215" x2="322" y2="218.5" stroke="var(--offwhite)" strokeWidth="1.4" />
        <line x1="327" y1="215" x2="327" y2="218.5" stroke="var(--offwhite)" strokeWidth="1.4" />
        <line x1="332" y1="215" x2="332" y2="218.5" stroke="var(--offwhite)" strokeWidth="1.4" />

        <path d="M49 212 L49 220 M46 217 L49 221 L52 217" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M60 216.5 H305" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 9" />
        <path d="M298 212 L306 216.5 L298 221" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        <text x="197" y="278" textAnchor="middle" className="permaculture-illustration__caption">
          Runoff sheets off the pavement, straight to the storm drain
        </text>
      </g>

      {/* ---------- Transformation arrow ---------- */}
      <path d="M350 150 H408" stroke="var(--secondary)" strokeWidth="3" strokeLinecap="round" />
      <path d="M400 141 L412 150 L400 159" fill="none" stroke="var(--secondary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {/* ---------- AFTER ---------- */}
      <g transform="translate(420 0)">
        <rect x="0" y="220" width="340" height="80" fill="var(--muted-on-dark)" opacity="0.35" />
        <rect x="20" y="90" width="35" height="130" fill="var(--text-muted)" />
        <rect x="46" y="100" width="6" height="80" fill="var(--primary-dark)" />

        {/* rain barrel */}
        <rect x="34" y="178" width="24" height="38" rx="5" fill="var(--primary-mid)" />
        <line x1="34" y1="190" x2="58" y2="190" stroke="var(--offwhite)" strokeWidth="1.3" opacity="0.7" />
        <line x1="34" y1="204" x2="58" y2="204" stroke="var(--offwhite)" strokeWidth="1.3" opacity="0.7" />
        <path d="M58 208 C 75 208, 78 214, 90 216" fill="none" stroke="var(--primary-mid)" strokeWidth="3" strokeLinecap="round" />

        {/* swale / rain garden depression */}
        <path d="M55 214 C 110 214, 130 232, 197 232 C 264 232, 284 214, 300 214 L300 220 C 284 220, 264 238, 197 238 C 130 238, 110 220, 55 220 Z" fill="var(--primary)" opacity="0.28" />
        <path d="M55 214 C 110 214, 130 232, 197 232 C 264 232, 284 214, 300 214" fill="none" stroke="var(--primary)" strokeWidth="1.4" />

        <Leaf x={95} y={222} scale={1.3} rotate={-15} color="var(--primary)" />
        <Leaf x={130} y={230} scale={1.5} rotate={10} color="var(--primary-mid)" />
        <Leaf x={168} y={234} scale={1.2} rotate={-20} color="var(--primary)" />
        <Leaf x={205} y={234} scale={1.4} rotate={25} color="var(--primary-mid)" />
        <Leaf x={242} y={229} scale={1.3} rotate={-10} color="var(--primary)" />
        <Leaf x={272} y={220} scale={1.2} rotate={18} color="var(--primary-mid)" />

        <path d="M150 244 l0 8 M148 249 l2 3 l2 -3" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
        <path d="M245 244 l0 8 M243 249 l2 3 l2 -3" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />

        {/* curb cut */}
        <rect x="300" y="205" width="8" height="15" fill="#8f8a7d" />
        <rect x="322" y="205" width="18" height="15" fill="#8f8a7d" />
        <rect x="315" y="213" width="25" height="7" fill="#5f5a52" />
        <path d="M308 218 C 312 222, 316 222, 322 218" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
        <Leaf x={313} y={221} scale={0.8} rotate={0} color="var(--primary-mid)" />

        <text x="197" y="278" textAnchor="middle" className="permaculture-illustration__caption">
          Rain slows, spreads, and soaks in on-site
        </text>
      </g>
    </svg>
  );
}
