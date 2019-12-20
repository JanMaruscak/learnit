import React from "react";
import Sidebar from "../../components/SideBar";
import GuessingTable from "../../components/GuessingTable";

function Fourierova_Transformace() {
  return (
    <main className="article">
      <Sidebar />
      <h1>Fourierova transformace</h1>
      <p>
        Fourierova transformace je integrální transformace převádějící signál
        mezi časově a frekvenčně závislým vyjádřením pomocí harmonických
        signálů, tj. funkcí sin a cos , obecně tedy funkcí komplexní
        exponenciály. Slouží pro převod signálů z časové oblasti do oblasti
        frekvenční. Signál může být buď ve spojitém či diskrétním čase.
      </p>
      <h2>Video</h2>
      <iframe
        title="Fourierova Transformace"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/spUNpyF58BY"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h2>Závěr</h2>
      <img
        src="https://wikimedia.org/api/rest_v1/media/math/render/svg/e68a6765ec470aa43a06e1b1e5bc6b783a26bfc6"
        alt="vzorec"
      />
      <h2>Test</h2>
      <GuessingTable
        values={[
          {
            question: "Lorem?",
            answer: "Ipsum!"
          },
          {
            question: "Lorem2?",
            answer: "Ipsum2!"
          }
        ]}
      />
      <h2>Zdroje:</h2>
      <ul>
        <li>
          <a href="https://cs.wikipedia.org/wiki/Fourierova_transformace">
            https://cs.wikipedia.org/wiki/Fourierova_transformace
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=spUNpyF58BY">
            https://www.youtube.com/watch?v=spUNpyF58BY
          </a>
        </li>
      </ul>
    </main>
  );
}

export default Fourierova_Transformace;
