import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData, colorMap } from '@/app/data/projects';

export default function SecondaryProjectsScreen () {
  const featured = projectsData[0];

  const t = colorMap[featured.color];

  return (
    <div className="flex flex-col w-full px-6 py-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 mb-6 mt-6 mr-4"
      >
        <p
          className="text-sm font-extrabold tracking-[0.25em] uppercase"
          style={{ color: 'var(--dark-teal)', fontFamily: 'var(--font-heading)' }}
        >
          Projects
        </p>
        <div className="flex-1 h-px opacity-30" style={{ background: 'var(--dark-teal)' }} />
        <p className="text-[10px] opacity-40 font-mono">DEEP DIVE</p>
      </motion.div>

      {/* Main content */}
      <div className="grid grid-cols-[1.05fr_0.95fr] gap-4 flex-1">
        {/* LEFT: project visual */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-[26px] border-4 p-3 overflow-hidden relative"
          style={{
            background: t.lightMain,
            borderColor: t.darkMain,
          }}
        >
          {/* Decorative corner */}
          <div
            className="absolute top-0 right-0 w-16 h-16 rotate-45 translate-x-8 -translate-y-8 opacity-70"
            style={{ background: t.secondary }}
          />

          <div className="relative z-10 mb-3 flex items-start justify-between gap-3">
            <div>
              <h3
                className="text-lg leading-tight"
                style={{ color: t.darkMain }}
              >
                {featured.title}
              </h3>
              <p
                className="text-xs font-bold uppercase tracking-widest opacity-75 mt-1"
                style={{ color: t.ink }}
              >
                {featured.tagline}
              </p>
            </div>

            <div
              className="shrink-0 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest border-2"
              style={{
                background: t.cream,
                color: t.darkMain,
                borderColor: t.darkMain,
              }}
            >
              In Progress
            </div>
          </div>

          <div
            className="relative rounded-[18px] overflow-hidden border-3 bg-white/60"
            style={{ borderColor: 'rgba(0,0,0,0.18)' }}
          >
            <Image
              src={featured.image}
              alt={featured.title}
              width={900}
              height={700}
              className="w-full h-[250px] object-cover"
            />
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {featured.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full px-3 py-1 text-[11px] font-bold border-2"
                style={{
                  background: t.cream,
                  color: t.darkMain,
                  borderColor: t.darkMain,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: details */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.4 }}
            className="rounded-[22px] border-3 p-4 relative overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.45)',
              borderColor: t.darkSecondary,
            }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2"
              style={{ color: t.darkSecondary }}
            >
              Overview
            </p>
            <p className="text-sm leading-relaxed">
              {featured.shortOverview}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.4 }}
            className="rounded-[22px] border-3 p-4"
            style={{
              background: t.cream,
              borderColor: t.darkTertiary,
            }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2"
              style={{ color: t.darkTertiary }}
            >
              Quick Info
            </p>

            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-bold">Role:</span> {featured.role}
              </p>
              <p className="text-sm">
                <span className="font-bold">Team:</span> {featured.team}
              </p>
              <p className="text-sm">
                <span className="font-bold">Timeline:</span> {featured.timeline}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="rounded-[22px] border-3 p-4"
            style={{
              background: t.lightTertiary,
              borderColor: t.darkTertiary,
            }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2"
              style={{ color: t.darkTertiary }}
            >
              Feature Snapshot
            </p>

            <ul className="space-y-2">
              {featured.solution.features.slice(0, 2).map((feature) => (
                <li key={feature.name} className="text-sm leading-relaxed">
                  <span className="font-bold">{feature.name}:</span> {feature.description}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center mt-6 relative"
      >
        <motion.div
          className="absolute left-1/4 top-1/2 -translate-y-1/2"
          animate={{ x: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M 15 10 L 5 5 L 5 15 Z" fill={t.darkMain} opacity="0.4" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute right-1/4 top-1/2 -translate-y-1/2"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M 5 10 L 15 5 L 15 15 Z" fill={t.darkMain} opacity="0.4" />
          </svg>
        </motion.div>

        <Link href={`/projects/${featured.slug}`}>
          <div
            className="inline-block border-2 rounded-full px-6 py-2 cursor-pointer transition-colors"
            style={{
              background: `${t.main}55`,
              borderColor: t.darkMain,
            }}
          >
            <p
              className="text-sm font-bold uppercase tracking-wider"
              style={{ color: t.darkMain }}
            >
              View Full Project →
            </p>
          </div>
        </Link>
      </motion.div>

      {/* Scanline */}
      <div
        className="absolute pointer-events-none opacity-5 bg-gradient-to-b from-transparent via-black to-transparent bg-[length:100%_4px] animate-[scan_8s_linear_infinite]"
        style={{
          top: '60%',
          left: '60%',
          transform: 'translate(-35%, -40%)',
          width: '100%',
          height: '100%',
          clipPath: 'ellipse(48% 45% at 50% 50%)',
        }}
      />
    </div>
  );
}