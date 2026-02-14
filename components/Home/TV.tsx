'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './TV.module.css';

import HomeScreen from './screens/HomeScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';

import TVSvg from './TVSvg';

export default function TV() {
  const [screen, setScreen] = useState<'home' | 'projects' | 'about' | 'contact'>('home');
  const [mode, setMode] = useState<'color' | 'grayscale'>('color');
  const [isChanging, setIsChanging] = useState(false);

  const screens = {
    home: <HomeScreen />,
    projects: <ProjectsScreen />,
    about: <AboutScreen />,
    contact: <ContactScreen />
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
    setMode((prev) => (prev === 'color' ? 'grayscale' : 'color'));
  };

  return (
    <div className={styles.tvContainer}>
      <div 
        className={styles.tvWrapper}
        style={{ "--screen-scale": 0.8 } as React.CSSProperties }
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
                style={{
                  filter: mode === 'grayscale' ? 'grayscale(100%)' : 'none'
                }}
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
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
}
