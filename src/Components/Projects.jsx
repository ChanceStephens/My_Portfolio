import React from 'react';
import { Link } from 'react-router-dom';
import goalGetter from '../images/goalGetterLogin.png'
import nflRoadmap from '../images/roadTripHome.png'
import memersParadise from '../images/memeStart.png'

export default function Projects() {
    return (
        <div className='content-container'>
            <h1>My Projects</h1>
            <h4>Goal Getter</h4>
            <Link to="/projects/goalgetter">
                <img src={goalGetter} alt="Goal Getter" />
            </Link>
            <p>This app calculates and displays daily story points, tracks completed vs. remaining points, and shows project status. Built with HTML, CSS, React, and JavaScript, it offers a dynamic user experience and uses RESTful APIs for full CRUD operations to manage user input, data storage, and progress tracking.</p>
            
            <h4>NFL Roadmap</h4>
            <Link to="/projects/nflroadmap">
                <img src={nflRoadmap} alt="NFL Roadmap" />
            </Link>
            <p>This app features a React client-side interface for planning and documenting NFL venue visits, with Node.js managing server-side data storage and user authentication. Axios handles API requests for real-time NFL data and user content, supporting comments, images, and trip planning links.</p>
            
            <h4>Memer's Paradise</h4>
            <Link to="/projects/memersparadise">
                <img src={memersParadise} alt="Memer's Paradise" />
            </Link>
            <p>This web app uses API calls and CSS styling to randomly display meme images. Users can add their own text to the images and save them, with full CRUD operations available for editing and deleting saved memes.</p>
        </div>
    );
}
