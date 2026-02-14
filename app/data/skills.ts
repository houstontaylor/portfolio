import { AiOutlinePython } from "react-icons/ai";
import { IconType } from "react-icons";
import { CgCPlusPlus } from "react-icons/cg";
import { RiJavascriptLine } from "react-icons/ri";
import { FaFigma, FaGithubAlt, FaHandsAslInterpreting, FaReact } from "react-icons/fa6";
import { GiFrance, GiMexico } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";
export type SkillRing = 'tech' | 'design';

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export type SkillItem = {
  id: string;              
  name: string;
  icon: IconType;       
  ring: SkillRing;         
  angle: number;           
  level: SkillLevel; // 1–5
  proficiency?: string;
  years?: number;          
  detail: string;          
  tags?: string[];         
  accent?: 'teal' | 'pink' | 'green' | 'neutral'; 
};

export const techSkills: SkillItem[] = [
  { id: "Python", name: "Python", icon: AiOutlinePython, ring: "tech", angle: 0, level: 5, years: 5, detail: "Expert - ML/AI projects", tags: ["ML", "AI"], accent: "teal" },
  { id: "JavaScript", name: "JavaScript", icon: RiJavascriptLine, ring: "tech", angle: 60, level: 5, years: 5, detail: "Expert - React, Node.js, TypeScript", tags: ["React", "Node.js", "TypeScript"], accent: "teal" },
  { id: "C++", name: "C++", icon: CgCPlusPlus, ring: "tech", angle: 120, level: 4, years: 4, detail: "Proficient - Systems programming, algorithms", tags: ["Systems programming", "Algorithms"], accent: "teal" },
  { id: "React", name: "React", icon: FaReact, ring: "tech", angle: 180, level: 5, years: 5, detail: "Expert - Modern web development", tags: ["React", "Web Development"], accent: "teal" },
  { id: "Figma", name: "Figma", icon: FaFigma, ring: "design", angle: 240, level: 5, years: 5, detail: "Expert - UI/UX design and prototyping", tags: ["UI/UX", "Prototyping"], accent: "pink" },
  { id: "Git", name: "Git", icon: FaGithubAlt, ring: "tech", angle: 300, level: 4, years: 4, detail: "Proficient - Version control & collaboration", tags: ["Version control", "Collaboration"], accent: "teal" },
];

export const languageSkills: SkillItem[] = [
  { id: "English", name: "English", icon: LiaFlagUsaSolid, level: 5, detail: "Native speaker", angle: 0, tags: ["Native"], accent: "neutral", ring: "design", proficiency: "Native" },
  { id: "Spanish", name: "Spanish", icon: GiMexico, level: 3, detail: "Conversational proficiency", angle: 60, tags: ["Conversational"], accent: "neutral", ring: "design", proficiency: "Intermediate" },
  { id: "French", name: "French", icon: GiFrance, level: 4, detail: "Intermediate - studied abroad in Paris", angle: 0, tags: ["Study Abroad"], accent: "neutral", ring: "design", proficiency: "Conversational" },
  { id: "ASL", name: "ASL", icon: FaHandsAslInterpreting, level: 4, detail: "Intermediate conversational skills - TA experience", angle: 0, tags: ["Teacher's Assistant"], accent: "neutral", ring: "design", proficiency: "Intermediate" },
];