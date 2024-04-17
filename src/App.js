import React from "react";
import Weather from "./Weather";



import "./App.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
         Weather App
        </h1> 
        
        
    
<Weather />
        
      </header>
     <div className="footer">
     <h2>
      This project was coded by
      <a href="https://glowing-narwhal-291ee4.netlify.app/" target="-blank">
        Noluthando Bridget Siluma
      </a>
      and is
      <a href="https://github.com/Bridget2960" target="-blank" title="GitHub Website"
        >on GitHub</a
      >
      and
      <a
        href="https://www.shecodes.io/"
        target="_blank"
        title="SheCodes Website"
        >hosted on SheCodes</a
      >
    </h2>
    </div>
  );
}

export default App;
