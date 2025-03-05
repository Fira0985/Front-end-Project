import { Menu, X } from "lucide-react";
import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo (hidden when menu opens) */}
        {!isMenuOpen && <span className="navbar-logo">Sweet Organics</span>}

        {/* Menu Button */}
        <button
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`navbar-links ${isMenuOpen ? "menu-open" : ""}`}>
        <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Home
        </a>
        <a href="#products" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Our Products
        </a>
        <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          About Us
        </a>
      </div>
    </nav>
  );
}
