import React from "react";
import { Link } from "react-router-dom";

export default function Subject({ name }) {
  const site = `/${name}`;
  return (
    <Link to={site.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}>
      <button className="subject-button">{name}</button>
    </Link>
  );
}
