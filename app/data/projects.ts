export interface ProjectData {
  // Core Metadata
  id: number;
  slug: string;
  title: string;
  tagline: string; // One-liner for cards
  color: 'teal' | 'pink' | 'green';
  featured: boolean;
  year: number;

  // Header Info
  role: string; // "Lead UX Designer", "Full-Stack Developer"
  team?: string; // "Solo project", "Team of 4", "2 designers, 3 engineers"
  timeline: string; // "3 months", "Sep 2023 - Dec 2023", "2 weeks sprint"
  
  // Technologies/Tools
  tags: string[]; // High-level categories: ['AI/ML', 'UI/UX', 'Accessibility']
  tech: string[]; // Specific tech: ['React', 'Figma', 'Python', 'Firebase']

  // Overview Section
  overview: string; // 2-3 sentence summary of what the project is and why it matters
  
  // Links
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
    other?: { label: string; url: string }[]; // For any additional links
  };

  // Media
  image: string; // Primary hero image
  images: string[]; // Additional screenshots, mockups, diagrams

  // Problem
  problem: {
    context: string; // What's the situation? Who's affected?
    gap: string; // What's missing or broken? Why does this matter?
    goals?: string[]; // Specific objectives to achieve
  };

  // Research & Discovery
  research?: {
    interviews?: string[]; // Paragraphs or bullet points about user interviews
    marketResearch?: string[]; // Competitive analysis, market gaps, trends
    analysis?: string[]; // Synthesis, insights, personas, journey maps
  };

  // Design Process
  process?: {
    approach?: string; // Overall methodology ("Design thinking", "Agile sprints")
    keyDecisions?: string[]; // Important choices made and why
    constraints?: string[]; // Technical, time, budget, or user constraints
    iterations?: string[]; // What was tried and discarded, learnings from prototypes
  };

  // Solution
  solution: {
    approach: string; // How does this project address the gap?
    features: {
      name: string;
      description: string;
      image?: string; // Screenshot/diagram for this feature
    }[];
    finalIteration?: {
      description: string; // Narrative about the polished result
      images: string[]; // High-fidelity screenshots, demo video thumbnail, etc.
    };
  };

  // Impact & Results
  impact?: {
    metrics?: string[]; // "50% reduction in task time", "500+ downloads"
    outcomes?: string[]; // Qualitative results, user testimonials, adoption
    lessonsLearned?: string[]; // What you'd do differently, key takeaways
  };

  // Related Projects
  relatedProjects?: number[]; // Array of project IDs to show at the bottom
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    slug: 'lulasapp',
    title: "Lula's Coffee Co. Mobile Ordering App",
    tagline: 'Order Local Coffee with Ease',
    overview: 'A mobile platform designed to streamline the coffee ordering experience for local cafes, making it easier for customers to order ahead and support small businesses.',
    color: 'green',
    featured: true,
    year: 2026,
    
    role: 'Full-Stack Developer',
    team: 'Solo Project',
    timeline: '4 months',
    
    tags: ['Mobile App', 'E-commerce', 'UI/UX Design', 'Full-Stack Development'],
    tech: ['React Native', 'Node.js', 'MongoDB'],
    
    links: {
      github: 'https://github.com/lulasapp'
    },
    
    image: '/projects/lulasapp/hero.jpg',
    images: [
      '/projects/lulasapp/wireframes.jpg',
      '/projects/lulasapp/figma-iterations.jpg'
    ],
    
    problem: {
      context: 'Local coffee shops struggle to compete with chains that have mobile ordering.',
      gap: 'Small coffee shops lack affordable, easy-to-use mobile ordering solutions.',
      goals: ['Streamline ordering process', 'Support local businesses', 'Reduce wait times']
    },
    
    solution: {
      approach: 'Built a full-stack mobile ordering platform specifically designed for independent coffee shops.',
      features: [
        {
          name: 'Mobile Ordering',
          description: 'Order ahead and skip the line'
        },
        {
          name: 'Payment Integration',
          description: 'Secure payment processing'
        },
        {
          name: 'Order Tracking',
          description: 'Real-time order status updates'
        }
      ]
    },
  },

  {
    id: 2,
    slug: 'podbot',
    title: 'PodBot',
    tagline: 'AI-Powered Podcast Chatbots',
    overview: 'An accessible AI chatbot that answers podcast listener questions in the style of the host using past episodes, with full transcripts and source citations.',
    color: 'teal',
    featured: true,
    year: 2024,
    
    role: 'Project Manager & Frontend Designer',
    team: 'Sunao Lab startup team (4 people)',
    timeline: '6 months',
    
    tags: ['AI/ML', 'Startup', 'Accessibility', 'PM'],
    tech: ['Machine Learning', 'NLP', 'Figma', 'Frontend Development', 'Captioning'],
    
    links: {
      figma: 'https://figma.com/podbot-designs',
      article: 'https://jskfellows.stanford.edu/can-we-build-an-ai-chatbot-for-journalism-79ffe39e053e'
    },
    
    image: '/projects/podbot/hero.jpg',
    images: [
      '/projects/podbot/wireframes.jpg',
      '/projects/podbot/figma-iterations.jpg',
      '/projects/podbot/accessibility-testing.jpg'
    ],
    
    research: {
      interviews: [
        'Interviewed podcast listeners about their information verification needs',
        'Spoke with accessibility advocates about captioning gaps',
        'Discovered users wanted to verify information while maintaining host authenticity'
      ],
      marketResearch: [
        'Analyzed existing podcast platforms for captioning coverage',
        'Found comprehensive captioning lacking, especially for dynamic ad content'
      ],
      analysis: [
        'Combined insights from two existing projects: accessible podcast captioning and Planet Money chatbot',
        'Identified opportunity to merge accessibility and AI chatbot development'
      ]
    },
    
    problem: {
      context: 'Podcast platforms lacked comprehensive captioning, especially for dynamic ad content. Users wanted to verify information by accessing original episode sources.',
      gap: 'No solution existed that combined accessible transcripts with AI-powered question answering while maintaining host voice authenticity.',
      goals: ['Provide accessible podcast captioning', 'Enable source verification', 'Maintain authentic host voice']
    },
    
    process: {
      approach: 'Started as independent study, then secured startup funding',
      keyDecisions: [
        'Combined two existing projects into unified solution',
        'Prioritized accessibility from the start, not as afterthought',
        'Chose to maintain host voice authenticity over generic AI responses'
      ]
    },
    
    solution: {
      approach: 'Created accessible podcast captioning with ads and affiliate links, combined with AI chatbot that maintains host voice.',
      features: [
        {
          name: 'Accessible Transcripts',
          description: 'Full captioning including ads with affiliate links'
        },
        {
          name: 'AI Chatbot',
          description: 'Answers questions in host\'s style using only past episodes'
        },
        {
          name: 'Source Citations',
          description: 'Clear episode references with accessible transcript access'
        },
        {
          name: 'Episode Carousels',
          description: 'Browse and discover related episodes easily'
        }
      ],
      finalIteration: {
        description: 'Frontend UI/UX design with accessible transcripts and clear citation display',
        images: ['/projects/podbot/final-ui.jpg']
      }
    },
    
    impact: {
      metrics: [
        'Secured startup funding from Stanford professor',
        'Featured in Stanford journalism fellowship article'
      ],
      outcomes: [
        'Created proof of concept for accessible podcast interaction',
        'Demonstrated how AI can maintain authentic voice while serving accessibility needs'
      ]
    },
  },

  {
    id: 3,
    slug: 'queerx',
    title: 'QUEERx',
    tagline: 'LGBTQ+-Friendly Healthcare Provider Finder',
    overview: 'A React app helping queer patients find LGBTQ+-friendly healthcare providers through crowdsourced reviews, addressing critical gaps in healthcare accessibility.',
    color: 'teal',
    featured: true,
    year: 2023,
    
    role: 'Full-Stack Developer (Solo Coding)',
    team: 'Group of 4 (research), Solo development',
    timeline: '10 weeks (CS 147 course)',
    
    tags: ['React', 'Healthcare', 'Social Impact', 'UI/UX'],
    tech: ['React', 'JavaScript', 'CSS', 'Figma', 'User Research'],
    
    links: {
      figma: 'https://www.figma.com/design/qVVPOrhMlClvlKx8GzU1Sp/QueerX-Workspace',
      github: 'https://github.com/houstontaylor/QUEERx'
    },
    
    image: '/projects/queerx/hero.jpg',
    images: [
      '/projects/queerx/user-interviews.jpg',
      '/projects/queerx/persona-development.jpg',
      '/projects/queerx/wireframe-iterations.jpg'
    ],
    
    research: {
      interviews: [
        'Interviewed about a dozen people across different age groups (19-80s) in the United States',
        'Discovered issues like providers making assumptions about sexual activity based on orientation',
        'Found lack of gender-affirming care knowledge among many providers'
      ],
      analysis: [
        'Developed personas representing different LGBTQ+ community needs',
        'Mapped patient journeys to identify trust and privacy concerns',
        'Identified need for peer-verified review system'
      ]
    },
    
    problem: {
      context: 'Healthcare providers often make incorrect assumptions about LGBTQ+ patients\' needs, leading to inadequate or harmful care.',
      gap: 'No centralized resource for finding LGBTQ+-friendly providers with verified, trustworthy reviews.',
      goals: ['Help LGBTQ+ patients find affirming care', 'Create trusted review system', 'Improve healthcare accessibility']
    },
    
    solution: {
      approach: 'Solo developed entire React application with crowdsourced review system designed for trust and privacy.',
      features: [
        {
          name: 'Provider Search',
          description: 'Find healthcare providers by specialty and location'
        },
        {
          name: 'Community Reviews',
          description: 'Read and contribute reviews from LGBTQ+ patients'
        },
        {
          name: 'Privacy-First Design',
          description: 'Anonymous reviews with verified patient status'
        },
        {
          name: 'Provider Profiles',
          description: 'Detailed information about LGBTQ+-friendly practices'
        }
      ]
    },
    
    impact: {
      outcomes: [
        'Won "Greatest Social Impact" award at CS 147 final presentation',
        'Addresses critical healthcare accessibility gap for LGBTQ+ community',
        'Created peer review system for sensitive healthcare information'
      ],
      lessonsLearned: [
        'Importance of building trust in sensitive health contexts',
        'Value of extensive user research across age groups',
        'Balancing privacy with verification in review systems'
      ]
    },
  },

  {
    id: 4,
    slug: 'filmflicks',
    title: 'FilmFlicks',
    tagline: 'Social Movie Discovery Platform',
    overview: 'A movie recommendation app where users swipe on films and join groups for personalized suggestions powered by LLM technology.',
    color: 'pink',
    featured: true,
    year: 2024,
    
    role: 'Frontend Developer & Designer',
    team: 'Frontend team of 3 + 1 backend developer',
    timeline: '10 weeks',
    
    tags: ['React', 'Social Features', 'UI/UX', 'LLM'],
    tech: ['React', 'JavaScript', 'Figma', 'LLM Integration', 'Recommendation Algorithms'],
    
    links: {
      figma: 'https://www.figma.com/design/avbYqkfzrZbES49Aqu9lqg/CS194W--Flim-Flicks'
    },
    
    image: '/projects/filmflicks/hero.jpg',
    images: [
      '/projects/filmflicks/swipe-interface.jpg',
      '/projects/filmflicks/group-recommendations.jpg',
      '/projects/filmflicks/filters.jpg'
    ],
    
    problem: {
      context: 'Movie discovery is overwhelming with too many streaming options. Friend groups struggle to find films everyone wants to watch.',
      gap: 'Existing platforms don\'t balance individual preferences with group dynamics for collaborative watching decisions.',
      goals: ['Simplify movie discovery', 'Enable group decision-making', 'Personalize recommendations']
    },
    
    solution: {
      approach: 'Created Tinder-style swiping for individual preferences combined with group formation for collective recommendations powered by LLM.',
      features: [
        {
          name: 'Swipe Interface',
          description: 'Letterboxd-style movie swiping to build preference profile'
        },
        {
          name: 'Group Formation',
          description: 'Create watch groups with friends for collaborative recommendations'
        },
        {
          name: 'Smart Filtering',
          description: 'Filter by genre, length, time period, and more'
        },
        {
          name: 'LLM Recommendations',
          description: 'AI-powered suggestions that balance individual and group preferences'
        }
      ]
    },
    
    impact: {
      outcomes: [
        'Simplified movie discovery for friend groups',
        'Balanced individual and group preferences effectively',
        'Collaborative frontend development experience'
      ]
    },
  },

  {
    id: 5,
    slug: 'tend',
    title: 'Tend',
    tagline: 'Friendship Maintenance Through Plant Care',
    overview: 'A behavior change app using plant metaphors to help new graduates nurture and maintain their friendships through gamified interactions.',
    color: 'green',
    featured: true,
    year: 2025,
    
    role: 'Designer & Researcher',
    team: 'Group of 4',
    timeline: '10 weeks (CS 247B course)',
    
    tags: ['Figma', 'Behavior Change', 'UI/UX', 'Psychology'],
    tech: ['Figma', 'User Research', 'Behavioral Psychology', 'Prototyping'],
    
    links: {
      figma: 'https://www.figma.com/design/MpbBcBCQncpo5LsIaRjyTk/Clickable-Prototype',
      writeup: 'https://highercommonsense.com/cs247b/16794/'
    },
    
    image: '/projects/tend/hero.jpg',
    images: [
      '/projects/tend/plant-mechanic.jpg',
      '/projects/tend/action-logging.jpg',
      '/projects/tend/widget-design.jpg'
    ],
    
    research: {
      interviews: [
        'Interviewed about a dozen new graduates about friendship maintenance challenges',
        'Ran behavior change studies to understand what motivates consistent friendship actions'
      ],
      analysis: [
        'Discovered new graduates struggle with abstract "stay in touch" goals',
        'Found need for concrete, trackable friendship maintenance actions',
        'Identified widget visibility as key to behavior prompting'
      ]
    },
    
    problem: {
      context: 'New graduates struggle to maintain friendships after leaving college environment with built-in social structure.',
      gap: 'Abstract friendship concepts are hard to translate into engaging, sustainable behaviors without external prompting.',
      goals: ['Create sustainable friendship maintenance habits', 'Make abstract social goals concrete', 'Provide gentle behavioral nudges']
    },
    
    process: {
      keyDecisions: [
        'Chose plant metaphor for intuitive care mechanics',
        'Designed each friendship as unique plant with different needs',
        'Added home screen widget for passive awareness without opening app'
      ],
      iterations: [
        'Tested various metaphors before settling on plants',
        'Refined action-to-resource mapping (texting=sun, calling=water, meeting=nutrients)',
        'Balanced notification frequency to avoid annoyance'
      ]
    },
    
    solution: {
      approach: 'Created plant metaphor system where friendships are represented as plants needing care through real-world social actions.',
      features: [
        {
          name: 'Plant Care Mechanics',
          description: 'Texting gives sun, calling provides water, meeting in person adds nutrients',
          image: '/projects/tend/plant-mechanic.jpg'
        },
        {
          name: 'Personalized Plants',
          description: 'Each plant has different care needs based on friendship dynamics'
        },
        {
          name: 'Home Screen Widget',
          description: 'Quick friendship health overview without opening app',
          image: '/projects/tend/widget-design.jpg'
        },
        {
          name: 'Action Logging',
          description: 'Track friendship maintenance activities over time'
        }
      ]
    },
    
    impact: {
      outcomes: [
        'Novel approach to maintaining social connections for young adults',
        'Gamified abstract social concepts into concrete actions',
        'Created sustainable behavior change mechanics'
      ],
      lessonsLearned: [
        'Metaphors need to be immediately intuitive for adoption',
        'Passive visibility (widgets) more effective than notifications',
        'Different friendships genuinely need different maintenance patterns'
      ]
    },
  },

  {
    id: 6,
    slug: 'barcodeScanner',
    title: 'Blind/Low-Vision Barcode Scanner',
    tagline: 'Allergen Detection for Blind & Low-Vision Users',
    overview: 'An app helping blind and low-vision users identify allergens in products through barcode scanning with haptic feedback and LLM-powered conflict resolution.',
    color: 'pink',
    featured: false,
    year: 2025,
    
    role: 'API Developer & Frontend Developer',
    team: 'Group of 5',
    timeline: '10 weeks',
    
    tags: ['Accessibility', 'Mobile', 'Computer Vision', 'LLM'],
    tech: ['Mobile Development', 'API Integration', 'LLM', 'Computer Vision', 'Accessibility Standards'],
    
    links: {
      figma: 'https://www.figma.com/design/w6O54iLL5FVgMDWIwOJaW7/P3-Prototyping',
      github: 'https://github.com/houstontaylor/accessible-barcode-scanner'
    },
    
    image: '/projects/barcodeScanner/hero.jpg',
    images: [
      '/projects/barcodeScanner/scanning.jpg',
      '/projects/barcodeScanner/results.jpg',
      '/projects/barcodeScanner/alternatives.jpg'
    ],
    
    research: {
      interviews: [
        'Interviewed blind and low-vision individuals about shopping challenges',
        'Discovered need for immediate, non-visual feedback during shopping'
      ],
      analysis: [
        'Identified gaps in existing allergen detection solutions',
        'Found need for quick, reliable verification without sighted assistance'
      ]
    },
    
    problem: {
      context: 'Blind and low-vision individuals lack quick, reliable way to identify allergens while shopping independently.',
      gap: 'Existing solutions don\'t provide immediate, non-visual feedback or handle conflicting allergen information.',
      goals: ['Enable independent shopping', 'Provide immediate allergen detection', 'Suggest safe alternatives']
    },
    
    solution: {
      approach: 'Developed API functionality integrating two allergen databases with LLM conflict resolution and haptic feedback system.',
      features: [
        {
          name: 'Barcode Scanning',
          description: 'Camera-based product identification with audio guidance'
        },
        {
          name: 'Dual Database Integration',
          description: 'Queries two allergen databases for comprehensive coverage'
        },
        {
          name: 'LLM Conflict Resolution',
          description: 'Uses AI to determine safety when databases conflict or lack information'
        },
        {
          name: 'Haptic Feedback',
          description: 'Immediate tactile SAFE/NOT SAFE indicators'
        },
        {
          name: 'Alternative Suggestions',
          description: 'Recommends safer products when allergens detected'
        }
      ]
    },
    
    impact: {
      outcomes: [
        'Improves shopping safety and independence for blind/low-vision users',
        'Intuitive non-visual interaction patterns',
        'Quick feedback for immediate response'
      ]
    },
  },

  {
    id: 7,
    slug: 'critter',
    title: 'Critter',
    tagline: 'Environmental Puzzle-Platformer',
    overview: 'A Unity puzzle-platformer about a forest creature stopping factory robots from destroying its home through environmental storytelling.',
    color: 'teal',
    featured: false,
    year: 2024,
    
    role: 'Sound Designer, Artist, & Developer',
    team: 'Group of 5',
    timeline: '10 weeks',
    
    tags: ['Unity', 'Game Design', 'Sound Design', 'C#'],
    tech: ['Unity', 'C#', 'Sound Design', 'Digital Art', 'Game Mechanics'],
    
    links: {
      github: 'https://github.com/houstontaylor/critter-game',
      itchio: 'https://lwcoding.itch.io/critter'
    },
    
    image: '/projects/critter/hero.jpg',
    images: [
      '/projects/critter/gameplay.jpg',
      '/projects/critter/factory.jpg',
      '/projects/critter/puzzles.jpg'
    ],
    
    problem: {
      context: 'Environmental themes in games often feel preachy or disconnected from gameplay.',
      gap: 'Creating cohesive audio-visual experience while balancing puzzle difficulty with narrative pacing.',
      goals: ['Integrate environmental message into gameplay', 'Create accessible puzzle progression', 'Build cohesive audio-visual atmosphere']
    },
    
    solution: {
      approach: 'Designed sound and visual assets that reinforce environmental narrative through gameplay mechanics teaching about habitat destruction.',
      features: [
        {
          name: '2D Platforming',
          description: 'Navigate factory environment as forest critter'
        },
        {
          name: 'Puzzle Mechanics',
          description: 'Solve environmental puzzles to progress'
        },
        {
          name: 'Sound Design',
          description: 'Audio reinforces contrast between nature and industrial settings'
        },
        {
          name: 'Environmental Narrative',
          description: 'Story unfolds through gameplay rather than exposition'
        }
      ]
    },
    
    impact: {
      outcomes: [
        'Published on itch.io for public play',
        'Explores environmental themes through interactive gameplay',
        'Cohesive audio-visual storytelling'
      ]
    },
  },

  {
    id: 8,
    slug: 'brainspark',
    title: 'BrainSpark Games Strategy',
    tagline: 'EdTech Product Strategy',
    overview: 'Product management strategy and PRD for educational gaming company\'s MathQuest 2, including market analysis and go-to-market planning.',
    color: 'pink',
    featured: false,
    year: 2025,
    
    role: 'Team Member (Strategy & Research)',
    team: 'Group Project',
    timeline: '10 weeks',
    
    tags: ['Product Management', 'Strategy', 'EdTech', 'PRD'],
    tech: ['Market Research', 'User Interviews', 'Competitive Analysis', 'PRD Development'],
    
    links: {
      prd: 'https://docs.google.com/document/d/e/2PACX-1vR0YIDuD-twc_lFp-y1N4jHPZYo1d39C9RPtIapJ5g0Puq14X3AWA1e6QV-RBjgnfu5GHKg-0br--CS/pub',
      companyDetails: 'https://docs.google.com/document/d/e/2PACX-1vReKbSCpBy2j_MW3m5ID9MjLywQ2Kl3DBW8QIysumJSI-hmfZT2Ccq5ucj8pILa8ul8EZ0yy7ET-RNf/pub'
    },
    
    image: '/projects/brainspark/hero.jpg',
    images: [
      '/projects/brainspark/strategy.jpg',
      '/projects/brainspark/research.jpg',
      '/projects/brainspark/prd.jpg'
    ],
    
    research: {
      interviews: ['Conducted student interviews to understand learning preferences and pain points'],
      marketResearch: ['Analyzed competitive EdTech landscape', 'Identified market gaps in educational gaming'],
      analysis: ['Synthesized research into evidence-based product recommendations']
    },
    
    problem: {
      context: 'Educational gaming market is competitive with varying degrees of educational effectiveness.',
      gap: 'Balancing educational effectiveness with engaging gameplay mechanics for student audiences.',
      goals: ['Create engaging educational experience', 'Ensure learning outcomes', 'Compete in EdTech market']
    },
    
    solution: {
      approach: 'Conducted comprehensive research and created complete PRD with go-to-market strategy.',
      features: [
        {
          name: 'Executive Summary',
          description: 'One-pager summarizing strategy and recommendations'
        },
        {
          name: 'Market Analysis',
          description: 'Competitive landscape and opportunity assessment'
        },
        {
          name: 'User Research',
          description: 'Student interviews and needs analysis'
        },
        {
          name: 'Product Requirements',
          description: 'Complete PRD with feature specifications'
        },
        {
          name: 'Go-to-Market Strategy',
          description: 'Launch plan and success metrics'
        }
      ]
    },
    
    impact: {
      outcomes: [
        'Comprehensive product strategy for educational gaming',
        'Evidence-based recommendations from user research',
        'Complete PRD and go-to-market plan'
      ]
    },
  },

  {
    id: 9,
    slug: 'isps',
    title: 'InterStellar Postal Service (ISPS)',
    tagline: 'Educational Mail Game',
    overview: 'A space-themed Unity game teaching postal systems through package sorting and alien delivery mechanics with custom pixel art.',
    color: 'teal',
    featured: false,
    year: 2024,
    
    role: 'Artist',
    team: '2 artists + 2 programmers',
    timeline: '10 weeks',
    
    tags: ['Unity', 'Pixel Art', 'Game Design', 'Educational'],
    tech: ['Unity', 'C#', 'Pixel Art', 'UI Design', 'Educational Design'],
    
    links: {
      github: 'https://github.com/anaxrocks/ISPS-P3',
      itchio: 'https://anaxrocks.itch.io/interstellar-postal-service'
    },
    
    image: '/projects/isps/hero.jpg',
    images: [
      '/projects/isps/sorting.jpg',
      '/projects/isps/delivery.jpg',
      '/projects/isps/upgrades.jpg'
    ],
    
    problem: {
      context: 'Educational games often sacrifice engagement for learning objectives.',
      gap: 'Creating intuitive sorting mechanics that scale in difficulty while maintaining educational value about postal systems.',
      goals: ['Teach postal system concepts', 'Create engaging gameplay', 'Design progression that rewards learning']
    },
    
    solution: {
      approach: 'Created engaging pixel art visual style and sorting mechanics mapped to postal concepts with upgrade-based progression.',
      features: [
        {
          name: 'Package Sorting',
          description: 'Catch falling packages and sort into correct piles'
        },
        {
          name: 'Alien Deliveries',
          description: 'Shoot packages to receiving aliens on different planets'
        },
        {
          name: 'Obstacle Avoidance',
          description: 'Navigate space hazards while delivering'
        },
        {
          name: 'Upgrade System',
          description: 'Earn money to upgrade equipment and unlock new areas'
        }
      ]
    },
    
    impact: {
      outcomes: [
        'Published and playable on itch.io',
        'Demonstrates collaborative game development',
        'Engaging educational game design'
      ]
    },
  },

  {
    id: 10,
    slug: 'raccoonMama',
    title: 'Raccoon Mama',
    tagline: 'Stanford Campus Adventure',
    overview: 'An ongoing Unity platformer following a raccoon mother searching for her five babies across Stanford campus landmarks.',
    color: 'green',
    featured: false,
    year: 2025,
    
    role: 'Artist & Developer',
    team: 'Started with 2, now solo',
    timeline: 'Ongoing (started 2025)',
    
    tags: ['Unity', 'Game Design', 'C#', 'Campus Culture'],
    tech: ['Unity', 'C#', 'Digital Art', 'Level Design', 'Game Mechanics'],
    
    links: {
      github: 'https://github.com/Nils-Forstall/Raccoon-Mama'
    },
    
    image: '/projects/raccoonMama/hero.jpg',
    images: [
      '/projects/raccoonMama/campus.jpg',
      '/projects/raccoonMama/mama.jpg',
      '/projects/raccoonMama/locations.jpg'
    ],
    
    problem: {
      context: 'Creating game that honors Stanford community while being accessible to broader audience.',
      gap: 'Accurately representing campus geography while maintaining engaging gameplay and balancing nostalgia with universal appeal.',
      goals: ['Create recognizable Stanford locations', 'Design engaging platformer mechanics', 'Balance local references with broader appeal']
    },
    
    solution: {
      approach: 'Created recognizable Stanford landmarks and campus culture references with platforming challenges that honor campus geography.',
      features: [
        {
          name: 'Campus Locations',
          description: 'Recognizable Stanford landmarks as game levels'
        },
        {
          name: 'Story Progression',
          description: 'Five babies scattered across campus after flood'
        },
        {
          name: 'Helpful NPCs',
          description: 'Campus animals provide guidance and assistance'
        },
        {
          name: 'Platforming Mechanics',
          description: '2D platformer controls and level design'
        }
      ]
    },
    
    impact: {
      outcomes: [
        'Ongoing passion project after graduation',
        'Tribute to Stanford community',
        'Solo development of all art and code',
        'Combines local culture with universal themes'
      ]
    },
  },

  {
    id: 11,
    slug: 'nationalGallery',
    title: 'National Gallery Data Visualization',
    tagline: 'Art Acquisition and Power',
    overview: 'Interactive data visualization exploring power dynamics in art acquisition and display trends at the National Gallery through D3 visualizations.',
    color: 'teal',
    featured: false,
    year: 2024,
    
    role: 'Data Analyst & Visualization Developer',
    team: 'Partnership (2 people)',
    timeline: '10 weeks',
    
    tags: ['Data Visualization', 'D3.js', 'Analysis', 'Art History'],
    tech: ['D3.js', 'Observable', 'Data Analysis', 'Interactive Design'],
    
    links: {
      observable: 'https://observablehq.com/d/0897f83ea44f3d15'
    },
    
    image: '/projects/nationalGallery/hero.jpg',
    images: [
      '/projects/nationalGallery/viz1.jpg',
      '/projects/nationalGallery/viz2.jpg',
      '/projects/nationalGallery/viz3.jpg'
    ],
    
    problem: {
      context: 'Museum acquisition patterns reveal power structures but are often opaque to public.',
      gap: 'Transforming complex institutional data into engaging, accessible narratives that reveal hidden power structures.',
      goals: ['Make acquisition patterns visible', 'Reveal institutional power dynamics', 'Create accessible data exploration']
    },
    
    solution: {
      approach: 'Created interactive D3 visualizations allowing users to explore acquisition patterns and co-authored analysis revealing institutional decision-making.',
      features: [
        {
          name: 'Interactive Visualizations',
          description: 'Three D3 visualizations exploring different aspects of acquisition data'
        },
        {
          name: 'Pattern Analysis',
          description: 'Reveals how power manifests in collecting decisions'
        },
        {
          name: 'Historical Context',
          description: 'Places acquisition trends in broader art history context'
        }
      ]
    },
    
    impact: {
      outcomes: [
        'Reveals hidden patterns in museum collecting practices',
        'Interactive exploration of institutional power structures',
        'Created 2 of 3 visualizations',
        'Co-authored comprehensive analysis'
      ]
    },
  },

  {
    id: 12,
    slug: 'ASLVision',
    title: 'Fingerspelling in CV',
    tagline: 'Bias Mitigation in Computer Vision',
    overview: 'Computer vision project improving fingerspelling recognition across different skin tones and lighting to address systemic bias in accessibility technology.',
    color: 'pink',
    featured: false,
    year: 2022,
    
    role: 'Solo Developer & Researcher',
    team: 'Individual Project',
    timeline: '10 weeks',
    
    tags: ['Computer Vision', 'Machine Learning', 'Accessibility', 'Bias Mitigation'],
    tech: ['Python', 'Computer Vision', 'Machine Learning', 'Data Analysis'],
    
    links: {},
    
    image: '/projects/ASLVision/hero.jpg',
    images: [
      '/projects/ASLVision/model.jpg',
      '/projects/ASLVision/testing.jpg',
      '/projects/ASLVision/results.jpg'
    ],
    
    problem: {
      context: 'Computer vision models for ASL recognition show bias against darker skin tones due to underrepresentation in training data.',
      gap: 'Existing models lack efficacy for people of color in the deaf/HOH community who would benefit from improved recognition.',
      goals: ['Improve recognition for darker skin tones', 'Address systemic bias in CV', 'Create more inclusive accessibility technology']
    },
    
    process: {
      approach: 'Personal motivation from knowing ASL and being half Black drove focus on underrepresented groups',
      keyDecisions: [
        'Ensured inclusive dataset representation across skin tones',
        'Tested across varied lighting conditions',
        'Focused on fingerspelling as foundational ASL skill'
      ]
    },
    
    solution: {
      approach: 'Created more inclusive ASL fingerspelling recognition model with focus on diverse skin tones and lighting conditions.',
      features: [
        {
          name: 'Inclusive Training Data',
          description: 'Dataset with diverse skin tone representation'
        },
        {
          name: 'Lighting Robustness',
          description: 'Model performs across varied lighting conditions'
        },
        {
          name: 'Fingerspelling Recognition',
          description: 'Letter recognition and distinction for ASL alphabet'
        }
      ]
    },
    
    impact: {
      outcomes: [
        'More inclusive accessibility technology',
        'Addresses systemic bias in computer vision',
        'Designed for deaf/HOH community, particularly people of color'
      ],
      lessonsLearned: [
        'Importance of representative training data',
        'Personal connection to problem drives better solutions',
        'Bias mitigation requires intentional design choices'
      ]
    },
  },

  {
    id: 13,
    slug: 'archivalEchoes',
    title: 'Archival Echoes',
    tagline: 'Interactive Fiction on Information Control',
    overview: 'A Twine-based interactive fiction exploring information integrity and archival power where players discover they\'re deleting evidence of past revolutions.',
    color: 'green',
    featured: false,
    year: 2025,
    
    role: 'Developer & Narrative Designer',
    team: 'Individual Project',
    timeline: '3 weeks',
    
    tags: ['Twine', 'Interactive Fiction', 'Information Integrity', 'Narrative'],
    tech: ['Twine', 'Interactive Narrative', 'Game Design'],
    
    links: {
      itchio: 'https://housangel.itch.io/archival-echoes'
    },
    
    image: '/projects/archivalEchoes/hero.jpg',
    images: [
      '/projects/archivalEchoes/choice1.jpg',
      '/projects/archivalEchoes/choice2.jpg',
      '/projects/archivalEchoes/outcome.jpg'
    ],
    
    problem: {
      context: 'Information control and historical erasure are complex topics often presented with simplistic morality.',
      gap: 'Creating meaningful choices that explore themes of institutional power without falling into good/bad binaries.',
      goals: ['Explore information control complexity', 'Create meaningful player choices', 'Show realistic consequences']
    },
    
    solution: {
      approach: 'Designed branching narrative where player discovers true nature of archival work and must choose between compliance and resistance.',
      features: [
        {
          name: 'Discovery Narrative',
          description: 'Gradually reveals you\'re deleting evidence of civil unrest'
        },
        {
          name: 'Meaningful Choices',
          description: 'Player chooses between compliance and resistance'
        },
        {
          name: 'Realistic Consequences',
          description: 'Neither path is simple - not all revolutions succeed'
        },
        {
          name: 'Information Ethics',
          description: 'Explores archival power and historical responsibility'
        }
      ]
    },
    
    impact: {
      outcomes: [
        'Published on itch.io for public play',
        'Thought-provoking exploration of information control',
        'Examines institutional power and historical erasure'
      ],
      lessonsLearned: [
        'Complex topics need nuanced choice structures',
        'Player agency more powerful when outcomes aren\'t predetermined',
        'Short games can tackle serious themes effectively'
      ]
    },
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