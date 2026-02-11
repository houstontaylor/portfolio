'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import { PiStarFourFill } from 'react-icons/pi';

type Props = {
  className?: string;
};

export default function Footer ( { className = '' }: Props ) {
  const links = [
    { name: 'PROJECTS', path: '/projects' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
    { name: 'RESUME', path: '/resume' },
  ];

  // Replace these with your real URLs
  const socials = [
    { name: 'GitHub', href: 'https://github.com/houstontaylor', icon: FaGithub },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/houston-taylor/', icon: FaLinkedin },
    { name: 'Email', href: 'mailto:houstonctaylor@alumni.stanford.edu', icon: FaEnvelope },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className={`relative mt-16 ${className}`}>
      {/* Top “trim” line */}
      <div
        className="h-[10px] w-full"
        style={{
          background:
            'repeating-linear-gradient(90deg, var(--dark-neutral) 0 14px, transparent 14px 26px)',
          opacity: 0.55,
        }}
      />
      <div id="scrolltotop-end" style={{ height: 0 }} />

      <div
        className="relative overflow-hidden"
        style={{
          background: 'var(--light-neutral)',
          borderTop: '4px solid var(--dark-neutral)',
        }}
      >
        {/* Subtle star speckle */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 12% 28%, rgba(231,70,86,0.55) 0 1.5px, transparent 2px),
              radial-gradient(circle at 78% 20%, rgba(231,70,86,0.45) 0 1.2px, transparent 2px),
              radial-gradient(circle at 62% 62%, rgba(231,70,86,0.35) 0 1.1px, transparent 2px),
              radial-gradient(circle at 25% 70%, rgba(0,127,126,0.35) 0 1.2px, transparent 2px),
              radial-gradient(circle at 88% 72%, rgba(0,127,126,0.28) 0 1.0px, transparent 2px)
            `,
          }}
        />

        {/* Big faint “orbit” rings */}
        <div
          className="pointer-events-none absolute -left-40 -top-40 w-[520px] h-[520px] rounded-full opacity-[0.18]"
          style={{ border: '3px dashed var(--dark-pink)' }}
        />
        <div
          className="pointer-events-none absolute -right-44 -bottom-44 w-[620px] h-[620px] rounded-full opacity-[0.14]"
          style={{ border: '3px dashed var(--dark-teal)' }}
        />

        <div className="relative max-w-7xl mx-auto px-8 py-14">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr] items-start">
            {/* Logo + blurb */}
            <div className="flex items-start gap-4">
              <Link href="/" className="shrink-0">
                <motion.div
                  whileHover={{ rotate: 4, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  className="relative"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                    style={{
                      background: 'var(--dark-neutral)',
                      border: '3px solid var(--dark-green)',
                    }}
                  >
                    <Image
                      src="/logo.svg"
                      alt="Houston Taylor Logo"
                      width={44}
                      height={44}
                      className="select-none"
                      style={{ transform: 'translateX(-1px)' }}
                    />
                  </div>

                  <motion.span
                    className="absolute -right-2 -top-2 text-[14px]"
                    style={{ color: 'var(--red)' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                    aria-hidden="true"
                  >
                    <PiStarFourFill />
                  </motion.span>
                </motion.div>
              </Link>

              <div className="min-w-0">
                <div className="text-xl font-bold tracking-wide" style={{ color: 'var(--dark-green)' }}>
                  Houston Taylor
                </div>
                <p
                  className="mt-2 text-sm"
                  style={{ color: 'var(--dark-green)', opacity: 0.85, lineHeight: 1.5 }}
                >
                  Designer + developer building friendly interfaces and playful systems for all time periods.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href="mailto:houstonctaylor@alumni.stanford.edu"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-[11px] font-bold"
                    style={{
                      background: 'rgba(255,255,255,0.55)',
                      border: '2px dashed var(--dark-neutral)',
                      color: 'var(--dark-green)',
                    }}
                  >
                    <span aria-hidden="true">✉</span>
                    houstonctaylor@alumni.stanford.edu
                  </a>

                  <button
                    type="button"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-[11px] font-bold"
                    style={{
                      background: 'rgba(255,255,255,0.55)',
                      border: '2px dashed var(--dark-pink)',
                      color: 'var(--dark-pink)',
                    }}
                  >
                    <span aria-hidden="true">↑</span>
                    BACK TO TOP
                  </button>
                </div>
              </div>
            </div>

            {/* Nav */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[12px] font-bold tracking-widest" style={{ color: 'var(--dark-green)', opacity: 0.85 }}>
                  NAVIGATION
                </span>
                <div className="flex-1 h-[2px]" style={{ background: 'rgba(110,99,54,0.22)' }} />
                <motion.span
                  className="text-[14px]"
                  style={{ color: 'var(--red)' }}
                  animate={{ rotate: [0, 12, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                  aria-hidden="true"
                >
                  <PiStarFourFill />
                </motion.span>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {links.map((l) => (
                  <Link key={l.path} href={l.path} className="group">
                    <motion.div
                      whileHover={{ x: 2 }}
                      transition={{ type: 'spring', stiffness: 240, damping: 18 }}
                      className="inline-flex items-center gap-2"
                    >
                      <span className="text-sm font-bold tracking-wider" style={{ color: 'var(--dark-green)' }}>
                        {l.name}
                      </span>
                      <span
                        className="text-[12px] opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: 'var(--red)' }}
                        aria-hidden="true"
                      >
                        ➜
                      </span>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Signal */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[12px] font-bold tracking-widest" style={{ color: 'var(--dark-green)', opacity: 0.85 }}>
                  SIGNAL
                </span>
                <div className="flex-1 h-[2px]" style={{ background: 'rgba(110,99,54,0.22)' }} />
              </div>

              <div
                className="rounded-2xl p-4"
                style={{
                  background: 'rgba(255,255,255,0.55)',
                  border: '3px solid var(--dark-green)',
                  boxShadow: '0 16px 26px rgba(0,0,0,0.10)',
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-bold" style={{ color: 'var(--dark-green)' }}>
                      Broadcasting from the Night Shift
                    </div>
                    <div className="text-[12px] mt-1" style={{ color: 'var(--dark-green)', opacity: 0.8, lineHeight: 1.35 }}>
                      If you’re building something fun, inclusive, or slightly sci-fi… I’m in.
                    </div>
                  </div>

                  <motion.div
                    className="shrink-0 text-[18px]"
                    style={{ color: 'var(--dark-pink)' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    aria-hidden="true"
                  >
                    <PiStarFourFill />
                  </motion.div>
                </div>

                {/* Social links row (universal footer usefulness) */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {socials.map((s) => {
                    const Ico = s.icon;
                    return (
                      <a
                        key={s.name}
                        href={s.href}
                        target={s.href.startsWith('http') ? '_blank' : undefined}
                        rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-[11px] font-bold"
                        style={{
                          background: 'rgba(255,255,255,0.62)',
                          border: '2px dashed var(--dark-neutral)',
                          color: 'var(--dark-green)',
                        }}
                        aria-label={s.name}
                      >
                        <Ico className="text-[14px]" style={{ color: 'var(--red)' }} />
                        {s.name}
                      </a>
                    );
                  })}
                </div>

                {/* Equalizer: fixed-height container so the card never changes size */}
                <div className="mt-4 h-[18px] relative opacity-70" aria-hidden="true">
                  <div className="absolute inset-0 flex items-end justify-center gap-1">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 rounded-full"
                        style={{ background: 'var(--dark-pink)' }}
                        animate={{ height: ['6px', `${8 + (i % 4) * 6}px`, '6px'] }}
                        transition={{ duration: 2.0, repeat: Infinity, delay: i * 0.08, ease: 'easeInOut' }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="sidenav-end" style={{ height: 0 }} />
          {/* Bottom line */}
          <div
            className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ borderTop: '2px solid rgba(110,99,54,0.22)' }}
          >
            <div className="text-[11px] font-bold tracking-widest" style={{ color: 'var(--dark-green)', opacity: 0.75 }}>
              © {year} HOUSTON TAYLOR
            </div>

            <div className="text-[11px] font-bold tracking-widest" style={{ color: 'var(--dark-green)', opacity: 0.65 }}>
              MADE WITH <span style={{ color: 'var(--red)' }}>✦</span> NEXT.JS + FRAMER MOTION
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
