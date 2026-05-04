import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import HomeButton from './HomeButton';

export default function SecondaryAboutScreen () {
  return (
    <div className="flex flex-col justify-center w-full px-6 py-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 mb-4 mt-4 mr-4"
      >
        <p
          className="text-sm font-extrabold tracking-[0.25em] uppercase"
          style={{ color: 'var(--dark-neutral)', fontFamily: 'var(--font-heading)' }}
        >
          About
        </p>
        <div className="flex-1 h-px opacity-30" style={{ background: 'var(--dark-neutral)' }} />
        <p className="text-[10px] opacity-40 font-mono">DEEP DIVE</p>
      </motion.div>

      {/* main content */}
      <div className="grid grid-cols-[0.95fr_1.05fr] gap-4 flex-1 items-center">
        {/* LEFT: postcard */}
        <motion.div
          initial={{ opacity: 0, x: -18, rotate: 0 }}
          animate={{ opacity: 1, x: 25, rotate: -6 }}
          transition={{ duration: 0.45 }}
        >
          <Image
            src="/about/BachelorsPostcard.svg"
            alt="Stanford postcard"
            width={600}
            height={450}
            className="w-[90%] h-auto"
          />
        </motion.div>

        {/* RIGHT: details panel */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.4 }}
            className="rounded-[24px] border-4 p-4 relative overflow-hidden"
            style={{
              background: 'rgba(from var(--light-pink) r g b / 0.5)',
              borderColor: 'var(--dark-pink)',
            }}
          >
            <div className="absolute top-2 right-2 opacity-10">
              <svg width="32" height="32" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="3" fill="currentColor" />
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <line
                    key={i}
                    x1="16"
                    y1="16"
                    x2={16 + 11 * Math.cos((angle * Math.PI) / 180)}
                    y2={16 + 11 * Math.sin((angle * Math.PI) / 180)}
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                ))}
              </svg>
            </div>

            <p
              className="text-sm font-bold uppercase tracking-widest opacity-65 mb-2"
              style={{ color: 'var(--dark-pink)' }}
            >
              Snapshot
            </p>

            <h3 className="mb-2" style={{ color: 'var(--dark-pink)' }}>
              Stanford University
            </h3>

            <p className="leading-relaxed">
              Earned my bachelor's and master's degrees in Computer Science and studied abroad.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.4 }}
            className="rounded-[22px] border-3 p-4"
            style={{
              background: 'var(--light-teal)',
              borderColor: 'var(--dark-teal)',
            }}
          >
            <p
              className="text-sm font-bold uppercase tracking-widest opacity-65 mb-2"
              style={{ color: 'var(--dark-teal)' }}
            >
              Degrees
            </p>

            <div className="space-y-2">
              <p>
                <span className="font-bold">B.S.</span> Computer Science
              </p>
              <p>
                <span className="font-bold">M.S.</span> Computer Science
              </p>
              <p>
                <span className="font-bold">Focus:</span> Human-Computer Interaction
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="rounded-[22px] border-3 p-4"
            style={{
              background: 'rgba(200,208,109,0.5)',
              borderColor: 'var(--dark-green)',
            }}
          >
            <p
              className="text-sm font-bold uppercase tracking-widest opacity-65 mb-2"
              style={{ color: 'var(--dark-green)' }}
            >
              Key Interests
            </p>

            <div className="flex flex-wrap gap-2">
              {['UI/UX', 'Frontend', 'Accessibility', 'HCI'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border-2 px-3 py-1 text-[14px] font-bold uppercase tracking-wide"
                  style={{
                    borderColor: 'var(--dark-green)',
                    color: 'var(--dark-green)',
                    background: 'rgba(255,255,255,0.45)',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* bottom CTA */}
      <HomeButton
        text="View Full About Page"
        href="/about"
        color="pink"
      />

      {/* Scanline */}
      <div
        className="absolute pointer-events-none opacity-5 bg-gradient-to-b from-transparent via-black to-transparent bg-[length:100%_4px] animate-[scan_8s_linear_infinite]"
        style={{
          top: '60%',
          left: '60%',
          transform: 'translate(-35%, -40%)',
          width: '100%',
          height: '100%',
          clipPath: 'ellipse(48% 45% at 50% 50%)',
        }}
      />
    </div>
  );
}