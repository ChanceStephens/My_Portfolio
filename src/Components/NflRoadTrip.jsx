import React from 'react';
import { Link } from 'react-router-dom';
import roadTripHome from '../images/roadTripHome.png';
import roadTripFalcons from '../images/roadTripFalcons.png';
import roadTripFalconsNavbar from '../images/roadTripFalconsNavbar.png';
import roadTripFalconsExternal  from '../images/roadTripFalconsExternalLinks1.png';
import roadTripVikings from '../images/roadTripFalconsExternalLinks2.png';

export default function NflRoadMap() {
    return (
        <div className="content-container">
            <Link to="/projects" className="back-to-projects-link">Back to Projects</Link>
            <h1>Ultimate NFL Road Trip</h1>
            {/* <h4 href="https://ultimate-nfl-road-trip.netlify.app">Launch Ultimate NFL Road Trip</h4> */}
            <a className="launchLink" href='https://ultimate-nfl-road-trip.netlify.app/'>Go to The Ultimate NFL Road Trip page</a>
            <p><span>Technologies Used:</span> <span>Frontend:</span> React, React Router, Context, Axios, CSS Styling</p>
            <h4>Home Page</h4>
            <img className='project-image' src={roadTripHome} alt="Road Trip Home" />
            <p>The welcome page showcases each stadium along with information about them. By selecting a team, users are directed to a page themed specifically for that team.</p>
            <h4>Team Page</h4>
            <img className='project-image' src={roadTripFalcons} alt="Road Trip Falcons" />
            <p>Once a user navigates to their chosen team page, the page dynamically renders with an image of the stadium, the team logo, and the team's colors. These elements are fetched from a database via an API call, ensuring that each team's page is uniquely styled according to the team’s branding. This approach makes the CSS styling dynamic and tailored to each team.</p>
            <h4>Navigation Bar</h4>
            <img className='project-image' src={roadTripFalconsNavbar} alt="Road Trip Seattle" />
            <p>The navigation bar includes a link to return to the home page and a drop-down menu that allows users to navigate to another team's page.</p>
            <h4>Team Links</h4>
            <img className='project-image' src={roadTripFalconsExternal } alt="Road Trip Miami" />
            <img className='project-image' src={roadTripVikings} alt="Road Trip Vikings" />
            <p>From the API call, I included links to important sites for users, such as the team schedule and ticket purchasing. This makes the app a one-stop shop, making it easier for users to complete the Ultimate NFL Road Trip!</p>
            <Link to="/projects" className="back-to-projects-link">Back to Projects</Link>
        </div>
    );
}
