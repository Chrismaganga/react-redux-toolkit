import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import "./styles/Navbar.css"; // Importing the CSS file for the navbar styles

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Employee Polls
        </Link>
        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/add" className="navbar-link">
            New Poll
          </Link>
          <Link to="/leaderboard" className="navbar-link">
            Leaderboard
          </Link>
          {user ? (
            <button className="navbar-link" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="navbar-link">
              Login
            </Link>
          )}
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
