// src/components/Contact.tsx
import React, { useState } from 'react';
import '../styles/ContactPage.css';

const ContactPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Email:', email, 'Message:', message);
        // Add your submission logic here (e.g., API call)
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <label>Message:</label>
            <textarea value={message} onChange={e => setMessage(e.target.value)} />
            <button type="submit">Send</button>
        </form>
    );
};

export default ContactPage;
