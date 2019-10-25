import React from "react";
import { Link } from "react-router-dom";

export default function Subject({ name }) {
  const site = `/${name}`;
  return (
    <button className="subject-button">
      <Link to={site.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}>
        {name}
      </Link>
    </button>
  );
}
