import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./Home.css";

function Home() {
    const handleButtonClick = () => {
        disappear();
      }
    
      const disappear = () => {
        document.querySelector(".title").classList.add("disappear");
      }    

    return (
        <div className="home">
        <div className="title">
        <h1>
        DSA COMPENDIUM
        </h1>
        </div>
        <div className="container">
        <Link to="/search" className="button-link" onClick={handleButtonClick}>Get Started</Link>        </div>
        <div style={{height: "300px"}}></div>  
        </div>
    )
}
export default Home;