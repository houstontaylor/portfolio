import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData, colorMap } from '@/app/data/projects';
import HomeButton from './HomeButton';

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
      <div className="grid grid-cols-[1.05fr_0.95fr] gap-4 flex-1 mr-4 ml-4">
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
                className="leading-tight"
                style={{ color: t.darkMain }}
              >
                {featured.title}
              </h3>
              <p
                className="text-sm font-bold uppercase tracking-widest opacity-75 mt-1"
                style={{ color: t.ink }}
              >
                {featured.tagline}
              </p>
            </div>

            <div
              className="shrink-0 rounded-full px-3 py-1 text-[12px] font-bold uppercase tracking-widest border-2"
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
            {featured.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full px-3 py-1 text-sm font-bold border-2"
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
              className="text-sm font-bold uppercase tracking-widest opacity-70 mb-2"
              style={{ color: t.darkSecondary }}
            >
              Overview
            </p>
            <p className="leading-relaxed">
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
              className="text-sm font-bold uppercase tracking-widest opacity-70 mb-2"
              style={{ color: t.darkTertiary }}
            >
              Quick Info
            </p>

            <div className="space-y-2">
              <p>
                <span className="font-bold">Role:</span> {featured.role}
              </p>
              <p>
                <span className="font-bold">Team:</span> {featured.team}
              </p>
              <p>
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
              className="text-sm font-bold uppercase tracking-widest opacity-70 mb-2"
              style={{ color: t.darkTertiary }}
            >
              Feature Snapshot
            </p>

            <ul className="space-y-2">
              {featured.solution.features.slice(0, 2).map((feature) => (
                <li key={feature.name} className="leading-relaxed">
                  <p><span className="font-bold">{feature.name}:</span> {feature.description}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom CTA */}
      <HomeButton
        text="View Full Project"
        href={`/projects/${featured.slug}`}
        color="teal"
      />

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