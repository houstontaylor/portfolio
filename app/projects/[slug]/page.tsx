'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react'; // Add this import
import { FaGithub, FaExternalLinkAlt, FaFigma } from 'react-icons/fa';
import Header from '../../../components/Header';
import ScrollToTop from '../../../components/ScrollToTop';
import { getProjectBySlug, projectsData } from '../../data/projects';

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap the params Promise
  const { slug } = use(params);
  const project = getProjectBySlug(slug);

  // If project not found, show 404
  if (!project) {
    notFound();
  }

  const colorMap = {
    pink: { bg: 'bg-light-pink', border: 'border-dark-pink', text: 'var(--dark-pink)', solid: 'bg-dark-pink' },
    teal: { bg: 'bg-light-teal', border: 'border-dark-teal', text: 'var(--dark-teal)', solid: 'bg-dark-teal' },
    green: { bg: 'bg-light-green', border: 'border-dark-green', text: 'var(--dark-green)', solid: 'bg-dark-green' },
    neutral: { bg: 'bg-light-neutral', border: 'border-dark-neutral', text: 'var(--dark-neutral)', solid: 'bg-dark-neutral' }
  };

  const colors = colorMap[project.color];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ScrollToTop />

      <main className="pt-32 pb-16 px-8 max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 text-lg font-bold hover:gap-4 transition-all"
            style={{ color: colors.text }}
          >
            ← Back to Projects
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`${colors.bg} ${colors.border} border-4 rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden`}
        >
          {/* Decorative starburst */}
          <div className="absolute top-8 right-8 opacity-20">
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="5" fill="currentColor"/>
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <line
                  key={i}
                  x1="40"
                  y1="40"
                  x2={40 + 28 * Math.cos((angle * Math.PI) / 180)}
                  y2={40 + 28 * Math.sin((angle * Math.PI) / 180)}
                  stroke="currentColor"
                  strokeWidth="3"
                />
              ))}
            </svg>
          </div>

          <div className="relative z-10">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/70 rounded-full text-xs font-bold border-2"
                  style={{ borderColor: colors.text, color: colors.text }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title & Tagline */}
            <h1 
              className="text-5xl md:text-6xl font-bold mb-4"
              style={{ color: colors.text }}
            >
              {project.title}
            </h1>
            <p className="text-2xl mb-8 opacity-90">
              {project.tagline}
            </p>

            {/* Meta Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider opacity-70 mb-1">Year</p>
                <p className="text-lg font-bold">{project.year}</p>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider opacity-70 mb-1">Role</p>
                <p className="text-lg font-bold">{project.role}</p>
              </div>
              {project.team && (
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider opacity-70 mb-1">Team</p>
                  <p className="text-lg font-bold">{project.team}</p>
                </div>
              )}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.links.live && (
                <motion.a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${colors.solid} border-3 border-white text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow`}
                >
                  <FaExternalLinkAlt /> View Live Site
                </motion.a>
              )}
              {project.links.github && (
                <motion.a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border-3 px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                  style={{ borderColor: colors.text, color: colors.text }}
                >
                  <FaGithub /> View Code
                </motion.a>
              )}
              {project.links.figma && (
                <motion.a
                  href={project.links.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border-3 px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                  style={{ borderColor: colors.text, color: colors.text }}
                >
                  <FaFigma /> View Design
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-subheading)' }}>
                Overview
              </h2>
              <div className="space-y-4">
                {project.fullDescription.map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.section>

            {/* Challenge */}
            {project.challenge && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-light-pink border-3 border-dark-pink rounded-2xl p-6"
              >
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--dark-pink)' }}>
                  🎯 The Challenge
                </h3>
                <p className="text-lg leading-relaxed">
                  {project.challenge}
                </p>
              </motion.section>
            )}

            {/* Solution */}
            {project.solution && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-light-teal border-3 border-dark-teal rounded-2xl p-6"
              >
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--dark-teal)' }}>
                  💡 The Solution
                </h3>
                <p className="text-lg leading-relaxed">
                  {project.solution}
                </p>
              </motion.section>
            )}

            {/* Impact */}
            {project.impact && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-light-green border-3 border-dark-green rounded-2xl p-6"
              >
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--dark-green)' }}>
                  📊 Impact & Results
                </h3>
                <ul className="space-y-3">
                  {project.impact.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-3 text-lg"
                    >
                      <span className="text-2xl flex-shrink-0">✦</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.section>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-neutral/60 border-3 border-dark-neutral rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--dark-neutral)' }}>
                🛠️ Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/80 rounded-full text-sm font-bold border-2 border-dark-neutral"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Project Images */}
            {project.images.length > 0 && (
              <motion.section
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-subheading)' }}>
                  📸 Gallery
                </h3>
                <div className="space-y-4">
                  {project.images.map((img, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="relative aspect-video bg-neutral/30 rounded-xl overflow-hidden border-3 border-dark-neutral"
                    >
                      {/* Placeholder - replace with actual images */}
                      <div className="absolute inset-0 flex items-center justify-center text-neutral">
                        <span className="text-6xl">🖼️</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>
        </div>

        {/* More Projects */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: 'var(--font-heading)' }}>
            More Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectsData
              .filter(p => p.slug !== project.slug)
              .slice(0, 3)
              .map((relatedProject, index) => {
                const relatedColors = colorMap[relatedProject.color];
                return (
                  <motion.div
                    key={relatedProject.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <Link
                      href={`/projects/${relatedProject.slug}`}
                      className={`block ${relatedColors.bg} ${relatedColors.border} border-3 rounded-2xl p-6 hover:scale-105 transition-transform`}
                    >
                      <h4 
                        className="text-xl font-bold mb-2"
                        style={{ color: relatedColors.text }}
                      >
                        {relatedProject.title}
                      </h4>
                      <p className="text-sm opacity-80 mb-3">
                        {relatedProject.tagline}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {relatedProject.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-white/60 rounded-full text-xs font-bold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
          </div>
        </motion.section>
      </main>
    </div>
  );
}