import React from "react";
import Data from "./ArticleLinks.json";
import ArticleLink from "../components/ArticleLink";

function ArticleResult(props) {
  var newArr = [];
  var query = props.location.search.substring(1);
  var showQuery = query;
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
      <h1>Vaše výsledky pro: {showQuery}</h1>
      <div className="articles">
        {newArr.map((item, i) => {
          return (
            <ArticleLink
              name={item.name}
              text={item.text}
              subject={item.subject}
              imgUrl={item.imgUrl}
              imgAlt={item.imgAlt}
              url={item.url}
              key={i}
            />
          );
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
