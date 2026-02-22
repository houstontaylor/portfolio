'use client';

import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { PiArrowLeftBold } from 'react-icons/pi';
import { getProjectBySlug, } from '../../data/projects';
import Link from 'next/link';
import ScrollToTop from '@/components/ScrollToTop';
import SideNav from '@/components/SideNav';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Overview from '@/components/projects/Overview';
import Problem from '@/components/projects/Problem';
import Research from '@/components/projects/Research';
import Process from '@/components/projects/Process';
import Solution from '@/components/projects/Solution';
import Impact from '@/components/projects/Impact';

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
    neutral: {
      bg: 'bg-light-neutral',
      border: 'border-dark-neutral',
      text: 'var(--dark-neutral)',
      solid: 'bg-dark-neutral',
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
          className="mb-4 scroll-mt-4"
        >
          <Overview project={project} />
        </motion.section>

        {/* ===== PROBLEM SECTION ===== */}
        <motion.section
          id="problem"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 scroll-mt-4"
        >
          <Problem project={project} />
        </motion.section>

        {/* ===== RESEARCH (and USER INSIGHTS) ===== */}
        <motion.section
          id="research"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 scroll-mt-4"
        >
          {/*<Research project={project} />*/}
        </motion.section>

        {/* ===== DESIGN PROCESS ===== */}
        <motion.section
          id="process"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 scroll-mt-4"
        >

        </motion.section>

        {/* ===== SOLUTION (and KEY FEATURES) ===== */}
        <motion.section
          id="solution"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 scroll-mt-4"
        >

        </motion.section>

        {/* ===== IMPACT (and RELATED PROJECTS) ===== */}
        <motion.section
          id="impact"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 scroll-mt-4"
        >

        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
