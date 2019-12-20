import React from "react";
import Sidebar from "../../components/SideBar";

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
      <h2>Tahák</h2>
      <table
        style={{
          margin: "auto"
        }}
      >
        <thead>
          <tr>
            <th>Vlastnost</th>
            <th>Hodnota</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lorem</td>
            <td>Transformaci</td>
          </tr>
          <tr>
            <td>Ipsum</td>
            <td>Neumim</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default Fourierova_Transformace;
