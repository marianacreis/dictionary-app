import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function search() {
    let apiKey = "dd09922bof9dfbd100daf3a044cat44d";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let imageApiKey = "dd09922bof9dfbd100daf3a044cat44d";
    let imageAPiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;
    axios.get(imageAPiUrl).then(handleImageResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data);
    console.log(response.data);
  }

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  return (
    <div className="Dictionary">
      <section className="Dictionary-header">
        <div className="text">
          <h1>Dictionary</h1>
          <p>Type a word bellow to search </p>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              className="search-input"
            ></input>
            <input
              type="submit"
              value="Search"
              className="submit-input"
            ></input>
          </form>
        </div>
        <div className="header-image">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/128/094/original/phot.png?1717406010s"
            alt="Man reading"
          ></img>
        </div>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
      <section className="footer">
        This project was coded by{" "}
        <a
          href="https://github.com/marianacreis"
          target="_blank"
          rel="noreferrer"
        >
          Mariana Reis
        </a>{" "}
        an is{" "}
        <a
          href="https://github.com/marianacreis/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on Github
        </a>{" "}
        and{" "}
        <a
          href="https://dictionary-mr.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netifly.
        </a>
      </section>
    </div>
  );
}
