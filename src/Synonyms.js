import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <h5>Synonyms:</h5>
        {props.synonyms.map(function (synonyms, index) {
          return (
            <ul key={index}>
              <li>{synonyms} </li>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
