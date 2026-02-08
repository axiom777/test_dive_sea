import React from 'react';
import Logo from '../../common/Logo';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Logo />
        </div>
        <div className={styles.divider}></div>
        <nav className={styles.footerNav}>
          <a href="#privacy" className={styles.footerLink}>Privacy Policy</a>
          <a href="#terms" className={styles.footerLink}>Terms & Conditions</a>
          <a href="#about" className={styles.footerLink}>About Us</a>
          <a href="#contact" className={styles.footerLink}>Contact</a>
        </nav>
        <div className={styles.copyright}>
          © 2024 DiveSea. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
