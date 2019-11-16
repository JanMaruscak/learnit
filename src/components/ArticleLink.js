import React from "react";

export default function ArticleLink(props) {
  return (
    <article className="article">
      <h2>{props.name}</h2>
      <div className="container">
        <div className="leftBox">
          <img src={props.imgUrl} alt={props.imgAlt} />
        </div>
        <div className="rightBox">
          <p>{props.text}</p>
        </div>
      </div>
    </article>
  );
}
