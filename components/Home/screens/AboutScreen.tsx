import { motion } from 'framer-motion';

export default function AboutScreen() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      gap: '1.5rem'
    }}>
      {/* Avatar/Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #00ff88, #00cc6a)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          color: '#0a0a0a',
          fontWeight: 'bold'
        }}
      >
        HT
      </motion.div>

      {/* Bio */}
      <div style={{ textAlign: 'center', maxWidth: '400px' }}>
        <motion.h2
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            color: '#00ff88',
            marginBottom: '0.5rem'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          About Me
        </motion.h2>
        <motion.p
          style={{
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            color: '#88ffbb',
            lineHeight: '1.6',
            opacity: 0.9
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 0.4 }}
        >
          Stanford student passionate about creating beautiful, functional digital experiences.
          I specialize in UI/UX design and full-stack development.
        </motion.p>
      </div>

      {/* Skills Tags */}
      <motion.div
        style={{
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        {['React', 'TypeScript', 'Figma', 'Next.js'].map((skill, i) => (
          <span
            key={skill}
            style={{
              padding: '0.4rem 0.8rem',
              background: 'rgba(0,255,136,0.1)',
              border: '1px solid rgba(0,255,136,0.3)',
              borderRadius: '20px',
              fontSize: 'clamp(0.7rem, 1.8vw, 0.9rem)',
              color: '#00ff88'
            }}
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}