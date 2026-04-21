'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProjectData } from '@/app/data/projects';
import ProjSectionHeader from '@/components/ui/ProjSectionHeader';
import { colorMap } from '@/app/data/projects';

function ResearchList({
  items,
  bulletColor,
}: {
  items?: string[];
  bulletColor: string;
}) {
  if (!items || items.length === 0) {
    return <p className="opacity-75">Add content for this section in your project data.</p>;
  }

  return (
    <ul className="mt-4 space-y-3">
      {items.map((item, i) => (
        <li key={`${item}-${i}`} className="flex items-start gap-3">
          <span
            className="mt-2 h-3 w-3 shrink-0 rounded-full"
            style={{ background: bulletColor }}
            aria-hidden="true"
          />
          <p className="leading-relaxed">{item}</p>
        </li>
      ))}
    </ul>
  );
}

function BauhausCornerLines({
  color,
  corner = 'tl',
  opacity = 0.18,
}: {
  color: string;
  corner?: 'tl' | 'tr' | 'bl' | 'br';
  opacity?: number;
}) {
  const rotate =
    corner === 'tl'
      ? '0deg'
      : corner === 'tr'
        ? '90deg'
        : corner === 'br'
          ? '180deg'
          : '270deg';

  return (
    <svg
      aria-hidden="true"
      className="absolute h-[220px] w-[220px]"
      viewBox="0 0 220 220"
      style={{
        transform: `rotate(${rotate})`,
        opacity,
      }}
    >
      {[0, 1, 2, 3].map((i) => {
        const inset = i * 34;
        return (
          <path
            key={i}
            d={`
              M ${0 + inset} ${160 - inset}
              L ${0 + inset} ${0 + inset}
              L ${160 - inset} ${0 + inset}
            `}
            fill="none"
            stroke={color}
            strokeWidth="22"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      })}
    </svg>
  );
}

function BauhausBand({
  title,
  items,
  bg,
  accent,
  curve = 'left',
}: {
  title: string;
  items?: string[];
  bg: string;
  accent: string;
  curve?: 'left' | 'right';
}) {
  return (
    <div
      className="relative overflow-hidden border-4 shadow-[0_14px_0_rgba(0,0,0,0.08)]"
      style={{
        background: bg,
        borderColor: 'rgba(0,0,0,0.18)',
        borderTopLeftRadius: curve === 'left' ? '8rem' : '2rem',
        borderBottomLeftRadius: curve === 'left' ? '0rem' : '2rem',
        borderTopRightRadius: curve === 'right' ? '8rem' : '2rem',
        borderBottomRightRadius: curve === 'right' ? '0rem' : '2rem',
      }}
    >
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-20"
        style={{
          background:
            'repeating-linear-gradient(90deg, rgba(255,255,255,0.22) 0 8px, transparent 8px 24px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 p-6 md:p-8 lg:p-10">
        <h3 style={{ color: accent }}>{title}</h3>
        <ResearchList items={items} bulletColor={accent} />
      </div>
    </div>
  );
}

function MarketTile({
  image,
  tone,
  shape = 'mixed',
}: {
  image?: string;
  tone: {
    bg: string;
    accentA: string;
    accentB: string;
    accentC: string;
  };
  shape?: 'mixed' | 'image';
}) {
  return (
    <div
      className="relative overflow-hidden rounded-[24px] border-4 shadow-[0_12px_0_rgba(0,0,0,0.08)] min-h-[210px]"
      style={{
        background: tone.bg,
        borderColor: 'rgba(0,0,0,0.15)',
      }}
    >
      {image && shape === 'image' ? (
        <div className="relative h-full min-h-[210px] w-full">
          <Image src={image} alt="" fill className="object-cover" />
        </div>
      ) : (
        <div className="relative flex h-full min-h-[210px] items-center justify-center">
          <div
            className="absolute h-16 w-16 rounded-full border-[14px]"
            style={{
              borderColor: tone.accentA,
              left: '24%',
              top: '56%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          <div
            className="absolute h-16 w-16 border-[12px]"
            style={{
              borderColor: tone.accentB,
              left: '66%',
              top: '56%',
              transform: 'translate(-50%, -50%)',
              borderRadius: '12px',
            }}
          />
          <div
            className="absolute h-14 w-14"
            style={{
              left: '47%',
              top: '33%',
              transform: 'translate(-50%, -50%)',
              clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
              border: `12px solid ${tone.accentC}`,
              background: 'transparent',
              boxSizing: 'border-box',
            }}
          />
        </div>
      )}
    </div>
  );
}

function MarketResearchRow({
  items,
  images,
  titleColor,
  bulletColor,
  textBg,
  tileTone,
}: {
  items?: string[];
  images?: string[];
  titleColor: string;
  bulletColor: string;
  textBg: string;
  tileTone: {
    bg: string;
    accentA: string;
    accentB: string;
    accentC: string;
  };
}) {
  const visibleImages = (images ?? []).slice(0, 3);
  const imageCount = visibleImages.length;

  const gridClass =
    imageCount === 0
      ? 'grid-cols-1'
      : imageCount === 1
        ? 'grid-cols-1 lg:grid-cols-[1.35fr_0.85fr]'
        : imageCount === 2
          ? 'grid-cols-1 lg:grid-cols-[1.15fr_0.85fr_0.85fr]'
          : 'grid-cols-1 lg:grid-cols-[1.05fr_0.72fr_0.72fr_0.72fr]';

  return (
    <div className={`grid gap-5 ${gridClass}`}>
      <div
        className="rounded-[28px] border-4 p-6 shadow-[0_12px_0_rgba(0,0,0,0.08)]"
        style={{
          background: textBg,
          borderColor: 'rgba(0,0,0,0.15)',
        }}
      >
        <h3 style={{ color: titleColor }}>Market Research</h3>
        <ResearchList items={items} bulletColor={bulletColor} />
      </div>

      {visibleImages.map((image, i) => (
        <MarketTile
          key={`${image}-${i}`}
          image={image}
          shape="image"
          tone={tileTone}
        />
      ))}
    </div>
  );
}

export default function Research({ project }: { project: ProjectData }) {
  const t = colorMap[project.color];

  const interviews = project.research?.interviews ?? [];
  const market = project.research?.marketResearch ?? [];
  const analysis = project.research?.analysis ?? [];
  const marketImages = project.images?.slice(0, 3) ?? [];

  if (interviews.length === 0 && market.length === 0 && analysis.length === 0) {
    return null;
  }

  return (
    <motion.section
      id="research"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="scroll-mt-10"
    >
      <div
        className="relative overflow-hidden rounded-[30px] border-4 shadow-[0_18px_0_rgba(0,0,0,0.08)]"
        style={{
          background: 'var(--neutral)',
          borderColor: 'rgba(0,0,0,0.22)',
        }}
      >
        <div className="relative px-7 py-7 md:px-10" style={{ background: 'rgba(0,0,0,0.04)' }}>
          <ProjSectionHeader
            title="Research"
            subtitle="discovery • synthesis"
            accent={t.darkMain}
          />
        </div>

        <div className="relative px-6 pb-8 pt-6 md:px-8 lg:px-10">
          <div className="pointer-events-none absolute left-0 top-6">
            <BauhausCornerLines color={t.darkSecondary} corner="tl" />
          </div>
          <div className="pointer-events-none absolute right-0 bottom-0">
            <BauhausCornerLines color={t.darkMain} corner="br" />
          </div>

          <div className="relative z-10 space-y-8">
            <BauhausBand
              title="User Interviews"
              items={interviews}
              bg={t.lightSecondary}
              accent={t.darkSecondary}
              curve="left"
            />

            <MarketResearchRow
              items={market}
              images={marketImages}
              titleColor={t.darkTertiary}
              bulletColor={t.darkTertiary}
              textBg={t.cream}
              tileTone={{
                bg: 'rgba(255,255,255,0.65)',
                accentA: t.main,
                accentB: t.tertiary,
                accentC: t.secondary,
              }}
            />

            <BauhausBand
              title="Analysis"
              items={analysis}
              bg={t.lightMain}
              accent={t.darkMain}
              curve="right"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}