import React from 'react';
import { motion } from 'framer-motion';
import styles from './SliderControls.module.scss';

export type SliderControlsProps = {
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalItems: number;
};

export const SliderControls: React.FC<SliderControlsProps> = ({
  onPrev,
  onNext,
  currentIndex,
  totalItems,
}) => {
  const progress = ((currentIndex + 1) / totalItems) * 100;

  return (
    <div className={styles.controls}>
      <motion.button
        className={styles.navButton}
        onClick={onPrev}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Previous slide"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>
      
      <div className={styles.progressContainer}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
      </div>
      
      <motion.button
        className={styles.navButton}
        onClick={onNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Next slide"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>
    </div>
  );
};

export default SliderControls;
