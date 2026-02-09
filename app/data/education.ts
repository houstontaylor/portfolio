export interface EducationTheme {
  bg: string;            // e.g. 'var(--light-teal)'
  border: string;        // e.g. 'var(--dark-teal)'
  accent: string;        // e.g. 'var(--dark-teal)'
  chipBg: string;        // e.g. 'rgba(255,255,255,0.75)'
  chipBorder: string;    // e.g. 'var(--dark-teal)'
  scrollTrack: string;   // e.g. 'rgba(0,0,0,0.08)'
  scrollThumb: string;   // e.g. 'var(--dark-teal)'
  scrollThumbHover: string; // e.g. 'var(--teal)' (or same as border)
}

export interface EducationData {
  school: string;
  location: string;
  degree: string;
  focus: string;
  year: string;
  description?: string;
  postcard: string;
  coursework: string[];
  clubs: string[];
  theme: EducationTheme;
}

export const educationData: EducationData[] = [
  {
    school: "Stanford University",
    location: "Palo Alto, CA",
    degree: "BS in Computer Science",
    focus: "Human-Computer Interaction",
    year: "2020-2024",
    description: "During my undergraduate studies, I focused on HCI and design, taking courses that bridged the gap between technology and user experience. I was actively involved in design projects and clubs that allowed me to apply my skills in real-world contexts.",
    postcard: "/about/BachelorsPostcard.svg",
    coursework: ["Data Structures", "Algorithms", "Operating Systems", "Web Dev", "Databases"],
    clubs: ["Stanford Talisman", "Black in CS", "Blackstage"],
    theme: {
      bg: "var(--light-green)",
      border: "var(--dark-green)",
      accent: "var(--dark-green)",
      chipBg: "rgba(255,255,255,0.75)",
      chipBorder: "var(--dark-green)",
      scrollTrack: "rgba(0,0,0,0.08)",
      scrollThumb: "var(--dark-green)",
      scrollThumbHover: "var(--green)",
    },
  },
  {
    school: "Stanford University",
    location: "Palo Alto, CA",
    degree: "MS in Computer Science",
    focus: "Human-Computer Interaction",
    year: "2024-2025",
    description: "Continuing my studies at Stanford to deepen my expertise in HCI and design. Excited to explore advanced topics and research opportunities in this field.",
    postcard: "/about/MastersPostcard.svg",
    coursework: ["Advanced HCI", "Design Thinking", "AI Ethics", "Interactive Systems"],
    clubs: [],
    theme: {
      bg: "var(--light-teal)",
      border: "var(--dark-teal)",
      accent: "var(--dark-teal)",
      chipBg: "rgba(255,255,255,0.75)",
      chipBorder: "var(--dark-teal)",
      scrollTrack: "rgba(0,0,0,0.08)",
      scrollThumb: "var(--dark-teal)",
      scrollThumbHover: "var(--teal)",
    },
  },
  {
    school: "Study Abroad",
    location: "Paris, France",
    degree: "Bing Overseas Study Program",
    focus: "Humanities & Culture",
    year: "Winter 2024",
    description: "Spent a quarter in Paris immersing myself in French culture and humanities courses. This experience broadened my perspective and enriched my understanding of design from a global and cultural standpoint.",
    postcard: "/about/StudyAbroadPostcard.svg",
    coursework: ["French Literature", "European History", "Art & Architecture", "Philosophy"],
    clubs: ["Assisstant Teacher", "Language Exchange"],
    theme: {
      bg: "var(--light-pink)",
      border: "var(--dark-pink)",
      accent: "var(--dark-pink)",
      chipBg: "rgba(255,255,255,0.75)",
      chipBorder: "var(--dark-pink)",
      scrollTrack: "rgba(0,0,0,0.08)",
      scrollThumb: "var(--dark-pink)",
      scrollThumbHover: "var(--pink)",
    },
  },
];
