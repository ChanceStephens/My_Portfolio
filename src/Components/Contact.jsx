// import React from 'react';
// import louve from '../images/louve.jpg';
// import linkedin from '../images/linkedin2.png';
// import github from '../images/github.png';

// export default function Contact() {
//   const handleLinkedInClick = () => {
//     window.open('https://www.linkedin.com/in/chancestephens/', '_blank', 'noopener,noreferrer');
//   };

//   const handleGitHubClick = () => {
//     window.open('https://github.com/ChanceStephens', '_blank', 'noopener,noreferrer');
//   };

//   return (
//     <div className='content-container'>
//       <h1>Contact Me</h1>
//       <p>I look forward to hearing from you, whether you're looking to build your network, have questions about my work or me, or are interested in having me join your team.</p>
//       <img src={louve} alt="Louve" />
//       <p className='icon-header'>Let's connect on LinkedIn! Click below.</p>
//       <img src={linkedin} alt="LinkedIn Profile" onClick={handleLinkedInClick} style={{ cursor: 'pointer' }} />
//       <p className='icon-header'>Click below to check out my projects on GitHub!</p>
//       <img src={github} alt="GitHub Profile" onClick={handleGitHubClick} style={{ cursor: 'pointer' }} />
//     </div>
//   );
// }

import React from 'react';
import linkedin from '../images/linkedin2.png';
import github from '../images/github.png';
import gmail from '../images/gmail.jpg';
import phone from '../images/phone.avif'
import resume from '../images/resume-icon.png';
import louve from '../images/louve.jpg';
import useResponsiveStyles from '../hooks/useResponsiveStyles';

export default function Contact() {
  const { fontSize, imageSize } = useResponsiveStyles();

  const styles = {
    container: {
      fontSize: fontSize(16),
    },
    img: {
      width: imageSize(10),
    },
    heading1: {
      fontSize: fontSize(6),
    },
    paragraph: {
      fontSize: fontSize(16),
    },
    iconHeader: {
      fontSize: fontSize(20),
    },
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/chancestephens/', '_blank', 'noopener,noreferrer');
  };
  const handleGitHubClick = () => {
    window.open('https://github.com/ChanceStephens', '_blank', 'noopener,noreferrer');
  };
  const handleGmailClick = () => {
    window.location.href = 'mailto:webdev.chance.stephens@gmail.com';
  };
  
  const handlePhoneClick = () => {
    alert('You can reach me at: 702-721-9643');
    // window.location.href = 'tel:7027219643';
  };
  const handleResumeClick = () => {
    window.open('https://docs.google.com/document/d/1Nb5R9jJeHyvu3tM5ademjXlERMZtT9n5DjInhN9Xpj4/edit?usp=drive_link', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='footer'>
    <div className='contact-footer' style={styles.container}>
      <h1 style={styles.heading1}>Contact Me:</h1>
      <img src={linkedin} alt="LinkedIn Profile" onClick={handleLinkedInClick} style={{ ...styles.img, cursor: 'pointer' }} />
      <img src={github} alt="GitHub Profile" onClick={handleGitHubClick} style={{ ...styles.img, cursor: 'pointer' }} />
      <img src={resume} alt="GitHub Profile" onClick={handleResumeClick} style={{ ...styles.img, cursor: 'pointer' }} />
      <img src={gmail} alt="Gmail" onClick={handleGmailClick} style={{ ...styles.img, cursor: 'pointer' }} />
      <img src={phone} alt="Phone Icon" onClick={handlePhoneClick} style={{ ...styles.img, cursor: 'pointer' }} />
    </div>
    </div>
  );
}

