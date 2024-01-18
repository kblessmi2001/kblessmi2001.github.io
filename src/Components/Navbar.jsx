
import React, { useState, useEffect } from 'react';
import '../css/Navbar.css';
import resume from "../files/Blessmi-K-Resume.pdf"

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
        <span style={{ color: '#37dfeb' }}>B</span>
        <span style={{ color: '#47c8ec' }}>l</span>
        <span style={{ color: '#58b2ed' }}>e</span>
        <span style={{ color: '#699cee' }}>s</span>
        <span style={{ color: '#7a85f0' }}>s</span>
        <span style={{ color: '#8b6ff1' }}>m</span>
        <span style={{ color: '#9c59f2' }}>i</span>

        {/* <b>Blessmi</b> */}
      </a>
      <div className={`hamburger-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <li className="menu-item">
          <a href="#home" className="nav-link home">

            <span style={{ color: '#5433ff' }}>H</span>
            <span style={{ color: '#4755ff' }}>o</span>
            <span style={{ color: '#3a78ff' }}>m</span>
            <span style={{ color: '#2d9aff' }}>e</span>
            {/* Home */}
          </a>
        </li>
        <li className="menu-item">
          <a href="#about" className="nav-link about">
            <span style={{ color: '#5433ff' }}>A</span>
            <span style={{ color: '#494eff' }}>b</span>
            <span style={{ color: '#3f6aff' }}>o</span>
            <span style={{ color: '#3485ff' }}>u</span>
            <span style={{ color: '#2aa1ff' }}>t</span>

            {/* About */}

          </a>
        </li>
        <li className="menu-item">
          <a href="#skills" className="nav-link skills">
            <span style={{ color: '#4755ff' }}>S</span>
            <span style={{ color: '#4066ff' }}>k</span>
            <span style={{ color: '#3a78ff' }}>i</span>
            <span style={{ color: '#3389ff' }}>l</span>
            <span style={{ color: '#2d9aff' }}>l</span>
            <span style={{ color: '#26abff' }}>s</span>
            {/* Skills */}

          </a>
        </li>
        <li className="menu-item">
          <a href="#projects" className="nav-link projects">

            <span style={{ color: '#4e42ff' }}>P</span>
            <span style={{ color: '#4851ff' }}>r</span>
            <span style={{ color: '#4261ff' }}>o</span>
            <span style={{ color: '#3c70ff' }}>j</span>
            <span style={{ color: '#377fff' }}>e</span>
            <span style={{ color: '#318fff' }}>c</span>
            <span style={{ color: '#2b9eff' }}>t</span>
            <span style={{ color: '#25adff' }}>s</span>
            {/* Projects */}

          </a>
        </li>
        <li className="menu-item">
          <a href="#contact" className="nav-link contact">
            <span style={{ color: '#5433ff' }}>C</span>
            <span style={{ color: '#4c46ff' }}>o</span>
            <span style={{ color: '#455aff' }}>n</span>
            <span style={{ color: '#3d6eff' }}>t</span>
            <span style={{ color: '#3681ff' }}>a</span>
            <span style={{ color: '#2e95ff' }}>c</span>
            <span style={{ color: '#27a9ff' }}>t</span>
          </a>
        </li>

        <li className="menu-item" id="resume-button-1"
          onClick={() => window.open("https://drive.google.com/file/d/13TcukNaSjF6CM6lqreCK2J9n1j-_BKsj/view", "_blank")}
        >
          <a
            href={resume}
            className="nav-link resume"
            id="resume-link-1"
            download="Blessmi-K-Resume"
            target="_blank"
          >

            <button id="resume-button-1" >
              <span style={{ color: '#5433ff' }}>R</span>
              <span style={{ color: '#4b4aff' }}>e</span>
              <span style={{ color: '#4261ff' }}>s</span>
              <span style={{ color: '#3a78ff' }}>u</span>
              <span style={{ color: '#318fff' }}>m</span>
              <span style={{ color: '#28a6ff' }}>e</span>
            </button>
          </a>
        </li>

      </ul>
    </div>

  );
};

export default Navbar;
