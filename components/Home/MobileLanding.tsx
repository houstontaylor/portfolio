'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '@/app/data/projects';
import { techSkills } from '@/app/data/skills';
import TrapezoidCard from '../project/projects/TrapezoidCard';

// ─── tiny helpers ────────────────────────────────────────────────────────────

function Dot({ color, pulse }: { color: string; pulse?: boolean }) {
  return (
    <span
      className={`inline-block w-2 h-2 rounded-full ${pulse ? 'animate-pulse' : ''}`}
      style={{ background: color }}
      aria-hidden="true"
    />
  );
}

function ScanlineOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 opacity-[0.04]"
      style={{
        backgroundImage:
          'repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)',
      }}
    />
  );
}

// ─── tab bar ─────────────────────────────────────────────────────────────────

type Tab = 'home' | 'projects' | 'about' | 'contact';

const TABS: { id: Tab; label: string; ch: string }[] = [
  { id: 'home',     label: 'Home',     ch: '01' },
  { id: 'projects', label: 'Projects', ch: '02' },
  { id: 'about',    label: 'About',    ch: '03' },
  { id: 'contact',  label: 'Contact',  ch: '04' },
];

// ─── screens ─────────────────────────────────────────────────────────────────

function HomePanel() {
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col gap-5 px-5 pt-5 pb-6"
    >
      {/* name card */}
      <div
        className="relative rounded-[24px] border-4 p-6 overflow-hidden"
        style={{
          background: 'var(--light-teal)',
          borderColor: 'var(--dark-teal)',
          boxShadow: '0 8px 0 rgba(0,125,126,0.25)',
        }}
      >
        {/* decorative rings */}
        <div
          aria-hidden="true"
          className="absolute -top-10 -right-10 w-36 h-36 rounded-full border-4 opacity-20"
          style={{ borderColor: 'var(--dark-teal)' }}
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full border-4 opacity-15"
          style={{ borderColor: 'var(--teal)' }}
        />

        <div className="relative flex items-center gap-4">
          <Image
            src="/Logo.svg"
            alt="Houston Taylor logo"
            width={72}
            height={72}
            className="w-16 h-16 drop-shadow-md flex-shrink-0"
          />
          <div>
            <h1
              className="leading-tight mb-1"
              style={{ fontSize: 'clamp(1.6rem, 7vw, 2.2rem)', color: 'var(--dark-teal)' }}
            >
              Houston Taylor
            </h1>
            <p
              className="font-bold uppercase tracking-widest leading-tight"
              style={{ fontSize: '0.7rem', color: 'var(--dark-teal)', opacity: 0.75 }}
            >
              UI/UX · Full-Stack
            </p>
          </div>
        </div>

        <p className="relative mt-4 leading-relaxed" style={{ fontSize: '0.95rem' }}>
          {"Designing tomorrow's interfaces with yesterday's charm."}
        </p>

        <div className="relative flex items-center gap-2 mt-3">
          <Dot color="var(--red)" pulse />
          <span
            className="text-[0.65rem] font-bold uppercase tracking-widest opacity-90"
            style={{ color: 'var(--dark-teal)' }}
          >
            Now Airing · Florence, SC
          </span>
        </div>
      </div>

      {/* info chips */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: 'Role',       value: 'Designer & Developer' },
          { label: 'Experience',  value: '5+ years / 14+ projects' },
          { label: 'Education',      value: 'Stanford B.S + M.S. CS / HCI' },
          { label: 'Status',     value: 'Open to opportunities' },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="rounded-2xl border-3 px-4 py-3"
            style={{
              background: 'var(--light-neutral)',
              borderColor: 'var(--dark-neutral)',
              boxShadow: '0 4px 0 rgba(0,0,0,0.10)',
            }}
          >
            <p
              className="text-[0.6rem] font-bold uppercase tracking-widest mb-1"
              style={{ color: 'var(--deep-neutral)' }}
            >
              {label}
            </p>
            <p className="font-semibold leading-snug" style={{ fontSize: '0.8rem' }}>
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* tagline */}
      <p
        className="text-center italic text-sm"
        style={{ color: 'var(--dark-teal)', opacity: 0.75 }}
      >
        {"Designing with personality — one line at a time. Visit on a larger screen for the full experience!"}
      </p>

      {/* CTA */}
      <Link
        href="/projects"
        className="block text-center rounded-full border-4 py-3 font-extrabold uppercase tracking-widest transition-transform active:scale-95"
        style={{
          background: 'var(--dark-teal)',
          borderColor: 'rgba(0,0,0,0.2)',
          color: '#fff',
          boxShadow: '0 6px 0 rgba(0,0,0,0.25)',
          fontSize: '0.85rem',
        }}
      >
        See My Work →
      </Link>
    </motion.div>
  );
}

