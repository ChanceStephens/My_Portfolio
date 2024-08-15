// import React from 'react';
// import dadAndMe from '../images/dadAndMe.jpg'
// export default function About() {

//     return(
//         <div className='content-container'>
//             <h1>Who am I?</h1>
//             <img src={dadAndMe}/>
//             <p>I was born and raised in Eatonton, Georgia. My name, "Chance," often prompts curiosity. My father, who grew up in extreme poverty and lived with Hemophilia, a blood disorder, chose this name for a special reason. His condition and underprivileged circumstances limited him in many ways. When I asked him why he named me "Chance," he explained, "I gave you that name because you have the chance to do all the things I never could." Upon his passing, he made me promise to live up to the name he bestowed upon me. Since then, I have been dedicated to honoring that promise in every way possible.</p>

//             <p>In high school, I excelled both academically and athletically, earning multiple awards in football, baseball, wrestling, and track, including the Coca-Cola Golden Helmet Award in football, all while maintaining a 3.4 GPA. I went on to receive a Bachelor of Business Administration in Management from Georgia Southern University. Over the next 20 years, I gained extensive experience managing teams in various industries, including restaurants, sales, and contract underwriting.</p>

//             <p>In addition to my professional career, I am self-taught in handyman work, small home projects, woodworking, and crafts. I am committed to continuous growth and learning, which led me to pursue web development. This field offers the flexibility to spend more time with my family and travel, while also satisfying my desire to be creative, face new challenges, continue learning, and honor the promise to my father by living up to the name he gave me.</p>
//         </div>
//     )
// }

import React from 'react';
import dadAndMe from '../images/dadAndMe.jpg';
import useResponsiveStyles from '../hooks/useResponsiveStyles';

export default function About() {
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
    paragraph: {
      fontSize: fontSize(3.5),
    },
  };

  return (
    <div className='content-container' style={styles.container}>
      <h1 style={styles.heading1}>Who am I?</h1>
      <img src={dadAndMe} style={styles.img} />
      <p style={styles.paragraph}>
        I was born and raised in Eatonton, Georgia. My name, "Chance," often prompts curiosity. My father, who grew up in extreme poverty and lived with Hemophilia, a blood disorder, chose this name for a special reason. His condition and underprivileged circumstances limited him in many ways. When I asked him why he named me "Chance," he explained, "I gave you that name because you have the chance to do all the things I never could." Upon his passing, he made me promise to live up to the name he bestowed upon me. Since then, I have been dedicated to honoring that promise in every way possible.
      </p>
      <p style={styles.paragraph}>
        In high school, I excelled both academically and athletically, earning multiple awards in football, baseball, wrestling, and track, including the Coca-Cola Golden Helmet Award in football, all while maintaining a 3.4 GPA. I went on to receive a Bachelor of Business Administration in Management from Georgia Southern University. Over the next 20 years, I gained extensive experience managing teams in various industries, including restaurants, sales, and contract underwriting.
      </p>
      <p style={styles.paragraph}>
        In addition to my professional career, I am self-taught in handyman work, small home projects, woodworking, and crafts. I am committed to continuous growth and learning, which led me to pursue web development. This field offers the flexibility to spend more time with my family and travel, while also satisfying my desire to be creative, face new challenges, continue learning, and honor the promise to my father by living up to the name he gave me.
      </p>
    </div>
  );
}
