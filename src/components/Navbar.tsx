import { useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Navbar = ({ toggleDarkMode, darkMode }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">My Portfolio</h2>

      {/* Hamburger button for mobile */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </li>
        <li>
          <button onClick={toggleDarkMode} className="theme-toggle">
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