function ProjectsPanel() {
  const featured = projectsData.filter((p) => p.featured).slice(1, 4);

  return (
    <motion.div
      key="projects"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col px-5 pt-5 pb-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <Dot color="var(--dark-pink)" />
        <p
          className="font-extrabold uppercase tracking-[0.2em]"
          style={{ fontSize: '0.7rem', color: 'var(--dark-pink)' }}
        >
          Featured Projects
        </p>
        <div className="flex-1 h-px opacity-25" style={{ background: 'var(--dark-pink)' }} />
      </div>

      {featured.map((project) => (
        <TrapezoidCard
          key={project.id}
          project={{
            id: project.id,
            title: project.title,
            tagline: project.tagline,
            tags: project.tags,
            href: `/projects/${project.slug}`,
            number: String(project.id - 1).padStart(2, '0'),
            tone: project.color,
            size: 'small',
          }}
        />
      ))}

      <Link
        href="/projects"
        className="block text-center rounded-full border-4 py-3 font-extrabold uppercase tracking-widest transition-transform active:scale-95"
        style={{
          background: 'var(--dark-pink)',
          borderColor: 'rgba(0,0,0,0.2)',
          color: '#fff',
          boxShadow: '0 6px 0 rgba(0,0,0,0.25)',
          fontSize: '0.85rem',
        }}
      >
        Browse All Projects →
      </Link>
    </motion.div>
  );
}

function AboutPanel() {
  const skills = techSkills.slice(0, 8);

  return (
    <motion.div
      key="about"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col gap-4 px-5 pt-5 pb-6"
    >
      <div className="flex items-center gap-2 mb-1">
        <Dot color="var(--dark-teal)" />
        <p
          className="font-extrabold uppercase tracking-[0.2em]"
          style={{ fontSize: '0.7rem', color: 'var(--dark-teal)' }}
        >
          About Me
        </p>
        <div className="flex-1 h-px opacity-25" style={{ background: 'var(--dark-teal)' }} />
      </div>

      {/* bio */}
      <div
        className="rounded-[20px] border-3 p-5"
        style={{
          background: 'var(--light-pink)',
          borderColor: 'var(--dark-pink)',
          boxShadow: '0 5px 0 rgba(0,0,0,0.10)',
        }}
      >
        <p className="leading-relaxed" style={{ fontSize: '0.95rem' }}>
          Recently graduated UI/UX designer & full-stack developer passionate about unique, 
          accessible design and finding new problems to solve.
        </p>
      </div>

      {/* education */}
      <div
        className="rounded-[20px] border-3 p-4"
        style={{
          background: 'var(--light-teal)',
          borderColor: 'var(--dark-teal)',
          boxShadow: '0 5px 0 rgba(0,0,0,0.10)',
        }}
      >
        <p
          className="text-[0.6rem] font-bold uppercase tracking-widest mb-1"
          style={{ color: 'var(--dark-teal)' }}
        >
          Education
        </p>
        <p className="font-semibold"><span className="font-extrabold">Stanford University</span></p>
        <p className="text-sm opacity-80">B.S. + M.S. Computer Science</p>
        <p className="text-sm opacity-80">Focus: Human-Computer Interaction</p>
      </div>

      {/* skills */}
      <div
        className="rounded-[20px] border-3 p-4"
        style={{
          background: 'var(--light-neutral)',
          borderColor: 'var(--dark-neutral)',
          boxShadow: '0 5px 0 rgba(0,0,0,0.10)',
        }}
      >
        <p
          className="text-[0.6rem] font-bold uppercase tracking-widest mb-3"
          style={{ color: 'var(--deep-neutral)' }}
        >
          Tools & Tech
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <span
              key={s.name}
              className="rounded-full border-2 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide"
              style={{
                borderColor: s.accent === 'teal' ? 'var(--dark-teal)' : 'var(--dark-pink)',
                color: s.accent === 'teal' ? 'var(--teal)' : 'var(--pink)',
                background: 'rgba(255,255,255,0.55)',
              }}
            >
              {s.name}
            </span>
          ))}
        </div>
      </div>

      <Link
        href="/about"
        className="block text-center rounded-full border-3 py-3 font-extrabold uppercase tracking-widest transition-transform active:scale-95"
        style={{
          background: 'var(--dark-teal)',
          borderColor: 'rgba(0,0,0,0.2)',
          color: '#fff',
          boxShadow: '0 5px 0 rgba(0,0,0,0.22)',
          fontSize: '0.8rem',
        }}
      >
        Full About Page →
      </Link>
    </motion.div>
  );
}

