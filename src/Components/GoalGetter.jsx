// import React from 'react';
// import { Link } from 'react-router-dom';
// import goalGetterHome from '../images/goalGetterHome.png';
// import goalGetterLogin from '../images/goalGetterLogin.png';
// import goalGetterAbout from '../images/goalGetterAbout.png';
// import goalGetterPaceTracker from '../images/goalGetterPaceTracker.png';

// export default function GoalGetter() {
//     return (
//         <div className="content-container">
//             <Link to="/projects" className="back-to-projects-link">Back to Projects</Link>
//             <h1>Goal Getter</h1>
//             {/* <h4>Launch Goal Getter</h4> */}
//             <a className="launchLink" href='https://goalgetter-1wab.onrender.com/'>Launch Goal Getter</a>
//             <p><span>Technologies Used:</span> <span>Frontend:</span> React, React Router, Axios, CSS Styling <span>Backend:</span> Express, Morgan, Mongoose, dotenv, express-jwt, Routes, Models</p>
//             <h4>Login Page</h4>
//             <img className='project-image' src={goalGetterLogin} alt="Goal Getter Login" />
//             <p>This is the login page for user authentication and authorization. Users enter their credentials to access their personal dashboard and track their progress.</p>
//             <h4>Home Page</h4>
//             <img className='project-image' src={goalGetterHome} alt="Goal Getter Home" />
//             <p>The home page dashboard displays multiple links for users to access resourses and various APIs rendering jokes, life advice, and inspirational quotes for the user to enjoy. It also shows the user's current story point status, helping them track their progress effectively.</p>
//             <h4>Tracking Page</h4>
//             <img className='project-image' src={goalGetterPaceTracker} alt="Goal Getter Pace Tracker" />
//             <p>This page allows users to input their data, including story points and other relevant information. The data is then processed and stored in the backend database, enabling users to track their progress.</p>
//             <h4>About Page</h4>
//             <img className='project-image' src={goalGetterAbout} alt="Goal Getter About" />
//             <p>The about page provides information about the app and how to use it.</p>
//             <Link to="/projects" className="back-to-projects-link">Back to Projects</Link>
//         </div>
//     );
// }

import React from 'react';
import { Link } from 'react-router-dom';
import goalGetterHome from '../images/goalGetterHome.png';
import goalGetterLogin from '../images/goalGetterLogin.png';
import goalGetterAbout from '../images/goalGetterAbout.png';
import goalGetterPaceTracker from '../images/goalGetterPaceTracker.png';
import useResponsiveStyles from '../hooks/useResponsiveStyles';

export default function GoalGetter() {
  const { fontSize, imageSize } = useResponsiveStyles();


  const styles = {
    container: {
      fontSize: fontSize(16),
    },
    img: {
      width: imageSize(100),
    },
    heading1: {
      fontSize: fontSize(7),
    },
    heading4: {
      fontSize: fontSize(5),
    },
    paragraph: {
      fontSize: fontSize(3.5),
    },
    link: {
      fontSize: fontSize(7),
    }
  };

  return (
    <div className="content-container" style={styles.container}>
      <h1 style={styles.heading1}>Goal Getter</h1>
      <p style={styles.paragraph}>
        <h4 style={styles.heading4}>Technologies Used:</h4> <h4 style={styles.heading4}>Frontend:</h4> React, React Router, Axios, CSS Styling <h4 style={styles.heading4}>Backend:</h4> Express, Morgan, Mongoose, dotenv, express-jwt, Routes, Models
      </p>
      <div className='project-container'>
        <h4 style={styles.heading4}>Login Page</h4>
        <img className='project-image' src={goalGetterLogin} alt="Goal Getter Login" style={styles.img} />
        <p style={styles.paragraph}>
          This is the login page for user authentication and authorization. Users enter their credentials to access their personal dashboard and track their progress.
        </p>
      </div>
      <div className='project-container'>
        <h4 style={styles.heading4}>Home Page</h4>
        <img className='project-image' src={goalGetterHome} alt="Goal Getter Home" style={styles.img} />
        <p style={styles.paragraph}>
          The home page dashboard displays multiple links for users to access resourses and various APIs rendering jokes, life advice, and inspirational quotes for the user to enjoy. It also shows the user's current story point status, helping them track their progress effectively.
        </p>
      </div>
      <div className='project-container'>
        <h4 style={styles.heading4}>Tracking Page</h4>
        <img className='project-image' src={goalGetterPaceTracker} alt="Goal Getter Pace Tracker" style={styles.img} />
        <p style={styles.paragraph}>
          This page allows users to input their data, including story points and other relevant information. The data is then processed and stored in the backend database, enabling users to track their progress.
        </p>
      </div>
      <div className='project-container'>
        <h4 style={styles.heading4}>About Page</h4>
        <img className='project-image' src={goalGetterAbout} alt="Goal Getter About" style={styles.img} />
        <p style={styles.paragraph}>
          The about page provides information about the app and how to use it.
        </p>
      </div>
      <a className="launchLink" href='https://goalgetter-1wab.onrender.com/' style={styles.link}>Launch Goal Getter</a>
      <Link to="/projects" className="back-to-projects-link" style={styles.link}>Back to Projects</Link>

    </div>
  );
}
