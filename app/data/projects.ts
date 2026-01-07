export interface ProjectData {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string[];
  tags: string[];
  tech: string[];
  image: string;
  images: string[];
  featured: boolean;
  color: 'teal' | 'pink' | 'green' | 'neutral';
  links: {
    live?: string;
    github?: string;
    figma?: string;
    demo?: string;
    article?: string;
    writeup?: string;
    itchio?: string;
    observable?: string;
    prd?: string;
    companyDetails?: string;
  };
  year: number;
  role: string;
  team?: string;
  challenge?: string;
  solution?: string;
  impact?: string[];
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    slug: 'podbot',
    title: 'PodBot',
    tagline: 'AI-Powered Podcast Chatbots',
    description: 'An accessible AI chatbot that answers podcast listener questions in the style of the host using past episodes, with full transcripts and source citations.',
    fullDescription: [
      'Started as an independent study combining accessibility work and AI chatbot development. PodBot answers podcast listeners\' questions in the host\'s style using only past episodes as sources, with accessible transcripts and episode carousels.',
      'Combined two existing projects: accessible podcast captioning (including ads with affiliate links) and another team\'s Planet Money chatbot. We interviewed podcast listeners and accessibility advocates to understand needs for inclusive podcast interaction.',
      'After the independent study completed, our professor invested his own money to begin a startup called Sunao Labs, where I served as Project Manager and Frontend Designer.'
    ],
    tags: ['AI/ML', 'Startup', 'Accessibility', 'PM'],
    tech: ['Machine Learning', 'NLP', 'Figma', 'Frontend Development', 'Captioning'],
    image: '/projects/podbot/hero.jpg',
    images: [
      '/projects/podbot/wireframes.jpg',
      '/projects/podbot/figma-iterations.jpg',
      '/projects/podbot/accessibility-testing.jpg'
    ],
    featured: true,
    color: 'pink',
    links: {
      figma: 'https://figma.com/podbot-designs',
      article: 'https://jskfellows.stanford.edu/can-we-build-an-ai-chatbot-for-journalism-79ffe39e053e'
    },
    year: 2024,
    role: 'Project Manager & Frontend Designer',
    team: 'Sunao Lab startup team (4 people)',
    challenge: 'Podcast platforms lacked comprehensive captioning, especially for dynamic ad content. Users wanted to verify information by accessing original episode sources while maintaining host voice authenticity.',
    solution: 'Created accessible podcast captioning with ads and affiliate links, combined with AI chatbot that maintains host voice. Implemented frontend UI/UX design with accessible transcripts and clear citation display.',
    impact: [
      'Secured startup funding from Stanford professor',
      'Featured in Stanford journalism fellowship article',
      'Created proof of concept for accessible podcast interaction',
      'Demonstrated how AI can maintain authentic voice while serving accessibility needs'
    ]
  },
  {
    id: 2,
    slug: 'queerx',
    title: 'QUEERx',
    tagline: 'LGBTQ+-Friendly Healthcare Provider Finder',
    description: 'A React app helping queer patients find LGBTQ+-friendly healthcare providers through crowdsourced reviews.',
    fullDescription: [
      'A comprehensive platform that allows LGBTQ+ patients to vet healthcare providers based on community reviews. Addresses critical gaps in healthcare accessibility for queer individuals seeking sensitive, affirming care.',
      'Interviewed about a dozen people across different age groups in the United States (19-80s) to understand healthcare challenges in LGBTQ+ community. Discovered issues like providers making assumptions about sexual activity based on orientation, or lack of gender-affirming care knowledge.',
      'Won "Greatest Social Impact" award at CS 147 final presentation, voted by visiting professionals in the industry.'
    ],
    tags: ['React', 'Healthcare', 'Social Impact', 'UI/UX'],
    tech: ['React', 'JavaScript', 'CSS', 'Figma', 'User Research'],
    image: '/projects/queerx/hero.jpg',
    images: [
      '/projects/queerx/user-interviews.jpg',
      '/projects/queerx/persona-development.jpg',
      '/projects/queerx/wireframe-iterations.jpg'
    ],
    featured: true,
    color: 'teal',
    links: {
      figma: 'https://www.figma.com/design/qVVPOrhMlClvlKx8GzU1Sp/QueerX-Workspace',
      github: 'https://github.com/houstontaylor/QUEERx'
    },
    year: 2023,
    role: 'Full-Stack Developer (Solo Coding)',
    team: 'Group of 4 (research), Solo development',
    challenge: 'Healthcare providers often make incorrect assumptions about LGBTQ+ patients\' needs. No centralized resource for finding LGBTQ+-friendly providers with verified reviews.',
    solution: 'Solo developed entire React application with crowdsourced review system. Conducted extensive user research across age groups to understand community needs and design for trust and privacy.',
    impact: [
      'Won "Greatest Social Impact" award at CS 147 final presentation',
      'Addresses critical healthcare accessibility gap for LGBTQ+ community',
      'Interviewed diverse age groups (19-80) across the United States',
      'Created peer review system for sensitive healthcare information'
    ]
  },
  {
    id: 3,
    slug: 'tend',
    title: 'Tend',
    tagline: 'Friendship Maintenance Through Plant Care',
    description: 'A behavior change app using plant metaphors to help new graduates nurture and maintain their friendships.',
    fullDescription: [
      'An innovative behavior change design that gamifies friendship maintenance for new graduates. Users create virtual plants representing each friendship and care for them through real-world activities.',
      'Texting gives sun, calling provides water, meeting in person adds nutrients. Each plant has different care needs based on friendship dynamics and user goals.',
      'Interviewed and ran behavior change studies on about a dozen new graduates to understand challenges in maintaining friendships after leaving college environment.'
    ],
    tags: ['Figma', 'Behavior Change', 'UI/UX', 'Psychology'],
    tech: ['Figma', 'User Research', 'Behavioral Psychology', 'Prototyping'],
    image: '/projects/tend/hero.jpg',
    images: [
      '/projects/tend/plant-mechanic.jpg',
      '/projects/tend/action-logging.jpg',
      '/projects/tend/widget-design.jpg'
    ],
    featured: true,
    color: 'green',
    links: {
      figma: 'https://www.figma.com/design/MpbBcBCQncpo5LsIaRjyTk/Clickable-Prototype',
      writeup: 'https://highercommonsense.com/cs247b/16794/'
    },
    year: 2025,
    role: 'Designer & Researcher',
    team: 'Group of 4',
    challenge: 'New graduates struggle to maintain friendships after leaving college environment. Abstract friendship concepts are hard to translate into engaging, sustainable behaviors.',
    solution: 'Created plant metaphor system where friendships are represented as plants needing care (texting=sun, calling=water, meeting=nutrients). Home screen widgets provide quick friendship health overview.',
    impact: [
      'Novel approach to maintaining social connections for young adults',
      'Conducted behavior change studies with new graduates',
      'Gamified abstract social concepts into concrete actions',
      'Created sustainable behavior change mechanics'
    ]
  },
  {
    id: 4,
    slug: 'filmflicks',
    title: 'FilmFlicks',
    tagline: 'Social Movie Discovery Platform',
    description: 'A movie recommendation app where users swipe on films and join groups for personalized suggestions.',
    fullDescription: [
      'A social movie discovery platform combining individual preferences with group dynamics. Users swipe on movies like Letterboxd, then join groups with friends to get curated recommendations.',
      'Frontend team of 3 (including me) worked on Figma design and React development, while 1 backend developer handled LLM functionality for smart recommendations.',
      'Features Tinder-style swiping, group formation, and filtering by genre, length, time, and more with LLM-powered recommendation engine.'
    ],
    tags: ['React', 'Social Features', 'UI/UX', 'LLM'],
    tech: ['React', 'JavaScript', 'Figma', 'LLM Integration', 'Recommendation Algorithms'],
    image: '/projects/filmflicks/hero.jpg',
    images: [
      '/projects/filmflicks/swipe-interface.jpg',
      '/projects/filmflicks/group-recommendations.jpg',
      '/projects/filmflicks/filters.jpg'
    ],
    featured: true,
    color: 'neutral',
    links: {
      figma: 'https://www.figma.com/design/avbYqkfzrZbES49Aqu9lqg/CS194W--Flim-Flicks'
    },
    year: 2024,
    role: 'Frontend Developer & Designer',
    team: 'Frontend team of 3 + 1 backend developer',
    challenge: 'Movie discovery is overwhelming with too many options. Existing platforms don\'t balance individual preferences with group dynamics for watching together.',
    solution: 'Created Tinder-style swiping for individual preferences combined with group formation for collective recommendations. Integrated LLM for smart filtering and suggestions.',
    impact: [
      'Simplified movie discovery for friend groups',
      'Personalized AI recommendations',
      'Balanced individual and group preferences',
      'Collaborative frontend development experience'
    ]
  },
  {
    id: 5,
    slug: 'accessible-barcode-scanner',
    title: 'Accessible Barcode Scanner',
    tagline: 'Allergen Detection for Blind & Low-Vision Users',
    description: 'An app helping blind and low-vision users identify allergens in products through scanning with haptic feedback.',
    fullDescription: [
      'An accessibility-focused shopping app for blind and low-vision users. Scans product barcodes to quickly identify allergens with haptic feedback and clear SAFE/NOT SAFE responses.',
      'Calls two allergen databases, uses LLM to determine safety when APIs conflict or lack information. Suggests alternative products when unsafe.',
      'Interviewed blind and low-vision individuals to understand shopping challenges and designed intuitive non-visual interaction patterns.'
    ],
    tags: ['Accessibility', 'Mobile', 'Computer Vision', 'LLM'],
    tech: ['Mobile Development', 'API Integration', 'LLM', 'Computer Vision', 'Accessibility Standards'],
    image: '/projects/barcode-scanner/hero.jpg',
    images: [
      '/projects/barcode-scanner/scanning.jpg',
      '/projects/barcode-scanner/results.jpg',
      '/projects/barcode-scanner/alternatives.jpg'
    ],
    featured: false,
    color: 'teal',
    links: {
      figma: 'https://www.figma.com/design/w6O54iLL5FVgMDWIwOJaW7/P3-Prototyping',
      github: 'https://github.com/houstontaylor/accessible-barcode-scanner'
    },
    year: 2025,
    role: 'API Developer & Frontend Developer',
    team: 'Group of 5',
    challenge: 'Blind and low-vision individuals lack quick, reliable way to identify allergens while shopping. Existing solutions don\'t provide immediate, non-visual feedback.',
    solution: 'Developed API functionality integrating two allergen databases with LLM conflict resolution. Created haptic feedback system and clear SAFE/NOT SAFE indicators with alternative suggestions.',
    impact: [
      'Improves shopping safety and independence',
      'Intuitive non-visual interaction patterns',
      'Quick haptic feedback for immediate response',
      'Alternative product suggestions for safer choices'
    ]
  },
  {
    id: 6,
    slug: 'critter',
    title: 'Critter',
    tagline: 'Environmental Puzzle-Platformer',
    description: 'A Unity puzzle-platformer about a forest creature stopping factory robots from destroying its home.',
    fullDescription: [
      'An environmental narrative game where a small forest critter enters a robot factory to stop the destruction of its home. Combines 2D platforming with puzzle mechanics.',
      'Created sound design, art assets, and game object setup. Worked in team of 5 to balance puzzle difficulty with narrative pacing.',
      'Explores environmental themes through interactive storytelling - critter navigates factory, solves puzzles to reach AI core and shut down robot production.'
    ],
    tags: ['Unity', 'Game Design', 'Sound Design', 'C#'],
    tech: ['Unity', 'C#', 'Sound Design', 'Digital Art', 'Game Mechanics'],
    image: '/projects/critter/hero.jpg',
    images: [
      '/projects/critter/gameplay.jpg',
      '/projects/critter/factory.jpg',
      '/projects/critter/puzzles.jpg'
    ],
    featured: false,
    color: 'green',
    links: {
      github: 'https://github.com/houstontaylor/critter-game',
      itchio: 'https://lwcoding.itch.io/critter'
    },
    year: 2024,
    role: 'Sound Designer, Artist, & Developer',
    team: 'Group of 5',
    challenge: 'Creating cohesive audio-visual experience while balancing puzzle difficulty with narrative pacing in environmental storytelling.',
    solution: 'Designed sound and visual assets that reinforce environmental narrative. Created puzzle mechanics that teach through gameplay about habitat destruction and taking action.',
    impact: [
      'Explores environmental themes through interactive gameplay',
      'Cohesive audio-visual storytelling',
      'Accessible puzzle difficulty progression',
      'Published on itch.io for public play'
    ]
  },
  {
    id: 7,
    slug: 'interstellar-postal-service',
    title: 'InterStellar Postal Service',
    tagline: 'Space-Themed Educational Game',
    description: 'A space-themed Unity game teaching postal systems through package sorting and alien delivery mechanics.',
    fullDescription: [
      'A polished Unity game about delivering packages in space. Features custom pixel art, engaging sorting mechanics, and teaches postal systems through space-themed gameplay with alien planets.',
      'Team of 2 artists (including me) + 2 programmers. I created all pixel art assets and animations, focusing on visual design and UI elements.',
      'Players catch falling packages, sort into correct piles, deliver by shooting at receiving aliens, avoid obstacles, and earn money to upgrade equipment and unlock new areas.'
    ],
    tags: ['Unity', 'Pixel Art', 'Game Design', 'Educational'],
    tech: ['Unity', 'C#', 'Pixel Art', 'UI Design', 'Educational Design'],
    image: '/projects/interstellar-postal/hero.jpg',
    images: [
      '/projects/interstellar-postal/sorting.jpg',
      '/projects/interstellar-postal/delivery.jpg',
      '/projects/interstellar-postal/upgrades.jpg'
    ],
    featured: false,
    color: 'neutral',
    links: {
      github: 'https://github.com/anaxrocks/ISPS-P3',
      itchio: 'https://anaxrocks.itch.io/interstellar-postal-service'
    },
    year: 2024,
    role: 'Artist',
    team: '2 artists + 2 programmers',
    challenge: 'Creating intuitive sorting mechanics that scale in difficulty while maintaining educational value about postal systems.',
    solution: 'Created engaging pixel art visual style and sorting mechanics mapped to postal concepts. Designed upgrade system that rewards learning and progression.',
    impact: [
      'Demonstrates collaborative game development',
      'Educational game design for postal systems',
      'Engaging pixel art aesthetic',
      'Published and playable on itch.io'
    ]
  },
  {
    id: 8,
    slug: 'raccoon-mama',
    title: 'Raccoon Mama',
    tagline: 'Stanford Campus Adventure',
    description: 'A Unity platformer following a raccoon mother searching for her babies across Stanford campus.',
    fullDescription: [
      'An ongoing independent study project creating a 2D platformer set on Stanford campus. A raccoon mother navigates familiar campus locations, encountering helpful animals and iconic landmarks while searching for her five lost babies.',
      'Started as independent study with partner, continuing solo as side project after graduation. Creating all art and game development.',
      'Story: Raccoon mama loses babies in campus flood. First baby in storm drains, second held at fraternity house, three more scattered across campus landmarks. Tribute to Stanford featuring recognizable locations.'
    ],
    tags: ['Unity', 'Game Design', 'C#', 'Campus Culture'],
    tech: ['Unity', 'C#', 'Digital Art', 'Level Design', 'Game Mechanics'],
    image: '/projects/raccoon-mama/hero.jpg',
    images: [
      '/projects/raccoon-mama/campus.jpg',
      '/projects/raccoon-mama/mama.jpg',
      '/projects/raccoon-mama/locations.jpg'
    ],
    featured: false,
    color: 'pink',
    links: {
      github: 'https://github.com/Nils-Forstall/Raccoon-Mama'
    },
    year: 2025,
    role: 'Artist & Developer',
    team: 'Started with 2, now solo',
    challenge: 'Accurately representing campus geography while maintaining engaging gameplay. Balancing nostalgia with universal appeal.',
    solution: 'Created recognizable Stanford landmarks and campus culture references. Designed levels that honor campus geography while providing platforming challenges.',
    impact: [
      'Combines local Stanford culture with universal themes',
      'Ongoing passion project after graduation',
      'Tribute to Stanford community',
      'Solo development of all art and code'
    ]
  },
  {
    id: 9,
    slug: 'national-gallery-analysis',
    title: 'National Gallery Art Acquisition Analysis',
    tagline: 'Power Dynamics in Art Institutions',
    description: 'Interactive data visualization exploring power dynamics in art acquisition and display at the National Gallery.',
    fullDescription: [
      'A comprehensive data analysis titled "What Shapes What We See?" examining manifestations of power in art acquisition and display trends.',
      'Uses three interactive D3 visualizations to reveal institutional collecting patterns. I created 2 of 3 visualizations and co-authored analysis.',
      'Analysis of National Gallery acquisition data through interactive visualization approaches to understand how power dynamics manifest in institutional art decisions.'
    ],
    tags: ['Data Visualization', 'D3.js', 'Analysis', 'Art History'],
    tech: ['D3.js', 'Observable', 'Data Analysis', 'Interactive Design'],
    image: '/projects/national-gallery/hero.jpg',
    images: [
      '/projects/national-gallery/viz1.jpg',
      '/projects/national-gallery/viz2.jpg',
      '/projects/national-gallery/viz3.jpg'
    ],
    featured: false,
    color: 'teal',
    links: {
      observable: 'https://observablehq.com/d/0897f83ea44f3d15'
    },
    year: 2024,
    role: 'Data Analyst & Visualization Developer',
    team: 'Partnership (2 people)',
    challenge: 'Transforming complex institutional data into engaging, accessible narratives that reveal hidden power structures.',
    solution: 'Created interactive D3 visualizations that allow users to explore acquisition patterns. Co-authored analysis revealing how institutional decisions shape what art we see.',
    impact: [
      'Reveals hidden patterns in museum collecting practices',
      'Interactive exploration of institutional power structures',
      'Created 2 of 3 visualizations',
      'Co-authored comprehensive analysis'
    ]
  },
  {
    id: 10,
    slug: 'brainspark-games-strategy',
    title: 'BrainSpark Games Strategy',
    tagline: 'EdTech Product Strategy',
    description: 'Product management strategy and PRD for educational gaming company\'s MathQuest 2.',
    fullDescription: [
      'A comprehensive product strategy for BrainSpark Games\' MathQuest 2, including market analysis, user research, competitive analysis, and complete Product Requirements Document.',
      'Deliverables included: one-pager executive summary, pitch deck presentation, student interviews and research, competitive analysis, and complete PRD.',
      'Complete go-to-market strategy for educational gaming company\'s new math learning game balancing educational effectiveness with engaging gameplay.'
    ],
    tags: ['Product Management', 'Strategy', 'EdTech', 'PRD'],
    tech: ['Market Research', 'User Interviews', 'Competitive Analysis', 'PRD Development'],
    image: '/projects/brainspark/hero.jpg',
    images: [
      '/projects/brainspark/strategy.jpg',
      '/projects/brainspark/research.jpg',
      '/projects/brainspark/prd.jpg'
    ],
    featured: false,
    color: 'green',
    links: {
      prd: 'https://docs.google.com/document/d/e/2PACX-1vR0YIDuD-twc_lFp-y1N4jHPZYo1d39C9RPtIapJ5g0Puq14X3AWA1e6QV-RBjgnfu5GHKg-0br--CS/pub',
      companyDetails: 'https://docs.google.com/document/d/e/2PACX-1vReKbSCpBy2j_MW3m5ID9MjLywQ2Kl3DBW8QIysumJSI-hmfZT2Ccq5ucj8pILa8ul8EZ0yy7ET-RNf/pub'
    },
    year: 2025,
    role: 'Team Member (Strategy & Research)',
    team: 'Group Project',
    challenge: 'Balancing educational effectiveness with engaging gameplay mechanics for student audiences in competitive EdTech market.',
    solution: 'Conducted student interviews, competitive analysis, and market research. Created comprehensive PRD and go-to-market strategy with evidence-based recommendations.',
    impact: [
      'Comprehensive product strategy for educational gaming',
      'Evidence-based recommendations from user research',
      'Complete PRD and go-to-market plan',
      'Competitive analysis of EdTech landscape'
    ]
  },
  {
    id: 11,
    slug: 'sign-language-recognition',
    title: 'Inclusive ASL Fingerspelling Recognition',
    tagline: 'Bias Mitigation in Computer Vision',
    description: 'Computer vision project improving fingerspelling recognition across different skin tones and lighting.',
    fullDescription: [
      'A machine learning project addressing bias in computer vision systems by creating a more inclusive ASL fingerspelling recognition model designed to work accurately across different skin tones and lighting conditions.',
      'As someone who knows ASL and is half Black, I wanted to design for underrepresented groups who would benefit immensely from improved recognition.',
      'Focused on recognition and distinction between ASL fingerspelling letters across diverse skin tones and lighting conditions, addressing systemic bias in existing computer vision models.'
    ],
    tags: ['Computer Vision', 'Machine Learning', 'Accessibility', 'Bias Mitigation'],
    tech: ['Python', 'Computer Vision', 'Machine Learning', 'Data Analysis'],
    image: '/projects/sign-language/hero.jpg',
    images: [
      '/projects/sign-language/model.jpg',
      '/projects/sign-language/testing.jpg',
      '/projects/sign-language/results.jpg'
    ],
    featured: false,
    color: 'neutral',
    links: {},
    year: 2022,
    role: 'Solo Developer & Researcher',
    team: 'Individual Project',
    challenge: 'Improving computer vision efficacy for darker skin tones that are typically underrepresented in training data. Existing models show bias against people of color.',
    solution: 'Created more inclusive ASL fingerspelling recognition model with focus on diverse skin tones. Ensured inclusive dataset representation and tested across varied lighting conditions.',
    impact: [
      'More inclusive accessibility technology',
      'Addresses systemic bias in computer vision',
      'Designed for deaf/HOH community, particularly people of color',
      'Personal motivation from knowing ASL and being half Black'
    ]
  },
  {
    id: 12,
    slug: 'archival-echoes',
    title: 'Archival Echoes',
    tagline: 'Interactive Fiction on Information Control',
    description: 'A Twine-based interactive fiction exploring information integrity and archival power dynamics.',
    fullDescription: [
      'A short interactive game where players take on the role of an archivist discovering they\'re being tasked with deleting evidence of past revolutions.',
      'Explores themes of information control and resistance. Player discovers they\'re deleting evidence of civil unrest rather than neutral archival work, must choose between compliance and resistance.',
      'Thought-provoking exploration of information integrity, archival power, and historical erasure with consequences for both compliance and resistance - not all revolutions succeed.'
    ],
    tags: ['Twine', 'Interactive Fiction', 'Information Integrity', 'Narrative'],
    tech: ['Twine', 'Interactive Narrative', 'Game Design'],
    image: '/projects/archival-echoes/hero.jpg',
    images: [
      '/projects/archival-echoes/choice1.jpg',
      '/projects/archival-echoes/choice2.jpg',
      '/projects/archival-echoes/outcome.jpg'
    ],
    featured: false,
    color: 'pink',
    links: {
      itchio: 'https://housangel.itch.io/archival-echoes'
    },
    year: 2025,
    role: 'Developer & Narrative Designer',
    team: 'Individual Project',
    challenge: 'Creating meaningful choices that explore complex themes of information control and institutional power without simplistic morality.',
    solution: 'Designed branching narrative where player discovers true nature of archival work. Created consequences for both compliance and resistance to show complexity of information control.',
    impact: [
      'Thought-provoking exploration of information control',
      'Examines institutional power and historical erasure',
      'Meaningful choices with realistic consequences',
      'Published on itch.io for public play'
    ]
  }
];

// Helper functions
export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map(project => project.slug);
}

export function getFeaturedProjects(): ProjectData[] {
  return projectsData.filter(project => project.featured);
}

export function getProjectsByTag(tag: string): ProjectData[] {
  return projectsData.filter(project => 
    project.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

export function getProjectsByYear(year: number): ProjectData[] {
  return projectsData.filter(project => project.year === year);
}