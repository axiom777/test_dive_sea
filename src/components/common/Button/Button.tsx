import React from 'react';
import { motion } from 'framer-motion';
import styles from './Button.module.scss';

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  onClick,
  children,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
