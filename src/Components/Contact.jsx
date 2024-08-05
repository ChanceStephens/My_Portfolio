import React from 'react';
import louve from '../images/louve.jpg'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
export default function Contact() {

    return(
        <div className='contact'>
            {/* <h1>Contact Me</h1> */}
            <img src={louve} />
            <a href="https://www.linkedin.com/in/chancestephens/"><img src={linkedin}/></a>
            <a href="https://github.com/ChanceStephens"><img src={github}/></a>
            
            
        </div>
    )
}