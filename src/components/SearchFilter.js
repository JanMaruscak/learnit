import React from "react";

function SearchFilter(props) {
  return (
    <form onSubmit={props.onSubmit} className="filter">
      <p>Seřadit podle:</p>
      <select>
        <option value="name">Název</option>
        <option value="date">Datum</option>
        <option value="review">Hodnocení</option>
      </select>
    </form>
  );
}

export default SearchFilter;
