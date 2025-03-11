import { Menu, Moon, Search, ShoppingCart, Sun, X } from "lucide-react";
import { useContext, useState } from "react";
import "../styles/Navbar.css";
import { Context } from "./ThemeContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {theme, ToggleTheme} = useContext(Context)

  return (
    <nav className={theme === "light"? "navbar": "dark-navbar"}>
      <div className="navbar-container">
        {/* Logo (hidden when menu opens) */}
        {!isMenuOpen && <span className="navbar-logo">Sweet Organics</span>}

        {theme === "light"? <Sun className="light" onClick={ToggleTheme} />:<Moon className="dark" onClick={ToggleTheme}  />}

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

        {/* Right Section - Search & Cart */}
        <div className="navbar-right">
          {/* Search Bar */}
          <div className="search-container">
            <input type="text" className="search-input" placeholder="Search..." />
            <Search className="search-icon" />
          </div>

          {/* Cart Icon */}
          <div className="cart-container">
            <ShoppingCart className="cart-icon" />
            <span className="cart-badge">3</span>
          </div>

          {/* Menu Button */}
          <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
