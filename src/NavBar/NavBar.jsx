import React, { useState, useEffect } from 'react';
import "../NavBar/NavBar.css"

const NavBar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
  
    // Toggle dark mode
    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
      document.body.classList.toggle('dark', !isDarkMode);
    };
  
    // Handle scroll event
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true); // Set scrolled state when the user scrolls down
        } else {
          setIsScrolled(false); // Reset when at the top of the page
        }
      };
  
      // Listen for scroll events
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className={`nav ${isDarkMode ? 'dark' : 'light'} ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <span className="star-logo">⭐</span> {/* Star logo */}
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li onClick={toggleDarkMode} className="dark-mode-toggle">
            {isDarkMode ? '🌞' : '🌙'} <span className="dark-mode-text">Dark mode</span>
          </li> {/* Toggle between moon and sun icons */}
        </ul>
      </div>
    );
  };
  
  export default NavBar;