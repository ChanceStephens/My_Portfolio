import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import GoalGetter from './Components/GoalGetter';
import MemersParadise from './Components/MemersParadise';
import NflRoadMap from './Components/NflRoadTrip';

function App() {
  return (
    <Router>
      <div>
        <nav className='nav-links'>
              <Link to="/" className="nav-home">Home</Link>
              <Link to="/about" className="nav-about">About Me</Link>
              <Link to="/projects" className="nav-projects">Projects</Link>
              <Link to="/contact" className="nav-contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/goalgetter" element={<GoalGetter />} />
          <Route path="/projects/memersparadise" element={<MemersParadise />} />
          <Route path="/projects/nflroadmap" element={<NflRoadMap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
