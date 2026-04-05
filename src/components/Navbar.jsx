import { Menu, Moon, Search, ShoppingCart, Sun, X } from "lucide-react";
import { useContext, useState } from "react";
import "../styles/Navbar.css";
import { Context } from "./ThemeContext";
import { CartContext } from "./CartContext";

export default function Navbar({ onCartToggle, onSearchChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, ToggleTheme } = useContext(Context);
  const { cart } = useContext(CartContext);

  const cartCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <nav className={theme === "light" ? "navbar" : "dark-navbar"}>
      <div className="navbar-container">
        {/* Logo (hidden when menu opens) */}
        {!isMenuOpen && <span className="navbar-logo">Penny Juice</span>}

        {theme === "light" ? (
          <Sun className="light" onClick={ToggleTheme} />
        ) : (
          <Moon className="dark" onClick={ToggleTheme} />
        )}

        {/* Navigation Links */}
        <div className={`navbar-links ${isMenuOpen ? "menu-open" : ""}`}>
          <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a
            href="#products"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Products
          </a>
          <a
            href="#about"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="#contact"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>

        {/* Right Section - Search & Cart */}
        <div className="navbar-right">
          {/* Search Bar */}
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <Search className="search-icon" />
          </div>

          {/* Cart Icon */}
          <div className="cart-container" onClick={onCartToggle}>
            <ShoppingCart className="cart-icon" />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>

          {/* Menu Button */}
          <button
            className="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
