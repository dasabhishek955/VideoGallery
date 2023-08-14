import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Submit from './Submit';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/submit" element={<Submit />} />
      </Routes>
    </Router>
  );
}

export default App;
