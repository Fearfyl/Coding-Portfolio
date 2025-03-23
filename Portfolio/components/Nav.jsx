import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const projects = [
    { name: 'Project 1', path: '/projects/project1' },
    { name: 'Project 2', path: '/projects/project2' },
    { name: 'Project 3', path: '/projects/project3' },
    // Add more projects here
];

const Nav = () => {
    return (
        <nav>
            <h1>My Projects</h1>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <Link to={project.path}>{project.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;