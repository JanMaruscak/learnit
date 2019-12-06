import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";
import { ReactComponent as Hamburger } from "../icons/bars.svg";

function Navbar() {
  const [mobile, setMobile] = useState(false);
  let showMenu;

  if (mobile) {
    showMenu = "menu mobile";
  } else {
    showMenu = "menu";
  }

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <ul className={showMenu} id="nav-menu">
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
          <Link to="/account">Účet</Link>
        </li>
      </ul>
      <Hamburger
        style={{ alignSelf: "center", color: "#90ee90" }}
        className="fas fa-bars fa-2x mobile-button"
        onClick={() => setMobile(!mobile)}
      />
    </nav>
  );
}

export default Navbar;
