export interface ExperienceData {
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  color: string;
  border: string;
}

export const experienceData: ExperienceData[] = [
  {
    title: "Designer & Project Manager",
    company: "Sunao Lab",
    period: "2024 - Present",
    description: "Building AI-powered podcast chatbots that respond in host's style, sourcing from past episodes",
    tags: ["Startup", "AI/ML", "Design", "PM"],
    color: "bg-light-pink",
    border: "border-dark-pink"
  },
  {
    title: "Barista",
    company: "Local Coffee Shop",
    period: "2024 - Present",
    description: "Crafting specialty drinks and creating welcoming customer experiences",
    tags: ["Customer Service", "Operations"],
    color: "bg-light-neutral",
    border: "border-dark-neutral"
  },
  {
    title: "Software Engineering Intern",
    company: "Florence, SC Tech Company",
    period: "Summer 2023",
    description: "Developed web applications and internal tools for local business",
    tags: ["Full-Stack", "JavaScript", "React"],
    color: "bg-light-teal",
    border: "border-dark-teal"
  },
  {
    title: "Head TA & Assistant TA",
    company: "NSLC Law & Mock Trial",
    period: "Summers 2021-2023",
    description: "Led teaching teams and mentored students in law and mock trial summer programs",
    tags: ["Education", "Leadership", "Law"],
    color: "bg-light-green",
    border: "border-dark-green"
  },
  {
    title: "Lifeguard Supervisor",
    company: "Stanford Recreation",
    period: "2020 - 2024",
    description: "Supervised lifeguard teams, ensured pool safety, trained new staff",
    tags: ["Leadership", "Safety", "Training"],
    color: "bg-light-pink",
    border: "border-dark-pink"
  },
];