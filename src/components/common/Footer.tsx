// src/components/Footer.tsx
import React from 'react';
import '../../styles/Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <p>Created with React, Typescript & Tailwind.css | © {new Date().getFullYear()} Tony Korologos. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
