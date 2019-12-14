import React from "react";
import Data from "./ArticleLinks.json";
import ArticleLink from "../components/ArticleLink";

function ArticleResult(props) {
  var newArr = [];
  var query = props.location.search.substring(1);
  query = query.toUpperCase();
  for (var i = 0; i < Data.length; i++) {
    if (Data[i].name.toUpperCase().indexOf(query) > -1) {
      newArr.push(Data[i]);
    }
  }
  if (newArr.length === 0) {
    return (
      <main>
        <h1>Článek nenalezen</h1>
        <button onClick={props.history.goBack} style={returnButton}>
          Zpět?
        </button>
      </main>
    );
  }
  return (
    <main>
      <div className="articles">
        {newArr.map(item => {
          return <ArticleLink name={item.name} />;
        })}
      </div>
    </main>
  );
}

const returnButton = {
  backgroundColor: "green",
  color: "white",
  fontSize: "26px",
  cursor: "pointer",
  padding: "10px",
  width: "200px",
  border: "none",
  margin: "10px"
};

export default ArticleResult;
