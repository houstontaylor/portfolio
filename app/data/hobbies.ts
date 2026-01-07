export interface HobbyData {
  name: string;
  icon: string;
  description: string;
  color: string;
}

export const hobbiesData: HobbyData[] = [
  { name: "Roller Skating", icon: "🛼", description: "Weekend warrior at the local rink", color: "bg-pink" },
  { name: "Knitting", icon: "🧶", description: "Creating cozy scarves and sweaters", color: "bg-teal" },
  { name: "Gaming", icon: "🎮", description: "Playing indie games and puzzle adventures", color: "bg-green" },
  { name: "Game Dev", icon: "👾", description: "Building small games in my free time", color: "bg-neutral" },
];