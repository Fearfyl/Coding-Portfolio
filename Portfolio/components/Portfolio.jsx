import React from 'react';

//Add Deployment link to the projects

const Portfolio = () => {
    const projects = [
        {
            name: 'Fearfyl',
            description: 'A horror-themed game developed using Unity.',
            githubLink: 'https://github.com/Fearfyl/Fearfyl'
        },
        {
            name: 'Golden Games',
            description: 'A repository for various game development projects.',
            githubLink: 'https://github.com/Fearfyl/Golden_Games_repo'
        },
        {
            name: 'SkillShare',
            description: 'A platform for sharing and learning new skills.',
            githubLink: 'https://github.com/Fearfyl/SkillShare'
        },
        {
            name: 'GreenSteps',
            description: 'An app promoting eco-friendly habits and sustainability.',
            githubLink: 'https://github.com/Fearfyl/GreenSteps'
        }
    ];

    return (
        <div className="portfolio">
            <h2>My Projects</h2>
            <div className="projects">
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;