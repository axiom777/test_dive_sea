import React from 'react';

import Logo from '@common/Logo';
import { FOOTER_LINKS } from '@utils/constants';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <Logo />
          <nav className={styles.footerNav}>
            {FOOTER_LINKS.map(({ label, href }) => (
              <a href={href} key={href} className={styles.footerLink}>{label}</a>
            ))}
          </nav>
        </div>
        <div className={styles.copyright}>
          © 2023
          <span>DiveSea All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
