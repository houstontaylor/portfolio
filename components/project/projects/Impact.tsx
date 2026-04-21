'use client';

import { motion } from 'framer-motion';
import { ProjectData } from '@/app/data/projects';
import {
  PiStarFourFill,
  PiChartLineUpBold,
  PiSparkleBold,
  PiLightbulbBold,
} from 'react-icons/pi';
import Bullet from '../../ui/Bullet';
import ProjSectionHeader from '@/components/ui/ProjSectionHeader';
import { colorMap } from '@/app/data/projects';

function StripeFill ( { tone = 'rgba(0,0,0,0.08)' }: { tone?: string } ) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-70"
      style={{
        background:
          `repeating-linear-gradient(90deg, ${tone} 0px, ${tone} 2px, transparent 2px, transparent 10px)`,
      }}
    />
  );
}

function CornerShapes ( { a, b }: { a: string; b: string } ) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {/* top-left quarter circle */}
      <div
        className="absolute left-[-44px] top-[-44px] h-[130px] w-[130px] rounded-full border-4 opacity-80"
        style={{ background: a, borderColor: 'rgba(0,0,0,0.22)' }}
      />
      <div
        className="absolute left-[-44px] top-[-44px] h-[130px] w-[130px] rounded-full"
        style={{
          background: 'transparent',
          boxShadow: 'inset 0 0 0 14px rgba(255,255,255,0.25)',
        }}
      />

      {/* bottom-right half circle */}
      <div
        className="absolute bottom-[-56px] right-[-56px] h-[170px] w-[170px] rounded-full border-4 opacity-50"
        style={{ background: b, borderColor: 'rgba(0,0,0,0.22)' }}
      />
      <div
        className="absolute bottom-[-56px] right-[-56px] h-[170px] w-[170px] rounded-full"
        style={{
          background: 'transparent',
          boxShadow: 'inset 0 0 0 16px rgba(0,0,0,0.10)',
        }}
      />
    </div>
  );
}

function ImpactPanel ( {
  title,
  subtitle,
  icon,
  items,
  bg,
  accent,
  accentSoft,
  motif = 'stripes',
}: {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  items: string[];
  bg: string;
  accent: string;
  accentSoft: string;
  motif?: 'stripes' | 'clean';
} ) {
  return (
    <div
      className="relative overflow-hidden rounded-[24px] border-4 p-6 shadow-[0_14px_0_rgba(0,0,0,0.08)]"
      style={{
        background: bg,
        borderColor: 'rgba(0,0,0,0.22)',
      }}
    >
      {motif === 'stripes' ? <StripeFill /> : null}
      <CornerShapes a={accentSoft} b={accent} />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border-4"
                style={{
                  background: 'rgba(255,255,255,0.55)',
                  borderColor: 'rgba(0,0,0,0.22)',
                  color: accent,
                }}
                aria-hidden="true"
              >
                <span className="text-xl">{icon}</span>
              </span>

              <h3
                className="text-2xl md:text-3xl font-extrabold pl-4"
                style={{ color: 'var(--foreground)', fontFamily: 'var(--font-subheading)' }}
              >
                {title}
              </h3>
            </div>

            {subtitle ? (
              <p className="mt-4 ml-4 text-sm font-bold uppercase tracking-widest opacity-70">
                {subtitle}
              </p>
            ) : null}
          </div>

          <span className="opacity-75" style={{ color: accent }} aria-hidden="true">
            <PiStarFourFill className="text-3xl" />
          </span>
        </div>

        <ul className="mt-5 space-y-4">
          {items.map((x, i) => (
            <Bullet
              key={`${title}-${i}`}
              tone={i % 3 === 0 ? accent : i % 3 === 1 ? accentSoft : 'rgba(0,0,0,0.35)'}
              lightTone="rgba(255,255,255,0.65)"
              innerCircleIndex={i % 3}
            >
              {x}
            </Bullet>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Impact ( { project }: { project: ProjectData } ) {
  const t = colorMap[project.color];

  const metrics = project.impact?.metrics ?? [];
  const outcomes = project.impact?.outcomes ?? [];
  const lessons = project.impact?.lessonsLearned ?? [];

  // If a project has *no* impact content yet, don’t render
  if (metrics.length === 0 && outcomes.length === 0 && lessons.length === 0) {
    return null;
  }

  return (
    <motion.section
      id="impact"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="scroll-mt-10"
    >
      <div
        className="overflow-hidden rounded-[28px] border-4 shadow-[0_18px_0_rgba(0,0,0,0.08)]"
        style={{ background: t.cream, borderColor: 'rgba(0,0,0,0.22)' }}
      >
        {/* header band */}
        <div className="relative px-7 py-7 md:px-10 md:py-9" style={{ background: 'var(--neutral)' }}>
          <ProjSectionHeader
            title='Impact'
            subtitle='results • reflections'
            accent={t.darkMain}
          />

          <div className="mt-4 h-[10px] w-full rounded-full border-4"
            style={{
              borderColor: 'rgba(0,0,0,0.18)',
              background:
                `linear-gradient(90deg, ${t.tertiary} 0%, ${t.secondary} 50%, ${t.main} 100%)`,
              boxShadow: '0 10px 0 rgba(0,0,0,0.08)',
            }}
            aria-hidden="true"
          />
        </div>

        {/* content */}
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {metrics.length > 0 ? (
              <ImpactPanel
                title="Metrics"
                subtitle="numbers / milestones"
                icon={<PiChartLineUpBold />}
                items={metrics}
                bg="rgba(255,255,255,0.55)"
                accent={t.secondary}
                accentSoft={t.darkSecondary}
                motif="stripes"
              />
            ) : null}

            {outcomes.length > 0 ? (
              <ImpactPanel
                title="Outcomes"
                subtitle="what changed"
                icon={<PiSparkleBold />}
                items={outcomes}
                bg="rgba(255,255,255,0.55)"
                accent={t.main}
                accentSoft={t.darkMain}
                motif="clean"
              />
            ) : null}

            {lessons.length > 0 ? (
              <ImpactPanel
                title="Lessons"
                subtitle="what I’d do next"
                icon={<PiLightbulbBold />}
                items={lessons}
                bg="rgba(255,255,255,0.55)"
                accent={t.tertiary}
                accentSoft={t.darkTertiary}
                motif="stripes"
              />
            ) : null}
          </div>
        </div>
      </div>
    </motion.section>
  );
}