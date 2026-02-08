import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';

import styles from './Button.module.scss';


export type ButtonProps = {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  onClick,
  children,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={clsx(styles.button, styles[variant])}
    >
      {children}
    </motion.button>
  );
};

export default Button;
