import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../store';
import { setScrolled, toggleMenu } from '../../../store/uiSlice';
import Logo from '../../common/Logo';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isScrolled = useSelector((state: RootState) => state.ui.isScrolled);

  useEffect(() => {
    const handleScroll = () => {
      dispatch(setScrolled(window.scrollY > 50));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Logo />
        <nav className={styles.nav}>
          <a href="#discover" className={styles.navLink}>Discover</a>
          <a href="#creators" className={styles.navLink}>Creators</a>
          <a href="#sell" className={styles.navLink}>Sell</a>
          <a href="#stats" className={styles.navLink}>Stats</a>
        </nav>
        <button 
          className={styles.menuButton} 
          aria-label="Open menu"
          onClick={() => dispatch(toggleMenu())}
        >
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
