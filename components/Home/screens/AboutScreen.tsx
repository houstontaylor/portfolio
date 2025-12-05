import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutScreen() {
  const techStack = [
    { name: "Figma", category: "Design", color: "bg-pink", border: "border-dark-pink", textColor: "var(--dark-pink)" },
    { name: "React", category: "Frontend", color: "bg-light-teal", border: "border-dark-teal", textColor: "var(--dark-teal)" },
    { name: "Next.js", category: "Frontend", color: "bg-light-teal", border: "border-dark-teal", textColor: "var(--dark-teal)" },
    { name: "Python", category: "Backend", color: "bg-light-green", border: "border-dark-green", textColor: "var(--dark-green)" },
    { name: "TypeScript", category: "Frontend", color: "bg-light-neutral", border: "border-dark-neutral", textColor: "var(--dark-neutral)" },
    { name: "Node.js", category: "Backend", color: "bg-light-green", border: "border-dark-green", textColor: "var(--dark-green)" },
  ];

  return (
    <div className="flex flex-col h-full px-6 py-4">
      {/* Header SVG */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-3"
      >
        <Image 
          src="/about.svg"
          alt="About header"
          width={500}
          height={150}
          className="w-[50%] h-auto"
        />
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-3">
        {/* Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-light-pink border-3 border-dark-pink rounded-2xl p-4 relative overflow-hidden"
        >
          {/* Decorative starburst */}
          <div className="absolute bottom-2 right-3 opacity-10">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="3" fill="currentColor"/>
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
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

          <p className="text-sm leading-relaxed opacity-90 relative z-10">
            I create delightful digital experiences at the intersection of design and code. 
            Passionate about user-centered design and bringing ideas to life from concept to deployment.
          </p>
        </motion.div>

        {/* Tech Stack - Fun Badge Display */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex-1"
        >
          <p className="text-xs font-bold uppercase tracking-wider opacity-60 mb-2 text-center">
            Tools & Technologies
          </p>
          
          {/* Retro badge layout */}
          <div className="flex flex-wrap justify-center gap-2 px-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className={`${tech.color} ${tech.border} border-2 rounded-lg px-3 py-1.5 relative overflow-hidden cursor-pointer group`}
              >
                {/* Decorative corner dot */}
                <div 
                  className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full opacity-40"
                  style={{ backgroundColor: tech.textColor }}
                />
                
                {/* Badge shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2 }}
                />

                <p 
                  className="text-sm font-bold relative z-10 group-hover:scale-105 transition-transform origin-left"
                  style={{ color: tech.textColor }}
                >
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA - Matching Projects Style */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center mt-3 relative"
      >
        {/* Decorative arrows */}
        <motion.div 
          className="absolute left-1/4 top-1/2 -translate-y-1/2"
          animate={{ x: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M 15 10 L 5 5 L 5 15 Z" fill="var(--dark-pink)" opacity="0.4"/>
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute right-1/4 top-1/2 -translate-y-1/2"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M 5 10 L 15 5 L 15 15 Z" fill="var(--dark-pink)" opacity="0.4"/>
          </svg>
        </motion.div>

        <Link href="/about">
          <div className="inline-block bg-pink/30 border-2 border-dark-pink rounded-full px-6 py-2 cursor-pointer hover:bg-pink/50 transition-colors">
            <p className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--dark-pink)' }}>
              Read Full Bio →
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