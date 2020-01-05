import React, { useLayoutEffect, useState } from "react";
import FacebookLogo from '../images/icons/facebook-logo.png';
import GoogleLogo from '../images/icons/google-logo.svg';

var buttonMessage = "Ještě nemáš účet?";
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
export default function User() {
  const [width, height] = useWindowSize();
  const [isFirst, setFirst] = React.useState(false);
  function ClickButton(e) {
    e.target.blur();
    setFirst(!isFirst);
    e.preventDefault();
  }
  var coverDiv = document.getElementById("cover-div");
  if (isFirst) {
    if (width <= 800) {
      coverDiv.style.top = "-380px";
      coverDiv.style.left = "0";
      buttonMessage = "Už máš svůj účet?";
    } else {
      coverDiv.style.left = -coverDiv.offsetWidth - 2 - 80 + "px"; // -2 because it is 2 pixels less than actual width (idk), and - 80 because (margin: 40) * 2
      coverDiv.style.top = "0";
      buttonMessage = "Už máš svůj účet?";
    }
  } else if (coverDiv !== null) {
    coverDiv.style.left = "0px";
    coverDiv.style.top = "0px";
    buttonMessage = "Ještě nemáš účet?";
  }
  return (
    <main>
      <h1>Váš účet</h1>
      <div className="form-container">
        <form>
          <h2>Přihlášení</h2>
          <p>Email:</p>
          <input type="email" placeholder="example@gmail.com" />
          <p>Heslo:</p>
          <input type="password" placeholder="*********" />
          <button type="submit" className="login-button">
            Přihlásit se
          </button>
        </form>
        <form>
          <h2>Registrace</h2>
          <p>Email:</p>
          <input type="email" placeholder="example@gmail.com" />
          <p>Heslo:</p>
          <input type="password" placeholder="*********" />
          <button type="submit" className="login-button">
            Registrovat
          </button>
          <div className="area" id="cover-div">
            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>

            <button id="cover-button" onClick={ClickButton}>
              {buttonMessage}
            </button>
          </div>
        </form>
      </div>
      <div className="login-services">
        <h3>Nebo se přihlašte s jednou z těchto služeb</h3>
        <button className="google" name="google"><img src={GoogleLogo} alt=""/> Přihlásit s Google</button>
        <button className="facebook" name="facebook"><img src={FacebookLogo} alt=""/>Přihlásit s Facebook</button>
      </div>
    </main>
  );
}
