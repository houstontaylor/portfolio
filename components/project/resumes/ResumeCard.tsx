'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type ResumeCardProps = {
  title: string;
  blurb: string;
  previewSrc: string;
  pdfHref: string;
  accent: 'pink' | 'teal';
};

export default function ResumeCard({ title, blurb, previewSrc, pdfHref, accent }: ResumeCardProps) {
  const accentVar =
    accent === 'pink' ? 'var(--dark-pink)' : 'var(--dark-teal)';

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="relative"
    >
      {/* frame */}
      <div
        className="rounded-[28px] p-[10px] shadow-[0_22px_40px_rgba(0,0,0,0.18)]"
        style={{ background: 'var(--red)' }}
      >
        {/* inner paper */}
        <div
          className="rounded-[20px] px-7 pt-7 pb-6"
          style={{
            background: 'rgba(from var(--light-neutral) r g b / 0.92)',
            border: '3px solid rgba(0,0,0,0.08)',
          }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h2
                className="font-extrabold tracking-wide"
                style={{
                  color: accentVar,
                  fontFamily: 'var(--font-cherry-cream-soda), system-ui',
                  fontSize: 'clamp(1.3rem, 2.1vw, 1.7rem)',
                  lineHeight: 1.1,
                }}
              >
                {title}
              </h2>
              <p
                className="mt-2 text-sm"
                style={{ color: 'rgba(0,0,0,0.65)', lineHeight: 1.35 }}
              >
                {blurb}
              </p>
            </div>

            {/* tiny stamp */}
            <div
              className="shrink-0 rounded-full px-3 py-2 text-[11px] font-extrabold tracking-widest"
              style={{
                background: 'rgba(0,0,0,0.06)',
                border: '2px dashed rgba(0,0,0,0.20)',
                color: 'rgba(0,0,0,0.65)',
              }}
            >
              PDF
            </div>
          </div>

          {/* preview */}
          <div
            className="mt-6 overflow-hidden rounded-[16px]"
            style={{
              border: '3px solid rgba(0,0,0,0.18)',
              background: 'rgba(255,255,255,0.35)',
            }}
          >
            <Image
              src={previewSrc}
              alt={`${title} preview`}
              width={900}
              height={1200}
              className="w-full h-auto"
            />
          </div>

          {/* actions */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <a href={pdfHref} target="_blank" rel="noopener noreferrer" className="block">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-full py-3 text-sm font-extrabold tracking-widest"
                style={{
                  background: accentVar,
                  color: 'rgba(255,255,255,0.96)',
                  border: '3px solid rgba(0,0,0,0.18)',
                  boxShadow: '0 14px 22px rgba(0,0,0,0.14)',
                  cursor: 'pointer',
                }}
              >
                VIEW
              </motion.button>
            </a>

            <a href={pdfHref} download className="block">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-full py-3 text-sm font-extrabold tracking-widest"
                style={{
                  background: 'rgba(0,0,0,0.08)',
                  color: 'rgba(0,0,0,0.72)',
                  border: '3px solid rgba(0,0,0,0.18)',
                  boxShadow: '0 14px 22px rgba(0,0,0,0.10)',
                  cursor: 'pointer',
                }}
              >
                DOWNLOAD
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}