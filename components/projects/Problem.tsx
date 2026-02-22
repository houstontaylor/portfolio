'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { ProjectData } from '@/app/data/projects';
import { PiStarFourFill } from 'react-icons/pi';

const colorMap = {
  pink: {
    ink: 'var(--dark-pink)',
    border: 'rgba(0,0,0,0.22)',
    panelA: 'var(--light-pink)',
    panelB: 'var(--light-teal)',
    panelC: 'var(--light-green)',
  },
  teal: {
    ink: 'var(--dark-teal)',
    border: 'rgba(0,0,0,0.22)',
    panelA: 'var(--light-teal)',
    panelB: 'var(--light-pink)',
    panelC: 'var(--light-green)',
  },
  green: {
    ink: 'var(--dark-green)',
    border: 'rgba(0,0,0,0.22)',
    panelA: 'var(--light-green)',
    panelB: 'var(--light-teal)',
    panelC: 'var(--light-pink)',
  },
  neutral: {
    ink: 'var(--dark-neutral)',
    border: 'rgba(0,0,0,0.22)',
    panelA: 'var(--light-neutral)',
    panelB: 'var(--light-teal)',
    panelC: 'var(--light-pink)',
  },
} as const;

function SectionHeader ( { title, ink }: { title: string; ink: string } ) {
  return (
    <div className="relative mb-5 overflow-hidden rounded-[22px] border-4 px-6 py-4"
      style={{
        background: 'var(--light-neutral)',
        borderColor: 'rgba(0,0,0,0.22)',
      }}
    >
      {/* tiny mid-century “bar + star” */}
      <div className="absolute right-5 top-1/2 -translate-y-1/2 opacity-50" style={{ color: ink }}>
        <PiStarFourFill className="text-2xl" />
      </div>

      <h2
        className="text-3xl md:text-4xl font-extrabold"
        style={{ color: ink, fontFamily: 'var(--font-subheading)' }}
      >
        {title}
      </h2>

      <div className="mt-2 h-[6px] w-28 rounded-full" style={{ background: ink, opacity: 0.25 }} />
    </div>
  );
}

function Panel ( {
  label,
  children,
  bg,
  ink,
  tilt = 0,
}: {
  label: string;
  children: React.ReactNode;
  bg: string;
  ink: string;
  tilt?: number;
} ) {
  return (
    <div
      className="relative overflow-hidden rounded-[26px] border-4 p-6 md:p-7 shadow-[0_18px_0_rgba(0,0,0,0.08)]"
      style={{
        background: bg,
        borderColor: 'rgba(0,0,0,0.22)',
        transform: `rotate(${tilt}deg)`,
      }}
    >
      {/* irregular rectangle accents (easy to code) */}
      <div
        className="absolute -left-6 -top-6 h-24 w-32 rounded-[18px] border-4 opacity-40"
        style={{ borderColor: ink, background: 'rgba(255,255,255,0.35)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-8 top-10 h-16 w-28 rounded-[16px] border-4 opacity-25"
        style={{ borderColor: ink, background: 'rgba(255,255,255,0.25)' }}
        aria-hidden="true"
      />

      <div className="relative">
        <p className="text-xs font-extrabold uppercase tracking-widest opacity-80" style={{ color: ink }}>
          {label}
        </p>
        <div className="mt-3 text-[1.05rem] md:text-lg leading-relaxed" style={{ color: 'var(--dark-green)' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Problem ( { project }: { project: ProjectData } ) {
  const reduceMotion = useReducedMotion();
  const theme = colorMap[project.color];

  const enter = reduceMotion
    ? undefined
    : { opacity: 1, y: 0 };

  return (
    <motion.section
      id="problem"
      initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
      animate={enter}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="mb-10 scroll-mt-10"
    >
      <SectionHeader title="Problem" ink={theme.ink} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Context + Gap (2 columns) */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={enter}
          transition={{ delay: 0.05, duration: 0.45 }}
          className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Panel label="Context" bg={theme.panelA} ink={theme.ink} tilt={-0.6}>
            {project.problem.context}
          </Panel>

          <Panel label="Gap" bg={theme.panelB} ink={theme.ink} tilt={0.6}>
            {project.problem.gap}
          </Panel>
        </motion.div>

        {/* Goals (1 column) */}
        <motion.aside
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={enter}
          transition={{ delay: 0.1, duration: 0.45 }}
          className="lg:col-span-1"
        >
          <div
            className="relative overflow-hidden rounded-[26px] border-4 p-6 md:p-7 shadow-[0_18px_0_rgba(0,0,0,0.08)]"
            style={{
              background: theme.panelC,
              borderColor: 'rgba(0,0,0,0.22)',
            }}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-extrabold uppercase tracking-widest opacity-80" style={{ color: theme.ink }}>
                Goals
              </p>
              <span className="opacity-50" style={{ color: theme.ink }} aria-hidden="true">
                <PiStarFourFill className="text-xl" />
              </span>
            </div>

            {project.problem.goals?.length ? (
              <ul className="mt-4 space-y-3">
                {project.problem.goals.map((g, i) => (
                  <li key={g} className="flex items-start gap-3">
                    <span className="mt-[2px] opacity-80" style={{ color: theme.ink }} aria-hidden="true">
                      <PiStarFourFill className="text-lg" />
                    </span>
                    <span className="text-[1.02rem] md:text-lg leading-snug" style={{ color: 'var(--dark-green)' }}>
                      {g}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-[1.02rem] md:text-lg leading-relaxed" style={{ color: 'var(--dark-green)' }}>
                —
              </p>
            )}

            {/* bottom “trim bar” */}
            <div className="mt-6 h-[8px] w-full rounded-full" style={{ background: theme.ink, opacity: 0.18 }} />
          </div>
        </motion.aside>
      </div>
    </motion.section>
  );
}