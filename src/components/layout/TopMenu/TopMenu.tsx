import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../store';
import { toggleMenu } from '../../../store/uiSlice';
import styles from './TopMenu.module.scss';
import clsx from 'clsx';

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
          {["Discover", "Creators", "Sell", "Stats"].map((name) => (
            <a
              key={name}
              id={name}
              href={`#${name.toLocaleLowerCase()}`}
              className={styles.menuLink}
            >
              {name}
            </a>
          )
          )}
        </nav>

      </div>
    </>
  );
};

export default Menu;
