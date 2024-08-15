// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css';
// import Home from './Components/Home';
// import Projects from './Components/Projects';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import GoalGetter from './Components/GoalGetter';
// import MemersParadise from './Components/MemersParadise';
// import NflRoadMap from './Components/NflRoadTrip';

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav className='nav-links'>
//               <Link to="/" className="nav-home">Home</Link>
//               <Link to="/about" className="nav-about">About Me</Link>
//               <Link to="/projects" className="nav-projects">Projects</Link>
//               <Link to="/contact" className="nav-contact">Contact</Link>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/projects/goalgetter" element={<GoalGetter />} />
//           <Route path="/projects/memersparadise" element={<MemersParadise />} />
//           <Route path="/projects/nflroadmap" element={<NflRoadMap />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Projects from './Components/Projects';
import About from './Components/About';
// import Contact from './Components/Contact';
import GoalGetter from './Components/GoalGetter';
import MemersParadise from './Components/MemersParadise';
import NflRoadMap from './Components/NflRoadTrip'; // Corrected import
import useResponsiveStyles from './hooks/useResponsiveStyles';
import ContactFooter from './Components/ContactFooter';

function App() {
  const { fontSize } = useResponsiveStyles();

  const styles = {
    navLinks: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '100%',
      fontSize: fontSize(6), // Example base size
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    navItem: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '50px',
      borderRadius: '10px',
    },
  };

  return (
    <Router>
      <div>
        <nav className='nav-links' style={styles.navLinks}>
          <Link to="/" className="nav-home" style={styles.navItem}>Home</Link>
          <Link to="/about" className="nav-about" style={styles.navItem}>About Me</Link>
          <Link to="/projects" className="nav-projects" style={styles.navItem}>Projects</Link>
          {/* <Link to="/contact" className="nav-contact" style={styles.navItem}>Contact</Link> */}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/goalgetter" element={<GoalGetter />} />
          <Route path="/projects/memersparadise" element={<MemersParadise />} />
          <Route path="/projects/nflroadmap" element={<NflRoadMap />} />
        </Routes>
        <ContactFooter />
      </div>
    </Router>
  );
}

export default App;
