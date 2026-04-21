'use client';

import { ProjectData } from '@/app/data/projects';
import ProjSectionHeader from '@/components/ui/ProjSectionHeader';
import Image from 'next/image';
import { colorMap } from '@/app/data/projects';

function Frame({
  children,
  borderColor = 'rgba(0,0,0,0.28)',
  radius = 28,
  bg = 'var(--light-neutral)',
}: {
  children: React.ReactNode;
  borderColor?: string;
  radius?: number;
  bg?: string;
}) {
  return (
    <div
      className="relative overflow-hidden border-4 shadow-[0_18px_0_rgba(0,0,0,0.08)]"
      style={{
        borderColor,
        borderRadius: radius,
        background: bg,
      }}
    >
      {/* subtle inner “mat” */}
      <div
        className="pointer-events-none absolute inset-3 rounded-[22px] opacity-35"
        style={{ border: '3px solid rgba(255,255,255,0.65)' }}
        aria-hidden="true"
      />
      <div className="relative">{children}</div>
    </div>
  );
}

function PosterArt({
  accent,
  secondary,
  tertiary,
  ink,
}: {
  accent: string;
  secondary: string;
  tertiary: string;
  ink: string;
}) {
  // lightweight mid-century abstract “print” as SVG (easy to code, scales nicely)
  return (
    <svg viewBox="0 0 420 260" className="h-full w-full" aria-hidden="true">
      <rect x="0" y="0" width="420" height="260" fill="rgba(255,255,255,0.55)" />

      {/* organic blob */}
      <path
        d="M78 170 C40 132, 62 82, 122 76 C168 72, 192 94, 208 122 C228 158, 192 202, 140 206 C112 208, 92 196, 78 170 Z"
        fill={accent}
        opacity="0.85"
      />
      {/* bean */}
      <path
        d="M250 82 C286 56, 342 66, 356 104 C370 142, 328 176, 284 166 C244 156, 224 108, 250 82 Z"
        fill={secondary}
        opacity="0.75"
      />
      {/* ring */}
      <path
        d="M252 214
           C200 236, 144 212, 154 170
           C166 124, 236 124, 262 154
           C292 190, 282 202, 252 214 Z"
        fill="transparent"
        stroke={tertiary}
        strokeWidth="10"
        opacity="0.7"
      />
      {/* line doodles */}
      <path
        d="M38 44 L92 44 M38 58 L80 58 M38 72 L98 72"
        stroke={ink}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.25"
      />
      <circle cx="360" cy="212" r="10" fill={ink} opacity="0.25" />
      <path
        d="M318 216 C336 190, 380 190, 394 214"
        stroke={ink}
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.22"
        fill="none"
      />
    </svg>
  );
}

