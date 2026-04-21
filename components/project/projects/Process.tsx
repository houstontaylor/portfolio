'use client';

import { ProjectData } from '@/app/data/projects';
import ProjSectionHeader from '@/components/ui/ProjSectionHeader';
import { colorMap } from '@/app/data/projects';

function SquiggleCap({
  fg,
  bg,
}: {
  fg: string;
  bg: string;
}) {
  return (
    <div className="relative h-[64px] w-full overflow-hidden border-b-4"
      style={{ borderColor: 'rgba(0,0,0,0.22)', background: bg }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="
            M0,60
            C75,10 125,10 200,60
            C275,110 325,110 400,60
            C475,10 525,10 600,60
            C675,110 725,110 800,60
            C875,10 925,10 1000,60
            C1075,110 1125,110 1200,60
          "
          fill="none"
          stroke={fg}
          strokeWidth="16"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="
            M0,60
            C75,10 125,10 200,60
            C275,110 325,110 400,60
            C475,10 525,10 600,60
            C675,110 725,110 800,60
            C875,10 925,10 1000,60
            C1075,110 1125,110 1200,60
          "
          fill="none"
          stroke="rgba(0,0,0,0.22)"
          strokeWidth="6"
          strokeLinecap="round"
          transform="translate(0 10)"
          opacity="0.35"
        />
      </svg>
    </div>
  );
}

function TopoTexture({ stroke }: { stroke: string }) {
  return (
    <svg
      viewBox="0 0 900 280"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {Array.from({ length: 9 }).map((_, i) => {
        const inset = 18 + i * 10;
        return (
          <rect
            key={i}
            x={inset}
            y={inset}
            width={900 - inset * 2}
            height={280 - inset * 2}
            rx={70}
            ry={70}
            fill="transparent"
            stroke={stroke}
            strokeWidth={3}
            opacity={0.12}
          />
        );
      })}
    </svg>
  );
}

function SectionCard({
  title,
  body,
  fill,
  accent,
  textureStroke,
}: {
  title: string;
  body?: string;
  fill: string;
  accent: string;
  textureStroke: string;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-[26px] border-4 p-6 shadow-[0_16px_0_rgba(0,0,0,0.08)]"
      style={{
        background: fill,
        borderColor: 'rgba(0,0,0,0.22)',
      }}
    >
      <TopoTexture stroke={textureStroke} />

      {/* title chip */}
      <div className="relative z-10 inline-flex items-center gap-3">
        <span
          className="inline-block h-4 w-4 rounded-full border-4"
          style={{ background: accent, borderColor: 'rgba(0,0,0,0.22)' }}
          aria-hidden="true"
        />
        <h3
          className="text-2xl font-extrabold"
          style={{ color: 'var(--foreground)', fontFamily: 'var(--font-subheading)' }}
        >
          {title}
        </h3>
      </div>

      <div className="relative z-10 mt-4">
        {body ? (
          <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(0,0,0,0.78)' }}>
            {body}
          </p>
        ) : (
          <p className="text-base md:text-lg leading-relaxed opacity-60">
            —
          </p>
        )}
      </div>
    </div>
  );
}

function BulletListCard({
  title,
  items,
  fill,
  accent,
}: {
  title: string;
  items?: string[];
  fill: string;
  accent: string;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-[26px] border-4 p-6 shadow-[0_16px_0_rgba(0,0,0,0.08)]"
      style={{
        background: fill,
        borderColor: 'rgba(0,0,0,0.22)',
      }}
    >
      {/* subtle vertical pinstripes */}
      <div
        className="absolute inset-0 opacity-35"
        style={{
          background:
            'repeating-linear-gradient(90deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 2px, transparent 2px, transparent 12px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 inline-flex items-center gap-3">
        <span
          className="inline-block h-4 w-4 rounded-full border-4"
          style={{ background: accent, borderColor: 'rgba(0,0,0,0.22)' }}
          aria-hidden="true"
        />
        <h3
          className="text-2xl font-extrabold"
          style={{ color: 'var(--foreground)', fontFamily: 'var(--font-subheading)' }}
        >
          {title}
        </h3>
      </div>

      <div className="relative z-10 mt-4">
        {items && items.length ? (
          <ul className="space-y-3">
            {items.map((it) => (
              <li key={it} className="flex items-start gap-3">
                <span
                  className="mt-[6px] inline-block h-[10px] w-[10px] rounded-full"
                  style={{ background: 'rgba(0,0,0,0.55)' }}
                  aria-hidden="true"
                />
                <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(0,0,0,0.78)' }}>
                  {it}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-base md:text-lg opacity-60">—</p>
        )}
      </div>
    </div>
  );
}

function IterationStep({
  index,
  text,
  t,
}: {
  index: number;
  text: string;
  t: (typeof colorMap)[keyof typeof colorMap];
}) {
  const accents = [t.darkMain, t.darkSecondary, t.darkTertiary];
  const fills = [t.lightMain, t.secondary, t.tertiary];

  const accent = accents[index % accents.length];
  const fill = fills[index % fills.length];

  return (
    <div
      className="relative overflow-hidden rounded-[24px] border-4 p-5 md:p-6 shadow-[0_14px_0_rgba(0,0,0,0.08)]"
      style={{ background: fill, borderColor: 'rgba(0,0,0,0.22)' }}
    >
      {/* small “step badge” */}
      <div className="mb-3 flex items-center gap-3">
        <div
          className="h-10 w-10 rounded-full border-4 flex items-center justify-center font-extrabold"
          style={{ background: t.cream, borderColor: 'rgba(0,0,0,0.22)', color: 'rgba(0,0,0,0.75)' }}
          aria-hidden="true"
        >
          {index + 1}
        </div>

        <div className="h-[10px] flex-1 rounded-full border-4"
          style={{ background: 'rgba(255,255,255,0.35)', borderColor: 'rgba(0,0,0,0.22)' }}
          aria-hidden="true"
        />
        <div className="h-[10px] w-[46px] rounded-full"
          style={{ background: accent, opacity: 0.8 }}
          aria-hidden="true"
        />
      </div>

      <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(0,0,0,0.78)' }}>
        {text}
      </p>
    </div>
  );
}

export default function Process({ project }: { project: ProjectData }) {
  const t = colorMap[project.color];
  const p = project.process;

  // If there’s no process content, don’t render the section.
  if (!p || (!p.approach && !p.keyDecisions?.length && !p.constraints?.length && !p.iterations?.length)) {
    return null;
  }

  return (
    <section
      id="process"
      className="scroll-mt-10"
    >
      <div
        className="overflow-hidden rounded-[28px] border-4 shadow-[0_18px_0_rgba(0,0,0,0.08)]"
        style={{ background: t.cream, borderColor: 'rgba(0,0,0,0.18)' }}
      >
        {/* Top squiggle cap */}
        <SquiggleCap fg={t.darkMain} bg='var(--neutral)' />

        {/* Header */}
        <div className="relative px-6 pt-7 md:px-10 md:pt-9">
          <ProjSectionHeader
            title='Process'
            subtitle='approach • decisions • constraints • iterations'
            accent={t.darkSecondary}
          />

          {/* faint background rings */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-[260px] w-[260px] rounded-full border-4 opacity-20"
            style={{ borderColor: t.darkSecondary }}
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute right-10 top-10 h-[120px] w-[120px] rounded-full border-4 opacity-15"
            style={{ borderColor: t.darkTertiary }}
            aria-hidden="true"
          />
        </div>

        {/* 3-up grid */}
        <div className="px-6 pb-8 pt-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <SectionCard
              title="Approach"
              body={p.approach}
              fill={t.lightMain}
              accent={t.darkMain}
              textureStroke={t.darkMain}
            />

            <BulletListCard
              title="Key Decisions"
              items={p.keyDecisions}
              fill={t.secondary}
              accent={t.darkSecondary}
            />

            <BulletListCard
              title="Constraints"
              items={p.constraints}
              fill={t.tertiary}
              accent={t.darkTertiary}
            />
          </div>

          {/* Iterations */}
          {p.iterations && p.iterations.length ? (
            <div className="mt-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-4 w-4 rounded-full border-4"
                  style={{ background: t.darkSecondary, borderColor: 'rgba(0,0,0,0.22)' }}
                  aria-hidden="true"
                />
                <h3
                  className="text-3xl md:text-4xl font-extrabold"
                  style={{ color: t.darkSecondary, fontFamily: 'var(--font-subheading)' }}
                >
                  Iterations
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {p.iterations.map((it, idx) => (
                  <IterationStep key={`${it}-${idx}`} index={idx} text={it} t={t} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}