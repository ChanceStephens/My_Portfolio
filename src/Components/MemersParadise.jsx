import React from 'react';
import { Link } from 'react-router-dom';
import memeStart from '../images/memeStart.png';
import memeWords from '../images/memeWords.png';
import memeCollection from '../images/memeCollection.png';
import memeEdit from '../images/memeEdit.png';

export default function MemersParadise() {
    return (
        <div className="content-container">
            <Link to="/projects" className="back-to-projects-link">Back to Projects</Link>
            <h1>Memer's Paradise</h1>
            <p><span>Technologies Used:</span> <span>Frontend:</span> React, Axios, CSS Styling  </p>
            <h4>Meme Generator</h4>
            <img className='project-image' src={memeStart} alt="Meme Start" />
            <p>Using form inputs in React, users can add their own text to the selected meme image. If they are satisfied with their creation, they can submit the meme to add it to their collection.</p>
            <img className='project-image' src={memeWords} alt="Meme Words" />
            <p>When users submit the memes they create using form inputs in React, the memes are added to their collection for future reference and enjoyment.</p>
            <h4>Meme Collection</h4>
            <img className='project-image' src={memeCollection} alt="Meme Collection" />
            <p>When the user submits their meme they created, it is added to thier collection to revisit later.</p>
            <h4>Meme Editing</h4>
            <img className='project-image' src={memeEdit} alt="Meme Edit" />
            <p>If users catch a mistake or want to reword a meme, they can easily click the edit button. If they decide they no longer want the meme, they can delete it. Edited memes are saved back to the collection, while deleted memes are removed from the collection entirely.</p>
            <Link to="/projects" className="back-to-projects-link">Back to Projects</Link>
        </div>
    );
}
