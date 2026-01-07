export interface EducationData {
  school: string;
  location: string;
  degree: string;
  focus: string;
  year: string;
  postcard: string;
  coursework: string[];
  clubs: string[];
}

export const educationData: EducationData[] = [
  { 
    school: "Stanford University", 
    location: "Palo Alto, CA", 
    degree: "MS in Computer Science", 
    focus: "Human-Computer Interaction",
    year: "2024-2025", 
    postcard: "/MastersPostcard.svg",
    coursework: ["Advanced HCI", "Design Thinking", "AI Ethics", "Interactive Systems"],
    clubs: []
  },
  { 
    school: "Stanford University", 
    location: "Palo Alto, CA", 
    degree: "BS in Computer Science", 
    focus: "Human-Computer Interaction",
    year: "2020-2024", 
    postcard: "/BachelorsPostcard.svg",
    coursework: ["Data Structures", "Algorithms", "Operating Systems", "Web Dev", "Databases"],
    clubs: ["Stanford Talisman", "Black in CS", "Blackstage"]
  },
  { 
    school: "Study Abroad", 
    location: "Paris, France", 
    degree: "Bing Overseas Study Program", 
    focus: "Humanities & Culture",
    year: "Winter 2024", 
    postcard: "/StudyAbroadPostcard.svg",
    coursework: ["French Literature", "European History", "Art & Architecture", "Philosophy"],
    clubs: ["Assisstant Teacher", "Language Exchange"]
  },
];