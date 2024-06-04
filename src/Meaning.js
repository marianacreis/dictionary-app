import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <section className="Meaning">
      <div className="Meaning-text">
        <h2>{props.meaning.partOfSpeech}</h2>
        <p className="Definition">{props.meaning.definition}</p>
        <p className="Example">{props.meaning.example}</p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </section>
  );
}
