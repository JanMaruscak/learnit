import React from "react";

export default function SubjectPage({match}) {
  return (
    <main>
        <h1>{match.params.name}</h1>
        <h2>{match.params.hasContent}</h2>
    </main>
  );
}
