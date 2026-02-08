import clsx from 'clsx';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '@store';
import { toggleMenu } from '@store/uiSlice';
import { NAVIGATION_LINKS } from '@utils/constants';

import styles from './TopMenu.module.scss';

export const Menu: React.FC = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: RootState) => state.ui.isMenuOpen);

  return (
    <>
      <button
        className={clsx(styles.menuButton, isMenuOpen && styles.open)}
        aria-label="Open menu"
        onClick={() => dispatch(toggleMenu())}
      >
        <span className={styles.menuLine} />
        <span className={styles.menuLine} />
        <span className={styles.menuLine} />
      </button>
      <div className={clsx(styles.menuContent, isMenuOpen && styles.open)}>
        <nav className={styles.menuNav} onClick={() => dispatch(toggleMenu(false))}>
          {NAVIGATION_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={styles.menuLink}
            >
              {label}
            </a>
          ))}
        </nav>

      </div>
    </>
  );
};

export default Menu;
