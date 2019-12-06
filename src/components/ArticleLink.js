import React from "react";
import { Link } from "react-router-dom";

export default function ArticleLink(props) {
  const link = `/subjects/${props.subject}/${props.url}`;
  return (
    <article className="articleLink" style={{ position: "relative" }}>
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
      <Link to={link}>
        <span style={spanLinkStyle}></span>
      </Link>
    </article>
  );
}

const spanLinkStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
  top: "0",
  left: "0",
  zIndex: "1"
};