function FeatureCard({
  name,
  description,
  image,
  t,
  index,
}: {
  name: string;
  description: string;
  image?: string;
  t: (typeof colorMap)[keyof typeof colorMap];
  index: number;
}) {
  // rotate accent colors across features
  const accents = [t.main, t.secondary, t.tertiary, t.darkMain, t.darkSecondary, t.darkTertiary];
  const accent = accents[index % accents.length];
  const secondary = accents[(index + 2) % accents.length];
  const tertiary = accents[(index + 4) % accents.length];

  return (
    <div className="relative">
      <div
        className="absolute -left-2 -top-2 h-full w-full rounded-[26px]"
        style={{ background: accent, opacity: 0.18 }}
        aria-hidden="true"
      />

      <Frame bg="rgba(255,255,255,0.6)">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-0">
          {/* “print” / image slot */}
          <div className="relative border-b-4 md:border-b-0 md:border-r-4"
            style={{ borderColor: 'rgba(0,0,0,0.18)' }}
          >
            <div className="relative aspect-[7/5] md:aspect-auto md:h-full">
              {image ? (
                <Image
                  src={image}
                  alt={`${name} screenshot`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 220px"
                />
              ) : (
                <PosterArt accent={accent} secondary={secondary} tertiary={tertiary} ink={t.ink} />
              )}
            </div>

            {/* tiny “label chip” */}
            <div className="absolute left-4 top-4">
              <span
                className="inline-flex items-center rounded-full border-3 px-3 py-1 text-[0.78rem] font-extrabold uppercase tracking-widest shadow-[0_8px_0_rgba(0,0,0,0.10)]"
                style={{
                  background: t.cream,
                  borderColor: 'rgba(0,0,0,0.25)',
                  color: t.ink,
                }}
              >
                Feature
              </span>
            </div>
          </div>

          {/* copy */}
          <div className="p-6">
            <h3
              className="text-2xl font-extrabold leading-tight"
              style={{ color: t.ink, fontFamily: 'var(--font-subheading)' }}
            >
              {name}
            </h3>

            <p className="mt-3 text-[1.05rem] leading-relaxed" style={{ color: 'rgba(0,0,0,0.72)' }}>
              {description}
            </p>

            {/* decorative mini bars */}
            <div className="mt-5 flex items-center gap-2 opacity-60" aria-hidden="true">
              <span className="h-[10px] w-[42px] rounded-full" style={{ background: accent }} />
              <span className="h-[10px] w-[26px] rounded-full" style={{ background: secondary }} />
              <span className="h-[10px] w-[18px] rounded-full" style={{ background: tertiary }} />
              <span className="h-[10px] w-[10px] rounded-full" style={{ background: t.ink, opacity: 0.25 }} />
            </div>
          </div>
        </div>
      </Frame>
    </div>
  );
}

export default function Solution({ project }: { project: ProjectData }) {
  const t = colorMap[project.color];
  const features = project.solution?.features ?? [];
  const hasFinal = Boolean(project.solution?.finalIteration);

  return (
    <section id="solution" className="scroll-mt-10">
      <div
        className="rounded-[30px] border-4 p-6 md:p-8 shadow-[0_18px_0_rgba(0,0,0,0.08)]"
        style={{
          background: 'var(--neutral)',
          borderColor: 'rgba(0,0,0,0.25)',
        }}
      >
        {/* Header row */}
        <div className="flex flex-wrap items-end justify-between gap-3">
          <ProjSectionHeader
            title="Solution"
            subtitle="approach • key features"
            accent={t.darkTertiary}
          />

          {/* tiny mid-century “stamp” */}
          <div className="flex items-center gap-2">
            <span className="h-4 w-10 rounded-full" style={{ background: t.main, opacity: 0.9 }} />
            <span className="h-4 w-7 rounded-full" style={{ background: t.secondary, opacity: 0.9 }} />
            <span className="h-4 w-5 rounded-full" style={{ background: t.tertiary, opacity: 0.9 }} />
          </div>
        </div>

        {/* Approach (big framed block) */}
        <div className="mt-6">
          <Frame bg="rgba(255,255,255,0.55)">
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="inline-flex items-center rounded-full border-3 px-4 py-2 text-xs font-extrabold uppercase tracking-widest shadow-[0_10px_0_rgba(0,0,0,0.12)]"
                  style={{
                    background: t.main,
                    borderColor: 'rgba(0,0,0,0.25)',
                    color: t.cream,
                  }}
                >
                  Approach
                </span>

                <div className="h-[10px] w-[10px] rounded-full" style={{ background: t.ink, opacity: 0.25 }} />
                <div className="h-[10px] w-[22px] rounded-full" style={{ background: t.secondary, opacity: 0.75 }} />
                <div className="h-[10px] w-[34px] rounded-full" style={{ background: t.tertiary, opacity: 0.75 }} />
              </div>

              <p className="mt-5 text-[1.12rem] md:text-[1.2rem] leading-relaxed" style={{ color: 'rgba(0,0,0,0.75)' }}>
                {project.solution.approach}
              </p>
            </div>
          </Frame>
        </div>

        {/* Features “gallery wall” */}
        {features.length > 0 ? (
          <div className="mt-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {features.map((f, idx) => (
                <FeatureCard
                  key={`${f.name}-${idx}`}
                  name={f.name}
                  description={f.description}
                  image={f.image}
                  t={t}
                  index={idx}
                />
              ))}
            </div>
          </div>
        ) : null}

        {/* Final Iteration */}
        {hasFinal ? (
          <div className="mt-10">
            <Frame bg="rgba(255,255,255,0.55)">
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl md:text-3xl font-extrabold" style={{ color: t.ink }}>
                    Final iteration
                  </h3>

                  <span
                    className="inline-flex items-center rounded-full border-3 px-4 py-2 text-xs font-extrabold uppercase tracking-widest shadow-[0_10px_0_rgba(0,0,0,0.12)]"
                    style={{
                      background: t.darkSecondary,
                      borderColor: 'rgba(0,0,0,0.25)',
                      color: t.cream,
                    }}
                  >
                    Shipped / polished
                  </span>
                </div>

                {project.solution.finalIteration?.description ? (
                  <p className="mt-4 text-[1.08rem] leading-relaxed" style={{ color: 'rgba(0,0,0,0.75)' }}>
                    {project.solution.finalIteration.description}
                  </p>
                ) : null}

                {/* image strip */}
                {project.solution.finalIteration?.images?.length ? (
                  <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {project.solution.finalIteration.images.map((src, i) => (
                      <div
                        key={`${src}-${i}`}
                        className="relative overflow-hidden rounded-[22px] border-4 shadow-[0_14px_0_rgba(0,0,0,0.10)]"
                        style={{ borderColor: 'rgba(0,0,0,0.22)', background: 'rgba(255,255,255,0.55)' }}
                      >
                        <div className="relative aspect-[16/9]">
                          <Image
                            src={src}
                            alt={`Final iteration image ${i + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </Frame>
          </div>
        ) : null}
      </div>
    </section>
  );
}