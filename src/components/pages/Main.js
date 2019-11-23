import React from "react";
import ArticleLink from "../ArticleLink";

function Main() {
  return (
    <React.Fragment>
      <div className="main">
        <h2>Nejlepší webová stránka na učení</h2>
        <ul className="main-bullet-points">
          <li>Obsah pro jakýkoliv věk</li>
          <li>Neustále aktualizované články</li>
          <li>Interaktivní výuka</li>
          <li>Najdeš zde vše co tě napadne</li>
        </ul>
        <h3>Tak čím začneš?</h3>
        <span className="fas fa-angle-down fa-7x scroll-down-btn" onClick={() => window.location.hash = "main-h1"} style={{scrollBehavior:"smooth"}}></span>
        {/* <button className="scroll-down-btn" onClick="#main-h1">Scroll down</button> */}
      </div>
      <main>
        <h1 id="main-h1">Nejčtenější články</h1>
        <div className="articles">
          <ArticleLink
            url="Test"
            imgUrl="https://blog.inpage.cz/obrazek/3/kitten-jpg/"
            imgAlt="kocicka"
            name="Kocicka"
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin in tellus sit amet nibh dignissim sagittis. Nunc auctor. Pellentesque sapien. Duis viverra diam non justo. Nunc tincidunt ante vitae massa. Aliquam erat volutpat. Fusce suscipit libero eget elit. Nunc dapibus tortor vel mi dapibus sollicitudin. Fusce nibh. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Aenean placerat."
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
