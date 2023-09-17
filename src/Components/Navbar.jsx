
import React, { useState, useEffect } from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="nav-menu" className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="/" className="logo">
        Blessmi
      </a>
      <div className={`hamburger-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <li className="menu-item">
          <a href="#home" className="nav-link home">
            Home
          </a>
        </li>
        <li className="menu-item">
          <a href="#about" className="nav-link about">
            About
          </a>
        </li>
        <li className="menu-item">
          <a href="#skills" className="nav-link skills">
            Skills
          </a>
        </li>
        <li className="menu-item">
          <a href="#projects" className="nav-link projects">
            Projects
          </a>
        </li>
        <li className="menu-item">
          <a href="#contact" className="nav-link contact">
            Contact
          </a>
        </li>
        <li className="menu-item">
          <a style={{marginRight:"20px"}}
            href="https://drive.google.com/u/0/uc?id=1p4NeWqr3CRt_2tv1-yOnTlQd3q4s7yEb&export=download"
            rel="noreferrer"
            className="nav-link resume"
            id="resume-link-1"
            download
          >
            <button id="resume-button-1">Resume</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
