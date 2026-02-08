import { motion } from 'framer-motion';
import React from 'react';

import { Arrow } from '../Arrow';
import styles from './SliderControls.module.scss';

export type SliderControlsProps = {
  onPrev: () => void;
  onNext: () => void;
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
        whileTap={{ scale: 0.9 }}
        aria-label="Previous slide"
      >
        <Arrow direction="left" />
      </motion.button>
      <div className={styles.delimeter} />
      <motion.button
        className={styles.navButton}
        onClick={onNext}
        whileTap={{ scale: 0.9 }}
        aria-label="Next slide"
      >
        <Arrow direction="right" />
      </motion.button>
    </div>
  );
};

export default SliderControls;
