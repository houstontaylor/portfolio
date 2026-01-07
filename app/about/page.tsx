'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Header from '../../components/Header';
import SideNav from '../../components/SideNav';
import ScrollToTop from '../../components/ScrollToTop';
import { educationData } from '../data/education';
import { experienceData } from '../data/experience';
import { softwareSkills, languageSkills } from '../data/skills';
import { hobbiesData } from '../data/hobbies';

export default function AboutPage() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const sections = [
    { id: 'intro', label: 'Intro' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'hobbies', label: 'Hobbies' },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <SideNav sections={sections} />
      <ScrollToTop />

      {/* Checkerboard background pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(45deg, var(--dark-neutral) 25%, transparent 25%),
            linear-gradient(-45deg, var(--dark-neutral) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, var(--dark-neutral) 75%),
            linear-gradient(-45deg, transparent 75%, var(--dark-neutral) 75%)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }}/>
      </div>
      
      <main className="pt-8 pb-8 px-8 max-w-6xl mx-auto relative z-10">
        {/* ===== INTRO SECTION ===== */}
        <motion.section
          id="intro"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-32 scroll-mt-32"
        >
          {/* Header SVG */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 flex justify-center"
          >
            <Image 
              src="/about.svg"
              alt="About"
              width={800}
              height={200}
              className="w-3/4 h-auto"
            />
          </motion.div>

          {/* Intro Card - Diner Booth Style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-pink via-light-pink to-pink border-4 border-dark-pink rounded-3xl p-10 relative overflow-hidden shadow-2xl"
          >
            {/* Diner stripe accent */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-dark-pink opacity-80"/>
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-dark-pink opacity-80"/>

            {/* Atomic starburst decorations */}
            <div className="absolute top-8 right-8 opacity-20">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="5" fill="var(--dark-pink)"/>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <line
                    key={i}
                    x1="40"
                    y1="40"
                    x2={40 + 30 * Math.cos((angle * Math.PI) / 180)}
                    y2={40 + 30 * Math.sin((angle * Math.PI) / 180)}
                    stroke="var(--dark-pink)"
                    strokeWidth="3"
                  />
                ))}
              </svg>
            </div>

            <div className="flex gap-10 items-center">
              {/* Vector Photo */}
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-dark-pink rounded-full blur-xl opacity-30"/>
                  <Image 
                    src="/HTDiamond.svg"
                    alt="Houston Taylor"
                    width={200}
                    height={200}
                    className="relative z-10 drop-shadow-2xl"
                  />
                </div>
              </motion.div>

              {/* Bio Text */}
              <div className="flex-1 relative z-10">
                <motion.h2 
                  className="text-4xl font-bold mb-6"
                  style={{ color: 'var(--dark-pink)' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Hi there, I'm Houston Taylor! 👋
                </motion.h2>
                
                <motion.div 
                  className="space-y-4 text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <p>
                    I'm a recent graduate from <strong>Stanford University</strong> with both my Bachelor's (2024) and Master's (2025) in Computer Science, specializing in Human-Computer Interaction.
                  </p>
                  <p>
                    I'm passionate about creating <strong>accessible, functional, and useful products</strong>. I believe needfinding and user interviews are essential to building things people actually want to use.
                  </p>
                  <p>
                    Beyond tech, I'm interested in the intersection of technology, law, and policy — I'd love to pursue a law degree someday to work at that crossroads.
                  </p>
                  <p className="text-base italic opacity-90">
                    Thanks for taking the time to learn more about me! 🚀
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* ===== CHECKERBOARD DIVIDER ===== */}
        <div className="mb-20">
          <div className="h-8 w-full" style={{
            backgroundImage: `
              linear-gradient(45deg, var(--dark-pink) 25%, var(--pink) 25%),
              linear-gradient(-45deg, var(--dark-pink) 25%, var(--pink) 25%),
              linear-gradient(45deg, var(--pink) 75%, var(--dark-pink) 75%),
              linear-gradient(-45deg, var(--pink) 75%, var(--dark-pink) 75%)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
          }}/>
        </div>

        {/* ===== EDUCATION SECTION ===== */}
        <motion.section
          id="education"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-32 scroll-mt-32"
        >
          <h2 className="text-5xl font-bold text-center mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--dark-teal)' }}>
            EDUCATION
          </h2>
          <p className="text-center text-lg mb-12 opacity-80">
            Click the postcards to flip them over!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="perspective-1000"
              >
                <motion.div
                  className="relative h-96 cursor-pointer"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => setFlippedCard(flippedCard === index ? null : index)}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Front of card */}
                  <div 
                    className="absolute inset-0 backface-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="h-full bg-light-teal border-4 border-dark-teal rounded-2xl overflow-hidden shadow-xl">
                      <Image 
                        src={edu.postcard}
                        alt={`${edu.school} postcard`}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Postcard stamp */}
                      <div className="absolute top-4 right-4 text-xs opacity-70 bg-white/80 px-2 py-1 rounded border-2 border-dashed border-dark-teal">
                        📮 CLICK TO FLIP
                      </div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div 
                    className="absolute inset-0 backface-hidden"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div className="h-full bg-light-teal border-4 border-dark-teal rounded-2xl p-6 overflow-auto shadow-xl">
                      <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--dark-teal)' }}>
                        {edu.school}
                      </h3>
                      <p className="text-sm mb-1">{edu.degree}</p>
                      <p className="text-sm font-bold mb-1">{edu.focus}</p>
                      <p className="text-xs opacity-70 mb-4">{edu.year}</p>

                      <div className="mb-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-2">Coursework:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <span key={course} className="px-2 py-1 bg-white/70 rounded-full text-xs border border-dark-teal">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-2">Clubs & Activities:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.clubs.map((club) => (
                            <span key={club} className="px-2 py-1 bg-dark-teal/20 rounded-full text-xs border border-dark-teal">
                              {club}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ===== CHECKERBOARD DIVIDER ===== */}
        <div className="mb-20">
          <div className="h-8 w-full" style={{
            backgroundImage: `
              linear-gradient(45deg, var(--dark-teal) 25%, var(--teal) 25%),
              linear-gradient(-45deg, var(--dark-teal) 25%, var(--teal) 25%),
              linear-gradient(45deg, var(--teal) 75%, var(--dark-teal) 75%),
              linear-gradient(-45deg, var(--teal) 75%, var(--dark-teal) 75%)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
          }}/>
        </div>

        {/* ===== EXPERIENCE SECTION ===== */}
        <motion.section
          id="experience"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-32 scroll-mt-32"
        >
          <h2 className="text-5xl font-bold text-center mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--dark-green)' }}>
            EXPERIENCE
          </h2>
          <p className="text-center text-lg mb-12 opacity-80">
            My journey through tech, teaching, and service 💼
          </p>

          {/* Timeline style layout */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-dark-green/30 -translate-x-1/2 hidden md:block"/>

            <div className="space-y-12">
              {experienceData.map((exp, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative md:flex ${isLeft ? 'md:justify-end' : 'md:justify-start'} items-center`}
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-dark-green border-4 border-background rounded-full z-10"/>

                    {/* Experience card */}
                    <div className={`md:w-5/12 ${exp.color} ${exp.border} border-4 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow relative overflow-hidden group`}>
                      {/* Retro corner decoration */}
                      <div className={`absolute top-0 ${isLeft ? 'right-0' : 'left-0'} w-16 h-16 opacity-20`}>
                        <svg viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="8" fill="currentColor"/>
                          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                            <line
                              key={i}
                              x1="50"
                              y1="50"
                              x2={50 + 35 * Math.cos((angle * Math.PI) / 180)}
                              y2={50 + 35 * Math.sin((angle * Math.PI) / 180)}
                              stroke="currentColor"
                              strokeWidth="3"
                            />
                          ))}
                        </svg>
                      </div>

                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-2xl font-bold mb-1 group-hover:scale-105 transition-transform origin-left">
                              {exp.title}
                            </h3>
                            <p className="text-lg font-semibold opacity-90">{exp.company}</p>
                          </div>
                          <span className="text-sm font-bold px-3 py-1 bg-white/60 rounded-full whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>

                        <p className="mb-4 opacity-90">{exp.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-white/80 rounded-full text-xs font-bold border-2"
                              style={{ borderColor: `var(--${exp.border.split('-')[1]})` }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* ===== CHECKERBOARD DIVIDER ===== */}
        <div className="mb-20">
          <div className="h-8 w-full" style={{
            backgroundImage: `
              linear-gradient(45deg, var(--dark-green) 25%, var(--green) 25%),
              linear-gradient(-45deg, var(--dark-green) 25%, var(--green) 25%),
              linear-gradient(45deg, var(--green) 75%, var(--dark-green) 75%),
              linear-gradient(-45deg, var(--green) 75%, var(--dark-green) 75%)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
          }}/>
        </div>

        {/* ===== SKILLS SECTION ===== */}
        <motion.section
          id="skills"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-32 scroll-mt-32"
        >
          <h2 className="text-5xl font-bold text-center mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--dark-neutral)' }}>
            SKILLS
          </h2>
          <p className="text-center text-lg mb-12 opacity-80">
            Hover or click the satellites for details! 🛰️
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
        <div className="mb-20">
          <div className="h-8 w-full" style={{
            backgroundImage: `
              linear-gradient(45deg, var(--dark-neutral) 25%, var(--neutral) 25%),
              linear-gradient(-45deg, var(--dark-neutral) 25%, var(--neutral) 25%),
              linear-gradient(45deg, var(--neutral) 75%, var(--dark-neutral) 75%),
              linear-gradient(-45deg, var(--neutral) 75%, var(--dark-neutral) 75%)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
          }}/>
        </div>

        {/* ===== HOBBIES SECTION ===== */}
        <motion.section
          id="hobbies"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 scroll-mt-32"
        >
          <h2 className="text-5xl font-bold text-center mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--red)' }}>
            HOBBIES & INTERESTS
          </h2>
          <p className="text-center text-lg mb-12 opacity-80">
            What I do when I'm not coding 🎨
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