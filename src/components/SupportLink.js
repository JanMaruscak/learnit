import React from "react";

function SupportLink(props) {
  return (
    <div className="supportLink notFlown">
      <div className="wrapper">
        <div className="left">
          <h3>{props.name}</h3>
          <p>{props.text}</p>
        </div>
        <div className="right">
          <p>Datum aktualizace: {props.date}</p>
          <p>Hodnocení: {props.review} / 5.0</p>
        </div>
      </div>
    </div>
  );
}

export default SupportLink;
