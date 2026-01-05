import React, { useState } from 'react';


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <i className="fa-solid fa-brain"></i> Automate Brains
          </div>
          
          {/* Desktop Nav */}
          <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#poc" onClick={closeMenu}>POC & Solutions</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            <li className="mobile-only"><a href="#contact" onClick={closeMenu} className="btn btn-primary">Get Started</a></li>
          </ul>

          <a href="#contact" className="btn btn-primary desktop-only">Get Started</a>

          <div className="mobile-menu-btn" onClick={toggleMenu}>
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;