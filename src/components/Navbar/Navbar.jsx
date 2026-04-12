import React, { useState, useEffect } from "react";
import logoNav from "../../assets/logo-nav.png";
import logoNavDark from "../../assets/logo-nav-dark.png"; // Make sure this is imported
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <button className="nav-logo">
        {/* --- THE FIX IS HERE --- */}
        <img src={isScrolled ? logoNavDark : logoNav} alt="Navigation Logo" />
      </button>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a href="/" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#feature" onClick={closeMenu}>
            Features
          </a>
        </li>
        <li>
          <a href="#tools" onClick={closeMenu}>
            Testimonials
          </a>
        </li>
        <li>
          <a href="#faq" onClick={closeMenu}>
            FAQs
          </a>
        </li>
        <li>
          <a href="#review" onClick={closeMenu}>
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
