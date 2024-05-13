import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Navbar.css';

const NavbarComponent: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); // State to handle menu toggle

    return (
        <nav className="p-4">
            <div className="container mx-auto flex items-center justify-between">
                <NavLink to="/" className="text-white text-lg font-bold">Tony Korologos - Developer Profile</NavLink>
                <button onClick={() => setIsOpen(!isOpen)} className="text-white md:hidden">
                    {isOpen ? (
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.707 5.707a1 1 0 010-1.414L19.414 4l-7 7-7-7-0.707 0.707a1 1 0 010 1.414L11 12l-7.707 7.707a1 1 0 010 1.414L4 21.414l7-7 7 7 0.707-0.707a1 1 0 010-1.414L13 12l7.707-7.707z"/>
                        </svg>
                    ) : (
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4 5h16a1 1 0 100-2H4a1 1 0 100 2zm16 7H4a1 1 0 100 2h16a1 1 0 100-2zm-16 9h16a1 1 0 100-2H4a1 1 0 100 2z"/>
                        </svg>
                    )}
                </button>
                <div className={`${isOpen ? 'flex' : 'hidden'} md:flex md:items-center md:space-x-4 flex-col md:flex-row`}>
                    <NavLink to="/" exact activeClassName="active" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium nav-item">Home</NavLink>
                    <NavLink to="/skills" activeClassName="active" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium nav-item">Skills</NavLink>
                    <NavLink to="/technologies" activeClassName="active" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium nav-item">Technologies</NavLink>
                    {/* <NavLink to="/contact" activeClassName="active" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</NavLink> */}
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;