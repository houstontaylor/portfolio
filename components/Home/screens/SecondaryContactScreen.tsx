import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type ResumeType = 'ats' | 'creative';

export default function SecondaryContactScreen () {
  const [resumeType, setResumeType] = useState<ResumeType>('ats');

  const resume =
    resumeType === 'ats'
      ? {
          label: 'ATS-Friendly Resume',
          previewSrc: '/resumes/ATS.png',
          pdfHref: '/resumes/ATS.pdf',
          accent: 'var(--dark-teal)',
          bg: 'rgba(135, 201, 191, 0.28)',
          border: 'var(--dark-teal)',
          buttonBg: 'rgba(28, 173, 174, 0.22)',
        }
      : {
          label: 'Creative Resume',
          previewSrc: '/resumes/Creative.png',
          pdfHref: '/resumes/Creative.pdf',
          accent: 'var(--dark-pink)',
          bg: 'rgba(249, 219, 193, 0.55)',
          border: 'var(--dark-pink)',
          buttonBg: 'rgba(246, 163, 147, 0.28)',
        };

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
          style={{ color: 'var(--dark-green)', fontFamily: 'var(--font-heading)' }}
        >
          Contact
        </p>
        <div className="flex-1 h-px opacity-30" style={{ background: 'var(--dark-green)' }} />
        <p className="text-[10px] opacity-40 font-mono">DEEP DIVE</p>
      </motion.div>

      {/* main layout */}
      <div className="grid grid-cols-[0.82fr_1.18fr] gap-4 flex-1">
        {/* left controls */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-[24px] border-4 p-4 relative overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.42)',
              borderColor: 'var(--dark-neutral)',
            }}
          >
            <div className="absolute top-2 right-2 opacity-10">
              <svg width="34" height="34" viewBox="0 0 34 34">
                <circle cx="17" cy="17" r="3" fill="currentColor" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <line
                    key={i}
                    x1="17"
                    y1="17"
                    x2={17 + 11 * Math.cos((angle * Math.PI) / 180)}
                    y2={17 + 11 * Math.sin((angle * Math.PI) / 180)}
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                ))}
              </svg>
            </div>

            <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">
              Resume Type
            </p>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setResumeType('ats')}
                className="flex-1 rounded-full px-3 py-2 text-xs font-bold uppercase tracking-wider border-2 transition-all"
                style={{
                  background:
                    resumeType === 'ats'
                      ? 'var(--light-teal)'
                      : 'rgba(255,255,255,0.45)',
                  borderColor: 'var(--dark-teal)',
                  color: 'var(--dark-teal)',
                }}
              >
                ATS
              </button>

              <button
                type="button"
                onClick={() => setResumeType('creative')}
                className="flex-1 rounded-full px-3 py-2 text-xs font-bold uppercase tracking-wider border-2 transition-all"
                style={{
                  background:
                    resumeType === 'creative'
                      ? 'var(--light-pink)'
                      : 'rgba(255,255,255,0.45)',
                  borderColor: 'var(--dark-pink)',
                  color: 'var(--dark-pink)',
                }}
              >
                Creative
              </button>
            </div>

            <p className="text-sm mt-4 leading-relaxed opacity-85">
              A quick preview of my {resumeType === 'ats' ? 'ATS-friendly' : 'creative'} resume.
            </p>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.4 }}
            href={resume.pdfHref}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-full border-2 px-5 py-3 text-center text-sm font-bold uppercase tracking-wider transition-colors"
            style={{
              background: resume.buttonBg,
              borderColor: resume.border,
              color: resume.accent,
            }}
          >
            View Resume
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.4 }}
            href={resume.pdfHref}
            download
            className="block rounded-full border-2 px-5 py-3 text-center text-sm font-bold uppercase tracking-wider transition-colors"
            style={{
              background: 'rgba(255,255,255,0.5)',
              borderColor: resume.border,
              color: resume.accent,
            }}
          >
            Download PDF
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="rounded-[20px] border-3 p-4"
            style={{
              background: 'rgba(223,206,163,0.35)',
              borderColor: 'var(--dark-neutral)',
            }}
          >
            <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">
              Quick Note
            </p>
            <p className="text-sm leading-relaxed">
              The ATS version is best for recruiters and applications. The creative version shows more of my visual style.
            </p>
          </motion.div>
        </div>

        {/* right preview */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-[28px] border-4 p-3 relative overflow-hidden"
          style={{
            background: resume.bg,
            borderColor: resume.border,
          }}
        >
          {/* decorative corner */}
          <div
            className="absolute top-0 right-0 w-16 h-16 rotate-45 translate-x-8 -translate-y-8 opacity-70"
            style={{ background: resume.accent }}
          />

          <div className="relative z-10 mb-3">
            <h3
              className="text-lg leading-tight"
              style={{ color: resume.accent }}
            >
              {resume.label}
            </h3>
            <p className="text-xs font-bold uppercase tracking-widest opacity-65 mt-1">
              Preview
            </p>
          </div>

          <div
            className="relative rounded-[18px] overflow-hidden border-3 bg-white/75 h-[335px]"
            style={{ borderColor: 'rgba(0,0,0,0.18)' }}
          >
            <Image
              src={resume.previewSrc}
              alt={resume.label}
              fill
              className="object-cover object-top"
            />
          </div>
        </motion.div>
      </div>

      {/* bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.28 }}
        className="text-center mt-6 relative"
      >
        <motion.div
          className="absolute left-1/4 top-1/2 -translate-y-1/2"
          animate={{ x: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M 15 10 L 5 5 L 5 15 Z" fill={resume.accent} opacity="0.4" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute right-1/4 top-1/2 -translate-y-1/2"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M 5 10 L 15 5 L 15 15 Z" fill={resume.accent} opacity="0.4" />
          </svg>
        </motion.div>

        <Link href="/resume">
          <div
            className="inline-block border-2 rounded-full px-6 py-2 cursor-pointer transition-colors"
            style={{
              background: resume.buttonBg,
              borderColor: resume.border,
            }}
          >
            <p
              className="text-sm font-bold uppercase tracking-wider"
              style={{ color: resume.accent }}
            >
              View Full Resume Page →
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