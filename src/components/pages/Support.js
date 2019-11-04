import React from "react";

function Support() {
  return (
    <main>
      <h1>Jak vám můžeme pomoci?</h1>
      <div className="search-container">
        <input
          autoFocus
          type="text"
          placeholder="Popište svůj problém..."
          className="support-searchBox"
        />
        {/* <button><i className="fas fa-search"></i></button> */}
      </div>
    </main>
  );
}

export default Support;
