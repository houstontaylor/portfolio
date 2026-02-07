'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface SideNavProps {
  sections: { id: string; label: string }[];
  showAfterY?: number; // Optional prop to specify scrollY after which nav appears
}

export default function SideNav({ 
  sections, 
  showAfterY = 420
}: SideNavProps) {
  const [activeSection, setActiveSection] = useState('');
  const [showNav, setShowNav] = useState(false);
  const topSrc = '/nav/remoteTop.svg';
  const middleSrc = '/nav/remoteMiddle.svg';
  const bottomSrc = '/nav/remoteBottom.svg';
  
  // Layout constants for svg sizing and spacing
  const width = 140;
  const rowHeight = 44;
  const rowGap = 5;
  const panelPaddingY = 15;
  const panelPaddingX = 12;
  const middleHeight =
    panelPaddingY * 2 +
    sections.length * rowHeight +
    Math.max(0, sections.length - 1) * rowGap;

  // Show nav after scrolling past a certain point
  useEffect(() => {
    const startY = showAfterY;

    const update = () => {
      setShowNav(window.scrollY >= startY);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [showAfterY]);


  // Track active section based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
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
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="fixed left-8 top-1/3 -translate-y-1/2 z-40"
      style={{
        pointerEvents: showNav ? 'auto' : 'none',
      }}
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
