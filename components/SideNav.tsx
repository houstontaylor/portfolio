'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

interface SideNavProps {
  sections: { id: string; label: string }[];
  startSentinelId?: string; // appear after this leaves viewport
  endSentinelId?: string;   // hide when this enters viewport
}

export default function SideNav({
  sections,
  startSentinelId = 'sidenav-start',
  endSentinelId = 'sidenav-end',
}: SideNavProps) {
  const [activeSection, setActiveSection] = useState('');
  const [pastStart, setPastStart] = useState(false);
  const [beforeEnd, setBeforeEnd] = useState(true);

  const showNav = pastStart && beforeEnd;

  const topSrc = '/nav/remoteTop.svg';
  const middleSrc = '/nav/remoteMiddle.svg';
  const bottomSrc = '/nav/remoteBottom.svg';

  const width = 140;
  const rowHeight = 44;
  const rowGap = 5;
  const panelPaddingY = 15;
  const panelPaddingX = 12;

  const middleHeight = useMemo(() => {
    return panelPaddingY * 2 + sections.length * rowHeight + Math.max(0, sections.length - 1) * rowGap;
  }, [sections.length]);

  // Header/footer bound visibility
  useEffect(() => {
    const startEl = document.getElementById(startSentinelId);
    const endEl = document.getElementById(endSentinelId);

    if (!startEl || !endEl) {
      // fallback: show always if sentinels not found
      setPastStart(true);
      setBeforeEnd(true);
      return;
    }

    const startObs = new IntersectionObserver(
      ([entry]) => {
        // if start sentinel is visible, we're still at the top; nav should be hidden
        setPastStart(!entry.isIntersecting);
      },
      { threshold: 0.01 }
    );

    const endObs = new IntersectionObserver(
      ([entry]) => {
        // if end sentinel is visible, we're near footer; nav should hide
        setBeforeEnd(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    startObs.observe(startEl);
    endObs.observe(endEl);

    return () => {
      startObs.disconnect();
      endObs.disconnect();
    };
  }, [startSentinelId, endSentinelId]);

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: showNav ? 1 : 0, x: showNav ? 0 : -20 }}
      transition={{ duration: 0.35 }}
      className="fixed left-8 top-1/3 -translate-y-1/2 z-40"
      style={{ pointerEvents: showNav ? 'auto' : 'none' }}
      aria-hidden={!showNav}
    >
      {/* TOP SLICE */}
      <div style={{ position: 'relative', width: '100%' }}>
        <Image
          src={topSrc}
          alt=""
          width={width}
          height={1}
          style={{ width: '100%', height: 'auto', display: 'block' }}
          priority
        />
      </div>

      {/* MIDDLE SLICE + BUTTONS */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: middleHeight,
          backgroundImage: `url(${middleSrc})`,
          backgroundRepeat: 'repeat-y',
          backgroundSize: '100% auto',
          display: 'block',
          marginTop: -1,
          marginBottom: -1,
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            padding: `${panelPaddingY}px ${panelPaddingX}px`,
            display: 'flex',
            flexDirection: 'column',
            gap: rowGap,
            boxSizing: 'border-box',
          }}
        >
          {sections.map((s) => {
            const isActive = activeSection === s.id;

            return (
              <motion.button
                key={s.id}
                type="button"
                onClick={() => scrollToSection(s.id)}
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  height: rowHeight,
                  width: '100%',
                  border: 0,
                  background: 'transparent',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '0 8px',
                  borderRadius: 10,
                  outline: 'none',
                }}
                aria-current={isActive ? 'true' : 'false'}
              >
                <div
                  style={{
                    width: 18,
                    height: 14,
                    borderRadius: 5,
                    background: isActive ? 'var(--dark-pink)' : 'rgba(0,0,0,0.18)',
                    boxShadow: isActive ? '0 0 0 3px rgba(231,70,86,0.25)' : 'none',
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    fontFamily: 'var(--font-space-grotesk), sans-serif',
                    fontWeight: isActive ? 800 : 700,
                    color: 'var(--dark-green)',
                    opacity: isActive ? 1 : 0.85,
                    fontSize: 12,
                    lineHeight: 1,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {s.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* BOTTOM SLICE */}
      <div style={{ position: 'relative', width: '100%' }}>
        <Image
          src={bottomSrc}
          alt=""
          width={width}
          height={1}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
    </motion.div>
  );
}
