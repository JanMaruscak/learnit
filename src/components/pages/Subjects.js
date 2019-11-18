import React from "react";
import Subject from "../Subject";

export default function Subjects() {
  return (
    <main>
      <h1>Předměty</h1>
      <div className="subjects">
        <Subject name="Fyzika" hasContent={false} />
        <Subject name="Matematika" hasContent={false} />
        <Subject name="Dějepis" hasContent={false} />
        <Subject name="Zeměpis" hasContent={false} />
        <Subject name="Snippets" hasContent={true}/>
        <Subject name="Fyzika" hasContent={false} />
        <Subject name="Fyzika" hasContent={false} />
        <Subject name="Fyzika" hasContent={false} />
        <Subject name="Fyzika" hasContent={false} />
        <Subject name="Fyzika" hasContent={false} />
      </div>
    </main>
  );
}
