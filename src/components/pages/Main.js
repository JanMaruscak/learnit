import React from "react";
import ArticleLink from "../ArticleLink";

function Main() {
  return (
    <React.Fragment>
      <div className="main">
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
      <main>
        <h3>Nejčtenější články</h3>
        <div className="articles">
          <ArticleLink
            imgUrl="https://blog.inpage.cz/obrazek/3/kitten-jpg/"
            imgAlt="kocicka"
            name="kocicka"
            text="Kocicka je psem a stavbou zustane"
          />
        </div>
      </main>
    </React.Fragment>
  );
}

export default Main;
