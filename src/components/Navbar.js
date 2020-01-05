import React, { useState } from "react";
import { withRouter, NavLink } from "react-router-dom";
import Logo from "../images/logo.svg";
import { ReactComponent as Hamburger } from "../images/icons/bars.svg";
import { ReactComponent as Search } from "../images/icons/search.svg";

var openedStyle = "menu open";
var closedStyle = "menu";
function Navbar(props) {
  const [mobileOpened, setMobileOpened] = useState(false);
  const [query, setQuery] = useState("");

  function Redir(e) {
    setMobileOpened(false);
    props.history.push({ pathname: "articles", search: query });
    e.preventDefault();
  }
  return (
    <nav>
      <div className="logo">
        <NavLink to="/" onClick={() => setMobileOpened(false)}>
          <img src={Logo} alt="logo" />
        </NavLink>
      </div>
      <ul className={mobileOpened ? openedStyle : closedStyle} id="nav-menu">
        <form onSubmit={e => Redir(e)} style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="Vyhledej článek"
            onChange={e => setQuery(e.target.value)}
            value={query}
          />
          <button>
            <Search style={{ width: "20px" }} />
          </button>
        </form>
        <li>
          <NavLink to="/subjects" onClick={() => setMobileOpened(false)}>
            Předměty
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setMobileOpened(false)}>
            O nás
          </NavLink>
        </li>
        <li>
          <NavLink to="/support" onClick={() => setMobileOpened(false)}>
            Support
          </NavLink>
        </li>
        <li>
          <NavLink to="/account" onClick={() => setMobileOpened(false)}>
            Účet
          </NavLink>
        </li>
      </ul>
      <Hamburger
        style={{ alignSelf: "center", color: "#90ee90" }}
        className="fas fa-bars fa-2x mobile-button"
        onClick={() => setMobileOpened(!mobileOpened)}
        id="hamburger"
      />
    </nav>
  );
}

export default withRouter(Navbar);
