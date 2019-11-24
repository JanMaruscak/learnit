import React from "react";
import ArticleLink from "../ArticleLink";

function Main() {
  return (
    <React.Fragment>
      <div className="main">
        <h2>Nejlepší stránka na učení</h2>
        <ul className="main-bullet-points">
          <li>Shromáždění nejkvalitnějších zdrojů</li>
          <li>Neustále aktualizované články</li>
          <li>Souhrn toho nejdůležitějšího</li>
          <li>Garance vrácení peněz</li>
        </ul>
        <h3>Tak čím začneš?</h3>
        <span className="fas fa-angle-down fa-7x scroll-down-btn" onClick={() => window.location.hash = "main-h1"}></span>
      </div>
      <main>
        <h1 id="main-h1">Nejčtenější články</h1>
        <div className="articles">
          <ArticleLink
            url="Test"
            imgUrl="https://blog.inpage.cz/obrazek/3/kitten-jpg/"
            imgAlt="kocicka"
            name="Test"
            text="Testovací článek"
            subject="Fyzika"
          />
          <ArticleLink
            imgUrl="https://blog.inpage.cz/obrazek/3/kitten-jpg/"
            imgAlt="kocicka"
            name="Kocicka"
            text="Kocicka je psem a stavbou zustane"
          />
          <ArticleLink
            imgUrl="https://blog.inpage.cz/obrazek/3/kitten-jpg/"
            imgAlt="kocicka"
            name="Kocicka"
            text="Kocicka je psem a stavbou zustane"
          />
          <ArticleLink
            imgUrl="https://blog.inpage.cz/obrazek/3/kitten-jpg/"
            imgAlt="kocicka"
            name="Kocicka"
            text="Kocicka je psem a stavbou zustane"
          />
          <ArticleLink
            imgUrl="https://blog.inpage.cz/obrazek/3/kitten-jpg/"
            imgAlt="kocicka"
            name="Kocicka"
            text="Kocicka je psem a stavbou zustane"
            subject="Fyzika"
          />
          <ArticleLink
            imgUrl="https://blog.inpage.cz/obrazek/3/kitten-jpg/"
            imgAlt="kocicka"
            name="Kocicka"
            text="Kocicka je psem a stavbou zustane"
            subject="Fyzika"
          />
          <ArticleLink
            imgUrl="https://blog.inpage.cz/obrazek/3/kitten-jpg/"
            imgAlt="kocicka"
            name="Kocicka"
            text="Kocicka je psem a stavbou zustane"
          />
          <ArticleLink
            imgUrl="https://blog.inpage.cz/obrazek/3/kitten-jpg/"
            imgAlt="kocicka"
            name="Kocicka"
            text="Kocicka je psem a stavbou zustane"
          />
        </div>
      </main>
    </React.Fragment>
  );
}

export default Main;
