import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div>
      <h2>{props.meaning.partOfSpeech}</h2>
      <p>{props.meaning.definition}</p>
      <p>{props.meaning.example}</p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
