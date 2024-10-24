import React from 'react';
import './App.css';
import Header from './components/Rudi/Header'; 

function App() {
  return (
    <div className="App">
      
      <Header />

      
      <main>
        <section id="home">
          <h1>Welcome to Home</h1>
          <p>This is the home section of the app.</p>
        </section>
        <section id="about">
          <h1>About Us</h1>
          <p>Some information about us.</p>
        </section>
        <section id="services">
          <h1>Our Services</h1>
          <p>Details of services we provide.</p>
        </section>
        <section id="contact">
          <h1>Contact Us</h1>
          <p>Ways to contact us.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
