import React from "react";
import { Link } from "react-router-dom";

export default function ArticleLink(props) {
  const link = `/subjects/${props.subject}/${props.url}`
  console.log(link)
  return (
    <Link to={link}>
      <article className="article">
        <h2>{props.name}</h2>
        <hr style={{ width: "100%", borderColor: "black" }} />
        <div className="container">
          <div className="leftBox">
            <img src={props.imgUrl} alt={props.imgAlt} />
          </div>
          <div className="rightBox">
            <p>{props.text}</p>
          </div>
        </div>
      </article>
    </Link>
  );
}
