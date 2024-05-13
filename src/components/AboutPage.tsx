// src/components/About.tsx
import React from 'react';
import '../styles/AboutPage.css';

interface AboutProps {
    bio: string;
    skills: string[];
}

const About: React.FC<AboutProps> = ({ bio, skills }) => {
    return (
        <div className="about">
            <p>{bio}</p>
            <ul className="skills-list">
                {skills.map(skill => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default About;
