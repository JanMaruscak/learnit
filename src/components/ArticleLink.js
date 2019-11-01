import React from "react";

export default function ArticleLink(props) {
  return (
      <div className="article">
          <h2>{props.name}</h2>
          <img src={props.imgUrl} alt={props.imgAlt}/>
          <p>{props.text}</p>
      </div>      
  );
}
