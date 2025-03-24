import React from 'react';
import './Portfolio.css';
import Project from './Project';

const projectData = [
    {
        title: 'Golden Games',
        description: 'A repository for various game development projects.',
        githubLink: 'https://github.com/Fearfyl/Golden_Games_repo',
        deployedLink: 'https://pink727.github.io/Golden_games_repo/',
        image: 'path/to/golden-games-image.jpg'
    },
    {
        title: 'SkillShare',
        description: 'A platform for sharing and learning new skills.',
        githubLink: 'https://github.com/Fearfyl/SkillShare',
        deployedLink: 'https://skillsshareproject.onrender.com',
        image: 'path/to/skillshare-image.jpg'
    },
    {
        title: 'GreenSteps',
        description: 'An app promoting eco-friendly habits and sustainability.',
        githubLink: 'https://github.com/Fearfyl/GreenSteps',
        deployedLink: 'https://greensteps-u62w.onrender.com/',
        image: 'path/to/greensteps-image.jpg'
    }
];

function Portfolio() {
    return (
        <div className="portfolio-section">
            <h2>Portfolio</h2>
            <div className="flex-container">
                {projectData.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        image={project.image}
                        deployedLink={project.deployedLink}
                        githubLink={project.githubLink}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;