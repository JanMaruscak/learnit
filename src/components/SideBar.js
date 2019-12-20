import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sideBar">
      <h3>Podobné články</h3>
      <ul>
        <li>
          <Link replace to="/subjects/Matematika/Fourierova_Transformace">Fourierova transformace</Link>
        </li>
        <li>
          <Link to="">Lorem neco</Link>
        </li>
        <li>
          <Link to="">Lorem neco</Link>
        </li>
        <li>
          <Link to="">Lorem neco</Link>
        </li>
        <li>
          <Link to="">Lorem neco</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
