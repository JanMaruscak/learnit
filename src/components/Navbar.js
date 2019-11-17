import React, {useState} from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";

function Navbar() {
  const [responsive, setResponsive] = useState(false);
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <ul className="menu">
        <li>
          <Link to="/subjects">Předměty</Link>
        </li>
        <li>
          <Link to="/about">O nás</Link>
        </li>
        <li>
          <Link to="/support">Support</Link>
        </li>
        <li>
          <a href="#f">Účet</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
