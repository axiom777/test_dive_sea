import React from 'react';
import Logo from '../../common/Logo';
import styles from './Footer.module.scss';
const BOTTOM_MENU = [
  { name: "Privacy Policy", href: "#privacy" },
  { name: "Terms & Conditions", href: "#terms" },
  { name: "About Us", href: "about" },
  { name: "Privacy Policy", href: "#privacy" },
  { name: "Contact", href: "#contact" },
]

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <Logo />
          <nav className={styles.footerNav}>
            {BOTTOM_MENU.map(({ name, href }) => (
              <a href={href} key={href} className={styles.footerLink}>{name}</a>
            ))}
          </nav>
        </div>
        <div className={styles.copyright}>
          © 2023
        </div>
      </div>
    </footer>
  );
};

export default Footer;
