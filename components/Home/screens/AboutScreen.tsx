import { motion } from 'framer-motion';
import Image from 'next/image';
import { techSkills } from '@/app/data/skills';
import HomeButton from './HomeButton';

export default function AboutScreen() {

  return (
    <div className="flex flex-col justify-center w-full px-6 py-4">
      {/* Header SVG */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-6 mt-8"
      >
        <Image 
          src="/about/about.svg"
          alt="About header"
          width={500}
          height={150}
          className="w-[50%] h-auto"
        />
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col gap-3">
        {/* Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-light-pink border-3 border-dark-pink rounded-2xl p-4 relative overflow-hidden"
        >
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

          <p className="leading-relaxed opacity-90 relative z-10">
            Recently graduated UI/UX designer & full-stack developer passionate about unique,
            accessible design and finding new problems to solve.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="font-bold uppercase tracking-wider opacity-60 mt-2 mb-2 text-center">
            Tools & Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-2 px-2">
            {techSkills.map((skill, index) => {
              const bg = skill.accent === 'teal' ? 'bg-light-teal' : 'bg-light-pink';
              const border = skill.accent === 'teal' ? 'border-dark-teal' : 'border-dark-pink';
              const text = skill.accent === 'teal' ? 'var(--dark-teal)' : 'var(--dark-pink)';
              const Icon = skill.icon;
 
              return (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4 + index * 0.06, type: 'spring', stiffness: 260, damping: 20 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className={`${bg} ${border} border-2 rounded-lg px-3 py-1.5 relative overflow-hidden cursor-default flex items-center gap-1.5 group`}
                >
                  <Icon
                    size={14}
                    className="relative z-10 shrink-0"
                    style={{ color: text }}
                    aria-hidden
                  />
                  <p
                    className="font-bold relative z-10 leading-none"
                    style={{ color: text }}
                  >
                    {skill.name}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <HomeButton
        text="Read Full Bio"
        href="/about"
        color="pink"
      />

      {/* Retro scanline effect */}
      <div 
        className="absolute pointer-events-none opacity-5 bg-gradient-to-b from-transparent via-black to-transparent bg-[length:100%_4px] animate-[scan_8s_linear_infinite]"
        style={{
          top: '60%',
          left: '60%',
          transform: 'translate(-50%, -50%)',

          width: '100%',
          height: '100%',

          clipPath: 'ellipse(48% 45% at 50% 50%)',
        }}
      />
    </div>
  );
}