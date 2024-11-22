import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>My PWA</h1>
        </div>

        {/* Hamburger Icon */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Links */}
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <header className="App-header">
        <h2>Welcome to My Progressive Web App!</h2>
        <p>This is a simple example with a collapsible navigation bar.</p>
      </header>
    </div>
  );
}

export default App;
