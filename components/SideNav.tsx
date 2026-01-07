'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface SideNavProps {
  sections: { id: string; label: string }[];
}

export default function SideNav({ sections }: SideNavProps) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
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
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40">
      <div className="bg-neutral/80 border-3 border-dark-neutral rounded-2xl p-3 backdrop-blur-sm">
        <div className="space-y-3">
          {sections.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <motion.button
                key={id}
                onClick={() => scrollToSection(id)}
                whileHover={{ scale: 1.1, x: 5 }}
                className="relative group flex items-center gap-2"
              >
                {/* Dot indicator */}
                <div 
                  className={`w-3 h-3 rounded-full border-2 transition-all ${
                    isActive 
                      ? 'bg-dark-green border-dark-green scale-125' 
                      : 'bg-transparent border-neutral group-hover:border-dark-green'
                  }`}
                />
                
                {/* Label (shows on hover) */}
                <span 
                  className={`text-xs font-bold whitespace-nowrap transition-all ${
                    isActive 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                  }`}
                  style={{ color: 'var(--dark-green)' }}
                >
                  {label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}