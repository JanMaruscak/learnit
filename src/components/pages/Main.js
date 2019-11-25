import React from "react";
import ArticleLink from "../ArticleLink";
import WindowsSVG from "../../images/windows.svg";
import SearchingSVG from "../../images/searching.svg";

function Main() {
  return (
    <React.Fragment>
      <div className="main">
        <h2>Nejlepší stránka na učení</h2>
        {/* <ul className="main-bullet-points">
          <li>Shromáždění nejkvalitnějších zdrojů</li>
          <li>Neustále aktualizované články</li>
          <li>Souhrn toho nejdůležitějšího</li>
          <li>Garance vrácení peněz</li>
        </ul> */}
        <h3>Tak čím začneš?</h3>
        <span
          className="fas fa-angle-down fa-7x scroll-down-btn"
          onClick={() => (window.location.hash = "main-h1")}
        ></span>
      </div>
      <div className="points">
          <div className="point">
              <div className="container">
                  <div className="container-left">
                    <img src={WindowsSVG} alt="windows illustration" />
                  </div>
                  <div className="container-right">
                    <h2>Konec hledání</h2>
                    <p>Taky nás nebaví ztrácet čas hledáním informací.</p>
                  </div>
              </div>
            </div>

          <div className="point">
            <div className="container">
              <div className="container-left">
                <h2>Spolehlivé zdroje</h2>
                <p>
                  Vybíráme ty nejlepší zdroje informací. Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Dolor laboriosam quos
                  deserunt, provident id earum aspernatur quidem excepturi odit.
                  Doloremque totam a laudantium nobis quod, id vero at numquam
                  distinctio.
                </p>
              </div>
              <div className="container-right">
                <img src={SearchingSVG} alt="searching illustration" />
              </div>
            </div>
        </div>
        <div className="point">
          <div className="container">
            <div className="container-left">
              <img src={WindowsSVG} alt="windows" />
            </div>
            <div className="container-right">
              <h2>Lorem ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                dolore sunt quibusdam nam molestias ut placeat inventore. Soluta
                accusamus doloribus, suscipit necessitatibus perferendis quis
                libero voluptatem animi excepturi quibusdam deleniti?
              </p>
            </div>
          </div>
        </div>
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
