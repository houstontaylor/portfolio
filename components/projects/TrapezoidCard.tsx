'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

type CardTone = 'teal' | 'pink' | 'green' | 'neutral';

export type ProjectCard = {
  id: number;
  title: string;
  tagline: string;
  tags: string[];
  href: string;
  number?: string;
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

const SAFE: Record<
  'small' | 'large',
  Record<'left' | 'right' | 'flat', { left: string; top: string; width: string; height: string }>
> = {
  large: {
    // big cards
    left:  { left: '7%',  top: '11%', width: '81%', height: '71%' },
    right: { left: '5%',  top: '15%', width: '81%', height: '67%' },
    flat:  { left: '4%',  top: '11%', width: '84%', height: '71%' },
  },
  small: {
    // small cards
    left:  { left: '7%', top: '11%', width: '82%', height: '71%' },
    right: { left: '7%', top: '13%', width: '80%', height: '70%' },
    flat:  { left: '5%', top: '9%', width: '84%', height: '75%' },
  },
} as const;

function trapezoidPath(variant: 'left' | 'right' | 'flat') {
  // Irregular shapes made in figma
  if (variant === 'left') {
    return `
      M 267 5
      C 354 4 449 7 530 13
      C 550 14 567 29 568 48
      C 576 137 557 243 539 294
      C 535 308 522 316 506 317
      C 327 324 145 329 47 320
      C 28 319 13 303 11 284
      C 1 191 1 103 27 43
      C 32 33 41 26 51 23
      C 100 12 179 7 267 5
      Z
    `;
  }
  if (variant === 'right') {
    return `
      M 33 43
      C 157 0 306 -2 504 15
      C 523 16 538 29 543 47
      C 560 112 573 176 570 224
      C 568 249 563 269 552 284
      C 542 299 527 309 506 312
      C 381 332 263 326 78 314
      C 60 313 45 301 39 285
      C 21 234 0 161 6 77
      C 7 61 18 48 33 43
      Z
    `;
  }
  return `
    M 47 10
    C 231 0 350 5 531 18
    C 553 20 571 37 572 59
    C 574 148 562 217 534 290
    C 528 306 512 316 495 317
    C 310 326 255 323 71 311
    C 52 310 37 298 32 280
    C 9 204 2 138 6 51
    C 7 29 25 12 47 10
    Z
  `;
}

function pickVariant(id: number) {
  const v = id % 3;
  return v === 0 ? 'left' : v === 1 ? 'right' : 'flat';
}

export default function TrapezoidCard({ project }: { project: ProjectCard }) {
  const reduceMotion = useReducedMotion();
  const palette = TONE[project.tone];
  const variant = pickVariant(project.id);
  const path = trapezoidPath(variant);
  const isLarge = project.size === 'large';
  const s = SAFE[isLarge ? 'large' : 'small'][variant];
  const sizes =
    isLarge
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
      {/* Click target */}
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
          {/* outline */}
          <path
            d={path}
            fill="transparent"
            stroke="var(--foreground)"
            strokeWidth="3"
            strokeLinejoin="round"
            transform="translate(-2 2) scale (1.02)"
          />
        </svg>

        {/* Content */}
        <div
          className="absolute"
          style={{
            left: s.left,
            top: s.top,
            width: s.width,
            height: s.height,
          }}
        >
          <div className="h-full flex flex-col">
            {/* top row */}
            <div className="flex items-start justify-between gap-3">
              <h3 style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                {project.title}
              </h3>

              {project.number ? (
                <div
                  className="shrink-0 text-2xl md:text-3xl font-extrabold tracking-wide text-[color:var(--foreground)]/35"
                  aria-hidden="true"
                >
                  {project.number}
                </div>
              ) : null}
            </div>

            {/* tagline */}
            <p>
              {project.tagline}
            </p>

            {/* tags */}
            <ul className="mt-1 flex flex-wrap gap-1">
              {(isLarge ? project.tags.slice(0, 4) : project.tags.slice(0, 2)).map((t) => (
                <li key={t}>
                  <span
                    className={[
                      'inline-flex items-center rounded-full border-2 px-3 py-1',
                      isLarge ? 'text-sm' : 'text-[0.82rem]',
                      'bg-[color:var(--light-neutral)]/70',
                      'border-[color:var(--dark-green)]/50',
                      'text-[color:var(--foreground)]',

                    ].join(' ')}
                    title={t}
                  >
                    {t}
                  </span>
                </li>
              ))}

              {project.tags.length > (isLarge ? 4 : 2) ? (
                <li>
                  <span className="inline-flex items-center rounded-full border-2 px-3 py-1 text-sm bg-[color:var(--light-neutral)]/70 border-[color:var(--dark-green)]/50 text-[color:var(--foreground)]">
                    +{project.tags.length - (isLarge ? 4 : 2)}
                  </span>
                </li>
              ) : null}
            </ul>

            {/* CTA pinned to bottom of safe area */}
            <div className="mt-auto pt-2 pr-5 inline-flex items-center justify-end gap-2 text-sm font-semibold text-[color:var(--foreground)]">
              <span className="underline decoration-[color:var(--dark-green)]/60 underline-offset-4 group-hover:decoration-[color:var(--dark-pink)]/70">
                View project
              </span>
              <span aria-hidden="true">→</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
