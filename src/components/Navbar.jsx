// Navbar.jsx
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="min-h-screen transition-colors duration-500 bg-gradient-light dark:bg-gradient-dark">
      <NavLink to="/" className={({ isActive }) => isActive ? "underline" : ""}>Home</NavLink>
      <NavLink to="/contacto" className={({ isActive }) => isActive ? "underline" : ""}>Contacto</NavLink>
      <NavLink to="/app" className={({ isActive }) => isActive ? "underline" : ""}>App</NavLink>
    </nav>
  );
}

export default Navbar;
