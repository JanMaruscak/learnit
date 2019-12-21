import React, { useState } from "react";
import { ReactComponent as Search } from "../icons/search.svg";
import SupportLink from "../components/SupportLink";
import Data from "./SupportLinks";
import SearchFilter from "../components/SearchFilter";

var shouldSort = false;

function Support() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("ascending");

  function handleSubmit(e) {
    let newArr = [...results];
    newArr = [];
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
    shouldSort = true;
    setResults(newArr);
    e.preventDefault();
  }

  function handleFilterSubmit(e) {
    if (e.target.name === "sortBy") {
      shouldSort = true;
      setSortBy(e.target.value);
    } else if (e.target.name === "sortOrder") {
      shouldSort = true;
      setSortOrder(e.target.value);
    }
    e.preventDefault();
  }

  if (shouldSort) {
    let data = [...results];
    if (sortBy === "name") {
      if (sortOrder === "ascending") {
        data.sort((a, b) => (a.name > b.name ? 1 : -1));
      } else {
        data.sort((a, b) => (a.name < b.name ? 1 : -1));
      }
    } else if (sortBy === "date") {
      if (sortOrder === "ascending") {
        data.sort((a, b) => (a.date > b.date ? 1 : -1));
      } else {
        data.sort((a, b) => (a.date < b.date ? 1 : -1));
      }
    } else if (sortBy === "review") {
      if (sortOrder === "ascending") {
        data.sort((a, b) => (a.review > b.review ? 1 : -1));
      } else {
        data.sort((a, b) => (a.review < b.review ? 1 : -1));
      }
    }
    setResults(data);
    shouldSort = false;
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
      <SearchFilter handleSubmit={handleFilterSubmit} />
      <div className="supportLinks">
        {results.map((item, i) => {
          return (
            <SupportLink
              name={item.name}
              text={item.text}
              date={item.date}
              review={item.review}
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
