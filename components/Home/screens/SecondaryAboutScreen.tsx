import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
          Education
        </p>
        <div className="flex-1 h-px opacity-30" style={{ background: 'var(--dark-neutral)' }} />
        <p className="text-[10px] opacity-40 font-mono">DEEP DIVE</p>
      </motion.div>

      {/* main content */}
      <div className="grid grid-cols-[1.05fr_0.95fr] gap-4 flex-1 items-center">
        {/* LEFT: postcard */}
        <motion.div
          initial={{ opacity: 0, x: -18, rotate: -3 }}
          animate={{ opacity: 1, x: 0, rotate: -2 }}
          transition={{ duration: 0.45 }}
          className="relative"
        >
          {/* postcard shadow layer */}
          <div
            className="absolute inset-0 translate-x-2 translate-y-2 rounded-[26px] opacity-35"
            style={{ background: 'var(--dark-neutral)' }}
          />

          <div
            className="relative rounded-[26px] border-4 p-3 overflow-hidden shadow-[0_12px_0_rgba(0,0,0,0.08)]"
            style={{
              background: 'var(--light-neutral)',
              borderColor: 'var(--dark-teal)',
            }}
          >
            {/* postcard top */}
            <div className="flex items-start justify-between mb-3">
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-widest opacity-60"
                  style={{ color: 'var(--dark-teal)' }}
                >
                  Education Feature
                </p>
                <h3 style={{ color: 'var(--dark-teal)' }}>Stanford Postcard</h3>
              </div>

              <div
                className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest border-2"
                style={{
                  background: 'var(--light-teal)',
                  color: 'var(--dark-teal)',
                  borderColor: 'var(--dark-teal)',
                }}
              >
                Front
              </div>
            </div>

            {/* postcard image */}
            <div
              className="relative rounded-[16px] overflow-hidden border-3 bg-white"
              style={{ borderColor: 'rgba(0,0,0,0.16)' }}
            >
              <Image
                src="/about/stanfordPostcardFront.svg"
                alt="Stanford education postcard"
                width={800}
                height={540}
                className="w-full h-[250px] object-cover"
              />
            </div>

            {/* bottom line */}
            <div className="mt-3 flex items-center justify-between">
              <p
                className="text-xs font-bold uppercase tracking-widest opacity-60"
                style={{ color: 'var(--dark-neutral)' }}
              >
                Stanford, California
              </p>

              <div className="flex gap-1 opacity-50">
                <div className="w-2 h-2 rounded-full bg-dark-teal" />
                <div className="w-2 h-2 rounded-full bg-dark-pink" />
                <div className="w-2 h-2 rounded-full bg-dark-green" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: details panel */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.4 }}
            className="rounded-[24px] border-4 p-4 relative overflow-hidden"
            style={{
              background: 'rgba(249,219,193,0.55)',
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
              className="text-xs font-bold uppercase tracking-widest opacity-65 mb-2"
              style={{ color: 'var(--dark-pink)' }}
            >
              Snapshot
            </p>

            <h3 className="mb-2" style={{ color: 'var(--dark-pink)' }}>
              Stanford University
            </h3>

            <p className="text-sm leading-relaxed">
              I studied Computer Science at Stanford, then continued into the coterminal
              master’s program with a focus on human-computer interaction.
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
              className="text-xs font-bold uppercase tracking-widest opacity-65 mb-2"
              style={{ color: 'var(--dark-teal)' }}
            >
              Degrees
            </p>

            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-bold">B.S.</span> Computer Science
              </p>
              <p className="text-sm">
                <span className="font-bold">M.S.</span> Computer Science
              </p>
              <p className="text-sm">
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
              className="text-xs font-bold uppercase tracking-widest opacity-65 mb-2"
              style={{ color: 'var(--dark-green)' }}
            >
              Key Interests
            </p>

            <div className="flex flex-wrap gap-2">
              {['UI/UX', 'Frontend', 'Accessibility', 'HCI'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border-2 px-3 py-1 text-[11px] font-bold uppercase tracking-wide"
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.28 }}
        className="text-center mt-4 relative"
      >
        <motion.div
          className="absolute left-1/4 top-1/2 -translate-y-1/2"
          animate={{ x: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M 15 10 L 5 5 L 5 15 Z" fill="var(--dark-pink)" opacity="0.4" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute right-1/4 top-1/2 -translate-y-1/2"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M 5 10 L 15 5 L 15 15 Z" fill="var(--dark-pink)" opacity="0.4" />
          </svg>
        </motion.div>

        <Link href="/about">
          <div className="inline-block bg-pink/30 border-2 border-dark-pink rounded-full px-6 py-2 cursor-pointer hover:bg-pink/50 transition-colors">
            <p
              className="text-sm font-bold uppercase tracking-wider"
              style={{ color: 'var(--dark-pink)' }}
            >
              View Full About Page →
            </p>
          </div>
        </Link>
      </motion.div>

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