// import React from 'react';
// import myPicture from '../images/profile.jpg'  

// export default function Home() {
//     return (
//     <div className='content-container'>
//         <h1>Hi! I'm Chance.</h1>
//         <img src={myPicture} />
//         <h4>Full Stack Web Developer</h4>
//         <h4>Dedicated Husband & Father</h4>
//         <h4>Avid World Traveler</h4>    
//         <p>I believe in living a life full of adventure, connection, and creativity. Traveling enriches my soul, spending time with family strengthens my bonds, and being creative fuels my spirit. I explore new destinations and cultures, prioritize meaningful experiences with my loved ones, and constantly seek out ways to express my creativity through various projects and hobbies. I share my journey and inspire others through storytelling, whether it's through travel blogs, family moments, or creative endeavors. My goal is to motivate others to embrace their passions and live a fulfilling life.</p>
//     </div>
//     )
// }
import React from 'react';
import myPicture from '../images/profile.jpg';
import useResponsiveStyles from '../hooks/useResponsiveStyles';

export default function Home() {
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
    <div className='content-container' style={styles.container}>
      <h1 style={styles.heading1}>Hi! I'm Chance.</h1>
      <img src={myPicture} style={styles.img} />
      <h4 style={styles.heading4}>Full Stack Web Developer, Dedicated Husband & Father, and Avid World Traveler</h4>
      <p style={styles.paragraph}>
        I believe in living a life full of adventure, connection, and creativity. Traveling enriches my soul, spending time with family strengthens my bonds, and being creative fuels my spirit. I explore new destinations and cultures, prioritize meaningful experiences with my loved ones, and constantly seek out ways to express my creativity through various projects and hobbies. I share my journey and inspire others through storytelling, whether it's through travel blogs, family moments, or creative endeavors. My goal is to motivate others to embrace their passions and live a fulfilling life.
      </p>
    </div>
  );
}
