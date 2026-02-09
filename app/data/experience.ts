export type ThemeKey = 'teal' | 'pink' | 'green' | 'neutral';
export type OverlayPreset = 'default' | 'wideTop';

export interface ExperienceData {
  title: string;
  company: string;
  period: string;
  description: string[];
  tags: string[];
  theme: ThemeKey;
  signSrc: string;
  location?: string;
  signText?: string;
  overlayPreset?: OverlayPreset;
}

export const experienceData: ExperienceData[] = [
  {
    title: "Barista",
    company: "Lula's Coffee Co.",
    period: "July 2024 - Present (Non-Consecutive)",
    description: [
      "Provided excellent customer service",
      "Identified customer needs",
      "Currently developing a mobile ordering app"
    ],
    tags: ["Customer Service", "Teamwork", "Mobile App Development"],
    theme: "neutral",
    signSrc: "/about/sign1.svg",
    overlayPreset: "wideTop",
  },
  {
    title: "Lifeguard Supervisor",
    company: "Stanford Aquatics",
    period: "March 2022 - June 2025",
    description: [
      "Supervised lifeguard teams",
      "Ensured pool safety",
      "Trained new staff"
    ],
    tags: ["Leadership", "Safety", "Training"],
    theme: "teal",
    signSrc: "/about/sign2.svg",
  },
  {
    title: "Project and Accessibility Manager",
    company: "Sunao Lab",
    period: "May 2023 - April 2024",
    description: [
      "Built accessible AI-powered podcast chatbots that respond in host's style, sourcing from past episodes."
    ],
    tags: ["Startup", "AI/ML", "Design", "PM"],
    theme: "green",
    signSrc: "/about/sign3.svg",
  },
  {
    title: "Software Development Intern",
    company: "Employ Reward Solutions, Inc.",
    period: "June 2023 - September 2023",
    description: [
      "Developed features for internal job-search platform used by career coaches and businesses."
    ],
    tags: ["Full-Stack", "JavaScript", "React"],
    theme: "pink",
    signSrc: "/about/sign4.svg",
    overlayPreset: "wideTop",
  },
  {
    title: "Head TA & Assistant TA",
    company: "NSLC Law & Mock Trial",
    period: "Summers 2021 and 2022",
    description: [
      "Hired staff", 
      "Led teaching teams", 
      "Mentored students in law and mock trial summer programs."
    ],
    tags: ["Education", "Leadership", "Law"],
    theme: "neutral",
    signSrc: "/about/sign5.svg",
  },
];