'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '../../components/Header';

export default function AboutPage() {
  const education = [
    { school: "Stanford University", location: "Stanford, CA", degree: "MS in Computer Science", year: "2023-2024", postcard: "stanford-postcard.svg" },
    { school: "Stanford University", location: "Palo Alto, CA", degree: "BS in Computer Science", year: "2019-2023", postcard: "stanford-postcard-2.svg" },
    { school: "Study Abroad", location: "Paris, France", degree: "Stanford in Paris", year: "Spring 2022", postcard: "paris-postcard.svg" },
  ];

  const experience = [
    { 
      title: "Full-Stack Developer", 
      company: "Tech Startup", 
      period: "2023 - Present",
      description: "Building scalable web applications with React and Node.js",
      color: "bg-pink"
    },
    { 
      title: "UX Designer", 
      company: "Design Agency", 
      period: "2022 - 2023",
      description: "Created user-centered designs for various clients",
      color: "bg-light-teal"
    },
  ];

  const skills = [
    { name: "Design", icon: "🎨", angle: 0 },
    { name: "Frontend", icon: "💻", angle: 60 },
    { name: "Backend", icon: "⚙️", angle: 120 },
    { name: "Technical", icon: "🔧", angle: 180 },
    { name: "Research", icon: "🔍", angle: 240 },
    { name: "Supporting", icon: "🤝", angle: 300 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content - with padding for fixed header */}
      <main className="pt-24 pb-16 px-8 max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex justify-center"
        >
          <Image 
            src="/about.svg"
            alt="About"
            width={800}
            height={200}
            className="w-3/4 h-auto"
          />
        </motion.div>

        {/* Intro Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-light-pink border-4 border-dark-pink rounded-3xl p-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 opacity-20">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="4" fill="var(--dark-pink)"/>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <line
                    key={i}
                    x1="30"
                    y1="30"
                    x2={30 + 20 * Math.cos((angle * Math.PI) / 180)}
                    y2={30 + 20 * Math.sin((angle * Math.PI) / 180)}
                    stroke="var(--dark-pink)"
                    strokeWidth="3"
                  />
                ))}
              </svg>
            </div>

            <div className="flex gap-8 items-center">
              {/* Photo placeholder - replace with your actual photo */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 bg-pink border-4 border-dark-pink rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <Image 
                    src="/Logo.svg" // Replace with your photo
                    alt="Houston Taylor"
                    width={150}
                    height={150}
                  />
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-dark-pink rounded-bl-2xl"></div>
                </div>
              </div>

              {/* Bio Text */}
              <div className="flex-1 relative z-10">
                <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--dark-pink)' }}>
                  Hi there, I'm Houston Taylor!
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  I'm a UI/UX designer and full-stack developer passionate about unique and accessible design, finding new problems to help solve, and making products that inspire.
                </p>
                <p className="text-lg leading-relaxed">
                  Thanks for taking the time to learn more about me!
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 h-1 bg-dark-pink"></div>
            <div className="flex gap-2 mx-4">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="w-4 h-4 bg-dark-pink transform rotate-45"></div>
              ))}
            </div>
            <div className="flex-1 h-1 bg-dark-pink"></div>
          </div>

          <h2 className="text-4xl font-bold text-center mb-12" style={{ fontFamily: 'var(--font-heading)' }}>
            EDUCATION
          </h2>

          <div className="grid grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -10, rotate: 2 }}
                className="bg-light-teal border-4 border-dark-teal rounded-2xl p-6 relative overflow-hidden cursor-pointer"
              >
                {/* Postcard styling */}
                <div className="absolute top-2 right-2 text-xs opacity-50">
                  📮 POSTCARD
                </div>
                
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--dark-teal)' }}>
                  Greetings from<br/>{edu.school}
                </h3>
                <p className="text-sm mb-1">{edu.location}</p>
                <p className="text-sm font-bold mb-1">{edu.degree}</p>
                <p className="text-xs opacity-70">{edu.year}</p>

                {/* Stamp decoration */}
                <div className="absolute bottom-2 right-2 w-8 h-8 border-2 border-dark-teal border-dashed rounded opacity-30"></div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12" style={{ fontFamily: 'var(--font-heading)' }}>
            EXPERIENCE
          </h2>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className={`${exp.color} border-4 border-dark-${exp.color.split('-')[1]} rounded-2xl p-6 relative overflow-hidden`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-lg mb-2">{exp.company}</p>
                    <p className="opacity-80">{exp.description}</p>
                  </div>
                  <span className="text-sm font-bold px-4 py-2 bg-white/40 rounded-full">
                    {exp.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section - Orbital Diagram */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12" style={{ fontFamily: 'var(--font-heading)' }}>
            SKILLS
          </h2>

          <div className="relative w-full max-w-2xl mx-auto h-96 flex items-center justify-center">
            {/* Center circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-32 h-32 bg-green border-4 border-dark-green rounded-full flex items-center justify-center z-10"
            >
              <span className="text-2xl font-bold" style={{ color: 'var(--dark-green)' }}>
                Skills
              </span>
            </motion.div>

            {/* Orbital rings */}
            {[1, 2, 3].map((ring) => (
              <div
                key={ring}
                className="absolute border-2 border-dashed border-neutral rounded-full opacity-30"
                style={{
                  width: `${ring * 120}px`,
                  height: `${ring * 120}px`,
                }}
              />
            ))}

            {/* Skill orbs */}
            {skills.map((skill, index) => {
              const radius = 180;
              const x = radius * Math.cos((skill.angle * Math.PI) / 180);
              const y = radius * Math.sin((skill.angle * Math.PI) / 180);

              return (
                <motion.div
                  key={skill.name}
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: 1,
                    x,
                    y
                  }}
                  transition={{ 
                    delay: 0.9 + index * 0.1,
                    type: "spring"
                  }}
                  whileHover={{ scale: 1.3 }}
                  className="absolute w-20 h-20 bg-light-neutral border-3 border-dark-neutral rounded-full flex flex-col items-center justify-center cursor-pointer"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-xs font-bold mt-1">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </main>
    </div>
  );
}