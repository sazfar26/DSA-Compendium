import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Search.css";


function Search() {
    
    let topicNames = [];
    //this function will retrieve the list of topics from the topics.json file
    async function getTopicData() {
        const response = await fetch("https://raw.githubusercontent.com/sazfar26/DSA-Compendium/refs/heads/main/dsa-compendium/topics.json");
        const data = await response.json(); //JSON arrray with all of the topics
        topicNames = data.map((topic) => {
            return topic.name;
        });

    }
    
    getTopicData();    
    //this will render the the text above the search bar, as well as pick a random suggestion topic from the array
    let searchBar = document.querySelector(".searchbar");
    const renderText = (element) => {
        let searchTitleDiv = document.getElementById("searchTitle");
        let searchTitleText = searchTitleDiv.textContent;
        searchTitleDiv.textContent = "";

        //generates the text above the search bar
        for (let i = 0; i < searchTitleText.length; i++) {
            setTimeout(() => {
                searchTitleDiv.textContent += searchTitleText.charAt(i);
            }, 45 * i);
        }

        //TODO: Add actual list of topics, based on this semester's 2214 curriculum
        //also, try to revise this so it keeps cycling through the topics even after picking each one once
        const topics = ["Arrays", "Linked Lists", "Stacks", "Queues", "Trees", "Graphs", "Hash Tables", "Sorting", "Searching"];
        let searchBar = document.querySelector(".searchbar");
        let randomIndex = Math.floor(Math.random() * topics.length);
        searchBar.placeholder = topics[randomIndex];
        for (let j = 0; j < topics.length; j++) {
            let randomIndex = Math.floor(Math.random() * topics.length);
            setTimeout(() => {
                searchBar.placeholder = topics[randomIndex];
            }, 2600 * j);
        }
    }


    useEffect(() => {
        document.title= "Search";
        renderText();
    }, [])

    return (
        <div className="search">
            <div id="searchTitle"><h1>What topic do you <br /> need help with?</h1></div>
            <div className="search-container">
                <input type="text" className="searchbar" placeholder="Stacks"></input>
                <button type="submit" class="searchButton">GO</button>
            </div>
            <ul className="autocomplete-list">
                <li>
                    <button className="suggestion-item">Item</button>
                </li>
                <li>
                    <button className="suggestion-item">Item</button>
                </li>
                <li>
                    <button className="suggestion-item">Item</button>
                </li>
                <li>
                    <button className="suggestion-item">Item</button>
                </li>
            </ul>
            <div style={{height: "800px"}}></div>
        </div>
    )


}

export default Search;