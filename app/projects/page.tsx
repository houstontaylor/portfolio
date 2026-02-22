'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import TrapezoidCard from '../../components/projects/TrapezoidCard';
import { projectsData } from '../data/projects';
import { PiStarFourFill } from 'react-icons/pi';
import { RiSearchLine } from 'react-icons/ri';
import { MdClose } from 'react-icons/md';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import { HiChevronDown } from 'react-icons/hi';

// --- Synonym map: user types any of these → matched tag ---
const SYNONYM_MAP: Record<string, string> = {
  'artificial intelligence': 'AI/ML',
  'machine learning': 'AI/ML',
  'ai': 'AI/ML',
  'ml': 'AI/ML',
  'deep learning': 'AI/ML',
  'neural': 'AI/ML',
  'ux': 'UI/UX',
  'user experience': 'UI/UX',
  'user interface': 'UI/UX',
  'design': 'UI/UX',
  'a11y': 'Accessibility',
  'accessible': 'Accessibility',
  'game': 'Game Design',
  'gaming': 'Game Design',
  'unity': 'Game Design',
  'js': 'React',
  'javascript': 'React',
  'jsx': 'React',
  'frontend': 'React',
  'front-end': 'React',
};

// Resolve a query to an expanded set of tag matches
function resolveQuery(query: string): string[] {
  const q = query.toLowerCase().trim();
  const synonymTag = SYNONYM_MAP[q];
  return synonymTag ? [q, synonymTag.toLowerCase()] : [q];
}

// Atomic starburst SVG positions (scattered, varied sizes)
const STARBURSTS = [
  { x: '4%',  y: '6%',  size: 28, spokes: 8,  opacity: 0.07 },
  { x: '18%', y: '2%',  size: 18, spokes: 8,  opacity: 0.06 },
  { x: '38%', y: '8%',  size: 22, spokes: 8,  opacity: 0.05 },
  { x: '62%', y: '3%',  size: 32, spokes: 8,  opacity: 0.08 },
  { x: '80%', y: '7%',  size: 20, spokes: 8,  opacity: 0.06 },
  { x: '95%', y: '4%',  size: 24, spokes: 8,  opacity: 0.07 },
  { x: '2%',  y: '22%', size: 16, spokes: 8,  opacity: 0.05 },
  { x: '88%', y: '18%', size: 28, spokes: 8,  opacity: 0.07 },
  { x: '50%', y: '15%', size: 14, spokes: 8,  opacity: 0.04 },
  { x: '10%', y: '38%', size: 26, spokes: 8,  opacity: 0.06 },
  { x: '75%', y: '35%', size: 20, spokes: 8,  opacity: 0.05 },
  { x: '92%', y: '45%', size: 18, spokes: 8,  opacity: 0.06 },
  { x: '28%', y: '55%', size: 30, spokes: 8,  opacity: 0.07 },
  { x: '58%', y: '52%', size: 16, spokes: 8,  opacity: 0.05 },
  { x: '5%',  y: '65%', size: 22, spokes: 8,  opacity: 0.06 },
  { x: '85%', y: '62%', size: 26, spokes: 8,  opacity: 0.07 },
  { x: '43%', y: '72%', size: 18, spokes: 8,  opacity: 0.05 },
  { x: '15%', y: '80%', size: 24, spokes: 8,  opacity: 0.06 },
  { x: '70%', y: '78%', size: 20, spokes: 8,  opacity: 0.05 },
  { x: '93%', y: '85%', size: 28, spokes: 8,  opacity: 0.07 },
  { x: '33%', y: '88%', size: 16, spokes: 8,  opacity: 0.04 },
  { x: '55%', y: '92%', size: 22, spokes: 8,  opacity: 0.06 },
  { x: '8%',  y: '94%', size: 18, spokes: 8,  opacity: 0.05 },
];

