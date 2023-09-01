import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Red } from './components/Red';
import { Blue } from './components/Blue';
import { Home } from './components/Home';

export default function App() {
  return (
    <>
      <div id="container">
        {/* <h1>Hello React Router!</h1> */}
          <div id="navbar">
            <Link to="/">HOME</Link>
            <Link to="/blue">BLUE</Link>
            <Link to="/red">RED</Link>
            
          </div>
          <div id="main-section">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blue" element={<Blue />} />
              <Route path="/red" element={<Red />} />
            </Routes>
          </div>
      </div>
 
    </>
  )
}


