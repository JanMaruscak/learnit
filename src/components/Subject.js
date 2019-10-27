import React from "react";
import { Link } from "react-router-dom";

export default function Subject({ name }) {
  const site = `/subjects/${name}`//.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return (
    <Link to={site}>
      <button className="subject-button">{name}</button>
    </Link>
  );
}