import { color, motion } from 'framer-motion';
import Image from 'next/image';

export default function HomeScreen() {
  return (
    <div className="flex flex-col h-full px-8 py-6 justify-between">
      <div className="flex items-center gap-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="flex-shrink-0"
        >
          <Image 
            src="/Logo.svg" 
            alt="Houston Taylor Logo" 
            width={120}
            height={120}
            className="w-[15vw] h-[15vw] min-w-[80px] min-h-[80px] max-w-[180px] max-h-[180px] drop-shadow-lg"
          />
        </motion.div>

        {/* Name & Title */}
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="leading-tight mb-1"
          >
            Houston Taylor
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl"
          >
            UI/UX Designer & Full-Stack Developer
          </motion.h2>
        </div>
      </div>

      {/* Middle Section - Info Cards (Retro Style) */}
      <motion.div 
        className="grid grid-cols-2 gap-3 my-6 ml-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {/* Years Experience */}
        <div className="bg-light-teal/30 border-2 border-dark-teal rounded-lg p-3 backdrop-blur-sm">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-cherry-cream-soda)', color: 'var(--dark-teal)' }}>
            5+
          </div>
          <p className="text-sm opacity-80">Years Experience</p>
        </div>

        {/* Projects Built */}
        <div className="bg-pink/30 border-2 border-dark-pink rounded-lg p-3 backdrop-blur-sm">
          <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-cherry-cream-soda)', color: 'var(--dark-pink)' }}>
            15+
          </div>
          <p className="text-sm opacity-80">Projects Built</p>
        </div>

        {/* Availability */}
        <div className="bg-light-green/30 border-2 border-green rounded-lg p-3 backdrop-blur-sm">
          <div className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--dark-green)' }}>
            ● AVAILABLE
          </div>
          <p className="text-sm opacity-80">For Hire or Freelance</p>
        </div>

        {/* Location */}
        <div className="bg-neutral/30 border-2 border-dark-neutral rounded-lg p-3 backdrop-blur-sm">
          <div className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--dark-neutral)' }}>
            📍 BASED IN
          </div>
          <p className="text-sm opacity-80">Florence, SC | San Francisco, CA</p>
        </div>
      </motion.div>

      {/* Tagline & Navigation Hint */}
      <div className="space-y-3">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center text-base italic"
          style={{ color: 'var(--dark-teal)' }}
        >
          "Designing tomorrow's interfaces with yesterday's charm"
        </motion.p>

        {/* Retro TV Guide Style Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center gap-2 text-sm opacity-70"
        >
          <span className="inline-block w-2 h-2 bg-red rounded-full animate-pulse"></span>
          <p className="text-small">TURN TOP DIAL TO CHANGE CHANNEL</p>
          <span className="inline-block w-2 h-2 bg-red rounded-full animate-pulse"></span>
        </motion.div>

        {/* Bottom Dial Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center gap-2 text-xs opacity-70"
        >
          <span className="inline-block w-1 h-1 bg-teal rounded-full animate-pulse"></span>
          <p className="text-xs">TURN BOTTOM DIAL FOR GRAYSCALE</p>
          <span className="inline-block w-1 h-1 bg-teal rounded-full animate-pulse"></span>
        </motion.div>
      </div>
    </div>
  );
}