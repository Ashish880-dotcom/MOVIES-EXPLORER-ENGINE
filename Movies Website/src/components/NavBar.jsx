import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar({ dark = false, setDark }) {
  // protect against missing setDark (defensive)
  const toggle = () => {
    if (typeof setDark === "function") setDark(!dark);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/quiz">Quiz</Link>
      </div>

      <div className="navbar-center">
        <h1 className="main-title">Best Hollywood Movies</h1>
      </div>

      <div className="navbar-right">
        <button className="mode-toggle" onClick={toggle}>
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
