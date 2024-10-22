import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css"; 

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-box">
      <Link className="navbar-link" to="/">Home</Link>
      <Link className="navbar-link" to="/dashboard">Dashboard</Link>
    </div>
  </nav>
);

export default Navbar;
