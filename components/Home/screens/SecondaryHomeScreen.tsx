import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import HomeButton from './HomeButton';

export default function SecondaryHomeScreen () {
  return (
    <div className="flex flex-col w-full px-6 py-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 mb-6 mt-8 mr-4"
      >
        <p
          className="text-sm font-extrabold tracking-[0.25em] uppercase"
          style={{ color: 'var(--dark-pink)', fontFamily: 'var(--font-heading)' }}
        >
          Home
        </p>
        <div className="flex-1 h-px opacity-30" style={{ background: 'var(--dark-pink)' }} />
        <p className="text-[10px] opacity-40 font-mono">DEEP DIVE</p>
      </motion.div>

      {/* main content */}
      <div className="grid grid-cols-[1.08fr_0.92fr] gap-4 flex-1 mr-4 ml-4">
        {/* LEFT: featured broadcast card */}
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-[28px] border-4 p-8 relative overflow-hidden mt-8 mb-16"
          style={{
            background: 'rgba(135, 201, 191, 0.28)',
            borderColor: 'var(--dark-teal)',
          }}
        >
          {/* decorative logo */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <p
                className="text-sm font-bold uppercase tracking-widest opacity-65 mb-1"
                style={{ color: 'var(--dark-teal)' }}
              >
                Now Broadcasting
              </p>

              <h2 style={{ color: 'var(--dark-teal)' }}>
                Designing with personality
              </h2>
            </div>

            <Image
              src="/Logo.svg"
              alt="Houston Taylor logo"
              width={72}
              height={72}
              className="w-14 h-14 object-contain opacity-90"
            />
          </div>

          <p className="text-large leading-relaxed mb-4">
            I’m a UI/UX designer and full-stack developer who loves making digital
            experiences feel thoughtful, approachable, and a little more memorable.
            I’m especially drawn to projects where visual identity, usability, and
            real user needs all meet. 
          </p>

          {/* decorative atom */}
          <div className="absolute bottom-4 right-4 opacity-15">
            <svg width="56" height="56" viewBox="0 0 56 56">
              <circle cx="28" cy="28" r="4" fill="currentColor" />
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <line
                  key={i}
                  x1="28"
                  y1="28"
                  x2={28 + 18 * Math.cos((angle * Math.PI) / 180)}
                  y2={28 + 18 * Math.sin((angle * Math.PI) / 180)}
                  stroke="currentColor"
                  strokeWidth="2"
                />
              ))}
            </svg>
          </div>
        </motion.div>

        {/* RIGHT: stacked cards */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.4 }}
            className="rounded-[22px] border-3 p-4"
            style={{
              background: 'rgba(249,219,193,0.5)',
              borderColor: 'var(--dark-pink)',
            }}
          >
            <p
              className="text-sm font-bold uppercase tracking-widest opacity-65 mb-2"
              style={{ color: 'var(--dark-pink)' }}
            >
              I Care About
            </p>

            <p className="leading-relaxed">
              Accessible design, strong visual systems, polished interactions,
              and building products that feel personal and human instead of generic.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.4 }}
            className="rounded-[22px] border-3 p-4"
            style={{
              background: 'rgba(200,208,109,0.42)',
              borderColor: 'var(--dark-green)',
            }}
          >
            <p
              className="text-sm font-bold uppercase tracking-widest opacity-65 mb-2"
              style={{ color: 'var(--dark-green)' }}
            >
              Looking For
            </p>

            <p className="leading-relaxed">
              UI/UX, frontend, and product-minded roles where I can help shape
              both the look and the experience of what gets built.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="rounded-[22px] border-3 p-4"
            style={{
              background: 'rgba(223,206,163,0.42)',
              borderColor: 'var(--dark-neutral)',
            }}
          >
            <p
              className="text-sm font-bold uppercase tracking-widest opacity-65 mb-2"
              style={{ color: 'var(--dark-neutral)' }}
            >
              Style
            </p>

            <div className="flex flex-wrap gap-2">
              {['Playful', 'Thoughtful', 'Accessible', 'Retro-Futuristic'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border-2 px-3 py-1 text-[14px] font-bold uppercase tracking-wide"
                  style={{
                    borderColor: 'var(--dark-neutral)',
                    color: 'var(--deep-neutral)',
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
        text="Read Full Bio"
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