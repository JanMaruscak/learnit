import React, { useState, useReducer } from "react";
import { ReactComponent as Search } from "../icons/search.svg";
import SupportLink from "../components/SupportLink";
import Data from "./SupportLinks";

function GetArr(query) {
  let newArr = [];
  for (var i = 0; i < Data.length; i++) {
    if (Data[i].name.toUpperCase().indexOf(query) > -1) {
      newArr.push(Data[i]);
    }
  }
  return newArr;
}

function Support(props) {
  const [query, setQuery] = useState("");
  const [results, dispatch] = useReducer((results, { type, value }) => {
    switch (type) {
      case "add":
        return [...results, value];
      case "remove":
        return results.filter((_, index) => index !== value);
        case "reset":
          return results = [];
      default:
        return results;
    }
  }, []);
  // setResult(props.location.search);

  function handleSubmit(e) {
    // console.log(query);
    dispatch({type:"reset"});
    for (var i = 0; i < Data.length; i++) {
      if (Data[i].name.toUpperCase().indexOf(query.toUpperCase()) > -1) {
        dispatch({type:"add", value:Data[i]})
      }
    }
    console.log(results)

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
      <div className="supportLinks">
      {results.map((item,i) => {
          return (
            <SupportLink name={item.name} text={item.text} key={i}/>
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
