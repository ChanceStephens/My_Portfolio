import React from 'react';
import { Link } from 'react-router-dom';
import goalGetterHome from '../images/goalGetterHome.png';
import goalGetterLogin from '../images/goalGetterLogin.png';
import goalGetterAbout from '../images/goalGetterAbout.png';
import goalGetterPaceTracker from '../images/goalGetterPaceTracker.png';

export default function GoalGetter() {
    return (
        <div className="content-container">
            <Link to="/projects" className="back-to-projects-link">Back to Projects</Link>
            <h1>Goal Getter</h1>
            {/* <h4>Launch Goal Getter</h4> */}\
            <a href='https://goalgetter-1wab.onrender.com/'>Launch Goal Getter</a>
            <p><span>Technologies Used:</span> <span>Frontend:</span> React, React Router, Axios, CSS Styling <span>Backend:</span> Express, Morgan, Mongoose, dotenv, express-jwt, Routes, Models</p>
            <h4>Login Page</h4>
            <img className='project-image' src={goalGetterLogin} alt="Goal Getter Login" />
            <p>This is the login page for user authentication and authorization. Users enter their credentials to access their personal dashboard and track their progress.</p>
            <h4>Home Page</h4>
            <img className='project-image' src={goalGetterHome} alt="Goal Getter Home" />
            <p>The home page dashboard displays multiple links for users to access resourses and various APIs rendering jokes, life advice, and inspirational quotes for the user to enjoy. It also shows the user's current story point status, helping them track their progress effectively.</p>
            <h4>Tracking Page</h4>
            <img className='project-image' src={goalGetterPaceTracker} alt="Goal Getter Pace Tracker" />
            <p>This page allows users to input their data, including story points and other relevant information. The data is then processed and stored in the backend database, enabling users to track their progress.</p>
            <h4>About Page</h4>
            <img className='project-image' src={goalGetterAbout} alt="Goal Getter About" />
            <p>The about page provides information about the app and how to use it.</p>
            <Link to="/projects" className="back-to-projects-link">Back to Projects</Link>
        </div>
    );
}
