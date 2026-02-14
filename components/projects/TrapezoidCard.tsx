'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type CardTone = 'teal' | 'pink' | 'green' | 'neutral';

export type ProjectCard = {
  id: string;
  title: string;
  tagline: string;
  tags: string[];
  href: string;
  image?: string; // optional hover background
  number?: string; // e.g. "01"
  tone: CardTone;
  size?: 'small' | 'large';
};

const TONE = {
  teal: {
    fill: 'var(--teal)',
    fillSoft: 'var(--light-teal)',
    stroke: 'var(--dark-teal)',
  },
  pink: {
    fill: 'var(--pink)',
    fillSoft: 'var(--light-pink)',
    stroke: 'var(--dark-pink)',
  },
  green: {
    fill: 'var(--green)',
    fillSoft: 'var(--light-green)',
    stroke: 'var(--dark-green)',
  },
  neutral: {
    fill: 'var(--neutral)',
    fillSoft: 'var(--light-neutral)',
    stroke: 'var(--dark-neutral)',
  },
} as const;

function trapezoidPath(variant: 'left' | 'right' | 'flat') {
  // Irregular, “almost trapezoid” shapes with rounded-ish corners via quadratic curves.
  // ViewBox: 0 0 600 360
  if (variant === 'left') {
    return `
      M 70 40
      Q 40 55 40 85
      L 20 290
      Q 18 320 45 330
      L 520 345
      Q 565 345 575 310
      L 590 95
      Q 595 55 555 45
      L 165 30
      Q 105 28 70 40
      Z
    `;
  }
  if (variant === 'right') {
    return `
      M 60 55
      Q 35 70 35 95
      L 50 305
      Q 55 345 95 345
      L 545 340
      Q 585 338 592 305
      L 575 80
      Q 570 35 530 40
      L 135 50
      Q 85 50 60 55
      Z
    `;
  }
  return `
    M 55 55
    Q 35 70 35 95
    L 35 295
    Q 35 335 75 340
    L 535 345
    Q 575 345 585 310
    L 585 95
    Q 585 55 545 50
    L 95 45
    Q 70 45 55 55
    Z
  `;
}

function pickVariant(id: string) {
  const n = [...id].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const v = n % 3;
  return v === 0 ? 'left' : v === 1 ? 'right' : 'flat';
}

export default function TrapezoidCard({ project }: { project: ProjectCard }) {
  const reduceMotion = useReducedMotion();
  const palette = TONE[project.tone];
  const variant = pickVariant(project.id);
  const path = trapezoidPath(variant);

  const sizes =
    project.size === 'large'
      ? 'min-h-[240px] md:min-h-[280px]'
      : 'min-h-[210px] md:min-h-[240px]';

  return (
    <motion.article
      className={[
        'relative isolate',
        'w-full',
        sizes,
        'focus-within:outline-none',
      ].join(' ')}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    >
      {/* Click target (accessible) */}
      <Link
        href={project.href}
        className={[
          'group block h-full w-full',
          'focus:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--dark-teal)]/30',
        ].join(' ')}
        aria-label={`Open project: ${project.title}`}
      >
        {/* SVG shape + border */}
        <svg
          viewBox="0 0 600 360"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
          focusable="false"
          preserveAspectRatio="none"
        >
          {/* shadow */}
          <path
            d={path}
            fill="transparent"
            stroke="transparent"
            style={{
              filter: 'drop-shadow(0px 10px 0px rgba(0,0,0,0.08))',
            }}
          />
          {/* fill */}
          <path d={path} fill={palette.fill} />
          {/* soft inset panel */}
          <path
            d={path}
            fill={palette.fillSoft}
            opacity="0.32"
            transform="translate(10 10) scale(0.94)"
          />
          {/* stroke */}
          <path
            d={path}
            fill="transparent"
            stroke={palette.stroke}
            strokeWidth="10"
            strokeLinejoin="round"
          />
        </svg>

        {/* Hover image wash */}
        {project.image ? (
          <motion.div
            className="absolute inset-0 -z-10 overflow-hidden"
            initial={{ opacity: 0 }}
            whileHover={reduceMotion ? undefined : { opacity: 0.25 }}
            transition={{ duration: 0.2 }}
            aria-hidden="true"
          >
            <Image
              src={project.image}
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              priority={false}
            />
          </motion.div>
        ) : null}

        {/* Content */}
        <div className="relative h-full p-6 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-[1.6rem] leading-tight text-[color:var(--foreground)]">
              {project.title}
            </h3>

            {project.number ? (
              <div
                className="text-2xl md:text-3xl font-extrabold tracking-wide text-[color:var(--foreground)]/35"
                aria-hidden="true"
              >
                {project.number}
              </div>
            ) : null}
          </div>

          <p className="mt-3 text-[color:var(--dark-green)] text-base md:text-[1.05rem] leading-snug">
            {project.tagline}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((t) => (
              <li key={t}>
                <span
                  className={[
                    'inline-flex items-center rounded-full',
                    'border-2 px-3 py-1 text-sm',
                    'bg-[color:var(--light-neutral)]/70',
                    'border-[color:var(--dark-green)]/50',
                    'text-[color:var(--foreground)]',
                  ].join(' ')}
                >
                  {t}
                </span>
              </li>
            ))}
            {project.tags.length > 4 ? (
              <li>
                <span className="inline-flex items-center rounded-full border-2 px-3 py-1 text-sm bg-[color:var(--light-neutral)]/70 border-[color:var(--dark-green)]/50 text-[color:var(--foreground)]">
                  +{project.tags.length - 4}
                </span>
              </li>
            ) : null}
          </ul>

          <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--foreground)]">
            <span className="underline decoration-[color:var(--dark-green)]/60 underline-offset-4 group-hover:decoration-[color:var(--dark-pink)]/70">
              View project
            </span>
            <span aria-hidden="true">→</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
