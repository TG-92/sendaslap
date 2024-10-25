import React from 'react';

function Header() {
  return (
    <header style={{ backgroundColor: '#4CAF50', padding: '10px', textAlign: 'center', color: 'white' }}>
      <h1>Willkommen auf meiner Webseite</h1>
      <nav>
        <a href="#home" style={{ color: 'white', margin: '0 10px' }}>Home</a>
        <a href="#about" style={{ color: 'white', margin: '0 10px' }}>Über uns</a>
        <a href="#contact" style={{ color: 'white', margin: '0 10px' }}>Kontakt</a>
      </nav>
    </header>
  );
}

export default Header;
