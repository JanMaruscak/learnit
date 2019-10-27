import React from "react";

export default function SubjectPage({match}) {
  return (
    <main>
        <h1>{match.params.name}</h1>
    </main>
  );
}
