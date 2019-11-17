import React from "react";
import { Link } from "react-router-dom";

export default function Subject(props) {
  const site = `/subjects/${props.name}`//.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return (
    <Link to={site} className="subject-button">{props.name}
    </Link>
  );
}