'use client';

import { FaGithub, FaExternalLinkAlt, FaFigma } from 'react-icons/fa';
import { PiStarFourFill } from 'react-icons/pi';
import { PiPlayFill, PiNewspaperClippingFill, PiFileTextFill, PiFileDocFill, PiGameControllerFill, PiChartLineUpFill, PiBuildingsFill, PiLinkSimpleBold } from 'react-icons/pi';
import { ProjectData } from '@/app/data/projects';

const colorMap = {
  pink: {
    cream: 'var(--light-neutral)',
    main: 'var(--pink)',
    lightMain: 'var(--light-pink)',
    darkMain: 'var(--dark-pink)',
    secondary: 'var(--teal)',
    darkSecondary: 'var(--dark-teal)',
    tertiary: 'var(--green)',
    darkTertiary: 'var(--dark-green)',
  },
  teal: {
    cream: 'var(--light-neutral)',
    main: 'var(--teal)',
    lightMain: 'var(--light-teal)',
    darkMain: 'var(--dark-teal)',
    secondary: 'var(--green)',
    darkSecondary: 'var(--dark-green)',
    tertiary: 'var(--pink)',
    darkTertiary: 'var(--dark-pink)',
  },
  green: {
    cream: 'var(--light-neutral)',
    main: 'var(--green)',
    lightMain: 'var(--light-green)',
    darkMain: 'var(--dark-green)',
    secondary: 'var(--pink)',
    darkSecondary: 'var(--dark-pink)',
    tertiary: 'var(--teal)',
    darkTertiary: 'var(--dark-teal)',
  },
} as const;

function HalfCircleCard ( {
  label,
  value,
  bg,
  fg,
  direction = 'up',
}: {
  label: string;
  value: string;
  bg: string;
  fg: string;
  direction?: 'up' | 'down';
} ) {
  const isUp = direction === 'up';

  const radiusStyle: React.CSSProperties = isUp
    ? {
        borderTopLeftRadius: 9999,
        borderTopRightRadius: 9999,
        borderBottomLeftRadius: 26,
        borderBottomRightRadius: 26,
      }
    : {
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,
        borderBottomLeftRadius: 9999,
        borderBottomRightRadius: 9999,
      };

  return (
    <div
      className="relative w-full overflow-hidden border-4 shadow-[0_14px_0_rgba(0,0,0,0.08)]"
      style={{
        background: bg,
        color: fg,
        borderColor: 'rgba(0,0,0,0.22)',
        height: 130,
        ...radiusStyle,
      }}
    >
      {/* subtle inner highlight */}
      <div
        className="absolute inset-[10px] opacity-20"
        style={{
          border: '3px solid rgba(255,255,255,0.65)',
          borderTopLeftRadius: isUp ? 9999 : 22,
          borderTopRightRadius: isUp ? 9999 : 22,
          borderBottomLeftRadius: isUp ? 22 : 9999,
          borderBottomRightRadius: isUp ? 22 : 9999,
        }}
        aria-hidden="true"
      />

      <div
        className="relative text-center"
        style={{
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: isUp? 30 : 20,
          paddingBottom: isUp? 10 : 20,
        }}
      >
        <div className="text-[0.8rem] font-extrabold uppercase tracking-widest opacity-95">
          {label}
        </div>

        <div className="mt-1 text-[0.98rem] md:text-[1.02rem] font-semibold leading-snug">
          {value}
        </div>
      </div>
    </div>
  );
}

function TopoBand ( { stroke, opacity = 0.25 }: { stroke: string; opacity?: number } ) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 900 220"
      className="absolute inset-0 h-full w-full pl-55"
      preserveAspectRatio="none"
    >
      {Array.from({ length: 10 }).map((_, i) => {
        const inset = 20 + i * 10;
        return (
          <rect
            key={i}
            x={inset}
            y={inset}
            width={900 - inset * 2}
            height={220 - inset * 2}
            rx={70}
            ry={70}
            fill="transparent"
            stroke={stroke}
            strokeWidth={3}
            opacity={opacity}
          />
        );
      })}
    </svg>
  );
}

function LinkPill({
  href,
  label,
  icon,
  accent,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  accent: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border-3 px-5 py-3 font-extrabold uppercase tracking-wider shadow-[0_10px_0_rgba(0,0,0,0.12)] transition-transform hover:-translate-y-[2px]"
      style={{
        background: 'rgba(from var(--light-neutral) r g b / 0.85)',
        color: accent,
        borderColor: accent,
      }}
    >
      <span className="text-[1.05rem]">{icon}</span>
      {label}
    </a>
  );
}

