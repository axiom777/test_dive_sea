import { motion } from 'framer-motion';
import React from 'react';

import { Arrow } from '../Arrow';
import styles from './SliderControls.module.scss';

export type SliderControlsProps = {
  onPrev: () => void;
  onNext: () => void;
};

// Animation variants for arrow buttons
const buttonVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.8
    }
  }
};

export const SliderControls: React.FC<SliderControlsProps> = ({
  onPrev,
  onNext,
}) => {

  return (
    <div className={styles.controls}>
      <motion.button
        className={styles.navButton}
        onClick={onPrev}
        whileHover={{ scale: 1.05, backgroundColor: 'var(--color-bg-secondary)' }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        aria-label="Previous slide"
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
      >
        <Arrow direction="left" />
      </motion.button>
      <div className={styles.delimeter} />
      <motion.button
        className={styles.navButton}
        onClick={onNext}
        whileHover={{ scale: 1.05, backgroundColor: 'var(--color-bg-secondary)' }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        aria-label="Next slide"
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
      >
        <Arrow direction="right" />
      </motion.button>
    </div>
  );
};

export default SliderControls;
