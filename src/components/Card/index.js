import React from "react";
import "./style.css";

function ChappelleCard(props) {
    return (
        <div className="card">
      <div className="img-container">
        <img alt={props.character} src={props.img} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.character}</strong> 
          </li>
        </ul>
      </div>
    </div>
    );
}

export default ChappelleCard;