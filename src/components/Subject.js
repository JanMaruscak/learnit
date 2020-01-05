import React from "react";
import { Link } from "react-router-dom";

export default function Subject(props) {
  const site = `/subjects/${props.name}`; //.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return (
    <Link to={site} className="subject-button">
      <img src={props.img} alt={props.imgAlt} />
      <h3>{props.name}</h3>
    </Link>
  );
}
