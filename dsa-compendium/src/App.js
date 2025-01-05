// Purpose: Main component of the application
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  useEffect(() => {
    document.title = "DSA Compendium";
  }, [])

  const handleButtonClick = () => {
    disappear();
  }

  const disappear = () => {
    document.querySelector(".title").classList.add("disappear");
  }

  return (
    <div className="App">
      <div className="title">
        <h1>
        DSA COMPENDIUM
        </h1>
      </div>
      <div class="container">
      <button onClick={handleButtonClick}>Get Started</button>
      </div>
    </div>
  );
}

export default App;