// Purpose: Main component of the application
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {

  useEffect(() => {
    document.title = "DSA Compendium";
  }, [])

  return (
    <Router>
    <div className="App">

    <nav>
        <Link to="/" className="navlink"><h3>HOME</h3></Link>
        <Link to="/search" className="navlink"><h3>SEARCH</h3></Link>
        <h3>ABOUT</h3>
    </nav>


    <div className="content">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path ="/search" element={<Search />} />
      </Routes>

    </div>
    </div>
    </Router>
  );
}

export default App;