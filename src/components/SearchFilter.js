import React from "react";

function SearchFilter(props) {
  function submit(e){
    props.handleSubmit(e);
    e.preventDefault();
  }
  return (
    <form onSubmit={submit} className="filter">
      <p>Seřadit podle:</p>
      <select name="sortBy" onChange={submit}>
        <option value="name">Název</option>
        <option value="date">Datum</option>
        <option value="review">Hodnocení</option>
      </select>
      <select name="sortOrder" id="" onChange={submit}>
        <option value="ascending">Vzestupně</option>
        <option value="descending">Sestupně</option>
      </select>
    </form>
  );
}

export default SearchFilter;
