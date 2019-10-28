import React from "react";

function Article(props) {
  return (
      <div className="article">
          <h2>{props.name}</h2>
          <img src={props.img-url} alt={props.img-alt}/>
          <p>{props.about}</p>
      </div>      
  );
}

export default Article;
