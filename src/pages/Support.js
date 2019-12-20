import React, { useState } from "react";
import { ReactComponent as Search } from "../icons/search.svg";
import SupportLink from "../components/SupportLink";
import Data from "./SupportLinks";
import SearchFilter from '../components/SearchFilter';

function Support(props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function handleSubmit(e) {
    const newArr = [];
    for (let i = 0; i < Data.length; i++) {
      if (Data[i].name.toUpperCase().indexOf(query.toUpperCase()) > -1) {
        newArr.push(Data[i]);
      }
    }
    for (let i = 0; i < Data.length; i++) {
      if (
        Data[i].text.toUpperCase().indexOf(query.toUpperCase()) > -1 &&
        !newArr.includes(Data[i])
      ) {
        newArr.push(Data[i]);
      }
    }
    setResults(newArr);
    e.preventDefault();
  }
  function handleFilterSubmit(e){
    if(e.target.name === "sortBy"){
      setResults(() => results.sort((a, b) => (a.name > b.name) ? 1 : -1));
      // console.log(results);
    }
    e.preventDefault();
  }
  loop();
  return (
    <main>
      <h1>Jak vám můžeme pomoci?</h1>
      <form className="search-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Popište svůj problém..."
          onChange={e => setQuery(e.target.value)}
          value={query}
        />
        <button type="submit">
          <Search />
        </button>
      </form>
      {/* <SearchFilter handleSubmit={handleFilterSubmit} /> */}
      <div className="supportLinks">
        {results.map((item, i) => {
          return (
            <SupportLink
              name={item.name}
              text={item.text}
              date={item.date}
              key={i}
            />
          );
        })}
      </div>
    </main>
  );
}

var scroll =
  window.requestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
var left = document.getElementsByClassName("notFlown");
var right = document.getElementsByClassName("notFlown");

function loop() {
  Array.prototype.forEach.call(left, function(el) {
    if (isElementInViewport(el)) {
      el.classList.remove("notFlown");
    }
  });
  Array.prototype.forEach.call(right, function(el) {
    if (isElementInViewport(el)) {
      el.classList.remove("notFlown");
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

export default Support;
