import React, { useLayoutEffect, useState } from "react";

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
    if (width <= 1100) {
      coverDiv.style.top = "-350px";
      coverDiv.style.left = "0";
      buttonMessage = "Už máš svůj účet?";
    } else {
      coverDiv.style.left = "-500px";
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
    </main>
  );
}
