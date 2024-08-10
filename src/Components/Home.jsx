import React from 'react';
import myPicture from '../images/profile.jpg'  

export default function Home() {
    return (
    <div className='content-container'>
        <h1>Hi! I'm Chance.</h1>
        <img src={myPicture} />
        <h4>Full Stack Web Developer</h4>
        <h4>Dedicated Husband & Father</h4>
        <h4>Avid World Traveler</h4>    
        <p>I believe in living a life full of adventure, connection, and creativity. Traveling enriches my soul, spending time with family strengthens my bonds, and being creative fuels my spirit. I explore new destinations and cultures, prioritize meaningful experiences with my loved ones, and constantly seek out ways to express my creativity through various projects and hobbies. I share my journey and inspire others through storytelling, whether it's through travel blogs, family moments, or creative endeavors. My goal is to motivate others to embrace their passions and live a fulfilling life.</p>
    </div>
    )
}
