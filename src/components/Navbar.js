import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "../images/logo.svg";
import { ReactComponent as Hamburger } from "../icons/bars.svg";
import { ReactComponent as Search } from "../icons/search.svg";

var openedStyle = "menu open";
var closedStyle = "menu";
function Navbar(props) {
  const [mobileOpened, setMobileOpened] = useState(false);
  const [query, setQuery] = useState("");

  // if (mobile || (showMenu !== "menu" && document.getElementById('hamburger') !==null && document.getElementById('hamburger').style.display === "block")) {
  //   showMenu = "menu open";
  // } else {
  //   showMenu = "menu";
  // }

  function Redir(e) {
    setMobileOpened(false);
    props.history.push({ pathname: "articles", search: query });
    e.preventDefault();
  }
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
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
          <Link to="/subjects" onClick={() => setMobileOpened(false)}>
            Předměty
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMobileOpened(false)}>
            O nás
          </Link>
        </li>
        <li>
          <Link to="/support" onClick={() => setMobileOpened(false)}>
            Support
          </Link>
        </li>
        <li>
          <Link to="/account" onClick={() => setMobileOpened(false)}>
            Účet
          </Link>
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
