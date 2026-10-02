import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <a href="#home" className="navbar-logo">
        <Leaf size={32} strokeWidth={2.2} />
        <span>RutuSutra</span>
      </a>

      {/* Desktop Navigation */}
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#seasons">Seasons</a>
        <a href="#diet">Diet</a>
        <a href="#lifestyle">Lifestyle</a>
        <a href="#about">About</a>
      </div>

      {/* Right Side */}
      <div className="navbar-actions">

        <button className="login-btn">
          Login
        </button>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">

          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#seasons" onClick={() => setMenuOpen(false)}>
            Seasons
          </a>

          <a href="#diet" onClick={() => setMenuOpen(false)}>
            Diet
          </a>

          <a href="#lifestyle" onClick={() => setMenuOpen(false)}>
            Lifestyle
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

        </div>
      )}

    </nav>
  );
}

export default Navbar;