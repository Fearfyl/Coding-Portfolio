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

            {/* Education Section */}
            <div className="education">
                <h3>Education</h3>
                <div className="school">
                    <h4>Certification in Web Development</h4>
                    <p>Rutgers University</p>
                    <p>August 2024 - March 2025</p>
                </div>
            </div>
        </section>
    );
};

export default Resume;
