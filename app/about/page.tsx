'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import Header from '@/components/Header';
import SideNav from '@/components/SideNav';
import ScrollToTop from '@/components/ScrollToTop';
import CheckerDivider from '@/components/CheckerDivider';
import RoadTripExperience from '@/components/RoadTripExperience';
import { educationData } from '../data/education';
import { experienceData } from '../data/experience';
import { softwareSkills, languageSkills } from '../data/skills';
import { hobbiesData } from '../data/hobbies';

export default function AboutPage() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const allSkills = useMemo(() => {
    return [
      ...softwareSkills.map((s) => ({ ...s, group: 'Software' as const })),
      ...languageSkills.map((s) => ({ ...s, group: 'Languages' as const })),
    ];
  }, []);

  const selectedSkill = useMemo(() => {
    if (!activeSkill) return null;
    return allSkills.find((s) => s.name === activeSkill) || null;
  }, [activeSkill, allSkills]);

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
                  { left: '35%',  top: '10px',  rotate: -3, z: 20 }, // Bachelor's
                  { left: '1%', top: '120px',  rotate: 3,  z: 30 }, // Master's
                  { left: '68%', top: '160px', rotate: 2,  z: 10 }, // Paris
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
          <h2 className="text-5xl font-bold text-center mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--dark-pink)' }}>
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
          className="mb-8 scroll-mt-8"
        >
          <h2 className="text-5xl font-bold text-center mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--dark-green)' }}>
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
          <p
            className="text-center text-sm tracking-widest mb-12"
            style={{ color: 'var(--dark-green)', opacity: 0.75 }}
          >
            Click or hover on each skill to learn more!
          </p>

          <div className="relative w-full max-w-4xl mx-auto h-[600px] flex items-center justify-center">
            {/* Center planet */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-40 h-40 bg-gradient-to-br from-neutral via-light-neutral to-neutral border-4 border-dark-neutral rounded-full flex items-center justify-center z-20 shadow-2xl"
            >
              <span className="text-3xl font-bold" style={{ color: 'var(--dark-neutral)' }}>
                Skills
              </span>
            </motion.div>

            {/* Orbital rings */}
            {[1, 2].map((ring) => (
              <motion.div
                key={ring}
                className="absolute border-2 border-dashed rounded-full opacity-30"
                style={{
                  width: `${ring * 240}px`,
                  height: `${ring * 240}px`,
                  borderColor: ring === 1 ? 'var(--dark-neutral)' : 'var(--neutral)'
                }}
                animate={{ rotate: ring === 1 ? 360 : -360 }}
                transition={{ duration: ring === 1 ? 60 : 80, repeat: Infinity, ease: "linear" }}
              />
            ))}

            {/* Software Skills - Inner orbit */}
            {softwareSkills.map((skill, index) => {
              const radius = 240;
              const x = radius * Math.cos((skill.angle * Math.PI) / 180);
              const y = radius * Math.sin((skill.angle * Math.PI) / 180);
              const isActive = activeSkill === skill.name;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ scale: 0 }}
                  whileInView={{ 
                    scale: 1,
                    x,
                    y
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.8 + index * 0.1,
                    type: "spring"
                  }}
                  whileHover={{ scale: 1.3, zIndex: 30 }}
                  onClick={() => setActiveSkill(isActive ? null : skill.name)}
                  className="absolute w-24 h-24 bg-light-teal border-4 border-dark-teal rounded-full flex flex-col items-center justify-center cursor-pointer shadow-lg hover:shadow-2xl transition-shadow group"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                  <span className="text-xs font-bold mt-1 text-center">{skill.name}</span>

                  {/* Tooltip on hover */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute top-full mt-2 bg-dark-teal text-white px-4 py-2 rounded-lg text-xs whitespace-nowrap shadow-xl z-50 border-2 border-teal"
                    >
                      {skill.detail}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-dark-teal"/>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}

            {/* Languages - Outer orbit */}
            {languageSkills.map((lang, index) => {
              const radius = 360;
              const x = radius * Math.cos((lang.angle * Math.PI) / 180);
              const y = radius * Math.sin((lang.angle * Math.PI) / 180);
              const isActive = activeSkill === lang.name;

              return (
                <motion.div
                  key={lang.name}
                  initial={{ scale: 0 }}
                  whileInView={{ 
                    scale: 1,
                    x,
                    y
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 1.2 + index * 0.1,
                    type: "spring"
                  }}
                  whileHover={{ scale: 1.3, zIndex: 30 }}
                  onClick={() => setActiveSkill(isActive ? null : lang.name)}
                  className="absolute w-20 h-20 bg-light-pink border-4 border-dark-pink rounded-full flex flex-col items-center justify-center cursor-pointer shadow-lg hover:shadow-2xl transition-shadow group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">{lang.icon}</span>
                  <span className="text-xs font-bold mt-1 text-center">{lang.name}</span>

                  {/* Tooltip on hover */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute top-full mt-2 bg-dark-pink text-white px-4 py-2 rounded-lg text-xs whitespace-nowrap shadow-xl z-50 border-2 border-pink"
                    >
                      {lang.detail}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-dark-pink"/>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}

            {/* Floating stars decoration */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute text-yellow-400 opacity-60"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ 
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              >
                ✨
              </motion.div>
            ))}
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

        {/* ===== LANGUAGE SKILLS SECTION ===== */}
        <motion.section
          id="langSkills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8 scroll-mt-8"
        >
          <h2 className="text-5xl font-bold text-center mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--dark-pink)' }}>
            LANGUAGE SKILLS
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
            Beyond technology, I love learning new modes of communication and languages!
          </p>
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
          <h2 className="text-5xl font-bold text-center mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--dark-teal)' }}>
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
          <p
            className="text-center text-sm tracking-widest mb-12"
            style={{ color: 'var(--dark-green)', opacity: 0.75 }}
          >
            What I'm up to when I'm not coding or designing!
          </p>

          {/* Jukebox/Record Player Style Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {hobbiesData.map((hobby, index) => (
              <motion.div
                key={hobby.name}
                initial={{ opacity: 0, rotate: -10 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  rotate: index % 2 === 0 ? 5 : -5,
                  scale: 1.05
                }}
                className={`${hobby.color} border-4 border-dark-${hobby.color.split('-')[1] || 'pink'} rounded-2xl p-6 cursor-pointer shadow-lg hover:shadow-2xl transition-all group relative overflow-hidden`}
              >
                {/* Vinyl record circle decoration */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-black/10 rounded-full opacity-50"/>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-black/20 rounded-full"/>

                <div className="relative z-10 text-center">
                  <motion.div 
                    className="text-6xl mb-3"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {hobby.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 group-hover:scale-105 transition-transform">
                    {hobby.name}
                  </h3>

                  {/* Description shows on hover */}
                  <motion.p 
                    className="text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    {hobby.description}
                  </motion.p>
                </div>

                {/* Soundwave decoration on hover */}
                <div className="absolute bottom-2 left-2 right-2 h-1 opacity-0 group-hover:opacity-30 transition-opacity">
                  <div className="flex gap-1 h-full items-end justify-center">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-black rounded-full"
                        animate={{ 
                          height: [`${20 + Math.random() * 80}%`, `${20 + Math.random() * 80}%`] 
                        }}
                        transition={{ 
                          duration: 0.5,
                          repeat: Infinity,
                          delay: i * 0.1
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fun footer note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-lg italic opacity-70">
              "Life is about balance - code by day, create by night!" ✨
            </p>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}