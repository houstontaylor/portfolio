import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsScreen() {
  const projects = [
    {
      title: "PodBot",
      tech: "Startup • AI/ML • Python • React",
      color: "bg-pink",
      borderColor: "border-dark-pink",
      accentColor: "bg-dark-pink",
      textColor: "#6E6336"
    },
    {
      title: "Tend",
      tech: "Figma • Behavior Analysis • Needfinding",
      color: "bg-light-teal",
      borderColor: "border-dark-teal",
      accentColor: "bg-dark-teal",
      textColor: "#6E6336"
    },
    {
      title: "FilmFlicks",
      tech: "React • Figma • Javascript",
      color: "bg-light-green",
      borderColor: "border-dark-green",
      accentColor: "bg-dark-green",
      textColor: "#6E6336"
    }
  ];

  return (
    <div className="flex flex-col h-full px-6 py-4">
      {/* Floating decorative atoms */}
      <motion.div
        className="absolute top-8 left-4 opacity-20"
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg width="30" height="30" viewBox="0 0 30 30">
          <circle cx="15" cy="15" r="2" fill="var(--dark-teal)"/>
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <g key={i}>
              <line
                x1="15"
                y1="15"
                x2={15 + 12 * Math.cos((angle * Math.PI) / 180)}
                y2={15 + 12 * Math.sin((angle * Math.PI) / 180)}
                stroke="var(--dark-teal)"
                strokeWidth="1.5"
              />
              <circle 
                cx={15 + 12 * Math.cos((angle * Math.PI) / 180)} 
                cy={15 + 12 * Math.sin((angle * Math.PI) / 180)} 
                r="2" 
                fill="var(--teal)"
              />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Top right boomerang shape */}
      <motion.div
        className="absolute top-6 right-8 opacity-30"
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <svg width="50" height="20" viewBox="0 0 50 20">
          <path 
            d="M 0 10 Q 15 0, 30 10 Q 45 20, 50 10" 
            fill="none" 
            stroke="var(--green)" 
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-4"
      >
        <Image 
          src="/projects.svg"
          alt="Projects header"
          width={500}
          height={200}
          className="w-[50%] h-auto"
        />
      </motion.div>

      {/* Featured Projects Grid */}
      <div className="flex-1 grid grid-cols-2 gap-3 mb-3 ml-6 relative">
        {/* Decorative dots between cards */}
        <div className="absolute -left-2 top-1/2 flex flex-col gap-2">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-neutral"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>

        {/* Large card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className={`col-span-2 ${projects[0].color} ${projects[0].borderColor} border-4 rounded-2xl p-4 relative overflow-hidden group cursor-pointer`}
        >
          {/* Decorative corner element */}
          <div className={`absolute top-0 right-0 w-16 h-16 ${projects[0].accentColor} transform rotate-45 translate-x-8 -translate-y-8`}></div>
          
          {/* Animated concentric circles */}
          <motion.div 
            className="absolute top-3 right-20 opacity-20"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="5" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="20" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </motion.div>

          {/* Atomic starburst accent */}
          <div className="absolute bottom-2 left-2 opacity-20">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="3" fill="currentColor"/>
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <line
                  key={i}
                  x1="20"
                  y1="20"
                  x2={20 + 15 * Math.cos((angle * Math.PI) / 180)}
                  y2={20 + 15 * Math.sin((angle * Math.PI) / 180)}
                  stroke="currentColor"
                  strokeWidth="2"
                />
              ))}
            </svg>
          </div>

          <h3 
            className="text-xl font-bold mb-1 group-hover:scale-105 transition-transform origin-left"
            style={{ color: projects[0].textColor }}
          >
            {projects[0].title}
          </h3>
          <p className="text-sm opacity-70 ml-10">{projects[0].tech}</p>
        </motion.div>

        {/* Small card left/top */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`${projects[1].color} ${projects[1].borderColor} border-4 rounded-2xl p-3 relative overflow-hidden group cursor-pointer`}
        >
          {/* Triple circles */}
          <div className="absolute top-2 right-2 flex gap-1 opacity-30">
            <div className={`w-3 h-3 ${projects[1].accentColor} rounded-full`}></div>
            <div className={`w-3 h-3 ${projects[1].accentColor} rounded-full`}></div>
            <div className={`w-3 h-3 ${projects[1].accentColor} rounded-full`}></div>
          </div>

          <div className={`absolute -bottom-4 -right-4 w-12 h-12 ${projects[1].accentColor} rounded-full`}></div>
          
          <h3 
            className="text-lg font-bold mb-1 relative z-10 group-hover:scale-105 transition-transform origin-left"
            style={{ color: projects[1].textColor }}
          >
            {projects[1].title}
          </h3>
          <p className="text-xs opacity-70 relative z-10">{projects[1].tech}</p>
        </motion.div>

        {/* Small card right/bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`${projects[2].color} ${projects[2].borderColor} border-4 rounded-2xl p-3 relative overflow-hidden group cursor-pointer`}
        >
          {/* Zigzag pattern */}
          <svg className="absolute bottom-1 right-2 opacity-20" width="50" height="20" viewBox="0 0 50 20">
            <path 
              d="M 0 15 L 5 5 L 10 15 L 15 5 L 20 15 L 25 5 L 30 15 L 35 5 L 40 15 L 45 5 L 50 15" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            />
          </svg>

          {/* Atomic starburst accent */}
          <div className="absolute top-4 right-8 opacity-20">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="3" fill="currentColor"/>
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <line
                  key={i}
                  x1="20"
                  y1="20"
                  x2={20 + 15 * Math.cos((angle * Math.PI) / 180)}
                  y2={20 + 15 * Math.sin((angle * Math.PI) / 180)}
                  stroke="currentColor"
                  strokeWidth="2"
                />
              ))}
            </svg>
          </div>

          <h3 
            className="text-lg font-bold mb-1 relative z-10 group-hover:scale-105 transition-transform origin-left"
            style={{ color: projects[2].textColor }}
          >
            {projects[2].title}
          </h3>
          <p className="text-xs opacity-70 relative z-10">{projects[2].tech}</p>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center mt-4 relative"
      >
        {/* Decorative arrows */}
        <motion.div 
          className="absolute left-1/4 top-1/2 -translate-y-1/2"
          animate={{ x: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M 15 10 L 5 5 L 5 15 Z" fill="var(--green)" opacity="0.4"/>
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute right-1/4 top-1/2 -translate-y-1/2"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M 5 10 L 15 5 L 15 15 Z" fill="var(--green)" opacity="0.4"/>
          </svg>
        </motion.div>

        <Link href="/projects">
          <div className="inline-block bg-green/30 border-2 border-dark-green rounded-full px-6 py-2 cursor-pointer hover:bg-green/50 transition-colors">
            <p className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--dark-green)' }}>
              View All Projects →
            </p>
          </div>
        </Link>
      </motion.div>

      {/* Retro scanline effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5 bg-gradient-to-b from-transparent via-black to-transparent bg-[length:100%_4px] animate-[scan_8s_linear_infinite]"
        style={{
          clipPath: 'ellipse(48% 45% at 50% 50%)',
          borderRadius: '8px'
        }}
      />
    </div>
  );
}