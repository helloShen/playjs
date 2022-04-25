import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <span className="logo">Logo</span>
      <ul className="btns">
        <Link to="/">
          <li className="btn">Home</li>
        </Link>
        <Link to="/about">
          <li className="btn">About</li>
        </Link>
        <Link to="/shop">
          <li className="btn">Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;