import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>SendaSlap</h1>
      </div>
      <nav className="nav-links">
        <a href="#catalog">Katalog</a>
        <a href="#resources">Bilder von geslappeden Leuten</a>
        <a href="#community">Community</a>
        <a href="#pricing">Diese Leute wurden schon geslapped</a>
        <a href="#business">Fuer Unternehmen</a>
      </nav>
      <div className="user-actions">
        <button className="search-icon" aria-label="Search">
          🔍
        </button>
        <a href="#login" className="login-link">Log In</a>
      </div>
    </header>
  );
};

export default Header;

