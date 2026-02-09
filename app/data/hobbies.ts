import { IconType } from "react-icons";
import { GiBookshelf, GiGamepadCross, GiRollerSkate, GiYarn } from "react-icons/gi";

export type HobbyAccent = "teal" | "pink" | "green" | "neutral";

export interface HobbyData {
  id: string;
  name: string;
  icon: IconType;
  description: string;
  accent: HobbyAccent;
  // card flavor
  year?: string;          // e.g. "2026"
  rarity?: "Common" | "Rare" | "Ultra-Rare";
  stats?: { label: string; value: number }[]; // little stat pips (1–5)
  link?: { label: string; href: string };
  pictures?: string[];
}

export const hobbiesData: HobbyData[] = [
  {
    id: "roller",
    name: "Roller Skating",
    icon: GiRollerSkate,
    description: "Weekend warrior at the local rink",
    accent: "pink",
    year: "2026",
    rarity: "Rare",
    stats: [
      { label: "Speed", value: 4 },
      { label: "Balance", value: 5 },
    ],
  },
  {
    id: "knit",
    name: "Knitting",
    icon: GiYarn,
    description: "Creating cozy scarves and sweaters",
    accent: "teal",
    year: "2026",
    rarity: "Common",
    stats: [
      { label: "Patience", value: 5 },
      { label: "Cozy", value: 5 },
    ],
  },
  {
    id: "gamedev",
    name: "Game Dev",
    icon: GiGamepadCross,
    description: "Building small games in my free time",
    accent: "green",
    year: "2026",
    rarity: "Ultra-Rare",
    stats: [
      { label: "Creativity", value: 5 },
      { label: "Debugging", value: 4 },
    ],
  },
  {
    id: "reading",
    name: "Reading",
    icon: GiBookshelf,
    description: "From classics to YA novels, I love getting lost in a good book",
    accent: "neutral",
    year: "2026",
    rarity: "Rare",
    stats: [
      { label: "Focus", value: 4 },
      { label: "Imagination", value: 5 },
    ],
  },
];
