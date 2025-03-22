import React from 'react';
import '../style/resume.css';

const Resume = () => {
    return (
        <section id="resume" className="resume-section">
            <h2>Resume</h2>
            
            {/* Downloadable Resume Link */}
            <div className="resume-download">
                <a href="../assets/resume.docx" download="KResume.pdf" className="btn">
                    Download My Resume
                </a>
            </div>

            {/* Proficiencies List */}
            <div className="proficiencies">
                <h3>Proficiencies</h3>
                <ul>
                    <li>HTML & CSS</li>
                    <li>JavaScript (ES6+)</li>
                    <li>React & React Router</li>
                    <li>Node.js & Express</li>
                    <li>TypeScript</li>
                    <li>PostgreSQL</li>
                    <li>Version Control (Git)</li>
                </ul>
            </div>

            {/* Experience Section */}
            <div className="experience">
                <h3>Experience</h3>
                <div className="job">
                    <h4>Software Engineer</h4>
                    <p>Company Name</p>
                    <p>Jan 2020 - Present</p>
                    <ul>
                        <li>Developed and maintained web applications using React and Node.js.</li>
                        <li>Collaborated with cross-functional teams to define, design, and ship new features.</li>
                        <li>Implemented responsive design and ensured cross-browser compatibility.</li>
                    </ul>
                </div>
                <div className="job">
                    <h4>Frontend Developer</h4>
                    <p>Company Name</p>
                    <p>Jun 2018 - Dec 2019</p>
                    <ul>
                        <li>Built and optimized user interfaces using HTML, CSS, and JavaScript.</li>
                        <li>Worked closely with designers to create visually appealing and user-friendly websites.</li>
                        <li>Maintained code quality and organization through version control systems like Git.</li>
                    </ul>
                </div>
            </div>

            {/* Education Section */}
            <div className="education">
                <h3>Education</h3>
                <div className="school">
                    <h4>Bachelor of Science in Computer Science</h4>
                    <p>University Name</p>
                    <p>Graduated: May 2018</p>
                </div>
            </div>
        </section>
    );
};

export default Resume;