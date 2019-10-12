import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.svg';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <ul className="menu">
        <li><Link to="/subjects">Předměty</Link></li>
        <li><Link to="/about">O nás</Link></li>
        <li>
          <a href="">Support</a>
        </li>
        <li>
          <a href="">Účet</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
