import React from 'react';

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
            <section className="experience">
                <h2>Experience</h2>
                <p>I have worked on various projects involving full stack development, creating dynamic and responsive web applications. My experience includes working with both front-end and back-end technologies, ensuring seamless integration and performance.</p>
            </section>
            <section className="education">
                <h2>Education</h2>
                <p>I have a Software Engineering certifaction from Rutgers University.</p>
            </section>
            <section className="contact">
                <h2>Contact</h2>
                <p>You can reach me via email at [your-email@example.com] or connect with me on LinkedIn.</p>
            </section>
        </div>
    );
};

export default About;