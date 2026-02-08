import React from 'react';
import { motion } from 'framer-motion';
import styles from './Title.module.scss';

export type TitleProps = {
  text: string;
  variant?: 'h1' | 'h2' | 'h3';
  delay?: number;
};

export const Title: React.FC<TitleProps> = ({ text, variant = 'h1', delay = 0 }) => {
  const Tag = variant;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <Tag className={`${styles.title} ${styles[variant]}`}>{text}</Tag>
    </motion.div>
  );
};

export default Title;
