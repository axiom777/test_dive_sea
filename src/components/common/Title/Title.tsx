import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';

import styles from './Title.module.scss';


export type TitleProps = {
  variant?: 'h1' | 'h2' | 'h3';
  delay?: number;
  children?: string
  className?: string
};

export const Title: React.FC<TitleProps> = ({
  children,
  className,
  variant = 'h1',
  delay = 0 }) => {
  const Tag = variant;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <Tag className={
        clsx(styles.title, styles[variant], className)
      }>{children}</Tag>
    </motion.div>
  );
};

export default Title;
