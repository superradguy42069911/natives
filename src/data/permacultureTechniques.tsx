import type { ReactNode } from "react";
import {
  CurbCutIcon,
  NativePlantIcon,
  RainBarrelIcon,
  RainGardenIcon,
  RerouteIcon,
  SwaleIcon,
} from "../components/permaculture/moduleIcons";

export interface Technique {
  id: string;
  title: string;
  icon: (props: { size?: number }) => ReactNode;
  color: string;
  description: string;
  linkTo?: string;
  linkLabel?: string;
}

export const techniques: Technique[] = [
  {
    id: "swales",
    title: "Swales",
    icon: SwaleIcon,
    color: "var(--accent)",
    description:
      "A swale is a shallow, level-bottomed ditch dug along a slope's contour. Instead of letting rain run downhill and away, it catches that water and holds it in place long enough to soak into the soil - recharging the ground instead of the street.",
  },
  {
    id: "native-plants",
    title: "Native plants",
    icon: NativePlantIcon,
    color: "var(--primary)",
    description:
      "Southern California's native plants evolved for this exact climate - wet winters, dry summers - so once established they need little or no irrigation. Their deep root systems also open channels in compacted soil, helping rain soak in instead of pooling or running off.",
    linkTo: "/",
    linkLabel: "Browse 20 native plants",
  },
  {
    id: "rain-gardens",
    title: "Rain gardens",
    icon: RainGardenIcon,
    color: "var(--accent)",
    description:
      "A rain garden is a shallow, planted depression positioned to catch runoff from a roof, driveway, or downspout. Water sits there for a day or two after a storm, filters through the soil and roots, and soaks in - instead of carrying oil and debris straight to a storm drain.",
  },
  {
    id: "rain-barrels",
    title: "Rain barrels",
    icon: RainBarrelIcon,
    color: "var(--accent)",
    description:
      "A rain barrel sits at the base of a downspout and stores roof runoff instead of sending it straight to the street. That water can later be used for irrigation - and just as importantly, storing it takes pressure off the storm drain system during the storm itself.",
  },
  {
    id: "reroute-gutters",
    title: "Rerouting gutter runoff",
    icon: RerouteIcon,
    color: "var(--secondary)",
    description:
      "Most homes' downspouts are aimed at a driveway or the street by default. Redirecting that same pipe into a yard, planting bed, or rain barrel sends the same water somewhere useful instead of straight to a drain - often the simplest change on this list.",
  },
  {
    id: "curb-cuts",
    title: "Curb cuts & pavement runoff",
    icon: CurbCutIcon,
    color: "var(--secondary)",
    description:
      "A curb cut is a small, permitted notch cut into the curb that lets runoff detour into a planted parkway strip or yard basin instead of running down the street to the nearest storm drain. It's the one technique here that touches public right-of-way, so it needs a permit - Los Angeles has legalized and funded curb cuts for exactly this purpose.",
    linkTo: "/map",
    linkLabel: "See real installations near you",
  },
];
