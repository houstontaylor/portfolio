import { motion } from 'framer-motion';

export default function HomeScreen() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem',
      padding: '2rem'
    }}>
      {/* Animated SVG Icon */}
      <motion.svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <circle cx="60" cy="60" r="50" fill="#00ff88" opacity="0.2"/>
        <path
          d="M60 20 L80 50 L70 50 L70 80 L50 80 L50 50 L40 50 Z"
          fill="#00ff88"
          stroke="#00ff88"
          strokeWidth="2"
        />
        <circle cx="60" cy="95" r="5" fill="#00ff88"/>
      </motion.svg>

      {/* Text Content */}
      <div style={{ textAlign: 'center' }}>
        <motion.h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 'bold',
            color: '#00ff88',
            marginBottom: '0.5rem',
            textShadow: '0 0 20px rgba(0,255,136,0.5)'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Houston Taylor
        </motion.h1>
        <motion.p
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            color: '#88ffbb',
            opacity: 0.9
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 0.5 }}
        >
          UI/UX Designer & Developer
        </motion.p>
      </div>
    </div>
  );
}