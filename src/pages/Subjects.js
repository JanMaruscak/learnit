import React from "react";
import Subject from "../components/Subject";
import Physics from "../images/icons/subjects/physics.svg";
import Math from "../images/icons/subjects/math.svg";
import Chemistry from "../images/icons/subjects/chemistry.svg";
import Computer from "../images/icons/subjects/pc.svg";
import ComputerWithFile from "../images/icons/subjects/computer.svg";
import Geography from "../images/icons/subjects/geography.svg";

export default function Subjects() {
  return (
    <main>
      <h1>Předměty</h1>
      <div className="subjects">
        <Subject name="Fyzika" img={Physics} imgAlt="fyzika" />
        <Subject name="Matematika" img={Math} imgAlt="matematika" />
        <Subject name="Chemie" img={Chemistry} imgAlt="chemie" />
        <Subject
          name="Výpočetní technika"
          img={Computer}
          imgAlt="výpočetní technika"
        />
        <Subject name="Zeměpis" img={Geography} imgAlt="zemepis"/>
        <Subject name="Snippets" img={ComputerWithFile} imgAlt="snippets"/>
        <Subject name="Fyzika" img={Physics} />
        <Subject name="Fyzika" img={Physics} />
        <Subject name="Fyzika" img={Physics} />
        <Subject name="Fyzika" img={Physics} />
      </div>
    </main>
  );
}
