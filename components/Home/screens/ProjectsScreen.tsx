import { motion } from 'framer-motion';

export default function ProjectsScreen() {
  const projects = [
    { name: 'Project Alpha', color: '#ff6b6b' },
    { name: 'Project Beta', color: '#4ecdc4' },
    { name: 'Project Gamma', color: '#ffe66d' },
    { name: 'Project Delta', color: '#a8e6cf' }
  ];

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem',
      gap: '1.5rem'
    }}>
      {/* Header */}
      <motion.h2
        style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          color: '#00ff88',
          textAlign: 'center',
          marginBottom: '0.5rem'
        }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Recent Projects
      </motion.h2>

      {/* Project Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        flex: 1
      }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            style={{
              background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)`,
              border: `2px solid ${project.color}`,
              borderRadius: '8px',
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 'clamp(0.8rem, 2vw, 1rem)',
              color: project.color,
              fontWeight: 'bold',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}
            whileHover={{ scale: 1.05 }}
          >
            {project.name}
          </motion.div>
        ))}
      </div>
    </div>
  );
}