'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProjectData } from '@/app/data/projects';
import Bullet from '../../ui/Bullet';

const colorMap = {
  pink: {
    cream: 'var(--light-neutral)',
    main: 'var(--pink)',
    lightMain: 'var(--light-pink)',
    darkMain: 'var(--dark-pink)',
    secondary: 'var(--teal)',
    lightSecondary: 'var(--light-teal)',
    darkSecondary: 'var(--dark-teal)',
    tertiary: 'var(--green)',
    lightTertiary: 'var(--light-green)',
    darkTertiary: 'var(--dark-green)',
    ink: 'var(--foreground)',
  },
  teal: {
    cream: 'var(--light-neutral)',
    main: 'var(--teal)',
    lightMain: 'var(--light-teal)',
    darkMain: 'var(--dark-teal)',
    secondary: 'var(--green)',
    lightSecondary: 'var(--light-green)',
    darkSecondary: 'var(--dark-green)',
    tertiary: 'var(--pink)',
    lightTertiary: 'var(--light-pink)',
    darkTertiary: 'var(--dark-pink)',
    ink: 'var(--foreground)',
  },
  green: {
    cream: 'var(--light-neutral)',
    main: 'var(--green)',
    lightMain: 'var(--light-green)',
    darkMain: 'var(--dark-green)',
    secondary: 'var(--pink)',
    lightSecondary: 'var(--light-pink)',
    darkSecondary: 'var(--dark-pink)',
    tertiary: 'var(--teal)',
    lightTertiary: 'var(--light-teal)',
    darkTertiary: 'var(--dark-teal)',
    ink: 'var(--foreground)',
  },
} as const;

function RingsBackdrop({
  colors,
  opacity = 0.22,
}: {
  colors: { a: string; b: string; c: string };
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 900 520"
      preserveAspectRatio="none"
      style={{ opacity }}
    >
      <g fill="none" strokeWidth="22">
        <circle cx="235" cy="290" r="132" stroke={colors.a} opacity="0.55" />
        <circle cx="300" cy="345" r="150" stroke={colors.b} opacity="0.40" />
        <circle cx="190" cy="370" r="105" stroke={colors.c} opacity="0.35" />
      </g>
    </svg>
  );
}

function InvertedHalfCircleBanner({
  bg,
  stroke,
  children,
}: {
  bg: string;
  stroke: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative overflow-hidden border-4 shadow-[0_8px_0_rgba(0,0,0,0.08)]"
      style={{
        background: bg,
        borderColor: 'rgba(0,0,0,0.22)',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        borderBottomLeftRadius: 9999,
        borderBottomRightRadius: 9999,
      }}
    >
      {/* subtle inner outline */}
      <div
        className="pointer-events-none absolute inset-[10px]"
        style={{
          border: `3px solid rgba(255,255,255,0.45)`,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 9999,
          borderBottomRightRadius: 9999,
        }}
        aria-hidden="true"
      />

      {/* thin stripe lines */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'repeating-linear-gradient(0deg, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 2px, transparent 2px, transparent 14px)',
          opacity: 0.25,
        }}
      />

      {/* top border accent line */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-[10px]"
        aria-hidden="true"
        style={{ background: stroke, opacity: 0.25 }}
      />

      <div className="relative px-7 py-7 md:px-10 md:py-8">{children}</div>
    </div>
  );
}

export default function Problem({ project }: { project: ProjectData }) {
  const t = colorMap[project.color];

  const goals = project.problem.goals ?? [];

  return (
    <motion.section
      id="problem"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="scroll-mt-10"
    >
      <div
        className="overflow-hidden rounded-[28px] border-4 shadow-[0_18px_0_rgba(0,0,0,0.08)]"
        style={{
          background: 'var(--dark-neutral)',
          borderColor: 'rgba(0,0,0,0.25)',
        }}
      >
        {/* ===== HERO IMAGE ===== */}
        <Image
          src={project.image}
          alt={`${project.title} hero image`}
          width={1200}
          height={800}
          style={{ width: '100%', height: 'auto', display: 'block' }}
          priority
        />
        {/* Top Context */}
        <div className="pb-3">
          <InvertedHalfCircleBanner bg={t.darkMain} stroke={t.main}>
            <p
              className="mx-auto max-w-4xl text-center text-lg md:text-xl leading-relaxed"
              style={{ color: t.cream }}
            >
              {project.problem.context}
            </p>
          </InvertedHalfCircleBanner>
        </div>

        {/* 2-column content */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT: PROJECT GAP */}
          <div
            className="relative border-t-4 border-r-4 p-6 md:p-8"
            style={{
              borderColor: 'rgba(150, 115, 69, 1)',
              background: 'var(--light-neutral)',
            }}
          >
            <RingsBackdrop
              colors={{ a: t.secondary, b: t.main, c: t.tertiary }}
              opacity={0.22}
            />

            <div className="relative">
              <h3
                className="font-extrabold leading-[1.05]"
                style={{
                  color: t.darkSecondary
                }}
              >
                What’s missing or broken?
              </h3>

              <p
                className="mt-5 text-lg md:text-[1.1rem] leading-relaxed max-w-xl"
              >
                {project.problem.gap}
              </p>

              <div className="mt-6 inline-flex items-center gap-2">
                <span
                  className="h-[10px] w-[10px] rounded-full"
                  style={{ background: t.main }}
                  aria-hidden="true"
                />
                <span
                  className="text-xs font-extrabold uppercase tracking-widest opacity-70"
                  style={{ color: 'var(--deep-neutral)' }}
                >
                  Problem Gap
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: GOALS */}
          <div
            className="relative border-t-4 p-6 md:p-8"
            style={{
              borderColor: 'rgba(150, 115, 69, 1)',
              background: 'var(--neutral)',
            }}
          >
            <div className="relative">
              <h3
                className="font-extrabold leading-[1.05]"
                style={{
                  color: t.darkTertiary,
                  fontFamily: 'var(--font-subheading)'
                }}
              >
                Goals
              </h3>

              <ul className="mt-4 space-y-5">
                {goals.length > 0 ? (
                  goals.map((g, i) => (
                    <Bullet
                      key={`${g}-${i}`}
                      tone={i % 3 === 0 ? t.secondary : i % 3 === 1 ? t.main : t.tertiary}
                      lightTone={i % 3 === 0 ? t.lightSecondary : i % 3 === 1 ? t.lightMain : t.lightTertiary}
                      innerCircleIndex={i % 3}
                    >
                      {g}
                    </Bullet>
                  ))
                ) : (
                  <li className="text-lg leading-relaxed opacity-80">
                    N/A
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}