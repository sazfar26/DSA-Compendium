import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Search.css";

function Search() {

    const renderText = (element) => {
        let searchTitleDiv = document.getElementById("searchTitle");
        let searchTitleText = searchTitleDiv.innerText;
        searchTitleDiv.innerText = "";
        for (let i = 0; i < searchTitleText.length; i++) {
            setTimeout(() => {
                searchTitleDiv.innerText += searchTitleText.charAt(i);
            }, 50);
        }
    }

    useEffect(() => {
        document.title= "Search";
        renderText();
    }, [])

    return (
        <div className="search">
        <div id="searchTitle"><h1>What topic do you <br /> need help with today?</h1></div>
        <input type="text" className="searchbar"></input>
        <div style={{height: "800px"}}></div>
        </div>
    )
}

export default Search;