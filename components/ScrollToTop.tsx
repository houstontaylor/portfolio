'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [beforeEnd, setBeforeEnd] = useState(true);

  const endSentinelId = 'scrolltotop-end';

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 300 && beforeEnd);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [beforeEnd]);

  useEffect(() => {
    const endEl = document.getElementById(endSentinelId);
    if (!endEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If footer is visible → hide button
        setBeforeEnd(!entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(endEl);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      key="scroll-top"
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        y: isVisible ? 0 : 10,
      }}
      exit={{ opacity: 0, scale: 0.8, y: 10 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      whileHover={{ scale: 1.08, rotate: 2 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-8 right-8 z-40 cursor-pointer"
      style={{
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
      aria-label="Scroll back to top"
      title="Back to top"
    >
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        <Image
          src="/arrowUp.svg"
          alt=""
          width={56}
          height={56}
          priority
        />
      </motion.div>
    </motion.button>
  );
}