function ContactPanel() {
  return (
    <motion.div
      key="contact"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col gap-4 px-5 pt-5 pb-6"
    >
      <div className="flex items-center gap-2 mb-1">
        <Dot color="var(--dark-green)" />
        <p
          className="font-extrabold uppercase tracking-[0.2em]"
          style={{ fontSize: '0.7rem', color: 'var(--dark-green)' }}
        >
          Get In Touch
        </p>
        <div className="flex-1 h-px opacity-25" style={{ background: 'var(--dark-green)' }} />
      </div>

      <div
        className="rounded-[20px] border-3 p-5"
        style={{
          background: 'var(--light-green)',
          borderColor: 'var(--dark-green)',
          boxShadow: '0 5px 0 rgba(0,0,0,0.10)',
        }}
      >
        <p className="leading-relaxed" style={{ fontSize: '0.95rem' }}>
          {"If you're building something fun, inclusive, or forward-thinking... I'm in. Always happy to chat design, code, or collab."}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {[
          {
            label: 'Email',
            value: 'hctaylor@alumni.stanford.edu',
            href: 'mailto:hctaylor@alumni.stanford.edu',
            color: 'var(--dark-pink)',
            bg: 'var(--light-pink)',
            border: 'var(--dark-pink)',
          },
          {
            label: 'LinkedIn',
            value: 'linkedin.com/in/houston-taylor',
            href: 'https://linkedin.com/in/houston-taylor',
            color: 'var(--dark-teal)',
            bg: 'var(--light-teal)',
            border: 'var(--dark-teal)',
          },
          {
            label: 'GitHub',
            value: 'github.com/houstontaylor',
            href: 'https://github.com/houstontaylor',
            color: 'var(--dark-green)',
            bg: 'var(--light-green)',
            border: 'var(--dark-green)',
          },
        ].map(({ label, value, href, color, bg, border }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl border-3 px-4 py-3 active:scale-[0.98] transition-transform"
            style={{ background: bg, borderColor: border, boxShadow: '0 4px 0 rgba(0,0,0,0.10)' }}
          >
            <div>
              <p className="text-[0.6rem] font-bold uppercase tracking-widest mb-0.5" style={{ color }}>
                {label}
              </p>
              <p className="font-semibold" style={{ fontSize: '0.8rem', color }}>
                {value}
              </p>
            </div>
            <span style={{ color, fontSize: '1.1rem' }} aria-hidden="true">→</span>
          </a>
        ))}
      </div>

      <Link
        href="/contact"
        className="block text-center rounded-full border-3 py-3 font-extrabold uppercase tracking-widest transition-transform active:scale-95"
        style={{
          background: 'var(--dark-green)',
          borderColor: 'rgba(0,0,0,0.2)',
          color: '#fff',
          boxShadow: '0 5px 0 rgba(0,0,0,0.22)',
          fontSize: '0.8rem',
        }}
      >
        Open Contact Form →
      </Link>
    </motion.div>
  );
}

// ─── main component ───────────────────────────────────────────────────────────

export default function MobileLanding() {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  const panels: Record<Tab, React.ReactNode> = {
    home: <HomePanel />,
    projects: <ProjectsPanel />,
    about: <AboutPanel />,
    contact: <ContactPanel />,
  };

  return (
    <div
      className="relative min-h-screen flex flex-col"
      style={{ background: 'var(--background)' }}
    >
      {/* ── top status bar ── */}
      <div
        className="sticky top-0 z-30 flex items-center justify-between px-5 py-2 border-b-3"
        style={{
          background: 'var(--background)',
          borderColor: 'rgba(0,0,0,0.12)',
        }}
      >
        <div className="flex items-center gap-2">
          <Dot color="var(--red)" pulse />
          <span
            className="font-extrabold uppercase tracking-widest"
            style={{ fontSize: '0.6rem', color: 'var(--dark-teal)', fontFamily: 'var(--font-cherry-cream-soda)' }}
          >
            HT · BROADCASTING
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Dot color="var(--dark-teal)" />
          <Dot color="var(--dark-pink)" />
          <Dot color="var(--dark-green)" />
        </div>
      </div>

      {/* ── scrollable content ── */}
      <div className="relative flex-1 overflow-y-auto">
        <ScanlineOverlay />
        <AnimatePresence mode="wait">
          {panels[activeTab]}
        </AnimatePresence>
      </div>

      {/* ── bottom tab bar (channel selector) ── */}
      <div
        className="sticky bottom-0 z-30 border-t-3"
        style={{
          background: 'var(--light-neutral)',
          borderColor: 'rgba(0,0,0,0.15)',
          boxShadow: '0 -4px 16px rgba(0,0,0,0.08)',
        }}
      >
        {/* channel label */}
        <div className="flex justify-center pt-1.5">
          <span
            className="text-[0.55rem] font-bold uppercase tracking-[0.25em] opacity-40"
            style={{ color: 'var(--deep-neutral)' }}
          >
            ◄ Channel Select ►
          </span>
        </div>

        <div className="flex">
          {TABS.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex-1 flex flex-col items-center gap-0.5 py-2 px-1 transition-all active:scale-95"
                aria-label={tab.label}
                aria-pressed={active}
              >
                <span
                  className="text-[0.55rem] font-bold font-mono"
                  style={{ color: active ? 'var(--dark-teal)' : 'var(--deep-neutral)', opacity: active ? 1 : 0.45 }}
                >
                  {tab.ch}
                </span>
                <span
                  className="font-extrabold uppercase tracking-wide transition-colors"
                  style={{
                    fontSize: '0.6rem',
                    color: active ? 'var(--dark-teal)' : 'var(--deep-neutral)',
                    opacity: active ? 1 : 0.5,
                  }}
                >
                  {tab.label}
                </span>
                {active && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="w-4 h-0.5 rounded-full"
                    style={{ background: 'var(--dark-teal)' }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* safe area spacer for notched phones */}
        <div className="h-safe-bottom" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }} />
      </div>
    </div>
  );
}