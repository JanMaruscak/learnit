import React from "react";
import ArticleLink from "../components/ArticleLink";
import WindowsSVG from "../images/windows.svg";
import SearchingSVG from "../images/searching.svg";
import GraduationSVG from '../images/graduation.svg';
import { ReactComponent as ChevronDown } from "../icons/chevron-down.svg";
import Kitten from "../images/kitten.gif";

function Main() {
  loop();
  return (
    <main>
      <div className="main">
        <h2>Proč Learn It?</h2>
        <a href="#points">
          <ChevronDown className="scroll-down-btn" />
        </a>
      </div>
      <div className="points" id="points">
        <div className="point">
          <div className="container">
            <div className="container-left notFlown-left">
              <img src={WindowsSVG} alt="windows illustration" />
            </div>
            <div className="container-right notFlown-right">
              <h2>Konec hledání</h2>
              <p>
                Taky nás nebaví ztrácet čas hledáním informací. Proto pro vás neustále hledáme nebo tvoříme nové články o jakémkoliv tématu.
              </p>
            </div>
          </div>
        </div>

        <div className="point">
          <div className="container change">
            <div className="container-left notFlown-left">
              <h2>Spolehlivé zdroje</h2>
              <p>
                Abychom vám zajistili co nejkvalitnější a nejpohodlnější služby, tak veškeré externí informace a články vybíráme jen z těch nejlepších zdrojů. Ty samozřejmě následně ověřujeme.
              </p>
            </div>
            <div className="container-right notFlown-right">
              <img src={SearchingSVG} alt="searching illustration" />
            </div>
          </div>
        </div>

        <div className="point">
          <div className="container">
            <div className="container-left notFlown-left">
              <img src={GraduationSVG} alt="windows" />
            </div>
            <div className="container-right notFlown-right">
              <h2>Efektivita</h2>
              <p>
                Snažíme se vás na každé téma připravit co nejlepším způsobem. To dokazují skvělé akademické výsledky našich uživatelů.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 id="main-h1">Nejčtenější články</h1>
      <div className="articles">
        <ArticleLink
          url="Test"
          imgUrl={Kitten}
          imgAlt="kocicka"
          name="Test"
          text="Testovací článek"
          subject="Fyzika"
          date="9.5.2015"
        />
        <ArticleLink name="Fourierova transformace" subject="Matematika"
        imgUrl="http://lodev.org/cgtutor/images/1ddft.gif"
        imgAlt="Fourierova Transformace graf"
        text="Převod signálů
        z časové reprezentace do frekvenční
        reprezentace.
        "
        url="Fourierova_Transformace"/>
        <ArticleLink
          imgUrl={Kitten}
          imgAlt="kocicka"
          name="Kocicka"
          text="Kocicka je psem a stavbou zustane"
          subject="Fyzika"
          date="9.5.2015"
        />
        <ArticleLink
          imgUrl={Kitten}
          imgAlt="kocicka"
          name="Kocicka"
          text="Kocicka je psem a stavbou zustane"
          subject="Fyzika"
          date="9.5.2015"
        />
        <ArticleLink
          imgUrl={Kitten}
          imgAlt="kocicka"
          name="Kocicka"
          text="Kocicka je psem a stavbou zustane"
          subject="Fyzika"
          date="9.5.2015"
        />
        <ArticleLink
          imgUrl={Kitten}
          imgAlt="kocicka"
          name="Kocicka"
          text="Kocicka je psem a stavbou zustane"
          subject="Fyzika"
          date="9.5.2015"
        />
        <ArticleLink
          imgUrl={Kitten}
          imgAlt="kocicka"
          name="Kocicka"
          text="Kocicka je psem a stavbou zustane"
          subject="Fyzika"
          date="9.5.2015"
        />
        <ArticleLink
          imgUrl={Kitten}
          imgAlt="kocicka"
          name="Kocicka"
          text="Kocicka je psem a stavbou zustane"
          subject="Fyzika"
          date="9.5.2015"
        />
      </div>
    </main>
  );
}

var scroll =
  window.requestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
var left = document.getElementsByClassName("notFlown-left");
var right = document.getElementsByClassName("notFlown-right");

function loop() {
  Array.prototype.forEach.call(left, function(el) {
    if (isElementInViewport(el)) {
      el.classList.remove("notFlown-left");
    }
  });
  Array.prototype.forEach.call(right, function(el) {
    if (isElementInViewport(el)) {
      el.classList.remove("notFlown-right");
    }
  });
  scroll(loop);
}
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}

export default Main;
