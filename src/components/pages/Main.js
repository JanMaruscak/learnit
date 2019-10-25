import React from "react";
import "../../App.css";

function Main() {
  return (
    <React.Fragment>
      <div className="main">
        <div className="header">
          <h1>Nejlepší webová stránka na učení</h1>
          <ul className="main-bullet-points">
            <li>Obsah pro jakýkoliv věk</li>
            <li>Neustále aktualizované články</li>
            <li>Interaktivní výuka</li>
            <li>Najdeš zde vše co tě napadne</li>
          </ul>
          <img src="../../public/logo192.png" alt="logo" />
          <h2>Tak čím začneš?</h2>
          <button className="scroll-down-btn">Scroll down</button>
        </div>
      </div>
      <main>{/* <h2>Populární články</h2> */}</main>
    </React.Fragment>
  );
}

export default Main;
