'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import TrapezoidCard from '../../components/projects/TrapezoidCard';
import { projectsData } from '../data/projects';
import { PiStarFourFill } from 'react-icons/pi';

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAllFilters, setShowAllFilters] = useState(false);

  // Featured filter categories (the most important ones)
  const featuredFilters = ['All', 'AI/ML', 'UI/UX', 'Accessibility', 'Game Design', 'React'];

  // Get unique tags for all filters
  const allTags = Array.from(new Set(projectsData.flatMap(p => p.tags))).sort();
  
  // Additional filters (not in featured)
  const additionalFilters = allTags.filter(tag => !featuredFilters.includes(tag));

  // Filter projects based on search and active filter
  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesFilter = activeFilter === 'All' || project.tags.includes(activeFilter);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ScrollToTop />
      
      <main className="pt-8 pb-16 px-8 max-w-7xl mx-auto">
        {/* Header SVG */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 flex justify-center"
        >
          <Image 
            src="/projects.svg"
            alt="Projects"
            width={800}
            height={200}
            className="w-3/5 h-auto"
          />
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="max-w-2xl mx-auto relative">
            {/* Decorative atomic starburst */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 opacity-30 hidden lg:block">
              <svg width="30" height="30" viewBox="0 0 30 30">
                <circle cx="15" cy="15" r="2" fill="var(--dark-green)"/>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <line
                    key={i}
                    x1="15"
                    y1="15"
                    x2={15 + 10 * Math.cos((angle * Math.PI) / 180)}
                    y2={15 + 10 * Math.sin((angle * Math.PI) / 180)}
                    stroke="var(--dark-green)"
                    strokeWidth="2"
                  />
                ))}
              </svg>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search projects by title, description, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 text-lg bg-white border-4 border-dark-green rounded-full focus:outline-none focus:border-green focus:shadow-lg transition-all"
              />
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-2xl">
                🔍
              </span>
            </div>

            {/* Decorative boomerang */}
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
        </motion.div>

        {/* Filter Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <p className="text-center text-sm font-bold uppercase tracking-wider mb-4 opacity-70">
            Filter by Category
          </p>
          
          {/* Featured Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {featuredFilters.map((filter, index) => {
              const isActive = activeFilter === filter;
              return (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-full border-3 font-bold text-sm uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-green border-dark-green text-white shadow-lg'
                      : 'bg-white border-neutral hover:border-dark-green'
                  }`}
                  style={{
                    color: isActive ? 'white' : 'var(--dark-green)'
                  }}
                >
                  {filter}
                  {isActive && (
                    <motion.span
                      className="ml-2 inline-block"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <PiStarFourFill />
                    </motion.span>
                  )}
                </motion.button>
              );
            })}

            {/* More Filters Dropdown Button */}
            <motion.button
              onClick={() => setShowAllFilters(!showAllFilters)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full border-3 border-dark-neutral bg-white font-bold text-sm uppercase tracking-wider transition-all hover:border-dark-green relative"
              style={{ color: 'var(--dark-green)' }}
            >
              More Filters
              <motion.span
                className="ml-2 inline-block"
                animate={{ rotate: showAllFilters ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </motion.button>
          </div>

          {/* Dropdown for Additional Filters */}
          <AnimatePresence>
            {showAllFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="max-w-4xl mx-auto bg-light-neutral border-4 border-dark-neutral rounded-2xl p-6 shadow-lg">
                  <p className="text-xs font-bold uppercase tracking-wider mb-3 opacity-70 text-center">
                    All Categories
                  </p>
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
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-4 py-1.5 rounded-full border-2 font-bold text-xs uppercase tracking-wider transition-all ${
                            isActive
                              ? 'bg-dark-neutral border-dark-neutral text-white'
                              : 'bg-white border-neutral hover:border-dark-neutral'
                          }`}
                          style={{
                            color: isActive ? 'white' : 'var(--dark-neutral)'
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
        </motion.div>

        {/* Active Filter & Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8"
        >
          {activeFilter !== 'All' && (
            <div className="inline-flex items-center gap-2 bg-green/20 border-2 border-green px-4 py-2 rounded-full mb-2">
              <span className="text-sm font-bold" style={{ color: 'var(--dark-green)' }}>
                Filtering by: {activeFilter}
              </span>
              <button
                onClick={() => setActiveFilter('All')}
                className="text-dark-green hover:text-green transition-colors"
                aria-label="Clear filter"
              >
                ✕
              </button>
            </div>
          )}
          
          <p className="text-sm opacity-70">
            Showing {filteredProjects.length} of {projectsData.length} project{filteredProjects.length !== 1 ? 's' : ''}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-10">
          <h2 className="sr-only">Project results</h2>

          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto mt-10 max-w-2xl rounded-3xl border-4 border-dark-green bg-light-neutral p-12 text-center"
            >
              <div className="mb-4 text-6xl">🔍</div>
              <p className="text-2xl font-bold mb-2" style={{ color: 'var(--dark-green)' }}>
                No projects found
              </p>
              <p className="text-lg opacity-80 mb-4">
                Try adjusting your search or filters
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilter('All');
                }}
                className="px-6 py-2 bg-green border-2 border-dark-green rounded-full text-white font-bold hover:bg-dark-green transition-colors"
              >
                Clear All Filters
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((p, idx) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={[
                    idx % 5 === 0 ? 'lg:col-span-2' : '',
                    idx % 7 === 0 ? 'md:translate-y-2' : '',
                  ].join(' ')}
                >
                  <TrapezoidCard
                    project={{
                      id: p.slug,
                      title: p.title,
                      tagline: p.tagline,
                      tags: p.tags,
                      href: `/projects/${p.slug}`,
                      image: p.image,
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

        {/* Load More Button */}
        {filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green border-4 border-dark-green rounded-full px-8 py-4 font-bold text-lg text-white shadow-lg hover:shadow-2xl transition-shadow relative overflow-hidden group"
            >
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 opacity-50 group-hover:opacity-100 transition-opacity">
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="3" fill="white"/>
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <line
                      key={i}
                      x1="20"
                      y1="20"
                      x2={20 + 12 * Math.cos((angle * Math.PI) / 180)}
                      y2={20 + 12 * Math.sin((angle * Math.PI) / 180)}
                      stroke="white"
                      strokeWidth="2"
                    />
                  ))}
                </svg>
              </div>

              <span className="relative z-10">More Projects Coming Soon!</span>

              <div className="absolute -right-8 top-1/2 -translate-y-1/2 opacity-50 group-hover:opacity-100 transition-opacity">
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="3" fill="white"/>
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <line
                      key={i}
                      x1="20"
                      y1="20"
                      x2={20 + 12 * Math.cos((angle * Math.PI) / 180)}
                      y2={20 + 12 * Math.sin((angle * Math.PI) / 180)}
                      stroke="white"
                      strokeWidth="2"
                    />
                  ))}
                </svg>
              </div>
            </motion.button>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
}