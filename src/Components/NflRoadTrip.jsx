// import React from 'react';
// import { Link } from 'react-router-dom';
// import roadTripHome from '../images/roadTripHome.png';
// import roadTripFalcons from '../images/roadTripFalcons.png';
// import roadTripFalconsNavbar from '../images/roadTripFalconsNavbar.png';
// import roadTripFalconsExternal  from '../images/roadTripFalconsExternalLinks1.png';
// import roadTripVikings from '../images/roadTripFalconsExternalLinks2.png';

// export default function NflRoadMap() {
//     return (
//         <div className="content-container">
//             <Link to="/projects" className="back-to-projects-link">Back to Projects</Link>
//             <h1>Ultimate NFL Road Trip</h1>
//             {/* <h4 href="https://ultimate-nfl-road-trip.netlify.app">Launch Ultimate NFL Road Trip</h4> */}
//             <a className="launchLink" href='https://ultimate-nfl-road-trip.netlify.app/'>Go to The Ultimate NFL Road Trip page</a>
//             <p><span>Technologies Used:</span> <span>Frontend:</span> React, React Router, Context, Axios, CSS Styling</p>
//             <h4>Home Page</h4>
//             <img className='project-image' src={roadTripHome} alt="Road Trip Home" />
//             <p>The welcome page showcases each stadium along with information about them. By selecting a team, users are directed to a page themed specifically for that team.</p>
//             <h4>Team Page</h4>
//             <img className='project-image' src={roadTripFalcons} alt="Road Trip Falcons" />
//             <p>Once a user navigates to their chosen team page, the page dynamically renders with an image of the stadium, the team logo, and the team's colors. These elements are fetched from a database via an API call, ensuring that each team's page is uniquely styled according to the team’s branding. This approach makes the CSS styling dynamic and tailored to each team.</p>
//             <h4>Navigation Bar</h4>
//             <img className='project-image' src={roadTripFalconsNavbar} alt="Road Trip Seattle" />
//             <p>The navigation bar includes a link to return to the home page and a drop-down menu that allows users to navigate to another team's page.</p>
//             <h4>Team Links</h4>
//             <img className='project-image' src={roadTripFalconsExternal } alt="Road Trip Miami" />
//             <img className='project-image' src={roadTripVikings} alt="Road Trip Vikings" />
//             <p>From the API call, I included links to important sites for users, such as the team schedule and ticket purchasing. This makes the app a one-stop shop, making it easier for users to complete the Ultimate NFL Road Trip!</p>
//             <Link to="/projects" className="back-to-projects-link">Back to Projects</Link>
//         </div>
//     );
// }
import React from 'react';
import { Link } from 'react-router-dom';
import roadTripHome from '../images/roadTripHome.png';
import roadTripFalcons from '../images/roadTripFalcons.png';
import roadTripFalconsNavbar from '../images/roadTripFalconsNavbar.png';
import roadTripFalconsExternal from '../images/roadTripFalconsExternalLinks1.png';
import roadTripVikings from '../images/roadTripFalconsExternalLinks2.png';
import useResponsiveStyles from '../hooks/useResponsiveStyles';

export default function NflRoadMap() {
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
      <h1 style={styles.heading1}>Ultimate NFL Road Trip</h1>
      <p style={styles.paragraph}>
        <h4 style={styles.heading4}>Technologies Used:</h4> <h4 style={styles.heading4}>Frontend:</h4> React, React Router, Context, Axios, CSS Styling
      </p>
      <div className='project-container'>
        <h4 style={styles.heading4}>Home Page</h4>
        <img className='project-image' src={roadTripHome} alt="Road Trip Home" style={styles.img} />
        <p style={styles.paragraph}>
          The welcome page showcases each stadium along with information about them. By selecting a team, users are directed to a page themed specifically for that team.
        </p>
      </div>
      <div className='project-container'>
        <h4 style={styles.heading4}>Team Page</h4>
        <img className='project-image' src={roadTripFalcons} alt="Road Trip Falcons" style={styles.img} />
        <p style={styles.paragraph}>
          Once a user navigates to their chosen team page, the page dynamically renders with an image of the stadium, the team logo, and the team's colors. These elements are fetched from a database via an API call, ensuring that each team's page is uniquely styled according to the team’s branding. This approach makes the CSS styling dynamic and tailored to each team.
        </p>
      </div>
      <div className='project-container'>
        <h4 style={styles.heading4}>Navigation Bar</h4>
        <img className='project-image' src={roadTripFalconsNavbar} alt="Road Trip Seattle" style={styles.img} />
        <p style={styles.paragraph}>
          The navigation bar includes a link to return to the home page and a drop-down menu that allows users to navigate to another team's page.
        </p>
      </div>
      <div className='project-container'>
        <h4 style={styles.heading4}>Team Links</h4>
        <img className='project-image' src={roadTripFalconsExternal} alt="Road Trip Miami" style={styles.img} />
        <img className='project-image' src={roadTripVikings} alt="Road Trip Vikings" style={styles.img} />
        <p style={styles.paragraph}>
          From the API call, I included links to important sites for users, such as the team schedule and ticket purchasing. This makes the app a one-stop shop, making it easier for users to complete the Ultimate NFL Road Trip!
        </p>
      </div>
      <a className="launchLink" href='https://ultimate-nfl-road-trip.netlify.app/' style={styles.link}>Go to The Ultimate NFL Road Trip page</a>
      <Link to="/projects" className="back-to-projects-link" style={styles.link}>Back to Projects</Link>
    </div>
  );
}
