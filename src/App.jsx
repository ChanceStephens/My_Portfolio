import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import GoldenCircle from './Components/GoldenCircle';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <div>
        <nav>
              <Link to="/" className="link-home">Home</Link>
              <Link to="/projects" className="link-projects">Projects</Link>
              <Link to="/about" className="link-about">About Me</Link>
              <Link to="/contact" className="link-contact">Contact Me</Link>
        </nav>

        <Routes>
          <Route path="/" element={<GoldenCircle />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
