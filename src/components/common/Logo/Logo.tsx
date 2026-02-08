import React from 'react';
import styles from './Logo.module.scss';

export const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <img src="/logo.svg" alt="DiveSea Logo" className={styles.logoImage} />
      <span className={styles.logoText}>DiveSea</span>
    </div>
  );
};

export default Logo;
