import React from 'react';
import louve from '../images/louve.jpg';
import linkedin from '../images/linkedin2.png';
import github from '../images/github.png';

export default function Contact() {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/chancestephens/', '_blank', 'noopener,noreferrer');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/ChanceStephens', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='content-container'>
      <h1>Contact Me</h1>
      <p>I look forward to hearing from you, whether you're looking to build your network, have questions about my work or me, or are interested in having me join your team.</p>
      <img src={louve} alt="Louve" />
      <p className='icon-header'>Let's connect on LinkedIn! Click below.</p>
      <img src={linkedin} alt="LinkedIn Profile" onClick={handleLinkedInClick} style={{ cursor: 'pointer' }} />
      <p className='icon-header'>Click below to check out my projects on GitHub!</p>
      <img src={github} alt="GitHub Profile" onClick={handleGitHubClick} style={{ cursor: 'pointer' }} />
    </div>
  );
}