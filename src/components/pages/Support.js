import React from "react";

function Support() {
  return (
    <main>
      <h1>Jak vám můžeme pomoci?</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Popište svůj problém..."
          className="support-searchBox"
        />
        <button type="submit"><span class="fa fa-search"></span></button>
      </div>
    </main>
  );
}

export default Support;
