import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <section className="introduction">
                <h2>Introduction</h2>
                <p>I am a full stack engineer with expertise in Node.js, JavaScript, React, Python, and NoSQL databases. I have a passion for building scalable and efficient web applications.</p>
            </section>
            <section className="skills">
                <h2>Skills</h2>
                <ul>
                    <li>Node.js</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Python</li>
                    <li>NoSQL Databases</li>
                </ul>
            </section>
            <section className="education">
                <h2>Education</h2>
                <p>I have a Software Engineering certification from Rutgers University.</p>
            </section>
            <section className="contact">
                <h2>Contact</h2>
                <p>You can reach me via email at [wadebuchanan18@gmail.com] or connect with me on LinkedIn.</p>
            </section>
        </div>
    );
};

export default About;
