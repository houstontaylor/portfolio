'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useMemo, useRef } from 'react';

export type ThemeKey = 'teal' | 'pink' | 'green' | 'neutral';

export type RoadTripItem = {
  title: string;
  company: string;
  period: string;
  description: string[];
  tags: string[];
  theme?: ThemeKey;
  signSrc: string;
  location?: string;
  signText?: string;
  overlayPreset?: 'default' | 'wideTop';
};

const themeVars: Record<ThemeKey, { light: string; dark: string }> = {
  teal: { light: 'var(--light-teal)', dark: 'var(--dark-teal)' },
  pink: { light: 'var(--light-pink)', dark: 'var(--dark-pink)' },
  green: { light: 'var(--light-green)', dark: 'var(--dark-green)' },
  neutral: { light: 'var(--light-neutral)', dark: 'var(--dark-neutral)' },
};

type Props = {
  items: RoadTripItem[];
  carSrc?: string;
  height?: number;
  className?: string;
};

const overlayPresets = {
  default: { 
    paddingTop: 0,
    paddingBottom: 38,
    tagsTop: -45,
    offset: 25,
  },
  wideTop: { 
    paddingTop: 0, 
    paddingBottom: 110,
    tagsTop: -65,
    offset: 0,
  },
} as const;

export default function RoadTripExperience({
  items,
  carSrc = '/about/belair.svg',
  height = 1400,
  className = '',
}: Props) {
  const roadRef = useRef<HTMLDivElement | null>(null);
  const WIGGLES = 3; // number of left/right swings down the road
  const AMP = 15;    // px sway for car + anchor
  const SIGN_WIDTH = 450;
  const SIDE_OFFSET = 80;
  
  const { scrollYProgress } = useScroll({
    target: roadRef,
    offset: ['start end', 'end start'],
  });

  // initial sign and car placement calcs
  const roadX = (p: number) => Math.sin(p * Math.PI * 2 * WIGGLES) * AMP;
  const roadRot = (p: number) => Math.cos(p * Math.PI * 2 * WIGGLES) * 6;

  const carYRaw = useTransform(scrollYProgress, [0, 1], [15, height - 100]);
  const carXRaw = useTransform(scrollYProgress, roadX);
  const carRotRaw = useTransform(scrollYProgress, roadRot);

  // smooth final vals
  const carY = useSpring(carYRaw, { stiffness: 180, damping: 28 });
  const carX = useSpring(carXRaw, { stiffness: 180, damping: 28 });
  const carRot = useSpring(carRotRaw, { stiffness: 180, damping: 28 });

  const stopMeta = useMemo(() => {
    const n = items.length;
    const topPad = 200;
    const bottomPad = 300;
    const usable = Math.max(1, height - topPad - bottomPad);

    return items.map((_, i) => {
      const top = topPad + (usable * i) / Math.max(1, n - 1);
      const p = (top - topPad) / usable;
      return { top, p };
    });
  }, [items, height]);


  return (
    <div ref={roadRef} className={`relative w-full ${className}`} style={{ height }}>
      {/* Winding road */}
      <div className="absolute inset-0 pointer-events-none">
        <svg viewBox="0 0 900 1200" className="w-full h-full" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M450 0
               C 540 130, 360 250, 450 360
               C 540 470, 360 590, 450 700
               C 540 810, 360 930, 450 1040
               C 520 1120, 410 1160, 450 1200"
            fill="none"
            stroke="rgba(0,0,0,0.10)"
            strokeWidth="64"
            strokeLinecap="round"
          />
          <path
            d="M450 0
               C 540 130, 360 250, 450 360
               C 540 470, 360 590, 450 700
               C 540 810, 360 930, 450 1040
               C 520 1120, 410 1160, 450 1200"
            fill="none"
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="56"
            strokeLinecap="round"
          />
          <path
            d="M450 0
               C 540 130, 360 250, 450 360
               C 540 470, 360 590, 450 700
               C 540 810, 360 930, 450 1040
               C 520 1120, 410 1160, 450 1200"
            fill="none"
            stroke="var(--dark-pink)"
            strokeWidth="6"
            strokeDasharray="16 18"
            strokeLinecap="round"
            opacity="0.35"
          />
        </svg>
      </div>

      {/* Bel Air */}
      <motion.div
        className="hidden md:block absolute left-1/2 -translate-x-1/2 z-30 pointer-events-none"
        style={{ y: carY, x: carX, rotate: carRot }}
      >
        <Image
          src={carSrc}
          alt=""
          width={120}
          height={120}
          className="drop-shadow-[0_18px_22px_rgba(0,0,0,0.18)]"
        />
      </motion.div>

      {/* Stops */}
      {items.map((exp, index) => {
        const isLeft = index % 2 === 0;
        const { top, p } = stopMeta[index] ?? { top: 50, p: 0 };

        const direction = isLeft ? -1 : 1;
        const x = roadX(p) + direction * (SIDE_OFFSET + SIGN_WIDTH / 2);

        const themeKey = (exp.theme ?? 'neutral') as ThemeKey;
        const t = themeVars[themeKey];
        const signSrc = exp.signSrc;

        const presetKey = exp.overlayPreset ?? 'default';
        const preset = overlayPresets[presetKey];

        return (
          <motion.div
            key={`${exp.company}-${exp.title}-${index}`}
            className="absolute w-full"
            style={{ top }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <div
              className="hidden md:block absolute top-1/2 left-1/2"
              style={{
                transform: `translate(${x}px, -50%) translateX(-50%)`,
              }}
            >
              {/* Sign */}
              <div 
                className={`relative flex ${isLeft ? 'md:justify-start' : 'md:justify-end'} justify-center`}
              >
                <motion.div whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
                  <div className="relative group">
                    <Image
                      src={signSrc}
                      alt=""
                      width={680}
                      height={480}
                      className="w-full"
                      style={{
                        width: SIGN_WIDTH,
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 18px 22px rgba(0,0,0,0.18))',
                      }}
                    />

                    {/* Content overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                      className="relative"
                      style={{
                        paddingTop: preset.paddingTop,
                        paddingBottom: preset.paddingBottom,
                        paddingLeft: isLeft ? 24 : 32,
                        paddingRight: isLeft ? 32 : 24,
                        width: SIGN_WIDTH - 64,
                      }}
                    >
                      {/* Time worked */}
                      <div
                        className="absolute right-0 top-[-10px] text-[10px] font-bold px-2 py-1 rounded-full"
                        style={{
                          background: 'rgba(255,255,255,0.75)',
                          border: `2px dashed ${t.dark}`,
                          color: t.dark,
                        }}
                      >
                        {exp.period}
                      </div>

                      <div className="h-full grid grid-cols-[44%_56%] gap-3 items-start">
                        {/* Left: title + company */}
                        <div className="min-w-0 pr-1">
                          <h3
                            className="font-bold leading-tight"
                            style={{
                              color: t.dark,
                              fontSize: 'clamp(1.10rem, 1.4vw, 1.3rem)',
                            }}
                          >
                            {exp.title}
                          </h3>

                          <p
                            className="font-bold mt-1"
                            style={{
                              color: 'var(--dark-green)',
                              opacity: 0.9,
                              fontSize: 'clamp(0.85rem, 1vw, 1rem)',
                              lineHeight: 1.2,
                            }}
                          >
                            {exp.company}
                          </p>
                        </div>

                        {/* Right: bullets */}
                        <div className="min-w-0 pt-7">
                          <ul
                            className="list-disc pl-5"
                            style={{
                              color: 'var(--dark-green)',
                              opacity: 0.88,
                              fontSize: 'clamp(0.75rem, 0.95vw, 0.9rem)',
                              lineHeight: 1.35,
                            }}
                          >
                            {exp.description.slice(0, 3).map((line) => (
                              <li key={line}>{line}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Tags: appear on hover */}
                      <div 
                        className="absolute justify-center flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                        style={{ 
                          top: preset.tagsTop,
                          left: `${preset.offset}%`,
                          right: `${preset.offset}%`,
                        }}
                      >
                        {exp.tags.slice(0, 6).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded-full font-bold"
                            style={{
                              background: 'rgba(255,255,255,0.55)',
                              border: `1px solid ${t.dark}`,
                              color: t.dark,
                              fontSize: 'clamp(0.68rem, 0.8vw, 0.78rem)',
                              lineHeight: 1.05,
                              pointerEvents: 'none',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Mobile fallback */}
            <div className={`md:hidden relative flex justify-center px-2`}>
              <div className="w-full max-w-xl relative">
                <Image
                  src={signSrc}
                  alt=""
                  width={700}
                  height={700}
                  className="w-full"
                  style={{
                    height: 220,
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 18px 22px rgba(0,0,0,0.18))',
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-center px-6">
                  <h3 className="text-xl font-bold leading-tight" style={{ color: t.dark }}>
                    {exp.title}
                  </h3>
                  <p className="text-sm font-bold mb-2" style={{ color: 'var(--dark-green)', opacity: 0.9 }}>
                    {exp.company} • {exp.period}
                  </p>
                  <ul className="text-sm leading-snug list-disc pl-5" style={{ color: 'var(--dark-green)', opacity: 0.85 }}>
                    {exp.description.slice(0, 3).map((line) => <li key={line}>{line}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
