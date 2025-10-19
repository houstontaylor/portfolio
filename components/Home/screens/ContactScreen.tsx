import { motion } from 'framer-motion';

export default function ContactScreen() {
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
      <motion.h2
        style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          color: '#00ff88',
          marginBottom: '0.5rem'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Get In Touch
      </motion.h2>

      <motion.div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100%',
          maxWidth: '400px'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {/* Email */}
        <div style={{
          padding: '1rem',
          background: 'rgba(0,255,136,0.05)',
          border: '1px solid rgba(0,255,136,0.3)',
          borderRadius: '8px'
        }}>
          <div style={{
            fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
            color: '#88ffbb',
            opacity: 0.7,
            marginBottom: '0.3rem'
          }}>
            Email
          </div>
          <div style={{
            fontSize: 'clamp(0.9rem, 2.2vw, 1.1rem)',
            color: '#00ff88'
          }}>
            hctaylor@stanford.edu
          </div>
        </div>

        {/* Social Links */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          marginTop: '0.5rem'
        }}>
          {['GitHub', 'LinkedIn', 'Portfolio'].map((link, i) => (
            <motion.button
              key={link}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ scale: 1.1 }}
              style={{
                padding: '0.6rem 1rem',
                background: 'transparent',
                border: '2px solid #00ff88',
                borderRadius: '6px',
                color: '#00ff88',
                fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              {link}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}