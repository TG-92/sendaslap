import React from 'react';
import styles from './Navbar.module.css'; 

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>SendaSlap</h1>
      </div>
      <nav className={styles.navLinks}>
        <a href="#catalog" className={styles.navItem}>Katalog</a>
        <a href="#resources" className={styles.navItem}>Bilder von geslappeden Leuten</a>
        <a href="#community" className={styles.navItem}>Community</a>
        <a href="#pricing" className={styles.navItem}>Diese Leute wurden schon geslapped</a>
        <a href="#business" className={styles.navItem}>Fuer Unternehmen</a>
      </nav>
      <div className={styles.userActions}>
        <button className={styles.searchIcon} aria-label="Search">🔍</button>
        <a href="#login" className={styles.loginLink}>Log In</a>
      </div>
    </header>
  );
};

export default Navbar;
