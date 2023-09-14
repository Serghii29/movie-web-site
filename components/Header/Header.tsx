import React from 'react';
import styles from '../../styles/header.module.scss';
import logo from '../../public/logo.png';
import Link from 'next/link';

export const Header: React.FC = () => {
  const navigates = ['home', 'movies', 'series', 'favorite'];

  return (
    <header className={styles.header}>
      <img src={logo.src} alt="logo" height={'50px'}/>

      <nav className={styles.nav}>
        <ul className={styles.nav__link}>
          {navigates.map(nav => {
            if (nav === 'home') {
              return (
                <Link href={'/'}>
                  <li key={nav}>{nav}</li>
                </Link>
              );
            } else {
              return (
                <Link href={`/${nav}`}>
                  <li key={nav}>{nav}</li>
                </Link>
              );
            }
          })}
        </ul>
      </nav>
    </header>
  );
};
