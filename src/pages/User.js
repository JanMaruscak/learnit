import React, { Suspense, useLayoutEffect,useState } from "react";

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
  console.log(width)
  const [isFirst, setFirst] = React.useState(false);
  function ClickButton(e) {
    setFirst(!isFirst);
    e.preventDefault();
  }
  if (isFirst) {
    document.getElementById("cover-div").style.left = "-500px";
    buttonMessage = "Už máš svůj účet?";
  } else if (document.getElementById("cover-div") !== null) {
    document.getElementById("cover-div").style.left = "0px";
    buttonMessage = "Ještě nemáš účet?";
  }
  return (
    <Suspense
      fallback={
        <div
          style={{ width: "100vw", height: "100vh", backgroundColor: "black" }}
        >
          Loading...
        </div>
      }
    >
      <main>
      <div className="g-signin2" data-onsuccess="onSignIn"></div>
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
            <div id="cover-div">
              <button id="cover-button" onClick={ClickButton}>
                {buttonMessage}
              </button>
            </div>
          </form>
        </div>
      </main>
    </Suspense>
  );
}
