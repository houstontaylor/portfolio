'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SideNav from '@/components/SideNav';
import ScrollToTop from '@/components/ScrollToTop';
import CheckerDivider from '@/components/about/CheckerDivider';
import RoadTripExperience from '@/components/about/RoadTripExperience';
import OrbitSkills from '@/components/about/OrbitSkills';
import PostcardEducation from '@/components/about/PostcardEducation';
import LangSkills from '@/components/about/LangSkills';
import TradingCardHobbies from '@/components/about/TradingCardHobbies';

export default function AboutPage() {
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
          className="mb-4 scroll-mt-8"
        >
          {/* Header SVG */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 flex justify-center"
          >
            <Image 
              src="/about/about.svg"
              alt="About Houston Taylor"
              width={800}
              height={250}
              className="w-3/5 h-auto"
            />
          </motion.h1>

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
            <PostcardEducation />
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
            <RoadTripExperience />
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

          <div className="relative mx-auto max-w-6xl">
            <OrbitSkills />
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

          <div className="w-full max-w-5xl mx-auto">
            <LangSkills />
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

          <div className="relative mx-auto max-w-6xl">
            <TradingCardHobbies />
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}