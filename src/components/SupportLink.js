import React from "react";

function SupportLink(props) {
  return (
    <div className="supportLink notFlown">
      <h3>{props.name}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default SupportLink;
