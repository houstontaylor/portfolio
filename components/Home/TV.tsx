'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './TV.module.css';

import HomeScreen from './screens/HomeScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';

import SecondaryHomeScreen from './screens/SecondaryHomeScreen';
import SecondaryProjectsScreen from './screens/SecondaryProjectsScreen';
import SecondaryAboutScreen from './screens/SecondaryAboutScreen';
import SecondaryContactScreen from './screens/SecondaryContactScreen';

import TVSvg from './TVSvg';

export default function TV() {
  const [screen, setScreen] = useState<'home' | 'projects' | 'about' | 'contact'>('home');
  const [mode, setMode] = useState<'main' | 'secondary'>('main');
  const [isChanging, setIsChanging] = useState(false);

  const screens = {
    home: <HomeScreen />,
    projects: <ProjectsScreen />,
    about: <AboutScreen />,
    contact: <ContactScreen />
  };

  const secondaryScreens = {
    home: <SecondaryHomeScreen />,
    projects: <SecondaryProjectsScreen />,
    about: <SecondaryAboutScreen />,
    contact: <SecondaryContactScreen />
  };

  const handleTopClick = () => {
    setIsChanging(true);

    window.setTimeout(() => {
      setScreen((prev) => {
        const order: Array<typeof prev> = ['home', 'projects', 'about', 'contact'];
        const next = order[(order.indexOf(prev) + 1) % order.length];
        return next;
      });

      setIsChanging(false);
    }, 300);
  };

  const handleBottomClick = () => {
    setMode((prev) => (prev === 'main' ? 'secondary' : 'main'));
  };

  return (
    <div className={styles.tvContainer}>
      <div 
        className={styles.tvWrapper}
        style={mode === 'main' ? { "--screen-scale": 0.8 } as React.CSSProperties : { "--screen-scale": 0.7 } as React.CSSProperties }
      >
        <TVSvg
          onTopDialClick={handleTopClick}
          onBottomDialClick={handleBottomClick}
          mode={mode}
          isChanging={isChanging}
          className={styles.tvBody}
        />

        {/* Screen Overlay */}
        {isChanging? <div /> :
          <div className={styles.screenContent}>
            <div className={styles.screenScale}>
              <div
                className={styles.screenInner}
              >
                <div style={{ width: '100%' }} >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={screen}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {mode === 'main' ? screens[screen] : secondaryScreens[screen]}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
}
