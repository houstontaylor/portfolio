'use client';
import { useState } from 'react';
import styles from './TV.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import HomeScreen from './screens/HomeScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import TVSvg from './TVSvg';

export default function TV() {
  const [screen, setScreen] = useState<'home' | 'projects' | 'about' | 'contact'>('home');
  const [mode, setMode] = useState<'normal' | 'grayscale'>('normal');

  const handleTopClick = () => {
    setScreen((prev) => {
      if (prev === 'home') return 'projects';
      if (prev === 'projects') return 'about';
      if (prev === 'about') return 'contact';
      return 'home';
    });
  };

  const handleBottomClick = () => {
    setMode((prev) => (prev === 'normal' ? 'grayscale' : 'normal'));
  };

  const screens = {
    home: <HomeScreen />,
    projects: <ProjectsScreen />,
    about: <AboutScreen />,
    contact: <ContactScreen />
  };

  return (
    <div className={styles.tvContainer}>
      <TVSvg
        onTopDialClick={handleTopClick}
        onBottomDialClick={handleBottomClick}
        mode={mode}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={screen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {screens[screen]}
          </motion.div>
        </AnimatePresence>
      </TVSvg>
    </div>
  );
}
