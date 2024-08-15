// import React from 'react';
// import { Link } from 'react-router-dom';
// import memeStart from '../images/memeStart.png';
// import memeWords from '../images/memeWords.png';
// import memeCollection from '../images/memeCollection.png';
// import memeEdit from '../images/memeEdit.png';

// export default function MemersParadise() {
//     return (
//         <div className="content-container">
//             <Link to="/projects" className="back-to-projects-link">Back to Projects</Link>
//             <h1>Memer's Paradise</h1>
//             {/* <h4>Launch Memer's Paradise</h4> */}
//             <a className="launchLink" href='https://memers-paradise.netlify.app/'>Go to Memer's Paradise</a>
//             <p><span>Technologies Used:</span> <span>Frontend:</span> React, Axios, CSS Styling  </p>
//             <h4>Meme Generator</h4>
//             <img className='project-image' src={memeStart} alt="Meme Start" />
//             <p>Using form inputs in React, users can add their own text to the selected meme image. If they are satisfied with their creation, they can submit the meme to add it to their collection.</p>
//             <img className='project-image' src={memeWords} alt="Meme Words" />
//             <p>When users submit the memes they create using form inputs in React, the memes are added to their collection for future reference and enjoyment.</p>
//             <h4>Meme Collection</h4>
//             <img className='project-image' src={memeCollection} alt="Meme Collection" />
//             <p>When the user submits their meme they created, it is added to thier collection to revisit later.</p>
//             <h4>Meme Editing</h4>
//             <img className='project-image' src={memeEdit} alt="Meme Edit" />
//             <p>If users catch a mistake or want to reword a meme, they can easily click the edit button. If they decide they no longer want the meme, they can delete it. Edited memes are saved back to the collection, while deleted memes are removed from the collection entirely.</p>
//             <Link to="/projects" className="back-to-projects-link">Back to Projects</Link>
//         </div>
//     );
// }
import React from 'react';
import { Link } from 'react-router-dom';
import memeStart from '../images/memeStart.png';
import memeWords from '../images/memeWords.png';
import memeCollection from '../images/memeCollection.png';
import memeEdit from '../images/memeEdit.png';
import useResponsiveStyles from '../hooks/useResponsiveStyles';

export default function MemersParadise() {
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
      <h1 style={styles.heading1}>Memer's Paradise</h1>
      <p style={styles.paragraph}>
        <h4 style={styles.heading4}>Technologies Used:</h4><h4 style={styles.heading4}>Frontend:</h4> React, Axios, CSS Styling
      </p>
      <div className='project-container'>
        <h4 style={styles.heading4}>Meme Generator</h4>
        <img className='project-image' src={memeStart} alt="Meme Start" style={styles.img} />
        <p style={styles.paragraph}>
          Using form inputs in React, users can add their own text to the selected meme image. If they are satisfied with their creation, they can submit the meme to add it to their collection.
        </p>
      </div>
      <div className='project-container'>
        <h4 style={styles.heading4}>Adding Text</h4>
        <img className='project-image' src={memeWords} alt="Meme Words" style={styles.img} />
        <p style={styles.paragraph}>
          When users submit the memes they create using form inputs in React, the memes are added to their collection for future reference and enjoyment.
        </p>
      </div>
      <div className='project-container'>
        <h4 style={styles.heading4}>Meme Collection</h4>
        <img className='project-image' src={memeCollection} alt="Meme Collection" style={styles.img} />
        <p style={styles.paragraph}>
          When the user submits their meme they created, it is added to their collection to revisit later.
        </p>
      </div>
      <div className='project-container'>
        <h4 style={styles.heading4}>Meme Editing</h4>
        <img className='project-image' src={memeEdit} alt="Meme Edit" style={styles.img} />
        <p style={styles.paragraph}>
          If users catch a mistake or want to reword a meme, they can easily click the edit button. If they decide they no longer want the meme, they can delete it. Edited memes are saved back to the collection, while deleted memes are removed from the collection entirely.
        </p>
      </div>
      <a className="launchLink" href='https://memers-paradise.netlify.app/' style={styles.link}>Go to Memer's Paradise</a>
      <Link to="/projects" className="back-to-projects-link" style={styles.link}>Back to Projects</Link>
    </div>
  );
}
