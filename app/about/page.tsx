'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SideNav from '@/components/SideNav';
import ScrollToTop from '@/components/ScrollToTop';
import CheckerDivider from '@/components/CheckerDivider';
import RoadTripExperience from '@/components/RoadTripExperience';
import { educationData } from '../data/education';
import { experienceData } from '../data/experience';
import { techSkills, languageSkills } from '../data/skills';
import { hobbiesData } from '../data/hobbies';
import { GiPolarStar } from 'react-icons/gi';
import { PiStarFourFill } from 'react-icons/pi';

export default function AboutPage() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const sections = [
    { id: 'intro', label: 'Intro' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'techSkills', label: 'Tech Skills' },
    { id: 'langSkills', label: 'Languages' },
    { id: 'hobbies', label: 'Hobbies' },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <SideNav sections={sections} />
      <ScrollToTop />
      
      <main className="pt-8 pb-8 px-8 max-w-6xl mx-auto relative z-10">
        {/* ===== INTRO SECTION ===== */}
        <motion.section
          id="intro"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 scroll-mt-8"
        >
          {/* Header SVG */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 flex justify-center"
          >
            <Image 
              src="/about/about.svg"
              alt="About"
              width={800}
              height={250}
              className="w-3/5 h-auto"
            />
          </motion.div>

          {/* Intro blurb + portrait */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative w-full"
          >
            <div className="relative flex items-center">
              {/* Blurb plaque */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25 }}
                className="w-full pl-28 md:pl-52 pr-4 md:pr-10 py-8 md:py-10"
              >
                <div
                  className="relative rounded-[52px] shadow-2xl overflow-hidden"
                  style={{
                    background: 'var(--light-green)',
                    border: '6px solid var(--red)',
                    transform: 'rotate(-1deg) skewX(-6deg)',
                  }}
                >
                  {/* inner highlight */}
                  <div
                    className="absolute inset-[10px] rounded-[42px] pointer-events-none opacity-40"
                    style={{ border: '2px solid rgba(255,255,255,0.35)' }}
                  />

                  {/* blurb content */}
                  <div
                    className="relative px-6 md:px-10 py-6 md:py-8"
                    style={{ transform: 'skewX(6deg)' }}
                  >
                    <h2 className="text-right mb-4">
                      Hi there, I’m Houston Taylor!
                    </h2>

                    <p className="text-[clamp(1rem,1.5vw,1.2rem)] leading-relaxed">
                      I’m a UI/UX designer and full-stack developer passionate about unique and accessible design,
                      finding new problems to help solve, and making products that inspire. Thanks for taking the
                      time to learn more about me!
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Diamond portrait */}
              <motion.div
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20"
                whileHover={{ rotate: [0, -2, 2, -2, 0] }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-32 h-32 md:w-48 md:h-48">
                  {/* glow behind */}
                  <div
                    className="absolute inset-0 blur-xl opacity-40"
                    style={{ background: 'var(--dark-pink)' }}
                  />

                  <Image
                    src="/about/HTDiamond.svg"
                    alt="Houston Taylor"
                    fill
                    className="relative z-10 object-contain drop-shadow-2xl"
                    sizes="(max-width: 768px) 160px, 220px"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* ===== CHECKERBOARD DIVIDER ===== */}
        <CheckerDivider
          className="mt-4 mb-8 justify-center" 
          fg="var(--teal)"
          bg="var(--light-teal)"
          height={30}
          squareSize={15}
        />

        {/* ===== EDUCATION SECTION ===== */}
        <motion.section
          id="education"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8 scroll-mt-8"
        >
          <h2 className="text-5xl font-bold text-center mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--dark-teal)' }}>
            EDUCATION
          </h2>
          <div
            className="mx-auto mb-4"
            style={{
              width: 160,
              height: 6,
              background:
                'repeating-linear-gradient(90deg, var(--dark-teal) 0 12px, transparent 12px 20px)',
              opacity: 0.7,
            }}
          />
          <p
            className="text-center text-sm tracking-widest mb-12"
            style={{ color: 'var(--dark-green)', opacity: 0.75 }}
          >
            Turn the postcards over for more details!
          </p>

          <div className="relative max-w-6xl mx-auto">
            <div className="hidden md:block relative h-[520px]">
              {educationData.map((edu, index) => {
                const isFlipped = flippedCard === index;
                const t = edu.theme;

                // positions + rotations for the 3 cards
                const layout = [
                  { left: '35%',  top: '10px',  rotate: -4, z: 20 }, // Bachelor's
                  { left: '1%', top: '120px',  rotate: 3,  z: 30 }, // Master's
                  { left: '68%', top: '180px', rotate: -2,  z: 10 }, // Paris
                ][index] ?? { left: `${index * 30}%`, top: '80px', rotate: 0, z: 10 };

                return (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      left: layout.left,
                      top: layout.top,
                      width: '400px',
                      zIndex: isFlipped ? 40 : layout.z,
                      perspective: '1200px',
                    }}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.08 }}
                  >
                    <motion.div
                      className="relative cursor-pointer"
                      style={{
                        width: '100%',
                        aspectRatio: '3 / 2',
                        transformStyle: 'preserve-3d',
                      }}
                      animate={{
                        rotate: layout.rotate,                 // the -3/0/3 tilt
                        rotateY: isFlipped ? 180 : 0,           // the flip
                      }}
                      transition={{ duration: 0.55, ease: 'easeInOut' }}
                      whileHover={{ scale: 1.03 }}
                      onClick={() => setFlippedCard(isFlipped ? null : index)}
                    >
                      {/* FRONT */}
                      <div
                        className="absolute inset-0"
                        style={{
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden',
                        }}
                      >
                        <div
                          className="relative w-full h-full"
                          style={{ filter: 'drop-shadow(0 18px 22px rgba(0,0,0,0.18))' }}
                        >
                          <Image
                            src={edu.postcard}
                            alt={`${edu.school} postcard`}
                            fill
                            className="object-contain"
                            sizes="360px"
                            priority={index === 1}
                          />

                          {!isFlipped && (
                            <div
                              className="absolute right-3 top-3 text-[10px] font-bold px-2 py-1 rounded-full"
                              style={{
                                background: 'rgba(255,255,255,0.75)',
                                border: `2px dashed ${t.chipBorder}`,
                                color: t.chipBorder,
                              }}
                            >
                              FLIP
                            </div>
                          )}
                        </div>
                      </div>

                      {/* BACK */}
                      <div
                        className="absolute inset-0 backface-hidden"
                        style={{ transform: 'rotateY(180deg)' }}
                      >
                        <div
                          className="w-full h-full rounded-2xl p-5 overflow-auto retro-scroll"
                          style={{
                            background: t.bg,
                            border: `4px solid ${t.border}`,
                            boxShadow: '0 18px 22px rgba(0,0,0,0.18)',

                            ['--scroll-track' as any]: t.scrollTrack,
                            ['--scroll-thumb' as any]: t.scrollThumb,
                            ['--scroll-thumb-hover' as any]: t.scrollThumbHover,
                          }}
                        >
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <div>
                              <h3 className="font-bold leading-tight" style={{ color: t.accent }}>
                                {edu.school}
                              </h3>
                              <p className="text-sm opacity-80">{edu.location}</p>
                            </div>

                            <div
                              className="shrink-0 text-[11px] font-bold px-3 py-1 rounded-full"
                              style={{
                                background: t.chipBg,
                                border: `2px dashed ${t.chipBorder}`,
                                color: t.chipBorder,
                              }}
                            >
                              {edu.year}
                            </div>
                          </div>

                          <p className="text-sm mb-1">
                            <span className="font-bold">{edu.degree}</span>
                          </p>
                          <p className="text-sm mb-3 opacity-90">
                            Focus: <span className="font-bold">{edu.focus}</span>
                          </p>

                          {edu.description && (
                            <p className="text-sm leading-relaxed mb-4 opacity-90">
                              {edu.description}
                            </p>
                          )}

                          <div className="mb-4">
                            <h4 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: t.accent }}>
                              Coursework
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.coursework.map((course) => (
                                <span
                                  key={course}
                                  className="px-2 py-1 rounded-full text-[11px]"
                                  style={{
                                    background: t.chipBg,
                                    border: `1px solid ${t.chipBorder}`,
                                    color: t.chipBorder,
                                  }}
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>

                          {edu.clubs.length > 0 && (
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: t.accent }}>
                                Clubs & Activities
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {edu.clubs.map((club) => (
                                  <span
                                    key={club}
                                    className="px-2 py-1 rounded-full text-[11px]"
                                    style={{
                                      background: t.chipBg,
                                      border: `1px solid ${t.chipBorder}`,
                                      color: t.chipBorder,
                                    }}
                                  >
                                    {club}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* ===== CHECKERBOARD DIVIDER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.35 }}
        >
          <CheckerDivider
            className="mt-4 mb-8 justify-center" 
            fg="var(--pink)"
            bg="var(--light-pink)"
            height={30}
            squareSize={15}
          />
        </motion.div>

        {/* ===== EXPERIENCE SECTION ===== */}
        <motion.section
          id="experience"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8 scroll-mt-8"
        >
          <h2 className="text-5xl font-bold text-center mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--dark-pink)' }}>
            EXPERIENCE
          </h2>
          <div
            className="mx-auto mb-4"
            style={{
              width: 160,
              height: 6,
              background:
                'repeating-linear-gradient(90deg, var(--dark-pink) 0 12px, transparent 12px 20px)',
              opacity: 0.7,
            }}
          />
          <p
            className="text-center text-sm tracking-widest mb-12"
            style={{ color: 'var(--dark-green)', opacity: 0.75 }}
          >
            My journey through tech, teaching, and constant learning!
          </p>

          <div className="relative mx-auto max-w-6xl">
            <RoadTripExperience
              items={experienceData}
              carSrc="/about/belair.svg"
              height={1500}
            />
          </div>
        </motion.section>

        {/* ===== CHECKERBOARD DIVIDER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.35 }}
        >
          <CheckerDivider
            className="mt-4 mb-8 justify-center" 
            fg="var(--green)"
            bg="var(--light-green)"
            height={30}
            squareSize={15}
          />
        </motion.div>

        {/* ===== TECH SKILLS SECTION ===== */}
        <motion.section
          id="techSkills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-12 scroll-mt-8"
        >
          <h2
            className="text-5xl font-bold text-center mb-2"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--dark-green)' }}
          >
            TECH SKILLS
          </h2>

          <div
            className="mx-auto mb-4"
            style={{
              width: 160,
              height: 6,
              background:
                'repeating-linear-gradient(90deg, var(--dark-green) 0 12px, transparent 12px 20px)',
              opacity: 0.7,
            }}
          />

          <p className="text-center text-sm tracking-widest mb-10" style={{ color: 'var(--dark-green)', opacity: 0.75 }}>
            Hover for level • Click to pin
          </p>

          {(() => {
            const [activeId, setActiveId] = useState<string | null>(null);

            const skills = useMemo(() => techSkills, []);

            const active = useMemo(
              () => skills.find((s) => s.id === activeId) ?? null,
              [skills, activeId]
            );

            const stars = useMemo(() => {
              return Array.from({ length: 10 }).map((_, i) => ({
                id: i,
                left: 14 + (i * 71) % 72,
                top: 16 + (i * 43) % 68,
                dur: 2.4 + (i % 4) * 0.55,
                delay: (i % 6) * 0.22,
              }));
            }, []);

            const orbitRadius = (ring: 'tech' | 'design') => (ring === 'tech' ? 230 : 345);

            const ringStyle = (ring: 'tech' | 'design') => {
              return ring === 'tech'
                ? {
                    bg: 'var(--light-teal)',
                    border: 'var(--dark-teal)',
                    tooltipBg: 'var(--dark-teal)',
                    badge: 'var(--dark-teal)',
                  }
                : {
                    bg: 'var(--light-pink)',
                    border: 'var(--dark-pink)',
                    tooltipBg: 'var(--dark-pink)',
                    badge: 'var(--dark-pink)',
                  };
            };

            const levelDots = (level: number, color: string) => (
              <div className="flex gap-1 items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      background: i < level ? color : 'rgba(0,0,0,0.14)',
                      border: `2px solid ${color}`,
                    }}
                  />
                ))}
              </div>
            );

            return (
              <div className="relative w-full max-w-5xl mx-auto h-[700px] flex items-center justify-center">
                {/* Center planet */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                  className="absolute w-44 h-44 rounded-full flex items-center justify-center z-20"
                  style={{
                    width: 180,
                    height: 180,
                  }}
                >
                  <img
                    src="/about/Planet.svg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-contain"
                    aria-hidden
                  />
                  <div className="relative text-center px-4">
                    <div className="text-[28px] font-bold leading-tight" style={{ color: 'var(--light-neutral)' }}>
                      Skills
                    </div>
                    <div className="text-[11px] font-bold tracking-widest" style={{ color: 'var(--light-pink)', opacity: 0.8 }}>
                      ORBIT MAP
                    </div>
                  </div>
                </motion.div>

                {/* Skills orbiting */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: active ? 1 : 0, y: active ? 0 : 10 }}
                  className="absolute z-30 w-[330px] md:w-[410px] px-4"
                  style={{ top: 'calc(50% + 128px)' }}
                  aria-hidden={!active}
                >
                  {active && (() => {
                    const rs = ringStyle(active.ring);
                    return (
                      <div
                        className="relative p-4"
                        style={{
                          clipPath:
                            'polygon(0% 10%, 4% 0%, 96% 0%, 100% 10%, 100% 86%, 96% 100%, 4% 100%, 0% 86%)',
                          background: 'rgba(255,255,255,0.78)',
                          border: '4px solid var(--dark-green)',
                          boxShadow: '0 22px 34px rgba(0,0,0,0.14)',
                          backdropFilter: 'blur(6px)',
                        }}
                      >
                        {/* checker “header strip” */}
                        <div
                          className="absolute left-0 right-0 top-0 h-8"
                          style={{
                            background:
                              'repeating-linear-gradient(90deg, rgba(0,0,0,0.18) 0 12px, rgba(255,255,255,0.0) 12px 24px)',
                            borderBottom: '3px solid var(--dark-green)',
                            opacity: 0.55,
                          }}
                        />

                        {/* rivets */}
                        {[
                          { left: 10, top: 10 },
                          { right: 10, top: 10 },
                          { left: 10, bottom: 10 },
                          { right: 10, bottom: 10 },
                        ].map((pos, i) => (
                          <div
                            key={i}
                            className="absolute w-3 h-3 rounded-full"
                            style={{
                              ...(pos as any),
                              background: 'rgba(255,255,255,0.8)',
                              border: '2px solid var(--dark-green)',
                            }}
                          />
                        ))}

                        <button
                          onClick={() => setActiveId(null)}
                          className="absolute right-7 top-0.5 text-[10px] font-bold px-2 py-1 rounded-full"
                          style={{
                            background: 'rgba(255,255,255,0.85)',
                            border: '2px dashed var(--dark-green)',
                            color: 'var(--dark-green)',
                          }}
                        >
                          UNPIN
                        </button>

                        <div className="pt-8">
                          <div className="flex items-start gap-3">
                            <active.icon/>

                            <div className="min-w-0">
                              <div className="text-lg font-bold leading-tight" style={{ color: 'var(--dark-green)' }}>
                                {active.name}
                              </div>

                              <div className="mt-1 flex items-center gap-2">
                                {levelDots(active.level, rs.border)}
                                {typeof active.years === 'number' && (
                                  <span
                                    className="text-[10px] font-bold px-2 py-1 rounded-full"
                                    style={{
                                      background: 'rgba(255,255,255,0.8)',
                                      border: `2px solid ${rs.border}`,
                                      color: 'var(--dark-green)',
                                    }}
                                  >
                                    {active.years} yrs
                                  </span>
                                )}
                              </div>

                              <div className="mt-2 text-[11px] font-bold tracking-widest" style={{ color: rs.badge }}>
                                {active.ring === 'tech' ? 'TECH' : 'DESIGN'} • PINNED
                              </div>
                            </div>
                          </div>

                          <p className="text-sm mt-2" style={{ color: 'var(--dark-green)', opacity: 0.92 }}>
                            {active.detail}
                          </p>
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>

                {/* Orbital rings */}
                {(["tech", "design"] as const).map((ring, i) => {
                  const r = orbitRadius(ring);
                  return (
                    <motion.div
                      key={ring}
                      className="absolute rounded-full opacity-30"
                      style={{
                        width: `${r * 2}px`,
                        height: `${r * 2}px`,
                        border: "2px dashed",
                        borderColor: ring === "tech" ? "var(--dark-neutral)" : "var(--dark-green)",
                      }}
                      animate={{ rotate: i === 0 ? 360 : -360 }}
                      transition={{ duration: i === 0 ? 72 : 98, repeat: Infinity, ease: "linear" }}
                    />
                  );
                })}

                {/* Skills */}
                {skills.map((skill, index) => {
                  const ring = skill.ring ?? "tech";
                  const r = orbitRadius(ring);
                  const rad = (skill.angle * Math.PI) / 180;
                  const x = r * Math.cos(rad);
                  const y = r * Math.sin(rad);

                  const isActive = activeId === skill.id;

                  const style = ringStyle(ring);

                  const Icon = skill.icon;

                  return (
                    <motion.button
                      key={skill.id}
                      type="button"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1, x, y }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 + index * 0.05, type: "spring", stiffness: 150, damping: 14 }}
                      whileHover={{ scale: 1.16 }}
                      whileFocus={{ scale: 1.16 }}
                      onClick={() => setActiveId(isActive ? null : skill.id)}
                      className="absolute z-10 rounded-full flex flex-col items-center justify-center select-none outline-none group"
                      style={{
                        width: ring === "tech" ? 92 : 78,
                        height: ring === "tech" ? 92 : 78,
                        background: style.bg,
                        border: `4px solid ${style.border}`,
                        borderRadius: index % 2 === 0
                          ? '50% 46% 54% 48%'
                          : '48% 52% 46% 54%',
                        boxShadow: "0 14px 22px rgba(0,0,0,0.12)",
                        cursor: "pointer",
                      }}
                      aria-pressed={isActive}
                      aria-label={`${skill.name}. Click to pin details.`}
                    >
                      {/* Icon */}
                      <Icon className={ring === "tech" ? "text-3xl" : "text-2xl"} style={{ color: "var(--dark-green)" }} />

                      {/* Label */}
                      <span className="text-[11px] font-bold mt-1 text-center leading-tight px-2" style={{ color: "var(--dark-green)" }}>
                        {skill.name}
                      </span>

                      {/* Hover tooltip: show level/years */}
                      <div
                        className="absolute top-full mt-2 px-3 py-2 rounded-xl text-[11px] font-bold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity"
                        style={{
                          background: style.tooltipBg,
                          color: "white",
                          border: `2px solid ${style.border}`,
                          boxShadow: "0 16px 26px rgba(0,0,0,0.18)",
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <span>Level {skill.level}/5</span>
                          {typeof skill.years === "number" && <span style={{ opacity: 0.9 }}>• {skill.years} yrs</span>}
                        </div>
                        <div className="text-[10px]" style={{ opacity: 0.9 }}>
                          Click to pin
                        </div>
                      </div>

                      {/* “PRESS” badge */}
                      <div
                        className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{
                          background: "rgba(255,255,255,0.85)",
                          border: `2px dashed ${style.border}`,
                          color: style.border,
                        }}
                      >
                        PRESS
                      </div>

                      {isActive && (
                        <div
                          className="absolute inset-[-6px] rounded-full"
                          style={{
                            background:
                              'repeating-radial-gradient(farthest-corner at 20% 20%, var(--dark-neutral) 0 4px, var(--dark-green), var(--dark-neutral) 4px, transparent 4px, transparent 8px)',
                            opacity: 0.25,
                            zIndex: -1,
                          }}
                        />
                      )}
                    </motion.button>
                  );
                })}

                {/* Floating stars decoration (stable positions) */}
                {stars.map((s) => (
                  <motion.div
                    key={s.id}
                    className="absolute opacity-60 pointer-events-none"
                    style={{
                      left: `${s.left}%`,
                      top: `${s.top}%`,
                      color: 'var(--dark-neutral)',
                    }}
                    animate={{ scale: [1, 1.45, 1], opacity: [0.35, 0.8, 0.35] }}
                    transition={{ duration: s.dur, repeat: Infinity, delay: s.delay }}
                  >
                    <GiPolarStar />
                  </motion.div>
                ))}
              </div>
            );
          })()}
        </motion.section>

        {/* ===== CHECKERBOARD DIVIDER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.35 }}
        >
          <CheckerDivider
            className="mt-4 mb-8 justify-center" 
            fg="var(--pink)"
            bg="var(--light-pink)"
            height={30}
            squareSize={15}
          />
        </motion.div>

        {/* ===== LANGUAGE SKILLS SECTION ===== */}
        <motion.section
          id="langSkills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8 scroll-mt-8"
        >
          <h2
            className="text-5xl font-bold text-center mb-2"
            style={{ fontFamily: "var(--font-heading)", color: "var(--dark-pink)" }}
          >
            LANGUAGE SKILLS
          </h2>

          <div
            className="mx-auto mb-4"
            style={{
              width: 160,
              height: 6,
              background: "repeating-linear-gradient(90deg, var(--dark-pink) 0 12px, transparent 12px 20px)",
              opacity: 0.7,
            }}
          />

          <p className="text-center text-sm tracking-widest mb-10" style={{ color: "var(--dark-green)", opacity: 0.75 }}>
            Beyond technology, I love learning new modes of communication and languages!
          </p>

          {(() => {
            const langs = useMemo(() => languageSkills.slice(0, 4), []); // four buttons
            const [selectedId, setSelectedId] = useState<string>(langs[0]?.id ?? "");

            const selected = useMemo(
              () => langs.find((l) => l.id === selectedId) ?? langs[0],
              [langs, selectedId]
            );

            const SCREEN = { left: "24%", top: "28%", width: "52%", height: "34%" };

            const BUTTONS = [
              { left: "31%", top: "85.5%" },
              { left: "44%", top: "85.5%" },
              { left: "57%", top: "85.5%" },
              { left: "70%", top: "85.5%" },
            ];

            const levelDots = (level: number) => (
              <div className="flex gap-1 justify-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      background: i < level ? "rgba(255, 219, 92, 0.95)" : "rgba(255,255,255,0.35)",
                      border: "2px solid var(--dark-pink)",
                      boxShadow: i < level ? "0 0 10px rgba(255, 219, 92, 0.45)" : "none",
                    }}
                  />
                ))}
              </div>
            );

            const Icon = selected?.icon;

            return (
              <div className="w-full max-w-5xl mx-auto">
                <div className="relative mx-auto w-full max-w-[860px]">
                  {/* Jukebox SVG */}
                  <Image
                    src="/about/Jukebox.svg"
                    alt=""
                    width={856}
                    height={470}
                    className="w-full select-none"
                    priority={false}
                  />

                  {/* Screen overlay */}
                  <div
                    className="absolute"
                    style={{
                      left: SCREEN.left,
                      top: SCREEN.top,
                      width: SCREEN.width,
                      height: SCREEN.height,
                      pointerEvents: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* subtle “glass” texture (no background box) */}
                    <div
                      className="absolute inset-0"
                      style={{
                        opacity: 0.16,
                        background:
                          "repeating-linear-gradient(180deg, rgba(255,255,255,0.22) 0 2px, rgba(255,255,255,0) 2px 6px)",
                        mixBlendMode: "overlay",
                      }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        opacity: 0.22,
                        background:
                          "radial-gradient(circle at 50% 35%, rgba(255,255,255,0.35), rgba(255,255,255,0) 62%)",
                        mixBlendMode: "screen",
                      }}
                    />

                    {/* Sound-wave sweep transition on selection change */}
                    <motion.div
                      key={`wave-${selected?.id}`}
                      className="absolute"
                      style={{
                        left: "6%",
                        right: "6%",
                        top: "14%",
                        height: "22%",
                        opacity: 0.8,
                      }}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: [0, 1, 0], y: [8, 0, -6] }}
                      transition={{ duration: 0.55, ease: "easeOut" }}
                    >
                      <svg viewBox="0 0 600 120" className="w-full h-full" aria-hidden="true">
                        <path
                          d="M0,70 C40,20 80,110 120,70 C160,30 200,110 240,70 C280,25 320,110 360,70 C400,35 440,110 480,70 C520,25 560,95 600,70"
                          fill="none"
                          stroke="var(--dark-pink)"
                          strokeWidth="10"
                          strokeLinecap="round"
                          opacity="0.55"
                        />
                        <path
                          d="M0,70 C40,20 80,110 120,70 C160,30 200,110 240,70 C280,25 320,110 360,70 C400,35 440,110 480,70 C520,25 560,95 600,70"
                          fill="none"
                          stroke="rgba(255, 219, 92, 0.95)"
                          strokeWidth="6"
                          strokeLinecap="round"
                          opacity="0.75"
                        />
                      </svg>
                    </motion.div>

                    {/* Screen text */}
                    <motion.div
                      key={selected?.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="w-full text-center"
                      style={{
                        color: "var(--dark-green)",
                        textShadow: "0 2px 10px rgba(0,0,0,0.28)",
                        padding: "10px 12px",
                      }}
                    >
                      {/* Heading: bigger + themed */}
                      <div className="flex items-center justify-center gap-3">
                        {Icon && <Icon className="text-4xl" style={{ color: "var(--dark-green)" }} />}
                        <div
                          className="font-bold leading-tight"
                          style={{
                            fontFamily: "var(--font-pacifico)",
                            color: "var(--dark-green)",
                            fontSize: "clamp(2.0rem, 3.0vw, 2.6rem)", // bigger heading
                            lineHeight: 1.05,
                          }}
                        >
                          {selected?.name}
                        </div>
                      </div>

                      {/* little jukebox label */}
                      <div
                        className="mt-2 font-bold tracking-widest"
                        style={{
                          fontSize: "clamp(0.7rem, 1.0vw, 0.9rem)",
                          opacity: 0.8,
                          color: "var(--dark-pink)",
                        }}
                      >
                        {selected?.proficiency}
                      </div>

                      {/* Level */}
                      <div className="mt-2">{levelDots(selected?.level ?? 0)}</div>

                      {/* Detail (match your globals scale better) */}
                      <div
                        className="mt-3"
                        style={{
                          fontFamily: "var(--font-space-grotesk)",
                          fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                          lineHeight: 1.3,
                          opacity: 0.95,
                        }}
                      >
                        {selected?.detail}
                      </div>

                      {!!selected?.tags?.length && (
                        <div
                          className="mt-3 font-bold tracking-widest"
                          style={{
                            fontFamily: "var(--font-space-grotesk)",
                            fontSize: "clamp(0.72rem, 0.95vw, 0.85rem)",
                            opacity: 0.75,
                          }}
                        >
                          {selected.tags.slice(0, 6).join(" • ")}
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Buttons overlay (icon centered, larger) */}
                  {langs.map((lang, i) => {
                    const isActive = lang.id === selectedId;
                    const BtnIcon = lang.icon;

                    return (
                      <button
                        key={lang.id}
                        type="button"
                        onClick={() => setSelectedId(lang.id)}
                        className="absolute flex items-center justify-center"
                        style={{
                          left: BUTTONS[i]?.left ?? "50%",
                          top: BUTTONS[i]?.top ?? "80%",
                          transform: "translate(-50%, -50%)",
                          width: 70,
                          height: 64,
                          borderRadius: 999,
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                          boxShadow: isActive ? "0 0 16px 4px rgba(255, 219, 92, 0.28)" : "none",
                        }}
                        aria-pressed={isActive}
                        aria-label={`Show ${lang.name}`}
                      >
                        <BtnIcon
                          className="text-[30px] md:text-[34px]"
                          style={{
                            color: isActive ? "var(--red)" : "var(--dark-green)",
                            filter: isActive ? "drop-shadow(0 0 10px rgba(255, 219, 92, 0.45))" : "none",
                          }}
                        />
                      </button>
                    );
                  })}
                </div>

                <p
                  className="text-center text-[11px] tracking-widest mt-4"
                  style={{ color: "var(--dark-green)", opacity: 0.65 }}
                >
                  Tap a button to change the display
                </p>
              </div>
            );
          })()}
        </motion.section>

        {/* ===== CHECKERBOARD DIVIDER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.35 }}
        >
          <CheckerDivider
            className="mt-4 mb-8 justify-center" 
            fg="var(--teal)"
            bg="var(--light-teal)"
            height={30}
            squareSize={15}
          />
        </motion.div>

        {/* ===== HOBBIES SECTION ===== */}
        <motion.section
          id="hobbies"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8 scroll-mt-8"
        >
          <h2
            className="text-5xl font-bold text-center mb-2"
            style={{ fontFamily: "var(--font-heading)", color: "var(--dark-teal)" }}
          >
            HOBBIES
          </h2>
          <div
            className="mx-auto mb-4"
            style={{
              width: 160,
              height: 6,
              background:
                'repeating-linear-gradient(90deg, var(--dark-teal) 0 12px, transparent 12px 20px)',
              opacity: 0.7,
            }}
          />

          <p className="text-center text-sm tracking-widest mb-12" style={{ color: "var(--dark-green)", opacity: 0.75 }}>
            What I’m up to when I’m not coding or designing!
          </p>

          {(() => {
            const accentVars = (accent: "teal" | "pink" | "green" | "neutral") => {
              if (accent === "teal")
                return { bg: "var(--light-teal)", border: "var(--dark-teal)", stripe: "var(--dark-teal)", fill: "var(--teal)" };
              if (accent === "pink")
                return { bg: "var(--light-pink)", border: "var(--dark-pink)", stripe: "var(--dark-pink)", fill: "var(--pink)" };
              if (accent === "green")
                return { bg: "var(--light-green)", border: "var(--dark-green)", stripe: "var(--dark-green)", fill: "var(--green)" };
              return { bg: "var(--light-neutral)", border: "var(--dark-neutral)", stripe: "var(--dark-neutral)", fill: "var(--neutral)" };
            };

            const statPips = (count: number, border: string, fill: string) => (
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      background: i < count ? fill : "rgba(255,255,255,0.25)",
                      border: `2px solid ${border}`,
                      boxShadow: i < count ? `0 0 10px ${border}` : "none",
                    }}
                  />
                ))}
              </div>
            );

            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {hobbiesData.map((hobby, index) => {
                  const t = accentVars(hobby.accent);
                  const Icon = hobby.icon;

                  return (
                    <motion.div
                      key={hobby.id ?? hobby.name}
                      initial={{ opacity: 0, y: 14, rotate: index % 2 === 0 ? -2 : 2 }}
                      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, type: "spring", stiffness: 140, damping: 16 }}
                      whileHover={{ y: -10, rotate: index % 2 === 0 ? 2.5 : -2.5 }}
                      className="relative"
                    >
                      <div
                        className="relative overflow-hidden"
                        style={{
                          background: t.bg,
                          border: `5px solid ${t.border}`,
                          boxShadow: "0 18px 30px rgba(0,0,0,0.14)",
                          borderRadius: 26,
                          clipPath:
                            "polygon(0% 12%, 5% 0%, 95% 0%, 100% 12%, 100% 88%, 95% 100%, 5% 100%, 0% 88%)",
                        }}
                      >
                        {/* checker header strip */}
                        <div
                          className="absolute left-0 right-0 top-0 h-10"
                          style={{
                            background: `repeating-linear-gradient(90deg, rgba(0,0,0,0.18) 0 12px, rgba(255,255,255,0) 12px 24px)`,
                            borderBottom: `4px solid ${t.border}`,
                            opacity: 0.55,
                          }}
                        />

                        {/* badges */}
                        <div className="absolute left-3 top-1 flex items-center gap-2">
                          <div
                            className="text-[10px] font-bold px-2 py-1 rounded-full"
                            style={{
                              background: "rgba(255,255,255,0.78)",
                              border: `2px dashed ${t.border}`,
                              color: t.border,
                            }}
                          >
                            SERIES {hobby.year ?? "2026"}
                          </div>
                        </div>

                        <div className="absolute right-3 top-1">
                          <div
                            className="text-[10px] font-bold px-2 py-1 rounded-full"
                            style={{
                              background: "rgba(255,255,255,0.78)",
                              border: `2px solid ${t.border}`,
                              color: t.border,
                            }}
                          >
                            {hobby.rarity ?? "Common"}
                          </div>
                        </div>

                        {/* card content */}
                        <div className="relative pt-14 pb-5 px-5 group cursor-pointer">
                          {/* big icon medallion */}
                          <div className="flex justify-center">
                            <div
                              className="w-20 h-20 rounded-full flex items-center justify-center"
                              style={{
                                background: "rgba(255,255,255,0.55)",
                                border: `4px solid ${t.border}`,
                                boxShadow: "0 10px 18px rgba(0,0,0,0.12)",
                              }}
                            >
                              <Icon className="text-4xl" style={{ color: "var(--dark-green)" }} />
                            </div>
                          </div>

                          <div className="mt-4 text-center">
                            <h3
                              className="font-bold"
                              style={{
                                fontFamily: "var(--font-pacifico)",
                                color: t.border,
                                fontSize: "clamp(1.35rem, 2.1vw, 1.65rem)",
                                lineHeight: 1.15,
                              }}
                            >
                              {hobby.name}
                            </h3>

                            {/* description: appears on hover */}
                            <div
                              className="mt-3 text-small opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                              style={{
                                color: "var(--dark-green)",
                                lineHeight: 1.35,
                              }}
                            >
                              {hobby.description}
                            </div>
                          </div>

                          {/* stats + “card footer” */}
                          <div className="mt-4">
                            <div
                              className="rounded-2xl px-3 py-3"
                              style={{
                                background: "rgba(255,255,255,0.40)",
                                border: `2px solid ${t.border}`,
                              }}
                            >
                              <div className="flex items-center justify-between">
                                <div className="text-[10px] font-bold tracking-widest" style={{ color: t.border }}>
                                  STATS
                                </div>
                                <div className="text-[10px] font-bold tracking-widest" style={{ color: "var(--dark-green)", opacity: 0.8 }}>
                                  HT TRADING CARD
                                </div>
                              </div>

                              <div className="mt-2 space-y-2">
                                {(hobby.stats ?? []).slice(0, 2).map((s) => (
                                  <div key={s.label} className="flex items-center justify-between gap-3">
                                    <div className="text-[11px] font-bold" style={{ color: "var(--dark-green)" }}>
                                      {s.label.toUpperCase()}
                                    </div>
                                    {statPips(s.value, t.border, t.fill)}
                                  </div>
                                ))}
                              </div>

                              {/* hover hint */}
                              <div
                                className="mt-3 text-[10px] font-bold tracking-widest opacity-70 group-hover:opacity-100 transition-opacity"
                                style={{ color: t.border }}
                              >
                                HOVER TO REVEAL <PiStarFourFill />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* corner “shine” */}
                        <div
                          className="absolute -top-10 -right-10 w-32 h-32 rounded-full"
                          style={{
                            background: "rgba(255,255,255,0.22)",
                            transform: "rotate(18deg)",
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            );
          })()}
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}