function AtomicStarburst({
  size,
  spokes,
  opacity,
}: {
  size: number;
  spokes: number;
  opacity: number;
}) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.12;
  const len = size * 0.38;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ opacity, display: 'block' }}
      aria-hidden="true"
    >
      <circle cx={cx} cy={cy} r={r} fill="var(--dark-green)" />
      {Array.from({ length: spokes }).map((_, i) => {
        const angle = (i * 360) / spokes;
        const rad = (angle * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={cx + len * Math.cos(rad)}
            y2={cy + len * Math.sin(rad)}
            stroke="var(--dark-green)"
            strokeWidth={size * 0.07}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [showAllFilters, setShowAllFilters] = useState(false);

  // Featured filter categories
  const featuredFilters = ['All', 'AI/ML', 'UI/UX', 'Accessibility', 'Game Design', 'React'];

  // Get unique tags
  const allTags = useMemo(
    () => Array.from(new Set(projectsData.flatMap((p) => p.tags))).sort(),
    []
  );
  const additionalFilters = allTags.filter((tag) => !featuredFilters.includes(tag));

  // Filter projects with synonym-aware search
  const filteredProjects = useMemo(() => {
    const terms = resolveQuery(searchQuery);
    return projectsData.filter((project) => {
      const matchesSearch =
        searchQuery === '' ||
        terms.some(
          (term) =>
            project.title.toLowerCase().includes(term) ||
            project.tagline.toLowerCase().includes(term) ||
            project.tags.some((tag) => tag.toLowerCase().includes(term))
        );
      const matchesFilter = activeFilter === 'All' || project.tags.includes(activeFilter);
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  // Whether any synonym hint should show
  const synonymHint = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    const mapped = SYNONYM_MAP[q];
    if (mapped && mapped !== q) return mapped;
    return null;
  }, [searchQuery]);

  const hasActiveFilter = activeFilter !== 'All' || searchQuery !== '';

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* ── Atomic starburst background ── */}
      <div
        className="pointer-events-none fixed inset-0 w-full h-full"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      >
        {STARBURSTS.map((s, i) => (
          <div
            key={i}
            style={{ position: 'absolute', left: s.x, top: s.y }}
          >
            <AtomicStarburst size={s.size} spokes={s.spokes} opacity={s.opacity} />
          </div>
        ))}
      </div>

      <div className="relative" style={{ zIndex: 1 }}>
        <Header />
        <ScrollToTop />

        <main className="pt-8 pb-16 px-8 max-w-7xl mx-auto">
          {/* ── Header SVG ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex justify-center"
          >
            <Image
              src="/projects/projects.svg"
              alt="Projects"
              width={800}
              height={200}
              className="w-3/5 h-auto"
            />
          </motion.div>

          {/* ── Search Bar ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <div className="max-w-2xl mx-auto relative">
              {/* Left starburst accent */}
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 opacity-30 hidden lg:block">
                <AtomicStarburst size={30} spokes={8} opacity={1} />
              </div>

              <div className="relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl pointer-events-none"
                  style={{ color: 'var(--dark-green)' }}>
                  <RiSearchLine />
                </span>
                <input
                  type="text"
                  placeholder="Search by title, description, or tags…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 text-lg border-4 border-dark-green rounded-full focus:outline-none focus:shadow-lg transition-all"
                  style={{ background: 'var(--light-neutral)' }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-xl transition-colors hover:opacity-70"
                    style={{ color: 'var(--dark-green)' }}
                    aria-label="Clear search"
                  >
                    <MdClose />
                  </button>
                )}
              </div>

              {/* Right boomerang accent */}
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 opacity-30 hidden lg:block">
                <svg width="40" height="20" viewBox="0 0 40 20">
                  <path
                    d="M 0 10 Q 12 0, 24 10 Q 36 20, 40 10"
                    fill="none"
                    stroke="var(--dark-green)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Synonym hint */}
            <AnimatePresence>
              {synonymHint && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="max-w-2xl mx-auto mt-2 px-4"
                >
                  <p className="text-sm" style={{ color: 'var(--dark-green)' }}>
                    Also showing results for{' '}
                    <button
                      onClick={() => setActiveFilter(synonymHint)}
                      className="font-bold underline underline-offset-2 hover:opacity-70 transition-opacity"
                    >
                      {synonymHint}
                    </button>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── Filter Toggle ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-6 flex justify-center"
          >
            <motion.button
              onClick={() => setShowFilters(!showFilters)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-3 font-bold text-sm uppercase tracking-wider transition-all"
              style={{
                background: showFilters ? 'var(--green)' : 'var(--light-neutral)',
                borderColor: 'var(--dark-green)',
                color: showFilters ? 'white' : 'var(--dark-green)',
              }}
            >
              <TbAdjustmentsHorizontal className="text-lg" />
              Filter by Category
              <motion.span
                animate={{ rotate: showFilters ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="text-base"
              >
                <HiChevronDown />
              </motion.span>
              {activeFilter !== 'All' && (
                <span
                  className="ml-1 w-2 h-2 rounded-full"
                  style={{ background: 'var(--dark-green)', opacity: showFilters ? 0.6 : 1 }}
                />
              )}
            </motion.button>
          </motion.div>

          {/* ── Filter Panel (collapsible) ── */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mb-8"
              >
                <div
                  className="max-w-3xl mx-auto rounded-2xl border-4 p-6 shadow-md"
                  style={{ background: 'var(--light-neutral)', borderColor: 'var(--dark-green)' }}
                >
                  {/* Featured filters */}
                  <div className="flex flex-wrap justify-center gap-3 mb-4">
                    {featuredFilters.map((filter, index) => {
                      const isActive = activeFilter === filter;
                      return (
                        <motion.button
                          key={filter}
                          onClick={() => setActiveFilter(filter)}
                          initial={{ opacity: 0, scale: 0.85 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.04 }}
                          whileHover={{ scale: 1.08, rotate: 2 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border-3 font-bold text-sm uppercase tracking-wider transition-all"
                          style={{
                            background: isActive ? 'var(--green)' : 'white',
                            borderColor: isActive ? 'var(--dark-green)' : 'var(--neutral)',
                            color: isActive ? 'white' : 'var(--dark-green)',
                            boxShadow: isActive ? '0 2px 8px rgba(0,0,0,0.15)' : 'none',
                          }}
                        >
                          {filter}
                          {isActive && (
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                              className="text-xs"
                            >
                              <PiStarFourFill />
                            </motion.span>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* More filters toggle */}
                  <div className="text-center mb-3">
                    <button
                      onClick={() => setShowAllFilters(!showAllFilters)}
                      className="text-xs font-bold uppercase tracking-wider opacity-60 hover:opacity-100 transition-opacity inline-flex items-center gap-1"
                      style={{ color: 'var(--dark-green)' }}
                    >
                      {showAllFilters ? 'Fewer filters' : `More filters (${additionalFilters.length})`}
                      <motion.span
                        animate={{ rotate: showAllFilters ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <HiChevronDown />
                      </motion.span>
                    </button>
                  </div>

                  {/* Additional filters */}
                  <AnimatePresence>
                    {showAllFilters && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div
                          className="rounded-xl border-2 p-4"
                          style={{ borderColor: 'var(--neutral)', background: 'rgba(255,255,255,0.5)' }}
                        >
                          <div className="flex flex-wrap justify-center gap-2">
                            {additionalFilters.map((filter) => {
                              const isActive = activeFilter === filter;
                              return (
                                <motion.button
                                  key={filter}
                                  onClick={() => {
                                    setActiveFilter(filter);
                                    setShowAllFilters(false);
                                  }}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="px-4 py-1.5 rounded-full border-2 font-bold text-xs uppercase tracking-wider transition-all"
                                  style={{
                                    background: isActive ? 'var(--dark-neutral)' : 'white',
                                    borderColor: isActive ? 'var(--dark-neutral)' : 'var(--neutral)',
                                    color: isActive ? 'white' : 'var(--dark-neutral)',
                                  }}
                                >
                                  {filter}
                                </motion.button>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Active Filter & Results Count ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-8"
          >
            {hasActiveFilter && (
              <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
                {activeFilter !== 'All' && (
                  <div
                    className="inline-flex items-center gap-2 border-2 px-4 py-1.5 rounded-full"
                    style={{ background: 'var(--green-20, rgba(var(--green-rgb),0.15))', borderColor: 'var(--green)' }}
                  >
                    <span className="text-sm font-bold" style={{ color: 'var(--dark-green)' }}>
                      {activeFilter}
                    </span>
                    <button
                      onClick={() => setActiveFilter('All')}
                      className="transition-opacity hover:opacity-60"
                      style={{ color: 'var(--dark-green)' }}
                      aria-label="Clear filter"
                    >
                      <MdClose className="text-base" />
                    </button>
                  </div>
                )}
                {searchQuery && (
                  <div
                    className="inline-flex items-center gap-2 border-2 px-4 py-1.5 rounded-full"
                    style={{ background: 'var(--light-neutral)', borderColor: 'var(--neutral)' }}
                  >
                    <span className="text-sm font-bold" style={{ color: 'var(--dark-green)' }}>
                      &ldquo;{searchQuery}&rdquo;
                    </span>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="transition-opacity hover:opacity-60"
                      style={{ color: 'var(--dark-green)' }}
                      aria-label="Clear search"
                    >
                      <MdClose className="text-base" />
                    </button>
                  </div>
                )}
              </div>
            )}

            <p className="text-sm opacity-60 font-medium">
              Showing {filteredProjects.length} of {projectsData.length} project
              {filteredProjects.length !== 1 ? 's' : ''}
            </p>
          </motion.div>

          {/* ── Projects Grid ── */}
          <div className="mt-6">
            <h2 className="sr-only">Project results</h2>

            {filteredProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mx-auto mt-10 max-w-2xl rounded-3xl border-4 border-dark-green p-12 text-center"
                style={{ background: 'var(--light-neutral)' }}
              >
                <div className="mb-4 flex justify-center">
                  <RiSearchLine
                    className="text-6xl opacity-30"
                    style={{ color: 'var(--dark-green)' }}
                  />
                </div>
                <p className="text-2xl font-bold mb-2" style={{ color: 'var(--dark-green)' }}>
                  No projects found
                </p>
                <p className="text-lg opacity-70 mb-4">
                  Try adjusting your search or filters
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveFilter('All');
                  }}
                  className="px-6 py-2 rounded-full border-2 border-dark-green text-white font-bold hover:opacity-90 transition-opacity"
                  style={{ background: 'var(--green)' }}
                >
                  Clear All Filters
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((p, idx) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={[
                      idx % 5 === 0 ? 'lg:col-span-2' : '',
                      idx % 6 === 0 ? 'md:translate-y-2' : '',
                    ].join(' ')}
                  >
                    <TrapezoidCard
                      project={{
                        id: idx,
                        title: p.title,
                        tagline: p.tagline,
                        tags: p.tags,
                        href: `/projects/${p.slug}`,
                        number: String(p.id).padStart(2, '0'),
                        tone: p.color,
                        size: idx % 5 === 0 ? 'large' : 'small',
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* ── Coming Soon ── */}
          {filteredProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16 text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block rounded-full px-8 py-4 font-bold text-lg text-white shadow-lg hover:shadow-2xl transition-shadow relative overflow-hidden group cursor-default select-none"
                style={{ background: 'var(--green)', border: '4px solid var(--dark-green)' }}
              >
                {/* Left starburst */}
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-50 group-hover:opacity-80 transition-opacity">
                  <AtomicStarburst size={36} spokes={8} opacity={1} />
                </div>
                <span className="relative z-10">More Projects Coming Soon!</span>
                {/* Right starburst */}
                <div className="absolute -right-6 top-1/2 -translate-y-1/2 opacity-50 group-hover:opacity-80 transition-opacity">
                  <AtomicStarburst size={36} spokes={8} opacity={1} />
                </div>
              </motion.div>
            </motion.div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
}