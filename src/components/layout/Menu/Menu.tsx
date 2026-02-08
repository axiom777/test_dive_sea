import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../store';
import { closeMenu } from '../../../store/uiSlice';
import styles from './Menu.module.scss';

export const Menu: React.FC = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: RootState) => state.ui.isMenuOpen);

  const handleLinkClick = () => {
    dispatch(closeMenu());
  };

  if (!isMenuOpen) return null;

  return (
    <div className={styles.menuOverlay}>
      <div className={styles.menuContent}>
        <button
          className={styles.closeButton}
          onClick={() => dispatch(closeMenu())}
          aria-label="Close menu"
        >
          <span className={styles.closeIcon}>×</span>
        </button>
        <nav className={styles.menuNav}>
          <a href="#discover" className={styles.menuLink} onClick={handleLinkClick}>
            Discover
          </a>
          <a href="#creators" className={styles.menuLink} onClick={handleLinkClick}>
            Creators
          </a>
          <a href="#sell" className={styles.menuLink} onClick={handleLinkClick}>
            Sell
          </a>
          <a href="#stats" className={styles.menuLink} onClick={handleLinkClick}>
            Stats
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
