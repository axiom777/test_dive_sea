import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../store';
import { setScrolled } from '../../../store/uiSlice';
import Logo from '../../common/Logo';
import styles from './Header.module.scss';
import clsx from 'clsx';
import TopMenu from '../TopMenu';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isScrolled = useSelector((state: RootState) => state.ui.isScrolled);
  const isMenuOpen = useSelector((state: RootState) => state.ui.isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      dispatch(setScrolled(window.scrollY > 50));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch]);

  return (
    <header className={clsx(
      styles.header,
      isScrolled && styles.scrolled,
      isMenuOpen && styles.open
    )}>
      <div className={styles.container}>
        <Logo position="header" />
        <TopMenu />
      </div>
    </header>
  );
};

export default Header;
