import React from "react";
import { Link } from "react-router-dom";

export default function ArticleLink(props) {
  const link = `/subjects/${props.subject}/${props.url}`;
  return (
    <article className="articleLink" style={{ position: "relative" }}>
      <div className="wrapper">
        <div className="header">
          <p>{props.date}</p>
          <h3>{props.name}</h3>
          <p>{props.subject}</p>
        </div>
        <hr
          style={{
            width: "100%",
            border: "2px solid black",
            borderBottom: "none"
          }}
        />
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
      </div>
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
