// src/components/Portfolio.tsx
import React from 'react';
import '../styles/PortfolioPage.css';

interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
}

interface PortfolioProps {
    projects: Project[];
}

const PortfolioPage: React.FC<PortfolioProps> = ({ projects }) => {
    return (
        <div className="portfolio">
            {projects.map(project => (
                <div key={project.id} className="project">
                    <img src={project.imageUrl} alt={project.title} />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            ))}
        </div>
    );
};

export default PortfolioPage;
