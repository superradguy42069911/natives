export type IconName = "droplet" | "leaf" | "flow";

interface IconProps {
  size?: number;
}

export function DropletIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path fill="#fff" d="M12 2C9 7 5 11 5 15a7 7 0 0 0 14 0c0-4-4-8-7-13z" />
    </svg>
  );
}

export function LeafIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path fill="#fff" d="M20 4C10 4 4 10 4 18c0 1 .1 1.6.2 2 .4-.1 1-.2 2-.2 8 0 14-6 14-16 0-.3 0-.6-.2 .2z" />
      <path d="M4.6 19.4C7 15 12 10 19 6" stroke="#fff" strokeWidth={1.4} fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function FlowIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M4 6h16M4 12h10M4 18h16M15 9l3 3-3 3"
        fill="none"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const ICONS: Record<IconName, (props: IconProps) => React.JSX.Element> = {
  droplet: DropletIcon,
  leaf: LeafIcon,
  flow: FlowIcon,
};

export interface Category {
  icon: IconName;
  color: string;
  label: string;
}

export const CATEGORY: Record<string, Category> = {
  rain_garden: { icon: "droplet", color: "#4B4C7A", label: "Water systems" },
  swale: { icon: "droplet", color: "#4B4C7A", label: "Water systems" },
  rain_barrel: { icon: "droplet", color: "#4B4C7A", label: "Water systems" },
  curb_cut: { icon: "flow", color: "#D9782D", label: "Earthworks & access" },
  earthworks: { icon: "flow", color: "#D9782D", label: "Earthworks & access" },
  mulch_basin: { icon: "flow", color: "#D9782D", label: "Earthworks & access" },
  native_planting: { icon: "leaf", color: "#35503A", label: "Planting" },
  dry_garden: { icon: "leaf", color: "#35503A", label: "Planting" },
  food_forest: { icon: "leaf", color: "#35503A", label: "Planting" },
  other: { icon: "leaf", color: "#4A6E50", label: "Other" },
};

export const TYPE_LABELS: Record<string, string> = {
  rain_garden: "Rain garden",
  swale: "Swale",
  rain_barrel: "Rain barrel",
  curb_cut: "Curb cut",
  earthworks: "Earthworks",
  mulch_basin: "Mulch basin",
  native_planting: "Native planting",
  dry_garden: "Dry garden",
  food_forest: "Food forest",
  other: "Other",
};

export const FILTER_CATEGORIES = ["all", "Water systems", "Earthworks & access", "Planting"];

export function categoryFor(type: string): Category {
  return CATEGORY[type] ?? CATEGORY.other;
}
