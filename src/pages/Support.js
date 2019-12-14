import React from "react";
import { ReactComponent as Search } from "../icons/search.svg";

function Support() {
  return (
    <main>
      <h1>Jak vám můžeme pomoci?</h1>
      <div className="search-container">
        <input type="text" placeholder="Popište svůj problém..." />
        <button type="submit">
          <Search />
        </button>
      </div>
    </main>
  );
}

export default Support;