export default function Overview ( { project }: { project: ProjectData } ) {
  const t = colorMap[project.color];

  const linkItems: { key: string; href?: string; label: string; icon: React.ReactNode; }[] = [
    { key: 'live', href: project.links.live, label: 'Live', icon: <FaExternalLinkAlt /> },
    { key: 'demo', href: project.links.demo, label: 'Demo', icon: <PiPlayFill /> },

    { key: 'github', href: project.links.github, label: 'Code', icon: <FaGithub /> },
    { key: 'figma', href: project.links.figma, label: 'Figma', icon: <FaFigma /> },

    { key: 'article', href: project.links.article, label: 'Article', icon: <PiNewspaperClippingFill /> },
    { key: 'writeup', href: project.links.writeup, label: 'Writeup', icon: <PiFileTextFill /> },
    { key: 'prd', href: project.links.prd, label: 'PRD', icon: <PiFileDocFill /> },

    { key: 'itchio', href: project.links.itchio, label: 'Itch.io', icon: <PiGameControllerFill /> },
    { key: 'observable', href: project.links.observable, label: 'Observable', icon: <PiChartLineUpFill /> },

    { key: 'companyDetails', href: project.links.companyDetails, label: 'Company', icon: <PiBuildingsFill /> },
  ];

  return (
    <div 
        className="overflow-hidden rounded-[28px] border-4 shadow-[0_18px_0_rgba(0,0,0,0.08)]"
        style={{ 
            background: 'var(--background)', 
            borderColor: 'rgba(0,0,0,0.25)' 
        }}
    >
    {/* ===== TOP TITLE BAND ===== */}
    <div className="relative px-7 py-8 md:px-10 md:py-10" style={{ background: t.lightMain }}>
        <TopoBand stroke={t.darkMain} />

        {/* left circle */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <div
            className="relative h-[240px] w-[240px]"
            style={{
            borderRadius: 9999,
            overflow: 'hidden',
            border: '4px solid rgba(0,0,0,0.22)',
            boxShadow: '0 14px 0 rgba(0,0,0,0.08)',
            }}
            aria-hidden="true"
        >
            <div className="absolute inset-0" style={{ background: t.secondary }} />
            <div className="absolute inset-y-0 right-0 w-1/2" style={{ background: t.darkMain }} />
        </div>
        </div>

        {/* right year badge */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <div
            className="relative h-[210px] w-[105px] md:h-[240px] md:w-[120px]"
            style={{
            background: t.darkTertiary,
            borderTopLeftRadius: 9999,
            borderBottomLeftRadius: 9999,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            border: '4px solid rgba(0,0,0,0.22)',
            borderRight: 'none',
            boxShadow: '0 14px 0 rgba(0,0,0,0.08)',
            overflow: 'hidden',
            }}
        >
            <div
            className="absolute inset-0 flex items-center justify-center font-extrabold tracking-widest"
            style={{
                color: t.cream,
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
                fontSize: '35px',
            }}
            aria-label={`Year ${project.year}`}
            >
                {project.year}
            </div>
        </div>
        </div>

        <div className="relative z-10 pr-[80px] pl-[290px]">
            <h1 className="font-extrabold leading-none outlined-text"
                style={{ color: t.darkSecondary }}
            >
                {project.title}
            </h1>

            <h3 className="mt-3 font-bold outlined-text"
                style={{ color: t.darkTertiary, fontFamily: 'var(--font-space-grotesk), sans-serif' }}
            >
                {project.tagline}
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.slice(0, 6).map((tag) => (
                <span
                    key={tag}
                    className="rounded-full border-2 px-3 py-1 text-xs font-extrabold uppercase tracking-wider"
                    style={{
                    background: 'rgba(from var(--light-neutral) r g b / 0.65)',
                    borderColor: t.darkSecondary,
                    color: t.darkSecondary,
                    }}
                >
                    {tag}
                </span>
                ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
            {linkItems
              .filter((x) => x.href)
              .map((x) => (
                <LinkPill
                  key={x.key}
                  href={x.href as string}
                  label={x.label}
                  icon={x.icon}
                  accent={t.darkMain}
                />
              ))}

            {/* “other” links */}
            {project.links.other?.map((o) => (
              <LinkPill
                key={o.url}
                href={o.url}
                label={o.label}
                icon={<PiLinkSimpleBold />}
                accent={t.darkMain}
              />
            ))}
        </div>
        </div>
    </div>

    {/* ===== OVERVIEW PANEL ===== */}
    <div className="relative"
        style={{ background: t.cream }}
    >
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-0">
        {/* left stack */}
        <div className="border-r-0 md:border-r-4"
            style={{
            borderColor: 'rgba(0,0,0,0.18)',
            background:
                'repeating-linear-gradient(90deg, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 2px, transparent 2px, transparent 10px)',
            }}
        >
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1">
            <HalfCircleCard
                label="Team"
                value={project.team ?? 'Solo'}
                bg={t.tertiary}
                fg={t.cream}
                direction='down'
            />

            <HalfCircleCard
                label="Role"
                value={project.role}
                bg={t.darkMain}
                fg={t.cream}
                direction='up'
            />

            <HalfCircleCard
                label="Timeline"
                value={project.timeline}
                bg={t.secondary}
                fg={t.cream}
                direction='down'
            />
            </div>
        </div>

        {/* main overview text */}
        <div className="p-6 md:p-8">
            <div className="flex items-center gap-3">
            <h2
                className="text-3xl md:text-4xl font-extrabold"
                style={{ color: `${t.main}`, fontFamily: 'var(--font-subheading)' }}
            >
                Overview
            </h2>

            <span className="opacity-60" style={{ color: `${t.main}` }}>
                <PiStarFourFill className="text-2xl" />
            </span>
            </div>

            <p className="mt-4 max-w-3xl text-lg md:text-[1.15rem] leading-relaxed">
                {project.overview}
            </p>
        </div>
        </div>
    </div>
    </div>
  );
}
