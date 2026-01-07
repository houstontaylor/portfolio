export interface SkillData {
  name: string;
  icon: string;
  detail: string;
  angle: number;
  orbit: number;
}

export const softwareSkills: SkillData[] = [
  { name: "Python", icon: "🐍", detail: "Expert - 5+ years experience, ML/AI projects", angle: 0, orbit: 1 },
  { name: "JavaScript", icon: "💛", detail: "Expert - React, Node.js, TypeScript", angle: 60, orbit: 1 },
  { name: "C++", icon: "⚡", detail: "Proficient - Systems programming, algorithms", angle: 120, orbit: 1 },
  { name: "React", icon: "⚛️", detail: "Expert - Modern web development", angle: 180, orbit: 1 },
  { name: "Figma", icon: "🎨", detail: "Expert - UI/UX design and prototyping", angle: 240, orbit: 1 },
  { name: "Git", icon: "📦", detail: "Proficient - Version control & collaboration", angle: 300, orbit: 1 },
];

export const languageSkills: SkillData[] = [
  { name: "English", icon: "🇺🇸", detail: "Native speaker", angle: 30, orbit: 2 },
  { name: "Spanish", icon: "🇪🇸", detail: "Conversational proficiency", angle: 120, orbit: 2 },
  { name: "French", icon: "🇫🇷", detail: "Intermediate - studied abroad in Paris", angle: 210, orbit: 2 },
  { name: "ASL", icon: "👋", detail: "Basic conversational skills", angle: 300, orbit: 2 },
];