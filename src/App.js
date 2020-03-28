import React, { useState } from 'react';
import $ from "jquery";
import { movie_display } from './movie_display.js';
import './App.css';

function App() {
  let movies = ["porco_rosso", "pulp_fiction"];
  const [currentContent, setCurrentContent] = useState({});
  let newSuggestion = () => {
    let random_movie = Math.ceil(Math.random() * movies.length);
    let fileName = ".\\movies\\" + movies[random_movie];
    fetch(`${fileName}.json`)
      .then(response => response.json())
      .then(data => {
        setCurrentContent(data);
      })
  }
  let isEmpty = (obj) => {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return JSON.stringify(obj) === JSON.stringify({});
  }
  return (
    <div className="App">
      <header className="App-header">
        <div id="content-container">
          {isEmpty(currentContent) ? <h2>Hva skal jeg gjøre? <span role="img">🤔</span></h2>
            : movie_display(currentContent)}
        </div>
        <button onClick={newSuggestion} type="button" class=" mt-4 btn btn-primary">Gi meg et {isEmpty(currentContent) ? "" : "nytt"} forslag</button>
      </header>
    </div>
  );
}

export default App;
