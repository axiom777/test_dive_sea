import React from 'react';
import styles from './Logo.module.scss';
import clsx from 'clsx';

interface LogoProps {
  position?: "header" | "footer"
}

export const Logo: React.FC<LogoProps> = ({ position = "footer" }) => {
  return (
    <div className={styles.logo}>
      <img src="/logo.svg" alt="DiveSea Logo" className={styles.logoImage} />
      <span className={clsx(styles.logoText, position === "header" && styles.header)}>DiveSea</span>
    </div>
  );
};

export default Logo;
