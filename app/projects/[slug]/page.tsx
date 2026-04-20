'use client';

import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { PiArrowLeftBold, PiStarFourFill } from 'react-icons/pi';
import { getProjectBySlug, } from '../../data/projects';
import Link from 'next/link';
import ScrollToTop from '@/components/ui/ScrollToTop';
import SideNav from '@/components/ui/SideNav';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Overview from '@/components/project/projects/Overview';
import Problem from '@/components/project/projects/Problem';
import Research from '@/components/project/projects/Research';
import Process from '@/components/project/projects/Process';
import Solution from '@/components/project/projects/Solution';
import Impact from '@/components/project/projects/Impact';
import { getProjectsByIds } from '../../data/projects';
import TrapezoidCard from '@/components/project/projects/TrapezoidCard';
import ProjSectionHeader from '@/components/ui/ProjSectionHeader';

export default function ProjectDetailPage ( { params }: { params: Promise<{ slug: string }> } ) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'problem', label: 'Problem' },
    { id: 'research', label: 'Research' },
    { id: 'process', label: 'Process' },
    { id: 'solution', label: 'Solution' },
    { id: 'impact', label: 'Impact' },
  ];

  const colorMap = {
    pink: {
      bg: 'bg-light-pink',
      border: 'border-dark-pink',
      text: 'var(--dark-pink)',
      solid: 'bg-dark-pink',
    },
    teal: {
      bg: 'bg-light-teal',
      border: 'border-dark-teal',
      text: 'var(--dark-teal)',
      solid: 'bg-dark-teal',
    },
    green: {
      bg: 'bg-light-green',
      border: 'border-dark-green',
      text: 'var(--dark-green)',
      solid: 'bg-dark-green',
    },
  } as const;
  const colors = colorMap[project.color];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SideNav sections={sections} />
      <ScrollToTop />

      <main className="relative pt-8 pb-8 px-8 max-w-6xl mx-auto">
        {/* ===== BACK BUTTON ===== */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 rounded-full border-3 bg-[color:var(--light-neutral)] px-5 py-2 text-base font-bold uppercase tracking-wider transition-all hover:-translate-y-[1px] hover:shadow-lg"
            style={{ borderColor: colors.text, color: colors.text }}
          >
            <PiArrowLeftBold />
            Back to Projects
          </Link>
        </motion.div>

        {/* ===== OVERVIEW SECTION ===== */}
        <motion.section
          id="overview"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 scroll-mt-4"
        >
          <Overview project={project} />
        </motion.section>

        {/* ===== PROBLEM SECTION ===== */}
        <motion.section
          id="problem"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 scroll-mt-4"
        >
          <Problem project={project} />
        </motion.section>

        {/* ===== RESEARCH (and USER INSIGHTS) ===== */}
        <motion.section
          id="research"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 scroll-mt-4"
        >
          <Research project={project} />
        </motion.section>

        {/* ===== DESIGN PROCESS ===== */}
        <motion.section
          id="process"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 scroll-mt-4"
        >
          <Process project={project} />
        </motion.section>

        {/* ===== SOLUTION (and KEY FEATURES) ===== */}
        <motion.section
          id="solution"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 scroll-mt-4"
        >
          <Solution project={project} />
        </motion.section>

        {/* ===== IMPACT (and RELATED PROJECTS) ===== */}
        <motion.section
          id="impact"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 scroll-mt-4"
        >
          <Impact project={project} />
        </motion.section>

        {/* ===== RELATED PROJECTS ===== */}
        <motion.section
          id="related"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mt-2"
        >
          <div
            className="overflow-hidden rounded-[28px] border-4 shadow-[0_18px_0_rgba(0,0,0,0.08)]"
            style={{
              background: 'var(--neutral)',
              borderColor: 'rgba(0,0,0,0.22)',
            }}
          >
            {/* Header band */}
            <div
              className="relative px-6 py-6 md:px-8 md:py-7"
              style={{
                background: 'var(--light-neutral)',
              }}
            >
              {/* subtle geometric motif */}
              <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true">
                <svg viewBox="0 0 900 160" className="h-full w-full" preserveAspectRatio="none">
                  {Array.from({ length: 10 }).map((_, i) => {
                    const x = 40 + i * 84;
                    const y = (i % 2) * 26 + 38;
                    const w = 64;
                    const h = 60;
                    return (
                      <rect
                        key={i}
                        x={x}
                        y={y}
                        width={w}
                        height={h}
                        rx={10}
                        fill="transparent"
                        stroke="var(--foreground)"
                        strokeWidth={4}
                      />
                    );
                  })}
                </svg>
              </div>

              <div className="relative flex items-end justify-between gap-4">
                <ProjSectionHeader
                  title='Related Projects'
                  subtitle='A few things to peek at next'
                  accent='var(--foreground)'
                />

                <Link
                  href="/projects"
                  className="hidden md:inline-flex items-center gap-2 rounded-full border-3 px-5 py-2 text-sm font-extrabold uppercase tracking-wider shadow-[0_10px_0_rgba(0,0,0,0.10)] hover:-translate-y-[1px] hover:shadow-[0_14px_0_rgba(0,0,0,0.10)] transition-all"
                  style={{
                    background: 'var(--dark-neutral)',
                    borderColor: 'rgba(0,0,0,0.22)',
                    color: 'var(--foreground)',
                  }}
                >
                  Browse all
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Body */}
            <div className="px-6 pb-7 pt-5 md:px-8 md:pb-9">
              {project.relatedProjects?.length ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
                  {getProjectsByIds(project.relatedProjects ?? []).map((p) => (
                    <TrapezoidCard
                      key={p.id}
                      project={{
                        id: p.id,
                        title: p.title,
                        tagline: p.tagline,
                        tags: p.tags,
                        href: `/projects/${p.slug}`,
                        number: String(p.id).padStart(2, '0'),
                        tone: p.color,
                        size: 'small',
                      }}
                    />
                  ))}
                </div>
              ) : (
                <div
                  className="rounded-2xl border-3 p-6 text-center"
                  style={{ borderColor: 'rgba(0,0,0,0.18)', background: 'rgba(255,255,255,0.55)' }}
                >
                  <p className="text-lg font-extrabold" style={{ color: 'var(--foreground)' }}>
                    More projects coming soon!
                  </p>
                  <p className="mt-1 text-sm font-semibold opacity-75">
                    I’ll link related work here as I add more case studies.
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
