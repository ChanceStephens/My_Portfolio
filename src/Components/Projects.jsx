// import React from 'react';
// import { Link } from 'react-router-dom';
// import goalGetter from '../images/goalGetterLogin.png'
// import nflRoadmap from '../images/roadTripHome.png'
// import memersParadise from '../images/memeStart.png'

// export default function Projects() {
//     return (
//         <div className='content-container'>
//             <h1>My Projects</h1>
//             <h4>
//                 <Link to="/projects/goalgetter">Goal Getter</Link>
//                 <img src={goalGetter} alt="Goal Getter" />
//                 <p>This app calculates and displays daily story points, tracks completed vs. remaining points, and shows project status. Built with HTML, CSS, React, and JavaScript, it offers a dynamic user experience and uses RESTful APIs for full CRUD operations to manage user input, data storage, and progress tracking.</p>
//             </h4>
//             <h4>
//                 <Link to="/projects/nflroadmap">NFL Roadmap</Link><img src={nflRoadmap} alt="NFL Roadmap" /><p>This app features a React client-side interface for planning and documenting NFL venue visits, with Node.js managing server-side data storage and user authentication. Axios handles API requests for real-time NFL data and user content, supporting comments, images, and trip planning links.</p>
//             </h4>
//             <h4>
//                 <Link to="/projects/memersparadise">Memer's Paradise</Link><img src={memersParadise} alt="Memer's Paradise" /><p>This web app uses API calls and CSS styling to randomly display meme images. Users can add their own text to the images and save them, with full CRUD operations available for editing and deleting saved memes.</p>
//             </h4>
//             {/* <h4>Goal Getter</h4> */}
//                 {/* <img src={goalGetter} alt="Goal Getter" /> */}
//         </div>
//     );
// }
import React from 'react';
import { Link } from 'react-router-dom';
import goalGetter from '../images/goalGetterLogin.png';
import nflRoadmap from '../images/roadTripHome.png';
import memersParadise from '../images/memeStart.png';
import useResponsiveStyles from '../hooks/useResponsiveStyles';

export default function Projects() {
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
    };

    return (
    <div className="content-container" style={styles.container}>
        <h1 style={styles.heading1}>My Projects</h1>
        <div className='project-container'>
        <h4 style={styles.heading4}>Goal Getter</h4>
        <img src={goalGetter} alt="Goal Getter" style={styles.img} />
        <p style={styles.paragraph}>
            This app calculates and displays daily story points, tracks completed vs. remaining points, and shows project status. Built with HTML, CSS, React, and JavaScript, it offers a dynamic user experience and uses RESTful APIs for full CRUD operations to manage user input, data storage, and progress tracking.
        </p>
        <Link to="/projects/goalgetter"><h4 style={styles.heading4} className='details'>View Details</h4></Link>
        </div>
        
        
        <div className='project-container'>
        <h4 style={styles.heading4}>NFL Roadmap</h4>
        <img src={nflRoadmap} alt="NFL Roadmap" style={styles.img} />
        <p style={styles.paragraph}>
            This app features a React client-side interface for planning and documenting NFL venue visits, with Node.js managing server-side data storage and user authentication. Axios handles API requests for real-time NFL data and user content, supporting comments, images, and trip planning links.
        </p>
        <Link to="/projects/nflroadmap"><h4 style={styles.heading4} className='details'>View Details</h4></Link>
        </div>
        <div className='project-container'>
        <h4 style={styles.heading4}>Memer's Paradise</h4>
        <img src={memersParadise} alt="Memer's Paradise" style={styles.img} />
        <p style={styles.paragraph}>
            This web app uses API calls and CSS styling to randomly display meme images. Users can add their own text to the images and save them, with full CRUD operations available for editing and deleting saved memes.
        </p>
        <Link to="/projects/memersparadise"><h4 style={styles.heading4} className='details'>View Details</h4></Link>
        </div>
    </div>
    );
}
