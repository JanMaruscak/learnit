import React from "react";
import Article from '../Article'

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
          <h2>Tak čím začneš?</h2>
          <button className="scroll-down-btn">Scroll down</button>
        </div>
      </div>
      <main>
        <h3>Nejčtenější články</h3>
        <div className="articles">
          <Article imgUrl="https://blog.inpage.cz/obrazek/3/kitten-jpg/" imgAlt="kocicka" name="kocicka"/>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Main;
