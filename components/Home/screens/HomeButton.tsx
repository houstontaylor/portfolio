import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

export default function HomeButton( {text, href, color}: {
    text: string,
    href: string,
    color: string
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="text-center mt-4 relative"
    >
      {/* Decorative arrows */}
      <motion.div 
        className="absolute left-1/4 top-1/2 -translate-y-1/2"
        animate={{ x: [0, -5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20">
          <path d="M 15 10 L 5 5 L 5 15 Z" fill={`var(--${color})`} opacity="0.4"/>
        </svg>
      </motion.div>
        
      <motion.div 
        className="absolute right-1/4 top-1/2 -translate-y-1/2"
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20">
          <path d="M 5 10 L 15 5 L 15 15 Z" fill={`var(--${color})`} opacity="0.4"/>
        </svg>
      </motion.div>

      <Link href={href}>
        <button 
          className={`inline-block border-2 rounded-full px-6 py-2 cursor-pointer transition-colors`}
          style={{ 
            backgroundColor: isHovered ? `rgba(from var(--${color}) r g b / 0.3)` : `rgba(from var(--${color}) r g b / 0.5)`, 
            borderColor: `var(--dark-${color})`
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p className="font-bold uppercase tracking-wider" style={{ color: `var(--dark-${color})` }}>
            {text} →
          </p>
        </button>
      </Link>
    </motion.div>
 )
}